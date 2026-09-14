function Am(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var id={exports:{}},Ei={},od={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Cm=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),ac=Symbol.iterator;function Im(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sd=Object.assign,cd={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=cd,this.updater=t||ld}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ud(){}ud.prototype=Zt.prototype;function Wl(e,n,t){this.props=e,this.context=n,this.refs=cd,this.updater=t||ld}var ql=Wl.prototype=new ud;ql.constructor=Wl;sd(ql,Zt.prototype);ql.isPureReactComponent=!0;var ic=Array.isArray,dd=Object.prototype.hasOwnProperty,Gl={current:null},pd={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,n,t){var r,a={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)dd.call(n,r)&&!pd.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Gr,type:e,key:i,ref:o,props:a,_owner:Gl.current}}function zm(e,n){return{$$typeof:Gr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function Mm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var oc=/\/+/g;function ao(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Mm(""+e.key):n.toString(36)}function Ca(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gr:case Tm:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ao(o,0):r,ic(a)?(t="",e!=null&&(t=e.replace(oc,"$&/")+"/"),Ca(a,n,t,"",function(u){return u})):a!=null&&(Yl(a)&&(a=zm(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(oc,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",ic(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ao(i,l);o+=Ca(i,n,t,s,a)}else if(s=Im(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ao(i,l++),o+=Ca(i,n,t,s,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function da(e,n,t){if(e==null)return e;var r=[],a=0;return Ca(e,r,"","",function(i){return n.call(t,i,a++)}),r}function Hm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},ja={transition:null},Um={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Gl};function md(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:da,forEach:function(e,n,t){da(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return da(e,function(){n++}),n},toArray:function(e){return da(e,function(n){return n})||[]},only:function(e){if(!Yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Zt;M.Fragment=Lm;M.Profiler=Cm;M.PureComponent=Wl;M.StrictMode=Nm;M.Suspense=Om;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;M.act=md;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sd({},e.props),a=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Gl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)dd.call(n,s)&&!pd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gr,type:e.type,key:a,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jm,_context:e},e.Consumer=e};M.createElement=fd;M.createFactory=function(e){var n=fd.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Dm,render:e}};M.isValidElement=Yl;M.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Hm}};M.memo=function(e,n){return{$$typeof:Fm,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=ja.transition;ja.transition={};try{e()}finally{ja.transition=n}};M.unstable_act=md;M.useCallback=function(e,n){return Ce.current.useCallback(e,n)};M.useContext=function(e){return Ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};M.useEffect=function(e,n){return Ce.current.useEffect(e,n)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(e,n,t){return Ce.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return Ce.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return Ce.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return Ce.current.useMemo(e,n)};M.useReducer=function(e,n,t){return Ce.current.useReducer(e,n,t)};M.useRef=function(e){return Ce.current.useRef(e)};M.useState=function(e){return Ce.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return Ce.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.3.1";od.exports=M;var w=od.exports;const Ql=ad(w),$m=Am({__proto__:null,default:Ql},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=w,Vm=Symbol.for("react.element"),Wm=Symbol.for("react.fragment"),qm=Object.prototype.hasOwnProperty,Gm=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,n,t){var r,a={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)qm.call(n,r)&&!Ym.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Vm,type:e,key:i,ref:o,props:a,_owner:Gm.current}}Ei.Fragment=Wm;Ei.jsx=hd;Ei.jsxs=hd;id.exports=Ei;var c=id.exports,Mo={},gd={exports:{}},Ve={},xd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,N){var O=C.length;C.push(N);e:for(;0<O;){var F=O-1>>>1,H=C[F];if(0<a(H,N))C[F]=N,C[O]=H,O=F;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var N=C[0],O=C.pop();if(O!==N){C[0]=O;e:for(var F=0,H=C.length,xe=H>>>1;F<xe;){var X=2*(F+1)-1,Pe=C[X],un=X+1,qe=C[un];if(0>a(Pe,O))un<H&&0>a(qe,Pe)?(C[F]=qe,C[un]=O,F=un):(C[F]=Pe,C[X]=O,F=X);else if(un<H&&0>a(qe,O))C[F]=qe,C[un]=O,F=un;else break e}}return N}function a(C,N){var O=C.sortIndex-N.sortIndex;return O!==0?O:C.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],d=1,p=null,m=3,b=!1,h=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var N=t(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=C)r(u),N.sortIndex=N.expirationTime,n(s,N);else break;N=t(u)}}function v(C){if(y=!1,g(C),!h)if(t(s)!==null)h=!0,G(k);else{var N=t(u);N!==null&&Ae(v,N.startTime-C)}}function k(C,N){h=!1,y&&(y=!1,x(T),T=-1),b=!0;var O=m;try{for(g(N),p=t(s);p!==null&&(!(p.expirationTime>N)||C&&!q());){var F=p.callback;if(typeof F=="function"){p.callback=null,m=p.priorityLevel;var H=F(p.expirationTime<=N);N=e.unstable_now(),typeof H=="function"?p.callback=H:p===t(s)&&r(s),g(N)}else r(s);p=t(s)}if(p!==null)var xe=!0;else{var X=t(u);X!==null&&Ae(v,X.startTime-N),xe=!1}return xe}finally{p=null,m=O,b=!1}}var R=!1,_=null,T=-1,A=5,P=-1;function q(){return!(e.unstable_now()-P<A)}function pe(){if(_!==null){var C=e.unstable_now();P=C;var N=!0;try{N=_(!0,C)}finally{N?V():(R=!1,_=null)}}else R=!1}var V;if(typeof f=="function")V=function(){f(pe)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,le=z.port2;z.port1.onmessage=pe,V=function(){le.postMessage(null)}}else V=function(){S(pe,0)};function G(C){_=C,R||(R=!0,V())}function Ae(C,N){T=S(function(){C(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){h||b||(h=!0,G(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var O=m;m=N;try{return C()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,N){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=m;m=C;try{return N()}finally{m=O}},e.unstable_scheduleCallback=function(C,N,O){var F=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?F+O:F):O=F,C){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=O+H,C={id:d++,callback:N,priorityLevel:C,startTime:O,expirationTime:H,sortIndex:-1},O>F?(C.sortIndex=O,n(u,C),t(s)===null&&C===t(u)&&(y?(x(T),T=-1):y=!0,Ae(v,O-F))):(C.sortIndex=H,n(s,C),h||b||(h=!0,G(k))),C},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(C){var N=m;return function(){var O=m;m=N;try{return C.apply(this,arguments)}finally{m=O}}}})(vd);xd.exports=vd;var Qm=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=w,Ke=Qm;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yd=new Set,Tr={};function gt(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Tr[e]=n,e=0;e<n.length;e++)yd.add(n[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},sc={};function Zm(e){return Ho.call(sc,e)?!0:Ho.call(lc,e)?!1:Xm.test(e)?sc[e]=!0:(lc[e]=!0,!1)}function eh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nh(e,n,t,r){if(n===null||typeof n>"u"||eh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,r,a,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];be[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Jl,Xl);be[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Jl,Xl);be[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Jl,Xl);be[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,n,t,r){var a=be.hasOwnProperty(n)?be[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(nh(n,t,a,r)&&(t=null),r||a===null?Zm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ln=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),Uo=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),bd=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),$o=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),ts=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Sd=Symbol.for("react.offscreen"),cc=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,io;function hr(e){if(io===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);io=n&&n[1]||""}return`
`+io+e}var oo=!1;function lo(e,n){if(!e||oo)return"";oo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{oo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?hr(e):""}function th(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=lo(e.type,!1),e;case 11:return e=lo(e.type.render,!1),e;case 1:return e=lo(e.type,!0),e;default:return""}}function Vo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case _t:return"Portal";case Uo:return"Profiler";case es:return"StrictMode";case $o:return"Suspense";case Ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bd:return(e.displayName||"Context")+".Consumer";case wd:return(e._context.displayName||"Context")+".Provider";case ns:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ts:return n=e.displayName||null,n!==null?n:Vo(e.type)||"Memo";case Cn:n=e._payload,e=e._init;try{return Vo(e(n))}catch{}}return null}function rh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vo(n);case 8:return n===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ah(e){var n=kd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fa(e){e._valueTracker||(e._valueTracker=ah(e))}function Ed(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wo(e,n){var t=n.checked;return re({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function uc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function _d(e,n){n=n.checked,n!=null&&Zl(e,"checked",n,!1)}function qo(e,n){_d(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Go(e,n.type,t):n.hasOwnProperty("defaultValue")&&Go(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function dc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Go(e,n,t){(n!=="number"||Wa(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Yo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return re({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(gr(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function Rd(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function fc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ad(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,Td=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ih=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){ih.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),yr[n]=yr[e]})});function Ld(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||yr.hasOwnProperty(e)&&yr[e]?(""+n).trim():n+"px"}function Nd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Ld(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var oh=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(e,n){if(n){if(oh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function Xo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,It=null,zt=null;function mc(e){if(e=Jr(e)){if(typeof el!="function")throw Error(L(280));var n=e.stateNode;n&&(n=Li(n),el(e.stateNode,e.type,n))}}function Cd(e){It?zt?zt.push(e):zt=[e]:It=e}function jd(){if(It){var e=It,n=zt;if(zt=It=null,mc(e),n)for(e=0;e<n.length;e++)mc(n[e])}}function Pd(e,n){return e(n)}function Dd(){}var so=!1;function Od(e,n,t){if(so)return e(n,t);so=!0;try{return Pd(e,n,t)}finally{so=!1,(It!==null||zt!==null)&&(Dd(),jd())}}function Nr(e,n){var t=e.stateNode;if(t===null)return null;var r=Li(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var nl=!1;if(_n)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){nl=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{nl=!1}function lh(e,n,t,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var wr=!1,qa=null,Ga=!1,tl=null,sh={onError:function(e){wr=!0,qa=e}};function ch(e,n,t,r,a,i,o,l,s){wr=!1,qa=null,lh.apply(sh,arguments)}function uh(e,n,t,r,a,i,o,l,s){if(ch.apply(this,arguments),wr){if(wr){var u=qa;wr=!1,qa=null}else throw Error(L(198));Ga||(Ga=!0,tl=u)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Fd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hc(e){if(xt(e)!==e)throw Error(L(188))}function dh(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return hc(a),e;if(i===r)return hc(a),n;i=i.sibling}throw Error(L(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function Bd(e){return e=dh(e),e!==null?Id(e):null}function Id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Id(e);if(n!==null)return n;e=e.sibling}return null}var zd=Ke.unstable_scheduleCallback,gc=Ke.unstable_cancelCallback,ph=Ke.unstable_shouldYield,fh=Ke.unstable_requestPaint,ce=Ke.unstable_now,mh=Ke.unstable_getCurrentPriorityLevel,as=Ke.unstable_ImmediatePriority,Md=Ke.unstable_UserBlockingPriority,Ya=Ke.unstable_NormalPriority,hh=Ke.unstable_LowPriority,Hd=Ke.unstable_IdlePriority,_i=null,xn=null;function gh(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(_i,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:yh,xh=Math.log,vh=Math.LN2;function yh(e){return e>>>=0,e===0?32:31-(xh(e)/vh|0)|0}var ha=64,ga=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qa(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?r=xr(l):(i&=o,i!==0&&(r=xr(i)))}else o=t&~a,o!==0?r=xr(o):i!==0&&(r=xr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-on(n),a=1<<t,r|=e[t],n&=~a;return r}function wh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-on(i),l=1<<o,s=a[o];s===-1?(!(l&t)||l&r)&&(a[o]=wh(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ud(){var e=ha;return ha<<=1,!(ha&4194240)&&(ha=64),e}function co(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function Sh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-on(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function is(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-on(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var $=0;function $d(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,os,Vd,Wd,qd,al=!1,xa=[],In=null,zn=null,Mn=null,Cr=new Map,jr=new Map,Pn=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xc(e,n){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(n.pointerId)}}function ir(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Jr(n),n!==null&&os(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Eh(e,n,t,r,a){switch(n){case"focusin":return In=ir(In,e,n,t,r,a),!0;case"dragenter":return zn=ir(zn,e,n,t,r,a),!0;case"mouseover":return Mn=ir(Mn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Cr.set(i,ir(Cr.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,jr.set(i,ir(jr.get(i)||null,e,n,t,r,a)),!0}return!1}function Gd(e){var n=rt(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=Fd(t),n!==null){e.blockedOn=n,qd(e.priority,function(){Vd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=il(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Zo=r,t.target.dispatchEvent(r),Zo=null}else return n=Jr(t),n!==null&&os(n),e.blockedOn=t,!1;n.shift()}return!0}function vc(e,n,t){Pa(e)&&t.delete(n)}function _h(){al=!1,In!==null&&Pa(In)&&(In=null),zn!==null&&Pa(zn)&&(zn=null),Mn!==null&&Pa(Mn)&&(Mn=null),Cr.forEach(vc),jr.forEach(vc)}function or(e,n){e.blockedOn===n&&(e.blockedOn=null,al||(al=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,_h)))}function Pr(e){function n(a){return or(a,e)}if(0<xa.length){or(xa[0],e);for(var t=1;t<xa.length;t++){var r=xa[t];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&or(In,e),zn!==null&&or(zn,e),Mn!==null&&or(Mn,e),Cr.forEach(n),jr.forEach(n),t=0;t<Pn.length;t++)r=Pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(t=Pn[0],t.blockedOn===null);)Gd(t),t.blockedOn===null&&Pn.shift()}var Mt=Ln.ReactCurrentBatchConfig,Ja=!0;function Rh(e,n,t,r){var a=$,i=Mt.transition;Mt.transition=null;try{$=1,ls(e,n,t,r)}finally{$=a,Mt.transition=i}}function Ah(e,n,t,r){var a=$,i=Mt.transition;Mt.transition=null;try{$=4,ls(e,n,t,r)}finally{$=a,Mt.transition=i}}function ls(e,n,t,r){if(Ja){var a=il(e,n,t,r);if(a===null)wo(e,n,r,Xa,t),xc(e,r);else if(Eh(a,e,n,t,r))r.stopPropagation();else if(xc(e,r),n&4&&-1<kh.indexOf(e)){for(;a!==null;){var i=Jr(a);if(i!==null&&Kd(i),i=il(e,n,t,r),i===null&&wo(e,n,r,Xa,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else wo(e,n,r,null,t)}}var Xa=null;function il(e,n,t,r){if(Xa=null,e=rs(r),e=rt(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Fd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xa=e,null}function Yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mh()){case as:return 1;case Md:return 4;case Ya:case hh:return 16;case Hd:return 536870912;default:return 16}default:return 16}}var On=null,ss=null,Da=null;function Qd(){if(Da)return Da;var e,n=ss,t=n.length,r,a="value"in On?On.value:On.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return Da=a.slice(e,1<r?1-r:void 0)}function Oa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function yc(){return!1}function We(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?va:yc,this.isPropagationStopped=yc,this}return re(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=We(er),Qr=re({},er,{view:0,detail:0}),Th=We(Qr),uo,po,lr,Ri=re({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(uo=e.screenX-lr.screenX,po=e.screenY-lr.screenY):po=uo=0,lr=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:po}}),wc=We(Ri),Lh=re({},Ri,{dataTransfer:0}),Nh=We(Lh),Ch=re({},Qr,{relatedTarget:0}),fo=We(Ch),jh=re({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=We(jh),Dh=re({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oh=We(Dh),Fh=re({},er,{data:0}),bc=We(Fh),Bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zh[e])?!!n[e]:!1}function us(){return Mh}var Hh=re({},Qr,{key:function(e){if(e.key){var n=Bh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uh=We(Hh),$h=re({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=We($h),Kh=re({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),Vh=We(Kh),Wh=re({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=We(Wh),Gh=re({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=We(Gh),Qh=[9,13,27,32],ds=_n&&"CompositionEvent"in window,br=null;_n&&"documentMode"in document&&(br=document.documentMode);var Jh=_n&&"TextEvent"in window&&!br,Jd=_n&&(!ds||br&&8<br&&11>=br),kc=" ",Ec=!1;function Xd(e,n){switch(e){case"keyup":return Qh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Xh(e,n){switch(e){case"compositionend":return Zd(n);case"keypress":return n.which!==32?null:(Ec=!0,kc);case"textInput":return e=n.data,e===kc&&Ec?null:e;default:return null}}function Zh(e,n){if(At)return e==="compositionend"||!ds&&Xd(e,n)?(e=Qd(),Da=ss=On=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eg[e.type]:n==="textarea"}function ep(e,n,t,r){Cd(r),n=Za(n,"onChange"),0<n.length&&(t=new cs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Sr=null,Dr=null;function ng(e){dp(e,0)}function Ai(e){var n=Nt(e);if(Ed(n))return e}function tg(e,n){if(e==="change")return n}var np=!1;if(_n){var mo;if(_n){var ho="oninput"in document;if(!ho){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),ho=typeof Rc.oninput=="function"}mo=ho}else mo=!1;np=mo&&(!document.documentMode||9<document.documentMode)}function Ac(){Sr&&(Sr.detachEvent("onpropertychange",tp),Dr=Sr=null)}function tp(e){if(e.propertyName==="value"&&Ai(Dr)){var n=[];ep(n,Dr,e,rs(e)),Od(ng,n)}}function rg(e,n,t){e==="focusin"?(Ac(),Sr=n,Dr=t,Sr.attachEvent("onpropertychange",tp)):e==="focusout"&&Ac()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(Dr)}function ig(e,n){if(e==="click")return Ai(n)}function og(e,n){if(e==="input"||e==="change")return Ai(n)}function lg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:lg;function Or(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Ho.call(n,a)||!sn(e[a],n[a]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,n){var t=Tc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tc(t)}}function rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ap(){for(var e=window,n=Wa();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Wa(e.document)}return n}function ps(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sg(e){var n=ap(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&rp(t.ownerDocument.documentElement,t)){if(r!==null&&ps(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Lc(t,i);var o=Lc(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cg=_n&&"documentMode"in document&&11>=document.documentMode,Tt=null,ol=null,kr=null,ll=!1;function Nc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ll||Tt==null||Tt!==Wa(r)||(r=Tt,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Or(kr,r)||(kr=r,r=Za(ol,"onSelect"),0<r.length&&(n=new cs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tt)))}function ya(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Lt={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},go={},ip={};_n&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Lt.animationend.animation,delete Lt.animationiteration.animation,delete Lt.animationstart.animation),"TransitionEvent"in window||delete Lt.transitionend.transition);function Ti(e){if(go[e])return go[e];if(!Lt[e])return e;var n=Lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ip)return go[e]=n[t];return e}var op=Ti("animationend"),lp=Ti("animationiteration"),sp=Ti("animationstart"),cp=Ti("transitionend"),up=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){up.set(e,n),gt(n,[e])}for(var xo=0;xo<Cc.length;xo++){var vo=Cc[xo],ug=vo.toLowerCase(),dg=vo[0].toUpperCase()+vo.slice(1);Yn(ug,"on"+dg)}Yn(op,"onAnimationEnd");Yn(lp,"onAnimationIteration");Yn(sp,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(cp,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function jc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,uh(r,n,void 0,e),e.currentTarget=null}function dp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;jc(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;jc(a,l,u),i=s}}}if(Ga)throw e=tl,Ga=!1,tl=null,e}function Y(e,n){var t=n[pl];t===void 0&&(t=n[pl]=new Set);var r=e+"__bubble";t.has(r)||(pp(n,e,2,!1),t.add(r))}function yo(e,n,t){var r=0;n&&(r|=4),pp(t,e,r,n)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[wa]){e[wa]=!0,yd.forEach(function(t){t!=="selectionchange"&&(pg.has(t)||yo(t,!1,e),yo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wa]||(n[wa]=!0,yo("selectionchange",!1,n))}}function pp(e,n,t,r){switch(Yd(n)){case 1:var a=Rh;break;case 4:a=Ah;break;default:a=ls}t=a.bind(null,n,t,e),a=void 0,!nl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function wo(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=rt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Od(function(){var u=i,d=rs(t),p=[];e:{var m=up.get(e);if(m!==void 0){var b=cs,h=e;switch(e){case"keypress":if(Oa(t)===0)break e;case"keydown":case"keyup":b=Uh;break;case"focusin":h="focus",b=fo;break;case"focusout":h="blur",b=fo;break;case"beforeblur":case"afterblur":b=fo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Vh;break;case op:case lp:case sp:b=Ph;break;case cp:b=qh;break;case"scroll":b=Th;break;case"wheel":b=Yh;break;case"copy":case"cut":case"paste":b=Oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Sc}var y=(n&4)!==0,S=!y&&e==="scroll",x=y?m!==null?m+"Capture":null:m;y=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,x!==null&&(v=Nr(f,x),v!=null&&y.push(Br(f,v,g)))),S)break;f=f.return}0<y.length&&(m=new b(m,h,null,t,d),p.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&t!==Zo&&(h=t.relatedTarget||t.fromElement)&&(rt(h)||h[Rn]))break e;if((b||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,b?(h=t.relatedTarget||t.toElement,b=u,h=h?rt(h):null,h!==null&&(S=xt(h),h!==S||h.tag!==5&&h.tag!==6)&&(h=null)):(b=null,h=u),b!==h)){if(y=wc,v="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Sc,v="onPointerLeave",x="onPointerEnter",f="pointer"),S=b==null?m:Nt(b),g=h==null?m:Nt(h),m=new y(v,f+"leave",b,t,d),m.target=S,m.relatedTarget=g,v=null,rt(d)===u&&(y=new y(x,f+"enter",h,t,d),y.target=g,y.relatedTarget=S,v=y),S=v,b&&h)n:{for(y=b,x=h,f=0,g=y;g;g=kt(g))f++;for(g=0,v=x;v;v=kt(v))g++;for(;0<f-g;)y=kt(y),f--;for(;0<g-f;)x=kt(x),g--;for(;f--;){if(y===x||x!==null&&y===x.alternate)break n;y=kt(y),x=kt(x)}y=null}else y=null;b!==null&&Pc(p,m,b,y,!1),h!==null&&S!==null&&Pc(p,S,h,y,!0)}}e:{if(m=u?Nt(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var k=tg;else if(_c(m))if(np)k=og;else{k=ag;var R=rg}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=ig);if(k&&(k=k(e,u))){ep(p,k,t,d);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Go(m,"number",m.value)}switch(R=u?Nt(u):window,e){case"focusin":(_c(R)||R.contentEditable==="true")&&(Tt=R,ol=u,kr=null);break;case"focusout":kr=ol=Tt=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,Nc(p,t,d);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":Nc(p,t,d)}var _;if(ds)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else At?Xd(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Jd&&t.locale!=="ko"&&(At||T!=="onCompositionStart"?T==="onCompositionEnd"&&At&&(_=Qd()):(On=d,ss="value"in On?On.value:On.textContent,At=!0)),R=Za(u,T),0<R.length&&(T=new bc(T,e,null,t,d),p.push({event:T,listeners:R}),_?T.data=_:(_=Zd(t),_!==null&&(T.data=_)))),(_=Jh?Xh(e,t):Zh(e,t))&&(u=Za(u,"onBeforeInput"),0<u.length&&(d=new bc("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:u}),d.data=_))}dp(p,n)})}function Br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Za(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Nr(e,t),i!=null&&r.unshift(Br(e,i,a)),i=Nr(e,n),i!=null&&r.push(Br(e,i,a))),e=e.return}return r}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Nr(t,i),s!=null&&o.unshift(Br(t,s,l))):a||(s=Nr(t,i),s!=null&&o.push(Br(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var fg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(fg,`
`).replace(mg,"")}function ba(e,n,t){if(n=Dc(n),Dc(e)!==n&&t)throw Error(L(425))}function ei(){}var sl=null,cl=null;function ul(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,hg=typeof clearTimeout=="function"?clearTimeout:void 0,Oc=typeof Promise=="function"?Promise:void 0,gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Oc<"u"?function(e){return Oc.resolve(null).then(e).catch(xg)}:dl;function xg(e){setTimeout(function(){throw e})}function bo(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Pr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Pr(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),hn="__reactFiber$"+nr,Ir="__reactProps$"+nr,Rn="__reactContainer$"+nr,pl="__reactEvents$"+nr,vg="__reactListeners$"+nr,yg="__reactHandles$"+nr;function rt(e){var n=e[hn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[hn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fc(e);e!==null;){if(t=e[hn])return t;e=Fc(e)}return n}e=t,t=e.parentNode}return null}function Jr(e){return e=e[hn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Li(e){return e[Ir]||null}var fl=[],Ct=-1;function Qn(e){return{current:e}}function J(e){0>Ct||(e.current=fl[Ct],fl[Ct]=null,Ct--)}function W(e,n){Ct++,fl[Ct]=e.current,e.current=n}var Gn={},Re=Qn(Gn),Fe=Qn(!1),ut=Gn;function Kt(e,n){var t=e.type.contextTypes;if(!t)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Be(e){return e=e.childContextTypes,e!=null}function ni(){J(Fe),J(Re)}function Bc(e,n,t){if(Re.current!==Gn)throw Error(L(168));W(Re,n),W(Fe,t)}function fp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(L(108,rh(e)||"Unknown",a));return re({},t,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,ut=Re.current,W(Re,e),W(Fe,Fe.current),!0}function Ic(e,n,t){var r=e.stateNode;if(!r)throw Error(L(169));t?(e=fp(e,n,ut),r.__reactInternalMemoizedMergedChildContext=e,J(Fe),J(Re),W(Re,e)):J(Fe),W(Fe,t)}var bn=null,Ni=!1,So=!1;function mp(e){bn===null?bn=[e]:bn.push(e)}function wg(e){Ni=!0,mp(e)}function Jn(){if(!So&&bn!==null){So=!0;var e=0,n=$;try{var t=bn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}bn=null,Ni=!1}catch(a){throw bn!==null&&(bn=bn.slice(e+1)),zd(as,Jn),a}finally{$=n,So=!1}}return null}var jt=[],Pt=0,ri=null,ai=0,Ye=[],Qe=0,dt=null,Sn=1,kn="";function Zn(e,n){jt[Pt++]=ai,jt[Pt++]=ri,ri=e,ai=n}function hp(e,n,t){Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=dt,dt=e;var r=Sn;e=kn;var a=32-on(r)-1;r&=~(1<<a),t+=1;var i=32-on(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Sn=1<<32-on(n)+a|t<<a|r,kn=i+e}else Sn=1<<i|t<<a|r,kn=e}function fs(e){e.return!==null&&(Zn(e,1),hp(e,1,0))}function ms(e){for(;e===ri;)ri=jt[--Pt],jt[Pt]=null,ai=jt[--Pt],jt[Pt]=null;for(;e===dt;)dt=Ye[--Qe],Ye[Qe]=null,kn=Ye[--Qe],Ye[Qe]=null,Sn=Ye[--Qe],Ye[Qe]=null}var $e=null,Ue=null,Z=!1,an=null;function gp(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,Ue=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=dt!==null?{id:Sn,overflow:kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,Ue=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hl(e){if(Z){var n=Ue;if(n){var t=n;if(!zc(e,n)){if(ml(e))throw Error(L(418));n=Hn(t.nextSibling);var r=$e;n&&zc(e,n)?gp(r,t):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(ml(e))throw Error(L(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Sa(e){if(e!==$e)return!1;if(!Z)return Mc(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ul(e.type,e.memoizedProps)),n&&(n=Ue)){if(ml(e))throw xp(),Error(L(418));for(;n;)gp(e,n),n=Hn(n.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=$e?Hn(e.stateNode.nextSibling):null;return!0}function xp(){for(var e=Ue;e;)e=Hn(e.nextSibling)}function Vt(){Ue=$e=null,Z=!1}function hs(e){an===null?an=[e]:an.push(e)}var bg=Ln.ReactCurrentBatchConfig;function sr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function ka(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Hc(e){var n=e._init;return n(e._payload)}function vp(e){function n(x,f){if(e){var g=x.deletions;g===null?(x.deletions=[f],x.flags|=16):g.push(f)}}function t(x,f){if(!e)return null;for(;f!==null;)n(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(x,f){return x=Vn(x,f),x.index=0,x.sibling=null,x}function i(x,f,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<f?(x.flags|=2,f):g):(x.flags|=2,f)):(x.flags|=1048576,f)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,f,g,v){return f===null||f.tag!==6?(f=Lo(g,x.mode,v),f.return=x,f):(f=a(f,g),f.return=x,f)}function s(x,f,g,v){var k=g.type;return k===Rt?d(x,f,g.props.children,v,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Cn&&Hc(k)===f.type)?(v=a(f,g.props),v.ref=sr(x,f,g),v.return=x,v):(v=Ua(g.type,g.key,g.props,null,x.mode,v),v.ref=sr(x,f,g),v.return=x,v)}function u(x,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=No(g,x.mode,v),f.return=x,f):(f=a(f,g.children||[]),f.return=x,f)}function d(x,f,g,v,k){return f===null||f.tag!==7?(f=st(g,x.mode,v,k),f.return=x,f):(f=a(f,g),f.return=x,f)}function p(x,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Lo(""+f,x.mode,g),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pa:return g=Ua(f.type,f.key,f.props,null,x.mode,g),g.ref=sr(x,null,f),g.return=x,g;case _t:return f=No(f,x.mode,g),f.return=x,f;case Cn:var v=f._init;return p(x,v(f._payload),g)}if(gr(f)||rr(f))return f=st(f,x.mode,g,null),f.return=x,f;ka(x,f)}return null}function m(x,f,g,v){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(x,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pa:return g.key===k?s(x,f,g,v):null;case _t:return g.key===k?u(x,f,g,v):null;case Cn:return k=g._init,m(x,f,k(g._payload),v)}if(gr(g)||rr(g))return k!==null?null:d(x,f,g,v,null);ka(x,g)}return null}function b(x,f,g,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return x=x.get(g)||null,l(f,x,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pa:return x=x.get(v.key===null?g:v.key)||null,s(f,x,v,k);case _t:return x=x.get(v.key===null?g:v.key)||null,u(f,x,v,k);case Cn:var R=v._init;return b(x,f,g,R(v._payload),k)}if(gr(v)||rr(v))return x=x.get(g)||null,d(f,x,v,k,null);ka(f,v)}return null}function h(x,f,g,v){for(var k=null,R=null,_=f,T=f=0,A=null;_!==null&&T<g.length;T++){_.index>T?(A=_,_=null):A=_.sibling;var P=m(x,_,g[T],v);if(P===null){_===null&&(_=A);break}e&&_&&P.alternate===null&&n(x,_),f=i(P,f,T),R===null?k=P:R.sibling=P,R=P,_=A}if(T===g.length)return t(x,_),Z&&Zn(x,T),k;if(_===null){for(;T<g.length;T++)_=p(x,g[T],v),_!==null&&(f=i(_,f,T),R===null?k=_:R.sibling=_,R=_);return Z&&Zn(x,T),k}for(_=r(x,_);T<g.length;T++)A=b(_,x,T,g[T],v),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?T:A.key),f=i(A,f,T),R===null?k=A:R.sibling=A,R=A);return e&&_.forEach(function(q){return n(x,q)}),Z&&Zn(x,T),k}function y(x,f,g,v){var k=rr(g);if(typeof k!="function")throw Error(L(150));if(g=k.call(g),g==null)throw Error(L(151));for(var R=k=null,_=f,T=f=0,A=null,P=g.next();_!==null&&!P.done;T++,P=g.next()){_.index>T?(A=_,_=null):A=_.sibling;var q=m(x,_,P.value,v);if(q===null){_===null&&(_=A);break}e&&_&&q.alternate===null&&n(x,_),f=i(q,f,T),R===null?k=q:R.sibling=q,R=q,_=A}if(P.done)return t(x,_),Z&&Zn(x,T),k;if(_===null){for(;!P.done;T++,P=g.next())P=p(x,P.value,v),P!==null&&(f=i(P,f,T),R===null?k=P:R.sibling=P,R=P);return Z&&Zn(x,T),k}for(_=r(x,_);!P.done;T++,P=g.next())P=b(_,x,T,P.value,v),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?T:P.key),f=i(P,f,T),R===null?k=P:R.sibling=P,R=P);return e&&_.forEach(function(pe){return n(x,pe)}),Z&&Zn(x,T),k}function S(x,f,g,v){if(typeof g=="object"&&g!==null&&g.type===Rt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pa:e:{for(var k=g.key,R=f;R!==null;){if(R.key===k){if(k=g.type,k===Rt){if(R.tag===7){t(x,R.sibling),f=a(R,g.props.children),f.return=x,x=f;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Cn&&Hc(k)===R.type){t(x,R.sibling),f=a(R,g.props),f.ref=sr(x,R,g),f.return=x,x=f;break e}t(x,R);break}else n(x,R);R=R.sibling}g.type===Rt?(f=st(g.props.children,x.mode,v,g.key),f.return=x,x=f):(v=Ua(g.type,g.key,g.props,null,x.mode,v),v.ref=sr(x,f,g),v.return=x,x=v)}return o(x);case _t:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(x,f.sibling),f=a(f,g.children||[]),f.return=x,x=f;break e}else{t(x,f);break}else n(x,f);f=f.sibling}f=No(g,x.mode,v),f.return=x,x=f}return o(x);case Cn:return R=g._init,S(x,f,R(g._payload),v)}if(gr(g))return h(x,f,g,v);if(rr(g))return y(x,f,g,v);ka(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(x,f.sibling),f=a(f,g),f.return=x,x=f):(t(x,f),f=Lo(g,x.mode,v),f.return=x,x=f),o(x)):t(x,f)}return S}var Wt=vp(!0),yp=vp(!1),ii=Qn(null),oi=null,Dt=null,gs=null;function xs(){gs=Dt=oi=null}function vs(e){var n=ii.current;J(ii),e._currentValue=n}function gl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ht(e,n){oi=e,gs=Dt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Oe=!0),e.firstContext=null)}function Ze(e){var n=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:n,next:null},Dt===null){if(oi===null)throw Error(L(308));Dt=e,oi.dependencies={lanes:0,firstContext:e}}else Dt=Dt.next=e;return n}var at=null;function ys(e){at===null?at=[e]:at.push(e)}function wp(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ys(n)):(t.next=a.next,a.next=t),n.interleaved=t,An(e,r)}function An(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,An(e,t)}return a=r.interleaved,a===null?(n.next=n,ys(r)):(n.next=a.next,a.next=n),r.interleaved=n,An(e,t)}function Fa(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,is(e,t)}}function Uc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function li(e,n,t,r){var a=e.updateQueue;jn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var p=a.baseState;o=0,d=u=s=null,l=i;do{var m=l.lane,b=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,y=l;switch(m=n,b=t,y.tag){case 1:if(h=y.payload,typeof h=="function"){p=h.call(b,p,m);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(b,p,m):h,m==null)break e;p=re({},p,m);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=b,s=p):d=d.next=b,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(d===null&&(s=p),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=d,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);ft|=o,e.lanes=o,e.memoizedState=p}}function $c(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(L(191,a));a.call(r)}}}var Xr={},vn=Qn(Xr),zr=Qn(Xr),Mr=Qn(Xr);function it(e){if(e===Xr)throw Error(L(174));return e}function bs(e,n){switch(W(Mr,n),W(zr,e),W(vn,Xr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Qo(n,e)}J(vn),W(vn,n)}function qt(){J(vn),J(zr),J(Mr)}function Sp(e){it(Mr.current);var n=it(vn.current),t=Qo(n,e.type);n!==t&&(W(zr,e),W(vn,t))}function Ss(e){zr.current===e&&(J(vn),J(zr))}var ne=Qn(0);function si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ko=[];function ks(){for(var e=0;e<ko.length;e++)ko[e]._workInProgressVersionPrimary=null;ko.length=0}var Ba=Ln.ReactCurrentDispatcher,Eo=Ln.ReactCurrentBatchConfig,pt=0,te=null,fe=null,he=null,ci=!1,Er=!1,Hr=0,Sg=0;function Se(){throw Error(L(321))}function Es(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function _s(e,n,t,r,a,i){if(pt=i,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ba.current=e===null||e.memoizedState===null?Rg:Ag,e=t(r,a),Er){i=0;do{if(Er=!1,Hr=0,25<=i)throw Error(L(301));i+=1,he=fe=null,n.updateQueue=null,Ba.current=Tg,e=t(r,a)}while(Er)}if(Ba.current=ui,n=fe!==null&&fe.next!==null,pt=0,he=fe=te=null,ci=!1,n)throw Error(L(300));return e}function Rs(){var e=Hr!==0;return Hr=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?te.memoizedState=he=e:he=he.next=e,he}function en(){if(fe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var n=he===null?te.memoizedState:he.next;if(n!==null)he=n,fe=e;else{if(e===null)throw Error(L(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?te.memoizedState=he=e:he=he.next=e}return he}function Ur(e,n){return typeof n=="function"?n(e):n}function _o(e){var n=en(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=fe,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var d=u.lane;if((pt&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,te.lanes|=d,ft|=d}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,sn(r,n.memoizedState)||(Oe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,te.lanes|=i,ft|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ro(e){var n=en(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);sn(i,n.memoizedState)||(Oe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function kp(){}function Ep(e,n){var t=te,r=en(),a=n(),i=!sn(r.memoizedState,a);if(i&&(r.memoizedState=a,Oe=!0),r=r.queue,As(Ap.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||he!==null&&he.memoizedState.tag&1){if(t.flags|=2048,$r(9,Rp.bind(null,t,r,a,n),void 0,null),ge===null)throw Error(L(349));pt&30||_p(t,n,a)}return a}function _p(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Rp(e,n,t,r){n.value=t,n.getSnapshot=r,Tp(n)&&Lp(e)}function Ap(e,n,t){return t(function(){Tp(n)&&Lp(e)})}function Tp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function Lp(e){var n=An(e,1);n!==null&&ln(n,e,1,-1)}function Kc(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},n.queue=e,e=e.dispatch=_g.bind(null,te,e),[n.memoizedState,e]}function $r(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Np(){return en().memoizedState}function Ia(e,n,t,r){var a=mn();te.flags|=e,a.memoizedState=$r(1|n,t,void 0,r===void 0?null:r)}function Ci(e,n,t,r){var a=en();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&Es(r,o.deps)){a.memoizedState=$r(n,t,i,r);return}}te.flags|=e,a.memoizedState=$r(1|n,t,i,r)}function Vc(e,n){return Ia(8390656,8,e,n)}function As(e,n){return Ci(2048,8,e,n)}function Cp(e,n){return Ci(4,2,e,n)}function jp(e,n){return Ci(4,4,e,n)}function Pp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dp(e,n,t){return t=t!=null?t.concat([e]):null,Ci(4,4,Pp.bind(null,n,e),t)}function Ts(){}function Op(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Es(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Fp(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Es(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Bp(e,n,t){return pt&21?(sn(t,n)||(t=Ud(),te.lanes|=t,ft|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=t)}function kg(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=Eo.transition;Eo.transition={};try{e(!1),n()}finally{$=t,Eo.transition=r}}function Ip(){return en().memoizedState}function Eg(e,n,t){var r=Kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},zp(e))Mp(n,t);else if(t=wp(e,n,t,r),t!==null){var a=Ne();ln(t,e,r,a),Hp(t,n,r)}}function _g(e,n,t){var r=Kn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(zp(e))Mp(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(a.hasEagerState=!0,a.eagerState=l,sn(l,o)){var s=n.interleaved;s===null?(a.next=a,ys(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=wp(e,n,a,r),t!==null&&(a=Ne(),ln(t,e,r,a),Hp(t,n,r))}}function zp(e){var n=e.alternate;return e===te||n!==null&&n===te}function Mp(e,n){Er=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,is(e,t)}}var ui={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Rg={readContext:Ze,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:Vc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ia(4194308,4,Pp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ia(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ia(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Eg.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:Kc,useDebugValue:Ts,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Kc(!1),n=e[0];return e=kg.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=te,a=mn();if(Z){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),ge===null)throw Error(L(349));pt&30||_p(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Vc(Ap.bind(null,r,i,e),[e]),r.flags|=2048,$r(9,Rp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=mn(),n=ge.identifierPrefix;if(Z){var t=kn,r=Sn;t=(r&~(1<<32-on(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Sg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ag={readContext:Ze,useCallback:Op,useContext:Ze,useEffect:As,useImperativeHandle:Dp,useInsertionEffect:Cp,useLayoutEffect:jp,useMemo:Fp,useReducer:_o,useRef:Np,useState:function(){return _o(Ur)},useDebugValue:Ts,useDeferredValue:function(e){var n=en();return Bp(n,fe.memoizedState,e)},useTransition:function(){var e=_o(Ur)[0],n=en().memoizedState;return[e,n]},useMutableSource:kp,useSyncExternalStore:Ep,useId:Ip,unstable_isNewReconciler:!1},Tg={readContext:Ze,useCallback:Op,useContext:Ze,useEffect:As,useImperativeHandle:Dp,useInsertionEffect:Cp,useLayoutEffect:jp,useMemo:Fp,useReducer:Ro,useRef:Np,useState:function(){return Ro(Ur)},useDebugValue:Ts,useDeferredValue:function(e){var n=en();return fe===null?n.memoizedState=e:Bp(n,fe.memoizedState,e)},useTransition:function(){var e=Ro(Ur)[0],n=en().memoizedState;return[e,n]},useMutableSource:kp,useSyncExternalStore:Ep,useId:Ip,unstable_isNewReconciler:!1};function tn(e,n){if(e&&e.defaultProps){n=re({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function xl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:re({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ji={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=Kn(e),i=En(r,a);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,a),n!==null&&(ln(n,e,a,r),Fa(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=Kn(e),i=En(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,a),n!==null&&(ln(n,e,a,r),Fa(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=Kn(e),a=En(t,r);a.tag=2,n!=null&&(a.callback=n),n=Un(e,a,r),n!==null&&(ln(n,e,r,t),Fa(n,e,r))}};function Wc(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Or(t,r)||!Or(a,i):!0}function Up(e,n,t){var r=!1,a=Gn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(a=Be(n)?ut:Re.current,r=n.contextTypes,i=(r=r!=null)?Kt(e,a):Gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ji,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function qc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ji.enqueueReplaceState(n,n.state,null)}function vl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},ws(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Ze(i):(i=Be(n)?ut:Re.current,a.context=Kt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(xl(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ji.enqueueReplaceState(a,a.state,null),li(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gt(e,n){try{var t="",r=n;do t+=th(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Ao(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function $p(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){pi||(pi=!0,Ll=r),yl(e,n)},t}function Kp(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){yl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){yl(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Gc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=$g.bind(null,e,n,t),n.then(e,e))}function Yc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qc(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var Ng=Ln.ReactCurrentOwner,Oe=!1;function Te(e,n,t,r){n.child=e===null?yp(n,null,t,r):Wt(n,e.child,t,r)}function Jc(e,n,t,r,a){t=t.render;var i=n.ref;return Ht(n,a),r=_s(e,n,t,r,i,a),t=Rs(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Tn(e,n,a)):(Z&&t&&fs(n),n.flags|=1,Te(e,n,r,a),n.child)}function Xc(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Fs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Vp(e,n,i,r,a)):(e=Ua(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Or,t(o,r)&&e.ref===n.ref)return Tn(e,n,a)}return n.flags|=1,e=Vn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Vp(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(Or(i,r)&&e.ref===n.ref)if(Oe=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Oe=!0);else return n.lanes=e.lanes,Tn(e,n,a)}return wl(e,n,t,r,a)}function Wp(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Ft,He),He|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(Ft,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,W(Ft,He),He|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,W(Ft,He),He|=r;return Te(e,n,a,t),n.child}function qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function wl(e,n,t,r,a){var i=Be(t)?ut:Re.current;return i=Kt(n,i),Ht(n,a),t=_s(e,n,t,r,i,a),r=Rs(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Tn(e,n,a)):(Z&&r&&fs(n),n.flags|=1,Te(e,n,t,a),n.child)}function Zc(e,n,t,r,a){if(Be(t)){var i=!0;ti(n)}else i=!1;if(Ht(n,a),n.stateNode===null)za(e,n),Up(n,t,r),vl(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Be(t)?ut:Re.current,u=Kt(n,u));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&qc(n,o,r,u),jn=!1;var m=n.memoizedState;o.state=m,li(n,r,o,a),s=n.memoizedState,l!==r||m!==s||Fe.current||jn?(typeof d=="function"&&(xl(n,t,d,r),s=n.memoizedState),(l=jn||Wc(n,t,l,r,m,s,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,bp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:tn(n.type,l),o.props=u,p=n.pendingProps,m=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ze(s):(s=Be(t)?ut:Re.current,s=Kt(n,s));var b=t.getDerivedStateFromProps;(d=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==s)&&qc(n,o,r,s),jn=!1,m=n.memoizedState,o.state=m,li(n,r,o,a);var h=n.memoizedState;l!==p||m!==h||Fe.current||jn?(typeof b=="function"&&(xl(n,t,b,r),h=n.memoizedState),(u=jn||Wc(n,t,u,r,m,h,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,h,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,h,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=h),o.props=r,o.state=h,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return bl(e,n,t,r,i,a)}function bl(e,n,t,r,a,i){qp(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&Ic(n,t,!1),Tn(e,n,i);r=n.stateNode,Ng.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Wt(n,e.child,null,i),n.child=Wt(n,null,l,i)):Te(e,n,l,i),n.memoizedState=r.state,a&&Ic(n,t,!0),n.child}function Gp(e){var n=e.stateNode;n.pendingContext?Bc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Bc(e,n.context,!1),bs(e,n.containerInfo)}function eu(e,n,t,r,a){return Vt(),hs(a),n.flags|=256,Te(e,n,t,r),n.child}var Sl={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yp(e,n,t){var r=n.pendingProps,a=ne.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(ne,a&1),e===null)return hl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Oi(o,r,0,null),e=st(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=kl(t),n.memoizedState=Sl,e):Ls(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Cg(e,n,o,r,l,a,t);if(i){i=r.fallback,o=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Vn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Vn(l,i):(i=st(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?kl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Sl,r}return i=e.child,e=i.sibling,r=Vn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ls(e,n){return n=Oi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ea(e,n,t,r){return r!==null&&hs(r),Wt(n,e.child,null,t),e=Ls(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cg(e,n,t,r,a,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Ao(Error(L(422))),Ea(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Oi({mode:"visible",children:r.children},a,0,null),i=st(i,a,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Wt(n,e.child,null,o),n.child.memoizedState=kl(o),n.memoizedState=Sl,i);if(!(n.mode&1))return Ea(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=Ao(i,r,void 0),Ea(e,n,o,r)}if(l=(o&e.childLanes)!==0,Oe||l){if(r=ge,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,An(e,a),ln(r,e,a,-1))}return Os(),r=Ao(Error(L(421))),Ea(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Kg.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Ue=Hn(a.nextSibling),$e=n,Z=!0,an=null,e!==null&&(Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=dt,Sn=e.id,kn=e.overflow,dt=n),n=Ls(n,r.children),n.flags|=4096,n)}function nu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gl(e.return,n,t)}function To(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function Qp(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Te(e,n,r.children,t),r=ne.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,t,n);else if(e.tag===19)nu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(ne,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&si(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),To(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&si(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}To(n,!0,t,null,i);break;case"together":To(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function za(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ft|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=Vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jg(e,n,t){switch(n.tag){case 3:Gp(n),Vt();break;case 5:Sp(n);break;case 1:Be(n.type)&&ti(n);break;case 4:bs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;W(ii,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(ne,ne.current&1),n.flags|=128,null):t&n.child.childLanes?Yp(e,n,t):(W(ne,ne.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);W(ne,ne.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(ne,ne.current),r)break;return null;case 22:case 23:return n.lanes=0,Wp(e,n,t)}return Tn(e,n,t)}var Jp,El,Xp,Zp;Jp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};El=function(){};Xp=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,it(vn.current);var i=null;switch(t){case"input":a=Wo(e,a),r=Wo(e,r),i=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":a=Yo(e,a),r=Yo(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}Jo(t,r);var o;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Y("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Zp=function(e,n,t,r){t!==r&&(n.flags|=4)};function cr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Pg(e,n,t){var r=n.pendingProps;switch(ms(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return Be(n.type)&&ni(),ke(n),null;case 3:return r=n.stateNode,qt(),J(Fe),J(Re),ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sa(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(jl(an),an=null))),El(e,n),ke(n),null;case 5:Ss(n);var a=it(Mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Xp(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(L(166));return ke(n),null}if(e=it(vn.current),Sa(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[hn]=n,r[Ir]=i,e=(n.mode&1)!==0,t){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(a=0;a<vr.length;a++)Y(vr[a],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":uc(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":pc(r,i),Y("invalid",r)}Jo(t,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,e),a=["children",""+l]):Tr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(t){case"input":fa(r),dc(r,i,!0);break;case"textarea":fa(r),fc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ei)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ad(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[hn]=n,e[Ir]=r,Jp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Xo(t,r),t){case"dialog":Y("cancel",e),Y("close",e),a=r;break;case"iframe":case"object":case"embed":Y("load",e),a=r;break;case"video":case"audio":for(a=0;a<vr.length;a++)Y(vr[a],e);a=r;break;case"source":Y("error",e),a=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=r;break;case"details":Y("toggle",e),a=r;break;case"input":uc(e,r),a=Wo(e,r),Y("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),Y("invalid",e);break;case"textarea":pc(e,r),a=Yo(e,r),Y("invalid",e);break;default:a=r}Jo(t,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Nd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Td(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Lr(e,s):typeof s=="number"&&Lr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&Zl(e,i,s,o))}switch(t){case"input":fa(e),dc(e,r,!1);break;case"textarea":fa(e),fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ei)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ke(n),null;case 6:if(e&&n.stateNode!=null)Zp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(L(166));if(t=it(Mr.current),it(vn.current),Sa(n)){if(r=n.stateNode,t=n.memoizedProps,r[hn]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:ba(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[hn]=n,n.stateNode=r}return ke(n),null;case 13:if(J(ne),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&n.mode&1&&!(n.flags&128))xp(),Vt(),n.flags|=98560,i=!1;else if(i=Sa(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[hn]=n}else Vt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ke(n),i=!1}else an!==null&&(jl(an),an=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ne.current&1?me===0&&(me=3):Os())),n.updateQueue!==null&&(n.flags|=4),ke(n),null);case 4:return qt(),El(e,n),e===null&&Fr(n.stateNode.containerInfo),ke(n),null;case 10:return vs(n.type._context),ke(n),null;case 17:return Be(n.type)&&ni(),ke(n),null;case 19:if(J(ne),i=n.memoizedState,i===null)return ke(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)cr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=si(e),o!==null){for(n.flags|=128,cr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(ne,ne.current&1|2),n.child}e=e.sibling}i.tail!==null&&ce()>Yt&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304)}else{if(!r)if(e=si(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return ke(n),null}else 2*ce()-i.renderingStartTime>Yt&&t!==1073741824&&(n.flags|=128,r=!0,cr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ce(),n.sibling=null,t=ne.current,W(ne,r?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return Ds(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function Dg(e,n){switch(ms(n),n.tag){case 1:return Be(n.type)&&ni(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qt(),J(Fe),J(Re),ks(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ss(n),null;case 13:if(J(ne),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));Vt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(ne),null;case 4:return qt(),null;case 10:return vs(n.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var _a=!1,Ee=!1,Og=typeof WeakSet=="function"?WeakSet:Set,D=null;function Ot(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function _l(e,n,t){try{t()}catch(r){ae(e,n,r)}}var tu=!1;function Fg(e,n){if(sl=Ja,e=ap(),ps(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,u=0,d=0,p=e,m=null;n:for(;;){for(var b;p!==t||a!==0&&p.nodeType!==3||(l=o+a),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break n;if(m===t&&++u===a&&(l=o),m===i&&++d===r&&(s=o),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(cl={focusedElem:e,selectionRange:t},Ja=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,S=h.memoizedState,x=n.stateNode,f=x.getSnapshotBeforeUpdate(n.elementType===n.type?y:tn(n.type,y),S);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(v){ae(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return h=tu,tu=!1,h}function _r(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&_l(n,t,i)}a=a.next}while(a!==r)}}function Pi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Rl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function ef(e){var n=e.alternate;n!==null&&(e.alternate=null,ef(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[hn],delete n[Ir],delete n[pl],delete n[vg],delete n[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nf(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(Al(e,n,t),e=e.sibling;e!==null;)Al(e,n,t),e=e.sibling}function Tl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,n,t),e=e.sibling;e!==null;)Tl(e,n,t),e=e.sibling}var ye=null,rn=!1;function Nn(e,n,t){for(t=t.child;t!==null;)tf(e,n,t),t=t.sibling}function tf(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(_i,t)}catch{}switch(t.tag){case 5:Ee||Ot(t,n);case 6:var r=ye,a=rn;ye=null,Nn(e,n,t),ye=r,rn=a,ye!==null&&(rn?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(rn?(e=ye,t=t.stateNode,e.nodeType===8?bo(e.parentNode,t):e.nodeType===1&&bo(e,t),Pr(e)):bo(ye,t.stateNode));break;case 4:r=ye,a=rn,ye=t.stateNode.containerInfo,rn=!0,Nn(e,n,t),ye=r,rn=a;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&_l(t,n,o),a=a.next}while(a!==r)}Nn(e,n,t);break;case 1:if(!Ee&&(Ot(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ae(t,n,l)}Nn(e,n,t);break;case 21:Nn(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,Nn(e,n,t),Ee=r):Nn(e,n,t);break;default:Nn(e,n,t)}}function au(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Og),n.forEach(function(r){var a=Vg.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function nn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,rn=!1;break e;case 3:ye=l.stateNode.containerInfo,rn=!0;break e;case 4:ye=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(ye===null)throw Error(L(160));tf(i,o,a),ye=null,rn=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ae(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)rf(n,e),n=n.sibling}function rf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(n,e),pn(e),r&4){try{_r(3,e,e.return),Pi(3,e)}catch(y){ae(e,e.return,y)}try{_r(5,e,e.return)}catch(y){ae(e,e.return,y)}}break;case 1:nn(n,e),pn(e),r&512&&t!==null&&Ot(t,t.return);break;case 5:if(nn(n,e),pn(e),r&512&&t!==null&&Ot(t,t.return),e.flags&32){var a=e.stateNode;try{Lr(a,"")}catch(y){ae(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&_d(a,i),Xo(l,o);var u=Xo(l,i);for(o=0;o<s.length;o+=2){var d=s[o],p=s[o+1];d==="style"?Nd(a,p):d==="dangerouslySetInnerHTML"?Td(a,p):d==="children"?Lr(a,p):Zl(a,d,p,u)}switch(l){case"input":qo(a,i);break;case"textarea":Rd(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Bt(a,!!i.multiple,b,!1):m!==!!i.multiple&&(i.defaultValue!=null?Bt(a,!!i.multiple,i.defaultValue,!0):Bt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ir]=i}catch(y){ae(e,e.return,y)}}break;case 6:if(nn(n,e),pn(e),r&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){ae(e,e.return,y)}}break;case 3:if(nn(n,e),pn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(y){ae(e,e.return,y)}break;case 4:nn(n,e),pn(e);break;case 13:nn(n,e),pn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(js=ce())),r&4&&au(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||d,nn(n,e),Ee=u):nn(n,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(p=D=d;D!==null;){switch(m=D,b=m.child,m.tag){case 0:case 11:case 14:case 15:_r(4,m,m.return);break;case 1:Ot(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(y){ae(r,t,y)}}break;case 5:Ot(m,m.return);break;case 22:if(m.memoizedState!==null){ou(p);continue}}b!==null?(b.return=m,D=b):ou(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ld("display",o))}catch(y){ae(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ae(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(n,e),pn(e),r&4&&au(e);break;case 21:break;default:nn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(nf(t)){var r=t;break e}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Lr(a,""),r.flags&=-33);var i=ru(e);Tl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ru(e);Al(e,l,o);break;default:throw Error(L(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bg(e,n,t){D=e,af(e)}function af(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var a=D,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||_a;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=_a;var u=Ee;if(_a=o,(Ee=s)&&!u)for(D=a;D!==null;)o=D,s=o.child,o.tag===22&&o.memoizedState!==null?lu(a):s!==null?(s.return=o,D=s):lu(a);for(;i!==null;)D=i,af(i),i=i.sibling;D=a,_a=l,Ee=u}iu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,D=i):iu(e)}}function iu(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||Pi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:tn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&$c(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$c(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Pr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ee||n.flags&512&&Rl(n)}catch(m){ae(n,n.return,m)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function ou(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function lu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Pi(4,n)}catch(s){ae(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){ae(n,a,s)}}var i=n.return;try{Rl(n)}catch(s){ae(n,i,s)}break;case 5:var o=n.return;try{Rl(n)}catch(s){ae(n,o,s)}}}catch(s){ae(n,n.return,s)}if(n===e){D=null;break}var l=n.sibling;if(l!==null){l.return=n.return,D=l;break}D=n.return}}var Ig=Math.ceil,di=Ln.ReactCurrentDispatcher,Ns=Ln.ReactCurrentOwner,Xe=Ln.ReactCurrentBatchConfig,U=0,ge=null,de=null,we=0,He=0,Ft=Qn(0),me=0,Kr=null,ft=0,Di=0,Cs=0,Rr=null,De=null,js=0,Yt=1/0,wn=null,pi=!1,Ll=null,$n=null,Ra=!1,Fn=null,fi=0,Ar=0,Nl=null,Ma=-1,Ha=0;function Ne(){return U&6?ce():Ma!==-1?Ma:Ma=ce()}function Kn(e){return e.mode&1?U&2&&we!==0?we&-we:bg.transition!==null?(Ha===0&&(Ha=Ud()),Ha):(e=$,e!==0||(e=window.event,e=e===void 0?16:Yd(e.type)),e):1}function ln(e,n,t,r){if(50<Ar)throw Ar=0,Nl=null,Error(L(185));Yr(e,t,r),(!(U&2)||e!==ge)&&(e===ge&&(!(U&2)&&(Di|=t),me===4&&Dn(e,we)),Ie(e,r),t===1&&U===0&&!(n.mode&1)&&(Yt=ce()+500,Ni&&Jn()))}function Ie(e,n){var t=e.callbackNode;bh(e,n);var r=Qa(e,e===ge?we:0);if(r===0)t!==null&&gc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&gc(t),n===1)e.tag===0?wg(su.bind(null,e)):mp(su.bind(null,e)),gg(function(){!(U&6)&&Jn()}),t=null;else{switch($d(r)){case 1:t=as;break;case 4:t=Md;break;case 16:t=Ya;break;case 536870912:t=Hd;break;default:t=Ya}t=ff(t,of.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function of(e,n){if(Ma=-1,Ha=0,U&6)throw Error(L(327));var t=e.callbackNode;if(Ut()&&e.callbackNode!==t)return null;var r=Qa(e,e===ge?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=mi(e,r);else{n=r;var a=U;U|=2;var i=sf();(ge!==e||we!==n)&&(wn=null,Yt=ce()+500,lt(e,n));do try{Hg();break}catch(l){lf(e,l)}while(!0);xs(),di.current=i,U=a,de!==null?n=0:(ge=null,we=0,n=me)}if(n!==0){if(n===2&&(a=rl(e),a!==0&&(r=a,n=Cl(e,a))),n===1)throw t=Kr,lt(e,0),Dn(e,r),Ie(e,ce()),t;if(n===6)Dn(e,r);else{if(a=e.current.alternate,!(r&30)&&!zg(a)&&(n=mi(e,r),n===2&&(i=rl(e),i!==0&&(r=i,n=Cl(e,i))),n===1))throw t=Kr,lt(e,0),Dn(e,r),Ie(e,ce()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(L(345));case 2:et(e,De,wn);break;case 3:if(Dn(e,r),(r&130023424)===r&&(n=js+500-ce(),10<n)){if(Qa(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=dl(et.bind(null,e,De,wn),n);break}et(e,De,wn);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-on(r);i=1<<o,o=n[o],o>a&&(a=o),r&=~i}if(r=a,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ig(r/1960))-r,10<r){e.timeoutHandle=dl(et.bind(null,e,De,wn),r);break}et(e,De,wn);break;case 5:et(e,De,wn);break;default:throw Error(L(329))}}}return Ie(e,ce()),e.callbackNode===t?of.bind(null,e):null}function Cl(e,n){var t=Rr;return e.current.memoizedState.isDehydrated&&(lt(e,n).flags|=256),e=mi(e,n),e!==2&&(n=De,De=t,n!==null&&jl(n)),e}function jl(e){De===null?De=e:De.push.apply(De,e)}function zg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!sn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(e,n){for(n&=~Cs,n&=~Di,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),r=1<<t;e[t]=-1,n&=~r}}function su(e){if(U&6)throw Error(L(327));Ut();var n=Qa(e,0);if(!(n&1))return Ie(e,ce()),null;var t=mi(e,n);if(e.tag!==0&&t===2){var r=rl(e);r!==0&&(n=r,t=Cl(e,r))}if(t===1)throw t=Kr,lt(e,0),Dn(e,n),Ie(e,ce()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,et(e,De,wn),Ie(e,ce()),null}function Ps(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Yt=ce()+500,Ni&&Jn())}}function mt(e){Fn!==null&&Fn.tag===0&&!(U&6)&&Ut();var n=U;U|=1;var t=Xe.transition,r=$;try{if(Xe.transition=null,$=1,e)return e()}finally{$=r,Xe.transition=t,U=n,!(U&6)&&Jn()}}function Ds(){He=Ft.current,J(Ft)}function lt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hg(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:qt(),J(Fe),J(Re),ks();break;case 5:Ss(r);break;case 4:qt();break;case 13:J(ne);break;case 19:J(ne);break;case 10:vs(r.type._context);break;case 22:case 23:Ds()}t=t.return}if(ge=e,de=e=Vn(e.current,null),we=He=n,me=0,Kr=null,Cs=Di=ft=0,De=Rr=null,at!==null){for(n=0;n<at.length;n++)if(t=at[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}t.pending=r}at=null}return e}function lf(e,n){do{var t=de;try{if(xs(),Ba.current=ui,ci){for(var r=te.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ci=!1}if(pt=0,he=fe=te=null,Er=!1,Hr=0,Ns.current=null,t===null||t.return===null){me=1,Kr=n,de=null;break}e:{var i=e,o=t.return,l=t,s=n;if(n=we,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var b=Yc(o);if(b!==null){b.flags&=-257,Qc(b,o,l,i,n),b.mode&1&&Gc(i,u,n),n=b,s=u;var h=n.updateQueue;if(h===null){var y=new Set;y.add(s),n.updateQueue=y}else h.add(s);break e}else{if(!(n&1)){Gc(i,u,n),Os();break e}s=Error(L(426))}}else if(Z&&l.mode&1){var S=Yc(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Qc(S,o,l,i,n),hs(Gt(s,l));break e}}i=s=Gt(s,l),me!==4&&(me=2),Rr===null?Rr=[i]:Rr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var x=$p(i,s,n);Uc(i,x);break e;case 1:l=s;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($n===null||!$n.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=Kp(i,l,n);Uc(i,v);break e}}i=i.return}while(i!==null)}uf(t)}catch(k){n=k,de===t&&t!==null&&(de=t=t.return);continue}break}while(!0)}function sf(){var e=di.current;return di.current=ui,e===null?ui:e}function Os(){(me===0||me===3||me===2)&&(me=4),ge===null||!(ft&268435455)&&!(Di&268435455)||Dn(ge,we)}function mi(e,n){var t=U;U|=2;var r=sf();(ge!==e||we!==n)&&(wn=null,lt(e,n));do try{Mg();break}catch(a){lf(e,a)}while(!0);if(xs(),U=t,di.current=r,de!==null)throw Error(L(261));return ge=null,we=0,me}function Mg(){for(;de!==null;)cf(de)}function Hg(){for(;de!==null&&!ph();)cf(de)}function cf(e){var n=pf(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?uf(e):de=n,Ns.current=null}function uf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Dg(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(t=Pg(t,n,He),t!==null){de=t;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);me===0&&(me=5)}function et(e,n,t){var r=$,a=Xe.transition;try{Xe.transition=null,$=1,Ug(e,n,t,r)}finally{Xe.transition=a,$=r}return null}function Ug(e,n,t,r){do Ut();while(Fn!==null);if(U&6)throw Error(L(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Sh(e,i),e===ge&&(de=ge=null,we=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ra||(Ra=!0,ff(Ya,function(){return Ut(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var o=$;$=1;var l=U;U|=4,Ns.current=null,Fg(e,t),rf(t,e),sg(cl),Ja=!!sl,cl=sl=null,e.current=t,Bg(t),fh(),U=l,$=o,Xe.transition=i}else e.current=t;if(Ra&&(Ra=!1,Fn=e,fi=a),i=e.pendingLanes,i===0&&($n=null),gh(t.stateNode),Ie(e,ce()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(pi)throw pi=!1,e=Ll,Ll=null,e;return fi&1&&e.tag!==0&&Ut(),i=e.pendingLanes,i&1?e===Nl?Ar++:(Ar=0,Nl=e):Ar=0,Jn(),null}function Ut(){if(Fn!==null){var e=$d(fi),n=Xe.transition,t=$;try{if(Xe.transition=null,$=16>e?16:e,Fn===null)var r=!1;else{if(e=Fn,Fn=null,fi=0,U&6)throw Error(L(331));var a=U;for(U|=4,D=e.current;D!==null;){var i=D,o=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:_r(8,d,i)}var p=d.child;if(p!==null)p.return=d,D=p;else for(;D!==null;){d=D;var m=d.sibling,b=d.return;if(ef(d),d===u){D=null;break}if(m!==null){m.return=b,D=m;break}D=b}}}var h=i.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}D=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,D=o;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,D=x;break e}D=i.return}}var f=e.current;for(D=f;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=f;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pi(9,l)}}catch(k){ae(l,l.return,k)}if(l===o){D=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,D=v;break e}D=l.return}}if(U=a,Jn(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(_i,e)}catch{}r=!0}return r}finally{$=t,Xe.transition=n}}return!1}function cu(e,n,t){n=Gt(t,n),n=$p(e,n,1),e=Un(e,n,1),n=Ne(),e!==null&&(Yr(e,1,n),Ie(e,n))}function ae(e,n,t){if(e.tag===3)cu(e,e,t);else for(;n!==null;){if(n.tag===3){cu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Gt(t,e),e=Kp(n,e,1),n=Un(n,e,1),e=Ne(),n!==null&&(Yr(n,1,e),Ie(n,e));break}}n=n.return}}function $g(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,ge===e&&(we&t)===t&&(me===4||me===3&&(we&130023424)===we&&500>ce()-js?lt(e,0):Cs|=t),Ie(e,n)}function df(e,n){n===0&&(e.mode&1?(n=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):n=1);var t=Ne();e=An(e,n),e!==null&&(Yr(e,n,t),Ie(e,t))}function Kg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),df(e,t)}function Vg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(n),df(e,t)}var pf;pf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Fe.current)Oe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Oe=!1,jg(e,n,t);Oe=!!(e.flags&131072)}else Oe=!1,Z&&n.flags&1048576&&hp(n,ai,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;za(e,n),e=n.pendingProps;var a=Kt(n,Re.current);Ht(n,t),a=_s(null,n,r,e,a,t);var i=Rs();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(i=!0,ti(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ws(n),a.updater=ji,n.stateNode=a,a._reactInternals=n,vl(n,r,e,t),n=bl(null,n,r,!0,i,t)):(n.tag=0,Z&&i&&fs(n),Te(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(za(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=qg(r),e=tn(r,e),a){case 0:n=wl(null,n,r,e,t);break e;case 1:n=Zc(null,n,r,e,t);break e;case 11:n=Jc(null,n,r,e,t);break e;case 14:n=Xc(null,n,r,tn(r.type,e),t);break e}throw Error(L(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),wl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Zc(e,n,r,a,t);case 3:e:{if(Gp(n),e===null)throw Error(L(387));r=n.pendingProps,i=n.memoizedState,a=i.element,bp(e,n),li(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Gt(Error(L(423)),n),n=eu(e,n,r,t,a);break e}else if(r!==a){a=Gt(Error(L(424)),n),n=eu(e,n,r,t,a);break e}else for(Ue=Hn(n.stateNode.containerInfo.firstChild),$e=n,Z=!0,an=null,t=yp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Vt(),r===a){n=Tn(e,n,t);break e}Te(e,n,r,t)}n=n.child}return n;case 5:return Sp(n),e===null&&hl(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,ul(r,a)?o=null:i!==null&&ul(r,i)&&(n.flags|=32),qp(e,n),Te(e,n,o,t),n.child;case 6:return e===null&&hl(n),null;case 13:return Yp(e,n,t);case 4:return bs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Wt(n,null,r,t):Te(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Jc(e,n,r,a,t);case 7:return Te(e,n,n.pendingProps,t),n.child;case 8:return Te(e,n,n.pendingProps.children,t),n.child;case 12:return Te(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,o=a.value,W(ii,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===a.children&&!Fe.current){n=Tn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=En(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),gl(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),gl(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Te(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ht(n,t),a=Ze(a),r=r(a),n.flags|=1,Te(e,n,r,t),n.child;case 14:return r=n.type,a=tn(r,n.pendingProps),a=tn(r.type,a),Xc(e,n,r,a,t);case 15:return Vp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),za(e,n),n.tag=1,Be(r)?(e=!0,ti(n)):e=!1,Ht(n,t),Up(n,r,a),vl(n,r,a,t),bl(null,n,r,!0,e,t);case 19:return Qp(e,n,t);case 22:return Wp(e,n,t)}throw Error(L(156,n.tag))};function ff(e,n){return zd(e,n)}function Wg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new Wg(e,n,t,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qg(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===ts)return 14}return 2}function Vn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ua(e,n,t,r,a,i){var o=2;if(r=e,typeof e=="function")Fs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rt:return st(t.children,a,i,n);case es:o=8,a|=8;break;case Uo:return e=Je(12,t,n,a|2),e.elementType=Uo,e.lanes=i,e;case $o:return e=Je(13,t,n,a),e.elementType=$o,e.lanes=i,e;case Ko:return e=Je(19,t,n,a),e.elementType=Ko,e.lanes=i,e;case Sd:return Oi(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wd:o=10;break e;case bd:o=9;break e;case ns:o=11;break e;case ts:o=14;break e;case Cn:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=Je(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function st(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function Oi(e,n,t,r){return e=Je(22,e,r,n),e.elementType=Sd,e.lanes=t,e.stateNode={isHidden:!1},e}function Lo(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function No(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gg(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=co(0),this.expirationTimes=co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bs(e,n,t,r,a,i,o,l,s){return e=new Gg(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(i),e}function Yg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function mf(e){if(!e)return Gn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(Be(t))return fp(e,t,n)}return n}function hf(e,n,t,r,a,i,o,l,s){return e=Bs(t,r,!0,e,a,i,o,l,s),e.context=mf(null),t=e.current,r=Ne(),a=Kn(t),i=En(r,a),i.callback=n??null,Un(t,i,a),e.current.lanes=a,Yr(e,a,r),Ie(e,r),e}function Fi(e,n,t,r){var a=n.current,i=Ne(),o=Kn(a);return t=mf(t),n.context===null?n.context=t:n.pendingContext=t,n=En(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(a,n,o),e!==null&&(ln(e,a,o,i),Fa(e,a,o)),o}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Is(e,n){uu(e,n),(e=e.alternate)&&uu(e,n)}function Qg(){return null}var gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Bi.prototype.render=zs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));Fi(e,n,null,null)};Bi.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Fi(null,e,null,null)}),n[Rn]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pn.length&&n!==0&&n<Pn[t].priority;t++);Pn.splice(t,0,e),t===0&&Gd(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function du(){}function Jg(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=hi(o);i.call(u)}}var o=hf(n,r,e,0,null,!1,!1,"",du);return e._reactRootContainer=o,e[Rn]=o.current,Fr(e.nodeType===8?e.parentNode:e),mt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=hi(s);l.call(u)}}var s=Bs(e,0,!1,null,null,!1,!1,"",du);return e._reactRootContainer=s,e[Rn]=s.current,Fr(e.nodeType===8?e.parentNode:e),mt(function(){Fi(n,s,t,r)}),s}function zi(e,n,t,r,a){var i=t._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=hi(o);l.call(s)}}Fi(n,o,e,a)}else o=Jg(t,n,e,a,r);return hi(o)}Kd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xr(n.pendingLanes);t!==0&&(is(n,t|1),Ie(n,ce()),!(U&6)&&(Yt=ce()+500,Jn()))}break;case 13:mt(function(){var r=An(e,1);if(r!==null){var a=Ne();ln(r,e,1,a)}}),Is(e,1)}};os=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var t=Ne();ln(n,e,134217728,t)}Is(e,134217728)}};Vd=function(e){if(e.tag===13){var n=Kn(e),t=An(e,n);if(t!==null){var r=Ne();ln(t,e,n,r)}Is(e,n)}};Wd=function(){return $};qd=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};el=function(e,n,t){switch(n){case"input":if(qo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Li(r);if(!a)throw Error(L(90));Ed(r),qo(r,a)}}}break;case"textarea":Rd(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};Pd=Ps;Dd=mt;var Xg={usingClientEntryPoint:!1,Events:[Jr,Nt,Li,Cd,jd,Ps]},ur={findFiberByHostInstance:rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zg={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{_i=Aa.inject(Zg),xn=Aa}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;Ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(n))throw Error(L(200));return Yg(e,n,null,t)};Ve.createRoot=function(e,n){if(!Ms(e))throw Error(L(299));var t=!1,r="",a=gf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Bs(e,1,!1,null,null,t,!1,r,a),e[Rn]=n.current,Fr(e.nodeType===8?e.parentNode:e),new zs(n)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Bd(n),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return mt(e)};Ve.hydrate=function(e,n,t){if(!Ii(n))throw Error(L(200));return zi(null,e,n,!0,t)};Ve.hydrateRoot=function(e,n,t){if(!Ms(e))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",o=gf;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=hf(n,null,e,1,t??null,a,!1,i,o),e[Rn]=n.current,Fr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Bi(n)};Ve.render=function(e,n,t){if(!Ii(n))throw Error(L(200));return zi(null,e,n,!1,t)};Ve.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(L(40));return e._reactRootContainer?(mt(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ps;Ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ii(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return zi(e,n,t,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function xf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf)}catch(e){console.error(e)}}xf(),gd.exports=Ve;var ex=gd.exports,pu=ex;Mo.createRoot=pu.createRoot,Mo.hydrateRoot=pu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vr.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const fu="popstate";function nx(e){e===void 0&&(e={});function n(a,i){let{pathname:o="/",search:l="",hash:s=""}=vt(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Pl("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:gi(i))}function r(a,i){Mi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return rx(n,t,r,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Mi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function tx(){return Math.random().toString(36).substr(2,8)}function mu(e,n){return{usr:e.state,key:e.key,idx:n}}function Pl(e,n,t,r){return t===void 0&&(t=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?vt(n):n,{state:t,key:n&&n.key||r||tx()})}function gi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function vt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function rx(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Bn.Pop,s=null,u=d();u==null&&(u=0,o.replaceState(Vr({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Bn.Pop;let S=d(),x=S==null?null:S-u;u=S,s&&s({action:l,location:y.location,delta:x})}function m(S,x){l=Bn.Push;let f=Pl(y.location,S,x);t&&t(f,S),u=d()+1;let g=mu(f,u),v=y.createHref(f);try{o.pushState(g,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(v)}i&&s&&s({action:l,location:y.location,delta:1})}function b(S,x){l=Bn.Replace;let f=Pl(y.location,S,x);t&&t(f,S),u=d();let g=mu(f,u),v=y.createHref(f);o.replaceState(g,"",v),i&&s&&s({action:l,location:y.location,delta:0})}function h(S){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof S=="string"?S:gi(S);return f=f.replace(/ $/,"%20"),ie(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let y={get action(){return l},get location(){return e(a,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(fu,p),s=S,()=>{a.removeEventListener(fu,p),s=null}},createHref(S){return n(a,S)},createURL:h,encodeLocation(S){let x=h(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:b,go(S){return o.go(S)}};return y}var hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hu||(hu={}));function ax(e,n,t){return t===void 0&&(t="/"),ix(e,n,t)}function ix(e,n,t,r){let a=typeof n=="string"?vt(n):n,i=Qt(a.pathname||"/",t);if(i==null)return null;let o=vf(e);ox(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=xx(i);l=hx(o[s],u)}return l}function vf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Wn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vf(i.children,n,d,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:fx(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of yf(i.path))a(i,o,s)}),n}function yf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=yf(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function ox(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:mx(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const lx=/^:[\w-]+$/,sx=3,cx=2,ux=1,dx=10,px=-2,gu=e=>e==="*";function fx(e,n){let t=e.split("/"),r=t.length;return t.some(gu)&&(r+=px),n&&(r+=cx),t.filter(a=>!gu(a)).reduce((a,i)=>a+(lx.test(i)?sx:i===""?ux:dx),r)}function mx(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function hx(e,n,t){let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",p=Dl({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),m=s.route;if(!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:Wn([i,p.pathname]),pathnameBase:Sx(Wn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Wn([i,p.pathnameBase]))}return o}function Dl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=gx(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:b}=d;if(m==="*"){let y=l[p]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const h=l[p];return b&&!h?u[m]=void 0:u[m]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function gx(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Mi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function xx(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Mi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Qt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yx=e=>vx.test(e);function wx(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?vt(e):e,i;if(t)if(yx(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Mi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?i=xu(t.substring(1),"/"):i=xu(t,n)}else i=n;return{pathname:i,search:kx(r),hash:Ex(a)}}function xu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Co(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bx(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function wf(e,n){let t=bx(e);return n?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function bf(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=vt(e):(a=Vr({},e),ie(!a.pathname||!a.pathname.includes("?"),Co("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),Co("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),Co("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=t;else{let p=n.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?n[p]:"/"}let s=wx(a,l),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),Sx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ex=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _x(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sf=["post","put","patch","delete"];new Set(Sf);const Rx=["get",...Sf];new Set(Rx);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Wr.apply(this,arguments)}const Hi=w.createContext(null),kf=w.createContext(null),Xn=w.createContext(null),Ui=w.createContext(null),yt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ef=w.createContext(null);function Ax(e,n){let{relative:t}=n===void 0?{}:n;Zr()||ie(!1);let{basename:r,navigator:a}=w.useContext(Xn),{hash:i,pathname:o,search:l}=$i(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Wn([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Zr(){return w.useContext(Ui)!=null}function ea(){return Zr()||ie(!1),w.useContext(Ui).location}function _f(e){w.useContext(Xn).static||w.useLayoutEffect(e)}function Tx(){let{isDataRoute:e}=w.useContext(yt);return e?Hx():Lx()}function Lx(){Zr()||ie(!1);let e=w.useContext(Hi),{basename:n,future:t,navigator:r}=w.useContext(Xn),{matches:a}=w.useContext(yt),{pathname:i}=ea(),o=JSON.stringify(wf(a,t.v7_relativeSplatPath)),l=w.useRef(!1);return _f(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=bf(u,JSON.parse(o),i,d.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Wn([n,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[n,r,o,i,e])}function $i(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(Xn),{matches:a}=w.useContext(yt),{pathname:i}=ea(),o=JSON.stringify(wf(a,r.v7_relativeSplatPath));return w.useMemo(()=>bf(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function Nx(e,n){return Cx(e,n)}function Cx(e,n,t,r){Zr()||ie(!1);let{navigator:a}=w.useContext(Xn),{matches:i}=w.useContext(yt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=ea(),d;if(n){var p;let S=typeof n=="string"?vt(n):n;s==="/"||(p=S.pathname)!=null&&p.startsWith(s)||ie(!1),d=S}else d=u;let m=d.pathname||"/",b=m;if(s!=="/"){let S=s.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let h=ax(e,{pathname:b}),y=Fx(h&&h.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Wn([s,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:Wn([s,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,t,r);return n&&y?w.createElement(Ui.Provider,{value:{location:Wr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bn.Pop}},y):y}function jx(){let e=Mx(),n=_x(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:a},t):null,null)}const Px=w.createElement(jx,null);class Dx extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(yt.Provider,{value:this.props.routeContext},w.createElement(Ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ox(e){let{routeContext:n,match:t,children:r}=e,a=w.useContext(Hi);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(yt.Provider,{value:n},r)}function Fx(e,n,t,r){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ie(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:b}=t,h=p.route.loader&&m[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||h){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let b,h=!1,y=null,S=null;t&&(b=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||Px,s&&(u<0&&m===0?(Ux("route-fallback"),h=!0,S=null):u===m&&(h=!0,S=p.route.hydrateFallbackElement||null)));let x=n.concat(o.slice(0,m+1)),f=()=>{let g;return b?g=y:h?g=S:p.route.Component?g=w.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,w.createElement(Ox,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:t!=null},children:g})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?w.createElement(Dx,{location:t.location,revalidation:t.revalidation,component:y,error:b,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var Rf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rf||{}),Af=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Af||{});function Bx(e){let n=w.useContext(Hi);return n||ie(!1),n}function Ix(e){let n=w.useContext(kf);return n||ie(!1),n}function zx(e){let n=w.useContext(yt);return n||ie(!1),n}function Tf(e){let n=zx(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function Mx(){var e;let n=w.useContext(Ef),t=Ix(),r=Tf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Hx(){let{router:e}=Bx(Rf.UseNavigateStable),n=Tf(Af.UseNavigateStable),t=w.useRef(!1);return _f(()=>{t.current=!0}),w.useCallback(function(a,i){i===void 0&&(i={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Wr({fromRouteId:n},i)))},[e,n])}const vu={};function Ux(e,n,t){vu[e]||(vu[e]=!0)}function $x(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function nt(e){ie(!1)}function Kx(e){let{basename:n="/",children:t=null,location:r,navigationType:a=Bn.Pop,navigator:i,static:o=!1,future:l}=e;Zr()&&ie(!1);let s=n.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:s,navigator:i,static:o,future:Wr({v7_relativeSplatPath:!1},l)}),[s,l,i,o]);typeof r=="string"&&(r=vt(r));let{pathname:d="/",search:p="",hash:m="",state:b=null,key:h="default"}=r,y=w.useMemo(()=>{let S=Qt(d,s);return S==null?null:{location:{pathname:S,search:p,hash:m,state:b,key:h},navigationType:a}},[s,d,p,m,b,h,a]);return y==null?null:w.createElement(Xn.Provider,{value:u},w.createElement(Ui.Provider,{children:t,value:y}))}function Vx(e){let{children:n,location:t}=e;return Nx(Ol(n),t)}new Promise(()=>{});function Ol(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,a)=>{if(!w.isValidElement(r))return;let i=[...n,a];if(r.type===w.Fragment){t.push.apply(t,Ol(r.props.children,i));return}r.type!==nt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ol(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xi.apply(this,arguments)}function Lf(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Wx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qx(e,n){return e.button===0&&(!n||n==="_self")&&!Wx(e)}const Gx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Qx="6";try{window.__reactRouterVersion=Qx}catch{}const Jx=w.createContext({isTransitioning:!1}),Xx="startTransition",yu=$m[Xx];function Zx(e){let{basename:n,children:t,future:r,window:a}=e,i=w.useRef();i.current==null&&(i.current=nx({window:a,v5Compat:!0}));let o=i.current,[l,s]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(p=>{u&&yu?yu(()=>s(p)):s(p)},[s,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>$x(r),[r]),w.createElement(Kx,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tv=w.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:d,viewTransition:p}=n,m=Lf(n,Gx),{basename:b}=w.useContext(Xn),h,y=!1;if(typeof u=="string"&&nv.test(u)&&(h=u,ev))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=Qt(v.pathname,b);v.origin===g.origin&&k!=null?u=k+v.search+v.hash:y=!0}catch{}let S=Ax(u,{relative:a}),x=av(u,{replace:o,state:l,target:s,preventScrollReset:d,relative:a,viewTransition:p});function f(g){r&&r(g),g.defaultPrevented||x(g)}return w.createElement("a",xi({},m,{href:h||S,onClick:y||i?r:f,ref:t,target:s}))}),Et=w.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:u,children:d}=n,p=Lf(n,Yx),m=$i(s,{relative:p.relative}),b=ea(),h=w.useContext(kf),{navigator:y,basename:S}=w.useContext(Xn),x=h!=null&&iv(m)&&u===!0,f=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,g=b.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(g=g.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&S&&(v=Qt(v,S)||v);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let R=g===f||!o&&g.startsWith(f)&&g.charAt(k)==="/",_=v!=null&&(v===f||!o&&v.startsWith(f)&&v.charAt(f.length)==="/"),T={isActive:R,isPending:_,isTransitioning:x},A=R?r:void 0,P;typeof i=="function"?P=i(T):P=[i,R?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let q=typeof l=="function"?l(T):l;return w.createElement(tv,xi({},p,{"aria-current":A,className:P,ref:t,style:q,to:s,viewTransition:u}),typeof d=="function"?d(T):d)});var Fl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fl||(Fl={}));var wu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wu||(wu={}));function rv(e){let n=w.useContext(Hi);return n||ie(!1),n}function av(e,n){let{target:t,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:l}=n===void 0?{}:n,s=Tx(),u=ea(),d=$i(e,{relative:o});return w.useCallback(p=>{if(qx(p,t)){p.preventDefault();let m=r!==void 0?r:gi(u)===gi(d);s(e,{replace:m,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[u,s,d,r,a,t,e,i,o,l])}function iv(e,n){n===void 0&&(n={});let t=w.useContext(Jx);t==null&&ie(!1);let{basename:r}=rv(Fl.useViewTransitionState),a=$i(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Qt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Qt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Dl(a.pathname,o)!=null||Dl(a.pathname,i)!=null}var Nf={exports:{}},ov="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lv=ov,sv=lv;function Cf(){}function jf(){}jf.resetWarningCache=Cf;var cv=function(){function e(r,a,i,o,l,s){if(s!==sv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:jf,resetWarningCache:Cf};return t.PropTypes=t,t};Nf.exports=cv();var uv=Nf.exports;const K=ad(uv);function wt(e,n,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function l(d){try{u(r.next(d))}catch(p){o(p)}}function s(d){try{u(r.throw(d))}catch(p){o(p)}}function u(d){d.done?i(d.value):a(d.value).then(l,s)}u((r=r.apply(e,n||[])).next())})}const dv=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Jt(e,n,t){const r=pv(e),{webkitRelativePath:a}=e,i=typeof n=="string"?n:typeof a=="string"&&a.length>0?a:`./${e.name}`;return typeof r.path!="string"&&bu(r,"path",i),bu(r,"relativePath",i),r}function pv(e){const{name:n}=e;if(n&&n.lastIndexOf(".")!==-1&&!e.type){const r=n.split(".").pop().toLowerCase(),a=dv.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}function bu(e,n,t){Object.defineProperty(e,n,{value:t,writable:!1,configurable:!1,enumerable:!0})}const fv=[".DS_Store","Thumbs.db"];function mv(e){return wt(this,void 0,void 0,function*(){return vi(e)&&hv(e.dataTransfer)?yv(e.dataTransfer,e.type):gv(e)?xv(e):Array.isArray(e)&&e.every(n=>"getFile"in n&&typeof n.getFile=="function")?vv(e):[]})}function hv(e){return vi(e)}function gv(e){return vi(e)&&vi(e.target)}function vi(e){return typeof e=="object"&&e!==null}function xv(e){return Bl(e.target.files).map(n=>Jt(n))}function vv(e){return wt(this,void 0,void 0,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>Jt(t))})}function yv(e,n){return wt(this,void 0,void 0,function*(){if(e.items){const t=Bl(e.items).filter(a=>a.kind==="file");if(n!=="drop")return t;const r=yield Promise.all(t.map(wv));return Su(Pf(r))}return Su(Bl(e.files).map(t=>Jt(t)))})}function Su(e){return e.filter(n=>fv.indexOf(n.name)===-1)}function Bl(e){if(e===null)return[];const n=[];for(let t=0;t<e.length;t++){const r=e[t];n.push(r)}return n}function wv(e){if(typeof e.webkitGetAsEntry!="function")return ku(e);const n=e.webkitGetAsEntry();return n&&n.isDirectory?Df(n):ku(e,n)}function Pf(e){return e.reduce((n,t)=>[...n,...Array.isArray(t)?Pf(t):[t]],[])}function ku(e,n){return wt(this,void 0,void 0,function*(){var t;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const i=yield e.getAsFileSystemHandle();if(i===null)throw new Error(`${e} is not a File`);if(i!==void 0){const o=yield i.getFile();return o.handle=i,Jt(o)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return Jt(r,(t=n==null?void 0:n.fullPath)!==null&&t!==void 0?t:void 0)})}function bv(e){return wt(this,void 0,void 0,function*(){return e.isDirectory?Df(e):Sv(e)})}function Df(e){const n=e.createReader();return new Promise((t,r)=>{const a=[];function i(){n.readEntries(o=>wt(this,void 0,void 0,function*(){if(o.length){const l=Promise.all(o.map(bv));a.push(l),i()}else try{const l=yield Promise.all(a);t(l)}catch(l){r(l)}}),o=>{r(o)})}i()})}function Sv(e){return wt(this,void 0,void 0,function*(){return new Promise((n,t)=>{e.file(r=>{const a=Jt(r,e.fullPath);n(a)},r=>{t(r)})})})}var jo=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(",");if(t.length===0)return!0;var r=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return t.some(function(o){var l=o.trim().toLowerCase();return l.charAt(0)==="."?r.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):a===l})}return!0};function Eu(e){return _v(e)||Ev(e)||Ff(e)||kv()}function kv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ev(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _v(e){if(Array.isArray(e))return Il(e)}function _u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ru(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_u(Object(t),!0).forEach(function(r){Of(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Of(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function qr(e,n){return Tv(e)||Av(e,n)||Ff(e,n)||Rv()}function Rv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ff(e,n){if(e){if(typeof e=="string")return Il(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Il(e,n)}}function Il(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Av(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Tv(e){if(Array.isArray(e))return e}var Lv=typeof jo=="function"?jo:jo.default,Nv="file-invalid-type",Cv="file-too-large",jv="file-too-small",Pv="too-many-files",Dv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=n.split(","),r=t.length>1?"one of ".concat(t.join(", ")):t[0];return{code:Nv,message:"File type must be ".concat(r)}},Au=function(n){return{code:Cv,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},Tu=function(n){return{code:jv,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},Ov={code:Pv,message:"Too many files"};function Fv(e){return e.type===""&&typeof e.getAsFile=="function"}function Bf(e,n){var t=e.type==="application/x-moz-file"||Lv(e,n)||Fv(e);return[t,t?null:Dv(n)]}function If(e,n,t){if(tt(e.size))if(tt(n)&&tt(t)){if(e.size>t)return[!1,Au(t)];if(e.size<n)return[!1,Tu(n)]}else{if(tt(n)&&e.size<n)return[!1,Tu(n)];if(tt(t)&&e.size>t)return[!1,Au(t)]}return[!0,null]}function tt(e){return e!=null}function Bv(e){var n=e.files,t=e.accept,r=e.minSize,a=e.maxSize,i=e.multiple,o=e.maxFiles,l=e.validator;return!i&&n.length>1||i&&o>=1&&n.length>o?!1:n.every(function(s){var u=Bf(s,t),d=qr(u,1),p=d[0],m=If(s,r,a),b=qr(m,1),h=b[0],y=l?l(s):null;return p&&h&&!y})}function yi(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function dr(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Lu(e){e.preventDefault()}function Iv(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function zv(e){return e.indexOf("Edge/")!==-1}function Mv(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Iv(e)||zv(e)}function fn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return n.some(function(l){return!yi(r)&&l&&l.apply(void 0,[r].concat(i)),yi(r)})}}function Hv(){return"showOpenFilePicker"in window}function Uv(e){if(tt(e)){var n=Object.entries(e).filter(function(t){var r=qr(t,2),a=r[0],i=r[1],o=!0;return zf(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),(!Array.isArray(i)||!i.every(Mf))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(t,r){var a=qr(r,2),i=a[0],o=a[1];return Ru(Ru({},t),{},Of({},i,o))},{});return[{description:"Files",accept:n}]}return e}function $v(e){if(tt(e))return Object.entries(e).reduce(function(n,t){var r=qr(t,2),a=r[0],i=r[1];return[].concat(Eu(n),[a],Eu(i))},[]).filter(function(n){return zf(n)||Mf(n)}).join(",")}function Kv(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Vv(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function zf(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function Mf(e){return/^.*\.[\w]+$/.test(e)}var Wv=["children"],qv=["open"],Gv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Yv=["refKey","onChange","onClick"];function Nu(e){return Xv(e)||Jv(e)||Hf(e)||Qv()}function Qv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xv(e){if(Array.isArray(e))return zl(e)}function Po(e,n){return ny(e)||ey(e,n)||Hf(e,n)||Zv()}function Zv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hf(e,n){if(e){if(typeof e=="string")return zl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zl(e,n)}}function zl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ey(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function ny(e){if(Array.isArray(e))return e}function Cu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Cu(Object(t),!0).forEach(function(r){Ml(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ml(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function wi(e,n){if(e==null)return{};var t=ty(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function ty(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Hs=w.forwardRef(function(e,n){var t=e.children,r=wi(e,Wv),a=Us(r),i=a.open,o=wi(a,qv);return w.useImperativeHandle(n,function(){return{open:i}},[i]),Ql.createElement(w.Fragment,null,t(Q(Q({},o),{},{open:i})))});Hs.displayName="Dropzone";var Uf={disabled:!1,getFilesFromEvent:mv,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Hs.defaultProps=Uf;Hs.propTypes={children:K.func,accept:K.objectOf(K.arrayOf(K.string)),multiple:K.bool,preventDropOnDocument:K.bool,noClick:K.bool,noKeyboard:K.bool,noDrag:K.bool,noDragEventsBubbling:K.bool,minSize:K.number,maxSize:K.number,maxFiles:K.number,disabled:K.bool,getFilesFromEvent:K.func,onFileDialogCancel:K.func,onFileDialogOpen:K.func,useFsAccessApi:K.bool,autoFocus:K.bool,onDragEnter:K.func,onDragLeave:K.func,onDragOver:K.func,onDrop:K.func,onDropAccepted:K.func,onDropRejected:K.func,onError:K.func,validator:K.func};var Hl={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,isDragGlobal:!1,acceptedFiles:[],fileRejections:[]};function Us(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Q(Q({},Uf),e),t=n.accept,r=n.disabled,a=n.getFilesFromEvent,i=n.maxSize,o=n.minSize,l=n.multiple,s=n.maxFiles,u=n.onDragEnter,d=n.onDragLeave,p=n.onDragOver,m=n.onDrop,b=n.onDropAccepted,h=n.onDropRejected,y=n.onFileDialogCancel,S=n.onFileDialogOpen,x=n.useFsAccessApi,f=n.autoFocus,g=n.preventDropOnDocument,v=n.noClick,k=n.noKeyboard,R=n.noDrag,_=n.noDragEventsBubbling,T=n.onError,A=n.validator,P=w.useMemo(function(){return $v(t)},[t]),q=w.useMemo(function(){return Uv(t)},[t]),pe=w.useMemo(function(){return typeof S=="function"?S:ju},[S]),V=w.useMemo(function(){return typeof y=="function"?y:ju},[y]),z=w.useRef(null),le=w.useRef(null),G=w.useReducer(ry,Hl),Ae=Po(G,2),C=Ae[0],N=Ae[1],O=C.isFocused,F=C.isFileDialogActive,H=w.useRef(typeof window<"u"&&window.isSecureContext&&x&&Hv()),xe=function(){!H.current&&F&&setTimeout(function(){if(le.current){var B=le.current.files;B.length||(N({type:"closeDialog"}),V())}},300)};w.useEffect(function(){return window.addEventListener("focus",xe,!1),function(){window.removeEventListener("focus",xe,!1)}},[le,F,V,H]);var X=w.useRef([]),Pe=w.useRef([]),un=function(B){z.current&&z.current.contains(B.target)||(B.preventDefault(),X.current=[])};w.useEffect(function(){return g&&(document.addEventListener("dragover",Lu,!1),document.addEventListener("drop",un,!1)),function(){g&&(document.removeEventListener("dragover",Lu),document.removeEventListener("drop",un))}},[z,g]),w.useEffect(function(){var j=function(dn){Pe.current=[].concat(Nu(Pe.current),[dn.target]),dr(dn)&&N({isDragGlobal:!0,type:"setDragGlobal"})},B=function(dn){Pe.current=Pe.current.filter(function(yn){return yn!==dn.target&&yn!==null}),!(Pe.current.length>0)&&N({isDragGlobal:!1,type:"setDragGlobal"})},ee=function(){Pe.current=[],N({isDragGlobal:!1,type:"setDragGlobal"})},se=function(){Pe.current=[],N({isDragGlobal:!1,type:"setDragGlobal"})};return document.addEventListener("dragenter",j,!1),document.addEventListener("dragleave",B,!1),document.addEventListener("dragend",ee,!1),document.addEventListener("drop",se,!1),function(){document.removeEventListener("dragenter",j),document.removeEventListener("dragleave",B),document.removeEventListener("dragend",ee),document.removeEventListener("drop",se)}},[z]),w.useEffect(function(){return!r&&f&&z.current&&z.current.focus(),function(){}},[z,f,r]);var qe=w.useCallback(function(j){T?T(j):console.error(j)},[T]),Js=w.useCallback(function(j){j.preventDefault(),j.persist(),ca(j),X.current=[].concat(Nu(X.current),[j.target]),dr(j)&&Promise.resolve(a(j)).then(function(B){if(!(yi(j)&&!_)){var ee=B.length,se=ee>0&&Bv({files:B,accept:P,minSize:o,maxSize:i,multiple:l,maxFiles:s,validator:A}),ve=ee>0&&!se;N({isDragAccept:se,isDragReject:ve,isDragActive:!0,type:"setDraggedFiles"}),u&&u(j)}}).catch(function(B){return qe(B)})},[a,u,qe,_,P,o,i,l,s,A]),Xs=w.useCallback(function(j){j.preventDefault(),j.persist(),ca(j);var B=dr(j);if(B&&j.dataTransfer)try{j.dataTransfer.dropEffect="copy"}catch{}return B&&p&&p(j),!1},[p,_]),Zs=w.useCallback(function(j){j.preventDefault(),j.persist(),ca(j);var B=X.current.filter(function(se){return z.current&&z.current.contains(se)}),ee=B.indexOf(j.target);ee!==-1&&B.splice(ee,1),X.current=B,!(B.length>0)&&(N({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),dr(j)&&d&&d(j))},[z,d,_]),oa=w.useCallback(function(j,B){var ee=[],se=[];j.forEach(function(ve){var dn=Bf(ve,P),yn=Po(dn,2),Ji=yn[0],Xi=yn[1],Zi=If(ve,o,i),ua=Po(Zi,2),eo=ua[0],no=ua[1],to=A?A(ve):null;if(Ji&&eo&&!to)ee.push(ve);else{var ro=[Xi,no];to&&(ro=ro.concat(to)),se.push({file:ve,errors:ro.filter(function(Rm){return Rm})})}}),(!l&&ee.length>1||l&&s>=1&&ee.length>s)&&(ee.forEach(function(ve){se.push({file:ve,errors:[Ov]})}),ee.splice(0)),N({acceptedFiles:ee,fileRejections:se,isDragReject:se.length>0,type:"setFiles"}),m&&m(ee,se,B),se.length>0&&h&&h(se,B),ee.length>0&&b&&b(ee,B)},[N,l,P,o,i,s,m,b,h,A]),la=w.useCallback(function(j){j.preventDefault(),j.persist(),ca(j),X.current=[],dr(j)&&Promise.resolve(a(j)).then(function(B){yi(j)&&!_||oa(B,j)}).catch(function(B){return qe(B)}),N({type:"reset"})},[a,oa,qe,_]),bt=w.useCallback(function(){if(H.current){N({type:"openDialog"}),pe();var j={multiple:l,types:q};window.showOpenFilePicker(j).then(function(B){return a(B)}).then(function(B){oa(B,null),N({type:"closeDialog"})}).catch(function(B){Kv(B)?(V(B),N({type:"closeDialog"})):Vv(B)?(H.current=!1,le.current?(le.current.value=null,le.current.click()):qe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):qe(B)});return}le.current&&(N({type:"openDialog"}),pe(),le.current.value=null,le.current.click())},[N,pe,V,x,oa,qe,q,l]),ec=w.useCallback(function(j){!z.current||!z.current.isEqualNode(j.target)||(j.key===" "||j.key==="Enter"||j.keyCode===32||j.keyCode===13)&&(j.preventDefault(),bt())},[z,bt]),nc=w.useCallback(function(){N({type:"focus"})},[]),tc=w.useCallback(function(){N({type:"blur"})},[]),rc=w.useCallback(function(){v||(Mv()?setTimeout(bt,0):bt())},[v,bt]),St=function(B){return r?null:B},Qi=function(B){return k?null:St(B)},sa=function(B){return R?null:St(B)},ca=function(B){_&&B.stopPropagation()},km=w.useMemo(function(){return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=j.refKey,ee=B===void 0?"ref":B,se=j.role,ve=j.onKeyDown,dn=j.onFocus,yn=j.onBlur,Ji=j.onClick,Xi=j.onDragEnter,Zi=j.onDragOver,ua=j.onDragLeave,eo=j.onDrop,no=wi(j,Gv);return Q(Q(Ml({onKeyDown:Qi(fn(ve,ec)),onFocus:Qi(fn(dn,nc)),onBlur:Qi(fn(yn,tc)),onClick:St(fn(Ji,rc)),onDragEnter:sa(fn(Xi,Js)),onDragOver:sa(fn(Zi,Xs)),onDragLeave:sa(fn(ua,Zs)),onDrop:sa(fn(eo,la)),role:typeof se=="string"&&se!==""?se:"presentation"},ee,z),!r&&!k?{tabIndex:0}:{}),no)}},[z,ec,nc,tc,rc,Js,Xs,Zs,la,k,R,r]),Em=w.useCallback(function(j){j.stopPropagation()},[]),_m=w.useMemo(function(){return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=j.refKey,ee=B===void 0?"ref":B,se=j.onChange,ve=j.onClick,dn=wi(j,Yv),yn=Ml({accept:P,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:St(fn(se,la)),onClick:St(fn(ve,Em)),tabIndex:-1},ee,le);return Q(Q({},yn),dn)}},[le,t,l,la,r]);return Q(Q({},C),{},{isFocused:O&&!r,getRootProps:km,getInputProps:_m,rootRef:z,inputRef:le,open:St(bt)})}function ry(e,n){switch(n.type){case"focus":return Q(Q({},e),{},{isFocused:!0});case"blur":return Q(Q({},e),{},{isFocused:!1});case"openDialog":return Q(Q({},Hl),{},{isFileDialogActive:!0});case"closeDialog":return Q(Q({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Q(Q({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return Q(Q({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections,isDragReject:n.isDragReject});case"setDragGlobal":return Q(Q({},e),{},{isDragGlobal:n.isDragGlobal});case"reset":return Q({},Hl);default:return e}}function ju(){}function ay({onFile:e,loading:n}){const t=w.useCallback(o=>{o.length>0&&e(o[0])},[e]),{getRootProps:r,getInputProps:a,isDragActive:i}=Us({onDrop:t,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:n});return c.jsxs("div",{...r(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${i?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
        ${n?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{...a()}),c.jsx("div",{className:"text-4xl mb-3",children:"📂"}),n?c.jsx("p",{className:"text-gray-400",children:"Processing file…"}):i?c.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your check file here"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]})}function $f(e,n){return function(){return e.apply(n,arguments)}}const{toString:iy}=Object.prototype,{getPrototypeOf:$s}=Object,{iterator:Ki,toStringTag:Kf}=Symbol,Vi=(e=>n=>{const t=iy.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=e=>(e=e.toLowerCase(),n=>Vi(n)===e),Wi=e=>n=>typeof n===e,{isArray:tr}=Array,Xt=Wi("undefined");function na(e){return e!==null&&!Xt(e)&&e.constructor!==null&&!Xt(e.constructor)&&ze(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Vf=cn("ArrayBuffer");function oy(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Vf(e.buffer),n}const ly=Wi("string"),ze=Wi("function"),Wf=Wi("number"),ta=e=>e!==null&&typeof e=="object",sy=e=>e===!0||e===!1,$a=e=>{if(Vi(e)!=="object")return!1;const n=$s(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Kf in e)&&!(Ki in e)},cy=e=>{if(!ta(e)||na(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},uy=cn("Date"),dy=cn("File"),py=e=>!!(e&&typeof e.uri<"u"),fy=e=>e&&typeof e.getParts<"u",my=cn("Blob"),hy=cn("FileList"),gy=e=>ta(e)&&ze(e.pipe);function xy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Pu=xy(),Du=typeof Pu.FormData<"u"?Pu.FormData:void 0,vy=e=>{let n;return e&&(Du&&e instanceof Du||ze(e.append)&&((n=Vi(e))==="formdata"||n==="object"&&ze(e.toString)&&e.toString()==="[object FormData]"))},yy=cn("URLSearchParams"),[wy,by,Sy,ky]=["ReadableStream","Request","Response","Headers"].map(cn),Ey=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ra(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),tr(e))for(r=0,a=e.length;r<a;r++)n.call(null,e[r],r,e);else{if(na(e))return;const i=t?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],n.call(null,e[l],l,e)}}function qf(e,n){if(na(e))return null;n=n.toLowerCase();const t=Object.keys(e);let r=t.length,a;for(;r-- >0;)if(a=t[r],n===a.toLowerCase())return a;return null}const ot=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Gf=e=>!Xt(e)&&e!==ot;function Ul(){const{caseless:e,skipUndefined:n}=Gf(this)&&this||{},t={},r=(a,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const o=e&&qf(t,i)||i;$a(t[o])&&$a(a)?t[o]=Ul(t[o],a):$a(a)?t[o]=Ul({},a):tr(a)?t[o]=a.slice():(!n||!Xt(a))&&(t[o]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ra(arguments[a],r);return t}const _y=(e,n,t,{allOwnKeys:r}={})=>(ra(n,(a,i)=>{t&&ze(a)?Object.defineProperty(e,i,{value:$f(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Ry=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ay=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},Ty=(e,n,t,r)=>{let a,i,o;const l={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,n))&&!l[o]&&(n[o]=e[o],l[o]=!0);e=t!==!1&&$s(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},Ly=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},Ny=e=>{if(!e)return null;if(tr(e))return e;let n=e.length;if(!Wf(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},Cy=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&$s(Uint8Array)),jy=(e,n)=>{const r=(e&&e[Ki]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;n.call(e,i[0],i[1])}},Py=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},Dy=cn("HTMLFormElement"),Oy=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),Ou=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),Fy=cn("RegExp"),Yf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};ra(t,(a,i)=>{let o;(o=n(a,i,e))!==!1&&(r[i]=o||a)}),Object.defineProperties(e,r)},By=e=>{Yf(e,(n,t)=>{if(ze(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(ze(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Iy=(e,n)=>{const t={},r=a=>{a.forEach(i=>{t[i]=!0})};return tr(e)?r(e):r(String(e).split(n)),t},zy=()=>{},My=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Hy(e){return!!(e&&ze(e.append)&&e[Kf]==="FormData"&&e[Ki])}const Uy=e=>{const n=new Array(10),t=(r,a)=>{if(ta(r)){if(n.indexOf(r)>=0)return;if(na(r))return r;if(!("toJSON"in r)){n[a]=r;const i=tr(r)?[]:{};return ra(r,(o,l)=>{const s=t(o,a+1);!Xt(s)&&(i[l]=s)}),n[a]=void 0,i}}return r};return t(e,0)},$y=cn("AsyncFunction"),Ky=e=>e&&(ta(e)||ze(e))&&ze(e.then)&&ze(e.catch),Qf=((e,n)=>e?setImmediate:n?((t,r)=>(ot.addEventListener("message",({source:a,data:i})=>{a===ot&&i===t&&r.length&&r.shift()()},!1),a=>{r.push(a),ot.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ze(ot.postMessage)),Vy=typeof queueMicrotask<"u"?queueMicrotask.bind(ot):typeof process<"u"&&process.nextTick||Qf,Wy=e=>e!=null&&ze(e[Ki]),E={isArray:tr,isArrayBuffer:Vf,isBuffer:na,isFormData:vy,isArrayBufferView:oy,isString:ly,isNumber:Wf,isBoolean:sy,isObject:ta,isPlainObject:$a,isEmptyObject:cy,isReadableStream:wy,isRequest:by,isResponse:Sy,isHeaders:ky,isUndefined:Xt,isDate:uy,isFile:dy,isReactNativeBlob:py,isReactNative:fy,isBlob:my,isRegExp:Fy,isFunction:ze,isStream:gy,isURLSearchParams:yy,isTypedArray:Cy,isFileList:hy,forEach:ra,merge:Ul,extend:_y,trim:Ey,stripBOM:Ry,inherits:Ay,toFlatObject:Ty,kindOf:Vi,kindOfTest:cn,endsWith:Ly,toArray:Ny,forEachEntry:jy,matchAll:Py,isHTMLForm:Dy,hasOwnProperty:Ou,hasOwnProp:Ou,reduceDescriptors:Yf,freezeMethods:By,toObjectSet:Iy,toCamelCase:Oy,noop:zy,toFiniteNumber:My,findKey:qf,global:ot,isContextDefined:Gf,isSpecCompliantForm:Hy,toJSONObject:Uy,isAsyncFn:$y,isThenable:Ky,setImmediate:Qf,asap:Vy,isIterable:Wy};let I=class Jf extends Error{static from(n,t,r,a,i,o){const l=new Jf(n.message,t||n.code,r,a,i);return l.cause=n,l.name=n.name,n.status!=null&&l.status==null&&(l.status=n.status),o&&Object.assign(l,o),l}constructor(n,t,r,a,i){super(n),Object.defineProperty(this,"message",{value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}};I.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";I.ERR_BAD_OPTION="ERR_BAD_OPTION";I.ECONNABORTED="ECONNABORTED";I.ETIMEDOUT="ETIMEDOUT";I.ERR_NETWORK="ERR_NETWORK";I.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";I.ERR_DEPRECATED="ERR_DEPRECATED";I.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";I.ERR_BAD_REQUEST="ERR_BAD_REQUEST";I.ERR_CANCELED="ERR_CANCELED";I.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";I.ERR_INVALID_URL="ERR_INVALID_URL";const qy=null;function $l(e){return E.isPlainObject(e)||E.isArray(e)}function Xf(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Do(e,n,t){return e?e.concat(n).map(function(a,i){return a=Xf(a),!t&&i?"["+a+"]":a}).join(t?".":""):n}function Gy(e){return E.isArray(e)&&!e.some($l)}const Yy=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});function qi(e,n,t){if(!E.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=E.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,S){return!E.isUndefined(S[y])});const r=t.metaTokens,a=t.visitor||d,i=t.dots,o=t.indexes,s=(t.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(n);if(!E.isFunction(a))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(E.isDate(h))return h.toISOString();if(E.isBoolean(h))return h.toString();if(!s&&E.isBlob(h))throw new I("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(h)||E.isTypedArray(h)?s&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function d(h,y,S){let x=h;if(E.isReactNative(n)&&E.isReactNativeBlob(h))return n.append(Do(S,y,i),u(h)),!1;if(h&&!S&&typeof h=="object"){if(E.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(E.isArray(h)&&Gy(h)||(E.isFileList(h)||E.endsWith(y,"[]"))&&(x=E.toArray(h)))return y=Xf(y),x.forEach(function(g,v){!(E.isUndefined(g)||g===null)&&n.append(o===!0?Do([y],v,i):o===null?y:y+"[]",u(g))}),!1}return $l(h)?!0:(n.append(Do(S,y,i),u(h)),!1)}const p=[],m=Object.assign(Yy,{defaultVisitor:d,convertValue:u,isVisitable:$l});function b(h,y){if(!E.isUndefined(h)){if(p.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(h),E.forEach(h,function(x,f){(!(E.isUndefined(x)||x===null)&&a.call(n,x,E.isString(f)?f.trim():f,y,m))===!0&&b(x,y?y.concat(f):[f])}),p.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return b(e),n}function Fu(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function Ks(e,n){this._pairs=[],e&&qi(e,this,n)}const Zf=Ks.prototype;Zf.append=function(n,t){this._pairs.push([n,t])};Zf.toString=function(n){const t=n?function(r){return n.call(this,r,Fu)}:Fu;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function Qy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function em(e,n,t){if(!n)return e;const r=t&&t.encode||Qy,a=E.isFunction(t)?{serialize:t}:t,i=a&&a.serialize;let o;if(i?o=i(n,a):o=E.isURLSearchParams(n)?n.toString():new Ks(n,a).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Bu{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){E.forEach(this.handlers,function(r){r!==null&&n(r)})}}const Vs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Jy=typeof URLSearchParams<"u"?URLSearchParams:Ks,Xy=typeof FormData<"u"?FormData:null,Zy=typeof Blob<"u"?Blob:null,e0={isBrowser:!0,classes:{URLSearchParams:Jy,FormData:Xy,Blob:Zy},protocols:["http","https","file","blob","url","data"]},Ws=typeof window<"u"&&typeof document<"u",Kl=typeof navigator=="object"&&navigator||void 0,n0=Ws&&(!Kl||["ReactNative","NativeScript","NS"].indexOf(Kl.product)<0),t0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",r0=Ws&&window.location.href||"http://localhost",a0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ws,hasStandardBrowserEnv:n0,hasStandardBrowserWebWorkerEnv:t0,navigator:Kl,origin:r0},Symbol.toStringTag,{value:"Module"})),_e={...a0,...e0};function i0(e,n){return qi(e,new _e.classes.URLSearchParams,{visitor:function(t,r,a,i){return _e.isNode&&E.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...n})}function o0(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function l0(e){const n={},t=Object.keys(e);let r;const a=t.length;let i;for(r=0;r<a;r++)i=t[r],n[i]=e[i];return n}function nm(e){function n(t,r,a,i){let o=t[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),s=i>=t.length;return o=!o&&E.isArray(a)?a.length:o,s?(E.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!l):((!a[o]||!E.isObject(a[o]))&&(a[o]=[]),n(t,r,a[o],i)&&E.isArray(a[o])&&(a[o]=l0(a[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const t={};return E.forEachEntry(e,(r,a)=>{n(o0(r),a,t,0)}),t}return null}function s0(e,n,t){if(E.isString(e))try{return(n||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}const aa={transitional:Vs,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,i=E.isObject(n);if(i&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return a?JSON.stringify(nm(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n)||E.isReadableStream(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return i0(n,this.formSerializer).toString();if((l=E.isFileList(n))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return qi(l?{"files[]":n}:n,s&&new s,this.formSerializer)}}return i||a?(t.setContentType("application/json",!1),s0(n)):n}],transformResponse:[function(n){const t=this.transitional||aa.transitional,r=t&&t.forcedJSONParsing,a=this.responseType==="json";if(E.isResponse(n)||E.isReadableStream(n))return n;if(n&&E.isString(n)&&(r&&!this.responseType||a)){const o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(n,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?I.from(l,I.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{aa.headers[e]={}});const c0=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),u0=e=>{const n={};let t,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),t=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!t||n[t]&&c0[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},Iu=Symbol("internals");function pr(e){return e&&String(e).trim().toLowerCase()}function Ka(e){return e===!1||e==null?e:E.isArray(e)?e.map(Ka):String(e).replace(/[\r\n]+$/,"")}function d0(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const p0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Oo(e,n,t,r,a){if(E.isFunction(r))return r.call(this,n,t);if(a&&(n=t),!!E.isString(n)){if(E.isString(r))return n.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(n)}}function f0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function m0(e,n){const t=E.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(a,i,o){return this[r].call(this,n,a,i,o)},configurable:!0})})}let Me=class{constructor(n){n&&this.set(n)}set(n,t,r){const a=this;function i(l,s,u){const d=pr(s);if(!d)throw new Error("header name must be a non-empty string");const p=E.findKey(a,d);(!p||a[p]===void 0||u===!0||u===void 0&&a[p]!==!1)&&(a[p||s]=Ka(l))}const o=(l,s)=>E.forEach(l,(u,d)=>i(u,d,s));if(E.isPlainObject(n)||n instanceof this.constructor)o(n,t);else if(E.isString(n)&&(n=n.trim())&&!p0(n))o(u0(n),t);else if(E.isObject(n)&&E.isIterable(n)){let l={},s,u;for(const d of n){if(!E.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[u=d[0]]=(s=l[u])?E.isArray(s)?[...s,d[1]]:[s,d[1]]:d[1]}o(l,t)}else n!=null&&i(t,n,r);return this}get(n,t){if(n=pr(n),n){const r=E.findKey(this,n);if(r){const a=this[r];if(!t)return a;if(t===!0)return d0(a);if(E.isFunction(t))return t.call(this,a,r);if(E.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=pr(n),n){const r=E.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||Oo(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let a=!1;function i(o){if(o=pr(o),o){const l=E.findKey(r,o);l&&(!t||Oo(r,r[l],l,t))&&(delete r[l],a=!0)}}return E.isArray(n)?n.forEach(i):i(n),a}clear(n){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const i=t[r];(!n||Oo(this,this[i],i,n,!0))&&(delete this[i],a=!0)}return a}normalize(n){const t=this,r={};return E.forEach(this,(a,i)=>{const o=E.findKey(r,i);if(o){t[o]=Ka(a),delete t[i];return}const l=n?f0(i):String(i).trim();l!==i&&delete t[i],t[l]=Ka(a),r[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return E.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=n&&E.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(a=>r.set(a)),r}static accessor(n){const r=(this[Iu]=this[Iu]={accessors:{}}).accessors,a=this.prototype;function i(o){const l=pr(o);r[l]||(m0(a,o),r[l]=!0)}return E.isArray(n)?n.forEach(i):i(n),this}};Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Me.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});E.freezeMethods(Me);function Fo(e,n){const t=this||aa,r=n||t,a=Me.from(r.headers);let i=r.data;return E.forEach(e,function(l){i=l.call(t,i,a.normalize(),n?n.status:void 0)}),a.normalize(),i}function tm(e){return!!(e&&e.__CANCEL__)}let ia=class extends I{constructor(n,t,r){super(n??"canceled",I.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function rm(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new I("Request failed with status code "+t.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function h0(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function g0(e,n){e=e||10;const t=new Array(e),r=new Array(e);let a=0,i=0,o;return n=n!==void 0?n:1e3,function(s){const u=Date.now(),d=r[i];o||(o=u),t[a]=s,r[a]=u;let p=i,m=0;for(;p!==a;)m+=t[p++],p=p%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),u-o<n)return;const b=d&&u-d;return b?Math.round(m*1e3/b):void 0}}function x0(e,n){let t=0,r=1e3/n,a,i;const o=(u,d=Date.now())=>{t=d,a=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),p=d-t;p>=r?o(u,d):(a=u,i||(i=setTimeout(()=>{i=null,o(a)},r-p)))},()=>a&&o(a)]}const bi=(e,n,t=3)=>{let r=0;const a=g0(50,250);return x0(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-r,u=a(s),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:u||void 0,estimated:u&&l&&d?(l-o)/u:void 0,event:i,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(p)},t)},zu=(e,n)=>{const t=e!=null;return[r=>n[0]({lengthComputable:t,total:e,loaded:r}),n[1]]},Mu=e=>(...n)=>E.asap(()=>e(...n)),v0=_e.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,_e.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(_e.origin),_e.navigator&&/(msie|trident)/i.test(_e.navigator.userAgent)):()=>!0,y0=_e.hasStandardBrowserEnv?{write(e,n,t,r,a,i,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(n)}`];E.isNumber(t)&&l.push(`expires=${new Date(t).toUTCString()}`),E.isString(r)&&l.push(`path=${r}`),E.isString(a)&&l.push(`domain=${a}`),i===!0&&l.push("secure"),E.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function w0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function b0(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function am(e,n,t){let r=!w0(n);return e&&(r||t==!1)?b0(e,n):n}const Hu=e=>e instanceof Me?{...e}:e;function ht(e,n){n=n||{};const t={};function r(u,d,p,m){return E.isPlainObject(u)&&E.isPlainObject(d)?E.merge.call({caseless:m},u,d):E.isPlainObject(d)?E.merge({},d):E.isArray(d)?d.slice():d}function a(u,d,p,m){if(E.isUndefined(d)){if(!E.isUndefined(u))return r(void 0,u,p,m)}else return r(u,d,p,m)}function i(u,d){if(!E.isUndefined(d))return r(void 0,d)}function o(u,d){if(E.isUndefined(d)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,p){if(p in n)return r(u,d);if(p in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,d,p)=>a(Hu(u),Hu(d),p,!0)};return E.forEach(Object.keys({...e,...n}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const p=E.hasOwnProp(s,d)?s[d]:a,m=p(e[d],n[d],d);E.isUndefined(m)&&p!==l||(t[d]=m)}),t}const im=e=>{const n=ht({},e);let{data:t,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:l}=n;if(n.headers=o=Me.from(o),n.url=em(am(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),E.isFormData(t)){if(_e.hasStandardBrowserEnv||_e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(E.isFunction(t.getHeaders)){const s=t.getHeaders(),u=["content-type","content-length"];Object.entries(s).forEach(([d,p])=>{u.includes(d.toLowerCase())&&o.set(d,p)})}}if(_e.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(n)),r||r!==!1&&v0(n.url))){const s=a&&i&&y0.read(i);s&&o.set(a,s)}return n},S0=typeof XMLHttpRequest<"u",k0=S0&&function(e){return new Promise(function(t,r){const a=im(e);let i=a.data;const o=Me.from(a.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:u}=a,d,p,m,b,h;function y(){b&&b(),h&&h(),a.cancelToken&&a.cancelToken.unsubscribe(d),a.signal&&a.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function x(){if(!S)return;const g=Me.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:g,config:e,request:S};rm(function(_){t(_),y()},function(_){r(_),y()},k),S=null}"onloadend"in S?S.onloadend=x:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(x)},S.onabort=function(){S&&(r(new I("Request aborted",I.ECONNABORTED,e,S)),S=null)},S.onerror=function(v){const k=v&&v.message?v.message:"Network Error",R=new I(k,I.ERR_NETWORK,e,S);R.event=v||null,r(R),S=null},S.ontimeout=function(){let v=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const k=a.transitional||Vs;a.timeoutErrorMessage&&(v=a.timeoutErrorMessage),r(new I(v,k.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&E.forEach(o.toJSON(),function(v,k){S.setRequestHeader(k,v)}),E.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),l&&l!=="json"&&(S.responseType=a.responseType),u&&([m,h]=bi(u,!0),S.addEventListener("progress",m)),s&&S.upload&&([p,b]=bi(s),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",b)),(a.cancelToken||a.signal)&&(d=g=>{S&&(r(!g||g.type?new ia(null,e,S):g),S.abort(),S=null)},a.cancelToken&&a.cancelToken.subscribe(d),a.signal&&(a.signal.aborted?d():a.signal.addEventListener("abort",d)));const f=h0(a.url);if(f&&_e.protocols.indexOf(f)===-1){r(new I("Unsupported protocol "+f+":",I.ERR_BAD_REQUEST,e));return}S.send(i||null)})},E0=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let r=new AbortController,a;const i=function(u){if(!a){a=!0,l();const d=u instanceof Error?u:this.reason;r.abort(d instanceof I?d:new ia(d instanceof Error?d.message:d))}};let o=n&&setTimeout(()=>{o=null,i(new I(`timeout of ${n}ms exceeded`,I.ETIMEDOUT))},n);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>E.asap(l),s}},_0=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let r=0,a;for(;r<t;)a=r+n,yield e.slice(r,a),r=a},R0=async function*(e,n){for await(const t of A0(e))yield*_0(t,n)},A0=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:r}=await n.read();if(t)break;yield r}}finally{await n.cancel()}},Uu=(e,n,t,r)=>{const a=R0(e,n);let i=0,o,l=s=>{o||(o=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:u,value:d}=await a.next();if(u){l(),s.close();return}let p=d.byteLength;if(t){let m=i+=p;t(m)}s.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(s){return l(s),a.return()}},{highWaterMark:2})},$u=64*1024,{isFunction:Ta}=E,T0=(({Request:e,Response:n})=>({Request:e,Response:n}))(E.global),{ReadableStream:Ku,TextEncoder:Vu}=E.global,Wu=(e,...n)=>{try{return!!e(...n)}catch{return!1}},L0=e=>{e=E.merge.call({skipUndefined:!0},T0,e);const{fetch:n,Request:t,Response:r}=e,a=n?Ta(n):typeof fetch=="function",i=Ta(t),o=Ta(r);if(!a)return!1;const l=a&&Ta(Ku),s=a&&(typeof Vu=="function"?(h=>y=>h.encode(y))(new Vu):async h=>new Uint8Array(await new t(h).arrayBuffer())),u=i&&l&&Wu(()=>{let h=!1;const y=new Ku,S=new t(_e.origin,{body:y,method:"POST",get duplex(){return h=!0,"half"}}).headers.has("Content-Type");return y.cancel(),h&&!S}),d=o&&l&&Wu(()=>E.isReadableStream(new r("").body)),p={stream:d&&(h=>h.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!p[h]&&(p[h]=(y,S)=>{let x=y&&y[h];if(x)return x.call(y);throw new I(`Response type '${h}' is not supported`,I.ERR_NOT_SUPPORT,S)})});const m=async h=>{if(h==null)return 0;if(E.isBlob(h))return h.size;if(E.isSpecCompliantForm(h))return(await new t(_e.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(E.isArrayBufferView(h)||E.isArrayBuffer(h))return h.byteLength;if(E.isURLSearchParams(h)&&(h=h+""),E.isString(h))return(await s(h)).byteLength},b=async(h,y)=>{const S=E.toFiniteNumber(h.getContentLength());return S??m(y)};return async h=>{let{url:y,method:S,data:x,signal:f,cancelToken:g,timeout:v,onDownloadProgress:k,onUploadProgress:R,responseType:_,headers:T,withCredentials:A="same-origin",fetchOptions:P}=im(h),q=n||fetch;_=_?(_+"").toLowerCase():"text";let pe=E0([f,g&&g.toAbortSignal()],v),V=null;const z=pe&&pe.unsubscribe&&(()=>{pe.unsubscribe()});let le;try{if(R&&u&&S!=="get"&&S!=="head"&&(le=await b(T,x))!==0){let F=new t(y,{method:"POST",body:x,duplex:"half"}),H;if(E.isFormData(x)&&(H=F.headers.get("content-type"))&&T.setContentType(H),F.body){const[xe,X]=zu(le,bi(Mu(R)));x=Uu(F.body,$u,xe,X)}}E.isString(A)||(A=A?"include":"omit");const G=i&&"credentials"in t.prototype,Ae={...P,signal:pe,method:S.toUpperCase(),headers:T.normalize().toJSON(),body:x,duplex:"half",credentials:G?A:void 0};V=i&&new t(y,Ae);let C=await(i?q(V,P):q(y,Ae));const N=d&&(_==="stream"||_==="response");if(d&&(k||N&&z)){const F={};["status","statusText","headers"].forEach(Pe=>{F[Pe]=C[Pe]});const H=E.toFiniteNumber(C.headers.get("content-length")),[xe,X]=k&&zu(H,bi(Mu(k),!0))||[];C=new r(Uu(C.body,$u,xe,()=>{X&&X(),z&&z()}),F)}_=_||"text";let O=await p[E.findKey(p,_)||"text"](C,h);return!N&&z&&z(),await new Promise((F,H)=>{rm(F,H,{data:O,headers:Me.from(C.headers),status:C.status,statusText:C.statusText,config:h,request:V})})}catch(G){throw z&&z(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,h,V,G&&G.response),{cause:G.cause||G}):I.from(G,G&&G.code,h,V,G&&G.response)}}},N0=new Map,om=e=>{let n=e&&e.env||{};const{fetch:t,Request:r,Response:a}=n,i=[r,a,t];let o=i.length,l=o,s,u,d=N0;for(;l--;)s=i[l],u=d.get(s),u===void 0&&d.set(s,u=l?new Map:L0(n)),d=u;return u};om();const qs={http:qy,xhr:k0,fetch:{get:om}};E.forEach(qs,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const qu=e=>`- ${e}`,C0=e=>E.isFunction(e)||e===null||e===!1;function j0(e,n){e=E.isArray(e)?e:[e];const{length:t}=e;let r,a;const i={};for(let o=0;o<t;o++){r=e[o];let l;if(a=r,!C0(r)&&(a=qs[(l=String(r)).toLowerCase()],a===void 0))throw new I(`Unknown adapter '${l}'`);if(a&&(E.isFunction(a)||(a=a.get(n))))break;i[l||"#"+o]=a}if(!a){const o=Object.entries(i).map(([s,u])=>`adapter ${s} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(qu).join(`
`):" "+qu(o[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a}const lm={getAdapter:j0,adapters:qs};function Bo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ia(null,e)}function Gu(e){return Bo(e),e.headers=Me.from(e.headers),e.data=Fo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lm.getAdapter(e.adapter||aa.adapter,e)(e).then(function(r){return Bo(e),r.data=Fo.call(e,e.transformResponse,r),r.headers=Me.from(r.headers),r},function(r){return tm(r)||(Bo(e),r&&r.response&&(r.response.data=Fo.call(e,e.transformResponse,r.response),r.response.headers=Me.from(r.response.headers))),Promise.reject(r)})}const sm="1.14.0",Gi={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Gi[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const Yu={};Gi.transitional=function(n,t,r){function a(i,o){return"[Axios v"+sm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(n===!1)throw new I(a(o," has been removed"+(t?" in "+t:"")),I.ERR_DEPRECATED);return t&&!Yu[o]&&(Yu[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(i,o,l):!0}};Gi.spelling=function(n){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${n}`),!0)};function P0(e,n,t){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=n[i];if(o){const l=e[i],s=l===void 0||o(l,i,e);if(s!==!0)throw new I("option "+i+" must be "+s,I.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const Va={assertOptions:P0,validators:Gi},Ge=Va.validators;let ct=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Bu,response:new Bu}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=ht(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:i}=t;r!==void 0&&Va.assertOptions(r,{silentJSONParsing:Ge.transitional(Ge.boolean),forcedJSONParsing:Ge.transitional(Ge.boolean),clarifyTimeoutError:Ge.transitional(Ge.boolean),legacyInterceptorReqResOrdering:Ge.transitional(Ge.boolean)},!1),a!=null&&(E.isFunction(a)?t.paramsSerializer={serialize:a}:Va.assertOptions(a,{encode:Ge.function,serialize:Ge.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Va.assertOptions(t,{baseUrl:Ge.spelling("baseURL"),withXsrfToken:Ge.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[t.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),t.headers=Me.concat(o,i);const l=[];let s=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(t)===!1)return;s=s&&y.synchronous;const S=t.transitional||Vs;S&&S.legacyInterceptorReqResOrdering?l.unshift(y.fulfilled,y.rejected):l.push(y.fulfilled,y.rejected)});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,p=0,m;if(!s){const h=[Gu.bind(this),void 0];for(h.unshift(...l),h.push(...u),m=h.length,d=Promise.resolve(t);p<m;)d=d.then(h[p++],h[p++]);return d}m=l.length;let b=t;for(;p<m;){const h=l[p++],y=l[p++];try{b=h(b)}catch(S){y.call(this,S);break}}try{d=Gu.call(this,b)}catch(h){return Promise.reject(h)}for(p=0,m=u.length;p<m;)d=d.then(u[p++],u[p++]);return d}getUri(n){n=ht(this.defaults,n);const t=am(n.baseURL,n.url,n.allowAbsoluteUrls);return em(t,n.params,n.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(n){ct.prototype[n]=function(t,r){return this.request(ht(r||{},{method:n,url:t,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(n){function t(r){return function(i,o,l){return this.request(ht(l||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ct.prototype[n]=t(),ct.prototype[n+"Form"]=t(!0)});let D0=class cm{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},n(function(i,o,l){r.reason||(r.reason=new ia(i,o,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=r=>{n.abort(r)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new cm(function(a){n=a}),cancel:n}}};function O0(e){return function(t){return e.apply(null,t)}}function F0(e){return E.isObject(e)&&e.isAxiosError===!0}const Vl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Vl).forEach(([e,n])=>{Vl[n]=e});function um(e){const n=new ct(e),t=$f(ct.prototype.request,n);return E.extend(t,ct.prototype,n,{allOwnKeys:!0}),E.extend(t,n,null,{allOwnKeys:!0}),t.create=function(a){return um(ht(e,a))},t}const ue=um(aa);ue.Axios=ct;ue.CanceledError=ia;ue.CancelToken=D0;ue.isCancel=tm;ue.VERSION=sm;ue.toFormData=qi;ue.AxiosError=I;ue.Cancel=ue.CanceledError;ue.all=function(n){return Promise.all(n)};ue.spread=O0;ue.isAxiosError=F0;ue.mergeConfig=ht;ue.AxiosHeaders=Me;ue.formToJSON=e=>nm(E.isHTMLForm(e)?new FormData(e):e);ue.getAdapter=lm.getAdapter;ue.HttpStatusCode=Vl;ue.default=ue;const{Axios:Vw,AxiosError:Ww,CanceledError:qw,isCancel:Gw,CancelToken:Yw,VERSION:Qw,all:Jw,Cancel:Xw,isAxiosError:Zw,spread:eb,toFormData:nb,AxiosHeaders:tb,HttpStatusCode:rb,formToJSON:ab,getAdapter:ib,mergeConfig:ob}=ue,oe=ue.create({baseURL:"https://vald-automator-production.up.railway.app",timeout:3e4}),B0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),oe.post("/api/check",t,{timeout:9e4})},I0=(e,n)=>oe.get("/api/trainers",{params:{gym:e,branch:n}}),dm=(e,n,t)=>oe.get("/api/trainer-whatsapp",{params:{gym:e,branch:n,trainer:t}}),z0=e=>oe.post("/api/programs/approve",e),M0=e=>oe.post("/api/programs/unapprove",e),H0=e=>oe.post("/api/programs/ignore",e),U0=e=>oe.post("/api/programs/unignore",e),pm=e=>oe.post("/api/programs/preview",e,{responseType:"text",timeout:6e4}),$0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),oe.post("/api/report/generate",n,{responseType:"blob",timeout:12e4})},K0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),oe.post("/api/quick-generate",t,{timeout:9e4})},Qu=e=>oe.get("/api/trainers/all",{params:{gym:e}}),V0=e=>oe.post("/api/trainers",e),W0=(e,n)=>oe.put(`/api/trainers/${e}`,n),q0=e=>oe.delete(`/api/trainers/${e}`),G0=(e,n)=>{const t=new FormData;return t.append("month",e),t.append("year",n),oe.post("/api/report/payment",t,{responseType:"blob",timeout:12e4})},Y0=(e,n,t)=>{const r=new FormData;return r.append("gym",e),r.append("month",n),r.append("year",t),oe.post("/api/report/growth",r,{responseType:"blob",timeout:12e4})},Q0=e=>oe.get("/api/bodydot/tests",{params:{gym:e}}),Ju=e=>oe.post("/api/bodydot/tests/approve",e),J0=e=>oe.post("/api/bodydot/tests/ignore",e),X0=e=>oe.post(`/api/bodydot/tests/${e}/unapprove`),Z0=(e,n)=>oe.get("/api/report/counts",{params:{year:e,month:n}}),ew=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),oe.post("/api/report/bodydot",n,{responseType:"blob",timeout:3e5})},nw={"Body Masters":["RUH - Al Malaz","RUH - Al Massif","RUH - Al Aarid","RUH - Al Sahafa","RUH - Al Wadi","RUH - Eshbilia","RUH - Muzahmiyah","RUH - Rabwa","RUH - Salam","RUH - Swaidi","RUH - Takhasousi","RUH - Al Badia","RUH - Al Fayha","RUH - Al Khaleej","RUH - Al Kharj","RUH - Al Nahda","RUH - Badr","RUH - Ezdehar","RUH - Murooj","RUH - Shubra","DMM - Al Athir","DMM - Al Jameyeen","DMM - Hufof","DMM - Khobar","JED - Hamadania","JED - Al Rawdah","JED - Makkah","JED - Obhor - Al Amwaj","JED - Obhor - Al Sheraa","ALQ - Al Rass","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","MED - Shouran","MED - Taiba","Uhud","AlUla","Al Mubaraz","Hafr El Batin","Tabuk","Najran","Khamis Mushait","Hail"],"Body Motions":["RUH - Al Malaz","RUH - Al Sahafa","RUH - Al Aarid","RUH - Al Fayha","RUH - Al Uraija","RUH - Badr","RUH - Al Badia","JED - Al Basateen","JED - Al Faisaliyah","JED - Al Naeem","JED - Obhor","DMM - Al Faisaliyah","DMM - Al Jalawiah","DMM - Al Nada","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","Al Ahsaa","AlUla","Tabuk"]},fm=w.createContext(null);function tw({children:e}){const[n,t]=w.useState({}),[r,a]=w.useState(!1),i=w.useCallback(async m=>{if(!(!m||n[m])){a(!0);try{const b=await Qu(m);t(h=>({...h,[m]:b.data||{}}))}catch{}finally{a(!1)}}},[n]),o=w.useCallback(async m=>{if(m){a(!0);try{const b=await Qu(m);t(h=>({...h,[m]:b.data||{}}))}catch{}finally{a(!1)}}},[]),l=m=>Object.keys(n[m]||{}).sort((b,h)=>{const y=nw[m]||[],S=y.indexOf(b),x=y.indexOf(h);return S===-1&&x===-1?b.localeCompare(h):S===-1?1:x===-1?-1:S-x}),s=(m,b)=>{var h;return[...((h=n[m])==null?void 0:h[b])||[]].sort((y,S)=>y.name.localeCompare(S.name)).map(y=>y.name)},u=m=>Object.values(n[m]||{}).flat().map(b=>b.name).sort((b,h)=>b.localeCompare(h)),d=(m,b)=>{for(const[h,y]of Object.entries(n[m]||{}))if(y.some(S=>S.name===b))return h;return null},p=(m,b,h)=>{var y;return(((y=n[m])==null?void 0:y[b])||[]).find(S=>S.name===h)||null};return c.jsx(fm.Provider,{value:{data:n,loading:r,load:i,reload:o,getBranches:l,getTrainers:s,getAllTrainers:u,getBranchForTrainer:d,getTrainerRecord:p},children:e})}function mm(){const e=w.useContext(fm);if(!e)throw new Error("useTrainers must be used inside TrainersProvider");return e}const rw={upper:"Upper Body",lower:"Lower Body",full:"Full Body"},aw={NEW:"bg-emerald-900/60 text-emerald-300 border border-emerald-700",UPDATED:"bg-amber-900/60 text-amber-300 border border-amber-700"};function Xu({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o}){const[l,s]=w.useState(""),[u,d]=w.useState(!1),[p,m]=w.useState(0),b=w.useRef(null),h=w.useRef(null),y=l?e.filter(f=>f.toLowerCase().includes(l.toLowerCase())):e;w.useEffect(()=>{function f(g){b.current&&!b.current.contains(g.target)&&d(!1)}return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]),w.useEffect(()=>{s(n||"")},[n]),w.useEffect(()=>{m(0)},[l]);function S(f){t(f),s(f),d(!1),r&&r(f)}function x(f){!u||y.length===0||(f.key==="ArrowDown"?(f.preventDefault(),m(g=>Math.min(g+1,y.length-1))):f.key==="ArrowUp"?(f.preventDefault(),m(g=>Math.max(g-1,0))):f.key==="Enter"?(f.preventDefault(),S(y[p])):f.key==="Escape"&&d(!1))}return w.useEffect(()=>{if(!h.current)return;const f=h.current.children[p];f&&f.scrollIntoView({block:"nearest"})},[p]),c.jsxs("div",{ref:b,className:"relative",children:[c.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:l,disabled:i,onChange:f=>{s(f.target.value),d(!0),f.target.value||t("")},onFocus:()=>d(!0),onKeyDown:x}),u&&!i&&y.length>0&&c.jsx("ul",{ref:h,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:y.map((f,g)=>c.jsx("li",{onMouseDown:()=>S(f),onMouseEnter:()=>m(g),className:`px-3 py-2 text-sm cursor-pointer ${g===p?"bg-gray-700 text-white":f===n?"text-brand-400 font-semibold":"text-white"}`,children:f},f))})]})}function Zu({test:e,gym:n}){const{getBranches:t,getTrainers:r,getAllTrainers:a,getBranchForTrainer:i,load:o}=mm(),[l,s]=w.useState(e.existing_branch||""),[u,d]=w.useState(e.existing_trainer_name||""),p=w.useRef(null),[m,b]=w.useState(e.existing_dispatch_date||new Date().toISOString().split("T")[0]);w.useEffect(()=>{o(n)},[n,o]);const[h,y]=w.useState(!1),[S,x]=w.useState(!1),[f,g]=w.useState(!1),[v,k]=w.useState(!1),[R,_]=w.useState(!1),[T,A]=w.useState(""),P=t(n),q=l?r(n,l):a(n);function pe(N){if(d(N),!l&&N){const O=i(n,N);O&&s(O)}}w.useEffect(()=>{n&&l&&u&&dm(n,l,u).then(N=>{var O;return A(((O=N.data)==null?void 0:O.whatsapp)||"")}).catch(()=>A(""))},[n,l,u]);const V=async()=>{var N,O;if(!e.cells_data){window.open(`https://vald-automator-production.up.railway.app/api/programs/preview-demo?gym=${encodeURIComponent(n)}&test_type=${e.test_type}`,"_blank");return}y(!0);try{const F=await pm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:e.prev_asymmetries||null}),H=new Blob([F.data],{type:"text/html"}),xe=URL.createObjectURL(H),X=window.open(xe,"_blank");X&&X.addEventListener("load",()=>X.print())}catch(F){alert("Failed to open program: "+(((O=(N=F.response)==null?void 0:N.data)==null?void 0:O.detail)||F.message))}finally{y(!1)}},z=async()=>{var O,F,H;if(!(e.status==="UPDATED"&&!l&&!u)&&(!l||!u)){alert("Please select a branch and trainer before approving.");return}g(!0);try{const X=(O=(await z0({gym:n,branch:l||e.existing_branch||"",client_id:e.external_id!=="N/A"?e.external_id:null,client_name:e.patient,test_type:e.test_type,movements:e.movement_count,test_date:e.date,trainer_name:u||e.existing_trainer_name||null,dispatch_date:m||e.existing_dispatch_date||null,check_status:e.status,asymmetry_values:e.asymmetry_values||null})).data)==null?void 0:O.id;x(!0)}catch(xe){alert("Error approving: "+(((H=(F=xe.response)==null?void 0:F.data)==null?void 0:H.detail)||xe.message))}finally{g(!1)}},le=async()=>{var N,O;_(!0);try{await H0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count,external_id:e.external_id!=="N/A"?e.external_id:null}),k(!0)}catch(F){alert("Error ignoring: "+(((O=(N=F.response)==null?void 0:N.data)==null?void 0:O.detail)||F.message))}finally{_(!1)}},G=async()=>{var N,O;try{await U0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),k(!1)}catch(F){alert("Error undoing ignore: "+(((O=(N=F.response)==null?void 0:N.data)==null?void 0:O.detail)||F.message))}},Ae=async()=>{var N,O;try{await M0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),x(!1)}catch(F){alert("Error undoing approval: "+(((O=(N=F.response)==null?void 0:N.data)==null?void 0:O.detail)||F.message))}},C=()=>{if(!T){alert("No WhatsApp number set for this trainer.");return}const N=T.replace(/\D/g,"");window.open(`https://wa.me/${N}`,"_blank")};return c.jsxs("div",{className:`rounded-xl border p-5 space-y-4 transition-all
      ${S?"border-emerald-700 bg-emerald-950/20":v?"border-red-900 bg-red-950/20":"border-gray-700 bg-gray-900"}`,children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full ${aw[e.status]}`,children:e.status}),c.jsx("h3",{className:"font-semibold text-white",children:e.patient}),e.external_id&&e.external_id!=="N/A"&&c.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["#",e.external_id]})]}),c.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[c.jsx("span",{children:rw[e.test_type]||e.test_type}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.movement_count," movements"]}),c.jsx("span",{children:"·"}),c.jsx("span",{children:e.date}),e.status==="UPDATED"&&c.jsxs("span",{className:"text-amber-400",children:["(was ",e.old_count,")"]})]})]}),c.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.patient),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),c.jsx(Xu,{options:P,value:l,onChange:N=>{s(N),d("")},onSelect:()=>{p.current&&p.current.focus()},placeholder:"Search branch…",disabled:S||v})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),c.jsx(Xu,{options:q,value:u,onChange:pe,placeholder:"Search trainer…",disabled:S||v,inputRef:p})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),c.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:m,onChange:N=>b(N.target.value),disabled:S||v})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[c.jsx("button",{onClick:V,disabled:h,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:h?"Loading…":"🖨 Open & Print"}),c.jsx("button",{onClick:()=>{const N={upper:"Upper Body",lower:"Lower Body",full:"Full Body"}[e.test_type]||e.test_type;navigator.clipboard.writeText(`${e.patient} - ${N}`)},className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors",children:"📋 Copy File Name"}),!S&&!v&&c.jsx("button",{onClick:le,disabled:R,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:R?"Ignoring…":"Ignore"}),c.jsx("div",{className:"flex-1"}),c.jsxs("button",{onClick:C,disabled:!T,title:T?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[c.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),S?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-emerald-700/40 text-emerald-400 font-semibold border border-emerald-700",children:"✓ Approved"}),c.jsx("button",{onClick:Ae,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):v?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-red-900/40 text-red-400 font-semibold border border-red-800",children:"✗ Ignored"}),c.jsx("button",{onClick:G,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):c.jsx("button",{onClick:z,disabled:f,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:f?"Saving…":"Approve"})]})]})}const iw=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function ow(){const[e,n]=w.useState("Body Motions"),[t,r]=w.useState(!1),[a,i]=w.useState(null),[o,l]=w.useState(null),[s,u]=w.useState("desc"),d=async h=>{var y,S;r(!0),i(null),l(null);try{const x=await B0(e,h);l(x.data)}catch(x){i(((S=(y=x.response)==null?void 0:y.data)==null?void 0:S.detail)||x.message||"Failed to process file")}finally{r(!1)}},p=o?[...o].sort((h,y)=>{const S=new Date(h.date)-new Date(y.date);return s==="asc"?S:-S}):[],m=p.filter(h=>h.status==="NEW"),b=p.filter(h=>h.status==="UPDATED");return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Program Generation"}),c.jsx("div",{className:"flex gap-3",children:iw.map(h=>c.jsx("button",{onClick:()=>{n(h.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===h.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:h.logo,alt:h.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},h.name))}),c.jsx(ay,{onFile:d,loading:t}),a&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"flex items-center gap-4 text-sm flex-wrap",children:[c.jsxs("span",{className:"text-gray-300",children:[c.jsx("span",{className:"font-bold text-emerald-400",children:m.length})," new"]}),c.jsx("span",{className:"text-gray-600",children:"|"}),c.jsxs("span",{className:"text-gray-300",children:[c.jsx("span",{className:"font-bold text-amber-400",children:b.length})," updated"]}),o.length===0&&c.jsx("span",{className:"text-gray-500",children:"No new or updated tests found."}),c.jsxs("div",{className:"ml-auto flex gap-1",children:[c.jsx("button",{onClick:()=>u("desc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="desc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Newest first"}),c.jsx("button",{onClick:()=>u("asc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="asc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Oldest first"})]})]}),m.length>0&&c.jsxs("section",{className:"space-y-3",children:[c.jsxs("h2",{className:"text-lg font-semibold text-emerald-400 border-b border-emerald-900 pb-1",children:["New Tests (",m.length,")"]}),m.map((h,y)=>c.jsx(Zu,{test:h,gym:e},`new-${y}`))]}),b.length>0&&c.jsxs("section",{className:"space-y-3",children:[c.jsxs("h2",{className:"text-lg font-semibold text-amber-400 border-b border-amber-900 pb-1",children:["Updated Tests (",b.length,")"]}),b.map((h,y)=>c.jsx(Zu,{test:h,gym:e},`upd-${y}`))]})]})]})}const hm=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],lw=[{key:"vald",name:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",name:"Bodydot",logo:"/VALD-automator/Bodydot.png"}],Le=["January","February","March","April","May","June","July","August","September","October","November","December"];function sw(e,n){const t=new Date(e,n-1,1).getDay(),r=new Date(e,n,0).getDate();return Math.ceil((t+r)/7)}function cw(){const e=new Date,[n,t]=w.useState("vald"),[r,a]=w.useState("Body Motions"),[i,o]=w.useState("monthly"),[l,s]=w.useState(e.getFullYear()),[u,d]=w.useState(e.getMonth()+1),[p,m]=w.useState(1),[b,h]=w.useState(null),[y,S]=w.useState(null),[x,f]=w.useState(!1),[g,v]=w.useState(null),k=new Date(l,u,0).getDate(),R=sw(l,u),_=(()=>{const A=e.getFullYear(),P=e.getMonth()+1;return l>A?!0:l<A?!1:u>P?!0:u<P?!1:i==="weekly"?(p-1)*7+1>e.getDate():i==="custom"&&b?b>e.getDate():!1})(),T=async()=>{var A,P,q,pe;f(!0),v(null);try{const V={gym:r,period_type:i==="custom"?"monthly":i,year:l,month:u,week_number:i==="weekly"?p:null,start_day:i==="custom"&&b?b:null,end_day:i==="custom"&&y?y:null},z=n==="bodydot"?await ew(V):await $0(V),le=new Blob([z.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),G=URL.createObjectURL(le),Ae=document.createElement("a"),N=(((A=z.headers)==null?void 0:A["content-disposition"])||"").match(/filename="([^"]+)"/),O=n==="bodydot"?"Bodydot ":"",F=i==="custom"?`${Le[u-1]} ${l} (Day ${b||1}–${y||k})`:i==="monthly"?`${Le[u-1]} ${l}`:`Week ${p} - ${Le[u-1]} ${l}`;Ae.href=G,Ae.download=N?N[1]:`${O}${F} - ${r}.xlsx`,Ae.click(),URL.revokeObjectURL(G)}catch(V){let z=V.message;if(((P=V.response)==null?void 0:P.data)instanceof Blob)try{z=JSON.parse(await V.response.data.text()).detail||z}catch{}else z=((pe=(q=V.response)==null?void 0:q.data)==null?void 0:pe.detail)||z;v(z||"Failed to generate report")}finally{f(!1)}};return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Reports"}),c.jsx("div",{}),c.jsx("h1",{className:"text-2xl font-bold text-white hidden lg:block",children:"VALD Payment Report"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Service"}),c.jsx("div",{className:"flex gap-3",children:lw.map(A=>c.jsx("button",{onClick:()=>t(A.key),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===A.key?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:A.logo,alt:A.name,className:"h-14 w-28 object-contain px-0.5 py-px"})},A.key))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),c.jsx("div",{className:"flex gap-3",children:hm.map(A=>c.jsx("button",{onClick:()=>a(A.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${r===A.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:A.logo,alt:A.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},A.name))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Report Type"}),c.jsx("div",{className:"flex gap-2",children:["monthly","weekly","custom"].map(A=>c.jsx("button",{onClick:()=>o(A),className:`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors
                ${i===A?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:A},A))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:u,onChange:A=>d(Number(A.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Le.map((A,P)=>c.jsx("option",{value:P+1,children:A},P+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:l,onChange:A=>s(Number(A.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(A=>c.jsx("option",{value:A,children:A},A))})]})]}),i==="custom"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date Range"}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"Start Day"}),c.jsxs("select",{value:b||"",onChange:A=>h(A.target.value?Number(A.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[c.jsx("option",{value:"",children:"—"}),Array.from({length:k},(A,P)=>P+1).map(A=>c.jsx("option",{value:A,children:A},A))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"End Day"}),c.jsxs("select",{value:y||"",onChange:A=>S(A.target.value?Number(A.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[c.jsx("option",{value:"",children:"—"}),Array.from({length:k},(A,P)=>P+1).map(A=>c.jsx("option",{value:A,children:A},A))]})]})]})]}),i==="weekly"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Week"}),c.jsx("div",{className:"flex gap-2 flex-wrap",children:Array.from({length:R},(A,P)=>P+1).map(A=>c.jsxs("button",{onClick:()=>m(A),className:`w-12 h-10 rounded-lg text-sm font-semibold transition-colors
                  ${p===A?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:["W",A]},A))}),c.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Week ",p,": days ",(p-1)*7+1,"–",Math.min(p*7,new Date(l,u,0).getDate())]})]}),g&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:g}),c.jsx("button",{onClick:T,disabled:x||_,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:x?"Generating…":"Generate & Download Report"}),_&&c.jsx("p",{className:"text-xs text-amber-500 text-center",children:"Cannot generate a report for a future period."}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:[n==="bodydot"?c.jsxs(c.Fragment,{children:["Report pulls all ",c.jsx("strong",{className:"text-gray-400",children:"approved"})," Bodydot tests"]}):c.jsxs(c.Fragment,{children:["Report pulls all ",c.jsx("strong",{className:"text-gray-400",children:"approved"})," programs"]}),i==="weekly"?` dispatched in week ${p} of ${Le[u-1]} ${l}`:i==="custom"?` dispatched between day ${b||1} and day ${y||k} of ${Le[u-1]} ${l}`:` dispatched in ${Le[u-1]} ${l}`,"."]})]}),c.jsx("div",{className:"hidden lg:block bg-gray-700 self-stretch"}),c.jsxs("div",{className:"space-y-6",children:[c.jsx(dw,{}),c.jsx("div",{className:"border-t border-gray-700 pt-6",children:c.jsx(uw,{})})]})]})]})}function uw(){const e=new Date,[n,t]=w.useState("Body Motions"),[r,a]=w.useState(e.getMonth()+1),[i,o]=w.useState(e.getFullYear()),[l,s]=w.useState(!1),[u,d]=w.useState(null),p=`${Le[(r-2+12)%12]} ${r===1?i-1:i}`,m=async()=>{var b,h,y;s(!0),d(null);try{const S=await Y0(n,r,i),x=new Blob([S.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),f=URL.createObjectURL(x),g=document.createElement("a"),k=(((b=S.headers)==null?void 0:b["content-disposition"])||"").match(/filename="([^"]+)"/);g.href=f;const R=String(i%100).padStart(2,"0"),_=Le[(r-2+12)%12].slice(0,3).toUpperCase(),T=Le[r-1].slice(0,3).toUpperCase(),A=`Test Growth Tracker - ${n} - ${_}-${T} ${R}.xlsx`;g.download=k?k[1]:A,g.click(),URL.revokeObjectURL(f)}catch(S){d(((y=(h=S.response)==null?void 0:h.data)==null?void 0:y.detail)||S.message||"Failed to generate growth tracker")}finally{s(!1)}};return c.jsxs("div",{className:"max-w-2xl space-y-5",children:[c.jsx("div",{children:c.jsx("h1",{className:"text-2xl font-bold text-white",children:"VALD Test Growth Tracker"})}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),c.jsx("div",{className:"flex gap-3",children:hm.map(b=>c.jsx("button",{onClick:()=>t(b.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===b.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:b.logo,alt:b.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},b.name))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:r,onChange:b=>a(Number(b.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Le.map((b,h)=>c.jsx("option",{value:h+1,children:b},h+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:i,onChange:b=>o(Number(b.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(b=>c.jsx("option",{value:b,children:b},b))})]})]}),u&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:u}),c.jsx("button",{onClick:m,disabled:l,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:l?"Generating…":"Generate & Download Growth Tracker"}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Compares ",c.jsxs("strong",{className:"text-gray-400",children:[Le[r-1]," ",i]})," vs"," ",c.jsx("strong",{className:"text-gray-400",children:p})," test counts per branch and trainer."]})]})}function dw(){const e=new Date,[n,t]=w.useState(e.getMonth()+1),[r,a]=w.useState(e.getFullYear()),[i,o]=w.useState(!1),[l,s]=w.useState(null),u=async()=>{var d,p,m;o(!0),s(null);try{const b=await G0(n,r),h=new Blob([b.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),y=URL.createObjectURL(h),S=document.createElement("a"),f=(((d=b.headers)==null?void 0:d["content-disposition"])||"").match(/filename="([^"]+)"/);S.href=y,S.download=f?f[1]:`Payment - ${Le[n-1]} ${r}.xlsx`,S.click(),URL.revokeObjectURL(y)}catch(b){s(((m=(p=b.response)==null?void 0:p.data)==null?void 0:m.detail)||b.message||"Failed to generate payment report")}finally{o(!1)}};return c.jsxs("div",{className:"space-y-5",children:[c.jsx("h1",{className:"text-2xl font-bold text-white lg:hidden",children:"VALD Payment Report"}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:n,onChange:d=>t(Number(d.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Le.map((d,p)=>c.jsx("option",{value:p+1,children:d},p+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:r,onChange:d=>a(Number(d.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(d=>c.jsx("option",{value:d,children:d},d))})]})]}),l&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:l}),c.jsx("button",{onClick:u,disabled:i,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:i?"Generating…":"Generate & Download Payment Report"}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Appends all programs from ",c.jsx("strong",{className:"text-gray-400",children:"May 2026"})," through ",c.jsxs("strong",{className:"text-gray-400",children:[Le[n-1]," ",r]})," to the payment report."]})]})}const pw=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],fw={upper:"Upper Body",lower:"Lower Body",full:"Full Body"};function mw({item:e,gym:n}){const[t,r]=w.useState(!1),a=async()=>{var i,o;r(!0);try{const l=await pm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:null}),s=new Blob([l.data],{type:"text/html"}),u=URL.createObjectURL(s),d=window.open(u,"_blank");d&&d.addEventListener("load",()=>d.print())}catch(l){alert("Failed to open program: "+(((o=(i=l.response)==null?void 0:i.data)==null?void 0:o.detail)||l.message))}finally{r(!1)}};return c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 flex items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-semibold text-white",children:e.patient}),c.jsxs("p",{className:"text-sm text-gray-400 mt-0.5",children:[fw[e.test_type]||e.test_type,c.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.movement_count," movements",c.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.date]})]}),c.jsx("button",{onClick:a,disabled:t,className:"shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:t?"Loading…":"🖨 Open & Print"})]})}function hw(){const[e,n]=w.useState("Body Motions"),[t,r]=w.useState(!1),[a,i]=w.useState(null),[o,l]=w.useState(null),s=async m=>{var b,h;if(m.length){r(!0),i(null),l(null);try{const y=await K0(e,m[0]);l(y.data)}catch(y){i(((h=(b=y.response)==null?void 0:b.data)==null?void 0:h.detail)||y.message||"Failed to process file")}finally{r(!1)}}},{getRootProps:u,getInputProps:d,isDragActive:p}=Us({onDrop:s,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:t});return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Generate"}),c.jsx("div",{className:"flex gap-3",children:pw.map(m=>c.jsx("button",{onClick:()=>{n(m.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),c.jsxs("div",{...u(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
          ${p?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
          ${t?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{...d()}),c.jsx("div",{className:"text-4xl mb-3",children:"📂"}),t?c.jsx("p",{className:"text-gray-400",children:"Generating programs…"}):p?c.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your VALD export file here"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]}),a&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("p",{className:"text-sm text-gray-400",children:[c.jsx("span",{className:"font-bold text-white",children:o.length})," program",o.length!==1?"s":""," found"]}),o.length===0&&c.jsx("p",{className:"text-gray-500 text-sm",children:"No programs could be parsed from this file."}),o.map((m,b)=>c.jsx(mw,{item:m,gym:e},b))]})]})}const ed=["January","February","March","April","May","June","July","August","September","October","November","December"],La=[{key:"vald",label:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",label:"Bodydot",logo:"/VALD-automator/Bodydot.png"}];function fr({curr:e,prev:n,compact:t=!1}){const r=e-n;if(r===0)return c.jsxs("span",{className:"text-gray-600",children:["— ",t?"":"no change"]});const a=r>0,i=a?"text-emerald-400":"text-red-400",o=n>0?Math.round(r/n*100):null,l=o===null?"new":`${o>0?"+":""}${o}%`;return c.jsxs("span",{className:i,children:[a?"▲":"▼"," ",Math.abs(r),!t&&c.jsxs("span",{className:"text-gray-500",children:[" (",l,")"]})]})}function gw(){var g;const e=new Date,[n,t]=w.useState(e.getMonth()+1),[r,a]=w.useState(e.getFullYear()),[i,o]=w.useState(null),[l,s]=w.useState(!1),[u,d]=w.useState(null);w.useEffect(()=>{let v=!1;return s(!0),d(null),Z0(r,n).then(k=>{v||o(k.data)}).catch(k=>{var R,_;v||d(((_=(R=k.response)==null?void 0:R.data)==null?void 0:_.detail)||k.message)}).finally(()=>{v||s(!1)}),()=>{v=!0}},[r,n]);const p=(i==null?void 0:i.gyms)||["Body Motions","Body Masters"],m=(i==null?void 0:i.prev)||{},b=(i==null?void 0:i.period_label)||`${ed[n-1]} ${r}`,h=((g=i==null?void 0:i.prev)==null?void 0:g.period_label)||"last month",y=(v,k)=>p.reduce((R,_)=>{var T;return R+(((T=k==null?void 0:k[v])==null?void 0:T[_])||0)},0),S=(v,k)=>La.reduce((R,_)=>{var T;return R+(((T=k==null?void 0:k[_.key])==null?void 0:T[v])||0)},0),x=v=>La.reduce((k,R)=>k+y(R.key,v),0),f=[{label:"Total tests",curr:x(i),prev:x(m)},...La.map(v=>({label:v.label,curr:y(v.key,i),prev:y(v.key,m)}))];return c.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Report"}),c.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Tests dispatched — ",c.jsx("span",{className:"text-gray-300 font-medium",children:b})," vs"," ",c.jsx("span",{className:"text-gray-300 font-medium",children:h}),(i==null?void 0:i.partial)&&c.jsx("span",{className:"text-gray-500",children:" (same period, month-to-date)"}),"."]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-sm",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:n,onChange:v=>t(Number(v.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:ed.map((v,k)=>c.jsx("option",{value:k+1,children:v},k+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:r,onChange:v=>a(Number(v.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(v=>c.jsx("option",{value:v,children:v},v))})]})]}),u&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:u}),c.jsx("div",{className:`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-opacity ${l?"opacity-50":""}`,children:f.map(v=>c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4",children:[c.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-500",children:v.label}),c.jsx("div",{className:"mt-1 text-3xl font-bold text-white tabular-nums",children:v.curr}),c.jsxs("div",{className:"mt-1 text-sm",children:[c.jsx(fr,{curr:v.curr,prev:v.prev}),c.jsxs("span",{className:"text-gray-600 text-xs",children:[" vs ",h]})]})]},v.label))}),c.jsx("div",{className:`rounded-xl border border-gray-700 overflow-hidden transition-opacity ${l?"opacity-50":""}`,children:c.jsxs("table",{className:"w-full text-sm",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-gray-800/70 text-gray-400",children:[c.jsx("th",{className:"text-left font-medium px-5 py-3",children:"Service"}),p.map(v=>c.jsx("th",{className:"text-right font-medium px-5 py-3",children:v},v)),c.jsx("th",{className:"text-right font-semibold px-5 py-3 text-gray-300",children:"Total"})]})}),c.jsxs("tbody",{children:[La.map(v=>c.jsxs("tr",{className:"border-t border-gray-800 align-top",children:[c.jsx("td",{className:"px-5 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"inline-flex items-center justify-center h-7 w-14 rounded bg-gray-100",children:c.jsx("img",{src:v.logo,alt:v.label,className:"h-6 w-auto object-contain px-0.5"})}),c.jsx("span",{className:"text-white font-medium",children:v.label})]})}),p.map(k=>{var R,_,T;return c.jsxs("td",{className:"text-right px-5 py-3 text-gray-200 tabular-nums",children:[c.jsx("div",{children:((R=i==null?void 0:i[v.key])==null?void 0:R[k])??"—"}),c.jsx("div",{className:"text-xs mt-0.5",children:c.jsx(fr,{curr:((_=i==null?void 0:i[v.key])==null?void 0:_[k])||0,prev:((T=m==null?void 0:m[v.key])==null?void 0:T[k])||0,compact:!0})})]},k)}),c.jsxs("td",{className:"text-right px-5 py-3 font-semibold text-white tabular-nums",children:[c.jsx("div",{children:y(v.key,i)}),c.jsx("div",{className:"text-xs mt-0.5 font-normal",children:c.jsx(fr,{curr:y(v.key,i),prev:y(v.key,m),compact:!0})})]})]},v.key)),c.jsxs("tr",{className:"border-t-2 border-gray-700 bg-gray-800/40 align-top",children:[c.jsx("td",{className:"px-5 py-3 font-semibold text-gray-300",children:"Total"}),p.map(v=>c.jsxs("td",{className:"text-right px-5 py-3 font-semibold text-white tabular-nums",children:[c.jsx("div",{children:S(v,i)}),c.jsx("div",{className:"text-xs mt-0.5 font-normal",children:c.jsx(fr,{curr:S(v,i),prev:S(v,m),compact:!0})})]},v)),c.jsxs("td",{className:"text-right px-5 py-3 font-bold text-brand-300 tabular-nums text-base",children:[c.jsx("div",{children:x(i)}),c.jsx("div",{className:"text-xs mt-0.5 font-normal",children:c.jsx(fr,{curr:x(i),prev:x(m),compact:!0})})]})]})]})]})}),c.jsxs("p",{className:"text-[11px] text-gray-600",children:["▲ up / ▼ down vs ",h,".",(i==null?void 0:i.partial)&&" This month is still in progress, so it’s compared to the same day range of last month."]})]})}const xw=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function vw({trainer:e,allBranches:n,onUpdated:t,onDeleted:r}){const[a,i]=w.useState(!1),[o,l]=w.useState(e.name),[s,u]=w.useState(e.whatsapp||""),[d,p]=w.useState(e.branch),[m,b]=w.useState(!1),[h,y]=w.useState(!1),S=o!==e.name||s!==(e.whatsapp||"")||d!==e.branch,x=async()=>{var v,k;b(!0);try{const R=await W0(e.id,{name:o,whatsapp:s,branch:d});t(R.data),i(!1)}catch(R){alert("Failed to save: "+(((k=(v=R.response)==null?void 0:v.data)==null?void 0:k.detail)||R.message))}finally{b(!1)}},f=async()=>{var v,k;if(confirm(`Delete "${e.name}"?`)){y(!0);try{await q0(e.id),r(e.id)}catch(R){alert("Failed to delete: "+(((k=(v=R.response)==null?void 0:v.data)==null?void 0:k.detail)||R.message)),y(!1)}}},g=()=>{l(e.name),u(e.whatsapp||""),p(e.branch),i(!1)};return a?c.jsxs("div",{className:"py-3 border-b border-gray-700 space-y-2",children:[c.jsxs("div",{className:"flex gap-2 items-center",children:[c.jsx("input",{value:o,onChange:v=>l(v.target.value),placeholder:"Name",className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"}),c.jsx("input",{value:s,onChange:v=>u(v.target.value),placeholder:"WhatsApp e.g. +966...",className:"w-44 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"})]}),c.jsxs("div",{className:"flex gap-2 items-center",children:[c.jsx("select",{value:d,onChange:v=>p(v.target.value),className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",children:n.map(v=>c.jsx("option",{value:v,children:v},v))}),c.jsx("button",{onClick:x,disabled:m||!S,className:"px-3 py-1 text-xs rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40",children:m?"Saving…":"Save"}),c.jsx("button",{onClick:g,className:"px-3 py-1 text-xs rounded border border-gray-600 text-gray-400 hover:text-white",children:"Cancel"})]})]}):c.jsxs("div",{className:"flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0 group",children:[c.jsx("span",{className:"w-72 shrink-0 text-sm text-white",children:e.name}),c.jsx("span",{className:"flex-1 text-sm text-gray-400",children:e.whatsapp||c.jsx("span",{className:"text-gray-600 italic",children:"no number"})}),c.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[c.jsx("button",{onClick:()=>i(!0),className:"text-xs px-2.5 py-1 rounded border border-gray-600 text-gray-300 hover:border-brand-500 hover:text-brand-300",children:"Edit"}),c.jsx("button",{onClick:f,disabled:h,className:"text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-500 hover:border-red-600 hover:text-red-400 disabled:opacity-40",children:h?"…":"Delete"})]})]})}function yw({gym:e,branch:n,onAdded:t}){const[r,a]=w.useState(""),[i,o]=w.useState(""),[l,s]=w.useState(!1),u=async()=>{var d,p;if(r.trim()){s(!0);try{const m=await V0({gym:e,branch:n,name:r.trim(),whatsapp:i});t(m.data),a(""),o("")}catch(m){alert("Failed to add: "+(((p=(d=m.response)==null?void 0:d.data)==null?void 0:p.detail)||m.message))}finally{s(!1)}}};return c.jsxs("div",{className:"flex gap-2 pt-3 border-t border-gray-700 mt-1",children:[c.jsx("input",{value:r,onChange:d=>a(d.target.value),placeholder:"New trainer name",className:"flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:d=>d.key==="Enter"&&u()}),c.jsx("input",{value:i,onChange:d=>o(d.target.value),placeholder:"WhatsApp (optional)",className:"w-44 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:d=>d.key==="Enter"&&u()}),c.jsx("button",{onClick:u,disabled:l||!r.trim(),className:"px-4 py-1.5 text-sm rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40 shrink-0",children:l?"Adding…":"+ Add"})]})}function ww(){var b;const{data:e,load:n,reload:t,getBranches:r}=mm(),[a,i]=w.useState("Body Motions"),[o,l]=w.useState("");w.useEffect(()=>{n(a)},[a]);const s=r(a),u=o?[...((b=e[a])==null?void 0:b[o])||[]].sort((h,y)=>h.name.localeCompare(y.name)):[],d=async h=>{h.branch!==o?(await t(a),l(h.branch)):t(a)},p=()=>t(a),m=()=>t(a);return c.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Trainers"}),c.jsx("div",{className:"flex gap-3",children:xw.map(h=>c.jsx("button",{onClick:()=>{i(h.name),l("")},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${a===h.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:h.logo,alt:h.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},h.name))}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),c.jsxs("select",{value:o,onChange:h=>l(h.target.value),className:"bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72",children:[c.jsx("option",{value:"",children:"— Select branch —"}),s.map(h=>c.jsx("option",{value:h,children:h},h))]})]}),o&&c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5",children:[c.jsxs("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3",children:[o," — ",u.length," trainer",u.length!==1?"s":""]}),u.map(h=>c.jsx(vw,{trainer:{...h,branch:o},allBranches:s,onUpdated:d,onDeleted:p},h.id)),c.jsx(yw,{gym:a,branch:o,onAdded:m})]})]})}const bw="https://bdot-proxy.andyayas27.workers.dev",gm=`${bw}/v1`,Sw="YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk",nd=[{id:"bf9ffaec-d3ed-4742-bce9-945f619ea1bc",name:"Body Motions – Al Sahafa",bilingual:!0,gym:"Body Motions",branch:"RUH - Al Sahafa"},{id:"1627c00e-e275-4356-91ae-6f85127bd21c",name:"Body Masters – Al Aarid",bilingual:!0,gym:"Body Masters",branch:"RUH - Al Aarid"},{id:"ebce917d-1c31-4516-8396-64283b4cbeaa",name:"Body Coach",bilingual:!1,gym:"Body Coach",branch:null}];function kw(e){let n=0,t=0;for(const r of(e==null?void 0:e.sequences)||[])for(const a of r.stepResults||[])t+=1,a.status==="Analyzed"&&(n+=1);return{analyzed:n,total:t,valid:n>0&&n>t-n}}const td=e=>new Promise(n=>setTimeout(n,e)),Ew=4;let Si=0;const xm=[];function _w(){return Si<Ew?(Si++,Promise.resolve()):new Promise(e=>xm.push(e))}function Rw(){Si--;const e=xm.shift();e&&(Si++,e())}async function vm(e,n,t=5){let r;for(let a=0;a<t;a++){let i;try{i=await fetch(e,n)}catch(o){r=o,await td(Math.min(2**a,8)*1e3);continue}if(i.status===429||i.status>=500){const o=parseFloat(i.headers.get("Retry-After")),l=(Number.isFinite(o)?o:Math.min(2**a,8))*1e3+Math.random()*300;r=new Error(`HTTP ${i.status}`),await td(l);continue}return i}throw r||new Error("request failed")}let Na=null,rd=0,mr=null;async function Aw(){return Na&&Date.now()<rd-6e4?Na:mr||(mr=(async()=>{try{const e=await vm(`${gm}/oauth/token`,{method:"POST",headers:{Authorization:`Basic ${Sw}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});if(!e.ok)throw new Error(`Auth failed (HTTP ${e.status})`);const n=await e.json();return Na=n.access_token,rd=Date.now()+n.expires_in*1e3,Na}finally{mr=null}})(),mr)}async function Gs(e){await _w();try{const n=await Aw(),t=await vm(`${gm}${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}finally{Rw()}}async function ym(e){const n=await Gs(`/clients?organizationId=${e}`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")),t}const Io=new Map;async function wm(e){if(Io.has(e))return Io.get(e);const n=await Gs(`/clients/${e}/measurement-sessions`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>new Date(a.createdAt)-new Date(r.createdAt)),Io.set(e,t),t}const zo=new Map;async function Yi(e,n){if(zo.has(n))return zo.get(n);const t=await Gs(`/clients/${e}/measurement-sessions/${n}`);return zo.set(n,t),t}const Tw=`<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posture Correction Form</title>
    <link rel="icon" type="image/png" href="./icon.ico">
    <link rel="shortcut icon" type="image/png" href="./icon.ico">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- UDRA brand faces for the posture sheet: Sora for Latin text, IBM Plex Sans
         Arabic for Arabic, JetBrains Mono for every numeral. -->
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
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
        
        @media print {
            /* No \`size\` here on purpose: udraSyncPageSize() injects the one @page
               rule, measured from the sheet. A second rule with a stale size makes
               the print preview offer the wrong paper. */
            @page { margin: 0; }

            body {
                margin: 0;
                padding: 0;
                background: #EFECE6;   /* the sheet's linen, so any rounding sliver is invisible */
                background-image: none;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            #displayPage.display-page { min-height: 0; }
            .notification-toast { display: none !important; }
            #inputPage { display: none !important; }
            #displayPage { display: block !important; }
            .page { display: none !important; }
            .page.active { display: block !important; }
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

        /* ══════════════════════════════════════════════════════════════════
           UDRA POSTURE SHEET
           A landscape page 1056px (11in @ 96dpi) wide. Every gap is the approved
           constant and never varies per client; the page's HEIGHT is what flexes,
           sizing itself to the content plus the field's own padding. 816px (8.5in)
           is the design's height, not a constraint.
           ══════════════════════════════════════════════════════════════════ */

        /* The sheet sits on the design's sand desk, not the old branded artwork the
           body still carries for the input page. Screen only — scoped to @media
           screen so it cannot leak into print, where 100vh would add a full page
           box underneath the sheet.

           The desk has to be painted on the BODY as well, not just the page
           container: the body art is \`background-attachment: fixed\` so it covers
           the whole canvas, and the sheet's 40px margin collapses out of the
           container, leaving a strip at the bottom where the old artwork showed
           through. */
        @media screen {
            #displayPage.display-page {
                min-height: 100vh;
                background: #DAD6CE;
            }
            body:has(#displayPage.active) {
                background: #DAD6CE;
                background-image: none;
            }
        }

        /* Screen-only controls, in the sheet's own language: square corners, Sora,
           navy, and the same tracked caps the rail and programme headers use. */
        .udra-toolbar {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 28px 20px 0;
            font-family: 'Sora', 'Segoe UI', sans-serif;
        }
        @media print { .udra-toolbar { display: none !important; } }

        /* Segmented language switch. */
        .udra-toolbar .lang-toggle {
            display: flex;
            align-items: stretch;
            gap: 0;
            padding: 0;
            background: transparent;
            border: 1px solid #122649;
            border-radius: 0;
            font-size: inherit;
            font-weight: inherit;
            color: inherit;
            overflow: hidden;
        }
        .udra-toolbar .lang-option {
            display: flex;
            align-items: center;
            height: 34px;
            padding: 0 15px;
            border-radius: 0;
            border-right: 1px solid rgba(18, 38, 73, .22);
            background: transparent;
            color: #122649;
            font-size: 9.5px;
            font-weight: 700;
            letter-spacing: .14em;
            cursor: pointer;
            transition: background .12s ease, color .12s ease;
        }
        .udra-toolbar .lang-option:last-child { border-right: 0; }
        .udra-toolbar .lang-option:hover { background: rgba(18, 38, 73, .09); }
        .udra-toolbar .lang-option.active,
        .udra-toolbar .lang-option.active:hover {
            background: #122649;
            color: #FFFFFF;
        }

        /* Primary action — a navy block that picks up the sheet's blue on hover. */
        .udra-toolbar .udra-btn {
            height: 34px;
            padding: 0 22px;
            border: 0;
            border-radius: 0;
            background: #122649;
            color: #FFFFFF;
            font-family: inherit;
            font-size: 9.5px;
            font-weight: 700;
            letter-spacing: .14em;
            text-transform: uppercase;
            cursor: pointer;
            transition: background .12s ease;
        }
        .udra-toolbar .udra-btn:hover { background: #005EFF; }
        .udra-toolbar .udra-btn:active { background: #0B1B36; }

        .udra-sheet {
            /* Brand tokens */
            --u-navy: #122649;
            --u-blue: #005EFF;
            --u-cyan: #64E0FF;
            --u-lime: #CDFF20;
            --u-red: #FF403C;
            --u-red-ink: #C7231F;   /* red TEXT only — darker, for 4.5:1 contrast */
            --u-linen: #EFECE6;
            --u-white: #FFFFFF;
            --u-mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace;
            --u-arabic: 'IBM Plex Sans Arabic';

            /* Spacing, all constant. Every gap on the sheet is the approved value
               and stays there for every client; the PAGE flexes instead. */
            --u-flag-cols: 3;
            --u-field-gap: 13px;
            --u-marker-pad: 9px;
            --u-marker-gap: 6px;
            --u-ex-pad: 5.5px;
            --u-wr-pad-y: 10px;
            --u-wr-pad-x: 14px;
            --u-clear-pad: 14px;
            --u-wr-gap: 8px;
            --u-wr-row-gap: 4px;
            --u-top-inset: 18px;   /* rule → first marker's name; never varies */

            width: 1056px;
            /* No fixed height: the sheet is as tall as its taller column (field or
               rail) needs, so the space under the last exercise row is always the
               field's own 28px bottom padding — same as every other client's. */
            flex-shrink: 0;
            display: flex;
            overflow: hidden;
            margin: 40px auto;
            background: var(--u-linen);
            box-shadow: 0 24px 60px rgba(18, 38, 73, .18);
            font-family: 'Sora', 'IBM Plex Sans Arabic', 'Segoe UI', sans-serif;
            color: var(--u-navy);
            /* Border radius is 0 everywhere by design except the bar dots. */
        }

        /* Arabic runs in IBM Plex Sans Arabic; Sora has no Arabic coverage. */
        .udra-ar { font-family: var(--u-arabic), 'Segoe UI', sans-serif; }
        /* The face tops out at 700, and synthesised bold smears Arabic letterforms —
           cap the one label that asks for 800. */
        .udra-stat-label.udra-ar { font-weight: 700; }
        /* A long Arabic gloss takes its own line under the English. */
        .udra-ar-line {
            display: block;
            font-family: var(--u-arabic), 'Segoe UI', sans-serif;
            font-weight: 400;
            letter-spacing: 0;
            white-space: normal;
        }
        /* A short one (a section title) rides on the same line instead — stacking
           these costs ~23px a head, which is the whole within-range panel. */
        .udra-ar-gloss {
            font-family: var(--u-arabic), 'Segoe UI', sans-serif;
            font-weight: 500;
            letter-spacing: 0;
        }
        .udra-ar-gloss::before { content: '\\00b7'; padding: 0 7px; opacity: .45; }

        /* Numerals stay Latin in JetBrains Mono even in the Arabic view — the mono
           face carries no Arabic-Indic digits, and a mixed fallback would break the
           tabular alignment the bars and ranges depend on. Each numeric string is
           also an isolated LTR run, or the bidi algorithm reorders "08 SEP 2026"
           and "0 to 30°" into nonsense inside an RTL sheet. */
        .udra-num {
            font-family: var(--u-mono);
            font-variant-numeric: tabular-nums;
            direction: ltr;
            unicode-bidi: isolate;
        }

        /* ── Region 1 — identity rail ──────────────────────────────── */
        .udra-rail {
            width: 272px;
            flex-shrink: 0;
            background: var(--u-navy);
            padding: 30px 28px;
            display: flex;
            flex-direction: column;
            gap: 26px;
            overflow: hidden;
        }
        /* Both logos sit in a flex COLUMN: without an explicit width AND height
           plus align-self, \`align-items: stretch\` distorts them. */
        .udra-wordmark { width: 81px; height: 26px; }
        .udra-logomark { width: 26px; height: 26px; }
        .udra-wordmark, .udra-logomark {
            display: block;
            align-self: flex-start;
            object-fit: contain;
        }

        .udra-ident { display: flex; flex-direction: column; gap: 7px; }
        /* Tracking is tuned to fit the rail's 216px content width on one line. */
        .udra-eyebrow {
            font-size: 9px;
            font-weight: 700;
            letter-spacing: .09em;
            color: var(--u-cyan);
            white-space: nowrap;
        }
        .udra-eyebrow .udra-ar-line { font-size: 9.5px; opacity: .9; padding-top: 3px; }
        .udra-client {
            font-size: 29px;
            font-weight: 700;
            letter-spacing: -.025em;
            color: var(--u-white);
            line-height: 1.08;
        }
        .udra-date {
            font-size: 10px;
            color: var(--u-cyan);
            padding-top: 2px;
        }
        .udra-divider { height: 1px; background: rgba(255, 255, 255, .2); flex-shrink: 0; }

        .udra-stats { display: flex; flex-direction: column; gap: 18px; }
        .udra-stat { display: flex; align-items: center; gap: 14px; }
        /* Sora, not the mono face: these are display numerals, not tabular data,
           and JetBrains Mono has no 800 weight to hit the spec with — tagging them
           as numerals got them faux-bolded. Kept as an isolated LTR run so a
           standalone count can't be reordered in the Arabic view. */
        .udra-stat-num {
            font-size: 58px;
            font-weight: 800;
            line-height: .82;
            letter-spacing: -.04em;
            direction: ltr;
            unicode-bidi: isolate;
        }
        .udra-stat-num.is-out { color: var(--u-red); }
        .udra-stat-num.is-in { color: var(--u-lime); }
        .udra-stat-label {
            font-size: 10px;
            font-weight: 800;
            letter-spacing: .14em;
            color: var(--u-white);
            line-height: 1.5;
        }
        .udra-stat-label.udra-ar { letter-spacing: 0; }
        /* The Arabic phrase under the two-line English label. */
        .udra-stat-label .udra-ar-line {
            font-size: 10.5px;
            line-height: 1.4;
            opacity: .82;
            padding-top: 4px;
        }

        .udra-totals { display: flex; flex-direction: column; gap: 5px; }
        .udra-total {
            font-size: 10px;
            color: var(--u-white);
            opacity: .85;
        }
        .udra-total .udra-ar-line {
            font-size: 10.5px;
            line-height: 1.5;
            opacity: .85;
        }
        /* Each total is two lines in EN/AR, so the pair needs air between them. */
        .udra-sheet .udra-totals:has(.udra-ar-line) { gap: 10px; }
        .udra-foot {
            margin-top: auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .udra-foot-name {
            font-size: 9.5px;
            font-weight: 600;
            letter-spacing: .18em;
            color: var(--u-white);
            opacity: .78;
        }

        /* ── Region 2 — findings field ─────────────────────────────── */
        .udra-field {
            flex: 1;
            min-width: 0;
            padding: 28px 32px;
            display: flex;
            flex-direction: column;
            gap: var(--u-field-gap);
        }
        /* Children must not absorb overflow by shrinking, or the fit check
           can never see that the page is too full. */
        .udra-field > * { flex-shrink: 0; }

        .udra-section-head {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            border-bottom: 1.5px solid var(--u-navy);
            padding-bottom: 7px;
        }
        .udra-section-title {
            font-size: 17px;
            font-weight: 700;
            letter-spacing: -.015em;
        }
        .udra-section-title .udra-ar-gloss { font-size: 12px; opacity: .72; }
        .udra-section-caption {
            font-size: 9px;
            font-weight: 600;
            letter-spacing: .12em;
            opacity: .72;
            text-align: right;
            flex-shrink: 0;
            direction: ltr;        /* always Latin — keep "26 EXERCISES" in order */
            unicode-bidi: isolate;
        }

        /* 2.2 Flagged marker grid — descending severity. */
        .udra-flagged {
            display: grid;
            grid-template-columns: repeat(var(--u-flag-cols), minmax(0, 1fr));
            gap: 0 22px;
        }
        /* The findings always start in the same place: whatever the fit pass does
           to the field gap and the cell padding is cancelled out here, so the rule
           under "Priority findings" sits a fixed --u-top-inset above the first
           marker's name and every adjustment lands further down the sheet. */
        .udra-flagged {
            margin-top: calc(var(--u-top-inset) - var(--u-field-gap) - var(--u-marker-pad));
        }
        /* The all-clear note is a panel, not a bare row — the inset is measured to
           its edge, so its own padding stays out of the sum. */
        .udra-all-clear {
            margin-top: calc(var(--u-top-inset) - var(--u-field-gap));
        }
        .udra-marker {
            padding: var(--u-marker-pad) 0;
            border-bottom: 1px solid rgba(18, 38, 73, .13);
            display: flex;
            flex-direction: column;
            gap: var(--u-marker-gap);
        }
        .udra-marker-top,
        .udra-marker-foot {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 8px;
        }
        .udra-marker-name { font-size: 11px; font-weight: 600; line-height: 1.25; }
        .udra-marker-name .udra-ar-line { font-size: 9px; opacity: .68; }
        .udra-marker-value {
            font-size: 12px;
            font-weight: 500;
            color: var(--u-red-ink);
            flex-shrink: 0;
        }

        /* The bar geometry is computed per marker — see udraDerive(). Forced LTR
           so the band/dot offsets stay physical in the Arabic view. */
        .udra-bar {
            position: relative;
            height: 5px;
            background: rgba(18, 38, 73, .1);
            direction: ltr;
        }
        .udra-band {
            position: absolute;
            top: 0;
            bottom: 0;
            background: var(--u-blue);
        }
        .udra-dot {
            position: absolute;
            top: -3px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: var(--u-red);
            border: 2px solid var(--u-linen);
            margin-left: -5.5px;
        }

        /* Nothing flagged: the findings section still needs to say so rather than
           leave its heading standing over an empty grid. */
        .udra-all-clear {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--u-white);
            padding: var(--u-clear-pad);
            font-size: 11px;
            font-weight: 600;
        }
        .udra-all-clear-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: var(--u-lime);
            flex-shrink: 0;
        }

        .udra-marker-range { font-size: 9.5px; opacity: .7; }
        .udra-marker-delta {
            font-size: 9.5px;
            font-weight: 500;
            color: var(--u-red-ink);
            flex-shrink: 0;
            white-space: nowrap;
        }
        /* Trend vs the client's previous test, when one was loaded. */
        .udra-trend { font-weight: 500; padding-inline-start: 4px; }
        .udra-trend.is-better { color: #1E7F4B; }
        .udra-trend.is-worse { color: var(--u-red-ink); }
        .udra-trend.is-same { color: var(--u-navy); opacity: .55; }

        /* 2.3 Within-range panel — the sheet's height buffer; the fit pass
           tightens and finally hides this before touching anything else. */
        .udra-within {
            background: var(--u-white);
            padding: var(--u-wr-pad-y) var(--u-wr-pad-x);
            display: flex;
            flex-direction: column;
            gap: var(--u-wr-gap);
        }
        .udra-within-head { display: flex; align-items: center; gap: 8px; }
        .udra-within-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--u-blue);
            flex-shrink: 0;
        }
        .udra-within-title { font-size: 10px; font-weight: 700; letter-spacing: .12em; }
        .udra-within-title.udra-ar { letter-spacing: 0; }
        .udra-within-list {
            display: grid;
            grid-template-columns: 1fr auto 1fr auto 1fr auto;
            gap: var(--u-wr-row-gap) 16px;
        }
        .udra-within-name { font-size: 10.5px; opacity: .8; line-height: 1.3; }
        .udra-within-name .udra-ar-line { font-size: 9px; opacity: .8; }
        .udra-within-value { font-size: 10px; font-weight: 500; text-align: right; }

        /* 2.4 Programme band. It sits one --u-field-gap under whatever precedes it
           — never pushed to the bottom edge — so the space above "The Program" is
           the same on every sheet and the page height absorbs the difference. */
        .udra-programme {
            display: flex;
            flex-direction: column;
            gap: var(--u-field-gap);
        }
        .udra-columns { display: flex; gap: 14px; align-items: flex-start; }
        .udra-column { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .udra-column-head {
            background: var(--u-navy);
            padding: 8px 13px;
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
        }
        .udra-column-title {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: .1em;
            color: var(--u-white);
            min-width: 0;
        }
        .udra-column-title .udra-ar-line { font-size: 9px; opacity: .8; }
        .udra-column-unit { font-size: 9px; color: var(--u-cyan); flex-shrink: 0; }
        .udra-column-body { background: var(--u-white); padding: 3px 13px 5px; }
        .udra-exercise {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: var(--u-ex-pad) 0;
            border-bottom: 1px solid rgba(18, 38, 73, .08);
        }
        .udra-exercise-name { font-size: 10.5px; line-height: 1.25; }
        .udra-exercise-name .udra-ar-line { font-size: 9px; opacity: .7; }
        .udra-exercise-dose {
            font-size: 10px;
            font-weight: 500;
            color: var(--u-blue);
            flex-shrink: 0;
        }
        .udra-empty { font-size: 10px; opacity: .5; padding: 8px 0; }

        /* Arabic view: mirror the two regions, keep the bars physical. */
        .udra-sheet[dir="rtl"] .udra-section-caption { text-align: left; }
        .udra-sheet[dir="rtl"] .udra-within-value { text-align: left; }
        .udra-sheet[dir="rtl"] .udra-date,
        .udra-sheet[dir="rtl"] .udra-total { text-align: right; }

        /* ── Print: the sheet is the page ──────────────────────────── */
        @media print {
            .udra-sheet {
                margin: 0;
                box-shadow: none;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            #displayPage.display-page {
                background: none !important;
                padding: 0 !important;
                margin: 0 !important;
                min-height: 0 !important;
            }
            /* Nothing may add height around the sheet, or the page box overflows. */
            html, body, #displayPage { height: auto !important; }
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
    <!-- DISPLAY PAGE — the UDRA posture sheet. One fixed landscape page,
         rendered from scratch by renderUdraSheet() as a pure function of the
         measurements + generated programme. -->
    <div id="displayPage" class="page display-page">
        <div class="udra-toolbar">
            <div class="lang-toggle">
                <span class="lang-option active" id="langBILINGUAL" onclick="setLanguage('bilingual')">EN/AR</span>
                <span class="lang-option" id="langEN" onclick="setLanguage('en')">EN</span>
                <span class="lang-option" id="langAR" onclick="setLanguage('ar')">AR</span>
            </div>
            <button onclick="downloadPDF()" class="udra-btn">Download PDF</button>
        </div>
        <div id="udraSheet"></div>
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
                // UDRA sheet chrome
                ud_eyebrow: 'POSTURE CORRECTION PROGRAM',
                ud_outOf: 'OUT OF',
                ud_within: 'WITHIN',
                ud_range: 'RANGE',
                ud_markersAssessed: 'markers assessed',
                ud_statOutFull: 'OUT OF RANGE',
                ud_statInFull: 'WITHIN RANGE',
                ud_exercisesPrescribed: 'exercises prescribed',
                ud_priorityFindings: 'Priority findings',
                ud_measuredVsNormal: 'MEASURED VALUE VS NORMAL RANGE',
                ud_normalPrefix: 'NORMAL',
                ud_to: 'to',
                ud_over: 'over',
                ud_under: 'under',
                ud_withinRangeHead: 'WITHIN RANGE',
                ud_allClear: 'No marker is outside its normal range.',
                ud_theProgram: 'The Program',
                ud_exercisesCount: 'EXERCISES',
                ud_setsReps: 'sets \\u00d7 reps',
                ud_setsDuration: 'sets \\u00d7 duration',
                ud_blockUpper: 'UPPER BODY & NECK',
                ud_blockStretching: 'STRETCHING',
                ud_blockLower: 'LOWER BODY & SPINE',
                // UDRA sheet marker labels — short form, side always included
                ms_forwardHeadRight: 'Forward head posture (R)',
                ms_forwardHeadLeft: 'Forward head posture (L)',
                ms_roundedShoulderRight: 'Rounded shoulder (R)',
                ms_forwardShoulderLeft: 'Rounded shoulder (L)',
                ms_leftShoulderSlope: 'Shoulder slope (L)',
                ms_rightShoulderSlope: 'Shoulder slope (R)',
                ms_shoulderStability: 'Shoulder stability',
                ms_thoracicKyphosisRight: 'Thoracic kyphosis (R)',
                ms_thoracicKyphosisLeft: 'Thoracic kyphosis (L)',
                ms_lumbarLordosisRight: 'Lumbar lordosis (R)',
                ms_lumbarLordosisLeft: 'Lumbar lordosis (L)',
                ms_spineNeutrality: 'Spinal neutrality',
                ms_pelvicStability: 'Pelvic stability',
                ms_pelvicTilt: 'Pelvic tilt',
                ms_squatDepth: 'Squat depth',
                ms_hipHinge: 'Hip hinge angle',
                ms_fingerToFloor: 'Finger to floor',
                ms_kneeExtension: 'Knee extension',
                ms_kendallKneeRight: 'Kendall knee angle (R)',
                ms_kendallKneeLeft: 'Kendall knee angle (L)',
                ms_leftHKA: 'HKA angle (L)',
                ms_rightHKA: 'HKA angle (R)',
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
                ex_HipAdductionCableLeft: 'Left hip adduction cable',
                ex_HipAdductionCableRight: 'Right hip adduction cable',
                ex_AdductorStretch: 'Stretching adductor',
                ex_AbductorStretch: 'Stretching abductor',
                ex_LeftShrugs: 'Left shrugs',
                ex_RightShrugs: 'Right shrugs',
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
                // UDRA sheet chrome
                ud_eyebrow: 'برنامج تصحيح القوام',
                ud_outOf: 'خارج',
                ud_within: 'ضمن',
                ud_range: 'المعدل',
                ud_markersAssessed: 'مؤشراً تم تقييمه',
                ud_statOutFull: 'خارج المجال',
                ud_statInFull: 'داخل المجال',
                ud_exercisesPrescribed: 'تمريناً موصوفاً',
                ud_priorityFindings: 'النتائج ذات الأولوية',
                ud_measuredVsNormal: 'القيمة المقاسة مقابل المعدل الطبيعي',
                ud_normalPrefix: 'الطبيعي',
                ud_to: 'إلى',
                ud_over: 'زيادة',
                ud_under: 'نقص',
                ud_withinRangeHead: 'ضمن المعدل الطبيعي',
                ud_allClear: 'لا يوجد أي قياس خارج المعدل الطبيعي.',
                ud_theProgram: 'البرنامج',
                ud_exercisesCount: 'تمرين',
                ud_setsReps: 'مجموعات \\u00d7 تكرارات',
                ud_setsDuration: 'مجموعات \\u00d7 مدة',
                ud_blockUpper: 'الجزء العلوي والرقبة',
                ud_blockStretching: 'الإطالة',
                ud_blockLower: 'الجزء السفلي والعمود الفقري',
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
                ex_LowerBackExtensions: 'تقوية أسفل الظهر',
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
                ex_HipAdductionCableLeft: 'أرجل رفرفة داخلي كيبل يسار',
                ex_HipAdductionCableRight: 'أرجل رفرفة داخلي كيبل يمين',
                ex_AdductorStretch: 'تمديد الفخذ الداخلي',
                ex_AbductorStretch: 'تمديد الفخذ الخارجي',
                ex_LeftShrugs: 'رفع الكتف الأيسر للأعلى',
                ex_RightShrugs: 'رفع الكتف الأيمن للأعلى',
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

        function setLanguage(lang) {
            currentMode = lang;
            currentLang = (lang === 'ar') ? 'ar' : 'en';
            const effectiveLang = currentLang;
            const html = document.documentElement;
            html.setAttribute('lang', effectiveLang);
            const displayPage = document.getElementById('displayPage');

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

            // The UDRA sheet is a pure function of the data + the current mode,
            // so switching language re-renders it rather than patching text in
            // place (the fit pass has to re-run anyway: Arabic changes wrapping).
            const displayActive = displayPage && displayPage.classList.contains('active');
            if (displayActive && typeof renderUdraSheet === 'function') {
                renderUdraSheet();
            }
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
        // Where a measurement sits relative to its NORMAL BAND:
        //   'negative' = below the band (lower interval)
        //   'positive' = above the band (upper interval)
        //   'normal'   = inside the band → no corrective exercise needed
        // These are intervals, not the raw arithmetic sign — e.g. left shoulder slope is
        // normal at 12–18°, negative over −5–12 and positive over 18–30, so 8° is
        // "negative" (reduced slope) even though the number itself is positive.
        function deviationSide(fieldId, rawValue) {
            const v = parseFloat(rawValue);
            const rd = normalValues[fieldId];
            if (isNaN(v) || !rd) return 'normal';
            let normLow, normHigh;
            if (rd.type === 'blue-red') {
                // [normal_start, normal_end, max_abnormal]
                normLow = rd.values[0]; normHigh = rd.values[1];
            } else {
                // red-red [min_abn, normal_low, normal_high, max_abn]
                // red-blue [min_abn, normal_start, normal_end]
                normLow = rd.values[1]; normHigh = rd.values[2];
            }
            if (v < normLow) return 'negative';
            if (v > normHigh) return 'positive';
            return 'normal';
        }

        // Builds the prescribed programme from the filled measurements and returns
        // it as three de-duplicated blocks. Entries carry the ex_ translation key
        // (not a rendered name) so the sheet can print English and Arabic from the
        // same list without a reverse lookup.
        function generateDynamicExercises() {
            const exercisesToAdd = { upperBody: [], lowerBody: [], stretching: [] };

            // Helper to push exercise/stretch entries
            const addEx = (cat, isStretch, table, key, optType) => {
                const sr = calculateSetsReps(cat, isStretch, optType);
                table.push({ key: key, sets: sr.sets, reps: sr.reps });
            };

            // ── SHOULDER SLOPE LEFT (negative → pushdowns + trap stretch, positive → shrugs) ──
            const leftSlopeValue = document.getElementById('leftShoulderSlope').value;
            const leftSlopeSide = deviationSide('leftShoulderSlope', leftSlopeValue);
            if (leftSlopeValue && leftSlopeSide !== 'normal') {
                const cc = colorSelections['leftShoulderSlope'].category || colorSelections['leftShoulderSlope'];
                if (leftSlopeSide === 'negative') {
                    addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownFrontLeft');
                    addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownSideLeft');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_LeftUpperTrapStretch');
                } else {
                    addEx(cc, false, exercisesToAdd.upperBody, 'ex_LeftShrugs');
                }
            }

            // ── SHOULDER SLOPE RIGHT (negative → pushdowns + trap stretch, positive → shrugs) ──
            const rightSlopeValue = document.getElementById('rightShoulderSlope').value;
            const rightSlopeSide = deviationSide('rightShoulderSlope', rightSlopeValue);
            if (rightSlopeValue && rightSlopeSide !== 'normal') {
                const cc = colorSelections['rightShoulderSlope'].category || colorSelections['rightShoulderSlope'];
                if (rightSlopeSide === 'negative') {
                    addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownFrontRight');
                    addEx(cc, false, exercisesToAdd.upperBody, 'ex_SingleArmPushdownSideRight');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_RightUpperTrapStretch');
                } else {
                    addEx(cc, false, exercisesToAdd.upperBody, 'ex_RightShrugs');
                }
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

            // ── LEFT HKA ANGLE (positive = valgus, negative = varus) ──
            const leftHKAValue = document.getElementById('leftHKA').value;
            const leftHKASide = deviationSide('leftHKA', leftHKAValue);
            if (leftHKAValue && leftHKASide !== 'normal') {
                const cc = colorSelections['leftHKA'].category || colorSelections['leftHKA'];
                if (leftHKASide === 'positive') {
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_LeftGluteKickbacks');
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAdductionCableLeft');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_AbductorStretch');
                } else {
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAbductionCableLeft');
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_LeftGluteKickbacks');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_AdductorStretch');
                }
            }

            // ── RIGHT HKA ANGLE (positive = valgus, negative = varus) ──
            const rightHKAValue = document.getElementById('rightHKA').value;
            const rightHKASide = deviationSide('rightHKA', rightHKAValue);
            if (rightHKAValue && rightHKASide !== 'normal') {
                const cc = colorSelections['rightHKA'].category || colorSelections['rightHKA'];
                if (rightHKASide === 'positive') {
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_RightGluteKickbacks');
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAdductionCableRight');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_AbductorStretch');
                } else {
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_HipAbductionCableRight');
                    addEx(cc, false, exercisesToAdd.lowerBody, 'ex_RightGluteKickbacks');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_AdductorStretch');
                }
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
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_BackExtensions');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_RowingBack');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_CobraStretch');
            }

            // ── LUMBAR LORDOSIS RIGHT (positive → crunches, negative → lower back extension) ──
            const lumbarRightValue = document.getElementById('lumbarLordosisRight').value;
            const lumbarRightSide = deviationSide('lumbarLordosisRight', lumbarRightValue);
            if (lumbarRightValue && lumbarRightSide !== 'normal') {
                const cc = colorSelections['lumbarLordosisRight'].category || colorSelections['lumbarLordosisRight'];
                if (lumbarRightSide === 'positive') {
                    addEx(cc, false, exercisesToAdd.upperBody,  'ex_Crunches');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_HipFlexorStretch');
                } else {
                    addEx(cc, false, exercisesToAdd.upperBody,  'ex_LowerBackExtensions');
                }
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
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_BackExtensions');
                addEx(cc, false, exercisesToAdd.upperBody,  'ex_RowingBack');
                addEx(cc, true,  exercisesToAdd.stretching, 'ex_CobraStretch');
            }

            // ── LUMBAR LORDOSIS LEFT (positive → crunches, negative → lower back extension) ──
            const lumbarLeftValue = document.getElementById('lumbarLordosisLeft').value;
            const lumbarLeftSide = deviationSide('lumbarLordosisLeft', lumbarLeftValue);
            if (lumbarLeftValue && lumbarLeftSide !== 'normal') {
                const cc = colorSelections['lumbarLordosisLeft'].category || colorSelections['lumbarLordosisLeft'];
                if (lumbarLeftSide === 'positive') {
                    addEx(cc, false, exercisesToAdd.upperBody,  'ex_Crunches');
                    addEx(cc, true,  exercisesToAdd.stretching, 'ex_HipFlexorStretch');
                } else {
                    addEx(cc, false, exercisesToAdd.upperBody,  'ex_LowerBackExtensions');
                }
            }

            // ── KENDALL KNEE RIGHT (Standing Right = Left leg) ──
            const kendallRightValue = document.getElementById('kendallKneeRight').value;
            if (kendallRightValue) {
                const cc  = colorSelections['kendallKneeRight'].category || colorSelections['kendallKneeRight'];
                const esr = calculateSetsReps(cc, false);
                if (cc === 'abnormal') {
                    if (parseFloat(kendallRightValue) > 0) {
                        exercisesToAdd.lowerBody.push({ key: 'ex_LeftLegExtensions',  sets: esr.sets, reps: esr.reps });
                        exercisesToAdd.lowerBody.push({ key: 'ex_SingleLegPressLeft', sets: esr.sets, reps: esr.reps });
                    } else {
                        exercisesToAdd.lowerBody.push({ key: 'ex_LeftHamstringCurls', sets: esr.sets, reps: esr.reps });
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
                        exercisesToAdd.lowerBody.push({ key: 'ex_RightLegExtensions',  sets: esr.sets, reps: esr.reps });
                        exercisesToAdd.lowerBody.push({ key: 'ex_SingleLegPressRight', sets: esr.sets, reps: esr.reps });
                    } else {
                        exercisesToAdd.lowerBody.push({ key: 'ex_RightHamstringCurls', sets: esr.sets, reps: esr.reps });
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

            return {
                upperBody: removeDuplicateExercises(exercisesToAdd.upperBody),
                lowerBody: removeDuplicateExercises(exercisesToAdd.lowerBody),
                stretching: removeDuplicateExercises(exercisesToAdd.stretching)
            };
        }
        
        /* ══════════════════════════════════════════════════════════════════
           UDRA POSTURE SHEET
           A pure function of one program object — the measurements the
           algorithm produced plus the programme generateDynamicExercises()
           derived from them. Nothing is fetched or mutated in here.

           The sheet is an exception report: out-of-range markers get the
           page (name, value, range bar, how far off), in-range markers
           collapse into a compact list at the bottom.
           ══════════════════════════════════════════════════════════════════ */

        // Marker order on the sheet, head → shoulder → spine → pelvis → knee.
        // \`ms\` is the sheet's short English label (side always included); \`ml\`
        // is the existing long label key, reused for the Arabic line.
        const UDRA_MARKERS = [
            { field: 'forwardHeadRight',      ms: 'ms_forwardHeadRight',      ml: 'ml_FHARight',              unit: '°' },
            { field: 'forwardHeadLeft',       ms: 'ms_forwardHeadLeft',       ml: 'ml_FHALeft',               unit: '°' },
            { field: 'roundedShoulderRight',  ms: 'ms_roundedShoulderRight',  ml: 'ml_RSRight',               unit: '°' },
            { field: 'forwardShoulderLeft',   ms: 'ms_forwardShoulderLeft',   ml: 'ml_RSLeft',                unit: '°' },
            { field: 'leftShoulderSlope',     ms: 'ms_leftShoulderSlope',     ml: 'ml_LeftShoulderSlope',     unit: '°' },
            { field: 'rightShoulderSlope',    ms: 'ms_rightShoulderSlope',    ml: 'ml_RightShoulderSlope',    unit: '°' },
            { field: 'shoulderStability',     ms: 'ms_shoulderStability',     ml: 'ml_ShoulderStability',     unit: '°' },
            { field: 'thoracicKyphosisRight', ms: 'ms_thoracicKyphosisRight', ml: 'ml_TKRight',               unit: '°' },
            { field: 'thoracicKyphosisLeft',  ms: 'ms_thoracicKyphosisLeft',  ml: 'ml_TKLeft',                unit: '°' },
            { field: 'lumbarLordosisRight',   ms: 'ms_lumbarLordosisRight',   ml: 'ml_LumbarLordosisRight',   unit: '°' },
            { field: 'lumbarLordosisLeft',    ms: 'ms_lumbarLordosisLeft',    ml: 'ml_LumbarLordosisLeft',    unit: '°' },
            { field: 'spineNeutrality',       ms: 'ms_spineNeutrality',       ml: 'ml_SpinalNeutrality',      unit: '°' },
            { field: 'pelvicStability',       ms: 'ms_pelvicStability',       ml: 'ml_PelvicStability',       unit: '°' },
            { field: 'pelvicTilt',            ms: 'ms_pelvicTilt',            ml: 'ml_PelvicTilt',            unit: '°' },
            { field: 'squatDepth',            ms: 'ms_squatDepth',            ml: 'ml_SquatDepth',            unit: '°' },
            { field: 'hipHinge',              ms: 'ms_hipHinge',              ml: 'ml_HipHinge',              unit: '°' },
            { field: 'fingerToFloor',         ms: 'ms_fingerToFloor',         ml: 'ml_FingerToFloor',         unit: ' cm' },
            { field: 'kneeExtension',         ms: 'ms_kneeExtension',         ml: 'ml_KneeExtension',         unit: '°' },
            { field: 'kendallKneeRight',      ms: 'ms_kendallKneeRight',      ml: 'ml_KKRight',               unit: '°' },
            { field: 'kendallKneeLeft',       ms: 'ms_kendallKneeLeft',       ml: 'ml_KKLeft',                unit: '°' },
            { field: 'leftHKA',               ms: 'ms_leftHKA',               ml: 'ml_LeftHKA',               unit: '°' },
            { field: 'rightHKA',              ms: 'ms_rightHKA',              ml: 'ml_RightHKA',              unit: '°' },
        ];

        // The normal range out of a normalValues entry. The three range shapes
        // put the normal band in different slots:
        //   red-red  [min_abnormal, normal_low,   normal_high, max_abnormal]
        //   blue-red [normal_start, normal_end,   max_abnormal]
        //   red-blue [min_abnormal, normal_start, normal_end]
        function udraNormalBounds(rangeData) {
            if (rangeData.type === 'blue-red') return [rangeData.values[0], rangeData.values[1]];
            return [rangeData.values[1], rangeData.values[2]];
        }

        // Integers print bare, everything else to one decimal.
        const udraFmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(1));

        // The sheet's technical chrome — ranges, deltas, unit labels, totals and the
        // all-caps section captions — stays Latin in every view, alongside the
        // numerals it sits with. Mixing an Arabic word into a mono measurement run
        // both breaks the tabular alignment and invites bidi reordering; the reader
        // gets Arabic for the vocabulary that matters (marker and exercise names).
        const udraEn = (key) => translations.en[key] || key;

        // Date in the rail's mono format, e.g. "08 SEP 2026".
        const UDRA_MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        function udraFormatDate(raw) {
            if (!raw) return '';
            const d = new Date(raw + 'T12:00:00');
            if (isNaN(d.getTime())) return raw;
            return String(d.getDate()).padStart(2, '0') + ' ' + UDRA_MONTHS[d.getMonth()] + ' ' + d.getFullYear();
        }

        // The only real computation on the sheet. Each bar has its OWN axis,
        // scaled to that marker — not to a shared global scale. The padding term
        // guarantees the dot is never flush with the bar's edge and that a very
        // narrow normal range (e.g. -2 to 2) still renders a visible band.
        function udraDerive(m) {
            const { value, unit, min, max } = m;
            const ok = value >= min && value <= max;
            const over = value > max, under = value < min;
            const dev = over ? value - max : under ? min - value : 0;

            const d0 = Math.min(min, value), d1 = Math.max(max, value);
            const pad = Math.max((d1 - d0) * 0.18, Math.max((max - min) * 0.12, 1.5));
            const a = d0 - pad, b = d1 + pad;
            const pct = (x) => ((x - a) / (b - a)) * 100;

            return Object.assign({}, m, {
                ok,
                // Sort key for the flagged grid: RELATIVE deviation, so 12° out on a
                // 10°-wide range outranks 27° out on a 70°-wide one.
                severity: dev / Math.max(max - min, 1),
                valText: udraFmt(value) + unit,
                rangeText: udraFmt(min) + ' ' + udraEn('ud_to') + ' ' + udraFmt(max) + unit.trim(),
                deltaText: ok ? '' : dev.toFixed(1) + unit.trim() + ' ' + udraEn(over ? 'ud_over' : 'ud_under'),
                bandLeft: pct(min).toFixed(1) + '%',
                bandWidth: (pct(max) - pct(min)).toFixed(1) + '%',
                markLeft: pct(value).toFixed(1) + '%',
            });
        }

        // Trend vs the client's previous test, when one was loaded from Supabase.
        // Same rules as the input page's comparison indicators.
        function udraTrend(fieldId, currentValue) {
            if (!previousTestData || !previousTestData.measurements) return null;
            const prevRaw = previousTestData.measurements[fieldId];
            if (prevRaw === undefined || prevRaw === null) return null;
            const prev = parseFloat(prevRaw);
            const rangeData = normalValues[fieldId];
            if (isNaN(prev) || !rangeData) return null;

            const now = calculateColorCategory(currentValue, rangeData);
            const was = calculateColorCategory(prev, rangeData);
            if (!now || !was) return null;

            if (now.category === was.category) {
                const dNow = getDistanceFromNormal(currentValue, rangeData);
                const dWas = getDistanceFromNormal(prev, rangeData);
                if (dNow < dWas) return { glyph: '↑', cls: 'is-better' };
                if (dNow > dWas) return { glyph: '↓', cls: 'is-worse' };
                return { glyph: '–', cls: 'is-same' };
            }
            const rank = { normal: 2, middle: 1, abnormal: 0 };
            return rank[now.category] > rank[was.category]
                ? { glyph: '↑', cls: 'is-better' }
                : { glyph: '↓', cls: 'is-worse' };
        }

        // Collect the sheet's input: every filled marker with its normal range,
        // plus the three programme blocks.
        function buildUdraProgram() {
            const pelvicSide = (document.getElementById('pelvicTiltSide') || {}).value || '';

            const measures = [];
            for (const def of UDRA_MARKERS) {
                const el = document.getElementById(def.field);
                if (!el || el.value === '') continue;
                const value = parseFloat(el.value);
                const rangeData = normalValues[def.field];
                if (!isFinite(value) || !rangeData) continue;
                const [min, max] = udraNormalBounds(rangeData);
                // Pelvic tilt is measured on one side; the side is part of the name.
                const sideSuffix = def.field === 'pelvicTilt'
                    ? (pelvicSide === 'Left' ? ' (L)' : pelvicSide === 'Right' ? ' (R)' : '')
                    : '';
                measures.push({
                    field: def.field, msKey: def.ms, mlKey: def.ml, sideSuffix,
                    value, unit: def.unit, min, max,
                });
            }

            const ex = generateDynamicExercises();
            return {
                client: {
                    name: (document.getElementById('clientName').value || '').trim(),
                    date: udraFormatDate(document.getElementById('assessmentDate').value),
                },
                measures,
                blocks: [
                    { titleKey: 'ud_blockUpper',      unitKey: 'ud_setsReps',     items: ex.upperBody },
                    { titleKey: 'ud_blockStretching', unitKey: 'ud_setsDuration', items: ex.stretching },
                    { titleKey: 'ud_blockLower',      unitKey: 'ud_setsReps',     items: ex.lowerBody },
                ],
            };
        }

        /* ── Rendering ──────────────────────────────────────────────────── */

        const udraEl = (tag, cls, children, attrs) => {
            const el = document.createElement(tag);
            if (cls) el.className = cls;
            if (attrs) for (const k in attrs) el.setAttribute(k, attrs[k]);
            for (const c of [].concat(children || [])) {
                if (c === null || c === undefined || c === false || c === '') continue;
                el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
            }
            return el;
        };

        // Bilingual rule for the sheet: Arabic is added to what the client reads
        // and acts on — marker names, exercise names, the block, section and rail
        // titles, and the rail's headline counts and totals. What stays English in
        // the EN/AR view is the measurement chrome that sits inside a mono run
        // ("NORMAL", unit labels, delta words, ranges), where an Arabic word would
        // break the tabular alignment; the AR-only view flips everything that has
        // a translation.
        //
        // \`arKey\` is only needed where the Arabic lives under a different key —
        // the sheet's short marker labels (ms_*) have no Arabic of their own, so
        // they borrow the long-form ml_* wording.
        function udraText(key, suffix, arKey) {
            const sfx = suffix || '';
            const en = (translations.en[key] || key) + sfx;
            const arRaw = translations.ar[arKey || key];
            const ar = arRaw ? arRaw + sfx : '';
            if (currentMode === 'ar') return { text: ar || en, arPrimary: !!ar, second: '' };
            if (currentMode === 'bilingual' && ar && ar !== en) return { text: en, arPrimary: false, second: ar };
            return { text: en, arPrimary: false, second: '' };
        }

        // A label element whose Arabic gloss (if any) sits on its own line under
        // the English one.
        function udraLabelEl(cls, key, suffix, arKey, inlineGloss) {
            const l = udraText(key, suffix, arKey);
            return udraEl('div', cls + (l.arPrimary ? ' udra-ar' : ''), [
                l.text,
                l.second ? udraEl('span', inlineGloss ? 'udra-ar-gloss' : 'udra-ar-line', l.second) : null,
            ]);
        }

        function udraMarkerCell(m) {
            const trend = udraTrend(m.field, m.value);
            return udraEl('div', 'udra-marker', [
                udraEl('div', 'udra-marker-top', [
                    udraLabelEl('udra-marker-name', m.msKey, m.sideSuffix, m.mlKey),
                    udraEl('div', 'udra-marker-value udra-num', m.valText),
                ]),
                udraEl('div', 'udra-bar', [
                    udraEl('div', 'udra-band', null, { style: \`left:\${m.bandLeft};width:\${m.bandWidth}\` }),
                    udraEl('div', 'udra-dot', null, { style: \`left:\${m.markLeft}\` }),
                ]),
                udraEl('div', 'udra-marker-foot', [
                    udraEl('div', 'udra-marker-range udra-num', udraEn('ud_normalPrefix') + ' ' + m.rangeText),
                    udraEl('div', 'udra-marker-delta udra-num', [
                        m.deltaText,
                        trend ? udraEl('span', 'udra-trend ' + trend.cls, trend.glyph) : null,
                    ]),
                ]),
            ]);
        }

        // The English label breaks over two lines ("OUT OF / RANGE"); the Arabic is
        // one phrase, so it sits under both rather than mirroring the break.
        function udraStat(count, variant, labelKey, fullKey) {
            const ar = translations.ar[fullKey] || '';
            const label = (currentMode === 'ar' && ar)
                ? udraEl('div', 'udra-stat-label udra-ar', ar)
                : udraEl('div', 'udra-stat-label', [
                    udraEn(labelKey), udraEl('br'), udraEn('ud_range'),
                    (currentMode === 'bilingual' && ar) ? udraEl('span', 'udra-ar-line', ar) : null,
                ]);
            return udraEl('div', 'udra-stat', [
                udraEl('div', 'udra-stat-num ' + variant, String(count)),
                label,
            ]);
        }

        // "22 markers assessed" with its Arabic under it. The count leads both lines
        // and the whole row stays an LTR run, so the numeral keeps its place.
        function udraTotal(n, key) {
            const ar = translations.ar[key] ? n + ' ' + translations.ar[key] : '';
            if (currentMode === 'ar' && ar) return udraEl('div', 'udra-total udra-num udra-ar', ar);
            return udraEl('div', 'udra-total udra-num', [
                n + ' ' + udraEn(key),
                (currentMode === 'bilingual' && ar) ? udraEl('span', 'udra-ar-line', ar) : null,
            ]);
        }

        function udraColumn(block) {
            const rows = block.items.length
                ? block.items.map((ex) => udraEl('div', 'udra-exercise', [
                    udraLabelEl('udra-exercise-name', ex.key),
                    udraEl('div', 'udra-exercise-dose udra-num', ex.sets + ' × ' + ex.reps),
                ]))
                : [udraEl('div', 'udra-empty', t('noExercises'))];

            return udraEl('div', 'udra-column', [
                udraEl('div', 'udra-column-head', [
                    udraLabelEl('udra-column-title', block.titleKey),
                    udraEl('div', 'udra-column-unit udra-num', udraEn(block.unitKey)),
                ]),
                udraEl('div', 'udra-column-body', rows),
            ]);
        }

        function udraSectionHead(titleKey, caption) {
            return udraEl('div', 'udra-section-head', [
                udraLabelEl('udra-section-title', titleKey, '', null, true),
                udraEl('div', 'udra-section-caption', caption),
            ]);
        }

        function udraBuildSheet(data) {
            const all = data.measures.map(udraDerive);
            const flagged = all.filter((m) => !m.ok).sort((x, y) => y.severity - x.severity);
            const cleared = all.filter((m) => m.ok);
            const exerciseCount = data.blocks.reduce((n, b) => n + b.items.length, 0);

            const rail = udraEl('div', 'udra-rail', [
                udraEl('img', 'udra-wordmark', null, { src: 'assets/udra-wordmark-white.png', alt: 'UDRA' }),
                udraEl('div', 'udra-ident', [
                    udraLabelEl('udra-eyebrow', 'ud_eyebrow'),
                    udraEl('div', 'udra-client', data.client.name),
                    udraEl('div', 'udra-date udra-num', data.client.date),
                ]),
                udraEl('div', 'udra-divider'),
                udraEl('div', 'udra-stats', [
                    udraStat(flagged.length, 'is-out', 'ud_outOf', 'ud_statOutFull'),
                    udraStat(cleared.length, 'is-in', 'ud_within', 'ud_statInFull'),
                ]),
                udraEl('div', 'udra-divider'),
                udraEl('div', 'udra-totals', [
                    udraTotal(all.length, 'ud_markersAssessed'),
                    udraTotal(exerciseCount, 'ud_exercisesPrescribed'),
                ]),
                udraEl('div', 'udra-foot', [
                    udraEl('img', 'udra-logomark', null, { src: 'assets/udra-mark-white.png', alt: '' }),
                    udraEl('div', 'udra-foot-name', 'UDRA PERFORMANCE'),
                ]),
            ]);

            const withinList = [];
            cleared.forEach((m) => {
                withinList.push(udraLabelEl('udra-within-name', m.msKey, m.sideSuffix, m.mlKey));
                withinList.push(udraEl('div', 'udra-within-value udra-num', m.valText));
            });

            const field = udraEl('div', 'udra-field', [
                udraSectionHead('ud_priorityFindings', udraEn('ud_measuredVsNormal')),
                flagged.length
                    ? udraEl('div', 'udra-flagged', flagged.map(udraMarkerCell))
                    : udraEl('div', 'udra-all-clear' + (currentLang === 'ar' ? ' udra-ar' : ''), [
                        udraEl('div', 'udra-all-clear-dot'),
                        udraEl('div', null, t('ud_allClear')),
                    ]),
                cleared.length ? udraEl('div', 'udra-within', [
                    udraEl('div', 'udra-within-head', [
                        udraEl('div', 'udra-within-dot'),
                        udraEl('div', 'udra-within-title' + (currentMode === 'ar' ? ' udra-ar' : ''), [
                            t('ud_withinRangeHead') + ' · ',
                            udraEl('span', 'udra-num', String(cleared.length)),
                        ]),
                    ]),
                    udraEl('div', 'udra-within-list', withinList),
                ]) : null,
                udraEl('div', 'udra-programme', [
                    udraSectionHead('ud_theProgram', exerciseCount + ' ' + udraEn('ud_exercisesCount')),
                    udraEl('div', 'udra-columns', data.blocks.map(udraColumn)),
                ]),
            ]);

            const sheet = udraEl('div', 'udra-sheet', [rail, field]);
            sheet.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            return sheet;
        }

        /* ── Page sizing ────────────────────────────────────────────────────
           Every gap on the sheet is the approved constant — the inset under the
           "Priority findings" rule, the gap above "The Program", the 28px under
           the last exercise row. Nothing is tightened for a busy client or opened
           up for a sparse one, because the PAGE is what flexes: the sheet has no
           fixed height, so it is exactly as tall as its content plus that padding,
           and the printed @page follows it.

           The sheet is a flex row, so its height is whichever column is taller —
           the findings field or the identity rail. A very light client therefore
           bottoms out at the rail's own height rather than collapsing.
           ─────────────────────────────────────────────────────────────────── */
        const UDRA_SHEET_H = 816;   // 8.5in @ 96dpi — the design's height, for reference
        const UDRA_PAGE_SLACK = 4;  // px of headroom in the page box; invisible, prevents a sliver page

        // Keep the printed page box in step with the sheet's measured height. The
        // static @page in the stylesheet is only a fallback; this overrides it with
        // whatever the sheet actually came out at, so Cmd+P and the Download button
        // both produce exactly one page of exactly the right size.
        function udraSyncPageSize(sheet) {
            // Round UP off the fractional layout height, not off offsetHeight's
            // already-rounded integer: a page box a third of a pixel short of the
            // content spills a second, near-empty sheet out of the printer. The
            // slack on top of that absorbs any small difference between how the
            // screen and the print engine lay the sheet out.
            // Clear the last min-height first, or each call would measure the page
            // box it set previously and the sheet would creep taller every time.
            if (sheet) sheet.style.minHeight = '';
            const px = sheet
                ? Math.ceil(sheet.getBoundingClientRect().height) + UDRA_PAGE_SLACK
                : UDRA_SHEET_H;
            // Grow the sheet onto the slack too. Otherwise the page box is taller
            // than the linen and that gap prints as a white line under the sheet.
            if (sheet) sheet.style.minHeight = px + 'px';
            const heightIn = (px / 96).toFixed(4);
            let st = document.getElementById('dynamic-page-size');
            if (!st) {
                st = document.createElement('style');
                st.id = 'dynamic-page-size';
                document.head.appendChild(st);
            }
            st.textContent = \`@media print { @page { size: 11in \${heightIn}in; margin: 0; } }\`;
        }

        // Cmd+P never goes through downloadPDF(), so catch the dialog on its way up
        // and re-measure then. Cheap, and it covers a sheet that has re-rendered
        // (language switch) since the last explicit sync.
        window.addEventListener('beforeprint', function () {
            const sheet = document.querySelector('#udraSheet .udra-sheet');
            if (sheet) udraSyncPageSize(sheet);
        });

        // Build + render + fit. Safe to call again (language switch re-renders).
        function renderUdraSheet() {
            const host = document.getElementById('udraSheet');
            if (!host) return;
            const sheet = udraBuildSheet(buildUdraProgram());
            host.replaceChildren(sheet);
            udraSyncPageSize(sheet);
            // The brand faces change where text wraps, which changes the sheet's
            // height — re-measure once they land.
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    if (sheet.isConnected) udraSyncPageSize(sheet);
                });
            }
        }

        // Remove duplicate exercises (several markers can prescribe the same one).
        function removeDuplicateExercises(exercises) {
            const merged = {};
            exercises.forEach(ex => {
                const id = ex.key || ex.name;
                if (!merged[id]) {
                    merged[id] = { ...ex };
                }
            });
            return Object.values(merged);
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
            
            // Render the UDRA sheet. It reads the form + the generated programme
            // directly, so the page must be visible first — the fit pass measures.
            setLanguage(_autoLanguageOverride || 'bilingual');
            _autoLanguageOverride = null;
            document.getElementById('inputPage').classList.remove('active');
            document.getElementById('automatedPage').classList.remove('active');
            document.getElementById('displayPage').classList.add('active');
            renderUdraSheet();

            // Scroll to top
            window.scrollTo(0, 0);

            // Bodydot auto-print: once the program is rendered, open the print dialog.
            if (window.__BODYDOT__ && window.__BODYDOT__.autoPrint) {
                window.__BODYDOT__.autoPrint = false;
                setTimeout(function () { downloadPDF(); }, 150);
            }
        });

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
        
        // Download PDF functionality. The sheet is 11in wide always; its height is
        // whatever the client's content came to. Emit an @page that matches, so the
        // PDF is exactly one page with the design's padding at the bottom.
        async function downloadPDF() {
            const clientName = document.getElementById('clientName').value;
            const programTitle = t('programTitle');
            const fileName = clientName ? \`\${clientName.trim()} - \${programTitle}\` : programTitle;

            // The brand faces change where text wraps, so they change the sheet's
            // height. Printing before they land commits a page box sized to a
            // shorter sheet and paginates the difference onto a second page — the
            // auto-print path used to fire on a fixed timer and lose this race.
            if (document.fonts && document.fonts.ready) {
                try { await document.fonts.ready; } catch (e) { /* print anyway */ }
            }
            // Let the post-swap layout settle before measuring it. rAF is throttled
            // to a standstill in a background tab, and the program opens in one, so
            // race it against a timer rather than risk never printing at all.
            await new Promise((resolve) => {
                let done = false;
                const finish = () => { if (!done) { done = true; resolve(); } };
                requestAnimationFrame(() => requestAnimationFrame(finish));
                setTimeout(finish, 120);
            });

            const sheet = document.querySelector('#udraSheet .udra-sheet');
            udraSyncPageSize(sheet);

            const originalTitle = document.title;
            document.title = fileName;

            window.print();

            window.addEventListener('afterprint', function cleanup() {
                document.title = originalTitle;
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
</html>`,Lw=`${window.location.origin}/VALD-automator/bodydot/`;function Ys(e,n,t){const r={session:e,clientName:n,lang:t?"bilingual":"en",autoPrint:!0},a='<meta charset="UTF-8">',i=`<base href="${Lw}"><script>window.__BODYDOT__ = ${JSON.stringify(r)};<\/script>`,o=Tw.replace(a,`${a}${i}`),l=new Blob([o],{type:"text/html"}),s=URL.createObjectURL(l);if(!window.open(s,"_blank"))throw URL.revokeObjectURL(s),new Error("Popup blocked — allow popups for this site and try again.");setTimeout(()=>URL.revokeObjectURL(s),6e4)}function Nw({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o,allowCustom:l=!1}){const[s,u]=w.useState(n||""),[d,p]=w.useState(!1),[m,b]=w.useState(0),h=w.useRef(null),y=w.useRef(null),S=s?e.filter(g=>g.toLowerCase().includes(s.toLowerCase())):e;w.useEffect(()=>{function g(v){h.current&&!h.current.contains(v.target)&&p(!1)}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),w.useEffect(()=>{u(n||"")},[n]),w.useEffect(()=>{b(0)},[s]);function x(g){t(g),u(g),p(!1),r&&r(g)}function f(g){!d||S.length===0||(g.key==="ArrowDown"?(g.preventDefault(),b(v=>Math.min(v+1,S.length-1))):g.key==="ArrowUp"?(g.preventDefault(),b(v=>Math.max(v-1,0))):g.key==="Enter"?(g.preventDefault(),x(S[m])):g.key==="Escape"&&p(!1))}return w.useEffect(()=>{if(!y.current)return;const g=y.current.children[m];g&&g.scrollIntoView({block:"nearest"})},[m]),c.jsxs("div",{ref:h,className:"relative",children:[c.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:s,disabled:i,onChange:g=>{const v=g.target.value;u(v),p(!0),l?t(v):v||t("")},onFocus:()=>p(!0),onKeyDown:f}),d&&!i&&S.length>0&&c.jsx("ul",{ref:y,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:S.map((g,v)=>c.jsx("li",{onMouseDown:()=>x(g),onMouseEnter:()=>b(v),className:`px-3 py-2 text-sm cursor-pointer ${v===m?"bg-gray-700 text-white":g===n?"text-brand-400 font-semibold":"text-white"}`,children:g},g))})]})}function Cw({test:e,org:n,roster:t,onStatus:r,picker:a}){const i=c.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.client_name||""),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),o=e.stored||{},[l,s]=w.useState(o.trainer_name||""),[u,d]=w.useState(o.dispatch_date||new Date().toISOString().slice(0,10)),[p,m]=w.useState(!1),[b,h]=w.useState(!1),[y,S]=w.useState("");w.useEffect(()=>{n.gym&&n.branch&&l?dm(n.gym,n.branch,l).then(_=>{var T;return S(((T=_.data)==null?void 0:T.whatsapp)||"")}).catch(()=>S("")):S("")},[n.gym,n.branch,l]);const x=()=>({gym:n.gym,org_id:n.id,client_id:e.client_id,client_name:e.client_name||"",session_id:e.session_id,test_date:e.test_date,valid:e.valid}),f=async()=>{var _,T;m(!0);try{const{data:A}=await Ju({...x(),trainer_name:l.trim()||null,dispatch_date:u||null,sent:o.sent||!1});r(e.session_id,A)}catch(A){alert("Error approving: "+(((T=(_=A.response)==null?void 0:_.data)==null?void 0:T.detail)||A.message))}finally{m(!1)}},g=async()=>{var _,T;m(!0);try{const{data:A}=await J0(x());r(e.session_id,A)}catch(A){alert("Error ignoring: "+(((T=(_=A.response)==null?void 0:_.data)==null?void 0:T.detail)||A.message))}finally{m(!1)}},v=async()=>{h(!0);try{const _=await Yi(e.client_id,e.session_id);Ys(_,e.client_name||"",n.bilingual)}catch(_){alert("Could not open program: "+_.message)}finally{h(!1)}},k=()=>{if(!y){alert("No WhatsApp number set for this trainer.");return}window.open(`https://wa.me/${y.replace(/\D/g,"")}`,"_blank")},R=async()=>{var _,T;m(!0);try{const{data:A}=await Ju({...x(),trainer_name:null,dispatch_date:null,sent:!1});r(e.session_id,A)}catch(A){alert("Error approving: "+(((T=(_=A.response)==null?void 0:_.data)==null?void 0:T.detail)||A.message))}finally{m(!1)}};return e.valid?c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-4",children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"NEW"}),c.jsx("h3",{className:"font-semibold text-white",children:e.client_name||"—"})]}),c.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[c.jsx("span",{children:"VALID"}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.analyzed,"/",e.total]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,i]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),c.jsx(Nw,{options:t,value:l,onChange:s,placeholder:"Search or type a name…",allowCustom:!0,disabled:p})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),c.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:u,onChange:_=>d(_.target.value),disabled:p})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[c.jsx("button",{onClick:v,disabled:b,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:b?"Loading…":"🖨 Open & Print"}),c.jsx("button",{onClick:g,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:"Ignore"}),c.jsx("div",{className:"flex-1"}),c.jsxs("button",{onClick:k,disabled:!y,title:y?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[c.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),c.jsx("button",{onClick:f,disabled:p,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"Saving…":"Approve"})]})]}):c.jsxs("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-950/10 px-5 py-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"INVALID"}),c.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),c.jsxs("p",{className:"text-xs mt-0.5 text-gray-500",children:[e.analyzed,"/",e.total," analyzed"]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,i,c.jsx("button",{onClick:R,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"…":"Approve"})]})]})}const gn=25,jw=4,Pw="2026-05-15";function Qs(e){return(e||"").normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/\s+/g," ").trim()}function bm(e,n){const t=Qs(e);return n.every(r=>t.includes(r))}function Dw(e){const n=new Date(e);return isNaN(n)?null:n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function ki(e){const n=new Date(e);if(isNaN(n))return e;const t=n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),r=n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${t} · ${r}`}function Ow({test:e,org:n,picker:t,onStatus:r}){var u,d,p;const[a,i]=w.useState(!1),o=((u=e.stored)==null?void 0:u.valid)===!1,l=async()=>{i(!0);try{const m=await Yi(e.client_id,e.session_id);Ys(m,e.client_name||"",n.bilingual)}catch(m){alert("Could not generate program: "+m.message)}finally{i(!1)}},s=async()=>{var m,b;i(!0);try{const{data:h}=await X0(e.session_id);r(e.session_id,h)}catch(h){alert("Could not undo: "+(((b=(m=h.response)==null?void 0:m.data)==null?void 0:b.detail)||h.message))}finally{i(!1)}};return c.jsxs("div",{className:`flex items-center justify-between gap-4 rounded-xl border px-5 py-3 ${o?"border-red-900/50 bg-red-950/10":"border-emerald-800/60 bg-emerald-950/10"}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[o?c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"RECORDED · INVALID"}):c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"APPROVED"}),c.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),c.jsxs("p",{className:"text-xs mt-0.5 text-gray-400",children:[ki(e.created_at||e.test_date),!o&&((d=e.stored)!=null&&d.trainer_name?c.jsxs("span",{className:"text-emerald-400",children:[" · ",e.stored.trainer_name]}):" · no trainer"),(p=e.stored)!=null&&p.sent?" · sent":""]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t,!o&&c.jsx("button",{onClick:l,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:a?"Loading…":"Generate Program"}),c.jsx("button",{onClick:s,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 disabled:opacity-50 transition-colors",children:"Undo"})]})]})}function Fw({client:e,org:n,roster:t,statusMap:r,onStatus:a,searching:i}){const[o,l]=w.useState(void 0),[s,u]=w.useState(null),[d,p]=w.useState(void 0);w.useEffect(()=>{let g=!0;return l(void 0),u(null),wm(e.id).then(v=>g&&l((v||[]).filter(k=>(k.createdAt||"").slice(0,10)>=Pw))).catch(()=>g&&l(null)),()=>{g=!1}},[e.id]);const m=s||o&&o[0]&&o[0].id;w.useEffect(()=>{let g=!0;if(m)return p(void 0),Yi(e.id,m).then(v=>g&&p(v)).catch(()=>g&&p(null)),()=>{g=!1}},[e.id,m]);const b=g=>c.jsxs("div",{className:"rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm",children:[c.jsx("span",{className:"font-medium text-white",children:e.name||"—"}),c.jsxs("span",{className:"text-gray-500",children:[" · ",g]})]});if(o===void 0)return i?b("loading tests…"):null;if(!o||!o.length)return i?b("no test data"):null;const h=o.find(g=>g.id===m)||o[0],y=r[m],S=d?kw(d):null,x={client_id:e.id,client_name:e.name,session_id:m,created_at:h.createdAt,test_date:(h.createdAt||"").slice(0,10),valid:S?S.valid:void 0,analyzed:S?S.analyzed:0,total:S?S.total:0,stored:y},f=o.length>1?c.jsx("select",{value:m,onChange:g=>u(g.target.value),className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:o.map((g,v)=>c.jsxs("option",{value:g.id,children:[ki(g.createdAt),v===0?" (latest)":""]},g.id))}):c.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:ki(h.createdAt)});return y!=null&&y.approved?c.jsx(Ow,{test:x,org:n,picker:f,onStatus:a}):d===void 0?b("checking validity…"):c.jsx(Cw,{test:x,org:n,roster:t,onStatus:a,picker:f})}function Bw({org:e}){const[n,t]=w.useState([]),[r,a]=w.useState(!1),[i,o]=w.useState(null),[l,s]=w.useState(""),[u,d]=w.useState(0),[p,m]=w.useState([]),[b,h]=w.useState({});w.useEffect(()=>{let k=!0;return a(!0),o(null),t([]),s(""),d(0),h({}),ym(e.id).then(R=>k&&t(R)).catch(R=>k&&o(`Error loading clients: ${R.message}`)).finally(()=>k&&a(!1)),I0(e.gym,e.branch).then(R=>k&&m(R.data||[])).catch(()=>{}),Q0(e.gym).then(R=>{const _={};for(const T of R.data||[])_[T.session_id]=T;k&&h(_)}).catch(()=>{}),()=>{k=!1}},[e.id]);const y=(k,R)=>h(_=>({..._,[k]:R})),S=Qs(l).split(" ").filter(Boolean),x=S.length?n.filter(k=>bm(k.name,S)):n,f=Math.max(1,Math.ceil(x.length/gn)),g=Math.min(u,f-1),v=x.slice(g*gn,g*gn+gn);return c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap",children:[c.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),c.jsx("input",{type:"text",value:l,onChange:k=>{s(k.target.value),d(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),i&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:i}),r?c.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):x.length===0?c.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"space-y-3",children:v.map(k=>c.jsx(Fw,{client:k,org:e,roster:p,statusMap:b,onStatus:y,searching:S.length>0},k.id))}),c.jsx(Sm,{safePage:g,totalPages:f,count:v.length,total:x.length,setPage:d})]})]})}function Iw({org:e}){const[n,t]=w.useState([]),[r,a]=w.useState(!1),[i,o]=w.useState(null),[l,s]=w.useState(""),[u,d]=w.useState(0),[p,m]=w.useState({}),b=w.useRef(0);w.useEffect(()=>{let v=!0;return s(""),d(0),o(null),t([]),m({}),a(!0),ym(e.id).then(k=>v&&t(k)).catch(k=>v&&o(`Error loading clients: ${k.message}`)).finally(()=>v&&a(!1)),()=>{v=!1}},[e.id]);const h=Qs(l).split(" ").filter(Boolean),y=h.length?n.filter(v=>bm(v.name,h)):n,S=Math.max(1,Math.ceil(y.length/gn)),x=Math.min(u,S-1),f=y.slice(x*gn,x*gn+gn),g=f.map(v=>v.id).join(",");return w.useEffect(()=>{if(!f.length)return;const v=++b.current,k=f.filter(T=>p[T.id]===void 0);if(!k.length)return;let R=0;const _=async()=>{for(;R<k.length;){if(v!==b.current)return;const T=k[R++];let A=null;try{A=await wm(T.id)}catch{A=null}if(v!==b.current)return;m(P=>({...P,[T.id]:A}))}};Promise.all(Array.from({length:Math.min(jw,k.length)},_))},[g]),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),c.jsx("input",{type:"text",value:l,onChange:v=>{s(v.target.value),d(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),i&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:i}),r?c.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):y.length===0?c.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"rounded-xl border border-gray-800 bg-gray-900 overflow-hidden",children:f.map(v=>c.jsx(zw,{client:v,bilingual:e.bilingual,sessionInfo:p[v.id]},v.id))}),c.jsx(Sm,{safePage:x,totalPages:S,count:f.length,total:y.length,setPage:d})]})]})}function zw({client:e,bilingual:n,sessionInfo:t}){const[r,a]=w.useState(!1),[i,o]=w.useState(null),l=Array.isArray(t)?t:[],s=l.length>1,u=i||l[0]&&l[0].id,d=async()=>{if(u){a(!0);try{const m=await Yi(e.id,u);Ys(m,e.name||"",n)}catch(m){alert(`Could not generate program for ${e.name||"client"}: ${m.message}`)}finally{a(!1)}}};let p;return t===void 0?p=c.jsx("span",{className:"text-gray-600",children:"Loading tests…"}):l.length?p=c.jsxs("span",{className:"text-gray-400",children:["Test date: ",Dw(l[0].createdAt),s&&c.jsxs("span",{className:"text-brand-400",children:[" · ",l.length," tests"]})]}):p=c.jsx("span",{className:"text-gray-600",children:"No test data"}),c.jsxs("div",{className:"flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"font-medium text-white",children:e.name||"—"}),c.jsx("p",{className:"text-xs mt-0.5",children:p})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[s&&c.jsx("select",{value:u,onChange:m=>o(m.target.value),disabled:r,className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:l.map((m,b)=>c.jsxs("option",{value:m.id,children:[ki(m.createdAt),b===0?" (latest)":""]},m.id))}),c.jsx("button",{onClick:d,disabled:r||!u,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:r?"Loading…":"Generate Program"})]})]})}function Sm({safePage:e,totalPages:n,count:t,total:r,setPage:a}){return c.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400",children:[c.jsxs("span",{children:[e*gn+1,"–",e*gn+t," of ",r]}),n>1&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>a(i=>Math.max(0,i-1)),disabled:e===0,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"← Prev"}),c.jsxs("span",{className:"text-gray-500",children:["Page ",e+1," of ",n]}),c.jsx("button",{onClick:()=>a(i=>Math.min(n-1,i+1)),disabled:e>=n-1,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"Next →"})]})]})}function Mw(){const[e,n]=w.useState(null),t=nd.find(r=>r.id===e);return c.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Bodydot"}),c.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Select a center, search a client, then approve and generate programs."})]}),c.jsx("div",{className:"flex flex-wrap gap-3",children:nd.map(r=>c.jsx("button",{onClick:()=>n(r.id),className:`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${e===r.id?"border-brand-500 bg-brand-900/20":"border-gray-700 bg-gray-900 hover:border-gray-500"}`,children:c.jsx("div",{className:"font-semibold text-white",children:r.name})},r.id))}),t&&(t.branch?c.jsx(Bw,{org:t},t.id):c.jsx(Iw,{org:t},t.id))]})}function Hw(){return c.jsx(tw,{children:c.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-900",children:[c.jsxs("nav",{className:"bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center",children:[c.jsx("div",{className:"flex items-center justify-center mr-6 h-[90px]",children:c.jsx("img",{src:"/VALD-automator/UDRA-white-logo.png",alt:"UDRA Logo",className:"h-[43px] w-auto object-contain"})}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx(Et,{to:"/",end:!0,className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"VALD Generation"}),c.jsx(Et,{to:"/bodydot",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Bodydot Generation"}),c.jsx(Et,{to:"/reports",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Reports"})]}),c.jsx("div",{className:"flex-1"}),c.jsx("div",{className:"w-px h-6 bg-gray-700 mx-4"}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx(Et,{to:"/quick",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Generate"}),c.jsx(Et,{to:"/quick-report",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Report"}),c.jsx(Et,{to:"/trainers",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Trainers"})]})]}),c.jsx("main",{className:"flex-1 p-6",children:c.jsxs(Vx,{children:[c.jsx(nt,{path:"/",element:c.jsx(ow,{})}),c.jsx(nt,{path:"/reports",element:c.jsx(cw,{})}),c.jsx(nt,{path:"/quick",element:c.jsx(hw,{})}),c.jsx(nt,{path:"/quick-report",element:c.jsx(gw,{})}),c.jsx(nt,{path:"/trainers",element:c.jsx(ww,{})}),c.jsx(nt,{path:"/bodydot",element:c.jsx(Mw,{})})]})})]})})}Mo.createRoot(document.getElementById("root")).render(c.jsx(Ql.StrictMode,{children:c.jsx(Zx,{children:c.jsx(Hw,{})})}));
