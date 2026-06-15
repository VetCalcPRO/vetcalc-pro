//========== DATA ==========
var MASTER = (typeof MASTER_DRUG_DB !== 'undefined' ? MASTER_DRUG_DB : []);
var SPECIES = ['犬','猫','ウサギ','フェレット','モルモット','ハリネズミ','ハムスター'];
var CATS = ['循環器','鎮静','鎮痛','麻酔','局所麻酔','緊急・救急','抗生剤','NSAIDs','ステロイド','アレルギー・皮膚科','神経・てんかん','消化器','呼吸器','眼・耳・皮膚','ビタミン・補液','肝臓・代謝','ホルモン','止血・造血・ホルモン','抗真菌薬','駆虫薬','その他'];
var CCOLOR = {'循環器':'#ff453a','鎮静':'#ff9f0a','鎮痛':'#f5c518','麻酔':'#bf5af2','抗生剤':'#4cd4ff','NSAIDs':'#ff6b35','ステロイド':'#e879f9','アレルギー・皮膚科':'#3b82f6','神経・てんかん':'#06b6d4','消化器':'#34c759','呼吸器':'#84cc16','眼・耳・皮膚':'#94a3b8','ビタミン・補液':'#fb923c','肝臓・代謝':'#10b981','ホルモン':'#f472b6','局所麻酔':'#a78bfa','抗真菌薬':'#fbbf24','止血・造血・ホルモン':'#ec4899','緊急・救急':'#ef4444','駆虫薬':'#22c55e','その他':'#6b7590'};
var LS_KEY = 'vetcalc_v4';

var DRUGS = [];
var st = {w:5.0, sp:'犬', q:'', cat:'すべて', cols:2, mode:'injectable'};
var editIdx = -1;

// 動物種ごとの体重記憶（内部はkg）
var LS_W_KEY = 'vetcalc_weights';
// route変更は薬剤名キーの専用オブジェクトで管理（DRUGSリセットに左右されない）
var LS_ROUTE_KEY = 'vetcalc_routes_v2';
var routeOverrides = {}; // { "薬剤名": "oral" | "injectable" | "topical" }


function loadRoutes(){
  try {
    // v2: IDベース
    var raw = localStorage.getItem(LS_ROUTE_KEY);
    if(raw){ var p=JSON.parse(raw); if(p&&typeof p==='object') routeOverrides=p; return; }
    // 旧データ（薬剤名ベース）マイグレーション
    var oldRaw = localStorage.getItem('vetcalc_routes');
    if(oldRaw){
      var oldP=JSON.parse(oldRaw);
      if(oldP&&typeof oldP==='object'){
        var migrated={};
        for(var i=0;i<MASTER.length;i++){
          if(oldP[MASTER[i].name]!==undefined) migrated[MASTER[i].id]=oldP[MASTER[i].name];
        }
        routeOverrides=migrated;
        saveRoutes(); // 新形式で保存
      }
    }
  } catch(e){}
}
function saveRoutes(){ try{ localStorage.setItem(LS_ROUTE_KEY, JSON.stringify(routeOverrides)); }catch(e){} }

// loadData後にrouteOverridesを適用（配列routeも単一値に正規化）
function applyRouteOverrides(){
  for(var i=0;i<DRUGS.length;i++){
    var d=DRUGS[i]; if(!d) continue;
    if(routeOverrides[d.id || d.name] !== undefined){
      d.route = routeOverrides[d.id || d.name];
    }
  }
}

// drugのrouteを取得（overrideを優先）。配列の場合はst.modeを優先して返す
function getRoute(d){
  if(!d) return 'injectable';
  var key = d.id || d.name; // IDがあればID、なければ名前（後方互換）
  var r = routeOverrides[key] !== undefined ? routeOverrides[key] : (d.route || 'injectable');
  if(Array.isArray(r)){
    return r.indexOf(st.mode) >= 0 ? st.mode : r[0];
  }
  return r;
}

// drugが指定modeに対応しているか（配列route対応）
function isRouteMatch(d, mode){
  var r = routeOverrides[d.id || d.name] !== undefined ? routeOverrides[d.id || d.name] : (d.route || 'injectable');
  if(Array.isArray(r)) return r.indexOf(mode) >= 0;
  return r === mode;
}

// 動物種・モード別の用量データを取得（route別ネスト構造と旧フラット構造の両方に対応）
function getSpData(d, sp, mode){
  mode = mode || st.mode;
  if(!d || !d.species) return {};
  var s = d.species[sp];
  if(!s) return {};
  // route別ネスト構造: {injectable:{lo,hi,note}, oral:{lo,hi,note}}
  if(s[mode] && typeof s[mode]==='object' && s[mode].lo !== undefined && s[mode].lo !== null){
    return s[mode];
  }
  // ネストにnoteだけある場合はnoteを引き継ぎつつフラットにフォールバック
  if(s[mode] && typeof s[mode]==='object' && s[mode].note){
    return {lo: s.lo, hi: s.hi, note: s[mode].note};
  }
  // フラット構造（後方互換）
  return s;
}
var spWeights = {犬:5.0, 猫:3.5, ウサギ:2.0, フェレット:1.0, モルモット:0.8, ハリネズミ:0.3, ハムスター:0.1};

function loadWeights(){
  try {
    var raw = localStorage.getItem(LS_W_KEY);
    if(raw){ var p=JSON.parse(raw); if(p&&typeof p==='object') spWeights=p; }
  } catch(e){}
}
function saveWeights(){ try{ localStorage.setItem(LS_W_KEY, JSON.stringify(spWeights)); }catch(e){} }

function switchSpecies(newSp){
  st.sp = newSp;
  st.w = spWeights[newSp] || st.w;
}

// 小型動物はgで入力（内部計算は常にkg）
var SMALL_SP = {モルモット:1, ハリネズミ:1, ハムスター:1};
function isSmall(sp){ return !!SMALL_SP[sp]; }
function dispW(sp, wKg){ return isSmall(sp) ? (wKg*1000).toFixed(0) : wKg.toFixed(1); }
function dispUnit(sp){ return isSmall(sp) ? 'g' : 'kg'; }
function toKg(val, sp){ return isSmall(sp) ? val/1000 : val; }

var MODE_CFG = {
  injectable: {
    label: '💉 注射薬モード',
    desc: '投与量の即時確認 — 体重×用量÷濃度 = mL',
    strip: 'strip-inj',
    btn: 'on-inj',
    logo: 'PRO',
    fab: 'inj'
  },
  oral: {
    label: '💊 内服薬モード',
    desc: '処方時の容量確認 — 体重×用量÷濃度 = mL / または錠数',
    strip: 'strip-ora',
    btn: 'on-ora',
    logo: 'PRO',
    fab: 'ora'
  },
  topical: {
    label: '🧴 外用薬モード',
    desc: '外用・点眼・点耳 — 参照情報を表示',
    strip: 'strip-top',
    btn: 'on-top',
    logo: 'PRO',
    fab: 'top'
  },
  calc: {
    label: '🔢 計算モード',
    desc: '臨床計算・参照ツール',
    strip: 'strip-calc',
    btn: 'on-calc',
    logo: 'CALC',
    fab: 'inj'
  }
};

//========== STORAGE ==========
function dc(x){ return JSON.parse(JSON.stringify(x)); }
function loadData(){
  try {
    var raw = localStorage.getItem(LS_KEY);
    if(raw){
      var p = JSON.parse(raw);
      if(Array.isArray(p) && p.length > 0 && p[0] && p[0].name && p[0].species){
        // MASTERのpdf_url・sourceをマージ（既存データに欠落している場合）
        var masterMap = {};
        for(var i=0;i<MASTER.length;i++) masterMap[MASTER[i].name] = MASTER[i];
        for(var i=0;i<p.length;i++){
          var m = masterMap[p[i].name];
          if(m){
            if(!p[i].pdf_url && m.pdf_url) p[i].pdf_url = m.pdf_url;
            if(!p[i].source && m.source) p[i].source = m.source;
            if(m.ref) p[i].ref = m.ref;
            // concText・species.note は常にMASTERの最新版で上書き（バージョンアップ時の情報更新対応）
            if(m.concText && m.concText !== '記載なし') p[i].concText = m.concText;
            if(!p[i].conc && m.conc) p[i].conc = m.conc;
            if(m.species){
              if(!p[i].species) p[i].species = {};
              var spKeys = Object.keys(m.species);
              for(var k=0;k<spKeys.length;k++){
                var spk = spKeys[k];
                if(!p[i].species[spk]) p[i].species[spk] = {};
                var mn = m.species[spk].note;
                if(mn && mn !== '（記載なし）') p[i].species[spk].note = mn;
              }
            }
          }
        }
        DRUGS=p; return;
      }
    }
  } catch(e){}
  DRUGS = dc(MASTER);
}
function saveData(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(DRUGS)); }catch(e){} }
function wasEdited(d){
  for(var i=0;i<MASTER.length;i++){
    if(MASTER[i].name===d.name) return JSON.stringify(MASTER[i])!==JSON.stringify(d);
  }
  return true;
}

//========== CALC ==========
function calcML(d, sp, w, mode){
  sp=sp||st.sp; w=w||st.w; mode=mode||st.mode;
  if(!d||!d.species) return null;
  var s=getSpData(d, sp, mode);
  if(s.lo!=null && d.conc!=null && d.conc>0){
    var hiVal = s.hi!=null ? s.hi : s.lo;
    var lo=(w*s.lo/d.conc).toFixed(2);
    var hi=(w*hiVal/d.conc).toFixed(2);
    return lo===hi ? lo+' mL' : lo+'〜'+hi+' mL';
  }
  return null;
}
function calcMG(d, sp, w, mode){
  sp=sp||st.sp; w=w||st.w; mode=mode||st.mode;
  if(!d||!d.species) return null;
  var s=getSpData(d, sp, mode);
  if(s.lo==null) return null;
  var hiMg = s.hi!=null ? s.hi : s.lo;
  var lo=(w*s.lo).toFixed(3).replace(/\.?0+$/,'');
  var hi=(w*hiMg).toFixed(3).replace(/\.?0+$/,'');
  return lo===hi ? lo+' mg' : lo+'〜'+hi+' mg';
}

//========== UTILS ==========
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

//========== MODE ==========
function setMode(m){
  st.mode = m;
  st.cat = 'すべて';
  var cfg = MODE_CFG[m];
  // Update mode buttons
  document.getElementById('mInj').className = 'mode-btn' + (m==='injectable' ? ' on-inj' : '');
  document.getElementById('mOra').className = 'mode-btn' + (m==='oral' ? ' on-ora' : '');
  document.getElementById('mTop').className = 'mode-btn' + (m==='topical' ? ' on-top' : '');
  document.getElementById('mCalc').className = 'mode-btn' + (m==='calc' ? ' on-calc' : '');
  // Strip
  document.getElementById('modeStrip').className = 'mode-strip ' + cfg.strip;
  // Desc
  document.getElementById('modeDesc').innerHTML = '<b>' + cfg.label + '</b> &nbsp; ' + cfg.desc;
  // Logo
  document.getElementById('modeLogo').textContent = cfg.logo;
  // FAB
  document.getElementById('fabBtn').className = 'fab ' + cfg.fab;
  // Toggle drug grid vs calc panel
  var isCalc = (m === 'calc');
  var wrapEl = document.querySelector('.wrap');
  var cpEl   = document.getElementById('calcPanel');
  document.getElementById('searchBar').style.display  = isCalc ? 'none' : '';
  document.getElementById('tabrow').style.display     = isCalc ? 'none' : '';
  if(isCalc){
    wrapEl.style.display = 'none';
    cpEl.classList.add('active');
    // ヘッダー実高さを取得してpadding-topを設定
    var hdr = document.querySelector('.hdr');
    cpEl.style.paddingTop = (hdr ? hdr.offsetHeight + 10 : 120) + 'px';
    renderCalcTabs();
    renderCalc();
  } else {
    wrapEl.style.display = '';
    cpEl.classList.remove('active');
    cpEl.style.paddingTop = '';
  }
  if(!isCalc){ renderTabs(); render(); }
}


//========== CALC MODE ==========
var CALC_TOOLS = [
  // タブ: 緊急・処置
  { id:'osmolality',  tab:'⚡ 緊急', icon:'💧', name:'血漿浸透圧',    desc:'Na/K/Glu/BUN → mOsm/L',    ready:true },
  { id:'kp_correct',  tab:'⚡ 緊急', icon:'🧪', name:'K・P補正',      desc:'血清K値 → 添加量・速度',     ready:true },
  { id:'fluid',       tab:'⚡ 緊急', icon:'🚿', name:'輸液量計算',    desc:'体重・脱水% → 輸液速度',     ready:true },
  { id:'choco',       tab:'⚡ 緊急', icon:'🍫', name:'チョコレート中毒',desc:'体重・チョコ量 → リスク判定',ready:true },
  { id:'tablet',  tab:'🔧 ツール', icon:'💊', name:'錠剤分割',     desc:'1回量×回数×日数 → 総錠数', ready:true },
  // タブ: 検査・処置
  { id:'tensilon',    tab:'🧪 検査', icon:'💉', name:'テンシロンテスト',desc:'体重 → エドロホニウム量',   ready:true  },
  { id:'transfusion', tab:'🧪 検査', icon:'🩸', name:'輸血・アルブミン',desc:'体重・Hct/Alb → 必要量',   ready:true },
  { id:'eyedrop',     tab:'🧪 検査', icon:'👁', name:'点眼瓶投薬',    desc:'体重(g) → 投与滴数',         ready:true  },
  // タブ: 参照
  { id:'mlk',         tab:'⚡ 緊急', icon:'💊', name:'MLK CRI',        desc:'体重・速度 → 各薬希釈量',     ready:true },
  { id:'epi',         tab:'⚡ 緊急', icon:'💉', name:'エピネフリンCRI', desc:'体重 → ボスミン希釈量',        ready:true },
  { id:'ppn_dog',     tab:'🧪 検査', icon:'🐕', name:'PPN（犬）',       desc:'体重 → ハイカリック等配合',    ready:true },
  { id:'ppn_cat',     tab:'🧪 検査', icon:'🐈', name:'PPN（猫）',       desc:'体重 → ハイカリック等配合',    ready:true },
  { id:'ccecai',      tab:'🧪 検査', icon:'🐾', name:'慢性腸症スコア',  desc:'CCECAI / CIBDAI',              ready:true },
  { id:'pregnancy',   tab:'📋 参照', icon:'🤰', name:'妊娠診断',        desc:'交配日 → 診断可能日',         ready:true },
  { id:'age',         tab:'📋 参照', icon:'📅', name:'年齢換算',        desc:'動物年齢 → 人間換算',         ready:true },
  { id:'toxdb',       tab:'📋 参照', icon:'☠️', name:'中毒DB',          desc:'原因物質検索',                ready:true },
  // CRI
  { id:'cri_fentanyl',    tab:'💧 CRI', icon:'🟣', name:'フェンタニル',      desc:'5–45 μg/kg/h',         ready:true },
  { id:'cri_morphine',    tab:'💧 CRI', icon:'🟣', name:'モルヒネ',          desc:'0.1 mg/kg/h（犬）',    ready:true },
  { id:'cri_ketamine',    tab:'💧 CRI', icon:'🟡', name:'ケタミン',          desc:'2–5 μg/kg/min',        ready:true },
  { id:'cri_lidocaine',   tab:'💧 CRI', icon:'🟡', name:'リドカイン',        desc:'50–100 μg/kg/min',     ready:true },
  { id:'cri_propofol',    tab:'💧 CRI', icon:'⚪', name:'プロポフォール',    desc:'0.025–0.4 mg/kg/min',  ready:true },
  { id:'cri_dopamine',    tab:'💧 CRI', icon:'🔴', name:'ドパミン',          desc:'2–8 μg/kg/min',        ready:true },
  { id:'cri_dobutamine',  tab:'💧 CRI', icon:'🔴', name:'ドブタミン',        desc:'5–15 μg/kg/min',       ready:true },
  { id:'cri_noradr',      tab:'💧 CRI', icon:'🔴', name:'ノルアドレナリン',  desc:'0.05–1.0 μg/kg/min',   ready:true },
  { id:'cri_furosemide',  tab:'💧 CRI', icon:'🟢', name:'フロセミド',        desc:'1–4 mg/kg/day',        ready:true },
  { id:'cri_metoclo',     tab:'💧 CRI', icon:'🟢', name:'メトクロプラミド',  desc:'1–2 mg/kg/day',        ready:true },
  { id:'cri_insulin',     tab:'💧 CRI', icon:'🟠', name:'インスリン',        desc:'DKA管理',              ready:true },
  // ツール
  { id:'bsa',    tab:'🔧 ツール', icon:'📐', name:'BSA計算',      desc:'体表面積 → 薬用量換算',  ready:true },
  { id:'ddx',    tab:'🔧 ツール', icon:'🔍', name:'鑑別診断',     desc:'症状・検査値から検索',    ready:true },
  { id:'diet',   tab:'🔧 ツール', icon:'🍽', name:'VetCalc Diet', desc:'栄養計算・HMレシピ',      ready:true },
];
var calcTab = '⚡ 緊急';
function renderCalcTabs(){ /* 廃止 */ }
var calcEditMode = false;
function getCalcOrder(){
  try{
    var s=localStorage.getItem('vetcalc_calc_order');
    if(s){
      var saved=JSON.parse(s);
      var allIds=CALC_TOOLS.map(function(t){return t.id;});
      var valid=saved.filter(function(id){return allIds.indexOf(id)>=0;});
      var added=allIds.filter(function(id){return valid.indexOf(id)<0;});
      return valid.concat(added);
    }
  }catch(e){}
  return CALC_TOOLS.map(function(t){return t.id;});
}
function saveCalcOrder(order){
  try{localStorage.setItem('vetcalc_calc_order',JSON.stringify(order));}catch(e){}
}
function getOrderedTools(){
  var order=getCalcOrder();
  return order.map(function(id){return CALC_TOOLS.find(function(t){return t.id===id;});}).filter(Boolean);
}
function calcMoveUp(id){
  var order=getCalcOrder(),i=order.indexOf(id);
  if(i<=0) return;
  var tmp=order[i-1];order[i-1]=order[i];order[i]=tmp;
  saveCalcOrder(order);renderCalc();
}
function calcMoveDown(id){
  var order=getCalcOrder(),i=order.indexOf(id);
  if(i<0||i>=order.length-1) return;
  var tmp=order[i+1];order[i+1]=order[i];order[i]=tmp;
  saveCalcOrder(order);renderCalc();
}
function toggleCalcEdit(){ calcEditMode=!calcEditMode; renderCalc(); }
function renderCalc(){
  var tools=getOrderedTools();
  var editBtn='<button onclick="toggleCalcEdit()" style="background:none;border:1px solid var(--bd);color:var(--mu);font-size:11px;padding:4px 10px;border-radius:20px;cursor:pointer;margin-bottom:8px;">'
    +(calcEditMode?'✅ 完了':'↕ 並替')+'</button>';
  var inner;
  if(calcEditMode){
    var rows=tools.map(function(t,i){
      var first=(i===0),last=(i===tools.length-1);
      return '<div style="display:flex;align-items:center;gap:8px;background:var(--pn);border-left:3px solid var(--calc);border-radius:10px;padding:10px 12px;">'
        +'<span style="font-size:18px;">'+t.icon+'</span>'
        +'<span style="flex:1;font-size:12px;font-weight:700;color:var(--tx);">'+esc(t.name)+'</span>'
        +'<div style="display:flex;flex-direction:column;gap:3px;">'
        +'<button onclick="calcMoveUp(\''+t.id+'\')"'+(first?' disabled':'')
          +' style="background:var(--bg);border:1px solid var(--bd);color:var(--tx);width:28px;height:24px;border-radius:5px;cursor:pointer;font-size:13px;line-height:1;'+(first?'opacity:.25;':'')+'">↑</button>'
        +'<button onclick="calcMoveDown(\''+t.id+'\')"'+(last?' disabled':'')
          +' style="background:var(--bg);border:1px solid var(--bd);color:var(--tx);width:28px;height:24px;border-radius:5px;cursor:pointer;font-size:13px;line-height:1;'+(last?'opacity:.25;':'')+'">↓</button>'
        +'</div></div>';
    }).join('');
    inner='<div style="display:flex;flex-direction:column;gap:6px;">'+rows+'</div>';
  } else {
    var cards=tools.map(function(t){

      return '<div class="calc-card'+(t.ready?'':' wip')+'" onclick="openCalcTool(\''+t.id+'\')">'
        +'<div class="calc-card-icon">'+t.icon+'</div>'
        +'<div class="calc-card-name">'+esc(t.name)+'</div>'
        +'<div class="calc-card-desc">'+esc(t.desc)+'</div>'
        +'</div>';
    }).join('');
    inner='<div class="calc-cards">'+cards+'</div>';
  }
  document.getElementById('calcPanel').innerHTML='<div style="display:flex;justify-content:flex-end;">'+editBtn+'</div>'+inner;
}
function calcTabSwitch(t){ renderCalc(); }
function openCalcTool(id){
  if(id==='osmolality'){ osmoClear(); openSheet('shOsmo'); return; }
  if(id==='kp_correct'){ kpRender(); openSheet('shKP'); return; }
  if(id==='fluid'){ flClear(); openSheet('shFluid'); return; }
  if(id==='choco'){ chocoInit(); openSheet('shChoco'); return; }
  if(id==='tablet'){ tcClear(); openSheet('shTablet'); return; }
  if(id==='transfusion'){ tfClear(); openSheet('shTransfusion'); return; }
  if(id==='tensilon'){ tensilonClear(); openSheet('shTensilon'); return; }
  if(id==='eyedrop'){ edClear(); openSheet('shEyedrop'); return; }
  if(id==='mlk'){ mlkClear(); openSheet('shMLK'); return; }
  if(id==='epi'){ epiClear(); openSheet('shEpi'); return; }
  if(id==='ppn_dog'){ ppnClear('dog'); openSheet('shPPN'); return; }
  if(id==='ppn_cat'){ ppnClear('cat'); openSheet('shPPN'); return; }
  if(id==='pregnancy'){ pregClear(); openSheet('shPreg'); return; }
  if(id==='age'){ ageRender(); openSheet('shAge'); return; }
  if(id==='toxdb'){ toxRender(); openSheet('shTox'); return; }
  if(id==='ccecai'){ ccecaiClear(); openSheet('shCCECAI'); return; }
  if(id==='bsa'){ openBSA(); return; }
  if(id==='ddx'){ openDDx(); return; }
  if(id==='diet'){ openHM(); return; }
  var CRI_MAP = {
    cri_fentanyl:'フェンタニル', cri_morphine:'モルヒネ', cri_ketamine:'ケタミン',
    cri_lidocaine:'リドカイン', cri_propofol:'プロポフォール', cri_dopamine:'ドパミン',
    cri_dobutamine:'ドブタミン', cri_noradr:'ノルアドレナリン', cri_furosemide:'フロセミド',
    cri_metoclo:'メトクロプラミド', cri_insulin:'インスリン'
  };
  if(CRI_MAP[id]){ openCRIFromCalc(CRI_MAP[id]); return; }
  toast('🔧 準備中: '+id);
}

//========== 血漿浸透圧 ==========
function osmoCalc(){
  var na  = parseFloat(document.getElementById('osmoNa').value);
  var k   = parseFloat(document.getElementById('osmoK').value);
  var glu = parseFloat(document.getElementById('osmoGlu').value);
  var bun = parseFloat(document.getElementById('osmoBun').value);
  var hasAll = !isNaN(na) && !isNaN(k) && !isNaN(glu) && !isNaN(bun);
  document.getElementById('osmoResult').style.display = hasAll ? '' : 'none';
  document.getElementById('osmoEmpty').style.display  = hasAll ? 'none' : '';
  if(!hasAll) return;
  // 式① 0.05×Glu + 0.33×BUN
  var v1 = 2*(na+k) + 0.05*glu + 0.33*bun;
  // 式② Glu/18 + BUN/2.8
  var v2 = 2*(na+k) + glu/18 + bun/2.8;
  document.getElementById('osmoVal1').textContent = v1.toFixed(1) + ' mOsm/L';
  document.getElementById('osmoVal2').textContent = v2.toFixed(1) + ' mOsm/L';
  // 判定（式①基準）
  var badge = document.getElementById('osmoBadge');
  var pct;
  if(v1 < 300){
    badge.className='osmo-badge ok'; badge.textContent='◀ 低値 '+v1.toFixed(1)+' mOsm/L（正常域未満）'; pct=v1/500*100;
  } else if(v1 <= 320){
    badge.className='osmo-badge ok'; badge.textContent='✓ 正常 '+v1.toFixed(1)+' mOsm/L'; pct=v1/500*100;
  } else if(v1 <= 350){
    badge.className='osmo-badge wn'; badge.textContent='⚠ 軽度上昇 '+v1.toFixed(1)+' mOsm/L'; pct=v1/500*100;
  } else if(v1 <= 400){
    badge.className='osmo-badge mid'; badge.textContent='⚠⚠ 沈鬱域 '+v1.toFixed(1)+' mOsm/L（>350）'; pct=v1/500*100;
  } else {
    badge.className='osmo-badge dn'; badge.textContent='🚨 昏睡域 '+v1.toFixed(1)+' mOsm/L（>400）'; pct=Math.min(v1/500*100, 99);
  }
  document.getElementById('osmoScaleMarker').style.left = pct.toFixed(1)+'%';
}
function osmoClear(){
  ['osmoNa','osmoK','osmoGlu','osmoBun'].forEach(function(id){ document.getElementById(id).value=''; });
  document.getElementById('osmoResult').style.display='none';
  document.getElementById('osmoEmpty').style.display='';
}

