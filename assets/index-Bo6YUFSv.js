function Rm(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ad={exports:{}},Si={},id={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),Cm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Lm=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),jm=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),Im=Symbol.for("react.lazy"),rc=Symbol.iterator;function Fm(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ld=Object.assign,sd={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=sd,this.updater=t||od}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cd(){}cd.prototype=Zt.prototype;function Vl(e,n,t){this.props=e,this.context=n,this.refs=sd,this.updater=t||od}var ql=Vl.prototype=new cd;ql.constructor=Vl;ld(ql,Zt.prototype);ql.isPureReactComponent=!0;var ac=Array.isArray,ud=Object.prototype.hasOwnProperty,Wl={current:null},dd={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,n,t){var r,a={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)ud.call(n,r)&&!dd.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Wr,type:e,key:i,ref:o,props:a,_owner:Wl.current}}function Bm(e,n){return{$$typeof:Wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function zm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ic=/\/+/g;function to(e,n){return typeof e=="object"&&e!==null&&e.key!=null?zm(""+e.key):n.toString(36)}function Na(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Wr:case Tm:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+to(o,0):r,ac(a)?(t="",e!=null&&(t=e.replace(ic,"$&/")+"/"),Na(a,n,t,"",function(u){return u})):a!=null&&(Gl(a)&&(a=Bm(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(ic,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",ac(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+to(i,l);o+=Na(i,n,t,s,a)}else if(s=Fm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+to(i,l++),o+=Na(i,n,t,s,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(e,n,t){if(e==null)return e;var r=[],a=0;return Na(e,r,"","",function(i){return n.call(t,i,a++)}),r}function Mm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},La={transition:null},Hm={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:La,ReactCurrentOwner:Wl};function fd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:ua,forEach:function(e,n,t){ua(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ua(e,function(){n++}),n},toArray:function(e){return ua(e,function(n){return n})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Zt;M.Fragment=Cm;M.Profiler=Lm;M.PureComponent=Vl;M.StrictMode=Nm;M.Suspense=Dm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;M.act=fd;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ld({},e.props),a=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Wl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)ud.call(n,s)&&!dd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Wr,type:e.type,key:a,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:jm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Am,_context:e},e.Consumer=e};M.createElement=pd;M.createFactory=function(e){var n=pd.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Pm,render:e}};M.isValidElement=Gl;M.lazy=function(e){return{$$typeof:Im,_payload:{_status:-1,_result:e},_init:Mm}};M.memo=function(e,n){return{$$typeof:Om,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=La.transition;La.transition={};try{e()}finally{La.transition=n}};M.unstable_act=fd;M.useCallback=function(e,n){return Ae.current.useCallback(e,n)};M.useContext=function(e){return Ae.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};M.useEffect=function(e,n){return Ae.current.useEffect(e,n)};M.useId=function(){return Ae.current.useId()};M.useImperativeHandle=function(e,n,t){return Ae.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return Ae.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return Ae.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return Ae.current.useMemo(e,n)};M.useReducer=function(e,n,t){return Ae.current.useReducer(e,n,t)};M.useRef=function(e){return Ae.current.useRef(e)};M.useState=function(e){return Ae.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return Ae.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return Ae.current.useTransition()};M.version="18.3.1";id.exports=M;var b=id.exports;const Yl=rd(b),Um=Rm({__proto__:null,default:Yl},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=b,Km=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),qm=Object.prototype.hasOwnProperty,Wm=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gm={key:!0,ref:!0,__self:!0,__source:!0};function md(e,n,t){var r,a={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)qm.call(n,r)&&!Gm.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Km,type:e,key:i,ref:o,props:a,_owner:Wm.current}}Si.Fragment=Vm;Si.jsx=md;Si.jsxs=md;ad.exports=Si;var c=ad.exports,zo={},gd={exports:{}},Ve={},hd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,L){var O=A.length;A.push(L);e:for(;0<O;){var I=O-1>>>1,H=A[I];if(0<a(H,L))A[I]=L,A[O]=H,O=I;else break e}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var L=A[0],O=A.pop();if(O!==L){A[0]=O;e:for(var I=0,H=A.length,xe=H>>>1;I<xe;){var X=2*(I+1)-1,Pe=A[X],un=X+1,We=A[un];if(0>a(Pe,O))un<H&&0>a(We,Pe)?(A[I]=We,A[un]=O,I=un):(A[I]=Pe,A[X]=O,I=X);else if(un<H&&0>a(We,O))A[I]=We,A[un]=O,I=un;else break e}}return L}function a(A,L){var O=A.sortIndex-L.sortIndex;return O!==0?O:A.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],d=1,p=null,g=3,w=!1,m=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(A){for(var L=t(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=A)r(u),L.sortIndex=L.expirationTime,n(s,L);else break;L=t(u)}}function S(A){if(v=!1,h(A),!m)if(t(s)!==null)m=!0,G(E);else{var L=t(u);L!==null&&Te(S,L.startTime-A)}}function E(A,L){m=!1,v&&(v=!1,x(C),C=-1),w=!0;var O=g;try{for(h(L),p=t(s);p!==null&&(!(p.expirationTime>L)||A&&!W());){var I=p.callback;if(typeof I=="function"){p.callback=null,g=p.priorityLevel;var H=I(p.expirationTime<=L);L=e.unstable_now(),typeof H=="function"?p.callback=H:p===t(s)&&r(s),h(L)}else r(s);p=t(s)}if(p!==null)var xe=!0;else{var X=t(u);X!==null&&Te(S,X.startTime-L),xe=!1}return xe}finally{p=null,g=O,w=!1}}var T=!1,_=null,C=-1,R=5,P=-1;function W(){return!(e.unstable_now()-P<R)}function pe(){if(_!==null){var A=e.unstable_now();P=A;var L=!0;try{L=_(!0,A)}finally{L?V():(T=!1,_=null)}}else T=!1}var V;if(typeof f=="function")V=function(){f(pe)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,le=z.port2;z.port1.onmessage=pe,V=function(){le.postMessage(null)}}else V=function(){y(pe,0)};function G(A){_=A,T||(T=!0,V())}function Te(A,L){C=y(function(){A(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){m||w||(m=!0,G(E))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var O=g;g=L;try{return A()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=g;g=A;try{return L()}finally{g=O}},e.unstable_scheduleCallback=function(A,L,O){var I=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?I+O:I):O=I,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=O+H,A={id:d++,callback:L,priorityLevel:A,startTime:O,expirationTime:H,sortIndex:-1},O>I?(A.sortIndex=O,n(u,A),t(s)===null&&A===t(u)&&(v?(x(C),C=-1):v=!0,Te(S,O-I))):(A.sortIndex=H,n(s,A),m||w||(m=!0,G(E))),A},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(A){var L=g;return function(){var O=g;g=L;try{return A.apply(this,arguments)}finally{g=O}}}})(xd);hd.exports=xd;var Ym=hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=b,Ke=Ym;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vd=new Set,Tr={};function ht(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Tr[e]=n,e=0;e<n.length;e++)vd.add(n[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=Object.prototype.hasOwnProperty,Jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},lc={};function Xm(e){return Mo.call(lc,e)?!0:Mo.call(oc,e)?!1:Jm.test(e)?lc[e]=!0:(oc[e]=!0,!1)}function Zm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eg(e,n,t,r){if(n===null||typeof n>"u"||Zm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,r,a,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ql,Jl);we[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ql,Jl);we[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ql,Jl);we[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,n,t,r){var a=we.hasOwnProperty(n)?we[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(eg(n,t,a,r)&&(t=null),r||a===null?Xm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Nn=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Ho=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),bd=Symbol.for("react.context"),es=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),$o=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),sc=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ro;function mr(e){if(ro===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ro=n&&n[1]||""}return`
`+ro+e}var ao=!1;function io(e,n){if(!e||ao)return"";ao=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{ao=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?mr(e):""}function ng(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=io(e.type,!1),e;case 11:return e=io(e.type.render,!1),e;case 1:return e=io(e.type,!0),e;default:return""}}function Ko(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case _t:return"Portal";case Ho:return"Profiler";case Zl:return"StrictMode";case Uo:return"Suspense";case $o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bd:return(e.displayName||"Context")+".Consumer";case yd:return(e._context.displayName||"Context")+".Provider";case es:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return n=e.displayName||null,n!==null?n:Ko(e.type)||"Memo";case An:n=e._payload,e=e._init;try{return Ko(e(n))}catch{}}return null}function tg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ko(n);case 8:return n===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rg(e){var n=Sd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pa(e){e._valueTracker||(e._valueTracker=rg(e))}function kd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Sd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vo(e,n){var t=n.checked;return re({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Wn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ed(e,n){n=n.checked,n!=null&&Xl(e,"checked",n,!1)}function qo(e,n){Ed(e,n);var t=Wn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Wo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Wo(e,n.type,Wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function uc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Wo(e,n,t){(n!=="number"||Ka(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gr=Array.isArray;function Ft(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Wn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Go(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return re({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(N(92));if(gr(t)){if(1<t.length)throw Error(N(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Wn(t)}}function _d(e,n){var t=Wn(n.value),r=Wn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function pc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Rd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fa,Td=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ag=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){ag.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vr[n]=vr[e]})});function Cd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vr.hasOwnProperty(e)&&vr[e]?(""+n).trim():n+"px"}function Nd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Cd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var ig=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,n){if(n){if(ig[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Jo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,Bt=null,zt=null;function fc(e){if(e=Qr(e)){if(typeof Zo!="function")throw Error(N(280));var n=e.stateNode;n&&(n=Ti(n),Zo(e.stateNode,e.type,n))}}function Ld(e){Bt?zt?zt.push(e):zt=[e]:Bt=e}function Ad(){if(Bt){var e=Bt,n=zt;if(zt=Bt=null,fc(e),n)for(e=0;e<n.length;e++)fc(n[e])}}function jd(e,n){return e(n)}function Pd(){}var oo=!1;function Dd(e,n,t){if(oo)return e(n,t);oo=!0;try{return jd(e,n,t)}finally{oo=!1,(Bt!==null||zt!==null)&&(Pd(),Ad())}}function Nr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ti(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(N(231,n,typeof t));return t}var el=!1;if(_n)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){el=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{el=!1}function og(e,n,t,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var yr=!1,Va=null,qa=!1,nl=null,lg={onError:function(e){yr=!0,Va=e}};function sg(e,n,t,r,a,i,o,l,s){yr=!1,Va=null,og.apply(lg,arguments)}function cg(e,n,t,r,a,i,o,l,s){if(sg.apply(this,arguments),yr){if(yr){var u=Va;yr=!1,Va=null}else throw Error(N(198));qa||(qa=!0,nl=u)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Od(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mc(e){if(xt(e)!==e)throw Error(N(188))}function ug(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(N(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return mc(a),e;if(i===r)return mc(a),n;i=i.sibling}throw Error(N(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o)throw Error(N(189))}}if(t.alternate!==r)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?e:n}function Id(e){return e=ug(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fd(e);if(n!==null)return n;e=e.sibling}return null}var Bd=Ke.unstable_scheduleCallback,gc=Ke.unstable_cancelCallback,dg=Ke.unstable_shouldYield,pg=Ke.unstable_requestPaint,ce=Ke.unstable_now,fg=Ke.unstable_getCurrentPriorityLevel,rs=Ke.unstable_ImmediatePriority,zd=Ke.unstable_UserBlockingPriority,Wa=Ke.unstable_NormalPriority,mg=Ke.unstable_LowPriority,Md=Ke.unstable_IdlePriority,ki=null,xn=null;function gg(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:vg,hg=Math.log,xg=Math.LN2;function vg(e){return e>>>=0,e===0?32:31-(hg(e)/xg|0)|0}var ma=64,ga=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?r=hr(l):(i&=o,i!==0&&(r=hr(i)))}else o=t&~a,o!==0?r=hr(o):i!==0&&(r=hr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-on(n),a=1<<t,r|=e[t],n&=~a;return r}function yg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-on(i),l=1<<o,s=a[o];s===-1?(!(l&t)||l&r)&&(a[o]=yg(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=ma;return ma<<=1,!(ma&4194240)&&(ma=64),e}function lo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function wg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-on(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function as(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-on(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var $=0;function Ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $d,is,Kd,Vd,qd,rl=!1,ha=[],Bn=null,zn=null,Mn=null,Lr=new Map,Ar=new Map,Pn=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,n){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(n.pointerId)}}function ir(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Qr(n),n!==null&&is(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function kg(e,n,t,r,a){switch(n){case"focusin":return Bn=ir(Bn,e,n,t,r,a),!0;case"dragenter":return zn=ir(zn,e,n,t,r,a),!0;case"mouseover":return Mn=ir(Mn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Lr.set(i,ir(Lr.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ar.set(i,ir(Ar.get(i)||null,e,n,t,r,a)),!0}return!1}function Wd(e){var n=rt(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=Od(t),n!==null){e.blockedOn=n,qd(e.priority,function(){Kd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Aa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=al(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Xo=r,t.target.dispatchEvent(r),Xo=null}else return n=Qr(t),n!==null&&is(n),e.blockedOn=t,!1;n.shift()}return!0}function xc(e,n,t){Aa(e)&&t.delete(n)}function Eg(){rl=!1,Bn!==null&&Aa(Bn)&&(Bn=null),zn!==null&&Aa(zn)&&(zn=null),Mn!==null&&Aa(Mn)&&(Mn=null),Lr.forEach(xc),Ar.forEach(xc)}function or(e,n){e.blockedOn===n&&(e.blockedOn=null,rl||(rl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Eg)))}function jr(e){function n(a){return or(a,e)}if(0<ha.length){or(ha[0],e);for(var t=1;t<ha.length;t++){var r=ha[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Bn!==null&&or(Bn,e),zn!==null&&or(zn,e),Mn!==null&&or(Mn,e),Lr.forEach(n),Ar.forEach(n),t=0;t<Pn.length;t++)r=Pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(t=Pn[0],t.blockedOn===null);)Wd(t),t.blockedOn===null&&Pn.shift()}var Mt=Nn.ReactCurrentBatchConfig,Ya=!0;function _g(e,n,t,r){var a=$,i=Mt.transition;Mt.transition=null;try{$=1,os(e,n,t,r)}finally{$=a,Mt.transition=i}}function Rg(e,n,t,r){var a=$,i=Mt.transition;Mt.transition=null;try{$=4,os(e,n,t,r)}finally{$=a,Mt.transition=i}}function os(e,n,t,r){if(Ya){var a=al(e,n,t,r);if(a===null)vo(e,n,r,Qa,t),hc(e,r);else if(kg(a,e,n,t,r))r.stopPropagation();else if(hc(e,r),n&4&&-1<Sg.indexOf(e)){for(;a!==null;){var i=Qr(a);if(i!==null&&$d(i),i=al(e,n,t,r),i===null&&vo(e,n,r,Qa,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else vo(e,n,r,null,t)}}var Qa=null;function al(e,n,t,r){if(Qa=null,e=ts(r),e=rt(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Od(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qa=e,null}function Gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case rs:return 1;case zd:return 4;case Wa:case mg:return 16;case Md:return 536870912;default:return 16}default:return 16}}var On=null,ls=null,ja=null;function Yd(){if(ja)return ja;var e,n=ls,t=n.length,r,a="value"in On?On.value:On.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return ja=a.slice(e,1<r?1-r:void 0)}function Pa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xa(){return!0}function vc(){return!1}function qe(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:vc,this.isPropagationStopped=vc,this}return re(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=qe(er),Yr=re({},er,{view:0,detail:0}),Tg=qe(Yr),so,co,lr,Ei=re({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(so=e.screenX-lr.screenX,co=e.screenY-lr.screenY):co=so=0,lr=e),so)},movementY:function(e){return"movementY"in e?e.movementY:co}}),yc=qe(Ei),Cg=re({},Ei,{dataTransfer:0}),Ng=qe(Cg),Lg=re({},Yr,{relatedTarget:0}),uo=qe(Lg),Ag=re({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=qe(Ag),Pg=re({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dg=qe(Pg),Og=re({},er,{data:0}),bc=qe(Og),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Bg[e])?!!n[e]:!1}function cs(){return zg}var Mg=re({},Yr,{key:function(e){if(e.key){var n=Ig[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?Pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hg=qe(Mg),Ug=re({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=qe(Ug),$g=re({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),Kg=qe($g),Vg=re({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),qg=qe(Vg),Wg=re({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gg=qe(Wg),Yg=[9,13,27,32],us=_n&&"CompositionEvent"in window,br=null;_n&&"documentMode"in document&&(br=document.documentMode);var Qg=_n&&"TextEvent"in window&&!br,Qd=_n&&(!us||br&&8<br&&11>=br),Sc=" ",kc=!1;function Jd(e,n){switch(e){case"keyup":return Yg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function Jg(e,n){switch(e){case"compositionend":return Xd(n);case"keypress":return n.which!==32?null:(kc=!0,Sc);case"textInput":return e=n.data,e===Sc&&kc?null:e;default:return null}}function Xg(e,n){if(Tt)return e==="compositionend"||!us&&Jd(e,n)?(e=Yd(),ja=ls=On=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qd&&n.locale!=="ko"?null:n.data;default:return null}}var Zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ec(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zg[e.type]:n==="textarea"}function Zd(e,n,t,r){Ld(r),n=Ja(n,"onChange"),0<n.length&&(t=new ss("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wr=null,Pr=null;function eh(e){up(e,0)}function _i(e){var n=Lt(e);if(kd(n))return e}function nh(e,n){if(e==="change")return n}var ep=!1;if(_n){var po;if(_n){var fo="oninput"in document;if(!fo){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),fo=typeof _c.oninput=="function"}po=fo}else po=!1;ep=po&&(!document.documentMode||9<document.documentMode)}function Rc(){wr&&(wr.detachEvent("onpropertychange",np),Pr=wr=null)}function np(e){if(e.propertyName==="value"&&_i(Pr)){var n=[];Zd(n,Pr,e,ts(e)),Dd(eh,n)}}function th(e,n,t){e==="focusin"?(Rc(),wr=n,Pr=t,wr.attachEvent("onpropertychange",np)):e==="focusout"&&Rc()}function rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Pr)}function ah(e,n){if(e==="click")return _i(n)}function ih(e,n){if(e==="input"||e==="change")return _i(n)}function oh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:oh;function Dr(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Mo.call(n,a)||!sn(e[a],n[a]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cc(e,n){var t=Tc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tc(t)}}function tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rp(){for(var e=window,n=Ka();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ka(e.document)}return n}function ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function lh(e){var n=rp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&tp(t.ownerDocument.documentElement,t)){if(r!==null&&ds(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Cc(t,i);var o=Cc(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sh=_n&&"documentMode"in document&&11>=document.documentMode,Ct=null,il=null,Sr=null,ol=!1;function Nc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ol||Ct==null||Ct!==Ka(r)||(r=Ct,"selectionStart"in r&&ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Dr(Sr,r)||(Sr=r,r=Ja(il,"onSelect"),0<r.length&&(n=new ss("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ct)))}function va(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Nt={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},mo={},ap={};_n&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Nt.animationend.animation,delete Nt.animationiteration.animation,delete Nt.animationstart.animation),"TransitionEvent"in window||delete Nt.transitionend.transition);function Ri(e){if(mo[e])return mo[e];if(!Nt[e])return e;var n=Nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ap)return mo[e]=n[t];return e}var ip=Ri("animationend"),op=Ri("animationiteration"),lp=Ri("animationstart"),sp=Ri("transitionend"),cp=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){cp.set(e,n),ht(n,[e])}for(var go=0;go<Lc.length;go++){var ho=Lc[go],ch=ho.toLowerCase(),uh=ho[0].toUpperCase()+ho.slice(1);Yn(ch,"on"+uh)}Yn(ip,"onAnimationEnd");Yn(op,"onAnimationIteration");Yn(lp,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(sp,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function Ac(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,cg(r,n,void 0,e),e.currentTarget=null}function up(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Ac(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Ac(a,l,u),i=s}}}if(qa)throw e=nl,qa=!1,nl=null,e}function Y(e,n){var t=n[dl];t===void 0&&(t=n[dl]=new Set);var r=e+"__bubble";t.has(r)||(dp(n,e,2,!1),t.add(r))}function xo(e,n,t){var r=0;n&&(r|=4),dp(t,e,r,n)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[ya]){e[ya]=!0,vd.forEach(function(t){t!=="selectionchange"&&(dh.has(t)||xo(t,!1,e),xo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ya]||(n[ya]=!0,xo("selectionchange",!1,n))}}function dp(e,n,t,r){switch(Gd(n)){case 1:var a=_g;break;case 4:a=Rg;break;default:a=os}t=a.bind(null,n,t,e),a=void 0,!el||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function vo(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=rt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Dd(function(){var u=i,d=ts(t),p=[];e:{var g=cp.get(e);if(g!==void 0){var w=ss,m=e;switch(e){case"keypress":if(Pa(t)===0)break e;case"keydown":case"keyup":w=Hg;break;case"focusin":m="focus",w=uo;break;case"focusout":m="blur",w=uo;break;case"beforeblur":case"afterblur":w=uo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Kg;break;case ip:case op:case lp:w=jg;break;case sp:w=qg;break;case"scroll":w=Tg;break;case"wheel":w=Gg;break;case"copy":case"cut":case"paste":w=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wc}var v=(n&4)!==0,y=!v&&e==="scroll",x=v?g!==null?g+"Capture":null:g;v=[];for(var f=u,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,x!==null&&(S=Nr(f,x),S!=null&&v.push(Ir(f,S,h)))),y)break;f=f.return}0<v.length&&(g=new w(g,m,null,t,d),p.push({event:g,listeners:v}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&t!==Xo&&(m=t.relatedTarget||t.fromElement)&&(rt(m)||m[Rn]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(m=t.relatedTarget||t.toElement,w=u,m=m?rt(m):null,m!==null&&(y=xt(m),m!==y||m.tag!==5&&m.tag!==6)&&(m=null)):(w=null,m=u),w!==m)){if(v=yc,S="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=wc,S="onPointerLeave",x="onPointerEnter",f="pointer"),y=w==null?g:Lt(w),h=m==null?g:Lt(m),g=new v(S,f+"leave",w,t,d),g.target=y,g.relatedTarget=h,S=null,rt(d)===u&&(v=new v(x,f+"enter",m,t,d),v.target=h,v.relatedTarget=y,S=v),y=S,w&&m)n:{for(v=w,x=m,f=0,h=v;h;h=kt(h))f++;for(h=0,S=x;S;S=kt(S))h++;for(;0<f-h;)v=kt(v),f--;for(;0<h-f;)x=kt(x),h--;for(;f--;){if(v===x||x!==null&&v===x.alternate)break n;v=kt(v),x=kt(x)}v=null}else v=null;w!==null&&jc(p,g,w,v,!1),m!==null&&y!==null&&jc(p,y,m,v,!0)}}e:{if(g=u?Lt(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=nh;else if(Ec(g))if(ep)E=ih;else{E=rh;var T=th}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=ah);if(E&&(E=E(e,u))){Zd(p,E,t,d);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Wo(g,"number",g.value)}switch(T=u?Lt(u):window,e){case"focusin":(Ec(T)||T.contentEditable==="true")&&(Ct=T,il=u,Sr=null);break;case"focusout":Sr=il=Ct=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,Nc(p,t,d);break;case"selectionchange":if(sh)break;case"keydown":case"keyup":Nc(p,t,d)}var _;if(us)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Tt?Jd(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Qd&&t.locale!=="ko"&&(Tt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Tt&&(_=Yd()):(On=d,ls="value"in On?On.value:On.textContent,Tt=!0)),T=Ja(u,C),0<T.length&&(C=new bc(C,e,null,t,d),p.push({event:C,listeners:T}),_?C.data=_:(_=Xd(t),_!==null&&(C.data=_)))),(_=Qg?Jg(e,t):Xg(e,t))&&(u=Ja(u,"onBeforeInput"),0<u.length&&(d=new bc("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:u}),d.data=_))}up(p,n)})}function Ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ja(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Nr(e,t),i!=null&&r.unshift(Ir(e,i,a)),i=Nr(e,n),i!=null&&r.push(Ir(e,i,a))),e=e.return}return r}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Nr(t,i),s!=null&&o.unshift(Ir(t,s,l))):a||(s=Nr(t,i),s!=null&&o.push(Ir(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var ph=/\r\n?/g,fh=/\u0000|\uFFFD/g;function Pc(e){return(typeof e=="string"?e:""+e).replace(ph,`
`).replace(fh,"")}function ba(e,n,t){if(n=Pc(n),Pc(e)!==n&&t)throw Error(N(425))}function Xa(){}var ll=null,sl=null;function cl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ul=typeof setTimeout=="function"?setTimeout:void 0,mh=typeof clearTimeout=="function"?clearTimeout:void 0,Dc=typeof Promise=="function"?Promise:void 0,gh=typeof queueMicrotask=="function"?queueMicrotask:typeof Dc<"u"?function(e){return Dc.resolve(null).then(e).catch(hh)}:ul;function hh(e){setTimeout(function(){throw e})}function yo(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),jr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);jr(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),gn="__reactFiber$"+nr,Fr="__reactProps$"+nr,Rn="__reactContainer$"+nr,dl="__reactEvents$"+nr,xh="__reactListeners$"+nr,vh="__reactHandles$"+nr;function rt(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Oc(e);e!==null;){if(t=e[gn])return t;e=Oc(e)}return n}e=t,t=e.parentNode}return null}function Qr(e){return e=e[gn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ti(e){return e[Fr]||null}var pl=[],At=-1;function Qn(e){return{current:e}}function J(e){0>At||(e.current=pl[At],pl[At]=null,At--)}function q(e,n){At++,pl[At]=e.current,e.current=n}var Gn={},Re=Qn(Gn),Ie=Qn(!1),ut=Gn;function Kt(e,n){var t=e.type.contextTypes;if(!t)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fe(e){return e=e.childContextTypes,e!=null}function Za(){J(Ie),J(Re)}function Ic(e,n,t){if(Re.current!==Gn)throw Error(N(168));q(Re,n),q(Ie,t)}function pp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(N(108,tg(e)||"Unknown",a));return re({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,ut=Re.current,q(Re,e),q(Ie,Ie.current),!0}function Fc(e,n,t){var r=e.stateNode;if(!r)throw Error(N(169));t?(e=pp(e,n,ut),r.__reactInternalMemoizedMergedChildContext=e,J(Ie),J(Re),q(Re,e)):J(Ie),q(Ie,t)}var wn=null,Ci=!1,bo=!1;function fp(e){wn===null?wn=[e]:wn.push(e)}function yh(e){Ci=!0,fp(e)}function Jn(){if(!bo&&wn!==null){bo=!0;var e=0,n=$;try{var t=wn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}wn=null,Ci=!1}catch(a){throw wn!==null&&(wn=wn.slice(e+1)),Bd(rs,Jn),a}finally{$=n,bo=!1}}return null}var jt=[],Pt=0,ni=null,ti=0,Ye=[],Qe=0,dt=null,Sn=1,kn="";function Zn(e,n){jt[Pt++]=ti,jt[Pt++]=ni,ni=e,ti=n}function mp(e,n,t){Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=dt,dt=e;var r=Sn;e=kn;var a=32-on(r)-1;r&=~(1<<a),t+=1;var i=32-on(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Sn=1<<32-on(n)+a|t<<a|r,kn=i+e}else Sn=1<<i|t<<a|r,kn=e}function ps(e){e.return!==null&&(Zn(e,1),mp(e,1,0))}function fs(e){for(;e===ni;)ni=jt[--Pt],jt[Pt]=null,ti=jt[--Pt],jt[Pt]=null;for(;e===dt;)dt=Ye[--Qe],Ye[Qe]=null,kn=Ye[--Qe],Ye[Qe]=null,Sn=Ye[--Qe],Ye[Qe]=null}var $e=null,Ue=null,Z=!1,an=null;function gp(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Bc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,Ue=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=dt!==null?{id:Sn,overflow:kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,Ue=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(Z){var n=Ue;if(n){var t=n;if(!Bc(e,n)){if(fl(e))throw Error(N(418));n=Hn(t.nextSibling);var r=$e;n&&Bc(e,n)?gp(r,t):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(fl(e))throw Error(N(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function wa(e){if(e!==$e)return!1;if(!Z)return zc(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!cl(e.type,e.memoizedProps)),n&&(n=Ue)){if(fl(e))throw hp(),Error(N(418));for(;n;)gp(e,n),n=Hn(n.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=$e?Hn(e.stateNode.nextSibling):null;return!0}function hp(){for(var e=Ue;e;)e=Hn(e.nextSibling)}function Vt(){Ue=$e=null,Z=!1}function ms(e){an===null?an=[e]:an.push(e)}var bh=Nn.ReactCurrentBatchConfig;function sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var r=t.stateNode}if(!r)throw Error(N(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,e))}return e}function Sa(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Mc(e){var n=e._init;return n(e._payload)}function xp(e){function n(x,f){if(e){var h=x.deletions;h===null?(x.deletions=[f],x.flags|=16):h.push(f)}}function t(x,f){if(!e)return null;for(;f!==null;)n(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(x,f){return x=Vn(x,f),x.index=0,x.sibling=null,x}function i(x,f,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<f?(x.flags|=2,f):h):(x.flags|=2,f)):(x.flags|=1048576,f)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,f,h,S){return f===null||f.tag!==6?(f=To(h,x.mode,S),f.return=x,f):(f=a(f,h),f.return=x,f)}function s(x,f,h,S){var E=h.type;return E===Rt?d(x,f,h.props.children,S,h.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===An&&Mc(E)===f.type)?(S=a(f,h.props),S.ref=sr(x,f,h),S.return=x,S):(S=Ma(h.type,h.key,h.props,null,x.mode,S),S.ref=sr(x,f,h),S.return=x,S)}function u(x,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Co(h,x.mode,S),f.return=x,f):(f=a(f,h.children||[]),f.return=x,f)}function d(x,f,h,S,E){return f===null||f.tag!==7?(f=st(h,x.mode,S,E),f.return=x,f):(f=a(f,h),f.return=x,f)}function p(x,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=To(""+f,x.mode,h),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case da:return h=Ma(f.type,f.key,f.props,null,x.mode,h),h.ref=sr(x,null,f),h.return=x,h;case _t:return f=Co(f,x.mode,h),f.return=x,f;case An:var S=f._init;return p(x,S(f._payload),h)}if(gr(f)||rr(f))return f=st(f,x.mode,h,null),f.return=x,f;Sa(x,f)}return null}function g(x,f,h,S){var E=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:l(x,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case da:return h.key===E?s(x,f,h,S):null;case _t:return h.key===E?u(x,f,h,S):null;case An:return E=h._init,g(x,f,E(h._payload),S)}if(gr(h)||rr(h))return E!==null?null:d(x,f,h,S,null);Sa(x,h)}return null}function w(x,f,h,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(h)||null,l(f,x,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case da:return x=x.get(S.key===null?h:S.key)||null,s(f,x,S,E);case _t:return x=x.get(S.key===null?h:S.key)||null,u(f,x,S,E);case An:var T=S._init;return w(x,f,h,T(S._payload),E)}if(gr(S)||rr(S))return x=x.get(h)||null,d(f,x,S,E,null);Sa(f,S)}return null}function m(x,f,h,S){for(var E=null,T=null,_=f,C=f=0,R=null;_!==null&&C<h.length;C++){_.index>C?(R=_,_=null):R=_.sibling;var P=g(x,_,h[C],S);if(P===null){_===null&&(_=R);break}e&&_&&P.alternate===null&&n(x,_),f=i(P,f,C),T===null?E=P:T.sibling=P,T=P,_=R}if(C===h.length)return t(x,_),Z&&Zn(x,C),E;if(_===null){for(;C<h.length;C++)_=p(x,h[C],S),_!==null&&(f=i(_,f,C),T===null?E=_:T.sibling=_,T=_);return Z&&Zn(x,C),E}for(_=r(x,_);C<h.length;C++)R=w(_,x,C,h[C],S),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?C:R.key),f=i(R,f,C),T===null?E=R:T.sibling=R,T=R);return e&&_.forEach(function(W){return n(x,W)}),Z&&Zn(x,C),E}function v(x,f,h,S){var E=rr(h);if(typeof E!="function")throw Error(N(150));if(h=E.call(h),h==null)throw Error(N(151));for(var T=E=null,_=f,C=f=0,R=null,P=h.next();_!==null&&!P.done;C++,P=h.next()){_.index>C?(R=_,_=null):R=_.sibling;var W=g(x,_,P.value,S);if(W===null){_===null&&(_=R);break}e&&_&&W.alternate===null&&n(x,_),f=i(W,f,C),T===null?E=W:T.sibling=W,T=W,_=R}if(P.done)return t(x,_),Z&&Zn(x,C),E;if(_===null){for(;!P.done;C++,P=h.next())P=p(x,P.value,S),P!==null&&(f=i(P,f,C),T===null?E=P:T.sibling=P,T=P);return Z&&Zn(x,C),E}for(_=r(x,_);!P.done;C++,P=h.next())P=w(_,x,C,P.value,S),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?C:P.key),f=i(P,f,C),T===null?E=P:T.sibling=P,T=P);return e&&_.forEach(function(pe){return n(x,pe)}),Z&&Zn(x,C),E}function y(x,f,h,S){if(typeof h=="object"&&h!==null&&h.type===Rt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case da:e:{for(var E=h.key,T=f;T!==null;){if(T.key===E){if(E=h.type,E===Rt){if(T.tag===7){t(x,T.sibling),f=a(T,h.props.children),f.return=x,x=f;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===An&&Mc(E)===T.type){t(x,T.sibling),f=a(T,h.props),f.ref=sr(x,T,h),f.return=x,x=f;break e}t(x,T);break}else n(x,T);T=T.sibling}h.type===Rt?(f=st(h.props.children,x.mode,S,h.key),f.return=x,x=f):(S=Ma(h.type,h.key,h.props,null,x.mode,S),S.ref=sr(x,f,h),S.return=x,x=S)}return o(x);case _t:e:{for(T=h.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(x,f.sibling),f=a(f,h.children||[]),f.return=x,x=f;break e}else{t(x,f);break}else n(x,f);f=f.sibling}f=Co(h,x.mode,S),f.return=x,x=f}return o(x);case An:return T=h._init,y(x,f,T(h._payload),S)}if(gr(h))return m(x,f,h,S);if(rr(h))return v(x,f,h,S);Sa(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(x,f.sibling),f=a(f,h),f.return=x,x=f):(t(x,f),f=To(h,x.mode,S),f.return=x,x=f),o(x)):t(x,f)}return y}var qt=xp(!0),vp=xp(!1),ri=Qn(null),ai=null,Dt=null,gs=null;function hs(){gs=Dt=ai=null}function xs(e){var n=ri.current;J(ri),e._currentValue=n}function gl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ht(e,n){ai=e,gs=Dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Oe=!0),e.firstContext=null)}function Ze(e){var n=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:n,next:null},Dt===null){if(ai===null)throw Error(N(308));Dt=e,ai.dependencies={lanes:0,firstContext:e}}else Dt=Dt.next=e;return n}var at=null;function vs(e){at===null?at=[e]:at.push(e)}function yp(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,vs(n)):(t.next=a.next,a.next=t),n.interleaved=t,Tn(e,r)}function Tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Tn(e,t)}return a=r.interleaved,a===null?(n.next=n,vs(r)):(n.next=a.next,a.next=n),r.interleaved=n,Tn(e,t)}function Da(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,as(e,t)}}function Hc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ii(e,n,t,r){var a=e.updateQueue;jn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var p=a.baseState;o=0,d=u=s=null,l=i;do{var g=l.lane,w=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(g=n,w=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){p=m.call(w,p,g);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,g=typeof m=="function"?m.call(w,p,g):m,g==null)break e;p=re({},p,g);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,s=p):d=d.next=w,o|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(d===null&&(s=p),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=d,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);ft|=o,e.lanes=o,e.memoizedState=p}}function Uc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var Jr={},vn=Qn(Jr),Br=Qn(Jr),zr=Qn(Jr);function it(e){if(e===Jr)throw Error(N(174));return e}function bs(e,n){switch(q(zr,n),q(Br,e),q(vn,Jr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Yo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Yo(n,e)}J(vn),q(vn,n)}function Wt(){J(vn),J(Br),J(zr)}function wp(e){it(zr.current);var n=it(vn.current),t=Yo(n,e.type);n!==t&&(q(Br,e),q(vn,t))}function ws(e){Br.current===e&&(J(vn),J(Br))}var ne=Qn(0);function oi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wo=[];function Ss(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var Oa=Nn.ReactCurrentDispatcher,So=Nn.ReactCurrentBatchConfig,pt=0,te=null,fe=null,ge=null,li=!1,kr=!1,Mr=0,wh=0;function Se(){throw Error(N(321))}function ks(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function Es(e,n,t,r,a,i){if(pt=i,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Oa.current=e===null||e.memoizedState===null?_h:Rh,e=t(r,a),kr){i=0;do{if(kr=!1,Mr=0,25<=i)throw Error(N(301));i+=1,ge=fe=null,n.updateQueue=null,Oa.current=Th,e=t(r,a)}while(kr)}if(Oa.current=si,n=fe!==null&&fe.next!==null,pt=0,ge=fe=te=null,li=!1,n)throw Error(N(300));return e}function _s(){var e=Mr!==0;return Mr=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?te.memoizedState=ge=e:ge=ge.next=e,ge}function en(){if(fe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var n=ge===null?te.memoizedState:ge.next;if(n!==null)ge=n,fe=e;else{if(e===null)throw Error(N(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?te.memoizedState=ge=e:ge=ge.next=e}return ge}function Hr(e,n){return typeof n=="function"?n(e):n}function ko(e){var n=en(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=fe,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var d=u.lane;if((pt&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,te.lanes|=d,ft|=d}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,sn(r,n.memoizedState)||(Oe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,te.lanes|=i,ft|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Eo(e){var n=en(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);sn(i,n.memoizedState)||(Oe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Sp(){}function kp(e,n){var t=te,r=en(),a=n(),i=!sn(r.memoizedState,a);if(i&&(r.memoizedState=a,Oe=!0),r=r.queue,Rs(Rp.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,Ur(9,_p.bind(null,t,r,a,n),void 0,null),he===null)throw Error(N(349));pt&30||Ep(t,n,a)}return a}function Ep(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function _p(e,n,t,r){n.value=t,n.getSnapshot=r,Tp(n)&&Cp(e)}function Rp(e,n,t){return t(function(){Tp(n)&&Cp(e)})}function Tp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function Cp(e){var n=Tn(e,1);n!==null&&ln(n,e,1,-1)}function $c(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},n.queue=e,e=e.dispatch=Eh.bind(null,te,e),[n.memoizedState,e]}function Ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Np(){return en().memoizedState}function Ia(e,n,t,r){var a=mn();te.flags|=e,a.memoizedState=Ur(1|n,t,void 0,r===void 0?null:r)}function Ni(e,n,t,r){var a=en();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&ks(r,o.deps)){a.memoizedState=Ur(n,t,i,r);return}}te.flags|=e,a.memoizedState=Ur(1|n,t,i,r)}function Kc(e,n){return Ia(8390656,8,e,n)}function Rs(e,n){return Ni(2048,8,e,n)}function Lp(e,n){return Ni(4,2,e,n)}function Ap(e,n){return Ni(4,4,e,n)}function jp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pp(e,n,t){return t=t!=null?t.concat([e]):null,Ni(4,4,jp.bind(null,n,e),t)}function Ts(){}function Dp(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ks(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Op(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ks(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ip(e,n,t){return pt&21?(sn(t,n)||(t=Hd(),te.lanes|=t,ft|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=t)}function Sh(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=So.transition;So.transition={};try{e(!1),n()}finally{$=t,So.transition=r}}function Fp(){return en().memoizedState}function kh(e,n,t){var r=Kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Bp(e))zp(n,t);else if(t=yp(e,n,t,r),t!==null){var a=Le();ln(t,e,r,a),Mp(t,n,r)}}function Eh(e,n,t){var r=Kn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bp(e))zp(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(a.hasEagerState=!0,a.eagerState=l,sn(l,o)){var s=n.interleaved;s===null?(a.next=a,vs(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=yp(e,n,a,r),t!==null&&(a=Le(),ln(t,e,r,a),Mp(t,n,r))}}function Bp(e){var n=e.alternate;return e===te||n!==null&&n===te}function zp(e,n){kr=li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Mp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,as(e,t)}}var si={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},_h={readContext:Ze,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:Kc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ia(4194308,4,jp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ia(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ia(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=kh.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:$c,useDebugValue:Ts,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=$c(!1),n=e[0];return e=Sh.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=te,a=mn();if(Z){if(t===void 0)throw Error(N(407));t=t()}else{if(t=n(),he===null)throw Error(N(349));pt&30||Ep(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Kc(Rp.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,_p.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=mn(),n=he.identifierPrefix;if(Z){var t=kn,r=Sn;t=(r&~(1<<32-on(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=wh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Rh={readContext:Ze,useCallback:Dp,useContext:Ze,useEffect:Rs,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Ap,useMemo:Op,useReducer:ko,useRef:Np,useState:function(){return ko(Hr)},useDebugValue:Ts,useDeferredValue:function(e){var n=en();return Ip(n,fe.memoizedState,e)},useTransition:function(){var e=ko(Hr)[0],n=en().memoizedState;return[e,n]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Fp,unstable_isNewReconciler:!1},Th={readContext:Ze,useCallback:Dp,useContext:Ze,useEffect:Rs,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Ap,useMemo:Op,useReducer:Eo,useRef:Np,useState:function(){return Eo(Hr)},useDebugValue:Ts,useDeferredValue:function(e){var n=en();return fe===null?n.memoizedState=e:Ip(n,fe.memoizedState,e)},useTransition:function(){var e=Eo(Hr)[0],n=en().memoizedState;return[e,n]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Fp,unstable_isNewReconciler:!1};function tn(e,n){if(e&&e.defaultProps){n=re({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function hl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:re({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Li={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Le(),a=Kn(e),i=En(r,a);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,a),n!==null&&(ln(n,e,a,r),Da(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Le(),a=Kn(e),i=En(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,a),n!==null&&(ln(n,e,a,r),Da(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Le(),r=Kn(e),a=En(t,r);a.tag=2,n!=null&&(a.callback=n),n=Un(e,a,r),n!==null&&(ln(n,e,r,t),Da(n,e,r))}};function Vc(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Dr(t,r)||!Dr(a,i):!0}function Hp(e,n,t){var r=!1,a=Gn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(a=Fe(n)?ut:Re.current,r=n.contextTypes,i=(r=r!=null)?Kt(e,a):Gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Li,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function qc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Li.enqueueReplaceState(n,n.state,null)}function xl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},ys(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Ze(i):(i=Fe(n)?ut:Re.current,a.context=Kt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(hl(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Li.enqueueReplaceState(a,a.state,null),ii(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,n){try{var t="",r=n;do t+=ng(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function _o(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function vl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ch=typeof WeakMap=="function"?WeakMap:Map;function Up(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ui||(ui=!0,Cl=r),vl(e,n)},t}function $p(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){vl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){vl(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Wc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Ch;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Uh.bind(null,e,n,t),n.then(e,e))}function Gc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Yc(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var Nh=Nn.ReactCurrentOwner,Oe=!1;function Ce(e,n,t,r){n.child=e===null?vp(n,null,t,r):qt(n,e.child,t,r)}function Qc(e,n,t,r,a){t=t.render;var i=n.ref;return Ht(n,a),r=Es(e,n,t,r,i,a),t=_s(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Cn(e,n,a)):(Z&&t&&ps(n),n.flags|=1,Ce(e,n,r,a),n.child)}function Jc(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Os(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Kp(e,n,i,r,a)):(e=Ma(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Dr,t(o,r)&&e.ref===n.ref)return Cn(e,n,a)}return n.flags|=1,e=Vn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Kp(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(Dr(i,r)&&e.ref===n.ref)if(Oe=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Oe=!0);else return n.lanes=e.lanes,Cn(e,n,a)}return yl(e,n,t,r,a)}function Vp(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(It,He),He|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(It,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,q(It,He),He|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,q(It,He),He|=r;return Ce(e,n,a,t),n.child}function qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function yl(e,n,t,r,a){var i=Fe(t)?ut:Re.current;return i=Kt(n,i),Ht(n,a),t=Es(e,n,t,r,i,a),r=_s(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Cn(e,n,a)):(Z&&r&&ps(n),n.flags|=1,Ce(e,n,t,a),n.child)}function Xc(e,n,t,r,a){if(Fe(t)){var i=!0;ei(n)}else i=!1;if(Ht(n,a),n.stateNode===null)Fa(e,n),Hp(n,t,r),xl(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Fe(t)?ut:Re.current,u=Kt(n,u));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&qc(n,o,r,u),jn=!1;var g=n.memoizedState;o.state=g,ii(n,r,o,a),s=n.memoizedState,l!==r||g!==s||Ie.current||jn?(typeof d=="function"&&(hl(n,t,d,r),s=n.memoizedState),(l=jn||Vc(n,t,l,r,g,s,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,bp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:tn(n.type,l),o.props=u,p=n.pendingProps,g=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ze(s):(s=Fe(t)?ut:Re.current,s=Kt(n,s));var w=t.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==s)&&qc(n,o,r,s),jn=!1,g=n.memoizedState,o.state=g,ii(n,r,o,a);var m=n.memoizedState;l!==p||g!==m||Ie.current||jn?(typeof w=="function"&&(hl(n,t,w,r),m=n.memoizedState),(u=jn||Vc(n,t,u,r,g,m,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return bl(e,n,t,r,i,a)}function bl(e,n,t,r,a,i){qp(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&Fc(n,t,!1),Cn(e,n,i);r=n.stateNode,Nh.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=qt(n,e.child,null,i),n.child=qt(n,null,l,i)):Ce(e,n,l,i),n.memoizedState=r.state,a&&Fc(n,t,!0),n.child}function Wp(e){var n=e.stateNode;n.pendingContext?Ic(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ic(e,n.context,!1),bs(e,n.containerInfo)}function Zc(e,n,t,r,a){return Vt(),ms(a),n.flags|=256,Ce(e,n,t,r),n.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gp(e,n,t){var r=n.pendingProps,a=ne.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(ne,a&1),e===null)return ml(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Pi(o,r,0,null),e=st(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Sl(t),n.memoizedState=wl,e):Cs(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Lh(e,n,o,r,l,a,t);if(i){i=r.fallback,o=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Vn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Vn(l,i):(i=st(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Sl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=wl,r}return i=e.child,e=i.sibling,r=Vn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Cs(e,n){return n=Pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ka(e,n,t,r){return r!==null&&ms(r),qt(n,e.child,null,t),e=Cs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lh(e,n,t,r,a,i,o){if(t)return n.flags&256?(n.flags&=-257,r=_o(Error(N(422))),ka(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Pi({mode:"visible",children:r.children},a,0,null),i=st(i,a,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&qt(n,e.child,null,o),n.child.memoizedState=Sl(o),n.memoizedState=wl,i);if(!(n.mode&1))return ka(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=_o(i,r,void 0),ka(e,n,o,r)}if(l=(o&e.childLanes)!==0,Oe||l){if(r=he,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Tn(e,a),ln(r,e,a,-1))}return Ds(),r=_o(Error(N(421))),ka(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=$h.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Ue=Hn(a.nextSibling),$e=n,Z=!0,an=null,e!==null&&(Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=dt,Sn=e.id,kn=e.overflow,dt=n),n=Cs(n,r.children),n.flags|=4096,n)}function eu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gl(e.return,n,t)}function Ro(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function Yp(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Ce(e,n,r.children,t),r=ne.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,t,n);else if(e.tag===19)eu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ne,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&oi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ro(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&oi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ro(n,!0,t,null,i);break;case"together":Ro(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fa(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ft|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,t=Vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ah(e,n,t){switch(n.tag){case 3:Wp(n),Vt();break;case 5:wp(n);break;case 1:Fe(n.type)&&ei(n);break;case 4:bs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;q(ri,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(ne,ne.current&1),n.flags|=128,null):t&n.child.childLanes?Gp(e,n,t):(q(ne,ne.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);q(ne,ne.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Yp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(ne,ne.current),r)break;return null;case 22:case 23:return n.lanes=0,Vp(e,n,t)}return Cn(e,n,t)}var Qp,kl,Jp,Xp;Qp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kl=function(){};Jp=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,it(vn.current);var i=null;switch(t){case"input":a=Vo(e,a),r=Vo(e,r),i=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":a=Go(e,a),r=Go(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}Qo(t,r);var o;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Y("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Xp=function(e,n,t,r){t!==r&&(n.flags|=4)};function cr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function jh(e,n,t){var r=n.pendingProps;switch(fs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return Fe(n.type)&&Za(),ke(n),null;case 3:return r=n.stateNode,Wt(),J(Ie),J(Re),Ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wa(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(Al(an),an=null))),kl(e,n),ke(n),null;case 5:ws(n);var a=it(zr.current);if(t=n.type,e!==null&&n.stateNode!=null)Jp(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(N(166));return ke(n),null}if(e=it(vn.current),wa(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[gn]=n,r[Fr]=i,e=(n.mode&1)!==0,t){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(a=0;a<xr.length;a++)Y(xr[a],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":cc(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":dc(r,i),Y("invalid",r)}Qo(t,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),a=["children",""+l]):Tr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(t){case"input":pa(r),uc(r,i,!0);break;case"textarea":pa(r),pc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xa)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[gn]=n,e[Fr]=r,Qp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Jo(t,r),t){case"dialog":Y("cancel",e),Y("close",e),a=r;break;case"iframe":case"object":case"embed":Y("load",e),a=r;break;case"video":case"audio":for(a=0;a<xr.length;a++)Y(xr[a],e);a=r;break;case"source":Y("error",e),a=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=r;break;case"details":Y("toggle",e),a=r;break;case"input":cc(e,r),a=Vo(e,r),Y("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),Y("invalid",e);break;case"textarea":dc(e,r),a=Go(e,r),Y("invalid",e);break;default:a=r}Qo(t,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Nd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Td(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&Xl(e,i,s,o))}switch(t){case"input":pa(e),uc(e,r,!1);break;case"textarea":pa(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ft(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ke(n),null;case 6:if(e&&n.stateNode!=null)Xp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(N(166));if(t=it(zr.current),it(vn.current),wa(n)){if(r=n.stateNode,t=n.memoizedProps,r[gn]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:ba(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[gn]=n,n.stateNode=r}return ke(n),null;case 13:if(J(ne),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&n.mode&1&&!(n.flags&128))hp(),Vt(),n.flags|=98560,i=!1;else if(i=wa(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[gn]=n}else Vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ke(n),i=!1}else an!==null&&(Al(an),an=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ne.current&1?me===0&&(me=3):Ds())),n.updateQueue!==null&&(n.flags|=4),ke(n),null);case 4:return Wt(),kl(e,n),e===null&&Or(n.stateNode.containerInfo),ke(n),null;case 10:return xs(n.type._context),ke(n),null;case 17:return Fe(n.type)&&Za(),ke(n),null;case 19:if(J(ne),i=n.memoizedState,i===null)return ke(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)cr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=oi(e),o!==null){for(n.flags|=128,cr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(ne,ne.current&1|2),n.child}e=e.sibling}i.tail!==null&&ce()>Yt&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304)}else{if(!r)if(e=oi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return ke(n),null}else 2*ce()-i.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ce(),n.sibling=null,t=ne.current,q(ne,r?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return Ps(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Ph(e,n){switch(fs(n),n.tag){case 1:return Fe(n.type)&&Za(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wt(),J(Ie),J(Re),Ss(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ws(n),null;case 13:if(J(ne),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));Vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(ne),null;case 4:return Wt(),null;case 10:return xs(n.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var Ea=!1,Ee=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,D=null;function Ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function El(e,n,t){try{t()}catch(r){ae(e,n,r)}}var nu=!1;function Oh(e,n){if(ll=Ya,e=rp(),ds(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,u=0,d=0,p=e,g=null;n:for(;;){for(var w;p!==t||a!==0&&p.nodeType!==3||(l=o+a),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===e)break n;if(g===t&&++u===a&&(l=o),g===i&&++d===r&&(s=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(sl={focusedElem:e,selectionRange:t},Ya=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,y=m.memoizedState,x=n.stateNode,f=x.getSnapshotBeforeUpdate(n.elementType===n.type?v:tn(n.type,v),y);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){ae(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return m=nu,nu=!1,m}function Er(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&El(n,t,i)}a=a.next}while(a!==r)}}function Ai(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _l(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zp(e){var n=e.alternate;n!==null&&(e.alternate=null,Zp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[Fr],delete n[dl],delete n[xh],delete n[vh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ef(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,n,t),e=e.sibling;e!==null;)Rl(e,n,t),e=e.sibling}function Tl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,n,t),e=e.sibling;e!==null;)Tl(e,n,t),e=e.sibling}var ye=null,rn=!1;function Ln(e,n,t){for(t=t.child;t!==null;)nf(e,n,t),t=t.sibling}function nf(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(ki,t)}catch{}switch(t.tag){case 5:Ee||Ot(t,n);case 6:var r=ye,a=rn;ye=null,Ln(e,n,t),ye=r,rn=a,ye!==null&&(rn?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(rn?(e=ye,t=t.stateNode,e.nodeType===8?yo(e.parentNode,t):e.nodeType===1&&yo(e,t),jr(e)):yo(ye,t.stateNode));break;case 4:r=ye,a=rn,ye=t.stateNode.containerInfo,rn=!0,Ln(e,n,t),ye=r,rn=a;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&El(t,n,o),a=a.next}while(a!==r)}Ln(e,n,t);break;case 1:if(!Ee&&(Ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ae(t,n,l)}Ln(e,n,t);break;case 21:Ln(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,Ln(e,n,t),Ee=r):Ln(e,n,t);break;default:Ln(e,n,t)}}function ru(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Dh),n.forEach(function(r){var a=Kh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function nn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,rn=!1;break e;case 3:ye=l.stateNode.containerInfo,rn=!0;break e;case 4:ye=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(ye===null)throw Error(N(160));nf(i,o,a),ye=null,rn=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ae(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)tf(n,e),n=n.sibling}function tf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(n,e),pn(e),r&4){try{Er(3,e,e.return),Ai(3,e)}catch(v){ae(e,e.return,v)}try{Er(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:nn(n,e),pn(e),r&512&&t!==null&&Ot(t,t.return);break;case 5:if(nn(n,e),pn(e),r&512&&t!==null&&Ot(t,t.return),e.flags&32){var a=e.stateNode;try{Cr(a,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ed(a,i),Jo(l,o);var u=Jo(l,i);for(o=0;o<s.length;o+=2){var d=s[o],p=s[o+1];d==="style"?Nd(a,p):d==="dangerouslySetInnerHTML"?Td(a,p):d==="children"?Cr(a,p):Xl(a,d,p,u)}switch(l){case"input":qo(a,i);break;case"textarea":_d(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Ft(a,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ft(a,!!i.multiple,i.defaultValue,!0):Ft(a,!!i.multiple,i.multiple?[]:"",!1))}a[Fr]=i}catch(v){ae(e,e.return,v)}}break;case 6:if(nn(n,e),pn(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(v){ae(e,e.return,v)}}break;case 3:if(nn(n,e),pn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:nn(n,e),pn(e);break;case 13:nn(n,e),pn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(As=ce())),r&4&&ru(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||d,nn(n,e),Ee=u):nn(n,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(p=D=d;D!==null;){switch(g=D,w=g.child,g.tag){case 0:case 11:case 14:case 15:Er(4,g,g.return);break;case 1:Ot(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(v){ae(r,t,v)}}break;case 5:Ot(g,g.return);break;case 22:if(g.memoizedState!==null){iu(p);continue}}w!==null?(w.return=g,D=w):iu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Cd("display",o))}catch(v){ae(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){ae(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(n,e),pn(e),r&4&&ru(e);break;case 21:break;default:nn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ef(t)){var r=t;break e}t=t.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Cr(a,""),r.flags&=-33);var i=tu(e);Tl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=tu(e);Rl(e,l,o);break;default:throw Error(N(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ih(e,n,t){D=e,rf(e)}function rf(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var a=D,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ea;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=Ea;var u=Ee;if(Ea=o,(Ee=s)&&!u)for(D=a;D!==null;)o=D,s=o.child,o.tag===22&&o.memoizedState!==null?ou(a):s!==null?(s.return=o,D=s):ou(a);for(;i!==null;)D=i,rf(i),i=i.sibling;D=a,Ea=l,Ee=u}au(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,D=i):au(e)}}function au(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||Ai(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:tn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Uc(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Uc(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&jr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ee||n.flags&512&&_l(n)}catch(g){ae(n,n.return,g)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function iu(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function ou(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ai(4,n)}catch(s){ae(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){ae(n,a,s)}}var i=n.return;try{_l(n)}catch(s){ae(n,i,s)}break;case 5:var o=n.return;try{_l(n)}catch(s){ae(n,o,s)}}}catch(s){ae(n,n.return,s)}if(n===e){D=null;break}var l=n.sibling;if(l!==null){l.return=n.return,D=l;break}D=n.return}}var Fh=Math.ceil,ci=Nn.ReactCurrentDispatcher,Ns=Nn.ReactCurrentOwner,Xe=Nn.ReactCurrentBatchConfig,U=0,he=null,de=null,be=0,He=0,It=Qn(0),me=0,$r=null,ft=0,ji=0,Ls=0,_r=null,De=null,As=0,Yt=1/0,bn=null,ui=!1,Cl=null,$n=null,_a=!1,In=null,di=0,Rr=0,Nl=null,Ba=-1,za=0;function Le(){return U&6?ce():Ba!==-1?Ba:Ba=ce()}function Kn(e){return e.mode&1?U&2&&be!==0?be&-be:bh.transition!==null?(za===0&&(za=Hd()),za):(e=$,e!==0||(e=window.event,e=e===void 0?16:Gd(e.type)),e):1}function ln(e,n,t,r){if(50<Rr)throw Rr=0,Nl=null,Error(N(185));Gr(e,t,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(ji|=t),me===4&&Dn(e,be)),Be(e,r),t===1&&U===0&&!(n.mode&1)&&(Yt=ce()+500,Ci&&Jn()))}function Be(e,n){var t=e.callbackNode;bg(e,n);var r=Ga(e,e===he?be:0);if(r===0)t!==null&&gc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&gc(t),n===1)e.tag===0?yh(lu.bind(null,e)):fp(lu.bind(null,e)),gh(function(){!(U&6)&&Jn()}),t=null;else{switch(Ud(r)){case 1:t=rs;break;case 4:t=zd;break;case 16:t=Wa;break;case 536870912:t=Md;break;default:t=Wa}t=pf(t,af.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function af(e,n){if(Ba=-1,za=0,U&6)throw Error(N(327));var t=e.callbackNode;if(Ut()&&e.callbackNode!==t)return null;var r=Ga(e,e===he?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=pi(e,r);else{n=r;var a=U;U|=2;var i=lf();(he!==e||be!==n)&&(bn=null,Yt=ce()+500,lt(e,n));do try{Mh();break}catch(l){of(e,l)}while(!0);hs(),ci.current=i,U=a,de!==null?n=0:(he=null,be=0,n=me)}if(n!==0){if(n===2&&(a=tl(e),a!==0&&(r=a,n=Ll(e,a))),n===1)throw t=$r,lt(e,0),Dn(e,r),Be(e,ce()),t;if(n===6)Dn(e,r);else{if(a=e.current.alternate,!(r&30)&&!Bh(a)&&(n=pi(e,r),n===2&&(i=tl(e),i!==0&&(r=i,n=Ll(e,i))),n===1))throw t=$r,lt(e,0),Dn(e,r),Be(e,ce()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:et(e,De,bn);break;case 3:if(Dn(e,r),(r&130023424)===r&&(n=As+500-ce(),10<n)){if(Ga(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ul(et.bind(null,e,De,bn),n);break}et(e,De,bn);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-on(r);i=1<<o,o=n[o],o>a&&(a=o),r&=~i}if(r=a,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fh(r/1960))-r,10<r){e.timeoutHandle=ul(et.bind(null,e,De,bn),r);break}et(e,De,bn);break;case 5:et(e,De,bn);break;default:throw Error(N(329))}}}return Be(e,ce()),e.callbackNode===t?af.bind(null,e):null}function Ll(e,n){var t=_r;return e.current.memoizedState.isDehydrated&&(lt(e,n).flags|=256),e=pi(e,n),e!==2&&(n=De,De=t,n!==null&&Al(n)),e}function Al(e){De===null?De=e:De.push.apply(De,e)}function Bh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!sn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(e,n){for(n&=~Ls,n&=~ji,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),r=1<<t;e[t]=-1,n&=~r}}function lu(e){if(U&6)throw Error(N(327));Ut();var n=Ga(e,0);if(!(n&1))return Be(e,ce()),null;var t=pi(e,n);if(e.tag!==0&&t===2){var r=tl(e);r!==0&&(n=r,t=Ll(e,r))}if(t===1)throw t=$r,lt(e,0),Dn(e,n),Be(e,ce()),t;if(t===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,et(e,De,bn),Be(e,ce()),null}function js(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Yt=ce()+500,Ci&&Jn())}}function mt(e){In!==null&&In.tag===0&&!(U&6)&&Ut();var n=U;U|=1;var t=Xe.transition,r=$;try{if(Xe.transition=null,$=1,e)return e()}finally{$=r,Xe.transition=t,U=n,!(U&6)&&Jn()}}function Ps(){He=It.current,J(It)}function lt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,mh(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(fs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Za();break;case 3:Wt(),J(Ie),J(Re),Ss();break;case 5:ws(r);break;case 4:Wt();break;case 13:J(ne);break;case 19:J(ne);break;case 10:xs(r.type._context);break;case 22:case 23:Ps()}t=t.return}if(he=e,de=e=Vn(e.current,null),be=He=n,me=0,$r=null,Ls=ji=ft=0,De=_r=null,at!==null){for(n=0;n<at.length;n++)if(t=at[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}t.pending=r}at=null}return e}function of(e,n){do{var t=de;try{if(hs(),Oa.current=si,li){for(var r=te.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}li=!1}if(pt=0,ge=fe=te=null,kr=!1,Mr=0,Ns.current=null,t===null||t.return===null){me=1,$r=n,de=null;break}e:{var i=e,o=t.return,l=t,s=n;if(n=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Gc(o);if(w!==null){w.flags&=-257,Yc(w,o,l,i,n),w.mode&1&&Wc(i,u,n),n=w,s=u;var m=n.updateQueue;if(m===null){var v=new Set;v.add(s),n.updateQueue=v}else m.add(s);break e}else{if(!(n&1)){Wc(i,u,n),Ds();break e}s=Error(N(426))}}else if(Z&&l.mode&1){var y=Gc(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Yc(y,o,l,i,n),ms(Gt(s,l));break e}}i=s=Gt(s,l),me!==4&&(me=2),_r===null?_r=[i]:_r.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var x=Up(i,s,n);Hc(i,x);break e;case 1:l=s;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($n===null||!$n.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=$p(i,l,n);Hc(i,S);break e}}i=i.return}while(i!==null)}cf(t)}catch(E){n=E,de===t&&t!==null&&(de=t=t.return);continue}break}while(!0)}function lf(){var e=ci.current;return ci.current=si,e===null?si:e}function Ds(){(me===0||me===3||me===2)&&(me=4),he===null||!(ft&268435455)&&!(ji&268435455)||Dn(he,be)}function pi(e,n){var t=U;U|=2;var r=lf();(he!==e||be!==n)&&(bn=null,lt(e,n));do try{zh();break}catch(a){of(e,a)}while(!0);if(hs(),U=t,ci.current=r,de!==null)throw Error(N(261));return he=null,be=0,me}function zh(){for(;de!==null;)sf(de)}function Mh(){for(;de!==null&&!dg();)sf(de)}function sf(e){var n=df(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?cf(e):de=n,Ns.current=null}function cf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ph(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(t=jh(t,n,He),t!==null){de=t;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);me===0&&(me=5)}function et(e,n,t){var r=$,a=Xe.transition;try{Xe.transition=null,$=1,Hh(e,n,t,r)}finally{Xe.transition=a,$=r}return null}function Hh(e,n,t,r){do Ut();while(In!==null);if(U&6)throw Error(N(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(wg(e,i),e===he&&(de=he=null,be=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_a||(_a=!0,pf(Wa,function(){return Ut(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var o=$;$=1;var l=U;U|=4,Ns.current=null,Oh(e,t),tf(t,e),lh(sl),Ya=!!ll,sl=ll=null,e.current=t,Ih(t),pg(),U=l,$=o,Xe.transition=i}else e.current=t;if(_a&&(_a=!1,In=e,di=a),i=e.pendingLanes,i===0&&($n=null),gg(t.stateNode),Be(e,ce()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(ui)throw ui=!1,e=Cl,Cl=null,e;return di&1&&e.tag!==0&&Ut(),i=e.pendingLanes,i&1?e===Nl?Rr++:(Rr=0,Nl=e):Rr=0,Jn(),null}function Ut(){if(In!==null){var e=Ud(di),n=Xe.transition,t=$;try{if(Xe.transition=null,$=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,di=0,U&6)throw Error(N(331));var a=U;for(U|=4,D=e.current;D!==null;){var i=D,o=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Er(8,d,i)}var p=d.child;if(p!==null)p.return=d,D=p;else for(;D!==null;){d=D;var g=d.sibling,w=d.return;if(Zp(d),d===u){D=null;break}if(g!==null){g.return=w,D=g;break}D=w}}}var m=i.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}D=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,D=o;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,D=x;break e}D=i.return}}var f=e.current;for(D=f;D!==null;){o=D;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,D=h;else e:for(o=f;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ai(9,l)}}catch(E){ae(l,l.return,E)}if(l===o){D=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,D=S;break e}D=l.return}}if(U=a,Jn(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{$=t,Xe.transition=n}}return!1}function su(e,n,t){n=Gt(t,n),n=Up(e,n,1),e=Un(e,n,1),n=Le(),e!==null&&(Gr(e,1,n),Be(e,n))}function ae(e,n,t){if(e.tag===3)su(e,e,t);else for(;n!==null;){if(n.tag===3){su(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Gt(t,e),e=$p(n,e,1),n=Un(n,e,1),e=Le(),n!==null&&(Gr(n,1,e),Be(n,e));break}}n=n.return}}function Uh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Le(),e.pingedLanes|=e.suspendedLanes&t,he===e&&(be&t)===t&&(me===4||me===3&&(be&130023424)===be&&500>ce()-As?lt(e,0):Ls|=t),Be(e,n)}function uf(e,n){n===0&&(e.mode&1?(n=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):n=1);var t=Le();e=Tn(e,n),e!==null&&(Gr(e,n,t),Be(e,t))}function $h(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),uf(e,t)}function Kh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(n),uf(e,t)}var df;df=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ie.current)Oe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Oe=!1,Ah(e,n,t);Oe=!!(e.flags&131072)}else Oe=!1,Z&&n.flags&1048576&&mp(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fa(e,n),e=n.pendingProps;var a=Kt(n,Re.current);Ht(n,t),a=Es(null,n,r,e,a,t);var i=_s();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Fe(r)?(i=!0,ei(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ys(n),a.updater=Li,n.stateNode=a,a._reactInternals=n,xl(n,r,e,t),n=bl(null,n,r,!0,i,t)):(n.tag=0,Z&&i&&ps(n),Ce(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fa(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=qh(r),e=tn(r,e),a){case 0:n=yl(null,n,r,e,t);break e;case 1:n=Xc(null,n,r,e,t);break e;case 11:n=Qc(null,n,r,e,t);break e;case 14:n=Jc(null,n,r,tn(r.type,e),t);break e}throw Error(N(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),yl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Xc(e,n,r,a,t);case 3:e:{if(Wp(n),e===null)throw Error(N(387));r=n.pendingProps,i=n.memoizedState,a=i.element,bp(e,n),ii(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Gt(Error(N(423)),n),n=Zc(e,n,r,t,a);break e}else if(r!==a){a=Gt(Error(N(424)),n),n=Zc(e,n,r,t,a);break e}else for(Ue=Hn(n.stateNode.containerInfo.firstChild),$e=n,Z=!0,an=null,t=vp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vt(),r===a){n=Cn(e,n,t);break e}Ce(e,n,r,t)}n=n.child}return n;case 5:return wp(n),e===null&&ml(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,cl(r,a)?o=null:i!==null&&cl(r,i)&&(n.flags|=32),qp(e,n),Ce(e,n,o,t),n.child;case 6:return e===null&&ml(n),null;case 13:return Gp(e,n,t);case 4:return bs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Qc(e,n,r,a,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,o=a.value,q(ri,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===a.children&&!Ie.current){n=Cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=En(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),gl(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(N(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),gl(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ce(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ht(n,t),a=Ze(a),r=r(a),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return r=n.type,a=tn(r,n.pendingProps),a=tn(r.type,a),Jc(e,n,r,a,t);case 15:return Kp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Fa(e,n),n.tag=1,Fe(r)?(e=!0,ei(n)):e=!1,Ht(n,t),Hp(n,r,a),xl(n,r,a,t),bl(null,n,r,!0,e,t);case 19:return Yp(e,n,t);case 22:return Vp(e,n,t)}throw Error(N(156,n.tag))};function pf(e,n){return Bd(e,n)}function Vh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new Vh(e,n,t,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===es)return 11;if(e===ns)return 14}return 2}function Vn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ma(e,n,t,r,a,i){var o=2;if(r=e,typeof e=="function")Os(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rt:return st(t.children,a,i,n);case Zl:o=8,a|=8;break;case Ho:return e=Je(12,t,n,a|2),e.elementType=Ho,e.lanes=i,e;case Uo:return e=Je(13,t,n,a),e.elementType=Uo,e.lanes=i,e;case $o:return e=Je(19,t,n,a),e.elementType=$o,e.lanes=i,e;case wd:return Pi(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yd:o=10;break e;case bd:o=9;break e;case es:o=11;break e;case ns:o=14;break e;case An:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=Je(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function st(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function Pi(e,n,t,r){return e=Je(22,e,r,n),e.elementType=wd,e.lanes=t,e.stateNode={isHidden:!1},e}function To(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function Co(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Wh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Is(e,n,t,r,a,i,o,l,s){return e=new Wh(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(i),e}function Gh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ff(e){if(!e)return Gn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var t=e.type;if(Fe(t))return pp(e,t,n)}return n}function mf(e,n,t,r,a,i,o,l,s){return e=Is(t,r,!0,e,a,i,o,l,s),e.context=ff(null),t=e.current,r=Le(),a=Kn(t),i=En(r,a),i.callback=n??null,Un(t,i,a),e.current.lanes=a,Gr(e,a,r),Be(e,r),e}function Di(e,n,t,r){var a=n.current,i=Le(),o=Kn(a);return t=ff(t),n.context===null?n.context=t:n.pendingContext=t,n=En(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(a,n,o),e!==null&&(ln(e,a,o,i),Da(e,a,o)),o}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fs(e,n){cu(e,n),(e=e.alternate)&&cu(e,n)}function Yh(){return null}var gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}Oi.prototype.render=Bs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));Di(e,n,null,null)};Oi.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Di(null,e,null,null)}),n[Rn]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pn.length&&n!==0&&n<Pn[t].priority;t++);Pn.splice(t,0,e),t===0&&Wd(e)}};function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function Qh(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=fi(o);i.call(u)}}var o=mf(n,r,e,0,null,!1,!1,"",uu);return e._reactRootContainer=o,e[Rn]=o.current,Or(e.nodeType===8?e.parentNode:e),mt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=fi(s);l.call(u)}}var s=Is(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=s,e[Rn]=s.current,Or(e.nodeType===8?e.parentNode:e),mt(function(){Di(n,s,t,r)}),s}function Fi(e,n,t,r,a){var i=t._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=fi(o);l.call(s)}}Di(n,o,e,a)}else o=Qh(t,n,e,a,r);return fi(o)}$d=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=hr(n.pendingLanes);t!==0&&(as(n,t|1),Be(n,ce()),!(U&6)&&(Yt=ce()+500,Jn()))}break;case 13:mt(function(){var r=Tn(e,1);if(r!==null){var a=Le();ln(r,e,1,a)}}),Fs(e,1)}};is=function(e){if(e.tag===13){var n=Tn(e,134217728);if(n!==null){var t=Le();ln(n,e,134217728,t)}Fs(e,134217728)}};Kd=function(e){if(e.tag===13){var n=Kn(e),t=Tn(e,n);if(t!==null){var r=Le();ln(t,e,n,r)}Fs(e,n)}};Vd=function(){return $};qd=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};Zo=function(e,n,t){switch(n){case"input":if(qo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Ti(r);if(!a)throw Error(N(90));kd(r),qo(r,a)}}}break;case"textarea":_d(e,t);break;case"select":n=t.value,n!=null&&Ft(e,!!t.multiple,n,!1)}};jd=js;Pd=mt;var Jh={usingClientEntryPoint:!1,Events:[Qr,Lt,Ti,Ld,Ad,js]},ur={findFiberByHostInstance:rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xh={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Id(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Yh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{ki=Ra.inject(Xh),xn=Ra}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jh;Ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(n))throw Error(N(200));return Gh(e,n,null,t)};Ve.createRoot=function(e,n){if(!zs(e))throw Error(N(299));var t=!1,r="",a=gf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Is(e,1,!1,null,null,t,!1,r,a),e[Rn]=n.current,Or(e.nodeType===8?e.parentNode:e),new Bs(n)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Id(n),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return mt(e)};Ve.hydrate=function(e,n,t){if(!Ii(n))throw Error(N(200));return Fi(null,e,n,!0,t)};Ve.hydrateRoot=function(e,n,t){if(!zs(e))throw Error(N(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",o=gf;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=mf(n,null,e,1,t??null,a,!1,i,o),e[Rn]=n.current,Or(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Oi(n)};Ve.render=function(e,n,t){if(!Ii(n))throw Error(N(200));return Fi(null,e,n,!1,t)};Ve.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(N(40));return e._reactRootContainer?(mt(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Ve.unstable_batchedUpdates=js;Ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ii(t))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Fi(e,n,t,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function hf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf)}catch(e){console.error(e)}}hf(),gd.exports=Ve;var Zh=gd.exports,du=Zh;zo.createRoot=du.createRoot,zo.hydrateRoot=du.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Kr.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const pu="popstate";function ex(e){e===void 0&&(e={});function n(a,i){let{pathname:o="/",search:l="",hash:s=""}=vt(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),jl("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:mi(i))}function r(a,i){Bi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return tx(n,t,r,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Bi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function nx(){return Math.random().toString(36).substr(2,8)}function fu(e,n){return{usr:e.state,key:e.key,idx:n}}function jl(e,n,t,r){return t===void 0&&(t=null),Kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?vt(n):n,{state:t,key:n&&n.key||r||nx()})}function mi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function vt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function tx(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Fn.Pop,s=null,u=d();u==null&&(u=0,o.replaceState(Kr({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Fn.Pop;let y=d(),x=y==null?null:y-u;u=y,s&&s({action:l,location:v.location,delta:x})}function g(y,x){l=Fn.Push;let f=jl(v.location,y,x);t&&t(f,y),u=d()+1;let h=fu(f,u),S=v.createHref(f);try{o.pushState(h,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(S)}i&&s&&s({action:l,location:v.location,delta:1})}function w(y,x){l=Fn.Replace;let f=jl(v.location,y,x);t&&t(f,y),u=d();let h=fu(f,u),S=v.createHref(f);o.replaceState(h,"",S),i&&s&&s({action:l,location:v.location,delta:0})}function m(y){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof y=="string"?y:mi(y);return f=f.replace(/ $/,"%20"),ie(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let v={get action(){return l},get location(){return e(a,o)},listen(y){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(pu,p),s=y,()=>{a.removeEventListener(pu,p),s=null}},createHref(y){return n(a,y)},createURL:m,encodeLocation(y){let x=m(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:w,go(y){return o.go(y)}};return v}var mu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mu||(mu={}));function rx(e,n,t){return t===void 0&&(t="/"),ax(e,n,t)}function ax(e,n,t,r){let a=typeof n=="string"?vt(n):n,i=Qt(a.pathname||"/",t);if(i==null)return null;let o=xf(e);ix(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=hx(i);l=mx(o[s],u)}return l}function xf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=qn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xf(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:px(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of vf(i.path))a(i,o,s)}),n}function vf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=vf(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function ix(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:fx(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ox=/^:[\w-]+$/,lx=3,sx=2,cx=1,ux=10,dx=-2,gu=e=>e==="*";function px(e,n){let t=e.split("/"),r=t.length;return t.some(gu)&&(r+=dx),n&&(r+=sx),t.filter(a=>!gu(a)).reduce((a,i)=>a+(ox.test(i)?lx:i===""?cx:ux),r)}function fx(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function mx(e,n,t){let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",p=Pl({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),g=s.route;if(!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:qn([i,p.pathname]),pathnameBase:wx(qn([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=qn([i,p.pathnameBase]))}return o}function Pl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=gx(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let v=l[p]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const m=l[p];return w&&!m?u[g]=void 0:u[g]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function gx(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Bi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function hx(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Bi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Qt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vx=e=>xx.test(e);function yx(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?vt(e):e,i;if(t)if(vx(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Bi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?i=hu(t.substring(1),"/"):i=hu(t,n)}else i=n;return{pathname:i,search:Sx(r),hash:kx(a)}}function hu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function No(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bx(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function yf(e,n){let t=bx(e);return n?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function bf(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=vt(e):(a=Kr({},e),ie(!a.pathname||!a.pathname.includes("?"),No("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),No("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),No("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=t;else{let p=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}l=p>=0?n[p]:"/"}let s=yx(a,l),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const qn=e=>e.join("/").replace(/\/\/+/g,"/"),wx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ex(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wf=["post","put","patch","delete"];new Set(wf);const _x=["get",...wf];new Set(_x);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vr.apply(this,arguments)}const zi=b.createContext(null),Sf=b.createContext(null),Xn=b.createContext(null),Mi=b.createContext(null),yt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),kf=b.createContext(null);function Rx(e,n){let{relative:t}=n===void 0?{}:n;Xr()||ie(!1);let{basename:r,navigator:a}=b.useContext(Xn),{hash:i,pathname:o,search:l}=Hi(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:qn([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Xr(){return b.useContext(Mi)!=null}function Zr(){return Xr()||ie(!1),b.useContext(Mi).location}function Ef(e){b.useContext(Xn).static||b.useLayoutEffect(e)}function Tx(){let{isDataRoute:e}=b.useContext(yt);return e?Mx():Cx()}function Cx(){Xr()||ie(!1);let e=b.useContext(zi),{basename:n,future:t,navigator:r}=b.useContext(Xn),{matches:a}=b.useContext(yt),{pathname:i}=Zr(),o=JSON.stringify(yf(a,t.v7_relativeSplatPath)),l=b.useRef(!1);return Ef(()=>{l.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=bf(u,JSON.parse(o),i,d.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:qn([n,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[n,r,o,i,e])}function Hi(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=b.useContext(Xn),{matches:a}=b.useContext(yt),{pathname:i}=Zr(),o=JSON.stringify(yf(a,r.v7_relativeSplatPath));return b.useMemo(()=>bf(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function Nx(e,n){return Lx(e,n)}function Lx(e,n,t,r){Xr()||ie(!1);let{navigator:a}=b.useContext(Xn),{matches:i}=b.useContext(yt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Zr(),d;if(n){var p;let y=typeof n=="string"?vt(n):n;s==="/"||(p=y.pathname)!=null&&p.startsWith(s)||ie(!1),d=y}else d=u;let g=d.pathname||"/",w=g;if(s!=="/"){let y=s.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let m=rx(e,{pathname:w}),v=Ox(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:qn([s,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:qn([s,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,t,r);return n&&v?b.createElement(Mi.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fn.Pop}},v):v}function Ax(){let e=zx(),n=Ex(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:a},t):null,null)}const jx=b.createElement(Ax,null);class Px extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(yt.Provider,{value:this.props.routeContext},b.createElement(kf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dx(e){let{routeContext:n,match:t,children:r}=e,a=b.useContext(zi);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(yt.Provider,{value:n},r)}function Ox(e,n,t,r){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ie(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:g,errors:w}=t,m=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||m){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let w,m=!1,v=null,y=null;t&&(w=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||jx,s&&(u<0&&g===0?(Hx("route-fallback"),m=!0,y=null):u===g&&(m=!0,y=p.route.hydrateFallbackElement||null)));let x=n.concat(o.slice(0,g+1)),f=()=>{let h;return w?h=v:m?h=y:p.route.Component?h=b.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,b.createElement(Dx,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:t!=null},children:h})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?b.createElement(Px,{location:t.location,revalidation:t.revalidation,component:v,error:w,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var _f=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_f||{}),Rf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rf||{});function Ix(e){let n=b.useContext(zi);return n||ie(!1),n}function Fx(e){let n=b.useContext(Sf);return n||ie(!1),n}function Bx(e){let n=b.useContext(yt);return n||ie(!1),n}function Tf(e){let n=Bx(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function zx(){var e;let n=b.useContext(kf),t=Fx(),r=Tf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Mx(){let{router:e}=Ix(_f.UseNavigateStable),n=Tf(Rf.UseNavigateStable),t=b.useRef(!1);return Ef(()=>{t.current=!0}),b.useCallback(function(a,i){i===void 0&&(i={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Vr({fromRouteId:n},i)))},[e,n])}const xu={};function Hx(e,n,t){xu[e]||(xu[e]=!0)}function Ux(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function nt(e){ie(!1)}function $x(e){let{basename:n="/",children:t=null,location:r,navigationType:a=Fn.Pop,navigator:i,static:o=!1,future:l}=e;Xr()&&ie(!1);let s=n.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:s,navigator:i,static:o,future:Vr({v7_relativeSplatPath:!1},l)}),[s,l,i,o]);typeof r=="string"&&(r=vt(r));let{pathname:d="/",search:p="",hash:g="",state:w=null,key:m="default"}=r,v=b.useMemo(()=>{let y=Qt(d,s);return y==null?null:{location:{pathname:y,search:p,hash:g,state:w,key:m},navigationType:a}},[s,d,p,g,w,m,a]);return v==null?null:b.createElement(Xn.Provider,{value:u},b.createElement(Mi.Provider,{children:t,value:v}))}function Kx(e){let{children:n,location:t}=e;return Nx(Dl(n),t)}new Promise(()=>{});function Dl(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(r,a)=>{if(!b.isValidElement(r))return;let i=[...n,a];if(r.type===b.Fragment){t.push.apply(t,Dl(r.props.children,i));return}r.type!==nt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Dl(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},gi.apply(this,arguments)}function Cf(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Vx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qx(e,n){return e.button===0&&(!n||n==="_self")&&!Vx(e)}const Wx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Yx="6";try{window.__reactRouterVersion=Yx}catch{}const Qx=b.createContext({isTransitioning:!1}),Jx="startTransition",vu=Um[Jx];function Xx(e){let{basename:n,children:t,future:r,window:a}=e,i=b.useRef();i.current==null&&(i.current=ex({window:a,v5Compat:!0}));let o=i.current,[l,s]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=b.useCallback(p=>{u&&vu?vu(()=>s(p)):s(p)},[s,u]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.useEffect(()=>Ux(r),[r]),b.createElement($x,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const Zx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nv=b.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:d,viewTransition:p}=n,g=Cf(n,Wx),{basename:w}=b.useContext(Xn),m,v=!1;if(typeof u=="string"&&ev.test(u)&&(m=u,Zx))try{let h=new URL(window.location.href),S=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Qt(S.pathname,w);S.origin===h.origin&&E!=null?u=E+S.search+S.hash:v=!0}catch{}let y=Rx(u,{relative:a}),x=rv(u,{replace:o,state:l,target:s,preventScrollReset:d,relative:a,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||x(h)}return b.createElement("a",gi({},g,{href:m||y,onClick:v||i?r:f,ref:t,target:s}))}),Et=b.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:u,children:d}=n,p=Cf(n,Gx),g=Hi(s,{relative:p.relative}),w=Zr(),m=b.useContext(Sf),{navigator:v,basename:y}=b.useContext(Xn),x=m!=null&&av(g)&&u===!0,f=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,h=w.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(h=h.toLowerCase(),S=S?S.toLowerCase():null,f=f.toLowerCase()),S&&y&&(S=Qt(S,y)||S);const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let T=h===f||!o&&h.startsWith(f)&&h.charAt(E)==="/",_=S!=null&&(S===f||!o&&S.startsWith(f)&&S.charAt(f.length)==="/"),C={isActive:T,isPending:_,isTransitioning:x},R=T?r:void 0,P;typeof i=="function"?P=i(C):P=[i,T?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(C):l;return b.createElement(nv,gi({},p,{"aria-current":R,className:P,ref:t,style:W,to:s,viewTransition:u}),typeof d=="function"?d(C):d)});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var yu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yu||(yu={}));function tv(e){let n=b.useContext(zi);return n||ie(!1),n}function rv(e,n){let{target:t,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:l}=n===void 0?{}:n,s=Tx(),u=Zr(),d=Hi(e,{relative:o});return b.useCallback(p=>{if(qx(p,t)){p.preventDefault();let g=r!==void 0?r:mi(u)===mi(d);s(e,{replace:g,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[u,s,d,r,a,t,e,i,o,l])}function av(e,n){n===void 0&&(n={});let t=b.useContext(Qx);t==null&&ie(!1);let{basename:r}=tv(Ol.useViewTransitionState),a=Hi(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Qt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Qt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Pl(a.pathname,o)!=null||Pl(a.pathname,i)!=null}var Nf={exports:{}},iv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ov=iv,lv=ov;function Lf(){}function Af(){}Af.resetWarningCache=Lf;var sv=function(){function e(r,a,i,o,l,s){if(s!==lv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Af,resetWarningCache:Lf};return t.PropTypes=t,t};Nf.exports=sv();var cv=Nf.exports;const K=rd(cv);function bt(e,n,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function l(d){try{u(r.next(d))}catch(p){o(p)}}function s(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):a(d.value).then(l,s)}u((r=r.apply(e,n||[])).next())})}const uv=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Jt(e,n,t){const r=dv(e),{webkitRelativePath:a}=e,i=typeof n=="string"?n:typeof a=="string"&&a.length>0?a:`./${e.name}`;return typeof r.path!="string"&&bu(r,"path",i),bu(r,"relativePath",i),r}function dv(e){const{name:n}=e;if(n&&n.lastIndexOf(".")!==-1&&!e.type){const r=n.split(".").pop().toLowerCase(),a=uv.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}function bu(e,n,t){Object.defineProperty(e,n,{value:t,writable:!1,configurable:!1,enumerable:!0})}const pv=[".DS_Store","Thumbs.db"];function fv(e){return bt(this,void 0,void 0,function*(){return hi(e)&&mv(e.dataTransfer)?vv(e.dataTransfer,e.type):gv(e)?hv(e):Array.isArray(e)&&e.every(n=>"getFile"in n&&typeof n.getFile=="function")?xv(e):[]})}function mv(e){return hi(e)}function gv(e){return hi(e)&&hi(e.target)}function hi(e){return typeof e=="object"&&e!==null}function hv(e){return Il(e.target.files).map(n=>Jt(n))}function xv(e){return bt(this,void 0,void 0,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>Jt(t))})}function vv(e,n){return bt(this,void 0,void 0,function*(){if(e.items){const t=Il(e.items).filter(a=>a.kind==="file");if(n!=="drop")return t;const r=yield Promise.all(t.map(yv));return wu(jf(r))}return wu(Il(e.files).map(t=>Jt(t)))})}function wu(e){return e.filter(n=>pv.indexOf(n.name)===-1)}function Il(e){if(e===null)return[];const n=[];for(let t=0;t<e.length;t++){const r=e[t];n.push(r)}return n}function yv(e){if(typeof e.webkitGetAsEntry!="function")return Su(e);const n=e.webkitGetAsEntry();return n&&n.isDirectory?Pf(n):Su(e,n)}function jf(e){return e.reduce((n,t)=>[...n,...Array.isArray(t)?jf(t):[t]],[])}function Su(e,n){return bt(this,void 0,void 0,function*(){var t;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const i=yield e.getAsFileSystemHandle();if(i===null)throw new Error(`${e} is not a File`);if(i!==void 0){const o=yield i.getFile();return o.handle=i,Jt(o)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return Jt(r,(t=n==null?void 0:n.fullPath)!==null&&t!==void 0?t:void 0)})}function bv(e){return bt(this,void 0,void 0,function*(){return e.isDirectory?Pf(e):wv(e)})}function Pf(e){const n=e.createReader();return new Promise((t,r)=>{const a=[];function i(){n.readEntries(o=>bt(this,void 0,void 0,function*(){if(o.length){const l=Promise.all(o.map(bv));a.push(l),i()}else try{const l=yield Promise.all(a);t(l)}catch(l){r(l)}}),o=>{r(o)})}i()})}function wv(e){return bt(this,void 0,void 0,function*(){return new Promise((n,t)=>{e.file(r=>{const a=Jt(r,e.fullPath);n(a)},r=>{t(r)})})})}var Lo=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(",");if(t.length===0)return!0;var r=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return t.some(function(o){var l=o.trim().toLowerCase();return l.charAt(0)==="."?r.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):a===l})}return!0};function ku(e){return Ev(e)||kv(e)||Of(e)||Sv()}function Sv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ev(e){if(Array.isArray(e))return Fl(e)}function Eu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function _u(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Eu(Object(t),!0).forEach(function(r){Df(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Eu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Df(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function qr(e,n){return Tv(e)||Rv(e,n)||Of(e,n)||_v()}function _v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Of(e,n){if(e){if(typeof e=="string")return Fl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fl(e,n)}}function Fl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Rv(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Tv(e){if(Array.isArray(e))return e}var Cv=typeof Lo=="function"?Lo:Lo.default,Nv="file-invalid-type",Lv="file-too-large",Av="file-too-small",jv="too-many-files",Pv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=n.split(","),r=t.length>1?"one of ".concat(t.join(", ")):t[0];return{code:Nv,message:"File type must be ".concat(r)}},Ru=function(n){return{code:Lv,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},Tu=function(n){return{code:Av,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Dv={code:jv,message:"Too many files"};function Ov(e){return e.type===""&&typeof e.getAsFile=="function"}function If(e,n){var t=e.type==="application/x-moz-file"||Cv(e,n)||Ov(e);return[t,t?null:Pv(n)]}function Ff(e,n,t){if(tt(e.size))if(tt(n)&&tt(t)){if(e.size>t)return[!1,Ru(t)];if(e.size<n)return[!1,Tu(n)]}else{if(tt(n)&&e.size<n)return[!1,Tu(n)];if(tt(t)&&e.size>t)return[!1,Ru(t)]}return[!0,null]}function tt(e){return e!=null}function Iv(e){var n=e.files,t=e.accept,r=e.minSize,a=e.maxSize,i=e.multiple,o=e.maxFiles,l=e.validator;return!i&&n.length>1||i&&o>=1&&n.length>o?!1:n.every(function(s){var u=If(s,t),d=qr(u,1),p=d[0],g=Ff(s,r,a),w=qr(g,1),m=w[0],v=l?l(s):null;return p&&m&&!v})}function xi(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function dr(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Cu(e){e.preventDefault()}function Fv(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Bv(e){return e.indexOf("Edge/")!==-1}function zv(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Fv(e)||Bv(e)}function fn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return n.some(function(l){return!xi(r)&&l&&l.apply(void 0,[r].concat(i)),xi(r)})}}function Mv(){return"showOpenFilePicker"in window}function Hv(e){if(tt(e)){var n=Object.entries(e).filter(function(t){var r=qr(t,2),a=r[0],i=r[1],o=!0;return Bf(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),(!Array.isArray(i)||!i.every(zf))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(t,r){var a=qr(r,2),i=a[0],o=a[1];return _u(_u({},t),{},Df({},i,o))},{});return[{description:"Files",accept:n}]}return e}function Uv(e){if(tt(e))return Object.entries(e).reduce(function(n,t){var r=qr(t,2),a=r[0],i=r[1];return[].concat(ku(n),[a],ku(i))},[]).filter(function(n){return Bf(n)||zf(n)}).join(",")}function $v(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Kv(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Bf(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function zf(e){return/^.*\.[\w]+$/.test(e)}var Vv=["children"],qv=["open"],Wv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Gv=["refKey","onChange","onClick"];function Nu(e){return Jv(e)||Qv(e)||Mf(e)||Yv()}function Yv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jv(e){if(Array.isArray(e))return Bl(e)}function Ao(e,n){return ey(e)||Zv(e,n)||Mf(e,n)||Xv()}function Xv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mf(e,n){if(e){if(typeof e=="string")return Bl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Bl(e,n)}}function Bl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Zv(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function ey(e){if(Array.isArray(e))return e}function Lu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Lu(Object(t),!0).forEach(function(r){zl(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function zl(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function vi(e,n){if(e==null)return{};var t=ny(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ny(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Ms=b.forwardRef(function(e,n){var t=e.children,r=vi(e,Vv),a=Hs(r),i=a.open,o=vi(a,qv);return b.useImperativeHandle(n,function(){return{open:i}},[i]),Yl.createElement(b.Fragment,null,t(Q(Q({},o),{},{open:i})))});Ms.displayName="Dropzone";var Hf={disabled:!1,getFilesFromEvent:fv,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Ms.defaultProps=Hf;Ms.propTypes={children:K.func,accept:K.objectOf(K.arrayOf(K.string)),multiple:K.bool,preventDropOnDocument:K.bool,noClick:K.bool,noKeyboard:K.bool,noDrag:K.bool,noDragEventsBubbling:K.bool,minSize:K.number,maxSize:K.number,maxFiles:K.number,disabled:K.bool,getFilesFromEvent:K.func,onFileDialogCancel:K.func,onFileDialogOpen:K.func,useFsAccessApi:K.bool,autoFocus:K.bool,onDragEnter:K.func,onDragLeave:K.func,onDragOver:K.func,onDrop:K.func,onDropAccepted:K.func,onDropRejected:K.func,onError:K.func,validator:K.func};var Ml={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,isDragGlobal:!1,acceptedFiles:[],fileRejections:[]};function Hs(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Q(Q({},Hf),e),t=n.accept,r=n.disabled,a=n.getFilesFromEvent,i=n.maxSize,o=n.minSize,l=n.multiple,s=n.maxFiles,u=n.onDragEnter,d=n.onDragLeave,p=n.onDragOver,g=n.onDrop,w=n.onDropAccepted,m=n.onDropRejected,v=n.onFileDialogCancel,y=n.onFileDialogOpen,x=n.useFsAccessApi,f=n.autoFocus,h=n.preventDropOnDocument,S=n.noClick,E=n.noKeyboard,T=n.noDrag,_=n.noDragEventsBubbling,C=n.onError,R=n.validator,P=b.useMemo(function(){return Uv(t)},[t]),W=b.useMemo(function(){return Hv(t)},[t]),pe=b.useMemo(function(){return typeof y=="function"?y:Au},[y]),V=b.useMemo(function(){return typeof v=="function"?v:Au},[v]),z=b.useRef(null),le=b.useRef(null),G=b.useReducer(ty,Ml),Te=Ao(G,2),A=Te[0],L=Te[1],O=A.isFocused,I=A.isFileDialogActive,H=b.useRef(typeof window<"u"&&window.isSecureContext&&x&&Mv()),xe=function(){!H.current&&I&&setTimeout(function(){if(le.current){var F=le.current.files;F.length||(L({type:"closeDialog"}),V())}},300)};b.useEffect(function(){return window.addEventListener("focus",xe,!1),function(){window.removeEventListener("focus",xe,!1)}},[le,I,V,H]);var X=b.useRef([]),Pe=b.useRef([]),un=function(F){z.current&&z.current.contains(F.target)||(F.preventDefault(),X.current=[])};b.useEffect(function(){return h&&(document.addEventListener("dragover",Cu,!1),document.addEventListener("drop",un,!1)),function(){h&&(document.removeEventListener("dragover",Cu),document.removeEventListener("drop",un))}},[z,h]),b.useEffect(function(){var j=function(dn){Pe.current=[].concat(Nu(Pe.current),[dn.target]),dr(dn)&&L({isDragGlobal:!0,type:"setDragGlobal"})},F=function(dn){Pe.current=Pe.current.filter(function(yn){return yn!==dn.target&&yn!==null}),!(Pe.current.length>0)&&L({isDragGlobal:!1,type:"setDragGlobal"})},ee=function(){Pe.current=[],L({isDragGlobal:!1,type:"setDragGlobal"})},se=function(){Pe.current=[],L({isDragGlobal:!1,type:"setDragGlobal"})};return document.addEventListener("dragenter",j,!1),document.addEventListener("dragleave",F,!1),document.addEventListener("dragend",ee,!1),document.addEventListener("drop",se,!1),function(){document.removeEventListener("dragenter",j),document.removeEventListener("dragleave",F),document.removeEventListener("dragend",ee),document.removeEventListener("drop",se)}},[z]),b.useEffect(function(){return!r&&f&&z.current&&z.current.focus(),function(){}},[z,f,r]);var We=b.useCallback(function(j){C?C(j):console.error(j)},[C]),Qs=b.useCallback(function(j){j.preventDefault(),j.persist(),sa(j),X.current=[].concat(Nu(X.current),[j.target]),dr(j)&&Promise.resolve(a(j)).then(function(F){if(!(xi(j)&&!_)){var ee=F.length,se=ee>0&&Iv({files:F,accept:P,minSize:o,maxSize:i,multiple:l,maxFiles:s,validator:R}),ve=ee>0&&!se;L({isDragAccept:se,isDragReject:ve,isDragActive:!0,type:"setDraggedFiles"}),u&&u(j)}}).catch(function(F){return We(F)})},[a,u,We,_,P,o,i,l,s,R]),Js=b.useCallback(function(j){j.preventDefault(),j.persist(),sa(j);var F=dr(j);if(F&&j.dataTransfer)try{j.dataTransfer.dropEffect="copy"}catch{}return F&&p&&p(j),!1},[p,_]),Xs=b.useCallback(function(j){j.preventDefault(),j.persist(),sa(j);var F=X.current.filter(function(se){return z.current&&z.current.contains(se)}),ee=F.indexOf(j.target);ee!==-1&&F.splice(ee,1),X.current=F,!(F.length>0)&&(L({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),dr(j)&&d&&d(j))},[z,d,_]),ia=b.useCallback(function(j,F){var ee=[],se=[];j.forEach(function(ve){var dn=If(ve,P),yn=Ao(dn,2),Yi=yn[0],Qi=yn[1],Ji=Ff(ve,o,i),ca=Ao(Ji,2),Xi=ca[0],Zi=ca[1],eo=R?R(ve):null;if(Yi&&Xi&&!eo)ee.push(ve);else{var no=[Qi,Zi];eo&&(no=no.concat(eo)),se.push({file:ve,errors:no.filter(function(_m){return _m})})}}),(!l&&ee.length>1||l&&s>=1&&ee.length>s)&&(ee.forEach(function(ve){se.push({file:ve,errors:[Dv]})}),ee.splice(0)),L({acceptedFiles:ee,fileRejections:se,isDragReject:se.length>0,type:"setFiles"}),g&&g(ee,se,F),se.length>0&&m&&m(se,F),ee.length>0&&w&&w(ee,F)},[L,l,P,o,i,s,g,w,m,R]),oa=b.useCallback(function(j){j.preventDefault(),j.persist(),sa(j),X.current=[],dr(j)&&Promise.resolve(a(j)).then(function(F){xi(j)&&!_||ia(F,j)}).catch(function(F){return We(F)}),L({type:"reset"})},[a,ia,We,_]),wt=b.useCallback(function(){if(H.current){L({type:"openDialog"}),pe();var j={multiple:l,types:W};window.showOpenFilePicker(j).then(function(F){return a(F)}).then(function(F){ia(F,null),L({type:"closeDialog"})}).catch(function(F){$v(F)?(V(F),L({type:"closeDialog"})):Kv(F)?(H.current=!1,le.current?(le.current.value=null,le.current.click()):We(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):We(F)});return}le.current&&(L({type:"openDialog"}),pe(),le.current.value=null,le.current.click())},[L,pe,V,x,ia,We,W,l]),Zs=b.useCallback(function(j){!z.current||!z.current.isEqualNode(j.target)||(j.key===" "||j.key==="Enter"||j.keyCode===32||j.keyCode===13)&&(j.preventDefault(),wt())},[z,wt]),ec=b.useCallback(function(){L({type:"focus"})},[]),nc=b.useCallback(function(){L({type:"blur"})},[]),tc=b.useCallback(function(){S||(zv()?setTimeout(wt,0):wt())},[S,wt]),St=function(F){return r?null:F},Gi=function(F){return E?null:St(F)},la=function(F){return T?null:St(F)},sa=function(F){_&&F.stopPropagation()},Sm=b.useMemo(function(){return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=j.refKey,ee=F===void 0?"ref":F,se=j.role,ve=j.onKeyDown,dn=j.onFocus,yn=j.onBlur,Yi=j.onClick,Qi=j.onDragEnter,Ji=j.onDragOver,ca=j.onDragLeave,Xi=j.onDrop,Zi=vi(j,Wv);return Q(Q(zl({onKeyDown:Gi(fn(ve,Zs)),onFocus:Gi(fn(dn,ec)),onBlur:Gi(fn(yn,nc)),onClick:St(fn(Yi,tc)),onDragEnter:la(fn(Qi,Qs)),onDragOver:la(fn(Ji,Js)),onDragLeave:la(fn(ca,Xs)),onDrop:la(fn(Xi,oa)),role:typeof se=="string"&&se!==""?se:"presentation"},ee,z),!r&&!E?{tabIndex:0}:{}),Zi)}},[z,Zs,ec,nc,tc,Qs,Js,Xs,oa,E,T,r]),km=b.useCallback(function(j){j.stopPropagation()},[]),Em=b.useMemo(function(){return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=j.refKey,ee=F===void 0?"ref":F,se=j.onChange,ve=j.onClick,dn=vi(j,Gv),yn=zl({accept:P,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:St(fn(se,oa)),onClick:St(fn(ve,km)),tabIndex:-1},ee,le);return Q(Q({},yn),dn)}},[le,t,l,oa,r]);return Q(Q({},A),{},{isFocused:O&&!r,getRootProps:Sm,getInputProps:Em,rootRef:z,inputRef:le,open:St(wt)})}function ty(e,n){switch(n.type){case"focus":return Q(Q({},e),{},{isFocused:!0});case"blur":return Q(Q({},e),{},{isFocused:!1});case"openDialog":return Q(Q({},Ml),{},{isFileDialogActive:!0});case"closeDialog":return Q(Q({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Q(Q({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return Q(Q({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections,isDragReject:n.isDragReject});case"setDragGlobal":return Q(Q({},e),{},{isDragGlobal:n.isDragGlobal});case"reset":return Q({},Ml);default:return e}}function Au(){}function ry({onFile:e,loading:n}){const t=b.useCallback(o=>{o.length>0&&e(o[0])},[e]),{getRootProps:r,getInputProps:a,isDragActive:i}=Hs({onDrop:t,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:n});return c.jsxs("div",{...r(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${i?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
        ${n?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{...a()}),c.jsx("div",{className:"text-4xl mb-3",children:"📂"}),n?c.jsx("p",{className:"text-gray-400",children:"Processing file…"}):i?c.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your check file here"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]})}function Uf(e,n){return function(){return e.apply(n,arguments)}}const{toString:ay}=Object.prototype,{getPrototypeOf:Us}=Object,{iterator:Ui,toStringTag:$f}=Symbol,$i=(e=>n=>{const t=ay.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=e=>(e=e.toLowerCase(),n=>$i(n)===e),Ki=e=>n=>typeof n===e,{isArray:tr}=Array,Xt=Ki("undefined");function ea(e){return e!==null&&!Xt(e)&&e.constructor!==null&&!Xt(e.constructor)&&ze(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Kf=cn("ArrayBuffer");function iy(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Kf(e.buffer),n}const oy=Ki("string"),ze=Ki("function"),Vf=Ki("number"),na=e=>e!==null&&typeof e=="object",ly=e=>e===!0||e===!1,Ha=e=>{if($i(e)!=="object")return!1;const n=Us(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!($f in e)&&!(Ui in e)},sy=e=>{if(!na(e)||ea(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},cy=cn("Date"),uy=cn("File"),dy=e=>!!(e&&typeof e.uri<"u"),py=e=>e&&typeof e.getParts<"u",fy=cn("Blob"),my=cn("FileList"),gy=e=>na(e)&&ze(e.pipe);function hy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ju=hy(),Pu=typeof ju.FormData<"u"?ju.FormData:void 0,xy=e=>{let n;return e&&(Pu&&e instanceof Pu||ze(e.append)&&((n=$i(e))==="formdata"||n==="object"&&ze(e.toString)&&e.toString()==="[object FormData]"))},vy=cn("URLSearchParams"),[yy,by,wy,Sy]=["ReadableStream","Request","Response","Headers"].map(cn),ky=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ta(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),tr(e))for(r=0,a=e.length;r<a;r++)n.call(null,e[r],r,e);else{if(ea(e))return;const i=t?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],n.call(null,e[l],l,e)}}function qf(e,n){if(ea(e))return null;n=n.toLowerCase();const t=Object.keys(e);let r=t.length,a;for(;r-- >0;)if(a=t[r],n===a.toLowerCase())return a;return null}const ot=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wf=e=>!Xt(e)&&e!==ot;function Hl(){const{caseless:e,skipUndefined:n}=Wf(this)&&this||{},t={},r=(a,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const o=e&&qf(t,i)||i;Ha(t[o])&&Ha(a)?t[o]=Hl(t[o],a):Ha(a)?t[o]=Hl({},a):tr(a)?t[o]=a.slice():(!n||!Xt(a))&&(t[o]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ta(arguments[a],r);return t}const Ey=(e,n,t,{allOwnKeys:r}={})=>(ta(n,(a,i)=>{t&&ze(a)?Object.defineProperty(e,i,{value:Uf(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),_y=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ry=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},Ty=(e,n,t,r)=>{let a,i,o;const l={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,n))&&!l[o]&&(n[o]=e[o],l[o]=!0);e=t!==!1&&Us(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},Cy=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},Ny=e=>{if(!e)return null;if(tr(e))return e;let n=e.length;if(!Vf(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},Ly=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Us(Uint8Array)),Ay=(e,n)=>{const r=(e&&e[Ui]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;n.call(e,i[0],i[1])}},jy=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},Py=cn("HTMLFormElement"),Dy=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),Du=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),Oy=cn("RegExp"),Gf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};ta(t,(a,i)=>{let o;(o=n(a,i,e))!==!1&&(r[i]=o||a)}),Object.defineProperties(e,r)},Iy=e=>{Gf(e,(n,t)=>{if(ze(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(ze(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Fy=(e,n)=>{const t={},r=a=>{a.forEach(i=>{t[i]=!0})};return tr(e)?r(e):r(String(e).split(n)),t},By=()=>{},zy=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function My(e){return!!(e&&ze(e.append)&&e[$f]==="FormData"&&e[Ui])}const Hy=e=>{const n=new Array(10),t=(r,a)=>{if(na(r)){if(n.indexOf(r)>=0)return;if(ea(r))return r;if(!("toJSON"in r)){n[a]=r;const i=tr(r)?[]:{};return ta(r,(o,l)=>{const s=t(o,a+1);!Xt(s)&&(i[l]=s)}),n[a]=void 0,i}}return r};return t(e,0)},Uy=cn("AsyncFunction"),$y=e=>e&&(na(e)||ze(e))&&ze(e.then)&&ze(e.catch),Yf=((e,n)=>e?setImmediate:n?((t,r)=>(ot.addEventListener("message",({source:a,data:i})=>{a===ot&&i===t&&r.length&&r.shift()()},!1),a=>{r.push(a),ot.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ze(ot.postMessage)),Ky=typeof queueMicrotask<"u"?queueMicrotask.bind(ot):typeof process<"u"&&process.nextTick||Yf,Vy=e=>e!=null&&ze(e[Ui]),k={isArray:tr,isArrayBuffer:Kf,isBuffer:ea,isFormData:xy,isArrayBufferView:iy,isString:oy,isNumber:Vf,isBoolean:ly,isObject:na,isPlainObject:Ha,isEmptyObject:sy,isReadableStream:yy,isRequest:by,isResponse:wy,isHeaders:Sy,isUndefined:Xt,isDate:cy,isFile:uy,isReactNativeBlob:dy,isReactNative:py,isBlob:fy,isRegExp:Oy,isFunction:ze,isStream:gy,isURLSearchParams:vy,isTypedArray:Ly,isFileList:my,forEach:ta,merge:Hl,extend:Ey,trim:ky,stripBOM:_y,inherits:Ry,toFlatObject:Ty,kindOf:$i,kindOfTest:cn,endsWith:Cy,toArray:Ny,forEachEntry:Ay,matchAll:jy,isHTMLForm:Py,hasOwnProperty:Du,hasOwnProp:Du,reduceDescriptors:Gf,freezeMethods:Iy,toObjectSet:Fy,toCamelCase:Dy,noop:By,toFiniteNumber:zy,findKey:qf,global:ot,isContextDefined:Wf,isSpecCompliantForm:My,toJSONObject:Hy,isAsyncFn:Uy,isThenable:$y,setImmediate:Yf,asap:Ky,isIterable:Vy};let B=class Qf extends Error{static from(n,t,r,a,i,o){const l=new Qf(n.message,t||n.code,r,a,i);return l.cause=n,l.name=n.name,n.status!=null&&l.status==null&&(l.status=n.status),o&&Object.assign(l,o),l}constructor(n,t,r,a,i){super(n),Object.defineProperty(this,"message",{value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}};B.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";B.ERR_BAD_OPTION="ERR_BAD_OPTION";B.ECONNABORTED="ECONNABORTED";B.ETIMEDOUT="ETIMEDOUT";B.ERR_NETWORK="ERR_NETWORK";B.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";B.ERR_DEPRECATED="ERR_DEPRECATED";B.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";B.ERR_BAD_REQUEST="ERR_BAD_REQUEST";B.ERR_CANCELED="ERR_CANCELED";B.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";B.ERR_INVALID_URL="ERR_INVALID_URL";const qy=null;function Ul(e){return k.isPlainObject(e)||k.isArray(e)}function Jf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function jo(e,n,t){return e?e.concat(n).map(function(a,i){return a=Jf(a),!t&&i?"["+a+"]":a}).join(t?".":""):n}function Wy(e){return k.isArray(e)&&!e.some(Ul)}const Gy=k.toFlatObject(k,{},null,function(n){return/^is[A-Z]/.test(n)});function Vi(e,n,t){if(!k.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!k.isUndefined(y[v])});const r=t.metaTokens,a=t.visitor||d,i=t.dots,o=t.indexes,s=(t.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(n);if(!k.isFunction(a))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(k.isDate(m))return m.toISOString();if(k.isBoolean(m))return m.toString();if(!s&&k.isBlob(m))throw new B("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(m)||k.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,v,y){let x=m;if(k.isReactNative(n)&&k.isReactNativeBlob(m))return n.append(jo(y,v,i),u(m)),!1;if(m&&!y&&typeof m=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(k.isArray(m)&&Wy(m)||(k.isFileList(m)||k.endsWith(v,"[]"))&&(x=k.toArray(m)))return v=Jf(v),x.forEach(function(h,S){!(k.isUndefined(h)||h===null)&&n.append(o===!0?jo([v],S,i):o===null?v:v+"[]",u(h))}),!1}return Ul(m)?!0:(n.append(jo(y,v,i),u(m)),!1)}const p=[],g=Object.assign(Gy,{defaultVisitor:d,convertValue:u,isVisitable:Ul});function w(m,v){if(!k.isUndefined(m)){if(p.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));p.push(m),k.forEach(m,function(x,f){(!(k.isUndefined(x)||x===null)&&a.call(n,x,k.isString(f)?f.trim():f,v,g))===!0&&w(x,v?v.concat(f):[f])}),p.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),n}function Ou(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function $s(e,n){this._pairs=[],e&&Vi(e,this,n)}const Xf=$s.prototype;Xf.append=function(n,t){this._pairs.push([n,t])};Xf.toString=function(n){const t=n?function(r){return n.call(this,r,Ou)}:Ou;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function Yy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Zf(e,n,t){if(!n)return e;const r=t&&t.encode||Yy,a=k.isFunction(t)?{serialize:t}:t,i=a&&a.serialize;let o;if(i?o=i(n,a):o=k.isURLSearchParams(n)?n.toString():new $s(n,a).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Iu{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){k.forEach(this.handlers,function(r){r!==null&&n(r)})}}const Ks={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Qy=typeof URLSearchParams<"u"?URLSearchParams:$s,Jy=typeof FormData<"u"?FormData:null,Xy=typeof Blob<"u"?Blob:null,Zy={isBrowser:!0,classes:{URLSearchParams:Qy,FormData:Jy,Blob:Xy},protocols:["http","https","file","blob","url","data"]},Vs=typeof window<"u"&&typeof document<"u",$l=typeof navigator=="object"&&navigator||void 0,e0=Vs&&(!$l||["ReactNative","NativeScript","NS"].indexOf($l.product)<0),n0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",t0=Vs&&window.location.href||"http://localhost",r0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vs,hasStandardBrowserEnv:e0,hasStandardBrowserWebWorkerEnv:n0,navigator:$l,origin:t0},Symbol.toStringTag,{value:"Module"})),_e={...r0,...Zy};function a0(e,n){return Vi(e,new _e.classes.URLSearchParams,{visitor:function(t,r,a,i){return _e.isNode&&k.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...n})}function i0(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function o0(e){const n={},t=Object.keys(e);let r;const a=t.length;let i;for(r=0;r<a;r++)i=t[r],n[i]=e[i];return n}function em(e){function n(t,r,a,i){let o=t[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),s=i>=t.length;return o=!o&&k.isArray(a)?a.length:o,s?(k.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!l):((!a[o]||!k.isObject(a[o]))&&(a[o]=[]),n(t,r,a[o],i)&&k.isArray(a[o])&&(a[o]=o0(a[o])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const t={};return k.forEachEntry(e,(r,a)=>{n(i0(r),a,t,0)}),t}return null}function l0(e,n,t){if(k.isString(e))try{return(n||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}const ra={transitional:Ks,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,i=k.isObject(n);if(i&&k.isHTMLForm(n)&&(n=new FormData(n)),k.isFormData(n))return a?JSON.stringify(em(n)):n;if(k.isArrayBuffer(n)||k.isBuffer(n)||k.isStream(n)||k.isFile(n)||k.isBlob(n)||k.isReadableStream(n))return n;if(k.isArrayBufferView(n))return n.buffer;if(k.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return a0(n,this.formSerializer).toString();if((l=k.isFileList(n))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Vi(l?{"files[]":n}:n,s&&new s,this.formSerializer)}}return i||a?(t.setContentType("application/json",!1),l0(n)):n}],transformResponse:[function(n){const t=this.transitional||ra.transitional,r=t&&t.forcedJSONParsing,a=this.responseType==="json";if(k.isResponse(n)||k.isReadableStream(n))return n;if(n&&k.isString(n)&&(r&&!this.responseType||a)){const o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(n,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{ra.headers[e]={}});const s0=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),c0=e=>{const n={};let t,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),t=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!t||n[t]&&s0[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},Fu=Symbol("internals");function pr(e){return e&&String(e).trim().toLowerCase()}function Ua(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ua):String(e).replace(/[\r\n]+$/,"")}function u0(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const d0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Po(e,n,t,r,a){if(k.isFunction(r))return r.call(this,n,t);if(a&&(n=t),!!k.isString(n)){if(k.isString(r))return n.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(n)}}function p0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function f0(e,n){const t=k.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(a,i,o){return this[r].call(this,n,a,i,o)},configurable:!0})})}let Me=class{constructor(n){n&&this.set(n)}set(n,t,r){const a=this;function i(l,s,u){const d=pr(s);if(!d)throw new Error("header name must be a non-empty string");const p=k.findKey(a,d);(!p||a[p]===void 0||u===!0||u===void 0&&a[p]!==!1)&&(a[p||s]=Ua(l))}const o=(l,s)=>k.forEach(l,(u,d)=>i(u,d,s));if(k.isPlainObject(n)||n instanceof this.constructor)o(n,t);else if(k.isString(n)&&(n=n.trim())&&!d0(n))o(c0(n),t);else if(k.isObject(n)&&k.isIterable(n)){let l={},s,u;for(const d of n){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[u=d[0]]=(s=l[u])?k.isArray(s)?[...s,d[1]]:[s,d[1]]:d[1]}o(l,t)}else n!=null&&i(t,n,r);return this}get(n,t){if(n=pr(n),n){const r=k.findKey(this,n);if(r){const a=this[r];if(!t)return a;if(t===!0)return u0(a);if(k.isFunction(t))return t.call(this,a,r);if(k.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=pr(n),n){const r=k.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||Po(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let a=!1;function i(o){if(o=pr(o),o){const l=k.findKey(r,o);l&&(!t||Po(r,r[l],l,t))&&(delete r[l],a=!0)}}return k.isArray(n)?n.forEach(i):i(n),a}clear(n){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const i=t[r];(!n||Po(this,this[i],i,n,!0))&&(delete this[i],a=!0)}return a}normalize(n){const t=this,r={};return k.forEach(this,(a,i)=>{const o=k.findKey(r,i);if(o){t[o]=Ua(a),delete t[i];return}const l=n?p0(i):String(i).trim();l!==i&&delete t[i],t[l]=Ua(a),r[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return k.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=n&&k.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(a=>r.set(a)),r}static accessor(n){const r=(this[Fu]=this[Fu]={accessors:{}}).accessors,a=this.prototype;function i(o){const l=pr(o);r[l]||(f0(a,o),r[l]=!0)}return k.isArray(n)?n.forEach(i):i(n),this}};Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Me.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});k.freezeMethods(Me);function Do(e,n){const t=this||ra,r=n||t,a=Me.from(r.headers);let i=r.data;return k.forEach(e,function(l){i=l.call(t,i,a.normalize(),n?n.status:void 0)}),a.normalize(),i}function nm(e){return!!(e&&e.__CANCEL__)}let aa=class extends B{constructor(n,t,r){super(n??"canceled",B.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function tm(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new B("Request failed with status code "+t.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function m0(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function g0(e,n){e=e||10;const t=new Array(e),r=new Array(e);let a=0,i=0,o;return n=n!==void 0?n:1e3,function(s){const u=Date.now(),d=r[i];o||(o=u),t[a]=s,r[a]=u;let p=i,g=0;for(;p!==a;)g+=t[p++],p=p%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),u-o<n)return;const w=d&&u-d;return w?Math.round(g*1e3/w):void 0}}function h0(e,n){let t=0,r=1e3/n,a,i;const o=(u,d=Date.now())=>{t=d,a=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),p=d-t;p>=r?o(u,d):(a=u,i||(i=setTimeout(()=>{i=null,o(a)},r-p)))},()=>a&&o(a)]}const yi=(e,n,t=3)=>{let r=0;const a=g0(50,250);return h0(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-r,u=a(s),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:u||void 0,estimated:u&&l&&d?(l-o)/u:void 0,event:i,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(p)},t)},Bu=(e,n)=>{const t=e!=null;return[r=>n[0]({lengthComputable:t,total:e,loaded:r}),n[1]]},zu=e=>(...n)=>k.asap(()=>e(...n)),x0=_e.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,_e.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(_e.origin),_e.navigator&&/(msie|trident)/i.test(_e.navigator.userAgent)):()=>!0,v0=_e.hasStandardBrowserEnv?{write(e,n,t,r,a,i,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(n)}`];k.isNumber(t)&&l.push(`expires=${new Date(t).toUTCString()}`),k.isString(r)&&l.push(`path=${r}`),k.isString(a)&&l.push(`domain=${a}`),i===!0&&l.push("secure"),k.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function y0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function b0(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function rm(e,n,t){let r=!y0(n);return e&&(r||t==!1)?b0(e,n):n}const Mu=e=>e instanceof Me?{...e}:e;function gt(e,n){n=n||{};const t={};function r(u,d,p,g){return k.isPlainObject(u)&&k.isPlainObject(d)?k.merge.call({caseless:g},u,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function a(u,d,p,g){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u,p,g)}else return r(u,d,p,g)}function i(u,d){if(!k.isUndefined(d))return r(void 0,d)}function o(u,d){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,p){if(p in n)return r(u,d);if(p in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,d,p)=>a(Mu(u),Mu(d),p,!0)};return k.forEach(Object.keys({...e,...n}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const p=k.hasOwnProp(s,d)?s[d]:a,g=p(e[d],n[d],d);k.isUndefined(g)&&p!==l||(t[d]=g)}),t}const am=e=>{const n=gt({},e);let{data:t,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:l}=n;if(n.headers=o=Me.from(o),n.url=Zf(rm(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),k.isFormData(t)){if(_e.hasStandardBrowserEnv||_e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(k.isFunction(t.getHeaders)){const s=t.getHeaders(),u=["content-type","content-length"];Object.entries(s).forEach(([d,p])=>{u.includes(d.toLowerCase())&&o.set(d,p)})}}if(_e.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(n)),r||r!==!1&&x0(n.url))){const s=a&&i&&v0.read(i);s&&o.set(a,s)}return n},w0=typeof XMLHttpRequest<"u",S0=w0&&function(e){return new Promise(function(t,r){const a=am(e);let i=a.data;const o=Me.from(a.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:u}=a,d,p,g,w,m;function v(){w&&w(),m&&m(),a.cancelToken&&a.cancelToken.unsubscribe(d),a.signal&&a.signal.removeEventListener("abort",d)}let y=new XMLHttpRequest;y.open(a.method.toUpperCase(),a.url,!0),y.timeout=a.timeout;function x(){if(!y)return;const h=Me.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),E={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:h,config:e,request:y};tm(function(_){t(_),v()},function(_){r(_),v()},E),y=null}"onloadend"in y?y.onloadend=x:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(x)},y.onabort=function(){y&&(r(new B("Request aborted",B.ECONNABORTED,e,y)),y=null)},y.onerror=function(S){const E=S&&S.message?S.message:"Network Error",T=new B(E,B.ERR_NETWORK,e,y);T.event=S||null,r(T),y=null},y.ontimeout=function(){let S=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const E=a.transitional||Ks;a.timeoutErrorMessage&&(S=a.timeoutErrorMessage),r(new B(S,E.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,y)),y=null},i===void 0&&o.setContentType(null),"setRequestHeader"in y&&k.forEach(o.toJSON(),function(S,E){y.setRequestHeader(E,S)}),k.isUndefined(a.withCredentials)||(y.withCredentials=!!a.withCredentials),l&&l!=="json"&&(y.responseType=a.responseType),u&&([g,m]=yi(u,!0),y.addEventListener("progress",g)),s&&y.upload&&([p,w]=yi(s),y.upload.addEventListener("progress",p),y.upload.addEventListener("loadend",w)),(a.cancelToken||a.signal)&&(d=h=>{y&&(r(!h||h.type?new aa(null,e,y):h),y.abort(),y=null)},a.cancelToken&&a.cancelToken.subscribe(d),a.signal&&(a.signal.aborted?d():a.signal.addEventListener("abort",d)));const f=m0(a.url);if(f&&_e.protocols.indexOf(f)===-1){r(new B("Unsupported protocol "+f+":",B.ERR_BAD_REQUEST,e));return}y.send(i||null)})},k0=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let r=new AbortController,a;const i=function(u){if(!a){a=!0,l();const d=u instanceof Error?u:this.reason;r.abort(d instanceof B?d:new aa(d instanceof Error?d.message:d))}};let o=n&&setTimeout(()=>{o=null,i(new B(`timeout of ${n}ms exceeded`,B.ETIMEDOUT))},n);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>k.asap(l),s}},E0=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let r=0,a;for(;r<t;)a=r+n,yield e.slice(r,a),r=a},_0=async function*(e,n){for await(const t of R0(e))yield*E0(t,n)},R0=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:r}=await n.read();if(t)break;yield r}}finally{await n.cancel()}},Hu=(e,n,t,r)=>{const a=_0(e,n);let i=0,o,l=s=>{o||(o=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:u,value:d}=await a.next();if(u){l(),s.close();return}let p=d.byteLength;if(t){let g=i+=p;t(g)}s.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(s){return l(s),a.return()}},{highWaterMark:2})},Uu=64*1024,{isFunction:Ta}=k,T0=(({Request:e,Response:n})=>({Request:e,Response:n}))(k.global),{ReadableStream:$u,TextEncoder:Ku}=k.global,Vu=(e,...n)=>{try{return!!e(...n)}catch{return!1}},C0=e=>{e=k.merge.call({skipUndefined:!0},T0,e);const{fetch:n,Request:t,Response:r}=e,a=n?Ta(n):typeof fetch=="function",i=Ta(t),o=Ta(r);if(!a)return!1;const l=a&&Ta($u),s=a&&(typeof Ku=="function"?(m=>v=>m.encode(v))(new Ku):async m=>new Uint8Array(await new t(m).arrayBuffer())),u=i&&l&&Vu(()=>{let m=!1;const v=new $u,y=new t(_e.origin,{body:v,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return v.cancel(),m&&!y}),d=o&&l&&Vu(()=>k.isReadableStream(new r("").body)),p={stream:d&&(m=>m.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!p[m]&&(p[m]=(v,y)=>{let x=v&&v[m];if(x)return x.call(v);throw new B(`Response type '${m}' is not supported`,B.ERR_NOT_SUPPORT,y)})});const g=async m=>{if(m==null)return 0;if(k.isBlob(m))return m.size;if(k.isSpecCompliantForm(m))return(await new t(_e.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(k.isArrayBufferView(m)||k.isArrayBuffer(m))return m.byteLength;if(k.isURLSearchParams(m)&&(m=m+""),k.isString(m))return(await s(m)).byteLength},w=async(m,v)=>{const y=k.toFiniteNumber(m.getContentLength());return y??g(v)};return async m=>{let{url:v,method:y,data:x,signal:f,cancelToken:h,timeout:S,onDownloadProgress:E,onUploadProgress:T,responseType:_,headers:C,withCredentials:R="same-origin",fetchOptions:P}=am(m),W=n||fetch;_=_?(_+"").toLowerCase():"text";let pe=k0([f,h&&h.toAbortSignal()],S),V=null;const z=pe&&pe.unsubscribe&&(()=>{pe.unsubscribe()});let le;try{if(T&&u&&y!=="get"&&y!=="head"&&(le=await w(C,x))!==0){let I=new t(v,{method:"POST",body:x,duplex:"half"}),H;if(k.isFormData(x)&&(H=I.headers.get("content-type"))&&C.setContentType(H),I.body){const[xe,X]=Bu(le,yi(zu(T)));x=Hu(I.body,Uu,xe,X)}}k.isString(R)||(R=R?"include":"omit");const G=i&&"credentials"in t.prototype,Te={...P,signal:pe,method:y.toUpperCase(),headers:C.normalize().toJSON(),body:x,duplex:"half",credentials:G?R:void 0};V=i&&new t(v,Te);let A=await(i?W(V,P):W(v,Te));const L=d&&(_==="stream"||_==="response");if(d&&(E||L&&z)){const I={};["status","statusText","headers"].forEach(Pe=>{I[Pe]=A[Pe]});const H=k.toFiniteNumber(A.headers.get("content-length")),[xe,X]=E&&Bu(H,yi(zu(E),!0))||[];A=new r(Hu(A.body,Uu,xe,()=>{X&&X(),z&&z()}),I)}_=_||"text";let O=await p[k.findKey(p,_)||"text"](A,m);return!L&&z&&z(),await new Promise((I,H)=>{tm(I,H,{data:O,headers:Me.from(A.headers),status:A.status,statusText:A.statusText,config:m,request:V})})}catch(G){throw z&&z(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,m,V,G&&G.response),{cause:G.cause||G}):B.from(G,G&&G.code,m,V,G&&G.response)}}},N0=new Map,im=e=>{let n=e&&e.env||{};const{fetch:t,Request:r,Response:a}=n,i=[r,a,t];let o=i.length,l=o,s,u,d=N0;for(;l--;)s=i[l],u=d.get(s),u===void 0&&d.set(s,u=l?new Map:C0(n)),d=u;return u};im();const qs={http:qy,xhr:S0,fetch:{get:im}};k.forEach(qs,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const qu=e=>`- ${e}`,L0=e=>k.isFunction(e)||e===null||e===!1;function A0(e,n){e=k.isArray(e)?e:[e];const{length:t}=e;let r,a;const i={};for(let o=0;o<t;o++){r=e[o];let l;if(a=r,!L0(r)&&(a=qs[(l=String(r)).toLowerCase()],a===void 0))throw new B(`Unknown adapter '${l}'`);if(a&&(k.isFunction(a)||(a=a.get(n))))break;i[l||"#"+o]=a}if(!a){const o=Object.entries(i).map(([s,u])=>`adapter ${s} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(qu).join(`
`):" "+qu(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a}const om={getAdapter:A0,adapters:qs};function Oo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new aa(null,e)}function Wu(e){return Oo(e),e.headers=Me.from(e.headers),e.data=Do.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),om.getAdapter(e.adapter||ra.adapter,e)(e).then(function(r){return Oo(e),r.data=Do.call(e,e.transformResponse,r),r.headers=Me.from(r.headers),r},function(r){return nm(r)||(Oo(e),r&&r.response&&(r.response.data=Do.call(e,e.transformResponse,r.response),r.response.headers=Me.from(r.response.headers))),Promise.reject(r)})}const lm="1.14.0",qi={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{qi[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const Gu={};qi.transitional=function(n,t,r){function a(i,o){return"[Axios v"+lm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(n===!1)throw new B(a(o," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Gu[o]&&(Gu[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(i,o,l):!0}};qi.spelling=function(n){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${n}`),!0)};function j0(e,n,t){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=n[i];if(o){const l=e[i],s=l===void 0||o(l,i,e);if(s!==!0)throw new B("option "+i+" must be "+s,B.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new B("Unknown option "+i,B.ERR_BAD_OPTION)}}const $a={assertOptions:j0,validators:qi},Ge=$a.validators;let ct=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Iu,response:new Iu}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=gt(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:i}=t;r!==void 0&&$a.assertOptions(r,{silentJSONParsing:Ge.transitional(Ge.boolean),forcedJSONParsing:Ge.transitional(Ge.boolean),clarifyTimeoutError:Ge.transitional(Ge.boolean),legacyInterceptorReqResOrdering:Ge.transitional(Ge.boolean)},!1),a!=null&&(k.isFunction(a)?t.paramsSerializer={serialize:a}:$a.assertOptions(a,{encode:Ge.function,serialize:Ge.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),$a.assertOptions(t,{baseUrl:Ge.spelling("baseURL"),withXsrfToken:Ge.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&k.merge(i.common,i[t.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),t.headers=Me.concat(o,i);const l=[];let s=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(t)===!1)return;s=s&&v.synchronous;const y=t.transitional||Ks;y&&y.legacyInterceptorReqResOrdering?l.unshift(v.fulfilled,v.rejected):l.push(v.fulfilled,v.rejected)});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,p=0,g;if(!s){const m=[Wu.bind(this),void 0];for(m.unshift(...l),m.push(...u),g=m.length,d=Promise.resolve(t);p<g;)d=d.then(m[p++],m[p++]);return d}g=l.length;let w=t;for(;p<g;){const m=l[p++],v=l[p++];try{w=m(w)}catch(y){v.call(this,y);break}}try{d=Wu.call(this,w)}catch(m){return Promise.reject(m)}for(p=0,g=u.length;p<g;)d=d.then(u[p++],u[p++]);return d}getUri(n){n=gt(this.defaults,n);const t=rm(n.baseURL,n.url,n.allowAbsoluteUrls);return Zf(t,n.params,n.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(n){ct.prototype[n]=function(t,r){return this.request(gt(r||{},{method:n,url:t,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(n){function t(r){return function(i,o,l){return this.request(gt(l||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ct.prototype[n]=t(),ct.prototype[n+"Form"]=t(!0)});let P0=class sm{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},n(function(i,o,l){r.reason||(r.reason=new aa(i,o,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=r=>{n.abort(r)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new sm(function(a){n=a}),cancel:n}}};function D0(e){return function(t){return e.apply(null,t)}}function O0(e){return k.isObject(e)&&e.isAxiosError===!0}const Kl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Kl).forEach(([e,n])=>{Kl[n]=e});function cm(e){const n=new ct(e),t=Uf(ct.prototype.request,n);return k.extend(t,ct.prototype,n,{allOwnKeys:!0}),k.extend(t,n,null,{allOwnKeys:!0}),t.create=function(a){return cm(gt(e,a))},t}const ue=cm(ra);ue.Axios=ct;ue.CanceledError=aa;ue.CancelToken=P0;ue.isCancel=nm;ue.VERSION=lm;ue.toFormData=Vi;ue.AxiosError=B;ue.Cancel=ue.CanceledError;ue.all=function(n){return Promise.all(n)};ue.spread=D0;ue.isAxiosError=O0;ue.mergeConfig=gt;ue.AxiosHeaders=Me;ue.formToJSON=e=>em(k.isHTMLForm(e)?new FormData(e):e);ue.getAdapter=om.getAdapter;ue.HttpStatusCode=Kl;ue.default=ue;const{Axios:Kb,AxiosError:Vb,CanceledError:qb,isCancel:Wb,CancelToken:Gb,VERSION:Yb,all:Qb,Cancel:Jb,isAxiosError:Xb,spread:Zb,toFormData:ew,AxiosHeaders:nw,HttpStatusCode:tw,formToJSON:rw,getAdapter:aw,mergeConfig:iw}=ue,oe=ue.create({baseURL:"https://vald-automator-production.up.railway.app",timeout:3e4}),I0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),oe.post("/api/check",t,{timeout:9e4})},F0=(e,n)=>oe.get("/api/trainers",{params:{gym:e,branch:n}}),um=(e,n,t)=>oe.get("/api/trainer-whatsapp",{params:{gym:e,branch:n,trainer:t}}),B0=e=>oe.post("/api/programs/approve",e),z0=e=>oe.post("/api/programs/unapprove",e),M0=e=>oe.post("/api/programs/ignore",e),H0=e=>oe.post("/api/programs/unignore",e),dm=e=>oe.post("/api/programs/preview",e,{responseType:"text",timeout:6e4}),U0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),oe.post("/api/report/generate",n,{responseType:"blob",timeout:12e4})},$0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),oe.post("/api/quick-generate",t,{timeout:9e4})},Yu=e=>oe.get("/api/trainers/all",{params:{gym:e}}),K0=e=>oe.post("/api/trainers",e),V0=(e,n)=>oe.put(`/api/trainers/${e}`,n),q0=e=>oe.delete(`/api/trainers/${e}`),W0=(e,n)=>{const t=new FormData;return t.append("month",e),t.append("year",n),oe.post("/api/report/payment",t,{responseType:"blob",timeout:12e4})},G0=(e,n,t)=>{const r=new FormData;return r.append("gym",e),r.append("month",n),r.append("year",t),oe.post("/api/report/growth",r,{responseType:"blob",timeout:12e4})},Y0=e=>oe.get("/api/bodydot/tests",{params:{gym:e}}),Qu=e=>oe.post("/api/bodydot/tests/approve",e),Q0=e=>oe.post("/api/bodydot/tests/ignore",e),J0=e=>oe.post(`/api/bodydot/tests/${e}/unapprove`),X0=(e,n)=>oe.get("/api/report/counts",{params:{year:e,month:n}}),Z0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),oe.post("/api/report/bodydot",n,{responseType:"blob",timeout:3e5})},eb={"Body Masters":["RUH - Al Malaz","RUH - Al Massif","RUH - Al Aarid","RUH - Al Sahafa","RUH - Al Wadi","RUH - Eshbilia","RUH - Muzahmiyah","RUH - Rabwa","RUH - Salam","RUH - Swaidi","RUH - Takhasousi","RUH - Al Badia","RUH - Al Fayha","RUH - Al Khaleej","RUH - Al Kharj","RUH - Al Nahda","RUH - Badr","RUH - Ezdehar","RUH - Murooj","RUH - Shubra","DMM - Al Athir","DMM - Al Jameyeen","DMM - Hufof","DMM - Khobar","JED - Hamadania","JED - Al Rawdah","JED - Makkah","JED - Obhor - Al Amwaj","JED - Obhor - Al Sheraa","ALQ - Al Rass","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","MED - Shouran","MED - Taiba","Uhud","AlUla","Al Mubaraz","Hafr El Batin","Tabuk","Najran","Khamis Mushait","Hail"],"Body Motions":["RUH - Al Malaz","RUH - Al Sahafa","RUH - Al Aarid","RUH - Al Fayha","RUH - Al Uraija","RUH - Badr","RUH - Al Badia","JED - Al Basateen","JED - Al Faisaliyah","JED - Al Naeem","JED - Obhor","DMM - Al Faisaliyah","DMM - Al Jalawiah","DMM - Al Nada","ALQ - Buraidah","ALQ - Unaizah","Al Ahsaa","AlUla","Tabuk"]},pm=b.createContext(null);function nb({children:e}){const[n,t]=b.useState({}),[r,a]=b.useState(!1),i=b.useCallback(async g=>{if(!(!g||n[g])){a(!0);try{const w=await Yu(g);t(m=>({...m,[g]:w.data||{}}))}catch{}finally{a(!1)}}},[n]),o=b.useCallback(async g=>{if(g){a(!0);try{const w=await Yu(g);t(m=>({...m,[g]:w.data||{}}))}catch{}finally{a(!1)}}},[]),l=g=>Object.keys(n[g]||{}).sort((w,m)=>{const v=eb[g]||[],y=v.indexOf(w),x=v.indexOf(m);return y===-1&&x===-1?w.localeCompare(m):y===-1?1:x===-1?-1:y-x}),s=(g,w)=>{var m;return[...((m=n[g])==null?void 0:m[w])||[]].sort((v,y)=>v.name.localeCompare(y.name)).map(v=>v.name)},u=g=>Object.values(n[g]||{}).flat().map(w=>w.name).sort((w,m)=>w.localeCompare(m)),d=(g,w)=>{for(const[m,v]of Object.entries(n[g]||{}))if(v.some(y=>y.name===w))return m;return null},p=(g,w,m)=>{var v;return(((v=n[g])==null?void 0:v[w])||[]).find(y=>y.name===m)||null};return c.jsx(pm.Provider,{value:{data:n,loading:r,load:i,reload:o,getBranches:l,getTrainers:s,getAllTrainers:u,getBranchForTrainer:d,getTrainerRecord:p},children:e})}function fm(){const e=b.useContext(pm);if(!e)throw new Error("useTrainers must be used inside TrainersProvider");return e}const tb={upper:"Upper Body",lower:"Lower Body",full:"Full Body"},rb={NEW:"bg-emerald-900/60 text-emerald-300 border border-emerald-700",UPDATED:"bg-amber-900/60 text-amber-300 border border-amber-700"};function Ju({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o}){const[l,s]=b.useState(""),[u,d]=b.useState(!1),[p,g]=b.useState(0),w=b.useRef(null),m=b.useRef(null),v=l?e.filter(f=>f.toLowerCase().includes(l.toLowerCase())):e;b.useEffect(()=>{function f(h){w.current&&!w.current.contains(h.target)&&d(!1)}return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]),b.useEffect(()=>{s(n||"")},[n]),b.useEffect(()=>{g(0)},[l]);function y(f){t(f),s(f),d(!1),r&&r(f)}function x(f){!u||v.length===0||(f.key==="ArrowDown"?(f.preventDefault(),g(h=>Math.min(h+1,v.length-1))):f.key==="ArrowUp"?(f.preventDefault(),g(h=>Math.max(h-1,0))):f.key==="Enter"?(f.preventDefault(),y(v[p])):f.key==="Escape"&&d(!1))}return b.useEffect(()=>{if(!m.current)return;const f=m.current.children[p];f&&f.scrollIntoView({block:"nearest"})},[p]),c.jsxs("div",{ref:w,className:"relative",children:[c.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:l,disabled:i,onChange:f=>{s(f.target.value),d(!0),f.target.value||t("")},onFocus:()=>d(!0),onKeyDown:x}),u&&!i&&v.length>0&&c.jsx("ul",{ref:m,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:v.map((f,h)=>c.jsx("li",{onMouseDown:()=>y(f),onMouseEnter:()=>g(h),className:`px-3 py-2 text-sm cursor-pointer ${h===p?"bg-gray-700 text-white":f===n?"text-brand-400 font-semibold":"text-white"}`,children:f},f))})]})}function Xu({test:e,gym:n}){const{getBranches:t,getTrainers:r,getAllTrainers:a,getBranchForTrainer:i,load:o}=fm(),[l,s]=b.useState(e.existing_branch||""),[u,d]=b.useState(e.existing_trainer_name||""),p=b.useRef(null),[g,w]=b.useState(e.existing_dispatch_date||new Date().toISOString().split("T")[0]);b.useEffect(()=>{o(n)},[n,o]);const[m,v]=b.useState(!1),[y,x]=b.useState(!1),[f,h]=b.useState(!1),[S,E]=b.useState(!1),[T,_]=b.useState(!1),[C,R]=b.useState(""),P=t(n),W=l?r(n,l):a(n);function pe(L){if(d(L),!l&&L){const O=i(n,L);O&&s(O)}}b.useEffect(()=>{n&&l&&u&&um(n,l,u).then(L=>{var O;return R(((O=L.data)==null?void 0:O.whatsapp)||"")}).catch(()=>R(""))},[n,l,u]);const V=async()=>{var L,O;if(!e.cells_data){window.open(`https://vald-automator-production.up.railway.app/api/programs/preview-demo?gym=${encodeURIComponent(n)}&test_type=${e.test_type}`,"_blank");return}v(!0);try{const I=await dm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:e.prev_asymmetries||null}),H=new Blob([I.data],{type:"text/html"}),xe=URL.createObjectURL(H),X=window.open(xe,"_blank");X&&X.addEventListener("load",()=>X.print())}catch(I){alert("Failed to open program: "+(((O=(L=I.response)==null?void 0:L.data)==null?void 0:O.detail)||I.message))}finally{v(!1)}},z=async()=>{var O,I,H;if(!(e.status==="UPDATED"&&!l&&!u)&&(!l||!u)){alert("Please select a branch and trainer before approving.");return}h(!0);try{const X=(O=(await B0({gym:n,branch:l||e.existing_branch||"",client_id:e.external_id!=="N/A"?e.external_id:null,client_name:e.patient,test_type:e.test_type,movements:e.movement_count,test_date:e.date,trainer_name:u||e.existing_trainer_name||null,dispatch_date:g||e.existing_dispatch_date||null,check_status:e.status,asymmetry_values:e.asymmetry_values||null})).data)==null?void 0:O.id;x(!0)}catch(xe){alert("Error approving: "+(((H=(I=xe.response)==null?void 0:I.data)==null?void 0:H.detail)||xe.message))}finally{h(!1)}},le=async()=>{var L,O;_(!0);try{await M0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count,external_id:e.external_id!=="N/A"?e.external_id:null}),E(!0)}catch(I){alert("Error ignoring: "+(((O=(L=I.response)==null?void 0:L.data)==null?void 0:O.detail)||I.message))}finally{_(!1)}},G=async()=>{var L,O;try{await H0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),E(!1)}catch(I){alert("Error undoing ignore: "+(((O=(L=I.response)==null?void 0:L.data)==null?void 0:O.detail)||I.message))}},Te=async()=>{var L,O;try{await z0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),x(!1)}catch(I){alert("Error undoing approval: "+(((O=(L=I.response)==null?void 0:L.data)==null?void 0:O.detail)||I.message))}},A=()=>{if(!C){alert("No WhatsApp number set for this trainer.");return}const L=C.replace(/\D/g,"");window.open(`https://wa.me/${L}`,"_blank")};return c.jsxs("div",{className:`rounded-xl border p-5 space-y-4 transition-all
      ${y?"border-emerald-700 bg-emerald-950/20":S?"border-red-900 bg-red-950/20":"border-gray-700 bg-gray-900"}`,children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full ${rb[e.status]}`,children:e.status}),c.jsx("h3",{className:"font-semibold text-white",children:e.patient}),e.external_id&&e.external_id!=="N/A"&&c.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["#",e.external_id]})]}),c.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[c.jsx("span",{children:tb[e.test_type]||e.test_type}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.movement_count," movements"]}),c.jsx("span",{children:"·"}),c.jsx("span",{children:e.date}),e.status==="UPDATED"&&c.jsxs("span",{className:"text-amber-400",children:["(was ",e.old_count,")"]})]})]}),c.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.patient),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),c.jsx(Ju,{options:P,value:l,onChange:L=>{s(L),d("")},onSelect:()=>{p.current&&p.current.focus()},placeholder:"Search branch…",disabled:y||S})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),c.jsx(Ju,{options:W,value:u,onChange:pe,placeholder:"Search trainer…",disabled:y||S,inputRef:p})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),c.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:g,onChange:L=>w(L.target.value),disabled:y||S})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[c.jsx("button",{onClick:V,disabled:m,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:m?"Loading…":"🖨 Open & Print"}),c.jsx("button",{onClick:()=>{const L={upper:"Upper Body",lower:"Lower Body",full:"Full Body"}[e.test_type]||e.test_type;navigator.clipboard.writeText(`${e.patient} - ${L}`)},className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors",children:"📋 Copy File Name"}),!y&&!S&&c.jsx("button",{onClick:le,disabled:T,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:T?"Ignoring…":"Ignore"}),c.jsx("div",{className:"flex-1"}),c.jsxs("button",{onClick:A,disabled:!C,title:C?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[c.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),y?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-emerald-700/40 text-emerald-400 font-semibold border border-emerald-700",children:"✓ Approved"}),c.jsx("button",{onClick:Te,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):S?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-red-900/40 text-red-400 font-semibold border border-red-800",children:"✗ Ignored"}),c.jsx("button",{onClick:G,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):c.jsx("button",{onClick:z,disabled:f,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:f?"Saving…":"Approve"})]})]})}const ab=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function ib(){const[e,n]=b.useState("Body Motions"),[t,r]=b.useState(!1),[a,i]=b.useState(null),[o,l]=b.useState(null),[s,u]=b.useState("desc"),d=async m=>{var v,y;r(!0),i(null),l(null);try{const x=await I0(e,m);l(x.data)}catch(x){i(((y=(v=x.response)==null?void 0:v.data)==null?void 0:y.detail)||x.message||"Failed to process file")}finally{r(!1)}},p=o?[...o].sort((m,v)=>{const y=new Date(m.date)-new Date(v.date);return s==="asc"?y:-y}):[],g=p.filter(m=>m.status==="NEW"),w=p.filter(m=>m.status==="UPDATED");return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Program Generation"}),c.jsx("div",{className:"flex gap-3",children:ab.map(m=>c.jsx("button",{onClick:()=>{n(m.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),c.jsx(ry,{onFile:d,loading:t}),a&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"flex items-center gap-4 text-sm flex-wrap",children:[c.jsxs("span",{className:"text-gray-300",children:[c.jsx("span",{className:"font-bold text-emerald-400",children:g.length})," new"]}),c.jsx("span",{className:"text-gray-600",children:"|"}),c.jsxs("span",{className:"text-gray-300",children:[c.jsx("span",{className:"font-bold text-amber-400",children:w.length})," updated"]}),o.length===0&&c.jsx("span",{className:"text-gray-500",children:"No new or updated tests found."}),c.jsxs("div",{className:"ml-auto flex gap-1",children:[c.jsx("button",{onClick:()=>u("desc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="desc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Newest first"}),c.jsx("button",{onClick:()=>u("asc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="asc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Oldest first"})]})]}),g.length>0&&c.jsxs("section",{className:"space-y-3",children:[c.jsxs("h2",{className:"text-lg font-semibold text-emerald-400 border-b border-emerald-900 pb-1",children:["New Tests (",g.length,")"]}),g.map((m,v)=>c.jsx(Xu,{test:m,gym:e},`new-${v}`))]}),w.length>0&&c.jsxs("section",{className:"space-y-3",children:[c.jsxs("h2",{className:"text-lg font-semibold text-amber-400 border-b border-amber-900 pb-1",children:["Updated Tests (",w.length,")"]}),w.map((m,v)=>c.jsx(Xu,{test:m,gym:e},`upd-${v}`))]})]})]})}const mm=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],ob=[{key:"vald",name:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",name:"Bodydot",logo:"/VALD-automator/Bodydot.png"}],Ne=["January","February","March","April","May","June","July","August","September","October","November","December"];function lb(e,n){const t=new Date(e,n-1,1).getDay(),r=new Date(e,n,0).getDate();return Math.ceil((t+r)/7)}function sb(){const e=new Date,[n,t]=b.useState("vald"),[r,a]=b.useState("Body Motions"),[i,o]=b.useState("monthly"),[l,s]=b.useState(e.getFullYear()),[u,d]=b.useState(e.getMonth()+1),[p,g]=b.useState(1),[w,m]=b.useState(null),[v,y]=b.useState(null),[x,f]=b.useState(!1),[h,S]=b.useState(null),E=new Date(l,u,0).getDate(),T=lb(l,u),_=(()=>{const R=e.getFullYear(),P=e.getMonth()+1;return l>R?!0:l<R?!1:u>P?!0:u<P?!1:i==="weekly"?(p-1)*7+1>e.getDate():i==="custom"&&w?w>e.getDate():!1})(),C=async()=>{var R,P,W,pe;f(!0),S(null);try{const V={gym:r,period_type:i==="custom"?"monthly":i,year:l,month:u,week_number:i==="weekly"?p:null,start_day:i==="custom"&&w?w:null,end_day:i==="custom"&&v?v:null},z=n==="bodydot"?await Z0(V):await U0(V),le=new Blob([z.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),G=URL.createObjectURL(le),Te=document.createElement("a"),L=(((R=z.headers)==null?void 0:R["content-disposition"])||"").match(/filename="([^"]+)"/),O=n==="bodydot"?"Bodydot ":"",I=i==="custom"?`${Ne[u-1]} ${l} (Day ${w||1}–${v||E})`:i==="monthly"?`${Ne[u-1]} ${l}`:`Week ${p} - ${Ne[u-1]} ${l}`;Te.href=G,Te.download=L?L[1]:`${O}${I} - ${r}.xlsx`,Te.click(),URL.revokeObjectURL(G)}catch(V){let z=V.message;if(((P=V.response)==null?void 0:P.data)instanceof Blob)try{z=JSON.parse(await V.response.data.text()).detail||z}catch{}else z=((pe=(W=V.response)==null?void 0:W.data)==null?void 0:pe.detail)||z;S(z||"Failed to generate report")}finally{f(!1)}};return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Reports"}),c.jsx("div",{}),c.jsx("h1",{className:"text-2xl font-bold text-white hidden lg:block",children:"VALD Payment Report"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Service"}),c.jsx("div",{className:"flex gap-3",children:ob.map(R=>c.jsx("button",{onClick:()=>t(R.key),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===R.key?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:R.logo,alt:R.name,className:"h-14 w-28 object-contain px-0.5 py-px"})},R.key))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),c.jsx("div",{className:"flex gap-3",children:mm.map(R=>c.jsx("button",{onClick:()=>a(R.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${r===R.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:R.logo,alt:R.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},R.name))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Report Type"}),c.jsx("div",{className:"flex gap-2",children:["monthly","weekly","custom"].map(R=>c.jsx("button",{onClick:()=>o(R),className:`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors
                ${i===R?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:R},R))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:u,onChange:R=>d(Number(R.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Ne.map((R,P)=>c.jsx("option",{value:P+1,children:R},P+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:l,onChange:R=>s(Number(R.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(R=>c.jsx("option",{value:R,children:R},R))})]})]}),i==="custom"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date Range"}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"Start Day"}),c.jsxs("select",{value:w||"",onChange:R=>m(R.target.value?Number(R.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[c.jsx("option",{value:"",children:"—"}),Array.from({length:E},(R,P)=>P+1).map(R=>c.jsx("option",{value:R,children:R},R))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"End Day"}),c.jsxs("select",{value:v||"",onChange:R=>y(R.target.value?Number(R.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[c.jsx("option",{value:"",children:"—"}),Array.from({length:E},(R,P)=>P+1).map(R=>c.jsx("option",{value:R,children:R},R))]})]})]})]}),i==="weekly"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Week"}),c.jsx("div",{className:"flex gap-2 flex-wrap",children:Array.from({length:T},(R,P)=>P+1).map(R=>c.jsxs("button",{onClick:()=>g(R),className:`w-12 h-10 rounded-lg text-sm font-semibold transition-colors
                  ${p===R?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:["W",R]},R))}),c.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Week ",p,": days ",(p-1)*7+1,"–",Math.min(p*7,new Date(l,u,0).getDate())]})]}),h&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:h}),c.jsx("button",{onClick:C,disabled:x||_,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:x?"Generating…":"Generate & Download Report"}),_&&c.jsx("p",{className:"text-xs text-amber-500 text-center",children:"Cannot generate a report for a future period."}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:[n==="bodydot"?c.jsxs(c.Fragment,{children:["Report pulls all ",c.jsx("strong",{className:"text-gray-400",children:"approved"})," Bodydot tests"]}):c.jsxs(c.Fragment,{children:["Report pulls all ",c.jsx("strong",{className:"text-gray-400",children:"approved"})," programs"]}),i==="weekly"?` dispatched in week ${p} of ${Ne[u-1]} ${l}`:i==="custom"?` dispatched between day ${w||1} and day ${v||E} of ${Ne[u-1]} ${l}`:` dispatched in ${Ne[u-1]} ${l}`,"."]})]}),c.jsx("div",{className:"hidden lg:block bg-gray-700 self-stretch"}),c.jsxs("div",{className:"space-y-6",children:[c.jsx(ub,{}),c.jsx("div",{className:"border-t border-gray-700 pt-6",children:c.jsx(cb,{})})]})]})]})}function cb(){const e=new Date,[n,t]=b.useState("Body Motions"),[r,a]=b.useState(e.getMonth()+1),[i,o]=b.useState(e.getFullYear()),[l,s]=b.useState(!1),[u,d]=b.useState(null),p=`${Ne[(r-2+12)%12]} ${r===1?i-1:i}`,g=async()=>{var w,m,v;s(!0),d(null);try{const y=await G0(n,r,i),x=new Blob([y.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),f=URL.createObjectURL(x),h=document.createElement("a"),E=(((w=y.headers)==null?void 0:w["content-disposition"])||"").match(/filename="([^"]+)"/);h.href=f;const T=String(i%100).padStart(2,"0"),_=Ne[(r-2+12)%12].slice(0,3).toUpperCase(),C=Ne[r-1].slice(0,3).toUpperCase(),R=`Test Growth Tracker - ${n} - ${_}-${C} ${T}.xlsx`;h.download=E?E[1]:R,h.click(),URL.revokeObjectURL(f)}catch(y){d(((v=(m=y.response)==null?void 0:m.data)==null?void 0:v.detail)||y.message||"Failed to generate growth tracker")}finally{s(!1)}};return c.jsxs("div",{className:"max-w-2xl space-y-5",children:[c.jsx("div",{children:c.jsx("h1",{className:"text-2xl font-bold text-white",children:"VALD Test Growth Tracker"})}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),c.jsx("div",{className:"flex gap-3",children:mm.map(w=>c.jsx("button",{onClick:()=>t(w.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===w.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:w.logo,alt:w.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},w.name))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:r,onChange:w=>a(Number(w.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Ne.map((w,m)=>c.jsx("option",{value:m+1,children:w},m+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:i,onChange:w=>o(Number(w.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(w=>c.jsx("option",{value:w,children:w},w))})]})]}),u&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:u}),c.jsx("button",{onClick:g,disabled:l,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:l?"Generating…":"Generate & Download Growth Tracker"}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Compares ",c.jsxs("strong",{className:"text-gray-400",children:[Ne[r-1]," ",i]})," vs"," ",c.jsx("strong",{className:"text-gray-400",children:p})," test counts per branch and trainer."]})]})}function ub(){const e=new Date,[n,t]=b.useState(e.getMonth()+1),[r,a]=b.useState(e.getFullYear()),[i,o]=b.useState(!1),[l,s]=b.useState(null),u=async()=>{var d,p,g;o(!0),s(null);try{const w=await W0(n,r),m=new Blob([w.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),v=URL.createObjectURL(m),y=document.createElement("a"),f=(((d=w.headers)==null?void 0:d["content-disposition"])||"").match(/filename="([^"]+)"/);y.href=v,y.download=f?f[1]:`Payment - ${Ne[n-1]} ${r}.xlsx`,y.click(),URL.revokeObjectURL(v)}catch(w){s(((g=(p=w.response)==null?void 0:p.data)==null?void 0:g.detail)||w.message||"Failed to generate payment report")}finally{o(!1)}};return c.jsxs("div",{className:"space-y-5",children:[c.jsx("h1",{className:"text-2xl font-bold text-white lg:hidden",children:"VALD Payment Report"}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:n,onChange:d=>t(Number(d.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Ne.map((d,p)=>c.jsx("option",{value:p+1,children:d},p+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:r,onChange:d=>a(Number(d.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(d=>c.jsx("option",{value:d,children:d},d))})]})]}),l&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:l}),c.jsx("button",{onClick:u,disabled:i,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:i?"Generating…":"Generate & Download Payment Report"}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Appends all programs from ",c.jsx("strong",{className:"text-gray-400",children:"May 2026"})," through ",c.jsxs("strong",{className:"text-gray-400",children:[Ne[n-1]," ",r]})," to the payment report."]})]})}const db=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],pb={upper:"Upper Body",lower:"Lower Body",full:"Full Body"};function fb({item:e,gym:n}){const[t,r]=b.useState(!1),a=async()=>{var i,o;r(!0);try{const l=await dm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:null}),s=new Blob([l.data],{type:"text/html"}),u=URL.createObjectURL(s),d=window.open(u,"_blank");d&&d.addEventListener("load",()=>d.print())}catch(l){alert("Failed to open program: "+(((o=(i=l.response)==null?void 0:i.data)==null?void 0:o.detail)||l.message))}finally{r(!1)}};return c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 flex items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-semibold text-white",children:e.patient}),c.jsxs("p",{className:"text-sm text-gray-400 mt-0.5",children:[pb[e.test_type]||e.test_type,c.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.movement_count," movements",c.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.date]})]}),c.jsx("button",{onClick:a,disabled:t,className:"shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:t?"Loading…":"🖨 Open & Print"})]})}function mb(){const[e,n]=b.useState("Body Motions"),[t,r]=b.useState(!1),[a,i]=b.useState(null),[o,l]=b.useState(null),s=async g=>{var w,m;if(g.length){r(!0),i(null),l(null);try{const v=await $0(e,g[0]);l(v.data)}catch(v){i(((m=(w=v.response)==null?void 0:w.data)==null?void 0:m.detail)||v.message||"Failed to process file")}finally{r(!1)}}},{getRootProps:u,getInputProps:d,isDragActive:p}=Hs({onDrop:s,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:t});return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Generate"}),c.jsx("div",{className:"flex gap-3",children:db.map(g=>c.jsx("button",{onClick:()=>{n(g.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===g.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:g.logo,alt:g.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},g.name))}),c.jsxs("div",{...u(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
          ${p?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
          ${t?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{...d()}),c.jsx("div",{className:"text-4xl mb-3",children:"📂"}),t?c.jsx("p",{className:"text-gray-400",children:"Generating programs…"}):p?c.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your VALD export file here"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]}),a&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("p",{className:"text-sm text-gray-400",children:[c.jsx("span",{className:"font-bold text-white",children:o.length})," program",o.length!==1?"s":""," found"]}),o.length===0&&c.jsx("p",{className:"text-gray-500 text-sm",children:"No programs could be parsed from this file."}),o.map((g,w)=>c.jsx(fb,{item:g,gym:e},w))]})]})}const Zu=["January","February","March","April","May","June","July","August","September","October","November","December"],Io=[{key:"vald",label:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",label:"Bodydot",logo:"/VALD-automator/Bodydot.png"}];function gb(){const e=new Date,[n,t]=b.useState(e.getMonth()+1),[r,a]=b.useState(e.getFullYear()),[i,o]=b.useState(null),[l,s]=b.useState(!1),[u,d]=b.useState(null);b.useEffect(()=>{let v=!1;return s(!0),d(null),X0(r,n).then(y=>{v||o(y.data)}).catch(y=>{var x,f;v||d(((f=(x=y.response)==null?void 0:x.data)==null?void 0:f.detail)||y.message)}).finally(()=>{v||s(!1)}),()=>{v=!0}},[r,n]);const p=(i==null?void 0:i.gyms)||["Body Motions","Body Masters"],g=v=>p.reduce((y,x)=>{var f;return y+(((f=i==null?void 0:i[v])==null?void 0:f[x])||0)},0),w=v=>Io.reduce((y,x)=>{var f;return y+(((f=i==null?void 0:i[x.key])==null?void 0:f[v])||0)},0),m=Io.reduce((v,y)=>v+g(y.key),0);return c.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Report"}),c.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Tests dispatched in ",Zu[n-1]," ",r," that would appear in each report."]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-sm",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:n,onChange:v=>t(Number(v.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Zu.map((v,y)=>c.jsx("option",{value:y+1,children:v},y+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:r,onChange:v=>a(Number(v.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(v=>c.jsx("option",{value:v,children:v},v))})]})]}),u&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:u}),c.jsx("div",{className:`rounded-xl border border-gray-700 overflow-hidden transition-opacity ${l?"opacity-50":""}`,children:c.jsxs("table",{className:"w-full text-sm",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-gray-800/70 text-gray-400",children:[c.jsx("th",{className:"text-left font-medium px-5 py-3",children:"Service"}),p.map(v=>c.jsx("th",{className:"text-right font-medium px-5 py-3",children:v},v)),c.jsx("th",{className:"text-right font-semibold px-5 py-3 text-gray-300",children:"Total"})]})}),c.jsxs("tbody",{children:[Io.map(v=>c.jsxs("tr",{className:"border-t border-gray-800",children:[c.jsx("td",{className:"px-5 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"inline-flex items-center justify-center h-7 w-14 rounded bg-gray-100",children:c.jsx("img",{src:v.logo,alt:v.label,className:"h-6 w-auto object-contain px-0.5"})}),c.jsx("span",{className:"text-white font-medium",children:v.label})]})}),p.map(y=>{var x;return c.jsx("td",{className:"text-right px-5 py-3 text-gray-200 tabular-nums",children:((x=i==null?void 0:i[v.key])==null?void 0:x[y])??"—"},y)}),c.jsx("td",{className:"text-right px-5 py-3 font-semibold text-white tabular-nums",children:g(v.key)})]},v.key)),c.jsxs("tr",{className:"border-t-2 border-gray-700 bg-gray-800/40",children:[c.jsx("td",{className:"px-5 py-3 font-semibold text-gray-300",children:"Total"}),p.map(v=>c.jsx("td",{className:"text-right px-5 py-3 font-semibold text-white tabular-nums",children:w(v)},v)),c.jsx("td",{className:"text-right px-5 py-3 font-bold text-brand-300 tabular-nums text-base",children:m})]})]})]})})]})}const hb=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function xb({trainer:e,allBranches:n,onUpdated:t,onDeleted:r}){const[a,i]=b.useState(!1),[o,l]=b.useState(e.name),[s,u]=b.useState(e.whatsapp||""),[d,p]=b.useState(e.branch),[g,w]=b.useState(!1),[m,v]=b.useState(!1),y=o!==e.name||s!==(e.whatsapp||"")||d!==e.branch,x=async()=>{var S,E;w(!0);try{const T=await V0(e.id,{name:o,whatsapp:s,branch:d});t(T.data),i(!1)}catch(T){alert("Failed to save: "+(((E=(S=T.response)==null?void 0:S.data)==null?void 0:E.detail)||T.message))}finally{w(!1)}},f=async()=>{var S,E;if(confirm(`Delete "${e.name}"?`)){v(!0);try{await q0(e.id),r(e.id)}catch(T){alert("Failed to delete: "+(((E=(S=T.response)==null?void 0:S.data)==null?void 0:E.detail)||T.message)),v(!1)}}},h=()=>{l(e.name),u(e.whatsapp||""),p(e.branch),i(!1)};return a?c.jsxs("div",{className:"py-3 border-b border-gray-700 space-y-2",children:[c.jsxs("div",{className:"flex gap-2 items-center",children:[c.jsx("input",{value:o,onChange:S=>l(S.target.value),placeholder:"Name",className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"}),c.jsx("input",{value:s,onChange:S=>u(S.target.value),placeholder:"WhatsApp e.g. +966...",className:"w-44 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"})]}),c.jsxs("div",{className:"flex gap-2 items-center",children:[c.jsx("select",{value:d,onChange:S=>p(S.target.value),className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",children:n.map(S=>c.jsx("option",{value:S,children:S},S))}),c.jsx("button",{onClick:x,disabled:g||!y,className:"px-3 py-1 text-xs rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40",children:g?"Saving…":"Save"}),c.jsx("button",{onClick:h,className:"px-3 py-1 text-xs rounded border border-gray-600 text-gray-400 hover:text-white",children:"Cancel"})]})]}):c.jsxs("div",{className:"flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0 group",children:[c.jsx("span",{className:"w-72 shrink-0 text-sm text-white",children:e.name}),c.jsx("span",{className:"flex-1 text-sm text-gray-400",children:e.whatsapp||c.jsx("span",{className:"text-gray-600 italic",children:"no number"})}),c.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[c.jsx("button",{onClick:()=>i(!0),className:"text-xs px-2.5 py-1 rounded border border-gray-600 text-gray-300 hover:border-brand-500 hover:text-brand-300",children:"Edit"}),c.jsx("button",{onClick:f,disabled:m,className:"text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-500 hover:border-red-600 hover:text-red-400 disabled:opacity-40",children:m?"…":"Delete"})]})]})}function vb({gym:e,branch:n,onAdded:t}){const[r,a]=b.useState(""),[i,o]=b.useState(""),[l,s]=b.useState(!1),u=async()=>{var d,p;if(r.trim()){s(!0);try{const g=await K0({gym:e,branch:n,name:r.trim(),whatsapp:i});t(g.data),a(""),o("")}catch(g){alert("Failed to add: "+(((p=(d=g.response)==null?void 0:d.data)==null?void 0:p.detail)||g.message))}finally{s(!1)}}};return c.jsxs("div",{className:"flex gap-2 pt-3 border-t border-gray-700 mt-1",children:[c.jsx("input",{value:r,onChange:d=>a(d.target.value),placeholder:"New trainer name",className:"flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:d=>d.key==="Enter"&&u()}),c.jsx("input",{value:i,onChange:d=>o(d.target.value),placeholder:"WhatsApp (optional)",className:"w-44 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:d=>d.key==="Enter"&&u()}),c.jsx("button",{onClick:u,disabled:l||!r.trim(),className:"px-4 py-1.5 text-sm rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40 shrink-0",children:l?"Adding…":"+ Add"})]})}function yb(){var w;const{data:e,load:n,reload:t,getBranches:r}=fm(),[a,i]=b.useState("Body Motions"),[o,l]=b.useState("");b.useEffect(()=>{n(a)},[a]);const s=r(a),u=o?[...((w=e[a])==null?void 0:w[o])||[]].sort((m,v)=>m.name.localeCompare(v.name)):[],d=async m=>{m.branch!==o?(await t(a),l(m.branch)):t(a)},p=()=>t(a),g=()=>t(a);return c.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Trainers"}),c.jsx("div",{className:"flex gap-3",children:hb.map(m=>c.jsx("button",{onClick:()=>{i(m.name),l("")},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${a===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),c.jsxs("select",{value:o,onChange:m=>l(m.target.value),className:"bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72",children:[c.jsx("option",{value:"",children:"— Select branch —"}),s.map(m=>c.jsx("option",{value:m,children:m},m))]})]}),o&&c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5",children:[c.jsxs("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3",children:[o," — ",u.length," trainer",u.length!==1?"s":""]}),u.map(m=>c.jsx(xb,{trainer:{...m,branch:o},allBranches:s,onUpdated:d,onDeleted:p},m.id)),c.jsx(vb,{gym:a,branch:o,onAdded:g})]})]})}const bb="https://bdot-proxy.andyayas27.workers.dev",gm=`${bb}/v1`,wb="YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk",ed=[{id:"bf9ffaec-d3ed-4742-bce9-945f619ea1bc",name:"Body Motions – Al Sahafa",bilingual:!0,gym:"Body Motions",branch:"RUH - Al Sahafa"},{id:"1627c00e-e275-4356-91ae-6f85127bd21c",name:"Body Masters – Al Aarid",bilingual:!0,gym:"Body Masters",branch:"RUH - Al Aarid"},{id:"ebce917d-1c31-4516-8396-64283b4cbeaa",name:"Body Coach",bilingual:!1,gym:"Body Coach",branch:null}];function Sb(e){let n=0,t=0;for(const r of(e==null?void 0:e.sequences)||[])for(const a of r.stepResults||[])t+=1,a.status==="Analyzed"&&(n+=1);return{analyzed:n,total:t,valid:n>0&&n>t-n}}const nd=e=>new Promise(n=>setTimeout(n,e)),kb=4;let bi=0;const hm=[];function Eb(){return bi<kb?(bi++,Promise.resolve()):new Promise(e=>hm.push(e))}function _b(){bi--;const e=hm.shift();e&&(bi++,e())}async function xm(e,n,t=5){let r;for(let a=0;a<t;a++){let i;try{i=await fetch(e,n)}catch(o){r=o,await nd(Math.min(2**a,8)*1e3);continue}if(i.status===429||i.status>=500){const o=parseFloat(i.headers.get("Retry-After")),l=(Number.isFinite(o)?o:Math.min(2**a,8))*1e3+Math.random()*300;r=new Error(`HTTP ${i.status}`),await nd(l);continue}return i}throw r||new Error("request failed")}let Ca=null,td=0,fr=null;async function Rb(){return Ca&&Date.now()<td-6e4?Ca:fr||(fr=(async()=>{try{const e=await xm(`${gm}/oauth/token`,{method:"POST",headers:{Authorization:`Basic ${wb}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});if(!e.ok)throw new Error(`Auth failed (HTTP ${e.status})`);const n=await e.json();return Ca=n.access_token,td=Date.now()+n.expires_in*1e3,Ca}finally{fr=null}})(),fr)}async function Ws(e){await Eb();try{const n=await Rb(),t=await xm(`${gm}${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}finally{_b()}}async function vm(e){const n=await Ws(`/clients?organizationId=${e}`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")),t}const Fo=new Map;async function ym(e){if(Fo.has(e))return Fo.get(e);const n=await Ws(`/clients/${e}/measurement-sessions`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>new Date(a.createdAt)-new Date(r.createdAt)),Fo.set(e,t),t}const Bo=new Map;async function Wi(e,n){if(Bo.has(n))return Bo.get(n);const t=await Ws(`/clients/${e}/measurement-sessions/${n}`);return Bo.set(n,t),t}const Tb=`<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posture Correction Form</title>
    <link rel="icon" type="image/png" href="./icon.ico">
    <link rel="shortcut icon" type="image/png" href="./icon.ico">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- tesseract.js (OCR) and supabase-js CDNs removed: this build only renders Bodydot-sourced programs. -->
    <script>
        // Redirect to mobile version if on mobile device
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768) {
            window.location.href = 'mobile.html';
        }
    <\/script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #displayPage[dir="rtl"] {
            font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            direction: rtl;
        }
        /* ── Arabic compact overrides ─────────────────────────────── */

        /* Tighten line-height for Cairo font across the whole display page */
        #displayPage[dir="rtl"] .container,
        #displayPage[dir="rtl"] .container * {
            line-height: 1.37;
        }

        /* Reduce table cell padding so rows aren't taller */
        #displayPage[dir="rtl"] td {
            padding: 5.5px 8px;
        }
        #displayPage[dir="rtl"] th {
            padding: 6.5px 8px;
        }
        #displayPage[dir="rtl"] .section-left-column td,
        #displayPage[dir="rtl"] .section-content-lower-body td {
            padding: 5px 8px;
        }
        #displayPage[dir="rtl"] .section-left-column th,
        #displayPage[dir="rtl"] .section-content-lower-body th {
            padding: 5px 8px;
        }
        #displayPage[dir="rtl"] table:has(#upperBodyExercises) th,
        #displayPage[dir="rtl"] table:has(#upperBodyExercises) td {
            padding: 8.5px 8.5px;
        }

        /* Exercise name alignment and font in RTL */
        #displayPage[dir="rtl"] .exercise-name {
            text-align: right !important;
            font-size: 11px;
        }
        /* Name header right-aligned in RTL (overrides inline style) */
        #displayPage[dir="rtl"] thead th:first-child {
            text-align: right !important;
        }
        #displayPage[dir="rtl"] .section-left-column .exercise-name,
        #displayPage[dir="rtl"] .section-content-lower-body .exercise-name {
            font-size: 11.5px;
        }
        #displayPage[dir="rtl"] th {
            text-align: right;
        }
        /* Keep sets/reps/duration headers and cells centered in RTL */
        #displayPage[dir="rtl"] thead th:not(:first-child),
        #displayPage[dir="rtl"] tbody td:not(.exercise-name) {
            text-align: center;
        }

        /* Tighten remark rows */
        #displayPage[dir="rtl"] .remark-item {
            direction: rtl;
            padding: 3.5px 9px;
            gap: 8px;
        }
        #displayPage[dir="rtl"] .remark-label {
            font-size: 11.5px;
            line-height: 1.2;
        }

        /* Section & block title sizes */
        #displayPage[dir="rtl"] .section-title {
            font-size: 16px;
        }
        #displayPage[dir="rtl"] .block-title {
            font-size: 13.5px;
            margin-bottom: 4px;
            padding-bottom: 3px;
        }
        #displayPage[dir="rtl"] .section-left-column .block-title {
            font-size: 14.5px;
        }

        /* exercises-block inner padding */
        #displayPage[dir="rtl"] .exercises-block {
            padding: 7px 8px;
        }
        #displayPage[dir="rtl"] .section-left-column .exercises-block {
            padding: 8px 8px;
        }
        #displayPage[dir="rtl"] .remarks {
            padding: 7px 8px;
            gap: 4px;
        }

        /* Column headers value/normal alignment */
        #displayPage[dir="rtl"] .remark-header .remark-value,
        #displayPage[dir="rtl"] .remark-item:not(.remark-header) .remark-value {
            padding-left: 0;
            padding-right: 50px;
        }
        #displayPage[dir="rtl"] .remark-header .remark-normal,
        #displayPage[dir="rtl"] .remark-item:not(.remark-header) .remark-normal {
            padding-left: 0;
            padding-right: 50px;
        }
        #displayPage[dir="rtl"] .comparison-indicator {
            margin-left: 0;
            margin-right: 4px;
        }
        #displayPage[dir="rtl"] .header-buttons {
            flex-direction: row-reverse;
        }
        #displayPage[dir="rtl"] .date {
            flex-direction: row-reverse;
        }
        .lang-toggle {
            display: flex;
            align-items: center;
            gap: 6px;
            background: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 20px;
            padding: 4px 14px;
            font-size: 13px;
            font-weight: 600;
            color: #333;
            user-select: none;
            white-space: nowrap;
        }
        .lang-toggle .lang-option {
            padding: 2px 8px;
            border-radius: 14px;
            transition: background 0.2s, color 0.2s;
            cursor: pointer;
        }
        .lang-toggle .lang-option:hover {
            background: #e0e0e0;
        }
        .lang-toggle .lang-option.active {
            background: #1a73e8;
            color: white;
        }
        .lang-toggle .lang-option.active:hover {
            background: #1a73e8;
        }
        @media print {
            .lang-toggle { display: none !important; }
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: white;
            padding: 0;
            color: #1B3448;
            background-image: url('background.png');
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 900px auto; /* Change 600px to adjust width, or use 'auto 800px' to adjust height */
            background-attachment: fixed;
        }

        .container {
            max-width: 100%;
            margin: 15px auto 0;
            background: transparent;
            padding: 5px 25px 15px;
            box-shadow: none;
            min-height: 95vh;
            display: flex;
            flex-direction: column;
        }

        /* Input Page Styles */
        .page {
            display: none;
        }

        .page.active {
            display: block;
        }

        #inputPage {
            background: linear-gradient(135deg, #5B9FA4 0%, #1B3448 100%);
            min-height: 100vh;
            padding: 20px 20px 5px;
            position: relative;
        }

        #inputPage::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('background 2.png') center/cover no-repeat;
            opacity: 0.15;
            z-index: 0;
            pointer-events: none;
        }

        #automatedPage {
            background: linear-gradient(135deg, #5B9FA4 0%, #1B3448 100%);
            min-height: 100vh;
            padding: 20px 20px 5px;
            position: relative;
        }

        #automatedPage::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('background 2.png') center/cover no-repeat;
            opacity: 0.15;
            z-index: 0;
            pointer-events: none;
        }

        .input-page {
            max-width: 1400px;
            margin: 0 auto;
            background: transparent;
            padding: 0;
            position: relative;
            z-index: 1;
        }

        .input-header {
            display: flex;
            flex-direction: column;
            padding: 20px 30px;
            background: white;
            border-radius: 8px;
            margin-bottom: 25px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            border: 2px solid #e9ecef;
        }

        .header-top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .input-header h1 {
            color: #1B3448;
            font-size: 20px;
            margin: 0;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .input-header p {
            color: #666;
            font-size: 13px;
            margin: 5px 0 0 0;
        }

        .input-header img {
            height: 50px;
            margin-right: 20px;
        }

        .header-content {
            display: flex;
            align-items: center;
        }

        .header-client-inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }

        .client-inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin-bottom: 25px;
            padding: 20px 25px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .input-group {
            display: flex;
            flex-direction: column;
        }

        .input-group label {
            font-weight: 600;
            color: #1B3448;
            margin-bottom: 8px;
            font-size: 14px;
        }

        .input-group label .required {
            color: #dc3545;
        }

        .input-group input {
            padding: 10px 12px;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            font-size: 14px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            transition: all 0.3s;
        }

        .input-group input:focus {
            outline: none;
            border-color: #5B9FA4;
            box-shadow: 0 0 0 3px rgba(91, 159, 164, 0.1);
        }

        .test-section {
            margin-bottom: 25px;
            background: white;
            padding: 20px 30px;
            border-radius: 8px;
            border: 2px solid #e9ecef;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .test-section-title {
            font-size: 20px;
            font-weight: 700;
            color: #1B3448;
            margin-bottom: 20px;
            padding-bottom: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .measurement-inputs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-left: 0;
        }

        @media (max-width: 1200px) {
            .measurement-inputs {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .measurement-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 6px;
            transition: all 0.2s;
        }

        .measurement-field:hover {
            background: #e9ecef;
        }

        .measurement-field label {
            font-size: 12px;
            color: #1B3448;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }

        .measurement-field input {
            padding: 8px 10px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            font-size: 13px;
            transition: border-color 0.2s;
        }

        .measurement-field input:focus {
            outline: none;
            border-color: #5B9FA4;
        }

        .color-picker {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .color-btn {
            width: 32px;
            height: 32px;
            padding: 0;
            border: 3px solid transparent;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            opacity: 0.3;
        }

        .color-btn.green {
            background: #28a745;
        }

        .color-btn.green:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(40, 167, 69, 0.4);
            opacity: 0.6;
        }

        .color-btn.green.selected {
            opacity: 1;
        }

        .color-btn.red {
            background: #dc3545;
        }

        .color-btn.red:hover {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(220, 53, 69, 0.4);
            opacity: 0.6;
        }

        .color-btn.red.selected {
            opacity: 1;
        }

        .measurement-field select {
            padding: 8px 10px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            font-size: 13px;
            background: white;
            cursor: pointer;
            transition: border-color 0.2s;
        }

        .measurement-field select:focus {
            outline: none;
            border-color: #5B9FA4;
        }

        .btn-primary {
            background: linear-gradient(135deg, #5B9FA4 0%, #1B3448 100%);
            color: white;
            border: none;
            padding: 14px 40px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(27, 52, 72, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(27, 52, 72, 0.4);
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
            border: none;
            padding: 14px 40px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(27, 52, 72, 0.3);
        }

        .btn-secondary:hover {
            background: #5a6268;
            transform: translateY(-1px);
        }

        .button-group {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e9ecef;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #5B9FA4;
            position: relative;
        }

        .header-buttons {
            position: static;
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            margin-right: 40px;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .logo {
            height: 52px;
        }

        .client-info h1 {
            color: #1B3448;
            font-size: 21px;
            margin-bottom: 5px;
        }

        .client-info p {
            color: #5B9FA4;
            font-size: 13px;
        }

        .date {
            text-align: right;
        }

        .date label {
            font-size: 12px;
            color: #666;
            display: block;
            margin-bottom: 0px;
            padding: 0 12px;
        }

        .date-value {
            padding: 8px 12px;
            font-size: 14px;
            color: #1B3448;
            font-weight: 600;
        }

        .content {
            display: grid;
            grid-template-columns: 1fr 1fr 1.2fr;
            gap: 10px;
            flex: 1;
            overflow: visible;
            align-items: stretch;
        }

        .section {
            background: #f8f9fa;
            border-radius: 6px;
            padding: 7px;
            border-left: 3px solid #5B9FA4;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .section-left-column {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-self: stretch;
        }

        .section-content-lower-body {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 0 5px;
            height: 100%;
        }
        
        .section-assessment-only {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 0 5px;
            height: 100%;
        }
        
        .section-assessment-only > div {
            display: flex;
            flex-direction: column;
        }

        .section-assessment-only > div:last-child {
            flex: 1;
        }

        .section-assessment-only > div .remarks {
            flex: 1;
        }

        #withinRangeResults,
        #outOfRangeResults {
            gap: 0;
        }

        #withinRangeResults .remark-item,
        #outOfRangeResults .remark-item {
            padding: 8px 9px;
        }

        #withinRangeResults .remark-item:not(.remark-header),
        #outOfRangeResults .remark-item:not(.remark-header) {
            flex: 1;
        }

        .section-title {
            color: #1B3448;
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 8px;
            padding: 0 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .section-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex: 1;
            padding: 0 5px;
        }

        .exercises-block {
            background: white;
            padding: 7px 10px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        .exercises-block table {
            flex: 1;
        }
        
        .section-content-lower-body .exercises-block {
            padding: 9px 10px;
        }
        
        .section-content-lower-body .exercises-block table {
            flex: 1;
        }

        .block-title {
            font-size: 14px;
            font-weight: 600;
            color: #5B9FA4;
            margin-bottom: 6px;
            padding-bottom: 4px;
            border-bottom: 2px solid #5B9FA4;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .section-content-lower-body .block-title {
            font-size: 15px;
            margin-bottom: 8px;
            padding-bottom: 6px;
        }

        .sets-reps-container {
            display: flex;
            gap: 20px;
        }

        /* Upper Body & Neck positioning */
        .upperbody-sets-label {
            margin-right: 40px; /* Adjust this to move Upper Body Sets left/right */
        }

        .upperbody-reps-label {
            margin-right: 45px; /* Adjust this to move Upper Body Reps left/right */
        }

        /* Lower Body & Spine positioning */
        .lowerbody-sets-label {
            margin-right: 18px; /* Adjust this to move Lower Body Sets left/right */
        }

        .lowerbody-reps-label {
            margin-right: 23px; /* Adjust this to move Lower Body Reps left/right */
        }

        /* Stretching positioning */
        .stretching-sets-label {
            margin-right: 4px; /* Adjust this to move Stretching Sets left/right */
        }

        .stretching-reps-label {
            margin-right: 19px; /* Adjust this to move Stretching Reps left/right */
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }

        thead {
            background: #3d5a6d;
            color: white;
        }

        th {
            padding: 7px 10px;
            text-align: center;
            font-weight: 600;
            font-size: 12px;
        }
        
        th:first-child {
            text-align: left;
        }

        td {
            padding: 6px 10px;
            text-align: center;
            border-bottom: 1px solid #e0e0e0;
        }
        
        td:first-child {
            text-align: left;
        }
        
        .section-content-lower-body td {
            padding: 8px 10px;
        }
        
        .section-content-lower-body th {
            padding: 8px 10px;
        }

        /* Stretching table row height — adjust padding here */
        #stretchingExercises td,
        table:has(#stretchingExercises) th {
            padding: 8px 10px;
        }

        tbody tr:nth-child(even) {
            background: #f0f8f9;
        }

        tbody tr:hover {
            background: #e0f2f4 !important;
        }

        .exercise-name {
            text-align: left !important;
            font-size: 11px;
            color: #1B3448;
        }

        /* Center the numeric columns (sets/reps/duration) */
        thead th:not(:first-child),
        tbody td:not(.exercise-name) {
            text-align: center;
        }
        
        .section-content-lower-body .exercise-name {
            font-size: 12px;
            font-weight: 500;
        }
        
        .section-left-column .section:nth-child(2) {
            flex: 1;
        }
        
        .section-left-column .exercises-block {
            padding: 9.5px 10px;
        }
        
        .section-left-column td {
            padding: 8px 10px;
        }
        
        .section-left-column th {
            padding: 8px 10px;
        }
        
        .section-left-column .block-title {
            font-size: 15px;
            margin-bottom: 8px;
            padding-bottom: 6.5px;
        }
        
        .section-left-column .exercise-name {
            font-size: 12px;
            font-weight: 500;
        }

        table:has(#upperBodyExercises) th,
        table:has(#upperBodyExercises) td {
            padding: 8.75px 8.75px;
        }

        .remarks {
            background: white;
            padding: 8px 10px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .remark-item {
            display: grid;
            grid-template-columns: 1fr 100px 110px;
            gap: 12px;
            align-items: center;
            padding: 4px 9px;
            font-size: 12px;
            border-bottom: 1px dashed #e0e0e0;
            border-radius: 3px;
            transition: background 0.2s;
        }
        
        .remark-item:hover {
            background: #f8f9fa;
        }

        .remark-item:last-child {
            border-bottom: none;
        }
        
        .remark-item.last-visible {
            border-bottom: none;
        }

        .remark-label {
            font-weight: 500;
            color: #1B3448;
        }

        .remark-value {
            color: #1B3448;
            font-weight: 600;
            font-size: 11px;
            padding-left: 40px;
        }
        
        .remark-item:not(.remark-header) .remark-value {
            padding-left: 45px;
            white-space: nowrap;
            text-align: center;
        }
        
        .remark-normal {
            color: #6c757d;
            font-size: 11px;
            font-weight: 400;
            padding-left: 40px;
        }
        
        .remark-item:not(.remark-header) .remark-normal {
            padding-left: 28px;
            text-align: center;
        }
        
        .remark-header {
            font-weight: 600;
            color: #1B3448;
            background: transparent !important;
            border-bottom: none !important;
            padding: 6px 9px !important;
        }
        
        .remark-header .remark-value,
        .remark-header .remark-normal {
            font-size: 11px;
            font-weight: 600;
            color: #1B3448;
        }

        .abnormal {
            color: #d9534f !important;
        }

        .middle {
            color: #f0ad4e !important;
        }

        .normal {
            color: #5cb85c !important;
        }

        .sets-reps-header {
            background: #5B9FA4 !important;
        }

        @media screen and (max-width: 1200px) {
            .content {
                grid-template-columns: 1fr;
                overflow-y: auto;
            }
            .container {
                height: auto;
            }
        }

        @media print {
            @page {
                size: 410mm 296mm;
                margin: 0;
            }

            body {
                margin: 0;
                padding: 0;
                background: white;
                background-image: url('background.png');
                background-repeat: no-repeat;
                background-position: right center;
                background-size: 1050px auto;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .notification-toast {
                display: none !important;
            }

            #inputPage {
                display: none !important;
            }

            #displayPage {
                display: block !important;
            }

            .page {
                display: none !important;
            }

            .page.active {
                display: block !important;
            }

            .container {
                margin: 15px auto 0;
                padding: 10px 25px 30px;
                box-shadow: none;
                display: flex;
                flex-direction: column;
                max-width: 100%;
                min-height: unset;
            }

            .content {
                display: grid !important;
                grid-template-columns: 1fr 1fr 1.2fr !important;
                gap: 10px !important;
            }

            .header-buttons {
                display: none !important;
            }

            .exercises-block,
            .remarks {
                box-shadow: none !important;
                border: 1px solid #dee2e6 !important;
            }

            .section {
                box-shadow: none !important;
            }
        }

        .measurement-field.pelvic-tilt-row {
            display: flex;
            flex-direction: column;
        }

        .measurement-field.pelvic-tilt-row > div {
            display: flex;
            gap: 10px;
            width: 100%;
        }

        .measurement-field.pelvic-tilt-row input {
            flex: 1;
            min-width: 0;
        }

        .measurement-field.pelvic-tilt-row select {
            flex: 1;
            min-width: 0;
        }

        /* Autocomplete dropdown */
        .autocomplete-container {
            position: relative;
            flex: 1;
        }

        .autocomplete-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #dee2e6;
            border-top: none;
            border-radius: 0 0 4px 4px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: none;
        }

        .autocomplete-dropdown.active {
            display: block;
        }

        .autocomplete-item {
            padding: 10px 15px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f0f0f0;
        }

        .autocomplete-item:hover {
            background: #f8f9fa;
        }

        .autocomplete-item:last-child {
            border-bottom: none;
        }

        .autocomplete-name {
            font-weight: 500;
            color: #1B3448;
        }

        .autocomplete-date {
            font-size: 12px;
            color: #6c757d;
        }

        .autocomplete-empty {
            padding: 15px;
            text-align: center;
            color: #999;
            font-size: 13px;
        }

        /* Comparison indicators */
        .comparison-indicator {
            display: inline-block;
            margin-left: 8px;
            font-size: 14px;
            vertical-align: middle;
            font-weight: bold;
        }

        .comparison-improved {
            color: #28a745;
        }

        .comparison-worsened {
            color: #dc3545;
        }

        .comparison-same {
            color: #6c757d;
        }

        /* Modal styles */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
            align-items: center;
            justify-content: center;
        }

        .modal-overlay.active {
            display: flex;
        }

        .modal-content {
            background: white;
            border-radius: 8px;
            padding: 30px;
            max-width: 800px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #5B9FA4;
            padding-bottom: 15px;
        }

        .modal-header h2 {
            margin: 0;
            color: #1B3448;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
            color: #6c757d;
            line-height: 1;
        }

        .modal-close:hover {
            color: #1B3448;
        }

        .history-item {
            padding: 15px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .history-item:hover {
            background: #f8f9fa;
        }

        .history-date {
            font-weight: 600;
            color: #1B3448;
        }

        .history-actions {
            display: flex;
            gap: 10px;
        }

        @keyframes toastSlideIn {
            from {
                transform: translateY(80px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes toastSlideOut {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(80px);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <!-- INPUT PAGE -->
    <div id="inputPage" class="page active">
        <div class="input-page">
            <div class="input-header">
                <div class="header-top-row">
                    <div class="header-content">
                        <img src="FIT_LOGO.png" alt="Logo" style="height: 50px; margin-right: 20px;">
                        <div>
                            <h1>Posture Correction Assessment Form</h1>
                            <p style="color: #666; margin: 5px 0 0 0; font-size: 13px;">Enter client information and measurement data</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input type="file" id="imageUpload" accept="image/*" style="display: none;" onchange="processImages(event)">
                        <button type="button" onclick="autoFillForm()" class="btn-primary" style="background: #6c757d;">Auto Fill (Test)</button>
                        <button type="button" onclick="goToAutomated()" class="btn-primary" style="background:#117a65;">Automated</button>
                        <button type="submit" form="assessmentForm" class="btn-primary">Generate Form</button>
                    </div>
                </div>
                
                <!-- Client Information -->
                <div class="header-client-inputs">
                    <div class="input-group autocomplete-container">
                        <label for="clientName">Client Name</label>
                        <input type="text" id="clientName" required placeholder="Enter client name" autocomplete="off">
                        <div id="autocompleteDropdown" class="autocomplete-dropdown"></div>
                    </div>
                    <div class="input-group">
                        <label for="assessmentDate">Assessment Date</label>
                        <input type="date" id="assessmentDate" required>
                    </div>

                </div>
            </div>



            <form id="assessmentForm">

                <!-- STANDING FRONT -->
                <div class="test-section">
                    <div class="test-section-title" style="display: flex; justify-content: space-between; align-items: center;">
                        <span>STANDING FRONT</span>
                        <button type="button" onclick="scanSection('standingFront')" style="background: #6c757d; border: none; color: white; padding: 6px 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 5px;" title="Scan Standing Front image">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="measurement-inputs">
                        <div class="measurement-field">
                            <label>Left Shoulder Slope</label>
                            <input type="number" step="0.1" id="leftShoulderSlope" placeholder="e.g., 19.2">
                        </div>
                        <div class="measurement-field">
                            <label>Left HKA Angle</label>
                            <input type="number" step="0.1" id="leftHKA" placeholder="e.g., -0.3">
                        </div>
                        <div class="measurement-field">
                            <label>Right Shoulder Slope</label>
                            <input type="number" step="0.1" id="rightShoulderSlope" placeholder="e.g., 23.0">
                        </div>
                        <div class="measurement-field">
                            <label>Right HKA Angle</label>
                            <input type="number" step="0.1" id="rightHKA" placeholder="e.g., -0.2">
                        </div>
                        <div class="measurement-field pelvic-tilt-row">
                            <label>Pelvic Tilt</label>
                            <div>
                                <input type="number" step="0.1" id="pelvicTilt" placeholder="e.g., -0.4">
                                <select id="pelvicTiltSide" style="padding: 8px 12px; border: 1px solid #dee2e6; border-radius: 4px; font-size: 13px;">
                                    <option value="">Select</option>
                                    <option value="Left">Left</option>
                                    <option value="Right">Right</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- STANDING RIGHT -->
                <div class="test-section">
                    <div class="test-section-title" style="display: flex; justify-content: space-between; align-items: center;">
                        <span>STANDING RIGHT</span>
                        <button type="button" onclick="scanSection('standingRight')" style="background: #6c757d; border: none; color: white; padding: 6px 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 5px;" title="Scan Standing Right image">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="measurement-inputs">
                        <div class="measurement-field">
                            <label>Forward Head Posture Angle</label>
                            <input type="number" step="0.1" id="forwardHeadRight" placeholder="e.g., 32.4">
                        </div>
                        <div class="measurement-field">
                            <label>Rounded Shoulder Angle</label>
                            <input type="number" step="0.1" id="roundedShoulderRight" placeholder="e.g., 38.6">
                        </div>
                        <div class="measurement-field">
                            <label>Thoracic Kyphosis Angle</label>
                            <input type="number" step="0.1" id="thoracicKyphosisRight" placeholder="e.g., 48.1">
                        </div>
                        <div class="measurement-field">
                            <label>Lumbar Lordosis Angle</label>
                            <input type="number" step="0.1" id="lumbarLordosisRight" placeholder="e.g., 57.7">
                        </div>
                        <div class="measurement-field">
                            <label>Kendall Knee Angle</label>
                            <input type="number" step="0.1" id="kendallKneeRight" placeholder="e.g., 8.6">
                        </div>
                    </div>
                </div>

                <!-- STANDING LEFT -->
                <div class="test-section">
                    <div class="test-section-title" style="display: flex; justify-content: space-between; align-items: center;">
                        <span>STANDING LEFT</span>
                        <button type="button" onclick="scanSection('standingLeft')" style="background: #6c757d; border: none; color: white; padding: 6px 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 5px;" title="Scan Standing Left image">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="measurement-inputs">
                        <div class="measurement-field">
                            <label>Forward Head Angle</label>
                            <input type="number" step="0.1" id="forwardHeadLeft" placeholder="e.g., 35.9">
                        </div>
                        <div class="measurement-field">
                            <label>Rounded Shoulder Angle</label>
                            <input type="number" step="0.1" id="forwardShoulderLeft" placeholder="e.g., 42.8">
                        </div>
                        <div class="measurement-field">
                            <label>Thoracic Kyphosis</label>
                            <input type="number" step="0.1" id="thoracicKyphosisLeft" placeholder="e.g., 46.1">
                        </div>
                        <div class="measurement-field">
                            <label>Lumbar Lordosis</label>
                            <input type="number" step="0.1" id="lumbarLordosisLeft" placeholder="e.g., 55.7">
                        </div>
                        <div class="measurement-field">
                            <label>Kendall Knee Angle</label>
                            <input type="number" step="0.1" id="kendallKneeLeft" placeholder="e.g., 11.5">
                        </div>
                    </div>
                </div>

                <!-- OVERHEAD SQUAT -->
                <div class="test-section">
                    <div class="test-section-title" style="display: flex; justify-content: space-between; align-items: center;">
                        <span>OVERHEAD SQUAT</span>
                        <button type="button" onclick="scanSection('overheadSquat')" style="background: #6c757d; border: none; color: white; padding: 6px 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 5px;" title="Scan Overhead Squat image">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="measurement-inputs">
                        <div class="measurement-field">
                            <label>Shoulder Stability</label>
                            <input type="number" step="0.1" id="shoulderStability" placeholder="e.g., 131.9">
                        </div>
                        <div class="measurement-field">
                            <label>Squat Depth</label>
                            <input type="number" step="0.1" id="squatDepth" placeholder="e.g., 52.2">
                        </div>
                        <div class="measurement-field">
                            <label>Spinal Neutrality</label>
                            <input type="number" step="0.1" id="spineNeutrality" placeholder="e.g., 59.0">
                        </div>
                        <div class="measurement-field">
                            <label>Pelvic Stability</label>
                            <input type="number" step="0.1" id="pelvicStability" placeholder="e.g., 0.2">
                        </div>
                    </div>
                </div>

                <!-- TOE TOUCH TEST -->
                <div class="test-section">
                    <div class="test-section-title" style="display: flex; justify-content: space-between; align-items: center;">
                        <span>TOE TOUCH TEST</span>
                        <button type="button" onclick="scanSection('toeTouchTest')" style="background: #6c757d; border: none; color: white; padding: 6px 10px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 5px;" title="Scan Toe Touch Test image">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="measurement-inputs">
                        <div class="measurement-field">
                            <label>Knee Extension Angle</label>
                            <input type="number" step="0.1" id="kneeExtension" placeholder="e.g., 177.5">
                        </div>
                        <div class="measurement-field">
                            <label>Finger to Floor</label>
                            <input type="number" step="0.1" id="fingerToFloor" placeholder="e.g., 15.6">
                        </div>
                        <div class="measurement-field">
                            <label>Hip Hinge Angle</label>
                            <input type="number" step="0.1" id="hipHinge" placeholder="e.g., 83.1">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>



    <!-- AUTOMATED PAGE -->
    <div id="automatedPage" class="page">
        <div class="input-page">
            <div class="input-header">
                <div class="header-top-row">
                    <div class="header-content">
                        <img src="FIT_LOGO.png" alt="Logo" style="height: 50px; margin-right: 20px;">
                        <div>
                            <h1>Automated PDF Generation</h1>
                            <p style="color: #666; margin: 5px 0 0 0; font-size: 13px;">Select a center, then generate reports for each client.</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <button onclick="goBackFromAutomated()" class="btn-secondary">← Back to Form</button>
                    </div>
                </div>
            </div>

            <!-- Org selector -->
            <div id="autoOrgList" style="display:flex;gap:16px;margin-bottom:24px;flex-wrap:wrap;"></div>

            <!-- Client list area -->
            <div id="autoClientArea" style="display:none;background:white;border-radius:8px;padding:20px 30px;border:2px solid #e9ecef;box-shadow:0 4px 12px rgba(0,0,0,0.08);margin-bottom:25px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
                    <h3 id="autoOrgTitle" style="margin:0;font-size:20px;font-weight:700;color:#1B3448;text-transform:uppercase;letter-spacing:0.5px;flex:1;"></h3>
                    <input id="autoClientSearch" type="text" placeholder="Filter clients…" oninput="filterAutoClients()" style="padding:8px 12px;border:2px solid #e0e0e0;border-radius:6px;font-size:13px;max-width:260px;font-family:inherit;">
                </div>
                <div id="autoClientList"></div>
            </div>
        </div>
    </div>

    <!-- DISPLAY PAGE -->
    <div id="displayPage" class="page display-page">
    <div class="container">
        <div class="header">
            <div class="header-left">
                <img src="FIT_LOGO.png" alt="Logo" class="logo">
                <div class="client-info">
                    <h1 data-i18n="programTitle">Posture Correction Program</h1>
                    <p id="displayName"></p>
                </div>
            </div>
            <div class="header-buttons">
                <div class="lang-toggle">
                    <span class="lang-option active" id="langBILINGUAL" onclick="setLanguage('bilingual')">EN/AR</span>
                    <span class="lang-option" id="langEN" onclick="setLanguage('en')">EN</span>
                    <span class="lang-option" id="langAR" onclick="setLanguage('ar')">AR</span>
                </div>
                <button onclick="downloadPDF()" class="btn-primary">Download PDF</button>
            </div>
            <div class="date">
                <label data-i18n="dateLabel">Date:</label>
                <div class="date-value" id="displayDate"></div>
            </div>
        </div>

        <div class="content">
            <!-- LEFT COLUMN: UPPER BODY + STRETCHING -->
            <div class="section-left-column">
                <!-- UPPER BODY AND NECK SECTION -->
                <div class="section">
                    <div class="section-title" data-i18n="upperBodyNeck">Upper body & neck</div>
                    <div class="section-content">
                        <div class="exercises-block">
                        <div class="block-title">
                            <span data-i18n="exercises">Exercises</span>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th style="text-align: left;" data-i18n="colName">Name</th>
                                    <th data-i18n="colSets">Sets</th>
                                    <th data-i18n="colReps">Reps</th>
                                </tr>
                            </thead>
                            <tbody id="upperBodyExercises">
                                <tr>
                                    <td class="exercise-name">Single hand shrugs</td>
                                    <td>2</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Farmer walk</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>10</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Rowing Back Machine Single Hand</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Reverse flies DB</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Rowing Back DB</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Rowing Back Cable</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Reverse Flies Cable</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

                <!-- STRETCHING SECTION -->
                <div class="section">
                    <div class="section-title" data-i18n="stretching">Stretching</div>
                    <div class="section-content">
                        <div class="exercises-block">
                        <div class="block-title">
                            <span data-i18n="exercises">Exercises</span>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th style="text-align: left;" data-i18n="colName">Name</th>
                                    <th data-i18n="colSets">Sets</th>
                                    <th data-i18n="colDuration">Duration</th>
                                </tr>
                            </thead>
                            <tbody id="stretchingExercises">
                                <tr>
                                    <td class="exercise-name">Hamstring Stretching</td>
                                    <td>2</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Pigeon stretching</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1 min</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Chest Stretching</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1 min</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Child Pose</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1 min</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Hip flexors stretching</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1 min</td>
                                    <td>1 min</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MIDDLE COLUMN: LOWER BODY AND SPINE -->
            <div class="section">
                <div class="section-title" data-i18n="lowerBodySpine">Lower body & spine</div>
                <div class="section-content-lower-body">
                    <div class="exercises-block">
                        <div class="block-title">
                            <span data-i18n="exercises">Exercises</span>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th style="text-align: left;" data-i18n="colName">Name</th>
                                    <th data-i18n="colSets">Sets</th>
                                    <th data-i18n="colReps">Reps</th>
                                </tr>
                            </thead>
                            <tbody id="lowerBodyExercises">
                                <tr>
                                    <td class="exercise-name">Anterior pelvic tilt (Lying)</td>
                                    <td>2</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Dead Bug</td>
                                    <td>2</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Reverse crunches</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Half superman</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Lower back machine</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td class="exercise-name">Bird dog</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>15</td>
                                    <td>15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: ALL ASSESSMENT RESULTS -->
            <div class="section">
                <div class="section-title" data-i18n="assessmentResults">Assessment Results</div>
                <div class="section-assessment-only">
                    <!-- Within Range Section -->
                    <div>
                        <div class="block-title">
                            <span data-i18n="withinRange">Within Range</span>
                        </div>
                        <div class="remark-item remark-header">
                            <span class="remark-label"></span>
                            <span class="remark-value" data-i18n="colResults">Results</span>
                            <span class="remark-normal" data-i18n="colNormal">Normal</span>
                        </div>
                        <div class="remarks" id="withinRangeResults">
                            <!-- Will be populated dynamically -->
                        </div>
                    </div>
                    
                    <!-- Out of Range Section -->
                    <div>
                        <div class="block-title">
                            <span data-i18n="outOfRange">Out of Range</span>
                        </div>
                        <div class="remark-item remark-header">
                            <span class="remark-label"></span>
                            <span class="remark-value" data-i18n="colResults">Results</span>
                            <span class="remark-normal" data-i18n="colNormal">Normal</span>
                        </div>
                        <div class="remarks" id="outOfRangeResults">
                            <!-- Will be populated dynamically -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <script>
        console.log('Script starting to load...');

        // ====================
        // LANGUAGE / i18n SYSTEM
        // ====================
        let currentLang = 'en';
        let currentMode = 'bilingual';

        const translations = {
            en: {
                // Page header
                pageTitle: 'Posture Correction Assessment Form',
                pageSubtitle: 'Enter client information and measurement data',
                autoFill: 'Auto Fill (Test)',
                generateForm: 'Generate Form',
                clientName: 'Client Name',
                clientNamePlaceholder: 'Enter client name',
                assessmentDate: 'Assessment Date',
                // Section titles (input)
                sectionStandingFront: 'STANDING FRONT',
                sectionStandingRight: 'STANDING RIGHT',
                sectionStandingLeft: 'STANDING LEFT',
                sectionOverheadSquat: 'OVERHEAD SQUAT',
                sectionToeTouch: 'TOE TOUCH TEST',
                // Measurement labels
                leftShoulderSlope: 'Left Shoulder Slope',
                leftHKAAngle: 'Left HKA Angle',
                rightShoulderSlope: 'Right Shoulder Slope',
                rightHKAAngle: 'Right HKA Angle',
                pelvicTilt: 'Pelvic Tilt',
                coronalBalance: 'Coronal Balance',
                forwardHeadPostureAngle: 'Forward Head Posture Angle',
                t1PelvicAngle: 'T1 Pelvic Angle',
                roundedShoulderAngle: 'Rounded Shoulder Angle',
                sagittalVerticalAxis: 'Sagittal Vertical Axis',
                thoracicKyphosisAngle: 'Thoracic Kyphosis Angle',
                lumbarLordosisAngle: 'Lumbar Lordosis Angle',
                anteriorPelvicTiltAngle: 'Anterior Pelvic Tilt Angle',
                kendallKneeAngle: 'Kendall Knee Angle',
                forwardHeadAngle: 'Forward Head Angle',
                thoracicKyphosis: 'Thoracic Kyphosis',
                lumbarLordosis: 'Lumbar Lordosis',
                shoulderStability: 'Shoulder Stability',
                squatDepth: 'Squat Depth',
                spinalNeutrality: 'Spinal Neutrality',
                pelvicStability: 'Pelvic Stability',
                kneeExtensionAngle: 'Knee Extension Angle',
                fingerToFloor: 'Finger to Floor',
                hipHingeAngle: 'Hip Hinge Angle',
                // Select options
                selectOption: 'Select',
                leftOption: 'Left',
                rightOption: 'Right',
                // Display page
                programTitle: 'Posture Correction Program',
                newProfile: 'New Profile',
                backToEdit: 'Back To Edit',
                downloadPDF: 'Download PDF',
                dateLabel: 'Date:',
                clientPrefix: 'Client:',
                // Section titles (display)
                lowerBodySpine: 'Lower body & spine',
                upperBodyNeck: 'Upper body & neck',
                stretching: 'Stretching',
                assessmentResults: 'Assessment Results',
                exercises: 'Exercises',
                // Table headers
                colName: 'Name',
                colSets: 'Sets',
                colReps: 'Reps',
                colDuration: 'Duration',
                colResults: 'Results',
                colNormal: 'Normal',
                withinRange: 'Within Range',
                outOfRange: 'Out of Range',
                // Measurement labels used in results
                ml_PelvicTilt: 'Pelvic Tilt',
                ml_CoronalBalance: 'Coronal Balance',
                ml_LeftHKA: 'Left HKA Angle',
                ml_RightHKA: 'Right HKA Angle',
                ml_LeftShoulderSlope: 'Left Shoulder Slope',
                ml_RightShoulderSlope: 'Right Shoulder Slope',
                ml_LumbarLordosisRight: 'Lumbar Lordosis Angle (Right)',
                ml_AntPelvicRight: 'Anterior Pelvic Tilt Angle (Right)',
                ml_T1Right: 'T1 Pelvic Angle (Right)',
                ml_SagRight: 'Sagittal Vertical Axis (Right)',
                ml_FHARight: 'Forward Head Posture Angle (Right)',
                ml_RSRight: 'Rounded Shoulder Angle (Right)',
                ml_TKRight: 'Thoracic Kyphosis Angle (Right)',
                ml_KKRight: 'Kendall Knee Angle (Right)',
                ml_LumbarLordosisLeft: 'Lumbar Lordosis Angle (Left)',
                ml_AntPelvicLeft: 'Anterior Pelvic Tilt Angle (Left)',
                ml_T1Left: 'T1 Pelvic Angle (Left)',
                ml_SagLeft: 'Sagittal Vertical Axis (Left)',
                ml_FHALeft: 'Forward Head Angle (Left)',
                ml_RSLeft: 'Rounded Shoulder Angle (Left)',
                ml_TKLeft: 'Thoracic Kyphosis Angle (Left)',
                ml_KKLeft: 'Kendall Knee Angle (Left)',
                ml_PelvicStability: 'Pelvic Stability',
                ml_SpinalNeutrality: 'Spinal Neutrality',
                ml_SquatDepth: 'Squat Depth',
                ml_ShoulderStability: 'Shoulder Stability',
                ml_HipHinge: 'Hip Hinge Angle',
                ml_FingerToFloor: 'Finger to Floor',
                ml_KneeExtension: 'Knee Extension Angle',
                // Exercise names (dynamic)
                ex_LeftUpperTrapStretch: 'Stretching left upper traps',
                ex_RightUpperTrapStretch: 'Stretching right upper traps',
                ex_ElbowPlank: 'Elbow plank',
                ex_SidePlank: 'Side plank',
                ex_RightHipHike: 'Right hip hike',
                ex_LeftHipHike: 'Left hip hike',
                ex_LeftHalfKneelingSideBend: 'Left half kneeling side bend',
                ex_RightHalfKneelingSideBend: 'Right half kneeling side bend',
                ex_SeatedHipAbduction: 'Seated hip abduction',
                ex_LeftGluteKickbacks: 'Left glute kickbacks',
                ex_RightGluteKickbacks: 'Right glute kickbacks',
                ex_ChinTucks: 'Chin tucks',
                ex_ReverseFlys: 'Reverse flys',
                ex_LeftPecDoorway: 'Left pec doorway stretch',
                ex_RightPecDoorway: 'Right pec doorway stretch',
                ex_CluteBridges: 'Glute bridges',
                ex_SwissBallDeadBug: 'Swiss ball dead bug',
                ex_SpineExtensions: 'Spine extensions',
                ex_CobraStretch: 'Cobra pose',
                ex_Crunches: 'Crunches',
                ex_CamelStretch: 'Camel stretch',
                ex_LowerBackExtensions: 'Lower back extensions',
                ex_CatStretch: 'Cat stretch',
                ex_SwissBallExtCrunch: 'Swiss ball extension to crunch',
                ex_CatCamelStretch: 'Cat-camel stretch',
                ex_LyingPosteriorPelvic: 'Lying posterior pelvic tilt',
                ex_HipFlexorFloor: 'Hip flexor floor stretch',
                ex_LyingAnteriorPelvic: 'Lying anterior pelvic tilt',
                ex_FigureFourFloor: 'Figure four floor stretch',
                ex_LyingAntPostPelvic: 'Lying anterior/posterior pelvic tilt',
                ex_WorldsGreatestStretch: "World's greatest stretch",
                ex_LeftLegExtensions: 'Left leg extensions',
                ex_LeftHamstringStretch: 'Left hamstring stretch',
                ex_LeftHamstringCurls: 'Left hamstring curls',
                ex_LeftStandingQuadStretch: 'Left standing quad stretch',
                ex_RightLegExtensions: 'Right leg extensions',
                ex_RightHamstringStretch: 'Right hamstring stretch',
                ex_RightHamstringCurls: 'Right hamstring curls',
                ex_RightStandingQuadStretch: 'Right standing quad stretch',
                ex_GobletSquat: 'Goblet squat',
                ex_HamQuadStretch: 'Hamstring/quads stretch',
                ex_YRaises: 'Y raises',
                ex_ChildPoseStretch: 'Child pose stretch',
                ex_KneeToWall: 'Knee to wall',
                ex_CalvesStretch: 'Calves stretch',
                ex_FrogPoseStretch: 'Frog pose stretch',
                ex_FullRomLegPress: 'Leg press full ROM',
                ex_TrxGarland: 'TRX assisted garland pose',
                ex_WallAssistedHinge: 'Wall assisted hinge',
                ex_LizardPoseStretch: 'Lizard pose stretch',
                ex_JeffersonCurl: 'Jefferson curl',
                ex_SeatedForwardFold: 'Seated forward fold stretch',
                ex_RomanianDeadlift: 'Romanian deadlift',
                ex_StiffLegDeadlift: 'Stiff leg deadlift',
                ex_HamstringStretching: 'Hamstring stretching',
                ex_SingleLegDeadlift: 'Single leg deadlift',
                ex_BarMilitaryPress: 'Bar military press',
                ex_ArnoldPress: 'Arnold press',
                ex_BentOverShoulderStretch: 'Stretching shoulder (bent over flexion)',
                ex_HipThrust: 'Hip thrust',
                ex_HipAdductions: 'Hip adductions',
                ex_HipAbductions: 'Hip abductions',
                ex_BackSquatsFullRom: 'Back squats full ROM',
                ex_GarlandPose: 'Garland pose (hip opening)',
                ex_HipAbductionCableLeft: 'Left hip abduction cable',
                ex_HipAbductionCableRight: 'Right hip abduction cable',
                ex_AdductorStretch: 'Stretching adductor',
                ex_SingleLegSquatsLeft: 'Single leg squats left',
                ex_SingleLegPressLeft: 'Single leg press left',
                ex_SingleLegSquatsRight: 'Single leg squats right',
                ex_SingleLegPressRight: 'Single leg press right',
                ex_Plank: 'Plank',
                ex_LegRaise: 'Leg raise',
                ex_SideCrunches: 'Side crunches',
                ex_HipFlexorStretch: 'Stretching hip flexors',
                ex_BackExtensions: 'Back extensions',
                ex_RowingBack: 'Rowing back',
                ex_SingleArmPushdownFront: 'Front single arm pushdown',
                ex_SingleArmPushdownSide: 'Side single arm pushdown',
                ex_SingleArmPushdownFrontLeft: 'Left front single arm pushdown',
                ex_SingleArmPushdownSideLeft: 'Left side single arm pushdown',
                ex_SingleArmPushdownFrontRight: 'Right front single arm pushdown',
                ex_SingleArmPushdownSideRight: 'Right side single arm pushdown',
                ex_FacePull: 'Face pull',
                ex_ChestStretch: 'Stretching chest',
                ex_ExternalRotation: 'External rotation',
                // Misc
                noExercises: 'No exercises based on measurements',
                notifSaved: '✓ Assessment saved successfully',
                notifError: 'Error saving assessment',
                notifLoaded: 'Loaded previous test for comparison',
            },
            ar: {
                // Page header
                pageTitle: 'استمارة تقييم تصحيح الوضعية',
                pageSubtitle: 'أدخل معلومات العميل وبيانات القياسات',
                autoFill: 'ملء تلقائي (اختبار)',
                generateForm: 'إنشاء النموذج',
                clientName: 'اسم العميل',
                clientNamePlaceholder: 'أدخل اسم العميل',
                assessmentDate: 'تاريخ التقييم',
                // Section titles (input)
                sectionStandingFront: 'الوقوف الأمامي',
                sectionStandingRight: 'الوقوف جانب أيمن',
                sectionStandingLeft: 'الوقوف جانب أيسر',
                sectionOverheadSquat: 'القرفصاء فوق الرأس',
                sectionToeTouch: 'اختبار لمس أصابع القدم',
                // Measurement labels
                leftShoulderSlope: 'ميل الكتف الأيسر',
                leftHKAAngle: 'زاوية HKA اليسرى',
                rightShoulderSlope: 'ميل الكتف الأيمن',
                rightHKAAngle: 'زاوية HKA اليمنى',
                pelvicTilt: 'إمالة الحوض',
                coronalBalance: 'التوازن التاجي',
                forwardHeadPostureAngle: 'زاوية وضع الرأس للأمام',
                t1PelvicAngle: 'زاوية T1 الحوضية',
                roundedShoulderAngle: 'زاوية الكتف المائل',
                sagittalVerticalAxis: 'المحور العمودي السهمي',
                thoracicKyphosisAngle: 'زاوية الحدب الصدري',
                lumbarLordosisAngle: 'زاوية القعس القطني',
                anteriorPelvicTiltAngle: 'زاوية إمالة الحوض الأمامية',
                kendallKneeAngle: 'زاوية ركبة كينيدال',
                forwardHeadAngle: 'زاوية الرأس للأمام',
                thoracicKyphosis: 'الحدب الصدري',
                lumbarLordosis: 'القعس القطني',
                shoulderStability: 'ثبات الكتف',
                squatDepth: 'عمق القرفصاء',
                spinalNeutrality: 'استقامة العمود الفقري',
                pelvicStability: 'ثبات الحوض',
                kneeExtensionAngle: 'زاوية تمديد الركبة',
                fingerToFloor: 'المسافة من الإصبع إلى الأرض',
                hipHingeAngle: 'زاوية مفصلة الورك',
                // Select options
                selectOption: 'اختر',
                leftOption: 'يسار',
                rightOption: 'يمين',
                // Display page
                programTitle: 'برنامج تصحيح الوضعية',
                newProfile: 'ملف جديد',
                backToEdit: 'العودة للتعديل',
                downloadPDF: 'تحميل PDF',
                dateLabel: 'التاريخ:',
                clientPrefix: 'العميل:',
                // Section titles (display)
                lowerBodySpine: 'الجسم السفلي والعمود الفقري',
                upperBodyNeck: 'الجسم العلوي والرقبة',
                stretching: 'تمارين التمدد',
                assessmentResults: 'نتائج التقييم',
                exercises: 'التمارين',
                // Table headers
                colName: 'الاسم',
                colSets: 'المجموعات',
                colReps: 'التكرارات',
                colDuration: 'المدة',
                colResults: 'النتائج',
                colNormal: 'الطبيعي',
                withinRange: 'ضمن النطاق الطبيعي',
                outOfRange: 'خارج النطاق الطبيعي',
                // Measurement labels used in results
                ml_PelvicTilt: 'إمالة الحوض',
                ml_CoronalBalance: 'التوازن التاجي',
                ml_LeftHKA: 'زاوية HKA اليسرى',
                ml_RightHKA: 'زاوية HKA اليمنى',
                ml_LeftShoulderSlope: 'ميل الكتف الأيسر',
                ml_RightShoulderSlope: 'ميل الكتف الأيمن',
                ml_LumbarLordosisRight: 'زاوية القعس القطني (يمين)',
                ml_AntPelvicRight: 'زاوية إمالة الحوض الأمامية (يمين)',
                ml_T1Right: 'زاوية T1 الحوضية (يمين)',
                ml_SagRight: 'المحور العمودي السهمي (يمين)',
                ml_FHARight: 'زاوية وضع الرأس للأمام (يمين)',
                ml_RSRight: 'زاوية الكتف المائل (يمين)',
                ml_TKRight: 'زاوية الحدب الصدري (يمين)',
                ml_KKRight: 'زاوية ركبة كينيدال (يمين)',
                ml_LumbarLordosisLeft: 'زاوية القعس القطني (يسار)',
                ml_AntPelvicLeft: 'زاوية إمالة الحوض الأمامية (يسار)',
                ml_T1Left: 'زاوية T1 الحوضية (يسار)',
                ml_SagLeft: 'المحور العمودي السهمي (يسار)',
                ml_FHALeft: 'زاوية الرأس للأمام (يسار)',
                ml_RSLeft: 'زاوية الكتف المائل (يسار)',
                ml_TKLeft: 'زاوية الحدب الصدري (يسار)',
                ml_KKLeft: 'زاوية ركبة كينيدال (يسار)',
                ml_PelvicStability: 'ثبات الحوض',
                ml_SpinalNeutrality: 'استقامة العمود الفقري',
                ml_SquatDepth: 'عمق القرفصاء',
                ml_ShoulderStability: 'ثبات الكتف',
                ml_HipHinge: 'زاوية مفصلة الورك',
                ml_FingerToFloor: 'المسافة من الإصبع إلى الأرض',
                ml_KneeExtension: 'زاوية تمديد الركبة',
                // Exercise names (dynamic)
                ex_LeftUpperTrapStretch: 'تمديد الترابيس يسار',
                ex_RightUpperTrapStretch: 'تمديد الترابيس يمين',
                ex_ElbowPlank: 'البلانك على الكوعين',
                ex_SidePlank: 'البلانك الجانبي',
                ex_RightHipHike: 'رفع الورك الأيمن',
                ex_LeftHipHike: 'رفع الورك الأيسر',
                ex_LeftHalfKneelingSideBend: 'الانحناء الجانبي على الركبة اليسرى',
                ex_RightHalfKneelingSideBend: 'الانحناء الجانبي على الركبة اليمنى',
                ex_SeatedHipAbduction: 'فرجة الورك جلوساً',
                ex_LeftGluteKickbacks: 'ركلات الأرداف اليسرى',
                ex_RightGluteKickbacks: 'ركلات الأرداف اليمنى',
                ex_ChinTucks: 'ثني الذقن',
                ex_ReverseFlys: 'الطيران العكسي',
                ex_LeftPecDoorway: 'تمدد عضلة الصدر اليسرى بالباب',
                ex_RightPecDoorway: 'تمدد عضلة الصدر اليمنى بالباب',
                ex_CluteBridges: 'جسر الأرداف',
                ex_SwissBallDeadBug: 'حشرة ميتة بالكرة السويسرية',
                ex_SpineExtensions: 'تمديد العمود الفقري',
                ex_CobraStretch: 'تمدد الظهر كوبرا',
                ex_Crunches: 'تقريب البطن',
                ex_CamelStretch: 'تمدد وضعية الجمل',
                ex_LowerBackExtensions: 'تمديد أسفل الظهر',
                ex_CatStretch: 'تمدد وضعية القطة',
                ex_SwissBallExtCrunch: 'تمديد إلى تقريب بالكرة السويسرية',
                ex_CatCamelStretch: 'تمدد القطة والجمل',
                ex_LyingPosteriorPelvic: 'إمالة الحوض الخلفية مستلقياً',
                ex_HipFlexorFloor: 'تمدد ثاني الفخذ أرضياً',
                ex_LyingAnteriorPelvic: 'إمالة الحوض الأمامية مستلقياً',
                ex_FigureFourFloor: 'تمدد الرقم 4 أرضياً',
                ex_LyingAntPostPelvic: 'إمالة الحوض الأمامية والخلفية مستلقياً',
                ex_WorldsGreatestStretch: 'أعظم تمدد في العالم',
                ex_LeftLegExtensions: 'تمديد الرجل اليسرى',
                ex_LeftHamstringStretch: 'تمدد أوتار الركبة اليسرى',
                ex_LeftHamstringCurls: 'ثني أوتار الركبة اليسرى',
                ex_LeftStandingQuadStretch: 'تمدد الفخذ الأيسر وقوفاً',
                ex_RightLegExtensions: 'تمديد الرجل اليمنى',
                ex_RightHamstringStretch: 'تمدد أوتار الركبة اليمنى',
                ex_RightHamstringCurls: 'ثني أوتار الركبة اليمنى',
                ex_RightStandingQuadStretch: 'تمدد الفخذ الأيمن وقوفاً',
                ex_GobletSquat: 'القرفصاء بالوزن الأمامي',
                ex_HamQuadStretch: 'تمدد أوتار الركبة والفخذ',
                ex_YRaises: 'رفع حرف Y',
                ex_ChildPoseStretch: 'تمدد وضعية الطفل',
                ex_KneeToWall: 'الركبة إلى الحائط',
                ex_CalvesStretch: 'تمدد عضلة الساق',
                ex_FrogPoseStretch: 'تمدد وضعية الضفدع',
                ex_FullRomLegPress: 'ضغط الساقين بنطاق كامل',
                ex_TrxGarland: 'وضعية الإكليل بمساعدة TRX',
                ex_WallAssistedHinge: 'مفصلة الورك بالحائط',
                ex_LizardPoseStretch: 'تمدد وضعية السحلية',
                ex_JeffersonCurl: 'كيرل جيفرسون',
                ex_SeatedForwardFold: 'تمدد الانحناء الأمامي جلوساً',
                ex_RomanianDeadlift: 'الديدلفت الروماني',
                ex_StiffLegDeadlift: 'الديدلفت برجلين مستقيمة',
                ex_HamstringStretching: 'تمديد عضلات الخلفية',
                ex_SingleLegDeadlift: 'ديدلفت رجل واحدة',
                ex_BarMilitaryPress: 'ضغط كتف بار مستقيم',
                ex_ArnoldPress: 'دمبل أرنولد',
                ex_BentOverShoulderStretch: 'إطالة الكتف بوضعية الانحناء',
                ex_HipThrust: 'رفع الحوض بالبار',
                ex_HipAdductions: 'تقريب الفخذ',
                ex_HipAbductions: 'فتح الحوض',
                ex_BackSquatsFullRom: 'سكوات خلفي كامل',
                ex_GarlandPose: 'سكوات ثابت عميق',
                ex_HipAbductionCableLeft: 'أرجل رفرفة خارجي كيبل يسار',
                ex_HipAbductionCableRight: 'أرجل رفرفة خارجي كيبل يمين',
                ex_AdductorStretch: 'تمديد الفخذ الداخلي',
                ex_SingleLegSquatsLeft: 'سكوات رجل واحدة يسار',
                ex_SingleLegPressLeft: 'ليج برس رجل واحدة يسار',
                ex_SingleLegSquatsRight: 'سكوات رجل واحدة يمين',
                ex_SingleLegPressRight: 'ليج برس رجل واحدة يمين',
                ex_Plank: 'بلانك',
                ex_LegRaise: 'رفع الأرجل',
                ex_SideCrunches: 'كرانش جانبي',
                ex_HipFlexorStretch: 'تمديد الورك الأمامي',
                ex_BackExtensions: 'رفع الظهر',
                ex_RowingBack: 'تمرين التجديف',
                ex_SingleArmPushdownFront: 'خفض الكتف أمامي',
                ex_SingleArmPushdownSide: 'خفض الكتف جانبي',
                ex_SingleArmPushdownFrontLeft: 'خفض الكتف أمامي يسار',
                ex_SingleArmPushdownSideLeft: 'خفض الكتف جانبي يسار',
                ex_SingleArmPushdownFrontRight: 'خفض الكتف أمامي يمين',
                ex_SingleArmPushdownSideRight: 'خفض الكتف جانبي يمين',
                ex_FacePull: 'تمرين سحب للوجه',
                ex_ChestStretch: 'تمديد الصدر',
                ex_ExternalRotation: 'دوران خارجي للكتف',
                // Misc
                noExercises: 'لا توجد تمارين بناءً على القياسات',
                notifSaved: '✓ تم حفظ التقييم بنجاح',
                notifError: 'خطأ في حفظ التقييم',
                notifLoaded: 'تم تحميل الاختبار السابق للمقارنة',
            }
        };

        function t(key) {
            return (translations[currentLang] && translations[currentLang][key]) ||
                   (translations['en'][key]) || key;
        }

        function toArabicNumerals(str) {
            const map = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'};
            return String(str).replace(/[0-9]/g, d => map[d]);
        }

        function numFmt(val) {
            return currentLang === 'ar' ? toArabicNumerals(String(val)) : String(val);
        }

        // Translate a reps/duration value: converts digits and unit words
        function translateReps(raw, lang) {
            if (lang !== 'ar') return String(raw);
            return toArabicNumerals(String(raw))
                .replace(/\\s*min\\s*/gi, ' د')
                .replace(/s$/i, 'ث');
        }

        // Translate unit words and Left/Right for Arabic
        function localiseText(str, lang) {
            if (lang !== 'ar') return str;
            return str
                .replace(/\\bLeft\\b/g, 'يسار')
                .replace(/\\bRight\\b/g, 'يمين')
                .replace(/\\bcm\\b/g, 'سم');
        }

        // Build a reverse map: translated text → translation key (for ex_ or ml_ prefixes)
        function buildKeyMap(prefix) {
            const map = {};
            Object.keys(translations.en).forEach(k => {
                if (k.startsWith(prefix)) {
                    if (translations.en[k]) map[translations.en[k]] = k;
                    if (translations.ar && translations.ar[k]) map[translations.ar[k]] = k;
                }
            });
            return map;
        }

        function setLanguage(lang) {
            currentMode = lang;
            currentLang = (lang === 'ar') ? 'ar' : 'en';
            const effectiveLang = currentLang;
            const html = document.documentElement;
            html.setAttribute('lang', effectiveLang);
            const displayPage = document.getElementById('displayPage');
            if (displayPage) displayPage.setAttribute('dir', effectiveLang === 'ar' ? 'rtl' : 'ltr');

            // Update toggle button visual state
            document.getElementById('langBILINGUAL').classList.toggle('active', lang === 'bilingual');
            document.getElementById('langEN').classList.toggle('active', lang === 'en');
            document.getElementById('langAR').classList.toggle('active', lang === 'ar');

            // Update all data-i18n elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[effectiveLang][key] !== undefined) {
                    el.textContent = translations[effectiveLang][key];
                }
            });

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[effectiveLang][key] !== undefined) {
                    el.placeholder = translations[effectiveLang][key];
                }
            });

            // Update displayName prefix if currently visible
            const displayName = document.getElementById('displayName');
            if (displayName && displayName.textContent) {
                const parts = displayName.textContent.split(': ');
                if (parts.length >= 2) {
                    displayName.textContent = t('clientPrefix') + ' ' + parts.slice(1).join(': ');
                }
            }

            // Re-translate exercise names
            const exKeyMap = buildKeyMap('ex_');
            document.querySelectorAll('.exercise-name[data-ex-key]').forEach(el => {
                const key = el.getAttribute('data-ex-key');
                const enName = translations.en[key] || key;
                const arName = translations.ar[key] || '';
                if (lang === 'bilingual' && arName) {
                    el.textContent = \`\${enName} / \${arName}\`;
                } else {
                    el.textContent = t(key);
                }
            });

            // Re-translate measurement field labels
            document.querySelectorAll('.remark-label[data-ml-key]').forEach(el => {
                el.textContent = t(el.getAttribute('data-ml-key'));
            });

            // Reformat date
            const displayDateEl = document.getElementById('displayDate');
            const rawDate = displayDateEl && displayDateEl.getAttribute('data-date-raw');
            if (rawDate) {
                const d = new Date(rawDate + 'T12:00:00');
                displayDateEl.textContent = d.toLocaleDateString(
                    lang === 'ar' ? 'ar-SA' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                );
            }

            // Reformat sets/reps cells in exercise tables
            document.querySelectorAll('[data-num]').forEach(el => {
                const raw = el.getAttribute('data-num');
                el.textContent = translateReps(raw, lang);
            });

            // Reformat measurement values
            document.querySelectorAll('.remark-value[data-raw-value]').forEach(el => {
                const raw   = el.getAttribute('data-raw-value');
                const pfx   = localiseText(el.getAttribute('data-prefix') || '', lang);
                const unit  = localiseText(el.getAttribute('data-unit')   || '', lang);
                const sfx   = localiseText(el.getAttribute('data-suffix') || '', lang);
                const arrow = el.querySelector('.comparison-improved, .comparison-worsened, .comparison-same');
                const arrowHtml = arrow ? arrow.outerHTML : '';
                const num = lang === 'ar' ? toArabicNumerals(raw) : raw;
                el.innerHTML = pfx + num + unit + (sfx ? ' ' + sfx : '') + arrowHtml;
            });

            // Reformat normal range labels
            document.querySelectorAll('.remark-normal[data-raw-range]').forEach(el => {
                const raw = el.getAttribute('data-raw-range');
                el.textContent = lang === 'ar' ? localiseText(toArabicNumerals(raw), lang) : raw;
            });
        }

        function toggleLanguage() {
            if (currentMode === 'bilingual') setLanguage('en');
            else if (currentMode === 'en') setLanguage('ar');
            else setLanguage('bilingual');
        }

        // ====================
        // SUPABASE CONFIGURATION
        // ====================
        const SUPABASE_URL = 'https://tozlkgcsghmcjozilrjh.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvemxrZ2NzZ2htY2pvemlscmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMTE3NTAsImV4cCI6MjA4NTU4Nzc1MH0.BbSxMpMwZ_EusKnfbtF6z6csguzglkPGja71jQwGUXA';
        
        // Initialize Supabase client
        let supabaseClient = null;
        let previousTestData = null; // Store previous test for comparison
        
        try {
            if (SUPABASE_URL && SUPABASE_ANON_KEY) {
                supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                console.log('Supabase initialized successfully');
            } else {
                console.warn('Supabase not configured. Database features disabled.');
            }
        } catch (error) {
            console.error('Error initializing Supabase:', error);
            console.warn('Database features disabled due to initialization error.');
        }
        
        // Detect OS and inject appropriate print page size
        (function detectOS() {
            const userAgent = window.navigator.userAgent;
            const platform = window.navigator.platform;
            const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
            const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
            
            const isMac = macosPlatforms.indexOf(platform) !== -1;
            const isWin = windowsPlatforms.indexOf(platform) !== -1;
            if (isMac) document.body.classList.add('mac-os');
            else if (isWin) document.body.classList.add('windows-os');
            else document.body.classList.add('mac-os');
            // Page size is injected dynamically at print time based on language mode
        })();
        
        // ====================
        // DATABASE FUNCTIONS
        // ====================
        
        // Save assessment to database
        async function saveAssessment(clientName, assessmentDate, measurements) {
            if (!supabaseClient) {
                console.warn('Supabase not configured');
                return null;
            }
            
            try {
                const { data, error } = await supabaseClient
                    .from('assessments')
                    .insert([
                        {
                            client_name: clientName,
                            assessment_date: assessmentDate,
                            measurements: measurements
                        }
                    ])
                    .select();
                
                if (error) throw error;
                
                showNotification('✓ Assessment saved successfully', 'success');
                return data[0];
            } catch (error) {
                console.error('Error saving assessment:', error);
                showNotification('Error saving assessment', 'error');
                return null;
            }
        }
        
        // Get all assessments for a client
        async function getClientAssessments(clientName) {
            if (!supabaseClient) return [];
            
            try {
                const { data, error } = await supabaseClient
                    .from('assessments')
                    .select('*')
                    .ilike('client_name', clientName)
                    .order('assessment_date', { ascending: false });
                
                if (error) throw error;
                return data || [];
            } catch (error) {
                console.error('Error fetching assessments:', error);
                return [];
            }
        }
        
        // Get most recent assessment for a client
        async function getLatestAssessment(clientName) {
            if (!supabaseClient) return null;
            
            try {
                const { data, error } = await supabaseClient
                    .from('assessments')
                    .select('*')
                    .ilike('client_name', clientName)
                    .order('assessment_date', { ascending: false })
                    .limit(1);
                
                if (error) throw error;
                return data && data.length > 0 ? data[0] : null;
            } catch (error) {
                console.error('Error fetching latest assessment:', error);
                return null;
            }
        }
        
        // Search clients by name
        async function searchClients(searchTerm) {
            if (!supabaseClient || searchTerm.length < 2) return [];
            
            try {
                const { data, error } = await supabaseClient
                    .from('assessments')
                    .select('client_name, assessment_date')
                    .ilike('client_name', \`%\${searchTerm}%\`)
                    .order('assessment_date', { ascending: false });
                
                if (error) throw error;
                
                // Group by client name and get latest date
                const clientMap = {};
                data.forEach(item => {
                    if (!clientMap[item.client_name] || item.assessment_date > clientMap[item.client_name]) {
                        clientMap[item.client_name] = item.assessment_date;
                    }
                });
                
                return Object.entries(clientMap).map(([name, date]) => ({ name, latestDate: date }));
            } catch (error) {
                console.error('Error searching clients:', error);
                return [];
            }
        }
        

        
        // ====================
        // AUTOCOMPLETE FUNCTIONALITY
        // ====================
        
        let autocompleteTimeout = null;
        
        function initializeAutocomplete() {
            const clientNameInput = document.getElementById('clientName');
            const dropdown = document.getElementById('autocompleteDropdown');
            
            if (!clientNameInput || !dropdown) return;
            
            clientNameInput.addEventListener('input', async function() {
                const searchTerm = this.value.trim();
                
                // Clear previous timeout
                clearTimeout(autocompleteTimeout);
                
                if (searchTerm.length < 2) {
                    dropdown.classList.remove('active');
                    dropdown.innerHTML = '';
                    return;
                }
                
                // Debounce search
                autocompleteTimeout = setTimeout(async () => {
                    const results = await searchClients(searchTerm);
                    
                    if (results.length === 0) {
                        dropdown.classList.remove('active');
                        dropdown.innerHTML = '';
                    } else {
                        dropdown.innerHTML = results.map(client => \`
                            <div class="autocomplete-item" data-name="\${client.name}">
                                <span class="autocomplete-name">\${client.name}</span>
                                <span class="autocomplete-date">Latest: \${new Date(client.latestDate).toLocaleDateString()}</span>
                            </div>
                        \`).join('');
                        dropdown.classList.add('active');
                        
                        // Add click handlers
                        dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
                            item.addEventListener('click', async function() {
                                const selectedName = this.dataset.name;
                                clientNameInput.value = selectedName;
                                dropdown.classList.remove('active');
                                
                                // Load previous test data for comparison
                                previousTestData = await getLatestAssessment(selectedName);
                                if (previousTestData) {
                                    showNotification(\`Loaded previous test for comparison (\${new Date(previousTestData.assessment_date).toLocaleDateString()})\`, 'info');
                                }
                            });
                        });
                    }
                }, 300);
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.autocomplete-container')) {
                    dropdown.classList.remove('active');
                }
            });
        }
        
        // ====================
        // COMPARISON INDICATORS
        // ====================
        
        // Add comparison indicators to measurement inputs
        function setupComparisonIndicators() {
            const measurementInputs = document.querySelectorAll('input[type="number"][id]');
            
            measurementInputs.forEach(input => {
                input.addEventListener('input', function() {
                    updateComparisonIndicator(this);
                });
            });
        }
        
        function updateComparisonIndicator(input) {
            const fieldId = input.id;
            const currentValue = parseFloat(input.value);
            
            // Find the label for this input
            const label = input.parentElement.querySelector('label');
            if (!label) return;
            
            // Remove existing indicator from label
            const existingIndicator = label.querySelector('.comparison-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }
            
            if (!previousTestData || !previousTestData.measurements || isNaN(currentValue)) {
                return;
            }
            
            const previousValue = previousTestData.measurements[fieldId];
            if (previousValue === undefined || previousValue === null) {
                return;
            }
            
            const prevValue = parseFloat(previousValue);
            if (isNaN(prevValue)) {
                return;
            }
            
            // Determine if improvement based on normal range
            const rangeData = normalValues[fieldId];
            if (!rangeData) return;
            
            const currentResult = calculateColorCategory(currentValue, rangeData);
            const previousResult = calculateColorCategory(prevValue, rangeData);
            
            let indicator = '';
            let className = '';
            
            if (currentResult.category === 'normal' && previousResult.category !== 'normal') {
                // Moved to normal
                indicator = '↑';
                className = 'comparison-improved';
            } else if (currentResult.category === 'abnormal' && previousResult.category !== 'abnormal') {
                // Moved to abnormal
                indicator = '↓';
                className = 'comparison-worsened';
            } else if (currentResult.category === previousResult.category) {
                // Check if value moved closer or further from normal
                const currentDist = getDistanceFromNormal(currentValue, rangeData);
                const previousDist = getDistanceFromNormal(prevValue, rangeData);
                
                if (currentDist < previousDist) {
                    indicator = '↑';
                    className = 'comparison-improved';
                } else if (currentDist > previousDist) {
                    indicator = '↓';
                    className = 'comparison-worsened';
                } else {
                    indicator = '–';
                    className = 'comparison-same';
                }
            } else if (currentResult.category === 'middle') {
                if (previousResult.category === 'abnormal') {
                    indicator = '↑';
                    className = 'comparison-improved';
                } else {
                    indicator = '↓';
                    className = 'comparison-worsened';
                }
            } else if (previousResult.category === 'middle') {
                if (currentResult.category === 'normal') {
                    indicator = '↑';
                    className = 'comparison-improved';
                } else {
                    indicator = '↓';
                    className = 'comparison-worsened';
                }
            }
            
            if (indicator) {
                const span = document.createElement('span');
                span.className = \`comparison-indicator \${className}\`;
                span.textContent = indicator;
                label.appendChild(span);
            }
        }
        
        function getDistanceFromNormal(value, rangeData) {
            const { type, values } = rangeData;
            
            if (type === 'red-red') {
                const [minAbn, normLow, normHigh, maxAbn] = values;
                if (value >= normLow && value <= normHigh) return 0;
                if (value < normLow) return normLow - value;
                return value - normHigh;
            } else if (type === 'blue-red') {
                const [normStart, normEnd, maxAbn] = values;
                if (value >= normStart && value <= normEnd) return 0;
                return Math.abs(value - normEnd);
            } else if (type === 'red-blue') {
                const [minAbn, normStart, normEnd] = values;
                if (value >= normStart && value <= normEnd) return 0;
                return Math.abs(value - normStart);
            }
            return 0;
        }
        

        
        // ====================
        // NOTIFICATION SYSTEM
        // ====================
        
        function showNotification(message, type = 'info') {
            return; // temporarily disabled
            const colors = {
                success: '#28a745',
                error: '#dc3545',
                info: '#17a2b8'
            };
            
            const notification = document.createElement('div');
            notification.className = 'notification-toast';
            notification.style.cssText = \`
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: \${colors[type]};
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 10000;
                font-size: 14px;
                font-weight: 500;
                max-width: 350px;
                animation: toastSlideIn 0.3s ease forwards;
            \`;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'toastSlideOut 0.3s ease forwards';
                setTimeout(() => notification.remove(), 300);
            }, 900);
        }
        
        // Image OCR Processing
        let ocrProgress = null;
        let currentSection = null;
        
        function scanSection(section) {
            currentSection = section;
            document.getElementById('imageUpload').click();
        }
        
        async function processImages(event) {
            const files = event.target.files;
            if (files.length === 0 || !currentSection) return;
            
            const file = files[0]; // Only process first image
            
            // Show progress indicator
            showOCRProgress(\`Scanning \${getSectionName(currentSection)}...\`);
            
            try {
                const result = await Tesseract.recognize(
                    file,
                    'eng',
                    {
                        logger: m => {
                            if (m.status === 'recognizing text') {
                                showOCRProgress(\`Scanning \${getSectionName(currentSection)}: \${Math.round(m.progress * 100)}%\`);
                            }
                        }
                    }
                );
                
                const extractedData = parseOCRText(result.data.text, currentSection);
                
                // Fill form with extracted data
                fillFormWithData(extractedData);
                
                // Show success message
                const matchedCount = Object.keys(extractedData).length;
                showOCRProgress(\`✓ \${getSectionName(currentSection)} scan complete! Found \${matchedCount} measurements.\`, true);
                
                setTimeout(() => hideOCRProgress(), 3000);
                
            } catch (error) {
                console.error('Error processing image:', error);
                showOCRProgress('Error scanning image');
                setTimeout(() => hideOCRProgress(), 3000);
            }
            
            // Reset file input and section
            event.target.value = '';
            currentSection = null;
        }
        
        function getSectionName(section) {
            const names = {
                'standingFront': 'Standing Front',
                'standingRight': 'Standing Right',
                'standingLeft': 'Standing Left',
                'overheadSquat': 'Overhead Squat',
                'toeTouchTest': 'Toe Touch Test'
            };
            return names[section] || section;
        }
        
        function parseOCRText(text, section) {
            const extractedData = {};
            
            // Section-specific measurement mappings
            const sectionMappings = {
                'standingFront': {
                    'left shoulder slope': 'leftShoulderSlope',
                    'right shoulder slope': 'rightShoulderSlope',
                    'pelvic tilt': 'pelvicTilt',
                    'coronal balance': 'coronalBalance',
                    'left hka angle': 'leftHKA',
                    'right hka angle': 'rightHKA'
                },
                'standingRight': {
                    'lumbar lordosis angle': 'lumbarLordosisRight',
                    'lumbar lordosis': 'lumbarLordosisRight',
                    'anterior pelvic tilt angle': 'anteriorPelvicTiltRight',
                    'anterior pelvic tilt': 'anteriorPelvicTiltRight',
                    't1 pelvic angle': 't1PelvicRight',
                    't1 pelvic': 't1PelvicRight',
                    'sagittal vertical axis': 'sagittalVerticalRight',
                    'sagittal vertical': 'sagittalVerticalRight',
                    'forward head posture angle': 'forwardHeadRight',
                    'forward head angle': 'forwardHeadRight',
                    'forward head': 'forwardHeadRight',
                    'rounded shoulder angle': 'roundedShoulderRight',
                    'rounded shoulder': 'roundedShoulderRight',
                    'thoracic kyphosis angle': 'thoracicKyphosisRight',
                    'thoracic kyphosis': 'thoracicKyphosisRight',
                    'kendall knee angle': 'kendallKneeRight',
                    'kendall knee': 'kendallKneeRight'
                },
                'standingLeft': {
                    'lumbar lordosis angle': 'lumbarLordosisLeft',
                    'lumbar lordosis': 'lumbarLordosisLeft',
                    'anterior pelvic tilt angle': 'anteriorPelvicTiltLeft',
                    'anterior pelvic tilt': 'anteriorPelvicTiltLeft',
                    't1 pelvic angle': 't1PelvicLeft',
                    't1 pelvic': 't1PelvicLeft',
                    'sagittal vertical axis': 'sagittalVerticalLeft',
                    'sagittal vertical': 'sagittalVerticalLeft',
                    'forward head posture angle': 'forwardHeadLeft',
                    'forward head angle': 'forwardHeadLeft',
                    'forward head': 'forwardHeadLeft',
                    'rounded shoulder angle': 'forwardShoulderLeft',
                    'rounded shoulder': 'forwardShoulderLeft',
                    'thoracic kyphosis angle': 'thoracicKyphosisLeft',
                    'thoracic kyphosis': 'thoracicKyphosisLeft',
                    'kendall knee angle': 'kendallKneeLeft',
                    'kendall knee': 'kendallKneeLeft'
                },
                'overheadSquat': {
                    'pelvic stability': 'pelvicStability',
                    'spinal neutrality': 'spineNeutrality',
                    'spine neutrality': 'spineNeutrality',
                    'squat depth': 'squatDepth',
                    'shoulder stability': 'shoulderStability'
                },
                'toeTouchTest': {
                    'hip hinge angle': 'hipHinge',
                    'hip hinge': 'hipHinge',
                    'fingertip to floor distance': 'fingerToFloor',
                    'fingertip to floor': 'fingerToFloor',
                    'finger to floor': 'fingerToFloor',
                    'knee extension angle': 'kneeExtension',
                    'knee extension': 'kneeExtension'
                }
            };
            
            const measurementMap = sectionMappings[section] || {};
            
            // Split text into lines
            const lines = text.split('\\n');
            
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trim().toLowerCase();
                if (line.length < 3) continue;
                
                // Try to find measurement name and value
                for (const [measurementName, fieldId] of Object.entries(measurementMap)) {
                    if (line.includes(measurementName)) {
                        // Find the position where the measurement name ends
                        const nameEndIndex = line.indexOf(measurementName) + measurementName.length;
                        // Only look for values AFTER the measurement name on same line
                        let valuePartOfLine = line.substring(nameEndIndex);
                        
                        // If no number found on current line, check next line
                        if (!valuePartOfLine.match(/-?\\d+\\.?\\d*/) && i < lines.length - 1) {
                            const nextLine = lines[i + 1].trim().toLowerCase();
                            // Only use next line if it starts with a number or arrow+number
                            if (nextLine.match(/^[←→↑]?\\s*-?\\d+\\.?\\d*/)) {
                                valuePartOfLine = nextLine;
                            }
                        }
                        
                        // Extract numeric value with optional negative sign and decimal
                        const valueMatch = valuePartOfLine.match(/-?\\d+\\.?\\d*/);
                        
                        if (valueMatch && valueMatch.length > 0) {
                            // Take the FIRST number found after the measurement name
                            let value = valueMatch[0];
                            
                            // For cm values, preserve sign
                            if (valuePartOfLine.includes('cm')) {
                                const cmMatch = valuePartOfLine.match(/-?\\d+\\.?\\d*\\s*c/);
                                if (cmMatch) {
                                    value = cmMatch[0].replace('c', '').trim();
                                }
                            }
                            
                            extractedData[fieldId] = value;
                            
                            // Special handling for pelvic tilt side (L/R)
                            if (fieldId === 'pelvicTilt') {
                                // Look for L or R in the value part of the line
                                if (valuePartOfLine.match(/[↑→]?\\s*l\\b/i)) {
                                    extractedData['pelvicTiltSide'] = 'Left';
                                } else if (valuePartOfLine.match(/[↑→]?\\s*r\\b/i)) {
                                    extractedData['pelvicTiltSide'] = 'Right';
                                }
                            }
                            
                            break; // Found match, move to next line
                        }
                    }
                }
            }
            
            return extractedData;
        }
        
        function fillFormWithData(data) {
            for (const [fieldId, value] of Object.entries(data)) {
                const input = document.getElementById(fieldId);
                if (input) {
                    input.value = value;
                    // Trigger change event to update any dependent fields
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        }
        
        function showOCRProgress(message, isSuccess = false) {
            if (!ocrProgress) {
                ocrProgress = document.createElement('div');
                ocrProgress.className = 'notification-toast';
                ocrProgress.style.cssText = \`
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: \${isSuccess ? '#28a745' : '#007bff'};
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    z-index: 10000;
                    font-size: 14px;
                    font-weight: 500;
                    max-width: 350px;
                \`;
                document.body.appendChild(ocrProgress);
            }
            
            ocrProgress.textContent = message;
            ocrProgress.style.background = isSuccess ? '#28a745' : '#007bff';
        }
        
        function hideOCRProgress() {
            if (ocrProgress) {
                ocrProgress.remove();
                ocrProgress = null;
            }
        }
        
        // Auto-fill form with random test data
        function autoFillForm() {
            // Fill client info only if empty
            const clientNameInput = document.getElementById('clientName');
            const assessmentDateInput = document.getElementById('assessmentDate');
            
            if (!clientNameInput.value) {
                clientNameInput.value = 'Test Client ' + Math.floor(Math.random() * 1000);
            }
            if (!assessmentDateInput.value) {
                assessmentDateInput.value = new Date().toISOString().split('T')[0];
            }
            
            // Helper function to generate random value within range
            function randomValue(min, max, decimals = 1) {
                const value = Math.random() * (max - min) + min;
                return value.toFixed(decimals);
            }
            
            // Generate random value based on normalValues boundaries
            function randomFromBoundaries(fieldId) {
                const rangeData = normalValues[fieldId];
                if (!rangeData) return '0';
                
                const { type, values } = rangeData;
                
                if (type === 'red-red') {
                    // [min_abnormal, normal_low, normal_high, max_abnormal]
                    const [minAbn, normLow, normHigh, maxAbn] = values;
                    return randomValue(minAbn, maxAbn);
                } else if (type === 'blue-red') {
                    // [normal_start, normal_end, max_abnormal]
                    const [normStart, normEnd, maxAbn] = values;
                    return randomValue(normStart, maxAbn);
                } else if (type === 'red-blue') {
                    // [min_abnormal, normal_start, normal_end]
                    const [minAbn, normStart, normEnd] = values;
                    return randomValue(minAbn, normEnd);
                }
                return '0';
            }
            
            // Fill STANDING FRONT measurements
            document.getElementById('leftShoulderSlope').value = randomFromBoundaries('leftShoulderSlope');
            document.getElementById('rightShoulderSlope').value = randomFromBoundaries('rightShoulderSlope');
            document.getElementById('pelvicTilt').value = randomFromBoundaries('pelvicTilt');
            document.getElementById('pelvicTiltSide').value = Math.random() > 0.5 ? 'Left' : 'Right';
            document.getElementById('leftHKA').value = randomFromBoundaries('leftHKA');
            document.getElementById('rightHKA').value = randomFromBoundaries('rightHKA');
            
            // Fill STANDING RIGHT measurements
            document.getElementById('forwardHeadRight').value = randomFromBoundaries('forwardHeadRight');
            document.getElementById('roundedShoulderRight').value = randomFromBoundaries('roundedShoulderRight');
            document.getElementById('thoracicKyphosisRight').value = randomFromBoundaries('thoracicKyphosisRight');
            document.getElementById('lumbarLordosisRight').value = randomFromBoundaries('lumbarLordosisRight');
            document.getElementById('kendallKneeRight').value = randomFromBoundaries('kendallKneeRight');
            
            // Fill STANDING LEFT measurements
            document.getElementById('forwardHeadLeft').value = randomFromBoundaries('forwardHeadLeft');
            document.getElementById('forwardShoulderLeft').value = randomFromBoundaries('forwardShoulderLeft');
            document.getElementById('thoracicKyphosisLeft').value = randomFromBoundaries('thoracicKyphosisLeft');
            document.getElementById('lumbarLordosisLeft').value = randomFromBoundaries('lumbarLordosisLeft');
            document.getElementById('kendallKneeLeft').value = randomFromBoundaries('kendallKneeLeft');
            
            // Fill OVERHEAD SQUAT measurements
            document.getElementById('pelvicStability').value = randomFromBoundaries('pelvicStability');
            document.getElementById('spineNeutrality').value = randomFromBoundaries('spineNeutrality');
            document.getElementById('squatDepth').value = randomFromBoundaries('squatDepth');
            document.getElementById('shoulderStability').value = randomFromBoundaries('shoulderStability');
            
            // Fill TOE TOUCH TEST measurements
            document.getElementById('hipHinge').value = randomFromBoundaries('hipHinge');
            document.getElementById('fingerToFloor').value = randomFromBoundaries('fingerToFloor');
            document.getElementById('kneeExtension').value = randomFromBoundaries('kneeExtension');
        }
        
        // Measurement ranges with proper boundaries
        const normalValues = {
            // RED-TO-RED: [min_abnormal, normal_low, normal_high, max_abnormal]
            'leftShoulderSlope': { type: 'red-red', values: [-5, 12, 18, 30] },
            'rightShoulderSlope': { type: 'red-red', values: [-5, 12, 18, 30] },
            'pelvicTilt': { type: 'red-red', values: [-10, -2, 2, 10] },
            'coronalBalance': { type: 'red-red', values: [-30, -5, 5, 30] },
            'leftHKA': { type: 'red-red', values: [-10, -3, 3, 10] },
            'rightHKA': { type: 'red-red', values: [-10, -3, 3, 10] },
            'sagittalVerticalRight': { type: 'red-red', values: [-30, 0, 5, 30] },
            'sagittalVerticalLeft': { type: 'red-red', values: [-30, 0, 5, 30] },
            'thoracicKyphosisRight': { type: 'red-red', values: [20, 35, 45, 60] },
            'thoracicKyphosisLeft': { type: 'red-red', values: [20, 35, 45, 60] },
            'lumbarLordosisRight': { type: 'red-red', values: [30, 45, 55, 70] },
            'lumbarLordosisLeft': { type: 'red-red', values: [30, 45, 55, 70] },
            'anteriorPelvicTiltRight': { type: 'red-red', values: [-5, 5, 8, 20] },
            'anteriorPelvicTiltLeft': { type: 'red-red', values: [-5, 5, 8, 20] },
            'spineNeutrality': { type: 'red-red', values: [0, 60, 90, 150] },
            'pelvicStability': { type: 'red-red', values: [-20, 0, 10, 20] },
            'kendallKneeRight': { type: 'red-red', values: [-30, -5, 5, 30] },
            'kendallKneeLeft': { type: 'red-red', values: [-30, -5, 5, 30] },
            
            // BLUE-TO-RED: [normal_start, normal_end, max_abnormal]
            'forwardHeadRight': { type: 'blue-red', values: [0, 30, 70] },
            'forwardHeadLeft': { type: 'blue-red', values: [0, 30, 70] },
            'roundedShoulderRight': { type: 'blue-red', values: [0, 42, 70] },
            'forwardShoulderLeft': { type: 'blue-red', values: [0, 42, 70] },
            't1PelvicRight': { type: 'blue-red', values: [0, 20, 50] },
            't1PelvicLeft': { type: 'blue-red', values: [0, 20, 50] },
            
            // RED-TO-BLUE: [min_abnormal, normal_start, normal_end]
            'shoulderStability': { type: 'red-blue', values: [120, 170, 180] },
            'squatDepth': { type: 'red-blue', values: [0, 60, 150] },
            
            // Simple ranges (for backwards compatibility)
            'hipHinge': { type: 'blue-red', values: [0, 70, 150] },
            'fingerToFloor': { type: 'red-red', values: [-30, -5, 5, 30] },
            'kneeExtension': { type: 'red-blue', values: [120, 170, 180] }
        };
        
        // Exercise mapping - links measurements to specific exercises
        const exerciseMapping = {
            'leftShoulderSlope': [
                { name: 'Left upper trapezius stretch', type: 'stretch' }
            ],
            'rightShoulderSlope': [
                { name: 'Right upper trapezius stretch', type: 'stretch' }
            ],
            'pelvicTiltLeft': [
                { name: 'Right hip hike', type: 'exercise' },
                { name: 'Left half kneeling side bend', type: 'stretch' }
            ],
            'pelvicTiltRight': [
                { name: 'Left hip hike', type: 'exercise' },
                { name: 'Right half kneeling side bend', type: 'stretch' }
            ],
            'leftHKA': [
                { name: 'Left hip abduction', type: 'exercise' },
                { name: 'Left glute kickback', type: 'exercise' }
            ],
            'rightHKA': [
                { name: 'Right hip abduction', type: 'exercise' },
                { name: 'Right glute kickback', type: 'exercise' }
            ],
            'forwardHeadRight': [
                { name: 'Chin tucks', type: 'exercise' }
            ],
            'roundedShoulderRight': [
                { name: 'Reverse flys', type: 'exercise' },
                { name: 'Left Pec Doorway stretch', type: 'stretch' }
            ],
            'forwardHeadLeft': [
                { name: 'Chin tucks', type: 'exercise' }
            ],
            'forwardShoulderLeft': [
                { name: 'Reverse flys', type: 'exercise' },
                { name: 'Pec stretch', type: 'stretch' }
            ],
            'kendallKneeRightPositive': [
                { name: 'Leg extension', type: 'exercise' },
                { name: 'Hamstring stretch', type: 'stretch' }
            ],
            'kendallKneeRightNegative': [
                { name: 'Hamstring curl', type: 'exercise' },
                { name: 'Quad stretch', type: 'stretch' }
            ],
            'kendallKneeLeftPositive': [
                { name: 'Leg extension', type: 'exercise' },
                { name: 'Hamstring stretch', type: 'stretch' }
            ],
            'kendallKneeLeftNegative': [
                { name: 'Hamstring curl', type: 'exercise' },
                { name: 'Quad stretch', type: 'stretch' }
            ],
            'pelvicStability': [
                { name: 'Y raises', type: 'exercise' }
            ],
            'spineNeutrality': [
                { name: 'Y raises', type: 'exercise' }
            ],
            'squatDepth': [
                { name: 'Knee to wall', type: 'exercise' },
                { name: 'Leg press', type: 'exercise' },
                { name: 'Calf stretch', type: 'stretch' },
                { name: 'Shin stretch', type: 'stretch' }
            ],
            'shoulderStability': [
                { name: 'Y raises', type: 'exercise' }
            ],
            'hipHinge': [
                { name: 'Forward fold stretch', type: 'stretch' },
                { name: 'Hinge', type: 'exercise' }
            ],
            'fingerToFloor': [
                { name: 'Forward fold stretch', type: 'stretch' },
                { name: 'Jefferson curls', type: 'exercise' }
            ],
            'kneeExtension': [
                { name: 'Forward fold stretch', type: 'stretch' }
            ]
        };
        
        // Calculate color category based on value vs range boundaries
        function calculateColorCategory(value, rangeData) {
            if (value === null || value === undefined || value === '') return null;
            
            const val = parseFloat(value);
            const { type, values } = rangeData;
            
            if (type === 'red-red') {
                // [min_abnormal, normal_low, normal_high, max_abnormal]
                const [minAbn, normLow, normHigh, maxAbn] = values;
                
                // Calculate ±10% tolerance zones (extends into both abnormal AND normal)
                const lowerAbnRange = normLow - minAbn;
                const upperAbnRange = maxAbn - normHigh;
                const tolerance10Lower = lowerAbnRange * 0.1;
                const tolerance10Upper = upperAbnRange * 0.1;
                
                const middleLowStart = normLow - tolerance10Lower;
                const middleLowEnd = normLow + tolerance10Lower;
                const middleHighStart = normHigh - tolerance10Upper;
                const middleHighEnd = normHigh + tolerance10Upper;
                
                // Lower middle zone: (normLow - 10%) to (normLow + 10%)
                if (val >= middleLowStart && val <= middleLowEnd) {
                    return { category: 'middle', value: val, normalStart: normLow, normalEnd: normHigh };
                }
                // Upper middle zone: (normHigh - 10%) to (normHigh + 10%)
                else if (val >= middleHighStart && val <= middleHighEnd) {
                    return { category: 'middle', value: val, normalStart: normLow, normalEnd: normHigh };
                }
                // Normal zone: between the two middle zones
                else if (val > middleLowEnd && val < middleHighStart) {
                    return { category: 'normal', value: val, normalStart: normLow, normalEnd: normHigh };
                }
                // Abnormal: outside all zones
                else {
                    return { category: 'abnormal', value: val, normalStart: normLow, normalEnd: normHigh };
                }
            } else if (type === 'blue-red') {
                // [normal_start, normal_end, max_abnormal]
                const [normStart, normEnd, maxAbn] = values;
                const abnRange = maxAbn - normEnd;
                const tolerance10 = abnRange * 0.1;
                
                const middleStart = normEnd - tolerance10;
                const middleEnd = normEnd + tolerance10;
                
                // Middle zone: (normEnd - 10%) to (normEnd + 10%)
                if (val >= middleStart && val <= middleEnd) {
                    return { category: 'middle', value: val, normalStart: normStart, normalEnd: normEnd };
                }
                // Normal zone: below middle zone
                else if (val >= normStart && val < middleStart) {
                    return { category: 'normal', value: val, normalStart: normStart, normalEnd: normEnd };
                }
                // Abnormal zone: above middle zone
                else {
                    return { category: 'abnormal', value: val, normalStart: normStart, normalEnd: normEnd };
                }
            } else if (type === 'red-blue') {
                // [min_abnormal, normal_start, normal_end]
                const [minAbn, normStart, normEnd] = values;
                const abnRange = normStart - minAbn;
                const tolerance10 = abnRange * 0.1;
                
                const middleStart = normStart - tolerance10;
                const middleEnd = normStart + tolerance10;
                
                // Middle zone: (normStart - 10%) to (normStart + 10%)
                if (val >= middleStart && val <= middleEnd) {
                    return { category: 'middle', value: val, normalStart: normStart, normalEnd: normEnd };
                }
                // Normal zone: above middle zone
                else if (val > middleEnd && val <= normEnd) {
                    return { category: 'normal', value: val, normalStart: normStart, normalEnd: normEnd };
                }
                // Abnormal zone: below middle zone
                else {
                    return { category: 'abnormal', value: val, normalStart: normStart, normalEnd: normEnd };
                }
            }
            
            return { category: 'normal', value: val, normalStart: 0, normalEnd: 0 };
        }
        
        // Calculate sets and reps based on color category
        function calculateSetsReps(colorCategory, isStretch = false, exerciseName = '') {
            // Special cases: elbow plank and side plank always use 1 min
            if (exerciseName === 'Elbow plank' || exerciseName === 'Side plank') {
                switch (colorCategory) {
                    case 'normal':
                        return { sets: 2, reps: '1 min' };
                    case 'middle':
                        return { sets: 3, reps: '1 min' };
                    case 'abnormal':
                        return { sets: 4, reps: '1 min' };
                    default:
                        return { sets: 2, reps: '1 min' };
                }
            }
            
            // Stretches use duration-based reps
            if (isStretch) {
                switch (colorCategory) {
                    case 'normal':
                        return { sets: 2, reps: '30s' };
                    case 'middle':
                        return { sets: 3, reps: '30s' };
                    case 'abnormal':
                        return { sets: 4, reps: '30s' };
                    default:
                        return { sets: 2, reps: '30s' };
                }
            }
            
            // Exercises use rep counts
            switch (colorCategory) {
                case 'normal':
                    return { sets: 2, reps: 10 };
                case 'middle':
                    return { sets: 3, reps: 10 };
                case 'abnormal':
                    return { sets: 4, reps: 10 };
                default:
                    return { sets: 2, reps: 10 };
            }
        }
        
        // Store color selections
        const colorSelections = {};
        
        // Color selection function (now automatic - kept for compatibility)
        function selectColor(fieldId, colorType, button) {
            // Store the selection
            colorSelections[fieldId] = colorType;
            
            // Update button states
            const colorPicker = button.parentElement;
            const buttons = colorPicker.querySelectorAll('.color-btn');
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        }
        
        // Generate dynamic exercise tables based on filled measurements
        function generateExerciseTables() {
            // Clear all exercise tables
            document.getElementById('shoulderExercises').innerHTML = '';
            document.getElementById('coreExercises').innerHTML = '';
            document.getElementById('kneeExercises').innerHTML = '';
            document.getElementById('stretchingExercises').innerHTML = '';
            
            const exercisesAdded = {
                shoulder: new Set(),
                core: new Set(),
                knee: new Set(),
                stretching: new Set()
            };
            
            // Process each measurement that has a value
            Object.keys(normalValues).forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (!input || !input.value) return;
                
                const value = parseFloat(input.value);
                const colorCategory = colorSelections[fieldId] || 'normal';
                
                // Handle special cases
                let exerciseKey = fieldId;
                
                // Pelvic Tilt with Left/Right
                if (fieldId === 'pelvicTilt') {
                    const pelvicTiltSide = document.getElementById('pelvicTiltSide').value;
                    if (pelvicTiltSide === 'L' || pelvicTiltSide === 'Left') {
                        exerciseKey = 'pelvicTiltLeft';
                    } else if (pelvicTiltSide === 'R' || pelvicTiltSide === 'Right') {
                        exerciseKey = 'pelvicTiltRight';
                    } else {
                        return; // Skip if no side selected
                    }
                }
                
                // Kendall Knee with positive/negative
                if (fieldId === 'kendallKneeRight') {
                    exerciseKey = value >= 0 ? 'kendallKneeRightPositive' : 'kendallKneeRightNegative';
                }
                if (fieldId === 'kendallKneeLeft') {
                    exerciseKey = value >= 0 ? 'kendallKneeLeftPositive' : 'kendallKneeLeftNegative';
                }
                
                // Get exercises for this measurement
                const exercises = exerciseMapping[exerciseKey];
                if (!exercises) return;
                
                // Add each exercise to appropriate table
                exercises.forEach(exercise => {
                    const { name, type } = exercise;
                    const { sets, reps, duration } = calculateSetsReps(colorCategory, type === 'stretch');
                    
                    // Determine which table to add to
                    let tableId, categorySet;
                    if (type === 'stretch') {
                        tableId = 'stretchingExercises';
                        categorySet = exercisesAdded.stretching;
                    } else if (name.toLowerCase().includes('knee') || name.toLowerCase().includes('leg extension') || 
                               name.toLowerCase().includes('leg press') || name.toLowerCase().includes('hamstring curl')) {
                        tableId = 'kneeExercises';
                        categorySet = exercisesAdded.knee;
                    } else if (name.toLowerCase().includes('pelvic') || name.toLowerCase().includes('hip') || 
                               name.toLowerCase().includes('hinge') || name.toLowerCase().includes('y raise') ||
                               name.toLowerCase().includes('abduction') || name.toLowerCase().includes('glute') ||
                               name.toLowerCase().includes('jefferson')) {
                        tableId = 'coreExercises';
                        categorySet = exercisesAdded.core;
                    } else {
                        tableId = 'shoulderExercises';
                        categorySet = exercisesAdded.shoulder;
                    }
                    
                    // Skip if already added
                    if (categorySet.has(name)) return;
                    categorySet.add(name);
                    
                    // Determine laterality
                    let leftSets = '', rightSets = '', leftReps = '', rightReps = '';
                    
                    if (name.toLowerCase().includes('left')) {
                        leftSets = sets;
                        leftReps = type === 'stretch' ? duration : reps;
                    } else if (name.toLowerCase().includes('right')) {
                        rightSets = sets;
                        rightReps = type === 'stretch' ? duration : reps;
                    } else {
                        // Both sides
                        leftSets = rightSets = sets;
                        leftReps = rightReps = type === 'stretch' ? duration : reps;
                    }
                    
                    // Create table row
                    const row = document.createElement('tr');
                    row.innerHTML = \`
                        <td class="exercise-name">\${name}</td>
                        <td>\${leftSets}</td>
                        <td>\${rightSets}</td>
                        <td>\${leftReps}</td>
                        <td>\${rightReps}</td>
                    \`;
                    
                    document.getElementById(tableId).appendChild(row);
                });
            });
        }
        
        // Auto-calculate colors for all measurements based on normal values
        function autoCalculateColors() {
            // Clear existing color selections
            Object.keys(colorSelections).forEach(key => delete colorSelections[key]);
            
            // Calculate color for each field that has a value
            Object.keys(normalValues).forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (input && input.value) {
                    const value = parseFloat(input.value);
                    const rangeData = normalValues[fieldId];
                    const result = calculateColorCategory(value, rangeData);
                    
                    if (result) {
                        colorSelections[fieldId] = result;
                    }
                }
            });
        }
        
        // Generate dynamic exercise tables based on measurements
        function generateDynamicExercises() {
            // Clear all exercise tables
            document.getElementById('upperBodyExercises').innerHTML = '';
            document.getElementById('lowerBodyExercises').innerHTML = '';
            document.getElementById('stretchingExercises').innerHTML = '';

            const exercisesToAdd = { upperBody: [], lowerBody: [], stretching: [] };

            // Helper to push exercise/stretch entries
            const addEx = (cat, isStretch, table, key, optType) => {
                const sr = calculateSetsReps(cat, isStretch, optType);
                table.push({ name: t(key), sets: sr.sets, reps: sr.reps });
            };

            // ── SHOULDER SLOPE LEFT ──
            if (document.getElementById('leftShoulderSlope').value) {
                const cc = colorSelections['leftShoulderSlope'].category || colorSelections['leftShoulderSlope'];
                addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownFrontLeft');
                addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownSideLeft');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_LeftUpperTrapStretch');
            }

            // ── SHOULDER SLOPE RIGHT ──
            if (document.getElementById('rightShoulderSlope').value) {
                const cc = colorSelections['rightShoulderSlope'].category || colorSelections['rightShoulderSlope'];
                addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownFrontRight');
                addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownSideRight');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_RightUpperTrapStretch');
            }

            // ── PELVIC TILT (L → Right hip hike / R → Left hip hike, no stretch) ──
            const pelvicTiltValue = document.getElementById('pelvicTilt').value;
            const pelvicTiltSide  = document.getElementById('pelvicTiltSide').value;
            if (pelvicTiltValue && pelvicTiltSide) {
                const cc = colorSelections['pelvicTilt'].category || colorSelections['pelvicTilt'];
                if (pelvicTiltSide === 'Left'  || pelvicTiltSide === 'L')
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_RightHipHike');
                else if (pelvicTiltSide === 'Right' || pelvicTiltSide === 'R')
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_LeftHipHike');
            }

            // ── LEFT HKA ANGLE ──
            if (document.getElementById('leftHKA').value) {
                const cc = colorSelections['leftHKA'].category || colorSelections['leftHKA'];
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAbductionCableLeft');
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_LeftGluteKickbacks');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_AdductorStretch');
            }

            // ── RIGHT HKA ANGLE ──
            if (document.getElementById('rightHKA').value) {
                const cc = colorSelections['rightHKA'].category || colorSelections['rightHKA'];
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAbductionCableRight');
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_RightGluteKickbacks');
            }

            // ── FORWARD HEAD RIGHT ──
            if (document.getElementById('forwardHeadRight').value) {
                const cc = colorSelections['forwardHeadRight'].category || colorSelections['forwardHeadRight'];
                addEx(cc, false, exercisesToAdd.upperBody, 'ex_ChinTucks');
            }

            // ── ROUNDED SHOULDER RIGHT ──
            if (document.getElementById('roundedShoulderRight').value) {
                const cc = colorSelections['roundedShoulderRight'].category || colorSelections['roundedShoulderRight'];
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_ReverseFlys');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_FacePull');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_ExternalRotation');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_ChestStretch');
            }

            // ── THORACIC KYPHOSIS RIGHT ──
            if (document.getElementById('thoracicKyphosisRight').value) {
                const cc = colorSelections['thoracicKyphosisRight'].category || colorSelections['thoracicKyphosisRight'];
                addEx(cc, false, exercisesToAdd.lowerBody,  'ex_BackExtensions');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_RowingBack');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_CobraStretch');
            }

            // ── LUMBAR LORDOSIS RIGHT ──
            if (document.getElementById('lumbarLordosisRight').value) {
                const cc = colorSelections['lumbarLordosisRight'].category || colorSelections['lumbarLordosisRight'];
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_Crunches');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_HipFlexorStretch');
            }

            // ── FORWARD HEAD LEFT ──
            if (document.getElementById('forwardHeadLeft').value) {
                const cc = colorSelections['forwardHeadLeft'].category || colorSelections['forwardHeadLeft'];
                addEx(cc, false, exercisesToAdd.upperBody, 'ex_ChinTucks');
            }

            // ── ROUNDED SHOULDER LEFT ──
            if (document.getElementById('forwardShoulderLeft').value) {
                const cc = colorSelections['forwardShoulderLeft'].category || colorSelections['forwardShoulderLeft'];
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_ReverseFlys');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_FacePull');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_ExternalRotation');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_ChestStretch');
            }

            // ── THORACIC KYPHOSIS LEFT ──
            if (document.getElementById('thoracicKyphosisLeft').value) {
                const cc = colorSelections['thoracicKyphosisLeft'].category || colorSelections['thoracicKyphosisLeft'];
                addEx(cc, false, exercisesToAdd.lowerBody,  'ex_BackExtensions');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_RowingBack');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_CobraStretch');
            }

            // ── LUMBAR LORDOSIS LEFT ──
            if (document.getElementById('lumbarLordosisLeft').value) {
                const cc = colorSelections['lumbarLordosisLeft'].category || colorSelections['lumbarLordosisLeft'];
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_Crunches');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_HipFlexorStretch');
            }

            // ── KENDALL KNEE RIGHT (Standing Right = Left leg) ──
            const kendallRightValue = document.getElementById('kendallKneeRight').value;
            if (kendallRightValue) {
                const cc  = colorSelections['kendallKneeRight'].category || colorSelections['kendallKneeRight'];
                const esr = calculateSetsReps(cc, false);
                if (cc === 'abnormal') {
                    if (parseFloat(kendallRightValue) > 0) {
                        exercisesToAdd.lowerBody.push({ name: t('ex_LeftLegExtensions'),  sets: esr.sets, reps: esr.reps });
                        exercisesToAdd.lowerBody.push({ name: t('ex_SingleLegPressLeft'), sets: esr.sets, reps: esr.reps });
                    } else {
                        exercisesToAdd.lowerBody.push({ name: t('ex_LeftHamstringCurls'), sets: esr.sets, reps: esr.reps });
                    }
                }
            }

            // ── KENDALL KNEE LEFT (Standing Left = Right leg) ──
            const kendallLeftValue = document.getElementById('kendallKneeLeft').value;
            if (kendallLeftValue) {
                const cc  = colorSelections['kendallKneeLeft'].category || colorSelections['kendallKneeLeft'];
                const esr = calculateSetsReps(cc, false);
                if (cc === 'abnormal') {
                    if (parseFloat(kendallLeftValue) > 0) {
                        exercisesToAdd.lowerBody.push({ name: t('ex_RightLegExtensions'),  sets: esr.sets, reps: esr.reps });
                        exercisesToAdd.lowerBody.push({ name: t('ex_SingleLegPressRight'), sets: esr.sets, reps: esr.reps });
                    } else {
                        exercisesToAdd.lowerBody.push({ name: t('ex_RightHamstringCurls'), sets: esr.sets, reps: esr.reps });
                    }
                }
            }

            // ── SHOULDER STABILITY ──
            if (document.getElementById('shoulderStability').value) {
                const cc = colorSelections['shoulderStability'].category || colorSelections['shoulderStability'];
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_BarMilitaryPress');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_YRaises');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_BentOverShoulderStretch');
            }

            // ── PELVIC STABILITY ──
            if (document.getElementById('pelvicStability').value) {
                const cc = colorSelections['pelvicStability'].category || colorSelections['pelvicStability'];
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipThrust');
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAdductions');
                addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAbductions');
            }

            // ── SQUAT DEPTH ──
            if (document.getElementById('squatDepth').value) {
                const cc = colorSelections['squatDepth'].category || colorSelections['squatDepth'];
                addEx(cc, false, exercisesToAdd.lowerBody,  'ex_FullRomLegPress');
                addEx(cc, false, exercisesToAdd.lowerBody,  'ex_BackSquatsFullRom');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_GarlandPose');
            }

            // ── FINGER TO FLOOR ──
            if (document.getElementById('fingerToFloor').value) {
                const cc = colorSelections['fingerToFloor'].category || colorSelections['fingerToFloor'];
                addEx(cc, false, exercisesToAdd.lowerBody,  'ex_RomanianDeadlift');
                addEx(cc, false, exercisesToAdd.lowerBody,  'ex_StiffLegDeadlift');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_HamstringStretching');
            }

            // ── KNEE EXTENSION ──
            if (document.getElementById('kneeExtension').value) {
                const cc = colorSelections['kneeExtension'].category || colorSelections['kneeExtension'];
            }

            // Remove duplicates and populate tables
            const uniqueExercises = {
                upperBody: removeDuplicateExercises(exercisesToAdd.upperBody),
                lowerBody: removeDuplicateExercises(exercisesToAdd.lowerBody),
                stretching: removeDuplicateExercises(exercisesToAdd.stretching)
            };

            populateExerciseTable('upperBodyExercises', uniqueExercises.upperBody);
            populateExerciseTable('lowerBodyExercises', uniqueExercises.lowerBody);
            populateExerciseTable('stretchingExercises', uniqueExercises.stretching);
        }
        
        // Remove duplicate exercises
        function removeDuplicateExercises(exercises) {
            const merged = {};
            exercises.forEach(ex => {
                if (!merged[ex.name]) {
                    merged[ex.name] = { ...ex };
                }
            });
            return Object.values(merged);
        }
        
        // Populate a specific exercise table
        function populateExerciseTable(tableId, exercises) {
            const tbody = document.getElementById(tableId);
            tbody.innerHTML = '';
            
            if (exercises.length === 0) {
                tbody.innerHTML = \`<tr><td colspan="3" style="text-align: center; padding: 20px; color: #999;" data-i18n="noExercises">\${t('noExercises')}</td></tr>\`;
                return;
            }
            
            const _exKeyMap = buildKeyMap('ex_');
            exercises.forEach(ex => {
                const exKey = _exKeyMap[ex.name] || '';
                const row = document.createElement('tr');
                const enName = exKey ? translations.en[exKey] || ex.name : ex.name;
                const arName = exKey ? translations.ar[exKey] || '' : '';
                const displayName = (currentMode === 'bilingual' && arName)
                    ? \`\${enName} / \${arName}\`
                    : ex.name;
                row.innerHTML = \`
                    <td class="exercise-name"\${exKey ? \` data-ex-key="\${exKey}"\` : ''}>\${displayName}</td>
                    <td data-num="\${ex.sets}">\${numFmt(ex.sets)}</td>
                    <td data-num="\${ex.reps}">\${translateReps(ex.reps, currentLang)}</td>
                \`;
                tbody.appendChild(row);
            });
        }
        
        // Auto-calculate colors for all measurements based on normal values
        function autoCalculateColors() {
            // Clear existing color selections
            Object.keys(colorSelections).forEach(key => delete colorSelections[key]);
            
            // Calculate color for each field that has a value
            Object.keys(normalValues).forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (input && input.value) {
                    const value = parseFloat(input.value);
                    const rangeData = normalValues[fieldId];
                    const result = calculateColorCategory(value, rangeData);
                    
                    if (result) {
                        colorSelections[fieldId] = result;
                    }
                }
            });
        }
        
        // Handle Enter key to move to next input
        document.addEventListener('DOMContentLoaded', function() {
            // Prevent scroll from changing number input values
            document.addEventListener('wheel', function(e) {
                if (document.activeElement && document.activeElement.type === 'number') {
                    document.activeElement.blur();
                }
            }, { passive: false });

            // Initialize autocomplete
            initializeAutocomplete();
            
            // Initialize comparison indicators
            setupComparisonIndicators();
            
            // Setup Enter key navigation
            const form = document.getElementById('assessmentForm');
            const inputs = form.querySelectorAll('input[type="number"], input[type="text"], input[type="date"], select');
            
            inputs.forEach((input, index) => {
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        
                        // Find next input that is not hidden or disabled
                        let nextIndex = index + 1;
                        while (nextIndex < inputs.length) {
                            const nextInput = inputs[nextIndex];
                            if (nextInput.offsetParent !== null && !nextInput.disabled) {
                                nextInput.focus();
                                break;
                            }
                            nextIndex++;
                        }
                    }
                });
            });
        });
        
        // Form submission handler
        document.getElementById('assessmentForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Auto-calculate all colors based on values
            autoCalculateColors();
            
            // Get client info
            const clientName = document.getElementById('clientName').value;
            const assessmentDate = document.getElementById('assessmentDate').value;
            
            // Collect all measurements
            const measurements = {};
            Object.keys(normalValues).forEach(fieldId => {
                const input = document.getElementById(fieldId);
                if (input && input.value) {
                    measurements[fieldId] = input.value;
                }
            });
            
            // Add pelvic tilt side
            const pelvicTiltSide = document.getElementById('pelvicTiltSide').value;
            if (pelvicTiltSide) {
                measurements['pelvicTiltSide'] = pelvicTiltSide;
            }
            
            // Save to database
            await saveAssessment(clientName, assessmentDate, measurements);
            
            // Format date
            const date = new Date(assessmentDate + 'T12:00:00');
            const formattedDate = date.toLocaleDateString(
                currentLang === 'ar' ? 'ar-SA' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
            );
            
            // Update client info in display page
            document.getElementById('displayName').textContent = \`\${t('clientPrefix')} \${clientName}\`;
            const displayDateEl2 = document.getElementById('displayDate');
            displayDateEl2.textContent = formattedDate;
            displayDateEl2.setAttribute('data-date-raw', assessmentDate);
            
            // Update all measurements
            const pelvicTiltValue = document.getElementById('pelvicTilt').value;
            if (pelvicTiltValue && pelvicTiltSide) {
                updateMeasurement('pelvicTilt', t('ml_PelvicTilt'), '°', '', pelvicTiltSide + ' ');
            } else if (pelvicTiltValue && !pelvicTiltSide) {
                updateMeasurement('pelvicTilt', t('ml_PelvicTilt'), '°', '', '');
            } else {
                // Hide pelvic tilt if no value
                const remarkItems = document.querySelectorAll('.remark-item');
                remarkItems.forEach(item => {
                    const labelElement = item.querySelector('.remark-label');
                    if (labelElement && (labelElement.textContent === 'Pelvic Tilt' || labelElement.textContent === 'إمالة الحوض')) {
                        item.style.display = 'none';
                    }
                });
            }
            updateMeasurement('leftHKA', t('ml_LeftHKA'), '°');
            updateMeasurement('rightHKA', t('ml_RightHKA'), '°');
            updateMeasurement('leftShoulderSlope', t('ml_LeftShoulderSlope'), '°');
            updateMeasurement('rightShoulderSlope', t('ml_RightShoulderSlope'), '°');
            
            updateMeasurement('forwardHeadRight', t('ml_FHARight'), '°');
            updateMeasurement('roundedShoulderRight', t('ml_RSRight'), '°');
            updateMeasurement('thoracicKyphosisRight', t('ml_TKRight'), '°');
            updateMeasurement('lumbarLordosisRight', t('ml_LumbarLordosisRight'), '°');
            updateMeasurement('kendallKneeRight', t('ml_KKRight'), '°');
            
            updateMeasurement('forwardHeadLeft', t('ml_FHALeft'), '°');
            updateMeasurement('forwardShoulderLeft', t('ml_RSLeft'), '°');
            updateMeasurement('thoracicKyphosisLeft', t('ml_TKLeft'), '°');
            updateMeasurement('lumbarLordosisLeft', t('ml_LumbarLordosisLeft'), '°');
            updateMeasurement('kendallKneeLeft', t('ml_KKLeft'), '°');
            
            updateMeasurement('pelvicStability', t('ml_PelvicStability'), '°');
            updateMeasurement('spineNeutrality', t('ml_SpinalNeutrality'), '°');
            updateMeasurement('squatDepth', t('ml_SquatDepth'), '°');
            updateMeasurement('shoulderStability', t('ml_ShoulderStability'), '°');
            updateMeasurement('hipHinge', t('ml_HipHinge'), '°');
            updateMeasurement('fingerToFloor', t('ml_FingerToFloor'), ' cm');
            updateMeasurement('kneeExtension', t('ml_KneeExtension'), '°');
            
            // Generate dynamic exercise tables based on measurements
            generateDynamicExercises();
            
            // Update last-visible classes for each remarks section
            updateLastVisibleItems();
            
            // Switch to display page
            setLanguage(_autoLanguageOverride || 'bilingual');
            _autoLanguageOverride = null;
            document.getElementById('inputPage').classList.remove('active');
            document.getElementById('automatedPage').classList.remove('active');
            document.getElementById('displayPage').classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);

            // Bodydot auto-print: once the program is rendered, open the print dialog
            // (mirrors the standalone downloadPDF flow with its dynamic @page sizing).
            if (window.__BODYDOT__ && window.__BODYDOT__.autoPrint) {
                window.__BODYDOT__.autoPrint = false;
                setTimeout(function () { downloadPDF(); }, 150);
            }
        });

        function updateMeasurement(fieldId, label, unit, suffix = '', prefix = '') {
            const _el = document.getElementById(fieldId);
            if (!_el) return;
            const value = _el.value;
            const colorData = colorSelections[fieldId];
            let color = 'normal';
            let isOutOfRange = false;
            
            // Get comparison arrow if previous data exists
            let comparisonArrow = '';
            if (previousTestData && previousTestData.measurements) {
                const currentValue = parseFloat(value);
                const previousValue = previousTestData.measurements[fieldId];
                
                if (!isNaN(currentValue) && previousValue !== undefined && previousValue !== null) {
                    const prevValue = parseFloat(previousValue);
                    if (!isNaN(prevValue)) {
                        const rangeData = normalValues[fieldId];
                        if (rangeData) {
                            const currentResult = calculateColorCategory(currentValue, rangeData);
                            const previousResult = calculateColorCategory(prevValue, rangeData);
                            
                            let indicator = '';
                            let className = '';
                            
                            if (currentResult.category === 'normal' && previousResult.category !== 'normal') {
                                indicator = '↑';
                                className = 'comparison-improved';
                            } else if (currentResult.category === 'abnormal' && previousResult.category !== 'abnormal') {
                                indicator = '↓';
                                className = 'comparison-worsened';
                            } else if (currentResult.category === previousResult.category) {
                                const currentDist = getDistanceFromNormal(currentValue, rangeData);
                                const previousDist = getDistanceFromNormal(prevValue, rangeData);
                                
                                if (currentDist < previousDist) {
                                    indicator = '↑';
                                    className = 'comparison-improved';
                                } else if (currentDist > previousDist) {
                                    indicator = '↓';
                                    className = 'comparison-worsened';
                                } else {
                                    indicator = '–';
                                    className = 'comparison-same';
                                }
                            } else if (currentResult.category === 'middle') {
                                if (previousResult.category === 'abnormal') {
                                    indicator = '↑';
                                    className = 'comparison-improved';
                                } else {
                                    indicator = '↓';
                                    className = 'comparison-worsened';
                                }
                            } else if (previousResult.category === 'middle') {
                                if (currentResult.category === 'normal') {
                                    indicator = '↑';
                                    className = 'comparison-improved';
                                } else {
                                    indicator = '↓';
                                    className = 'comparison-worsened';
                                }
                            }
                            
                            if (indicator) {
                                comparisonArrow = \` <span class="\${className}">\${indicator}</span>\`;
                            }
                        }
                    }
                }
            }
            
            if (colorData) {
                if (typeof colorData === 'object') {
                    // Use the category directly from zone-based calculation
                    color = colorData.category;
                    
                    // Determine if out of range
                    if (color === 'abnormal') {
                        isOutOfRange = true;
                    } else if (color === 'middle') {
                        // Check if middle value is on abnormal side
                        const val = colorData.value;
                        const normalStart = colorData.normalStart;
                        const normalEnd = colorData.normalEnd;
                        
                        // If value is outside the normal range (even in middle zone), it's out of range
                        if (val < normalStart || val > normalEnd) {
                            isOutOfRange = true;
                        }
                    }
                } else {
                    // Legacy format
                    color = colorData;
                    if (color === 'abnormal') {
                        isOutOfRange = true;
                    }
                }
            }
            
            // Determine which container to use
            const containerId = isOutOfRange ? 'outOfRangeResults' : 'withinRangeResults';
            const container = document.getElementById(containerId);
            const otherContainerId = isOutOfRange ? 'withinRangeResults' : 'outOfRangeResults';
            const otherContainer = document.getElementById(otherContainerId);
            
            if (!container) return;
            
            // Check if item exists in the correct container first
            let remarkItem = container.querySelector(\`[data-field="\${fieldId}"]\`);
            
            // If not in correct container, check the other container
            if (!remarkItem && otherContainer) {
                remarkItem = otherContainer.querySelector(\`[data-field="\${fieldId}"]\`);
                if (remarkItem) {
                    // Move it to the correct container
                    container.appendChild(remarkItem);
                }
            }
            
            if (!remarkItem) {
                remarkItem = document.createElement('div');
                remarkItem.className = 'remark-item';
                remarkItem.setAttribute('data-field', fieldId);
                
                const labelElement = document.createElement('span');
                labelElement.className = 'remark-label';
                labelElement.textContent = label;
                // Store translation key for language switching
                const _mlKeys = Object.keys(translations.en).filter(k => k.startsWith('ml_'));
                const _mlKey = _mlKeys.find(k => translations.en[k] === label || (translations.ar && translations.ar[k] === label)) || '';
                if (_mlKey) labelElement.setAttribute('data-ml-key', _mlKey);
                
                const valueElement = document.createElement('span');
                valueElement.className = 'remark-value';
                
                const normalElement = document.createElement('span');
                normalElement.className = 'remark-normal';
                
                remarkItem.appendChild(labelElement);
                remarkItem.appendChild(valueElement);
                remarkItem.appendChild(normalElement);
                container.appendChild(remarkItem);
            }
            
            if (value) {
                // Show the item and update its value
                remarkItem.style.display = '';
                const valueElement = remarkItem.querySelector('.remark-value');
                valueElement.className = 'remark-value';
                valueElement.setAttribute('data-raw-value', value);
                valueElement.setAttribute('data-prefix', prefix);
                valueElement.setAttribute('data-unit', unit);
                valueElement.setAttribute('data-suffix', suffix);
                const _pfx = localiseText(prefix, currentLang);
                const _unit = localiseText(unit, currentLang);
                const _sfx = localiseText(suffix, currentLang);
                valueElement.innerHTML = _pfx + numFmt(value) + _unit + (_sfx ? ' ' + _sfx : '') + comparisonArrow;
                
                // Display normal range if available
                const normalElement = remarkItem.querySelector('.remark-normal');
                if (colorData && typeof colorData === 'object') {
                    const normalInfo = normalValues[fieldId];
                    if (normalInfo && normalInfo.values) {
                        const rangeType = normalInfo.type;
                        let rangeText = '';
                        
                        if (rangeType === 'red-red') {
                            // values: [min_abnormal, normal_low, normal_high, max_abnormal]
                            rangeText = \`\${normalInfo.values[1]}-\${normalInfo.values[2]}\${unit}\`;
                        } else if (rangeType === 'blue-red') {
                            // values: [normal_start, normal_end, max_abnormal]
                            rangeText = \`\${normalInfo.values[0]}-\${normalInfo.values[1]}\${unit}\`;
                        } else if (rangeType === 'red-blue') {
                            // values: [min_abnormal, normal_start, normal_end]
                            rangeText = \`\${normalInfo.values[1]}-\${normalInfo.values[2]}\${unit}\`;
                        }
                        
                        normalElement.setAttribute('data-raw-range', rangeText);
                        normalElement.textContent = currentLang === 'ar' ? localiseText(toArabicNumerals(rangeText), 'ar') : rangeText;
                    }
                }
            } else {
                // Hide the item if no value
                remarkItem.style.display = 'none';
            }
        }
        
        function updateLastVisibleItems() {
            // Get all remarks sections
            const remarksSections = document.querySelectorAll('.remarks');
            
            remarksSections.forEach(section => {
                const items = section.querySelectorAll('.remark-item');
                
                // Remove last-visible class from all items first
                items.forEach(item => item.classList.remove('last-visible'));
                
                // Find the last visible item and add the class
                let lastVisible = null;
                items.forEach(item => {
                    if (item.style.display !== 'none') {
                        lastVisible = item;
                    }
                });
                
                if (lastVisible) {
                    lastVisible.classList.add('last-visible');
                }
            });
        }
        
        // Back button functionality
        function goBackToInput() {
            document.getElementById('displayPage').classList.remove('active');
            // Return to automated page if that's where we came from
            const fromAutomated = _autoCurrentOrgId !== null && _autoAllClients.length > 0;
            if (fromAutomated) {
                document.getElementById('automatedPage').classList.add('active');
            } else {
                document.getElementById('inputPage').classList.add('active');
            }
            window.scrollTo(0, 0);
            setLanguage('bilingual');
        }

        function newProfile() {
            // Clear all input fields
            document.querySelectorAll('#inputPage input[type="text"], #inputPage input[type="number"], #inputPage input[type="date"]').forEach(input => {
                input.value = '';
            });
            // Reset all color buttons to default (clear selections)
            document.querySelectorAll('.color-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            // Clear comparison indicators
            document.querySelectorAll('.comparison-indicator').forEach(el => {
                el.textContent = '';
            });
            // Clear previous test data
            if (typeof previousTestData !== 'undefined') {
                previousTestData = null;
            }
            // Switch back to input page
            document.getElementById('displayPage').classList.remove('active');
            document.getElementById('inputPage').classList.add('active');
            window.scrollTo(0, 0);
        }
        
        // Download PDF functionality
        function downloadPDF() {
            // Get client name for filename
            const clientName = document.getElementById('clientName').value;
            const programTitle = t('programTitle');
            const fileName = clientName ? \`\${clientName.trim()} - \${programTitle}\` : programTitle;

            // Compute content height and set dynamic @page size
            const displayPage = document.getElementById('displayPage');
            const contentHeightPx = displayPage.scrollHeight;
            const isArabic = displayPage.getAttribute('dir') === 'rtl';
            const pageWidthMm = (currentMode === 'bilingual') ? 415 : 380;
            const pxPerMm = 96 / 25.4;
            const isWindows = document.body.classList.contains('windows-os');
            const heightMultiplier = isWindows
                ? (currentMode === 'bilingual' ? 1.10 : 1.03)
                : 1;
            const bottomPadding = currentMode === 'bilingual' ? -18 : (isArabic ? 11 : 10);
            const contentHeightMm = Math.ceil((contentHeightPx / pxPerMm) * heightMultiplier) + bottomPadding;
            const dynStyle = document.createElement('style');
            dynStyle.id = 'dynamic-page-size';
            dynStyle.textContent = \`@media print { @page { size: \${pageWidthMm}mm \${contentHeightMm}mm; margin: 0; } }\`;
            document.head.appendChild(dynStyle);

            // Store original title
            const originalTitle = document.title;
            document.title = fileName;

            // Trigger print dialog
            window.print();

            // Restore after print
            window.addEventListener('afterprint', function cleanup() {
                document.title = originalTitle;
                const s = document.getElementById('dynamic-page-size');
                if (s) s.remove();
                window.removeEventListener('afterprint', cleanup);
            });
        }

        // ===== Automated Page =====
        const AUTO_ORGS = [
            { id: 'bf9ffaec-d3ed-4742-bce9-945f619ea1bc', name: 'Body Motions – Al Sahafa' },
            { id: '1627c00e-e275-4356-91ae-6f85127bd21c', name: 'Body Masters – Al Aarid' },
            { id: 'ebce917d-1c31-4516-8396-64283b4cbeaa', name: 'Body Coach' }
        ];
        // Cache: orgId → client array
        const _autoClientsCache = {};
        // Cache: clientId → session object
        const _autoSessionCache = {};
        let _autoCurrentOrgId = null;
        let _autoLanguageOverride = null;
        let _autoAllClients = [];

        function goToAutomated() {
            document.getElementById('inputPage').classList.remove('active');
            document.getElementById('automatedPage').classList.add('active');
            window.scrollTo(0, 0);
            // Render org cards (static, always shown)
            const orgList = document.getElementById('autoOrgList');
            orgList.innerHTML = AUTO_ORGS.map(org => \`
                <div onclick="loadAutoOrg('\${org.id}','\${org.name}')"
                     id="autoOrgCard_\${org.id}"
                     style="flex:1;min-width:220px;background:white;border:2px solid #dee2e6;border-radius:10px;padding:20px 22px;cursor:pointer;transition:border-color .15s,box-shadow .15s;"
                     onmouseover="this.style.borderColor='#117a65'" onmouseout="this.style.borderColor=_autoCurrentOrgId==='\${org.id}'?'#117a65':'#dee2e6'">
                    <div style="font-weight:700;font-size:15px;color:#1a2533;">\${org.name}</div>
                    <div style="font-size:12px;color:#aaa;margin-top:4px;">Click to view clients</div>
                </div>\`).join('');
            // Hide client area until org is chosen
            document.getElementById('autoClientArea').style.display = 'none';
        }

        function goBackFromAutomated() {
            document.getElementById('automatedPage').classList.remove('active');
            document.getElementById('inputPage').classList.add('active');
            window.scrollTo(0, 0);
        }

        async function loadAutoOrg(orgId, orgName) {
            _autoCurrentOrgId = orgId;
            // Highlight selected card
            AUTO_ORGS.forEach(o => {
                const card = document.getElementById(\`autoOrgCard_\${o.id}\`);
                if (card) card.style.borderColor = o.id === orgId ? '#117a65' : '#dee2e6';
            });
            document.getElementById('autoOrgTitle').textContent = orgName;
            document.getElementById('autoClientSearch').value = '';
            const listEl = document.getElementById('autoClientList');
            const area = document.getElementById('autoClientArea');
            area.style.display = 'block';

            // Use cache if available
            if (_autoClientsCache[orgId]) {
                _autoAllClients = _autoClientsCache[orgId];
                renderAutoClients(_autoAllClients);
                return;
            }

            listEl.innerHTML = '<div style="color:#888;padding:16px 0;font-size:14px;">Loading clients…</div>';
            try {
                const token = await getBASToken();
                const resp = await fetch(\`\${BAS_API}/clients?organizationId=\${orgId}\`, {
                    headers: { 'Authorization': \`Bearer \${token}\` }
                });
                if (!resp.ok) throw new Error(\`HTTP \${resp.status}\`);
                const data = await resp.json();
                const clients = Array.isArray(data) ? data : (data.data || []);

                // Sort alphabetically by name
                clients.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

                _autoClientsCache[orgId] = clients;
                _autoAllClients = clients;
                renderAutoClients(clients);
            } catch (err) {
                listEl.innerHTML = \`<div style="color:#c0392b;font-size:13px;padding:12px 0;">Error loading clients: \${err.message}</div>\`;
            }
        }

        function renderAutoClients(clients) {
            const listEl = document.getElementById('autoClientList');
            if (!clients.length) {
                listEl.innerHTML = '<div style="color:#999;font-size:13px;padding:12px 0;">No clients found.</div>';
                return;
            }
            listEl.innerHTML = clients.map((c, i) => {
                const border = i < clients.length - 1 ? 'border-bottom:1px solid #f0f0f0;' : '';
                return \`<div id="autoRow_\${c.id}" style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;\${border}">
                    <div>
                        <div style="font-size:14px;font-weight:600;color:#1B3448;">\${c.name || '—'}</div>
                    </div>
                    <button onclick="generateAutoClient('\${c.id}','\${(c.name||'').replace(/'/g,"\\\\'")}','\${_autoCurrentOrgId}')"
                        id="autoBtn_\${c.id}"
                        style="background:#117a65;color:white;border:none;padding:7px 18px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;white-space:nowrap;">
                        Generate PDF
                    </button>
                </div>\`;
            }).join('');
        }

        function filterAutoClients() {
            const q = document.getElementById('autoClientSearch').value.toLowerCase();
            const filtered = _autoAllClients.filter(c => (c.name || '').toLowerCase().includes(q));
            renderAutoClients(filtered);
        }

        async function generateAutoClient(clientId, clientName, orgId) {
            const btn = document.getElementById(\`autoBtn_\${clientId}\`);
            if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }
            try {
                let session;
                if (_autoSessionCache[clientId]) {
                    session = _autoSessionCache[clientId];
                } else {
                    const token = await getBASToken();
                    const resp = await fetch(\`\${BAS_API}/clients/\${clientId}/measurement-sessions/latest\`, {
                        headers: { 'Authorization': \`Bearer \${token}\` }
                    });
                    if (!resp.ok) throw new Error('No session found');
                    session = await resp.json();
                    _autoSessionCache[clientId] = session;
                }
                // Fill the form
                fillFormFromBAS(session, clientName, null);
                // Ensure required fields are populated
                if (!document.getElementById('assessmentDate').value) {
                    document.getElementById('assessmentDate').value = new Date().toISOString().split('T')[0];
                }
                // Body Coach center uses English-only, all others bilingual
                const isBodyCoach = (orgId || '').trim() === 'ebce917d-1c31-4516-8396-64283b4cbeaa';
                _autoLanguageOverride = isBodyCoach ? 'en' : 'bilingual';
                // Switch to display page by submitting the form
                autoCalculateColors();
                document.getElementById('assessmentForm').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            } catch (err) {
                alert(\`Could not generate PDF for \${clientName}: \${err.message}\`);
            } finally {
                if (btn) { btn.disabled = false; btn.textContent = 'Generate PDF'; }
            }
        }

        // ===== Bodydot API Service (BAS) Integration =====
        // When running locally, route through the CORS proxy (node proxy.js).
        // When deployed on a server that has CORS access, calls go direct.
        const _isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '';
        const WORKER_URL = 'https://bdot-proxy.andyayas27.workers.dev';
        const BAS_API = _isLocal ? 'http://localhost:3001/v1' : \`\${WORKER_URL}/v1\`;
        const BAS_CREDS = 'YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk';
        const BAS_ORG_IDS = [
            'bf9ffaec-d3ed-4742-bce9-945f619ea1bc',
            '1627c00e-e275-4356-91ae-6f85127bd21c',
            'ebce917d-1c31-4516-8396-64283b4cbeaa'
        ];
        let _basToken = null;
        let _basTokenExpiry = 0;

        async function getBASToken() {
            if (_basToken && Date.now() < _basTokenExpiry - 60000) return _basToken;
            const resp = await fetch(\`\${BAS_API}/oauth/token\`, {
                method: 'POST',
                headers: { 'Authorization': \`Basic \${BAS_CREDS}\`, 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'grant_type=client_credentials'
            });
            const data = await resp.json();
            _basToken = data.access_token;
            _basTokenExpiry = Date.now() + (data.expires_in * 1000);
            return _basToken;
        }

        function fillFormFromBAS(session, clientName, birthDate) {
            // Build flat map: "stepCode.valueCode" → numeric value
            // Prefer 'custom' sequence; fall back to any sequence
            const sequences = session.sequences || [];
            const hasCustom = sequences.some(s => s.code === 'custom');
            const values = {};
            for (const seq of sequences) {
                if (hasCustom && seq.code !== 'custom') continue;
                for (const step of seq.stepResults || []) {
                    // basicPostureAssessment uses "…Simple" step codes (standingFrontSimple,
                    // standingRightSimple, …). Normalize to the base codes the field map expects
                    // so basic-only tests fill in instead of coming back empty.
                    const stepCode = (step.stepCode || '').replace(/Simple$/, '');
                    for (const v of (step.data?.values || [])) {
                        values[\`\${stepCode}.\${v.valueCode}\`] = v.value;
                    }
                }
            }

            const fmt = v => (v !== undefined && v !== null) ? parseFloat(v.toFixed(1)) : null;
            const fieldMap = {
                // Standing Front
                leftShoulderSlope:     fmt(values['standingFront.leftShoulderSlope']),
                rightShoulderSlope:    fmt(values['standingFront.rightShoulderSlope']),
                leftHKA:               fmt(values['standingFront.leftHKAAngle']),
                rightHKA:              fmt(values['standingFront.rightHKAAngle']),
                // Standing Right
                forwardHeadRight:      fmt(values['standingRight.forwardHeadAngle']),
                roundedShoulderRight:  fmt(values['standingRight.forwardShoulderAngle']),
                thoracicKyphosisRight: fmt(values['standingRight.thoracicKyphosis']),
                lumbarLordosisRight:   fmt(values['standingRight.lumbarLordosis']),
                kendallKneeRight:      fmt(values['standingRight.kendallSidePostureKnee']),
                // Standing Left
                forwardHeadLeft:       fmt(values['standingLeft.forwardHeadAngleLeft']),
                forwardShoulderLeft:   fmt(values['standingLeft.forwardShoulderAngleLeft']),
                thoracicKyphosisLeft:  fmt(values['standingLeft.thoracicKyphosisLeft']),
                lumbarLordosisLeft:    fmt(values['standingLeft.lumbarLordosisLeft']),
                kendallKneeLeft:       fmt(values['standingLeft.kendallSidePostureKneeLeft']),
                // Overhead Squat
                shoulderStability:     fmt(values['overheadSquatRight.overheadSquatArmAngle']),
                squatDepth:            fmt(values['overheadSquatRight.overheadSquatKneeDepth']),
                spineNeutrality:       fmt(values['overheadSquatRight.overheadSquatTrunkAngle']),
                pelvicStability:       fmt(values['overheadSquatRight.overheadSquatPelvicAngle']),
                // Toe Touch
                kneeExtension:         fmt(values['toeTouchingRight.toeTouchKneeAngle']),
                fingerToFloor:         values['toeTouchingRight.toeTouchDistance'] !== undefined ? fmt(values['toeTouchingRight.toeTouchDistance'] * 100) : null,
                hipHinge:              fmt(values['toeTouchingRight.toeTouchHipAngle']),
            };

            // Pelvic tilt from frontalASISAlignment (sign → side)
            const pelvis = values['standingFront.frontalASISAlignment'];
            if (pelvis !== undefined && pelvis !== null) {
                fieldMap.pelvicTilt = fmt(Math.abs(pelvis));
                const sideEl = document.getElementById('pelvicTiltSide');
                if (sideEl) sideEl.value = pelvis >= 0 ? 'Right' : 'Left';
            }

            // Fill numeric inputs
            for (const [id, val] of Object.entries(fieldMap)) {
                if (val === null) continue;
                const el = document.getElementById(id);
                if (el) {
                    el.value = val;
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }

            // Client name
            if (clientName) {
                document.getElementById('clientName').value = clientName;
            }

            // Assessment date from session createdAt
            if (session.createdAt) {
                document.getElementById('assessmentDate').value = session.createdAt.split('T')[0];
            }

            // Trigger color auto-calculation
            if (typeof autoCalculateColors === 'function') autoCalculateColors();
        }

        // ===== Bodydot bootstrap =====
        // The host React app injects window.__BODYDOT__ = { session, clientName, lang, autoPrint }
        // before this document loads. We fill the (hidden) form from the Bodydot session and
        // run the normal submit pipeline, which renders the program and (if autoPrint) prints it.
        document.addEventListener('DOMContentLoaded', function () {
            var b = window.__BODYDOT__;
            if (!b || !b.session) return;
            try {
                fillFormFromBAS(b.session, b.clientName || '', null);
                var dateEl = document.getElementById('assessmentDate');
                if (dateEl && !dateEl.value) {
                    dateEl.value = new Date().toISOString().split('T')[0];
                }
                // Body Coach center → English-only; everyone else bilingual (same rule as the original).
                _autoLanguageOverride = (b.lang === 'en') ? 'en' : 'bilingual';
                autoCalculateColors();
                document.getElementById('assessmentForm')
                    .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            } catch (err) {
                document.body.innerHTML =
                    '<p style="font-family:sans-serif;padding:40px;color:#c0392b;">' +
                    'Could not render program: ' + (err && err.message ? err.message : err) + '</p>';
            }
        });
    <\/script>
</body>
</html>`,Cb=`${window.location.origin}/VALD-automator/bodydot/`;function Gs(e,n,t){const r={session:e,clientName:n,lang:t?"bilingual":"en",autoPrint:!0},a='<meta charset="UTF-8">',i=`<base href="${Cb}"><script>window.__BODYDOT__ = ${JSON.stringify(r)};<\/script>`,o=Tb.replace(a,`${a}${i}`),l=new Blob([o],{type:"text/html"}),s=URL.createObjectURL(l);if(!window.open(s,"_blank"))throw URL.revokeObjectURL(s),new Error("Popup blocked — allow popups for this site and try again.");setTimeout(()=>URL.revokeObjectURL(s),6e4)}function Nb({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o,allowCustom:l=!1}){const[s,u]=b.useState(n||""),[d,p]=b.useState(!1),[g,w]=b.useState(0),m=b.useRef(null),v=b.useRef(null),y=s?e.filter(h=>h.toLowerCase().includes(s.toLowerCase())):e;b.useEffect(()=>{function h(S){m.current&&!m.current.contains(S.target)&&p(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),b.useEffect(()=>{u(n||"")},[n]),b.useEffect(()=>{w(0)},[s]);function x(h){t(h),u(h),p(!1),r&&r(h)}function f(h){!d||y.length===0||(h.key==="ArrowDown"?(h.preventDefault(),w(S=>Math.min(S+1,y.length-1))):h.key==="ArrowUp"?(h.preventDefault(),w(S=>Math.max(S-1,0))):h.key==="Enter"?(h.preventDefault(),x(y[g])):h.key==="Escape"&&p(!1))}return b.useEffect(()=>{if(!v.current)return;const h=v.current.children[g];h&&h.scrollIntoView({block:"nearest"})},[g]),c.jsxs("div",{ref:m,className:"relative",children:[c.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:s,disabled:i,onChange:h=>{const S=h.target.value;u(S),p(!0),l?t(S):S||t("")},onFocus:()=>p(!0),onKeyDown:f}),d&&!i&&y.length>0&&c.jsx("ul",{ref:v,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:y.map((h,S)=>c.jsx("li",{onMouseDown:()=>x(h),onMouseEnter:()=>w(S),className:`px-3 py-2 text-sm cursor-pointer ${S===g?"bg-gray-700 text-white":h===n?"text-brand-400 font-semibold":"text-white"}`,children:h},h))})]})}function Lb({test:e,org:n,roster:t,onStatus:r,picker:a}){const i=c.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.client_name||""),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),o=e.stored||{},[l,s]=b.useState(o.trainer_name||""),[u,d]=b.useState(o.dispatch_date||new Date().toISOString().slice(0,10)),[p,g]=b.useState(!1),[w,m]=b.useState(!1),[v,y]=b.useState("");b.useEffect(()=>{n.gym&&n.branch&&l?um(n.gym,n.branch,l).then(_=>{var C;return y(((C=_.data)==null?void 0:C.whatsapp)||"")}).catch(()=>y("")):y("")},[n.gym,n.branch,l]);const x=()=>({gym:n.gym,org_id:n.id,client_id:e.client_id,client_name:e.client_name||"",session_id:e.session_id,test_date:e.test_date,valid:e.valid}),f=async()=>{var _,C;g(!0);try{const{data:R}=await Qu({...x(),trainer_name:l.trim()||null,dispatch_date:u||null,sent:o.sent||!1});r(e.session_id,R)}catch(R){alert("Error approving: "+(((C=(_=R.response)==null?void 0:_.data)==null?void 0:C.detail)||R.message))}finally{g(!1)}},h=async()=>{var _,C;g(!0);try{const{data:R}=await Q0(x());r(e.session_id,R)}catch(R){alert("Error ignoring: "+(((C=(_=R.response)==null?void 0:_.data)==null?void 0:C.detail)||R.message))}finally{g(!1)}},S=async()=>{m(!0);try{const _=await Wi(e.client_id,e.session_id);Gs(_,e.client_name||"",n.bilingual)}catch(_){alert("Could not open program: "+_.message)}finally{m(!1)}},E=()=>{if(!v){alert("No WhatsApp number set for this trainer.");return}window.open(`https://wa.me/${v.replace(/\D/g,"")}`,"_blank")},T=async()=>{var _,C;g(!0);try{const{data:R}=await Qu({...x(),trainer_name:null,dispatch_date:null,sent:!1});r(e.session_id,R)}catch(R){alert("Error approving: "+(((C=(_=R.response)==null?void 0:_.data)==null?void 0:C.detail)||R.message))}finally{g(!1)}};return e.valid?c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-4",children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"NEW"}),c.jsx("h3",{className:"font-semibold text-white",children:e.client_name||"—"})]}),c.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[c.jsx("span",{children:"VALID"}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.analyzed,"/",e.total]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,i]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),c.jsx(Nb,{options:t,value:l,onChange:s,placeholder:"Search or type a name…",allowCustom:!0,disabled:p})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),c.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:u,onChange:_=>d(_.target.value),disabled:p})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[c.jsx("button",{onClick:S,disabled:w,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:w?"Loading…":"🖨 Open & Print"}),c.jsx("button",{onClick:h,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:"Ignore"}),c.jsx("div",{className:"flex-1"}),c.jsxs("button",{onClick:E,disabled:!v,title:v?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[c.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),c.jsx("button",{onClick:f,disabled:p,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"Saving…":"Approve"})]})]}):c.jsxs("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-950/10 px-5 py-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"INVALID"}),c.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),c.jsxs("p",{className:"text-xs mt-0.5 text-gray-500",children:[e.analyzed,"/",e.total," analyzed"]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,i,c.jsx("button",{onClick:T,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"…":"Approve"})]})]})}const hn=25,Ab=4,jb="2026-05-15";function Ys(e){return(e||"").normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/\s+/g," ").trim()}function bm(e,n){const t=Ys(e);return n.every(r=>t.includes(r))}function Pb(e){const n=new Date(e);return isNaN(n)?null:n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function wi(e){const n=new Date(e);if(isNaN(n))return e;const t=n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),r=n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${t} · ${r}`}function Db({test:e,org:n,picker:t,onStatus:r}){var u,d,p;const[a,i]=b.useState(!1),o=((u=e.stored)==null?void 0:u.valid)===!1,l=async()=>{i(!0);try{const g=await Wi(e.client_id,e.session_id);Gs(g,e.client_name||"",n.bilingual)}catch(g){alert("Could not generate program: "+g.message)}finally{i(!1)}},s=async()=>{var g,w;i(!0);try{const{data:m}=await J0(e.session_id);r(e.session_id,m)}catch(m){alert("Could not undo: "+(((w=(g=m.response)==null?void 0:g.data)==null?void 0:w.detail)||m.message))}finally{i(!1)}};return c.jsxs("div",{className:`flex items-center justify-between gap-4 rounded-xl border px-5 py-3 ${o?"border-red-900/50 bg-red-950/10":"border-emerald-800/60 bg-emerald-950/10"}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[o?c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"RECORDED · INVALID"}):c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"APPROVED"}),c.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),c.jsxs("p",{className:"text-xs mt-0.5 text-gray-400",children:[wi(e.created_at||e.test_date),!o&&((d=e.stored)!=null&&d.trainer_name?c.jsxs("span",{className:"text-emerald-400",children:[" · ",e.stored.trainer_name]}):" · no trainer"),(p=e.stored)!=null&&p.sent?" · sent":""]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t,!o&&c.jsx("button",{onClick:l,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:a?"Loading…":"Generate Program"}),c.jsx("button",{onClick:s,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 disabled:opacity-50 transition-colors",children:"Undo"})]})]})}function Ob({client:e,org:n,roster:t,statusMap:r,onStatus:a,searching:i}){const[o,l]=b.useState(void 0),[s,u]=b.useState(null),[d,p]=b.useState(void 0);b.useEffect(()=>{let h=!0;return l(void 0),u(null),ym(e.id).then(S=>h&&l((S||[]).filter(E=>(E.createdAt||"").slice(0,10)>=jb))).catch(()=>h&&l(null)),()=>{h=!1}},[e.id]);const g=s||o&&o[0]&&o[0].id;b.useEffect(()=>{let h=!0;if(g)return p(void 0),Wi(e.id,g).then(S=>h&&p(S)).catch(()=>h&&p(null)),()=>{h=!1}},[e.id,g]);const w=h=>c.jsxs("div",{className:"rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm",children:[c.jsx("span",{className:"font-medium text-white",children:e.name||"—"}),c.jsxs("span",{className:"text-gray-500",children:[" · ",h]})]});if(o===void 0)return i?w("loading tests…"):null;if(!o||!o.length)return i?w("no test data"):null;const m=o.find(h=>h.id===g)||o[0],v=r[g],y=d?Sb(d):null,x={client_id:e.id,client_name:e.name,session_id:g,created_at:m.createdAt,test_date:(m.createdAt||"").slice(0,10),valid:y?y.valid:void 0,analyzed:y?y.analyzed:0,total:y?y.total:0,stored:v},f=o.length>1?c.jsx("select",{value:g,onChange:h=>u(h.target.value),className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:o.map((h,S)=>c.jsxs("option",{value:h.id,children:[wi(h.createdAt),S===0?" (latest)":""]},h.id))}):c.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:wi(m.createdAt)});return v!=null&&v.approved?c.jsx(Db,{test:x,org:n,picker:f,onStatus:a}):d===void 0?w("checking validity…"):c.jsx(Lb,{test:x,org:n,roster:t,onStatus:a,picker:f})}function Ib({org:e}){const[n,t]=b.useState([]),[r,a]=b.useState(!1),[i,o]=b.useState(null),[l,s]=b.useState(""),[u,d]=b.useState(0),[p,g]=b.useState([]),[w,m]=b.useState({});b.useEffect(()=>{let E=!0;return a(!0),o(null),t([]),s(""),d(0),m({}),vm(e.id).then(T=>E&&t(T)).catch(T=>E&&o(`Error loading clients: ${T.message}`)).finally(()=>E&&a(!1)),F0(e.gym,e.branch).then(T=>E&&g(T.data||[])).catch(()=>{}),Y0(e.gym).then(T=>{const _={};for(const C of T.data||[])_[C.session_id]=C;E&&m(_)}).catch(()=>{}),()=>{E=!1}},[e.id]);const v=(E,T)=>m(_=>({..._,[E]:T})),y=Ys(l).split(" ").filter(Boolean),x=y.length?n.filter(E=>bm(E.name,y)):n,f=Math.max(1,Math.ceil(x.length/hn)),h=Math.min(u,f-1),S=x.slice(h*hn,h*hn+hn);return c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap",children:[c.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),c.jsx("input",{type:"text",value:l,onChange:E=>{s(E.target.value),d(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),i&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:i}),r?c.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):x.length===0?c.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"space-y-3",children:S.map(E=>c.jsx(Ob,{client:E,org:e,roster:p,statusMap:w,onStatus:v,searching:y.length>0},E.id))}),c.jsx(wm,{safePage:h,totalPages:f,count:S.length,total:x.length,setPage:d})]})]})}function Fb({org:e}){const[n,t]=b.useState([]),[r,a]=b.useState(!1),[i,o]=b.useState(null),[l,s]=b.useState(""),[u,d]=b.useState(0),[p,g]=b.useState({}),w=b.useRef(0);b.useEffect(()=>{let S=!0;return s(""),d(0),o(null),t([]),g({}),a(!0),vm(e.id).then(E=>S&&t(E)).catch(E=>S&&o(`Error loading clients: ${E.message}`)).finally(()=>S&&a(!1)),()=>{S=!1}},[e.id]);const m=Ys(l).split(" ").filter(Boolean),v=m.length?n.filter(S=>bm(S.name,m)):n,y=Math.max(1,Math.ceil(v.length/hn)),x=Math.min(u,y-1),f=v.slice(x*hn,x*hn+hn),h=f.map(S=>S.id).join(",");return b.useEffect(()=>{if(!f.length)return;const S=++w.current,E=f.filter(C=>p[C.id]===void 0);if(!E.length)return;let T=0;const _=async()=>{for(;T<E.length;){if(S!==w.current)return;const C=E[T++];let R=null;try{R=await ym(C.id)}catch{R=null}if(S!==w.current)return;g(P=>({...P,[C.id]:R}))}};Promise.all(Array.from({length:Math.min(Ab,E.length)},_))},[h]),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),c.jsx("input",{type:"text",value:l,onChange:S=>{s(S.target.value),d(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),i&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:i}),r?c.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):v.length===0?c.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"rounded-xl border border-gray-800 bg-gray-900 overflow-hidden",children:f.map(S=>c.jsx(Bb,{client:S,bilingual:e.bilingual,sessionInfo:p[S.id]},S.id))}),c.jsx(wm,{safePage:x,totalPages:y,count:f.length,total:v.length,setPage:d})]})]})}function Bb({client:e,bilingual:n,sessionInfo:t}){const[r,a]=b.useState(!1),[i,o]=b.useState(null),l=Array.isArray(t)?t:[],s=l.length>1,u=i||l[0]&&l[0].id,d=async()=>{if(u){a(!0);try{const g=await Wi(e.id,u);Gs(g,e.name||"",n)}catch(g){alert(`Could not generate program for ${e.name||"client"}: ${g.message}`)}finally{a(!1)}}};let p;return t===void 0?p=c.jsx("span",{className:"text-gray-600",children:"Loading tests…"}):l.length?p=c.jsxs("span",{className:"text-gray-400",children:["Test date: ",Pb(l[0].createdAt),s&&c.jsxs("span",{className:"text-brand-400",children:[" · ",l.length," tests"]})]}):p=c.jsx("span",{className:"text-gray-600",children:"No test data"}),c.jsxs("div",{className:"flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"font-medium text-white",children:e.name||"—"}),c.jsx("p",{className:"text-xs mt-0.5",children:p})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[s&&c.jsx("select",{value:u,onChange:g=>o(g.target.value),disabled:r,className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:l.map((g,w)=>c.jsxs("option",{value:g.id,children:[wi(g.createdAt),w===0?" (latest)":""]},g.id))}),c.jsx("button",{onClick:d,disabled:r||!u,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:r?"Loading…":"Generate Program"})]})]})}function wm({safePage:e,totalPages:n,count:t,total:r,setPage:a}){return c.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400",children:[c.jsxs("span",{children:[e*hn+1,"–",e*hn+t," of ",r]}),n>1&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>a(i=>Math.max(0,i-1)),disabled:e===0,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"← Prev"}),c.jsxs("span",{className:"text-gray-500",children:["Page ",e+1," of ",n]}),c.jsx("button",{onClick:()=>a(i=>Math.min(n-1,i+1)),disabled:e>=n-1,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"Next →"})]})]})}function zb(){const[e,n]=b.useState(null),t=ed.find(r=>r.id===e);return c.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Bodydot"}),c.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Select a center, search a client, then approve and generate programs."})]}),c.jsx("div",{className:"flex flex-wrap gap-3",children:ed.map(r=>c.jsx("button",{onClick:()=>n(r.id),className:`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${e===r.id?"border-brand-500 bg-brand-900/20":"border-gray-700 bg-gray-900 hover:border-gray-500"}`,children:c.jsx("div",{className:"font-semibold text-white",children:r.name})},r.id))}),t&&(t.branch?c.jsx(Ib,{org:t},t.id):c.jsx(Fb,{org:t},t.id))]})}function Mb(){return c.jsx(nb,{children:c.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-900",children:[c.jsxs("nav",{className:"bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center",children:[c.jsx("div",{className:"flex items-center justify-center mr-12 h-[90px] w-[85px]",children:c.jsx("img",{src:"/VALD-automator/FIT_LOGO.png",alt:"Fit Logo",className:"h-[49px] w-auto object-contain translate-x-[6px]"})}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx(Et,{to:"/",end:!0,className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"VALD Generation"}),c.jsx(Et,{to:"/bodydot",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Bodydot Generation"}),c.jsx(Et,{to:"/reports",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Reports"})]}),c.jsx("div",{className:"flex-1"}),c.jsx("div",{className:"w-px h-6 bg-gray-700 mx-4"}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx(Et,{to:"/quick",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Generate"}),c.jsx(Et,{to:"/quick-report",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Report"}),c.jsx(Et,{to:"/trainers",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Trainers"})]})]}),c.jsx("main",{className:"flex-1 p-6",children:c.jsxs(Kx,{children:[c.jsx(nt,{path:"/",element:c.jsx(ib,{})}),c.jsx(nt,{path:"/reports",element:c.jsx(sb,{})}),c.jsx(nt,{path:"/quick",element:c.jsx(mb,{})}),c.jsx(nt,{path:"/quick-report",element:c.jsx(gb,{})}),c.jsx(nt,{path:"/trainers",element:c.jsx(yb,{})}),c.jsx(nt,{path:"/bodydot",element:c.jsx(zb,{})})]})})]})})}zo.createRoot(document.getElementById("root")).render(c.jsx(Yl.StrictMode,{children:c.jsx(Xx,{children:c.jsx(Mb,{})})}));
