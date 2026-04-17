const loadedScripts = new Set();

const analyticsConfig = {
  ga4Id: import.meta.env.VITE_GA4_ID,
  gtmId: import.meta.env.VITE_GTM_ID,
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID,
  linkedInId: import.meta.env.VITE_LINKEDIN_PARTNER_ID,
  hotjarId: import.meta.env.VITE_HOTJAR_ID,
  hotjarVersion: import.meta.env.VITE_HOTJAR_SNIPPET_VERSION || "6",
  posthogKey: import.meta.env.VITE_POSTHOG_KEY,
  posthogHost: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
};

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

function appendInlineScript(id, content) {
  if (loadedScripts.has(id) || document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.textContent = content;
  document.head.appendChild(script);
  loadedScripts.add(id);
}

function appendExternalScript(id, src, async = true) {
  if (loadedScripts.has(id) || document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = async;
  document.head.appendChild(script);
  loadedScripts.add(id);
}

function initGtm() {
  if (!analyticsConfig.gtmId) return;

  ensureDataLayer();
  appendInlineScript(
    "iobee-gtm-inline",
    `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`,
  );
  appendExternalScript("iobee-gtm", `https://www.googletagmanager.com/gtm.js?id=${analyticsConfig.gtmId}`);
}

function initGa4() {
  if (!analyticsConfig.ga4Id) return;

  ensureDataLayer();
  appendExternalScript("iobee-ga4", `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4Id}`);
  appendInlineScript(
    "iobee-ga4-inline",
    `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${analyticsConfig.ga4Id}',{send_page_view:false});`,
  );
}

function initMetaPixel() {
  if (!analyticsConfig.metaPixelId) return;

  appendInlineScript(
    "iobee-meta-pixel-inline",
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${analyticsConfig.metaPixelId}');fbq('track','PageView');`,
  );
}

function initLinkedIn() {
  if (!analyticsConfig.linkedInId) return;

  appendInlineScript("iobee-li-inline", `_linkedin_partner_id='${analyticsConfig.linkedInId}';window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);`);
  appendExternalScript("iobee-li", "https://snap.licdn.com/li.lms-analytics/insight.min.js");
}

function initHotjar() {
  if (!analyticsConfig.hotjarId) return;

  appendInlineScript(
    "iobee-hotjar",
    `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${analyticsConfig.hotjarId},hjsv:${analyticsConfig.hotjarVersion}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
  );
}

function initPosthog() {
  if (!analyticsConfig.posthogKey) return;

  appendInlineScript(
    "iobee-posthog",
    `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement('script')).type='text/javascript',p.crossOrigin='anonymous',p.async=!0,p.src=s.api_host.replace('.i.posthog.com','-assets.i.posthog.com')+'/static/array.js',(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a='posthog',u.people=u.people||[],u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e},u.people.toString=function(){return u.toString(1)+'.people (stub)'},o='capture identify alias people.set people.set_once register register_once unregister reset opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing start_session_recording stop_session_recording'.split(' '),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('${analyticsConfig.posthogKey}',{api_host:'${analyticsConfig.posthogHost}',person_profiles:'identified_only'});`,
  );
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || window.__iobeeAnalyticsInitialized) {
    return;
  }

  initGtm();
  initGa4();
  initMetaPixel();
  initLinkedIn();
  initHotjar();
  initPosthog();

  window.__iobeeAnalyticsInitialized = true;
}

export function trackEvent(eventName, payload = {}) {
  if (typeof window === "undefined") return;

  ensureDataLayer();
  window.dataLayer.push({ event: eventName, ...payload, ts: Date.now() });

  if (window.gtag) {
    window.gtag("event", eventName, payload);
  }

  if (window.fbq) {
    window.fbq("trackCustom", eventName, payload);
  }

  if (window.posthog?.capture) {
    window.posthog.capture(eventName, payload);
  }
}

export function trackPageView(pathname) {
  trackEvent("page_view", { pathname });
}