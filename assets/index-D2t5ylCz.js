function um(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function Gu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yu={exports:{}},yi={},Qu={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),dm=Symbol.for("react.portal"),pm=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),vm=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),ym=Symbol.for("react.memo"),wm=Symbol.for("react.lazy"),Js=Symbol.iterator;function bm(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var Ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xu=Object.assign,Zu={};function Xt(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Ju}Xt.prototype.isReactComponent={};Xt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Xt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=Xt.prototype;function Hl(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Ju}var Ul=Hl.prototype=new ed;Ul.constructor=Hl;Xu(Ul,Xt.prototype);Ul.isPureReactComponent=!0;var Xs=Array.isArray,nd=Object.prototype.hasOwnProperty,$l={current:null},td={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,n,t){var r,a={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)nd.call(n,r)&&!td.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:qr,type:e,key:i,ref:o,props:a,_owner:$l.current}}function Sm(e,n){return{$$typeof:qr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function km(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Zs=/\/+/g;function Zi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?km(""+e.key):n.toString(36)}function La(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qr:case dm:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Zi(o,0):r,Xs(a)?(t="",e!=null&&(t=e.replace(Zs,"$&/")+"/"),La(a,n,t,"",function(c){return c})):a!=null&&(Kl(a)&&(a=Sm(a,t+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Zs,"$&/")+"/")+e)),n.push(a)),1;if(o=0,r=r===""?".":r+":",Xs(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Zi(i,l);o+=La(i,n,t,s,a)}else if(s=bm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Zi(i,l++),o+=La(i,n,t,s,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(e,n,t){if(e==null)return e;var r=[],a=0;return La(e,r,"","",function(i){return n.call(t,i,a++)}),r}function Em(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Ca={transition:null},_m={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:$l};function ad(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ca,forEach:function(e,n,t){ca(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ca(e,function(){n++}),n},toArray:function(e){return ca(e,function(n){return n})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Xt;z.Fragment=pm;z.Profiler=mm;z.PureComponent=Hl;z.StrictMode=fm;z.Suspense=xm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;z.act=ad;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xu({},e.props),a=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=$l.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)nd.call(n,s)&&!td.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:qr,type:e.type,key:a,ref:i,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gm,_context:e},e.Consumer=e};z.createElement=rd;z.createFactory=function(e){var n=rd.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:vm,render:e}};z.isValidElement=Kl;z.lazy=function(e){return{$$typeof:wm,_payload:{_status:-1,_result:e},_init:Em}};z.memo=function(e,n){return{$$typeof:ym,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=Ca.transition;Ca.transition={};try{e()}finally{Ca.transition=n}};z.unstable_act=ad;z.useCallback=function(e,n){return Ce.current.useCallback(e,n)};z.useContext=function(e){return Ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};z.useEffect=function(e,n){return Ce.current.useEffect(e,n)};z.useId=function(){return Ce.current.useId()};z.useImperativeHandle=function(e,n,t){return Ce.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return Ce.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return Ce.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return Ce.current.useMemo(e,n)};z.useReducer=function(e,n,t){return Ce.current.useReducer(e,n,t)};z.useRef=function(e){return Ce.current.useRef(e)};z.useState=function(e){return Ce.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return Ce.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return Ce.current.useTransition()};z.version="18.3.1";Qu.exports=z;var b=Qu.exports;const Vl=Gu(b),Rm=um({__proto__:null,default:Vl},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=b,Lm=Symbol.for("react.element"),Cm=Symbol.for("react.fragment"),Am=Object.prototype.hasOwnProperty,Nm=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pm={key:!0,ref:!0,__self:!0,__source:!0};function id(e,n,t){var r,a={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Am.call(n,r)&&!Pm.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Lm,type:e,key:i,ref:o,props:a,_owner:Nm.current}}yi.Fragment=Cm;yi.jsx=id;yi.jsxs=id;Yu.exports=yi;var d=Yu.exports,Oo={},od={exports:{}},Ve={},ld={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,C){var j=A.length;A.push(C);e:for(;0<j;){var O=j-1>>>1,H=A[O];if(0<a(H,C))A[O]=C,A[j]=H,j=O;else break e}}function t(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var C=A[0],j=A.pop();if(j!==C){A[0]=j;e:for(var O=0,H=A.length,he=H>>>1;O<he;){var X=2*(O+1)-1,Pe=A[X],un=X+1,We=A[un];if(0>a(Pe,j))un<H&&0>a(We,Pe)?(A[O]=We,A[un]=j,O=un):(A[O]=Pe,A[X]=j,O=X);else if(un<H&&0>a(We,j))A[O]=We,A[un]=j,O=un;else break e}}return C}function a(A,C){var j=A.sortIndex-C.sortIndex;return j!==0?j:A.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],u=1,f=null,g=3,y=!1,m=!1,x=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var C=t(c);C!==null;){if(C.callback===null)r(c);else if(C.startTime<=A)r(c),C.sortIndex=C.expirationTime,n(s,C);else break;C=t(c)}}function S(A){if(x=!1,v(A),!m)if(t(s)!==null)m=!0,G(R);else{var C=t(c);C!==null&&Me(S,C.startTime-A)}}function R(A,C){m=!1,x&&(x=!1,h(_),_=-1),y=!0;var j=g;try{for(v(C),f=t(s);f!==null&&(!(f.expirationTime>C)||A&&!V());){var O=f.callback;if(typeof O=="function"){f.callback=null,g=f.priorityLevel;var H=O(f.expirationTime<=C);C=e.unstable_now(),typeof H=="function"?f.callback=H:f===t(s)&&r(s),v(C)}else r(s);f=t(s)}if(f!==null)var he=!0;else{var X=t(c);X!==null&&Me(S,X.startTime-C),he=!1}return he}finally{f=null,g=j,y=!1}}var L=!1,E=null,_=-1,F=5,D=-1;function V(){return!(e.unstable_now()-D<F)}function ee(){if(E!==null){var A=e.unstable_now();D=A;var C=!0;try{C=E(!0,A)}finally{C?W():(L=!1,E=null)}}else L=!1}var W;if(typeof p=="function")W=function(){p(ee)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,ue=M.port2;M.port1.onmessage=ee,W=function(){ue.postMessage(null)}}else W=function(){w(ee,0)};function G(A){E=A,L||(L=!0,W())}function Me(A,C){_=w(function(){A(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,G(R))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var C=3;break;default:C=g}var j=g;g=C;try{return A()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,C){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=g;g=A;try{return C()}finally{g=j}},e.unstable_scheduleCallback=function(A,C,j){var O=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?O+j:O):j=O,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=j+H,A={id:u++,callback:C,priorityLevel:A,startTime:j,expirationTime:H,sortIndex:-1},j>O?(A.sortIndex=j,n(c,A),t(s)===null&&A===t(c)&&(x?(h(_),_=-1):x=!0,Me(S,j-O))):(A.sortIndex=H,n(s,A),m||y||(m=!0,G(R))),A},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(A){var C=g;return function(){var j=g;g=C;try{return A.apply(this,arguments)}finally{g=j}}}})(sd);ld.exports=sd;var jm=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=b,Ke=jm;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,Rr={};function mt(e,n){Ut(e,n),Ut(e+"Capture",n)}function Ut(e,n){for(Rr[e]=n,e=0;e<n.length;e++)cd.add(n[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=Object.prototype.hasOwnProperty,Om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},nc={};function Im(e){return Io.call(nc,e)?!0:Io.call(ec,e)?!1:Om.test(e)?nc[e]=!0:(ec[e]=!0,!1)}function Fm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bm(e,n,t,r){if(n===null||typeof n>"u"||Fm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ae(e,n,t,r,a,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new Ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function Wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ql,Wl);we[n]=new Ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ql,Wl);we[n]=new Ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ql,Wl);we[n]=new Ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gl(e,n,t,r){var a=we.hasOwnProperty(n)?we[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Bm(n,t,a,r)&&(t=null),r||a===null?Im(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ln=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),Et=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),dd=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),zo=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),pd=Symbol.for("react.offscreen"),tc=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,eo;function fr(e){if(eo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);eo=n&&n[1]||""}return`
`+eo+e}var no=!1;function to(e,n){if(!e||no)return"";no=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{no=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?fr(e):""}function zm(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=to(e.type,!1),e;case 11:return e=to(e.type.render,!1),e;case 1:return e=to(e.type,!0),e;default:return""}}function Mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Et:return"Portal";case Fo:return"Profiler";case Yl:return"StrictMode";case Bo:return"Suspense";case zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case Ql:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return n=e.displayName||null,n!==null?n:Mo(e.type)||"Memo";case An:n=e._payload,e=e._init;try{return Mo(e(n))}catch{}}return null}function Mm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mo(n);case 8:return n===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hm(e){var n=fd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function da(e){e._valueTracker||(e._valueTracker=Hm(e))}function md(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=fd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,n){var t=n.checked;return ae({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function rc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gd(e,n){n=n.checked,n!=null&&Gl(e,"checked",n,!1)}function Uo(e,n){gd(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$o(e,n.type,t):n.hasOwnProperty("defaultValue")&&$o(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ac(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $o(e,n,t){(n!=="number"||$a(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var mr=Array.isArray;function It(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ko(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return ae({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ic(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(mr(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function hd(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function oc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pa,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=pa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Um=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Um.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),vr[n]=vr[e]})});function yd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||vr.hasOwnProperty(e)&&vr[e]?(""+n).trim():n+"px"}function wd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=yd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var $m=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(e,n){if(n){if($m[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function Wo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,Ft=null,Bt=null;function lc(e){if(e=Yr(e)){if(typeof Yo!="function")throw Error(T(280));var n=e.stateNode;n&&(n=Ei(n),Yo(e.stateNode,e.type,n))}}function bd(e){Ft?Bt?Bt.push(e):Bt=[e]:Ft=e}function Sd(){if(Ft){var e=Ft,n=Bt;if(Bt=Ft=null,lc(e),n)for(e=0;e<n.length;e++)lc(n[e])}}function kd(e,n){return e(n)}function Ed(){}var ro=!1;function _d(e,n,t){if(ro)return e(n,t);ro=!0;try{return kd(e,n,t)}finally{ro=!1,(Ft!==null||Bt!==null)&&(Ed(),Sd())}}function Lr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ei(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var Qo=!1;if(En)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Qo=!1}function Km(e,n,t,r,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var xr=!1,Ka=null,Va=!1,Jo=null,Vm={onError:function(e){xr=!0,Ka=e}};function qm(e,n,t,r,a,i,o,l,s){xr=!1,Ka=null,Km.apply(Vm,arguments)}function Wm(e,n,t,r,a,i,o,l,s){if(qm.apply(this,arguments),xr){if(xr){var c=Ka;xr=!1,Ka=null}else throw Error(T(198));Va||(Va=!0,Jo=c)}}function gt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Rd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function sc(e){if(gt(e)!==e)throw Error(T(188))}function Gm(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return sc(a),e;if(i===r)return sc(a),n;i=i.sibling}throw Error(T(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Td(e){return e=Gm(e),e!==null?Ld(e):null}function Ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ld(e);if(n!==null)return n;e=e.sibling}return null}var Cd=Ke.unstable_scheduleCallback,cc=Ke.unstable_cancelCallback,Ym=Ke.unstable_shouldYield,Qm=Ke.unstable_requestPaint,se=Ke.unstable_now,Jm=Ke.unstable_getCurrentPriorityLevel,Zl=Ke.unstable_ImmediatePriority,Ad=Ke.unstable_UserBlockingPriority,qa=Ke.unstable_NormalPriority,Xm=Ke.unstable_LowPriority,Nd=Ke.unstable_IdlePriority,wi=null,hn=null;function Zm(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:tg,eg=Math.log,ng=Math.LN2;function tg(e){return e>>>=0,e===0?32:31-(eg(e)/ng|0)|0}var fa=64,ma=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~a;l!==0?r=gr(l):(i&=o,i!==0&&(r=gr(i)))}else o=t&~a,o!==0?r=gr(o):i!==0&&(r=gr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-on(n),a=1<<t,r|=e[t],n&=~a;return r}function rg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ag(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-on(i),l=1<<o,s=a[o];s===-1?(!(l&t)||l&r)&&(a[o]=rg(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function Xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=fa;return fa<<=1,!(fa&4194240)&&(fa=64),e}function ao(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Wr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function ig(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-on(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-on(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var $=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dd,ns,Od,Id,Fd,Zo=!1,ga=[],Fn=null,Bn=null,zn=null,Cr=new Map,Ar=new Map,Pn=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uc(e,n){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(n.pointerId)}}function ar(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Yr(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function lg(e,n,t,r,a){switch(n){case"focusin":return Fn=ar(Fn,e,n,t,r,a),!0;case"dragenter":return Bn=ar(Bn,e,n,t,r,a),!0;case"mouseover":return zn=ar(zn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Cr.set(i,ar(Cr.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ar.set(i,ar(Ar.get(i)||null,e,n,t,r,a)),!0}return!1}function Bd(e){var n=nt(e.target);if(n!==null){var t=gt(n);if(t!==null){if(n=t.tag,n===13){if(n=Rd(t),n!==null){e.blockedOn=n,Fd(e.priority,function(){Od(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Aa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=el(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Go=r,t.target.dispatchEvent(r),Go=null}else return n=Yr(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function dc(e,n,t){Aa(e)&&t.delete(n)}function sg(){Zo=!1,Fn!==null&&Aa(Fn)&&(Fn=null),Bn!==null&&Aa(Bn)&&(Bn=null),zn!==null&&Aa(zn)&&(zn=null),Cr.forEach(dc),Ar.forEach(dc)}function ir(e,n){e.blockedOn===n&&(e.blockedOn=null,Zo||(Zo=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,sg)))}function Nr(e){function n(a){return ir(a,e)}if(0<ga.length){ir(ga[0],e);for(var t=1;t<ga.length;t++){var r=ga[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&ir(Fn,e),Bn!==null&&ir(Bn,e),zn!==null&&ir(zn,e),Cr.forEach(n),Ar.forEach(n),t=0;t<Pn.length;t++)r=Pn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(t=Pn[0],t.blockedOn===null);)Bd(t),t.blockedOn===null&&Pn.shift()}var zt=Ln.ReactCurrentBatchConfig,Ga=!0;function cg(e,n,t,r){var a=$,i=zt.transition;zt.transition=null;try{$=1,ts(e,n,t,r)}finally{$=a,zt.transition=i}}function ug(e,n,t,r){var a=$,i=zt.transition;zt.transition=null;try{$=4,ts(e,n,t,r)}finally{$=a,zt.transition=i}}function ts(e,n,t,r){if(Ga){var a=el(e,n,t,r);if(a===null)go(e,n,r,Ya,t),uc(e,r);else if(lg(a,e,n,t,r))r.stopPropagation();else if(uc(e,r),n&4&&-1<og.indexOf(e)){for(;a!==null;){var i=Yr(a);if(i!==null&&Dd(i),i=el(e,n,t,r),i===null&&go(e,n,r,Ya,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else go(e,n,r,null,t)}}var Ya=null;function el(e,n,t,r){if(Ya=null,e=Xl(r),e=nt(e),e!==null)if(n=gt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Rd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ya=e,null}function zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jm()){case Zl:return 1;case Ad:return 4;case qa:case Xm:return 16;case Nd:return 536870912;default:return 16}default:return 16}}var Dn=null,rs=null,Na=null;function Md(){if(Na)return Na;var e,n=rs,t=n.length,r,a="value"in Dn?Dn.value:Dn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return Na=a.slice(e,1<r?1-r:void 0)}function Pa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function pc(){return!1}function qe(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ha:pc,this.isPropagationStopped=pc,this}return ae(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),n}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=qe(Zt),Gr=ae({},Zt,{view:0,detail:0}),dg=qe(Gr),io,oo,or,bi=ae({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(io=e.screenX-or.screenX,oo=e.screenY-or.screenY):oo=io=0,or=e),io)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),fc=qe(bi),pg=ae({},bi,{dataTransfer:0}),fg=qe(pg),mg=ae({},Gr,{relatedTarget:0}),lo=qe(mg),gg=ae({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=qe(gg),vg=ae({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xg=qe(vg),yg=ae({},Zt,{data:0}),mc=qe(yg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sg[e])?!!n[e]:!1}function is(){return kg}var Eg=ae({},Gr,{key:function(e){if(e.key){var n=wg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_g=qe(Eg),Rg=ae({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=qe(Rg),Tg=ae({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Lg=qe(Tg),Cg=ae({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ag=qe(Cg),Ng=ae({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=qe(Ng),jg=[9,13,27,32],os=En&&"CompositionEvent"in window,yr=null;En&&"documentMode"in document&&(yr=document.documentMode);var Dg=En&&"TextEvent"in window&&!yr,Hd=En&&(!os||yr&&8<yr&&11>=yr),hc=" ",vc=!1;function Ud(e,n){switch(e){case"keyup":return jg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Og(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(vc=!0,hc);case"textInput":return e=n.data,e===hc&&vc?null:e;default:return null}}function Ig(e,n){if(Rt)return e==="compositionend"||!os&&Ud(e,n)?(e=Md(),Na=rs=Dn=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hd&&n.locale!=="ko"?null:n.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fg[e.type]:n==="textarea"}function Kd(e,n,t,r){bd(r),n=Qa(n,"onChange"),0<n.length&&(t=new as("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wr=null,Pr=null;function Bg(e){np(e,0)}function Si(e){var n=Ct(e);if(md(n))return e}function zg(e,n){if(e==="change")return n}var Vd=!1;if(En){var so;if(En){var co="oninput"in document;if(!co){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),co=typeof yc.oninput=="function"}so=co}else so=!1;Vd=so&&(!document.documentMode||9<document.documentMode)}function wc(){wr&&(wr.detachEvent("onpropertychange",qd),Pr=wr=null)}function qd(e){if(e.propertyName==="value"&&Si(Pr)){var n=[];Kd(n,Pr,e,Xl(e)),_d(Bg,n)}}function Mg(e,n,t){e==="focusin"?(wc(),wr=n,Pr=t,wr.attachEvent("onpropertychange",qd)):e==="focusout"&&wc()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Pr)}function Ug(e,n){if(e==="click")return Si(n)}function $g(e,n){if(e==="input"||e==="change")return Si(n)}function Kg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:Kg;function jr(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Io.call(n,a)||!sn(e[a],n[a]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,n){var t=bc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=bc(t)}}function Wd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gd(){for(var e=window,n=$a();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$a(e.document)}return n}function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vg(e){var n=Gd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wd(t.ownerDocument.documentElement,t)){if(r!==null&&ls(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Sc(t,i);var o=Sc(t,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=En&&"documentMode"in document&&11>=document.documentMode,Tt=null,nl=null,br=null,tl=!1;function kc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;tl||Tt==null||Tt!==$a(r)||(r=Tt,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&jr(br,r)||(br=r,r=Qa(nl,"onSelect"),0<r.length&&(n=new as("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tt)))}function va(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Lt={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},uo={},Yd={};En&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Lt.animationend.animation,delete Lt.animationiteration.animation,delete Lt.animationstart.animation),"TransitionEvent"in window||delete Lt.transitionend.transition);function ki(e){if(uo[e])return uo[e];if(!Lt[e])return e;var n=Lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yd)return uo[e]=n[t];return e}var Qd=ki("animationend"),Jd=ki("animationiteration"),Xd=ki("animationstart"),Zd=ki("transitionend"),ep=new Map,Ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,n){ep.set(e,n),mt(n,[e])}for(var po=0;po<Ec.length;po++){var fo=Ec[po],Wg=fo.toLowerCase(),Gg=fo[0].toUpperCase()+fo.slice(1);Gn(Wg,"on"+Gg)}Gn(Qd,"onAnimationEnd");Gn(Jd,"onAnimationIteration");Gn(Xd,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Zd,"onTransitionEnd");Ut("onMouseEnter",["mouseout","mouseover"]);Ut("onMouseLeave",["mouseout","mouseover"]);Ut("onPointerEnter",["pointerout","pointerover"]);Ut("onPointerLeave",["pointerout","pointerover"]);mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function _c(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Wm(r,n,void 0,e),e.currentTarget=null}function np(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;_c(a,l,c),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;_c(a,l,c),i=s}}}if(Va)throw e=Jo,Va=!1,Jo=null,e}function Y(e,n){var t=n[ll];t===void 0&&(t=n[ll]=new Set);var r=e+"__bubble";t.has(r)||(tp(n,e,2,!1),t.add(r))}function mo(e,n,t){var r=0;n&&(r|=4),tp(t,e,r,n)}var xa="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[xa]){e[xa]=!0,cd.forEach(function(t){t!=="selectionchange"&&(Yg.has(t)||mo(t,!1,e),mo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xa]||(n[xa]=!0,mo("selectionchange",!1,n))}}function tp(e,n,t,r){switch(zd(n)){case 1:var a=cg;break;case 4:a=ug;break;default:a=ts}t=a.bind(null,n,t,e),a=void 0,!Qo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function go(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=nt(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}_d(function(){var c=i,u=Xl(t),f=[];e:{var g=ep.get(e);if(g!==void 0){var y=as,m=e;switch(e){case"keypress":if(Pa(t)===0)break e;case"keydown":case"keyup":y=_g;break;case"focusin":m="focus",y=lo;break;case"focusout":m="blur",y=lo;break;case"beforeblur":case"afterblur":y=lo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lg;break;case Qd:case Jd:case Xd:y=hg;break;case Zd:y=Ag;break;case"scroll":y=dg;break;case"wheel":y=Pg;break;case"copy":case"cut":case"paste":y=xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=gc}var x=(n&4)!==0,w=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var p=c,v;p!==null;){v=p;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Lr(p,h),S!=null&&x.push(Or(p,S,v)))),w)break;p=p.return}0<x.length&&(g=new y(g,m,null,t,u),f.push({event:g,listeners:x}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&t!==Go&&(m=t.relatedTarget||t.fromElement)&&(nt(m)||m[_n]))break e;if((y||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,y?(m=t.relatedTarget||t.toElement,y=c,m=m?nt(m):null,m!==null&&(w=gt(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=c),y!==m)){if(x=fc,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=gc,S="onPointerLeave",h="onPointerEnter",p="pointer"),w=y==null?g:Ct(y),v=m==null?g:Ct(m),g=new x(S,p+"leave",y,t,u),g.target=w,g.relatedTarget=v,S=null,nt(u)===c&&(x=new x(h,p+"enter",m,t,u),x.target=v,x.relatedTarget=w,S=x),w=S,y&&m)n:{for(x=y,h=m,p=0,v=x;v;v=bt(v))p++;for(v=0,S=h;S;S=bt(S))v++;for(;0<p-v;)x=bt(x),p--;for(;0<v-p;)h=bt(h),v--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break n;x=bt(x),h=bt(h)}x=null}else x=null;y!==null&&Rc(f,g,y,x,!1),m!==null&&w!==null&&Rc(f,w,m,x,!0)}}e:{if(g=c?Ct(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var R=zg;else if(xc(g))if(Vd)R=$g;else{R=Hg;var L=Mg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=Ug);if(R&&(R=R(e,c))){Kd(f,R,t,u);break e}L&&L(e,g,c),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&$o(g,"number",g.value)}switch(L=c?Ct(c):window,e){case"focusin":(xc(L)||L.contentEditable==="true")&&(Tt=L,nl=c,br=null);break;case"focusout":br=nl=Tt=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,kc(f,t,u);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":kc(f,t,u)}var E;if(os)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Rt?Ud(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Hd&&t.locale!=="ko"&&(Rt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Rt&&(E=Md()):(Dn=u,rs="value"in Dn?Dn.value:Dn.textContent,Rt=!0)),L=Qa(c,_),0<L.length&&(_=new mc(_,e,null,t,u),f.push({event:_,listeners:L}),E?_.data=E:(E=$d(t),E!==null&&(_.data=E)))),(E=Dg?Og(e,t):Ig(e,t))&&(c=Qa(c,"onBeforeInput"),0<c.length&&(u=new mc("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=E))}np(f,n)})}function Or(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qa(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Lr(e,t),i!=null&&r.unshift(Or(e,i,a)),i=Lr(e,n),i!=null&&r.push(Or(e,i,a))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rc(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,a?(s=Lr(t,i),s!=null&&o.unshift(Or(t,s,l))):a||(s=Lr(t,i),s!=null&&o.push(Or(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Qg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(Qg,`
`).replace(Jg,"")}function ya(e,n,t){if(n=Tc(n),Tc(e)!==n&&t)throw Error(T(425))}function Ja(){}var rl=null,al=null;function il(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(eh)}:ol;function eh(e){setTimeout(function(){throw e})}function ho(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Nr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Nr(n)}function Mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),gn="__reactFiber$"+er,Ir="__reactProps$"+er,_n="__reactContainer$"+er,ll="__reactEvents$"+er,nh="__reactListeners$"+er,th="__reactHandles$"+er;function nt(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_n]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Cc(e);e!==null;){if(t=e[gn])return t;e=Cc(e)}return n}e=t,t=e.parentNode}return null}function Yr(e){return e=e[gn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ct(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ei(e){return e[Ir]||null}var sl=[],At=-1;function Yn(e){return{current:e}}function J(e){0>At||(e.current=sl[At],sl[At]=null,At--)}function q(e,n){At++,sl[At]=e.current,e.current=n}var Wn={},_e=Yn(Wn),Oe=Yn(!1),st=Wn;function $t(e,n){var t=e.type.contextTypes;if(!t)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ie(e){return e=e.childContextTypes,e!=null}function Xa(){J(Oe),J(_e)}function Ac(e,n,t){if(_e.current!==Wn)throw Error(T(168));q(_e,n),q(Oe,t)}function rp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(T(108,Mm(e)||"Unknown",a));return ae({},t,r)}function Za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,st=_e.current,q(_e,e),q(Oe,Oe.current),!0}function Nc(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=rp(e,n,st),r.__reactInternalMemoizedMergedChildContext=e,J(Oe),J(_e),q(_e,e)):J(Oe),q(Oe,t)}var wn=null,_i=!1,vo=!1;function ap(e){wn===null?wn=[e]:wn.push(e)}function rh(e){_i=!0,ap(e)}function Qn(){if(!vo&&wn!==null){vo=!0;var e=0,n=$;try{var t=wn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}wn=null,_i=!1}catch(a){throw wn!==null&&(wn=wn.slice(e+1)),Cd(Zl,Qn),a}finally{$=n,vo=!1}}return null}var Nt=[],Pt=0,ei=null,ni=0,Ye=[],Qe=0,ct=null,bn=1,Sn="";function Xn(e,n){Nt[Pt++]=ni,Nt[Pt++]=ei,ei=e,ni=n}function ip(e,n,t){Ye[Qe++]=bn,Ye[Qe++]=Sn,Ye[Qe++]=ct,ct=e;var r=bn;e=Sn;var a=32-on(r)-1;r&=~(1<<a),t+=1;var i=32-on(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,bn=1<<32-on(n)+a|t<<a|r,Sn=i+e}else bn=1<<i|t<<a|r,Sn=e}function ss(e){e.return!==null&&(Xn(e,1),ip(e,1,0))}function cs(e){for(;e===ei;)ei=Nt[--Pt],Nt[Pt]=null,ni=Nt[--Pt],Nt[Pt]=null;for(;e===ct;)ct=Ye[--Qe],Ye[Qe]=null,Sn=Ye[--Qe],Ye[Qe]=null,bn=Ye[--Qe],Ye[Qe]=null}var $e=null,Ue=null,Z=!1,an=null;function op(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Pc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,Ue=Mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ct!==null?{id:bn,overflow:Sn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,Ue=null,!0):!1;default:return!1}}function cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(Z){var n=Ue;if(n){var t=n;if(!Pc(e,n)){if(cl(e))throw Error(T(418));n=Mn(t.nextSibling);var r=$e;n&&Pc(e,n)?op(r,t):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(cl(e))throw Error(T(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function wa(e){if(e!==$e)return!1;if(!Z)return jc(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!il(e.type,e.memoizedProps)),n&&(n=Ue)){if(cl(e))throw lp(),Error(T(418));for(;n;)op(e,n),n=Mn(n.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=$e?Mn(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=Ue;e;)e=Mn(e.nextSibling)}function Kt(){Ue=$e=null,Z=!1}function us(e){an===null?an=[e]:an.push(e)}var ah=Ln.ReactCurrentBatchConfig;function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function ba(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Dc(e){var n=e._init;return n(e._payload)}function sp(e){function n(h,p){if(e){var v=h.deletions;v===null?(h.deletions=[p],h.flags|=16):v.push(p)}}function t(h,p){if(!e)return null;for(;p!==null;)n(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function a(h,p){return h=Kn(h,p),h.index=0,h.sibling=null,h}function i(h,p,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<p?(h.flags|=2,p):v):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,v,S){return p===null||p.tag!==6?(p=Eo(v,h.mode,S),p.return=h,p):(p=a(p,v),p.return=h,p)}function s(h,p,v,S){var R=v.type;return R===_t?u(h,p,v.props.children,S,v.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===An&&Dc(R)===p.type)?(S=a(p,v.props),S.ref=lr(h,p,v),S.return=h,S):(S=za(v.type,v.key,v.props,null,h.mode,S),S.ref=lr(h,p,v),S.return=h,S)}function c(h,p,v,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=_o(v,h.mode,S),p.return=h,p):(p=a(p,v.children||[]),p.return=h,p)}function u(h,p,v,S,R){return p===null||p.tag!==7?(p=ot(v,h.mode,S,R),p.return=h,p):(p=a(p,v),p.return=h,p)}function f(h,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Eo(""+p,h.mode,v),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return v=za(p.type,p.key,p.props,null,h.mode,v),v.ref=lr(h,null,p),v.return=h,v;case Et:return p=_o(p,h.mode,v),p.return=h,p;case An:var S=p._init;return f(h,S(p._payload),v)}if(mr(p)||tr(p))return p=ot(p,h.mode,v,null),p.return=h,p;ba(h,p)}return null}function g(h,p,v,S){var R=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:l(h,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:return v.key===R?s(h,p,v,S):null;case Et:return v.key===R?c(h,p,v,S):null;case An:return R=v._init,g(h,p,R(v._payload),S)}if(mr(v)||tr(v))return R!==null?null:u(h,p,v,S,null);ba(h,v)}return null}function y(h,p,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,l(p,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ua:return h=h.get(S.key===null?v:S.key)||null,s(p,h,S,R);case Et:return h=h.get(S.key===null?v:S.key)||null,c(p,h,S,R);case An:var L=S._init;return y(h,p,v,L(S._payload),R)}if(mr(S)||tr(S))return h=h.get(v)||null,u(p,h,S,R,null);ba(p,S)}return null}function m(h,p,v,S){for(var R=null,L=null,E=p,_=p=0,F=null;E!==null&&_<v.length;_++){E.index>_?(F=E,E=null):F=E.sibling;var D=g(h,E,v[_],S);if(D===null){E===null&&(E=F);break}e&&E&&D.alternate===null&&n(h,E),p=i(D,p,_),L===null?R=D:L.sibling=D,L=D,E=F}if(_===v.length)return t(h,E),Z&&Xn(h,_),R;if(E===null){for(;_<v.length;_++)E=f(h,v[_],S),E!==null&&(p=i(E,p,_),L===null?R=E:L.sibling=E,L=E);return Z&&Xn(h,_),R}for(E=r(h,E);_<v.length;_++)F=y(E,h,_,v[_],S),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?_:F.key),p=i(F,p,_),L===null?R=F:L.sibling=F,L=F);return e&&E.forEach(function(V){return n(h,V)}),Z&&Xn(h,_),R}function x(h,p,v,S){var R=tr(v);if(typeof R!="function")throw Error(T(150));if(v=R.call(v),v==null)throw Error(T(151));for(var L=R=null,E=p,_=p=0,F=null,D=v.next();E!==null&&!D.done;_++,D=v.next()){E.index>_?(F=E,E=null):F=E.sibling;var V=g(h,E,D.value,S);if(V===null){E===null&&(E=F);break}e&&E&&V.alternate===null&&n(h,E),p=i(V,p,_),L===null?R=V:L.sibling=V,L=V,E=F}if(D.done)return t(h,E),Z&&Xn(h,_),R;if(E===null){for(;!D.done;_++,D=v.next())D=f(h,D.value,S),D!==null&&(p=i(D,p,_),L===null?R=D:L.sibling=D,L=D);return Z&&Xn(h,_),R}for(E=r(h,E);!D.done;_++,D=v.next())D=y(E,h,_,D.value,S),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?_:D.key),p=i(D,p,_),L===null?R=D:L.sibling=D,L=D);return e&&E.forEach(function(ee){return n(h,ee)}),Z&&Xn(h,_),R}function w(h,p,v,S){if(typeof v=="object"&&v!==null&&v.type===_t&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:e:{for(var R=v.key,L=p;L!==null;){if(L.key===R){if(R=v.type,R===_t){if(L.tag===7){t(h,L.sibling),p=a(L,v.props.children),p.return=h,h=p;break e}}else if(L.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===An&&Dc(R)===L.type){t(h,L.sibling),p=a(L,v.props),p.ref=lr(h,L,v),p.return=h,h=p;break e}t(h,L);break}else n(h,L);L=L.sibling}v.type===_t?(p=ot(v.props.children,h.mode,S,v.key),p.return=h,h=p):(S=za(v.type,v.key,v.props,null,h.mode,S),S.ref=lr(h,p,v),S.return=h,h=S)}return o(h);case Et:e:{for(L=v.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){t(h,p.sibling),p=a(p,v.children||[]),p.return=h,h=p;break e}else{t(h,p);break}else n(h,p);p=p.sibling}p=_o(v,h.mode,S),p.return=h,h=p}return o(h);case An:return L=v._init,w(h,p,L(v._payload),S)}if(mr(v))return m(h,p,v,S);if(tr(v))return x(h,p,v,S);ba(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(t(h,p.sibling),p=a(p,v),p.return=h,h=p):(t(h,p),p=Eo(v,h.mode,S),p.return=h,h=p),o(h)):t(h,p)}return w}var Vt=sp(!0),cp=sp(!1),ti=Yn(null),ri=null,jt=null,ds=null;function ps(){ds=jt=ri=null}function fs(e){var n=ti.current;J(ti),e._currentValue=n}function dl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mt(e,n){ri=e,ds=jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(De=!0),e.firstContext=null)}function Ze(e){var n=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:n,next:null},jt===null){if(ri===null)throw Error(T(308));jt=e,ri.dependencies={lanes:0,firstContext:e}}else jt=jt.next=e;return n}var tt=null;function ms(e){tt===null?tt=[e]:tt.push(e)}function up(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ms(n)):(t.next=a.next,a.next=t),n.interleaved=t,Rn(e,r)}function Rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Nn=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Rn(e,t)}return a=r.interleaved,a===null?(n.next=n,ms(r)):(n.next=a.next,a.next=n),r.interleaved=n,Rn(e,t)}function ja(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}function Oc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ai(e,n,t,r){var a=e.updateQueue;Nn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(i!==null){var f=a.baseState;o=0,u=c=s=null,l=i;do{var g=l.lane,y=l.eventTime;if((r&g)===g){u!==null&&(u=u.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,x=l;switch(g=n,y=t,x.tag){case 1:if(m=x.payload,typeof m=="function"){f=m.call(y,f,g);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,g=typeof m=="function"?m.call(y,f,g):m,g==null)break e;f=ae({},f,g);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=y,s=f):u=u.next=y,o|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(u===null&&(s=f),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);dt|=o,e.lanes=o,e.memoizedState=f}}function Ic(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(T(191,a));a.call(r)}}}var Qr={},vn=Yn(Qr),Fr=Yn(Qr),Br=Yn(Qr);function rt(e){if(e===Qr)throw Error(T(174));return e}function hs(e,n){switch(q(Br,n),q(Fr,e),q(vn,Qr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Vo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Vo(n,e)}J(vn),q(vn,n)}function qt(){J(vn),J(Fr),J(Br)}function pp(e){rt(Br.current);var n=rt(vn.current),t=Vo(n,e.type);n!==t&&(q(Fr,e),q(vn,t))}function vs(e){Fr.current===e&&(J(vn),J(Fr))}var te=Yn(0);function ii(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xo=[];function xs(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var Da=Ln.ReactCurrentDispatcher,yo=Ln.ReactCurrentBatchConfig,ut=0,re=null,pe=null,me=null,oi=!1,Sr=!1,zr=0,ih=0;function be(){throw Error(T(321))}function ys(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function ws(e,n,t,r,a,i){if(ut=i,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Da.current=e===null||e.memoizedState===null?ch:uh,e=t(r,a),Sr){i=0;do{if(Sr=!1,zr=0,25<=i)throw Error(T(301));i+=1,me=pe=null,n.updateQueue=null,Da.current=dh,e=t(r,a)}while(Sr)}if(Da.current=li,n=pe!==null&&pe.next!==null,ut=0,me=pe=re=null,oi=!1,n)throw Error(T(300));return e}function bs(){var e=zr!==0;return zr=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?re.memoizedState=me=e:me=me.next=e,me}function en(){if(pe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=me===null?re.memoizedState:me.next;if(n!==null)me=n,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?re.memoizedState=me=e:me=me.next=e}return me}function Mr(e,n){return typeof n=="function"?n(e):n}function wo(e){var n=en(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=pe,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,c=i;do{var u=c.lane;if((ut&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=f,o=r):s=s.next=f,re.lanes|=u,dt|=u}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=l,sn(r,n.memoizedState)||(De=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,re.lanes|=i,dt|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function bo(e){var n=en(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);sn(i,n.memoizedState)||(De=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function fp(){}function mp(e,n){var t=re,r=en(),a=n(),i=!sn(r.memoizedState,a);if(i&&(r.memoizedState=a,De=!0),r=r.queue,Ss(vp.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||me!==null&&me.memoizedState.tag&1){if(t.flags|=2048,Hr(9,hp.bind(null,t,r,a,n),void 0,null),ge===null)throw Error(T(349));ut&30||gp(t,n,a)}return a}function gp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=re.updateQueue,n===null?(n={lastEffect:null,stores:null},re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function hp(e,n,t,r){n.value=t,n.getSnapshot=r,xp(n)&&yp(e)}function vp(e,n,t){return t(function(){xp(n)&&yp(e)})}function xp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function yp(e){var n=Rn(e,1);n!==null&&ln(n,e,1,-1)}function Fc(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},n.queue=e,e=e.dispatch=sh.bind(null,re,e),[n.memoizedState,e]}function Hr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=re.updateQueue,n===null?(n={lastEffect:null,stores:null},re.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wp(){return en().memoizedState}function Oa(e,n,t,r){var a=mn();re.flags|=e,a.memoizedState=Hr(1|n,t,void 0,r===void 0?null:r)}function Ri(e,n,t,r){var a=en();r=r===void 0?null:r;var i=void 0;if(pe!==null){var o=pe.memoizedState;if(i=o.destroy,r!==null&&ys(r,o.deps)){a.memoizedState=Hr(n,t,i,r);return}}re.flags|=e,a.memoizedState=Hr(1|n,t,i,r)}function Bc(e,n){return Oa(8390656,8,e,n)}function Ss(e,n){return Ri(2048,8,e,n)}function bp(e,n){return Ri(4,2,e,n)}function Sp(e,n){return Ri(4,4,e,n)}function kp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ep(e,n,t){return t=t!=null?t.concat([e]):null,Ri(4,4,kp.bind(null,n,e),t)}function ks(){}function _p(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ys(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Rp(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ys(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Tp(e,n,t){return ut&21?(sn(t,n)||(t=Pd(),re.lanes|=t,dt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=t)}function oh(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=yo.transition;yo.transition={};try{e(!1),n()}finally{$=t,yo.transition=r}}function Lp(){return en().memoizedState}function lh(e,n,t){var r=$n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Cp(e))Ap(n,t);else if(t=up(e,n,t,r),t!==null){var a=Le();ln(t,e,r,a),Np(t,n,r)}}function sh(e,n,t){var r=$n(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))Ap(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,l=i(o,t);if(a.hasEagerState=!0,a.eagerState=l,sn(l,o)){var s=n.interleaved;s===null?(a.next=a,ms(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=up(e,n,a,r),t!==null&&(a=Le(),ln(t,e,r,a),Np(t,n,r))}}function Cp(e){var n=e.alternate;return e===re||n!==null&&n===re}function Ap(e,n){Sr=oi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Np(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}var li={readContext:Ze,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},ch={readContext:Ze,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:Bc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Oa(4194308,4,kp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Oa(4194308,4,e,n)},useInsertionEffect:function(e,n){return Oa(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=lh.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:Fc,useDebugValue:ks,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Fc(!1),n=e[0];return e=oh.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=re,a=mn();if(Z){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),ge===null)throw Error(T(349));ut&30||gp(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,Bc(vp.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,hp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=mn(),n=ge.identifierPrefix;if(Z){var t=Sn,r=bn;t=(r&~(1<<32-on(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ih++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},uh={readContext:Ze,useCallback:_p,useContext:Ze,useEffect:Ss,useImperativeHandle:Ep,useInsertionEffect:bp,useLayoutEffect:Sp,useMemo:Rp,useReducer:wo,useRef:wp,useState:function(){return wo(Mr)},useDebugValue:ks,useDeferredValue:function(e){var n=en();return Tp(n,pe.memoizedState,e)},useTransition:function(){var e=wo(Mr)[0],n=en().memoizedState;return[e,n]},useMutableSource:fp,useSyncExternalStore:mp,useId:Lp,unstable_isNewReconciler:!1},dh={readContext:Ze,useCallback:_p,useContext:Ze,useEffect:Ss,useImperativeHandle:Ep,useInsertionEffect:bp,useLayoutEffect:Sp,useMemo:Rp,useReducer:bo,useRef:wp,useState:function(){return bo(Mr)},useDebugValue:ks,useDeferredValue:function(e){var n=en();return pe===null?n.memoizedState=e:Tp(n,pe.memoizedState,e)},useTransition:function(){var e=bo(Mr)[0],n=en().memoizedState;return[e,n]},useMutableSource:fp,useSyncExternalStore:mp,useId:Lp,unstable_isNewReconciler:!1};function tn(e,n){if(e&&e.defaultProps){n=ae({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function pl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ae({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ti={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Le(),a=$n(e),i=kn(r,a);i.payload=n,t!=null&&(i.callback=t),n=Hn(e,i,a),n!==null&&(ln(n,e,a,r),ja(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Le(),a=$n(e),i=kn(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Hn(e,i,a),n!==null&&(ln(n,e,a,r),ja(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Le(),r=$n(e),a=kn(t,r);a.tag=2,n!=null&&(a.callback=n),n=Hn(e,a,r),n!==null&&(ln(n,e,r,t),ja(n,e,r))}};function zc(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!jr(t,r)||!jr(a,i):!0}function Pp(e,n,t){var r=!1,a=Wn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(a=Ie(n)?st:_e.current,r=n.contextTypes,i=(r=r!=null)?$t(e,a):Wn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ti,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function Mc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ti.enqueueReplaceState(n,n.state,null)}function fl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},gs(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Ze(i):(i=Ie(n)?st:_e.current,a.context=$t(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(pl(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Ti.enqueueReplaceState(a,a.state,null),ai(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Wt(e,n){try{var t="",r=n;do t+=zm(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function So(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ml(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ph=typeof WeakMap=="function"?WeakMap:Map;function jp(e,n,t){t=kn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,El=r),ml(e,n)},t}function Dp(e,n,t){t=kn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){ml(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ml(e,n),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Hc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ph;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=Rh.bind(null,e,n,t),n.then(e,e))}function Uc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $c(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=kn(-1,1),n.tag=2,Hn(t,n,1))),t.lanes|=1),e)}var fh=Ln.ReactCurrentOwner,De=!1;function Re(e,n,t,r){n.child=e===null?cp(n,null,t,r):Vt(n,e.child,t,r)}function Kc(e,n,t,r,a){t=t.render;var i=n.ref;return Mt(n,a),r=ws(e,n,t,r,i,a),t=bs(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Tn(e,n,a)):(Z&&t&&ss(n),n.flags|=1,Re(e,n,r,a),n.child)}function Vc(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Ns(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Op(e,n,i,r,a)):(e=za(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(o,r)&&e.ref===n.ref)return Tn(e,n,a)}return n.flags|=1,e=Kn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Op(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(jr(i,r)&&e.ref===n.ref)if(De=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(De=!0);else return n.lanes=e.lanes,Tn(e,n,a)}return gl(e,n,t,r,a)}function Ip(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Ot,He),He|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(Ot,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,q(Ot,He),He|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,q(Ot,He),He|=r;return Re(e,n,a,t),n.child}function Fp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function gl(e,n,t,r,a){var i=Ie(t)?st:_e.current;return i=$t(n,i),Mt(n,a),t=ws(e,n,t,r,i,a),r=bs(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Tn(e,n,a)):(Z&&r&&ss(n),n.flags|=1,Re(e,n,t,a),n.child)}function qc(e,n,t,r,a){if(Ie(t)){var i=!0;Za(n)}else i=!1;if(Mt(n,a),n.stateNode===null)Ia(e,n),Pp(n,t,r),fl(n,t,r,a),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ze(c):(c=Ie(t)?st:_e.current,c=$t(n,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Mc(n,o,r,c),Nn=!1;var g=n.memoizedState;o.state=g,ai(n,r,o,a),s=n.memoizedState,l!==r||g!==s||Oe.current||Nn?(typeof u=="function"&&(pl(n,t,u,r),s=n.memoizedState),(l=Nn||zc(n,t,l,r,g,s,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,dp(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:tn(n.type,l),o.props=c,f=n.pendingProps,g=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ze(s):(s=Ie(t)?st:_e.current,s=$t(n,s));var y=t.getDerivedStateFromProps;(u=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||g!==s)&&Mc(n,o,r,s),Nn=!1,g=n.memoizedState,o.state=g,ai(n,r,o,a);var m=n.memoizedState;l!==f||g!==m||Oe.current||Nn?(typeof y=="function"&&(pl(n,t,y,r),m=n.memoizedState),(c=Nn||zc(n,t,c,r,g,m,s)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return hl(e,n,t,r,i,a)}function hl(e,n,t,r,a,i){Fp(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return a&&Nc(n,t,!1),Tn(e,n,i);r=n.stateNode,fh.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Vt(n,e.child,null,i),n.child=Vt(n,null,l,i)):Re(e,n,l,i),n.memoizedState=r.state,a&&Nc(n,t,!0),n.child}function Bp(e){var n=e.stateNode;n.pendingContext?Ac(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ac(e,n.context,!1),hs(e,n.containerInfo)}function Wc(e,n,t,r,a){return Kt(),us(a),n.flags|=256,Re(e,n,t,r),n.child}var vl={dehydrated:null,treeContext:null,retryLane:0};function xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zp(e,n,t){var r=n.pendingProps,a=te.current,i=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(te,a&1),e===null)return ul(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ai(o,r,0,null),e=ot(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=xl(t),n.memoizedState=vl,e):Es(n,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return mh(e,n,o,r,l,a,t);if(i){i=r.fallback,o=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Kn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Kn(l,i):(i=ot(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?xl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=vl,r}return i=e.child,e=i.sibling,r=Kn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Es(e,n){return n=Ai({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Sa(e,n,t,r){return r!==null&&us(r),Vt(n,e.child,null,t),e=Es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mh(e,n,t,r,a,i,o){if(t)return n.flags&256?(n.flags&=-257,r=So(Error(T(422))),Sa(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=Ai({mode:"visible",children:r.children},a,0,null),i=ot(i,a,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Vt(n,e.child,null,o),n.child.memoizedState=xl(o),n.memoizedState=vl,i);if(!(n.mode&1))return Sa(e,n,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(T(419)),r=So(i,r,void 0),Sa(e,n,o,r)}if(l=(o&e.childLanes)!==0,De||l){if(r=ge,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Rn(e,a),ln(r,e,a,-1))}return As(),r=So(Error(T(421))),Sa(e,n,o,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Th.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,Ue=Mn(a.nextSibling),$e=n,Z=!0,an=null,e!==null&&(Ye[Qe++]=bn,Ye[Qe++]=Sn,Ye[Qe++]=ct,bn=e.id,Sn=e.overflow,ct=n),n=Es(n,r.children),n.flags|=4096,n)}function Gc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),dl(e.return,n,t)}function ko(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function Mp(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Re(e,n,r.children,t),r=te.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,t,n);else if(e.tag===19)Gc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(te,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&ii(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),ko(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&ii(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}ko(n,!0,t,null,i);break;case"together":ko(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ia(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=Kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function gh(e,n,t){switch(n.tag){case 3:Bp(n),Kt();break;case 5:pp(n);break;case 1:Ie(n.type)&&Za(n);break;case 4:hs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;q(ti,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(te,te.current&1),n.flags|=128,null):t&n.child.childLanes?zp(e,n,t):(q(te,te.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);q(te,te.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Mp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(te,te.current),r)break;return null;case 22:case 23:return n.lanes=0,Ip(e,n,t)}return Tn(e,n,t)}var Hp,yl,Up,$p;Hp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yl=function(){};Up=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,rt(vn.current);var i=null;switch(t){case"input":a=Ho(e,a),r=Ho(e,r),i=[];break;case"select":a=ae({},a,{value:void 0}),r=ae({},r,{value:void 0}),i=[];break;case"textarea":a=Ko(e,a),r=Ko(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ja)}qo(t,r);var o;t=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Y("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};$p=function(e,n,t,r){t!==r&&(n.flags|=4)};function sr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function hh(e,n,t){var r=n.pendingProps;switch(cs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(n),null;case 1:return Ie(n.type)&&Xa(),Se(n),null;case 3:return r=n.stateNode,qt(),J(Oe),J(_e),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wa(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(Tl(an),an=null))),yl(e,n),Se(n),null;case 5:vs(n);var a=rt(Br.current);if(t=n.type,e!==null&&n.stateNode!=null)Up(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(T(166));return Se(n),null}if(e=rt(vn.current),wa(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[gn]=n,r[Ir]=i,e=(n.mode&1)!==0,t){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(a=0;a<hr.length;a++)Y(hr[a],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":rc(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":ic(r,i),Y("invalid",r)}qo(t,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),a=["children",""+l]):Rr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Y("scroll",r)}switch(t){case"input":da(r),ac(r,i,!0);break;case"textarea":da(r),oc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ja)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[gn]=n,e[Ir]=r,Hp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Wo(t,r),t){case"dialog":Y("cancel",e),Y("close",e),a=r;break;case"iframe":case"object":case"embed":Y("load",e),a=r;break;case"video":case"audio":for(a=0;a<hr.length;a++)Y(hr[a],e);a=r;break;case"source":Y("error",e),a=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=r;break;case"details":Y("toggle",e),a=r;break;case"input":rc(e,r),a=Ho(e,r),Y("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ae({},r,{value:void 0}),Y("invalid",e);break;case"textarea":ic(e,r),a=Ko(e,r),Y("invalid",e);break;default:a=r}qo(t,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?wd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xd(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Tr(e,s):typeof s=="number"&&Tr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&Gl(e,i,s,o))}switch(t){case"input":da(e),ac(e,r,!1);break;case"textarea":da(e),oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?It(e,!!r.multiple,i,!1):r.defaultValue!=null&&It(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ja)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Se(n),null;case 6:if(e&&n.stateNode!=null)$p(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));if(t=rt(Br.current),rt(vn.current),wa(n)){if(r=n.stateNode,t=n.memoizedProps,r[gn]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:ya(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[gn]=n,n.stateNode=r}return Se(n),null;case 13:if(J(te),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&n.mode&1&&!(n.flags&128))lp(),Kt(),n.flags|=98560,i=!1;else if(i=wa(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[gn]=n}else Kt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Se(n),i=!1}else an!==null&&(Tl(an),an=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||te.current&1?fe===0&&(fe=3):As())),n.updateQueue!==null&&(n.flags|=4),Se(n),null);case 4:return qt(),yl(e,n),e===null&&Dr(n.stateNode.containerInfo),Se(n),null;case 10:return fs(n.type._context),Se(n),null;case 17:return Ie(n.type)&&Xa(),Se(n),null;case 19:if(J(te),i=n.memoizedState,i===null)return Se(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)sr(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ii(e),o!==null){for(n.flags|=128,sr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(te,te.current&1|2),n.child}e=e.sibling}i.tail!==null&&se()>Gt&&(n.flags|=128,r=!0,sr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ii(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return Se(n),null}else 2*se()-i.renderingStartTime>Gt&&t!==1073741824&&(n.flags|=128,r=!0,sr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=se(),n.sibling=null,t=te.current,q(te,r?t&1|2:t&1),n):(Se(n),null);case 22:case 23:return Cs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(Se(n),n.subtreeFlags&6&&(n.flags|=8192)):Se(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function vh(e,n){switch(cs(n),n.tag){case 1:return Ie(n.type)&&Xa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qt(),J(Oe),J(_e),xs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vs(n),null;case 13:if(J(te),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));Kt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(te),null;case 4:return qt(),null;case 10:return fs(n.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var ka=!1,ke=!1,xh=typeof WeakSet=="function"?WeakSet:Set,P=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ie(e,n,r)}else t.current=null}function wl(e,n,t){try{t()}catch(r){ie(e,n,r)}}var Yc=!1;function yh(e,n){if(rl=Ga,e=Gd(),ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,c=0,u=0,f=e,g=null;n:for(;;){for(var y;f!==t||a!==0&&f.nodeType!==3||(l=o+a),f!==i||r!==0&&f.nodeType!==3||(s=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break n;if(g===t&&++c===a&&(l=o),g===i&&++u===r&&(s=o),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(al={focusedElem:e,selectionRange:t},Ga=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,w=m.memoizedState,h=n.stateNode,p=h.getSnapshotBeforeUpdate(n.elementType===n.type?x:tn(n.type,x),w);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){ie(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return m=Yc,Yc=!1,m}function kr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&wl(n,t,i)}a=a.next}while(a!==r)}}function Li(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function bl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Kp(e){var n=e.alternate;n!==null&&(e.alternate=null,Kp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[Ir],delete n[ll],delete n[nh],delete n[th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function Qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ja));else if(r!==4&&(e=e.child,e!==null))for(Sl(e,n,t),e=e.sibling;e!==null;)Sl(e,n,t),e=e.sibling}function kl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kl(e,n,t),e=e.sibling;e!==null;)kl(e,n,t),e=e.sibling}var xe=null,rn=!1;function Cn(e,n,t){for(t=t.child;t!==null;)qp(e,n,t),t=t.sibling}function qp(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:ke||Dt(t,n);case 6:var r=xe,a=rn;xe=null,Cn(e,n,t),xe=r,rn=a,xe!==null&&(rn?(e=xe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):xe.removeChild(t.stateNode));break;case 18:xe!==null&&(rn?(e=xe,t=t.stateNode,e.nodeType===8?ho(e.parentNode,t):e.nodeType===1&&ho(e,t),Nr(e)):ho(xe,t.stateNode));break;case 4:r=xe,a=rn,xe=t.stateNode.containerInfo,rn=!0,Cn(e,n,t),xe=r,rn=a;break;case 0:case 11:case 14:case 15:if(!ke&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&wl(t,n,o),a=a.next}while(a!==r)}Cn(e,n,t);break;case 1:if(!ke&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ie(t,n,l)}Cn(e,n,t);break;case 21:Cn(e,n,t);break;case 22:t.mode&1?(ke=(r=ke)||t.memoizedState!==null,Cn(e,n,t),ke=r):Cn(e,n,t);break;default:Cn(e,n,t)}}function Jc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new xh),n.forEach(function(r){var a=Lh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function nn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,rn=!1;break e;case 3:xe=l.stateNode.containerInfo,rn=!0;break e;case 4:xe=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(xe===null)throw Error(T(160));qp(i,o,a),xe=null,rn=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(c){ie(a,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wp(n,e),n=n.sibling}function Wp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(n,e),pn(e),r&4){try{kr(3,e,e.return),Li(3,e)}catch(x){ie(e,e.return,x)}try{kr(5,e,e.return)}catch(x){ie(e,e.return,x)}}break;case 1:nn(n,e),pn(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(nn(n,e),pn(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var a=e.stateNode;try{Tr(a,"")}catch(x){ie(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&gd(a,i),Wo(l,o);var c=Wo(l,i);for(o=0;o<s.length;o+=2){var u=s[o],f=s[o+1];u==="style"?wd(a,f):u==="dangerouslySetInnerHTML"?xd(a,f):u==="children"?Tr(a,f):Gl(a,u,f,c)}switch(l){case"input":Uo(a,i);break;case"textarea":hd(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?It(a,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?It(a,!!i.multiple,i.defaultValue,!0):It(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ir]=i}catch(x){ie(e,e.return,x)}}break;case 6:if(nn(n,e),pn(e),r&4){if(e.stateNode===null)throw Error(T(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){ie(e,e.return,x)}}break;case 3:if(nn(n,e),pn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Nr(n.containerInfo)}catch(x){ie(e,e.return,x)}break;case 4:nn(n,e),pn(e);break;case 13:nn(n,e),pn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ts=se())),r&4&&Jc(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(ke=(c=ke)||u,nn(n,e),ke=c):nn(n,e),pn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(P=e,u=e.child;u!==null;){for(f=P=u;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:Dt(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(x){ie(r,t,x)}}break;case 5:Dt(g,g.return);break;case 22:if(g.memoizedState!==null){Zc(f);continue}}y!==null?(y.return=g,P=y):Zc(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{a=f.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=yd("display",o))}catch(x){ie(e,e.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ie(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nn(n,e),pn(e),r&4&&Jc(e);break;case 21:break;default:nn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Vp(t)){var r=t;break e}t=t.return}throw Error(T(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Tr(a,""),r.flags&=-33);var i=Qc(e);kl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Qc(e);Sl(e,l,o);break;default:throw Error(T(161))}}catch(s){ie(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wh(e,n,t){P=e,Gp(e)}function Gp(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||ka;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||ke;l=ka;var c=ke;if(ka=o,(ke=s)&&!c)for(P=a;P!==null;)o=P,s=o.child,o.tag===22&&o.memoizedState!==null?eu(a):s!==null?(s.return=o,P=s):eu(a);for(;i!==null;)P=i,Gp(i),i=i.sibling;P=a,ka=l,ke=c}Xc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,P=i):Xc(e)}}function Xc(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ke||Li(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ke)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:tn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ic(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ic(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Nr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ke||n.flags&512&&bl(n)}catch(g){ie(n,n.return,g)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Zc(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function eu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Li(4,n)}catch(s){ie(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){ie(n,a,s)}}var i=n.return;try{bl(n)}catch(s){ie(n,i,s)}break;case 5:var o=n.return;try{bl(n)}catch(s){ie(n,o,s)}}}catch(s){ie(n,n.return,s)}if(n===e){P=null;break}var l=n.sibling;if(l!==null){l.return=n.return,P=l;break}P=n.return}}var bh=Math.ceil,si=Ln.ReactCurrentDispatcher,_s=Ln.ReactCurrentOwner,Xe=Ln.ReactCurrentBatchConfig,U=0,ge=null,de=null,ye=0,He=0,Ot=Yn(0),fe=0,Ur=null,dt=0,Ci=0,Rs=0,Er=null,je=null,Ts=0,Gt=1/0,yn=null,ci=!1,El=null,Un=null,Ea=!1,On=null,ui=0,_r=0,_l=null,Fa=-1,Ba=0;function Le(){return U&6?se():Fa!==-1?Fa:Fa=se()}function $n(e){return e.mode&1?U&2&&ye!==0?ye&-ye:ah.transition!==null?(Ba===0&&(Ba=Pd()),Ba):(e=$,e!==0||(e=window.event,e=e===void 0?16:zd(e.type)),e):1}function ln(e,n,t,r){if(50<_r)throw _r=0,_l=null,Error(T(185));Wr(e,t,r),(!(U&2)||e!==ge)&&(e===ge&&(!(U&2)&&(Ci|=t),fe===4&&jn(e,ye)),Fe(e,r),t===1&&U===0&&!(n.mode&1)&&(Gt=se()+500,_i&&Qn()))}function Fe(e,n){var t=e.callbackNode;ag(e,n);var r=Wa(e,e===ge?ye:0);if(r===0)t!==null&&cc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&cc(t),n===1)e.tag===0?rh(nu.bind(null,e)):ap(nu.bind(null,e)),Zg(function(){!(U&6)&&Qn()}),t=null;else{switch(jd(r)){case 1:t=Zl;break;case 4:t=Ad;break;case 16:t=qa;break;case 536870912:t=Nd;break;default:t=qa}t=tf(t,Yp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yp(e,n){if(Fa=-1,Ba=0,U&6)throw Error(T(327));var t=e.callbackNode;if(Ht()&&e.callbackNode!==t)return null;var r=Wa(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=di(e,r);else{n=r;var a=U;U|=2;var i=Jp();(ge!==e||ye!==n)&&(yn=null,Gt=se()+500,it(e,n));do try{Eh();break}catch(l){Qp(e,l)}while(!0);ps(),si.current=i,U=a,de!==null?n=0:(ge=null,ye=0,n=fe)}if(n!==0){if(n===2&&(a=Xo(e),a!==0&&(r=a,n=Rl(e,a))),n===1)throw t=Ur,it(e,0),jn(e,r),Fe(e,se()),t;if(n===6)jn(e,r);else{if(a=e.current.alternate,!(r&30)&&!Sh(a)&&(n=di(e,r),n===2&&(i=Xo(e),i!==0&&(r=i,n=Rl(e,i))),n===1))throw t=Ur,it(e,0),jn(e,r),Fe(e,se()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(T(345));case 2:Zn(e,je,yn);break;case 3:if(jn(e,r),(r&130023424)===r&&(n=Ts+500-se(),10<n)){if(Wa(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ol(Zn.bind(null,e,je,yn),n);break}Zn(e,je,yn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var o=31-on(r);i=1<<o,o=n[o],o>a&&(a=o),r&=~i}if(r=a,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bh(r/1960))-r,10<r){e.timeoutHandle=ol(Zn.bind(null,e,je,yn),r);break}Zn(e,je,yn);break;case 5:Zn(e,je,yn);break;default:throw Error(T(329))}}}return Fe(e,se()),e.callbackNode===t?Yp.bind(null,e):null}function Rl(e,n){var t=Er;return e.current.memoizedState.isDehydrated&&(it(e,n).flags|=256),e=di(e,n),e!==2&&(n=je,je=t,n!==null&&Tl(n)),e}function Tl(e){je===null?je=e:je.push.apply(je,e)}function Sh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!sn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jn(e,n){for(n&=~Rs,n&=~Ci,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),r=1<<t;e[t]=-1,n&=~r}}function nu(e){if(U&6)throw Error(T(327));Ht();var n=Wa(e,0);if(!(n&1))return Fe(e,se()),null;var t=di(e,n);if(e.tag!==0&&t===2){var r=Xo(e);r!==0&&(n=r,t=Rl(e,r))}if(t===1)throw t=Ur,it(e,0),jn(e,n),Fe(e,se()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,je,yn),Fe(e,se()),null}function Ls(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Gt=se()+500,_i&&Qn())}}function pt(e){On!==null&&On.tag===0&&!(U&6)&&Ht();var n=U;U|=1;var t=Xe.transition,r=$;try{if(Xe.transition=null,$=1,e)return e()}finally{$=r,Xe.transition=t,U=n,!(U&6)&&Qn()}}function Cs(){He=Ot.current,J(Ot)}function it(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xg(t)),de!==null)for(t=de.return;t!==null;){var r=t;switch(cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xa();break;case 3:qt(),J(Oe),J(_e),xs();break;case 5:vs(r);break;case 4:qt();break;case 13:J(te);break;case 19:J(te);break;case 10:fs(r.type._context);break;case 22:case 23:Cs()}t=t.return}if(ge=e,de=e=Kn(e.current,null),ye=He=n,fe=0,Ur=null,Rs=Ci=dt=0,je=Er=null,tt!==null){for(n=0;n<tt.length;n++)if(t=tt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}t.pending=r}tt=null}return e}function Qp(e,n){do{var t=de;try{if(ps(),Da.current=li,oi){for(var r=re.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}oi=!1}if(ut=0,me=pe=re=null,Sr=!1,zr=0,_s.current=null,t===null||t.return===null){fe=1,Ur=n,de=null;break}e:{var i=e,o=t.return,l=t,s=n;if(n=ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Uc(o);if(y!==null){y.flags&=-257,$c(y,o,l,i,n),y.mode&1&&Hc(i,c,n),n=y,s=c;var m=n.updateQueue;if(m===null){var x=new Set;x.add(s),n.updateQueue=x}else m.add(s);break e}else{if(!(n&1)){Hc(i,c,n),As();break e}s=Error(T(426))}}else if(Z&&l.mode&1){var w=Uc(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),$c(w,o,l,i,n),us(Wt(s,l));break e}}i=s=Wt(s,l),fe!==4&&(fe=2),Er===null?Er=[i]:Er.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=jp(i,s,n);Oc(i,h);break e;case 1:l=s;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Un===null||!Un.has(v)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Dp(i,l,n);Oc(i,S);break e}}i=i.return}while(i!==null)}Zp(t)}catch(R){n=R,de===t&&t!==null&&(de=t=t.return);continue}break}while(!0)}function Jp(){var e=si.current;return si.current=li,e===null?li:e}function As(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(dt&268435455)&&!(Ci&268435455)||jn(ge,ye)}function di(e,n){var t=U;U|=2;var r=Jp();(ge!==e||ye!==n)&&(yn=null,it(e,n));do try{kh();break}catch(a){Qp(e,a)}while(!0);if(ps(),U=t,si.current=r,de!==null)throw Error(T(261));return ge=null,ye=0,fe}function kh(){for(;de!==null;)Xp(de)}function Eh(){for(;de!==null&&!Ym();)Xp(de)}function Xp(e){var n=nf(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?Zp(e):de=n,_s.current=null}function Zp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=vh(t,n),t!==null){t.flags&=32767,de=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,de=null;return}}else if(t=hh(t,n,He),t!==null){de=t;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);fe===0&&(fe=5)}function Zn(e,n,t){var r=$,a=Xe.transition;try{Xe.transition=null,$=1,_h(e,n,t,r)}finally{Xe.transition=a,$=r}return null}function _h(e,n,t,r){do Ht();while(On!==null);if(U&6)throw Error(T(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ig(e,i),e===ge&&(de=ge=null,ye=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ea||(Ea=!0,tf(qa,function(){return Ht(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var o=$;$=1;var l=U;U|=4,_s.current=null,yh(e,t),Wp(t,e),Vg(al),Ga=!!rl,al=rl=null,e.current=t,wh(t),Qm(),U=l,$=o,Xe.transition=i}else e.current=t;if(Ea&&(Ea=!1,On=e,ui=a),i=e.pendingLanes,i===0&&(Un=null),Zm(t.stateNode),Fe(e,se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(ci)throw ci=!1,e=El,El=null,e;return ui&1&&e.tag!==0&&Ht(),i=e.pendingLanes,i&1?e===_l?_r++:(_r=0,_l=e):_r=0,Qn(),null}function Ht(){if(On!==null){var e=jd(ui),n=Xe.transition,t=$;try{if(Xe.transition=null,$=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,ui=0,U&6)throw Error(T(331));var a=U;for(U|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(P=c;P!==null;){var u=P;switch(u.tag){case 0:case 11:case 15:kr(8,u,i)}var f=u.child;if(f!==null)f.return=u,P=f;else for(;P!==null;){u=P;var g=u.sibling,y=u.return;if(Kp(u),u===c){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var m=i.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,P=h;break e}P=i.return}}var p=e.current;for(P=p;P!==null;){o=P;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,P=v;else e:for(o=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Li(9,l)}}catch(R){ie(l,l.return,R)}if(l===o){P=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,P=S;break e}P=l.return}}if(U=a,Qn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{$=t,Xe.transition=n}}return!1}function tu(e,n,t){n=Wt(t,n),n=jp(e,n,1),e=Hn(e,n,1),n=Le(),e!==null&&(Wr(e,1,n),Fe(e,n))}function ie(e,n,t){if(e.tag===3)tu(e,e,t);else for(;n!==null;){if(n.tag===3){tu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=Wt(t,e),e=Dp(n,e,1),n=Hn(n,e,1),e=Le(),n!==null&&(Wr(n,1,e),Fe(n,e));break}}n=n.return}}function Rh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Le(),e.pingedLanes|=e.suspendedLanes&t,ge===e&&(ye&t)===t&&(fe===4||fe===3&&(ye&130023424)===ye&&500>se()-Ts?it(e,0):Rs|=t),Fe(e,n)}function ef(e,n){n===0&&(e.mode&1?(n=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):n=1);var t=Le();e=Rn(e,n),e!==null&&(Wr(e,n,t),Fe(e,t))}function Th(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ef(e,t)}function Lh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(n),ef(e,t)}var nf;nf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Oe.current)De=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return De=!1,gh(e,n,t);De=!!(e.flags&131072)}else De=!1,Z&&n.flags&1048576&&ip(n,ni,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ia(e,n),e=n.pendingProps;var a=$t(n,_e.current);Mt(n,t),a=ws(null,n,r,e,a,t);var i=bs();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ie(r)?(i=!0,Za(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,gs(n),a.updater=Ti,n.stateNode=a,a._reactInternals=n,fl(n,r,e,t),n=hl(null,n,r,!0,i,t)):(n.tag=0,Z&&i&&ss(n),Re(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ia(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Ah(r),e=tn(r,e),a){case 0:n=gl(null,n,r,e,t);break e;case 1:n=qc(null,n,r,e,t);break e;case 11:n=Kc(null,n,r,e,t);break e;case 14:n=Vc(null,n,r,tn(r.type,e),t);break e}throw Error(T(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),gl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),qc(e,n,r,a,t);case 3:e:{if(Bp(n),e===null)throw Error(T(387));r=n.pendingProps,i=n.memoizedState,a=i.element,dp(e,n),ai(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=Wt(Error(T(423)),n),n=Wc(e,n,r,t,a);break e}else if(r!==a){a=Wt(Error(T(424)),n),n=Wc(e,n,r,t,a);break e}else for(Ue=Mn(n.stateNode.containerInfo.firstChild),$e=n,Z=!0,an=null,t=cp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Kt(),r===a){n=Tn(e,n,t);break e}Re(e,n,r,t)}n=n.child}return n;case 5:return pp(n),e===null&&ul(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,il(r,a)?o=null:i!==null&&il(r,i)&&(n.flags|=32),Fp(e,n),Re(e,n,o,t),n.child;case 6:return e===null&&ul(n),null;case 13:return zp(e,n,t);case 4:return hs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Vt(n,null,r,t):Re(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Kc(e,n,r,a,t);case 7:return Re(e,n,n.pendingProps,t),n.child;case 8:return Re(e,n,n.pendingProps.children,t),n.child;case 12:return Re(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,o=a.value,q(ti,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===a.children&&!Oe.current){n=Tn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=kn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),dl(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(T(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),dl(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Re(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Mt(n,t),a=Ze(a),r=r(a),n.flags|=1,Re(e,n,r,t),n.child;case 14:return r=n.type,a=tn(r,n.pendingProps),a=tn(r.type,a),Vc(e,n,r,a,t);case 15:return Op(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Ia(e,n),n.tag=1,Ie(r)?(e=!0,Za(n)):e=!1,Mt(n,t),Pp(n,r,a),fl(n,r,a,t),hl(null,n,r,!0,e,t);case 19:return Mp(e,n,t);case 22:return Ip(e,n,t)}throw Error(T(156,n.tag))};function tf(e,n){return Cd(e,n)}function Ch(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new Ch(e,n,t,r)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ah(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Jl)return 14}return 2}function Kn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function za(e,n,t,r,a,i){var o=2;if(r=e,typeof e=="function")Ns(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case _t:return ot(t.children,a,i,n);case Yl:o=8,a|=8;break;case Fo:return e=Je(12,t,n,a|2),e.elementType=Fo,e.lanes=i,e;case Bo:return e=Je(13,t,n,a),e.elementType=Bo,e.lanes=i,e;case zo:return e=Je(19,t,n,a),e.elementType=zo,e.lanes=i,e;case pd:return Ai(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:o=10;break e;case dd:o=9;break e;case Ql:o=11;break e;case Jl:o=14;break e;case An:o=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=Je(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function ot(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function Ai(e,n,t,r){return e=Je(22,e,r,n),e.elementType=pd,e.lanes=t,e.stateNode={isHidden:!1},e}function Eo(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function _o(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ps(e,n,t,r,a,i,o,l,s){return e=new Nh(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(i),e}function Ph(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function rf(e){if(!e)return Wn;e=e._reactInternals;e:{if(gt(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ie(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(Ie(t))return rp(e,t,n)}return n}function af(e,n,t,r,a,i,o,l,s){return e=Ps(t,r,!0,e,a,i,o,l,s),e.context=rf(null),t=e.current,r=Le(),a=$n(t),i=kn(r,a),i.callback=n??null,Hn(t,i,a),e.current.lanes=a,Wr(e,a,r),Fe(e,r),e}function Ni(e,n,t,r){var a=n.current,i=Le(),o=$n(a);return t=rf(t),n.context===null?n.context=t:n.pendingContext=t,n=kn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Hn(a,n,o),e!==null&&(ln(e,a,o,i),ja(e,a,o)),o}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function js(e,n){ru(e,n),(e=e.alternate)&&ru(e,n)}function jh(){return null}var of=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}Pi.prototype.render=Ds.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));Ni(e,n,null,null)};Pi.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pt(function(){Ni(null,e,null,null)}),n[_n]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Id();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pn.length&&n!==0&&n<Pn[t].priority;t++);Pn.splice(t,0,e),t===0&&Bd(e)}};function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function au(){}function Dh(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=pi(o);i.call(c)}}var o=af(n,r,e,0,null,!1,!1,"",au);return e._reactRootContainer=o,e[_n]=o.current,Dr(e.nodeType===8?e.parentNode:e),pt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var c=pi(s);l.call(c)}}var s=Ps(e,0,!1,null,null,!1,!1,"",au);return e._reactRootContainer=s,e[_n]=s.current,Dr(e.nodeType===8?e.parentNode:e),pt(function(){Ni(n,s,t,r)}),s}function Di(e,n,t,r,a){var i=t._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=pi(o);l.call(s)}}Ni(n,o,e,a)}else o=Dh(t,n,e,a,r);return pi(o)}Dd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=gr(n.pendingLanes);t!==0&&(es(n,t|1),Fe(n,se()),!(U&6)&&(Gt=se()+500,Qn()))}break;case 13:pt(function(){var r=Rn(e,1);if(r!==null){var a=Le();ln(r,e,1,a)}}),js(e,1)}};ns=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var t=Le();ln(n,e,134217728,t)}js(e,134217728)}};Od=function(e){if(e.tag===13){var n=$n(e),t=Rn(e,n);if(t!==null){var r=Le();ln(t,e,n,r)}js(e,n)}};Id=function(){return $};Fd=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};Yo=function(e,n,t){switch(n){case"input":if(Uo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Ei(r);if(!a)throw Error(T(90));md(r),Uo(r,a)}}}break;case"textarea":hd(e,t);break;case"select":n=t.value,n!=null&&It(e,!!t.multiple,n,!1)}};kd=Ls;Ed=pt;var Oh={usingClientEntryPoint:!1,Events:[Yr,Ct,Ei,bd,Sd,Ls]},cr={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ih={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Td(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{wi=_a.inject(Ih),hn=_a}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh;Ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Os(n))throw Error(T(200));return Ph(e,n,null,t)};Ve.createRoot=function(e,n){if(!Os(e))throw Error(T(299));var t=!1,r="",a=of;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Ps(e,1,!1,null,null,t,!1,r,a),e[_n]=n.current,Dr(e.nodeType===8?e.parentNode:e),new Ds(n)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Td(n),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return pt(e)};Ve.hydrate=function(e,n,t){if(!ji(n))throw Error(T(200));return Di(null,e,n,!0,t)};Ve.hydrateRoot=function(e,n,t){if(!Os(e))throw Error(T(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",o=of;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=af(n,null,e,1,t??null,a,!1,i,o),e[_n]=n.current,Dr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Pi(n)};Ve.render=function(e,n,t){if(!ji(n))throw Error(T(200));return Di(null,e,n,!1,t)};Ve.unmountComponentAtNode=function(e){if(!ji(e))throw Error(T(40));return e._reactRootContainer?(pt(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ls;Ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ji(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Di(e,n,t,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function lf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lf)}catch(e){console.error(e)}}lf(),od.exports=Ve;var Fh=od.exports,iu=Fh;Oo.createRoot=iu.createRoot,Oo.hydrateRoot=iu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$r.apply(this,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const ou="popstate";function Bh(e){e===void 0&&(e={});function n(a,i){let{pathname:o="/",search:l="",hash:s=""}=ht(a.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ll("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof i=="string"?i:fi(i))}function r(a,i){Oi(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Mh(n,t,r,e)}function oe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Oi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function zh(){return Math.random().toString(36).substr(2,8)}function lu(e,n){return{usr:e.state,key:e.key,idx:n}}function Ll(e,n,t,r){return t===void 0&&(t=null),$r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ht(n):n,{state:t,key:n&&n.key||r||zh()})}function fi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function ht(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Mh(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=In.Pop,s=null,c=u();c==null&&(c=0,o.replaceState($r({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){l=In.Pop;let w=u(),h=w==null?null:w-c;c=w,s&&s({action:l,location:x.location,delta:h})}function g(w,h){l=In.Push;let p=Ll(x.location,w,h);t&&t(p,w),c=u()+1;let v=lu(p,c),S=x.createHref(p);try{o.pushState(v,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(S)}i&&s&&s({action:l,location:x.location,delta:1})}function y(w,h){l=In.Replace;let p=Ll(x.location,w,h);t&&t(p,w),c=u();let v=lu(p,c),S=x.createHref(p);o.replaceState(v,"",S),i&&s&&s({action:l,location:x.location,delta:0})}function m(w){let h=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof w=="string"?w:fi(w);return p=p.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let x={get action(){return l},get location(){return e(a,o)},listen(w){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(ou,f),s=w,()=>{a.removeEventListener(ou,f),s=null}},createHref(w){return n(a,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:y,go(w){return o.go(w)}};return x}var su;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(su||(su={}));function Hh(e,n,t){return t===void 0&&(t="/"),Uh(e,n,t)}function Uh(e,n,t,r){let a=typeof n=="string"?ht(n):n,i=Yt(a.pathname||"/",t);if(i==null)return null;let o=sf(e);$h(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let c=ev(i);l=Xh(o[s],c)}return l}function sf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(oe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Vn([r,s.relativePath]),u=t.concat(s);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sf(i.children,n,u,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:Qh(c,i.index),routesMeta:u})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of cf(i.path))a(i,o,s)}),n}function cf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=cf(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function $h(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Jh(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Kh=/^:[\w-]+$/,Vh=3,qh=2,Wh=1,Gh=10,Yh=-2,cu=e=>e==="*";function Qh(e,n){let t=e.split("/"),r=t.length;return t.some(cu)&&(r+=Yh),n&&(r+=qh),t.filter(a=>!cu(a)).reduce((a,i)=>a+(Kh.test(i)?Vh:i===""?Wh:Gh),r)}function Jh(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function Xh(e,n,t){let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,u=i==="/"?n:n.slice(i.length)||"/",f=Cl({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u),g=s.route;if(!f)return null;Object.assign(a,f.params),o.push({params:a,pathname:Vn([i,f.pathname]),pathnameBase:iv(Vn([i,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(i=Vn([i,f.pathnameBase]))}return o}function Cl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Zh(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:g,isOptional:y}=u;if(g==="*"){let x=l[f]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const m=l[f];return y&&!m?c[g]=void 0:c[g]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Zh(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Oi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function ev(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Oi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Yt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tv=e=>nv.test(e);function rv(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?ht(e):e,i;if(t)if(tv(t))i=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Oi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?i=uu(t.substring(1),"/"):i=uu(t,n)}else i=n;return{pathname:i,search:ov(r),hash:lv(a)}}function uu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Ro(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function av(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function uf(e,n){let t=av(e);return n?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function df(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=ht(e):(a=$r({},e),oe(!a.pathname||!a.pathname.includes("?"),Ro("?","pathname","search",a)),oe(!a.pathname||!a.pathname.includes("#"),Ro("#","pathname","hash",a)),oe(!a.search||!a.search.includes("#"),Ro("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=t;else{let f=n.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?n[f]:"/"}let s=rv(a,l),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const Vn=e=>e.join("/").replace(/\/\/+/g,"/"),iv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ov=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pf=["post","put","patch","delete"];new Set(pf);const cv=["get",...pf];new Set(cv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Kr.apply(this,arguments)}const Ii=b.createContext(null),ff=b.createContext(null),Jn=b.createContext(null),Fi=b.createContext(null),vt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),mf=b.createContext(null);function uv(e,n){let{relative:t}=n===void 0?{}:n;Jr()||oe(!1);let{basename:r,navigator:a}=b.useContext(Jn),{hash:i,pathname:o,search:l}=Bi(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Vn([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Jr(){return b.useContext(Fi)!=null}function Xr(){return Jr()||oe(!1),b.useContext(Fi).location}function gf(e){b.useContext(Jn).static||b.useLayoutEffect(e)}function dv(){let{isDataRoute:e}=b.useContext(vt);return e?Ev():pv()}function pv(){Jr()||oe(!1);let e=b.useContext(Ii),{basename:n,future:t,navigator:r}=b.useContext(Jn),{matches:a}=b.useContext(vt),{pathname:i}=Xr(),o=JSON.stringify(uf(a,t.v7_relativeSplatPath)),l=b.useRef(!1);return gf(()=>{l.current=!0}),b.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=df(c,JSON.parse(o),i,u.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Vn([n,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[n,r,o,i,e])}function Bi(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=b.useContext(Jn),{matches:a}=b.useContext(vt),{pathname:i}=Xr(),o=JSON.stringify(uf(a,r.v7_relativeSplatPath));return b.useMemo(()=>df(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function fv(e,n){return mv(e,n)}function mv(e,n,t,r){Jr()||oe(!1);let{navigator:a}=b.useContext(Jn),{matches:i}=b.useContext(vt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Xr(),u;if(n){var f;let w=typeof n=="string"?ht(n):n;s==="/"||(f=w.pathname)!=null&&f.startsWith(s)||oe(!1),u=w}else u=c;let g=u.pathname||"/",y=g;if(s!=="/"){let w=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=Hh(e,{pathname:y}),x=yv(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Vn([s,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Vn([s,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,t,r);return n&&x?b.createElement(Fi.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:In.Pop}},x):x}function gv(){let e=kv(),n=sv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),t?b.createElement("pre",{style:a},t):null,null)}const hv=b.createElement(gv,null);class vv extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?b.createElement(vt.Provider,{value:this.props.routeContext},b.createElement(mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xv(e){let{routeContext:n,match:t,children:r}=e,a=b.useContext(Ii);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(vt.Provider,{value:n},r)}function yv(e,n,t,r){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if(!t)return null;if(t.errors)e=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let u=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);u>=0||oe(!1),o=o.slice(0,Math.min(o.length,u+1))}let s=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:g,errors:y}=t,m=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||m){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,g)=>{let y,m=!1,x=null,w=null;t&&(y=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||hv,s&&(c<0&&g===0?(_v("route-fallback"),m=!0,w=null):c===g&&(m=!0,w=f.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,g+1)),p=()=>{let v;return y?v=x:m?v=w:f.route.Component?v=b.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=u,b.createElement(xv,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:t!=null},children:v})};return t&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?b.createElement(vv,{location:t.location,revalidation:t.revalidation,component:x,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hf||{}),vf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vf||{});function wv(e){let n=b.useContext(Ii);return n||oe(!1),n}function bv(e){let n=b.useContext(ff);return n||oe(!1),n}function Sv(e){let n=b.useContext(vt);return n||oe(!1),n}function xf(e){let n=Sv(),t=n.matches[n.matches.length-1];return t.route.id||oe(!1),t.route.id}function kv(){var e;let n=b.useContext(mf),t=bv(),r=xf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Ev(){let{router:e}=wv(hf.UseNavigateStable),n=xf(vf.UseNavigateStable),t=b.useRef(!1);return gf(()=>{t.current=!0}),b.useCallback(function(a,i){i===void 0&&(i={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Kr({fromRouteId:n},i)))},[e,n])}const du={};function _v(e,n,t){du[e]||(du[e]=!0)}function Rv(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kt(e){oe(!1)}function Tv(e){let{basename:n="/",children:t=null,location:r,navigationType:a=In.Pop,navigator:i,static:o=!1,future:l}=e;Jr()&&oe(!1);let s=n.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:s,navigator:i,static:o,future:Kr({v7_relativeSplatPath:!1},l)}),[s,l,i,o]);typeof r=="string"&&(r=ht(r));let{pathname:u="/",search:f="",hash:g="",state:y=null,key:m="default"}=r,x=b.useMemo(()=>{let w=Yt(u,s);return w==null?null:{location:{pathname:w,search:f,hash:g,state:y,key:m},navigationType:a}},[s,u,f,g,y,m,a]);return x==null?null:b.createElement(Jn.Provider,{value:c},b.createElement(Fi.Provider,{children:t,value:x}))}function Lv(e){let{children:n,location:t}=e;return fv(Al(n),t)}new Promise(()=>{});function Al(e,n){n===void 0&&(n=[]);let t=[];return b.Children.forEach(e,(r,a)=>{if(!b.isValidElement(r))return;let i=[...n,a];if(r.type===b.Fragment){t.push.apply(t,Al(r.props.children,i));return}r.type!==kt&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Al(r.props.children,i)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mi.apply(this,arguments)}function yf(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Cv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Av(e,n){return e.button===0&&(!n||n==="_self")&&!Cv(e)}const Nv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jv="6";try{window.__reactRouterVersion=jv}catch{}const Dv=b.createContext({isTransitioning:!1}),Ov="startTransition",pu=Rm[Ov];function Iv(e){let{basename:n,children:t,future:r,window:a}=e,i=b.useRef();i.current==null&&(i.current=Bh({window:a,v5Compat:!0}));let o=i.current,[l,s]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=b.useCallback(f=>{c&&pu?pu(()=>s(f)):s(f)},[s,c]);return b.useLayoutEffect(()=>o.listen(u),[o,u]),b.useEffect(()=>Rv(r),[r]),b.createElement(Tv,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const Fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=b.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:c,preventScrollReset:u,viewTransition:f}=n,g=yf(n,Nv),{basename:y}=b.useContext(Jn),m,x=!1;if(typeof c=="string"&&Bv.test(c)&&(m=c,Fv))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),R=Yt(S.pathname,y);S.origin===v.origin&&R!=null?c=R+S.search+S.hash:x=!0}catch{}let w=uv(c,{relative:a}),h=Hv(c,{replace:o,state:l,target:s,preventScrollReset:u,relative:a,viewTransition:f});function p(v){r&&r(v),v.defaultPrevented||h(v)}return b.createElement("a",mi({},g,{href:m||w,onClick:x||i?r:p,ref:t,target:s}))}),ur=b.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:c,children:u}=n,f=yf(n,Pv),g=Bi(s,{relative:f.relative}),y=Xr(),m=b.useContext(ff),{navigator:x,basename:w}=b.useContext(Jn),h=m!=null&&Uv(g)&&c===!0,p=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,v=y.pathname,S=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(v=v.toLowerCase(),S=S?S.toLowerCase():null,p=p.toLowerCase()),S&&w&&(S=Yt(S,w)||S);const R=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let L=v===p||!o&&v.startsWith(p)&&v.charAt(R)==="/",E=S!=null&&(S===p||!o&&S.startsWith(p)&&S.charAt(p.length)==="/"),_={isActive:L,isPending:E,isTransitioning:h},F=L?r:void 0,D;typeof i=="function"?D=i(_):D=[i,L?"active":null,E?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let V=typeof l=="function"?l(_):l;return b.createElement(zv,mi({},f,{"aria-current":F,className:D,ref:t,style:V,to:s,viewTransition:c}),typeof u=="function"?u(_):u)});var Nl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nl||(Nl={}));var fu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fu||(fu={}));function Mv(e){let n=b.useContext(Ii);return n||oe(!1),n}function Hv(e,n){let{target:t,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:l}=n===void 0?{}:n,s=dv(),c=Xr(),u=Bi(e,{relative:o});return b.useCallback(f=>{if(Av(f,t)){f.preventDefault();let g=r!==void 0?r:fi(c)===fi(u);s(e,{replace:g,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[c,s,u,r,a,t,e,i,o,l])}function Uv(e,n){n===void 0&&(n={});let t=b.useContext(Dv);t==null&&oe(!1);let{basename:r}=Mv(Nl.useViewTransitionState),a=Bi(e,{relative:n.relative});if(!t.isTransitioning)return!1;let i=Yt(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Yt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Cl(a.pathname,o)!=null||Cl(a.pathname,i)!=null}var wf={exports:{}},$v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Kv=$v,Vv=Kv;function bf(){}function Sf(){}Sf.resetWarningCache=bf;var qv=function(){function e(r,a,i,o,l,s){if(s!==Vv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Sf,resetWarningCache:bf};return t.PropTypes=t,t};wf.exports=qv();var Wv=wf.exports;const K=Gu(Wv);function xt(e,n,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function l(u){try{c(r.next(u))}catch(f){o(f)}}function s(u){try{c(r.throw(u))}catch(f){o(f)}}function c(u){u.done?i(u.value):a(u.value).then(l,s)}c((r=r.apply(e,n||[])).next())})}const Gv=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Qt(e,n,t){const r=Yv(e),{webkitRelativePath:a}=e,i=typeof n=="string"?n:typeof a=="string"&&a.length>0?a:`./${e.name}`;return typeof r.path!="string"&&mu(r,"path",i),mu(r,"relativePath",i),r}function Yv(e){const{name:n}=e;if(n&&n.lastIndexOf(".")!==-1&&!e.type){const r=n.split(".").pop().toLowerCase(),a=Gv.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}function mu(e,n,t){Object.defineProperty(e,n,{value:t,writable:!1,configurable:!1,enumerable:!0})}const Qv=[".DS_Store","Thumbs.db"];function Jv(e){return xt(this,void 0,void 0,function*(){return gi(e)&&Xv(e.dataTransfer)?tx(e.dataTransfer,e.type):Zv(e)?ex(e):Array.isArray(e)&&e.every(n=>"getFile"in n&&typeof n.getFile=="function")?nx(e):[]})}function Xv(e){return gi(e)}function Zv(e){return gi(e)&&gi(e.target)}function gi(e){return typeof e=="object"&&e!==null}function ex(e){return Pl(e.target.files).map(n=>Qt(n))}function nx(e){return xt(this,void 0,void 0,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>Qt(t))})}function tx(e,n){return xt(this,void 0,void 0,function*(){if(e.items){const t=Pl(e.items).filter(a=>a.kind==="file");if(n!=="drop")return t;const r=yield Promise.all(t.map(rx));return gu(kf(r))}return gu(Pl(e.files).map(t=>Qt(t)))})}function gu(e){return e.filter(n=>Qv.indexOf(n.name)===-1)}function Pl(e){if(e===null)return[];const n=[];for(let t=0;t<e.length;t++){const r=e[t];n.push(r)}return n}function rx(e){if(typeof e.webkitGetAsEntry!="function")return hu(e);const n=e.webkitGetAsEntry();return n&&n.isDirectory?Ef(n):hu(e,n)}function kf(e){return e.reduce((n,t)=>[...n,...Array.isArray(t)?kf(t):[t]],[])}function hu(e,n){return xt(this,void 0,void 0,function*(){var t;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const i=yield e.getAsFileSystemHandle();if(i===null)throw new Error(`${e} is not a File`);if(i!==void 0){const o=yield i.getFile();return o.handle=i,Qt(o)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return Qt(r,(t=n==null?void 0:n.fullPath)!==null&&t!==void 0?t:void 0)})}function ax(e){return xt(this,void 0,void 0,function*(){return e.isDirectory?Ef(e):ix(e)})}function Ef(e){const n=e.createReader();return new Promise((t,r)=>{const a=[];function i(){n.readEntries(o=>xt(this,void 0,void 0,function*(){if(o.length){const l=Promise.all(o.map(ax));a.push(l),i()}else try{const l=yield Promise.all(a);t(l)}catch(l){r(l)}}),o=>{r(o)})}i()})}function ix(e){return xt(this,void 0,void 0,function*(){return new Promise((n,t)=>{e.file(r=>{const a=Qt(r,e.fullPath);n(a)},r=>{t(r)})})})}var To=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(",");if(t.length===0)return!0;var r=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return t.some(function(o){var l=o.trim().toLowerCase();return l.charAt(0)==="."?r.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):a===l})}return!0};function vu(e){return sx(e)||lx(e)||Rf(e)||ox()}function ox(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sx(e){if(Array.isArray(e))return jl(e)}function xu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function yu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xu(Object(t),!0).forEach(function(r){_f(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Vr(e,n){return dx(e)||ux(e,n)||Rf(e,n)||cx()}function cx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rf(e,n){if(e){if(typeof e=="string")return jl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jl(e,n)}}function jl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ux(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function dx(e){if(Array.isArray(e))return e}var px=typeof To=="function"?To:To.default,fx="file-invalid-type",mx="file-too-large",gx="file-too-small",hx="too-many-files",vx=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=n.split(","),r=t.length>1?"one of ".concat(t.join(", ")):t[0];return{code:fx,message:"File type must be ".concat(r)}},wu=function(n){return{code:mx,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},bu=function(n){return{code:gx,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},xx={code:hx,message:"Too many files"};function yx(e){return e.type===""&&typeof e.getAsFile=="function"}function Tf(e,n){var t=e.type==="application/x-moz-file"||px(e,n)||yx(e);return[t,t?null:vx(n)]}function Lf(e,n,t){if(et(e.size))if(et(n)&&et(t)){if(e.size>t)return[!1,wu(t)];if(e.size<n)return[!1,bu(n)]}else{if(et(n)&&e.size<n)return[!1,bu(n)];if(et(t)&&e.size>t)return[!1,wu(t)]}return[!0,null]}function et(e){return e!=null}function wx(e){var n=e.files,t=e.accept,r=e.minSize,a=e.maxSize,i=e.multiple,o=e.maxFiles,l=e.validator;return!i&&n.length>1||i&&o>=1&&n.length>o?!1:n.every(function(s){var c=Tf(s,t),u=Vr(c,1),f=u[0],g=Lf(s,r,a),y=Vr(g,1),m=y[0],x=l?l(s):null;return f&&m&&!x})}function hi(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function dr(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Su(e){e.preventDefault()}function bx(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Sx(e){return e.indexOf("Edge/")!==-1}function kx(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return bx(e)||Sx(e)}function fn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return n.some(function(l){return!hi(r)&&l&&l.apply(void 0,[r].concat(i)),hi(r)})}}function Ex(){return"showOpenFilePicker"in window}function _x(e){if(et(e)){var n=Object.entries(e).filter(function(t){var r=Vr(t,2),a=r[0],i=r[1],o=!0;return Cf(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),(!Array.isArray(i)||!i.every(Af))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(t,r){var a=Vr(r,2),i=a[0],o=a[1];return yu(yu({},t),{},_f({},i,o))},{});return[{description:"Files",accept:n}]}return e}function Rx(e){if(et(e))return Object.entries(e).reduce(function(n,t){var r=Vr(t,2),a=r[0],i=r[1];return[].concat(vu(n),[a],vu(i))},[]).filter(function(n){return Cf(n)||Af(n)}).join(",")}function Tx(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Lx(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Cf(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function Af(e){return/^.*\.[\w]+$/.test(e)}var Cx=["children"],Ax=["open"],Nx=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Px=["refKey","onChange","onClick"];function ku(e){return Ox(e)||Dx(e)||Nf(e)||jx()}function jx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ox(e){if(Array.isArray(e))return Dl(e)}function Lo(e,n){return Bx(e)||Fx(e,n)||Nf(e,n)||Ix()}function Ix(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nf(e,n){if(e){if(typeof e=="string")return Dl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Dl(e,n)}}function Dl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Fx(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Bx(e){if(Array.isArray(e))return e}function Eu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Eu(Object(t),!0).forEach(function(r){Ol(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Eu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ol(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function vi(e,n){if(e==null)return{};var t=zx(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function zx(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Is=b.forwardRef(function(e,n){var t=e.children,r=vi(e,Cx),a=Fs(r),i=a.open,o=vi(a,Ax);return b.useImperativeHandle(n,function(){return{open:i}},[i]),Vl.createElement(b.Fragment,null,t(Q(Q({},o),{},{open:i})))});Is.displayName="Dropzone";var Pf={disabled:!1,getFilesFromEvent:Jv,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Is.defaultProps=Pf;Is.propTypes={children:K.func,accept:K.objectOf(K.arrayOf(K.string)),multiple:K.bool,preventDropOnDocument:K.bool,noClick:K.bool,noKeyboard:K.bool,noDrag:K.bool,noDragEventsBubbling:K.bool,minSize:K.number,maxSize:K.number,maxFiles:K.number,disabled:K.bool,getFilesFromEvent:K.func,onFileDialogCancel:K.func,onFileDialogOpen:K.func,useFsAccessApi:K.bool,autoFocus:K.bool,onDragEnter:K.func,onDragLeave:K.func,onDragOver:K.func,onDrop:K.func,onDropAccepted:K.func,onDropRejected:K.func,onError:K.func,validator:K.func};var Il={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,isDragGlobal:!1,acceptedFiles:[],fileRejections:[]};function Fs(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Q(Q({},Pf),e),t=n.accept,r=n.disabled,a=n.getFilesFromEvent,i=n.maxSize,o=n.minSize,l=n.multiple,s=n.maxFiles,c=n.onDragEnter,u=n.onDragLeave,f=n.onDragOver,g=n.onDrop,y=n.onDropAccepted,m=n.onDropRejected,x=n.onFileDialogCancel,w=n.onFileDialogOpen,h=n.useFsAccessApi,p=n.autoFocus,v=n.preventDropOnDocument,S=n.noClick,R=n.noKeyboard,L=n.noDrag,E=n.noDragEventsBubbling,_=n.onError,F=n.validator,D=b.useMemo(function(){return Rx(t)},[t]),V=b.useMemo(function(){return _x(t)},[t]),ee=b.useMemo(function(){return typeof w=="function"?w:_u},[w]),W=b.useMemo(function(){return typeof x=="function"?x:_u},[x]),M=b.useRef(null),ue=b.useRef(null),G=b.useReducer(Mx,Il),Me=Lo(G,2),A=Me[0],C=Me[1],j=A.isFocused,O=A.isFileDialogActive,H=b.useRef(typeof window<"u"&&window.isSecureContext&&h&&Ex()),he=function(){!H.current&&O&&setTimeout(function(){if(ue.current){var I=ue.current.files;I.length||(C({type:"closeDialog"}),W())}},300)};b.useEffect(function(){return window.addEventListener("focus",he,!1),function(){window.removeEventListener("focus",he,!1)}},[ue,O,W,H]);var X=b.useRef([]),Pe=b.useRef([]),un=function(I){M.current&&M.current.contains(I.target)||(I.preventDefault(),X.current=[])};b.useEffect(function(){return v&&(document.addEventListener("dragover",Su,!1),document.addEventListener("drop",un,!1)),function(){v&&(document.removeEventListener("dragover",Su),document.removeEventListener("drop",un))}},[M,v]),b.useEffect(function(){var N=function(dn){Pe.current=[].concat(ku(Pe.current),[dn.target]),dr(dn)&&C({isDragGlobal:!0,type:"setDragGlobal"})},I=function(dn){Pe.current=Pe.current.filter(function(xn){return xn!==dn.target&&xn!==null}),!(Pe.current.length>0)&&C({isDragGlobal:!1,type:"setDragGlobal"})},ne=function(){Pe.current=[],C({isDragGlobal:!1,type:"setDragGlobal"})},le=function(){Pe.current=[],C({isDragGlobal:!1,type:"setDragGlobal"})};return document.addEventListener("dragenter",N,!1),document.addEventListener("dragleave",I,!1),document.addEventListener("dragend",ne,!1),document.addEventListener("drop",le,!1),function(){document.removeEventListener("dragenter",N),document.removeEventListener("dragleave",I),document.removeEventListener("dragend",ne),document.removeEventListener("drop",le)}},[M]),b.useEffect(function(){return!r&&p&&M.current&&M.current.focus(),function(){}},[M,p,r]);var We=b.useCallback(function(N){_?_(N):console.error(N)},[_]),Ks=b.useCallback(function(N){N.preventDefault(),N.persist(),la(N),X.current=[].concat(ku(X.current),[N.target]),dr(N)&&Promise.resolve(a(N)).then(function(I){if(!(hi(N)&&!E)){var ne=I.length,le=ne>0&&wx({files:I,accept:D,minSize:o,maxSize:i,multiple:l,maxFiles:s,validator:F}),ve=ne>0&&!le;C({isDragAccept:le,isDragReject:ve,isDragActive:!0,type:"setDraggedFiles"}),c&&c(N)}}).catch(function(I){return We(I)})},[a,c,We,E,D,o,i,l,s,F]),Vs=b.useCallback(function(N){N.preventDefault(),N.persist(),la(N);var I=dr(N);if(I&&N.dataTransfer)try{N.dataTransfer.dropEffect="copy"}catch{}return I&&f&&f(N),!1},[f,E]),qs=b.useCallback(function(N){N.preventDefault(),N.persist(),la(N);var I=X.current.filter(function(le){return M.current&&M.current.contains(le)}),ne=I.indexOf(N.target);ne!==-1&&I.splice(ne,1),X.current=I,!(I.length>0)&&(C({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),dr(N)&&u&&u(N))},[M,u,E]),aa=b.useCallback(function(N,I){var ne=[],le=[];N.forEach(function(ve){var dn=Tf(ve,D),xn=Lo(dn,2),qi=xn[0],Wi=xn[1],Gi=Lf(ve,o,i),sa=Lo(Gi,2),Yi=sa[0],Qi=sa[1],Ji=F?F(ve):null;if(qi&&Yi&&!Ji)ne.push(ve);else{var Xi=[Wi,Qi];Ji&&(Xi=Xi.concat(Ji)),le.push({file:ve,errors:Xi.filter(function(cm){return cm})})}}),(!l&&ne.length>1||l&&s>=1&&ne.length>s)&&(ne.forEach(function(ve){le.push({file:ve,errors:[xx]})}),ne.splice(0)),C({acceptedFiles:ne,fileRejections:le,isDragReject:le.length>0,type:"setFiles"}),g&&g(ne,le,I),le.length>0&&m&&m(le,I),ne.length>0&&y&&y(ne,I)},[C,l,D,o,i,s,g,y,m,F]),ia=b.useCallback(function(N){N.preventDefault(),N.persist(),la(N),X.current=[],dr(N)&&Promise.resolve(a(N)).then(function(I){hi(N)&&!E||aa(I,N)}).catch(function(I){return We(I)}),C({type:"reset"})},[a,aa,We,E]),yt=b.useCallback(function(){if(H.current){C({type:"openDialog"}),ee();var N={multiple:l,types:V};window.showOpenFilePicker(N).then(function(I){return a(I)}).then(function(I){aa(I,null),C({type:"closeDialog"})}).catch(function(I){Tx(I)?(W(I),C({type:"closeDialog"})):Lx(I)?(H.current=!1,ue.current?(ue.current.value=null,ue.current.click()):We(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):We(I)});return}ue.current&&(C({type:"openDialog"}),ee(),ue.current.value=null,ue.current.click())},[C,ee,W,h,aa,We,V,l]),Ws=b.useCallback(function(N){!M.current||!M.current.isEqualNode(N.target)||(N.key===" "||N.key==="Enter"||N.keyCode===32||N.keyCode===13)&&(N.preventDefault(),yt())},[M,yt]),Gs=b.useCallback(function(){C({type:"focus"})},[]),Ys=b.useCallback(function(){C({type:"blur"})},[]),Qs=b.useCallback(function(){S||(kx()?setTimeout(yt,0):yt())},[S,yt]),wt=function(I){return r?null:I},Vi=function(I){return R?null:wt(I)},oa=function(I){return L?null:wt(I)},la=function(I){E&&I.stopPropagation()},om=b.useMemo(function(){return function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=N.refKey,ne=I===void 0?"ref":I,le=N.role,ve=N.onKeyDown,dn=N.onFocus,xn=N.onBlur,qi=N.onClick,Wi=N.onDragEnter,Gi=N.onDragOver,sa=N.onDragLeave,Yi=N.onDrop,Qi=vi(N,Nx);return Q(Q(Ol({onKeyDown:Vi(fn(ve,Ws)),onFocus:Vi(fn(dn,Gs)),onBlur:Vi(fn(xn,Ys)),onClick:wt(fn(qi,Qs)),onDragEnter:oa(fn(Wi,Ks)),onDragOver:oa(fn(Gi,Vs)),onDragLeave:oa(fn(sa,qs)),onDrop:oa(fn(Yi,ia)),role:typeof le=="string"&&le!==""?le:"presentation"},ne,M),!r&&!R?{tabIndex:0}:{}),Qi)}},[M,Ws,Gs,Ys,Qs,Ks,Vs,qs,ia,R,L,r]),lm=b.useCallback(function(N){N.stopPropagation()},[]),sm=b.useMemo(function(){return function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=N.refKey,ne=I===void 0?"ref":I,le=N.onChange,ve=N.onClick,dn=vi(N,Px),xn=Ol({accept:D,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:wt(fn(le,ia)),onClick:wt(fn(ve,lm)),tabIndex:-1},ne,ue);return Q(Q({},xn),dn)}},[ue,t,l,ia,r]);return Q(Q({},A),{},{isFocused:j&&!r,getRootProps:om,getInputProps:sm,rootRef:M,inputRef:ue,open:wt(yt)})}function Mx(e,n){switch(n.type){case"focus":return Q(Q({},e),{},{isFocused:!0});case"blur":return Q(Q({},e),{},{isFocused:!1});case"openDialog":return Q(Q({},Il),{},{isFileDialogActive:!0});case"closeDialog":return Q(Q({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Q(Q({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return Q(Q({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections,isDragReject:n.isDragReject});case"setDragGlobal":return Q(Q({},e),{},{isDragGlobal:n.isDragGlobal});case"reset":return Q({},Il);default:return e}}function _u(){}function Hx({onFile:e,loading:n}){const t=b.useCallback(o=>{o.length>0&&e(o[0])},[e]),{getRootProps:r,getInputProps:a,isDragActive:i}=Fs({onDrop:t,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:n});return d.jsxs("div",{...r(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${i?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
        ${n?"opacity-50 cursor-not-allowed":""}`,children:[d.jsx("input",{...a()}),d.jsx("div",{className:"text-4xl mb-3",children:"📂"}),n?d.jsx("p",{className:"text-gray-400",children:"Processing file…"}):i?d.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your check file here"}),d.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]})}function jf(e,n){return function(){return e.apply(n,arguments)}}const{toString:Ux}=Object.prototype,{getPrototypeOf:Bs}=Object,{iterator:zi,toStringTag:Df}=Symbol,Mi=(e=>n=>{const t=Ux.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=e=>(e=e.toLowerCase(),n=>Mi(n)===e),Hi=e=>n=>typeof n===e,{isArray:nr}=Array,Jt=Hi("undefined");function Zr(e){return e!==null&&!Jt(e)&&e.constructor!==null&&!Jt(e.constructor)&&Be(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Of=cn("ArrayBuffer");function $x(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Of(e.buffer),n}const Kx=Hi("string"),Be=Hi("function"),If=Hi("number"),ea=e=>e!==null&&typeof e=="object",Vx=e=>e===!0||e===!1,Ma=e=>{if(Mi(e)!=="object")return!1;const n=Bs(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Df in e)&&!(zi in e)},qx=e=>{if(!ea(e)||Zr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Wx=cn("Date"),Gx=cn("File"),Yx=e=>!!(e&&typeof e.uri<"u"),Qx=e=>e&&typeof e.getParts<"u",Jx=cn("Blob"),Xx=cn("FileList"),Zx=e=>ea(e)&&Be(e.pipe);function ey(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ru=ey(),Tu=typeof Ru.FormData<"u"?Ru.FormData:void 0,ny=e=>{let n;return e&&(Tu&&e instanceof Tu||Be(e.append)&&((n=Mi(e))==="formdata"||n==="object"&&Be(e.toString)&&e.toString()==="[object FormData]"))},ty=cn("URLSearchParams"),[ry,ay,iy,oy]=["ReadableStream","Request","Response","Headers"].map(cn),ly=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function na(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),nr(e))for(r=0,a=e.length;r<a;r++)n.call(null,e[r],r,e);else{if(Zr(e))return;const i=t?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],n.call(null,e[l],l,e)}}function Ff(e,n){if(Zr(e))return null;n=n.toLowerCase();const t=Object.keys(e);let r=t.length,a;for(;r-- >0;)if(a=t[r],n===a.toLowerCase())return a;return null}const at=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bf=e=>!Jt(e)&&e!==at;function Fl(){const{caseless:e,skipUndefined:n}=Bf(this)&&this||{},t={},r=(a,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const o=e&&Ff(t,i)||i;Ma(t[o])&&Ma(a)?t[o]=Fl(t[o],a):Ma(a)?t[o]=Fl({},a):nr(a)?t[o]=a.slice():(!n||!Jt(a))&&(t[o]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&na(arguments[a],r);return t}const sy=(e,n,t,{allOwnKeys:r}={})=>(na(n,(a,i)=>{t&&Be(a)?Object.defineProperty(e,i,{value:jf(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),cy=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),uy=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},dy=(e,n,t,r)=>{let a,i,o;const l={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,n))&&!l[o]&&(n[o]=e[o],l[o]=!0);e=t!==!1&&Bs(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},py=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},fy=e=>{if(!e)return null;if(nr(e))return e;let n=e.length;if(!If(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},my=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Bs(Uint8Array)),gy=(e,n)=>{const r=(e&&e[zi]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;n.call(e,i[0],i[1])}},hy=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},vy=cn("HTMLFormElement"),xy=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),Lu=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),yy=cn("RegExp"),zf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};na(t,(a,i)=>{let o;(o=n(a,i,e))!==!1&&(r[i]=o||a)}),Object.defineProperties(e,r)},wy=e=>{zf(e,(n,t)=>{if(Be(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(Be(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},by=(e,n)=>{const t={},r=a=>{a.forEach(i=>{t[i]=!0})};return nr(e)?r(e):r(String(e).split(n)),t},Sy=()=>{},ky=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Ey(e){return!!(e&&Be(e.append)&&e[Df]==="FormData"&&e[zi])}const _y=e=>{const n=new Array(10),t=(r,a)=>{if(ea(r)){if(n.indexOf(r)>=0)return;if(Zr(r))return r;if(!("toJSON"in r)){n[a]=r;const i=nr(r)?[]:{};return na(r,(o,l)=>{const s=t(o,a+1);!Jt(s)&&(i[l]=s)}),n[a]=void 0,i}}return r};return t(e,0)},Ry=cn("AsyncFunction"),Ty=e=>e&&(ea(e)||Be(e))&&Be(e.then)&&Be(e.catch),Mf=((e,n)=>e?setImmediate:n?((t,r)=>(at.addEventListener("message",({source:a,data:i})=>{a===at&&i===t&&r.length&&r.shift()()},!1),a=>{r.push(a),at.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Be(at.postMessage)),Ly=typeof queueMicrotask<"u"?queueMicrotask.bind(at):typeof process<"u"&&process.nextTick||Mf,Cy=e=>e!=null&&Be(e[zi]),k={isArray:nr,isArrayBuffer:Of,isBuffer:Zr,isFormData:ny,isArrayBufferView:$x,isString:Kx,isNumber:If,isBoolean:Vx,isObject:ea,isPlainObject:Ma,isEmptyObject:qx,isReadableStream:ry,isRequest:ay,isResponse:iy,isHeaders:oy,isUndefined:Jt,isDate:Wx,isFile:Gx,isReactNativeBlob:Yx,isReactNative:Qx,isBlob:Jx,isRegExp:yy,isFunction:Be,isStream:Zx,isURLSearchParams:ty,isTypedArray:my,isFileList:Xx,forEach:na,merge:Fl,extend:sy,trim:ly,stripBOM:cy,inherits:uy,toFlatObject:dy,kindOf:Mi,kindOfTest:cn,endsWith:py,toArray:fy,forEachEntry:gy,matchAll:hy,isHTMLForm:vy,hasOwnProperty:Lu,hasOwnProp:Lu,reduceDescriptors:zf,freezeMethods:wy,toObjectSet:by,toCamelCase:xy,noop:Sy,toFiniteNumber:ky,findKey:Ff,global:at,isContextDefined:Bf,isSpecCompliantForm:Ey,toJSONObject:_y,isAsyncFn:Ry,isThenable:Ty,setImmediate:Mf,asap:Ly,isIterable:Cy};let B=class Hf extends Error{static from(n,t,r,a,i,o){const l=new Hf(n.message,t||n.code,r,a,i);return l.cause=n,l.name=n.name,n.status!=null&&l.status==null&&(l.status=n.status),o&&Object.assign(l,o),l}constructor(n,t,r,a,i){super(n),Object.defineProperty(this,"message",{value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}};B.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";B.ERR_BAD_OPTION="ERR_BAD_OPTION";B.ECONNABORTED="ECONNABORTED";B.ETIMEDOUT="ETIMEDOUT";B.ERR_NETWORK="ERR_NETWORK";B.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";B.ERR_DEPRECATED="ERR_DEPRECATED";B.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";B.ERR_BAD_REQUEST="ERR_BAD_REQUEST";B.ERR_CANCELED="ERR_CANCELED";B.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";B.ERR_INVALID_URL="ERR_INVALID_URL";const Ay=null;function Bl(e){return k.isPlainObject(e)||k.isArray(e)}function Uf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Co(e,n,t){return e?e.concat(n).map(function(a,i){return a=Uf(a),!t&&i?"["+a+"]":a}).join(t?".":""):n}function Ny(e){return k.isArray(e)&&!e.some(Bl)}const Py=k.toFlatObject(k,{},null,function(n){return/^is[A-Z]/.test(n)});function Ui(e,n,t){if(!k.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=k.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,w){return!k.isUndefined(w[x])});const r=t.metaTokens,a=t.visitor||u,i=t.dots,o=t.indexes,s=(t.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(n);if(!k.isFunction(a))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(k.isDate(m))return m.toISOString();if(k.isBoolean(m))return m.toString();if(!s&&k.isBlob(m))throw new B("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(m)||k.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,x,w){let h=m;if(k.isReactNative(n)&&k.isReactNativeBlob(m))return n.append(Co(w,x,i),c(m)),!1;if(m&&!w&&typeof m=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),m=JSON.stringify(m);else if(k.isArray(m)&&Ny(m)||(k.isFileList(m)||k.endsWith(x,"[]"))&&(h=k.toArray(m)))return x=Uf(x),h.forEach(function(v,S){!(k.isUndefined(v)||v===null)&&n.append(o===!0?Co([x],S,i):o===null?x:x+"[]",c(v))}),!1}return Bl(m)?!0:(n.append(Co(w,x,i),c(m)),!1)}const f=[],g=Object.assign(Py,{defaultVisitor:u,convertValue:c,isVisitable:Bl});function y(m,x){if(!k.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(m),k.forEach(m,function(h,p){(!(k.isUndefined(h)||h===null)&&a.call(n,h,k.isString(p)?p.trim():p,x,g))===!0&&y(h,x?x.concat(p):[p])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return y(e),n}function Cu(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function zs(e,n){this._pairs=[],e&&Ui(e,this,n)}const $f=zs.prototype;$f.append=function(n,t){this._pairs.push([n,t])};$f.toString=function(n){const t=n?function(r){return n.call(this,r,Cu)}:Cu;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function jy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Kf(e,n,t){if(!n)return e;const r=t&&t.encode||jy,a=k.isFunction(t)?{serialize:t}:t,i=a&&a.serialize;let o;if(i?o=i(n,a):o=k.isURLSearchParams(n)?n.toString():new zs(n,a).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Au{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){k.forEach(this.handlers,function(r){r!==null&&n(r)})}}const Ms={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Dy=typeof URLSearchParams<"u"?URLSearchParams:zs,Oy=typeof FormData<"u"?FormData:null,Iy=typeof Blob<"u"?Blob:null,Fy={isBrowser:!0,classes:{URLSearchParams:Dy,FormData:Oy,Blob:Iy},protocols:["http","https","file","blob","url","data"]},Hs=typeof window<"u"&&typeof document<"u",zl=typeof navigator=="object"&&navigator||void 0,By=Hs&&(!zl||["ReactNative","NativeScript","NS"].indexOf(zl.product)<0),zy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",My=Hs&&window.location.href||"http://localhost",Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hs,hasStandardBrowserEnv:By,hasStandardBrowserWebWorkerEnv:zy,navigator:zl,origin:My},Symbol.toStringTag,{value:"Module"})),Ee={...Hy,...Fy};function Uy(e,n){return Ui(e,new Ee.classes.URLSearchParams,{visitor:function(t,r,a,i){return Ee.isNode&&k.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...n})}function $y(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function Ky(e){const n={},t=Object.keys(e);let r;const a=t.length;let i;for(r=0;r<a;r++)i=t[r],n[i]=e[i];return n}function Vf(e){function n(t,r,a,i){let o=t[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),s=i>=t.length;return o=!o&&k.isArray(a)?a.length:o,s?(k.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!l):((!a[o]||!k.isObject(a[o]))&&(a[o]=[]),n(t,r,a[o],i)&&k.isArray(a[o])&&(a[o]=Ky(a[o])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const t={};return k.forEachEntry(e,(r,a)=>{n($y(r),a,t,0)}),t}return null}function Vy(e,n,t){if(k.isString(e))try{return(n||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}const ta={transitional:Ms,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,i=k.isObject(n);if(i&&k.isHTMLForm(n)&&(n=new FormData(n)),k.isFormData(n))return a?JSON.stringify(Vf(n)):n;if(k.isArrayBuffer(n)||k.isBuffer(n)||k.isStream(n)||k.isFile(n)||k.isBlob(n)||k.isReadableStream(n))return n;if(k.isArrayBufferView(n))return n.buffer;if(k.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Uy(n,this.formSerializer).toString();if((l=k.isFileList(n))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ui(l?{"files[]":n}:n,s&&new s,this.formSerializer)}}return i||a?(t.setContentType("application/json",!1),Vy(n)):n}],transformResponse:[function(n){const t=this.transitional||ta.transitional,r=t&&t.forcedJSONParsing,a=this.responseType==="json";if(k.isResponse(n)||k.isReadableStream(n))return n;if(n&&k.isString(n)&&(r&&!this.responseType||a)){const o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(n,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ee.classes.FormData,Blob:Ee.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{ta.headers[e]={}});const qy=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wy=e=>{const n={};let t,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),t=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!t||n[t]&&qy[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},Nu=Symbol("internals");function pr(e){return e&&String(e).trim().toLowerCase()}function Ha(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ha):String(e).replace(/[\r\n]+$/,"")}function Gy(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const Yy=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ao(e,n,t,r,a){if(k.isFunction(r))return r.call(this,n,t);if(a&&(n=t),!!k.isString(n)){if(k.isString(r))return n.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(n)}}function Qy(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function Jy(e,n){const t=k.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(a,i,o){return this[r].call(this,n,a,i,o)},configurable:!0})})}let ze=class{constructor(n){n&&this.set(n)}set(n,t,r){const a=this;function i(l,s,c){const u=pr(s);if(!u)throw new Error("header name must be a non-empty string");const f=k.findKey(a,u);(!f||a[f]===void 0||c===!0||c===void 0&&a[f]!==!1)&&(a[f||s]=Ha(l))}const o=(l,s)=>k.forEach(l,(c,u)=>i(c,u,s));if(k.isPlainObject(n)||n instanceof this.constructor)o(n,t);else if(k.isString(n)&&(n=n.trim())&&!Yy(n))o(Wy(n),t);else if(k.isObject(n)&&k.isIterable(n)){let l={},s,c;for(const u of n){if(!k.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[c=u[0]]=(s=l[c])?k.isArray(s)?[...s,u[1]]:[s,u[1]]:u[1]}o(l,t)}else n!=null&&i(t,n,r);return this}get(n,t){if(n=pr(n),n){const r=k.findKey(this,n);if(r){const a=this[r];if(!t)return a;if(t===!0)return Gy(a);if(k.isFunction(t))return t.call(this,a,r);if(k.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=pr(n),n){const r=k.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||Ao(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let a=!1;function i(o){if(o=pr(o),o){const l=k.findKey(r,o);l&&(!t||Ao(r,r[l],l,t))&&(delete r[l],a=!0)}}return k.isArray(n)?n.forEach(i):i(n),a}clear(n){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const i=t[r];(!n||Ao(this,this[i],i,n,!0))&&(delete this[i],a=!0)}return a}normalize(n){const t=this,r={};return k.forEach(this,(a,i)=>{const o=k.findKey(r,i);if(o){t[o]=Ha(a),delete t[i];return}const l=n?Qy(i):String(i).trim();l!==i&&delete t[i],t[l]=Ha(a),r[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return k.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=n&&k.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(a=>r.set(a)),r}static accessor(n){const r=(this[Nu]=this[Nu]={accessors:{}}).accessors,a=this.prototype;function i(o){const l=pr(o);r[l]||(Jy(a,o),r[l]=!0)}return k.isArray(n)?n.forEach(i):i(n),this}};ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(ze.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});k.freezeMethods(ze);function No(e,n){const t=this||ta,r=n||t,a=ze.from(r.headers);let i=r.data;return k.forEach(e,function(l){i=l.call(t,i,a.normalize(),n?n.status:void 0)}),a.normalize(),i}function qf(e){return!!(e&&e.__CANCEL__)}let ra=class extends B{constructor(n,t,r){super(n??"canceled",B.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function Wf(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new B("Request failed with status code "+t.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function Xy(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function Zy(e,n){e=e||10;const t=new Array(e),r=new Array(e);let a=0,i=0,o;return n=n!==void 0?n:1e3,function(s){const c=Date.now(),u=r[i];o||(o=c),t[a]=s,r[a]=c;let f=i,g=0;for(;f!==a;)g+=t[f++],f=f%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),c-o<n)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function e0(e,n){let t=0,r=1e3/n,a,i;const o=(c,u=Date.now())=>{t=u,a=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const u=Date.now(),f=u-t;f>=r?o(c,u):(a=c,i||(i=setTimeout(()=>{i=null,o(a)},r-f)))},()=>a&&o(a)]}const xi=(e,n,t=3)=>{let r=0;const a=Zy(50,250);return e0(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-r,c=a(s),u=o<=l;r=o;const f={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:c||void 0,estimated:c&&l&&u?(l-o)/c:void 0,event:i,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(f)},t)},Pu=(e,n)=>{const t=e!=null;return[r=>n[0]({lengthComputable:t,total:e,loaded:r}),n[1]]},ju=e=>(...n)=>k.asap(()=>e(...n)),n0=Ee.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,Ee.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(Ee.origin),Ee.navigator&&/(msie|trident)/i.test(Ee.navigator.userAgent)):()=>!0,t0=Ee.hasStandardBrowserEnv?{write(e,n,t,r,a,i,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(n)}`];k.isNumber(t)&&l.push(`expires=${new Date(t).toUTCString()}`),k.isString(r)&&l.push(`path=${r}`),k.isString(a)&&l.push(`domain=${a}`),i===!0&&l.push("secure"),k.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function r0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function a0(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Gf(e,n,t){let r=!r0(n);return e&&(r||t==!1)?a0(e,n):n}const Du=e=>e instanceof ze?{...e}:e;function ft(e,n){n=n||{};const t={};function r(c,u,f,g){return k.isPlainObject(c)&&k.isPlainObject(u)?k.merge.call({caseless:g},c,u):k.isPlainObject(u)?k.merge({},u):k.isArray(u)?u.slice():u}function a(c,u,f,g){if(k.isUndefined(u)){if(!k.isUndefined(c))return r(void 0,c,f,g)}else return r(c,u,f,g)}function i(c,u){if(!k.isUndefined(u))return r(void 0,u)}function o(c,u){if(k.isUndefined(u)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,f){if(f in n)return r(c,u);if(f in e)return r(void 0,c)}const s={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u,f)=>a(Du(c),Du(u),f,!0)};return k.forEach(Object.keys({...e,...n}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=k.hasOwnProp(s,u)?s[u]:a,g=f(e[u],n[u],u);k.isUndefined(g)&&f!==l||(t[u]=g)}),t}const Yf=e=>{const n=ft({},e);let{data:t,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:l}=n;if(n.headers=o=ze.from(o),n.url=Kf(Gf(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),k.isFormData(t)){if(Ee.hasStandardBrowserEnv||Ee.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(k.isFunction(t.getHeaders)){const s=t.getHeaders(),c=["content-type","content-length"];Object.entries(s).forEach(([u,f])=>{c.includes(u.toLowerCase())&&o.set(u,f)})}}if(Ee.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(n)),r||r!==!1&&n0(n.url))){const s=a&&i&&t0.read(i);s&&o.set(a,s)}return n},i0=typeof XMLHttpRequest<"u",o0=i0&&function(e){return new Promise(function(t,r){const a=Yf(e);let i=a.data;const o=ze.from(a.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:c}=a,u,f,g,y,m;function x(){y&&y(),m&&m(),a.cancelToken&&a.cancelToken.unsubscribe(u),a.signal&&a.signal.removeEventListener("abort",u)}let w=new XMLHttpRequest;w.open(a.method.toUpperCase(),a.url,!0),w.timeout=a.timeout;function h(){if(!w)return;const v=ze.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),R={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:v,config:e,request:w};Wf(function(E){t(E),x()},function(E){r(E),x()},R),w=null}"onloadend"in w?w.onloadend=h:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(h)},w.onabort=function(){w&&(r(new B("Request aborted",B.ECONNABORTED,e,w)),w=null)},w.onerror=function(S){const R=S&&S.message?S.message:"Network Error",L=new B(R,B.ERR_NETWORK,e,w);L.event=S||null,r(L),w=null},w.ontimeout=function(){let S=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const R=a.transitional||Ms;a.timeoutErrorMessage&&(S=a.timeoutErrorMessage),r(new B(S,R.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,w)),w=null},i===void 0&&o.setContentType(null),"setRequestHeader"in w&&k.forEach(o.toJSON(),function(S,R){w.setRequestHeader(R,S)}),k.isUndefined(a.withCredentials)||(w.withCredentials=!!a.withCredentials),l&&l!=="json"&&(w.responseType=a.responseType),c&&([g,m]=xi(c,!0),w.addEventListener("progress",g)),s&&w.upload&&([f,y]=xi(s),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",y)),(a.cancelToken||a.signal)&&(u=v=>{w&&(r(!v||v.type?new ra(null,e,w):v),w.abort(),w=null)},a.cancelToken&&a.cancelToken.subscribe(u),a.signal&&(a.signal.aborted?u():a.signal.addEventListener("abort",u)));const p=Xy(a.url);if(p&&Ee.protocols.indexOf(p)===-1){r(new B("Unsupported protocol "+p+":",B.ERR_BAD_REQUEST,e));return}w.send(i||null)})},l0=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let r=new AbortController,a;const i=function(c){if(!a){a=!0,l();const u=c instanceof Error?c:this.reason;r.abort(u instanceof B?u:new ra(u instanceof Error?u.message:u))}};let o=n&&setTimeout(()=>{o=null,i(new B(`timeout of ${n}ms exceeded`,B.ETIMEDOUT))},n);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>k.asap(l),s}},s0=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let r=0,a;for(;r<t;)a=r+n,yield e.slice(r,a),r=a},c0=async function*(e,n){for await(const t of u0(e))yield*s0(t,n)},u0=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:r}=await n.read();if(t)break;yield r}}finally{await n.cancel()}},Ou=(e,n,t,r)=>{const a=c0(e,n);let i=0,o,l=s=>{o||(o=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:c,value:u}=await a.next();if(c){l(),s.close();return}let f=u.byteLength;if(t){let g=i+=f;t(g)}s.enqueue(new Uint8Array(u))}catch(c){throw l(c),c}},cancel(s){return l(s),a.return()}},{highWaterMark:2})},Iu=64*1024,{isFunction:Ra}=k,d0=(({Request:e,Response:n})=>({Request:e,Response:n}))(k.global),{ReadableStream:Fu,TextEncoder:Bu}=k.global,zu=(e,...n)=>{try{return!!e(...n)}catch{return!1}},p0=e=>{e=k.merge.call({skipUndefined:!0},d0,e);const{fetch:n,Request:t,Response:r}=e,a=n?Ra(n):typeof fetch=="function",i=Ra(t),o=Ra(r);if(!a)return!1;const l=a&&Ra(Fu),s=a&&(typeof Bu=="function"?(m=>x=>m.encode(x))(new Bu):async m=>new Uint8Array(await new t(m).arrayBuffer())),c=i&&l&&zu(()=>{let m=!1;const x=new Fu,w=new t(Ee.origin,{body:x,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return x.cancel(),m&&!w}),u=o&&l&&zu(()=>k.isReadableStream(new r("").body)),f={stream:u&&(m=>m.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!f[m]&&(f[m]=(x,w)=>{let h=x&&x[m];if(h)return h.call(x);throw new B(`Response type '${m}' is not supported`,B.ERR_NOT_SUPPORT,w)})});const g=async m=>{if(m==null)return 0;if(k.isBlob(m))return m.size;if(k.isSpecCompliantForm(m))return(await new t(Ee.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(k.isArrayBufferView(m)||k.isArrayBuffer(m))return m.byteLength;if(k.isURLSearchParams(m)&&(m=m+""),k.isString(m))return(await s(m)).byteLength},y=async(m,x)=>{const w=k.toFiniteNumber(m.getContentLength());return w??g(x)};return async m=>{let{url:x,method:w,data:h,signal:p,cancelToken:v,timeout:S,onDownloadProgress:R,onUploadProgress:L,responseType:E,headers:_,withCredentials:F="same-origin",fetchOptions:D}=Yf(m),V=n||fetch;E=E?(E+"").toLowerCase():"text";let ee=l0([p,v&&v.toAbortSignal()],S),W=null;const M=ee&&ee.unsubscribe&&(()=>{ee.unsubscribe()});let ue;try{if(L&&c&&w!=="get"&&w!=="head"&&(ue=await y(_,h))!==0){let O=new t(x,{method:"POST",body:h,duplex:"half"}),H;if(k.isFormData(h)&&(H=O.headers.get("content-type"))&&_.setContentType(H),O.body){const[he,X]=Pu(ue,xi(ju(L)));h=Ou(O.body,Iu,he,X)}}k.isString(F)||(F=F?"include":"omit");const G=i&&"credentials"in t.prototype,Me={...D,signal:ee,method:w.toUpperCase(),headers:_.normalize().toJSON(),body:h,duplex:"half",credentials:G?F:void 0};W=i&&new t(x,Me);let A=await(i?V(W,D):V(x,Me));const C=u&&(E==="stream"||E==="response");if(u&&(R||C&&M)){const O={};["status","statusText","headers"].forEach(Pe=>{O[Pe]=A[Pe]});const H=k.toFiniteNumber(A.headers.get("content-length")),[he,X]=R&&Pu(H,xi(ju(R),!0))||[];A=new r(Ou(A.body,Iu,he,()=>{X&&X(),M&&M()}),O)}E=E||"text";let j=await f[k.findKey(f,E)||"text"](A,m);return!C&&M&&M(),await new Promise((O,H)=>{Wf(O,H,{data:j,headers:ze.from(A.headers),status:A.status,statusText:A.statusText,config:m,request:W})})}catch(G){throw M&&M(),G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,m,W,G&&G.response),{cause:G.cause||G}):B.from(G,G&&G.code,m,W,G&&G.response)}}},f0=new Map,Qf=e=>{let n=e&&e.env||{};const{fetch:t,Request:r,Response:a}=n,i=[r,a,t];let o=i.length,l=o,s,c,u=f0;for(;l--;)s=i[l],c=u.get(s),c===void 0&&u.set(s,c=l?new Map:p0(n)),u=c;return c};Qf();const Us={http:Ay,xhr:o0,fetch:{get:Qf}};k.forEach(Us,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Mu=e=>`- ${e}`,m0=e=>k.isFunction(e)||e===null||e===!1;function g0(e,n){e=k.isArray(e)?e:[e];const{length:t}=e;let r,a;const i={};for(let o=0;o<t;o++){r=e[o];let l;if(a=r,!m0(r)&&(a=Us[(l=String(r)).toLowerCase()],a===void 0))throw new B(`Unknown adapter '${l}'`);if(a&&(k.isFunction(a)||(a=a.get(n))))break;i[l||"#"+o]=a}if(!a){const o=Object.entries(i).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(Mu).join(`
`):" "+Mu(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a}const Jf={getAdapter:g0,adapters:Us};function Po(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ra(null,e)}function Hu(e){return Po(e),e.headers=ze.from(e.headers),e.data=No.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Jf.getAdapter(e.adapter||ta.adapter,e)(e).then(function(r){return Po(e),r.data=No.call(e,e.transformResponse,r),r.headers=ze.from(r.headers),r},function(r){return qf(r)||(Po(e),r&&r.response&&(r.response.data=No.call(e,e.transformResponse,r.response),r.response.headers=ze.from(r.response.headers))),Promise.reject(r)})}const Xf="1.14.0",$i={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{$i[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const Uu={};$i.transitional=function(n,t,r){function a(i,o){return"[Axios v"+Xf+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(n===!1)throw new B(a(o," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Uu[o]&&(Uu[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(i,o,l):!0}};$i.spelling=function(n){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${n}`),!0)};function h0(e,n,t){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=n[i];if(o){const l=e[i],s=l===void 0||o(l,i,e);if(s!==!0)throw new B("option "+i+" must be "+s,B.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new B("Unknown option "+i,B.ERR_BAD_OPTION)}}const Ua={assertOptions:h0,validators:$i},Ge=Ua.validators;let lt=class{constructor(n){this.defaults=n||{},this.interceptors={request:new Au,response:new Au}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=ft(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:i}=t;r!==void 0&&Ua.assertOptions(r,{silentJSONParsing:Ge.transitional(Ge.boolean),forcedJSONParsing:Ge.transitional(Ge.boolean),clarifyTimeoutError:Ge.transitional(Ge.boolean),legacyInterceptorReqResOrdering:Ge.transitional(Ge.boolean)},!1),a!=null&&(k.isFunction(a)?t.paramsSerializer={serialize:a}:Ua.assertOptions(a,{encode:Ge.function,serialize:Ge.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ua.assertOptions(t,{baseUrl:Ge.spelling("baseURL"),withXsrfToken:Ge.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&k.merge(i.common,i[t.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),t.headers=ze.concat(o,i);const l=[];let s=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(t)===!1)return;s=s&&x.synchronous;const w=t.transitional||Ms;w&&w.legacyInterceptorReqResOrdering?l.unshift(x.fulfilled,x.rejected):l.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,f=0,g;if(!s){const m=[Hu.bind(this),void 0];for(m.unshift(...l),m.push(...c),g=m.length,u=Promise.resolve(t);f<g;)u=u.then(m[f++],m[f++]);return u}g=l.length;let y=t;for(;f<g;){const m=l[f++],x=l[f++];try{y=m(y)}catch(w){x.call(this,w);break}}try{u=Hu.call(this,y)}catch(m){return Promise.reject(m)}for(f=0,g=c.length;f<g;)u=u.then(c[f++],c[f++]);return u}getUri(n){n=ft(this.defaults,n);const t=Gf(n.baseURL,n.url,n.allowAbsoluteUrls);return Kf(t,n.params,n.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(n){lt.prototype[n]=function(t,r){return this.request(ft(r||{},{method:n,url:t,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(n){function t(r){return function(i,o,l){return this.request(ft(l||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}lt.prototype[n]=t(),lt.prototype[n+"Form"]=t(!0)});let v0=class Zf{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},n(function(i,o,l){r.reason||(r.reason=new ra(i,o,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=r=>{n.abort(r)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new Zf(function(a){n=a}),cancel:n}}};function x0(e){return function(t){return e.apply(null,t)}}function y0(e){return k.isObject(e)&&e.isAxiosError===!0}const Ml={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ml).forEach(([e,n])=>{Ml[n]=e});function em(e){const n=new lt(e),t=jf(lt.prototype.request,n);return k.extend(t,lt.prototype,n,{allOwnKeys:!0}),k.extend(t,n,null,{allOwnKeys:!0}),t.create=function(a){return em(ft(e,a))},t}const ce=em(ta);ce.Axios=lt;ce.CanceledError=ra;ce.CancelToken=v0;ce.isCancel=qf;ce.VERSION=Xf;ce.toFormData=Ui;ce.AxiosError=B;ce.Cancel=ce.CanceledError;ce.all=function(n){return Promise.all(n)};ce.spread=x0;ce.isAxiosError=y0;ce.mergeConfig=ft;ce.AxiosHeaders=ze;ce.formToJSON=e=>Vf(k.isHTMLForm(e)?new FormData(e):e);ce.getAdapter=Jf.getAdapter;ce.HttpStatusCode=Ml;ce.default=ce;const{Axios:gw,AxiosError:hw,CanceledError:vw,isCancel:xw,CancelToken:yw,VERSION:ww,all:bw,Cancel:Sw,isAxiosError:kw,spread:Ew,toFormData:_w,AxiosHeaders:Rw,HttpStatusCode:Tw,formToJSON:Lw,getAdapter:Cw,mergeConfig:Aw}=ce,Ne=ce.create({baseURL:"https://vald-automator-production.up.railway.app",timeout:3e4}),w0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),Ne.post("/api/check",t,{timeout:9e4})},b0=(e,n,t)=>Ne.get("/api/trainer-whatsapp",{params:{gym:e,branch:n,trainer:t}}),S0=e=>Ne.post("/api/programs/approve",e),k0=e=>Ne.post("/api/programs/unapprove",e),E0=e=>Ne.post("/api/programs/ignore",e),_0=e=>Ne.post("/api/programs/unignore",e),nm=e=>Ne.post("/api/programs/preview",e,{responseType:"text",timeout:6e4}),R0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),Ne.post("/api/report/generate",n,{responseType:"blob",timeout:12e4})},T0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),Ne.post("/api/quick-generate",t,{timeout:9e4})},$u=e=>Ne.get("/api/trainers/all",{params:{gym:e}}),L0=e=>Ne.post("/api/trainers",e),C0=(e,n)=>Ne.put(`/api/trainers/${e}`,n),A0=e=>Ne.delete(`/api/trainers/${e}`),N0=(e,n)=>{const t=new FormData;return t.append("month",e),t.append("year",n),Ne.post("/api/report/payment",t,{responseType:"blob",timeout:12e4})},P0=(e,n,t)=>{const r=new FormData;return r.append("gym",e),r.append("month",n),r.append("year",t),Ne.post("/api/report/growth",r,{responseType:"blob",timeout:12e4})},j0={"Body Masters":["RUH - Al Malaz","RUH - Al Massif","RUH - Al Aarid","RUH - Al Sahafa","RUH - Al Wadi","RUH - Eshbilia","RUH - Muzahmiyah","RUH - Rabwa","RUH - Salam","RUH - Swaidi","RUH - Takhasousi","RUH - Al Badia","RUH - Al Fayha","RUH - Al Khaleej","RUH - Al Kharj","RUH - Al Nahda","RUH - Badr","RUH - Ezdehar","RUH - Murooj","RUH - Shubra","DMM - Al Athir","DMM - Al Jameyeen","DMM - Hufof","DMM - Khobar","JED - Hamadania","JED - Al Rawdah","JED - Makkah","JED - Obhor - Al Amwaj","JED - Obhor - Al Sheraa","ALQ - Al Rass","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","MED - Shouran","MED - Taiba","Uhud","AlUla","Al Mubaraz","Hafr El Batin","Tabuk","Najran","Khamis Mushait","Hail"],"Body Motions":["RUH - Al Malaz","RUH - Al Sahafa","RUH - Al Aarid","RUH - Al Fayha","RUH - Al Uraija","RUH - Badr","RUH - Al Badia","JED - Al Basateen","JED - Al Faisaliyah","JED - Al Naeem","JED - Obhor","DMM - Al Faisaliyah","DMM - Al Jalawiah","DMM - Al Nada","ALQ - Buraidah","ALQ - Unaizah","Al Ahsaa","AlUla","Tabuk"]},tm=b.createContext(null);function D0({children:e}){const[n,t]=b.useState({}),[r,a]=b.useState(!1),i=b.useCallback(async g=>{if(!(!g||n[g])){a(!0);try{const y=await $u(g);t(m=>({...m,[g]:y.data||{}}))}catch{}finally{a(!1)}}},[n]),o=b.useCallback(async g=>{if(g){a(!0);try{const y=await $u(g);t(m=>({...m,[g]:y.data||{}}))}catch{}finally{a(!1)}}},[]),l=g=>Object.keys(n[g]||{}).sort((y,m)=>{const x=j0[g]||[],w=x.indexOf(y),h=x.indexOf(m);return w===-1&&h===-1?y.localeCompare(m):w===-1?1:h===-1?-1:w-h}),s=(g,y)=>{var m;return[...((m=n[g])==null?void 0:m[y])||[]].sort((x,w)=>x.name.localeCompare(w.name)).map(x=>x.name)},c=g=>Object.values(n[g]||{}).flat().map(y=>y.name).sort((y,m)=>y.localeCompare(m)),u=(g,y)=>{for(const[m,x]of Object.entries(n[g]||{}))if(x.some(w=>w.name===y))return m;return null},f=(g,y,m)=>{var x;return(((x=n[g])==null?void 0:x[y])||[]).find(w=>w.name===m)||null};return d.jsx(tm.Provider,{value:{data:n,loading:r,load:i,reload:o,getBranches:l,getTrainers:s,getAllTrainers:c,getBranchForTrainer:u,getTrainerRecord:f},children:e})}function rm(){const e=b.useContext(tm);if(!e)throw new Error("useTrainers must be used inside TrainersProvider");return e}const O0={upper:"Upper Body",lower:"Lower Body",full:"Full Body"},I0={NEW:"bg-emerald-900/60 text-emerald-300 border border-emerald-700",UPDATED:"bg-amber-900/60 text-amber-300 border border-amber-700"};function Ku({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:i,inputRef:o}){const[l,s]=b.useState(""),[c,u]=b.useState(!1),[f,g]=b.useState(0),y=b.useRef(null),m=b.useRef(null),x=l?e.filter(p=>p.toLowerCase().includes(l.toLowerCase())):e;b.useEffect(()=>{function p(v){y.current&&!y.current.contains(v.target)&&u(!1)}return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]),b.useEffect(()=>{s(n||"")},[n]),b.useEffect(()=>{g(0)},[l]);function w(p){t(p),s(p),u(!1),r&&r(p)}function h(p){!c||x.length===0||(p.key==="ArrowDown"?(p.preventDefault(),g(v=>Math.min(v+1,x.length-1))):p.key==="ArrowUp"?(p.preventDefault(),g(v=>Math.max(v-1,0))):p.key==="Enter"?(p.preventDefault(),w(x[f])):p.key==="Escape"&&u(!1))}return b.useEffect(()=>{if(!m.current)return;const p=m.current.children[f];p&&p.scrollIntoView({block:"nearest"})},[f]),d.jsxs("div",{ref:y,className:"relative",children:[d.jsx("input",{ref:o,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:l,disabled:i,onChange:p=>{s(p.target.value),u(!0),p.target.value||t("")},onFocus:()=>u(!0),onKeyDown:h}),c&&!i&&x.length>0&&d.jsx("ul",{ref:m,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:x.map((p,v)=>d.jsx("li",{onMouseDown:()=>w(p),onMouseEnter:()=>g(v),className:`px-3 py-2 text-sm cursor-pointer ${v===f?"bg-gray-700 text-white":p===n?"text-brand-400 font-semibold":"text-white"}`,children:p},p))})]})}function Vu({test:e,gym:n}){const{getBranches:t,getTrainers:r,getAllTrainers:a,getBranchForTrainer:i,load:o}=rm(),[l,s]=b.useState(e.existing_branch||""),[c,u]=b.useState(e.existing_trainer_name||""),f=b.useRef(null),[g,y]=b.useState(e.existing_dispatch_date||new Date().toISOString().split("T")[0]);b.useEffect(()=>{o(n)},[n,o]);const[m,x]=b.useState(!1),[w,h]=b.useState(!1),[p,v]=b.useState(!1),[S,R]=b.useState(!1),[L,E]=b.useState(!1),[_,F]=b.useState(""),D=t(n),V=l?r(n,l):a(n);function ee(C){if(u(C),!l&&C){const j=i(n,C);j&&s(j)}}b.useEffect(()=>{n&&l&&c&&b0(n,l,c).then(C=>{var j;return F(((j=C.data)==null?void 0:j.whatsapp)||"")}).catch(()=>F(""))},[n,l,c]);const W=async()=>{var C,j;if(!e.cells_data){window.open(`https://vald-automator-production.up.railway.app/api/programs/preview-demo?gym=${encodeURIComponent(n)}&test_type=${e.test_type}`,"_blank");return}x(!0);try{const O=await nm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:e.prev_asymmetries||null}),H=new Blob([O.data],{type:"text/html"}),he=URL.createObjectURL(H),X=window.open(he,"_blank");X&&X.addEventListener("load",()=>X.print())}catch(O){alert("Failed to open program: "+(((j=(C=O.response)==null?void 0:C.data)==null?void 0:j.detail)||O.message))}finally{x(!1)}},M=async()=>{var j,O,H;if(!(e.status==="UPDATED"&&!l&&!c)&&(!l||!c)){alert("Please select a branch and trainer before approving.");return}v(!0);try{const X=(j=(await S0({gym:n,branch:l||e.existing_branch||"",client_id:e.external_id!=="N/A"?e.external_id:null,client_name:e.patient,test_type:e.test_type,movements:e.movement_count,test_date:e.date,trainer_name:c||e.existing_trainer_name||null,dispatch_date:g||e.existing_dispatch_date||null,check_status:e.status,asymmetry_values:e.asymmetry_values||null})).data)==null?void 0:j.id;h(!0)}catch(he){alert("Error approving: "+(((H=(O=he.response)==null?void 0:O.data)==null?void 0:H.detail)||he.message))}finally{v(!1)}},ue=async()=>{var C,j;E(!0);try{await E0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count,external_id:e.external_id!=="N/A"?e.external_id:null}),R(!0)}catch(O){alert("Error ignoring: "+(((j=(C=O.response)==null?void 0:C.data)==null?void 0:j.detail)||O.message))}finally{E(!1)}},G=async()=>{var C,j;try{await _0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),R(!1)}catch(O){alert("Error undoing ignore: "+(((j=(C=O.response)==null?void 0:C.data)==null?void 0:j.detail)||O.message))}},Me=async()=>{var C,j;try{await k0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),h(!1)}catch(O){alert("Error undoing approval: "+(((j=(C=O.response)==null?void 0:C.data)==null?void 0:j.detail)||O.message))}},A=()=>{if(!_){alert("No WhatsApp number set for this trainer.");return}const C=_.replace(/\D/g,"");window.open(`https://wa.me/${C}`,"_blank")};return d.jsxs("div",{className:`rounded-xl border p-5 space-y-4 transition-all
      ${w?"border-emerald-700 bg-emerald-950/20":S?"border-red-900 bg-red-950/20":"border-gray-700 bg-gray-900"}`,children:[d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[d.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full ${I0[e.status]}`,children:e.status}),d.jsx("h3",{className:"font-semibold text-white",children:e.patient}),e.external_id&&e.external_id!=="N/A"&&d.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["#",e.external_id]})]}),d.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[d.jsx("span",{children:O0[e.test_type]||e.test_type}),d.jsx("span",{children:"·"}),d.jsxs("span",{children:[e.movement_count," movements"]}),d.jsx("span",{children:"·"}),d.jsx("span",{children:e.date}),e.status==="UPDATED"&&d.jsxs("span",{className:"text-amber-400",children:["(was ",e.old_count,")"]})]})]}),d.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.patient),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[d.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),d.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),d.jsx(Ku,{options:D,value:l,onChange:C=>{s(C),u("")},onSelect:()=>{f.current&&f.current.focus()},placeholder:"Search branch…",disabled:w||S})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),d.jsx(Ku,{options:V,value:c,onChange:ee,placeholder:"Search trainer…",disabled:w||S,inputRef:f})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),d.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:g,onChange:C=>y(C.target.value),disabled:w||S})]})]}),d.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[d.jsx("button",{onClick:W,disabled:m,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:m?"Loading…":"🖨 Open & Print"}),d.jsx("button",{onClick:()=>{const C={upper:"Upper Body",lower:"Lower Body",full:"Full Body"}[e.test_type]||e.test_type;navigator.clipboard.writeText(`${e.patient} - ${C}`)},className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors",children:"📋 Copy File Name"}),!w&&!S&&d.jsx("button",{onClick:ue,disabled:L,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:L?"Ignoring…":"Ignore"}),d.jsx("div",{className:"flex-1"}),d.jsxs("button",{onClick:A,disabled:!_,title:_?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[d.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:d.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),w?d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-emerald-700/40 text-emerald-400 font-semibold border border-emerald-700",children:"✓ Approved"}),d.jsx("button",{onClick:Me,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):S?d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-red-900/40 text-red-400 font-semibold border border-red-800",children:"✗ Ignored"}),d.jsx("button",{onClick:G,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):d.jsx("button",{onClick:M,disabled:p,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:p?"Saving…":"Approve"})]})]})}const F0=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function B0(){const[e,n]=b.useState("Body Motions"),[t,r]=b.useState(!1),[a,i]=b.useState(null),[o,l]=b.useState(null),[s,c]=b.useState("desc"),u=async m=>{var x,w;r(!0),i(null),l(null);try{const h=await w0(e,m);l(h.data)}catch(h){i(((w=(x=h.response)==null?void 0:x.data)==null?void 0:w.detail)||h.message||"Failed to process file")}finally{r(!1)}},f=o?[...o].sort((m,x)=>{const w=new Date(m.date)-new Date(x.date);return s==="asc"?w:-w}):[],g=f.filter(m=>m.status==="NEW"),y=f.filter(m=>m.status==="UPDATED");return d.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Program Generation"}),d.jsx("div",{className:"flex gap-3",children:F0.map(m=>d.jsx("button",{onClick:()=>{n(m.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:d.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),d.jsx(Hx,{onFile:u,loading:t}),a&&d.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&d.jsxs("div",{className:"space-y-8",children:[d.jsxs("div",{className:"flex items-center gap-4 text-sm flex-wrap",children:[d.jsxs("span",{className:"text-gray-300",children:[d.jsx("span",{className:"font-bold text-emerald-400",children:g.length})," new"]}),d.jsx("span",{className:"text-gray-600",children:"|"}),d.jsxs("span",{className:"text-gray-300",children:[d.jsx("span",{className:"font-bold text-amber-400",children:y.length})," updated"]}),o.length===0&&d.jsx("span",{className:"text-gray-500",children:"No new or updated tests found."}),d.jsxs("div",{className:"ml-auto flex gap-1",children:[d.jsx("button",{onClick:()=>c("desc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="desc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Newest first"}),d.jsx("button",{onClick:()=>c("asc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="asc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Oldest first"})]})]}),g.length>0&&d.jsxs("section",{className:"space-y-3",children:[d.jsxs("h2",{className:"text-lg font-semibold text-emerald-400 border-b border-emerald-900 pb-1",children:["New Tests (",g.length,")"]}),g.map((m,x)=>d.jsx(Vu,{test:m,gym:e},`new-${x}`))]}),y.length>0&&d.jsxs("section",{className:"space-y-3",children:[d.jsxs("h2",{className:"text-lg font-semibold text-amber-400 border-b border-amber-900 pb-1",children:["Updated Tests (",y.length,")"]}),y.map((m,x)=>d.jsx(Vu,{test:m,gym:e},`upd-${x}`))]})]})]})}const am=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],Te=["January","February","March","April","May","June","July","August","September","October","November","December"];function z0(e,n){const t=new Date(e,n-1,1).getDay(),r=new Date(e,n,0).getDate();return Math.ceil((t+r)/7)}function M0(){const e=new Date,[n,t]=b.useState("Body Motions"),[r,a]=b.useState("monthly"),[i,o]=b.useState(e.getFullYear()),[l,s]=b.useState(e.getMonth()+1),[c,u]=b.useState(1),[f,g]=b.useState(null),[y,m]=b.useState(null),[x,w]=b.useState(!1),[h,p]=b.useState(null),v=new Date(i,l,0).getDate(),S=z0(i,l),R=(()=>{const E=e.getFullYear(),_=e.getMonth()+1;return i>E?!0:i<E?!1:l>_?!0:l<_?!1:r==="weekly"?(c-1)*7+1>e.getDate():r==="custom"&&f?f>e.getDate():!1})(),L=async()=>{var E,_,F;w(!0),p(null);try{const V=await R0({gym:n,period_type:r==="custom"?"monthly":r,year:i,month:l,week_number:r==="weekly"?c:null,start_day:r==="custom"&&f?f:null,end_day:r==="custom"&&y?y:null}),ee=new Blob([V.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),W=URL.createObjectURL(ee),M=document.createElement("a"),G=(((E=V.headers)==null?void 0:E["content-disposition"])||"").match(/filename="([^"]+)"/),Me=r==="custom"?`${Te[l-1]} ${i} (Day ${f||1}–${y||v})`:r==="monthly"?`${Te[l-1]} ${i}`:`Week ${c} - ${Te[l-1]} ${i}`;M.href=W,M.download=G?G[1]:`${Me} - ${n}.xlsx`,M.click(),URL.revokeObjectURL(W)}catch(D){p(((F=(_=D.response)==null?void 0:_.data)==null?void 0:F.detail)||D.message||"Failed to generate report")}finally{w(!1)}};return d.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8",children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Reports"}),d.jsx("div",{}),d.jsx("h1",{className:"text-2xl font-bold text-white hidden lg:block",children:"Payment Report"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start",children:[d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),d.jsx("div",{className:"flex gap-3",children:am.map(E=>d.jsx("button",{onClick:()=>t(E.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===E.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:d.jsx("img",{src:E.logo,alt:E.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},E.name))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Report Type"}),d.jsx("div",{className:"flex gap-2",children:["monthly","weekly","custom"].map(E=>d.jsx("button",{onClick:()=>a(E),className:`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors
                ${r===E?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:E},E))})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),d.jsx("select",{value:l,onChange:E=>s(Number(E.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Te.map((E,_)=>d.jsx("option",{value:_+1,children:E},_+1))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),d.jsx("select",{value:i,onChange:E=>o(Number(E.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(E=>d.jsx("option",{value:E,children:E},E))})]})]}),r==="custom"&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date Range"}),d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"Start Day"}),d.jsxs("select",{value:f||"",onChange:E=>g(E.target.value?Number(E.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[d.jsx("option",{value:"",children:"—"}),Array.from({length:v},(E,_)=>_+1).map(E=>d.jsx("option",{value:E,children:E},E))]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"End Day"}),d.jsxs("select",{value:y||"",onChange:E=>m(E.target.value?Number(E.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[d.jsx("option",{value:"",children:"—"}),Array.from({length:v},(E,_)=>_+1).map(E=>d.jsx("option",{value:E,children:E},E))]})]})]})]}),r==="weekly"&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Week"}),d.jsx("div",{className:"flex gap-2 flex-wrap",children:Array.from({length:S},(E,_)=>_+1).map(E=>d.jsxs("button",{onClick:()=>u(E),className:`w-12 h-10 rounded-lg text-sm font-semibold transition-colors
                  ${c===E?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:["W",E]},E))}),d.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Week ",c,": days ",(c-1)*7+1,"–",Math.min(c*7,new Date(i,l,0).getDate())]})]}),h&&d.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:h}),d.jsx("button",{onClick:L,disabled:x||R,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:x?"Generating…":"Generate & Download Report"}),R&&d.jsx("p",{className:"text-xs text-amber-500 text-center",children:"Cannot generate a report for a future period."}),d.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Report pulls all ",d.jsx("strong",{className:"text-gray-400",children:"approved"})," programs",r==="weekly"?` dispatched in week ${c} of ${Te[l-1]} ${i}`:r==="custom"?` dispatched between day ${f||1} and day ${y||v} of ${Te[l-1]} ${i}`:` dispatched in ${Te[l-1]} ${i}`,"."]})]}),d.jsx("div",{className:"hidden lg:block bg-gray-700 self-stretch"}),d.jsx("div",{className:"space-y-6",children:d.jsx(U0,{})})]}),d.jsx("div",{className:"border-t border-gray-700 pt-6",children:d.jsx(H0,{})})]})}function H0(){const e=new Date,[n,t]=b.useState("Body Motions"),[r,a]=b.useState(e.getMonth()+1),[i,o]=b.useState(e.getFullYear()),[l,s]=b.useState(!1),[c,u]=b.useState(null),f=`${Te[(r-2+12)%12]} ${r===1?i-1:i}`,g=async()=>{var y,m,x;s(!0),u(null);try{const w=await P0(n,r,i),h=new Blob([w.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),p=URL.createObjectURL(h),v=document.createElement("a"),R=(((y=w.headers)==null?void 0:y["content-disposition"])||"").match(/filename="([^"]+)"/);v.href=p;const L=String(i%100).padStart(2,"0"),E=Te[(r-2+12)%12].slice(0,3).toUpperCase(),_=Te[r-1].slice(0,3).toUpperCase(),F=`Test Growth Tracker - ${n} - ${E}-${_} ${L}.xlsx`;v.download=R?R[1]:F,v.click(),URL.revokeObjectURL(p)}catch(w){u(((x=(m=w.response)==null?void 0:m.data)==null?void 0:x.detail)||w.message||"Failed to generate growth tracker")}finally{s(!1)}};return d.jsxs("div",{className:"max-w-2xl space-y-5",children:[d.jsx("div",{children:d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Test Growth Tracker"})}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),d.jsx("div",{className:"flex gap-3",children:am.map(y=>d.jsx("button",{onClick:()=>t(y.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===y.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:d.jsx("img",{src:y.logo,alt:y.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},y.name))})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),d.jsx("select",{value:r,onChange:y=>a(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Te.map((y,m)=>d.jsx("option",{value:m+1,children:y},m+1))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),d.jsx("select",{value:i,onChange:y=>o(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(y=>d.jsx("option",{value:y,children:y},y))})]})]}),c&&d.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:c}),d.jsx("button",{onClick:g,disabled:l,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:l?"Generating…":"Generate & Download Growth Tracker"}),d.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Compares ",d.jsxs("strong",{className:"text-gray-400",children:[Te[r-1]," ",i]})," vs"," ",d.jsx("strong",{className:"text-gray-400",children:f})," test counts per branch and trainer."]})]})}function U0(){const e=new Date,[n,t]=b.useState(e.getMonth()+1),[r,a]=b.useState(e.getFullYear()),[i,o]=b.useState(!1),[l,s]=b.useState(null),c=async()=>{var u,f,g;o(!0),s(null);try{const y=await N0(n,r),m=new Blob([y.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),x=URL.createObjectURL(m),w=document.createElement("a"),p=(((u=y.headers)==null?void 0:u["content-disposition"])||"").match(/filename="([^"]+)"/);w.href=x,w.download=p?p[1]:`Payment - ${Te[n-1]} ${r}.xlsx`,w.click(),URL.revokeObjectURL(x)}catch(y){s(((g=(f=y.response)==null?void 0:f.data)==null?void 0:g.detail)||y.message||"Failed to generate payment report")}finally{o(!1)}};return d.jsxs("div",{className:"space-y-5",children:[d.jsx("h1",{className:"text-2xl font-bold text-white lg:hidden",children:"Payment Report"}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),d.jsx("select",{value:n,onChange:u=>t(Number(u.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Te.map((u,f)=>d.jsx("option",{value:f+1,children:u},f+1))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),d.jsx("select",{value:r,onChange:u=>a(Number(u.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(u=>d.jsx("option",{value:u,children:u},u))})]})]}),l&&d.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:l}),d.jsx("button",{onClick:c,disabled:i,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:i?"Generating…":"Generate & Download Payment Report"}),d.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Appends all programs from ",d.jsx("strong",{className:"text-gray-400",children:"May 2026"})," through ",d.jsxs("strong",{className:"text-gray-400",children:[Te[n-1]," ",r]})," to the payment report."]})]})}const $0=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],K0={upper:"Upper Body",lower:"Lower Body",full:"Full Body"};function V0({item:e,gym:n}){const[t,r]=b.useState(!1),a=async()=>{var i,o;r(!0);try{const l=await nm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:null}),s=new Blob([l.data],{type:"text/html"}),c=URL.createObjectURL(s),u=window.open(c,"_blank");u&&u.addEventListener("load",()=>u.print())}catch(l){alert("Failed to open program: "+(((o=(i=l.response)==null?void 0:i.data)==null?void 0:o.detail)||l.message))}finally{r(!1)}};return d.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 flex items-center justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-semibold text-white",children:e.patient}),d.jsxs("p",{className:"text-sm text-gray-400 mt-0.5",children:[K0[e.test_type]||e.test_type,d.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.movement_count," movements",d.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.date]})]}),d.jsx("button",{onClick:a,disabled:t,className:"shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:t?"Loading…":"🖨 Open & Print"})]})}function q0(){const[e,n]=b.useState("Body Motions"),[t,r]=b.useState(!1),[a,i]=b.useState(null),[o,l]=b.useState(null),s=async g=>{var y,m;if(g.length){r(!0),i(null),l(null);try{const x=await T0(e,g[0]);l(x.data)}catch(x){i(((m=(y=x.response)==null?void 0:y.data)==null?void 0:m.detail)||x.message||"Failed to process file")}finally{r(!1)}}},{getRootProps:c,getInputProps:u,isDragActive:f}=Fs({onDrop:s,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:t});return d.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Generate"}),d.jsx("div",{className:"flex gap-3",children:$0.map(g=>d.jsx("button",{onClick:()=>{n(g.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===g.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:d.jsx("img",{src:g.logo,alt:g.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},g.name))}),d.jsxs("div",{...c(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
          ${f?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
          ${t?"opacity-50 cursor-not-allowed":""}`,children:[d.jsx("input",{...u()}),d.jsx("div",{className:"text-4xl mb-3",children:"📂"}),t?d.jsx("p",{className:"text-gray-400",children:"Generating programs…"}):f?d.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your VALD export file here"}),d.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]}),a&&d.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),o!==null&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("p",{className:"text-sm text-gray-400",children:[d.jsx("span",{className:"font-bold text-white",children:o.length})," program",o.length!==1?"s":""," found"]}),o.length===0&&d.jsx("p",{className:"text-gray-500 text-sm",children:"No programs could be parsed from this file."}),o.map((g,y)=>d.jsx(V0,{item:g,gym:e},y))]})]})}const W0=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function G0({trainer:e,allBranches:n,onUpdated:t,onDeleted:r}){const[a,i]=b.useState(!1),[o,l]=b.useState(e.name),[s,c]=b.useState(e.whatsapp||""),[u,f]=b.useState(e.branch),[g,y]=b.useState(!1),[m,x]=b.useState(!1),w=o!==e.name||s!==(e.whatsapp||"")||u!==e.branch,h=async()=>{var S,R;y(!0);try{const L=await C0(e.id,{name:o,whatsapp:s,branch:u});t(L.data),i(!1)}catch(L){alert("Failed to save: "+(((R=(S=L.response)==null?void 0:S.data)==null?void 0:R.detail)||L.message))}finally{y(!1)}},p=async()=>{var S,R;if(confirm(`Delete "${e.name}"?`)){x(!0);try{await A0(e.id),r(e.id)}catch(L){alert("Failed to delete: "+(((R=(S=L.response)==null?void 0:S.data)==null?void 0:R.detail)||L.message)),x(!1)}}},v=()=>{l(e.name),c(e.whatsapp||""),f(e.branch),i(!1)};return a?d.jsxs("div",{className:"py-3 border-b border-gray-700 space-y-2",children:[d.jsxs("div",{className:"flex gap-2 items-center",children:[d.jsx("input",{value:o,onChange:S=>l(S.target.value),placeholder:"Name",className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"}),d.jsx("input",{value:s,onChange:S=>c(S.target.value),placeholder:"WhatsApp e.g. +966...",className:"w-44 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"})]}),d.jsxs("div",{className:"flex gap-2 items-center",children:[d.jsx("select",{value:u,onChange:S=>f(S.target.value),className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",children:n.map(S=>d.jsx("option",{value:S,children:S},S))}),d.jsx("button",{onClick:h,disabled:g||!w,className:"px-3 py-1 text-xs rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40",children:g?"Saving…":"Save"}),d.jsx("button",{onClick:v,className:"px-3 py-1 text-xs rounded border border-gray-600 text-gray-400 hover:text-white",children:"Cancel"})]})]}):d.jsxs("div",{className:"flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0 group",children:[d.jsx("span",{className:"w-72 shrink-0 text-sm text-white",children:e.name}),d.jsx("span",{className:"flex-1 text-sm text-gray-400",children:e.whatsapp||d.jsx("span",{className:"text-gray-600 italic",children:"no number"})}),d.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[d.jsx("button",{onClick:()=>i(!0),className:"text-xs px-2.5 py-1 rounded border border-gray-600 text-gray-300 hover:border-brand-500 hover:text-brand-300",children:"Edit"}),d.jsx("button",{onClick:p,disabled:m,className:"text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-500 hover:border-red-600 hover:text-red-400 disabled:opacity-40",children:m?"…":"Delete"})]})]})}function Y0({gym:e,branch:n,onAdded:t}){const[r,a]=b.useState(""),[i,o]=b.useState(""),[l,s]=b.useState(!1),c=async()=>{var u,f;if(r.trim()){s(!0);try{const g=await L0({gym:e,branch:n,name:r.trim(),whatsapp:i});t(g.data),a(""),o("")}catch(g){alert("Failed to add: "+(((f=(u=g.response)==null?void 0:u.data)==null?void 0:f.detail)||g.message))}finally{s(!1)}}};return d.jsxs("div",{className:"flex gap-2 pt-3 border-t border-gray-700 mt-1",children:[d.jsx("input",{value:r,onChange:u=>a(u.target.value),placeholder:"New trainer name",className:"flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:u=>u.key==="Enter"&&c()}),d.jsx("input",{value:i,onChange:u=>o(u.target.value),placeholder:"WhatsApp (optional)",className:"w-44 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:u=>u.key==="Enter"&&c()}),d.jsx("button",{onClick:c,disabled:l||!r.trim(),className:"px-4 py-1.5 text-sm rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40 shrink-0",children:l?"Adding…":"+ Add"})]})}function Q0(){var y;const{data:e,load:n,reload:t,getBranches:r}=rm(),[a,i]=b.useState("Body Motions"),[o,l]=b.useState("");b.useEffect(()=>{n(a)},[a]);const s=r(a),c=o?[...((y=e[a])==null?void 0:y[o])||[]].sort((m,x)=>m.name.localeCompare(x.name)):[],u=async m=>{m.branch!==o?(await t(a),l(m.branch)):t(a)},f=()=>t(a),g=()=>t(a);return d.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Trainers"}),d.jsx("div",{className:"flex gap-3",children:W0.map(m=>d.jsx("button",{onClick:()=>{i(m.name),l("")},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${a===m.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:d.jsx("img",{src:m.logo,alt:m.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},m.name))}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),d.jsxs("select",{value:o,onChange:m=>l(m.target.value),className:"bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72",children:[d.jsx("option",{value:"",children:"— Select branch —"}),s.map(m=>d.jsx("option",{value:m,children:m},m))]})]}),o&&d.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5",children:[d.jsxs("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3",children:[o," — ",c.length," trainer",c.length!==1?"s":""]}),c.map(m=>d.jsx(G0,{trainer:{...m,branch:o},allBranches:s,onUpdated:u,onDeleted:f},m.id)),d.jsx(Y0,{gym:a,branch:o,onAdded:g})]})]})}const J0="https://bdot-proxy.andyayas27.workers.dev",Ki=`${J0}/v1`,X0="YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk",qu=[{id:"bf9ffaec-d3ed-4742-bce9-945f619ea1bc",name:"Body Motions – Al Sahafa",bilingual:!0},{id:"1627c00e-e275-4356-91ae-6f85127bd21c",name:"Body Masters – Al Aarid",bilingual:!0},{id:"ebce917d-1c31-4516-8396-64283b4cbeaa",name:"Body Coach",bilingual:!1}];let Ta=null,Wu=0;async function $s(){if(Ta&&Date.now()<Wu-6e4)return Ta;const e=await fetch(`${Ki}/oauth/token`,{method:"POST",headers:{Authorization:`Basic ${X0}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});if(!e.ok)throw new Error(`Auth failed (HTTP ${e.status})`);const n=await e.json();return Ta=n.access_token,Wu=Date.now()+n.expires_in*1e3,Ta}async function Z0(e){const n=await $s(),t=await fetch(`${Ki}/clients?organizationId=${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),a=Array.isArray(r)?r:r.data||[];return a.sort((i,o)=>(i.name||"").localeCompare(o.name||"")),a}const jo=new Map;async function ew(e){if(jo.has(e))return jo.get(e);const n=await $s(),t=await fetch(`${Ki}/clients/${e}/measurement-sessions`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),a=Array.isArray(r)?r:r.data||[];return a.sort((i,o)=>new Date(o.createdAt)-new Date(i.createdAt)),jo.set(e,a),a}const Do=new Map;async function nw(e,n){if(Do.has(n))return Do.get(n);const t=await $s(),r=await fetch(`${Ki}/clients/${e}/measurement-sessions/${n}`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("No session found");const a=await r.json();return Do.set(n,a),a}const tw=`<!DOCTYPE html>
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
                    for (const v of (step.data?.values || [])) {
                        values[\`\${step.stepCode}.\${v.valueCode}\`] = v.value;
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
</html>`,rw=`${window.location.origin}/VALD-automator/bodydot/`,St=25,aw=4;function im(e){return(e||"").normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/\s+/g," ").trim()}function iw(e,n){const t=im(e);return n.every(r=>t.includes(r))}function ow(e){const n=new Date(e);return isNaN(n)?null:n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function lw(e){const n=new Date(e);if(isNaN(n))return e;const t=n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),r=n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${t} · ${r}`}function sw(e,n,t){const r={session:e,clientName:n,lang:t?"bilingual":"en",autoPrint:!0},a='<meta charset="UTF-8">',i=`<base href="${rw}"><script>window.__BODYDOT__ = ${JSON.stringify(r)};<\/script>`,o=tw.replace(a,`${a}${i}`),l=new Blob([o],{type:"text/html"}),s=URL.createObjectURL(l);if(!window.open(s,"_blank"))throw URL.revokeObjectURL(s),new Error("Popup blocked — allow popups for this site and try again.");setTimeout(()=>URL.revokeObjectURL(s),6e4)}function cw({client:e,bilingual:n,sessionInfo:t}){const[r,a]=b.useState(!1),[i,o]=b.useState(null),l=Array.isArray(t)?t:[],s=l.length>1,c=i||l[0]&&l[0].id,u=async()=>{if(c){a(!0);try{const g=await nw(e.id,c);sw(g,e.name||"",n)}catch(g){alert(`Could not generate program for ${e.name||"client"}: ${g.message}`)}finally{a(!1)}}};let f;return t===void 0?f=d.jsx("span",{className:"text-gray-600",children:"Loading test date…"}):l.length?f=d.jsxs("span",{className:"text-gray-400",children:["Test date: ",ow(l[0].createdAt),s&&d.jsxs("span",{className:"text-brand-400",children:[" · ",l.length," tests"]})]}):f=d.jsx("span",{className:"text-gray-600",children:"No test data"}),d.jsxs("div",{className:"flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0",children:[d.jsxs("div",{className:"min-w-0",children:[d.jsx("p",{className:"font-medium text-white",children:e.name||"—"}),d.jsx("p",{className:"text-xs mt-0.5",children:f})]}),d.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[s&&d.jsx("select",{value:c,onChange:g=>o(g.target.value),disabled:r,className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 max-w-[190px]",children:l.map((g,y)=>d.jsxs("option",{value:g.id,children:[lw(g.createdAt),y===0?" (latest)":""]},g.id))}),d.jsx("button",{onClick:u,disabled:r||!c,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:r?"Loading…":"Generate Program"})]})]})}function uw(){const[e,n]=b.useState(null),[t,r]=b.useState([]),[a,i]=b.useState(!1),[o,l]=b.useState(null),[s,c]=b.useState(""),[u,f]=b.useState(0),[g,y]=b.useState({}),m=b.useRef(0),x=qu.find(_=>_.id===e),w=async _=>{n(_.id),c(""),f(0),l(null),r([]),y({}),i(!0);try{r(await Z0(_.id))}catch(F){l(`Error loading clients: ${F.message}`)}finally{i(!1)}},h=im(s).split(" ").filter(Boolean),p=h.length?t.filter(_=>iw(_.name,h)):t,v=Math.max(1,Math.ceil(p.length/St)),S=Math.min(u,v-1),R=p.slice(S*St,S*St+St),L=R.map(_=>_.id).join(",");b.useEffect(()=>{if(!R.length)return;const _=++m.current,F=R.filter(ee=>g[ee.id]===void 0);if(!F.length)return;let D=0;const V=async()=>{for(;D<F.length;){if(_!==m.current)return;const ee=F[D++];let W=null;try{W=await ew(ee.id)}catch{W=null}if(_!==m.current)return;y(M=>({...M,[ee.id]:W}))}};Promise.all(Array.from({length:Math.min(aw,F.length)},V))},[L]);const E=_=>{c(_),f(0)};return d.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-white",children:"Bodydot"}),d.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Select a center to view clients."})]}),d.jsx("div",{className:"flex flex-wrap gap-3",children:qu.map(_=>d.jsx("button",{onClick:()=>w(_),className:`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${e===_.id?"border-brand-500 bg-brand-900/20":"border-gray-700 bg-gray-900 hover:border-gray-500"}`,children:d.jsx("div",{className:"font-semibold text-white",children:_.name})},_.id))}),o&&d.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:o}),e&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-center justify-between gap-3",children:[d.jsx("h2",{className:"text-lg font-semibold text-white",children:x==null?void 0:x.name}),d.jsx("input",{type:"text",value:s,onChange:_=>E(_.target.value),placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),a?d.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):p.length===0?d.jsx("p",{className:"text-gray-500 text-sm py-4",children:t.length===0?"No clients found.":"No clients match your search."}):d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"rounded-xl border border-gray-800 bg-gray-900 overflow-hidden",children:R.map(_=>d.jsx(cw,{client:_,bilingual:x==null?void 0:x.bilingual,sessionInfo:g[_.id]},_.id))}),d.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400",children:[d.jsxs("span",{children:[S*St+1,"–",S*St+R.length," of"," ",p.length]}),v>1&&d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>f(_=>Math.max(0,_-1)),disabled:S===0,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 disabled:hover:border-gray-700 transition-colors",children:"← Prev"}),d.jsxs("span",{className:"text-gray-500",children:["Page ",S+1," of ",v]}),d.jsx("button",{onClick:()=>f(_=>Math.min(v-1,_+1)),disabled:S>=v-1,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 disabled:hover:border-gray-700 transition-colors",children:"Next →"})]})]})]})]})]})}function dw(){return d.jsx(D0,{children:d.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-900",children:[d.jsxs("nav",{className:"bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center",children:[d.jsx("div",{className:"flex items-center justify-center mr-12 h-[90px] w-[85px]",children:d.jsx("img",{src:"/VALD-automator/FIT_LOGO.png",alt:"Fit Logo",className:"h-[49px] w-auto object-contain translate-x-[6px]"})}),d.jsxs("div",{className:"flex gap-1",children:[d.jsx(ur,{to:"/",end:!0,className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"VALD Generation"}),d.jsx(ur,{to:"/bodydot",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Bodydot Generation"}),d.jsx(ur,{to:"/reports",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Reports"})]}),d.jsx("div",{className:"flex-1"}),d.jsx("div",{className:"w-px h-6 bg-gray-700 mx-4"}),d.jsxs("div",{className:"flex gap-1",children:[d.jsx(ur,{to:"/quick",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Generate"}),d.jsx(ur,{to:"/trainers",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Trainers"})]})]}),d.jsx("main",{className:"flex-1 p-6",children:d.jsxs(Lv,{children:[d.jsx(kt,{path:"/",element:d.jsx(B0,{})}),d.jsx(kt,{path:"/reports",element:d.jsx(M0,{})}),d.jsx(kt,{path:"/quick",element:d.jsx(q0,{})}),d.jsx(kt,{path:"/trainers",element:d.jsx(Q0,{})}),d.jsx(kt,{path:"/bodydot",element:d.jsx(uw,{})})]})})]})})}Oo.createRoot(document.getElementById("root")).render(d.jsx(Vl.StrictMode,{children:d.jsx(Iv,{children:d.jsx(dw,{})})}));