//========== 輸血・アルブミン ==========
function tfCalc(){
  var sp  = document.getElementById('tfSpecies').value;
  var bw  = parseFloat(document.getElementById('tfBW').value);
  var tgt = parseFloat(document.getElementById('tfTargetPCV').value);
  var cur = parseFloat(document.getElementById('tfCurrentPCV').value);
  var don = parseFloat(document.getElementById('tfDonorPCV').value);
  var ok  = !isNaN(bw) && !isNaN(tgt) && !isNaN(cur) && !isNaN(don) && don > 0;
  document.getElementById('tfBloodResult').style.display = ok ? '' : 'none';
  document.getElementById('tfBloodEmpty').style.display  = ok ? 'none' : '';
  if(!ok) return;
  var factor = sp === 'cat' ? 70 : 90;
  var vol = bw * (tgt - cur) / don * factor;
  document.getElementById('tfBloodVal').textContent = (vol < 0 ? '—' : vol.toFixed(1) + ' mL');
  document.getElementById('tfFactor').textContent = factor;
  var maxRate = bw * factor;
  document.getElementById('tfMaxRate').textContent = '最大投与速度: ' + maxRate.toFixed(0) + ' mL/h（' + factor + ' mL/kg/h）';
}
function albCalc(){
  var bw  = parseFloat(document.getElementById('albBW').value);
  var tgt = parseFloat(document.getElementById('albTarget').value);
  var cur = parseFloat(document.getElementById('albCurrent').value);
  var ok  = !isNaN(bw) && !isNaN(tgt) && !isNaN(cur);
  document.getElementById('albResult').style.display = ok ? '' : 'none';
  document.getElementById('albEmpty').style.display  = ok ? 'none' : '';
  if(!ok) return;
  var g   = 10 * (tgt - cur) * bw * 0.3;
  var ml25 = g / 0.25; // 25%製剤のmL換算
  document.getElementById('albVal').textContent = (g <= 0 ? '—' : g.toFixed(1) + ' g');
  document.getElementById('albNote').textContent = g > 0
    ? '25%製剤: ' + ml25.toFixed(1) + ' mL → 生食で10%希釈後、輸血フィルタ経由で12時間投与'
    : '目標ALBが現ALB以上であることを確認してください';
}

//========== 点眼瓶投薬 ==========
var ED_DRUGS = [
  { name:'ラシックス',         dose:2.0,  rows:[
    { label:'20mg錠 1T', perDrop:0.2 },
    { label:'20mg錠 2T', perDrop:0.4 }
  ]},
  { name:'ベナゼプリル',       dose:0.5,  rows:[
    { label:'2.5mg錠 4T', perDrop:0.1 }
  ]},
  { name:'ピモベンダン',       dose:0.25, rows:[
    { label:'1.25mg錠 1T', perDrop:0.0125 },
    { label:'2.5mg錠 1T',  perDrop:0.025  }
  ]},
  { name:'エンロフロキサシン', dose:10,   rows:[
    { label:'150mg錠 1/2T', perDrop:0.75 },
    { label:'150mg錠 1T',   perDrop:1.5  }
  ]},
  { name:'オルビフロキサシン', dose:10,   rows:[
    { label:'10mg錠 2T',  perDrop:0.2 },
    { label:'40mg錠 1T',  perDrop:0.4 }
  ]},
  { name:'トランサミン',       dose:25,   rows:[
    { label:'250mg錠 1/4T', perDrop:0.625 },
    { label:'250mg錠 1/2T', perDrop:1.25  },
    { label:'250mg錠 1T',   perDrop:2.5   }
  ]},
  { name:'クロラムフェニコール',dose:50,  rows:[
    { label:'250mg錠 1T',  perDrop:2.5  },
    { label:'250mg錠 2T',  perDrop:5.0  },
    { label:'250mg錠 3T',  perDrop:7.5  },
    { label:'250mg錠 4T',  perDrop:10.0 }
  ]},
  { name:'フラジール',         dose:20,   rows:[
    { label:'250mg錠 1/8T', perDrop:0.3125 },
    { label:'250mg錠 1/4T', perDrop:0.625  },
    { label:'250mg錠 1/2T', perDrop:1.25   },
    { label:'250mg錠 1T',   perDrop:2.5    }
  ]},
  { name:'メロキシカム',       dose:0.2,  note:'ブドウ糖4ml添加→計5ml', rows:[
    { label:'0.5mg/ml経口液 1ml', perDrop:0.005 }
  ]},
  { name:'プレドニゾロン',     dose:1,    rows:[
    { label:'5mg錠 1T（1mg/kg）', perDrop:0.05 },
    { label:'5mg錠 1T（2mg/kg）', perDrop:0.05, dose2:2 }
  ]},
  { name:'アプシード',         dose:25,   note:'SID', rows:[
    { label:'50mg/ml 原液',    perDrop:0.5  },
    { label:'50mg/ml 2倍希釈', perDrop:0.25 }
  ]}
];

//========== MLK CRI ==========
function mlkCalc(){
  var bw   = parseFloat(document.getElementById('mlkBW').value);
  var rate = parseFloat(document.getElementById('mlkRate').value);
  var vol  = parseFloat(document.getElementById('mlkVol').value);
  var md   = parseFloat(document.getElementById('mlkMDose').value);
  var ld   = parseFloat(document.getElementById('mlkLDose').value);
  var kd   = parseFloat(document.getElementById('mlkKDose').value);
  var ok = !isNaN(bw) && !isNaN(rate) && !isNaN(vol) && bw>0 && rate>0 && vol>0;
  document.getElementById('mlkResult').style.display = ok ? '' : 'none';
  document.getElementById('mlkEmpty').style.display  = ok ? 'none' : '';
  if(!ok) return;
  // Drug vol (ml) = dose(μg/kg/min) × weight × vol(ml) × 60 / (rate(ml/hr) × conc(mg/ml) × 1000)
  var mConc = 15, lConc = 20, kConc = 50;
  var mVol = isNaN(md) ? 0 : md * bw * vol * 60 / (rate * mConc * 1000);
  var lVol = isNaN(ld) ? 0 : ld * bw * vol * 60 / (rate * lConc * 1000);
  var kVol = isNaN(kd) ? 0 : kd * bw * vol * 60 / (rate * kConc * 1000);
  var discard = mVol + lVol + kVol;
  var steps = '';
  steps += '① 輸液バッグ（'+vol+' ml）から <strong>'+discard.toFixed(2)+' ml</strong> を廃棄<br>';
  if(!isNaN(md)) steps += '② モルヒネ（15 mg/ml）を <strong>'+mVol.toFixed(2)+' ml</strong> 添加<br>';
  if(!isNaN(ld)) steps += '③ リドカイン（2%）を <strong>'+lVol.toFixed(2)+' ml</strong> 添加<br>';
  if(!isNaN(kd)) steps += '④ ケタミン（50 mg/ml）を <strong>'+kVol.toFixed(2)+' ml</strong> 添加<br>';
  document.getElementById('mlkSteps').innerHTML = steps;
  var confirm = '';
  confirm += rate+' ml/hr で投与すると:<br>';
  if(!isNaN(md)) confirm += 'モルヒネ: <strong>'+md+' μg/kg/min</strong><br>';
  if(!isNaN(ld)) confirm += 'リドカイン: <strong>'+ld+' μg/kg/min</strong><br>';
  if(!isNaN(kd)) confirm += 'ケタミン: <strong>'+kd+' μg/kg/min</strong>';
  document.getElementById('mlkConfirm').innerHTML = confirm;
}
function mlkClear(){
  ['mlkBW','mlkRate','mlkVol'].forEach(function(id){ document.getElementById(id).value=''; });
  document.getElementById('mlkMDose').value='5';
  document.getElementById('mlkLDose').value='25';
  document.getElementById('mlkKDose').value='2';
  document.getElementById('mlkResult').style.display='none';
  document.getElementById('mlkEmpty').style.display='';
}

//========== エピネフリンCRI ==========
var EPI_RATES = [0.5, 1, 2, 3, 5, 10];
function epiCalc(){
  var bw   = parseFloat(document.getElementById('epiBW').value);
  var dose = parseFloat(document.getElementById('epiDose').value);
  var ok = !isNaN(bw) && !isNaN(dose) && bw>0 && dose>0;
  document.getElementById('epiResult').style.display = ok ? '' : 'none';
  document.getElementById('epiEmpty').style.display  = ok ? 'none' : '';
  if(!ok) return;
  // 50ml シリンジ、1ml/hr で目標用量を達成する添加量
  // addVol(ml) = dose(μg/kg/min) × bw × 60(min/hr) × 50(ml) / (1(ml/hr) × 1000(μg/mg))
  var VOL = 50, BASE_RATE = 1;
  var addVol = dose * bw * 60 * VOL / (BASE_RATE * 1000);
  var conc   = addVol * 1000 / VOL; // μg/ml
  document.getElementById('epiAddVol').textContent  = addVol.toFixed(3);
  document.getElementById('epiConc').textContent    = conc.toFixed(2);
  document.getElementById('epiDoseLabel').textContent = dose;
  // 流量テーブル
  var tbody = document.getElementById('epiTable');
  tbody.innerHTML = EPI_RATES.map(function(r){
    var d = conc * r / bw / 60;
    var hi = (r === BASE_RATE) ? 'font-weight:700;color:var(--calc);' : '';
    return '<tr style="border-top:1px solid var(--bd);">'
      +'<td style="padding:5px 0;'+hi+'">'+r+' ml/hr</td>'
      +'<td style="text-align:right;padding:5px 0;'+hi+'">'+d.toFixed(4)+'</td>'
      +'</tr>';
  }).join('');
}
function epiClear(){
  document.getElementById('epiBW').value = '';
  document.getElementById('epiDose').value = '0.05';
  document.getElementById('epiResult').style.display='none';
  document.getElementById('epiEmpty').style.display='';
}

//========== PPN ==========
var ppnCurrentSp = 'dog';
var PPN_PROT = {
  dog: [{label:'成獣 4 g/100kcal',val:4},{label:'腎疾患 1.5 g/100kcal',val:1.5},{label:'高要求 6 g/100kcal',val:6}],
  cat: [{label:'成獣 6 g/100kcal',val:6},{label:'腎疾患 3 g/100kcal',val:3}]
};
function ppnClear(sp){
  ppnCurrentSp = sp || 'dog';
  document.getElementById('ppnTitle').innerHTML = '🍼 PPN（'+(sp==='cat'?'猫':'犬')+'） <button class="shx" onclick="closeAll()">&#215;</button>';
  document.getElementById('ppnBW').value='';
  document.getElementById('ppnIF').value='1.0';
  document.getElementById('ppnProt').value='';
  document.getElementById('ppnGluSel').value='50';
  document.getElementById('ppnAASel').value='84.3';
  // populate protein options
  var sel = document.getElementById('ppnProtSel');
  sel.innerHTML = '<option value="">選択</option>';
  PPN_PROT[sp].forEach(function(p){
    var opt = document.createElement('option');
    opt.value = p.val; opt.textContent = p.label;
    sel.appendChild(opt);
  });
  document.getElementById('ppnResult').style.display='none';
  document.getElementById('ppnEmpty').style.display='';
}
function ppnProtSelect(){
  var v = document.getElementById('ppnProtSel').value;
  if(v) document.getElementById('ppnProt').value = v;
  ppnCalc();
}
function ppnAASelect(){
  ppnCalc();
}
function ppnCalc(){
  var bw   = parseFloat(document.getElementById('ppnBW').value);
  var IF   = parseFloat(document.getElementById('ppnIF').value) || 1.0;
  var prot = parseFloat(document.getElementById('ppnProt').value);
  var aaConc = parseFloat(document.getElementById('ppnAASel').value);
  var gluR = parseFloat(document.getElementById('ppnGluSel').value) / 100;
  var aaLabel = document.getElementById('ppnAASel').options[document.getElementById('ppnAASel').selectedIndex].text.split('®')[0]+'®';
  document.getElementById('ppnAALabel').textContent = aaLabel;
  if(isNaN(bw)||bw<=0){ document.getElementById('ppnResult').style.display='none'; document.getElementById('ppnEmpty').style.display=''; return; }
  var RER = ppnCurrentSp === 'cat' ? 70 * Math.pow(bw, 0.75) : 30 * bw + 70;
  var TER = RER * IF;
  document.getElementById('ppnRER').textContent = RER.toFixed(1);
  document.getElementById('ppnTER').textContent = TER.toFixed(1);
  var hai = TER * gluR / 1.0;          // ハイカリック 1kcal/ml
  var lip = TER * (1-gluR) / 2.0;      // 20% イントラリポス 2kcal/ml
  var aa  = isNaN(prot)||isNaN(aaConc) ? 0 : TER * prot / 100 * 1000 / aaConc;
  var vit = TER / 400;
  var total = hai + lip + aa + vit;
  document.getElementById('ppnHai').textContent    = hai.toFixed(1)+' ml';
  document.getElementById('ppnAA').textContent     = aa.toFixed(1)+' ml';
  document.getElementById('ppnLip').textContent    = lip.toFixed(1)+' ml';
  document.getElementById('ppnVit').textContent    = vit.toFixed(3)+' ml';
  document.getElementById('ppnTotal').textContent  = total.toFixed(1)+' ml';
  document.getElementById('ppnRateOut').textContent= (total/24).toFixed(2)+' ml/hr';
  document.getElementById('ppnResult').style.display='';
  document.getElementById('ppnEmpty').style.display='none';
}

//========== 妊娠診断 ==========
var PREG_SP = 'dog';
var PREG_DATA = {
  dog:    { echo:21, xray:45, birth:63, name:'犬' },
  cat:    { echo:19, xray:40, birth:65, name:'猫' },
  rabbit: { echo:6,  xray:null, birth:31, name:'ウサギ' }
};
function pregSetSp(sp){
  PREG_SP = sp;
  ['dog','cat','rabbit'].forEach(function(s){
    document.getElementById('pregSp'+s.charAt(0).toUpperCase()+s.slice(1)).classList.toggle('on', s===sp);
  });
  // fix button IDs
  document.getElementById('pregSpDog').classList.toggle('on', sp==='dog');
  document.getElementById('pregSpCat').classList.toggle('on', sp==='cat');
  document.getElementById('pregSpRab').classList.toggle('on', sp==='rabbit');
  pregCalc();
}
function pregClear(){
  PREG_SP = 'dog';
  document.getElementById('pregSpDog').classList.add('on');
  document.getElementById('pregSpCat').classList.remove('on');
  document.getElementById('pregSpRab').classList.remove('on');
  document.getElementById('pregDate').value = '';
  document.getElementById('pregResult').style.display='none';
  document.getElementById('pregEmpty').style.display='';
}
function pregCalc(){
  var d = document.getElementById('pregDate').value;
  if(!d){ document.getElementById('pregResult').style.display='none'; document.getElementById('pregEmpty').style.display=''; return; }
  var base = new Date(d);
  var pd = PREG_DATA[PREG_SP];
  function addDays(dt, n){ var r = new Date(dt); r.setDate(r.getDate()+n); return r; }
  function fmt(dt){ return dt.getFullYear()+'/'+(dt.getMonth()+1).toString().padStart(2,'0')+'/'+dt.getDate().toString().padStart(2,'0'); }
  var rows = '';
  rows += '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.08);">'
    +'<span style="font-size:12px;color:var(--mu);">交配日</span>'
    +'<strong style="font-size:13px;">'+fmt(base)+'</strong></div>';
  rows += '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.08);">'
    +'<span style="font-size:12px;color:var(--mu);">🔊 超音波診断可能（+'+pd.echo+'日）</span>'
    +'<strong style="font-size:13px;color:#74b9ff;">'+fmt(addDays(base,pd.echo))+'</strong></div>';
  if(pd.xray){
    rows += '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.08);">'
      +'<span style="font-size:12px;color:var(--mu);">☢️ X線診断可能（+'+pd.xray+'日）</span>'
      +'<strong style="font-size:13px;color:#fdcb6e;">'+fmt(addDays(base,pd.xray))+'</strong></div>';
  }
  rows += '<div style="display:flex;justify-content:space-between;padding:5px 0;">'
    +'<span style="font-size:12px;color:var(--mu);">🐣 分娩予定（+'+pd.birth+'日）</span>'
    +'<strong style="font-size:13px;color:#00b894;">'+fmt(addDays(base,pd.birth))+'</strong></div>';
  if(PREG_SP==='rabbit'){
    var hb18 = addDays(base,18);
    rows += '<div style="font-size:11px;color:var(--mu);margin-top:6px;">※交配後6日頃から子宮腔の円形腫大を確認。'+fmt(hb18)+'（18日）以降、胎仔の心拍確認・生死判定可。</div>';
  }
  document.getElementById('pregRows').innerHTML = rows;
  document.getElementById('pregResult').style.display='';
  document.getElementById('pregEmpty').style.display='none';
}

//========== 年齢換算 ==========
var AGE_TABLE = {
  dog_sm: [
    {animal:'1ヶ月',human:1},{animal:'3ヶ月',human:5},{animal:'6ヶ月',human:9},{animal:'9ヶ月',human:13},
    {animal:'1歳',human:17},{animal:'1歳6ヶ月',human:20},{animal:'2歳',human:24},{animal:'3歳',human:28},
    {animal:'4歳',human:32},{animal:'5歳',human:36},{animal:'6歳',human:40},{animal:'7歳',human:44},
    {animal:'8歳',human:48},{animal:'9歳',human:52},{animal:'10歳',human:56},{animal:'11歳',human:60},
    {animal:'12歳',human:64},{animal:'13歳',human:68},{animal:'14歳',human:72},{animal:'15歳',human:76},
    {animal:'16歳',human:80},{animal:'17歳',human:84},{animal:'18歳',human:88},{animal:'19歳',human:92}
  ],
  dog_md: [
    {animal:'1ヶ月',human:1},{animal:'3ヶ月',human:5},{animal:'6ヶ月',human:9},{animal:'9ヶ月',human:13},
    {animal:'1歳',human:17},{animal:'1歳6ヶ月',human:20},{animal:'2歳',human:23},{animal:'3歳',human:28},
    {animal:'4歳',human:33},{animal:'5歳',human:38},{animal:'6歳',human:43},{animal:'7歳',human:48},
    {animal:'8歳',human:53},{animal:'9歳',human:58},{animal:'10歳',human:63},{animal:'11歳',human:68},
    {animal:'12歳',human:73},{animal:'13歳',human:78},{animal:'14歳',human:83},{animal:'15歳',human:88},
    {animal:'16歳',human:93},{animal:'17歳',human:98},{animal:'18歳',human:103},{animal:'19歳',human:108}
  ],
  dog_lg: [
    {animal:'1歳',human:12},{animal:'2歳',human:19},{animal:'3歳',human:26},{animal:'4歳',human:33},
    {animal:'5歳',human:44},{animal:'6歳',human:47},{animal:'7歳',human:54},{animal:'8歳',human:61},
    {animal:'9歳',human:68},{animal:'10歳',human:75},{animal:'11歳',human:82},{animal:'12歳',human:89},
    {animal:'13歳',human:96},{animal:'14歳',human:103}
  ],
  cat: [
    {animal:'1ヶ月',human:1},{animal:'3ヶ月',human:5},{animal:'6ヶ月',human:9},{animal:'9ヶ月',human:13},
    {animal:'1歳',human:17},{animal:'1歳6ヶ月',human:20},{animal:'2歳',human:24},{animal:'3歳',human:28},
    {animal:'4歳',human:32},{animal:'5歳',human:36},{animal:'6歳',human:40},{animal:'7歳',human:44},
    {animal:'8歳',human:48},{animal:'9歳',human:52},{animal:'10歳',human:56},{animal:'11歳',human:60},
    {animal:'12歳',human:64},{animal:'13歳',human:68},{animal:'14歳',human:72},{animal:'15歳',human:76},
    {animal:'16歳',human:80},{animal:'17歳',human:84},{animal:'18歳',human:88},{animal:'19歳',human:92}
  ]
};
var AGE_SP_LABELS = { dog_sm:'犬（小型）', dog_md:'犬（中型）', dog_lg:'犬（大型）', cat:'猫' };
function ageRender(){
  ageUpdate();
}
function ageUpdate(){
  var sp = document.getElementById('ageSp').value;
  var sel = document.getElementById('ageVal');
  sel.innerHTML = '<option value="">選択してください</option>';
  (AGE_TABLE[sp]||[]).forEach(function(row){
    var opt = document.createElement('option');
    opt.value = row.human;
    opt.setAttribute('data-animal', row.animal);
    opt.textContent = row.animal;
    sel.appendChild(opt);
  });
  document.getElementById('ageResult').style.display='none';
  document.getElementById('ageEmpty').style.display='';
  // 早見表更新
  var titleEl = document.getElementById('ageTblTitle');
  var tbody = document.getElementById('ageTblBody');
  if(titleEl) titleEl.textContent = '早見表（'+AGE_SP_LABELS[sp]+'）';
  if(tbody){
    tbody.innerHTML = (AGE_TABLE[sp]||[]).map(function(row,i){
      var bg = i%2===0 ? 'background:rgba(255,255,255,.03);' : '';
      return '<tr style="'+bg+'">'
        +'<td style="text-align:center;padding:5px 4px;border-bottom:1px solid rgba(255,255,255,.05);">'+row.animal+'</td>'
        +'<td style="text-align:center;padding:5px 4px;border-bottom:1px solid rgba(255,255,255,.05);color:#74b9ff;font-weight:600;">'+row.human+'歳</td>'
        +'</tr>';
    }).join('');
  }
}
function ageShowResult(){
  var sp = document.getElementById('ageSp').value;
  var sel = document.getElementById('ageVal');
  var opt = sel.options[sel.selectedIndex];
  if(!opt||!opt.value){ document.getElementById('ageResult').style.display='none'; document.getElementById('ageEmpty').style.display=''; return; }
  document.getElementById('ageSpLabel').textContent = AGE_SP_LABELS[sp];
  document.getElementById('ageAnimal').textContent  = opt.getAttribute('data-animal');
  document.getElementById('ageHuman').textContent   = opt.value;
  document.getElementById('ageResult').style.display='';
  document.getElementById('ageEmpty').style.display='none';
}
function ageSpSelect(el, sp){
  document.querySelectorAll('.age-sp-btn').forEach(function(b){ b.classList.remove('on'); });
  el.classList.add('on');
  document.getElementById('ageSp').value = sp;
  ageUpdate();
}
function ageSetMode(mode){
  var isAge = mode==='age';
  document.getElementById('ageInputAge').style.display = isAge ? '' : 'none';
  document.getElementById('ageInputDate').style.display = isAge ? 'none' : '';
  document.getElementById('ageModeAge').style.background = isAge ? 'var(--ac)' : 'transparent';
  document.getElementById('ageModeAge').style.color = isAge ? '#fff' : 'var(--mu)';
  document.getElementById('ageModeAge').style.borderColor = isAge ? 'var(--ac)' : 'var(--bd)';
  document.getElementById('ageModeDate').style.background = isAge ? 'transparent' : 'var(--ac)';
  document.getElementById('ageModeDate').style.color = isAge ? 'var(--mu)' : '#fff';
  document.getElementById('ageModeDate').style.borderColor = isAge ? 'var(--bd)' : 'var(--ac)';
  document.getElementById('ageResult').style.display='none';
  document.getElementById('ageEmpty').style.display='';
}
function ageCalcFromDate(){
  var sp = document.getElementById('ageSp').value;
  var val = document.getElementById('ageBirthDate').value;
  if(!val){ document.getElementById('ageResult').style.display='none'; document.getElementById('ageEmpty').style.display=''; return; }
  var birth = new Date(val);
  var now = new Date();
  var years = (now - birth) / (1000*60*60*24*365.25);
  var table = AGE_TABLE[sp]||[];
  var best = table[0];
  var bestDiff = Infinity;
  table.forEach(function(row){
    var y = ageAnimalToYears(row.animal);
    var diff = Math.abs(y - years);
    if(diff < bestDiff){ bestDiff=diff; best=row; }
  });
  document.getElementById('ageSpLabel').textContent = AGE_SP_LABELS[sp];
  var ageStr = years < 1
    ? Math.round(years*12)+'ヶ月'
    : (Math.floor(years*10)/10)+'歳';
  document.getElementById('ageAnimal').textContent = ageStr;
  document.getElementById('ageHuman').textContent = best.human;
  document.getElementById('ageResult').style.display='';
  document.getElementById('ageEmpty').style.display='none';
}
function ageAnimalToYears(label){
  var m = label.match(/(\d+)ヶ月/);
  if(m) return parseInt(m[1])/12;
  var y = label.match(/^(\d+)歳/);
  var mo = label.match(/(\d+)ヶ月$/);
  var yy = y ? parseInt(y[1]) : 0;
  var mm = mo ? parseInt(mo[1])/12 : 0;
  return yy + mm;
}

