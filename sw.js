// VetCalc PRO - Service Worker
const CACHE_NAME = 'vetcalc-pro-v29';
const ASSETS = [
  './',
  './index.html',
  './data/drugs_main.js',
  './src/app_calc.js',
  './src/app_main.js',
  './src/app_ui.js',
  './manifest.json'
];

// インストール時：全アセットをキャッシュ
// ※ skipWaiting()を削除 → 更新通知を出してからユーザー操作で切り替える
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// アクティベート時：古いキャッシュを削除
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// フェッチ：キャッシュ優先、失敗時はネットワーク
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

// メッセージ受信：SKIP_WAITINGでユーザー操作後に切り替え
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
