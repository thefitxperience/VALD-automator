function Em(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var td={exports:{}},Si={},rd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),_m=Symbol.for("react.portal"),Rm=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),Cm=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),jm=Symbol.for("react.suspense"),Pm=Symbol.for("react.memo"),Dm=Symbol.for("react.lazy"),tc=Symbol.iterator;function Om(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,od={};function Xt(e,n,t){this.props=e,this.context=n,this.refs=od,this.updater=t||ad}Xt.prototype.isReactComponent={};Xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ld(){}ld.prototype=Xt.prototype;function Kl(e,n,t){this.props=e,this.context=n,this.refs=od,this.updater=t||ad}var Vl=Kl.prototype=new ld;Vl.constructor=Kl;id(Vl,Xt.prototype);Vl.isPureReactComponent=!0;var rc=Array.isArray,sd=Object.prototype.hasOwnProperty,Wl={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,n,t){var r,a={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)sd.call(n,r)&&!cd.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:qr,type:e,key:i,ref:o,props:a,_owner:Wl.current}}function Im(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Fm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ac=/\/+/g;function to(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Fm(""+e.key):n.toString(36)}function La(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qr:case _m:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+to(o,0):r,rc(a)?(t="",e!=null&&(t=e.replace(ac,"$&/")+"/"),La(a,n,t,"",function(c){return c})):a!=null&&(ql(a)&&(a=Im(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(ac,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",rc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+to(i,l);o+=La(i,n,t,s,a)}else if(s=Om(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+to(i,l++),o+=La(i,n,t,s,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(e,n,t){if(e==null)return e;var r=[],a=0;return La(e,r,"","",function(i){return n.call(t,i,a++)}),r}function Bm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Aa={transition:null},zm={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:Wl};function dd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:ua,forEach:function(e,n,t){ua(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ua(e,function(){n++}),n},toArray:function(e){return ua(e,function(n){return n})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Xt;M.Fragment=Rm;M.Profiler=Cm;M.PureComponent=Kl;M.StrictMode=Tm;M.Suspense=jm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;M.act=dd;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),a=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Wl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)sd.call(n,s)&&!cd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qr,type:e.type,key:a,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Lm,_context:e},e.Consumer=e};M.createElement=ud;M.createFactory=function(e){var n=ud.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Nm,render:e}};M.isValidElement=ql;M.lazy=function(e){return{$$typeof:Dm,_payload:{_status:-1,_result:e},_init:Bm}};M.memo=function(e,n){return{$$typeof:Pm,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=Aa.transition;Aa.transition={};try{e()}finally{Aa.transition=n}};M.unstable_act=dd;M.useCallback=function(e,n){return Ne.current.useCallback(e,n)};M.useContext=function(e){return Ne.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};M.useEffect=function(e,n){return Ne.current.useEffect(e,n)};M.useId=function(){return Ne.current.useId()};M.useImperativeHandle=function(e,n,t){return Ne.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return Ne.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return Ne.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return Ne.current.useMemo(e,n)};M.useReducer=function(e,n,t){return Ne.current.useReducer(e,n,t)};M.useRef=function(e){return Ne.current.useRef(e)};M.useState=function(e){return Ne.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return Ne.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return Ne.current.useTransition()};M.version="18.3.1";rd.exports=M;var w=rd.exports;const Gl=nd(w),Mm=Em({__proto__:null,default:Gl},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=w,Um=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),Km=Object.prototype.hasOwnProperty,Vm=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wm={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,n,t){var r,a={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Km.call(n,r)&&!Wm.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Um,type:e,key:i,ref:o,props:a,_owner:Vm.current}}Si.Fragment=$m;Si.jsx=pd;Si.jsxs=pd;td.exports=Si;var u=td.exports,Bo={},fd={exports:{}},Ve={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,A){var O=N.length;N.push(A);e:for(;0<O;){var I=O-1>>>1,H=N[I];if(0<a(H,A))N[I]=A,N[O]=H,O=I;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],O=N.pop();if(O!==A){N[0]=O;e:for(var I=0,H=N.length,xe=H>>>1;I<xe;){var X=2*(I+1)-1,Pe=N[X],un=X+1,qe=N[un];if(0>a(Pe,O))un<H&&0>a(qe,Pe)?(N[I]=qe,N[un]=O,I=un):(N[I]=Pe,N[X]=O,I=X);else if(un<H&&0>a(qe,O))N[I]=qe,N[un]=O,I=un;else break e}}return A}function a(N,A){var O=N.sortIndex-A.sortIndex;return O!==0?O:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],d=1,p=null,g=3,y=!1,m=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var A=t(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=N)r(c),A.sortIndex=A.expirationTime,n(s,A);else break;A=t(c)}}function S(N){if(v=!1,h(N),!m)if(t(s)!==null)m=!0,G(E);else{var A=t(c);A!==null&&Te(S,A.startTime-N)}}function E(N,A){m=!1,v&&(v=!1,x(C),C=-1),y=!0;var O=g;try{for(h(A),p=t(s);p!==null&&(!(p.expirationTime>A)||N&&!q());){var I=p.callback;if(typeof I=="function"){p.callback=null,g=p.priorityLevel;var H=I(p.expirationTime<=A);A=e.unstable_now(),typeof H=="function"?p.callback=H:p===t(s)&&r(s),h(A)}else r(s);p=t(s)}if(p!==null)var xe=!0;else{var X=t(c);X!==null&&Te(S,X.startTime-A),xe=!1}return xe}finally{p=null,g=O,y=!1}}var T=!1,_=null,C=-1,R=5,P=-1;function q(){return!(e.unstable_now()-P<R)}function pe(){if(_!==null){var N=e.unstable_now();P=N;var A=!0;try{A=_(!0,N)}finally{A?V():(T=!1,_=null)}}else T=!1}var V;if(typeof f=="function")V=function(){f(pe)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,oe=z.port2;z.port1.onmessage=pe,V=function(){oe.postMessage(null)}}else V=function(){b(pe,0)};function G(N){_=N,T||(T=!0,V())}function Te(N,A){C=b(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,G(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var O=g;g=A;try{return N()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=g;g=N;try{return A()}finally{g=O}},e.unstable_scheduleCallback=function(N,A,O){var I=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?I+O:I):O=I,N){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=O+H,N={id:d++,callback:A,priorityLevel:N,startTime:O,expirationTime:H,sortIndex:-1},O>I?(N.sortIndex=O,n(c,N),t(s)===null&&N===t(c)&&(v?(x(C),C=-1):v=!0,Te(S,O-I))):(N.sortIndex=H,n(s,N),m||y||(m=!0,G(E))),N},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(N){var A=g;return function(){var O=g;g=A;try{return N.apply(this,arguments)}finally{g=O}}}})(gd);md.exports=gd;var qm=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=w,Ke=qm;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hd=new Set,Tr={};function gt(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(Tr[e]=n,e=0;e<n.length;e++)hd.add(n[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=Object.prototype.hasOwnProperty,Ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},oc={};function Qm(e){return zo.call(oc,e)?!0:zo.call(ic,e)?!1:Ym.test(e)?oc[e]=!0:(ic[e]=!0,!1)}function Jm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xm(e,n,t,r){if(n===null||typeof n>"u"||Jm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,r,a,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];be[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yl=/[\-:]([a-z])/g;function Ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Yl,Ql);be[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Yl,Ql);be[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Yl,Ql);be[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jl(e,n,t,r){var a=be.hasOwnProperty(n)?be[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Xm(n,t,a,r)&&(t=null),r||a===null?Qm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ln=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),Et=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Mo=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),Zl=Symbol.for("react.forward_ref"),Ho=Symbol.for("react.suspense"),Uo=Symbol.for("react.suspense_list"),es=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),lc=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ro;function mr(e){if(ro===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ro=n&&n[1]||""}return`
`+ro+e}var ao=!1;function io(e,n){if(!e||ao)return"";ao=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{ao=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?mr(e):""}function Zm(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=io(e.type,!1),e;case 11:return e=io(e.type.render,!1),e;case 1:return e=io(e.type,!0),e;default:return""}}function $o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Et:return"Portal";case Mo:return"Profiler";case Xl:return"StrictMode";case Ho:return"Suspense";case Uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vd:return(e.displayName||"Context")+".Consumer";case xd:return(e._context.displayName||"Context")+".Provider";case Zl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case es:return n=e.displayName||null,n!==null?n:$o(e.type)||"Memo";case Nn:n=e._payload,e=e._init;try{return $o(e(n))}catch{}}return null}function eg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $o(n);case 8:return n===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ng(e){var n=wd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pa(e){e._valueTracker||(e._valueTracker=ng(e))}function bd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ko(e,n){var t=n.checked;return re({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function sc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Sd(e,n){n=n.checked,n!=null&&Jl(e,"checked",n,!1)}function Vo(e,n){Sd(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Wo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Wo(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function cc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Wo(e,n,t){(n!=="number"||Ka(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gr=Array.isArray;function It(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function qo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return re({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(gr(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function kd(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function dc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ed(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Go(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ed(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fa,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tg=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){tg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vr[n]=vr[e]})});function Rd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vr.hasOwnProperty(e)&&vr[e]?(""+n).trim():n+"px"}function Td(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Rd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var rg=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(e,n){if(n){if(rg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function Qo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Ft=null,Bt=null;function pc(e){if(e=Qr(e)){if(typeof Xo!="function")throw Error(L(280));var n=e.stateNode;n&&(n=Ti(n),Xo(e.stateNode,e.type,n))}}function Cd(e){Ft?Bt?Bt.push(e):Bt=[e]:Ft=e}function Ld(){if(Ft){var e=Ft,n=Bt;if(Bt=Ft=null,pc(e),n)for(e=0;e<n.length;e++)pc(n[e])}}function Ad(e,n){return e(n)}function Nd(){}var oo=!1;function jd(e,n,t){if(oo)return e(n,t);oo=!0;try{return Ad(e,n,t)}finally{oo=!1,(Ft!==null||Bt!==null)&&(Nd(),Ld())}}function Lr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ti(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var Zo=!1;if(_n)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Zo=!1}function ag(e,n,t,r,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var yr=!1,Va=null,Wa=!1,el=null,ig={onError:function(e){yr=!0,Va=e}};function og(e,n,t,r,a,i,o,l,s){yr=!1,Va=null,ag.apply(ig,arguments)}function lg(e,n,t,r,a,i,o,l,s){if(og.apply(this,arguments),yr){if(yr){var c=Va;yr=!1,Va=null}else throw Error(L(198));Wa||(Wa=!0,el=c)}}function ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Pd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fc(e){if(ht(e)!==e)throw Error(L(188))}function sg(e){var n=e.alternate;if(!n){if(n=ht(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return fc(a),e;if(i===r)return fc(a),n;i=i.sibling}throw Error(L(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function Dd(e){return e=sg(e),e!==null?Od(e):null}function Od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Od(e);if(n!==null)return n;e=e.sibling}return null}var Id=Ke.unstable_scheduleCallback,mc=Ke.unstable_cancelCallback,cg=Ke.unstable_shouldYield,ug=Ke.unstable_requestPaint,se=Ke.unstable_now,dg=Ke.unstable_getCurrentPriorityLevel,ts=Ke.unstable_ImmediatePriority,Fd=Ke.unstable_UserBlockingPriority,qa=Ke.unstable_NormalPriority,pg=Ke.unstable_LowPriority,Bd=Ke.unstable_IdlePriority,ki=null,xn=null;function fg(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:hg,mg=Math.log,gg=Math.LN2;function hg(e){return e>>>=0,e===0?32:31-(mg(e)/gg|0)|0}var ma=64,ga=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?r=hr(l):(i&=o,i!==0&&(r=hr(i)))}else o=t&~a,o!==0?r=hr(o):i!==0&&(r=hr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-on(n),a=1<<t,r|=e[t],n&=~a;return r}function xg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-on(i),l=1<<o,s=a[o];s===-1?(!(l&t)||l&r)&&(a[o]=xg(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zd(){var e=ma;return ma<<=1,!(ma&4194240)&&(ma=64),e}function lo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function yg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-on(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function rs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-on(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var $=0;function Md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hd,as,Ud,$d,Kd,tl=!1,ha=[],Bn=null,zn=null,Mn=null,Ar=new Map,Nr=new Map,Pn=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,n){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ar.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(n.pointerId)}}function ar(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Qr(n),n!==null&&as(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function bg(e,n,t,r,a){switch(n){case"focusin":return Bn=ar(Bn,e,n,t,r,a),!0;case"dragenter":return zn=ar(zn,e,n,t,r,a),!0;case"mouseover":return Mn=ar(Mn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Ar.set(i,ar(Ar.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Nr.set(i,ar(Nr.get(i)||null,e,n,t,r,a)),!0}return!1}function Vd(e){var n=tt(e.target);if(n!==null){var t=ht(n);if(t!==null){if(n=t.tag,n===13){if(n=Pd(t),n!==null){e.blockedOn=n,Kd(e.priority,function(){Ud(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Na(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=rl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Jo=r,t.target.dispatchEvent(r),Jo=null}else return n=Qr(t),n!==null&&as(n),e.blockedOn=t,!1;n.shift()}return!0}function hc(e,n,t){Na(e)&&t.delete(n)}function Sg(){tl=!1,Bn!==null&&Na(Bn)&&(Bn=null),zn!==null&&Na(zn)&&(zn=null),Mn!==null&&Na(Mn)&&(Mn=null),Ar.forEach(hc),Nr.forEach(hc)}function ir(e,n){e.blockedOn===n&&(e.blockedOn=null,tl||(tl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Sg)))}function jr(e){function n(a){return ir(a,e)}if(0<ha.length){ir(ha[0],e);for(var t=1;t<ha.length;t++){var r=ha[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Bn!==null&&ir(Bn,e),zn!==null&&ir(zn,e),Mn!==null&&ir(Mn,e),Ar.forEach(n),Nr.forEach(n),t=0;t<Pn.length;t++)r=Pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(t=Pn[0],t.blockedOn===null);)Vd(t),t.blockedOn===null&&Pn.shift()}var zt=Ln.ReactCurrentBatchConfig,Ya=!0;function kg(e,n,t,r){var a=$,i=zt.transition;zt.transition=null;try{$=1,is(e,n,t,r)}finally{$=a,zt.transition=i}}function Eg(e,n,t,r){var a=$,i=zt.transition;zt.transition=null;try{$=4,is(e,n,t,r)}finally{$=a,zt.transition=i}}function is(e,n,t,r){if(Ya){var a=rl(e,n,t,r);if(a===null)vo(e,n,r,Qa,t),gc(e,r);else if(bg(a,e,n,t,r))r.stopPropagation();else if(gc(e,r),n&4&&-1<wg.indexOf(e)){for(;a!==null;){var i=Qr(a);if(i!==null&&Hd(i),i=rl(e,n,t,r),i===null&&vo(e,n,r,Qa,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else vo(e,n,r,null,t)}}var Qa=null;function rl(e,n,t,r){if(Qa=null,e=ns(r),e=tt(e),e!==null)if(n=ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Pd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Qa=e,null}function Wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dg()){case ts:return 1;case Fd:return 4;case qa:case pg:return 16;case Bd:return 536870912;default:return 16}default:return 16}}var On=null,os=null,ja=null;function qd(){if(ja)return ja;var e,n=os,t=n.length,r,a="value"in On?On.value:On.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return ja=a.slice(e,1<r?1-r:void 0)}function Pa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xa(){return!0}function xc(){return!1}function We(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:xc,this.isPropagationStopped=xc,this}return re(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),n}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=We(Zt),Yr=re({},Zt,{view:0,detail:0}),_g=We(Yr),so,co,or,Ei=re({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(so=e.screenX-or.screenX,co=e.screenY-or.screenY):co=so=0,or=e),so)},movementY:function(e){return"movementY"in e?e.movementY:co}}),vc=We(Ei),Rg=re({},Ei,{dataTransfer:0}),Tg=We(Rg),Cg=re({},Yr,{relatedTarget:0}),uo=We(Cg),Lg=re({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=We(Lg),Ng=re({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jg=We(Ng),Pg=re({},Zt,{data:0}),yc=We(Pg),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ig[e])?!!n[e]:!1}function ss(){return Fg}var Bg=re({},Yr,{key:function(e){if(e.key){var n=Dg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zg=We(Bg),Mg=re({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=We(Mg),Hg=re({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),Ug=We(Hg),$g=re({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=We($g),Vg=re({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=We(Vg),qg=[9,13,27,32],cs=_n&&"CompositionEvent"in window,wr=null;_n&&"documentMode"in document&&(wr=document.documentMode);var Gg=_n&&"TextEvent"in window&&!wr,Gd=_n&&(!cs||wr&&8<wr&&11>=wr),bc=" ",Sc=!1;function Yd(e,n){switch(e){case"keyup":return qg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Yg(e,n){switch(e){case"compositionend":return Qd(n);case"keypress":return n.which!==32?null:(Sc=!0,bc);case"textInput":return e=n.data,e===bc&&Sc?null:e;default:return null}}function Qg(e,n){if(Rt)return e==="compositionend"||!cs&&Yd(e,n)?(e=qd(),ja=os=On=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gd&&n.locale!=="ko"?null:n.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jg[e.type]:n==="textarea"}function Jd(e,n,t,r){Cd(r),n=Ja(n,"onChange"),0<n.length&&(t=new ls("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var br=null,Pr=null;function Xg(e){sp(e,0)}function _i(e){var n=Lt(e);if(bd(n))return e}function Zg(e,n){if(e==="change")return n}var Xd=!1;if(_n){var po;if(_n){var fo="oninput"in document;if(!fo){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),fo=typeof Ec.oninput=="function"}po=fo}else po=!1;Xd=po&&(!document.documentMode||9<document.documentMode)}function _c(){br&&(br.detachEvent("onpropertychange",Zd),Pr=br=null)}function Zd(e){if(e.propertyName==="value"&&_i(Pr)){var n=[];Jd(n,Pr,e,ns(e)),jd(Xg,n)}}function eh(e,n,t){e==="focusin"?(_c(),br=n,Pr=t,br.attachEvent("onpropertychange",Zd)):e==="focusout"&&_c()}function nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Pr)}function th(e,n){if(e==="click")return _i(n)}function rh(e,n){if(e==="input"||e==="change")return _i(n)}function ah(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:ah;function Dr(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!zo.call(n,a)||!sn(e[a],n[a]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,n){var t=Rc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Rc(t)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(){for(var e=window,n=Ka();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ka(e.document)}return n}function us(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ih(e){var n=np(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ep(t.ownerDocument.documentElement,t)){if(r!==null&&us(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Tc(t,i);var o=Tc(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oh=_n&&"documentMode"in document&&11>=document.documentMode,Tt=null,al=null,Sr=null,il=!1;function Cc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;il||Tt==null||Tt!==Ka(r)||(r=Tt,"selectionStart"in r&&us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Dr(Sr,r)||(Sr=r,r=Ja(al,"onSelect"),0<r.length&&(n=new ls("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tt)))}function va(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},mo={},tp={};_n&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function Ri(e){if(mo[e])return mo[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in tp)return mo[e]=n[t];return e}var rp=Ri("animationend"),ap=Ri("animationiteration"),ip=Ri("animationstart"),op=Ri("transitionend"),lp=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){lp.set(e,n),gt(n,[e])}for(var go=0;go<Lc.length;go++){var ho=Lc[go],lh=ho.toLowerCase(),sh=ho[0].toUpperCase()+ho.slice(1);Yn(lh,"on"+sh)}Yn(rp,"onAnimationEnd");Yn(ap,"onAnimationIteration");Yn(ip,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(op,"onTransitionEnd");Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function Ac(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,lg(r,n,void 0,e),e.currentTarget=null}function sp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Ac(a,l,c),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Ac(a,l,c),i=s}}}if(Wa)throw e=el,Wa=!1,el=null,e}function Y(e,n){var t=n[ul];t===void 0&&(t=n[ul]=new Set);var r=e+"__bubble";t.has(r)||(cp(n,e,2,!1),t.add(r))}function xo(e,n,t){var r=0;n&&(r|=4),cp(t,e,r,n)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[ya]){e[ya]=!0,hd.forEach(function(t){t!=="selectionchange"&&(ch.has(t)||xo(t,!1,e),xo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ya]||(n[ya]=!0,xo("selectionchange",!1,n))}}function cp(e,n,t,r){switch(Wd(n)){case 1:var a=kg;break;case 4:a=Eg;break;default:a=is}t=a.bind(null,n,t,e),a=void 0,!Zo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function vo(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=tt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}jd(function(){var c=i,d=ns(t),p=[];e:{var g=lp.get(e);if(g!==void 0){var y=ls,m=e;switch(e){case"keypress":if(Pa(t)===0)break e;case"keydown":case"keyup":y=zg;break;case"focusin":m="focus",y=uo;break;case"focusout":m="blur",y=uo;break;case"beforeblur":case"afterblur":y=uo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ug;break;case rp:case ap:case ip:y=Ag;break;case op:y=Kg;break;case"scroll":y=_g;break;case"wheel":y=Wg;break;case"copy":case"cut":case"paste":y=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wc}var v=(n&4)!==0,b=!v&&e==="scroll",x=v?g!==null?g+"Capture":null:g;v=[];for(var f=c,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,x!==null&&(S=Lr(f,x),S!=null&&v.push(Ir(f,S,h)))),b)break;f=f.return}0<v.length&&(g=new y(g,m,null,t,d),p.push({event:g,listeners:v}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&t!==Jo&&(m=t.relatedTarget||t.fromElement)&&(tt(m)||m[Rn]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(m=t.relatedTarget||t.toElement,y=c,m=m?tt(m):null,m!==null&&(b=ht(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=c),y!==m)){if(v=vc,S="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=wc,S="onPointerLeave",x="onPointerEnter",f="pointer"),b=y==null?g:Lt(y),h=m==null?g:Lt(m),g=new v(S,f+"leave",y,t,d),g.target=b,g.relatedTarget=h,S=null,tt(d)===c&&(v=new v(x,f+"enter",m,t,d),v.target=h,v.relatedTarget=b,S=v),b=S,y&&m)n:{for(v=y,x=m,f=0,h=v;h;h=St(h))f++;for(h=0,S=x;S;S=St(S))h++;for(;0<f-h;)v=St(v),f--;for(;0<h-f;)x=St(x),h--;for(;f--;){if(v===x||x!==null&&v===x.alternate)break n;v=St(v),x=St(x)}v=null}else v=null;y!==null&&Nc(p,g,y,v,!1),m!==null&&b!==null&&Nc(p,b,m,v,!0)}}e:{if(g=c?Lt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var E=Zg;else if(kc(g))if(Xd)E=rh;else{E=nh;var T=eh}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=th);if(E&&(E=E(e,c))){Jd(p,E,t,d);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Wo(g,"number",g.value)}switch(T=c?Lt(c):window,e){case"focusin":(kc(T)||T.contentEditable==="true")&&(Tt=T,al=c,Sr=null);break;case"focusout":Sr=al=Tt=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,Cc(p,t,d);break;case"selectionchange":if(oh)break;case"keydown":case"keyup":Cc(p,t,d)}var _;if(cs)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Rt?Yd(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Gd&&t.locale!=="ko"&&(Rt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Rt&&(_=qd()):(On=d,os="value"in On?On.value:On.textContent,Rt=!0)),T=Ja(c,C),0<T.length&&(C=new yc(C,e,null,t,d),p.push({event:C,listeners:T}),_?C.data=_:(_=Qd(t),_!==null&&(C.data=_)))),(_=Gg?Yg(e,t):Qg(e,t))&&(c=Ja(c,"onBeforeInput"),0<c.length&&(d=new yc("onBeforeInput","beforeinput",null,t,d),p.push({event:d,listeners:c}),d.data=_))}sp(p,n)})}function Ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ja(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Lr(e,t),i!=null&&r.unshift(Ir(e,i,a)),i=Lr(e,n),i!=null&&r.push(Ir(e,i,a))),e=e.return}return r}function St(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,a?(s=Lr(t,i),s!=null&&o.unshift(Ir(t,s,l))):a||(s=Lr(t,i),s!=null&&o.push(Ir(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var uh=/\r\n?/g,dh=/\u0000|\uFFFD/g;function jc(e){return(typeof e=="string"?e:""+e).replace(uh,`
`).replace(dh,"")}function wa(e,n,t){if(n=jc(n),jc(e)!==n&&t)throw Error(L(425))}function Xa(){}var ol=null,ll=null;function sl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,ph=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,fh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(mh)}:cl;function mh(e){setTimeout(function(){throw e})}function yo(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),jr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);jr(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Dc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),gn="__reactFiber$"+er,Fr="__reactProps$"+er,Rn="__reactContainer$"+er,ul="__reactEvents$"+er,gh="__reactListeners$"+er,hh="__reactHandles$"+er;function tt(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Rn]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Dc(e);e!==null;){if(t=e[gn])return t;e=Dc(e)}return n}e=t,t=e.parentNode}return null}function Qr(e){return e=e[gn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ti(e){return e[Fr]||null}var dl=[],At=-1;function Qn(e){return{current:e}}function J(e){0>At||(e.current=dl[At],dl[At]=null,At--)}function W(e,n){At++,dl[At]=e.current,e.current=n}var Gn={},Re=Qn(Gn),Ie=Qn(!1),ct=Gn;function $t(e,n){var t=e.type.contextTypes;if(!t)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fe(e){return e=e.childContextTypes,e!=null}function Za(){J(Ie),J(Re)}function Oc(e,n,t){if(Re.current!==Gn)throw Error(L(168));W(Re,n),W(Ie,t)}function up(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(L(108,eg(e)||"Unknown",a));return re({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,ct=Re.current,W(Re,e),W(Ie,Ie.current),!0}function Ic(e,n,t){var r=e.stateNode;if(!r)throw Error(L(169));t?(e=up(e,n,ct),r.__reactInternalMemoizedMergedChildContext=e,J(Ie),J(Re),W(Re,e)):J(Ie),W(Ie,t)}var bn=null,Ci=!1,wo=!1;function dp(e){bn===null?bn=[e]:bn.push(e)}function xh(e){Ci=!0,dp(e)}function Jn(){if(!wo&&bn!==null){wo=!0;var e=0,n=$;try{var t=bn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}bn=null,Ci=!1}catch(a){throw bn!==null&&(bn=bn.slice(e+1)),Id(ts,Jn),a}finally{$=n,wo=!1}}return null}var Nt=[],jt=0,ni=null,ti=0,Ye=[],Qe=0,ut=null,Sn=1,kn="";function Zn(e,n){Nt[jt++]=ti,Nt[jt++]=ni,ni=e,ti=n}function pp(e,n,t){Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=ut,ut=e;var r=Sn;e=kn;var a=32-on(r)-1;r&=~(1<<a),t+=1;var i=32-on(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Sn=1<<32-on(n)+a|t<<a|r,kn=i+e}else Sn=1<<i|t<<a|r,kn=e}function ds(e){e.return!==null&&(Zn(e,1),pp(e,1,0))}function ps(e){for(;e===ni;)ni=Nt[--jt],Nt[jt]=null,ti=Nt[--jt],Nt[jt]=null;for(;e===ut;)ut=Ye[--Qe],Ye[Qe]=null,kn=Ye[--Qe],Ye[Qe]=null,Sn=Ye[--Qe],Ye[Qe]=null}var $e=null,Ue=null,Z=!1,an=null;function fp(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,Ue=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ut!==null?{id:Sn,overflow:kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,Ue=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(Z){var n=Ue;if(n){var t=n;if(!Fc(e,n)){if(pl(e))throw Error(L(418));n=Hn(t.nextSibling);var r=$e;n&&Fc(e,n)?fp(r,t):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(pl(e))throw Error(L(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function ba(e){if(e!==$e)return!1;if(!Z)return Bc(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!sl(e.type,e.memoizedProps)),n&&(n=Ue)){if(pl(e))throw mp(),Error(L(418));for(;n;)fp(e,n),n=Hn(n.nextSibling)}if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=$e?Hn(e.stateNode.nextSibling):null;return!0}function mp(){for(var e=Ue;e;)e=Hn(e.nextSibling)}function Kt(){Ue=$e=null,Z=!1}function fs(e){an===null?an=[e]:an.push(e)}var vh=Ln.ReactCurrentBatchConfig;function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function Sa(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function zc(e){var n=e._init;return n(e._payload)}function gp(e){function n(x,f){if(e){var h=x.deletions;h===null?(x.deletions=[f],x.flags|=16):h.push(f)}}function t(x,f){if(!e)return null;for(;f!==null;)n(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(x,f){return x=Vn(x,f),x.index=0,x.sibling=null,x}function i(x,f,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<f?(x.flags|=2,f):h):(x.flags|=2,f)):(x.flags|=1048576,f)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,f,h,S){return f===null||f.tag!==6?(f=To(h,x.mode,S),f.return=x,f):(f=a(f,h),f.return=x,f)}function s(x,f,h,S){var E=h.type;return E===_t?d(x,f,h.props.children,S,h.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nn&&zc(E)===f.type)?(S=a(f,h.props),S.ref=lr(x,f,h),S.return=x,S):(S=Ma(h.type,h.key,h.props,null,x.mode,S),S.ref=lr(x,f,h),S.return=x,S)}function c(x,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Co(h,x.mode,S),f.return=x,f):(f=a(f,h.children||[]),f.return=x,f)}function d(x,f,h,S,E){return f===null||f.tag!==7?(f=lt(h,x.mode,S,E),f.return=x,f):(f=a(f,h),f.return=x,f)}function p(x,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=To(""+f,x.mode,h),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case da:return h=Ma(f.type,f.key,f.props,null,x.mode,h),h.ref=lr(x,null,f),h.return=x,h;case Et:return f=Co(f,x.mode,h),f.return=x,f;case Nn:var S=f._init;return p(x,S(f._payload),h)}if(gr(f)||tr(f))return f=lt(f,x.mode,h,null),f.return=x,f;Sa(x,f)}return null}function g(x,f,h,S){var E=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:l(x,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case da:return h.key===E?s(x,f,h,S):null;case Et:return h.key===E?c(x,f,h,S):null;case Nn:return E=h._init,g(x,f,E(h._payload),S)}if(gr(h)||tr(h))return E!==null?null:d(x,f,h,S,null);Sa(x,h)}return null}function y(x,f,h,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(h)||null,l(f,x,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case da:return x=x.get(S.key===null?h:S.key)||null,s(f,x,S,E);case Et:return x=x.get(S.key===null?h:S.key)||null,c(f,x,S,E);case Nn:var T=S._init;return y(x,f,h,T(S._payload),E)}if(gr(S)||tr(S))return x=x.get(h)||null,d(f,x,S,E,null);Sa(f,S)}return null}function m(x,f,h,S){for(var E=null,T=null,_=f,C=f=0,R=null;_!==null&&C<h.length;C++){_.index>C?(R=_,_=null):R=_.sibling;var P=g(x,_,h[C],S);if(P===null){_===null&&(_=R);break}e&&_&&P.alternate===null&&n(x,_),f=i(P,f,C),T===null?E=P:T.sibling=P,T=P,_=R}if(C===h.length)return t(x,_),Z&&Zn(x,C),E;if(_===null){for(;C<h.length;C++)_=p(x,h[C],S),_!==null&&(f=i(_,f,C),T===null?E=_:T.sibling=_,T=_);return Z&&Zn(x,C),E}for(_=r(x,_);C<h.length;C++)R=y(_,x,C,h[C],S),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?C:R.key),f=i(R,f,C),T===null?E=R:T.sibling=R,T=R);return e&&_.forEach(function(q){return n(x,q)}),Z&&Zn(x,C),E}function v(x,f,h,S){var E=tr(h);if(typeof E!="function")throw Error(L(150));if(h=E.call(h),h==null)throw Error(L(151));for(var T=E=null,_=f,C=f=0,R=null,P=h.next();_!==null&&!P.done;C++,P=h.next()){_.index>C?(R=_,_=null):R=_.sibling;var q=g(x,_,P.value,S);if(q===null){_===null&&(_=R);break}e&&_&&q.alternate===null&&n(x,_),f=i(q,f,C),T===null?E=q:T.sibling=q,T=q,_=R}if(P.done)return t(x,_),Z&&Zn(x,C),E;if(_===null){for(;!P.done;C++,P=h.next())P=p(x,P.value,S),P!==null&&(f=i(P,f,C),T===null?E=P:T.sibling=P,T=P);return Z&&Zn(x,C),E}for(_=r(x,_);!P.done;C++,P=h.next())P=y(_,x,C,P.value,S),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?C:P.key),f=i(P,f,C),T===null?E=P:T.sibling=P,T=P);return e&&_.forEach(function(pe){return n(x,pe)}),Z&&Zn(x,C),E}function b(x,f,h,S){if(typeof h=="object"&&h!==null&&h.type===_t&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case da:e:{for(var E=h.key,T=f;T!==null;){if(T.key===E){if(E=h.type,E===_t){if(T.tag===7){t(x,T.sibling),f=a(T,h.props.children),f.return=x,x=f;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nn&&zc(E)===T.type){t(x,T.sibling),f=a(T,h.props),f.ref=lr(x,T,h),f.return=x,x=f;break e}t(x,T);break}else n(x,T);T=T.sibling}h.type===_t?(f=lt(h.props.children,x.mode,S,h.key),f.return=x,x=f):(S=Ma(h.type,h.key,h.props,null,x.mode,S),S.ref=lr(x,f,h),S.return=x,x=S)}return o(x);case Et:e:{for(T=h.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(x,f.sibling),f=a(f,h.children||[]),f.return=x,x=f;break e}else{t(x,f);break}else n(x,f);f=f.sibling}f=Co(h,x.mode,S),f.return=x,x=f}return o(x);case Nn:return T=h._init,b(x,f,T(h._payload),S)}if(gr(h))return m(x,f,h,S);if(tr(h))return v(x,f,h,S);Sa(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(x,f.sibling),f=a(f,h),f.return=x,x=f):(t(x,f),f=To(h,x.mode,S),f.return=x,x=f),o(x)):t(x,f)}return b}var Vt=gp(!0),hp=gp(!1),ri=Qn(null),ai=null,Pt=null,ms=null;function gs(){ms=Pt=ai=null}function hs(e){var n=ri.current;J(ri),e._currentValue=n}function ml(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mt(e,n){ai=e,ms=Pt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Oe=!0),e.firstContext=null)}function Ze(e){var n=e._currentValue;if(ms!==e)if(e={context:e,memoizedValue:n,next:null},Pt===null){if(ai===null)throw Error(L(308));Pt=e,ai.dependencies={lanes:0,firstContext:e}}else Pt=Pt.next=e;return n}var rt=null;function xs(e){rt===null?rt=[e]:rt.push(e)}function xp(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,xs(n)):(t.next=a.next,a.next=t),n.interleaved=t,Tn(e,r)}function Tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Tn(e,t)}return a=r.interleaved,a===null?(n.next=n,xs(r)):(n.next=a.next,a.next=n),r.interleaved=n,Tn(e,t)}function Da(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,rs(e,t)}}function Mc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ii(e,n,t,r){var a=e.updateQueue;jn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(i!==null){var p=a.baseState;o=0,d=c=s=null,l=i;do{var g=l.lane,y=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(g=n,y=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){p=m.call(y,p,g);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,g=typeof m=="function"?m.call(y,p,g):m,g==null)break e;p=re({},p,g);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,s=p):d=d.next=y,o|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(d===null&&(s=p),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=d,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);pt|=o,e.lanes=o,e.memoizedState=p}}function Hc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(L(191,a));a.call(r)}}}var Jr={},vn=Qn(Jr),Br=Qn(Jr),zr=Qn(Jr);function at(e){if(e===Jr)throw Error(L(174));return e}function ys(e,n){switch(W(zr,n),W(Br,e),W(vn,Jr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Go(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Go(n,e)}J(vn),W(vn,n)}function Wt(){J(vn),J(Br),J(zr)}function yp(e){at(zr.current);var n=at(vn.current),t=Go(n,e.type);n!==t&&(W(Br,e),W(vn,t))}function ws(e){Br.current===e&&(J(vn),J(Br))}var ne=Qn(0);function oi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bo=[];function bs(){for(var e=0;e<bo.length;e++)bo[e]._workInProgressVersionPrimary=null;bo.length=0}var Oa=Ln.ReactCurrentDispatcher,So=Ln.ReactCurrentBatchConfig,dt=0,te=null,fe=null,ge=null,li=!1,kr=!1,Mr=0,yh=0;function Se(){throw Error(L(321))}function Ss(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function ks(e,n,t,r,a,i){if(dt=i,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Oa.current=e===null||e.memoizedState===null?kh:Eh,e=t(r,a),kr){i=0;do{if(kr=!1,Mr=0,25<=i)throw Error(L(301));i+=1,ge=fe=null,n.updateQueue=null,Oa.current=_h,e=t(r,a)}while(kr)}if(Oa.current=si,n=fe!==null&&fe.next!==null,dt=0,ge=fe=te=null,li=!1,n)throw Error(L(300));return e}function Es(){var e=Mr!==0;return Mr=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?te.memoizedState=ge=e:ge=ge.next=e,ge}function en(){if(fe===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var n=ge===null?te.memoizedState:ge.next;if(n!==null)ge=n,fe=e;else{if(e===null)throw Error(L(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?te.memoizedState=ge=e:ge=ge.next=e}return ge}function Hr(e,n){return typeof n=="function"?n(e):n}function ko(e){var n=en(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=fe,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,c=i;do{var d=c.lane;if((dt&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,te.lanes|=d,pt|=d}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=l,sn(r,n.memoizedState)||(Oe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,te.lanes|=i,pt|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Eo(e){var n=en(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);sn(i,n.memoizedState)||(Oe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function wp(){}function bp(e,n){var t=te,r=en(),a=n(),i=!sn(r.memoizedState,a);if(i&&(r.memoizedState=a,Oe=!0),r=r.queue,_s(Ep.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,Ur(9,kp.bind(null,t,r,a,n),void 0,null),he===null)throw Error(L(349));dt&30||Sp(t,n,a)}return a}function Sp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function kp(e,n,t,r){n.value=t,n.getSnapshot=r,_p(n)&&Rp(e)}function Ep(e,n,t){return t(function(){_p(n)&&Rp(e)})}function _p(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function Rp(e){var n=Tn(e,1);n!==null&&ln(n,e,1,-1)}function Uc(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sh.bind(null,te,e),[n.memoizedState,e]}function Ur(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Tp(){return en().memoizedState}function Ia(e,n,t,r){var a=mn();te.flags|=e,a.memoizedState=Ur(1|n,t,void 0,r===void 0?null:r)}function Li(e,n,t,r){var a=en();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&Ss(r,o.deps)){a.memoizedState=Ur(n,t,i,r);return}}te.flags|=e,a.memoizedState=Ur(1|n,t,i,r)}function $c(e,n){return Ia(8390656,8,e,n)}function _s(e,n){return Li(2048,8,e,n)}function Cp(e,n){return Li(4,2,e,n)}function Lp(e,n){return Li(4,4,e,n)}function Ap(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Np(e,n,t){return t=t!=null?t.concat([e]):null,Li(4,4,Ap.bind(null,n,e),t)}function Rs(){}function jp(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Pp(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Dp(e,n,t){return dt&21?(sn(t,n)||(t=zd(),te.lanes|=t,pt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=t)}function wh(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=So.transition;So.transition={};try{e(!1),n()}finally{$=t,So.transition=r}}function Op(){return en().memoizedState}function bh(e,n,t){var r=Kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ip(e))Fp(n,t);else if(t=xp(e,n,t,r),t!==null){var a=Ae();ln(t,e,r,a),Bp(t,n,r)}}function Sh(e,n,t){var r=Kn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))Fp(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(a.hasEagerState=!0,a.eagerState=l,sn(l,o)){var s=n.interleaved;s===null?(a.next=a,xs(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=xp(e,n,a,r),t!==null&&(a=Ae(),ln(t,e,r,a),Bp(t,n,r))}}function Ip(e){var n=e.alternate;return e===te||n!==null&&n===te}function Fp(e,n){kr=li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Bp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,rs(e,t)}}var si={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},kh={readContext:Ze,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:$c,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ia(4194308,4,Ap.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ia(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ia(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bh.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:Uc,useDebugValue:Rs,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Uc(!1),n=e[0];return e=wh.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=te,a=mn();if(Z){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),he===null)throw Error(L(349));dt&30||Sp(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,$c(Ep.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,kp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=mn(),n=he.identifierPrefix;if(Z){var t=kn,r=Sn;t=(r&~(1<<32-on(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=yh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Eh={readContext:Ze,useCallback:jp,useContext:Ze,useEffect:_s,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:Lp,useMemo:Pp,useReducer:ko,useRef:Tp,useState:function(){return ko(Hr)},useDebugValue:Rs,useDeferredValue:function(e){var n=en();return Dp(n,fe.memoizedState,e)},useTransition:function(){var e=ko(Hr)[0],n=en().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:bp,useId:Op,unstable_isNewReconciler:!1},_h={readContext:Ze,useCallback:jp,useContext:Ze,useEffect:_s,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:Lp,useMemo:Pp,useReducer:Eo,useRef:Tp,useState:function(){return Eo(Hr)},useDebugValue:Rs,useDeferredValue:function(e){var n=en();return fe===null?n.memoizedState=e:Dp(n,fe.memoizedState,e)},useTransition:function(){var e=Eo(Hr)[0],n=en().memoizedState;return[e,n]},useMutableSource:wp,useSyncExternalStore:bp,useId:Op,unstable_isNewReconciler:!1};function tn(e,n){if(e&&e.defaultProps){n=re({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function gl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:re({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ai={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ae(),a=Kn(e),i=En(r,a);i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,a),n!==null&&(ln(n,e,a,r),Da(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ae(),a=Kn(e),i=En(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Un(e,i,a),n!==null&&(ln(n,e,a,r),Da(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ae(),r=Kn(e),a=En(t,r);a.tag=2,n!=null&&(a.callback=n),n=Un(e,a,r),n!==null&&(ln(n,e,r,t),Da(n,e,r))}};function Kc(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Dr(t,r)||!Dr(a,i):!0}function zp(e,n,t){var r=!1,a=Gn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(a=Fe(n)?ct:Re.current,r=n.contextTypes,i=(r=r!=null)?$t(e,a):Gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ai,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function Vc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ai.enqueueReplaceState(n,n.state,null)}function hl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},vs(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Ze(i):(i=Fe(n)?ct:Re.current,a.context=$t(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(gl(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ai.enqueueReplaceState(a,a.state,null),ii(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function qt(e,n){try{var t="",r=n;do t+=Zm(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function _o(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function xl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Rh=typeof WeakMap=="function"?WeakMap:Map;function Mp(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ui||(ui=!0,Tl=r),xl(e,n)},t}function Hp(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){xl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){xl(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Wc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Rh;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Mh.bind(null,e,n,t),n.then(e,e))}function qc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Gc(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var Th=Ln.ReactCurrentOwner,Oe=!1;function Ce(e,n,t,r){n.child=e===null?hp(n,null,t,r):Vt(n,e.child,t,r)}function Yc(e,n,t,r,a){t=t.render;var i=n.ref;return Mt(n,a),r=ks(e,n,t,r,i,a),t=Es(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Cn(e,n,a)):(Z&&t&&ds(n),n.flags|=1,Ce(e,n,r,a),n.child)}function Qc(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Ds(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Up(e,n,i,r,a)):(e=Ma(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Dr,t(o,r)&&e.ref===n.ref)return Cn(e,n,a)}return n.flags|=1,e=Vn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Up(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(Dr(i,r)&&e.ref===n.ref)if(Oe=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Oe=!0);else return n.lanes=e.lanes,Cn(e,n,a)}return vl(e,n,t,r,a)}function $p(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Ot,He),He|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(Ot,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,W(Ot,He),He|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,W(Ot,He),He|=r;return Ce(e,n,a,t),n.child}function Kp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function vl(e,n,t,r,a){var i=Fe(t)?ct:Re.current;return i=$t(n,i),Mt(n,a),t=ks(e,n,t,r,i,a),r=Es(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Cn(e,n,a)):(Z&&r&&ds(n),n.flags|=1,Ce(e,n,t,a),n.child)}function Jc(e,n,t,r,a){if(Fe(t)){var i=!0;ei(n)}else i=!1;if(Mt(n,a),n.stateNode===null)Fa(e,n),zp(n,t,r),hl(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ze(c):(c=Fe(t)?ct:Re.current,c=$t(n,c));var d=t.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Vc(n,o,r,c),jn=!1;var g=n.memoizedState;o.state=g,ii(n,r,o,a),s=n.memoizedState,l!==r||g!==s||Ie.current||jn?(typeof d=="function"&&(gl(n,t,d,r),s=n.memoizedState),(l=jn||Kc(n,t,l,r,g,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,vp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:tn(n.type,l),o.props=c,p=n.pendingProps,g=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ze(s):(s=Fe(t)?ct:Re.current,s=$t(n,s));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==s)&&Vc(n,o,r,s),jn=!1,g=n.memoizedState,o.state=g,ii(n,r,o,a);var m=n.memoizedState;l!==p||g!==m||Ie.current||jn?(typeof y=="function"&&(gl(n,t,y,r),m=n.memoizedState),(c=jn||Kc(n,t,c,r,g,m,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return yl(e,n,t,r,i,a)}function yl(e,n,t,r,a,i){Kp(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&Ic(n,t,!1),Cn(e,n,i);r=n.stateNode,Th.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Vt(n,e.child,null,i),n.child=Vt(n,null,l,i)):Ce(e,n,l,i),n.memoizedState=r.state,a&&Ic(n,t,!0),n.child}function Vp(e){var n=e.stateNode;n.pendingContext?Oc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Oc(e,n.context,!1),ys(e,n.containerInfo)}function Xc(e,n,t,r,a){return Kt(),fs(a),n.flags|=256,Ce(e,n,t,r),n.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wp(e,n,t){var r=n.pendingProps,a=ne.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(ne,a&1),e===null)return fl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Pi(o,r,0,null),e=lt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=bl(t),n.memoizedState=wl,e):Ts(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Ch(e,n,o,r,l,a,t);if(i){i=r.fallback,o=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Vn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Vn(l,i):(i=lt(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?bl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=wl,r}return i=e.child,e=i.sibling,r=Vn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ts(e,n){return n=Pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ka(e,n,t,r){return r!==null&&fs(r),Vt(n,e.child,null,t),e=Ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ch(e,n,t,r,a,i,o){if(t)return n.flags&256?(n.flags&=-257,r=_o(Error(L(422))),ka(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Pi({mode:"visible",children:r.children},a,0,null),i=lt(i,a,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Vt(n,e.child,null,o),n.child.memoizedState=bl(o),n.memoizedState=wl,i);if(!(n.mode&1))return ka(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=_o(i,r,void 0),ka(e,n,o,r)}if(l=(o&e.childLanes)!==0,Oe||l){if(r=he,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Tn(e,a),ln(r,e,a,-1))}return Ps(),r=_o(Error(L(421))),ka(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Hh.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Ue=Hn(a.nextSibling),$e=n,Z=!0,an=null,e!==null&&(Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=ut,Sn=e.id,kn=e.overflow,ut=n),n=Ts(n,r.children),n.flags|=4096,n)}function Zc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ml(e.return,n,t)}function Ro(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function qp(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Ce(e,n,r.children,t),r=ne.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,t,n);else if(e.tag===19)Zc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(ne,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&oi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ro(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&oi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ro(n,!0,t,null,i);break;case"together":Ro(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fa(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=Vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Lh(e,n,t){switch(n.tag){case 3:Vp(n),Kt();break;case 5:yp(n);break;case 1:Fe(n.type)&&ei(n);break;case 4:ys(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;W(ri,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(ne,ne.current&1),n.flags|=128,null):t&n.child.childLanes?Wp(e,n,t):(W(ne,ne.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);W(ne,ne.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return qp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(ne,ne.current),r)break;return null;case 22:case 23:return n.lanes=0,$p(e,n,t)}return Cn(e,n,t)}var Gp,Sl,Yp,Qp;Gp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sl=function(){};Yp=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,at(vn.current);var i=null;switch(t){case"input":a=Ko(e,a),r=Ko(e,r),i=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),i=[];break;case"textarea":a=qo(e,a),r=qo(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}Yo(t,r);var o;t=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Y("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Qp=function(e,n,t,r){t!==r&&(n.flags|=4)};function sr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ah(e,n,t){var r=n.pendingProps;switch(ps(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return Fe(n.type)&&Za(),ke(n),null;case 3:return r=n.stateNode,Wt(),J(Ie),J(Re),bs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ba(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(Al(an),an=null))),Sl(e,n),ke(n),null;case 5:ws(n);var a=at(zr.current);if(t=n.type,e!==null&&n.stateNode!=null)Yp(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(L(166));return ke(n),null}if(e=at(vn.current),ba(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[gn]=n,r[Fr]=i,e=(n.mode&1)!==0,t){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(a=0;a<xr.length;a++)Y(xr[a],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":sc(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":uc(r,i),Y("invalid",r)}Yo(t,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&wa(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&wa(r.textContent,l,e),a=["children",""+l]):Tr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(t){case"input":pa(r),cc(r,i,!0);break;case"textarea":pa(r),dc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xa)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ed(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[gn]=n,e[Fr]=r,Gp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Qo(t,r),t){case"dialog":Y("cancel",e),Y("close",e),a=r;break;case"iframe":case"object":case"embed":Y("load",e),a=r;break;case"video":case"audio":for(a=0;a<xr.length;a++)Y(xr[a],e);a=r;break;case"source":Y("error",e),a=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=r;break;case"details":Y("toggle",e),a=r;break;case"input":sc(e,r),a=Ko(e,r),Y("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),Y("invalid",e);break;case"textarea":uc(e,r),a=qo(e,r),Y("invalid",e);break;default:a=r}Yo(t,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Td(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_d(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&Jl(e,i,s,o))}switch(t){case"input":pa(e),cc(e,r,!1);break;case"textarea":pa(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?It(e,!!r.multiple,i,!1):r.defaultValue!=null&&It(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xa)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ke(n),null;case 6:if(e&&n.stateNode!=null)Qp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(L(166));if(t=at(zr.current),at(vn.current),ba(n)){if(r=n.stateNode,t=n.memoizedProps,r[gn]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:wa(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wa(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[gn]=n,n.stateNode=r}return ke(n),null;case 13:if(J(ne),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&n.mode&1&&!(n.flags&128))mp(),Kt(),n.flags|=98560,i=!1;else if(i=ba(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[gn]=n}else Kt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ke(n),i=!1}else an!==null&&(Al(an),an=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ne.current&1?me===0&&(me=3):Ps())),n.updateQueue!==null&&(n.flags|=4),ke(n),null);case 4:return Wt(),Sl(e,n),e===null&&Or(n.stateNode.containerInfo),ke(n),null;case 10:return hs(n.type._context),ke(n),null;case 17:return Fe(n.type)&&Za(),ke(n),null;case 19:if(J(ne),i=n.memoizedState,i===null)return ke(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)sr(i,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=oi(e),o!==null){for(n.flags|=128,sr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(ne,ne.current&1|2),n.child}e=e.sibling}i.tail!==null&&se()>Gt&&(n.flags|=128,r=!0,sr(i,!1),n.lanes=4194304)}else{if(!r)if(e=oi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return ke(n),null}else 2*se()-i.renderingStartTime>Gt&&t!==1073741824&&(n.flags|=128,r=!0,sr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=se(),n.sibling=null,t=ne.current,W(ne,r?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return js(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function Nh(e,n){switch(ps(n),n.tag){case 1:return Fe(n.type)&&Za(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wt(),J(Ie),J(Re),bs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ws(n),null;case 13:if(J(ne),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(ne),null;case 4:return Wt(),null;case 10:return hs(n.type._context),null;case 22:case 23:return js(),null;case 24:return null;default:return null}}var Ea=!1,Ee=!1,jh=typeof WeakSet=="function"?WeakSet:Set,D=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function kl(e,n,t){try{t()}catch(r){ae(e,n,r)}}var eu=!1;function Ph(e,n){if(ol=Ya,e=np(),us(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,c=0,d=0,p=e,g=null;n:for(;;){for(var y;p!==t||a!==0&&p.nodeType!==3||(l=o+a),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break n;if(g===t&&++c===a&&(l=o),g===i&&++d===r&&(s=o),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ll={focusedElem:e,selectionRange:t},Ya=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,b=m.memoizedState,x=n.stateNode,f=x.getSnapshotBeforeUpdate(n.elementType===n.type?v:tn(n.type,v),b);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(S){ae(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return m=eu,eu=!1,m}function Er(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&kl(n,t,i)}a=a.next}while(a!==r)}}function Ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function El(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Jp(e){var n=e.alternate;n!==null&&(e.alternate=null,Jp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[Fr],delete n[ul],delete n[gh],delete n[hh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xp(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _l(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(_l(e,n,t),e=e.sibling;e!==null;)_l(e,n,t),e=e.sibling}function Rl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,n,t),e=e.sibling;e!==null;)Rl(e,n,t),e=e.sibling}var ye=null,rn=!1;function An(e,n,t){for(t=t.child;t!==null;)Zp(e,n,t),t=t.sibling}function Zp(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(ki,t)}catch{}switch(t.tag){case 5:Ee||Dt(t,n);case 6:var r=ye,a=rn;ye=null,An(e,n,t),ye=r,rn=a,ye!==null&&(rn?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(rn?(e=ye,t=t.stateNode,e.nodeType===8?yo(e.parentNode,t):e.nodeType===1&&yo(e,t),jr(e)):yo(ye,t.stateNode));break;case 4:r=ye,a=rn,ye=t.stateNode.containerInfo,rn=!0,An(e,n,t),ye=r,rn=a;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&kl(t,n,o),a=a.next}while(a!==r)}An(e,n,t);break;case 1:if(!Ee&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ae(t,n,l)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,An(e,n,t),Ee=r):An(e,n,t);break;default:An(e,n,t)}}function tu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new jh),n.forEach(function(r){var a=Uh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function nn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,rn=!1;break e;case 3:ye=l.stateNode.containerInfo,rn=!0;break e;case 4:ye=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(ye===null)throw Error(L(160));Zp(i,o,a),ye=null,rn=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(c){ae(a,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ef(n,e),n=n.sibling}function ef(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(n,e),pn(e),r&4){try{Er(3,e,e.return),Ni(3,e)}catch(v){ae(e,e.return,v)}try{Er(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:nn(n,e),pn(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(nn(n,e),pn(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var a=e.stateNode;try{Cr(a,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Sd(a,i),Qo(l,o);var c=Qo(l,i);for(o=0;o<s.length;o+=2){var d=s[o],p=s[o+1];d==="style"?Td(a,p):d==="dangerouslySetInnerHTML"?_d(a,p):d==="children"?Cr(a,p):Jl(a,d,p,c)}switch(l){case"input":Vo(a,i);break;case"textarea":kd(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?It(a,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?It(a,!!i.multiple,i.defaultValue,!0):It(a,!!i.multiple,i.multiple?[]:"",!1))}a[Fr]=i}catch(v){ae(e,e.return,v)}}break;case 6:if(nn(n,e),pn(e),r&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(v){ae(e,e.return,v)}}break;case 3:if(nn(n,e),pn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:nn(n,e),pn(e);break;case 13:nn(n,e),pn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(As=se())),r&4&&tu(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||d,nn(n,e),Ee=c):nn(n,e),pn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(p=D=d;D!==null;){switch(g=D,y=g.child,g.tag){case 0:case 11:case 14:case 15:Er(4,g,g.return);break;case 1:Dt(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(v){ae(r,t,v)}}break;case 5:Dt(g,g.return);break;case 22:if(g.memoizedState!==null){au(p);continue}}y!==null?(y.return=g,D=y):au(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Rd("display",o))}catch(v){ae(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){ae(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(n,e),pn(e),r&4&&tu(e);break;case 21:break;default:nn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Xp(t)){var r=t;break e}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Cr(a,""),r.flags&=-33);var i=nu(e);Rl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=nu(e);_l(e,l,o);break;default:throw Error(L(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dh(e,n,t){D=e,nf(e)}function nf(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var a=D,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ea;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=Ea;var c=Ee;if(Ea=o,(Ee=s)&&!c)for(D=a;D!==null;)o=D,s=o.child,o.tag===22&&o.memoizedState!==null?iu(a):s!==null?(s.return=o,D=s):iu(a);for(;i!==null;)D=i,nf(i),i=i.sibling;D=a,Ea=l,Ee=c}ru(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,D=i):ru(e)}}function ru(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||Ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:tn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Hc(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hc(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&jr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ee||n.flags&512&&El(n)}catch(g){ae(n,n.return,g)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function au(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function iu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ni(4,n)}catch(s){ae(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){ae(n,a,s)}}var i=n.return;try{El(n)}catch(s){ae(n,i,s)}break;case 5:var o=n.return;try{El(n)}catch(s){ae(n,o,s)}}}catch(s){ae(n,n.return,s)}if(n===e){D=null;break}var l=n.sibling;if(l!==null){l.return=n.return,D=l;break}D=n.return}}var Oh=Math.ceil,ci=Ln.ReactCurrentDispatcher,Cs=Ln.ReactCurrentOwner,Xe=Ln.ReactCurrentBatchConfig,U=0,he=null,de=null,we=0,He=0,Ot=Qn(0),me=0,$r=null,pt=0,ji=0,Ls=0,_r=null,De=null,As=0,Gt=1/0,wn=null,ui=!1,Tl=null,$n=null,_a=!1,In=null,di=0,Rr=0,Cl=null,Ba=-1,za=0;function Ae(){return U&6?se():Ba!==-1?Ba:Ba=se()}function Kn(e){return e.mode&1?U&2&&we!==0?we&-we:vh.transition!==null?(za===0&&(za=zd()),za):(e=$,e!==0||(e=window.event,e=e===void 0?16:Wd(e.type)),e):1}function ln(e,n,t,r){if(50<Rr)throw Rr=0,Cl=null,Error(L(185));Gr(e,t,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(ji|=t),me===4&&Dn(e,we)),Be(e,r),t===1&&U===0&&!(n.mode&1)&&(Gt=se()+500,Ci&&Jn()))}function Be(e,n){var t=e.callbackNode;vg(e,n);var r=Ga(e,e===he?we:0);if(r===0)t!==null&&mc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&mc(t),n===1)e.tag===0?xh(ou.bind(null,e)):dp(ou.bind(null,e)),fh(function(){!(U&6)&&Jn()}),t=null;else{switch(Md(r)){case 1:t=ts;break;case 4:t=Fd;break;case 16:t=qa;break;case 536870912:t=Bd;break;default:t=qa}t=uf(t,tf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function tf(e,n){if(Ba=-1,za=0,U&6)throw Error(L(327));var t=e.callbackNode;if(Ht()&&e.callbackNode!==t)return null;var r=Ga(e,e===he?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=pi(e,r);else{n=r;var a=U;U|=2;var i=af();(he!==e||we!==n)&&(wn=null,Gt=se()+500,ot(e,n));do try{Bh();break}catch(l){rf(e,l)}while(!0);gs(),ci.current=i,U=a,de!==null?n=0:(he=null,we=0,n=me)}if(n!==0){if(n===2&&(a=nl(e),a!==0&&(r=a,n=Ll(e,a))),n===1)throw t=$r,ot(e,0),Dn(e,r),Be(e,se()),t;if(n===6)Dn(e,r);else{if(a=e.current.alternate,!(r&30)&&!Ih(a)&&(n=pi(e,r),n===2&&(i=nl(e),i!==0&&(r=i,n=Ll(e,i))),n===1))throw t=$r,ot(e,0),Dn(e,r),Be(e,se()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(L(345));case 2:et(e,De,wn);break;case 3:if(Dn(e,r),(r&130023424)===r&&(n=As+500-se(),10<n)){if(Ga(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=cl(et.bind(null,e,De,wn),n);break}et(e,De,wn);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-on(r);i=1<<o,o=n[o],o>a&&(a=o),r&=~i}if(r=a,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Oh(r/1960))-r,10<r){e.timeoutHandle=cl(et.bind(null,e,De,wn),r);break}et(e,De,wn);break;case 5:et(e,De,wn);break;default:throw Error(L(329))}}}return Be(e,se()),e.callbackNode===t?tf.bind(null,e):null}function Ll(e,n){var t=_r;return e.current.memoizedState.isDehydrated&&(ot(e,n).flags|=256),e=pi(e,n),e!==2&&(n=De,De=t,n!==null&&Al(n)),e}function Al(e){De===null?De=e:De.push.apply(De,e)}function Ih(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!sn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(e,n){for(n&=~Ls,n&=~ji,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),r=1<<t;e[t]=-1,n&=~r}}function ou(e){if(U&6)throw Error(L(327));Ht();var n=Ga(e,0);if(!(n&1))return Be(e,se()),null;var t=pi(e,n);if(e.tag!==0&&t===2){var r=nl(e);r!==0&&(n=r,t=Ll(e,r))}if(t===1)throw t=$r,ot(e,0),Dn(e,n),Be(e,se()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,et(e,De,wn),Be(e,se()),null}function Ns(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Gt=se()+500,Ci&&Jn())}}function ft(e){In!==null&&In.tag===0&&!(U&6)&&Ht();var n=U;U|=1;var t=Xe.transition,r=$;try{if(Xe.transition=null,$=1,e)return e()}finally{$=r,Xe.transition=t,U=n,!(U&6)&&Jn()}}function js(){He=Ot.current,J(Ot)}function ot(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ph(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Za();break;case 3:Wt(),J(Ie),J(Re),bs();break;case 5:ws(r);break;case 4:Wt();break;case 13:J(ne);break;case 19:J(ne);break;case 10:hs(r.type._context);break;case 22:case 23:js()}t=t.return}if(he=e,de=e=Vn(e.current,null),we=He=n,me=0,$r=null,Ls=ji=pt=0,De=_r=null,rt!==null){for(n=0;n<rt.length;n++)if(t=rt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}t.pending=r}rt=null}return e}function rf(e,n){do{var t=de;try{if(gs(),Oa.current=si,li){for(var r=te.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}li=!1}if(dt=0,ge=fe=te=null,kr=!1,Mr=0,Cs.current=null,t===null||t.return===null){me=1,$r=n,de=null;break}e:{var i=e,o=t.return,l=t,s=n;if(n=we,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=qc(o);if(y!==null){y.flags&=-257,Gc(y,o,l,i,n),y.mode&1&&Wc(i,c,n),n=y,s=c;var m=n.updateQueue;if(m===null){var v=new Set;v.add(s),n.updateQueue=v}else m.add(s);break e}else{if(!(n&1)){Wc(i,c,n),Ps();break e}s=Error(L(426))}}else if(Z&&l.mode&1){var b=qc(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Gc(b,o,l,i,n),fs(qt(s,l));break e}}i=s=qt(s,l),me!==4&&(me=2),_r===null?_r=[i]:_r.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var x=Mp(i,s,n);Mc(i,x);break e;case 1:l=s;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($n===null||!$n.has(h)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Hp(i,l,n);Mc(i,S);break e}}i=i.return}while(i!==null)}lf(t)}catch(E){n=E,de===t&&t!==null&&(de=t=t.return);continue}break}while(!0)}function af(){var e=ci.current;return ci.current=si,e===null?si:e}function Ps(){(me===0||me===3||me===2)&&(me=4),he===null||!(pt&268435455)&&!(ji&268435455)||Dn(he,we)}function pi(e,n){var t=U;U|=2;var r=af();(he!==e||we!==n)&&(wn=null,ot(e,n));do try{Fh();break}catch(a){rf(e,a)}while(!0);if(gs(),U=t,ci.current=r,de!==null)throw Error(L(261));return he=null,we=0,me}function Fh(){for(;de!==null;)of(de)}function Bh(){for(;de!==null&&!cg();)of(de)}function of(e){var n=cf(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?lf(e):de=n,Cs.current=null}function lf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Nh(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(t=Ah(t,n,He),t!==null){de=t;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);me===0&&(me=5)}function et(e,n,t){var r=$,a=Xe.transition;try{Xe.transition=null,$=1,zh(e,n,t,r)}finally{Xe.transition=a,$=r}return null}function zh(e,n,t,r){do Ht();while(In!==null);if(U&6)throw Error(L(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(yg(e,i),e===he&&(de=he=null,we=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_a||(_a=!0,uf(qa,function(){return Ht(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var o=$;$=1;var l=U;U|=4,Cs.current=null,Ph(e,t),ef(t,e),ih(ll),Ya=!!ol,ll=ol=null,e.current=t,Dh(t),ug(),U=l,$=o,Xe.transition=i}else e.current=t;if(_a&&(_a=!1,In=e,di=a),i=e.pendingLanes,i===0&&($n=null),fg(t.stateNode),Be(e,se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(ui)throw ui=!1,e=Tl,Tl=null,e;return di&1&&e.tag!==0&&Ht(),i=e.pendingLanes,i&1?e===Cl?Rr++:(Rr=0,Cl=e):Rr=0,Jn(),null}function Ht(){if(In!==null){var e=Md(di),n=Xe.transition,t=$;try{if(Xe.transition=null,$=16>e?16:e,In===null)var r=!1;else{if(e=In,In=null,di=0,U&6)throw Error(L(331));var a=U;for(U|=4,D=e.current;D!==null;){var i=D,o=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(D=c;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Er(8,d,i)}var p=d.child;if(p!==null)p.return=d,D=p;else for(;D!==null;){d=D;var g=d.sibling,y=d.return;if(Jp(d),d===c){D=null;break}if(g!==null){g.return=y,D=g;break}D=y}}}var m=i.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}D=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,D=o;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,D=x;break e}D=i.return}}var f=e.current;for(D=f;D!==null;){o=D;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,D=h;else e:for(o=f;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ni(9,l)}}catch(E){ae(l,l.return,E)}if(l===o){D=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,D=S;break e}D=l.return}}if(U=a,Jn(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{$=t,Xe.transition=n}}return!1}function lu(e,n,t){n=qt(t,n),n=Mp(e,n,1),e=Un(e,n,1),n=Ae(),e!==null&&(Gr(e,1,n),Be(e,n))}function ae(e,n,t){if(e.tag===3)lu(e,e,t);else for(;n!==null;){if(n.tag===3){lu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=qt(t,e),e=Hp(n,e,1),n=Un(n,e,1),e=Ae(),n!==null&&(Gr(n,1,e),Be(n,e));break}}n=n.return}}function Mh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ae(),e.pingedLanes|=e.suspendedLanes&t,he===e&&(we&t)===t&&(me===4||me===3&&(we&130023424)===we&&500>se()-As?ot(e,0):Ls|=t),Be(e,n)}function sf(e,n){n===0&&(e.mode&1?(n=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):n=1);var t=Ae();e=Tn(e,n),e!==null&&(Gr(e,n,t),Be(e,t))}function Hh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sf(e,t)}function Uh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(n),sf(e,t)}var cf;cf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ie.current)Oe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Oe=!1,Lh(e,n,t);Oe=!!(e.flags&131072)}else Oe=!1,Z&&n.flags&1048576&&pp(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Fa(e,n),e=n.pendingProps;var a=$t(n,Re.current);Mt(n,t),a=ks(null,n,r,e,a,t);var i=Es();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Fe(r)?(i=!0,ei(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,vs(n),a.updater=Ai,n.stateNode=a,a._reactInternals=n,hl(n,r,e,t),n=yl(null,n,r,!0,i,t)):(n.tag=0,Z&&i&&ds(n),Ce(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Fa(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Kh(r),e=tn(r,e),a){case 0:n=vl(null,n,r,e,t);break e;case 1:n=Jc(null,n,r,e,t);break e;case 11:n=Yc(null,n,r,e,t);break e;case 14:n=Qc(null,n,r,tn(r.type,e),t);break e}throw Error(L(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),vl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Jc(e,n,r,a,t);case 3:e:{if(Vp(n),e===null)throw Error(L(387));r=n.pendingProps,i=n.memoizedState,a=i.element,vp(e,n),ii(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=qt(Error(L(423)),n),n=Xc(e,n,r,t,a);break e}else if(r!==a){a=qt(Error(L(424)),n),n=Xc(e,n,r,t,a);break e}else for(Ue=Hn(n.stateNode.containerInfo.firstChild),$e=n,Z=!0,an=null,t=hp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Kt(),r===a){n=Cn(e,n,t);break e}Ce(e,n,r,t)}n=n.child}return n;case 5:return yp(n),e===null&&fl(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,sl(r,a)?o=null:i!==null&&sl(r,i)&&(n.flags|=32),Kp(e,n),Ce(e,n,o,t),n.child;case 6:return e===null&&fl(n),null;case 13:return Wp(e,n,t);case 4:return ys(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Vt(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Yc(e,n,r,a,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,o=a.value,W(ri,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===a.children&&!Ie.current){n=Cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=En(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),ml(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),ml(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ce(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Mt(n,t),a=Ze(a),r=r(a),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return r=n.type,a=tn(r,n.pendingProps),a=tn(r.type,a),Qc(e,n,r,a,t);case 15:return Up(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Fa(e,n),n.tag=1,Fe(r)?(e=!0,ei(n)):e=!1,Mt(n,t),zp(n,r,a),hl(n,r,a,t),yl(null,n,r,!0,e,t);case 19:return qp(e,n,t);case 22:return $p(e,n,t)}throw Error(L(156,n.tag))};function uf(e,n){return Id(e,n)}function $h(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new $h(e,n,t,r)}function Ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kh(e){if(typeof e=="function")return Ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zl)return 11;if(e===es)return 14}return 2}function Vn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ma(e,n,t,r,a,i){var o=2;if(r=e,typeof e=="function")Ds(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case _t:return lt(t.children,a,i,n);case Xl:o=8,a|=8;break;case Mo:return e=Je(12,t,n,a|2),e.elementType=Mo,e.lanes=i,e;case Ho:return e=Je(13,t,n,a),e.elementType=Ho,e.lanes=i,e;case Uo:return e=Je(19,t,n,a),e.elementType=Uo,e.lanes=i,e;case yd:return Pi(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xd:o=10;break e;case vd:o=9;break e;case Zl:o=11;break e;case es:o=14;break e;case Nn:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=Je(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function lt(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function Pi(e,n,t,r){return e=Je(22,e,r,n),e.elementType=yd,e.lanes=t,e.stateNode={isHidden:!1},e}function To(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function Co(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Vh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Os(e,n,t,r,a,i,o,l,s){return e=new Vh(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(i),e}function Wh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function df(e){if(!e)return Gn;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(Fe(t))return up(e,t,n)}return n}function pf(e,n,t,r,a,i,o,l,s){return e=Os(t,r,!0,e,a,i,o,l,s),e.context=df(null),t=e.current,r=Ae(),a=Kn(t),i=En(r,a),i.callback=n??null,Un(t,i,a),e.current.lanes=a,Gr(e,a,r),Be(e,r),e}function Di(e,n,t,r){var a=n.current,i=Ae(),o=Kn(a);return t=df(t),n.context===null?n.context=t:n.pendingContext=t,n=En(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(a,n,o),e!==null&&(ln(e,a,o,i),Da(e,a,o)),o}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Is(e,n){su(e,n),(e=e.alternate)&&su(e,n)}function qh(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}Oi.prototype.render=Fs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));Di(e,n,null,null)};Oi.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ft(function(){Di(null,e,null,null)}),n[Rn]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var n=$d();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pn.length&&n!==0&&n<Pn[t].priority;t++);Pn.splice(t,0,e),t===0&&Vd(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function Gh(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=fi(o);i.call(c)}}var o=pf(n,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=o,e[Rn]=o.current,Or(e.nodeType===8?e.parentNode:e),ft(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var c=fi(s);l.call(c)}}var s=Os(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=s,e[Rn]=s.current,Or(e.nodeType===8?e.parentNode:e),ft(function(){Di(n,s,t,r)}),s}function Fi(e,n,t,r,a){var i=t._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=fi(o);l.call(s)}}Di(n,o,e,a)}else o=Gh(t,n,e,a,r);return fi(o)}Hd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=hr(n.pendingLanes);t!==0&&(rs(n,t|1),Be(n,se()),!(U&6)&&(Gt=se()+500,Jn()))}break;case 13:ft(function(){var r=Tn(e,1);if(r!==null){var a=Ae();ln(r,e,1,a)}}),Is(e,1)}};as=function(e){if(e.tag===13){var n=Tn(e,134217728);if(n!==null){var t=Ae();ln(n,e,134217728,t)}Is(e,134217728)}};Ud=function(e){if(e.tag===13){var n=Kn(e),t=Tn(e,n);if(t!==null){var r=Ae();ln(t,e,n,r)}Is(e,n)}};$d=function(){return $};Kd=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};Xo=function(e,n,t){switch(n){case"input":if(Vo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Ti(r);if(!a)throw Error(L(90));bd(r),Vo(r,a)}}}break;case"textarea":kd(e,t);break;case"select":n=t.value,n!=null&&It(e,!!t.multiple,n,!1)}};Ad=Ns;Nd=ft;var Yh={usingClientEntryPoint:!1,Events:[Qr,Lt,Ti,Cd,Ld,Ns]},cr={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qh={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dd(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||qh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{ki=Ra.inject(Qh),xn=Ra}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh;Ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(n))throw Error(L(200));return Wh(e,n,null,t)};Ve.createRoot=function(e,n){if(!Bs(e))throw Error(L(299));var t=!1,r="",a=ff;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Os(e,1,!1,null,null,t,!1,r,a),e[Rn]=n.current,Or(e.nodeType===8?e.parentNode:e),new Fs(n)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Dd(n),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return ft(e)};Ve.hydrate=function(e,n,t){if(!Ii(n))throw Error(L(200));return Fi(null,e,n,!0,t)};Ve.hydrateRoot=function(e,n,t){if(!Bs(e))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",o=ff;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=pf(n,null,e,1,t??null,a,!1,i,o),e[Rn]=n.current,Or(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Oi(n)};Ve.render=function(e,n,t){if(!Ii(n))throw Error(L(200));return Fi(null,e,n,!1,t)};Ve.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(L(40));return e._reactRootContainer?(ft(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ns;Ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ii(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Fi(e,n,t,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),fd.exports=Ve;var Jh=fd.exports,uu=Jh;Bo.createRoot=uu.createRoot,Bo.hydrateRoot=uu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Kr.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const du="popstate";function Xh(e){e===void 0&&(e={});function n(a,i){let{pathname:o="/",search:l="",hash:s=""}=xt(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Nl("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof i=="string"?i:mi(i))}function r(a,i){Bi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return ex(n,t,r,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Bi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Zh(){return Math.random().toString(36).substr(2,8)}function pu(e,n){return{usr:e.state,key:e.key,idx:n}}function Nl(e,n,t,r){return t===void 0&&(t=null),Kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||r||Zh()})}function mi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function ex(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Fn.Pop,s=null,c=d();c==null&&(c=0,o.replaceState(Kr({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Fn.Pop;let b=d(),x=b==null?null:b-c;c=b,s&&s({action:l,location:v.location,delta:x})}function g(b,x){l=Fn.Push;let f=Nl(v.location,b,x);t&&t(f,b),c=d()+1;let h=pu(f,c),S=v.createHref(f);try{o.pushState(h,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(S)}i&&s&&s({action:l,location:v.location,delta:1})}function y(b,x){l=Fn.Replace;let f=Nl(v.location,b,x);t&&t(f,b),c=d();let h=pu(f,c),S=v.createHref(f);o.replaceState(h,"",S),i&&s&&s({action:l,location:v.location,delta:0})}function m(b){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof b=="string"?b:mi(b);return f=f.replace(/ $/,"%20"),ie(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let v={get action(){return l},get location(){return e(a,o)},listen(b){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(du,p),s=b,()=>{a.removeEventListener(du,p),s=null}},createHref(b){return n(a,b)},createURL:m,encodeLocation(b){let x=m(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:y,go(b){return o.go(b)}};return v}var fu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fu||(fu={}));function nx(e,n,t){return t===void 0&&(t="/"),tx(e,n,t)}function tx(e,n,t,r){let a=typeof n=="string"?xt(n):n,i=Yt(a.pathname||"/",t);if(i==null)return null;let o=gf(e);rx(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let c=mx(i);l=px(o[s],c)}return l}function gf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Wn([r,s.relativePath]),d=t.concat(s);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gf(i.children,n,d,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:ux(c,i.index),routesMeta:d})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of hf(i.path))a(i,o,s)}),n}function hf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=hf(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function rx(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:dx(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ax=/^:[\w-]+$/,ix=3,ox=2,lx=1,sx=10,cx=-2,mu=e=>e==="*";function ux(e,n){let t=e.split("/"),r=t.length;return t.some(mu)&&(r+=cx),n&&(r+=ox),t.filter(a=>!mu(a)).reduce((a,i)=>a+(ax.test(i)?ix:i===""?lx:sx),r)}function dx(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function px(e,n,t){let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,d=i==="/"?n:n.slice(i.length)||"/",p=jl({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d),g=s.route;if(!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:Wn([i,p.pathname]),pathnameBase:yx(Wn([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Wn([i,p.pathnameBase]))}return o}function jl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=fx(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:y}=d;if(g==="*"){let v=l[p]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const m=l[p];return y&&!m?c[g]=void 0:c[g]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function fx(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Bi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function mx(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Bi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Yt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const gx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hx=e=>gx.test(e);function xx(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?xt(e):e,i;if(t)if(hx(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Bi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?i=gu(t.substring(1),"/"):i=gu(t,n)}else i=n;return{pathname:i,search:wx(r),hash:bx(a)}}function gu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Lo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vx(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function xf(e,n){let t=vx(e);return n?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function vf(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=xt(e):(a=Kr({},e),ie(!a.pathname||!a.pathname.includes("?"),Lo("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),Lo("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),Lo("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=t;else{let p=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}l=p>=0?n[p]:"/"}let s=xx(a,l),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),yx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yf=["post","put","patch","delete"];new Set(yf);const kx=["get",...yf];new Set(kx);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vr.apply(this,arguments)}const zi=w.createContext(null),wf=w.createContext(null),Xn=w.createContext(null),Mi=w.createContext(null),vt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),bf=w.createContext(null);function Ex(e,n){let{relative:t}=n===void 0?{}:n;Xr()||ie(!1);let{basename:r,navigator:a}=w.useContext(Xn),{hash:i,pathname:o,search:l}=Hi(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Wn([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Xr(){return w.useContext(Mi)!=null}function Zr(){return Xr()||ie(!1),w.useContext(Mi).location}function Sf(e){w.useContext(Xn).static||w.useLayoutEffect(e)}function _x(){let{isDataRoute:e}=w.useContext(vt);return e?Bx():Rx()}function Rx(){Xr()||ie(!1);let e=w.useContext(zi),{basename:n,future:t,navigator:r}=w.useContext(Xn),{matches:a}=w.useContext(vt),{pathname:i}=Zr(),o=JSON.stringify(xf(a,t.v7_relativeSplatPath)),l=w.useRef(!1);return Sf(()=>{l.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=vf(c,JSON.parse(o),i,d.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Wn([n,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[n,r,o,i,e])}function Hi(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(Xn),{matches:a}=w.useContext(vt),{pathname:i}=Zr(),o=JSON.stringify(xf(a,r.v7_relativeSplatPath));return w.useMemo(()=>vf(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function Tx(e,n){return Cx(e,n)}function Cx(e,n,t,r){Xr()||ie(!1);let{navigator:a}=w.useContext(Xn),{matches:i}=w.useContext(vt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Zr(),d;if(n){var p;let b=typeof n=="string"?xt(n):n;s==="/"||(p=b.pathname)!=null&&p.startsWith(s)||ie(!1),d=b}else d=c;let g=d.pathname||"/",y=g;if(s!=="/"){let b=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=nx(e,{pathname:y}),v=Px(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Wn([s,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?s:Wn([s,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,t,r);return n&&v?w.createElement(Mi.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fn.Pop}},v):v}function Lx(){let e=Fx(),n=Sx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:a},t):null,null)}const Ax=w.createElement(Lx,null);class Nx extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(vt.Provider,{value:this.props.routeContext},w.createElement(bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jx(e){let{routeContext:n,match:t,children:r}=e,a=w.useContext(zi);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(vt.Provider,{value:n},r)}function Px(e,n,t,r){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ie(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:y}=t,m=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||m){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let y,m=!1,v=null,b=null;t&&(y=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||Ax,s&&(c<0&&g===0?(zx("route-fallback"),m=!0,b=null):c===g&&(m=!0,b=p.route.hydrateFallbackElement||null)));let x=n.concat(o.slice(0,g+1)),f=()=>{let h;return y?h=v:m?h=b:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,w.createElement(jx,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:t!=null},children:h})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?w.createElement(Nx,{location:t.location,revalidation:t.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var kf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kf||{}),Ef=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ef||{});function Dx(e){let n=w.useContext(zi);return n||ie(!1),n}function Ox(e){let n=w.useContext(wf);return n||ie(!1),n}function Ix(e){let n=w.useContext(vt);return n||ie(!1),n}function _f(e){let n=Ix(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function Fx(){var e;let n=w.useContext(bf),t=Ox(),r=_f();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Bx(){let{router:e}=Dx(kf.UseNavigateStable),n=_f(Ef.UseNavigateStable),t=w.useRef(!1);return Sf(()=>{t.current=!0}),w.useCallback(function(a,i){i===void 0&&(i={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Vr({fromRouteId:n},i)))},[e,n])}const hu={};function zx(e,n,t){hu[e]||(hu[e]=!0)}function Mx(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kt(e){ie(!1)}function Hx(e){let{basename:n="/",children:t=null,location:r,navigationType:a=Fn.Pop,navigator:i,static:o=!1,future:l}=e;Xr()&&ie(!1);let s=n.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:s,navigator:i,static:o,future:Vr({v7_relativeSplatPath:!1},l)}),[s,l,i,o]);typeof r=="string"&&(r=xt(r));let{pathname:d="/",search:p="",hash:g="",state:y=null,key:m="default"}=r,v=w.useMemo(()=>{let b=Yt(d,s);return b==null?null:{location:{pathname:b,search:p,hash:g,state:y,key:m},navigationType:a}},[s,d,p,g,y,m,a]);return v==null?null:w.createElement(Xn.Provider,{value:c},w.createElement(Mi.Provider,{children:t,value:v}))}function Ux(e){let{children:n,location:t}=e;return Tx(Pl(n),t)}new Promise(()=>{});function Pl(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,a)=>{if(!w.isValidElement(r))return;let i=[...n,a];if(r.type===w.Fragment){t.push.apply(t,Pl(r.props.children,i));return}r.type!==kt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pl(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},gi.apply(this,arguments)}function Rf(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function $x(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kx(e,n){return e.button===0&&(!n||n==="_self")&&!$x(e)}const Vx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],qx="6";try{window.__reactRouterVersion=qx}catch{}const Gx=w.createContext({isTransitioning:!1}),Yx="startTransition",xu=Mm[Yx];function Qx(e){let{basename:n,children:t,future:r,window:a}=e,i=w.useRef();i.current==null&&(i.current=Xh({window:a,v5Compat:!0}));let o=i.current,[l,s]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=w.useCallback(p=>{c&&xu?xu(()=>s(p)):s(p)},[s,c]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>Mx(r),[r]),w.createElement(Hx,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const Jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zx=w.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:c,preventScrollReset:d,viewTransition:p}=n,g=Rf(n,Vx),{basename:y}=w.useContext(Xn),m,v=!1;if(typeof c=="string"&&Xx.test(c)&&(m=c,Jx))try{let h=new URL(window.location.href),S=c.startsWith("//")?new URL(h.protocol+c):new URL(c),E=Yt(S.pathname,y);S.origin===h.origin&&E!=null?c=E+S.search+S.hash:v=!0}catch{}let b=Ex(c,{relative:a}),x=nv(c,{replace:o,state:l,target:s,preventScrollReset:d,relative:a,viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||x(h)}return w.createElement("a",gi({},g,{href:m||b,onClick:v||i?r:f,ref:t,target:s}))}),ur=w.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:c,children:d}=n,p=Rf(n,Wx),g=Hi(s,{relative:p.relative}),y=Zr(),m=w.useContext(wf),{navigator:v,basename:b}=w.useContext(Xn),x=m!=null&&tv(g)&&c===!0,f=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,h=y.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(h=h.toLowerCase(),S=S?S.toLowerCase():null,f=f.toLowerCase()),S&&b&&(S=Yt(S,b)||S);const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let T=h===f||!o&&h.startsWith(f)&&h.charAt(E)==="/",_=S!=null&&(S===f||!o&&S.startsWith(f)&&S.charAt(f.length)==="/"),C={isActive:T,isPending:_,isTransitioning:x},R=T?r:void 0,P;typeof i=="function"?P=i(C):P=[i,T?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let q=typeof l=="function"?l(C):l;return w.createElement(Zx,gi({},p,{"aria-current":R,className:P,ref:t,style:q,to:s,viewTransition:c}),typeof d=="function"?d(C):d)});var Dl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dl||(Dl={}));var vu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vu||(vu={}));function ev(e){let n=w.useContext(zi);return n||ie(!1),n}function nv(e,n){let{target:t,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:l}=n===void 0?{}:n,s=_x(),c=Zr(),d=Hi(e,{relative:o});return w.useCallback(p=>{if(Kx(p,t)){p.preventDefault();let g=r!==void 0?r:mi(c)===mi(d);s(e,{replace:g,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[c,s,d,r,a,t,e,i,o,l])}function tv(e,n){n===void 0&&(n={});let t=w.useContext(Gx);t==null&&ie(!1);let{basename:r}=ev(Dl.useViewTransitionState),a=Hi(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Yt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Yt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return jl(a.pathname,o)!=null||jl(a.pathname,i)!=null}var Tf={exports:{}},rv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",av=rv,iv=av;function Cf(){}function Lf(){}Lf.resetWarningCache=Cf;var ov=function(){function e(r,a,i,o,l,s){if(s!==iv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Lf,resetWarningCache:Cf};return t.PropTypes=t,t};Tf.exports=ov();var lv=Tf.exports;const K=nd(lv);function yt(e,n,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function l(d){try{c(r.next(d))}catch(p){o(p)}}function s(d){try{c(r.throw(d))}catch(p){o(p)}}function c(d){d.done?i(d.value):a(d.value).then(l,s)}c((r=r.apply(e,n||[])).next())})}const sv=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Qt(e,n,t){const r=cv(e),{webkitRelativePath:a}=e,i=typeof n=="string"?n:typeof a=="string"&&a.length>0?a:`./${e.name}`;return typeof r.path!="string"&&yu(r,"path",i),yu(r,"relativePath",i),r}function cv(e){const{name:n}=e;if(n&&n.lastIndexOf(".")!==-1&&!e.type){const r=n.split(".").pop().toLowerCase(),a=sv.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}function yu(e,n,t){Object.defineProperty(e,n,{value:t,writable:!1,configurable:!1,enumerable:!0})}const uv=[".DS_Store","Thumbs.db"];function dv(e){return yt(this,void 0,void 0,function*(){return hi(e)&&pv(e.dataTransfer)?hv(e.dataTransfer,e.type):fv(e)?mv(e):Array.isArray(e)&&e.every(n=>"getFile"in n&&typeof n.getFile=="function")?gv(e):[]})}function pv(e){return hi(e)}function fv(e){return hi(e)&&hi(e.target)}function hi(e){return typeof e=="object"&&e!==null}function mv(e){return Ol(e.target.files).map(n=>Qt(n))}function gv(e){return yt(this,void 0,void 0,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>Qt(t))})}function hv(e,n){return yt(this,void 0,void 0,function*(){if(e.items){const t=Ol(e.items).filter(a=>a.kind==="file");if(n!=="drop")return t;const r=yield Promise.all(t.map(xv));return wu(Af(r))}return wu(Ol(e.files).map(t=>Qt(t)))})}function wu(e){return e.filter(n=>uv.indexOf(n.name)===-1)}function Ol(e){if(e===null)return[];const n=[];for(let t=0;t<e.length;t++){const r=e[t];n.push(r)}return n}function xv(e){if(typeof e.webkitGetAsEntry!="function")return bu(e);const n=e.webkitGetAsEntry();return n&&n.isDirectory?Nf(n):bu(e,n)}function Af(e){return e.reduce((n,t)=>[...n,...Array.isArray(t)?Af(t):[t]],[])}function bu(e,n){return yt(this,void 0,void 0,function*(){var t;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const i=yield e.getAsFileSystemHandle();if(i===null)throw new Error(`${e} is not a File`);if(i!==void 0){const o=yield i.getFile();return o.handle=i,Qt(o)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return Qt(r,(t=n==null?void 0:n.fullPath)!==null&&t!==void 0?t:void 0)})}function vv(e){return yt(this,void 0,void 0,function*(){return e.isDirectory?Nf(e):yv(e)})}function Nf(e){const n=e.createReader();return new Promise((t,r)=>{const a=[];function i(){n.readEntries(o=>yt(this,void 0,void 0,function*(){if(o.length){const l=Promise.all(o.map(vv));a.push(l),i()}else try{const l=yield Promise.all(a);t(l)}catch(l){r(l)}}),o=>{r(o)})}i()})}function yv(e){return yt(this,void 0,void 0,function*(){return new Promise((n,t)=>{e.file(r=>{const a=Qt(r,e.fullPath);n(a)},r=>{t(r)})})})}var Ao=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(",");if(t.length===0)return!0;var r=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return t.some(function(o){var l=o.trim().toLowerCase();return l.charAt(0)==="."?r.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):a===l})}return!0};function Su(e){return Sv(e)||bv(e)||Pf(e)||wv()}function wv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sv(e){if(Array.isArray(e))return Il(e)}function ku(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Eu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ku(Object(t),!0).forEach(function(r){jf(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ku(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function jf(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Wr(e,n){return _v(e)||Ev(e,n)||Pf(e,n)||kv()}function kv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pf(e,n){if(e){if(typeof e=="string")return Il(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Il(e,n)}}function Il(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ev(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function _v(e){if(Array.isArray(e))return e}var Rv=typeof Ao=="function"?Ao:Ao.default,Tv="file-invalid-type",Cv="file-too-large",Lv="file-too-small",Av="too-many-files",Nv=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=n.split(","),r=t.length>1?"one of ".concat(t.join(", ")):t[0];return{code:Tv,message:"File type must be ".concat(r)}},_u=function(n){return{code:Cv,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},Ru=function(n){return{code:Lv,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},jv={code:Av,message:"Too many files"};function Pv(e){return e.type===""&&typeof e.getAsFile=="function"}function Df(e,n){var t=e.type==="application/x-moz-file"||Rv(e,n)||Pv(e);return[t,t?null:Nv(n)]}function Of(e,n,t){if(nt(e.size))if(nt(n)&&nt(t)){if(e.size>t)return[!1,_u(t)];if(e.size<n)return[!1,Ru(n)]}else{if(nt(n)&&e.size<n)return[!1,Ru(n)];if(nt(t)&&e.size>t)return[!1,_u(t)]}return[!0,null]}function nt(e){return e!=null}function Dv(e){var n=e.files,t=e.accept,r=e.minSize,a=e.maxSize,i=e.multiple,o=e.maxFiles,l=e.validator;return!i&&n.length>1||i&&o>=1&&n.length>o?!1:n.every(function(s){var c=Df(s,t),d=Wr(c,1),p=d[0],g=Of(s,r,a),y=Wr(g,1),m=y[0],v=l?l(s):null;return p&&m&&!v})}function xi(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function dr(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Tu(e){e.preventDefault()}function Ov(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Iv(e){return e.indexOf("Edge/")!==-1}function Fv(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ov(e)||Iv(e)}function fn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return n.some(function(l){return!xi(r)&&l&&l.apply(void 0,[r].concat(i)),xi(r)})}}function Bv(){return"showOpenFilePicker"in window}function zv(e){if(nt(e)){var n=Object.entries(e).filter(function(t){var r=Wr(t,2),a=r[0],i=r[1],o=!0;return If(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),(!Array.isArray(i)||!i.every(Ff))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(t,r){var a=Wr(r,2),i=a[0],o=a[1];return Eu(Eu({},t),{},jf({},i,o))},{});return[{description:"Files",accept:n}]}return e}function Mv(e){if(nt(e))return Object.entries(e).reduce(function(n,t){var r=Wr(t,2),a=r[0],i=r[1];return[].concat(Su(n),[a],Su(i))},[]).filter(function(n){return If(n)||Ff(n)}).join(",")}function Hv(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Uv(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function If(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function Ff(e){return/^.*\.[\w]+$/.test(e)}var $v=["children"],Kv=["open"],Vv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Wv=["refKey","onChange","onClick"];function Cu(e){return Yv(e)||Gv(e)||Bf(e)||qv()}function qv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yv(e){if(Array.isArray(e))return Fl(e)}function No(e,n){return Xv(e)||Jv(e,n)||Bf(e,n)||Qv()}function Qv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bf(e,n){if(e){if(typeof e=="string")return Fl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fl(e,n)}}function Fl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Jv(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Xv(e){if(Array.isArray(e))return e}function Lu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Lu(Object(t),!0).forEach(function(r){Bl(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Bl(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function vi(e,n){if(e==null)return{};var t=Zv(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Zv(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var zs=w.forwardRef(function(e,n){var t=e.children,r=vi(e,$v),a=Ms(r),i=a.open,o=vi(a,Kv);return w.useImperativeHandle(n,function(){return{open:i}},[i]),Gl.createElement(w.Fragment,null,t(Q(Q({},o),{},{open:i})))});zs.displayName="Dropzone";var zf={disabled:!1,getFilesFromEvent:dv,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};zs.defaultProps=zf;zs.propTypes={children:K.func,accept:K.objectOf(K.arrayOf(K.string)),multiple:K.bool,preventDropOnDocument:K.bool,noClick:K.bool,noKeyboard:K.bool,noDrag:K.bool,noDragEventsBubbling:K.bool,minSize:K.number,maxSize:K.number,maxFiles:K.number,disabled:K.bool,getFilesFromEvent:K.func,onFileDialogCancel:K.func,onFileDialogOpen:K.func,useFsAccessApi:K.bool,autoFocus:K.bool,onDragEnter:K.func,onDragLeave:K.func,onDragOver:K.func,onDrop:K.func,onDropAccepted:K.func,onDropRejected:K.func,onError:K.func,validator:K.func};var zl={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,isDragGlobal:!1,acceptedFiles:[],fileRejections:[]};function Ms(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Q(Q({},zf),e),t=n.accept,r=n.disabled,a=n.getFilesFromEvent,i=n.maxSize,o=n.minSize,l=n.multiple,s=n.maxFiles,c=n.onDragEnter,d=n.onDragLeave,p=n.onDragOver,g=n.onDrop,y=n.onDropAccepted,m=n.onDropRejected,v=n.onFileDialogCancel,b=n.onFileDialogOpen,x=n.useFsAccessApi,f=n.autoFocus,h=n.preventDropOnDocument,S=n.noClick,E=n.noKeyboard,T=n.noDrag,_=n.noDragEventsBubbling,C=n.onError,R=n.validator,P=w.useMemo(function(){return Mv(t)},[t]),q=w.useMemo(function(){return zv(t)},[t]),pe=w.useMemo(function(){return typeof b=="function"?b:Au},[b]),V=w.useMemo(function(){return typeof v=="function"?v:Au},[v]),z=w.useRef(null),oe=w.useRef(null),G=w.useReducer(ey,zl),Te=No(G,2),N=Te[0],A=Te[1],O=N.isFocused,I=N.isFileDialogActive,H=w.useRef(typeof window<"u"&&window.isSecureContext&&x&&Bv()),xe=function(){!H.current&&I&&setTimeout(function(){if(oe.current){var F=oe.current.files;F.length||(A({type:"closeDialog"}),V())}},300)};w.useEffect(function(){return window.addEventListener("focus",xe,!1),function(){window.removeEventListener("focus",xe,!1)}},[oe,I,V,H]);var X=w.useRef([]),Pe=w.useRef([]),un=function(F){z.current&&z.current.contains(F.target)||(F.preventDefault(),X.current=[])};w.useEffect(function(){return h&&(document.addEventListener("dragover",Tu,!1),document.addEventListener("drop",un,!1)),function(){h&&(document.removeEventListener("dragover",Tu),document.removeEventListener("drop",un))}},[z,h]),w.useEffect(function(){var j=function(dn){Pe.current=[].concat(Cu(Pe.current),[dn.target]),dr(dn)&&A({isDragGlobal:!0,type:"setDragGlobal"})},F=function(dn){Pe.current=Pe.current.filter(function(yn){return yn!==dn.target&&yn!==null}),!(Pe.current.length>0)&&A({isDragGlobal:!1,type:"setDragGlobal"})},ee=function(){Pe.current=[],A({isDragGlobal:!1,type:"setDragGlobal"})},le=function(){Pe.current=[],A({isDragGlobal:!1,type:"setDragGlobal"})};return document.addEventListener("dragenter",j,!1),document.addEventListener("dragleave",F,!1),document.addEventListener("dragend",ee,!1),document.addEventListener("drop",le,!1),function(){document.removeEventListener("dragenter",j),document.removeEventListener("dragleave",F),document.removeEventListener("dragend",ee),document.removeEventListener("drop",le)}},[z]),w.useEffect(function(){return!r&&f&&z.current&&z.current.focus(),function(){}},[z,f,r]);var qe=w.useCallback(function(j){C?C(j):console.error(j)},[C]),Ys=w.useCallback(function(j){j.preventDefault(),j.persist(),sa(j),X.current=[].concat(Cu(X.current),[j.target]),dr(j)&&Promise.resolve(a(j)).then(function(F){if(!(xi(j)&&!_)){var ee=F.length,le=ee>0&&Dv({files:F,accept:P,minSize:o,maxSize:i,multiple:l,maxFiles:s,validator:R}),ve=ee>0&&!le;A({isDragAccept:le,isDragReject:ve,isDragActive:!0,type:"setDraggedFiles"}),c&&c(j)}}).catch(function(F){return qe(F)})},[a,c,qe,_,P,o,i,l,s,R]),Qs=w.useCallback(function(j){j.preventDefault(),j.persist(),sa(j);var F=dr(j);if(F&&j.dataTransfer)try{j.dataTransfer.dropEffect="copy"}catch{}return F&&p&&p(j),!1},[p,_]),Js=w.useCallback(function(j){j.preventDefault(),j.persist(),sa(j);var F=X.current.filter(function(le){return z.current&&z.current.contains(le)}),ee=F.indexOf(j.target);ee!==-1&&F.splice(ee,1),X.current=F,!(F.length>0)&&(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),dr(j)&&d&&d(j))},[z,d,_]),ia=w.useCallback(function(j,F){var ee=[],le=[];j.forEach(function(ve){var dn=Df(ve,P),yn=No(dn,2),Yi=yn[0],Qi=yn[1],Ji=Of(ve,o,i),ca=No(Ji,2),Xi=ca[0],Zi=ca[1],eo=R?R(ve):null;if(Yi&&Xi&&!eo)ee.push(ve);else{var no=[Qi,Zi];eo&&(no=no.concat(eo)),le.push({file:ve,errors:no.filter(function(km){return km})})}}),(!l&&ee.length>1||l&&s>=1&&ee.length>s)&&(ee.forEach(function(ve){le.push({file:ve,errors:[jv]})}),ee.splice(0)),A({acceptedFiles:ee,fileRejections:le,isDragReject:le.length>0,type:"setFiles"}),g&&g(ee,le,F),le.length>0&&m&&m(le,F),ee.length>0&&y&&y(ee,F)},[A,l,P,o,i,s,g,y,m,R]),oa=w.useCallback(function(j){j.preventDefault(),j.persist(),sa(j),X.current=[],dr(j)&&Promise.resolve(a(j)).then(function(F){xi(j)&&!_||ia(F,j)}).catch(function(F){return qe(F)}),A({type:"reset"})},[a,ia,qe,_]),wt=w.useCallback(function(){if(H.current){A({type:"openDialog"}),pe();var j={multiple:l,types:q};window.showOpenFilePicker(j).then(function(F){return a(F)}).then(function(F){ia(F,null),A({type:"closeDialog"})}).catch(function(F){Hv(F)?(V(F),A({type:"closeDialog"})):Uv(F)?(H.current=!1,oe.current?(oe.current.value=null,oe.current.click()):qe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):qe(F)});return}oe.current&&(A({type:"openDialog"}),pe(),oe.current.value=null,oe.current.click())},[A,pe,V,x,ia,qe,q,l]),Xs=w.useCallback(function(j){!z.current||!z.current.isEqualNode(j.target)||(j.key===" "||j.key==="Enter"||j.keyCode===32||j.keyCode===13)&&(j.preventDefault(),wt())},[z,wt]),Zs=w.useCallback(function(){A({type:"focus"})},[]),ec=w.useCallback(function(){A({type:"blur"})},[]),nc=w.useCallback(function(){S||(Fv()?setTimeout(wt,0):wt())},[S,wt]),bt=function(F){return r?null:F},Gi=function(F){return E?null:bt(F)},la=function(F){return T?null:bt(F)},sa=function(F){_&&F.stopPropagation()},wm=w.useMemo(function(){return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=j.refKey,ee=F===void 0?"ref":F,le=j.role,ve=j.onKeyDown,dn=j.onFocus,yn=j.onBlur,Yi=j.onClick,Qi=j.onDragEnter,Ji=j.onDragOver,ca=j.onDragLeave,Xi=j.onDrop,Zi=vi(j,Vv);return Q(Q(Bl({onKeyDown:Gi(fn(ve,Xs)),onFocus:Gi(fn(dn,Zs)),onBlur:Gi(fn(yn,ec)),onClick:bt(fn(Yi,nc)),onDragEnter:la(fn(Qi,Ys)),onDragOver:la(fn(Ji,Qs)),onDragLeave:la(fn(ca,Js)),onDrop:la(fn(Xi,oa)),role:typeof le=="string"&&le!==""?le:"presentation"},ee,z),!r&&!E?{tabIndex:0}:{}),Zi)}},[z,Xs,Zs,ec,nc,Ys,Qs,Js,oa,E,T,r]),bm=w.useCallback(function(j){j.stopPropagation()},[]),Sm=w.useMemo(function(){return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},F=j.refKey,ee=F===void 0?"ref":F,le=j.onChange,ve=j.onClick,dn=vi(j,Wv),yn=Bl({accept:P,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:bt(fn(le,oa)),onClick:bt(fn(ve,bm)),tabIndex:-1},ee,oe);return Q(Q({},yn),dn)}},[oe,t,l,oa,r]);return Q(Q({},N),{},{isFocused:O&&!r,getRootProps:wm,getInputProps:Sm,rootRef:z,inputRef:oe,open:bt(wt)})}function ey(e,n){switch(n.type){case"focus":return Q(Q({},e),{},{isFocused:!0});case"blur":return Q(Q({},e),{},{isFocused:!1});case"openDialog":return Q(Q({},zl),{},{isFileDialogActive:!0});case"closeDialog":return Q(Q({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Q(Q({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return Q(Q({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections,isDragReject:n.isDragReject});case"setDragGlobal":return Q(Q({},e),{},{isDragGlobal:n.isDragGlobal});case"reset":return Q({},zl);default:return e}}function Au(){}function ny({onFile:e,loading:n}){const t=w.useCallback(o=>{o.length>0&&e(o[0])},[e]),{getRootProps:r,getInputProps:a,isDragActive:i}=Ms({onDrop:t,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:n});return u.jsxs("div",{...r(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${i?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
        ${n?"opacity-50 cursor-not-allowed":""}`,children:[u.jsx("input",{...a()}),u.jsx("div",{className:"text-4xl mb-3",children:"📂"}),n?u.jsx("p",{className:"text-gray-400",children:"Processing file…"}):i?u.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your check file here"}),u.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]})}function Mf(e,n){return function(){return e.apply(n,arguments)}}const{toString:ty}=Object.prototype,{getPrototypeOf:Hs}=Object,{iterator:Ui,toStringTag:Hf}=Symbol,$i=(e=>n=>{const t=ty.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=e=>(e=e.toLowerCase(),n=>$i(n)===e),Ki=e=>n=>typeof n===e,{isArray:nr}=Array,Jt=Ki("undefined");function ea(e){return e!==null&&!Jt(e)&&e.constructor!==null&&!Jt(e.constructor)&&ze(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Uf=cn("ArrayBuffer");function ry(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Uf(e.buffer),n}const ay=Ki("string"),ze=Ki("function"),$f=Ki("number"),na=e=>e!==null&&typeof e=="object",iy=e=>e===!0||e===!1,Ha=e=>{if($i(e)!=="object")return!1;const n=Hs(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Hf in e)&&!(Ui in e)},oy=e=>{if(!na(e)||ea(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ly=cn("Date"),sy=cn("File"),cy=e=>!!(e&&typeof e.uri<"u"),uy=e=>e&&typeof e.getParts<"u",dy=cn("Blob"),py=cn("FileList"),fy=e=>na(e)&&ze(e.pipe);function my(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Nu=my(),ju=typeof Nu.FormData<"u"?Nu.FormData:void 0,gy=e=>{let n;return e&&(ju&&e instanceof ju||ze(e.append)&&((n=$i(e))==="formdata"||n==="object"&&ze(e.toString)&&e.toString()==="[object FormData]"))},hy=cn("URLSearchParams"),[xy,vy,yy,wy]=["ReadableStream","Request","Response","Headers"].map(cn),by=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ta(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),nr(e))for(r=0,a=e.length;r<a;r++)n.call(null,e[r],r,e);else{if(ea(e))return;const i=t?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],n.call(null,e[l],l,e)}}function Kf(e,n){if(ea(e))return null;n=n.toLowerCase();const t=Object.keys(e);let r=t.length,a;for(;r-- >0;)if(a=t[r],n===a.toLowerCase())return a;return null}const it=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vf=e=>!Jt(e)&&e!==it;function Ml(){const{caseless:e,skipUndefined:n}=Vf(this)&&this||{},t={},r=(a,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const o=e&&Kf(t,i)||i;Ha(t[o])&&Ha(a)?t[o]=Ml(t[o],a):Ha(a)?t[o]=Ml({},a):nr(a)?t[o]=a.slice():(!n||!Jt(a))&&(t[o]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ta(arguments[a],r);return t}const Sy=(e,n,t,{allOwnKeys:r}={})=>(ta(n,(a,i)=>{t&&ze(a)?Object.defineProperty(e,i,{value:Mf(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),ky=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ey=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},_y=(e,n,t,r)=>{let a,i,o;const l={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,n))&&!l[o]&&(n[o]=e[o],l[o]=!0);e=t!==!1&&Hs(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},Ry=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},Ty=e=>{if(!e)return null;if(nr(e))return e;let n=e.length;if(!$f(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},Cy=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Hs(Uint8Array)),Ly=(e,n)=>{const r=(e&&e[Ui]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;n.call(e,i[0],i[1])}},Ay=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},Ny=cn("HTMLFormElement"),jy=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),Pu=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),Py=cn("RegExp"),Wf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};ta(t,(a,i)=>{let o;(o=n(a,i,e))!==!1&&(r[i]=o||a)}),Object.defineProperties(e,r)},Dy=e=>{Wf(e,(n,t)=>{if(ze(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(ze(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Oy=(e,n)=>{const t={},r=a=>{a.forEach(i=>{t[i]=!0})};return nr(e)?r(e):r(String(e).split(n)),t},Iy=()=>{},Fy=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function By(e){return!!(e&&ze(e.append)&&e[Hf]==="FormData"&&e[Ui])}const zy=e=>{const n=new Array(10),t=(r,a)=>{if(na(r)){if(n.indexOf(r)>=0)return;if(ea(r))return r;if(!("toJSON"in r)){n[a]=r;const i=nr(r)?[]:{};return ta(r,(o,l)=>{const s=t(o,a+1);!Jt(s)&&(i[l]=s)}),n[a]=void 0,i}}return r};return t(e,0)},My=cn("AsyncFunction"),Hy=e=>e&&(na(e)||ze(e))&&ze(e.then)&&ze(e.catch),qf=((e,n)=>e?setImmediate:n?((t,r)=>(it.addEventListener("message",({source:a,data:i})=>{a===it&&i===t&&r.length&&r.shift()()},!1),a=>{r.push(a),it.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ze(it.postMessage)),Uy=typeof queueMicrotask<"u"?queueMicrotask.bind(it):typeof process<"u"&&process.nextTick||qf,$y=e=>e!=null&&ze(e[Ui]),k={isArray:nr,isArrayBuffer:Uf,isBuffer:ea,isFormData:gy,isArrayBufferView:ry,isString:ay,isNumber:$f,isBoolean:iy,isObject:na,isPlainObject:Ha,isEmptyObject:oy,isReadableStream:xy,isRequest:vy,isResponse:yy,isHeaders:wy,isUndefined:Jt,isDate:ly,isFile:sy,isReactNativeBlob:cy,isReactNative:uy,isBlob:dy,isRegExp:Py,isFunction:ze,isStream:fy,isURLSearchParams:hy,isTypedArray:Cy,isFileList:py,forEach:ta,merge:Ml,extend:Sy,trim:by,stripBOM:ky,inherits:Ey,toFlatObject:_y,kindOf:$i,kindOfTest:cn,endsWith:Ry,toArray:Ty,forEachEntry:Ly,matchAll:Ay,isHTMLForm:Ny,hasOwnProperty:Pu,hasOwnProp:Pu,reduceDescriptors:Wf,freezeMethods:Dy,toObjectSet:Oy,toCamelCase:jy,noop:Iy,toFiniteNumber:Fy,findKey:Kf,global:it,isContextDefined:Vf,isSpecCompliantForm:By,toJSONObject:zy,isAsyncFn:My,isThenable:Hy,setImmediate:qf,asap:Uy,isIterable:$y};let B=class Gf extends Error{static from(n,t,r,a,i,o){const l=new Gf(n.message,t||n.code,r,a,i);return l.cause=n,l.name=n.name,n.status!=null&&l.status==null&&(l.status=n.status),o&&Object.assign(l,o),l}constructor(n,t,r,a,i){super(n),Object.defineProperty(this,"message",{value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}};B.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";B.ERR_BAD_OPTION="ERR_BAD_OPTION";B.ECONNABORTED="ECONNABORTED";B.ETIMEDOUT="ETIMEDOUT";B.ERR_NETWORK="ERR_NETWORK";B.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";B.ERR_DEPRECATED="ERR_DEPRECATED";B.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";B.ERR_BAD_REQUEST="ERR_BAD_REQUEST";B.ERR_CANCELED="ERR_CANCELED";B.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";B.ERR_INVALID_URL="ERR_INVALID_URL";const Ky=null;function Hl(e){return k.isPlainObject(e)||k.isArray(e)}function Yf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function jo(e,n,t){return e?e.concat(n).map(function(a,i){return a=Yf(a),!t&&i?"["+a+"]":a}).join(t?".":""):n}function Vy(e){return k.isArray(e)&&!e.some(Hl)}const Wy=k.toFlatObject(k,{},null,function(n){return/^is[A-Z]/.test(n)});function Vi(e,n,t){if(!k.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!k.isUndefined(b[v])});const r=t.metaTokens,a=t.visitor||d,i=t.dots,o=t.indexes,s=(t.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(n);if(!k.isFunction(a))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(k.isDate(m))return m.toISOString();if(k.isBoolean(m))return m.toString();if(!s&&k.isBlob(m))throw new B("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(m)||k.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,v,b){let x=m;if(k.isReactNative(n)&&k.isReactNativeBlob(m))return n.append(jo(b,v,i),c(m)),!1;if(m&&!b&&typeof m=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(k.isArray(m)&&Vy(m)||(k.isFileList(m)||k.endsWith(v,"[]"))&&(x=k.toArray(m)))return v=Yf(v),x.forEach(function(h,S){!(k.isUndefined(h)||h===null)&&n.append(o===!0?jo([v],S,i):o===null?v:v+"[]",c(h))}),!1}return Hl(m)?!0:(n.append(jo(b,v,i),c(m)),!1)}const p=[],g=Object.assign(Wy,{defaultVisitor:d,convertValue:c,isVisitable:Hl});function y(m,v){if(!k.isUndefined(m)){if(p.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));p.push(m),k.forEach(m,function(x,f){(!(k.isUndefined(x)||x===null)&&a.call(n,x,k.isString(f)?f.trim():f,v,g))===!0&&y(x,v?v.concat(f):[f])}),p.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return y(e),n}function Du(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function Us(e,n){this._pairs=[],e&&Vi(e,this,n)}const Qf=Us.prototype;Qf.append=function(n,t){this._pairs.push([n,t])};Qf.toString=function(n){const t=n?function(r){return n.call(this,r,Du)}:Du;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function qy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Jf(e,n,t){if(!n)return e;const r=t&&t.encode||qy,a=k.isFunction(t)?{serialize:t}:t,i=a&&a.serialize;let o;if(i?o=i(n,a):o=k.isURLSearchParams(n)?n.toString():new Us(n,a).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ou{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){k.forEach(this.handlers,function(r){r!==null&&n(r)})}}const $s={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Gy=typeof URLSearchParams<"u"?URLSearchParams:Us,Yy=typeof FormData<"u"?FormData:null,Qy=typeof Blob<"u"?Blob:null,Jy={isBrowser:!0,classes:{URLSearchParams:Gy,FormData:Yy,Blob:Qy},protocols:["http","https","file","blob","url","data"]},Ks=typeof window<"u"&&typeof document<"u",Ul=typeof navigator=="object"&&navigator||void 0,Xy=Ks&&(!Ul||["ReactNative","NativeScript","NS"].indexOf(Ul.product)<0),Zy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",e0=Ks&&window.location.href||"http://localhost",n0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ks,hasStandardBrowserEnv:Xy,hasStandardBrowserWebWorkerEnv:Zy,navigator:Ul,origin:e0},Symbol.toStringTag,{value:"Module"})),_e={...n0,...Jy};function t0(e,n){return Vi(e,new _e.classes.URLSearchParams,{visitor:function(t,r,a,i){return _e.isNode&&k.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...n})}function r0(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function a0(e){const n={},t=Object.keys(e);let r;const a=t.length;let i;for(r=0;r<a;r++)i=t[r],n[i]=e[i];return n}function Xf(e){function n(t,r,a,i){let o=t[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),s=i>=t.length;return o=!o&&k.isArray(a)?a.length:o,s?(k.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!l):((!a[o]||!k.isObject(a[o]))&&(a[o]=[]),n(t,r,a[o],i)&&k.isArray(a[o])&&(a[o]=a0(a[o])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const t={};return k.forEachEntry(e,(r,a)=>{n(r0(r),a,t,0)}),t}return null}function i0(e,n,t){if(k.isString(e))try{return(n||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}const ra={transitional:$s,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,i=k.isObject(n);if(i&&k.isHTMLForm(n)&&(n=new FormData(n)),k.isFormData(n))return a?JSON.stringify(Xf(n)):n;if(k.isArrayBuffer(n)||k.isBuffer(n)||k.isStream(n)||k.isFile(n)||k.isBlob(n)||k.isReadableStream(n))return n;if(k.isArrayBufferView(n))return n.buffer;if(k.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return t0(n,this.formSerializer).toString();if((l=k.isFileList(n))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Vi(l?{"files[]":n}:n,s&&new s,this.formSerializer)}}return i||a?(t.setContentType("application/json",!1),i0(n)):n}],transformResponse:[function(n){const t=this.transitional||ra.transitional,r=t&&t.forcedJSONParsing,a=this.responseType==="json";if(k.isResponse(n)||k.isReadableStream(n))return n;if(n&&k.isString(n)&&(r&&!this.responseType||a)){const o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(n,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{ra.headers[e]={}});const o0=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),l0=e=>{const n={};let t,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),t=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!t||n[t]&&o0[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},Iu=Symbol("internals");function pr(e){return e&&String(e).trim().toLowerCase()}function Ua(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ua):String(e).replace(/[\r\n]+$/,"")}function s0(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const c0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Po(e,n,t,r,a){if(k.isFunction(r))return r.call(this,n,t);if(a&&(n=t),!!k.isString(n)){if(k.isString(r))return n.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(n)}}function u0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function d0(e,n){const t=k.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(a,i,o){return this[r].call(this,n,a,i,o)},configurable:!0})})}let Me=class{constructor(n){n&&this.set(n)}set(n,t,r){const a=this;function i(l,s,c){const d=pr(s);if(!d)throw new Error("header name must be a non-empty string");const p=k.findKey(a,d);(!p||a[p]===void 0||c===!0||c===void 0&&a[p]!==!1)&&(a[p||s]=Ua(l))}const o=(l,s)=>k.forEach(l,(c,d)=>i(c,d,s));if(k.isPlainObject(n)||n instanceof this.constructor)o(n,t);else if(k.isString(n)&&(n=n.trim())&&!c0(n))o(l0(n),t);else if(k.isObject(n)&&k.isIterable(n)){let l={},s,c;for(const d of n){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[c=d[0]]=(s=l[c])?k.isArray(s)?[...s,d[1]]:[s,d[1]]:d[1]}o(l,t)}else n!=null&&i(t,n,r);return this}get(n,t){if(n=pr(n),n){const r=k.findKey(this,n);if(r){const a=this[r];if(!t)return a;if(t===!0)return s0(a);if(k.isFunction(t))return t.call(this,a,r);if(k.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=pr(n),n){const r=k.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||Po(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let a=!1;function i(o){if(o=pr(o),o){const l=k.findKey(r,o);l&&(!t||Po(r,r[l],l,t))&&(delete r[l],a=!0)}}return k.isArray(n)?n.forEach(i):i(n),a}clear(n){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const i=t[r];(!n||Po(this,this[i],i,n,!0))&&(delete this[i],a=!0)}return a}normalize(n){const t=this,r={};return k.forEach(this,(a,i)=>{const o=k.findKey(r,i);if(o){t[o]=Ua(a),delete t[i];return}const l=n?u0(i):String(i).trim();l!==i&&delete t[i],t[l]=Ua(a),r[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return k.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=n&&k.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(a=>r.set(a)),r}static accessor(n){const r=(this[Iu]=this[Iu]={accessors:{}}).accessors,a=this.prototype;function i(o){const l=pr(o);r[l]||(d0(a,o),r[l]=!0)}return k.isArray(n)?n.forEach(i):i(n),this}};Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Me.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});k.freezeMethods(Me);function Do(e,n){const t=this||ra,r=n||t,a=Me.from(r.headers);let i=r.data;return k.forEach(e,function(l){i=l.call(t,i,a.normalize(),n?n.status:void 0)}),a.normalize(),i}function Zf(e){return!!(e&&e.__CANCEL__)}let aa=class extends B{constructor(n,t,r){super(n??"canceled",B.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function em(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new B("Request failed with status code "+t.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function p0(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function f0(e,n){e=e||10;const t=new Array(e),r=new Array(e);let a=0,i=0,o;return n=n!==void 0?n:1e3,function(s){const c=Date.now(),d=r[i];o||(o=c),t[a]=s,r[a]=c;let p=i,g=0;for(;p!==a;)g+=t[p++],p=p%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),c-o<n)return;const y=d&&c-d;return y?Math.round(g*1e3/y):void 0}}function m0(e,n){let t=0,r=1e3/n,a,i;const o=(c,d=Date.now())=>{t=d,a=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),p=d-t;p>=r?o(c,d):(a=c,i||(i=setTimeout(()=>{i=null,o(a)},r-p)))},()=>a&&o(a)]}const yi=(e,n,t=3)=>{let r=0;const a=f0(50,250);return m0(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-r,c=a(s),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:c||void 0,estimated:c&&l&&d?(l-o)/c:void 0,event:i,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(p)},t)},Fu=(e,n)=>{const t=e!=null;return[r=>n[0]({lengthComputable:t,total:e,loaded:r}),n[1]]},Bu=e=>(...n)=>k.asap(()=>e(...n)),g0=_e.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,_e.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(_e.origin),_e.navigator&&/(msie|trident)/i.test(_e.navigator.userAgent)):()=>!0,h0=_e.hasStandardBrowserEnv?{write(e,n,t,r,a,i,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(n)}`];k.isNumber(t)&&l.push(`expires=${new Date(t).toUTCString()}`),k.isString(r)&&l.push(`path=${r}`),k.isString(a)&&l.push(`domain=${a}`),i===!0&&l.push("secure"),k.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function x0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function v0(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function nm(e,n,t){let r=!x0(n);return e&&(r||t==!1)?v0(e,n):n}const zu=e=>e instanceof Me?{...e}:e;function mt(e,n){n=n||{};const t={};function r(c,d,p,g){return k.isPlainObject(c)&&k.isPlainObject(d)?k.merge.call({caseless:g},c,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function a(c,d,p,g){if(k.isUndefined(d)){if(!k.isUndefined(c))return r(void 0,c,p,g)}else return r(c,d,p,g)}function i(c,d){if(!k.isUndefined(d))return r(void 0,d)}function o(c,d){if(k.isUndefined(d)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,p){if(p in n)return r(c,d);if(p in e)return r(void 0,c)}const s={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,d,p)=>a(zu(c),zu(d),p,!0)};return k.forEach(Object.keys({...e,...n}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const p=k.hasOwnProp(s,d)?s[d]:a,g=p(e[d],n[d],d);k.isUndefined(g)&&p!==l||(t[d]=g)}),t}const tm=e=>{const n=mt({},e);let{data:t,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:l}=n;if(n.headers=o=Me.from(o),n.url=Jf(nm(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),k.isFormData(t)){if(_e.hasStandardBrowserEnv||_e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(k.isFunction(t.getHeaders)){const s=t.getHeaders(),c=["content-type","content-length"];Object.entries(s).forEach(([d,p])=>{c.includes(d.toLowerCase())&&o.set(d,p)})}}if(_e.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(n)),r||r!==!1&&g0(n.url))){const s=a&&i&&h0.read(i);s&&o.set(a,s)}return n},y0=typeof XMLHttpRequest<"u",w0=y0&&function(e){return new Promise(function(t,r){const a=tm(e);let i=a.data;const o=Me.from(a.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:c}=a,d,p,g,y,m;function v(){y&&y(),m&&m(),a.cancelToken&&a.cancelToken.unsubscribe(d),a.signal&&a.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(a.method.toUpperCase(),a.url,!0),b.timeout=a.timeout;function x(){if(!b)return;const h=Me.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),E={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};em(function(_){t(_),v()},function(_){r(_),v()},E),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(r(new B("Request aborted",B.ECONNABORTED,e,b)),b=null)},b.onerror=function(S){const E=S&&S.message?S.message:"Network Error",T=new B(E,B.ERR_NETWORK,e,b);T.event=S||null,r(T),b=null},b.ontimeout=function(){let S=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const E=a.transitional||$s;a.timeoutErrorMessage&&(S=a.timeoutErrorMessage),r(new B(S,E.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&k.forEach(o.toJSON(),function(S,E){b.setRequestHeader(E,S)}),k.isUndefined(a.withCredentials)||(b.withCredentials=!!a.withCredentials),l&&l!=="json"&&(b.responseType=a.responseType),c&&([g,m]=yi(c,!0),b.addEventListener("progress",g)),s&&b.upload&&([p,y]=yi(s),b.upload.addEventListener("progress",p),b.upload.addEventListener("loadend",y)),(a.cancelToken||a.signal)&&(d=h=>{b&&(r(!h||h.type?new aa(null,e,b):h),b.abort(),b=null)},a.cancelToken&&a.cancelToken.subscribe(d),a.signal&&(a.signal.aborted?d():a.signal.addEventListener("abort",d)));const f=p0(a.url);if(f&&_e.protocols.indexOf(f)===-1){r(new B("Unsupported protocol "+f+":",B.ERR_BAD_REQUEST,e));return}b.send(i||null)})},b0=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let r=new AbortController,a;const i=function(c){if(!a){a=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof B?d:new aa(d instanceof Error?d.message:d))}};let o=n&&setTimeout(()=>{o=null,i(new B(`timeout of ${n}ms exceeded`,B.ETIMEDOUT))},n);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>k.asap(l),s}},S0=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let r=0,a;for(;r<t;)a=r+n,yield e.slice(r,a),r=a},k0=async function*(e,n){for await(const t of E0(e))yield*S0(t,n)},E0=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:r}=await n.read();if(t)break;yield r}}finally{await n.cancel()}},Mu=(e,n,t,r)=>{const a=k0(e,n);let i=0,o,l=s=>{o||(o=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:c,value:d}=await a.next();if(c){l(),s.close();return}let p=d.byteLength;if(t){let g=i+=p;t(g)}s.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(s){return l(s),a.return()}},{highWaterMark:2})},Hu=64*1024,{isFunction:Ta}=k,_0=(({Request:e,Response:n})=>({Request:e,Response:n}))(k.global),{ReadableStream:Uu,TextEncoder:$u}=k.global,Ku=(e,...n)=>{try{return!!e(...n)}catch{return!1}},R0=e=>{e=k.merge.call({skipUndefined:!0},_0,e);const{fetch:n,Request:t,Response:r}=e,a=n?Ta(n):typeof fetch=="function",i=Ta(t),o=Ta(r);if(!a)return!1;const l=a&&Ta(Uu),s=a&&(typeof $u=="function"?(m=>v=>m.encode(v))(new $u):async m=>new Uint8Array(await new t(m).arrayBuffer())),c=i&&l&&Ku(()=>{let m=!1;const v=new Uu,b=new t(_e.origin,{body:v,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return v.cancel(),m&&!b}),d=o&&l&&Ku(()=>k.isReadableStream(new r("").body)),p={stream:d&&(m=>m.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!p[m]&&(p[m]=(v,b)=>{let x=v&&v[m];if(x)return x.call(v);throw new B(`Response type '${m}' is not supported`,B.ERR_NOT_SUPPORT,b)})});const g=async m=>{if(m==null)return 0;if(k.isBlob(m))return m.size;if(k.isSpecCompliantForm(m))return(await new t(_e.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(k.isArrayBufferView(m)||k.isArrayBuffer(m))return m.byteLength;if(k.isURLSearchParams(m)&&(m=m+""),k.isString(m))return(await s(m)).byteLength},y=async(m,v)=>{const b=k.toFiniteNumber(m.getContentLength());return b??g(v)};return async m=>{let{url:v,method:b,data:x,signal:f,cancelToken:h,timeout:S,onDownloadProgress:E,onUploadProgress:T,responseType:_,headers:C,withCredentials:R="same-origin",fetchOptions:P}=tm(m),q=n||fetch;_=_?(_+"").toLowerCase():"text";let pe=b0([f,h&&h.toAbortSignal()],S),V=null;const z=pe&&pe.unsubscribe&&(()=>{pe.unsubscribe()});let oe;try{if(T&&c&&b!=="get"&&b!=="head"&&(oe=await y(C,x))!==0){let I=new t(v,{method:"POST",body:x,duplex:"half"}),H;if(k.isFormData(x)&&(H=I.headers.get("content-type"))&&C.setContentType(H),I.body){const[xe,X]=Fu(oe,yi(Bu(T)));x=Mu(I.body,Hu,xe,X)}}k.isString(R)||(R=R?"include":"omit");const G=i&&"credentials"in t.prototype,Te={...P,signal:pe,method:b.toUpperCase(),headers:C.normalize().toJSON(),body:x,duplex:"half",credentials:G?R:void 0};V=i&&new t(v,Te);let N=await(i?q(V,P):q(v,Te));const A=d&&(_==="stream"||_==="response");if(d&&(E||A&&z)){const I={};["status","statusText","headers"].forEach(Pe=>{I[Pe]=N[Pe]});const H=k.toFiniteNumber(N.headers.get("content-length")),[xe,X]=E&&Fu(H,yi(Bu(E),!0))||[];N=new r(Mu(N.body,Hu,xe,()=>{X&&X(),z&&z()}),I)}_=_||"text";let O=await p[k.findKey(p,_)||"text"](N,m);return!A&&z&&z(),await new Promise((I,H)=>{em(I,H,{data:O,headers:Me.from(N.headers),status:N.status,statusText:N.statusText,config:m,request:V})})}catch(G){throw z&&z(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,m,V,G&&G.response),{cause:G.cause||G}):B.from(G,G&&G.code,m,V,G&&G.response)}}},T0=new Map,rm=e=>{let n=e&&e.env||{};const{fetch:t,Request:r,Response:a}=n,i=[r,a,t];let o=i.length,l=o,s,c,d=T0;for(;l--;)s=i[l],c=d.get(s),c===void 0&&d.set(s,c=l?new Map:R0(n)),d=c;return c};rm();const Vs={http:Ky,xhr:w0,fetch:{get:rm}};k.forEach(Vs,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Vu=e=>`- ${e}`,C0=e=>k.isFunction(e)||e===null||e===!1;function L0(e,n){e=k.isArray(e)?e:[e];const{length:t}=e;let r,a;const i={};for(let o=0;o<t;o++){r=e[o];let l;if(a=r,!C0(r)&&(a=Vs[(l=String(r)).toLowerCase()],a===void 0))throw new B(`Unknown adapter '${l}'`);if(a&&(k.isFunction(a)||(a=a.get(n))))break;i[l||"#"+o]=a}if(!a){const o=Object.entries(i).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(Vu).join(`
`):" "+Vu(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a}const am={getAdapter:L0,adapters:Vs};function Oo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new aa(null,e)}function Wu(e){return Oo(e),e.headers=Me.from(e.headers),e.data=Do.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),am.getAdapter(e.adapter||ra.adapter,e)(e).then(function(r){return Oo(e),r.data=Do.call(e,e.transformResponse,r),r.headers=Me.from(r.headers),r},function(r){return Zf(r)||(Oo(e),r&&r.response&&(r.response.data=Do.call(e,e.transformResponse,r.response),r.response.headers=Me.from(r.response.headers))),Promise.reject(r)})}const im="1.14.0",Wi={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Wi[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const qu={};Wi.transitional=function(n,t,r){function a(i,o){return"[Axios v"+im+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(n===!1)throw new B(a(o," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!qu[o]&&(qu[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(i,o,l):!0}};Wi.spelling=function(n){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${n}`),!0)};function A0(e,n,t){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=n[i];if(o){const l=e[i],s=l===void 0||o(l,i,e);if(s!==!0)throw new B("option "+i+" must be "+s,B.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new B("Unknown option "+i,B.ERR_BAD_OPTION)}}const $a={assertOptions:A0,validators:Wi},Ge=$a.validators;let st=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Ou,response:new Ou}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=mt(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:i}=t;r!==void 0&&$a.assertOptions(r,{silentJSONParsing:Ge.transitional(Ge.boolean),forcedJSONParsing:Ge.transitional(Ge.boolean),clarifyTimeoutError:Ge.transitional(Ge.boolean),legacyInterceptorReqResOrdering:Ge.transitional(Ge.boolean)},!1),a!=null&&(k.isFunction(a)?t.paramsSerializer={serialize:a}:$a.assertOptions(a,{encode:Ge.function,serialize:Ge.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),$a.assertOptions(t,{baseUrl:Ge.spelling("baseURL"),withXsrfToken:Ge.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&k.merge(i.common,i[t.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),t.headers=Me.concat(o,i);const l=[];let s=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(t)===!1)return;s=s&&v.synchronous;const b=t.transitional||$s;b&&b.legacyInterceptorReqResOrdering?l.unshift(v.fulfilled,v.rejected):l.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,p=0,g;if(!s){const m=[Wu.bind(this),void 0];for(m.unshift(...l),m.push(...c),g=m.length,d=Promise.resolve(t);p<g;)d=d.then(m[p++],m[p++]);return d}g=l.length;let y=t;for(;p<g;){const m=l[p++],v=l[p++];try{y=m(y)}catch(b){v.call(this,b);break}}try{d=Wu.call(this,y)}catch(m){return Promise.reject(m)}for(p=0,g=c.length;p<g;)d=d.then(c[p++],c[p++]);return d}getUri(n){n=mt(this.defaults,n);const t=nm(n.baseURL,n.url,n.allowAbsoluteUrls);return Jf(t,n.params,n.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(n){st.prototype[n]=function(t,r){return this.request(mt(r||{},{method:n,url:t,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(n){function t(r){return function(i,o,l){return this.request(mt(l||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}st.prototype[n]=t(),st.prototype[n+"Form"]=t(!0)});let N0=class om{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},n(function(i,o,l){r.reason||(r.reason=new aa(i,o,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=r=>{n.abort(r)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new om(function(a){n=a}),cancel:n}}};function j0(e){return function(t){return e.apply(null,t)}}function P0(e){return k.isObject(e)&&e.isAxiosError===!0}const $l={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries($l).forEach(([e,n])=>{$l[n]=e});function lm(e){const n=new st(e),t=Mf(st.prototype.request,n);return k.extend(t,st.prototype,n,{allOwnKeys:!0}),k.extend(t,n,null,{allOwnKeys:!0}),t.create=function(a){return lm(mt(e,a))},t}const ce=lm(ra);ce.Axios=st;ce.CanceledError=aa;ce.CancelToken=N0;ce.isCancel=Zf;ce.VERSION=im;ce.toFormData=Vi;ce.AxiosError=B;ce.Cancel=ce.CanceledError;ce.all=function(n){return Promise.all(n)};ce.spread=j0;ce.isAxiosError=P0;ce.mergeConfig=mt;ce.AxiosHeaders=Me;ce.formToJSON=e=>Xf(k.isHTMLForm(e)?new FormData(e):e);ce.getAdapter=am.getAdapter;ce.HttpStatusCode=$l;ce.default=ce;const{Axios:Mw,AxiosError:Hw,CanceledError:Uw,isCancel:$w,CancelToken:Kw,VERSION:Vw,all:Ww,Cancel:qw,isAxiosError:Gw,spread:Yw,toFormData:Qw,AxiosHeaders:Jw,HttpStatusCode:Xw,formToJSON:Zw,getAdapter:eb,mergeConfig:nb}=ce,ue=ce.create({baseURL:"https://vald-automator-production.up.railway.app",timeout:3e4}),D0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),ue.post("/api/check",t,{timeout:9e4})},O0=(e,n)=>ue.get("/api/trainers",{params:{gym:e,branch:n}}),sm=(e,n,t)=>ue.get("/api/trainer-whatsapp",{params:{gym:e,branch:n,trainer:t}}),I0=e=>ue.post("/api/programs/approve",e),F0=e=>ue.post("/api/programs/unapprove",e),B0=e=>ue.post("/api/programs/ignore",e),z0=e=>ue.post("/api/programs/unignore",e),cm=e=>ue.post("/api/programs/preview",e,{responseType:"text",timeout:6e4}),M0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),ue.post("/api/report/generate",n,{responseType:"blob",timeout:12e4})},H0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),ue.post("/api/quick-generate",t,{timeout:9e4})},Gu=e=>ue.get("/api/trainers/all",{params:{gym:e}}),U0=e=>ue.post("/api/trainers",e),$0=(e,n)=>ue.put(`/api/trainers/${e}`,n),K0=e=>ue.delete(`/api/trainers/${e}`),V0=(e,n)=>{const t=new FormData;return t.append("month",e),t.append("year",n),ue.post("/api/report/payment",t,{responseType:"blob",timeout:12e4})},W0=(e,n,t)=>{const r=new FormData;return r.append("gym",e),r.append("month",n),r.append("year",t),ue.post("/api/report/growth",r,{responseType:"blob",timeout:12e4})},q0=e=>ue.get("/api/bodydot/tests",{params:{gym:e}}),Yu=e=>ue.post("/api/bodydot/tests/approve",e),G0=e=>ue.post("/api/bodydot/tests/ignore",e),Y0=e=>ue.post(`/api/bodydot/tests/${e}/unapprove`),Q0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),ue.post("/api/report/bodydot",n,{responseType:"blob",timeout:3e5})},J0={"Body Masters":["RUH - Al Malaz","RUH - Al Massif","RUH - Al Aarid","RUH - Al Sahafa","RUH - Al Wadi","RUH - Eshbilia","RUH - Muzahmiyah","RUH - Rabwa","RUH - Salam","RUH - Swaidi","RUH - Takhasousi","RUH - Al Badia","RUH - Al Fayha","RUH - Al Khaleej","RUH - Al Kharj","RUH - Al Nahda","RUH - Badr","RUH - Ezdehar","RUH - Murooj","RUH - Shubra","DMM - Al Athir","DMM - Al Jameyeen","DMM - Hufof","DMM - Khobar","JED - Hamadania","JED - Al Rawdah","JED - Makkah","JED - Obhor - Al Amwaj","JED - Obhor - Al Sheraa","ALQ - Al Rass","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","MED - Shouran","MED - Taiba","Uhud","AlUla","Al Mubaraz","Hafr El Batin","Tabuk","Najran","Khamis Mushait","Hail"],"Body Motions":["RUH - Al Malaz","RUH - Al Sahafa","RUH - Al Aarid","RUH - Al Fayha","RUH - Al Uraija","RUH - Badr","RUH - Al Badia","JED - Al Basateen","JED - Al Faisaliyah","JED - Al Naeem","JED - Obhor","DMM - Al Faisaliyah","DMM - Al Jalawiah","DMM - Al Nada","ALQ - Buraidah","ALQ - Unaizah","Al Ahsaa","AlUla","Tabuk"]},um=w.createContext(null);function X0({children:e}){const[n,t]=w.useState({}),[r,a]=w.useState(!1),i=w.useCallback(async g=>{if(!(!g||n[g])){a(!0);try{const y=await Gu(g);t(m=>({...m,[g]:y.data||{}}))}catch{}finally{a(!1)}}},[n]),o=w.useCallback(async g=>{if(g){a(!0);try{const y=await Gu(g);t(m=>({...m,[g]:y.data||{}}))}catch{}finally{a(!1)}}},[]),l=g=>Object.keys(n[g]||{}).sort((y,m)=>{const v=J0[g]||[],b=v.indexOf(y),x=v.indexOf(m);return b===-1&&x===-1?y.localeCompare(m):b===-1?1:x===-1?-1:b-x}),s=(g,y)=>{var m;return[...((m=n[g])==null?void 0:m[y])||[]].sort((v,b)=>v.name.localeCompare(b.name)).map(v=>v.name)},c=g=>Object.values(n[g]||{}).flat().map(y=>y.name).sort((y,m)=>y.localeCompare(m)),d=(g,y)=>{for(const[m,v]of Object.entries(n[g]||{}))if(v.some(b=>b.name===y))return m;return null},p=(g,y,m)=>{var v;return(((v=n[g])==null?void 0:v[y])||[]).find(b=>b.name===m)||null};return u.jsx(um.Provider,{value:{data:n,loading:r,load:i,reload:o,getBranches:l,getTrainers:s,getAllTrainers:c,getBranchForTrainer:d,getTrainerRecord:p},children:e})}function dm(){const e=w.useContext(um);if(!e)throw new Error("useTrainers must be used inside TrainersProvider");return e}const Z0={upper:"Upper Body",lower:"Lower Body",full:"Full Body"},ew={NEW:"bg-emerald-900/60 text-emerald-300 border border-emerald-700",UPDATED:"bg-amber-900/60 text-amber-300 border border-amber-700"};function Qu({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o}){const[l,s]=w.useState(""),[c,d]=w.useState(!1),[p,g]=w.useState(0),y=w.useRef(null),m=w.useRef(null),v=l?e.filter(f=>f.toLowerCase().includes(l.toLowerCase())):e;w.useEffect(()=>{function f(h){y.current&&!y.current.contains(h.target)&&d(!1)}return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]),w.useEffect(()=>{s(n||"")},[n]),w.useEffect(()=>{g(0)},[l]);function b(f){t(f),s(f),d(!1),r&&r(f)}function x(f){!c||v.length===0||(f.key==="ArrowDown"?(f.preventDefault(),g(h=>Math.min(h+1,v.length-1))):f.key==="ArrowUp"?(f.preventDefault(),g(h=>Math.max(h-1,0))):f.key==="Enter"?(f.preventDefault(),b(v[p])):f.key==="Escape"&&d(!1))}return w.useEffect(()=>{if(!m.current)return;const f=m.current.children[p];f&&f.scrollIntoView({block:"nearest"})},[p]),u.jsxs("div",{ref:y,className:"relative",children:[u.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:l,disabled:i,onChange:f=>{s(f.target.value),d(!0),f.target.value||t("")},onFocus:()=>d(!0),onKeyDown:x}),c&&!i&&v.length>0&&u.jsx("ul",{ref:m,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:v.map((f,h)=>u.jsx("li",{onMouseDown:()=>b(f),onMouseEnter:()=>g(h),className:`px-3 py-2 text-sm cursor-pointer ${h===p?"bg-gray-700 text-white":f===n?"text-brand-400 font-semibold":"text-white"}`,children:f},f))})]})}function Ju({test:e,gym:n}){const{getBranches:t,getTrainers:r,getAllTrainers:a,getBranchForTrainer:i,load:o}=dm(),[l,s]=w.useState(e.existing_branch||""),[c,d]=w.useState(e.existing_trainer_name||""),p=w.useRef(null),[g,y]=w.useState(e.existing_dispatch_date||new Date().toISOString().split("T")[0]);w.useEffect(()=>{o(n)},[n,o]);const[m,v]=w.useState(!1),[b,x]=w.useState(!1),[f,h]=w.useState(!1),[S,E]=w.useState(!1),[T,_]=w.useState(!1),[C,R]=w.useState(""),P=t(n),q=l?r(n,l):a(n);function pe(A){if(d(A),!l&&A){const O=i(n,A);O&&s(O)}}w.useEffect(()=>{n&&l&&c&&sm(n,l,c).then(A=>{var O;return R(((O=A.data)==null?void 0:O.whatsapp)||"")}).catch(()=>R(""))},[n,l,c]);const V=async()=>{var A,O;if(!e.cells_data){window.open(`https://vald-automator-production.up.railway.app/api/programs/preview-demo?gym=${encodeURIComponent(n)}&test_type=${e.test_type}`,"_blank");return}v(!0);try{const I=await cm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:e.prev_asymmetries||null}),H=new Blob([I.data],{type:"text/html"}),xe=URL.createObjectURL(H),X=window.open(xe,"_blank");X&&X.addEventListener("load",()=>X.print())}catch(I){alert("Failed to open program: "+(((O=(A=I.response)==null?void 0:A.data)==null?void 0:O.detail)||I.message))}finally{v(!1)}},z=async()=>{var O,I,H;if(!(e.status==="UPDATED"&&!l&&!c)&&(!l||!c)){alert("Please select a branch and trainer before approving.");return}h(!0);try{const X=(O=(await I0({gym:n,branch:l||e.existing_branch||"",client_id:e.external_id!=="N/A"?e.external_id:null,client_name:e.patient,test_type:e.test_type,movements:e.movement_count,test_date:e.date,trainer_name:c||e.existing_trainer_name||null,dispatch_date:g||e.existing_dispatch_date||null,check_status:e.status,asymmetry_values:e.asymmetry_values||null})).data)==null?void 0:O.id;x(!0)}catch(xe){alert("Error approving: "+(((H=(I=xe.response)==null?void 0:I.data)==null?void 0:H.detail)||xe.message))}finally{h(!1)}},oe=async()=>{var A,O;_(!0);try{await B0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count,external_id:e.external_id!=="N/A"?e.external_id:null}),E(!0)}catch(I){alert("Error ignoring: "+(((O=(A=I.response)==null?void 0:A.data)==null?void 0:O.detail)||I.message))}finally{_(!1)}},G=async()=>{var A,O;try{await z0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),E(!1)}catch(I){alert("Error undoing ignore: "+(((O=(A=I.response)==null?void 0:A.data)==null?void 0:O.detail)||I.message))}},Te=async()=>{var A,O;try{await F0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),x(!1)}catch(I){alert("Error undoing approval: "+(((O=(A=I.response)==null?void 0:A.data)==null?void 0:O.detail)||I.message))}},N=()=>{if(!C){alert("No WhatsApp number set for this trainer.");return}const A=C.replace(/\D/g,"");window.open(`https://wa.me/${A}`,"_blank")};return u.jsxs("div",{className:`rounded-xl border p-5 space-y-4 transition-all
      ${b?"border-emerald-700 bg-emerald-950/20":S?"border-red-900 bg-red-950/20":"border-gray-700 bg-gray-900"}`,children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full ${ew[e.status]}`,children:e.status}),u.jsx("h3",{className:"font-semibold text-white",children:e.patient}),e.external_id&&e.external_id!=="N/A"&&u.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["#",e.external_id]})]}),u.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[u.jsx("span",{children:Z0[e.test_type]||e.test_type}),u.jsx("span",{children:"·"}),u.jsxs("span",{children:[e.movement_count," movements"]}),u.jsx("span",{children:"·"}),u.jsx("span",{children:e.date}),e.status==="UPDATED"&&u.jsxs("span",{className:"text-amber-400",children:["(was ",e.old_count,")"]})]})]}),u.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.patient),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[u.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),u.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),u.jsx(Qu,{options:P,value:l,onChange:A=>{s(A),d("")},onSelect:()=>{p.current&&p.current.focus()},placeholder:"Search branch…",disabled:b||S})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),u.jsx(Qu,{options:q,value:c,onChange:pe,placeholder:"Search trainer…",disabled:b||S,inputRef:p})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),u.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:g,onChange:A=>y(A.target.value),disabled:b||S})]})]}),u.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[u.jsx("button",{onClick:V,disabled:m,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:m?"Loading…":"🖨 Open & Print"}),u.jsx("button",{onClick:()=>{const A={upper:"Upper Body",lower:"Lower Body",full:"Full Body"}[e.test_type]||e.test_type;navigator.clipboard.writeText(`${e.patient} - ${A}`)},className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors",children:"📋 Copy File Name"}),!b&&!S&&u.jsx("button",{onClick:oe,disabled:T,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:T?"Ignoring…":"Ignore"}),u.jsx("div",{className:"flex-1"}),u.jsxs("button",{onClick:N,disabled:!C,title:C?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[u.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:u.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),b?u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-emerald-700/40 text-emerald-400 font-semibold border border-emerald-700",children:"✓ Approved"}),u.jsx("button",{onClick:Te,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):S?u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-red-900/40 text-red-400 font-semibold border border-red-800",children:"✗ Ignored"}),u.jsx("button",{onClick:G,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):u.jsx("button",{onClick:z,disabled:f,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:f?"Saving…":"Approve"})]})]})}const nw=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function tw(){const[e,n]=w.useState("Body Motions"),[t,r]=w.useState(!1),[a,i]=w.useState(null),[o,l]=w.useState(null),[s,c]=w.useState("desc"),d=async m=>{var v,b;r(!0),i(null),l(null);try{const x=await D0(e,m);l(x.data)}catch(x){i(((b=(v=x.response)==null?void 0:v.data)==null?void 0:b.detail)||x.message||"Failed to process file")}finally{r(!1)}},p=o?[...o].sort((m,v)=>{const b=new Date(m.date)-new Date(v.date);return s==="asc"?b:-b}):[],g=p.filter(m=>m.status==="NEW"),y=p.filter(m=>m.status==="UPDATED");return u.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Program Generation"}),u.jsx("div",{className:"flex gap-3",children:nw.map(m=>u.jsx("button",{onClick:()=>{n(m.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:u.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),u.jsx(ny,{onFile:d,loading:t}),a&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{className:"flex items-center gap-4 text-sm flex-wrap",children:[u.jsxs("span",{className:"text-gray-300",children:[u.jsx("span",{className:"font-bold text-emerald-400",children:g.length})," new"]}),u.jsx("span",{className:"text-gray-600",children:"|"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("span",{className:"font-bold text-amber-400",children:y.length})," updated"]}),o.length===0&&u.jsx("span",{className:"text-gray-500",children:"No new or updated tests found."}),u.jsxs("div",{className:"ml-auto flex gap-1",children:[u.jsx("button",{onClick:()=>c("desc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="desc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Newest first"}),u.jsx("button",{onClick:()=>c("asc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="asc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Oldest first"})]})]}),g.length>0&&u.jsxs("section",{className:"space-y-3",children:[u.jsxs("h2",{className:"text-lg font-semibold text-emerald-400 border-b border-emerald-900 pb-1",children:["New Tests (",g.length,")"]}),g.map((m,v)=>u.jsx(Ju,{test:m,gym:e},`new-${v}`))]}),y.length>0&&u.jsxs("section",{className:"space-y-3",children:[u.jsxs("h2",{className:"text-lg font-semibold text-amber-400 border-b border-amber-900 pb-1",children:["Updated Tests (",y.length,")"]}),y.map((m,v)=>u.jsx(Ju,{test:m,gym:e},`upd-${v}`))]})]})]})}const pm=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],rw=[{key:"vald",name:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",name:"Bodydot",logo:"/VALD-automator/Bodydot.png"}],Le=["January","February","March","April","May","June","July","August","September","October","November","December"];function aw(e,n){const t=new Date(e,n-1,1).getDay(),r=new Date(e,n,0).getDate();return Math.ceil((t+r)/7)}function iw(){const e=new Date,[n,t]=w.useState("vald"),[r,a]=w.useState("Body Motions"),[i,o]=w.useState("monthly"),[l,s]=w.useState(e.getFullYear()),[c,d]=w.useState(e.getMonth()+1),[p,g]=w.useState(1),[y,m]=w.useState(null),[v,b]=w.useState(null),[x,f]=w.useState(!1),[h,S]=w.useState(null),E=new Date(l,c,0).getDate(),T=aw(l,c),_=(()=>{const R=e.getFullYear(),P=e.getMonth()+1;return l>R?!0:l<R?!1:c>P?!0:c<P?!1:i==="weekly"?(p-1)*7+1>e.getDate():i==="custom"&&y?y>e.getDate():!1})(),C=async()=>{var R,P,q,pe;f(!0),S(null);try{const V={gym:r,period_type:i==="custom"?"monthly":i,year:l,month:c,week_number:i==="weekly"?p:null,start_day:i==="custom"&&y?y:null,end_day:i==="custom"&&v?v:null},z=n==="bodydot"?await Q0(V):await M0(V),oe=new Blob([z.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),G=URL.createObjectURL(oe),Te=document.createElement("a"),A=(((R=z.headers)==null?void 0:R["content-disposition"])||"").match(/filename="([^"]+)"/),O=n==="bodydot"?"Bodydot ":"",I=i==="custom"?`${Le[c-1]} ${l} (Day ${y||1}–${v||E})`:i==="monthly"?`${Le[c-1]} ${l}`:`Week ${p} - ${Le[c-1]} ${l}`;Te.href=G,Te.download=A?A[1]:`${O}${I} - ${r}.xlsx`,Te.click(),URL.revokeObjectURL(G)}catch(V){let z=V.message;if(((P=V.response)==null?void 0:P.data)instanceof Blob)try{z=JSON.parse(await V.response.data.text()).detail||z}catch{}else z=((pe=(q=V.response)==null?void 0:q.data)==null?void 0:pe.detail)||z;S(z||"Failed to generate report")}finally{f(!1)}};return u.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8",children:[u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Reports"}),u.jsx("div",{}),u.jsx("h1",{className:"text-2xl font-bold text-white hidden lg:block",children:"Payment Report"})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start",children:[u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Service"}),u.jsx("div",{className:"flex gap-3",children:rw.map(R=>u.jsx("button",{onClick:()=>t(R.key),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===R.key?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:u.jsx("img",{src:R.logo,alt:R.name,className:"h-14 w-28 object-contain px-0.5 py-px"})},R.key))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),u.jsx("div",{className:"flex gap-3",children:pm.map(R=>u.jsx("button",{onClick:()=>a(R.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${r===R.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:u.jsx("img",{src:R.logo,alt:R.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},R.name))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Report Type"}),u.jsx("div",{className:"flex gap-2",children:["monthly","weekly","custom"].map(R=>u.jsx("button",{onClick:()=>o(R),className:`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors
                ${i===R?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:R},R))})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),u.jsx("select",{value:c,onChange:R=>d(Number(R.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Le.map((R,P)=>u.jsx("option",{value:P+1,children:R},P+1))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),u.jsx("select",{value:l,onChange:R=>s(Number(R.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(R=>u.jsx("option",{value:R,children:R},R))})]})]}),i==="custom"&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date Range"}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"Start Day"}),u.jsxs("select",{value:y||"",onChange:R=>m(R.target.value?Number(R.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[u.jsx("option",{value:"",children:"—"}),Array.from({length:E},(R,P)=>P+1).map(R=>u.jsx("option",{value:R,children:R},R))]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"End Day"}),u.jsxs("select",{value:v||"",onChange:R=>b(R.target.value?Number(R.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[u.jsx("option",{value:"",children:"—"}),Array.from({length:E},(R,P)=>P+1).map(R=>u.jsx("option",{value:R,children:R},R))]})]})]})]}),i==="weekly"&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Week"}),u.jsx("div",{className:"flex gap-2 flex-wrap",children:Array.from({length:T},(R,P)=>P+1).map(R=>u.jsxs("button",{onClick:()=>g(R),className:`w-12 h-10 rounded-lg text-sm font-semibold transition-colors
                  ${p===R?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:["W",R]},R))}),u.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Week ",p,": days ",(p-1)*7+1,"–",Math.min(p*7,new Date(l,c,0).getDate())]})]}),h&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:h}),u.jsx("button",{onClick:C,disabled:x||_,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:x?"Generating…":"Generate & Download Report"}),_&&u.jsx("p",{className:"text-xs text-amber-500 text-center",children:"Cannot generate a report for a future period."}),u.jsxs("p",{className:"text-xs text-gray-500 text-center",children:[n==="bodydot"?u.jsxs(u.Fragment,{children:["Report pulls all ",u.jsx("strong",{className:"text-gray-400",children:"approved"})," Bodydot tests"]}):u.jsxs(u.Fragment,{children:["Report pulls all ",u.jsx("strong",{className:"text-gray-400",children:"approved"})," programs"]}),i==="weekly"?` dispatched in week ${p} of ${Le[c-1]} ${l}`:i==="custom"?` dispatched between day ${y||1} and day ${v||E} of ${Le[c-1]} ${l}`:` dispatched in ${Le[c-1]} ${l}`,"."]})]}),u.jsx("div",{className:"hidden lg:block bg-gray-700 self-stretch"}),u.jsx("div",{className:"space-y-6",children:u.jsx(lw,{})})]}),u.jsx("div",{className:"border-t border-gray-700 pt-6",children:u.jsx(ow,{})})]})}function ow(){const e=new Date,[n,t]=w.useState("Body Motions"),[r,a]=w.useState(e.getMonth()+1),[i,o]=w.useState(e.getFullYear()),[l,s]=w.useState(!1),[c,d]=w.useState(null),p=`${Le[(r-2+12)%12]} ${r===1?i-1:i}`,g=async()=>{var y,m,v;s(!0),d(null);try{const b=await W0(n,r,i),x=new Blob([b.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),f=URL.createObjectURL(x),h=document.createElement("a"),E=(((y=b.headers)==null?void 0:y["content-disposition"])||"").match(/filename="([^"]+)"/);h.href=f;const T=String(i%100).padStart(2,"0"),_=Le[(r-2+12)%12].slice(0,3).toUpperCase(),C=Le[r-1].slice(0,3).toUpperCase(),R=`Test Growth Tracker - ${n} - ${_}-${C} ${T}.xlsx`;h.download=E?E[1]:R,h.click(),URL.revokeObjectURL(f)}catch(b){d(((v=(m=b.response)==null?void 0:m.data)==null?void 0:v.detail)||b.message||"Failed to generate growth tracker")}finally{s(!1)}};return u.jsxs("div",{className:"max-w-2xl space-y-5",children:[u.jsx("div",{children:u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Test Growth Tracker"})}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),u.jsx("div",{className:"flex gap-3",children:pm.map(y=>u.jsx("button",{onClick:()=>t(y.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===y.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:u.jsx("img",{src:y.logo,alt:y.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},y.name))})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),u.jsx("select",{value:r,onChange:y=>a(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Le.map((y,m)=>u.jsx("option",{value:m+1,children:y},m+1))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),u.jsx("select",{value:i,onChange:y=>o(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(y=>u.jsx("option",{value:y,children:y},y))})]})]}),c&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:c}),u.jsx("button",{onClick:g,disabled:l,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:l?"Generating…":"Generate & Download Growth Tracker"}),u.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Compares ",u.jsxs("strong",{className:"text-gray-400",children:[Le[r-1]," ",i]})," vs"," ",u.jsx("strong",{className:"text-gray-400",children:p})," test counts per branch and trainer."]})]})}function lw(){const e=new Date,[n,t]=w.useState(e.getMonth()+1),[r,a]=w.useState(e.getFullYear()),[i,o]=w.useState(!1),[l,s]=w.useState(null),c=async()=>{var d,p,g;o(!0),s(null);try{const y=await V0(n,r),m=new Blob([y.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),v=URL.createObjectURL(m),b=document.createElement("a"),f=(((d=y.headers)==null?void 0:d["content-disposition"])||"").match(/filename="([^"]+)"/);b.href=v,b.download=f?f[1]:`Payment - ${Le[n-1]} ${r}.xlsx`,b.click(),URL.revokeObjectURL(v)}catch(y){s(((g=(p=y.response)==null?void 0:p.data)==null?void 0:g.detail)||y.message||"Failed to generate payment report")}finally{o(!1)}};return u.jsxs("div",{className:"space-y-5",children:[u.jsx("h1",{className:"text-2xl font-bold text-white lg:hidden",children:"Payment Report"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),u.jsx("select",{value:n,onChange:d=>t(Number(d.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Le.map((d,p)=>u.jsx("option",{value:p+1,children:d},p+1))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),u.jsx("select",{value:r,onChange:d=>a(Number(d.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(d=>u.jsx("option",{value:d,children:d},d))})]})]}),l&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:l}),u.jsx("button",{onClick:c,disabled:i,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:i?"Generating…":"Generate & Download Payment Report"}),u.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Appends all programs from ",u.jsx("strong",{className:"text-gray-400",children:"May 2026"})," through ",u.jsxs("strong",{className:"text-gray-400",children:[Le[n-1]," ",r]})," to the payment report."]})]})}const sw=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],cw={upper:"Upper Body",lower:"Lower Body",full:"Full Body"};function uw({item:e,gym:n}){const[t,r]=w.useState(!1),a=async()=>{var i,o;r(!0);try{const l=await cm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:null}),s=new Blob([l.data],{type:"text/html"}),c=URL.createObjectURL(s),d=window.open(c,"_blank");d&&d.addEventListener("load",()=>d.print())}catch(l){alert("Failed to open program: "+(((o=(i=l.response)==null?void 0:i.data)==null?void 0:o.detail)||l.message))}finally{r(!1)}};return u.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 flex items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-semibold text-white",children:e.patient}),u.jsxs("p",{className:"text-sm text-gray-400 mt-0.5",children:[cw[e.test_type]||e.test_type,u.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.movement_count," movements",u.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.date]})]}),u.jsx("button",{onClick:a,disabled:t,className:"shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:t?"Loading…":"🖨 Open & Print"})]})}function dw(){const[e,n]=w.useState("Body Motions"),[t,r]=w.useState(!1),[a,i]=w.useState(null),[o,l]=w.useState(null),s=async g=>{var y,m;if(g.length){r(!0),i(null),l(null);try{const v=await H0(e,g[0]);l(v.data)}catch(v){i(((m=(y=v.response)==null?void 0:y.data)==null?void 0:m.detail)||v.message||"Failed to process file")}finally{r(!1)}}},{getRootProps:c,getInputProps:d,isDragActive:p}=Ms({onDrop:s,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:t});return u.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Generate"}),u.jsx("div",{className:"flex gap-3",children:sw.map(g=>u.jsx("button",{onClick:()=>{n(g.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===g.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:u.jsx("img",{src:g.logo,alt:g.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},g.name))}),u.jsxs("div",{...c(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
          ${p?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
          ${t?"opacity-50 cursor-not-allowed":""}`,children:[u.jsx("input",{...d()}),u.jsx("div",{className:"text-4xl mb-3",children:"📂"}),t?u.jsx("p",{className:"text-gray-400",children:"Generating programs…"}):p?u.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your VALD export file here"}),u.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]}),a&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&u.jsxs("div",{className:"space-y-3",children:[u.jsxs("p",{className:"text-sm text-gray-400",children:[u.jsx("span",{className:"font-bold text-white",children:o.length})," program",o.length!==1?"s":""," found"]}),o.length===0&&u.jsx("p",{className:"text-gray-500 text-sm",children:"No programs could be parsed from this file."}),o.map((g,y)=>u.jsx(uw,{item:g,gym:e},y))]})]})}const pw=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function fw({trainer:e,allBranches:n,onUpdated:t,onDeleted:r}){const[a,i]=w.useState(!1),[o,l]=w.useState(e.name),[s,c]=w.useState(e.whatsapp||""),[d,p]=w.useState(e.branch),[g,y]=w.useState(!1),[m,v]=w.useState(!1),b=o!==e.name||s!==(e.whatsapp||"")||d!==e.branch,x=async()=>{var S,E;y(!0);try{const T=await $0(e.id,{name:o,whatsapp:s,branch:d});t(T.data),i(!1)}catch(T){alert("Failed to save: "+(((E=(S=T.response)==null?void 0:S.data)==null?void 0:E.detail)||T.message))}finally{y(!1)}},f=async()=>{var S,E;if(confirm(`Delete "${e.name}"?`)){v(!0);try{await K0(e.id),r(e.id)}catch(T){alert("Failed to delete: "+(((E=(S=T.response)==null?void 0:S.data)==null?void 0:E.detail)||T.message)),v(!1)}}},h=()=>{l(e.name),c(e.whatsapp||""),p(e.branch),i(!1)};return a?u.jsxs("div",{className:"py-3 border-b border-gray-700 space-y-2",children:[u.jsxs("div",{className:"flex gap-2 items-center",children:[u.jsx("input",{value:o,onChange:S=>l(S.target.value),placeholder:"Name",className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"}),u.jsx("input",{value:s,onChange:S=>c(S.target.value),placeholder:"WhatsApp e.g. +966...",className:"w-44 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"})]}),u.jsxs("div",{className:"flex gap-2 items-center",children:[u.jsx("select",{value:d,onChange:S=>p(S.target.value),className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",children:n.map(S=>u.jsx("option",{value:S,children:S},S))}),u.jsx("button",{onClick:x,disabled:g||!b,className:"px-3 py-1 text-xs rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40",children:g?"Saving…":"Save"}),u.jsx("button",{onClick:h,className:"px-3 py-1 text-xs rounded border border-gray-600 text-gray-400 hover:text-white",children:"Cancel"})]})]}):u.jsxs("div",{className:"flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0 group",children:[u.jsx("span",{className:"w-72 shrink-0 text-sm text-white",children:e.name}),u.jsx("span",{className:"flex-1 text-sm text-gray-400",children:e.whatsapp||u.jsx("span",{className:"text-gray-600 italic",children:"no number"})}),u.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[u.jsx("button",{onClick:()=>i(!0),className:"text-xs px-2.5 py-1 rounded border border-gray-600 text-gray-300 hover:border-brand-500 hover:text-brand-300",children:"Edit"}),u.jsx("button",{onClick:f,disabled:m,className:"text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-500 hover:border-red-600 hover:text-red-400 disabled:opacity-40",children:m?"…":"Delete"})]})]})}function mw({gym:e,branch:n,onAdded:t}){const[r,a]=w.useState(""),[i,o]=w.useState(""),[l,s]=w.useState(!1),c=async()=>{var d,p;if(r.trim()){s(!0);try{const g=await U0({gym:e,branch:n,name:r.trim(),whatsapp:i});t(g.data),a(""),o("")}catch(g){alert("Failed to add: "+(((p=(d=g.response)==null?void 0:d.data)==null?void 0:p.detail)||g.message))}finally{s(!1)}}};return u.jsxs("div",{className:"flex gap-2 pt-3 border-t border-gray-700 mt-1",children:[u.jsx("input",{value:r,onChange:d=>a(d.target.value),placeholder:"New trainer name",className:"flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:d=>d.key==="Enter"&&c()}),u.jsx("input",{value:i,onChange:d=>o(d.target.value),placeholder:"WhatsApp (optional)",className:"w-44 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:d=>d.key==="Enter"&&c()}),u.jsx("button",{onClick:c,disabled:l||!r.trim(),className:"px-4 py-1.5 text-sm rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40 shrink-0",children:l?"Adding…":"+ Add"})]})}function gw(){var y;const{data:e,load:n,reload:t,getBranches:r}=dm(),[a,i]=w.useState("Body Motions"),[o,l]=w.useState("");w.useEffect(()=>{n(a)},[a]);const s=r(a),c=o?[...((y=e[a])==null?void 0:y[o])||[]].sort((m,v)=>m.name.localeCompare(v.name)):[],d=async m=>{m.branch!==o?(await t(a),l(m.branch)):t(a)},p=()=>t(a),g=()=>t(a);return u.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Trainers"}),u.jsx("div",{className:"flex gap-3",children:pw.map(m=>u.jsx("button",{onClick:()=>{i(m.name),l("")},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${a===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:u.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),u.jsxs("select",{value:o,onChange:m=>l(m.target.value),className:"bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72",children:[u.jsx("option",{value:"",children:"— Select branch —"}),s.map(m=>u.jsx("option",{value:m,children:m},m))]})]}),o&&u.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5",children:[u.jsxs("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3",children:[o," — ",c.length," trainer",c.length!==1?"s":""]}),c.map(m=>u.jsx(fw,{trainer:{...m,branch:o},allBranches:s,onUpdated:d,onDeleted:p},m.id)),u.jsx(mw,{gym:a,branch:o,onAdded:g})]})]})}const hw="https://bdot-proxy.andyayas27.workers.dev",fm=`${hw}/v1`,xw="YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk",Xu=[{id:"bf9ffaec-d3ed-4742-bce9-945f619ea1bc",name:"Body Motions – Al Sahafa",bilingual:!0,gym:"Body Motions",branch:"RUH - Al Sahafa"},{id:"1627c00e-e275-4356-91ae-6f85127bd21c",name:"Body Masters – Al Aarid",bilingual:!0,gym:"Body Masters",branch:"RUH - Al Aarid"},{id:"ebce917d-1c31-4516-8396-64283b4cbeaa",name:"Body Coach",bilingual:!1,gym:"Body Coach",branch:null}];function vw(e){let n=0,t=0;for(const r of(e==null?void 0:e.sequences)||[])for(const a of r.stepResults||[])t+=1,a.status==="Analyzed"&&(n+=1);return{analyzed:n,total:t,valid:n>0&&n>t-n}}const Zu=e=>new Promise(n=>setTimeout(n,e)),yw=4;let wi=0;const mm=[];function ww(){return wi<yw?(wi++,Promise.resolve()):new Promise(e=>mm.push(e))}function bw(){wi--;const e=mm.shift();e&&(wi++,e())}async function gm(e,n,t=5){let r;for(let a=0;a<t;a++){let i;try{i=await fetch(e,n)}catch(o){r=o,await Zu(Math.min(2**a,8)*1e3);continue}if(i.status===429||i.status>=500){const o=parseFloat(i.headers.get("Retry-After")),l=(Number.isFinite(o)?o:Math.min(2**a,8))*1e3+Math.random()*300;r=new Error(`HTTP ${i.status}`),await Zu(l);continue}return i}throw r||new Error("request failed")}let Ca=null,ed=0,fr=null;async function Sw(){return Ca&&Date.now()<ed-6e4?Ca:fr||(fr=(async()=>{try{const e=await gm(`${fm}/oauth/token`,{method:"POST",headers:{Authorization:`Basic ${xw}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});if(!e.ok)throw new Error(`Auth failed (HTTP ${e.status})`);const n=await e.json();return Ca=n.access_token,ed=Date.now()+n.expires_in*1e3,Ca}finally{fr=null}})(),fr)}async function Ws(e){await ww();try{const n=await Sw(),t=await gm(`${fm}${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}finally{bw()}}async function hm(e){const n=await Ws(`/clients?organizationId=${e}`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")),t}const Io=new Map;async function xm(e){if(Io.has(e))return Io.get(e);const n=await Ws(`/clients/${e}/measurement-sessions`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>new Date(a.createdAt)-new Date(r.createdAt)),Io.set(e,t),t}const Fo=new Map;async function qi(e,n){if(Fo.has(n))return Fo.get(n);const t=await Ws(`/clients/${e}/measurement-sessions/${n}`);return Fo.set(n,t),t}const kw=`<!DOCTYPE html>
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
</html>`,Ew=`${window.location.origin}/VALD-automator/bodydot/`;function qs(e,n,t){const r={session:e,clientName:n,lang:t?"bilingual":"en",autoPrint:!0},a='<meta charset="UTF-8">',i=`<base href="${Ew}"><script>window.__BODYDOT__ = ${JSON.stringify(r)};<\/script>`,o=kw.replace(a,`${a}${i}`),l=new Blob([o],{type:"text/html"}),s=URL.createObjectURL(l);if(!window.open(s,"_blank"))throw URL.revokeObjectURL(s),new Error("Popup blocked — allow popups for this site and try again.");setTimeout(()=>URL.revokeObjectURL(s),6e4)}function _w({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o,allowCustom:l=!1}){const[s,c]=w.useState(n||""),[d,p]=w.useState(!1),[g,y]=w.useState(0),m=w.useRef(null),v=w.useRef(null),b=s?e.filter(h=>h.toLowerCase().includes(s.toLowerCase())):e;w.useEffect(()=>{function h(S){m.current&&!m.current.contains(S.target)&&p(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),w.useEffect(()=>{c(n||"")},[n]),w.useEffect(()=>{y(0)},[s]);function x(h){t(h),c(h),p(!1),r&&r(h)}function f(h){!d||b.length===0||(h.key==="ArrowDown"?(h.preventDefault(),y(S=>Math.min(S+1,b.length-1))):h.key==="ArrowUp"?(h.preventDefault(),y(S=>Math.max(S-1,0))):h.key==="Enter"?(h.preventDefault(),x(b[g])):h.key==="Escape"&&p(!1))}return w.useEffect(()=>{if(!v.current)return;const h=v.current.children[g];h&&h.scrollIntoView({block:"nearest"})},[g]),u.jsxs("div",{ref:m,className:"relative",children:[u.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:s,disabled:i,onChange:h=>{const S=h.target.value;c(S),p(!0),l?t(S):S||t("")},onFocus:()=>p(!0),onKeyDown:f}),d&&!i&&b.length>0&&u.jsx("ul",{ref:v,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:b.map((h,S)=>u.jsx("li",{onMouseDown:()=>x(h),onMouseEnter:()=>y(S),className:`px-3 py-2 text-sm cursor-pointer ${S===g?"bg-gray-700 text-white":h===n?"text-brand-400 font-semibold":"text-white"}`,children:h},h))})]})}function Rw({test:e,org:n,roster:t,onStatus:r,picker:a}){const i=u.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.client_name||""),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[u.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),u.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),o=e.stored||{},[l,s]=w.useState(o.trainer_name||""),[c,d]=w.useState(o.dispatch_date||new Date().toISOString().slice(0,10)),[p,g]=w.useState(!1),[y,m]=w.useState(!1),[v,b]=w.useState("");w.useEffect(()=>{n.gym&&n.branch&&l?sm(n.gym,n.branch,l).then(_=>{var C;return b(((C=_.data)==null?void 0:C.whatsapp)||"")}).catch(()=>b("")):b("")},[n.gym,n.branch,l]);const x=()=>({gym:n.gym,org_id:n.id,client_id:e.client_id,client_name:e.client_name||"",session_id:e.session_id,test_date:e.test_date,valid:e.valid}),f=async()=>{var _,C;g(!0);try{const{data:R}=await Yu({...x(),trainer_name:l.trim()||null,dispatch_date:c||null,sent:o.sent||!1});r(e.session_id,R)}catch(R){alert("Error approving: "+(((C=(_=R.response)==null?void 0:_.data)==null?void 0:C.detail)||R.message))}finally{g(!1)}},h=async()=>{var _,C;g(!0);try{const{data:R}=await G0(x());r(e.session_id,R)}catch(R){alert("Error ignoring: "+(((C=(_=R.response)==null?void 0:_.data)==null?void 0:C.detail)||R.message))}finally{g(!1)}},S=async()=>{m(!0);try{const _=await qi(e.client_id,e.session_id);qs(_,e.client_name||"",n.bilingual)}catch(_){alert("Could not open program: "+_.message)}finally{m(!1)}},E=()=>{if(!v){alert("No WhatsApp number set for this trainer.");return}window.open(`https://wa.me/${v.replace(/\D/g,"")}`,"_blank")},T=async()=>{var _,C;g(!0);try{const{data:R}=await Yu({...x(),trainer_name:null,dispatch_date:null,sent:!1});r(e.session_id,R)}catch(R){alert("Error approving: "+(((C=(_=R.response)==null?void 0:_.data)==null?void 0:C.detail)||R.message))}finally{g(!1)}};return e.valid?u.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-4",children:[u.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"NEW"}),u.jsx("h3",{className:"font-semibold text-white",children:e.client_name||"—"})]}),u.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[u.jsx("span",{children:"VALID"}),u.jsx("span",{children:"·"}),u.jsxs("span",{children:[e.analyzed,"/",e.total]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,i]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),u.jsx(_w,{options:t,value:l,onChange:s,placeholder:"Search or type a name…",allowCustom:!0,disabled:p})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),u.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:c,onChange:_=>d(_.target.value),disabled:p})]})]}),u.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[u.jsx("button",{onClick:S,disabled:y,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:y?"Loading…":"🖨 Open & Print"}),u.jsx("button",{onClick:h,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:"Ignore"}),u.jsx("div",{className:"flex-1"}),u.jsxs("button",{onClick:E,disabled:!v,title:v?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[u.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:u.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),u.jsx("button",{onClick:f,disabled:p,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"Saving…":"Approve"})]})]}):u.jsxs("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-950/10 px-5 py-3",children:[u.jsxs("div",{className:"min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[u.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"INVALID"}),u.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),u.jsxs("p",{className:"text-xs mt-0.5 text-gray-500",children:[e.analyzed,"/",e.total," analyzed"]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,i,u.jsx("button",{onClick:T,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"…":"Approve"})]})]})}const hn=25,Tw=4,Cw="2026-05-15";function Gs(e){return(e||"").normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/\s+/g," ").trim()}function vm(e,n){const t=Gs(e);return n.every(r=>t.includes(r))}function Lw(e){const n=new Date(e);return isNaN(n)?null:n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function bi(e){const n=new Date(e);if(isNaN(n))return e;const t=n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),r=n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${t} · ${r}`}function Aw({test:e,org:n,picker:t,onStatus:r}){var c,d,p;const[a,i]=w.useState(!1),o=((c=e.stored)==null?void 0:c.valid)===!1,l=async()=>{i(!0);try{const g=await qi(e.client_id,e.session_id);qs(g,e.client_name||"",n.bilingual)}catch(g){alert("Could not generate program: "+g.message)}finally{i(!1)}},s=async()=>{var g,y;i(!0);try{const{data:m}=await Y0(e.session_id);r(e.session_id,m)}catch(m){alert("Could not undo: "+(((y=(g=m.response)==null?void 0:g.data)==null?void 0:y.detail)||m.message))}finally{i(!1)}};return u.jsxs("div",{className:`flex items-center justify-between gap-4 rounded-xl border px-5 py-3 ${o?"border-red-900/50 bg-red-950/10":"border-emerald-800/60 bg-emerald-950/10"}`,children:[u.jsxs("div",{className:"min-w-0",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[o?u.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"RECORDED · INVALID"}):u.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"APPROVED"}),u.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),u.jsxs("p",{className:"text-xs mt-0.5 text-gray-400",children:[bi(e.created_at||e.test_date),!o&&((d=e.stored)!=null&&d.trainer_name?u.jsxs("span",{className:"text-emerald-400",children:[" · ",e.stored.trainer_name]}):" · no trainer"),(p=e.stored)!=null&&p.sent?" · sent":""]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t,!o&&u.jsx("button",{onClick:l,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:a?"Loading…":"Generate Program"}),u.jsx("button",{onClick:s,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 disabled:opacity-50 transition-colors",children:"Undo"})]})]})}function Nw({client:e,org:n,roster:t,statusMap:r,onStatus:a,searching:i}){const[o,l]=w.useState(void 0),[s,c]=w.useState(null),[d,p]=w.useState(void 0);w.useEffect(()=>{let h=!0;return l(void 0),c(null),xm(e.id).then(S=>h&&l((S||[]).filter(E=>(E.createdAt||"").slice(0,10)>=Cw))).catch(()=>h&&l(null)),()=>{h=!1}},[e.id]);const g=s||o&&o[0]&&o[0].id;w.useEffect(()=>{let h=!0;if(g)return p(void 0),qi(e.id,g).then(S=>h&&p(S)).catch(()=>h&&p(null)),()=>{h=!1}},[e.id,g]);const y=h=>u.jsxs("div",{className:"rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm",children:[u.jsx("span",{className:"font-medium text-white",children:e.name||"—"}),u.jsxs("span",{className:"text-gray-500",children:[" · ",h]})]});if(o===void 0)return i?y("loading tests…"):null;if(!o||!o.length)return i?y("no test data"):null;const m=o.find(h=>h.id===g)||o[0],v=r[g],b=d?vw(d):null,x={client_id:e.id,client_name:e.name,session_id:g,created_at:m.createdAt,test_date:(m.createdAt||"").slice(0,10),valid:b?b.valid:void 0,analyzed:b?b.analyzed:0,total:b?b.total:0,stored:v},f=o.length>1?u.jsx("select",{value:g,onChange:h=>c(h.target.value),className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:o.map((h,S)=>u.jsxs("option",{value:h.id,children:[bi(h.createdAt),S===0?" (latest)":""]},h.id))}):u.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:bi(m.createdAt)});return v!=null&&v.approved?u.jsx(Aw,{test:x,org:n,picker:f,onStatus:a}):d===void 0?y("checking validity…"):u.jsx(Rw,{test:x,org:n,roster:t,onStatus:a,picker:f})}function jw({org:e}){const[n,t]=w.useState([]),[r,a]=w.useState(!1),[i,o]=w.useState(null),[l,s]=w.useState(""),[c,d]=w.useState(0),[p,g]=w.useState([]),[y,m]=w.useState({});w.useEffect(()=>{let E=!0;return a(!0),o(null),t([]),s(""),d(0),m({}),hm(e.id).then(T=>E&&t(T)).catch(T=>E&&o(`Error loading clients: ${T.message}`)).finally(()=>E&&a(!1)),O0(e.gym,e.branch).then(T=>E&&g(T.data||[])).catch(()=>{}),q0(e.gym).then(T=>{const _={};for(const C of T.data||[])_[C.session_id]=C;E&&m(_)}).catch(()=>{}),()=>{E=!1}},[e.id]);const v=(E,T)=>m(_=>({..._,[E]:T})),b=Gs(l).split(" ").filter(Boolean),x=b.length?n.filter(E=>vm(E.name,b)):n,f=Math.max(1,Math.ceil(x.length/hn)),h=Math.min(c,f-1),S=x.slice(h*hn,h*hn+hn);return u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap",children:[u.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),u.jsx("input",{type:"text",value:l,onChange:E=>{s(E.target.value),d(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),i&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:i}),r?u.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):x.length===0?u.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"space-y-3",children:S.map(E=>u.jsx(Nw,{client:E,org:e,roster:p,statusMap:y,onStatus:v,searching:b.length>0},E.id))}),u.jsx(ym,{safePage:h,totalPages:f,count:S.length,total:x.length,setPage:d})]})]})}function Pw({org:e}){const[n,t]=w.useState([]),[r,a]=w.useState(!1),[i,o]=w.useState(null),[l,s]=w.useState(""),[c,d]=w.useState(0),[p,g]=w.useState({}),y=w.useRef(0);w.useEffect(()=>{let S=!0;return s(""),d(0),o(null),t([]),g({}),a(!0),hm(e.id).then(E=>S&&t(E)).catch(E=>S&&o(`Error loading clients: ${E.message}`)).finally(()=>S&&a(!1)),()=>{S=!1}},[e.id]);const m=Gs(l).split(" ").filter(Boolean),v=m.length?n.filter(S=>vm(S.name,m)):n,b=Math.max(1,Math.ceil(v.length/hn)),x=Math.min(c,b-1),f=v.slice(x*hn,x*hn+hn),h=f.map(S=>S.id).join(",");return w.useEffect(()=>{if(!f.length)return;const S=++y.current,E=f.filter(C=>p[C.id]===void 0);if(!E.length)return;let T=0;const _=async()=>{for(;T<E.length;){if(S!==y.current)return;const C=E[T++];let R=null;try{R=await xm(C.id)}catch{R=null}if(S!==y.current)return;g(P=>({...P,[C.id]:R}))}};Promise.all(Array.from({length:Math.min(Tw,E.length)},_))},[h]),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-3",children:[u.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),u.jsx("input",{type:"text",value:l,onChange:S=>{s(S.target.value),d(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),i&&u.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:i}),r?u.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):v.length===0?u.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"rounded-xl border border-gray-800 bg-gray-900 overflow-hidden",children:f.map(S=>u.jsx(Dw,{client:S,bilingual:e.bilingual,sessionInfo:p[S.id]},S.id))}),u.jsx(ym,{safePage:x,totalPages:b,count:f.length,total:v.length,setPage:d})]})]})}function Dw({client:e,bilingual:n,sessionInfo:t}){const[r,a]=w.useState(!1),[i,o]=w.useState(null),l=Array.isArray(t)?t:[],s=l.length>1,c=i||l[0]&&l[0].id,d=async()=>{if(c){a(!0);try{const g=await qi(e.id,c);qs(g,e.name||"",n)}catch(g){alert(`Could not generate program for ${e.name||"client"}: ${g.message}`)}finally{a(!1)}}};let p;return t===void 0?p=u.jsx("span",{className:"text-gray-600",children:"Loading tests…"}):l.length?p=u.jsxs("span",{className:"text-gray-400",children:["Test date: ",Lw(l[0].createdAt),s&&u.jsxs("span",{className:"text-brand-400",children:[" · ",l.length," tests"]})]}):p=u.jsx("span",{className:"text-gray-600",children:"No test data"}),u.jsxs("div",{className:"flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0",children:[u.jsxs("div",{className:"min-w-0",children:[u.jsx("p",{className:"font-medium text-white",children:e.name||"—"}),u.jsx("p",{className:"text-xs mt-0.5",children:p})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[s&&u.jsx("select",{value:c,onChange:g=>o(g.target.value),disabled:r,className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:l.map((g,y)=>u.jsxs("option",{value:g.id,children:[bi(g.createdAt),y===0?" (latest)":""]},g.id))}),u.jsx("button",{onClick:d,disabled:r||!c,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:r?"Loading…":"Generate Program"})]})]})}function ym({safePage:e,totalPages:n,count:t,total:r,setPage:a}){return u.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400",children:[u.jsxs("span",{children:[e*hn+1,"–",e*hn+t," of ",r]}),n>1&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:()=>a(i=>Math.max(0,i-1)),disabled:e===0,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"← Prev"}),u.jsxs("span",{className:"text-gray-500",children:["Page ",e+1," of ",n]}),u.jsx("button",{onClick:()=>a(i=>Math.min(n-1,i+1)),disabled:e>=n-1,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"Next →"})]})]})}function Ow(){const[e,n]=w.useState(null),t=Xu.find(r=>r.id===e);return u.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl font-bold text-white",children:"Bodydot"}),u.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Select a center, search a client, then approve and generate programs."})]}),u.jsx("div",{className:"flex flex-wrap gap-3",children:Xu.map(r=>u.jsx("button",{onClick:()=>n(r.id),className:`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${e===r.id?"border-brand-500 bg-brand-900/20":"border-gray-700 bg-gray-900 hover:border-gray-500"}`,children:u.jsx("div",{className:"font-semibold text-white",children:r.name})},r.id))}),t&&(t.branch?u.jsx(jw,{org:t},t.id):u.jsx(Pw,{org:t},t.id))]})}function Iw(){return u.jsx(X0,{children:u.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-900",children:[u.jsxs("nav",{className:"bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center",children:[u.jsx("div",{className:"flex items-center justify-center mr-12 h-[90px] w-[85px]",children:u.jsx("img",{src:"/VALD-automator/FIT_LOGO.png",alt:"Fit Logo",className:"h-[49px] w-auto object-contain translate-x-[6px]"})}),u.jsxs("div",{className:"flex gap-1",children:[u.jsx(ur,{to:"/",end:!0,className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"VALD Generation"}),u.jsx(ur,{to:"/bodydot",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Bodydot Generation"}),u.jsx(ur,{to:"/reports",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Reports"})]}),u.jsx("div",{className:"flex-1"}),u.jsx("div",{className:"w-px h-6 bg-gray-700 mx-4"}),u.jsxs("div",{className:"flex gap-1",children:[u.jsx(ur,{to:"/quick",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Generate"}),u.jsx(ur,{to:"/trainers",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Trainers"})]})]}),u.jsx("main",{className:"flex-1 p-6",children:u.jsxs(Ux,{children:[u.jsx(kt,{path:"/",element:u.jsx(tw,{})}),u.jsx(kt,{path:"/reports",element:u.jsx(iw,{})}),u.jsx(kt,{path:"/quick",element:u.jsx(dw,{})}),u.jsx(kt,{path:"/trainers",element:u.jsx(gw,{})}),u.jsx(kt,{path:"/bodydot",element:u.jsx(Ow,{})})]})})]})})}Bo.createRoot(document.getElementById("root")).render(u.jsx(Gl.StrictMode,{children:u.jsx(Qx,{children:u.jsx(Iw,{})})}));