//========== 中毒DB ==========
var TOX_DB = [
  { name:'エチレングリコール', icon:'🧪', tags:['不凍液','antifreeze'],
    body:'<strong>解毒剤：エタノール（7%溶液）</strong><br><br>'
    +'<strong>調製：</strong>使用するアルコール濃度で7を割る（例: 70%→7/70=0.1）。<br>'
    +'1000 ml 輸液から算出量分を抜き、同量のアルコールを加える（500 ml でも同様）。<br><br>'
    +'<strong>投与：</strong><br>'
    +'① 初回: <strong>600 mg/kg（≈8.6 ml/kg）緩徐 IV</strong><br>'
    +'② 維持: <strong>CRI 100 mg/kg/hr（≈1.43 ml/kg/hr）</strong><br>'
    +'③ 腹膜透析併用時: <strong>CRI 200 mg/kg/hr（≈2.86 ml/kg/hr）</strong><br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤○' },
  { name:'タマネギ中毒', icon:'🧅', tags:['玉ねぎ','ネギ','ニラ','ニンニク','allium'],
    body:'<strong>致死量（犬）: 15〜20 g/kg</strong><br><br>'
    +'ハインツ小体性溶血性貧血を引き起こす。<br>'
    +'摂取後24〜48時間以内に症状が出ることが多い。<br><br>'
    +'<strong>症状：</strong>嘔吐、下痢、虚脱、蒼白、タコグラフ様赤血球<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×（対症療法）' },
  { name:'メタアルデヒド', icon:'🐌', tags:['ナメクジ','殺虫剤','農薬'],
    body:'<strong>ナメクジ駆除剤</strong>（においが良く犬が摂取しやすい）<br><br>'
    +'アセトアルデヒドが産生され、代謝性アシドーシスを引き起こす。<br>'
    +'摂取後 <strong>15分〜3時間</strong> で症状発現。<br><br>'
    +'<strong>症状：</strong><br>'
    +'初期: 頻脈・不安・眼振（猫に多い）・散瞳・流涎・運動失調・嘔吐<br>'
    +'中期: 筋肉振戦・下痢・痙攣<br>'
    +'後期: 痙攣・体温>42.2℃・呼吸不全・チアノーゼ・昏睡・死<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×（アシドーシス補正の輸液）' },
  { name:'有機リン・カーバメート', icon:'🌿', tags:['農薬','殺虫剤','pesticide'],
    body:'<strong>農薬成分。アセチルコリンエステラーゼを阻害</strong><br>'
    +'（有機リン: 不可逆的 / カーバメート: 可逆的）<br><br>'
    +'<strong>コリン作動性症状（SLUDGE）：</strong><br>'
    +'流涎・流涙・排尿/便・呼吸困難・嘔吐・徐脈・縮瞳<br><br>'
    +'<strong>ニコチン作動性症状：</strong><br>'
    +'筋線維束性攣縮・衰弱/麻痺・痙攣・不安・呼吸不全<br><br>'
    +'<strong>解毒剤：アトロピン</strong>（コリン作動性症状に）± <strong>PAM</strong>（有機リンのみ）<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤○' },
  { name:'ワルファリン（抗凝固剤）', icon:'🐀', tags:['殺鼠剤','ロデントサイド','rat poison'],
    body:'<strong>殺鼠剤成分。ビタミンK障害 → 止血因子産生障害</strong><br><br>'
    +'初期症状は摂取後 <strong>3日後</strong> から現れることがある。<br><br>'
    +'<strong>症状：</strong>呼吸困難・貧血・衰弱・蒼白・出血傾向・肝壊死<br><br>'
    +'<strong>診断：</strong>PT/APTT延長（外部委託）<br><br>'
    +'<strong>解毒剤：ビタミンK₁（注射・経口）→ 1ヶ月以上継続</strong><br><br>'
    +'※最近はビタミンD障害を起こす第二世代抗凝固剤の殺鼠剤も存在。<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤○' },
  { name:'アスピリン', icon:'💊', tags:['NSAIDs','解熱剤','鎮痛剤','aspirin'],
    body:'<strong>人間の鎮痛・解熱剤成分。猫は特に代謝能力が低い。</strong><br><br>'
    +'摂取後 <strong>4〜6時間</strong> で症状発現。プロスタグランジン生成阻害。<br><br>'
    +'<strong>症状：</strong>抑鬱・嘔吐・食欲不振・胃腸出血・赤血球ハインツ小体・肝炎・嗜眠<br>'
    +'（高用量）呼吸抑制・電解質異常・発熱・昏睡・死<br><br>'
    +'<strong>治療：</strong>輸液・利尿・電解質補正 + 胃粘膜保護剤・活性炭<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤○' },
  { name:'アセトアミノフェン', icon:'💊', tags:['パラセタモール','風邪薬','acetaminophen','tylenol'],
    body:'<strong>人間の風邪薬成分。猫は特に分解能力が低い。</strong><br><br>'
    +'代謝にグルタチオンを消耗→枯渇（猫で特に顕著）。<br><br>'
    +'<strong>症状：</strong>チアノーゼ・呼吸困難・顔面浮腫・抑うつ・低体温・嘔吐<br>'
    +'肝酵素上昇・<strong>メトヘモグロビン血症</strong>・衰弱・昏睡・死<br><br>'
    +'<strong>解毒：</strong>NAC（グルタチオン補充） + ビタミンC + 胃粘膜保護剤<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤○' },
  { name:'しょうのう（カンファー）', icon:'🌿', tags:['防虫剤','camphor','樟脳'],
    body:'<strong>防虫剤の一種。</strong><br><br>'
    +'<strong>⚠️ 催吐禁忌（痙攣誘発）、牛乳禁忌</strong><br><br>'
    +'<strong>症状：</strong>発症まで5〜90分。嘔吐・興奮・痙攣・肝障害・腎障害<br><br>'
    +'催吐×（痙攣誘発）　胃洗浄○　活性炭○　解毒剤×' },
  { name:'石油製品（灯油・ガソリン・シンナー・ベンジン）', icon:'⛽', tags:['kerosene','petroleum','有機溶剤','炭化水素'],
    body:'<strong>石油系炭化水素製品。</strong><br><br>'
    +'<strong>⚠️ 催吐禁忌（誤嚥性肺炎）、牛乳禁忌</strong><br><br>'
    +'<strong>症状：</strong>嘔吐・下痢・皮膚炎<br>'
    +'吐いた際に気管に入ると化学性肺炎を起こす → 催吐は絶対禁忌<br><br>'
    +'催吐×　胃洗浄×　活性炭×　解毒剤×（対症療法）' },
  { name:'ナフタリン', icon:'🔵', tags:['防虫剤','naphthalene','防虫球'],
    body:'<strong>防虫剤の一種。毒性は高い。</strong><br><br>'
    +'<strong>⚠️ 催吐禁忌、牛乳禁忌</strong><br><br>'
    +'1〜2日後から発症することもある。<br><br>'
    +'<strong>症状：</strong>嘔吐・下痢・発熱・腎障害・溶血・メトヘモグロビン血症・独特のにおい<br><br>'
    +'催吐×　胃洗浄○　活性炭○　解毒剤×' },
  { name:'鉛中毒', icon:'🔩', tags:['重金属','lead','釣り重り'],
    body:'<strong>釣り重り・カーテンの重しなどに使用。誤食による中毒。</strong><br><br>'
    +'症状は摂取後 <strong>3〜15日以内</strong> に現れる。<br><br>'
    +'<strong>症状：</strong>消化器症状・神経症状・有核赤血球・好塩基性斑点<br><br>'
    +'<strong>治療：</strong>キレート剤（重金属吸着薬）投与<br><br>'
    +'催吐○　胃洗浄○　活性炭×　解毒剤×（キレート剤）' },
  { name:'ハチ刺傷', icon:'🐝', tags:['bee','wasp','蜂','アナフィラキシー'],
    body:'<strong>ホスホリパーゼ・ヒアルロニダーゼなどによるアレルギー・炎症反応。</strong><br><br>'
    +'<strong>症状：</strong>局所炎症・疼痛・<strong>アナフィラキシーショック（30分以内）</strong><br><br>'
    +'<strong>⚠️ ミツバチは毒針が残る</strong> → 手でつままず針と毒袋の間を掴むか、鋭利なものでかき出す<br><br>'
    +'<strong>治療：</strong>ステロイド・抗ヒスタミン薬<br><br>'
    +'催吐×　胃洗浄×　活性炭×　解毒剤×' },
  { name:'パラコート', icon:'🌾', tags:['除草剤','herbicide','農薬'],
    body:'<strong>除草剤。肺でフリーラジカルが産生 → 肺障害。</strong><br><br>'
    +'<strong>⚠️ 酸素投与禁忌（活性酸素が増加し悪化）</strong><br><br>'
    +'症状は暴露後 <strong>1〜3日後</strong> に遅れて出現。<br><br>'
    +'<strong>症状：</strong>興奮・痙攣・嘔吐・下痢・呼吸困難・嗜眠<br>'
    +'呼吸器症状: 2〜7日後 → 肺線維症・肺水腫・浅速呼吸<br>'
    +'予後不良<br><br>'
    +'催吐○　胃洗浄○　活性炭？　解毒剤×' },
  { name:'パラジクロロベンゼン', icon:'🔵', tags:['防虫剤','dichlorobenzene','防虫球'],
    body:'<strong>ベンゼン化合物系防虫剤。</strong><br><br>'
    +'<strong>⚠️ 催吐禁忌、牛乳禁忌（吸収を助長）</strong><br><br>'
    +'<strong>症状：</strong>神経興奮・痙攣・嘔吐・特有の臭い<br>'
    +'代謝産物フェノールによる肝毒性<br><br>'
    +'催吐×　胃洗浄○　活性炭○　解毒剤×' },
  { name:'ピレスリン・ピレスロイド', icon:'🦟', tags:['殺虫剤','pyrethrin','除虫菊','フロントライン'],
    body:'<strong>殺虫剤に最も広く使われる成分（天然: ピレスリン / 合成: ピレスロイド）。</strong><br><br>'
    +'通常量では毒性低い。同系統薬の重複使用・脂溶性・有機リン同時摂取で毒性増加。<br>'
    +'発症は摂取後 <strong>1〜3時間以内</strong>。<br><br>'
    +'<strong>症状：</strong>抑鬱・流涎・筋肉振戦・嘔吐・運動失調・呼吸困難・食欲不振<br>'
    +'猫: 耳介・肢を振る、皮膚表面の痙攣<br><br>'
    +'<strong>処置：</strong>ぬるま湯で体表洗浄。石油含有製品の場合は催吐禁忌。<br><br>'
    +'催吐？　胃洗浄○　活性炭○　解毒剤×' },
  { name:'ホウ酸塩', icon:'🟡', tags:['ホウ酸ダンゴ','ゴキブリ駆除','boric acid'],
    body:'<strong>ホウ酸ダンゴに含まれる成分。人間の子どもや犬の誤食が多い。</strong><br><br>'
    +'<strong>症状：</strong>流涎・下痢・腹痛・頭側腹部圧痛・運動失調・知覚過敏<br>'
    +'振戦・筋力低下・腎毒性・痙攣・昏睡・死<br>'
    +'（中枢神経症状は後から出現することあり）<br><br>'
    +'<strong>治療：</strong>皮膚洗浄 + 利尿促進による排出<br><br>'
    +'催吐○　胃洗浄○　活性炭×　解毒剤×' },
  { name:'マムシ咬傷', icon:'🐍', tags:['蛇','snake','ヘビ','毒蛇'],
    body:'<strong>出血毒・溶血毒。犬は比較的抵抗性あり、死に至ることは少ない。</strong><br><br>'
    +'毒成分: ヒアルロニダーゼ・ホスホリパーゼA・ポリペプチド（心毒性・神経毒性）<br><br>'
    +'咬傷後 <strong>1〜2時間</strong> で皮下出血・腫脹・浮腫。その後壊死・潰瘍になることも。<br><br>'
    +'<strong>症状：</strong>低血圧・局所浮腫・斑状出血・疼痛・電解質異常・抗凝血/凝血（肝・腎不全）<br><br>'
    +'<strong>処置：</strong>可能なら切開・吸引。安静保持。<br>'
    +'<strong>治療：</strong>ステロイド・抗ヒスタミン薬。傷口の壊死に注意。解毒剤（抗毒素）あり。<br><br>'
    +'催吐×　胃洗浄×　活性炭×　解毒剤○（抗毒素）' },
  { name:'ユリ中毒（猫）', icon:'🌸', tags:['lily','ユリ','ワスレグサ','チューリップ','ヒヤシンス','腎不全'],
    body:'<strong>⚠️ 猫限定の致死的中毒。犬には毒性なし。</strong><br><br>'
    +'真正ユリ属（Lilium）・ワスレグサ属（Hemerocallis）が主な原因。<br>'
    +'花粉・葉・茎・根・花びら・<strong>活け花の水</strong>すべて有毒。<br><br>'
    +'<strong>症状：</strong>摂取後2時間以内に嘔吐・流涎・食欲不振<br>'
    +'→ 12〜24時間後に急性腎不全（多飲多尿→乏尿→無尿）<br>'
    +'→ 無治療では24〜72時間で死亡しうる<br><br>'
    +'<strong>⚠️ 18時間以内の積極的輸液（48〜72時間）が予後を左右する</strong><br><br>'
    +'<strong>治療：</strong>催吐 + 活性炭 + 大量輸液（利尿） + BUN/Cre毎日モニタリング<br>'
    +'解毒剤なし。腎不全が確立すると予後不良。<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×' },
  { name:'キシリトール（犬）', icon:'🍬', tags:['xylitol','ガム','歯磨き粉','低血糖','肝不全'],
    body:'<strong>人工甘味料。ガム・菓子・歯磨き粉・PB食品に広く使用。猫への毒性は低い。</strong><br><br>'
    +'犬では膵臓からのインスリン大量分泌を誘発 → 急激な低血糖。<br>'
    +'高用量では肝細胞壊死（摂取量依存）。<br><br>'
    +'<strong>摂取量目安：</strong><br>'
    +'低血糖リスク: 0.1 g/kg以上<br>'
    +'肝不全リスク: 0.5 g/kg以上<br><br>'
    +'<strong>症状：</strong>摂取後30〜60分で嘔吐・虚脱・ふらつき・痙攣（低血糖）<br>'
    +'12〜24時間後に肝酵素上昇・黄疸・出血傾向（高用量）<br><br>'
    +'<strong>治療：</strong>催吐 + ブドウ糖補液 + 肝保護（SAMe・NAC） + 血糖モニタリング<br><br>'
    +'催吐○　胃洗浄○　活性炭△　解毒剤×' },
  { name:'ぶどう・レーズン（犬）', icon:'🍇', tags:['grape','raisin','レーズン','腎不全','ぶどう'],
    body:'<strong>少量でも急性腎障害を引き起こす。猫でも報告あり。</strong><br><br>'
    +'毒性成分は未解明（酒石酸説が有力）。個体差が大きく、少量で重篤になる例あり。<br>'
    +'ぶどうジュース・干しぶどう入り食品も危険。<br><br>'
    +'<strong>安全量は不明 → 摂取量に関わらず来院推奨</strong><br><br>'
    +'<strong>症状：</strong>摂取後6〜12時間で嘔吐・下痢・元気消失<br>'
    +'24〜48時間で乏尿・無尿（急性腎不全）<br><br>'
    +'<strong>治療：</strong>催吐 + 活性炭 + 輸液48〜72時間 + 腎機能モニタリング<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×' },
  { name:'カフェイン（コーヒー・紅茶・エナジードリンク）', icon:'☕', tags:['caffeine','coffee','コーヒー','紅茶','エナジードリンク','テオフィリン'],
    body:'<strong>チョコレートとは別物。コーヒー豆・茶葉・エナジードリンク・眠気防止薬に含有。</strong><br><br>'
    +'テオブロミン（チョコ）と同系統のメチルキサンチン系。<br>'
    +'コーヒー豆・茶葉を直接食べると特に危険（濃縮されているため）。<br><br>'
    +'<strong>症状：</strong>摂取後1〜2時間で嘔吐・興奮・頻脈・高血圧・振戦<br>'
    +'重度: 不整脈・痙攣・高体温・虚脱<br><br>'
    +'<strong>治療：</strong>催吐 + 活性炭 + 輸液 + 心拍・体温モニタリング<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×' },
  { name:'ニコチン（タバコ・加熱式タバコ）', icon:'🚬', tags:['nicotine','タバコ','加熱式タバコ','IQOS','電子タバコ'],
    body:'<strong>加熱式タバコ普及で誤食が増加傾向。カートリッジは特に高濃度ニコチンを含む。</strong><br><br>'
    +'ニコチンはアセチルコリン受容体を刺激 → 自律神経・神経筋接合部に作用。<br>'
    +'致死量：犬 20〜100 mg/kg　猫より犬で多い報告。<br><br>'
    +'<strong>症状：</strong>摂取後15〜60分で流涎・嘔吐・興奮・頻脈<br>'
    +'重度: 筋肉振戦・痙攣・徐脈・低血圧・呼吸麻痺<br><br>'
    +'<strong>⚠️ 加熱式タバコのリキッド・カートリッジは経皮吸収もあり</strong><br><br>'
    +'<strong>治療：</strong>催吐（早期のみ） + 活性炭 + 輸液 + 痙攣管理<br><br>'
    +'催吐○（早期のみ）　胃洗浄○　活性炭○　解毒剤×' },
  { name:'スズラン', icon:'🔔', tags:['lily of the valley','convallaria','心毒性','強心配糖体'],
    body:'<strong>全草有毒。春の庭植え・切り花に多い。犬猫ともに危険。</strong><br><br>'
    +'強心配糖体（コンバラトキシン等）を含有 → 心筋の電気刺激を乱す。<br>'
    +'活け花の水も有毒。少量でも致死的になりうる。<br><br>'
    +'<strong>症状：</strong>嘔吐・下痢・腹痛・流涎<br>'
    +'心毒性: 不整脈（徐脈・房室ブロック）・虚脱・突然死<br><br>'
    +'<strong>治療：</strong>催吐 + 活性炭 + 輸液 + 心電図モニタリング<br>'
    +'重度不整脈にはアトロピン or リドカイン<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×' },
  { name:'アボカド', icon:'🥑', tags:['avocado','ペルシン','persin'],
    body:'<strong>ペルシンという毒素を含む。犬猫ともに危険。</strong><br><br>'
    +'果実・葉・種・皮・木すべてに含有。特に鳥・ウサギへの毒性が強い。<br>'
    +'犬猫での重篤例は比較的少ないが大量摂取は注意。<br><br>'
    +'<strong>症状：</strong>嘔吐・下痢・消化器症状<br>'
    +'大量摂取: 心筋障害・肺水腫・乳腺炎様症状の報告あり<br>'
    +'種の誤食 → 消化管閉塞リスク<br><br>'
    +'<strong>治療：</strong>対症療法。種は閉塞確認が必要。<br><br>'
    +'催吐○　胃洗浄○　活性炭○　解毒剤×' },
  { name:'マカダミアナッツ（犬）', icon:'🥜', tags:['macadamia','ナッツ','神経症状'],
    body:'<strong>犬特異的な中毒。猫での報告は少ない。毒性成分は未解明。</strong><br><br>'
    +'0.1 g/kg程度の少量でも症状が出ることがある。<br>'
    +'チョコレートとの混合摂取（チョコマカダミア）は症状が重篤化する。<br><br>'
    +'<strong>症状：</strong>摂取後12時間以内に後肢虚弱・運動失調・起立困難<br>'
    +'嘔吐・振戦・高体温・抑うつ<br>'
    +'<strong>予後は比較的良好（24〜48時間で自然回復が多い）</strong><br><br>'
    +'<strong>治療：</strong>対症療法（輸液・体温管理）。催吐は早期のみ有効。<br><br>'
    +'催吐○（早期）　胃洗浄○　活性炭○　解毒剤×' }
];
var toxOpenIdx = -1;
function toxRender(){ toxFilter(); }
function toxFilter(){
  var q = (document.getElementById('toxSearch').value||'').toLowerCase();
  toxOpenIdx = -1;
  var filtered = TOX_DB.filter(function(t){
    return !q || t.name.toLowerCase().includes(q) || t.tags.some(function(tag){ return tag.toLowerCase().includes(q); });
  });
  document.getElementById('toxList').innerHTML = filtered.map(function(t){
    var i = TOX_DB.indexOf(t);
    return '<div id="toxItem'+i+'">'
      +'<div onclick="toxToggle('+i+')" style="background:var(--pn);border-left:3px solid #e17055;border-radius:8px;padding:10px 12px;cursor:pointer;display:flex;align-items:center;gap:10px;">'
      +'<span style="font-size:20px;">'+t.icon+'</span>'
      +'<span style="font-size:13px;font-weight:700;flex:1;">'+t.name+'</span>'
      +'<span id="toxArrow'+i+'" style="font-size:11px;color:var(--mu);">▼</span>'
      +'</div>'
      +'<div id="toxBody'+i+'" style="display:none;background:rgba(225,112,85,.07);border:1px solid rgba(225,112,85,.25);border-top:none;border-radius:0 0 8px 8px;padding:12px 14px;">'
      +'<div style="font-size:12px;color:var(--tx);line-height:1.9;">'+t.body+'</div>'
      +'</div>'
      +'</div>';
  }).join('');
}
function toxToggle(i){
  var body = document.getElementById('toxBody'+i);
  var arrow = document.getElementById('toxArrow'+i);
  if(!body) return;
  var opening = body.style.display === 'none';
  // 他を閉じる
  if(toxOpenIdx >= 0 && toxOpenIdx !== i){
    var ob = document.getElementById('toxBody'+toxOpenIdx);
    var oa = document.getElementById('toxArrow'+toxOpenIdx);
    if(ob){ ob.style.display = 'none'; }
    if(oa){ oa.textContent = '▼'; }
  }
  body.style.display = opening ? '' : 'none';
  arrow.textContent = opening ? '▲' : '▼';
  toxOpenIdx = opening ? i : -1;
}

//========== CCECAI / CIBDAI ==========
var CCECAI_PARAMS = [
  { id:'cc0', label:'活動性',   cibdai:true,  opts:['正常','軽度低下','中等度低下','重度低下'] },
  { id:'cc1', label:'食欲',     cibdai:true,  opts:['正常','軽度低下','中等度低下','重度低下'] },
  { id:'cc2', label:'嘔吐',     cibdai:true,  opts:['正常','軽度（1回/週）','中等度（2–3回/週）','重度（>3回/週）'] },
  { id:'cc3', label:'便のかたさ',cibdai:true,  opts:['正常','軽度軟便','重度軟便','水様性'] },
  { id:'cc4', label:'排便回数', cibdai:true,  opts:['正常','軽度増加（2–3回/日）または粘血便','中等度増加（4–5回/日）','重度増加（>5回/日）'] },
  { id:'cc5', label:'体重減少', cibdai:true,  opts:['正常','軽度（<5%）','中等度（5–10%）','重度（>10%）'] },
  { id:'cc6', label:'血中ALB',  cibdai:false, opts:['>2.0 g/dL','1.5–1.99 g/dL','1.2–1.49 g/dL','<1.2 g/dL'] },
  { id:'cc7', label:'腹水/浮腫',cibdai:false, opts:['なし','軽度の腹水または浮腫','中等度の腹水または浮腫','重度の腹水/胸水および浮腫'] },
  { id:'cc8', label:'掻痒',     cibdai:false, opts:['なし','時々','日常的','掻痒のために眠れない'] }
];
var ccecaiScores = [0,0,0,0,0,0,0,0,0];
function ccecaiClear(){
  ccecaiScores = [0,0,0,0,0,0,0,0,0];
  renderCCECAI();
}
function renderCCECAI(){
  var container = document.getElementById('ccecaiItems');
  container.innerHTML = CCECAI_PARAMS.map(function(p, pi){
    var btns = p.opts.map(function(opt,oi){
      var active = ccecaiScores[pi]===oi ? 'background:var(--calc);color:#fff;border-color:var(--calc);' : '';
      return '<button onclick="ccecaiSet('+pi+','+oi+')" style="flex:1;padding:5px 3px;font-size:10px;border:1px solid var(--bd);border-radius:6px;background:var(--pn);color:var(--tx);cursor:pointer;'+active+'">'+oi+' '+opt+'</button>';
    }).join('');
    var badge = p.cibdai ? '<span style="font-size:9px;background:rgba(116,185,255,.2);color:#74b9ff;border-radius:4px;padding:1px 5px;margin-left:6px;">CIBDAI</span>' : '';
    return '<div style="background:var(--pn);border-radius:8px;padding:10px;">'
      +'<div style="font-size:12px;font-weight:700;margin-bottom:6px;">'+p.label+badge+'</div>'
      +'<div style="display:flex;gap:4px;">'+btns+'</div>'
      +'</div>';
  }).join('');
  ccecaiUpdateScore();
}
function ccecaiSet(pi, oi){
  ccecaiScores[pi] = oi;
  renderCCECAI();
}
function ccecaiUpdateScore(){
  var cibdai = 0, ccecai = 0;
  ccecaiScores.forEach(function(s,i){ ccecai += s; if(CCECAI_PARAMS[i].cibdai) cibdai += s; });
  document.getElementById('cibdaiScore').textContent = cibdai;
  document.getElementById('ccecaiScore').textContent = ccecai;
  var cb = document.getElementById('cibdaiBadge');
  var cx = document.getElementById('ccecaiBadge');
  cb.textContent = cibdai<=3?'臨床的意義なし':cibdai<=5?'軽度':cibdai<=8?'中等度':'重度';
  cb.style.color = cibdai<=3?'var(--ok)':cibdai<=5?'#fdcb6e':cibdai<=8?'#ffa500':'var(--dn)';
  cx.textContent = ccecai<=3?'臨床的意義なし':ccecai<=5?'軽度':ccecai<=8?'中等度':ccecai<=11?'重度':'非常に重度';
  cx.style.color = ccecai<=3?'var(--ok)':ccecai<=5?'#fdcb6e':ccecai<=8?'#ffa500':ccecai<=11?'var(--dn)':'#d63031';
  document.getElementById('ccecaiResult').style.display = '';
  document.getElementById('ccecaiFlow').style.display = 'none';
}

// 診断フロー状態
var ccecaiFlowState = { stage: 'step1', bw: NaN };
function ccecaiShowFlow(){
  document.getElementById('ccecaiResult').style.display = 'none';
  document.getElementById('ccecaiFlow').style.display = '';
  ccecaiFlowState = { stage: 'step1', bw: NaN };
  ccecaiRenderFlow();
}
function ccecaiHideFlow(){
  document.getElementById('ccecaiFlow').style.display = 'none';
  document.getElementById('ccecaiResult').style.display = '';
}
function ccecaiFlowNext(stage, extra){
  ccecaiFlowState.stage = stage;
  if(extra) Object.assign(ccecaiFlowState, extra);
  ccecaiRenderFlow();
}

