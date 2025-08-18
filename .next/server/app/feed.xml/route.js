(()=>{var a={};a.id=608,a.ids=[608],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3834:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>H,patchFetch:()=>G,routeModule:()=>C,serverHooks:()=>F,workAsyncStorage:()=>D,workUnitAsyncStorage:()=>E});var d={};c.r(d),c.d(d,{GET:()=>A,dynamic:()=>B});var e=c(6559),f=c(8088),g=c(7719),h=c(6191),i=c(1289),j=c(261),k=c(2603),l=c(9893),m=c(4823),n=c(7220),o=c(6946),p=c(7912),q=c(9786),r=c(6143),s=c(6439),t=c(3365),u=c(2190),v=c(9021),w=c.n(v),x=c(3873),y=c.n(x);function z(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}async function A(){try{let a=y().join(process.cwd(),"public","blog-data");if(!w().existsSync(a))return new u.NextResponse("No blog posts found",{status:404});let b=w().readdirSync(a).filter(a=>a.endsWith(".json")).map(b=>{let c=w().readFileSync(y().join(a,b),"utf8");return JSON.parse(c)});b.sort((a,b)=>new Date(b.publishedAt).getTime()-new Date(a.publishedAt).getTime());let c=function(a){let b="https://generative-engine.org",c=new Date().toUTCString();return`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>GEO - Generative Engine Optimization</title>
    <description>Master the art of Generative Engine Optimization with cutting-edge strategies and insights for AI-powered search</description>
    <link>${b}</link>
    <language>en-US</language>
    <lastBuildDate>${c}</lastBuildDate>
    <pubDate>${c}</pubDate>
    <ttl>3600</ttl>
    <atom:link href="${b}/feed.xml" rel="self" type="application/rss+xml" />
    <copyright>Copyright ${new Date().getFullYear()} GEO Platform</copyright>
    <managingEditor>team@generative-engine.org (GEO Content Team)</managingEditor>
    <webMaster>tech@generative-engine.org (GEO Tech Team)</webMaster>
    <category>Technology</category>
    <category>SEO</category>
    <category>AI</category>
    <category>Marketing</category>
    <generator>Next.js RSS Generator</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    
    <image>
      <url>${b}/logo.png</url>
      <title>GEO - Generative Engine Optimization</title>
      <link>${b}</link>
      <width>144</width>
      <height>144</height>
    </image>
    
    ${a.map(a=>`
    <item>
      <title>${z(a.title)}</title>
      <description>${z(a.description)}</description>
      <link>${b}/${a.slug}</link>
      <guid isPermaLink="true">${b}/${a.slug}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <dc:creator>${z(a.author.name)}</dc:creator>
      ${a.tags.map(a=>`<category>${z(a)}</category>`).join("\n      ")}
      <content:encoded><![CDATA[
        <h2>Summary</h2>
        <p>${z(a.excerpt||a.description)}</p>
        
        <h2>Key Topics</h2>
        <ul>
          ${a.keywords.slice(0,5).map(a=>`<li>${z(a)}</li>`).join("\n          ")}
        </ul>
        
        <h2>Article Content</h2>
        ${a.content}
        
        <hr />
        <p><strong>Reading Time:</strong> ${a.metrics.readingTime} minutes</p>
        <p><strong>Word Count:</strong> ${a.metrics.wordCount.toLocaleString()} words</p>
        <p><strong>Author:</strong> ${z(a.author.name)}</p>
        <p><em>${z(a.author.bio)}</em></p>
        
        <p>Read the full article at: <a href="${b}/${a.slug}">${b}/${a.slug}</a></p>
      ]]></content:encoded>
      <enclosure url="${b}/api/og?title=${encodeURIComponent(a.title)}" type="image/png" length="0" />
    </item>`).join("\n")}
  </channel>
</rss>`}(b.slice(0,20));return new u.NextResponse(c,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600, s-maxage=3600","X-Content-Type-Options":"nosniff"}})}catch(a){return console.error("Error generating RSS feed:",a),new u.NextResponse("Error generating RSS feed",{status:500})}}let B="force-dynamic",C=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/feed.xml/route",pathname:"/feed.xml",filename:"route",bundlePath:"app/feed.xml/route"},distDir:".next",projectDir:"",resolvedPagePath:"/Users/heni/GEO/app/feed.xml/route.ts",nextConfigOutput:"standalone",userland:d}),{workAsyncStorage:D,workUnitAsyncStorage:E,serverHooks:F}=C;function G(){return(0,g.patchFetch)({workAsyncStorage:D,workUnitAsyncStorage:E})}async function H(a,b,c){var d;let e="/feed.xml/route";"/index"===e&&(e="/");let g=await C.prepare(a,b,{srcPage:e,multiZoneDraftMode:"false"});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:y,routerServerContext:z,isOnDemandRevalidate:A,revalidateOnlyGenerated:B,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(y.dynamicRoutes[E]||y.routes[D]);if(F&&!x){let a=!!y.routes[D],b=y.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||C.isDev||x||(G="/index"===(G=D)?"/":G);let H=!0===C.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:y,renderOpts:{experimental:{dynamicIO:!!w.experimental.dynamicIO,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>C.onRequestError(a,b,d,z)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>C.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&A&&B&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await C.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:A})},z),b}},l=await C.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:y,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:B,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",A?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await C.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:A})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},3873:a=>{"use strict";a.exports=require("path")},4870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},6487:()=>{},8335:()=>{},9021:a=>{"use strict";a.exports=require("fs")},9294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[985,55],()=>b(b.s=3834));module.exports=c})();