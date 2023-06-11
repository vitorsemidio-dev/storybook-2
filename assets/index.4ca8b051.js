var Ue=Object.defineProperty;var s=(e,t)=>Ue(e,"name",{value:t,configurable:!0});import{r as Ee}from"./index.bd768366.js";import{B as Ie}from"./index.57600b45.js";import{C as Me}from"./index.686603aa.js";import{T as V}from"./index.439cd034.js";import{T as C,E as He}from"./index.0ca6ddeb.js";import{a as O,F,j as E}from"./jsx-runtime.ecdb33bd.js";import{I as Ve,r as ze}from"./IconBase.esm.5ab10632.js";var P=new Map;P.set("bold",function(e){return O(F,{children:[E("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),E("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),E("circle",{cx:"128",cy:"152",r:"16"})]})});P.set("duotone",function(e){return O(F,{children:[E("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),E("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),E("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),E("circle",{cx:"128",cy:"152",r:"12"})]})});P.set("fill",function(){return E(F,{children:E("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"})})});P.set("light",function(e){return O(F,{children:[E("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),E("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),E("circle",{cx:"128",cy:"152",r:"10"})]})});P.set("thin",function(e){return O(F,{children:[E("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),E("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),E("circle",{cx:"128",cy:"152",r:"8"})]})});P.set("regular",function(e){return O(F,{children:[E("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),E("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),E("circle",{cx:"128",cy:"152",r:"12"})]})});var qe=s(function(t,n){return ze(t,n,P)},"renderPath"),we=Ee.exports.forwardRef(function(e,t){return E(Ve,{...Object.assign({ref:t},e,{renderPath:qe})})});we.displayName="Lock";const We=we;function ye(e,t){return s(function(){return e.apply(t,arguments)},"wrap")}s(ye,"bind");const{toString:be}=Object.prototype,{getPrototypeOf:te}=Object,ne=(e=>t=>{const n=be.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=s(e=>(e=e.toLowerCase(),t=>ne(t)===e),"kindOfTest"),W=s(e=>t=>typeof t===e,"typeOfTest"),{isArray:I}=Array,Q=W("undefined");function Je(e){return e!==null&&!Q(e)&&e.constructor!==null&&!Q(e.constructor)&&D(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}s(Je,"isBuffer");const Se=T("ArrayBuffer");function $e(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Se(e.buffer),t}s($e,"isArrayBufferView");const Ke=W("string"),D=W("function"),Re=W("number"),xe=s(e=>e!==null&&typeof e=="object","isObject"),Xe=s(e=>e===!0||e===!1,"isBoolean"),z=s(e=>{if(ne(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},"isPlainObject"),Ze=T("Date"),Qe=T("File"),ve=T("Blob"),Ye=T("FileList"),Ge=s(e=>xe(e)&&D(e.pipe),"isStream"),et=s(e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||be.call(e)===t||D(e.toString)&&e.toString()===t)},"isFormData"),tt=T("URLSearchParams"),nt=s(e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),"trim");function J(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}s(J,"forEach");function v(){const e={},t=s((n,r)=>{z(e[r])&&z(n)?e[r]=v(e[r],n):z(n)?e[r]=v({},n):I(n)?e[r]=n.slice():e[r]=n},"assignValue");for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&J(arguments[n],t);return e}s(v,"merge");const rt=s((e,t,n,{allOwnKeys:r}={})=>(J(t,(i,a)=>{n&&D(i)?e[a]=ye(i,n):e[a]=i},{allOwnKeys:r}),e),"extend"),st=s(e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),"stripBOM"),ot=s((e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},"inherits"),it=s((e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},"toFlatObject"),at=s((e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},"endsWith"),ct=s(e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},"toArray"),ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),lt=s((e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},"forEachEntry"),ft=s((e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},"matchAll"),dt=T("HTMLFormElement"),ht=s(e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,s(function(n,r,i){return r.toUpperCase()+i},"replacer")),"toCamelCase"),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pt=T("RegExp"),Oe=s((e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};J(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},"reduceDescriptors"),mt=s(e=>{Oe(e,(t,n)=>{const r=e[n];if(!!D(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},"freezeMethods"),Et=s((e,t)=>{const n={},r=s(i=>{i.forEach(a=>{n[a]=!0})},"define");return I(e)?r(e):r(String(e).split(t)),n},"toObjectSet"),wt=s(()=>{},"noop"),yt=s((e,t)=>(e=+e,Number.isFinite(e)?e:t),"toFiniteNumber"),c={isArray:I,isArrayBuffer:Se,isBuffer:Je,isFormData:et,isArrayBufferView:$e,isString:Ke,isNumber:Re,isBoolean:Xe,isObject:xe,isPlainObject:z,isUndefined:Q,isDate:Ze,isFile:Qe,isBlob:ve,isRegExp:pt,isFunction:D,isStream:Ge,isURLSearchParams:tt,isTypedArray:ut,isFileList:Ye,forEach:J,merge:v,extend:rt,trim:nt,stripBOM:st,inherits:ot,toFlatObject:it,kindOf:ne,kindOfTest:T,endsWith:at,toArray:ct,forEachEntry:lt,matchAll:ft,isHTMLForm:dt,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Oe,freezeMethods:mt,toObjectSet:Et,toCamelCase:ht,noop:wt,toFiniteNumber:yt};function m(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}s(m,"AxiosError");c.inherits(m,Error,{toJSON:s(function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},"toJSON")});const Ae=m.prototype,Te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Te[e]={value:e}});Object.defineProperties(m,Te);Object.defineProperty(Ae,"isAxiosError",{value:!0});m.from=(e,t,n,r,i,a)=>{const o=Object.create(Ae);return c.toFlatObject(e,o,s(function(d){return d!==Error.prototype},"filter"),l=>l!=="isAxiosError"),m.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};var bt=typeof self=="object"?self.FormData:window.FormData;function Y(e){return c.isPlainObject(e)||c.isArray(e)}s(Y,"isVisitable");function Ne(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}s(Ne,"removeBrackets");function ie(e,t,n){return e?e.concat(t).map(s(function(i,a){return i=Ne(i),!n&&a?"["+i+"]":i},"each")).join(n?".":""):t}s(ie,"renderKey");function St(e){return c.isArray(e)&&!e.some(Y)}s(St,"isFlatArray");const Rt=c.toFlatObject(c,{},null,s(function(t){return/^is[A-Z]/.test(t)},"filter"));function xt(e){return e&&c.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}s(xt,"isSpecCompliant");function $(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new(bt||FormData),n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,s(function(w,L){return!c.isUndefined(L[w])},"defined"));const r=n.metaTokens,i=n.visitor||h,a=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&xt(t);if(!c.isFunction(i))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(c.isDate(f))return f.toISOString();if(!d&&c.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(f)||c.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}s(u,"convertValue");function h(f,w,L){let x=f;if(f&&!L&&typeof f=="object"){if(c.endsWith(w,"{}"))w=r?w:w.slice(0,-2),f=JSON.stringify(f);else if(c.isArray(f)&&St(f)||c.isFileList(f)||c.endsWith(w,"[]")&&(x=c.toArray(f)))return w=Ne(w),x.forEach(s(function(H,je){!(c.isUndefined(H)||H===null)&&t.append(o===!0?ie([w],je,a):o===null?w:w+"[]",u(H))},"each")),!1}return Y(f)?!0:(t.append(ie(L,w,a),u(f)),!1)}s(h,"defaultVisitor");const y=[],b=Object.assign(Rt,{defaultVisitor:h,convertValue:u,isVisitable:Y});function p(f,w){if(!c.isUndefined(f)){if(y.indexOf(f)!==-1)throw Error("Circular reference detected in "+w.join("."));y.push(f),c.forEach(f,s(function(x,k){(!(c.isUndefined(x)||x===null)&&i.call(t,x,c.isString(k)?k.trim():k,w,b))===!0&&p(x,w?w.concat(k):[k])},"each")),y.pop()}}if(s(p,"build"),!c.isObject(e))throw new TypeError("data must be an object");return p(e),t}s($,"toFormData");function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,s(function(r){return t[r]},"replacer"))}s(ae,"encode$1");function re(e,t){this._pairs=[],e&&$(e,this,t)}s(re,"AxiosURLSearchParams");const ge=re.prototype;ge.append=s(function(t,n){this._pairs.push([t,n])},"append");ge.toString=s(function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(s(function(i){return n(i[0])+"="+n(i[1])},"each"),"").join("&")},"toString");function Ot(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}s(Ot,"encode");function Le(e,t,n){if(!t)return e;const r=n&&n.encode||Ot,i=n&&n.serialize;let a;if(i?a=i(t,n):a=c.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}s(Le,"buildURL");class G{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,s(function(r){r!==null&&t(r)},"forEachHandler"))}}s(G,"InterceptorManager");const Pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},At=typeof URLSearchParams<"u"?URLSearchParams:re,Tt=FormData,Nt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),A={isBrowser:!0,classes:{URLSearchParams:At,FormData:Tt,Blob},isStandardBrowserEnv:Nt,protocols:["http","https","file","blob","url","data"]};function gt(e,t){return $(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return A.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}s(gt,"toURLEncodedForm");function Lt(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}s(Lt,"parsePropPath");function Pt(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}s(Pt,"arrayToObject");function ke(e){function t(n,r,i,a){let o=n[a++];const l=Number.isFinite(+o),d=a>=n.length;return o=!o&&c.isArray(i)?i.length:o,d?(c.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!c.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&c.isArray(i[o])&&(i[o]=Pt(i[o])),!l)}if(s(t,"buildPath"),c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,i)=>{t(Lt(r),i,n,0)}),n}return null}s(ke,"formDataToJSON");function kt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}s(kt,"settle");const Ct=A.isStandardBrowserEnv?s(function(){return{write:s(function(n,r,i,a,o,l){const d=[];d.push(n+"="+encodeURIComponent(r)),c.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),c.isString(a)&&d.push("path="+a),c.isString(o)&&d.push("domain="+o),l===!0&&d.push("secure"),document.cookie=d.join("; ")},"write"),read:s(function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},"read"),remove:s(function(n){this.write(n,"",Date.now()-864e5)},"remove")}},"standardBrowserEnv")():s(function(){return{write:s(function(){},"write"),read:s(function(){return null},"read"),remove:s(function(){},"remove")}},"nonStandardBrowserEnv")();function Ft(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}s(Ft,"isAbsoluteURL");function Dt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}s(Dt,"combineURLs");function Ce(e,t){return e&&!Ft(t)?Dt(e,t):t}s(Ce,"buildFullPath");const Bt=A.isStandardBrowserEnv?s(function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s(i,"resolveURL"),r=i(window.location.href),s(function(o){const l=c.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host},"isURLSameOrigin")},"standardBrowserEnv")():s(function(){return s(function(){return!0},"isURLSameOrigin")},"nonStandardBrowserEnv")();function M(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}s(M,"CanceledError");c.inherits(M,m,{__CANCEL__:!0});function _t(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}s(_t,"parseProtocol");const jt=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ut=s(e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(s(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&jt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)},"parser")),t},"parseHeaders"),ce=Symbol("internals"),Fe=Symbol("defaults");function j(e){return e&&String(e).trim().toLowerCase()}s(j,"normalizeHeader");function q(e){return e===!1||e==null?e:c.isArray(e)?e.map(q):String(e)}s(q,"normalizeValue");function It(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}s(It,"parseTokens");function ue(e,t,n,r){if(c.isFunction(r))return r.call(this,t,n);if(!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}s(ue,"matchHeaderValue");function Mt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}s(Mt,"formatHeader");function Ht(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}s(Ht,"buildAccessors");function _(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}s(_,"findKey");function R(e,t){e&&this.set(e),this[Fe]=t||null}s(R,"AxiosHeaders");Object.assign(R.prototype,{set:function(e,t,n){const r=this;function i(a,o,l){const d=j(o);if(!d)throw new Error("header name must be a non-empty string");const u=_(r,d);u&&l!==!0&&(r[u]===!1||l===!1)||(r[u||o]=q(a))}return s(i,"setHeader"),c.isPlainObject(e)?c.forEach(e,(a,o)=>{i(a,o,t)}):i(t,e,n),this},get:function(e,t){if(e=j(e),!e)return;const n=_(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return It(r);if(c.isFunction(t))return t.call(this,r,n);if(c.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=j(e),e){const n=_(this,e);return!!(n&&(!t||ue(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(a){if(a=j(a),a){const o=_(n,a);o&&(!t||ue(n,n[o],o,t))&&(delete n[o],r=!0)}}return s(i,"deleteHeader"),c.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return c.forEach(this,(r,i)=>{const a=_(n,i);if(a){t[a]=q(r),delete t[i];return}const o=e?Mt(i):String(i).trim();o!==i&&delete t[i],t[o]=q(r),n[o]=!0}),this},toJSON:function(e){const t=Object.create(null);return c.forEach(Object.assign({},this[Fe]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&c.isArray(n)?n.join(", "):n)}),t}});Object.assign(R,{from:function(e){return c.isString(e)?new this(Ut(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[ce]=this[ce]={accessors:{}}).accessors,r=this.prototype;function i(a){const o=j(a);n[o]||(Ht(r,a),n[o]=!0)}return s(i,"defineAccessor"),c.isArray(e)?e.forEach(i):i(e),this}});R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);c.freezeMethods(R.prototype);c.freezeMethods(R);function Vt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,s(function(d){const u=Date.now(),h=r[a];o||(o=u),n[i]=d,r[i]=u;let y=a,b=0;for(;y!==i;)b+=n[y++],y=y%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const p=h&&u-h;return p?Math.round(b*1e3/p):void 0},"push")}s(Vt,"speedometer");function le(e,t){let n=0;const r=Vt(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-n,d=r(l),u=a<=o;n=a;const h={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:d||void 0,estimated:d&&o&&u?(o-a)/d:void 0};h[t?"download":"upload"]=!0,e(h)}}s(le,"progressEventReducer");function fe(e){return new Promise(s(function(n,r){let i=e.data;const a=R.from(e.headers).normalize(),o=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}s(d,"done"),c.isFormData(i)&&A.isStandardBrowserEnv&&a.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(p+":"+f))}const h=Ce(e.baseURL,e.url);u.open(e.method.toUpperCase(),Le(h,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!u)return;const p=R.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:e,request:u};kt(s(function(x){n(x),d()},"_resolve"),s(function(x){r(x),d()},"_reject"),w),u=null}if(s(y,"onloadend"),"onloadend"in u?u.onloadend=y:u.onreadystatechange=s(function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},"handleLoad"),u.onabort=s(function(){!u||(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},"handleAbort"),u.onerror=s(function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},"handleError"),u.ontimeout=s(function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Pe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},"handleTimeout"),A.isStandardBrowserEnv){const p=(e.withCredentials||Bt(h))&&e.xsrfCookieName&&Ct.read(e.xsrfCookieName);p&&a.set(e.xsrfHeaderName,p)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&c.forEach(a.toJSON(),s(function(f,w){u.setRequestHeader(w,f)},"setRequestHeader")),c.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",le(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",le(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=s(p=>{!u||(r(!p||p.type?new M(null,e,u):p),u.abort(),u=null)},"onCanceled"),e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=_t(h);if(b&&A.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}u.send(i||null)},"dispatchXhrRequest"))}s(fe,"xhrAdapter");const de={http:fe,xhr:fe},he={getAdapter:e=>{if(c.isString(e)){const t=de[e];if(!e)throw Error(c.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!c.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:de},zt={"Content-Type":"application/x-www-form-urlencoded"};function qt(){let e;return typeof XMLHttpRequest<"u"?e=he.getAdapter("xhr"):typeof process<"u"&&c.kindOf(process)==="process"&&(e=he.getAdapter("http")),e}s(qt,"getDefaultAdapter");function Wt(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}s(Wt,"stringifySafely");const B={transitional:Pe,adapter:qt(),transformRequest:[s(function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=c.isObject(t);if(a&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return i&&i?JSON.stringify(ke(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gt(t,this.formSerializer).toString();if((l=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return $(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),Wt(t)):t},"transformRequest")],transformResponse:[s(function(t){const n=this.transitional||B.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&c.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t},"transformResponse")],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:s(function(t){return t>=200&&t<300},"validateStatus"),headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],s(function(t){B.headers[t]={}},"forEachMethodNoData"));c.forEach(["post","put","patch"],s(function(t){B.headers[t]=c.merge(zt)},"forEachMethodWithData"));function X(e,t){const n=this||B,r=t||n,i=R.from(r.headers);let a=r.data;return c.forEach(e,s(function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)},"transform")),i.normalize(),a}s(X,"transformData");function De(e){return!!(e&&e.__CANCEL__)}s(De,"isCancel");function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M}s(Z,"throwIfCancellationRequested");function pe(e){return Z(e),e.headers=R.from(e.headers),e.data=X.call(e,e.transformRequest),(e.adapter||B.adapter)(e).then(s(function(r){return Z(e),r.data=X.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},"onAdapterResolution"),s(function(r){return De(r)||(Z(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)},"onAdapterRejection"))}s(pe,"dispatchRequest");function U(e,t){t=t||{};const n={};function r(u,h){return c.isPlainObject(u)&&c.isPlainObject(h)?c.merge(u,h):c.isPlainObject(h)?c.merge({},h):c.isArray(h)?h.slice():h}s(r,"getMergedValue");function i(u){if(c.isUndefined(t[u])){if(!c.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}s(i,"mergeDeepProperties");function a(u){if(!c.isUndefined(t[u]))return r(void 0,t[u])}s(a,"valueFromConfig2");function o(u){if(c.isUndefined(t[u])){if(!c.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}s(o,"defaultToConfig2");function l(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}s(l,"mergeDirectKeys");const d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return c.forEach(Object.keys(e).concat(Object.keys(t)),s(function(h){const y=d[h]||i,b=y(h);c.isUndefined(b)&&y!==l||(n[h]=b)},"computeConfigValue")),n}s(U,"mergeConfig");const Be="1.1.3",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=s(function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e},"validator")});const me={};se.transitional=s(function(t,n,r){function i(a,o){return"[Axios v"+Be+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return s(i,"formatMessage"),(a,o,l)=>{if(t===!1)throw new m(i(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!me[o]&&(me[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}},"transitional");function Jt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],d=l===void 0||o(l,a,e);if(d!==!0)throw new m("option "+a+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+a,m.ERR_BAD_OPTION)}}s(Jt,"assertOptions");const ee={assertOptions:Jt,validators:se},N=ee.validators;class g{constructor(t){this.defaults=t,this.interceptors={request:new G,response:new G}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),i!==void 0&&ee.assertOptions(i,{encode:N.function,serialize:N.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const a=n.headers&&c.merge(n.headers.common,n.headers[n.method]);a&&c.forEach(["delete","get","head","post","put","patch","common"],s(function(f){delete n.headers[f]},"cleanHeaderConfig")),n.headers=new R(n.headers,a);const o=[];let l=!0;this.interceptors.request.forEach(s(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(l=l&&f.synchronous,o.unshift(f.fulfilled,f.rejected))},"unshiftRequestInterceptors"));const d=[];this.interceptors.response.forEach(s(function(f){d.push(f.fulfilled,f.rejected)},"pushResponseInterceptors"));let u,h=0,y;if(!l){const p=[pe.bind(this),void 0];for(p.unshift.apply(p,o),p.push.apply(p,d),y=p.length,u=Promise.resolve(n);h<y;)u=u.then(p[h++],p[h++]);return u}y=o.length;let b=n;for(h=0;h<y;){const p=o[h++],f=o[h++];try{b=p(b)}catch(w){f.call(this,w);break}}try{u=pe.call(this,b)}catch(p){return Promise.reject(p)}for(h=0,y=d.length;h<y;)u=u.then(d[h++],d[h++]);return u}getUri(t){t=U(this.defaults,t);const n=Ce(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}s(g,"Axios");c.forEach(["delete","get","head","options"],s(function(t){g.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}},"forEachMethodNoData"));c.forEach(["post","put","patch"],s(function(t){function n(r){return s(function(a,o,l){return this.request(U(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))},"httpMethod")}s(n,"generateHTTPMethod"),g.prototype[t]=n(),g.prototype[t+"Form"]=n(!0)},"forEachMethodWithData"));class K{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(s(function(a){n=a},"promiseExecutor"));const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=s(function(){r.unsubscribe(a)},"reject"),o},t(s(function(a,o,l){r.reason||(r.reason=new M(a,o,l),n(r.reason))},"cancel"))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new K(s(function(i){t=i},"executor")),cancel:t}}}s(K,"CancelToken");function $t(e){return s(function(n){return e.apply(null,n)},"wrap")}s($t,"spread");function Kt(e){return c.isObject(e)&&e.isAxiosError===!0}s(Kt,"isAxiosError");function _e(e){const t=new g(e),n=ye(g.prototype.request,t);return c.extend(n,g.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=s(function(i){return _e(U(e,i))},"create"),n}s(_e,"createInstance");const S=_e(B);S.Axios=g;S.CanceledError=M;S.CancelToken=K;S.isCancel=De;S.VERSION=Be;S.toFormData=$;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=s(function(t){return Promise.all(t)},"all");S.spread=$t;S.isAxiosError=Kt;S.formToJSON=e=>ke(c.isHTMLForm(e)?new FormData(e):e);function nn(){const[e,t]=Ee.exports.useState(!1);return O("form",{onSubmit:s(async r=>{r.preventDefault(),await S.post("/sessions",{email:"janedoe@test.com",password:"12345678"}),t(!0)},"handleSignIn"),className:"flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10",children:[e&&E(V,{children:"Login Realizado!"}),O("label",{htmlFor:"email",className:"flex flex-col gap-3",children:[E(V,{className:"font-semibold",children:"Endere\xE7o de e-mail"}),O(C.Root,{children:[E(C.Icon,{children:E(He,{})}),E(C.Input,{name:"email",id:"email",type:"email",placeholder:"jhondoe@exemple.com"})]})]}),O("label",{htmlFor:"password",className:"flex flex-col gap-3",children:[E(V,{className:"font-semibold",children:"Sua senha"}),O(C.Root,{children:[E(C.Icon,{children:E(We,{})}),E(C.Input,{name:"password",id:"password",type:"password",placeholder:"************"})]})]}),E(V,{asChild:!0,size:"sm",children:O("label",{htmlFor:"remember",className:"flex items-center gap-2 text-gray-200",children:[E(Me,{id:"remember",name:"remember","aria-label":"Lembrar de mim por 30 dias"}),"Lembrar de mim por 30 dias"]})}),E(Ie,{type:"submit",className:"mt-4",children:"Entrar na plataforma"})]})}s(nn,"SignInForm");export{nn as S};
//# sourceMappingURL=index.4ca8b051.js.map