var CE_DIET = {
  si:  '🍖 高消化性食 または 加水分解/新奇タンパク食',
  li:  '🥦 高繊維食 または 加水分解/新奇タンパク食',
  ple: '🐟 低脂肪食'
};
var CE_IMM = [
  { name:'プレドニゾロン', dose:'1–2 mg/kg', freq:'SID', note:'※原発性腸リンパ管拡張症疑いは <1 mg/kg' },
  { name:'ブデソニド',     dose:'3–5 mg/m²', freq:'SID', note:'' },
  { name:'クロラムブシル', dose:'3–6 mg/m²', freq:'SID', note:'' },
  { name:'シクロスポリン', dose:'5 mg/kg',   freq:'SID', note:'' }
];

function ccecaiRenderFlow(){
  var cibdai = parseInt(document.getElementById('cibdaiScore').textContent)||0;
  var ccecai = parseInt(document.getElementById('ccecaiScore').textContent)||0;
  var alb    = ccecaiScores[6]; // 血中ALB項目(0=正常,1=軽度,2=中等度,3=重度)
  var isPLE  = alb >= 2;
  var s = ccecaiFlowState;
  var html = '';

  // スコアサマリー
  html += '<div style="background:var(--pn);border-radius:8px;padding:8px 12px;margin-bottom:12px;display:flex;justify-content:space-between;">'
    + '<span style="font-size:11px;color:#74b9ff;">CIBDAI <strong>'+cibdai+'</strong></span>'
    + '<span style="font-size:11px;color:#fd79a8;">CCECAI <strong>'+ccecai+'</strong></span>'
    + (isPLE ? '<span style="font-size:10px;color:var(--wn);">⚠ PLE疑い</span>' : '')
    + '</div>';

  function q(text){ return '<div style="font-size:12px;font-weight:700;color:var(--tx);margin-bottom:10px;">'+text+'</div>'; }
  function btn(label, stage, extra, color){
    color = color||'var(--pn)';
    var border = color==='var(--pn)' ? 'var(--bd)' : color;
    return '<button onclick="ccecaiFlowNext(\''+stage+'\''+(extra?','+JSON.stringify(extra):'')+') " '
      +'style="width:100%;padding:11px;background:'+color+';border:1px solid '+border
      +';border-radius:10px;color:var(--tx);font-size:12px;font-weight:700;cursor:pointer;margin-bottom:8px;text-align:left;">'+label+'</button>';
  }
  function result(dx, txHtml){
    return '<div style="background:rgba(0,184,148,.08);border:1px solid rgba(0,184,148,.3);border-radius:12px;padding:14px;">'
      +'<div style="font-size:13px;font-weight:900;color:#00b894;margin-bottom:8px;">✅ '+dx+'</div>'
      + txHtml +'</div>';
  }
  function dietCard(type){
    var d = isPLE ? CE_DIET.ple : CE_DIET[type];
    return '<div style="background:rgba(253,203,110,.08);border:1px solid rgba(253,203,110,.3);border-radius:8px;padding:10px;margin-top:8px;">'
      +'<div style="font-size:10px;color:#fdcb6e;font-weight:700;margin-bottom:4px;">食事療法</div>'
      +'<div style="font-size:12px;color:var(--tx);">'+d+'</div>'
      +(isPLE?'<div style="font-size:10px;color:var(--wn);margin-top:4px;">低アルブミン血症→低脂肪食を優先</div>':'')
      +'</div>';
  }
  function immCards(bw){
    var rows = CE_IMM.map(function(drug){
      var doseStr = '';
      if(!isNaN(bw) && bw>0){
        if(drug.dose.indexOf('mg/kg')>=0){
          var vals = drug.dose.replace(' mg/kg','').split('–');
          var lo = parseFloat(vals[0])*bw, hi = parseFloat(vals[vals.length-1])*bw;
          doseStr = lo.toFixed(1)+(lo!==hi?'–'+hi.toFixed(1):'')+'mg/day';
        } else if(drug.dose.indexOf('mg/m²')>=0){
          // BSA for dog: 0.101 * BW^0.667
          var bsa = 0.101 * Math.pow(bw, 0.667);
          var vals2 = drug.dose.replace(' mg/m²','').split('–');
          var lo2 = parseFloat(vals2[0])*bsa, hi2 = parseFloat(vals2[vals2.length-1])*bsa;
          doseStr = lo2.toFixed(1)+(lo2!==hi2?'–'+hi2.toFixed(1):'')+'mg/day (BSA '+bsa.toFixed(2)+' m²)';
        }
      }
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-top:1px solid var(--bd);">'
        +'<div><div style="font-size:12px;font-weight:700;">'+drug.name+'</div>'
        +(drug.note?'<div style="font-size:10px;color:var(--wn);">'+drug.note+'</div>':'')+'</div>'
        +'<div style="text-align:right;"><div style="font-size:11px;color:var(--mu);">'+drug.dose+' '+drug.freq+'</div>'
        +(doseStr?'<div style="font-size:12px;color:var(--calc);font-weight:700;">→ '+doseStr+'</div>':'')+'</div>'
        +'</div>';
    }).join('');
    var bwInput = '<div style="margin:10px 0 6px;">'
      +'<label style="font-size:11px;color:var(--mu);">体重 (kg) を入力すると用量計算</label>'
      +'<input type="number" id="ceImmBW" class="osmo-inp" inputmode="decimal" step="0.1" placeholder="kg" value="'+(isNaN(bw)?'':bw)+'" oninput="ccecaiFlowNext(\''+s.stage+'\',{bw:parseFloat(this.value)})" style="max-width:100px;margin-left:8px;">'
      +'</div>';
    return '<div style="background:rgba(255,107,53,.08);border:1px solid rgba(255,107,53,.3);border-radius:8px;padding:10px;margin-top:8px;">'
      +'<div style="font-size:10px;color:#ff6b35;font-weight:700;margin-bottom:4px;">免疫抑制療法</div>'
      + bwInput + rows +'</div>';
  }

  if(s.stage==='step1'){
    html += q('① 消化管外疾患・寄生虫は除外しましたか？');
    html += btn('✅ 除外済み → 慢性腸症の評価へ', 'step2', null, 'rgba(0,184,148,.1)');
    html += btn('❌ 未除外 → まず検査を実施', 'extracause');
  }
  else if(s.stage==='extracause'){
    html += result('消化管外疾患の除外が必要',
      '<div style="font-size:12px;color:var(--tx);line-height:1.8;">'
      +'身体検査 / 糞便検査（直接鏡検・浮遊法・ジアルジア抗原） / CBC / 血液生化学 / 尿検査 / 画像診断（X線・超音波）'
      +'</div>');
  }
  else if(s.stage==='step2'){
    html += q('② 食事トライアルの実施状況は？');
    html += btn('📋 これから実施する（未実施）', 'diet_start', null, 'rgba(116,185,255,.1)');
    html += btn('✅ 実施した → 反応あり', 'fre');
    html += btn('❌ 実施した → 反応なし', 'step3');
  }
  else if(s.stage==='fre'){
    var dxName = isPLE ? 'FRE または FR-PLE' : '食事反応性腸症（FRE）';
    html += result(dxName,
      '<div style="font-size:12px;color:var(--tx);margin-bottom:6px;">食事療法を継続。モニタリングを定期実施（CCECAI/CIBDAI）。</div>'
      + q('主な症状はどちら？')
      + btn('小腸性（体重減少・嘔吐）', 'fre_si')
      + btn('大腸性（粘血便・頻回排便）', 'fre_li'));
  }
  else if(s.stage==='fre_si'){
    html += result('FRE — 小腸性', dietCard('si'));
  }
  else if(s.stage==='fre_li'){
    html += result('FRE — 大腸性', dietCard('li'));
  }
  else if(s.stage==='diet_start'){
    html += '<div style="background:rgba(253,203,110,.08);border:1px solid rgba(253,203,110,.3);border-radius:12px;padding:14px;">'
      +'<div style="font-size:13px;font-weight:900;color:#fdcb6e;margin-bottom:8px;">🍽 食事トライアル開始</div>'
      +'<div style="font-size:12px;color:var(--tx);line-height:1.8;">'
      + (isPLE?'<strong>低アルブミン血症あり → 低脂肪食を選択</strong><br>':'')
      +'小腸性: 高消化性食 または 加水分解/新奇タンパク食<br>'
      +'大腸性: 高繊維食 または 加水分解/新奇タンパク食<br>'
      +'低Alb(PLE): 低脂肪食'
      +'</div></div>'
      +'<div style="font-size:11px;color:var(--mu);margin-top:10px;">反応を評価後、再度このフローを実行してください。</div>';
  }
  else if(s.stage==='step3'){
    html += q('③ 消化管生検の結果は？');
    html += btn('🔬 未実施 → 生検を検討', 'biopsy_rec');
    html += btn('🔥 炎症所見あり', 'step4');
    html += btn('📄 その他の所見', 'other_dx');
  }
  else if(s.stage==='biopsy_rec'){
    html += '<div style="background:rgba(116,185,255,.08);border:1px solid rgba(116,185,255,.3);border-radius:12px;padding:14px;">'
      +'<div style="font-size:13px;font-weight:900;color:#74b9ff;margin-bottom:6px;">🔬 消化管生検を推奨</div>'
      +'<div style="font-size:12px;color:var(--tx);line-height:1.8;">'
      +'食事トライアル不反応例では内視鏡または外科的生検を実施。<br>'
      +'炎症性腸疾患(IBD)とリンパ腫の鑑別に重要。</div></div>';
  }
  else if(s.stage==='other_dx'){
    html += result('各疾患に対する治療',
      '<div style="font-size:12px;color:var(--tx);">リンパ腫・腫瘍性疾患など、生検結果に基づいた各疾患固有の治療を実施。</div>');
  }
  else if(s.stage==='step4'){
    html += q('④ 免疫抑制療法への反応は？');
    html += btn('✅ 反応あり → IRE / IR-PLE', 'ire');
    html += btn('❌ 反応なし → NRE / NR-PLE', 'nre');
    html += btn('⏳ これから開始', 'imm_start');
  }
  else if(s.stage==='ire'){
    var dxN = isPLE ? '免疫抑制薬反応性PLE (IR-PLE)' : '免疫抑制薬反応性腸症（IRE）';
    var bw = isNaN(s.bw) ? NaN : s.bw;
    html += result(dxN, immCards(bw));
  }
  else if(s.stage==='imm_start'){
    var bw2 = isNaN(s.bw) ? NaN : s.bw;
    html += '<div style="font-size:12px;font-weight:700;color:var(--tx);margin-bottom:8px;">免疫抑制療法 開始用量</div>'
      + immCards(bw2);
  }
  else if(s.stage==='nre'){
    var dxN2 = isPLE ? '非反応性PLE (NR-PLE)' : '非反応性腸症（NRE）';
    html += result(dxN2,
      '<div style="font-size:12px;color:var(--tx);line-height:1.8;">'
      +'予後不良。プレ/プロ/シンバイオティクスの追加を検討。<br>'
      +'各疾患に応じた対症療法および緩和的治療を継続。</div>');
  }

  document.getElementById('ccecaiFlowBody').innerHTML = html;
}

function edCalc(){
  var bwG=parseFloat(document.getElementById('edBW').value);
  var bwKg=bwG/1000;
  var el=document.getElementById('edTable');
  if(isNaN(bwG)||bwG<=0){
    el.innerHTML='<div style="text-align:center;color:var(--mu);padding:16px;font-size:12px;">体重を入力してください</div>';
    return;
  }
  var html='';
  ED_DRUGS.forEach(function(d){
    var doseMg=d.dose*bwKg;
    html+='<div style="background:var(--pn);border:1px solid var(--bd);border-radius:10px;padding:10px;margin-bottom:8px;">';
    html+='<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">';
    html+='<span style="font-size:15px;font-weight:700;color:var(--ac);">'+d.name+'</span>';
    html+='<span style="font-size:11px;color:var(--mu);">'+d.dose+'mg/kg → <b style="color:var(--tx);">'+doseMg.toFixed(3)+'mg</b>'+(d.note?'　'+d.note:'')+'</span>';
    html+='</div>';
    html+='<table style="width:100%;border-collapse:collapse;font-size:12px;">';
    html+='<tr style="color:var(--mu);font-size:10px;"><th style="text-align:left;padding:2px 4px;font-weight:400;">溶解量</th><th style="text-align:right;padding:2px 4px;font-weight:400;">1滴あたり</th><th style="text-align:right;padding:2px 4px;font-weight:400;">投与滴数</th></tr>';
    d.rows.forEach(function(r){
      var useDose=r.dose2?r.dose2*bwKg:doseMg;
      var drops=useDose/r.perDrop;
      html+='<tr style="border-top:1px solid var(--bd);">';
      html+='<td style="padding:5px 4px;color:var(--tx);">'+r.label+'</td>';
      html+='<td style="padding:5px 4px;text-align:right;color:var(--mu);">'+r.perDrop+'mg</td>';
      html+='<td style="padding:5px 4px;text-align:right;font-weight:900;font-size:15px;color:var(--calc);">'+drops.toFixed(2)+'<span style="font-size:10px;font-weight:400;color:var(--mu);margin-left:2px;">滴</span></td>';
      html+='</tr>';
    });
    html+='</table></div>';
  });
  el.innerHTML=html;
}
function edClear(){
  document.getElementById('edBW').value='';
  document.getElementById('edTable').innerHTML='<div style="text-align:center;color:var(--mu);padding:16px;font-size:12px;">体重を入力してください</div>';
}

function tfClear(){
  ['tfBW','tfTargetPCV','tfCurrentPCV','tfDonorPCV','albBW','albTarget','albCurrent'].forEach(function(id){
    document.getElementById(id).value='';
  });
  document.getElementById('tfBloodResult').style.display='none';
  document.getElementById('tfBloodEmpty').style.display='';
  document.getElementById('albResult').style.display='none';
  document.getElementById('albEmpty').style.display='';
}


//========== K・P補正 ==========
var KP_ROWS = [
  { label:'3.5–4.5', lo:3.5, hi:4.5, k1L:10,  k500:5,  k250:2.5, k200:2,  speed:50 },
  { label:'3.0–3.5', lo:3.0, hi:3.5, k1L:20,  k500:10, k250:5,   k200:4,  speed:25 },
  { label:'2.5–3.0', lo:2.5, hi:3.0, k1L:30,  k500:15, k250:7.5, k200:6,  speed:16 },
  { label:'2.0–2.5', lo:2.0, hi:2.5, k1L:'40<',k500:20, k250:10,  k200:8,  speed:12 },
  { label:'< 2.0',   lo:0,   hi:2.0, k1L:'60<',k500:30, k250:15,  k200:12, speed:8  },
];
function kpRender(){
  var val = parseFloat(document.getElementById('kpKVal').value);
  var badge = document.getElementById('kpKBadge');
  var activeIdx = -1;
  if(!isNaN(val)){
    for(var i=0;i<KP_ROWS.length;i++){
      var r = KP_ROWS[i];
      if(val >= r.lo && val < r.hi){ activeIdx=i; break; }
    }
    // <2.0
    if(activeIdx<0 && val<2.0) activeIdx=4;
    // バッジ
    if(val>=3.5){
      badge.className='kp-k-badge ok'; badge.textContent='正常域 '+val.toFixed(1)+' mEq/L';
    } else if(val>=2.5){
      badge.className='kp-k-badge wn'; badge.textContent='低K ⚠ '+val.toFixed(1)+' mEq/L';
    } else {
      badge.className='kp-k-badge dn'; badge.textContent='重度低K 🚨 '+val.toFixed(1)+' mEq/L';
    }
  } else {
    badge.className='kp-k-badge'; badge.textContent='K値を入力';
  }
  var html = '';
  KP_ROWS.forEach(function(r,i){
    var act = i===activeIdx ? ' kp-active' : '';
    html += '<tr class="'+act+'">'
      +'<td>'+r.label+'</td>'
      +'<td class="kp-kcl">'+r.k1L+'</td>'
      +'<td class="kp-kcl">'+r.k500+'</td>'
      +'<td class="kp-kcl">'+r.k250+'</td>'
      +'<td class="kp-kcl">'+r.k200+'</td>'
      +'<td class="kp-speed">'+r.speed+'</td>'
      +'</tr>';
  });
  document.getElementById('kpTbody').innerHTML = html;
}

//========== 輸液量計算 ==========
var FL_DEHY = [
  { lo:0,  hi:5,  label:'<5% — 脱水なし〜軽度（皮膚ツルゴール正常）' },
  { lo:5,  hi:8,  label:'5–8% — 軽度〜中等度（皮膚テント、眼球陥没軽度）' },
  { lo:8,  hi:10, label:'8–10% — 中等度（眼球陥没、粘膜乾燥）' },
  { lo:10, hi:12, label:'10–12% — 重度（毛細血管再充満時間延長、虚脱）' },
  { lo:12, hi:15, label:'12–15% — 生命危機（ショック）' },
];
// 維持輸液速度: 犬132×BW^0.75÷24、猫80×BW^0.75÷24
function flMaintSpeed(bw, coef){ return coef * Math.pow(bw, 0.75) / 24; }
var FL_DOG_BWS = [2,4,6,8,10,12,14,16,18,20,25,30,35,40];
var FL_CAT_BWS = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5];

function flBuildHayami(activeBW){
  function makeTable(bws, coef, color, label){
    // activeBWに最も近いインデックスを探す
    var nearIdx = -1;
    if(activeBW){
      var minDiff = Infinity;
      bws.forEach(function(bw,i){
        var d = Math.abs(bw - activeBW);
        if(d < minDiff){ minDiff=d; nearIdx=i; }
      });
    }
    var rows = bws.map(function(bw,i){
      var v = flMaintSpeed(bw, coef);
      // 最近傍 ± 1行をハイライト
      var act = (nearIdx>=0 && Math.abs(i-nearIdx)<=1) ? ' kp-active' : '';
      return '<tr class="'+act+'"><td>'+bw+'</td><td class="kp-kcl" style="color:'+color+'">'+v.toFixed(1)+'</td></tr>';
    }).join('');
    return '<div class="kp-table-wrap"><table class="kp-table">'
      +'<thead><tr><th>体重<br><small>kg</small></th><th style="color:'+color+';">'+label+'<br><small>ml/hr</small></th></tr></thead>'
      +'<tbody>'+rows+'</tbody></table></div>';
  }
  document.getElementById('flHayamiGrid').innerHTML =
    makeTable(FL_DOG_BWS, 132, '#4c8eff', '🐕 犬') +
    makeTable(FL_CAT_BWS, 80,  '#22c55e', '🐈 猫');
}

function flCalc(){
  var bw   = parseFloat(document.getElementById('flBW').value);
  var dehy = parseFloat(document.getElementById('flDehy').value);
  var hasInput = !isNaN(bw) && bw > 0 && !isNaN(dehy) && dehy >= 0;
  document.getElementById('flResult').style.display = hasInput ? '' : 'none';
  document.getElementById('flEmpty').style.display  = hasInput ? 'none' : '';
  // 脱水ガイド
  var guide = document.getElementById('flDehyGuide');
  if(!isNaN(dehy)){
    var row = FL_DEHY.filter(function(r){ return dehy >= r.lo && dehy < r.hi; })[0];
    if(row){ guide.textContent = '📊 ' + row.label; guide.style.display=''; }
    else { guide.style.display='none'; }
  } else { guide.style.display='none'; }
  // 早見表
  flBuildHayami(!isNaN(bw) ? bw : null);
  if(!hasInput) return;
  var deficit  = bw * (dehy/100) * 1000;
  var maintLo  = 50 * bw, maintHi = 60 * bw;
  var totalLo  = deficit + maintLo;
  var totalHi  = deficit + maintHi;
  document.getElementById('flDeficit').textContent = deficit.toFixed(0) + ' ml';
  document.getElementById('flMaint').textContent   = maintLo.toFixed(0) + '–' + maintHi.toFixed(0) + ' ml';
  document.getElementById('flTotal').textContent   = totalLo.toFixed(0) + '–' + totalHi.toFixed(0) + ' ml';
  document.getElementById('flTotalSub').textContent = '欠乏 + 維持';
  // 初期補液速度
  document.getElementById('flSpDog').textContent = (60*bw).toFixed(0)+'–'+(90*bw).toFixed(0);
  document.getElementById('flSpCat').textContent = (45*bw).toFixed(0)+'–'+(60*bw).toFixed(0);
  // 尿量
  document.getElementById('flUrine').textContent = bw.toFixed(1)+' ml/h';
}
function flClear(){
  ['flBW','flDehy'].forEach(function(id){ document.getElementById(id).value=''; });
  document.getElementById('flResult').style.display='none';
  document.getElementById('flEmpty').style.display='';
  document.getElementById('flDehyGuide').style.display='none';
  flBuildHayami(null);
}

//========== テンシロンテスト ==========
function tensilonCalc(){
  var bw = parseFloat(document.getElementById('tensilonBW').value);
  var res = document.getElementById('tensilonResult');
  if(isNaN(bw) || bw <= 0){ res.style.display='none'; return; }
  // エドロホニウム 10mg/ml, 0.1-0.2mg/kg
  var edroLo = bw * 0.1;
  var edroHi = bw * 0.2;
  var edroMlLo = edroLo / 10;
  var edroMlHi = edroHi / 10;
  // アトロピン 0.5mg/ml, 0.04mg/kg
  var atroMg = bw * 0.04;
  var atroMl = atroMg / 0.5;
  document.getElementById('tenEdroMgLo').textContent = edroLo.toFixed(3).replace(/\.?0+$/,'') || '0';
  document.getElementById('tenEdroMlLo').textContent = edroMlLo.toFixed(4).replace(/\.?0+$/,'') || '0';
  document.getElementById('tenEdroMgHi').textContent = edroHi.toFixed(3).replace(/\.?0+$/,'') || '0';
  document.getElementById('tenEdroMlHi').textContent = edroMlHi.toFixed(4).replace(/\.?0+$/,'') || '0';
  document.getElementById('tenAtroMg').textContent = atroMg.toFixed(4).replace(/\.?0+$/,'') || '0';
  document.getElementById('tenAtroMl').textContent = atroMl.toFixed(4).replace(/\.?0+$/,'') || '0';
  res.style.display='block';
}
function tensilonClear(){
  document.getElementById('tensilonBW').value='';
  document.getElementById('tensilonResult').style.display='none';
}

//========== チョコレート中毒 ==========
var CHOCO_DB = [
  { name:'ホワイトチョコレート',         theo:0.0088, caff:0.06   },
  { name:'ミルクチョコレート',           theo:2.046,  caff:0.20   },
  { name:'製菓用無糖チョコレート',       theo:13.0,   caff:0.705  },
  { name:'カカオ70–85%',               theo:8.0,    caff:1.2    },
  { name:'カカオ60–69%',               theo:6.03,   caff:0.776  },
  { name:'カカオ45–59%',               theo:5.0,    caff:0.776  },
  { name:'セミスイートチョコチップ',     theo:4.868,  caff:0.776  },
  { name:'乾燥ココア粉末',             theo:26.0,   caff:2.469  },
  { name:'インスタントココア粉末',       theo:4.797,  caff:0.529  },
  { name:'ココア豆',                   theo:21.164, caff:0.0    },
  { name:'コーヒー豆',                 theo:0.0,    caff:21.164 },
];
var CHOCO_SYMPTOM = '【初期症状（6–12時間以内）】\n多尿・嘔吐・下痢・腹囲膨満・落ち着きのなさ\n\n【進行症状】\n興奮・運動失調・振戦・発作\n頻脈・心室性期外収縮・呼吸速迫・チアノーゼ\n\n【中毒後半（42–72時間）】\n低カリウム血症・膵炎\n\n【致死】心臓の不整脈・換気不全';

function chocoInit(){
  var html = CHOCO_DB.map(function(p,i){
    return '<div class="choco-row">'
      +'<span class="choco-name">'+esc(p.name)+'</span>'
      +'<span class="choco-conc">テオ:'+p.theo+' / カフェ:'+p.caff+' mg/g</span>'
      +'<input type="number" class="choco-inp" id="chocoG_'+i+'" inputmode="decimal" min="0" step="1" placeholder="0"'
      +' oninput="this.classList.toggle(\'has-val\',!!this.value);chocoCalc()">'
      +'<span class="choco-unit">g</span>'
      +'</div>';
  }).join('');
  document.getElementById('chocoList').innerHTML = html;
  document.getElementById('chocoResult').style.display = 'none';
}
function chocoCalc(){
  var bw = parseFloat(document.getElementById('chocoBW').value);
  var totalTheo=0, totalCaff=0, hasAny=false;
  CHOCO_DB.forEach(function(p,i){
    var g = parseFloat(document.getElementById('chocoG_'+i).value)||0;
    if(g>0) hasAny=true;
    totalTheo += g * p.theo;
    totalCaff += g * p.caff;
  });
  if(!hasAny || isNaN(bw) || bw<=0){ document.getElementById('chocoResult').style.display='none'; return; }
  var theo = totalTheo/bw, caff = totalCaff/bw, mx = theo+caff;
  document.getElementById('chocoResult').style.display='';
  document.getElementById('chocoTheo').textContent = theo.toFixed(1);
  document.getElementById('chocoCaff').textContent = caff.toFixed(1);
  document.getElementById('chocoMx').textContent   = mx.toFixed(1);
  var badge = document.getElementById('chocoBadge');
  if(mx < 20){
    badge.className='osmo-badge ok';  badge.textContent='✓ 低リスク '+mx.toFixed(1)+' mg/kg（<20）';
  } else if(mx < 40){
    badge.className='osmo-badge wn';  badge.textContent='⚠ 嘔吐・下痢の可能性 '+mx.toFixed(1)+' mg/kg（>20）';
  } else if(mx < 60){
    badge.className='osmo-badge mid'; badge.textContent='⚠⚠ 重度症状 '+mx.toFixed(1)+' mg/kg（>40）';
  } else {
    badge.className='osmo-badge dn';  badge.textContent='🚨 発作リスク '+mx.toFixed(1)+' mg/kg（>60）';
  }
  var pct = Math.min(mx/100*100, 99);
  var marker = document.getElementById('chocoMarker');
  marker.style.display=''; marker.style.left=pct.toFixed(1)+'%';
  var sym = document.getElementById('chocoSymptom');
  if(mx>=20){ sym.style.display=''; sym.innerText=CHOCO_SYMPTOM; }
  else { sym.style.display='none'; }
}
function chocoClear(){
  document.getElementById('chocoBW').value='';
  CHOCO_DB.forEach(function(_,i){
    var el=document.getElementById('chocoG_'+i);
    if(el){ el.value=''; el.classList.remove('has-val'); }
  });
  document.getElementById('chocoResult').style.display='none';
}

