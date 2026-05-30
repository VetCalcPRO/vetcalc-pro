//========== DATA ==========

function calcTcCalc(){
  var denom = parseFloat(document.getElementById('calcDenom').value)||1;
  var times = parseFloat(document.getElementById('calcTimes').value)||1;
  var days  = parseInt(document.getElementById('calcDays').value)||0;
  var el = document.getElementById('calcTotal');
  if(!el) return;
  if(!days || days<1){ el.textContent='—'; return; }
  el.textContent = Math.ceil((1/denom)*times*days);
}

function dtlCalc(){
  var denom = parseFloat(document.getElementById('dtlDenom').value)||1;
  var times = parseFloat(document.getElementById('dtlTimes').value)||1;
  var days  = parseInt(document.getElementById('dtlDays').value)||0;
  var el = document.getElementById('dtlTotal');
  if(!el) return;
  if(!days || days < 1){ el.textContent='—'; return; }
  var total = Math.ceil((1/denom) * times * days);
  el.textContent = total;
}


function tcClear(){
  document.getElementById('tcDays').value='';
  document.getElementById('tcResult').style.display='none';
  document.getElementById('tcEmpty').style.display='';
}
function tcCalc(){
  var denom = parseInt(document.getElementById('tcDenom').value)||1;
  var times = parseInt(document.getElementById('tcTimes').value)||1;
  var days  = parseInt(document.getElementById('tcDays').value)||0;
  var res = document.getElementById('tcResult');
  var emp = document.getElementById('tcEmpty');
  var mat = document.getElementById('tcMatrix');
  if(!days || days < 1){
    res.style.display='none'; emp.style.display=''; mat.style.display='none'; return;
  }
  // メイン結果
  var total = (1/denom) * times * days;
  document.getElementById('tcTotal').textContent = total.toFixed(1).replace(/\.0$/,'');
  var fracLabel = denom===1?'1錠':('1/'+denom+'錠');
  document.getElementById('tcBreakdown').textContent =
    fracLabel + ' × ' + (times===0.5?'EOD':times+'回/日') + ' × ' + days + '日';
  res.style.display=''; emp.style.display='none';
  // 12マスマトリクス
  var denoms = [[1,'1錠'],[2,'1/2錠'],[4,'1/4錠'],[8,'1/8錠']];
  var timesArr = [1,2,3,0.5];
  document.getElementById('tcMatDays').textContent = days;
  var tbody = document.getElementById('tcMatBody');
  var rows = '';
  denoms.forEach(function(d){
    var isSelDenom = d[0]===denom;
    rows += '<tr style="'+(isSelDenom?'background:rgba(76,142,255,.1);':'')+'">';
    rows += '<td style="padding:8px 4px;text-align:center;font-weight:700;font-size:13px;border-bottom:1px solid var(--bd);color:'+(isSelDenom?'var(--ac)':'var(--tx)')+'">'+d[1]+'</td>';
    timesArr.forEach(function(t){
      var raw = (1/d[0]) * t * days;
      var ceiled = Math.ceil(raw);
      var hasFrac = ceiled !== raw;
      var isSelected = d[0]===denom && t===times;
      rows += '<td style="padding:8px 4px;text-align:center;font-size:'+(isSelected?'17':'15')+'px;font-weight:'+(isSelected?'900':'600')+';border-bottom:1px solid var(--bd);color:'+(isSelected?'var(--ac)':'var(--tx)')+';">'
        + ceiled + (hasFrac?'<span style="font-size:9px;color:var(--mu);vertical-align:super;">※</span>':'')
        +'</td>';
    });
    rows += '</tr>';
  });
  tbody.innerHTML = rows;
  mat.style.display='';
}