//========== SHARED DOSE HELPER ==========
// 錠剤規格(mg)をconcTextからパース → [20, 40] のような配列を返す
function parseTabletMg(concText){
  if(!concText) return [];
  var ct = concText.toLowerCase();
  // ml/g/%が含まれる場合は液剤・散剤として除外
  if(ct.indexOf('ml')>=0 || ct.indexOf('mg/g')>=0 || ct.indexOf('%')>=0) return [];
  var nums = [];
  // 「200/300/400mg」または「100μg」パターン
  var reSlash = /([0-9]+(?:\.[0-9]+)?(?:\/[0-9]+(?:\.[0-9]+)?)*)\s*(mg|μg|ug)/gi;
  var m;
  while((m=reSlash.exec(concText))!==null){
    var unit = m[2].toLowerCase();
    m[1].split('/').forEach(function(s){
      var v=parseFloat(s);
      if(unit==='μg'||unit==='ug') v=v/1000; // mgに変換
      if(v>0 && nums.indexOf(v)<0) nums.push(v);
    });
  }
  return nums.sort(function(a,b){return a-b;});
}

// 必要mg÷錠剤mgから最適分割を計算
function calcTabletSplit(needMg, tabletMg){
  // 分割候補: 1, 1/2, 1/4, 1/8, 1/3, 1/6（少し多めOK）
  var splits = [
    {n:1,d:1,label:'1錠'},
    {n:1,d:2,label:'1/2錠'},
    {n:1,d:4,label:'1/4錠'},
    {n:1,d:8,label:'1/8錠'},
    {n:1,d:3,label:'1/3錠'},
    {n:1,d:6,label:'1/6錠'}
  ];
  var ratio = needMg / tabletMg; // 必要錠数（小数）
  // 候補の中で ratio 以上かつ最小のものを選ぶ（少し多めOK）
  var best = null;
  splits.forEach(function(s){
    var val = s.n / s.d;
    if(val >= ratio * 0.99){ // 0.99で微小誤差吸収
      if(!best || val < best.val) best = {label:s.label, val:val, mg:(tabletMg*val).toFixed(1).replace(/\.0$/,'')};
    }
  });
  // 候補で足りなければ整数錠に繰り上げ
  if(!best){
    var ceil = Math.ceil(ratio);
    best = {label:ceil+'錠', val:ceil, mg:(tabletMg*ceil).toFixed(1).replace(/\.0$/,'')};
  }
  return best;
}

function buildDoseHtml(d, sp, w, mode, style) {
  // style: 'card' | 'detail' | 'proto'
  style = style || 'card';
  mode = mode || getRoute(d);
  var s = getSpData(d, sp, mode);
  var hiV = s.hi != null ? s.hi : s.lo;
  var mclass = mode === 'injectable' ? 'inj' : mode === 'oral' ? 'ora' : 'top';
  var mlv = null, mgv = null, tabletv = null;

  // 錠剤判定: oralかつconcTextに規格mgがある（ml/% 表記なし）
  var tabletMgs = (mode === 'oral') ? parseTabletMg(d.concText) : [];
  var isTablet = tabletMgs.length > 0;

  if (s.lo != null) {
    var mgLo = w * s.lo, mgHi = w * hiV;
    mgv = mgLo === mgHi
      ? mgLo.toFixed(3).replace(/\.?0+$/, '') + ' mg'
      : mgLo.toFixed(3).replace(/\.?0+$/, '') + '〜' + mgHi.toFixed(3).replace(/\.?0+$/, '') + ' mg';

    if(isTablet){
      // 錠剤: 全規格について分割を計算
      var tabParts = tabletMgs.map(function(tmg){
        var splitLo = calcTabletSplit(mgLo, tmg);
        var splitHi = mgLo !== mgHi ? calcTabletSplit(mgHi, tmg) : null;
        var label = splitHi && splitHi.label !== splitLo.label
          ? splitLo.label + '〜' + splitHi.label
          : splitLo.label;
        return tmg + 'mg錠: ' + label;
      });
      tabletv = tabParts.join(' / ');
    } else if (d.conc != null && d.conc > 0) {
      var lo = (w * s.lo / d.conc), hi = (w * hiV / d.conc);
      mlv = lo === hi ? lo.toFixed(2) + ' mL' : lo.toFixed(2) + '〜' + hi.toFixed(2) + ' mL';
    }
  }
  return { mlv: mlv, mgv: mgv, tabletv: tabletv, note: s.note || null, mclass: mclass };
}

//========== RENDER ==========
function render(){
  var g = document.getElementById('grid');
  g.className = szCfg.minW>=320 ? 'g1' : 'g2';
  var q = st.q.toLowerCase();
  // 変更後
  var out = ''
  var shown = 0;
  for(var i=0;i<DRUGS.length;i++){
    var d = DRUGS[i];
    if(!d||!d.species) continue;
    // Filter by route/mode（配列routeに対応）
    if(!isRouteMatch(d, st.mode)) continue;
    // Filter by category
    if(st.cat!=='すべて' && d.category!==st.cat) continue;
    // Filter by search (name + category + alias)
    if(q){
      var nameMatch = d.name.toLowerCase().indexOf(q)>=0;
      var catMatch  = d.category.indexOf(q)>=0;
      var aliasMatch = Array.isArray(d.alias) && d.alias.some(function(a){ return a.toLowerCase().indexOf(q)>=0; });
      if(!nameMatch && !catMatch && !aliasMatch) continue;
    }
    
    var dz = buildDoseHtml(d, st.sp, st.w, st.mode, 'card');
    if(!dz.mlv && !dz.mgv && !dz.note) continue;
    
    var col = CCOLOR[d.category]||'#6b7590';
    var dot = wasEdited(d) ? '<i class="edot"></i>' : '';
    var mclass = dz.mclass;
    var val;
    if(dz.tabletv){
      val = '<b class="cv ora tab">' + esc(dz.tabletv) + '</b>'
          + (dz.mgv ? '<span class="csub">'+esc(dz.mgv)+'</span>' : '');
    } else if(dz.mlv){
      var sh = dz.mlv.replace(' mL','').replace('〜','~');
      val = '<b class="cv '+mclass+'">' + esc(sh) + '<em>mL</em></b>' + (dz.mgv ? '<span class="csub">'+esc(dz.mgv)+'</span>' : '');
    } else if(dz.mgv){
      val = '<b class="cv '+mclass+'">' + esc(dz.mgv) + '</b>' + (dz.note ? '<span class="csub" style="font-size:9px;color:var(--wn);">conc未設定</span>' : '');
    } else if(dz.note){
      val = '<b class="cv ref">参照</b><span class="csub">' + esc((dz.note||'').split('\n')[0].substring(0,35)) + '</span>';
      val = '<b class="cv ref">参照</b><span class="csub">' + esc((dz.note||'').split('\n')[0].substring(0,35)) + '</span>';
    } else {
      continue; // skip - no data
    }
    out += '<div class="card draggable" style="border-left-color:'+col+'" data-i="'+i+'" data-cat="'+esc(d.category)+'" draggable="true">'
      + '<span class="drag-handle">⠿</span>'
      + dot
      + '<div class="cat">'+esc(d.category)+'</div>'
      + '<div class="nm">'+esc(d.name.replace(/\n/g,' '))+'</div>'
      + val
      + '</div>';
    shown++;
  }
  if(!out){
    g.innerHTML = '<p style="color:#6b7590;padding:30px 20px;text-align:center;grid-column:1/-1">この動物種のデータがありません</p>';
  } else {
    g.innerHTML = out;
  }
  initCardDrag();
}

function renderTabs(){
  var seen={}, cats=['すべて'];
  var q = st.q.toLowerCase();
  for(var i=0;i<DRUGS.length;i++){
    var d = DRUGS[i];
    if(!d) continue;
    if(!isRouteMatch(d, st.mode)) continue;
    var dzt = buildDoseHtml(d, st.sp, st.w, st.mode, 'card');
    if(!dzt.mlv && !dzt.mgv && !dzt.note) continue;
    if(!seen[d.category]){seen[d.category]=1; cats.push(d.category);}
  }
  var tabCls = 'tab on-' + (st.mode==='injectable'?'inj':st.mode==='oral'?'ora':'top');
  var out='';
  for(var i=0;i<cats.length;i++){
    var active = st.cat===cats[i];
    out += '<div class="tab'+(active?' '+tabCls+' on':'')+'" data-c="'+esc(cats[i])+'">'+esc(cats[i])+'</div>';
  }
  document.getElementById('tabrow').innerHTML = out;
}

//========== SHEET HELPERS ==========
function openSheet(id){
  document.getElementById('bd').classList.add('on');
  var el = document.getElementById(id);
  el.classList.add('on');
  el.scrollTop = 0;
  window.scrollBy(0, 1);
}
function closeAll(){ var ss=document.querySelectorAll('.sh'); for(var i=0;i<ss.length;i++) ss[i].classList.remove('on'); document.getElementById('bd').classList.remove('on'); }

//========== SEARCH SHEET ==========


var _importResolve = null;
function showImportDialog(count){
  document.getElementById('impDialogMsg').textContent = count+'剤のデータが見つかりました。どちらの方法で読み込みますか？';
  document.getElementById('importDialog').classList.add('show');
  // 同期的に待てないのでPromise不可→グローバル変数で管理
  return '__async__';
}
function resolveImport(choice){
  document.getElementById('importDialog').classList.remove('show');
  if(_importResolve) _importResolve(choice);
}
function openSearchSheetByIdx(idx){
  // IDベースに委譲（インデックスずれ対策）
  var d = DRUGS[idx];
  if(d && d.id) openSearchSheetById(d.id);
  else openSearchSheetById(null, idx);
}
function openSearchSheetById(id, fallbackIdx){
  var d = null;
  if(id){ for(var i=0;i<DRUGS.length;i++){ if(DRUGS[i] && DRUGS[i].id===id){ d=DRUGS[i]; break; } } }
  if(!d && fallbackIdx!=null) d = DRUGS[fallbackIdx];
  if(!d){ toast('薬剤データが見つかりません'); return; }
  var name = (d.name||'').replace(/（[^）]*）/g,'').replace(/\([^)]*\)/g,'').replace(/[\n\r]/g,' ').trim();
  var source = d.source || '';
  var pdfUrl = d.pdf_url || '';
  document.getElementById('srchDrugName').textContent = name;
  var src = source.toLowerCase();
  var hasPmda = src.indexOf('pmda') >= 0;
  var hasNval = src.indexOf('nval') >= 0;
  if(!hasPmda && !hasNval){ hasPmda = true; }
  document.getElementById('srchPmdaBtn').style.display = hasPmda ? '' : 'none';
  document.getElementById('srchNvalBtn').style.display = hasNval ? '' : 'none';
  document.getElementById('srchPmdaBtn').setAttribute('data-url', (!pdfUrl || pdfUrl.indexOf('nval')>=0) ? '' : pdfUrl);
  document.getElementById('srchNvalBtn').setAttribute('data-url', (pdfUrl && pdfUrl.indexOf('nval')>=0) ? pdfUrl : '');
  document.getElementById('srchGoogleBtn').setAttribute('data-name', name);
  openSheet('shSrch');
}
function openSearchSheet(name, source, pdfUrl){
  var clean = name.replace(/（[^）]*）/g,'').replace(/\([^)]*\)/g,'').replace(/[\n\r]/g,' ').trim();
  document.getElementById('srchDrugName').textContent = clean;
  var src = (source||'').toLowerCase();
  var hasPmda = src.indexOf('pmda') >= 0;
  var hasNval = src.indexOf('nval') >= 0;
  if(!hasPmda && !hasNval){ hasPmda = true; }
  document.getElementById('srchPmdaBtn').style.display = hasPmda ? '' : 'none';
  document.getElementById('srchNvalBtn').style.display = hasNval ? '' : 'none';
  var pUrl = (pdfUrl && pdfUrl !== 'undefined') ? decodeURIComponent(pdfUrl) : '';
  document.getElementById('srchPmdaBtn').setAttribute('data-url', (!pUrl || pUrl.indexOf('nval')>=0) ? '' : pUrl);
  document.getElementById('srchNvalBtn').setAttribute('data-url', (pUrl && pUrl.indexOf('nval')>=0) ? pUrl : '');
  document.getElementById('srchGoogleBtn').setAttribute('data-name', clean);
  openSheet('shSrch');
}

function doSrchDirect(dest){
  var btn = dest==='pmda' ? document.getElementById('srchPmdaBtn') : document.getElementById('srchNvalBtn');
  var url = btn ? btn.getAttribute('data-url') : null;
  if(url && url !== 'null' && url !== ''){
    window.open(url,'_blank','noopener');
  } else {
    // data-urlがなければ成分名で直接検索
    var name = document.getElementById('srchGoogleBtn').getAttribute('data-name')||'';
    if(!name){ toast('薬剤名が取得できません'); return; }
    if(dest==='pmda'){
      url = 'https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName='+encodeURIComponent(name)+'&nameKbn=1&nameMatch=1';
    } else {
      url = 'https://www.vm.nval.go.jp/?PRODUCT_NAME='+encodeURIComponent(name);
    }
    window.open(url,'_blank','noopener');
  }
}

function doSrch(dest){
  var name = document.getElementById('srchGoogleBtn').getAttribute('data-name')||'';
  if(!name){ toast('薬剤名が取得できません'); return; }
  var url = 'https://www.google.com/search?q='+encodeURIComponent(name+' 添付文書 動物');
  window.open(url,'_blank','noopener');
}

function toast(msg){ var t=document.getElementById('toast'); t.textContent=msg; t.classList.add('on'); clearTimeout(t._t); t._t=setTimeout(function(){t.classList.remove('on');},2200); }

//========== WEIGHT SHEET ==========
// Quick weight presets per species (in display unit)
var QUICK_W = {
  犬:[1,2,3,5,8,10,15,20,30],
  猫:[1,2,3,4,5,6],
  ウサギ:[0.5,1,1.5,2,2.5,3],
  フェレット:[0.5,0.8,1,1.2,1.5],
  モルモット:[200,400,600,800,1000],
  ハリネズミ:[100,200,300,400],
  ハムスター:[50,80,100,120,150]
};

function adjWeight(dir){
  var sp=document.getElementById('spInp').value;
  var small=isSmall(sp);
  var cur=parseFloat(document.getElementById('wInp').value)||0;
  var step=small?10:0.1;
  var next=Math.round((cur+dir*step)*1000)/1000;
  if(next>0){ document.getElementById('wInp').value=next; }
}

function setQuickW(v){
  document.getElementById('wInp').value=v;
  renderQuickBtns(document.getElementById('spInp').value);
}
function renderQuickBtns(sp){
  var presets=QUICK_W[sp]||[];
  var cur=parseFloat(document.getElementById('wInp').value);
  var out='';
  for(var i=0;i<presets.length;i++){
    var v=presets[i];
    var active=Math.abs(v-cur)<0.001;
    out+='<button onclick="setQuickW('+v+')" '
      +'style="padding:7px 10px;border-radius:6px;border:1px solid '+(active?'var(--ac)':'var(--bd)')+';background:'+(active?'rgba(76,142,255,.2)':'var(--bg)')+';color:'+(active?'var(--ac)':'var(--mu)')+';font-size:12px;font-weight:700;cursor:pointer">'+v+'</button>';
  }
  document.getElementById('quickBtns').innerHTML=out;
}

function openWeight(){
  var sp = st.sp;
  var unit = dispUnit(sp);
  document.getElementById('wInp').value = dispW(sp, st.w);
  document.getElementById('wInpUnit').textContent = '（' + unit + '）';
  document.getElementById('spInp').value = sp;
  renderQuickBtns(sp);
  openSheet('shW');
}
function applyWeight(){
  var v = parseFloat(document.getElementById('wInp').value);
  var sp = document.getElementById('spInp').value;
  if(v > 0){
    st.w = toKg(v, sp);
    st.sp = sp;
    spWeights[sp] = st.w;
    saveWeights();
    document.getElementById('wlbl').textContent = dispW(sp, st.w) + ' ' + dispUnit(sp);
    document.getElementById('spSel').value = sp;
    renderTabs(); render();
  }
  closeAll();
  // プロトコルセット実行中なら再計算して再表示
  if(runProtoIdx>=0 && protocols[runProtoIdx]){
    renderProtoRun();
    openSheet('shProtoRun');
  }
}

//========== DETAIL SHEET ==========
function openDetail(idx){
  var d=DRUGS[idx]; if(!d) return;
  var col=CCOLOR[d.category]||'#6b7590';
  var activeRoute = getRoute(d);
  var mclass=activeRoute==='injectable'?'inj':activeRoute==='oral'?'ora':'top';
  var modeInfoText = activeRoute==='injectable' ? '注射薬：投与量即時確認' : activeRoute==='oral' ? '内服薬：処方容量確認' : '外用薬：参照情報';

  // ルートトグル（配列routeの薬剤のみ表示）
  var routeToggle = '';
  if(Array.isArray(d.route) && d.route.length > 1){
    var tbtns = '';
    var routeLabels = {injectable:'💉 注射', oral:'💊 内服', topical:'🧴 外用'};
    for(var ri=0; ri<d.route.length; ri++){
      var rm = d.route[ri];
      var isAct = rm === activeRoute;
      tbtns += '<button onclick="switchDetailRoute('+idx+',\''+rm+'\')" '
        +'style="padding:5px 14px;border-radius:6px;'
        +'border:1px solid '+(isAct?'var(--ac)':'var(--bd)')+';'
        +'background:'+(isAct?'rgba(76,142,255,.2)':'var(--bg)')+';'
        +'color:'+(isAct?'var(--ac)':'var(--mu)')+';'
        +'font-size:13px;font-weight:600;cursor:pointer;margin:0 3px">'
        +(routeLabels[rm]||rm)+'</button>';
    }
    routeToggle = '<div style="margin:8px 0 12px;text-align:center">'+tbtns+'</div>';
  }

  // 外用薬で全動物種のnoteが同一の場合は専用レイアウト
  var isTopical = (activeRoute === 'topical');
  var topicalNote = null;
  if(isTopical && d.species){
    var allNotes = SPECIES.map(function(sp2){ var ss=getSpData(d,sp2,activeRoute); return ss.note||null; }).filter(Boolean);
    if(allNotes.length>0 && allNotes.every(function(n){return n===allNotes[0];})){
      topicalNote = allNotes[0];
    }
  }

  var rows='';
  if(topicalNote){
    // 外用薬専用: noteを整形して1枚のカードに表示
    var lines = topicalNote.split('\n');
    var noteHtml = '';
    lines.forEach(function(line){
      if(!line.trim()) return;
      if(line.match(/^【/)){
        noteHtml += '<div class="top-note-title">'+esc(line)+'</div>';
      } else {
        var cls = 'top-note-line';
        if(line.indexOf('⚠')>=0 || line.indexOf('禁忌')>=0) cls += ' warn';
        else if(line.indexOf('★')>=0) cls += ' good';
        noteHtml += '<div class="'+cls+'">'+esc(line)+'</div>';
      }
    });
    rows = '<div class="top-note-box">'+noteHtml+'</div>';
    // 用量がある動物種は別途表示
    for(var i=0;i<SPECIES.length;i++){
      var sp=SPECIES[i];
      var dzd2 = buildDoseHtml(d, sp, st.w, activeRoute, 'detail');
      if(dzd2.mlv || dzd2.tabletv){
        var act2=sp===st.sp;
        rows+='<div class="dr'+(act2?' act':'')+'"><div>'
          +'<div class="drn'+(act2?' bold':'')+'">'+esc(sp)+'</div>'
          +'</div><div class="drv">'
          +'<span class="dmv" style="color:var(--top)">'+esc(dzd2.tabletv||dzd2.mlv)+'</span>'
          +(dzd2.mgv?'<span class="dmg">'+esc(dzd2.mgv)+'</span>':'')
          +'</div></div>';
      }
    }
  } else {
    for(var i=0;i<SPECIES.length;i++){
      var sp=SPECIES[i];
      var s=getSpData(d, sp, activeRoute);
      var act=sp===st.sp;
      var dzd = buildDoseHtml(d, sp, st.w, activeRoute, 'detail');
      var mlv = dzd.tabletv || dzd.mlv || (dzd.note ? '参照' : '—');
      var mgv = dzd.tabletv ? (dzd.mgv||'') : (dzd.mgv || '');
      if(!dzd.tabletv && !dzd.mlv && !dzd.note) continue;
      rows+='<div class="dr'+(act?' act':'')+'"><div>'
        +'<div class="drn'+(act?' bold':'')+'">'+esc(sp)+'</div>'
        +(s.note?'<div class="nt">'+esc(s.note)+'</div>':'')
        +'</div><div class="drv">'
        +'<span class="dmv" style="color:var(--'+mclass+')">'+esc(mlv)+'</span>'
        +(mgv?'<span class="dmg">'+esc(mgv)+'</span>':'')
        +'</div></div>';
    }
  }
  if(!rows) rows='<p style="color:#6b7590;padding:16px 0">この動物種のデータがありません</p>';
  var edited=wasEdited(d);
  var btns='<div class="brow">'
    +'<button class="bsec" onclick="openEdit('+idx+')">✏️ 編集</button>'
    +'<button class="bsec" onclick="editIdx='+idx+';openCopySheet(null)">📋 指示書</button>'
    +(edited?'<button class="bsec w" onclick="resetDrug('+idx+')">↺ リセット</button>':'')
    +'<button class="bsec d" onclick="deleteDrug('+idx+')">🗑 削除</button>'
    +'</div>';
  var rxWidget='';
  if(activeRoute==='oral'){
    rxWidget='<div class="rx-calc">'
      +'<div class="rx-calc-ttl">💊 必要錠数計算</div>'
      +'<div class="rx-calc-row">'
      +'<select id="dtlDenom" onchange="dtlCalc()" class="rx-calc-sel">'
      +'<option value="1">1錠</option>'
      +'<option value="2" selected>1/2錠</option>'
      +'<option value="4">1/4錠</option>'
      +'<option value="8">1/8錠</option>'
      +'</select>'
      +'<select id="dtlTimes" onchange="dtlCalc()" class="rx-calc-sel">'
      +'<option value="1">SID</option>'
      +'<option value="2">BID</option>'
      +'<option value="3">TID</option>'
      +'<option value="0.5">EOD</option>'
      +'</select>'
      +'<input type="number" id="dtlDays" class="rx-calc-inp" inputmode="numeric" min="1" step="1" placeholder="日数" oninput="dtlCalc()">'
      +'<span class="rx-calc-lbl">日分</span>'
      +'<span style="color:var(--mu);font-size:13px;">→</span>'
      +'<span id="dtlTotal" class="rx-calc-result">—</span>'
      +'<span class="rx-calc-lbl">錠</span>'
      +'</div>'
      +'</div>';
  }
  document.getElementById('dtlBody').innerHTML=
    '<div class="mode-info '+mclass+'">'+modeInfoText+' &nbsp;|&nbsp; 体重 '+dispW(st.sp,st.w)+' '+dispUnit(st.sp)+'</div>'
    +routeToggle
    +'<div style="border-left:4px solid '+col+';padding-left:12px;margin-bottom:12px">'
    +'<div class="dname">'+esc(d.name.replace(/\n/g,' '))+'</div>'
    +'<div class="dsub">院内濃度: '+esc(d.concText||'記載なし')+' | '+esc(d.category)+'</div>'
    +'</div>'
    +rows
    +(d.memo&&d.memo!=='記載なし'?'<div class="memo">📝 '+esc(d.memo)+'</div>':'')
    +(d.ref?'<div style="font-size:11px;color:var(--mu);margin:6px 0 4px;line-height:1.6">📚 '+esc(d.ref)+'</div>':'')
    +rxWidget
    +(d.name?'<button class="ref-link" style="cursor:pointer;border:none;width:100%;text-align:left;background:rgba(76,142,255,.08);border:1px solid rgba(76,142,255,.25);" onclick="openSearchSheetById(\''+esc(d.id||'')+'\')">'+'🔍 添付文書・製品情報を検索<span class="ref-badge">'+esc(d.source||'PMDA / NVAL')+'</span></button>':'')
    +btns;
  openSheet('shDtl');
}

// 詳細画面でroute切り替え
function switchDetailRoute(idx, newRoute){
  var d=DRUGS[idx]; if(!d) return;
  var origRoute = MASTER.find(function(m){ return m.id===d.id; });
  if(origRoute && Array.isArray(origRoute.route) && origRoute.route.length > 1){
    d.route = origRoute.route;
  } else {
    d.route = newRoute;
    routeOverrides[d.id || d.name] = newRoute;
    saveRoutes();
  }
  saveData();
  openDetail(idx);
  render(); renderTabs();
}

//========== SPECIES FIELDS ==========
function buildSpFields(prefix, d){
  var out='';
  for(var i=0;i<SPECIES.length;i++){
    var sp=SPECIES[i];
    var s=d ? getSpData(d, sp) : {};
    out+='<div class="sprow"><label>'+esc(sp)+'</label>'
      +'<input class="fi sm" id="'+prefix+'lo_'+sp+'" type="number" step="any" placeholder="最小" value="'+(s.lo!=null?s.lo:'')+'"> '
      +'<input class="fi sm" id="'+prefix+'hi_'+sp+'" type="number" step="any" placeholder="最大" value="'+(s.hi!=null?s.hi:'')+'"></div>'
      +'<div style="margin-bottom:6px"><input class="fi" style="font-size:12px" id="'+prefix+'nt_'+sp+'" placeholder="備考" value="'+esc(s.note||'')+'"></div>';
  }
  return out;
}
function readSpFields(prefix){
  var sp={};
  for(var i=0;i<SPECIES.length;i++){
    var s=SPECIES[i];
    var lo=document.getElementById(prefix+'lo_'+s).value;
    var hi=document.getElementById(prefix+'hi_'+s).value;
    var nt=document.getElementById(prefix+'nt_'+s).value.trim();
    var loN=lo===''?null:parseFloat(lo);
    var hiN=hi===''?null:parseFloat(hi);
    if(loN!=null&&hiN==null) hiN=loN;
    sp[s]={lo:loN,hi:hiN,note:nt||null};
  }
  return sp;
}

//========== EDIT SHEET ==========
function openEdit(idx){
  editIdx=idx; var d=DRUGS[idx];
  document.getElementById('eName').value=d.name.replace(/\n/g,' ');
  document.getElementById('eConc').value=d.conc!=null?d.conc:'';
  document.getElementById('eConcT').value=d.concText||'';
  document.getElementById('eMemo').value=(d.memo&&d.memo!=='記載なし')?d.memo:'';
  document.getElementById('eCat').value=d.category;
  document.getElementById('eRoute').value=getRoute(d); // 配列routeの場合はgetRouteで現在modeを取得
  document.getElementById('eSpFields').innerHTML=buildSpFields('e',d);
  refreshCatOptions();
  closeAll();
  setTimeout(function(){openSheet('shEdit');},80);
}
function saveEdit(){
  var d=DRUGS[editIdx];
  var oldName=d.name;
  d.name=document.getElementById('eName').value.trim();
  d.category=document.getElementById('eCat').value;
  d.route=document.getElementById('eRoute').value;
  d.concText=document.getElementById('eConcT').value.trim();
  var cv=document.getElementById('eConc').value;
  d.conc=cv===''?null:parseFloat(cv);
  var mv=document.getElementById('eMemo').value.trim();
  d.memo=mv||'記載なし';
  d.species=readSpFields('e');
  // route変更を専用ストレージにも保存（DRUGSリセット後も維持される）
  // IDベース管理: 名前が変わってもIDは不変なので設定が引き継がれる
  routeOverrides[d.id || d.name] = d.route;
  saveRoutes();
  if(!d.id) d.id = 'drug_' + String(editIdx+1).padStart(3,'0');
  saveData(); renderTabs(); render(); closeAll(); toast('保存しました ✓');
}
function resetDrug(idx){
  if(!confirm('元のデータに戻しますか？')) return;
  var name=DRUGS[idx].name;
  for(var i=0;i<MASTER.length;i++){
    if(MASTER[i].name===name){DRUGS[idx]=dc(MASTER[i]);break;}
  }
  delete routeOverrides[name]; // route編集もリセット
  saveRoutes();
  saveData(); render(); closeAll(); toast('リセットしました');
}
function deleteDrug(idx){
  if(!confirm('「'+DRUGS[idx].name.split('\n')[0]+'」を削除しますか？')) return;
  delete routeOverrides[DRUGS[idx].name];
  saveRoutes();
  DRUGS.splice(idx,1);
  saveData(); renderTabs(); render(); closeAll(); toast('削除しました');
}

//========== ADD SHEET ==========
function openAdd(){
  refreshCatOptions();
  document.getElementById('aName').value='';
  document.getElementById('aConc').value='';
  document.getElementById('aConcT').value='';
  document.getElementById('aMemo').value='';
  document.getElementById('aCat').value=getCats()[0]||CATS[0];
  document.getElementById('aRoute').value=st.mode;
  document.getElementById('aSpFields').innerHTML=buildSpFields('a',null);
  openSheet('shAdd');
}
function saveAdd(){
  var name=document.getElementById('aName').value.trim();
  if(!name){alert('薬剤名を入力してください');return;}
  var cv=document.getElementById('aConc').value;
  var route=document.getElementById('aRoute').value;
  var drug={
    name:name,
    category:document.getElementById('aCat').value,
    route:route,
    conc:cv===''?null:parseFloat(cv),
    concText:document.getElementById('aConcT').value.trim()||'記載なし',
    memo:document.getElementById('aMemo').value.trim()||'記載なし',
    species:readSpFields('a')
  };
  // ID自動付与
  var maxIdSA = 0;
  for(var ksa=0;ksa<DRUGS.length;ksa++){
    if(DRUGS[ksa].id){ var nsa=parseInt(DRUGS[ksa].id.replace('drug_','')); if(nsa>maxIdSA) maxIdSA=nsa; }
  }
  drug.id = 'drug_' + String(maxIdSA+1).padStart(3,'0');
  DRUGS.push(drug);
  routeOverrides[drug.id] = route;
  saveRoutes();
  saveData(); renderTabs(); render(); closeAll(); toast('「'+name+'」を追加しました ✓');
}

//========== MGMT ==========
function buildDefaultWeightFields(){
  var sp_list = ['犬','猫','ウサギ','フェレット','モルモット','ハリネズミ','ハムスター'];
  var out = '<div class="box" style="margin-top:0"><div class="boxt">デフォルト体重</div>';
  for(var i=0;i<sp_list.length;i++){
    var sp=sp_list[i]; var small=isSmall(sp);
    var val=small ? Math.round((spWeights[sp]||0.1)*1000) : (spWeights[sp]||1.0);
    out += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
      +'<span style="width:80px;font-size:13px;color:var(--mu)">'+sp+'</span>'
      +'<input id="dw_'+sp+'" type="number" step="any" min="0.01" class="fi sm" style="flex:1" onfocus="this.select()" inputmode="decimal" value="'+val+'">'
      +'<span style="font-size:13px;color:var(--mu);width:20px">'+dispUnit(sp)+'</span>'
      +'</div>';
  }
  out += '<button class="bprim" style="margin-top:8px" onclick="saveDefaultWeights()">保存</button></div>';
  return out;
}

function saveDefaultWeights(){
  var sp_list = ['犬','猫','ウサギ','フェレット','モルモット','ハリネズミ','ハムスター'];
  for(var i=0;i<sp_list.length;i++){
    var sp=sp_list[i]; var small=isSmall(sp);
    var el=document.getElementById('dw_'+sp);
    if(el){
      var v=parseFloat(el.value);
      if(v>0) spWeights[sp] = small ? v/1000 : v;
    }
  }
  st.w = spWeights[st.sp];
  document.getElementById('wlbl').textContent = dispW(st.sp,st.w)+' '+dispUnit(st.sp);
  saveWeights(); render();
  toast('デフォルト体重を保存しました ✓');
}

function openMgmt(){
  var added=0;
  for(var i=0;i<DRUGS.length;i++){
    var found=false;
    for(var j=0;j<MASTER.length;j++){if(MASTER[j].name===DRUGS[i].name){found=true;break;}}
    if(!found) added++;
  }
  var edited=0;
  for(var i=0;i<DRUGS.length;i++){if(wasEdited(DRUGS[i]))edited++;}
  document.getElementById('mgmtBody').innerHTML=buildDefaultWeightFields()+
    '<div class="srow">'
    +'<div class="stat"><span>'+DRUGS.length+'</span><small>総薬剤数</small></div>'
    +'<div class="stat"><span style="color:#1fcc7a">'+added+'</span><small>追加済み</small></div>'
    +'<div class="stat"><span style="color:#ffb020">'+edited+'</span><small>編集済み</small></div>'
    +'</div>'
    +'<button class="mbtn" onclick="openBackupSelect()">⬇️ JSONバックアップ<small>現在のデータをファイルで保存</small></button>'
    +'<button class="mbtn" onclick="document.getElementById(\'fileIn\').click()">⬆️ JSONインポート<small>バックアップから復元・統合</small></button>'
    +'<button class="mbtn" onclick="exportEdits()">📋 編集分のみエクスポート<small>追加・変更した薬剤のみ保存</small></button>'
    +'<div style="border-top:1px solid var(--bd);margin-top:12px;padding-top:12px">'
    +'<button class="mbtn" onclick="openSort()">🔀 表示順を並び替え<small>カテゴリー内でドラッグして並び替え</small></button>'
    +'<button class="mbtn" style="color:#6b7590" onclick="clearLS()">🗑 キャッシュをクリア<small>表示がおかしい時はこちら</small></button>'
    +'</div>'
    +'<div style="border-top:1px solid var(--bd);margin-top:12px;padding-top:12px">'
    +'<button class="mbtn" style="color:var(--mu)" onclick="localStorage.removeItem(\'vetcalc_disclaimer_agreed\');closeAll();setTimeout(()=>checkDisclaimer(),100)">📋 免責事項を確認<small>同意内容を再確認・再同意</small></button>'
    +'</div>';
  openSheet('shMgmt');
}
function openBackupSelect(){
  applyRouteOverrides();
  saveData();
  var added=0, edited=0;
  for(var i=0;i<DRUGS.length;i++){
    if(wasEdited(DRUGS[i])){
      var inMaster=false;
      for(var j=0;j<MASTER.length;j++){ if(MASTER[j].name===DRUGS[i].name){ inMaster=true; break; } }
      if(inMaster) edited++; else added++;
    }
  }
  var protoNames = protocols.map(function(p){ return p.name; });
  var html = '<div class="bk-row">'
    +'<input type="checkbox" id="bkAdded" checked>'
    +'<div class="bk-main"><div class="bk-title">追加した薬（'+added+'件）</div>'
    +'<div class="bk-sub">自分で新しく追加した薬剤</div></div></div>'
    +'<div class="bk-row">'
    +'<input type="checkbox" id="bkEdited" checked>'
    +'<div class="bk-main"><div class="bk-title">変更した薬（'+edited+'件）</div>'
    +'<div class="bk-sub">標準の薬から内容を変更したもの</div></div></div>'
    +'<div class="bk-row">'
    +'<input type="checkbox" id="bkProto" checked>'
    +'<div class="bk-main"><div class="bk-title">プロトコルセット（'+protocols.length+'件）</div>'
    +'<div class="bk-sub">'+(protoNames.length?esc(protoNames.join('、')):'なし')+'</div></div></div>'
    +'<div class="bk-row">'
    +'<input type="checkbox" id="bkOrder" checked>'
    +'<div class="bk-main"><div class="bk-title">カードの並び順</div>'
    +'<div class="bk-sub">薬剤一覧の表示順</div></div></div>'
    +'<div class="bk-row">'
    +'<input type="checkbox" id="bkSettings" checked>'
    +'<div class="bk-main"><div class="bk-title">体重・表示設定</div>'
    +'<div class="bk-sub">体重・サイズ・経路などの設定</div></div></div>'
    +'<div class="bk-actions">'
    +'<button class="bk-cancel" onclick="closeAll()">キャンセル</button>'
    +'<button class="bk-go" onclick="exportData()">バックアップを作成</button>'
    +'</div>';
  document.getElementById('bkSelTitle').textContent='バックアップに含めるもの';
  document.getElementById('bkSelBody').innerHTML=html;
  openSheet('shBackupSel');
}
function exportData(){
  var incAdded   = document.getElementById('bkAdded').checked;
  var incEdited  = document.getElementById('bkEdited').checked;
  var incProto   = document.getElementById('bkProto').checked;
  var incOrder   = document.getElementById('bkOrder').checked;
  var incSettings= document.getElementById('bkSettings').checked;

  // routeOverridesをDRUGS本体に反映してから出力（トグル変更漏れを防ぐ）
  applyRouteOverrides();
  saveData();

  var outDrugs = DRUGS;
  if(!incAdded || !incEdited){
    outDrugs = DRUGS.filter(function(d){
      if(!wasEdited(d)) return true; // 未編集はベースとして常に含める
      var inMaster=false;
      for(var j=0;j<MASTER.length;j++){ if(MASTER[j].name===d.name){ inMaster=true; break; } }
      if(inMaster) return incEdited;  // 変更済み
      return incAdded;                // 新規追加
    });
  }

  var out = { _meta: { version: 'vetcalc_pro', exported: new Date().toISOString() }, drugs: outDrugs };
  if(incOrder) out.calc_order = getCalcOrder();
  if(incProto) out.protocols = protocols;
  if(incSettings){ out.routeOverrides = routeOverrides; out.weights = spWeights; out.sizeSettings = szCfg; }

  var a=document.createElement('a'); var d=new Date();
  a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'}));
  a.download='VetCalcPRO_backup_'+d.getFullYear()+('0'+(d.getMonth()+1)).slice(-2)+('0'+d.getDate()).slice(-2)+'.json';
  a.click(); closeAll(); toast('バックアップ完了 ✓');
}
function exportEdits(){
  applyRouteOverrides(); // route変更を確実に反映
  saveData();
  var out=[];
  for(var i=0;i<DRUGS.length;i++){if(wasEdited(DRUGS[i]))out.push(DRUGS[i]);}
  if(!out.length){toast('編集済みデータはありません');return;}
  var a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'}));
  a.download='VetCalc_edits_'+new Date().toISOString().slice(0,10)+'.json';
  a.click(); toast(out.length+'剤をエクスポート ✓');
}
function resetAll(){
  if(!confirm('全データを初期値に戻します。よいですか？')) return;
  DRUGS=dc(MASTER);
  applyRouteOverrides(); // route編集を維持
  saveData(); renderTabs(); render(); closeAll(); toast('リセットしました');
}
function clearLS(){
  if(!confirm('薬剤データのキャッシュを削除してマスターに戻します。\nroute（注射/内服）の設定は保持されます。\nよいですか？')) return;
  localStorage.removeItem(LS_KEY);
  DRUGS=dc(MASTER);
  loadRoutes();           // routeOverridesを再読み込み
  applyRouteOverrides();  // route編集を再適用
  saveData(); renderTabs(); render(); closeAll(); toast('キャッシュをクリアしました');
}
document.getElementById('fileIn').onchange=function(ev){
  var file=ev.target.files[0]; if(!file) return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var raw=JSON.parse(e.target.result);
      var imp, importedRoutes=null;
      if(raw && raw._meta && Array.isArray(raw.drugs)){
        imp = raw.drugs;
        importedRoutes = raw.routeOverrides || null;
      } else if(Array.isArray(raw)){
        imp = raw;
      } else {
        throw new Error('形式が不明です');
      }
      var valid = imp.filter(function(d){ return d && typeof d.name==='string' && d.species; });
      if(valid.length === 0) throw new Error('有効な薬剤データがありません');
      imp = valid;
      imp.forEach(function(d,i){ if(!d.id) d.id='drug_imp_'+String(i+1).padStart(3,'0'); });
      // 3択ダイアログ（Promise）
      document.getElementById('impDialogMsg').textContent = imp.length+'剤のデータが見つかりました。どちらの方法で読み込みますか？';
      document.getElementById('importDialog').classList.add('show');
      _importResolve = function(choice){
        document.getElementById('importDialog').classList.remove('show');
        if(choice === 'cancel'){ ev.target.value=''; return; }
        if(choice === 'merge'){
          for(var i=0;i<imp.length;i++){
            var found=false;
            for(var j=0;j<DRUGS.length;j++){if(DRUGS[j].name===imp[i].name){var _ec=DRUGS[j].conc;DRUGS[j]=imp[i];if(!DRUGS[j].conc&&_ec)DRUGS[j].conc=_ec;found=true;break;}}
            if(!found) DRUGS.push(imp[i]);
          }
        } else {
          DRUGS = imp;
          // conc未設定の場合はMASTERから補完
          var _mm={};for(var _mi=0;_mi<MASTER.length;_mi++)_mm[MASTER[_mi].name]=MASTER[_mi];
          for(var _di=0;_di<DRUGS.length;_di++){var _dm=_mm[DRUGS[_di].name];if(_dm&&!DRUGS[_di].conc&&_dm.conc)DRUGS[_di].conc=_dm.conc;}
          
        }
        if(importedRoutes) Object.assign(routeOverrides, importedRoutes);
        loadRoutes();
        applyRouteOverrides(); saveData(); renderTabs(); render();
        ev.target.value='';
        // 薬剤データ以外の項目を選択して反映
        openImportExtras(raw, imp.length);
      };
    }catch(err){alert('読み込みエラー: '+err.message); ev.target.value='';}
  };
  reader.readAsText(file);
};

function openImportExtras(raw, drugCount){
  var hasOrder = Array.isArray(raw.calc_order) && raw.calc_order.length;
  var hasProto = Array.isArray(raw.protocols) && raw.protocols.length;
  var hasSettings = !!(raw.weights || raw.sizeSettings || raw.routeOverrides);
  if(!hasOrder && !hasProto && !hasSettings){
    toast(drugCount+'剤を読み込みました ✓');
    return;
  }
  var protoNames = hasProto ? raw.protocols.map(function(p){ return p.name; }) : [];
  var html = '<div class="bk-row"><div class="bk-main"><div class="bk-title">薬剤データ（'+drugCount+'剤）</div>'
    +'<div class="bk-sub">読み込み済みです</div></div></div>';
  if(hasProto){
    html += '<div class="bk-row">'
      +'<input type="checkbox" id="bkImpProto" checked>'
      +'<div class="bk-main"><div class="bk-title">プロトコルセット（'+raw.protocols.length+'件）</div>'
      +'<div class="bk-sub">'+esc(protoNames.join('、'))+'</div></div></div>';
  }
  if(hasOrder){
    html += '<div class="bk-row">'
      +'<input type="checkbox" id="bkImpOrder" checked>'
      +'<div class="bk-main"><div class="bk-title">カードの並び順</div>'
      +'<div class="bk-sub">薬剤一覧の表示順を上書きします</div></div></div>';
  }
  if(hasSettings){
    html += '<div class="bk-row">'
      +'<input type="checkbox" id="bkImpSettings" checked>'
      +'<div class="bk-main"><div class="bk-title">体重・表示設定</div>'
      +'<div class="bk-sub">体重・サイズ・経路などの設定を上書きします</div></div></div>';
  }
  html += '<div class="bk-actions">'
    +'<button class="bk-cancel" onclick="closeAll();toast(\''+drugCount+'剤を読み込みました ✓\')">適用しない</button>'
    +'<button class="bk-go" onclick="applyImportExtras()">適用する</button>'
    +'</div>';
  window._importExtraData = raw;
  document.getElementById('bkSelTitle').textContent='読み込んだファイルの内容';
  document.getElementById('bkSelBody').innerHTML=html;
  openSheet('shBackupSel');
}
function applyImportExtras(){
  var raw = window._importExtraData; if(!raw) return;
  var msgs=[];
  var elProto = document.getElementById('bkImpProto');
  if(elProto && elProto.checked && Array.isArray(raw.protocols)){
    protocols = raw.protocols; saveProtocols();
    msgs.push('プロトコル'+protocols.length+'件');
  }
  var elOrder = document.getElementById('bkImpOrder');
  if(elOrder && elOrder.checked && Array.isArray(raw.calc_order)){
    saveCalcOrder(raw.calc_order);
    msgs.push('並び順');
  }
  var elSettings = document.getElementById('bkImpSettings');
  if(elSettings && elSettings.checked){
    if(raw.weights){ Object.assign(spWeights, raw.weights); saveWeights(); }
    if(raw.sizeSettings){ szCfg=Object.assign(szCfg, raw.sizeSettings); saveSizeSettings(); applySizeCss(); }
    if(raw.routeOverrides){ Object.assign(routeOverrides, raw.routeOverrides); saveRoutes(); applyRouteOverrides(); saveData(); }
    msgs.push('設定');
  }
  renderTabs(); render(); closeAll();
  toast((msgs.length?msgs.join('・')+'を反映 ✓':'反映なし'));
}


// DRUGSの並び順を反映したカテゴリーリストを返す
function getCats(){
  var seen = {}, cats = [];
  for(var i=0;i<DRUGS.length;i++){
    if(DRUGS[i] && DRUGS[i].category && !seen[DRUGS[i].category]){
      seen[DRUGS[i].category] = 1;
      cats.push(DRUGS[i].category);
    }
  }
  // CATS定数にあってDRUGSにないカテゴリーも末尾に補完
  for(var j=0;j<CATS.length;j++){
    if(!seen[CATS[j]]){ cats.push(CATS[j]); }
  }
  return cats;
}

// 編集・追加画面のカテゴリープルダウンを再生成
function refreshCatOptions(){
  var cats = getCats();
  var optHTML = '';
  for(var i=0;i<cats.length;i++) optHTML += '<option>'+cats[i]+'</option>';
  document.getElementById('eCat').innerHTML = optHTML;
  document.getElementById('aCat').innerHTML = optHTML;
}

//========== INIT ==========
refreshCatOptions(); // DRUGS順を反映したカテゴリープルダウン初期化

var spOptHTML='';
for(var i=0;i<SPECIES.length;i++) spOptHTML+='<option>'+SPECIES[i]+'</option>';
document.getElementById('spSel').innerHTML=spOptHTML;
document.getElementById('spInp').innerHTML=spOptHTML;

document.getElementById('spSel').onchange=function(){
  switchSpecies(this.value);
  document.getElementById('wlbl').textContent = dispW(st.sp, st.w) + ' ' + dispUnit(st.sp);
  renderTabs(); render();
};
(function(){
  var sb = document.getElementById('searchBar');
  var composing = false;
  sb.addEventListener('compositionstart', function(){ composing = true; });
  sb.addEventListener('compositionend', function(){ composing = false; st.q = this.value; render(); });
  sb.addEventListener('input', function(){ if(!composing){ st.q = this.value; render(); } });
})();
document.getElementById('tabrow').addEventListener('click',function(e){
  var t=e.target.closest('.tab'); if(!t) return;
  st.cat=t.getAttribute('data-c');
  var all=document.querySelectorAll('.tab');
  for(var i=0;i<all.length;i++) all[i].classList.remove('on');
  t.classList.add('on');
  render();
});
document.getElementById('grid').addEventListener('click',function(e){
  var c=e.target.closest('.card');
  if(c) openDetail(parseInt(c.getAttribute('data-i')));
});
// ========== COLOR THEMES ==========
var LS_BASE_KEY = 'vetcalc_base';
var LS_ACCENT_KEY = 'vetcalc_accent';
var BASE_COLORS = {
  dark:  { label:'🌙 ダーク',  bg:'#12151e', pn:'#1a1e28', bd:'#272e42', tx:'#dde2f0', mu:'#7b84a0' },
  light: { label:'☀️ ライト', bg:'#f0f2f8', pn:'#ffffff', bd:'#dde2f0', tx:'#111318', mu:'#6b7590' },
};
var ACCENT_COLORS = {
  blue:   { name:'ブルー',   ac:'#4c8eff' },
  purple: { name:'パープル', ac:'#a855f7' },
  green:  { name:'グリーン', ac:'#22c55e' },
  cyan:   { name:'シアン',   ac:'#06b6d4' },
  orange: { name:'オレンジ', ac:'#f97316' },
};
var currentBase = 'dark';
var currentAccent = 'blue';
var LEGACY_MAP = { dark:'dark,blue', midnight:'dark,purple', forest:'dark,green', slate:'dark,cyan', warm:'dark,orange', light:'light,blue' };

function loadTheme(){
  try{
    var b = localStorage.getItem(LS_BASE_KEY);
    var a = localStorage.getItem(LS_ACCENT_KEY);
    if(!b || !BASE_COLORS[b]){
      var old = localStorage.getItem('vetcalc_theme');
      if(old && LEGACY_MAP[old]){ var p=LEGACY_MAP[old].split(','); b=p[0]; a=p[1]; }
    }
    if(b && BASE_COLORS[b]) currentBase = b;
    if(a && ACCENT_COLORS[a]) currentAccent = a;
  }catch(e){}
  applyTheme(false);
}
function applyTheme(save){
  var base = BASE_COLORS[currentBase];
  var accent = ACCENT_COLORS[currentAccent];
  var r = document.documentElement.style;
  r.setProperty('--bg', base.bg);
  r.setProperty('--pn', base.pn);
  r.setProperty('--bd', base.bd);
  r.setProperty('--tx', base.tx);
  r.setProperty('--mu', base.mu);
  r.setProperty('--ac', accent.ac);
  if(save){ try{ localStorage.setItem(LS_BASE_KEY, currentBase); localStorage.setItem(LS_ACCENT_KEY, currentAccent); }catch(e){} }
  syncThemeUI();
}
function syncThemeUI(){
  var baseRow = document.getElementById('themeBaseRow');
  if(baseRow){
    var h='';
    for(var k in BASE_COLORS){
      var b=BASE_COLORS[k]; var on=(k===currentBase); var isL=(k==='light');
      var sty='border-color:'+(on?b.tx:b.bd)+';color:'+(on?b.tx:b.mu)+(isL?';background:'+b.pn:'');
      h+='<button class="theme-base-btn'+(on?' on':'')+'" data-base="'+k+'" style="'+sty+'">'+b.label+'<\/button>';
    }
    baseRow.innerHTML=h;
  }
  var acRow = document.getElementById('themeAccentRow');
  if(acRow){
    var h='';
    for(var k in ACCENT_COLORS){
      var a=ACCENT_COLORS[k]; var on=(k===currentAccent);
      h+='<div class="theme-ac-sw'+(on?' on':'')+'" data-accent="'+k+'" title="'+a.name+'" style="background:'+a.ac+'">'
        +'<div class="theme-ac-dot" style="border-color:rgba(255,255,255,'+(on?'.9':'.2')+')"></div>'
        +'</div>';
    }
    acRow.innerHTML=h;
  }
  var lbl=document.getElementById('themeNameLbl');
  if(lbl) lbl.textContent=BASE_COLORS[currentBase].label.replace(/^\S+ /,'')+' × '+ACCENT_COLORS[currentAccent].name;
}
(function(){
  document.addEventListener('click',function(e){
    var bb=e.target.closest('[data-base]');
    if(bb){ currentBase=bb.getAttribute('data-base'); applyTheme(true); return; }
    var ab=e.target.closest('[data-accent]');
    if(ab){ currentAccent=ab.getAttribute('data-accent'); applyTheme(true); }
  });
})();

// ========== SIZE SETTINGS ==========
var LS_SIZE_KEY = 'vetcalc_size';
var szCfg = {minW:160, cardH:90, cardP:14, nmFont:13, cvFont:23, subFont:10};

function loadSizeSettings(){
  try {
    var raw = localStorage.getItem(LS_SIZE_KEY);
    if(raw){ var p=JSON.parse(raw); if(p&&typeof p==='object') szCfg=Object.assign(szCfg,p); }
  } catch(e){}
}
function saveSizeSettings(){
  try{ localStorage.setItem(LS_SIZE_KEY, JSON.stringify(szCfg)); }catch(e){}
}
function applySizeCss(){
  var r = document.documentElement.style;
  r.setProperty('--card-min-w', szCfg.minW+'px');
  r.setProperty('--card-min-h', szCfg.cardH+'px');
  r.setProperty('--card-pad', szCfg.cardP+'px '+(szCfg.cardP-2)+'px');
  r.setProperty('--font-nm', szCfg.nmFont+'px');
  r.setProperty('--font-cv', szCfg.cvFont+'px');
  r.setProperty('--font-cat', szCfg.subFont+'px');
  r.setProperty('--font-csub', szCfg.subFont+'px');
  var g=document.getElementById('grid');
  if(g){ g.className=szCfg.minW>=320?'g1':'g2'; }
}
function resetSizeSettings(){
  szCfg={minW:160,cardH:90,cardP:14,nmFont:13,cvFont:23,subFont:10};
  applySizeCss();
  syncSizeSliders();
}
function syncSizeSliders(){
  var el;
  el=document.getElementById('cardWSlider'); if(el){ el.value=szCfg.minW; var l=document.getElementById('cardWLbl'); if(l) l.textContent=szCfg.minW+'px'; }
  el=document.getElementById('cardHSlider'); if(el){ el.value=szCfg.cardH; document.getElementById('cardHLbl').textContent=szCfg.cardH+'px'; }
  el=document.getElementById('cardPSlider'); if(el){ el.value=szCfg.cardP; }
  el=document.getElementById('nmSlider');   if(el){ el.value=szCfg.nmFont; document.getElementById('nmFontLbl').textContent=szCfg.nmFont+'px'; }
  el=document.getElementById('cvSlider');   if(el){ el.value=szCfg.cvFont; document.getElementById('cvFontLbl').textContent=szCfg.cvFont+'px'; }
  el=document.getElementById('subSlider');  if(el){ el.value=szCfg.subFont; }
}
function openSizeSettings(){
  syncSizeSliders();
  syncThemeUI();
  syncSizePresetUI();
  openSheet('shSize');
}
var SIZE_PRESETS = {
  S: {minW:130, cardH:72, cardP:10, nmFont:11, cvFont:19, subFont:9},
  M: {minW:160, cardH:90, cardP:14, nmFont:13, cvFont:23, subFont:10},
  L: {minW:220, cardH:110, cardP:18, nmFont:15, cvFont:28, subFont:11},
  LL:{minW:500, cardH:130, cardP:20, nmFont:18, cvFont:32, subFont:14},
};
function applySizePreset(key){
  var p = SIZE_PRESETS[key];
  if(!p) return;
  szCfg = Object.assign(szCfg, p);
  applySizeCss();
  syncSizeSliders();
  syncSizePresetUI();
}
function syncSizePresetUI(){
  var btns = document.querySelectorAll('.sz-pre');
  btns.forEach(function(btn){
    var k = btn.getAttribute('data-szpre');
    var p = SIZE_PRESETS[k];
    if(!p) return;
    var match = p.minW===szCfg.minW && p.cardH===szCfg.cardH && p.cvFont===szCfg.cvFont;
    btn.classList.toggle('on', match);
  });
}
function onCardW(v){
  szCfg.minW=parseInt(v); applySizeCss();
  var lbl=document.getElementById('cardWLbl');
  if(lbl) lbl.textContent=v+'px';
}
function onCardH(v){ szCfg.cardH=parseInt(v); applySizeCss(); document.getElementById('cardHLbl').textContent=v+'px'; }
function onCardP(v){ szCfg.cardP=parseInt(v); applySizeCss(); }
function onNmFont(v){ szCfg.nmFont=parseInt(v); applySizeCss(); document.getElementById('nmFontLbl').textContent=v+'px'; }
function onCvFont(v){ szCfg.cvFont=parseInt(v); applySizeCss(); document.getElementById('cvFontLbl').textContent=v+'px'; }
function onSubFont(v){ szCfg.subFont=parseInt(v); applySizeCss(); }

// ========== AUTO-HIDE HEADER ==========
(function(){
  var lastY = 0, ticking = false, hdrH = 0;

  function measureHdr(){
    var hdr = document.querySelector('.hdr');
    if(hdr){ hdrH = hdr.offsetHeight; }
    var safeTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
        document.documentElement.style.setProperty('--hdr-h', (hdrH + 10 + safeTop) + 'px');
  }

  function setHdrVisible(visible){
    var hdr = document.querySelector('.hdr');
    if(!hdr) return;
    if(visible){
      hdr.classList.remove('hidden');
      var safeTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
          document.documentElement.style.setProperty('--hdr-h', (hdrH + 10 + safeTop) + 'px');
    } else {
      hdr.classList.add('hidden');
      document.documentElement.style.setProperty('--hdr-h', '10px');
    }
  }

  function onScroll(){
    var w = document.querySelector('.wrap');
    if(!w) return;
    var cur = w.scrollTop;
    if(cur > lastY + 4 && cur > 80){
      setHdrVisible(false);
    } else if(cur < lastY - 4 || cur < 40){
      setHdrVisible(true);
    }
    lastY = cur;
    ticking = false;
  }

  document.addEventListener('DOMContentLoaded', function(){
    // 少し遅らせてheight確定後に計測
    setTimeout(function(){
      measureHdr();
      window.addEventListener('resize', measureHdr);
    }, 100);
    var w = document.querySelector('.wrap');
    if(w){
      w.addEventListener('scroll', function(){
        if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
      });
    }
  });
})();



//========== SORT / REORDER ==========
var sortCurrentCat = null;

function openSort(){
  var cats = [];
  for(var i=0;i<DRUGS.length;i++){
    if(DRUGS[i] && DRUGS[i].category && cats.indexOf(DRUGS[i].category)<0)
      cats.push(DRUGS[i].category);
  }
  if(cats.length===0){ toast('薬剤がありません'); return; }
  sortCurrentCat = cats[0];
  renderCatList(cats);
  renderSortCatBtns(cats);
  renderSortList();
  closeAll();
  openSheet('shSort');
}

function renderCatList(cats){
  var list = document.getElementById('sortCatList');
  if(!list) return;
  var h = '';
  for(var k=0;k<cats.length;k++){
    h += '<li class="sort-item" draggable="true" data-cat="'+esc(cats[k])+'">'
      +'<span class="sort-handle">⠿</span>'
      +'<span class="sort-name">'+esc(cats[k])+'</span>'
      +'</li>';
  }
  list.innerHTML = h;
  initDragSortList(list);
}

function renderSortCatBtns(cats){
  var h = '';
  for(var c=0;c<cats.length;c++){
    h += '<button class="sort-cat-btn'+(cats[c]===sortCurrentCat?' on':'')+'" '
      +'onclick="switchSortCat(this.dataset.cat)" data-cat="'+esc(cats[c])+'">'
      +esc(cats[c])+'</button>';
  }
  document.getElementById('sortCatSel').innerHTML = h;
}

function switchSortCat(cat){
  sortCurrentCat = cat;
  var btns = document.querySelectorAll('.sort-cat-btn');
  for(var i=0;i<btns.length;i++){
    btns[i].classList.toggle('on', btns[i].dataset.cat===cat);
  }
  renderSortList();
}

function renderSortList(){
  var list = document.getElementById('sortList');
  if(!list) return;
  // data-nameで薬剤を特定（インデックスは変動するので名前ベース）
  var h = '';
  for(var i=0;i<DRUGS.length;i++){
    var d = DRUGS[i];
    if(!d || d.category !== sortCurrentCat) continue;
    h += '<li class="sort-item" draggable="true" data-name="'+esc(d.name)+'">'
      +'<span class="sort-handle">⠿</span>'
      +'<span class="sort-name">'+esc(d.name.replace(/\n/g,' '))+'</span>'
      +'<span class="sort-conc">'+esc(d.concText||'')+'</span>'
      +'</li>';
  }
  list.innerHTML = h;
  initDragSortList(list);
}

// 汎用ドラッグ初期化（DOM内で並び替えるだけ）
function initDragSortList(list){
  var dragSrc = null;
  list.addEventListener('dragstart', function(e){
    dragSrc = e.target.closest('.sort-item');
    if(!dragSrc) return;
    setTimeout(function(){ dragSrc.classList.add('dragging'); }, 0);
    e.dataTransfer.effectAllowed = 'move';
  });
  list.addEventListener('dragend', function(){
    list.querySelectorAll('.sort-item').forEach(function(x){ x.classList.remove('dragging','drag-over'); });
    dragSrc = null;
  });
  list.addEventListener('dragover', function(e){
    e.preventDefault();
    var target = e.target.closest('.sort-item');
    if(!target || target === dragSrc) return;
    list.querySelectorAll('.sort-item').forEach(function(x){ x.classList.remove('drag-over'); });
    target.classList.add('drag-over');
  });
  list.addEventListener('drop', function(e){
    e.preventDefault();
    var target = e.target.closest('.sort-item');
    if(!target || !dragSrc || target === dragSrc) return;
    var allItems = Array.from(list.querySelectorAll('.sort-item'));
    var fi = allItems.indexOf(dragSrc), ti = allItems.indexOf(target);
    if(fi < ti) list.insertBefore(dragSrc, target.nextSibling);
    else        list.insertBefore(dragSrc, target);
    list.querySelectorAll('.sort-item').forEach(function(x){ x.classList.remove('drag-over'); });
  });

  // タッチ対応
  var touchSrc = null, touchClone = null;
  list.addEventListener('touchstart', function(e){
    var item = e.target.closest('.sort-item');
    if(!item) return;
    touchSrc = item;
    item.classList.add('dragging');
  }, {passive:true});
  list.addEventListener('touchmove', function(e){
    if(!touchSrc) return;
    e.preventDefault();
    var touch = e.touches[0];
    list.querySelectorAll('.sort-item').forEach(function(x){ x.classList.remove('drag-over'); });
    var el = document.elementFromPoint(touch.clientX, touch.clientY);
    var target = el ? el.closest('.sort-item') : null;
    if(target && target !== touchSrc) target.classList.add('drag-over');
  }, {passive:false});
  list.addEventListener('touchend', function(e){
    if(!touchSrc) return;
    touchSrc.classList.remove('dragging');
    var touch = e.changedTouches[0];
    var el = document.elementFromPoint(touch.clientX, touch.clientY);
    var target = el ? el.closest('.sort-item') : null;
    if(target && target !== touchSrc){
      var allItems = Array.from(list.querySelectorAll('.sort-item'));
      var fi = allItems.indexOf(touchSrc), ti = allItems.indexOf(target);
      if(fi < ti) list.insertBefore(touchSrc, target.nextSibling);
      else        list.insertBefore(touchSrc, target);
    }
    list.querySelectorAll('.sort-item').forEach(function(x){ x.classList.remove('drag-over','dragging'); });
    touchSrc = null;
  }, {passive:true});
}

function saveCatOrder(){
  var items = document.querySelectorAll('#sortCatList .sort-item');
  var newCatOrder = Array.from(items).map(function(el){ return el.getAttribute('data-cat'); });
  // カテゴリーごとにグループ化
  var grouped = {};
  DRUGS.forEach(function(d){
    if(!d) return;
    if(!grouped[d.category]) grouped[d.category] = [];
    grouped[d.category].push(d);
  });
  // 新順で再構成
  var newDrugs = [];
  newCatOrder.forEach(function(cat){ (grouped[cat]||[]).forEach(function(d){ newDrugs.push(d); }); });
  // 未知カテゴリーを末尾に
  Object.keys(grouped).forEach(function(cat){
    if(newCatOrder.indexOf(cat)<0) grouped[cat].forEach(function(d){ newDrugs.push(d); });
  });
  DRUGS = newDrugs;
  saveData(); render(); renderTabs();
  toast('カテゴリーの順番を保存しました ✓');
  // ②のボタンも更新
  var cats = newCatOrder;
  renderSortCatBtns(cats);
}

function saveSortOrder(){
  // DOM上の薬剤名順を読み取る
  var items = document.querySelectorAll('#sortList .sort-item');
  var newNameOrder = Array.from(items).map(function(el){ return el.getAttribute('data-name'); });
  // 対象カテゴリーの薬剤を名前順で並び替え
  var catDrugs = [];
  newNameOrder.forEach(function(name){
    var d = DRUGS.find(function(x){ return x && x.name===name; });
    if(d) catDrugs.push(d);
  });
  // DRUGS配列を再構成（カテゴリーの位置を保ちつつ内部を入れ替え）
  var newDrugs = [];
  var catInserted = false;
  for(var i=0;i<DRUGS.length;i++){
    if(DRUGS[i] && DRUGS[i].category===sortCurrentCat){
      if(!catInserted){ catDrugs.forEach(function(d){ newDrugs.push(d); }); catInserted=true; }
    } else {
      newDrugs.push(DRUGS[i]);
    }
  }
  DRUGS = newDrugs;
  saveData(); render(); renderTabs();
  toast('「'+sortCurrentCat+'」の順番を保存しました ✓');
  renderSortList(); // data-nameを更新
}

//========== CARD DRAG & DROP ==========
var cardDragSrc = null;
var cardDragSrcIdx = null;

var cardDragInitialized = false;
function initCardDrag(){
  if(cardDragInitialized) return;
  cardDragInitialized = true;
  var grid = document.getElementById('grid');
  if(!grid) return;

  grid.addEventListener('dragstart', function(e){
    var card = e.target.closest('.card');
    if(!card) return;
    cardDragSrc = card;
    cardDragSrcIdx = parseInt(card.getAttribute('data-i'));
    setTimeout(function(){ card.classList.add('drag-dragging'); }, 0);
    e.dataTransfer.effectAllowed = 'move';
  });

  grid.addEventListener('dragend', function(e){
    var card = e.target.closest('.card');
    if(!card) return;
    card.classList.remove('drag-dragging');
    grid.querySelectorAll('.card').forEach(function(c){
      c.classList.remove('drag-over-top','drag-over-bot');
    });
    cardDragSrc = null;
  });

  grid.addEventListener('dragover', function(e){
    e.preventDefault();
    var card = e.target.closest('.card');
    if(!card || card === cardDragSrc) return;
    // 異カテゴリーは無視
    if(card.getAttribute('data-cat') !== cardDragSrc.getAttribute('data-cat')) return;
    grid.querySelectorAll('.card').forEach(function(c){
      c.classList.remove('drag-over-top','drag-over-bot');
    });
    var rect = card.getBoundingClientRect();
    var mid = rect.top + rect.height / 2;
    if(e.clientY < mid) card.classList.add('drag-over-top');
    else                card.classList.add('drag-over-bot');
    e.dataTransfer.dropEffect = 'move';
  });

  grid.addEventListener('dragleave', function(e){
    var card = e.target.closest('.card');
    if(card){ card.classList.remove('drag-over-top','drag-over-bot'); }
  });

  grid.addEventListener('drop', function(e){
    e.preventDefault();
    var targetCard = e.target.closest('.card');
    if(!targetCard || !cardDragSrc || targetCard === cardDragSrc) return;
    if(targetCard.getAttribute('data-cat') !== cardDragSrc.getAttribute('data-cat')) return;

    var fromIdx = parseInt(cardDragSrc.getAttribute('data-i'));
    var toIdx   = parseInt(targetCard.getAttribute('data-i'));

    // 上半分か下半分か
    var rect = targetCard.getBoundingClientRect();
    var insertBefore = e.clientY < rect.top + rect.height / 2;

    // DRUGS配列を直接並び替え
    var drug = DRUGS[fromIdx];
    DRUGS.splice(fromIdx, 1);
    // splice後のtoIdxを再計算
    var newTo = parseInt(targetCard.getAttribute('data-i'));
    if(fromIdx < newTo) newTo--;
    if(!insertBefore) newTo++;
    DRUGS.splice(newTo, 0, drug);

    saveData();
    render();
    renderTabs();
  });

  // ===== タッチ対応 =====
  var touchDragCard = null, touchDragIdx = null, touchClone = null;

  grid.addEventListener('touchstart', function(e){
    var card = e.target.closest('.card.draggable');
    if(!card) return;
    // 長押し判定（300ms）
    var touch = e.touches[0];
    touchDragCard = null;
    var timer = setTimeout(function(){
      touchDragCard = card;
      touchDragIdx = parseInt(card.getAttribute('data-i'));
      card.classList.add('drag-dragging');
      // クローンを作って指に追従させる
      touchClone = card.cloneNode(true);
      touchClone.style.cssText = 'position:fixed;z-index:9999;opacity:.8;pointer-events:none;width:'+card.offsetWidth+'px;left:'+(touch.clientX - card.offsetWidth/2)+'px;top:'+(touch.clientY - card.offsetHeight/2)+'px;';
      document.body.appendChild(touchClone);
    }, 300);
    card._touchTimer = timer;
  }, {passive:true});

  grid.addEventListener('touchmove', function(e){
    var card = e.target.closest('.card');
    if(card && card._touchTimer){ clearTimeout(card._touchTimer); }
    if(!touchDragCard) return;
    e.preventDefault();
    var touch = e.touches[0];
    if(touchClone){
      touchClone.style.left = (touch.clientX - touchClone.offsetWidth/2) + 'px';
      touchClone.style.top  = (touch.clientY - touchClone.offsetHeight/2) + 'px';
    }
    // ドロップ先ハイライト
    var el = document.elementFromPoint(touch.clientX, touch.clientY);
    var target = el ? el.closest('.card') : null;
    grid.querySelectorAll('.card').forEach(function(c){ c.classList.remove('drag-over-top','drag-over-bot'); });
    if(target && target !== touchDragCard && target.getAttribute('data-cat') === touchDragCard.getAttribute('data-cat')){
      var rect = target.getBoundingClientRect();
      if(touch.clientY < rect.top + rect.height/2) target.classList.add('drag-over-top');
      else target.classList.add('drag-over-bot');
    }
  }, {passive:false});

  grid.addEventListener('touchend', function(e){
    var card = e.target.closest('.card');
    if(card && card._touchTimer){ clearTimeout(card._touchTimer); }
    if(!touchDragCard){ return; }
    if(touchClone){ document.body.removeChild(touchClone); touchClone = null; }
    touchDragCard.classList.remove('drag-dragging');
    grid.querySelectorAll('.card').forEach(function(c){ c.classList.remove('drag-over-top','drag-over-bot'); });

    var touch = e.changedTouches[0];
    var el = document.elementFromPoint(touch.clientX, touch.clientY);
    var target = el ? el.closest('.card') : null;
    if(target && target !== touchDragCard && target.getAttribute('data-cat') === touchDragCard.getAttribute('data-cat')){
      var fromIdx = parseInt(touchDragCard.getAttribute('data-i'));
      var toIdx   = parseInt(target.getAttribute('data-i'));
      var rect = target.getBoundingClientRect();
      var insertBefore = touch.clientY < rect.top + rect.height/2;
      var drug = DRUGS[fromIdx];
      DRUGS.splice(fromIdx, 1);
      var newTo = toIdx;
      if(fromIdx < newTo) newTo--;
      if(!insertBefore) newTo++;
      DRUGS.splice(newTo, 0, drug);
      saveData(); render(); renderTabs();
    }
    touchDragCard = null; touchDragIdx = null;
  }, {passive:true});
}

//========== COPY TO CLIPBOARD ==========
function buildInstructionText(drugList, sp, w){
  var date = new Date().toLocaleDateString('ja-JP',{year:'numeric',month:'2-digit',day:'2-digit'});
  var lines = ['【投薬指示書】' + date, '患者: ' + sp + ' ' + dispW(sp,w) + ' ' + dispUnit(sp), ''];
  drugList.forEach(function(d){
    if(!d) return;
    var route = getRoute(d);
    var dz = buildDoseHtml(d, sp, w, route, 'detail');
    var routeLabel = route==='injectable'?'注射':route==='oral'?'内服':'外用';
    lines.push('■ ' + d.name.replace(/\n/g,' '));
    if(dz.mlv) lines.push('  投与量: ' + dz.mlv + (dz.mgv ? '  （' + dz.mgv + '）' : ''));
    else if(dz.note) lines.push('  用量: 参照メモ');
    if(d.concText && d.concText !== '記載なし') lines.push('  濃度: ' + d.concText);
    lines.push('  投与経路: ' + routeLabel);
    if(dz.note) lines.push('  メモ: ' + dz.note.split('\n')[0].substring(0,60));
    lines.push('');
  });
  return lines.join('\n');
}

function openCopySheet(idxList){
  // idxList: array of DRUGS indices, or null for single (current detail)
  var drugs = idxList ? idxList.map(function(i){return DRUGS[i];}).filter(Boolean)
                      : (editIdx>=0 ? [DRUGS[editIdx]] : []);
  var text = buildInstructionText(drugs, st.sp, st.w);
  var sheet = document.getElementById('copySheet');
  document.getElementById('copyPre').textContent = text;
  sheet.classList.add('on');
  document.getElementById('bd').classList.add('on');
}

function doCopy(){
  var text = document.getElementById('copyPre').textContent;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      toast('クリップボードにコピーしました ✓');
      closeCopySheet();
    }).catch(function(){
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text){
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed'; ta.style.top = '-9999px';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try{ document.execCommand('copy'); toast('コピーしました ✓'); closeCopySheet(); }
  catch(e){ toast('コピーできませんでした'); }
  document.body.removeChild(ta);
}

function closeCopySheet(){
  document.getElementById('copySheet').classList.remove('on');
  document.getElementById('bd').classList.remove('on');
}

// ========== PROTOCOL SETS ==========
var LS_PROTO_KEY = 'vetcalc_protocols';
var protocols = [];   // [{id, name, memo, drugNames:[]}]
var editProtoIdx = -1;
var pickerSelected = {};  // {drugName: true}

var DEFAULT_PROTOCOLS = [
  {
    id: 'default_usagi_masui_bmk',
    name: "🐰 ウサギ 麻酔（BMK）",
    species: "ウサギ",
    memo: "Bt 0.04cc/kg・ミダゾラム 0.1cc/kg・ケタミン 0.2cc/kg IM",
    drugNames: [
      "ベトルファール(ブトルファノール)",
      "ドルミカム10mg/2ml（ミダゾラム）",
      "ケタミン"
    ]
  },
  {
    id: 'default_usagi_shokutai',
    name: "🐰 ウサギ 食滞治療",
    species: "ウサギ",
    memo: "消化管うっ滞・文献10,16より",
    drugNames: [
      "プリンぺラン10mg/2ml 5mg（メトクロプラミド）",
      "ガスモチン2.5/5mg（モサプリド）",
      "ザンタック（ラニチジン）",
      "ベトルファール(ブトルファノール)",
      "レペタン0.2mg/ml(ブプレノルフィン)",
      "トラマール(トラマドール)",
      "フェンタニル",
      "リマダイル(カルプロフェン）",
      "メタカム1/2.5mg(メロキシカム）",
      "バイトリル15/150/250mg（エンロフロキサシン）",
      "クロラムフェニコール",
      "フラジール250mg（メトロニダゾール）",
      "ぺリアクチン(シプロヘプタジン)",
      "リフレックス　15mg（ミルタザピン）"
    ]
  },
  {
    id: 'default_inu_chinsui',
    name: "🐕 犬の鎮静",
    species: "犬",
    memo: "",
    drugNames: [
      "ドミトール1mg/ml（メデトミジン）",
      "ベトルファール(ブトルファノール)",
      "ドルミカム10mg/2ml（ミダゾラム）",
      "アルファキサン10mg/ml（アルファキサロン）"
    ]
  },
  {
    id: 'default_neko_chinsui',
    name: "🐈 猫の鎮静",
    species: "猫",
    memo: "",
    drugNames: [
      "ドミトール1mg/ml（メデトミジン）",
      "ベトルファール(ブトルファノール)",
      "ドルミカム10mg/2ml（ミダゾラム）",
      "アルファキサン10mg/ml（アルファキサロン）"
    ]
  }
];

function loadProtocols(){
  try {
    var raw = localStorage.getItem(LS_PROTO_KEY);
    if(raw){
      var p=JSON.parse(raw);
      if(Array.isArray(p)){
        protocols=p;
        var changed=false;
        // デフォルトプロトコルが未登録なら追加 / 既存にspeciesが無ければ補完
        DEFAULT_PROTOCOLS.forEach(function(dp){
          var ep = protocols.find(function(x){ return x.id===dp.id || x.name===dp.name; });
          if(!ep){ protocols.unshift(dp); changed=true; }
          else if(!ep.species && dp.species){ ep.species = dp.species; changed=true; }
        });
        if(changed) saveProtocols();
        return;
      }
    }
  } catch(e){}
  // localStorageにデータなし → デフォルトをセット
  protocols = DEFAULT_PROTOCOLS.slice();
  saveProtocols();
}
function saveProtocols(){
  try{ localStorage.setItem(LS_PROTO_KEY, JSON.stringify(protocols)); }catch(e){}
}
function genId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }

// --- 一覧 ---
function openProtoList(){
  renderProtoList();
  openSheet('shProtoList');
}
function renderProtoList(){
  var body = document.getElementById('protoListBody');
  if(!protocols.length){
    body.innerHTML = '<div style="text-align:center;color:var(--mu);padding:30px 0;font-size:14px;">まだセットがありません<br><small>「新しいセットを作成」から始めてください</small></div>';
    return;
  }
  var out = '';
  for(var i=0;i<protocols.length;i++){
    var p=protocols[i];
    var cnt=p.drugNames?p.drugNames.length:0;
    out+='<div class="proto-card" onclick="openProtoRun('+i+')">'
      +'<div class="proto-card-name">'+esc(p.name)+'</div>'
      +'<div class="proto-card-meta">'+cnt+'剤'+(p.memo?' · '+esc(p.memo):'')+'</div>'
      +'</div>';
  }
  body.innerHTML = out;
}

// --- 実行（一括計算） ---
var runProtoIdx = -1;
function openProtoRun(idx){
  runProtoIdx = idx;
  var p = protocols[idx];
  if(p.species && SPECIES.indexOf(p.species)>=0){
    st.sp = p.species;
    st.w = spWeights[p.species] || st.w;
  }
  document.getElementById('protoRunTitle').innerHTML = esc(p.name)+' <button class="shx" onclick="runProtoIdx=-1;closeAll()">&#215;</button>';
  renderProtoRun();
  openSheet('shProtoRun');
}
function renderProtoRun(){
  var p = protocols[runProtoIdx];
  var sp = st.sp; var w = st.w;
  document.getElementById('protoRunMeta').innerHTML =
    '<span>'+sp+' · '+dispW(sp,w)+' '+dispUnit(sp)+' · '+(p.drugNames?p.drugNames.length:0)+'剤</span>'
    +'<button class="bsec" style="padding:4px 10px;font-size:12px;margin-left:8px" onclick="document.getElementById(\'shProtoRun\').classList.remove(\'on\');openWeight()">体重を変更</button>';
  var drugs = p.drugNames || [];
  var out = '';
  for(var i=0;i<drugs.length;i++){
    var d = DRUGS.find(function(x){ return x && x.name===drugs[i]; });
    if(!d) continue;
    var dRoute = getRoute(d);
    var valCls = dRoute==='injectable'?'':'oral'===dRoute?' oral':' top';
    var ml = calcML(d, sp, w, dRoute);
    var mg = calcMG(d, sp, w, dRoute);
    var sp2 = d.species[sp]||{};
    var valHtml = '';
    if(ml){
      valHtml = '<div class="proto-drug-val'+valCls+'">'+ml+'</div>';
    } else if(mg){
      valHtml = '<div class="proto-drug-val'+valCls+'" style="font-size:13px">'+mg+'</div>';
    } else if(sp2.note){
      valHtml = '<div class="proto-drug-val ref" style="font-size:11px;max-width:120px;text-align:right;white-space:normal">参照</div>';
    } else {
      valHtml = '<div class="proto-drug-val ref">—</div>';
    }
    var noteHtml = sp2.note ? '<div class="proto-drug-note">'+esc(sp2.note.split("\n")[0].substring(0,40))+'</div>' : '';
    out += '<div class="proto-drug-row">'
      +'<div style="flex:1;min-width:0">'
      +'<div class="proto-drug-name">'+esc(d.name.replace(/\n/g,' '))+'</div>'
      +'<div style="font-size:10px;color:var(--mu)">'+esc(d.concText||'')+'</div>'
      + noteHtml
      +'</div>'
      + valHtml
      +'</div>';
  }
  if(!out) out = '<div style="color:var(--mu);text-align:center;padding:20px">薬剤が登録されていません</div>';
  document.getElementById('protoRunBody').innerHTML = out;
}

function copyProtoInstructions(){
  var p = protocols[runProtoIdx];
  if(!p) return;
  var idxList = (p.drugNames||[]).map(function(name){
    return DRUGS.findIndex(function(d){ return d && d.name===name; });
  }).filter(function(i){ return i>=0; });
  openCopySheet(idxList);
}
function openProtoEditCurrent(){ openProtoEdit(runProtoIdx); }

// --- 印刷 ---
function printProto(){
  var p = protocols[runProtoIdx];
  var sp = st.sp; var w = st.w;
  var drugs = p.drugNames || [];
  var rows = '';
  for(var i=0;i<drugs.length;i++){
    var d = DRUGS.find(function(x){ return x && x.name===drugs[i]; });
    if(!d) continue;
    var ml = calcML(d,sp,w);
    var mg = calcMG(d,sp,w);
    var sp2 = d.species[sp]||{};
    var val = ml || mg || (sp2.note ? sp2.note.split("\n")[0].substring(0,30) : '—');
    rows += '<div class="proto-print-row">'
      +'<span>'+d.name.replace(/\n/g,' ')+'</span>'
      +'<span style="font-weight:700">'+val+'</span>'
      +'</div>';
  }
  var el = document.getElementById('proto-print');
  el.innerHTML = '<h2 style="margin-bottom:4px">'+p.name+'</h2>'
    +'<p style="color:#666;font-size:12px;margin-bottom:16px">'+sp+' / '+dispW(sp,w)+' '+dispUnit(sp)+'</p>'
    + rows;
  window.print();
}

// --- 編集 ---
var protoSpeciesSel = '';
function openProtoEdit(idx){
  editProtoIdx = idx;
  pickerSelected = {};
  var p = idx>=0 ? protocols[idx] : null;
  document.getElementById('protoEditTitle').innerHTML = (p?'セット編集':'新しいセットを作成')+' <button class="shx" onclick="closeAll()">&#215;</button>';
  document.getElementById('protoNameInp').value = p ? p.name : '';
  document.getElementById('protoMemoInp').value = p ? (p.memo||'') : '';
  document.getElementById('protoDelBtn').style.display = p ? 'block' : 'none';
  document.getElementById('protoSearch').value = '';
  protoSpeciesSel = p ? (p.species||'') : st.sp;
  renderProtoSpeciesPicker();
  if(p && p.drugNames){ for(var i=0;i<p.drugNames.length;i++) pickerSelected[p.drugNames[i]]=true; }
  renderProtoDrugPicker('');
  closeAll();
  setTimeout(function(){ openSheet('shProtoEdit'); }, 80);
}

function renderProtoSpeciesPicker(){
  var out = '';
  for(var i=0;i<SPECIES.length;i++){
    var sp = SPECIES[i];
    var on = sp===protoSpeciesSel;
    out += '<button type="button" class="bsec'+(on?' on':'')+'" style="padding:6px 12px;font-size:13px'+(on?';background:var(--ac);color:#fff;border-color:var(--ac)':'')+'" onclick="setProtoSpecies(\''+sp+'\')">'+esc(sp)+'</button>';
  }
  document.getElementById('protoSpeciesPicker').innerHTML = out;
}
function setProtoSpecies(sp){
  protoSpeciesSel = sp;
  renderProtoSpeciesPicker();
}

function renderProtoDrugPicker(q){
  q = (q||'').toLowerCase();
  var out = '';
  for(var i=0;i<DRUGS.length;i++){
    var d=DRUGS[i]; if(!d) continue;
    if(q && d.name.toLowerCase().indexOf(q)<0 && (d.category||'').toLowerCase().indexOf(q)<0) continue;
    var sel = pickerSelected[d.name] ? true : false;
    out += '<div class="drug-pick-row" onclick="togglePickDrug('+i+')" id="pick_'+i+'">'
      +'<div style="width:22px;height:22px;border-radius:6px;border:2px solid '+(sel?'var(--ac)':'var(--bd)')+';background:'+(sel?'var(--ac)':'transparent')+';flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px">'+(sel?'✓':'')+'</div>'
      +'<div style="flex:1;min-width:0">'
      +'<div class="drug-pick-name">'+esc(d.name.replace(/\n/g,' '))+'</div>'
      +'<div class="drug-pick-cat">'+esc(d.category)+'</div>'
      +'</div>'
      +'</div>';
  }
  document.getElementById('protoDrugPicker').innerHTML = out || '<div style="color:var(--mu);text-align:center;padding:20px">該当なし</div>';
}

function togglePickDrug(idx){
  var d=DRUGS[idx]; if(!d) return;
  var name=d.name;
  if(pickerSelected[name]) delete pickerSelected[name];
  else pickerSelected[name]=true;
  renderProtoDrugPicker(document.getElementById('protoSearch').value);
}

function saveProto(){
  var name = document.getElementById('protoNameInp').value.trim();
  if(!name){ alert('セット名を入力してください'); return; }
  var memo = document.getElementById('protoMemoInp').value.trim();
  var drugNames = Object.keys(pickerSelected);
  var proto = { id: editProtoIdx>=0 ? protocols[editProtoIdx].id : genId(), name:name, species:protoSpeciesSel, memo:memo, drugNames:drugNames };
  if(editProtoIdx>=0){ protocols[editProtoIdx]=proto; }
  else { protocols.push(proto); }
  saveProtocols();
  toast('「'+name+'」を保存しました ✓');
  renderProtoList();
  closeAll();
  setTimeout(function(){ openSheet('shProtoList'); }, 80);
}

function deleteCurrentProto(){
  if(!confirm('「'+protocols[editProtoIdx].name+'」を削除しますか？')) return;
  protocols.splice(editProtoIdx,1);
  saveProtocols();
  toast('削除しました');
  renderProtoList();
  closeAll();
  setTimeout(function(){ openSheet('shProtoList'); }, 80);
}

loadData();
loadWeights();
loadRoutes();
applyRouteOverrides();
loadSizeSettings();
applySizeCss();
loadTheme();
loadProtocols();
setMode('injectable');
// Set initial weight label
document.getElementById('wlbl').textContent = dispW(st.sp, st.w) + ' ' + dispUnit(st.sp);
// ========== やさしいモード ==========
var easySt = {
  sp: '犬',
  w: 5.0,
  drugIdx: -1,
  open: false
};
var SPECIES_LIST = ['犬','猫','ウサギ','モルモット','フェレット','ハリネズミ','ハムスター'];

function toggleEasyMode(){
  easySt.open = !easySt.open;
  var panel = document.getElementById('easyPanel');
  var btn = document.getElementById('easyBtn');
  if(easySt.open){
    panel.classList.add('open');
    btn.classList.add('easy-on');
    easyInit();
  } else {
    panel.classList.remove('open');
    btn.classList.remove('easy-on');
  }
}

function easyInit(){
  // 現在の選択状態を引き継ぐ
  easySt.sp = st.sp || '犬';
  easySt.w = st.w || 5.0;
  easySt.drugIdx = -1;

  // 動物種ボタン描画
  var spHtml = '';
  SPECIES_LIST.forEach(function(sp){
    var on = sp === easySt.sp ? ' on' : '';
    spHtml += '<button class="easy-sp-btn'+on+'" onclick="easySetSp(\''+sp+'\')">'+sp+'</button>';
  });
  document.getElementById('easySpBtns').innerHTML = spHtml;

  // 体重初期化
  var inp = document.getElementById('easyWInp');
  inp.value = isSmall(easySt.sp) ? (easySt.w*1000).toFixed(0) : easySt.w.toFixed(1);
  document.getElementById('easyWUnit').textContent = dispUnit(easySt.sp);

  // 薬剤リスト描画
  document.getElementById('easyDrugSearch').value = '';
  easyRenderDrugs();
  document.getElementById('easyResultArea').innerHTML = '';
}

function easySetSp(sp){
  easySt.sp = sp;
  easySt.drugIdx = -1;
  // ボタン更新
  var btns = document.querySelectorAll('.easy-sp-btn');
  btns.forEach(function(b){ b.classList.toggle('on', b.textContent===sp); });
  // 体重: 種ごとのデフォルト
  var wDef = {犬:5.0,猫:3.5,ウサギ:2.0,モルモット:0.8,フェレット:1.0,ハリネズミ:0.3,ハムスター:0.1};
  easySt.w = spWeights[sp] || wDef[sp] || 1.0;
  var inp = document.getElementById('easyWInp');
  inp.value = isSmall(sp) ? (easySt.w*1000).toFixed(0) : easySt.w.toFixed(1);
  document.getElementById('easyWUnit').textContent = dispUnit(sp);
  easyRenderDrugs();
  document.getElementById('easyResultArea').innerHTML = '';
}

function easyAdjW(delta){
  var inp = document.getElementById('easyWInp');
  var cur = parseFloat(inp.value) || 0;
  var step = isSmall(easySt.sp) ? 10 : 0.1;
  var nv = Math.max(0.01, cur + delta * step);
  inp.value = isSmall(easySt.sp) ? nv.toFixed(0) : nv.toFixed(1);
  easyCalc();
}

function easyRenderDrugs(){
  var q = (document.getElementById('easyDrugSearch').value || '').toLowerCase();
  var list = document.getElementById('easyDrugList');
  var html = '';
  var count = 0;
  for(var i=0;i<DRUGS.length;i++){
    var d = DRUGS[i];
    if(!d||!d.species) continue;
    var sp_data = d.species[easySt.sp]||{};
    // この動物種にデータがあるものだけ表示
    if(sp_data.lo==null && !sp_data.note) continue;
    if(q){
      var nm = d.name.toLowerCase().indexOf(q)>=0;
      var cm = d.category.indexOf(q)>=0;
      var am = Array.isArray(d.alias) && d.alias.some(function(a){ return a.toLowerCase().indexOf(q)>=0; });
      if(!nm && !cm && !am) continue;
    }
    var on = i===easySt.drugIdx ? ' on' : '';
    html += '<div class="easy-drug-item'+on+'" onclick="easySelectDrug('+i+')">'
          + '<div class="easy-drug-name">'+esc(d.name.replace(/\n/g,' '))+'</div>'
          + '<div class="easy-drug-cat">'+esc(d.category)+'</div>'
          + '</div>';
    count++;
    if(count >= 80) break;
  }
  if(!html) html = '<div style="color:var(--mu);font-size:13px;padding:8px">該当する薬剤がありません</div>';
  list.innerHTML = html;
}

function easySelectDrug(idx){
  easySt.drugIdx = idx;
  // ハイライト更新
  var items = document.querySelectorAll('.easy-drug-item');
  items.forEach(function(item, i){
    // data属性なしなのでテキストマッチングは困難→再描画
  });
  easyRenderDrugs();
  easyCalc();
  // 結果エリアにスクロール
  setTimeout(function(){
    var ra = document.getElementById('easyResultArea');
    if(ra && ra.firstChild) ra.firstChild.scrollIntoView({behavior:'smooth',block:'nearest'});
  }, 100);
}

function easyCalc(){
  // 体重取得
  var inp = document.getElementById('easyWInp');
  var rawW = parseFloat(inp.value);
  if(isNaN(rawW)||rawW<=0){ document.getElementById('easyResultArea').innerHTML=''; return; }
  easySt.w = toKg(rawW, easySt.sp);

  var d = DRUGS[easySt.drugIdx];
  if(!d){ document.getElementById('easyResultArea').innerHTML=''; return; }

  var sp_data = d.species[easySt.sp]||{};
  var easyRoute = getRoute(d);
  var ml = calcML(d, easySt.sp, easySt.w, easyRoute);
  var mg = calcMG(d, easySt.sp, easySt.w, easyRoute);
  var note = sp_data.note || '';

  var html = '<div class="easy-result">';
  html += '<div class="easy-result-title">💊 投与量計算結果</div>';
  html += '<div class="easy-result-drug">'+esc(d.name.replace(/\n/g,' '))+'</div>';
  if(d.concText) html += '<div class="easy-result-conc">濃度: '+esc(d.concText)+'</div>';

  if(ml){
    var mlNum = ml.replace(' mL','').replace('〜','~');
    html += '<div class="easy-result-ml">'+esc(mlNum)+'<em>mL</em></div>';
    if(mg) html += '<div class="easy-result-mg">（'+esc(mg)+'）</div>';
  } else if(mg){
    html += '<div class="easy-result-ml" style="color:var(--wn)">'+esc(mg.replace(' mg',''))+'<em>mg</em></div>';
    html += '<div class="easy-result-mg" style="color:var(--mu)">mL計算には濃度情報が必要です</div>';
  } else {
    html += '<div style="font-size:15px;color:var(--wn);margin-bottom:8px">⚠️ 数値データなし</div>';
  }
  if(note && note !== '（記載なし）'){
    html += '<div style="font-size:11px;color:var(--mu);margin-bottom:4px">📋 用量メモ</div>';
    html += '<div class="easy-result-note">'+esc(note)+'</div>';
  }
  if(d.memo && d.memo !== '記載なし'){
    html += '<div style="font-size:11px;color:var(--mu);margin-top:10px;margin-bottom:4px">ℹ️ 注意事項</div>';
    html += '<div class="easy-result-note" style="color:var(--wn)">'+esc(d.memo)+'</div>';
  }
  html += '</div>';
  document.getElementById('easyResultArea').innerHTML = html;
}


// ========== かんたん追加パネル ==========
var eaState={name:'',route:'injectable',concVal:'',concUnit:'mg/ml',category:'',memo:'',selectedSp:['犬','猫'],doses:{}};
var EA_SP_ICONS={'犬':'🐕','猫':'🐈','ウサギ':'🐇','フェレット':'🦡','モルモット':'🐹','ハリネズミ':'🦔','ハムスター':'🐭'};
var EA_ALL_SP=['犬','猫','ウサギ','フェレット','モルモット','ハリネズミ','ハムスター'];
var EA_ROUTE_LBL={injectable:'注射',oral:'内服',topical:'外用'};

function openEasyAdd(){
  eaState={name:'',route:'injectable',concVal:'',concUnit:'mg/ml',category:'',memo:'',selectedSp:['犬','猫'],doses:{}};
  document.getElementById('ea-name').value='';
  document.getElementById('ea-conc-val').value='';
  document.getElementById('ea-conc-unit').value='mg/ml';
  document.getElementById('ea-cat').value='';
  document.getElementById('ea-memo').value='';
  document.querySelectorAll('.ea-route-btn').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-route')==='injectable');});
  document.querySelectorAll('.ea-sp-btn').forEach(function(b){b.classList.toggle('on',['犬','猫'].indexOf(b.getAttribute('data-sp'))>=0);});
  eaShowStep(1);
  document.getElementById('easyAddPanel').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeEasyAdd(){
  document.getElementById('easyAddPanel').classList.remove('open');
  document.body.style.overflow='';
}
function eaShowStep(n){
  document.querySelectorAll('.ea-page').forEach(function(p){p.classList.remove('active');});
  var page=document.getElementById('ea-page-'+(n==='done'?'done':n));
  if(page) page.classList.add('active');
  for(var i=1;i<=3;i++){
    var si=document.getElementById('ea-si-'+i); if(!si) continue;
    si.classList.remove('active','done');
    if(typeof n==='number'){if(i<n)si.classList.add('done');else if(i===n)si.classList.add('active');}
  }
  var lbl=document.getElementById('eaStepLbl');
  if(lbl) lbl.textContent=typeof n==='number'?'ステップ '+n+' / 3':'追加完了！';
  var panel=document.getElementById('easyAddPanel');
  if(panel) panel.scrollTop=0;
}
function eaSelectRoute(el){
  document.querySelectorAll('.ea-route-btn').forEach(function(b){b.classList.remove('on');});
  el.classList.add('on');
  eaState.route=el.getAttribute('data-route');
  var u=document.getElementById('ea-conc-unit');
  if(eaState.route==='oral') u.value='mg/錢';
  else if(eaState.route==='injectable') u.value='mg/ml';
}
function eaToggleSp(el){
  el.classList.toggle('on');
  var sp=el.getAttribute('data-sp');
  var idx=eaState.selectedSp.indexOf(sp);
  if(el.classList.contains('on')){if(idx<0) eaState.selectedSp.push(sp);}
  else{if(idx>=0) eaState.selectedSp.splice(idx,1);}
  eaRenderDoses();
}
function eaRenderDoses(){
  var cont=document.getElementById('ea-dose-fields'); if(!cont) return;
  var h='';
  EA_ALL_SP.forEach(function(sp){
    if(eaState.selectedSp.indexOf(sp)<0) return;
    var prev=eaState.doses[sp]||{lo:'',hi:''};
    h+='<div class="ea-dose-row active">'
      +'<div class="ea-dose-title">'+EA_SP_ICONS[sp]+' '+sp+'</div>'
      +'<div class="ea-dose-inputs">'
      +'<input class="ea-fi" type="number" inputmode="decimal" step="any" placeholder="最小" value="'+prev.lo+'" id="ealo-'+sp+'" style="text-align:center">'
      +'<div class="ea-dose-sep">〜</div>'
      +'<input class="ea-fi" type="number" inputmode="decimal" step="any" placeholder="最大" value="'+prev.hi+'" id="eahi-'+sp+'" style="text-align:center">'
      +'</div><div class="ea-dose-unit">mg/kg（空欄でもOK）</div></div>';
  });
  cont.innerHTML=h;
}
function eaGoStep1(){eaShowStep(1);}
function eaGoStep2(){
  var name=document.getElementById('ea-name').value.trim();
  var conc=document.getElementById('ea-conc-val').value.trim();
  if(!name){alert('薬の名前を入力してください');return;}
  if(!conc){alert('濃度・規格を入力してください');return;}
  eaState.name=name; eaState.concVal=conc;
  eaState.concUnit=document.getElementById('ea-conc-unit').value;
  eaState.category=document.getElementById('ea-cat').value||'その他';
  eaState.memo=document.getElementById('ea-memo').value.trim();
  eaRenderDoses(); eaShowStep(2);
}
function eaGoStep3(){
  if(eaState.selectedSp.length===0){alert('最低1つの動物種を選んでください');return;}
  eaState.doses={};
  eaState.selectedSp.forEach(function(sp){
    var lo=document.getElementById('ealo-'+sp);
    var hi=document.getElementById('eahi-'+sp);
    eaState.doses[sp]={lo:lo?lo.value:'',hi:hi?hi.value:''};
  });
  eaRenderConfirm(); eaShowStep(3);
}
function eaRenderConfirm(){
  var h='<div class="ea-summary" style="margin-bottom:14px">'
    +'<div class="ea-sum-row"><span class="ea-sum-label">薬の名前</span><span class="ea-sum-value">'+esc(eaState.name)+'</span></div>'
    +'<div class="ea-sum-row"><span class="ea-sum-label">投与経路</span><span class="ea-sum-value">'+EA_ROUTE_LBL[eaState.route]+'</span></div>'
    +'<div class="ea-sum-row"><span class="ea-sum-label">濃度・規格</span><span class="ea-sum-value">'+esc(eaState.concVal)+' '+esc(eaState.concUnit)+'</span></div>'
    +'<div class="ea-sum-row"><span class="ea-sum-label">カテゴリ</span><span class="ea-sum-value">'+esc(eaState.category)+'</span></div>'
    +'</div>';
  eaState.selectedSp.forEach(function(sp){
    var d=eaState.doses[sp]||{};
    var lo=d.lo||'－'; var hi=d.hi||'－';
    var dstr=(d.lo||d.hi)?(lo+' 〜 '+hi+' mg/kg'):'用量未入力';
    h+='<div class="ea-dose-row active" style="margin-bottom:8px">'
      +'<div class="ea-dose-title">'+EA_SP_ICONS[sp]+' '+sp+'</div>'
      +'<div style="font-size:14px;font-weight:700;color:var(--ac)">'+dstr+'</div></div>';
  });
  document.getElementById('ea-confirm').innerHTML=h;
}
function eaCommit(){
  var speciesData={};
  EA_ALL_SP.forEach(function(sp){
    if(eaState.selectedSp.indexOf(sp)>=0){
      var d=eaState.doses[sp]||{};
      speciesData[sp]={lo:d.lo?parseFloat(d.lo):null,hi:d.hi?parseFloat(d.hi):null,note:null};
    } else {
      speciesData[sp]={lo:null,hi:null,note:null};
    }
  });
  var newDrug={name:eaState.name,category:eaState.category,conc:(isNaN(parseFloat(eaState.concVal))||parseFloat(eaState.concVal)<=0)?null:parseFloat(eaState.concVal),
    concText:eaState.concVal+eaState.concUnit,route:eaState.route,memo:eaState.memo||'',species:speciesData};
  // ID自動付与
  var maxIdEa = 0;
  for(var ki=0;ki<DRUGS.length;ki++){
    if(DRUGS[ki].id){ var ni=parseInt(DRUGS[ki].id.replace('drug_','')); if(ni>maxIdEa) maxIdEa=ni; }
  }
  newDrug.id = 'drug_' + String(maxIdEa+1).padStart(3,'0');
  DRUGS.push(newDrug);
  saveData(); renderTabs(); render();
  document.getElementById('ea-done-name').textContent=eaState.name;
  var sHtml='<div class="ea-sum-row"><span class="ea-sum-label">合計薬剤数</span><span class="ea-sum-value">'+DRUGS.length+'剤</span></div>'
    +'<div class="ea-sum-row"><span class="ea-sum-label">対応動物</span><span class="ea-sum-value">'+eaState.selectedSp.join('・')+'</span></div>';
  document.getElementById('ea-done-summary').innerHTML=sHtml;
  eaShowStep('done');
}
function eaAddAnother(){
  eaState={name:'',route:'injectable',concVal:'',concUnit:'mg/ml',category:'',memo:'',selectedSp:['犬','猫'],doses:{}};
  document.getElementById('ea-name').value='';
  document.getElementById('ea-conc-val').value='';
  document.getElementById('ea-conc-unit').value='mg/ml';
  document.getElementById('ea-cat').value='';
  document.getElementById('ea-memo').value='';
  document.querySelectorAll('.ea-route-btn').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-route')==='injectable');});
  document.querySelectorAll('.ea-sp-btn').forEach(function(b){b.classList.toggle('on',['犬','猫'].indexOf(b.getAttribute('data-sp'))>=0);});
  eaShowStep(1);
}
function eaBack(){
  var active=document.querySelector('.ea-page.active');
  if(!active||active.id==='ea-page-1'||active.id==='ea-page-done') closeEasyAdd();
  else if(active.id==='ea-page-2') eaGoStep1();
  else if(active.id==='ea-page-3') eaGoStep2();
}
