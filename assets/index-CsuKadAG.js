function Nm(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function lu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var su={exports:{}},Ao={},cu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),jm=Symbol.for("react.portal"),Dm=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),zm=Symbol.for("react.suspense"),Mm=Symbol.for("react.memo"),Hm=Symbol.for("react.lazy"),ic=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uu=Object.assign,pu={};function er(e,n,t){this.props=e,this.context=n,this.refs=pu,this.updater=t||du}er.prototype.isReactComponent={};er.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fu(){}fu.prototype=er.prototype;function Gl(e,n,t){this.props=e,this.context=n,this.refs=pu,this.updater=t||du}var ql=Gl.prototype=new fu;ql.constructor=Gl;uu(ql,er.prototype);ql.isPureReactComponent=!0;var lc=Array.isArray,mu=Object.prototype.hasOwnProperty,Wl={current:null},hu={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,n,t){var r,a={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)mu.call(n,r)&&!hu.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Yr,type:e,key:o,ref:i,props:a,_owner:Wl.current}}function $m(e,n){return{$$typeof:Yr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function Km(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var sc=/\/+/g;function oi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Km(""+e.key):n.toString(36)}function ja(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Yr:case jm:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+oi(i,0):r,lc(a)?(t="",e!=null&&(t=e.replace(sc,"$&/")+"/"),ja(a,n,t,"",function(d){return d})):a!=null&&(Yl(a)&&(a=$m(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(sc,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",lc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+oi(o,l);i+=ja(o,n,t,s,a)}else if(s=Um(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+oi(o,l++),i+=ja(o,n,t,s,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function pa(e,n,t){if(e==null)return e;var r=[],a=0;return ja(e,r,"","",function(o){return n.call(t,o,a++)}),r}function Vm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Da={transition:null},Gm={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Da,ReactCurrentOwner:Wl};function vu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:pa,forEach:function(e,n,t){pa(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return pa(e,function(){n++}),n},toArray:function(e){return pa(e,function(n){return n})||[]},only:function(e){if(!Yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=er;H.Fragment=Dm;H.Profiler=Om;H.PureComponent=Gl;H.StrictMode=Pm;H.Suspense=zm;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;H.act=vu;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uu({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Wl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)mu.call(n,s)&&!hu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Yr,type:e.type,key:a,ref:o,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:Bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fm,_context:e},e.Consumer=e};H.createElement=gu;H.createFactory=function(e){var n=gu.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Im,render:e}};H.isValidElement=Yl;H.lazy=function(e){return{$$typeof:Hm,_payload:{_status:-1,_result:e},_init:Vm}};H.memo=function(e,n){return{$$typeof:Mm,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=Da.transition;Da.transition={};try{e()}finally{Da.transition=n}};H.unstable_act=vu;H.useCallback=function(e,n){return je.current.useCallback(e,n)};H.useContext=function(e){return je.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return je.current.useDeferredValue(e)};H.useEffect=function(e,n){return je.current.useEffect(e,n)};H.useId=function(){return je.current.useId()};H.useImperativeHandle=function(e,n,t){return je.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return je.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return je.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return je.current.useMemo(e,n)};H.useReducer=function(e,n,t){return je.current.useReducer(e,n,t)};H.useRef=function(e){return je.current.useRef(e)};H.useState=function(e){return je.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return je.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return je.current.useTransition()};H.version="18.3.1";cu.exports=H;var w=cu.exports;const Ql=lu(w),qm=Nm({__proto__:null,default:Ql},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=w,Ym=Symbol.for("react.element"),Qm=Symbol.for("react.fragment"),Jm=Object.prototype.hasOwnProperty,Xm=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,n,t){var r,a={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Jm.call(n,r)&&!Zm.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Ym,type:e,key:o,ref:i,props:a,_owner:Xm.current}}Ao.Fragment=Qm;Ao.jsx=xu;Ao.jsxs=xu;su.exports=Ao;var c=su.exports,Mi={},yu={exports:{}},Ve={},bu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,P){var j=N.length;N.push(P);e:for(;0<j;){var F=j-1>>>1,B=N[F];if(0<a(B,P))N[F]=P,N[j]=B,j=F;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var P=N[0],j=N.pop();if(j!==P){N[0]=j;e:for(var F=0,B=N.length,se=B>>>1;F<se;){var K=2*(F+1)-1,me=N[K],dn=K+1,qe=N[dn];if(0>a(me,j))dn<B&&0>a(qe,me)?(N[F]=qe,N[dn]=j,F=dn):(N[F]=me,N[K]=j,F=K);else if(dn<B&&0>a(qe,j))N[F]=qe,N[dn]=j,F=dn;else break e}}return P}function a(N,P){var j=N.sortIndex-P.sortIndex;return j!==0?j:N.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],d=[],u=1,f=null,g=3,y=!1,p=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var P=t(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=N)r(d),P.sortIndex=P.expirationTime,n(s,P);else break;P=t(d)}}function x(N){if(b=!1,h(N),!p)if(t(s)!==null)p=!0,Y(k);else{var P=t(d);P!==null&&Le(x,P.startTime-N)}}function k(N,P){p=!1,b&&(b=!1,v(A),A=-1),y=!0;var j=g;try{for(h(P),f=t(s);f!==null&&(!(f.expirationTime>P)||N&&!W());){var F=f.callback;if(typeof F=="function"){f.callback=null,g=f.priorityLevel;var B=F(f.expirationTime<=P);P=e.unstable_now(),typeof B=="function"?f.callback=B:f===t(s)&&r(s),h(P)}else r(s);f=t(s)}if(f!==null)var se=!0;else{var K=t(d);K!==null&&Le(x,K.startTime-P),se=!1}return se}finally{f=null,g=j,y=!1}}var _=!1,L=null,A=-1,R=5,C=-1;function W(){return!(e.unstable_now()-C<R)}function fe(){if(L!==null){var N=e.unstable_now();C=N;var P=!0;try{P=L(!0,N)}finally{P?G():(_=!1,L=null)}}else _=!1}var G;if(typeof m=="function")G=function(){m(fe)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,le=M.port2;M.port1.onmessage=fe,G=function(){le.postMessage(null)}}else G=function(){S(fe,0)};function Y(N){L=N,_||(_=!0,G())}function Le(N,P){A=S(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){p||y||(p=!0,Y(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var j=g;g=P;try{return N()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=g;g=N;try{return P()}finally{g=j}},e.unstable_scheduleCallback=function(N,P,j){var F=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=j+B,N={id:u++,callback:P,priorityLevel:N,startTime:j,expirationTime:B,sortIndex:-1},j>F?(N.sortIndex=j,n(d,N),t(s)===null&&N===t(d)&&(b?(v(A),A=-1):b=!0,Le(x,j-F))):(N.sortIndex=B,n(s,N),p||y||(p=!0,Y(k))),N},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(N){var P=g;return function(){var j=g;g=P;try{return N.apply(this,arguments)}finally{g=j}}}})(wu);bu.exports=wu;var eh=bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=w,Ke=eh;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Su=new Set,Tr={};function vt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Tr[e]=n,e=0;e<n.length;e++)Su.add(n[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hi=Object.prototype.hasOwnProperty,th=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cc={},dc={};function rh(e){return Hi.call(dc,e)?!0:Hi.call(cc,e)?!1:th.test(e)?dc[e]=!0:(cc[e]=!0,!1)}function ah(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oh(e,n,t,r){if(n===null||typeof n>"u"||ah(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function De(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Se[n]=new De(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Jl,Xl);Se[n]=new De(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Jl,Xl);Se[n]=new De(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Jl,Xl);Se[n]=new De(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,n,t,r){var a=Se.hasOwnProperty(n)?Se[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(oh(n,t,a,r)&&(t=null),r||a===null?rh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Tn=nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),At=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),Ui=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),$i=Symbol.for("react.suspense"),Ki=Symbol.for("react.suspense_list"),ts=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),uc=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ii;function gr(e){if(ii===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ii=n&&n[1]||""}return`
`+ii+e}var li=!1;function si(e,n){if(!e||li)return"";li=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var s=`
`+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{li=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?gr(e):""}function ih(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function Vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case At:return"Portal";case Ui:return"Profiler";case es:return"StrictMode";case $i:return"Suspense";case Ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eu:return(e.displayName||"Context")+".Consumer";case ku:return(e._context.displayName||"Context")+".Provider";case ns:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ts:return n=e.displayName||null,n!==null?n:Vi(e.type)||"Memo";case Nn:n=e._payload,e=e._init;try{return Vi(e(n))}catch{}}return null}function lh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vi(n);case 8:return n===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Au(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sh(e){var n=Au(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ma(e){e._valueTracker||(e._valueTracker=sh(e))}function Ru(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Au(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gi(e,n){var t=n.checked;return re({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=qn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Lu(e,n){n=n.checked,n!=null&&Zl(e,"checked",n,!1)}function qi(e,n){Lu(e,n);var t=qn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Wi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Wi(e,n.type,qn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Wi(e,n,t){(n!=="number"||qa(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vr=Array.isArray;function It(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+qn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Yi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return re({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(vr(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:qn(t)}}function Tu(e,n){var t=qn(n.value),r=qn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function hc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Cu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ch=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){ch.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),br[n]=br[e]})});function ju(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||br.hasOwnProperty(e)&&br[e]?(""+n).trim():n+"px"}function Du(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=ju(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var dh=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ji(e,n){if(n){if(dh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function Xi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,zt=null,Mt=null;function gc(e){if(e=Xr(e)){if(typeof el!="function")throw Error(T(280));var n=e.stateNode;n&&(n=No(n),el(e.stateNode,e.type,n))}}function Pu(e){zt?Mt?Mt.push(e):Mt=[e]:zt=e}function Ou(){if(zt){var e=zt,n=Mt;if(Mt=zt=null,gc(e),n)for(e=0;e<n.length;e++)gc(n[e])}}function Fu(e,n){return e(n)}function Bu(){}var ci=!1;function Iu(e,n,t){if(ci)return e(n,t);ci=!0;try{return Fu(e,n,t)}finally{ci=!1,(zt!==null||Mt!==null)&&(Bu(),Ou())}}function Nr(e,n){var t=e.stateNode;if(t===null)return null;var r=No(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var nl=!1;if(_n)try{var or={};Object.defineProperty(or,"passive",{get:function(){nl=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{nl=!1}function uh(e,n,t,r,a,o,i,l,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(u){this.onError(u)}}var wr=!1,Wa=null,Ya=!1,tl=null,ph={onError:function(e){wr=!0,Wa=e}};function fh(e,n,t,r,a,o,i,l,s){wr=!1,Wa=null,uh.apply(ph,arguments)}function mh(e,n,t,r,a,o,i,l,s){if(fh.apply(this,arguments),wr){if(wr){var d=Wa;wr=!1,Wa=null}else throw Error(T(198));Ya||(Ya=!0,tl=d)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vc(e){if(xt(e)!==e)throw Error(T(188))}function hh(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return vc(a),e;if(o===r)return vc(a),n;o=o.sibling}throw Error(T(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,l=a.child;l;){if(l===t){i=!0,t=a,r=o;break}if(l===r){i=!0,r=a,t=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===t){i=!0,t=o,r=a;break}if(l===r){i=!0,r=o,t=a;break}l=l.sibling}if(!i)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Mu(e){return e=hh(e),e!==null?Hu(e):null}function Hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Hu(e);if(n!==null)return n;e=e.sibling}return null}var Uu=Ke.unstable_scheduleCallback,xc=Ke.unstable_cancelCallback,gh=Ke.unstable_shouldYield,vh=Ke.unstable_requestPaint,de=Ke.unstable_now,xh=Ke.unstable_getCurrentPriorityLevel,as=Ke.unstable_ImmediatePriority,$u=Ke.unstable_UserBlockingPriority,Qa=Ke.unstable_NormalPriority,yh=Ke.unstable_LowPriority,Ku=Ke.unstable_IdlePriority,Ro=null,vn=null;function bh(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:kh,wh=Math.log,Sh=Math.LN2;function kh(e){return e>>>=0,e===0?32:31-(wh(e)/Sh|0)|0}var ga=64,va=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ja(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~a;l!==0?r=xr(l):(o&=i,o!==0&&(r=xr(o)))}else i=t&~a,i!==0?r=xr(i):o!==0&&(r=xr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-on(n),a=1<<t,r|=e[t],n&=~a;return r}function Eh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _h(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-on(o),l=1<<i,s=a[i];s===-1?(!(l&t)||l&r)&&(a[i]=Eh(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function di(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Qr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function Ah(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-on(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function os(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-on(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var $=0;function Gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qu,is,Wu,Yu,Qu,al=!1,xa=[],In=null,zn=null,Mn=null,jr=new Map,Dr=new Map,Dn=[],Rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,n){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":jr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(n.pointerId)}}function ir(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=Xr(n),n!==null&&is(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Lh(e,n,t,r,a){switch(n){case"focusin":return In=ir(In,e,n,t,r,a),!0;case"dragenter":return zn=ir(zn,e,n,t,r,a),!0;case"mouseover":return Mn=ir(Mn,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return jr.set(o,ir(jr.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Dr.set(o,ir(Dr.get(o)||null,e,n,t,r,a)),!0}return!1}function Ju(e){var n=rt(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=zu(t),n!==null){e.blockedOn=n,Qu(e.priority,function(){Wu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ol(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Zi=r,t.target.dispatchEvent(r),Zi=null}else return n=Xr(t),n!==null&&is(n),e.blockedOn=t,!1;n.shift()}return!0}function bc(e,n,t){Pa(e)&&t.delete(n)}function Th(){al=!1,In!==null&&Pa(In)&&(In=null),zn!==null&&Pa(zn)&&(zn=null),Mn!==null&&Pa(Mn)&&(Mn=null),jr.forEach(bc),Dr.forEach(bc)}function lr(e,n){e.blockedOn===n&&(e.blockedOn=null,al||(al=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Th)))}function Pr(e){function n(a){return lr(a,e)}if(0<xa.length){lr(xa[0],e);for(var t=1;t<xa.length;t++){var r=xa[t];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&lr(In,e),zn!==null&&lr(zn,e),Mn!==null&&lr(Mn,e),jr.forEach(n),Dr.forEach(n),t=0;t<Dn.length;t++)r=Dn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(t=Dn[0],t.blockedOn===null);)Ju(t),t.blockedOn===null&&Dn.shift()}var Ht=Tn.ReactCurrentBatchConfig,Xa=!0;function Ch(e,n,t,r){var a=$,o=Ht.transition;Ht.transition=null;try{$=1,ls(e,n,t,r)}finally{$=a,Ht.transition=o}}function Nh(e,n,t,r){var a=$,o=Ht.transition;Ht.transition=null;try{$=4,ls(e,n,t,r)}finally{$=a,Ht.transition=o}}function ls(e,n,t,r){if(Xa){var a=ol(e,n,t,r);if(a===null)bi(e,n,r,Za,t),yc(e,r);else if(Lh(a,e,n,t,r))r.stopPropagation();else if(yc(e,r),n&4&&-1<Rh.indexOf(e)){for(;a!==null;){var o=Xr(a);if(o!==null&&qu(o),o=ol(e,n,t,r),o===null&&bi(e,n,r,Za,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else bi(e,n,r,null,t)}}var Za=null;function ol(e,n,t,r){if(Za=null,e=rs(r),e=rt(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Za=e,null}function Xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xh()){case as:return 1;case $u:return 4;case Qa:case yh:return 16;case Ku:return 536870912;default:return 16}default:return 16}}var On=null,ss=null,Oa=null;function Zu(){if(Oa)return Oa;var e,n=ss,t=n.length,r,a="value"in On?On.value:On.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return Oa=a.slice(e,1<r?1-r:void 0)}function Fa(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ya(){return!0}function wc(){return!1}function Ge(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ya:wc,this.isPropagationStopped=wc,this}return re(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Ge(nr),Jr=re({},nr,{view:0,detail:0}),jh=Ge(Jr),ui,pi,sr,Lo=re({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(ui=e.screenX-sr.screenX,pi=e.screenY-sr.screenY):pi=ui=0,sr=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Sc=Ge(Lo),Dh=re({},Lo,{dataTransfer:0}),Ph=Ge(Dh),Oh=re({},Jr,{relatedTarget:0}),fi=Ge(Oh),Fh=re({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=Ge(Fh),Ih=re({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=Ge(Ih),Mh=re({},nr,{data:0}),kc=Ge(Mh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$h[e])?!!n[e]:!1}function ds(){return Kh}var Vh=re({},Jr,{key:function(e){if(e.key){var n=Hh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=Ge(Vh),qh=re({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Ge(qh),Wh=re({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Yh=Ge(Wh),Qh=re({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=Ge(Qh),Xh=re({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zh=Ge(Xh),eg=[9,13,27,32],us=_n&&"CompositionEvent"in window,Sr=null;_n&&"documentMode"in document&&(Sr=document.documentMode);var ng=_n&&"TextEvent"in window&&!Sr,ep=_n&&(!us||Sr&&8<Sr&&11>=Sr),_c=" ",Ac=!1;function np(e,n){switch(e){case"keyup":return eg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function tg(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:(Ac=!0,_c);case"textInput":return e=n.data,e===_c&&Ac?null:e;default:return null}}function rg(e,n){if(Lt)return e==="compositionend"||!us&&np(e,n)?(e=Zu(),Oa=ss=On=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ag[e.type]:n==="textarea"}function rp(e,n,t,r){Pu(r),n=eo(n,"onChange"),0<n.length&&(t=new cs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var kr=null,Or=null;function og(e){mp(e,0)}function To(e){var n=Nt(e);if(Ru(n))return e}function ig(e,n){if(e==="change")return n}var ap=!1;if(_n){var mi;if(_n){var hi="oninput"in document;if(!hi){var Lc=document.createElement("div");Lc.setAttribute("oninput","return;"),hi=typeof Lc.oninput=="function"}mi=hi}else mi=!1;ap=mi&&(!document.documentMode||9<document.documentMode)}function Tc(){kr&&(kr.detachEvent("onpropertychange",op),Or=kr=null)}function op(e){if(e.propertyName==="value"&&To(Or)){var n=[];rp(n,Or,e,rs(e)),Iu(og,n)}}function lg(e,n,t){e==="focusin"?(Tc(),kr=n,Or=t,kr.attachEvent("onpropertychange",op)):e==="focusout"&&Tc()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Or)}function cg(e,n){if(e==="click")return To(n)}function dg(e,n){if(e==="input"||e==="change")return To(n)}function ug(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:ug;function Fr(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Hi.call(n,a)||!sn(e[a],n[a]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,n){var t=Cc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Cc(t)}}function ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lp(){for(var e=window,n=qa();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qa(e.document)}return n}function ps(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pg(e){var n=lp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ip(t.ownerDocument.documentElement,t)){if(r!==null&&ps(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Nc(t,o);var i=Nc(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fg=_n&&"documentMode"in document&&11>=document.documentMode,Tt=null,il=null,Er=null,ll=!1;function jc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ll||Tt==null||Tt!==qa(r)||(r=Tt,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Fr(Er,r)||(Er=r,r=eo(il,"onSelect"),0<r.length&&(n=new cs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tt)))}function ba(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},gi={},sp={};_n&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function Co(e){if(gi[e])return gi[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in sp)return gi[e]=n[t];return e}var cp=Co("animationend"),dp=Co("animationiteration"),up=Co("animationstart"),pp=Co("transitionend"),fp=new Map,Dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,n){fp.set(e,n),vt(n,[e])}for(var vi=0;vi<Dc.length;vi++){var xi=Dc[vi],mg=xi.toLowerCase(),hg=xi[0].toUpperCase()+xi.slice(1);Yn(mg,"on"+hg)}Yn(cp,"onAnimationEnd");Yn(dp,"onAnimationIteration");Yn(up,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(pp,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Pc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,mh(r,n,void 0,e),e.currentTarget=null}function mp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Pc(a,l,d),o=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Pc(a,l,d),o=s}}}if(Ya)throw e=tl,Ya=!1,tl=null,e}function Q(e,n){var t=n[pl];t===void 0&&(t=n[pl]=new Set);var r=e+"__bubble";t.has(r)||(hp(n,e,2,!1),t.add(r))}function yi(e,n,t){var r=0;n&&(r|=4),hp(t,e,r,n)}var wa="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[wa]){e[wa]=!0,Su.forEach(function(t){t!=="selectionchange"&&(gg.has(t)||yi(t,!1,e),yi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wa]||(n[wa]=!0,yi("selectionchange",!1,n))}}function hp(e,n,t,r){switch(Xu(n)){case 1:var a=Ch;break;case 4:a=Nh;break;default:a=ls}t=a.bind(null,n,t,e),a=void 0,!nl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function bi(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;i=i.return}for(;l!==null;){if(i=rt(l),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}l=l.parentNode}}r=r.return}Iu(function(){var d=o,u=rs(t),f=[];e:{var g=fp.get(e);if(g!==void 0){var y=cs,p=e;switch(e){case"keypress":if(Fa(t)===0)break e;case"keydown":case"keyup":y=Gh;break;case"focusin":p="focus",y=fi;break;case"focusout":p="blur",y=fi;break;case"beforeblur":case"afterblur":y=fi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yh;break;case cp:case dp:case up:y=Bh;break;case pp:y=Jh;break;case"scroll":y=jh;break;case"wheel":y=Zh;break;case"copy":case"cut":case"paste":y=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ec}var b=(n&4)!==0,S=!b&&e==="scroll",v=b?g!==null?g+"Capture":null:g;b=[];for(var m=d,h;m!==null;){h=m;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,v!==null&&(x=Nr(m,v),x!=null&&b.push(Ir(m,x,h)))),S)break;m=m.return}0<b.length&&(g=new y(g,p,null,t,u),f.push({event:g,listeners:b}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&t!==Zi&&(p=t.relatedTarget||t.fromElement)&&(rt(p)||p[An]))break e;if((y||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,y?(p=t.relatedTarget||t.toElement,y=d,p=p?rt(p):null,p!==null&&(S=xt(p),p!==S||p.tag!==5&&p.tag!==6)&&(p=null)):(y=null,p=d),y!==p)){if(b=Sc,x="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ec,x="onPointerLeave",v="onPointerEnter",m="pointer"),S=y==null?g:Nt(y),h=p==null?g:Nt(p),g=new b(x,m+"leave",y,t,u),g.target=S,g.relatedTarget=h,x=null,rt(u)===d&&(b=new b(v,m+"enter",p,t,u),b.target=h,b.relatedTarget=S,x=b),S=x,y&&p)n:{for(b=y,v=p,m=0,h=b;h;h=Et(h))m++;for(h=0,x=v;x;x=Et(x))h++;for(;0<m-h;)b=Et(b),m--;for(;0<h-m;)v=Et(v),h--;for(;m--;){if(b===v||v!==null&&b===v.alternate)break n;b=Et(b),v=Et(v)}b=null}else b=null;y!==null&&Oc(f,g,y,b,!1),p!==null&&S!==null&&Oc(f,S,p,b,!0)}}e:{if(g=d?Nt(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=ig;else if(Rc(g))if(ap)k=dg;else{k=sg;var _=lg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=cg);if(k&&(k=k(e,d))){rp(f,k,t,u);break e}_&&_(e,g,d),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Wi(g,"number",g.value)}switch(_=d?Nt(d):window,e){case"focusin":(Rc(_)||_.contentEditable==="true")&&(Tt=_,il=d,Er=null);break;case"focusout":Er=il=Tt=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,jc(f,t,u);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":jc(f,t,u)}var L;if(us)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Lt?np(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(ep&&t.locale!=="ko"&&(Lt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Lt&&(L=Zu()):(On=u,ss="value"in On?On.value:On.textContent,Lt=!0)),_=eo(d,A),0<_.length&&(A=new kc(A,e,null,t,u),f.push({event:A,listeners:_}),L?A.data=L:(L=tp(t),L!==null&&(A.data=L)))),(L=ng?tg(e,t):rg(e,t))&&(d=eo(d,"onBeforeInput"),0<d.length&&(u=new kc("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:d}),u.data=L))}mp(f,n)})}function Ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function eo(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Nr(e,t),o!=null&&r.unshift(Ir(e,o,a)),o=Nr(e,n),o!=null&&r.push(Ir(e,o,a))),e=e.return}return r}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oc(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var l=t,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,a?(s=Nr(t,o),s!=null&&i.unshift(Ir(t,s,l))):a||(s=Nr(t,o),s!=null&&i.push(Ir(t,s,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var vg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function Fc(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(xg,"")}function Sa(e,n,t){if(n=Fc(n),Fc(e)!==n&&t)throw Error(T(425))}function no(){}var sl=null,cl=null;function dl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ul=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,Bc=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Bc<"u"?function(e){return Bc.resolve(null).then(e).catch(wg)}:ul;function wg(e){setTimeout(function(){throw e})}function wi(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Pr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Pr(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),hn="__reactFiber$"+tr,zr="__reactProps$"+tr,An="__reactContainer$"+tr,pl="__reactEvents$"+tr,Sg="__reactListeners$"+tr,kg="__reactHandles$"+tr;function rt(e){var n=e[hn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[An]||t[hn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ic(e);e!==null;){if(t=e[hn])return t;e=Ic(e)}return n}e=t,t=e.parentNode}return null}function Xr(e){return e=e[hn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function No(e){return e[zr]||null}var fl=[],jt=-1;function Qn(e){return{current:e}}function X(e){0>jt||(e.current=fl[jt],fl[jt]=null,jt--)}function q(e,n){jt++,fl[jt]=e.current,e.current=n}var Wn={},Re=Qn(Wn),Fe=Qn(!1),dt=Wn;function Vt(e,n){var t=e.type.contextTypes;if(!t)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Be(e){return e=e.childContextTypes,e!=null}function to(){X(Fe),X(Re)}function zc(e,n,t){if(Re.current!==Wn)throw Error(T(168));q(Re,n),q(Fe,t)}function gp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(T(108,lh(e)||"Unknown",a));return re({},t,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,dt=Re.current,q(Re,e),q(Fe,Fe.current),!0}function Mc(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=gp(e,n,dt),r.__reactInternalMemoizedMergedChildContext=e,X(Fe),X(Re),q(Re,e)):X(Fe),q(Fe,t)}var wn=null,jo=!1,Si=!1;function vp(e){wn===null?wn=[e]:wn.push(e)}function Eg(e){jo=!0,vp(e)}function Jn(){if(!Si&&wn!==null){Si=!0;var e=0,n=$;try{var t=wn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}wn=null,jo=!1}catch(a){throw wn!==null&&(wn=wn.slice(e+1)),Uu(as,Jn),a}finally{$=n,Si=!1}}return null}var Dt=[],Pt=0,ao=null,oo=0,Ye=[],Qe=0,ut=null,Sn=1,kn="";function Zn(e,n){Dt[Pt++]=oo,Dt[Pt++]=ao,ao=e,oo=n}function xp(e,n,t){Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=ut,ut=e;var r=Sn;e=kn;var a=32-on(r)-1;r&=~(1<<a),t+=1;var o=32-on(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Sn=1<<32-on(n)+a|t<<a|r,kn=o+e}else Sn=1<<o|t<<a|r,kn=e}function fs(e){e.return!==null&&(Zn(e,1),xp(e,1,0))}function ms(e){for(;e===ao;)ao=Dt[--Pt],Dt[Pt]=null,oo=Dt[--Pt],Dt[Pt]=null;for(;e===ut;)ut=Ye[--Qe],Ye[Qe]=null,kn=Ye[--Qe],Ye[Qe]=null,Sn=Ye[--Qe],Ye[Qe]=null}var $e=null,Ue=null,Z=!1,an=null;function yp(e,n){var t=Je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Hc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,Ue=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ut!==null?{id:Sn,overflow:kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,Ue=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hl(e){if(Z){var n=Ue;if(n){var t=n;if(!Hc(e,n)){if(ml(e))throw Error(T(418));n=Hn(t.nextSibling);var r=$e;n&&Hc(e,n)?yp(r,t):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(ml(e))throw Error(T(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function ka(e){if(e!==$e)return!1;if(!Z)return Uc(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!dl(e.type,e.memoizedProps)),n&&(n=Ue)){if(ml(e))throw bp(),Error(T(418));for(;n;)yp(e,n),n=Hn(n.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Hn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=$e?Hn(e.stateNode.nextSibling):null;return!0}function bp(){for(var e=Ue;e;)e=Hn(e.nextSibling)}function Gt(){Ue=$e=null,Z=!1}function hs(e){an===null?an=[e]:an.push(e)}var _g=Tn.ReactCurrentBatchConfig;function cr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function Ea(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $c(e){var n=e._init;return n(e._payload)}function wp(e){function n(v,m){if(e){var h=v.deletions;h===null?(v.deletions=[m],v.flags|=16):h.push(m)}}function t(v,m){if(!e)return null;for(;m!==null;)n(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=Vn(v,m),v.index=0,v.sibling=null,v}function o(v,m,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<m?(v.flags|=2,m):h):(v.flags|=2,m)):(v.flags|=1048576,m)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,m,h,x){return m===null||m.tag!==6?(m=Ti(h,v.mode,x),m.return=v,m):(m=a(m,h),m.return=v,m)}function s(v,m,h,x){var k=h.type;return k===Rt?u(v,m,h.props.children,x,h.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nn&&$c(k)===m.type)?(x=a(m,h.props),x.ref=cr(v,m,h),x.return=v,x):(x=$a(h.type,h.key,h.props,null,v.mode,x),x.ref=cr(v,m,h),x.return=v,x)}function d(v,m,h,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Ci(h,v.mode,x),m.return=v,m):(m=a(m,h.children||[]),m.return=v,m)}function u(v,m,h,x,k){return m===null||m.tag!==7?(m=st(h,v.mode,x,k),m.return=v,m):(m=a(m,h),m.return=v,m)}function f(v,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ti(""+m,v.mode,h),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:return h=$a(m.type,m.key,m.props,null,v.mode,h),h.ref=cr(v,null,m),h.return=v,h;case At:return m=Ci(m,v.mode,h),m.return=v,m;case Nn:var x=m._init;return f(v,x(m._payload),h)}if(vr(m)||ar(m))return m=st(m,v.mode,h,null),m.return=v,m;Ea(v,m)}return null}function g(v,m,h,x){var k=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(v,m,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fa:return h.key===k?s(v,m,h,x):null;case At:return h.key===k?d(v,m,h,x):null;case Nn:return k=h._init,g(v,m,k(h._payload),x)}if(vr(h)||ar(h))return k!==null?null:u(v,m,h,x,null);Ea(v,h)}return null}function y(v,m,h,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(h)||null,l(m,v,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fa:return v=v.get(x.key===null?h:x.key)||null,s(m,v,x,k);case At:return v=v.get(x.key===null?h:x.key)||null,d(m,v,x,k);case Nn:var _=x._init;return y(v,m,h,_(x._payload),k)}if(vr(x)||ar(x))return v=v.get(h)||null,u(m,v,x,k,null);Ea(m,x)}return null}function p(v,m,h,x){for(var k=null,_=null,L=m,A=m=0,R=null;L!==null&&A<h.length;A++){L.index>A?(R=L,L=null):R=L.sibling;var C=g(v,L,h[A],x);if(C===null){L===null&&(L=R);break}e&&L&&C.alternate===null&&n(v,L),m=o(C,m,A),_===null?k=C:_.sibling=C,_=C,L=R}if(A===h.length)return t(v,L),Z&&Zn(v,A),k;if(L===null){for(;A<h.length;A++)L=f(v,h[A],x),L!==null&&(m=o(L,m,A),_===null?k=L:_.sibling=L,_=L);return Z&&Zn(v,A),k}for(L=r(v,L);A<h.length;A++)R=y(L,v,A,h[A],x),R!==null&&(e&&R.alternate!==null&&L.delete(R.key===null?A:R.key),m=o(R,m,A),_===null?k=R:_.sibling=R,_=R);return e&&L.forEach(function(W){return n(v,W)}),Z&&Zn(v,A),k}function b(v,m,h,x){var k=ar(h);if(typeof k!="function")throw Error(T(150));if(h=k.call(h),h==null)throw Error(T(151));for(var _=k=null,L=m,A=m=0,R=null,C=h.next();L!==null&&!C.done;A++,C=h.next()){L.index>A?(R=L,L=null):R=L.sibling;var W=g(v,L,C.value,x);if(W===null){L===null&&(L=R);break}e&&L&&W.alternate===null&&n(v,L),m=o(W,m,A),_===null?k=W:_.sibling=W,_=W,L=R}if(C.done)return t(v,L),Z&&Zn(v,A),k;if(L===null){for(;!C.done;A++,C=h.next())C=f(v,C.value,x),C!==null&&(m=o(C,m,A),_===null?k=C:_.sibling=C,_=C);return Z&&Zn(v,A),k}for(L=r(v,L);!C.done;A++,C=h.next())C=y(L,v,A,C.value,x),C!==null&&(e&&C.alternate!==null&&L.delete(C.key===null?A:C.key),m=o(C,m,A),_===null?k=C:_.sibling=C,_=C);return e&&L.forEach(function(fe){return n(v,fe)}),Z&&Zn(v,A),k}function S(v,m,h,x){if(typeof h=="object"&&h!==null&&h.type===Rt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fa:e:{for(var k=h.key,_=m;_!==null;){if(_.key===k){if(k=h.type,k===Rt){if(_.tag===7){t(v,_.sibling),m=a(_,h.props.children),m.return=v,v=m;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nn&&$c(k)===_.type){t(v,_.sibling),m=a(_,h.props),m.ref=cr(v,_,h),m.return=v,v=m;break e}t(v,_);break}else n(v,_);_=_.sibling}h.type===Rt?(m=st(h.props.children,v.mode,x,h.key),m.return=v,v=m):(x=$a(h.type,h.key,h.props,null,v.mode,x),x.ref=cr(v,m,h),x.return=v,v=x)}return i(v);case At:e:{for(_=h.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){t(v,m.sibling),m=a(m,h.children||[]),m.return=v,v=m;break e}else{t(v,m);break}else n(v,m);m=m.sibling}m=Ci(h,v.mode,x),m.return=v,v=m}return i(v);case Nn:return _=h._init,S(v,m,_(h._payload),x)}if(vr(h))return p(v,m,h,x);if(ar(h))return b(v,m,h,x);Ea(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(t(v,m.sibling),m=a(m,h),m.return=v,v=m):(t(v,m),m=Ti(h,v.mode,x),m.return=v,v=m),i(v)):t(v,m)}return S}var qt=wp(!0),Sp=wp(!1),io=Qn(null),lo=null,Ot=null,gs=null;function vs(){gs=Ot=lo=null}function xs(e){var n=io.current;X(io),e._currentValue=n}function gl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ut(e,n){lo=e,gs=Ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Oe=!0),e.firstContext=null)}function Ze(e){var n=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:n,next:null},Ot===null){if(lo===null)throw Error(T(308));Ot=e,lo.dependencies={lanes:0,firstContext:e}}else Ot=Ot.next=e;return n}var at=null;function ys(e){at===null?at=[e]:at.push(e)}function kp(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ys(n)):(t.next=a.next,a.next=t),n.interleaved=t,Rn(e,r)}function Rn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Rn(e,t)}return a=r.interleaved,a===null?(n.next=n,ys(r)):(n.next=a.next,a.next=n),r.interleaved=n,Rn(e,t)}function Ba(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,os(e,t)}}function Kc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function so(e,n,t,r){var a=e.updateQueue;jn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,d=s.next;s.next=null,i===null?o=d:i.next=d,i=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==i&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=s))}if(o!==null){var f=a.baseState;i=0,u=d=s=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){u!==null&&(u=u.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,b=l;switch(g=n,y=t,b.tag){case 1:if(p=b.payload,typeof p=="function"){f=p.call(y,f,g);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=b.payload,g=typeof p=="function"?p.call(y,f,g):p,g==null)break e;f=re({},f,g);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=y,s=f):u=u.next=y,i|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(u===null&&(s=f),a.baseState=s,a.firstBaseUpdate=d,a.lastBaseUpdate=u,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);ft|=i,e.lanes=i,e.memoizedState=f}}function Vc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(T(191,a));a.call(r)}}}var Zr={},xn=Qn(Zr),Mr=Qn(Zr),Hr=Qn(Zr);function ot(e){if(e===Zr)throw Error(T(174));return e}function ws(e,n){switch(q(Hr,n),q(Mr,e),q(xn,Zr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Qi(n,e)}X(xn),q(xn,n)}function Wt(){X(xn),X(Mr),X(Hr)}function _p(e){ot(Hr.current);var n=ot(xn.current),t=Qi(n,e.type);n!==t&&(q(Mr,e),q(xn,t))}function Ss(e){Mr.current===e&&(X(xn),X(Mr))}var ne=Qn(0);function co(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=[];function ks(){for(var e=0;e<ki.length;e++)ki[e]._workInProgressVersionPrimary=null;ki.length=0}var Ia=Tn.ReactCurrentDispatcher,Ei=Tn.ReactCurrentBatchConfig,pt=0,te=null,he=null,ve=null,uo=!1,_r=!1,Ur=0,Ag=0;function ke(){throw Error(T(321))}function Es(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function _s(e,n,t,r,a,o){if(pt=o,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ia.current=e===null||e.memoizedState===null?Cg:Ng,e=t(r,a),_r){o=0;do{if(_r=!1,Ur=0,25<=o)throw Error(T(301));o+=1,ve=he=null,n.updateQueue=null,Ia.current=jg,e=t(r,a)}while(_r)}if(Ia.current=po,n=he!==null&&he.next!==null,pt=0,ve=he=te=null,uo=!1,n)throw Error(T(300));return e}function As(){var e=Ur!==0;return Ur=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?te.memoizedState=ve=e:ve=ve.next=e,ve}function en(){if(he===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=ve===null?te.memoizedState:ve.next;if(n!==null)ve=n,he=e;else{if(e===null)throw Error(T(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?te.memoizedState=ve=e:ve=ve.next=e}return ve}function $r(e,n){return typeof n=="function"?n(e):n}function _i(e){var n=en(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=he,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=i=null,s=null,d=o;do{var u=d.lane;if((pt&u)===u)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=f,i=r):s=s.next=f,te.lanes|=u,ft|=u}d=d.next}while(d!==null&&d!==o);s===null?i=r:s.next=l,sn(r,n.memoizedState)||(Oe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,te.lanes|=o,ft|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ai(e){var n=en(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);sn(o,n.memoizedState)||(Oe=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Ap(){}function Rp(e,n){var t=te,r=en(),a=n(),o=!sn(r.memoizedState,a);if(o&&(r.memoizedState=a,Oe=!0),r=r.queue,Rs(Cp.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ve!==null&&ve.memoizedState.tag&1){if(t.flags|=2048,Kr(9,Tp.bind(null,t,r,a,n),void 0,null),xe===null)throw Error(T(349));pt&30||Lp(t,n,a)}return a}function Lp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Tp(e,n,t,r){n.value=t,n.getSnapshot=r,Np(n)&&jp(e)}function Cp(e,n,t){return t(function(){Np(n)&&jp(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function jp(e){var n=Rn(e,1);n!==null&&ln(n,e,1,-1)}function Gc(e){var n=mn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},n.queue=e,e=e.dispatch=Tg.bind(null,te,e),[n.memoizedState,e]}function Kr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=te.updateQueue,n===null?(n={lastEffect:null,stores:null},te.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Dp(){return en().memoizedState}function za(e,n,t,r){var a=mn();te.flags|=e,a.memoizedState=Kr(1|n,t,void 0,r===void 0?null:r)}function Do(e,n,t,r){var a=en();r=r===void 0?null:r;var o=void 0;if(he!==null){var i=he.memoizedState;if(o=i.destroy,r!==null&&Es(r,i.deps)){a.memoizedState=Kr(n,t,o,r);return}}te.flags|=e,a.memoizedState=Kr(1|n,t,o,r)}function qc(e,n){return za(8390656,8,e,n)}function Rs(e,n){return Do(2048,8,e,n)}function Pp(e,n){return Do(4,2,e,n)}function Op(e,n){return Do(4,4,e,n)}function Fp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bp(e,n,t){return t=t!=null?t.concat([e]):null,Do(4,4,Fp.bind(null,n,e),t)}function Ls(){}function Ip(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Es(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zp(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Es(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Mp(e,n,t){return pt&21?(sn(t,n)||(t=Vu(),te.lanes|=t,ft|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=t)}function Rg(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=Ei.transition;Ei.transition={};try{e(!1),n()}finally{$=t,Ei.transition=r}}function Hp(){return en().memoizedState}function Lg(e,n,t){var r=Kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Up(e))$p(n,t);else if(t=kp(e,n,t,r),t!==null){var a=Ne();ln(t,e,r,a),Kp(t,n,r)}}function Tg(e,n,t){var r=Kn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Up(e))$p(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,l=o(i,t);if(a.hasEagerState=!0,a.eagerState=l,sn(l,i)){var s=n.interleaved;s===null?(a.next=a,ys(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=kp(e,n,a,r),t!==null&&(a=Ne(),ln(t,e,r,a),Kp(t,n,r))}}function Up(e){var n=e.alternate;return e===te||n!==null&&n===te}function $p(e,n){_r=uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Kp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,os(e,t)}}var po={readContext:Ze,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Cg={readContext:Ze,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:Ze,useEffect:qc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,za(4194308,4,Fp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return za(4194308,4,e,n)},useInsertionEffect:function(e,n){return za(4,2,e,n)},useMemo:function(e,n){var t=mn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=mn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Lg.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:Gc,useDebugValue:Ls,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Gc(!1),n=e[0];return e=Rg.bind(null,e[1]),mn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=te,a=mn();if(Z){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),xe===null)throw Error(T(349));pt&30||Lp(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,qc(Cp.bind(null,r,o,e),[e]),r.flags|=2048,Kr(9,Tp.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=mn(),n=xe.identifierPrefix;if(Z){var t=kn,r=Sn;t=(r&~(1<<32-on(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ur++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ag++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ng={readContext:Ze,useCallback:Ip,useContext:Ze,useEffect:Rs,useImperativeHandle:Bp,useInsertionEffect:Pp,useLayoutEffect:Op,useMemo:zp,useReducer:_i,useRef:Dp,useState:function(){return _i($r)},useDebugValue:Ls,useDeferredValue:function(e){var n=en();return Mp(n,he.memoizedState,e)},useTransition:function(){var e=_i($r)[0],n=en().memoizedState;return[e,n]},useMutableSource:Ap,useSyncExternalStore:Rp,useId:Hp,unstable_isNewReconciler:!1},jg={readContext:Ze,useCallback:Ip,useContext:Ze,useEffect:Rs,useImperativeHandle:Bp,useInsertionEffect:Pp,useLayoutEffect:Op,useMemo:zp,useReducer:Ai,useRef:Dp,useState:function(){return Ai($r)},useDebugValue:Ls,useDeferredValue:function(e){var n=en();return he===null?n.memoizedState=e:Mp(n,he.memoizedState,e)},useTransition:function(){var e=Ai($r)[0],n=en().memoizedState;return[e,n]},useMutableSource:Ap,useSyncExternalStore:Rp,useId:Hp,unstable_isNewReconciler:!1};function tn(e,n){if(e&&e.defaultProps){n=re({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function vl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:re({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Po={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=Kn(e),o=En(r,a);o.payload=n,t!=null&&(o.callback=t),n=Un(e,o,a),n!==null&&(ln(n,e,a,r),Ba(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),a=Kn(e),o=En(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Un(e,o,a),n!==null&&(ln(n,e,a,r),Ba(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=Kn(e),a=En(t,r);a.tag=2,n!=null&&(a.callback=n),n=Un(e,a,r),n!==null&&(ln(n,e,r,t),Ba(n,e,r))}};function Wc(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Fr(t,r)||!Fr(a,o):!0}function Vp(e,n,t){var r=!1,a=Wn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(a=Be(n)?dt:Re.current,r=n.contextTypes,o=(r=r!=null)?Vt(e,a):Wn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Po,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Yc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Po.enqueueReplaceState(n,n.state,null)}function xl(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},bs(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=Ze(o):(o=Be(n)?dt:Re.current,a.context=Vt(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(vl(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Po.enqueueReplaceState(a,a.state,null),so(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Yt(e,n){try{var t="",r=n;do t+=ih(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function Ri(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function yl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Dg=typeof WeakMap=="function"?WeakMap:Map;function Gp(e,n,t){t=En(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){mo||(mo=!0,Tl=r),yl(e,n)},t}function qp(e,n,t){t=En(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){yl(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){yl(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Qc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Dg;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=qg.bind(null,e,n,t),n.then(e,e))}function Jc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xc(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=En(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e)}var Pg=Tn.ReactCurrentOwner,Oe=!1;function Te(e,n,t,r){n.child=e===null?Sp(n,null,t,r):qt(n,e.child,t,r)}function Zc(e,n,t,r,a){t=t.render;var o=n.ref;return Ut(n,a),r=_s(e,n,t,r,o,a),t=As(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ln(e,n,a)):(Z&&t&&fs(n),n.flags|=1,Te(e,n,r,a),n.child)}function ed(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!Fs(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Wp(e,n,o,r,a)):(e=$a(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Fr,t(i,r)&&e.ref===n.ref)return Ln(e,n,a)}return n.flags|=1,e=Vn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Wp(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===n.ref)if(Oe=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Oe=!0);else return n.lanes=e.lanes,Ln(e,n,a)}return bl(e,n,t,r,a)}function Yp(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Bt,He),He|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(Bt,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,q(Bt,He),He|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,q(Bt,He),He|=r;return Te(e,n,a,t),n.child}function Qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bl(e,n,t,r,a){var o=Be(t)?dt:Re.current;return o=Vt(n,o),Ut(n,a),t=_s(e,n,t,r,o,a),r=As(),e!==null&&!Oe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ln(e,n,a)):(Z&&r&&fs(n),n.flags|=1,Te(e,n,t,a),n.child)}function nd(e,n,t,r,a){if(Be(t)){var o=!0;ro(n)}else o=!1;if(Ut(n,a),n.stateNode===null)Ma(e,n),Vp(n,t,r),xl(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var s=i.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ze(d):(d=Be(t)?dt:Re.current,d=Vt(n,d));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Yc(n,i,r,d),jn=!1;var g=n.memoizedState;i.state=g,so(n,r,i,a),s=n.memoizedState,l!==r||g!==s||Fe.current||jn?(typeof u=="function"&&(vl(n,t,u,r),s=n.memoizedState),(l=jn||Wc(n,t,l,r,g,s,d))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=d,r=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Ep(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:tn(n.type,l),i.props=d,f=n.pendingProps,g=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ze(s):(s=Be(t)?dt:Re.current,s=Vt(n,s));var y=t.getDerivedStateFromProps;(u=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==s)&&Yc(n,i,r,s),jn=!1,g=n.memoizedState,i.state=g,so(n,r,i,a);var p=n.memoizedState;l!==f||g!==p||Fe.current||jn?(typeof y=="function"&&(vl(n,t,y,r),p=n.memoizedState),(d=jn||Wc(n,t,d,r,g,p,s)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,p,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,p,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=p),i.props=r,i.state=p,i.context=s,r=d):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return wl(e,n,t,r,o,a)}function wl(e,n,t,r,a,o){Qp(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&Mc(n,t,!1),Ln(e,n,o);r=n.stateNode,Pg.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=qt(n,e.child,null,o),n.child=qt(n,null,l,o)):Te(e,n,l,o),n.memoizedState=r.state,a&&Mc(n,t,!0),n.child}function Jp(e){var n=e.stateNode;n.pendingContext?zc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&zc(e,n.context,!1),ws(e,n.containerInfo)}function td(e,n,t,r,a){return Gt(),hs(a),n.flags|=256,Te(e,n,t,r),n.child}var Sl={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xp(e,n,t){var r=n.pendingProps,a=ne.current,o=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(ne,a&1),e===null)return hl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Bo(i,r,0,null),e=st(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=kl(t),n.memoizedState=Sl,e):Ts(n,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Og(e,n,i,r,l,a,t);if(o){o=r.fallback,i=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Vn(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Vn(l,o):(o=st(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?kl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Sl,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ts(e,n){return n=Bo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _a(e,n,t,r){return r!==null&&hs(r),qt(n,e.child,null,t),e=Ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Og(e,n,t,r,a,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Ri(Error(T(422))),_a(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=Bo({mode:"visible",children:r.children},a,0,null),o=st(o,a,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&qt(n,e.child,null,i),n.child.memoizedState=kl(i),n.memoizedState=Sl,o);if(!(n.mode&1))return _a(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(T(419)),r=Ri(o,r,void 0),_a(e,n,i,r)}if(l=(i&e.childLanes)!==0,Oe||l){if(r=xe,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Rn(e,a),ln(r,e,a,-1))}return Os(),r=Ri(Error(T(421))),_a(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Wg.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,Ue=Hn(a.nextSibling),$e=n,Z=!0,an=null,e!==null&&(Ye[Qe++]=Sn,Ye[Qe++]=kn,Ye[Qe++]=ut,Sn=e.id,kn=e.overflow,ut=n),n=Ts(n,r.children),n.flags|=4096,n)}function rd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gl(e.return,n,t)}function Li(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function Zp(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(Te(e,n,r.children,t),r=ne.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,t,n);else if(e.tag===19)rd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ne,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&co(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Li(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&co(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Li(n,!0,t,null,o);break;case"together":Li(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ma(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ln(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ft|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=Vn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Vn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fg(e,n,t){switch(n.tag){case 3:Jp(n),Gt();break;case 5:_p(n);break;case 1:Be(n.type)&&ro(n);break;case 4:ws(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;q(io,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(ne,ne.current&1),n.flags|=128,null):t&n.child.childLanes?Xp(e,n,t):(q(ne,ne.current&1),e=Ln(e,n,t),e!==null?e.sibling:null);q(ne,ne.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Zp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(ne,ne.current),r)break;return null;case 22:case 23:return n.lanes=0,Yp(e,n,t)}return Ln(e,n,t)}var ef,El,nf,tf;ef=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};El=function(){};nf=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,ot(xn.current);var o=null;switch(t){case"input":a=Gi(e,a),r=Gi(e,r),o=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":a=Yi(e,a),r=Yi(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=no)}Ji(t,r);var i;t=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&Q("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};tf=function(e,n,t,r){t!==r&&(n.flags|=4)};function dr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Bg(e,n,t){var r=n.pendingProps;switch(ms(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return Be(n.type)&&to(),Ee(n),null;case 3:return r=n.stateNode,Wt(),X(Fe),X(Re),ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ka(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,an!==null&&(jl(an),an=null))),El(e,n),Ee(n),null;case 5:Ss(n);var a=ot(Hr.current);if(t=n.type,e!==null&&n.stateNode!=null)nf(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(T(166));return Ee(n),null}if(e=ot(xn.current),ka(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[hn]=n,r[zr]=o,e=(n.mode&1)!==0,t){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(a=0;a<yr.length;a++)Q(yr[a],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":pc(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":mc(r,o),Q("invalid",r)}Ji(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,l,e),a=["children",""+l]):Tr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Q("scroll",r)}switch(t){case"input":ma(r),fc(r,o,!0);break;case"textarea":ma(r),hc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=no)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[hn]=n,e[zr]=r,ef(e,n,!1,!1),n.stateNode=e;e:{switch(i=Xi(t,r),t){case"dialog":Q("cancel",e),Q("close",e),a=r;break;case"iframe":case"object":case"embed":Q("load",e),a=r;break;case"video":case"audio":for(a=0;a<yr.length;a++)Q(yr[a],e);a=r;break;case"source":Q("error",e),a=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),a=r;break;case"details":Q("toggle",e),a=r;break;case"input":pc(e,r),a=Gi(e,r),Q("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":mc(e,r),a=Yi(e,r),Q("invalid",e);break;default:a=r}Ji(t,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Du(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Nu(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Q("scroll",e):s!=null&&Zl(e,o,s,i))}switch(t){case"input":ma(e),fc(e,r,!1);break;case"textarea":ma(e),hc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?It(e,!!r.multiple,o,!1):r.defaultValue!=null&&It(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=no)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)tf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));if(t=ot(Hr.current),ot(xn.current),ka(n)){if(r=n.stateNode,t=n.memoizedProps,r[hn]=n,(o=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:Sa(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[hn]=n,n.stateNode=r}return Ee(n),null;case 13:if(X(ne),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ue!==null&&n.mode&1&&!(n.flags&128))bp(),Gt(),n.flags|=98560,o=!1;else if(o=ka(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[hn]=n}else Gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ee(n),o=!1}else an!==null&&(jl(an),an=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ne.current&1?ge===0&&(ge=3):Os())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return Wt(),El(e,n),e===null&&Br(n.stateNode.containerInfo),Ee(n),null;case 10:return xs(n.type._context),Ee(n),null;case 17:return Be(n.type)&&to(),Ee(n),null;case 19:if(X(ne),o=n.memoizedState,o===null)return Ee(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)dr(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=co(e),i!==null){for(n.flags|=128,dr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(ne,ne.current&1|2),n.child}e=e.sibling}o.tail!==null&&de()>Qt&&(n.flags|=128,r=!0,dr(o,!1),n.lanes=4194304)}else{if(!r)if(e=co(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Z)return Ee(n),null}else 2*de()-o.renderingStartTime>Qt&&t!==1073741824&&(n.flags|=128,r=!0,dr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=de(),n.sibling=null,t=ne.current,q(ne,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return Ps(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?He&1073741824&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function Ig(e,n){switch(ms(n),n.tag){case 1:return Be(n.type)&&to(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wt(),X(Fe),X(Re),ks(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ss(n),null;case 13:if(X(ne),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));Gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(ne),null;case 4:return Wt(),null;case 10:return xs(n.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var Aa=!1,_e=!1,zg=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ft(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){oe(e,n,r)}else t.current=null}function _l(e,n,t){try{t()}catch(r){oe(e,n,r)}}var ad=!1;function Mg(e,n){if(sl=Xa,e=lp(),ps(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,l=-1,s=-1,d=0,u=0,f=e,g=null;n:for(;;){for(var y;f!==t||a!==0&&f.nodeType!==3||(l=i+a),f!==o||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break n;if(g===t&&++d===a&&(l=i),g===o&&++u===r&&(s=i),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(cl={focusedElem:e,selectionRange:t},Xa=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var p=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var b=p.memoizedProps,S=p.memoizedState,v=n.stateNode,m=v.getSnapshotBeforeUpdate(n.elementType===n.type?b:tn(n.type,b),S);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(x){oe(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return p=ad,ad=!1,p}function Ar(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&_l(n,t,o)}a=a.next}while(a!==r)}}function Oo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Al(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function rf(e){var n=e.alternate;n!==null&&(e.alternate=null,rf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[hn],delete n[zr],delete n[pl],delete n[Sg],delete n[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function af(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=no));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,n,t),e=e.sibling;e!==null;)Rl(e,n,t),e=e.sibling}function Ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ll(e,n,t),e=e.sibling;e!==null;)Ll(e,n,t),e=e.sibling}var be=null,rn=!1;function Cn(e,n,t){for(t=t.child;t!==null;)of(e,n,t),t=t.sibling}function of(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Ro,t)}catch{}switch(t.tag){case 5:_e||Ft(t,n);case 6:var r=be,a=rn;be=null,Cn(e,n,t),be=r,rn=a,be!==null&&(rn?(e=be,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):be.removeChild(t.stateNode));break;case 18:be!==null&&(rn?(e=be,t=t.stateNode,e.nodeType===8?wi(e.parentNode,t):e.nodeType===1&&wi(e,t),Pr(e)):wi(be,t.stateNode));break;case 4:r=be,a=rn,be=t.stateNode.containerInfo,rn=!0,Cn(e,n,t),be=r,rn=a;break;case 0:case 11:case 14:case 15:if(!_e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&_l(t,n,i),a=a.next}while(a!==r)}Cn(e,n,t);break;case 1:if(!_e&&(Ft(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){oe(t,n,l)}Cn(e,n,t);break;case 21:Cn(e,n,t);break;case 22:t.mode&1?(_e=(r=_e)||t.memoizedState!==null,Cn(e,n,t),_e=r):Cn(e,n,t);break;default:Cn(e,n,t)}}function id(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zg),n.forEach(function(r){var a=Yg.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function nn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,rn=!1;break e;case 3:be=l.stateNode.containerInfo,rn=!0;break e;case 4:be=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(be===null)throw Error(T(160));of(o,i,a),be=null,rn=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(d){oe(a,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)lf(n,e),n=n.sibling}function lf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(n,e),pn(e),r&4){try{Ar(3,e,e.return),Oo(3,e)}catch(b){oe(e,e.return,b)}try{Ar(5,e,e.return)}catch(b){oe(e,e.return,b)}}break;case 1:nn(n,e),pn(e),r&512&&t!==null&&Ft(t,t.return);break;case 5:if(nn(n,e),pn(e),r&512&&t!==null&&Ft(t,t.return),e.flags&32){var a=e.stateNode;try{Cr(a,"")}catch(b){oe(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Lu(a,o),Xi(l,i);var d=Xi(l,o);for(i=0;i<s.length;i+=2){var u=s[i],f=s[i+1];u==="style"?Du(a,f):u==="dangerouslySetInnerHTML"?Nu(a,f):u==="children"?Cr(a,f):Zl(a,u,f,d)}switch(l){case"input":qi(a,o);break;case"textarea":Tu(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?It(a,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?It(a,!!o.multiple,o.defaultValue,!0):It(a,!!o.multiple,o.multiple?[]:"",!1))}a[zr]=o}catch(b){oe(e,e.return,b)}}break;case 6:if(nn(n,e),pn(e),r&4){if(e.stateNode===null)throw Error(T(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){oe(e,e.return,b)}}break;case 3:if(nn(n,e),pn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(b){oe(e,e.return,b)}break;case 4:nn(n,e),pn(e);break;case 13:nn(n,e),pn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(js=de())),r&4&&id(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(_e=(d=_e)||u,nn(n,e),_e=d):nn(n,e),pn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(f=O=u;O!==null;){switch(g=O,y=g.child,g.tag){case 0:case 11:case 14:case 15:Ar(4,g,g.return);break;case 1:Ft(g,g.return);var p=g.stateNode;if(typeof p.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,p.props=n.memoizedProps,p.state=n.memoizedState,p.componentWillUnmount()}catch(b){oe(r,t,b)}}break;case 5:Ft(g,g.return);break;case 22:if(g.memoizedState!==null){sd(f);continue}}y!==null?(y.return=g,O=y):sd(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{a=f.stateNode,d?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ju("display",i))}catch(b){oe(e,e.return,b)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){oe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nn(n,e),pn(e),r&4&&id(e);break;case 21:break;default:nn(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(af(t)){var r=t;break e}t=t.return}throw Error(T(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Cr(a,""),r.flags&=-33);var o=od(e);Ll(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=od(e);Rl(e,l,i);break;default:throw Error(T(161))}}catch(s){oe(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hg(e,n,t){O=e,sf(e)}function sf(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var a=O,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Aa;if(!i){var l=a.alternate,s=l!==null&&l.memoizedState!==null||_e;l=Aa;var d=_e;if(Aa=i,(_e=s)&&!d)for(O=a;O!==null;)i=O,s=i.child,i.tag===22&&i.memoizedState!==null?cd(a):s!==null?(s.return=i,O=s):cd(a);for(;o!==null;)O=o,sf(o),o=o.sibling;O=a,Aa=l,_e=d}ld(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,O=o):ld(e)}}function ld(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:_e||Oo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!_e)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:tn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Vc(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Vc(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Pr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}_e||n.flags&512&&Al(n)}catch(g){oe(n,n.return,g)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function sd(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function cd(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Oo(4,n)}catch(s){oe(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){oe(n,a,s)}}var o=n.return;try{Al(n)}catch(s){oe(n,o,s)}break;case 5:var i=n.return;try{Al(n)}catch(s){oe(n,i,s)}}}catch(s){oe(n,n.return,s)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var Ug=Math.ceil,fo=Tn.ReactCurrentDispatcher,Cs=Tn.ReactCurrentOwner,Xe=Tn.ReactCurrentBatchConfig,U=0,xe=null,pe=null,we=0,He=0,Bt=Qn(0),ge=0,Vr=null,ft=0,Fo=0,Ns=0,Rr=null,Pe=null,js=0,Qt=1/0,bn=null,mo=!1,Tl=null,$n=null,Ra=!1,Fn=null,ho=0,Lr=0,Cl=null,Ha=-1,Ua=0;function Ne(){return U&6?de():Ha!==-1?Ha:Ha=de()}function Kn(e){return e.mode&1?U&2&&we!==0?we&-we:_g.transition!==null?(Ua===0&&(Ua=Vu()),Ua):(e=$,e!==0||(e=window.event,e=e===void 0?16:Xu(e.type)),e):1}function ln(e,n,t,r){if(50<Lr)throw Lr=0,Cl=null,Error(T(185));Qr(e,t,r),(!(U&2)||e!==xe)&&(e===xe&&(!(U&2)&&(Fo|=t),ge===4&&Pn(e,we)),Ie(e,r),t===1&&U===0&&!(n.mode&1)&&(Qt=de()+500,jo&&Jn()))}function Ie(e,n){var t=e.callbackNode;_h(e,n);var r=Ja(e,e===xe?we:0);if(r===0)t!==null&&xc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&xc(t),n===1)e.tag===0?Eg(dd.bind(null,e)):vp(dd.bind(null,e)),bg(function(){!(U&6)&&Jn()}),t=null;else{switch(Gu(r)){case 1:t=as;break;case 4:t=$u;break;case 16:t=Qa;break;case 536870912:t=Ku;break;default:t=Qa}t=gf(t,cf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function cf(e,n){if(Ha=-1,Ua=0,U&6)throw Error(T(327));var t=e.callbackNode;if($t()&&e.callbackNode!==t)return null;var r=Ja(e,e===xe?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=go(e,r);else{n=r;var a=U;U|=2;var o=uf();(xe!==e||we!==n)&&(bn=null,Qt=de()+500,lt(e,n));do try{Vg();break}catch(l){df(e,l)}while(!0);vs(),fo.current=o,U=a,pe!==null?n=0:(xe=null,we=0,n=ge)}if(n!==0){if(n===2&&(a=rl(e),a!==0&&(r=a,n=Nl(e,a))),n===1)throw t=Vr,lt(e,0),Pn(e,r),Ie(e,de()),t;if(n===6)Pn(e,r);else{if(a=e.current.alternate,!(r&30)&&!$g(a)&&(n=go(e,r),n===2&&(o=rl(e),o!==0&&(r=o,n=Nl(e,o))),n===1))throw t=Vr,lt(e,0),Pn(e,r),Ie(e,de()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(T(345));case 2:et(e,Pe,bn);break;case 3:if(Pn(e,r),(r&130023424)===r&&(n=js+500-de(),10<n)){if(Ja(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ul(et.bind(null,e,Pe,bn),n);break}et(e,Pe,bn);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-on(r);o=1<<i,i=n[i],i>a&&(a=i),r&=~o}if(r=a,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ug(r/1960))-r,10<r){e.timeoutHandle=ul(et.bind(null,e,Pe,bn),r);break}et(e,Pe,bn);break;case 5:et(e,Pe,bn);break;default:throw Error(T(329))}}}return Ie(e,de()),e.callbackNode===t?cf.bind(null,e):null}function Nl(e,n){var t=Rr;return e.current.memoizedState.isDehydrated&&(lt(e,n).flags|=256),e=go(e,n),e!==2&&(n=Pe,Pe=t,n!==null&&jl(n)),e}function jl(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function $g(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!sn(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pn(e,n){for(n&=~Ns,n&=~Fo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),r=1<<t;e[t]=-1,n&=~r}}function dd(e){if(U&6)throw Error(T(327));$t();var n=Ja(e,0);if(!(n&1))return Ie(e,de()),null;var t=go(e,n);if(e.tag!==0&&t===2){var r=rl(e);r!==0&&(n=r,t=Nl(e,r))}if(t===1)throw t=Vr,lt(e,0),Pn(e,n),Ie(e,de()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,et(e,Pe,bn),Ie(e,de()),null}function Ds(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(Qt=de()+500,jo&&Jn())}}function mt(e){Fn!==null&&Fn.tag===0&&!(U&6)&&$t();var n=U;U|=1;var t=Xe.transition,r=$;try{if(Xe.transition=null,$=1,e)return e()}finally{$=r,Xe.transition=t,U=n,!(U&6)&&Jn()}}function Ps(){He=Bt.current,X(Bt)}function lt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yg(t)),pe!==null)for(t=pe.return;t!==null;){var r=t;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:Wt(),X(Fe),X(Re),ks();break;case 5:Ss(r);break;case 4:Wt();break;case 13:X(ne);break;case 19:X(ne);break;case 10:xs(r.type._context);break;case 22:case 23:Ps()}t=t.return}if(xe=e,pe=e=Vn(e.current,null),we=He=n,ge=0,Vr=null,Ns=Fo=ft=0,Pe=Rr=null,at!==null){for(n=0;n<at.length;n++)if(t=at[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}at=null}return e}function df(e,n){do{var t=pe;try{if(vs(),Ia.current=po,uo){for(var r=te.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}uo=!1}if(pt=0,ve=he=te=null,_r=!1,Ur=0,Cs.current=null,t===null||t.return===null){ge=1,Vr=n,pe=null;break}e:{var o=e,i=t.return,l=t,s=n;if(n=we,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,u=l,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Jc(i);if(y!==null){y.flags&=-257,Xc(y,i,l,o,n),y.mode&1&&Qc(o,d,n),n=y,s=d;var p=n.updateQueue;if(p===null){var b=new Set;b.add(s),n.updateQueue=b}else p.add(s);break e}else{if(!(n&1)){Qc(o,d,n),Os();break e}s=Error(T(426))}}else if(Z&&l.mode&1){var S=Jc(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Xc(S,i,l,o,n),hs(Yt(s,l));break e}}o=s=Yt(s,l),ge!==4&&(ge=2),Rr===null?Rr=[o]:Rr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var v=Gp(o,s,n);Kc(o,v);break e;case 1:l=s;var m=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($n===null||!$n.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=qp(o,l,n);Kc(o,x);break e}}o=o.return}while(o!==null)}ff(t)}catch(k){n=k,pe===t&&t!==null&&(pe=t=t.return);continue}break}while(!0)}function uf(){var e=fo.current;return fo.current=po,e===null?po:e}function Os(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(ft&268435455)&&!(Fo&268435455)||Pn(xe,we)}function go(e,n){var t=U;U|=2;var r=uf();(xe!==e||we!==n)&&(bn=null,lt(e,n));do try{Kg();break}catch(a){df(e,a)}while(!0);if(vs(),U=t,fo.current=r,pe!==null)throw Error(T(261));return xe=null,we=0,ge}function Kg(){for(;pe!==null;)pf(pe)}function Vg(){for(;pe!==null&&!gh();)pf(pe)}function pf(e){var n=hf(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?ff(e):pe=n,Cs.current=null}function ff(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ig(t,n),t!==null){t.flags&=32767,pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(t=Bg(t,n,He),t!==null){pe=t;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);ge===0&&(ge=5)}function et(e,n,t){var r=$,a=Xe.transition;try{Xe.transition=null,$=1,Gg(e,n,t,r)}finally{Xe.transition=a,$=r}return null}function Gg(e,n,t,r){do $t();while(Fn!==null);if(U&6)throw Error(T(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ah(e,o),e===xe&&(pe=xe=null,we=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ra||(Ra=!0,gf(Qa,function(){return $t(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Xe.transition,Xe.transition=null;var i=$;$=1;var l=U;U|=4,Cs.current=null,Mg(e,t),lf(t,e),pg(cl),Xa=!!sl,cl=sl=null,e.current=t,Hg(t),vh(),U=l,$=i,Xe.transition=o}else e.current=t;if(Ra&&(Ra=!1,Fn=e,ho=a),o=e.pendingLanes,o===0&&($n=null),bh(t.stateNode),Ie(e,de()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(mo)throw mo=!1,e=Tl,Tl=null,e;return ho&1&&e.tag!==0&&$t(),o=e.pendingLanes,o&1?e===Cl?Lr++:(Lr=0,Cl=e):Lr=0,Jn(),null}function $t(){if(Fn!==null){var e=Gu(ho),n=Xe.transition,t=$;try{if(Xe.transition=null,$=16>e?16:e,Fn===null)var r=!1;else{if(e=Fn,Fn=null,ho=0,U&6)throw Error(T(331));var a=U;for(U|=4,O=e.current;O!==null;){var o=O,i=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(O=d;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:Ar(8,u,o)}var f=u.child;if(f!==null)f.return=u,O=f;else for(;O!==null;){u=O;var g=u.sibling,y=u.return;if(rf(u),u===d){O=null;break}if(g!==null){g.return=y,O=g;break}O=y}}}var p=o.alternate;if(p!==null){var b=p.child;if(b!==null){p.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}O=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,O=i;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,O=v;break e}O=o.return}}var m=e.current;for(O=m;O!==null;){i=O;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,O=h;else e:for(i=m;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Oo(9,l)}}catch(k){oe(l,l.return,k)}if(l===i){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(U=a,Jn(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Ro,e)}catch{}r=!0}return r}finally{$=t,Xe.transition=n}}return!1}function ud(e,n,t){n=Yt(t,n),n=Gp(e,n,1),e=Un(e,n,1),n=Ne(),e!==null&&(Qr(e,1,n),Ie(e,n))}function oe(e,n,t){if(e.tag===3)ud(e,e,t);else for(;n!==null;){if(n.tag===3){ud(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Yt(t,e),e=qp(n,e,1),n=Un(n,e,1),e=Ne(),n!==null&&(Qr(n,1,e),Ie(n,e));break}}n=n.return}}function qg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,xe===e&&(we&t)===t&&(ge===4||ge===3&&(we&130023424)===we&&500>de()-js?lt(e,0):Ns|=t),Ie(e,n)}function mf(e,n){n===0&&(e.mode&1?(n=va,va<<=1,!(va&130023424)&&(va=4194304)):n=1);var t=Ne();e=Rn(e,n),e!==null&&(Qr(e,n,t),Ie(e,t))}function Wg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),mf(e,t)}function Yg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(n),mf(e,t)}var hf;hf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Fe.current)Oe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Oe=!1,Fg(e,n,t);Oe=!!(e.flags&131072)}else Oe=!1,Z&&n.flags&1048576&&xp(n,oo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ma(e,n),e=n.pendingProps;var a=Vt(n,Re.current);Ut(n,t),a=_s(null,n,r,e,a,t);var o=As();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(o=!0,ro(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,bs(n),a.updater=Po,n.stateNode=a,a._reactInternals=n,xl(n,r,e,t),n=wl(null,n,r,!0,o,t)):(n.tag=0,Z&&o&&fs(n),Te(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ma(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=Jg(r),e=tn(r,e),a){case 0:n=bl(null,n,r,e,t);break e;case 1:n=nd(null,n,r,e,t);break e;case 11:n=Zc(null,n,r,e,t);break e;case 14:n=ed(null,n,r,tn(r.type,e),t);break e}throw Error(T(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),bl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),nd(e,n,r,a,t);case 3:e:{if(Jp(n),e===null)throw Error(T(387));r=n.pendingProps,o=n.memoizedState,a=o.element,Ep(e,n),so(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Yt(Error(T(423)),n),n=td(e,n,r,t,a);break e}else if(r!==a){a=Yt(Error(T(424)),n),n=td(e,n,r,t,a);break e}else for(Ue=Hn(n.stateNode.containerInfo.firstChild),$e=n,Z=!0,an=null,t=Sp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),r===a){n=Ln(e,n,t);break e}Te(e,n,r,t)}n=n.child}return n;case 5:return _p(n),e===null&&hl(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,dl(r,a)?i=null:o!==null&&dl(r,o)&&(n.flags|=32),Qp(e,n),Te(e,n,i,t),n.child;case 6:return e===null&&hl(n),null;case 13:return Xp(e,n,t);case 4:return ws(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):Te(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Zc(e,n,r,a,t);case 7:return Te(e,n,n.pendingProps,t),n.child;case 8:return Te(e,n,n.pendingProps.children,t),n.child;case 12:return Te(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,q(io,r._currentValue),r._currentValue=i,o!==null)if(sn(o.value,i)){if(o.children===a.children&&!Fe.current){n=Ln(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=En(-1,t&-t),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?s.next=s:(s.next=u.next,u.next=s),d.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),gl(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(T(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),gl(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Te(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ut(n,t),a=Ze(a),r=r(a),n.flags|=1,Te(e,n,r,t),n.child;case 14:return r=n.type,a=tn(r,n.pendingProps),a=tn(r.type,a),ed(e,n,r,a,t);case 15:return Wp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:tn(r,a),Ma(e,n),n.tag=1,Be(r)?(e=!0,ro(n)):e=!1,Ut(n,t),Vp(n,r,a),xl(n,r,a,t),wl(null,n,r,!0,e,t);case 19:return Zp(e,n,t);case 22:return Yp(e,n,t)}throw Error(T(156,n.tag))};function gf(e,n){return Uu(e,n)}function Qg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,n,t,r){return new Qg(e,n,t,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===ts)return 14}return 2}function Vn(e,n){var t=e.alternate;return t===null?(t=Je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $a(e,n,t,r,a,o){var i=2;if(r=e,typeof e=="function")Fs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Rt:return st(t.children,a,o,n);case es:i=8,a|=8;break;case Ui:return e=Je(12,t,n,a|2),e.elementType=Ui,e.lanes=o,e;case $i:return e=Je(13,t,n,a),e.elementType=$i,e.lanes=o,e;case Ki:return e=Je(19,t,n,a),e.elementType=Ki,e.lanes=o,e;case _u:return Bo(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ku:i=10;break e;case Eu:i=9;break e;case ns:i=11;break e;case ts:i=14;break e;case Nn:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=Je(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function st(e,n,t,r){return e=Je(7,e,r,n),e.lanes=t,e}function Bo(e,n,t,r){return e=Je(22,e,r,n),e.elementType=_u,e.lanes=t,e.stateNode={isHidden:!1},e}function Ti(e,n,t){return e=Je(6,e,null,n),e.lanes=t,e}function Ci(e,n,t){return n=Je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xg(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=di(0),this.expirationTimes=di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bs(e,n,t,r,a,o,i,l,s){return e=new Xg(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Je(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(o),e}function Zg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function vf(e){if(!e)return Wn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(Be(t))return gp(e,t,n)}return n}function xf(e,n,t,r,a,o,i,l,s){return e=Bs(t,r,!0,e,a,o,i,l,s),e.context=vf(null),t=e.current,r=Ne(),a=Kn(t),o=En(r,a),o.callback=n??null,Un(t,o,a),e.current.lanes=a,Qr(e,a,r),Ie(e,r),e}function Io(e,n,t,r){var a=n.current,o=Ne(),i=Kn(a);return t=vf(t),n.context===null?n.context=t:n.pendingContext=t,n=En(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Un(a,n,i),e!==null&&(ln(e,a,i,o),Ba(e,a,i)),i}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Is(e,n){pd(e,n),(e=e.alternate)&&pd(e,n)}function ev(){return null}var yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}zo.prototype.render=zs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));Io(e,n,null,null)};zo.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mt(function(){Io(null,e,null,null)}),n[An]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dn.length&&n!==0&&n<Dn[t].priority;t++);Dn.splice(t,0,e),t===0&&Ju(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function nv(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var d=vo(i);o.call(d)}}var i=xf(n,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=i,e[An]=i.current,Br(e.nodeType===8?e.parentNode:e),mt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var d=vo(s);l.call(d)}}var s=Bs(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=s,e[An]=s.current,Br(e.nodeType===8?e.parentNode:e),mt(function(){Io(n,s,t,r)}),s}function Ho(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var s=vo(i);l.call(s)}}Io(n,i,e,a)}else i=nv(t,n,e,a,r);return vo(i)}qu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xr(n.pendingLanes);t!==0&&(os(n,t|1),Ie(n,de()),!(U&6)&&(Qt=de()+500,Jn()))}break;case 13:mt(function(){var r=Rn(e,1);if(r!==null){var a=Ne();ln(r,e,1,a)}}),Is(e,1)}};is=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var t=Ne();ln(n,e,134217728,t)}Is(e,134217728)}};Wu=function(e){if(e.tag===13){var n=Kn(e),t=Rn(e,n);if(t!==null){var r=Ne();ln(t,e,n,r)}Is(e,n)}};Yu=function(){return $};Qu=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};el=function(e,n,t){switch(n){case"input":if(qi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=No(r);if(!a)throw Error(T(90));Ru(r),qi(r,a)}}}break;case"textarea":Tu(e,t);break;case"select":n=t.value,n!=null&&It(e,!!t.multiple,n,!1)}};Fu=Ds;Bu=mt;var tv={usingClientEntryPoint:!1,Events:[Xr,Nt,No,Pu,Ou,Ds]},ur={findFiberByHostInstance:rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rv={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Ro=La.inject(rv),vn=La}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;Ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(n))throw Error(T(200));return Zg(e,n,null,t)};Ve.createRoot=function(e,n){if(!Ms(e))throw Error(T(299));var t=!1,r="",a=yf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Bs(e,1,!1,null,null,t,!1,r,a),e[An]=n.current,Br(e.nodeType===8?e.parentNode:e),new zs(n)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Mu(n),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return mt(e)};Ve.hydrate=function(e,n,t){if(!Mo(n))throw Error(T(200));return Ho(null,e,n,!0,t)};Ve.hydrateRoot=function(e,n,t){if(!Ms(e))throw Error(T(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=yf;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=xf(n,null,e,1,t??null,a,!1,o,i),e[An]=n.current,Br(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new zo(n)};Ve.render=function(e,n,t){if(!Mo(n))throw Error(T(200));return Ho(null,e,n,!1,t)};Ve.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(T(40));return e._reactRootContainer?(mt(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ds;Ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Mo(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ho(e,n,t,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bf)}catch(e){console.error(e)}}bf(),yu.exports=Ve;var av=yu.exports,md=av;Mi.createRoot=md.createRoot,Mi.hydrateRoot=md.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Gr.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const hd="popstate";function ov(e){e===void 0&&(e={});function n(a,o){let{pathname:i="/",search:l="",hash:s=""}=yt(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Dl("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(a,o){let i=a.document.querySelector("base"),l="";if(i&&i.getAttribute("href")){let s=a.location.href,d=s.indexOf("#");l=d===-1?s:s.slice(0,d)}return l+"#"+(typeof o=="string"?o:xo(o))}function r(a,o){Uo(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return lv(n,t,r,e)}function ie(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Uo(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function iv(){return Math.random().toString(36).substr(2,8)}function gd(e,n){return{usr:e.state,key:e.key,idx:n}}function Dl(e,n,t,r){return t===void 0&&(t=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?yt(n):n,{state:t,key:n&&n.key||r||iv()})}function xo(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function yt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function lv(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l=Bn.Pop,s=null,d=u();d==null&&(d=0,i.replaceState(Gr({},i.state,{idx:d}),""));function u(){return(i.state||{idx:null}).idx}function f(){l=Bn.Pop;let S=u(),v=S==null?null:S-d;d=S,s&&s({action:l,location:b.location,delta:v})}function g(S,v){l=Bn.Push;let m=Dl(b.location,S,v);t&&t(m,S),d=u()+1;let h=gd(m,d),x=b.createHref(m);try{i.pushState(h,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(x)}o&&s&&s({action:l,location:b.location,delta:1})}function y(S,v){l=Bn.Replace;let m=Dl(b.location,S,v);t&&t(m,S),d=u();let h=gd(m,d),x=b.createHref(m);i.replaceState(h,"",x),o&&s&&s({action:l,location:b.location,delta:0})}function p(S){let v=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof S=="string"?S:xo(S);return m=m.replace(/ $/,"%20"),ie(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let b={get action(){return l},get location(){return e(a,i)},listen(S){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(hd,f),s=S,()=>{a.removeEventListener(hd,f),s=null}},createHref(S){return n(a,S)},createURL:p,encodeLocation(S){let v=p(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:y,go(S){return i.go(S)}};return b}var vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vd||(vd={}));function sv(e,n,t){return t===void 0&&(t="/"),cv(e,n,t)}function cv(e,n,t,r){let a=typeof n=="string"?yt(n):n,o=Jt(a.pathname||"/",t);if(o==null)return null;let i=wf(e);dv(i);let l=null;for(let s=0;l==null&&s<i.length;++s){let d=wv(o);l=yv(i[s],d)}return l}function wf(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(o,i,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};s.relativePath.startsWith("/")&&(ie(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let d=Gn([r,s.relativePath]),u=t.concat(s);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),wf(o.children,n,u,d)),!(o.path==null&&!o.index)&&n.push({path:d,score:vv(d,o.index),routesMeta:u})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let s of Sf(o.path))a(o,i,s)}),n}function Sf(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let i=Sf(r.join("/")),l=[];return l.push(...i.map(s=>s===""?o:[o,s].join("/"))),a&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function dv(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:xv(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const uv=/^:[\w-]+$/,pv=3,fv=2,mv=1,hv=10,gv=-2,xd=e=>e==="*";function vv(e,n){let t=e.split("/"),r=t.length;return t.some(xd)&&(r+=gv),n&&(r+=fv),t.filter(a=>!xd(a)).reduce((a,o)=>a+(uv.test(o)?pv:o===""?mv:hv),r)}function xv(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function yv(e,n,t){let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],d=l===r.length-1,u=o==="/"?n:n.slice(o.length)||"/",f=Pl({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},u),g=s.route;if(!f)return null;Object.assign(a,f.params),i.push({params:a,pathname:Gn([o,f.pathname]),pathnameBase:Av(Gn([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=Gn([o,f.pathnameBase]))}return i}function Pl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=bv(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((d,u,f)=>{let{paramName:g,isOptional:y}=u;if(g==="*"){let b=l[f]||"";i=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const p=l[f];return y&&!p?d[g]=void 0:d[g]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:i,pattern:e}}function bv(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Uo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function wv(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Uo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Jt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=e=>Sv.test(e);function Ev(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?yt(e):e,o;if(t)if(kv(t))o=t;else{if(t.includes("//")){let i=t;t=t.replace(/\/\/+/g,"/"),Uo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+t))}t.startsWith("/")?o=yd(t.substring(1),"/"):o=yd(t,n)}else o=n;return{pathname:o,search:Rv(r),hash:Lv(a)}}function yd(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Ni(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _v(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function kf(e,n){let t=_v(e);return n?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ef(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=yt(e):(a=Gr({},e),ie(!a.pathname||!a.pathname.includes("?"),Ni("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),Ni("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),Ni("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=t;else{let f=n.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}l=f>=0?n[f]:"/"}let s=Ev(a,l),d=i&&i!=="/"&&i.endsWith("/"),u=(o||i===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(d||u)&&(s.pathname+="/"),s}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),Av=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _f=["post","put","patch","delete"];new Set(_f);const Cv=["get",..._f];new Set(Cv);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qr.apply(this,arguments)}const $o=w.createContext(null),Af=w.createContext(null),Xn=w.createContext(null),Ko=w.createContext(null),bt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Rf=w.createContext(null);function Nv(e,n){let{relative:t}=n===void 0?{}:n;ea()||ie(!1);let{basename:r,navigator:a}=w.useContext(Xn),{hash:o,pathname:i,search:l}=Vo(e,{relative:t}),s=i;return r!=="/"&&(s=i==="/"?r:Gn([r,i])),a.createHref({pathname:s,search:l,hash:o})}function ea(){return w.useContext(Ko)!=null}function na(){return ea()||ie(!1),w.useContext(Ko).location}function Lf(e){w.useContext(Xn).static||w.useLayoutEffect(e)}function jv(){let{isDataRoute:e}=w.useContext(bt);return e?Vv():Dv()}function Dv(){ea()||ie(!1);let e=w.useContext($o),{basename:n,future:t,navigator:r}=w.useContext(Xn),{matches:a}=w.useContext(bt),{pathname:o}=na(),i=JSON.stringify(kf(a,t.v7_relativeSplatPath)),l=w.useRef(!1);return Lf(()=>{l.current=!0}),w.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let f=Ef(d,JSON.parse(i),o,u.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Gn([n,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[n,r,i,o,e])}function Vo(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(Xn),{matches:a}=w.useContext(bt),{pathname:o}=na(),i=JSON.stringify(kf(a,r.v7_relativeSplatPath));return w.useMemo(()=>Ef(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function Pv(e,n){return Ov(e,n)}function Ov(e,n,t,r){ea()||ie(!1);let{navigator:a}=w.useContext(Xn),{matches:o}=w.useContext(bt),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let d=na(),u;if(n){var f;let S=typeof n=="string"?yt(n):n;s==="/"||(f=S.pathname)!=null&&f.startsWith(s)||ie(!1),u=S}else u=d;let g=u.pathname||"/",y=g;if(s!=="/"){let S=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let p=sv(e,{pathname:y}),b=Mv(p&&p.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Gn([s,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:Gn([s,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,t,r);return n&&b?w.createElement(Ko.Provider,{value:{location:qr({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bn.Pop}},b):b}function Fv(){let e=Kv(),n=Tv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:a},t):null,null)}const Bv=w.createElement(Fv,null);class Iv extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(bt.Provider,{value:this.props.routeContext},w.createElement(Rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zv(e){let{routeContext:n,match:t,children:r}=e,a=w.useContext($o);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(bt.Provider,{value:n},r)}function Mv(e,n,t,r){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var o;if(!t)return null;if(t.errors)e=t.matches;else if((o=r)!=null&&o.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let i=e,l=(a=t)==null?void 0:a.errors;if(l!=null){let u=i.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);u>=0||ie(!1),i=i.slice(0,Math.min(i.length,u+1))}let s=!1,d=-1;if(t&&r&&r.v7_partialHydration)for(let u=0;u<i.length;u++){let f=i[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:g,errors:y}=t,p=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||p){s=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((u,f,g)=>{let y,p=!1,b=null,S=null;t&&(y=l&&f.route.id?l[f.route.id]:void 0,b=f.route.errorElement||Bv,s&&(d<0&&g===0?(Gv("route-fallback"),p=!0,S=null):d===g&&(p=!0,S=f.route.hydrateFallbackElement||null)));let v=n.concat(i.slice(0,g+1)),m=()=>{let h;return y?h=b:p?h=S:f.route.Component?h=w.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=u,w.createElement(zv,{match:f,routeContext:{outlet:u,matches:v,isDataRoute:t!=null},children:h})};return t&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?w.createElement(Iv,{location:t.location,revalidation:t.revalidation,component:b,error:y,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Tf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Tf||{}),Cf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cf||{});function Hv(e){let n=w.useContext($o);return n||ie(!1),n}function Uv(e){let n=w.useContext(Af);return n||ie(!1),n}function $v(e){let n=w.useContext(bt);return n||ie(!1),n}function Nf(e){let n=$v(),t=n.matches[n.matches.length-1];return t.route.id||ie(!1),t.route.id}function Kv(){var e;let n=w.useContext(Rf),t=Uv(),r=Nf();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Vv(){let{router:e}=Hv(Tf.UseNavigateStable),n=Nf(Cf.UseNavigateStable),t=w.useRef(!1);return Lf(()=>{t.current=!0}),w.useCallback(function(a,o){o===void 0&&(o={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,qr({fromRouteId:n},o)))},[e,n])}const bd={};function Gv(e,n,t){bd[e]||(bd[e]=!0)}function qv(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function nt(e){ie(!1)}function Wv(e){let{basename:n="/",children:t=null,location:r,navigationType:a=Bn.Pop,navigator:o,static:i=!1,future:l}=e;ea()&&ie(!1);let s=n.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:s,navigator:o,static:i,future:qr({v7_relativeSplatPath:!1},l)}),[s,l,o,i]);typeof r=="string"&&(r=yt(r));let{pathname:u="/",search:f="",hash:g="",state:y=null,key:p="default"}=r,b=w.useMemo(()=>{let S=Jt(u,s);return S==null?null:{location:{pathname:S,search:f,hash:g,state:y,key:p},navigationType:a}},[s,u,f,g,y,p,a]);return b==null?null:w.createElement(Xn.Provider,{value:d},w.createElement(Ko.Provider,{children:t,value:b}))}function Yv(e){let{children:n,location:t}=e;return Pv(Ol(n),t)}new Promise(()=>{});function Ol(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,a)=>{if(!w.isValidElement(r))return;let o=[...n,a];if(r.type===w.Fragment){t.push.apply(t,Ol(r.props.children,o));return}r.type!==nt&&ie(!1),!r.props.index||!r.props.children||ie(!1);let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Ol(r.props.children,o)),t.push(i)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yo.apply(this,arguments)}function jf(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Qv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jv(e,n){return e.button===0&&(!n||n==="_self")&&!Qv(e)}const Xv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ex="6";try{window.__reactRouterVersion=ex}catch{}const nx=w.createContext({isTransitioning:!1}),tx="startTransition",wd=qm[tx];function rx(e){let{basename:n,children:t,future:r,window:a}=e,o=w.useRef();o.current==null&&(o.current=ov({window:a,v5Compat:!0}));let i=o.current,[l,s]=w.useState({action:i.action,location:i.location}),{v7_startTransition:d}=r||{},u=w.useCallback(f=>{d&&wd?wd(()=>s(f)):s(f)},[s,d]);return w.useLayoutEffect(()=>i.listen(u),[i,u]),w.useEffect(()=>qv(r),[r]),w.createElement(Wv,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:i,future:r})}const ax=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ix=w.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:l,target:s,to:d,preventScrollReset:u,viewTransition:f}=n,g=jf(n,Xv),{basename:y}=w.useContext(Xn),p,b=!1;if(typeof d=="string"&&ox.test(d)&&(p=d,ax))try{let h=new URL(window.location.href),x=d.startsWith("//")?new URL(h.protocol+d):new URL(d),k=Jt(x.pathname,y);x.origin===h.origin&&k!=null?d=k+x.search+x.hash:b=!0}catch{}let S=Nv(d,{relative:a}),v=sx(d,{replace:i,state:l,target:s,preventScrollReset:u,relative:a,viewTransition:f});function m(h){r&&r(h),h.defaultPrevented||v(h)}return w.createElement("a",yo({},g,{href:p||S,onClick:b||o?r:m,ref:t,target:s}))}),_t=w.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:i=!1,style:l,to:s,viewTransition:d,children:u}=n,f=jf(n,Zv),g=Vo(s,{relative:f.relative}),y=na(),p=w.useContext(Af),{navigator:b,basename:S}=w.useContext(Xn),v=p!=null&&cx(g)&&d===!0,m=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,h=y.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;a||(h=h.toLowerCase(),x=x?x.toLowerCase():null,m=m.toLowerCase()),x&&S&&(x=Jt(x,S)||x);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let _=h===m||!i&&h.startsWith(m)&&h.charAt(k)==="/",L=x!=null&&(x===m||!i&&x.startsWith(m)&&x.charAt(m.length)==="/"),A={isActive:_,isPending:L,isTransitioning:v},R=_?r:void 0,C;typeof o=="function"?C=o(A):C=[o,_?"active":null,L?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(A):l;return w.createElement(ix,yo({},f,{"aria-current":R,className:C,ref:t,style:W,to:s,viewTransition:d}),typeof u=="function"?u(A):u)});var Fl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fl||(Fl={}));var Sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sd||(Sd={}));function lx(e){let n=w.useContext($o);return n||ie(!1),n}function sx(e,n){let{target:t,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:l}=n===void 0?{}:n,s=jv(),d=na(),u=Vo(e,{relative:i});return w.useCallback(f=>{if(Jv(f,t)){f.preventDefault();let g=r!==void 0?r:xo(d)===xo(u);s(e,{replace:g,state:a,preventScrollReset:o,relative:i,viewTransition:l})}},[d,s,u,r,a,t,e,o,i,l])}function cx(e,n){n===void 0&&(n={});let t=w.useContext(nx);t==null&&ie(!1);let{basename:r}=lx(Fl.useViewTransitionState),a=Vo(e,{relative:n.relative});if(!t.isTransitioning)return!1;let o=Jt(t.currentLocation.pathname,r)||t.currentLocation.pathname,i=Jt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Pl(a.pathname,i)!=null||Pl(a.pathname,o)!=null}var Df={exports:{}},dx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ux=dx,px=ux;function Pf(){}function Of(){}Of.resetWarningCache=Pf;var fx=function(){function e(r,a,o,i,l,s){if(s!==px){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Of,resetWarningCache:Pf};return t.PropTypes=t,t};Df.exports=fx();var mx=Df.exports;const V=lu(mx);function wt(e,n,t,r){function a(o){return o instanceof t?o:new t(function(i){i(o)})}return new(t||(t=Promise))(function(o,i){function l(u){try{d(r.next(u))}catch(f){i(f)}}function s(u){try{d(r.throw(u))}catch(f){i(f)}}function d(u){u.done?o(u.value):a(u.value).then(l,s)}d((r=r.apply(e,n||[])).next())})}const hx=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Xt(e,n,t){const r=gx(e),{webkitRelativePath:a}=e,o=typeof n=="string"?n:typeof a=="string"&&a.length>0?a:`./${e.name}`;return typeof r.path!="string"&&kd(r,"path",o),kd(r,"relativePath",o),r}function gx(e){const{name:n}=e;if(n&&n.lastIndexOf(".")!==-1&&!e.type){const r=n.split(".").pop().toLowerCase(),a=hx.get(r);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}function kd(e,n,t){Object.defineProperty(e,n,{value:t,writable:!1,configurable:!1,enumerable:!0})}const vx=[".DS_Store","Thumbs.db"];function xx(e){return wt(this,void 0,void 0,function*(){return bo(e)&&yx(e.dataTransfer)?kx(e.dataTransfer,e.type):bx(e)?wx(e):Array.isArray(e)&&e.every(n=>"getFile"in n&&typeof n.getFile=="function")?Sx(e):[]})}function yx(e){return bo(e)}function bx(e){return bo(e)&&bo(e.target)}function bo(e){return typeof e=="object"&&e!==null}function wx(e){return Bl(e.target.files).map(n=>Xt(n))}function Sx(e){return wt(this,void 0,void 0,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>Xt(t))})}function kx(e,n){return wt(this,void 0,void 0,function*(){if(e.items){const t=Bl(e.items).filter(a=>a.kind==="file");if(n!=="drop")return t;const r=yield Promise.all(t.map(Ex));return Ed(Ff(r))}return Ed(Bl(e.files).map(t=>Xt(t)))})}function Ed(e){return e.filter(n=>vx.indexOf(n.name)===-1)}function Bl(e){if(e===null)return[];const n=[];for(let t=0;t<e.length;t++){const r=e[t];n.push(r)}return n}function Ex(e){if(typeof e.webkitGetAsEntry!="function")return _d(e);const n=e.webkitGetAsEntry();return n&&n.isDirectory?Bf(n):_d(e,n)}function Ff(e){return e.reduce((n,t)=>[...n,...Array.isArray(t)?Ff(t):[t]],[])}function _d(e,n){return wt(this,void 0,void 0,function*(){var t;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const o=yield e.getAsFileSystemHandle();if(o===null)throw new Error(`${e} is not a File`);if(o!==void 0){const i=yield o.getFile();return i.handle=o,Xt(i)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return Xt(r,(t=n==null?void 0:n.fullPath)!==null&&t!==void 0?t:void 0)})}function _x(e){return wt(this,void 0,void 0,function*(){return e.isDirectory?Bf(e):Ax(e)})}function Bf(e){const n=e.createReader();return new Promise((t,r)=>{const a=[];function o(){n.readEntries(i=>wt(this,void 0,void 0,function*(){if(i.length){const l=Promise.all(i.map(_x));a.push(l),o()}else try{const l=yield Promise.all(a);t(l)}catch(l){r(l)}}),i=>{r(i)})}o()})}function Ax(e){return wt(this,void 0,void 0,function*(){return new Promise((n,t)=>{e.file(r=>{const a=Xt(r,e.fullPath);n(a)},r=>{t(r)})})})}var ji=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(",");if(t.length===0)return!0;var r=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return t.some(function(i){var l=i.trim().toLowerCase();return l.charAt(0)==="."?r.toLowerCase().endsWith(l):l.endsWith("/*")?o===l.replace(/\/.*$/,""):a===l})}return!0};function Ad(e){return Tx(e)||Lx(e)||zf(e)||Rx()}function Rx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tx(e){if(Array.isArray(e))return Il(e)}function Rd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Ld(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Rd(Object(t),!0).forEach(function(r){If(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Rd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function If(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Wr(e,n){return jx(e)||Nx(e,n)||zf(e,n)||Cx()}function Cx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zf(e,n){if(e){if(typeof e=="string")return Il(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Il(e,n)}}function Il(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Nx(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,o=!1,i,l;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));a=!0);}catch(s){o=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw l}}return r}}function jx(e){if(Array.isArray(e))return e}var Dx=typeof ji=="function"?ji:ji.default,Px="file-invalid-type",Ox="file-too-large",Fx="file-too-small",Bx="too-many-files",Ix=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=n.split(","),r=t.length>1?"one of ".concat(t.join(", ")):t[0];return{code:Px,message:"File type must be ".concat(r)}},Td=function(n){return{code:Ox,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},Cd=function(n){return{code:Fx,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},zx={code:Bx,message:"Too many files"};function Mx(e){return e.type===""&&typeof e.getAsFile=="function"}function Mf(e,n){var t=e.type==="application/x-moz-file"||Dx(e,n)||Mx(e);return[t,t?null:Ix(n)]}function Hf(e,n,t){if(tt(e.size))if(tt(n)&&tt(t)){if(e.size>t)return[!1,Td(t)];if(e.size<n)return[!1,Cd(n)]}else{if(tt(n)&&e.size<n)return[!1,Cd(n)];if(tt(t)&&e.size>t)return[!1,Td(t)]}return[!0,null]}function tt(e){return e!=null}function Hx(e){var n=e.files,t=e.accept,r=e.minSize,a=e.maxSize,o=e.multiple,i=e.maxFiles,l=e.validator;return!o&&n.length>1||o&&i>=1&&n.length>i?!1:n.every(function(s){var d=Mf(s,t),u=Wr(d,1),f=u[0],g=Hf(s,r,a),y=Wr(g,1),p=y[0],b=l?l(s):null;return f&&p&&!b})}function wo(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function pr(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Nd(e){e.preventDefault()}function Ux(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function $x(e){return e.indexOf("Edge/")!==-1}function Kx(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ux(e)||$x(e)}function fn(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return n.some(function(l){return!wo(r)&&l&&l.apply(void 0,[r].concat(o)),wo(r)})}}function Vx(){return"showOpenFilePicker"in window}function Gx(e){if(tt(e)){var n=Object.entries(e).filter(function(t){var r=Wr(t,2),a=r[0],o=r[1],i=!0;return Uf(a)||(console.warn('Skipped "'.concat(a,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),(!Array.isArray(o)||!o.every($f))&&(console.warn('Skipped "'.concat(a,'" because an invalid file extension was provided.')),i=!1),i}).reduce(function(t,r){var a=Wr(r,2),o=a[0],i=a[1];return Ld(Ld({},t),{},If({},o,i))},{});return[{description:"Files",accept:n}]}return e}function qx(e){if(tt(e))return Object.entries(e).reduce(function(n,t){var r=Wr(t,2),a=r[0],o=r[1];return[].concat(Ad(n),[a],Ad(o))},[]).filter(function(n){return Uf(n)||$f(n)}).join(",")}function Wx(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Yx(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Uf(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function $f(e){return/^.*\.[\w]+$/.test(e)}var Qx=["children"],Jx=["open"],Xx=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Zx=["refKey","onChange","onClick"];function jd(e){return ty(e)||ny(e)||Kf(e)||ey()}function ey(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ny(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ty(e){if(Array.isArray(e))return zl(e)}function Di(e,n){return oy(e)||ay(e,n)||Kf(e,n)||ry()}function ry(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kf(e,n){if(e){if(typeof e=="string")return zl(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zl(e,n)}}function zl(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ay(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,o=!1,i,l;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));a=!0);}catch(s){o=!0,l=s}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw l}}return r}}function oy(e){if(Array.isArray(e))return e}function Dd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Dd(Object(t),!0).forEach(function(r){Ml(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Dd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ml(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function So(e,n){if(e==null)return{};var t=iy(e,n),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function iy(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Hs=w.forwardRef(function(e,n){var t=e.children,r=So(e,Qx),a=Us(r),o=a.open,i=So(a,Jx);return w.useImperativeHandle(n,function(){return{open:o}},[o]),Ql.createElement(w.Fragment,null,t(J(J({},i),{},{open:o})))});Hs.displayName="Dropzone";var Vf={disabled:!1,getFilesFromEvent:xx,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Hs.defaultProps=Vf;Hs.propTypes={children:V.func,accept:V.objectOf(V.arrayOf(V.string)),multiple:V.bool,preventDropOnDocument:V.bool,noClick:V.bool,noKeyboard:V.bool,noDrag:V.bool,noDragEventsBubbling:V.bool,minSize:V.number,maxSize:V.number,maxFiles:V.number,disabled:V.bool,getFilesFromEvent:V.func,onFileDialogCancel:V.func,onFileDialogOpen:V.func,useFsAccessApi:V.bool,autoFocus:V.bool,onDragEnter:V.func,onDragLeave:V.func,onDragOver:V.func,onDrop:V.func,onDropAccepted:V.func,onDropRejected:V.func,onError:V.func,validator:V.func};var Hl={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,isDragGlobal:!1,acceptedFiles:[],fileRejections:[]};function Us(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=J(J({},Vf),e),t=n.accept,r=n.disabled,a=n.getFilesFromEvent,o=n.maxSize,i=n.minSize,l=n.multiple,s=n.maxFiles,d=n.onDragEnter,u=n.onDragLeave,f=n.onDragOver,g=n.onDrop,y=n.onDropAccepted,p=n.onDropRejected,b=n.onFileDialogCancel,S=n.onFileDialogOpen,v=n.useFsAccessApi,m=n.autoFocus,h=n.preventDropOnDocument,x=n.noClick,k=n.noKeyboard,_=n.noDrag,L=n.noDragEventsBubbling,A=n.onError,R=n.validator,C=w.useMemo(function(){return qx(t)},[t]),W=w.useMemo(function(){return Gx(t)},[t]),fe=w.useMemo(function(){return typeof S=="function"?S:Pd},[S]),G=w.useMemo(function(){return typeof b=="function"?b:Pd},[b]),M=w.useRef(null),le=w.useRef(null),Y=w.useReducer(ly,Hl),Le=Di(Y,2),N=Le[0],P=Le[1],j=N.isFocused,F=N.isFileDialogActive,B=w.useRef(typeof window<"u"&&window.isSecureContext&&v&&Vx()),se=function(){!B.current&&F&&setTimeout(function(){if(le.current){var I=le.current.files;I.length||(P({type:"closeDialog"}),G())}},300)};w.useEffect(function(){return window.addEventListener("focus",se,!1),function(){window.removeEventListener("focus",se,!1)}},[le,F,G,B]);var K=w.useRef([]),me=w.useRef([]),dn=function(I){M.current&&M.current.contains(I.target)||(I.preventDefault(),K.current=[])};w.useEffect(function(){return h&&(document.addEventListener("dragover",Nd,!1),document.addEventListener("drop",dn,!1)),function(){h&&(document.removeEventListener("dragover",Nd),document.removeEventListener("drop",dn))}},[M,h]),w.useEffect(function(){var D=function(un){me.current=[].concat(jd(me.current),[un.target]),pr(un)&&P({isDragGlobal:!0,type:"setDragGlobal"})},I=function(un){me.current=me.current.filter(function(yn){return yn!==un.target&&yn!==null}),!(me.current.length>0)&&P({isDragGlobal:!1,type:"setDragGlobal"})},ee=function(){me.current=[],P({isDragGlobal:!1,type:"setDragGlobal"})},ce=function(){me.current=[],P({isDragGlobal:!1,type:"setDragGlobal"})};return document.addEventListener("dragenter",D,!1),document.addEventListener("dragleave",I,!1),document.addEventListener("dragend",ee,!1),document.addEventListener("drop",ce,!1),function(){document.removeEventListener("dragenter",D),document.removeEventListener("dragleave",I),document.removeEventListener("dragend",ee),document.removeEventListener("drop",ce)}},[M]),w.useEffect(function(){return!r&&m&&M.current&&M.current.focus(),function(){}},[M,m,r]);var qe=w.useCallback(function(D){A?A(D):console.error(D)},[A]),Zs=w.useCallback(function(D){D.preventDefault(),D.persist(),da(D),K.current=[].concat(jd(K.current),[D.target]),pr(D)&&Promise.resolve(a(D)).then(function(I){if(!(wo(D)&&!L)){var ee=I.length,ce=ee>0&&Hx({files:I,accept:C,minSize:i,maxSize:o,multiple:l,maxFiles:s,validator:R}),ye=ee>0&&!ce;P({isDragAccept:ce,isDragReject:ye,isDragActive:!0,type:"setDraggedFiles"}),d&&d(D)}}).catch(function(I){return qe(I)})},[a,d,qe,L,C,i,o,l,s,R]),ec=w.useCallback(function(D){D.preventDefault(),D.persist(),da(D);var I=pr(D);if(I&&D.dataTransfer)try{D.dataTransfer.dropEffect="copy"}catch{}return I&&f&&f(D),!1},[f,L]),nc=w.useCallback(function(D){D.preventDefault(),D.persist(),da(D);var I=K.current.filter(function(ce){return M.current&&M.current.contains(ce)}),ee=I.indexOf(D.target);ee!==-1&&I.splice(ee,1),K.current=I,!(I.length>0)&&(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),pr(D)&&u&&u(D))},[M,u,L]),la=w.useCallback(function(D,I){var ee=[],ce=[];D.forEach(function(ye){var un=Mf(ye,C),yn=Di(un,2),Xo=yn[0],Zo=yn[1],ei=Hf(ye,i,o),ua=Di(ei,2),ni=ua[0],ti=ua[1],ri=R?R(ye):null;if(Xo&&ni&&!ri)ee.push(ye);else{var ai=[Zo,ti];ri&&(ai=ai.concat(ri)),ce.push({file:ye,errors:ai.filter(function(Cm){return Cm})})}}),(!l&&ee.length>1||l&&s>=1&&ee.length>s)&&(ee.forEach(function(ye){ce.push({file:ye,errors:[zx]})}),ee.splice(0)),P({acceptedFiles:ee,fileRejections:ce,isDragReject:ce.length>0,type:"setFiles"}),g&&g(ee,ce,I),ce.length>0&&p&&p(ce,I),ee.length>0&&y&&y(ee,I)},[P,l,C,i,o,s,g,y,p,R]),sa=w.useCallback(function(D){D.preventDefault(),D.persist(),da(D),K.current=[],pr(D)&&Promise.resolve(a(D)).then(function(I){wo(D)&&!L||la(I,D)}).catch(function(I){return qe(I)}),P({type:"reset"})},[a,la,qe,L]),St=w.useCallback(function(){if(B.current){P({type:"openDialog"}),fe();var D={multiple:l,types:W};window.showOpenFilePicker(D).then(function(I){return a(I)}).then(function(I){la(I,null),P({type:"closeDialog"})}).catch(function(I){Wx(I)?(G(I),P({type:"closeDialog"})):Yx(I)?(B.current=!1,le.current?(le.current.value=null,le.current.click()):qe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):qe(I)});return}le.current&&(P({type:"openDialog"}),fe(),le.current.value=null,le.current.click())},[P,fe,G,v,la,qe,W,l]),tc=w.useCallback(function(D){!M.current||!M.current.isEqualNode(D.target)||(D.key===" "||D.key==="Enter"||D.keyCode===32||D.keyCode===13)&&(D.preventDefault(),St())},[M,St]),rc=w.useCallback(function(){P({type:"focus"})},[]),ac=w.useCallback(function(){P({type:"blur"})},[]),oc=w.useCallback(function(){x||(Kx()?setTimeout(St,0):St())},[x,St]),kt=function(I){return r?null:I},Jo=function(I){return k?null:kt(I)},ca=function(I){return _?null:kt(I)},da=function(I){L&&I.stopPropagation()},Rm=w.useMemo(function(){return function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=D.refKey,ee=I===void 0?"ref":I,ce=D.role,ye=D.onKeyDown,un=D.onFocus,yn=D.onBlur,Xo=D.onClick,Zo=D.onDragEnter,ei=D.onDragOver,ua=D.onDragLeave,ni=D.onDrop,ti=So(D,Xx);return J(J(Ml({onKeyDown:Jo(fn(ye,tc)),onFocus:Jo(fn(un,rc)),onBlur:Jo(fn(yn,ac)),onClick:kt(fn(Xo,oc)),onDragEnter:ca(fn(Zo,Zs)),onDragOver:ca(fn(ei,ec)),onDragLeave:ca(fn(ua,nc)),onDrop:ca(fn(ni,sa)),role:typeof ce=="string"&&ce!==""?ce:"presentation"},ee,M),!r&&!k?{tabIndex:0}:{}),ti)}},[M,tc,rc,ac,oc,Zs,ec,nc,sa,k,_,r]),Lm=w.useCallback(function(D){D.stopPropagation()},[]),Tm=w.useMemo(function(){return function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=D.refKey,ee=I===void 0?"ref":I,ce=D.onChange,ye=D.onClick,un=So(D,Zx),yn=Ml({accept:C,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:kt(fn(ce,sa)),onClick:kt(fn(ye,Lm)),tabIndex:-1},ee,le);return J(J({},yn),un)}},[le,t,l,sa,r]);return J(J({},N),{},{isFocused:j&&!r,getRootProps:Rm,getInputProps:Tm,rootRef:M,inputRef:le,open:kt(St)})}function ly(e,n){switch(n.type){case"focus":return J(J({},e),{},{isFocused:!0});case"blur":return J(J({},e),{},{isFocused:!1});case"openDialog":return J(J({},Hl),{},{isFileDialogActive:!0});case"closeDialog":return J(J({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return J(J({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return J(J({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections,isDragReject:n.isDragReject});case"setDragGlobal":return J(J({},e),{},{isDragGlobal:n.isDragGlobal});case"reset":return J({},Hl);default:return e}}function Pd(){}function sy({onFile:e,loading:n}){const t=w.useCallback(i=>{i.length>0&&e(i[0])},[e]),{getRootProps:r,getInputProps:a,isDragActive:o}=Us({onDrop:t,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:n});return c.jsxs("div",{...r(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
        ${o?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
        ${n?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{...a()}),c.jsx("div",{className:"text-4xl mb-3",children:"📂"}),n?c.jsx("p",{className:"text-gray-400",children:"Processing file…"}):o?c.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your check file here"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]})}function Gf(e,n){return function(){return e.apply(n,arguments)}}const{toString:cy}=Object.prototype,{getPrototypeOf:$s}=Object,{iterator:Go,toStringTag:qf}=Symbol,qo=(e=>n=>{const t=cy.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),cn=e=>(e=e.toLowerCase(),n=>qo(n)===e),Wo=e=>n=>typeof n===e,{isArray:rr}=Array,Zt=Wo("undefined");function ta(e){return e!==null&&!Zt(e)&&e.constructor!==null&&!Zt(e.constructor)&&ze(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Wf=cn("ArrayBuffer");function dy(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Wf(e.buffer),n}const uy=Wo("string"),ze=Wo("function"),Yf=Wo("number"),ra=e=>e!==null&&typeof e=="object",py=e=>e===!0||e===!1,Ka=e=>{if(qo(e)!=="object")return!1;const n=$s(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(qf in e)&&!(Go in e)},fy=e=>{if(!ra(e)||ta(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},my=cn("Date"),hy=cn("File"),gy=e=>!!(e&&typeof e.uri<"u"),vy=e=>e&&typeof e.getParts<"u",xy=cn("Blob"),yy=cn("FileList"),by=e=>ra(e)&&ze(e.pipe);function wy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Od=wy(),Fd=typeof Od.FormData<"u"?Od.FormData:void 0,Sy=e=>{let n;return e&&(Fd&&e instanceof Fd||ze(e.append)&&((n=qo(e))==="formdata"||n==="object"&&ze(e.toString)&&e.toString()==="[object FormData]"))},ky=cn("URLSearchParams"),[Ey,_y,Ay,Ry]=["ReadableStream","Request","Response","Headers"].map(cn),Ly=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function aa(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),rr(e))for(r=0,a=e.length;r<a;r++)n.call(null,e[r],r,e);else{if(ta(e))return;const o=t?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],n.call(null,e[l],l,e)}}function Qf(e,n){if(ta(e))return null;n=n.toLowerCase();const t=Object.keys(e);let r=t.length,a;for(;r-- >0;)if(a=t[r],n===a.toLowerCase())return a;return null}const it=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Jf=e=>!Zt(e)&&e!==it;function Ul(){const{caseless:e,skipUndefined:n}=Jf(this)&&this||{},t={},r=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const i=e&&Qf(t,o)||o;Ka(t[i])&&Ka(a)?t[i]=Ul(t[i],a):Ka(a)?t[i]=Ul({},a):rr(a)?t[i]=a.slice():(!n||!Zt(a))&&(t[i]=a)};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&aa(arguments[a],r);return t}const Ty=(e,n,t,{allOwnKeys:r}={})=>(aa(n,(a,o)=>{t&&ze(a)?Object.defineProperty(e,o,{value:Gf(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Cy=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ny=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},jy=(e,n,t,r)=>{let a,o,i;const l={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)i=a[o],(!r||r(i,e,n))&&!l[i]&&(n[i]=e[i],l[i]=!0);e=t!==!1&&$s(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},Dy=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},Py=e=>{if(!e)return null;if(rr(e))return e;let n=e.length;if(!Yf(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},Oy=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&$s(Uint8Array)),Fy=(e,n)=>{const r=(e&&e[Go]).call(e);let a;for(;(a=r.next())&&!a.done;){const o=a.value;n.call(e,o[0],o[1])}},By=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},Iy=cn("HTMLFormElement"),zy=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),Bd=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),My=cn("RegExp"),Xf=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};aa(t,(a,o)=>{let i;(i=n(a,o,e))!==!1&&(r[o]=i||a)}),Object.defineProperties(e,r)},Hy=e=>{Xf(e,(n,t)=>{if(ze(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(ze(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Uy=(e,n)=>{const t={},r=a=>{a.forEach(o=>{t[o]=!0})};return rr(e)?r(e):r(String(e).split(n)),t},$y=()=>{},Ky=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function Vy(e){return!!(e&&ze(e.append)&&e[qf]==="FormData"&&e[Go])}const Gy=e=>{const n=new Array(10),t=(r,a)=>{if(ra(r)){if(n.indexOf(r)>=0)return;if(ta(r))return r;if(!("toJSON"in r)){n[a]=r;const o=rr(r)?[]:{};return aa(r,(i,l)=>{const s=t(i,a+1);!Zt(s)&&(o[l]=s)}),n[a]=void 0,o}}return r};return t(e,0)},qy=cn("AsyncFunction"),Wy=e=>e&&(ra(e)||ze(e))&&ze(e.then)&&ze(e.catch),Zf=((e,n)=>e?setImmediate:n?((t,r)=>(it.addEventListener("message",({source:a,data:o})=>{a===it&&o===t&&r.length&&r.shift()()},!1),a=>{r.push(a),it.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ze(it.postMessage)),Yy=typeof queueMicrotask<"u"?queueMicrotask.bind(it):typeof process<"u"&&process.nextTick||Zf,Qy=e=>e!=null&&ze(e[Go]),E={isArray:rr,isArrayBuffer:Wf,isBuffer:ta,isFormData:Sy,isArrayBufferView:dy,isString:uy,isNumber:Yf,isBoolean:py,isObject:ra,isPlainObject:Ka,isEmptyObject:fy,isReadableStream:Ey,isRequest:_y,isResponse:Ay,isHeaders:Ry,isUndefined:Zt,isDate:my,isFile:hy,isReactNativeBlob:gy,isReactNative:vy,isBlob:xy,isRegExp:My,isFunction:ze,isStream:by,isURLSearchParams:ky,isTypedArray:Oy,isFileList:yy,forEach:aa,merge:Ul,extend:Ty,trim:Ly,stripBOM:Cy,inherits:Ny,toFlatObject:jy,kindOf:qo,kindOfTest:cn,endsWith:Dy,toArray:Py,forEachEntry:Fy,matchAll:By,isHTMLForm:Iy,hasOwnProperty:Bd,hasOwnProp:Bd,reduceDescriptors:Xf,freezeMethods:Hy,toObjectSet:Uy,toCamelCase:zy,noop:$y,toFiniteNumber:Ky,findKey:Qf,global:it,isContextDefined:Jf,isSpecCompliantForm:Vy,toJSONObject:Gy,isAsyncFn:qy,isThenable:Wy,setImmediate:Zf,asap:Yy,isIterable:Qy};let z=class em extends Error{static from(n,t,r,a,o,i){const l=new em(n.message,t||n.code,r,a,o);return l.cause=n,l.name=n.name,n.status!=null&&l.status==null&&(l.status=n.status),i&&Object.assign(l,i),l}constructor(n,t,r,a,o){super(n),Object.defineProperty(this,"message",{value:n,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}};z.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";z.ERR_BAD_OPTION="ERR_BAD_OPTION";z.ECONNABORTED="ECONNABORTED";z.ETIMEDOUT="ETIMEDOUT";z.ERR_NETWORK="ERR_NETWORK";z.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";z.ERR_DEPRECATED="ERR_DEPRECATED";z.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";z.ERR_BAD_REQUEST="ERR_BAD_REQUEST";z.ERR_CANCELED="ERR_CANCELED";z.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";z.ERR_INVALID_URL="ERR_INVALID_URL";const Jy=null;function $l(e){return E.isPlainObject(e)||E.isArray(e)}function nm(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Pi(e,n,t){return e?e.concat(n).map(function(a,o){return a=nm(a),!t&&o?"["+a+"]":a}).join(t?".":""):n}function Xy(e){return E.isArray(e)&&!e.some($l)}const Zy=E.toFlatObject(E,{},null,function(n){return/^is[A-Z]/.test(n)});function Yo(e,n,t){if(!E.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=E.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!E.isUndefined(S[b])});const r=t.metaTokens,a=t.visitor||u,o=t.dots,i=t.indexes,s=(t.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(n);if(!E.isFunction(a))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(E.isDate(p))return p.toISOString();if(E.isBoolean(p))return p.toString();if(!s&&E.isBlob(p))throw new z("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(p)||E.isTypedArray(p)?s&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,b,S){let v=p;if(E.isReactNative(n)&&E.isReactNativeBlob(p))return n.append(Pi(S,b,o),d(p)),!1;if(p&&!S&&typeof p=="object"){if(E.endsWith(b,"{}"))b=r?b:b.slice(0,-2),p=JSON.stringify(p);else if(E.isArray(p)&&Xy(p)||(E.isFileList(p)||E.endsWith(b,"[]"))&&(v=E.toArray(p)))return b=nm(b),v.forEach(function(h,x){!(E.isUndefined(h)||h===null)&&n.append(i===!0?Pi([b],x,o):i===null?b:b+"[]",d(h))}),!1}return $l(p)?!0:(n.append(Pi(S,b,o),d(p)),!1)}const f=[],g=Object.assign(Zy,{defaultVisitor:u,convertValue:d,isVisitable:$l});function y(p,b){if(!E.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(p),E.forEach(p,function(v,m){(!(E.isUndefined(v)||v===null)&&a.call(n,v,E.isString(m)?m.trim():m,b,g))===!0&&y(v,b?b.concat(m):[m])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return y(e),n}function Id(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function Ks(e,n){this._pairs=[],e&&Yo(e,this,n)}const tm=Ks.prototype;tm.append=function(n,t){this._pairs.push([n,t])};tm.toString=function(n){const t=n?function(r){return n.call(this,r,Id)}:Id;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function e0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function rm(e,n,t){if(!n)return e;const r=t&&t.encode||e0,a=E.isFunction(t)?{serialize:t}:t,o=a&&a.serialize;let i;if(o?i=o(n,a):i=E.isURLSearchParams(n)?n.toString():new Ks(n,a).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class zd{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){E.forEach(this.handlers,function(r){r!==null&&n(r)})}}const Vs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},n0=typeof URLSearchParams<"u"?URLSearchParams:Ks,t0=typeof FormData<"u"?FormData:null,r0=typeof Blob<"u"?Blob:null,a0={isBrowser:!0,classes:{URLSearchParams:n0,FormData:t0,Blob:r0},protocols:["http","https","file","blob","url","data"]},Gs=typeof window<"u"&&typeof document<"u",Kl=typeof navigator=="object"&&navigator||void 0,o0=Gs&&(!Kl||["ReactNative","NativeScript","NS"].indexOf(Kl.product)<0),i0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",l0=Gs&&window.location.href||"http://localhost",s0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gs,hasStandardBrowserEnv:o0,hasStandardBrowserWebWorkerEnv:i0,navigator:Kl,origin:l0},Symbol.toStringTag,{value:"Module"})),Ae={...s0,...a0};function c0(e,n){return Yo(e,new Ae.classes.URLSearchParams,{visitor:function(t,r,a,o){return Ae.isNode&&E.isBuffer(t)?(this.append(r,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...n})}function d0(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function u0(e){const n={},t=Object.keys(e);let r;const a=t.length;let o;for(r=0;r<a;r++)o=t[r],n[o]=e[o];return n}function am(e){function n(t,r,a,o){let i=t[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),s=o>=t.length;return i=!i&&E.isArray(a)?a.length:i,s?(E.hasOwnProp(a,i)?a[i]=[a[i],r]:a[i]=r,!l):((!a[i]||!E.isObject(a[i]))&&(a[i]=[]),n(t,r,a[i],o)&&E.isArray(a[i])&&(a[i]=u0(a[i])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const t={};return E.forEachEntry(e,(r,a)=>{n(d0(r),a,t,0)}),t}return null}function p0(e,n,t){if(E.isString(e))try{return(n||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}const oa={transitional:Vs,adapter:["xhr","http","fetch"],transformRequest:[function(n,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,o=E.isObject(n);if(o&&E.isHTMLForm(n)&&(n=new FormData(n)),E.isFormData(n))return a?JSON.stringify(am(n)):n;if(E.isArrayBuffer(n)||E.isBuffer(n)||E.isStream(n)||E.isFile(n)||E.isBlob(n)||E.isReadableStream(n))return n;if(E.isArrayBufferView(n))return n.buffer;if(E.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return c0(n,this.formSerializer).toString();if((l=E.isFileList(n))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Yo(l?{"files[]":n}:n,s&&new s,this.formSerializer)}}return o||a?(t.setContentType("application/json",!1),p0(n)):n}],transformResponse:[function(n){const t=this.transitional||oa.transitional,r=t&&t.forcedJSONParsing,a=this.responseType==="json";if(E.isResponse(n)||E.isReadableStream(n))return n;if(n&&E.isString(n)&&(r&&!this.responseType||a)){const i=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(n,this.parseReviver)}catch(l){if(i)throw l.name==="SyntaxError"?z.from(l,z.ERR_BAD_RESPONSE,this,null,this.response):l}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ae.classes.FormData,Blob:Ae.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{oa.headers[e]={}});const f0=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),m0=e=>{const n={};let t,r,a;return e&&e.split(`
`).forEach(function(i){a=i.indexOf(":"),t=i.substring(0,a).trim().toLowerCase(),r=i.substring(a+1).trim(),!(!t||n[t]&&f0[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},Md=Symbol("internals");function fr(e){return e&&String(e).trim().toLowerCase()}function Va(e){return e===!1||e==null?e:E.isArray(e)?e.map(Va):String(e).replace(/[\r\n]+$/,"")}function h0(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const g0=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Oi(e,n,t,r,a){if(E.isFunction(r))return r.call(this,n,t);if(a&&(n=t),!!E.isString(n)){if(E.isString(r))return n.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(n)}}function v0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function x0(e,n){const t=E.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(a,o,i){return this[r].call(this,n,a,o,i)},configurable:!0})})}let Me=class{constructor(n){n&&this.set(n)}set(n,t,r){const a=this;function o(l,s,d){const u=fr(s);if(!u)throw new Error("header name must be a non-empty string");const f=E.findKey(a,u);(!f||a[f]===void 0||d===!0||d===void 0&&a[f]!==!1)&&(a[f||s]=Va(l))}const i=(l,s)=>E.forEach(l,(d,u)=>o(d,u,s));if(E.isPlainObject(n)||n instanceof this.constructor)i(n,t);else if(E.isString(n)&&(n=n.trim())&&!g0(n))i(m0(n),t);else if(E.isObject(n)&&E.isIterable(n)){let l={},s,d;for(const u of n){if(!E.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[d=u[0]]=(s=l[d])?E.isArray(s)?[...s,u[1]]:[s,u[1]]:u[1]}i(l,t)}else n!=null&&o(t,n,r);return this}get(n,t){if(n=fr(n),n){const r=E.findKey(this,n);if(r){const a=this[r];if(!t)return a;if(t===!0)return h0(a);if(E.isFunction(t))return t.call(this,a,r);if(E.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=fr(n),n){const r=E.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||Oi(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let a=!1;function o(i){if(i=fr(i),i){const l=E.findKey(r,i);l&&(!t||Oi(r,r[l],l,t))&&(delete r[l],a=!0)}}return E.isArray(n)?n.forEach(o):o(n),a}clear(n){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const o=t[r];(!n||Oi(this,this[o],o,n,!0))&&(delete this[o],a=!0)}return a}normalize(n){const t=this,r={};return E.forEach(this,(a,o)=>{const i=E.findKey(r,o);if(i){t[i]=Va(a),delete t[o];return}const l=n?v0(o):String(o).trim();l!==o&&delete t[o],t[l]=Va(a),r[l]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return E.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=n&&E.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(a=>r.set(a)),r}static accessor(n){const r=(this[Md]=this[Md]={accessors:{}}).accessors,a=this.prototype;function o(i){const l=fr(i);r[l]||(x0(a,i),r[l]=!0)}return E.isArray(n)?n.forEach(o):o(n),this}};Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Me.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});E.freezeMethods(Me);function Fi(e,n){const t=this||oa,r=n||t,a=Me.from(r.headers);let o=r.data;return E.forEach(e,function(l){o=l.call(t,o,a.normalize(),n?n.status:void 0)}),a.normalize(),o}function om(e){return!!(e&&e.__CANCEL__)}let ia=class extends z{constructor(n,t,r){super(n??"canceled",z.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function im(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new z("Request failed with status code "+t.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function y0(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function b0(e,n){e=e||10;const t=new Array(e),r=new Array(e);let a=0,o=0,i;return n=n!==void 0?n:1e3,function(s){const d=Date.now(),u=r[o];i||(i=d),t[a]=s,r[a]=d;let f=o,g=0;for(;f!==a;)g+=t[f++],f=f%e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),d-i<n)return;const y=u&&d-u;return y?Math.round(g*1e3/y):void 0}}function w0(e,n){let t=0,r=1e3/n,a,o;const i=(d,u=Date.now())=>{t=u,a=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const u=Date.now(),f=u-t;f>=r?i(d,u):(a=d,o||(o=setTimeout(()=>{o=null,i(a)},r-f)))},()=>a&&i(a)]}const ko=(e,n,t=3)=>{let r=0;const a=b0(50,250);return w0(o=>{const i=o.loaded,l=o.lengthComputable?o.total:void 0,s=i-r,d=a(s),u=i<=l;r=i;const f={loaded:i,total:l,progress:l?i/l:void 0,bytes:s,rate:d||void 0,estimated:d&&l&&u?(l-i)/d:void 0,event:o,lengthComputable:l!=null,[n?"download":"upload"]:!0};e(f)},t)},Hd=(e,n)=>{const t=e!=null;return[r=>n[0]({lengthComputable:t,total:e,loaded:r}),n[1]]},Ud=e=>(...n)=>E.asap(()=>e(...n)),S0=Ae.hasStandardBrowserEnv?((e,n)=>t=>(t=new URL(t,Ae.origin),e.protocol===t.protocol&&e.host===t.host&&(n||e.port===t.port)))(new URL(Ae.origin),Ae.navigator&&/(msie|trident)/i.test(Ae.navigator.userAgent)):()=>!0,k0=Ae.hasStandardBrowserEnv?{write(e,n,t,r,a,o,i){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(n)}`];E.isNumber(t)&&l.push(`expires=${new Date(t).toUTCString()}`),E.isString(r)&&l.push(`path=${r}`),E.isString(a)&&l.push(`domain=${a}`),o===!0&&l.push("secure"),E.isString(i)&&l.push(`SameSite=${i}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const n=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return n?decodeURIComponent(n[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function E0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _0(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function lm(e,n,t){let r=!E0(n);return e&&(r||t==!1)?_0(e,n):n}const $d=e=>e instanceof Me?{...e}:e;function ht(e,n){n=n||{};const t={};function r(d,u,f,g){return E.isPlainObject(d)&&E.isPlainObject(u)?E.merge.call({caseless:g},d,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function a(d,u,f,g){if(E.isUndefined(u)){if(!E.isUndefined(d))return r(void 0,d,f,g)}else return r(d,u,f,g)}function o(d,u){if(!E.isUndefined(u))return r(void 0,u)}function i(d,u){if(E.isUndefined(u)){if(!E.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function l(d,u,f){if(f in n)return r(d,u);if(f in e)return r(void 0,d)}const s={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(d,u,f)=>a($d(d),$d(u),f,!0)};return E.forEach(Object.keys({...e,...n}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=E.hasOwnProp(s,u)?s[u]:a,g=f(e[u],n[u],u);E.isUndefined(g)&&f!==l||(t[u]=g)}),t}const sm=e=>{const n=ht({},e);let{data:t,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:o,headers:i,auth:l}=n;if(n.headers=i=Me.from(i),n.url=rm(lm(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&i.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),E.isFormData(t)){if(Ae.hasStandardBrowserEnv||Ae.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(E.isFunction(t.getHeaders)){const s=t.getHeaders(),d=["content-type","content-length"];Object.entries(s).forEach(([u,f])=>{d.includes(u.toLowerCase())&&i.set(u,f)})}}if(Ae.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(n)),r||r!==!1&&S0(n.url))){const s=a&&o&&k0.read(o);s&&i.set(a,s)}return n},A0=typeof XMLHttpRequest<"u",R0=A0&&function(e){return new Promise(function(t,r){const a=sm(e);let o=a.data;const i=Me.from(a.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:d}=a,u,f,g,y,p;function b(){y&&y(),p&&p(),a.cancelToken&&a.cancelToken.unsubscribe(u),a.signal&&a.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function v(){if(!S)return;const h=Me.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:h,config:e,request:S};im(function(L){t(L),b()},function(L){r(L),b()},k),S=null}"onloadend"in S?S.onloadend=v:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(v)},S.onabort=function(){S&&(r(new z("Request aborted",z.ECONNABORTED,e,S)),S=null)},S.onerror=function(x){const k=x&&x.message?x.message:"Network Error",_=new z(k,z.ERR_NETWORK,e,S);_.event=x||null,r(_),S=null},S.ontimeout=function(){let x=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const k=a.transitional||Vs;a.timeoutErrorMessage&&(x=a.timeoutErrorMessage),r(new z(x,k.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,S)),S=null},o===void 0&&i.setContentType(null),"setRequestHeader"in S&&E.forEach(i.toJSON(),function(x,k){S.setRequestHeader(k,x)}),E.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),l&&l!=="json"&&(S.responseType=a.responseType),d&&([g,p]=ko(d,!0),S.addEventListener("progress",g)),s&&S.upload&&([f,y]=ko(s),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",y)),(a.cancelToken||a.signal)&&(u=h=>{S&&(r(!h||h.type?new ia(null,e,S):h),S.abort(),S=null)},a.cancelToken&&a.cancelToken.subscribe(u),a.signal&&(a.signal.aborted?u():a.signal.addEventListener("abort",u)));const m=y0(a.url);if(m&&Ae.protocols.indexOf(m)===-1){r(new z("Unsupported protocol "+m+":",z.ERR_BAD_REQUEST,e));return}S.send(o||null)})},L0=(e,n)=>{const{length:t}=e=e?e.filter(Boolean):[];if(n||t){let r=new AbortController,a;const o=function(d){if(!a){a=!0,l();const u=d instanceof Error?d:this.reason;r.abort(u instanceof z?u:new ia(u instanceof Error?u.message:u))}};let i=n&&setTimeout(()=>{i=null,o(new z(`timeout of ${n}ms exceeded`,z.ETIMEDOUT))},n);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:s}=r;return s.unsubscribe=()=>E.asap(l),s}},T0=function*(e,n){let t=e.byteLength;if(t<n){yield e;return}let r=0,a;for(;r<t;)a=r+n,yield e.slice(r,a),r=a},C0=async function*(e,n){for await(const t of N0(e))yield*T0(t,n)},N0=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:t,value:r}=await n.read();if(t)break;yield r}}finally{await n.cancel()}},Kd=(e,n,t,r)=>{const a=C0(e,n);let o=0,i,l=s=>{i||(i=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:d,value:u}=await a.next();if(d){l(),s.close();return}let f=u.byteLength;if(t){let g=o+=f;t(g)}s.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(s){return l(s),a.return()}},{highWaterMark:2})},Vd=64*1024,{isFunction:Ta}=E,j0=(({Request:e,Response:n})=>({Request:e,Response:n}))(E.global),{ReadableStream:Gd,TextEncoder:qd}=E.global,Wd=(e,...n)=>{try{return!!e(...n)}catch{return!1}},D0=e=>{e=E.merge.call({skipUndefined:!0},j0,e);const{fetch:n,Request:t,Response:r}=e,a=n?Ta(n):typeof fetch=="function",o=Ta(t),i=Ta(r);if(!a)return!1;const l=a&&Ta(Gd),s=a&&(typeof qd=="function"?(p=>b=>p.encode(b))(new qd):async p=>new Uint8Array(await new t(p).arrayBuffer())),d=o&&l&&Wd(()=>{let p=!1;const b=new Gd,S=new t(Ae.origin,{body:b,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return b.cancel(),p&&!S}),u=i&&l&&Wd(()=>E.isReadableStream(new r("").body)),f={stream:u&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!f[p]&&(f[p]=(b,S)=>{let v=b&&b[p];if(v)return v.call(b);throw new z(`Response type '${p}' is not supported`,z.ERR_NOT_SUPPORT,S)})});const g=async p=>{if(p==null)return 0;if(E.isBlob(p))return p.size;if(E.isSpecCompliantForm(p))return(await new t(Ae.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(E.isArrayBufferView(p)||E.isArrayBuffer(p))return p.byteLength;if(E.isURLSearchParams(p)&&(p=p+""),E.isString(p))return(await s(p)).byteLength},y=async(p,b)=>{const S=E.toFiniteNumber(p.getContentLength());return S??g(b)};return async p=>{let{url:b,method:S,data:v,signal:m,cancelToken:h,timeout:x,onDownloadProgress:k,onUploadProgress:_,responseType:L,headers:A,withCredentials:R="same-origin",fetchOptions:C}=sm(p),W=n||fetch;L=L?(L+"").toLowerCase():"text";let fe=L0([m,h&&h.toAbortSignal()],x),G=null;const M=fe&&fe.unsubscribe&&(()=>{fe.unsubscribe()});let le;try{if(_&&d&&S!=="get"&&S!=="head"&&(le=await y(A,v))!==0){let F=new t(b,{method:"POST",body:v,duplex:"half"}),B;if(E.isFormData(v)&&(B=F.headers.get("content-type"))&&A.setContentType(B),F.body){const[se,K]=Hd(le,ko(Ud(_)));v=Kd(F.body,Vd,se,K)}}E.isString(R)||(R=R?"include":"omit");const Y=o&&"credentials"in t.prototype,Le={...C,signal:fe,method:S.toUpperCase(),headers:A.normalize().toJSON(),body:v,duplex:"half",credentials:Y?R:void 0};G=o&&new t(b,Le);let N=await(o?W(G,C):W(b,Le));const P=u&&(L==="stream"||L==="response");if(u&&(k||P&&M)){const F={};["status","statusText","headers"].forEach(me=>{F[me]=N[me]});const B=E.toFiniteNumber(N.headers.get("content-length")),[se,K]=k&&Hd(B,ko(Ud(k),!0))||[];N=new r(Kd(N.body,Vd,se,()=>{K&&K(),M&&M()}),F)}L=L||"text";let j=await f[E.findKey(f,L)||"text"](N,p);return!P&&M&&M(),await new Promise((F,B)=>{im(F,B,{data:j,headers:Me.from(N.headers),status:N.status,statusText:N.statusText,config:p,request:G})})}catch(Y){throw M&&M(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new z("Network Error",z.ERR_NETWORK,p,G,Y&&Y.response),{cause:Y.cause||Y}):z.from(Y,Y&&Y.code,p,G,Y&&Y.response)}}},P0=new Map,cm=e=>{let n=e&&e.env||{};const{fetch:t,Request:r,Response:a}=n,o=[r,a,t];let i=o.length,l=i,s,d,u=P0;for(;l--;)s=o[l],d=u.get(s),d===void 0&&u.set(s,d=l?new Map:D0(n)),u=d;return d};cm();const qs={http:Jy,xhr:R0,fetch:{get:cm}};E.forEach(qs,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const Yd=e=>`- ${e}`,O0=e=>E.isFunction(e)||e===null||e===!1;function F0(e,n){e=E.isArray(e)?e:[e];const{length:t}=e;let r,a;const o={};for(let i=0;i<t;i++){r=e[i];let l;if(a=r,!O0(r)&&(a=qs[(l=String(r)).toLowerCase()],a===void 0))throw new z(`Unknown adapter '${l}'`);if(a&&(E.isFunction(a)||(a=a.get(n))))break;o[l||"#"+i]=a}if(!a){const i=Object.entries(o).map(([s,d])=>`adapter ${s} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(Yd).join(`
`):" "+Yd(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a}const dm={getAdapter:F0,adapters:qs};function Bi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ia(null,e)}function Qd(e){return Bi(e),e.headers=Me.from(e.headers),e.data=Fi.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dm.getAdapter(e.adapter||oa.adapter,e)(e).then(function(r){return Bi(e),r.data=Fi.call(e,e.transformResponse,r),r.headers=Me.from(r.headers),r},function(r){return om(r)||(Bi(e),r&&r.response&&(r.response.data=Fi.call(e,e.transformResponse,r.response),r.response.headers=Me.from(r.response.headers))),Promise.reject(r)})}const um="1.14.0",Qo={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Qo[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const Jd={};Qo.transitional=function(n,t,r){function a(o,i){return"[Axios v"+um+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(n===!1)throw new z(a(i," has been removed"+(t?" in "+t:"")),z.ERR_DEPRECATED);return t&&!Jd[i]&&(Jd[i]=!0,console.warn(a(i," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(o,i,l):!0}};Qo.spelling=function(n){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${n}`),!0)};function B0(e,n,t){if(typeof e!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const o=r[a],i=n[o];if(i){const l=e[o],s=l===void 0||i(l,o,e);if(s!==!0)throw new z("option "+o+" must be "+s,z.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new z("Unknown option "+o,z.ERR_BAD_OPTION)}}const Ga={assertOptions:B0,validators:Qo},We=Ga.validators;let ct=class{constructor(n){this.defaults=n||{},this.interceptors={request:new zd,response:new zd}}async request(n,t){try{return await this._request(n,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const o=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=ht(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:o}=t;r!==void 0&&Ga.assertOptions(r,{silentJSONParsing:We.transitional(We.boolean),forcedJSONParsing:We.transitional(We.boolean),clarifyTimeoutError:We.transitional(We.boolean),legacyInterceptorReqResOrdering:We.transitional(We.boolean)},!1),a!=null&&(E.isFunction(a)?t.paramsSerializer={serialize:a}:Ga.assertOptions(a,{encode:We.function,serialize:We.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ga.assertOptions(t,{baseUrl:We.spelling("baseURL"),withXsrfToken:We.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&E.merge(o.common,o[t.method]);o&&E.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),t.headers=Me.concat(i,o);const l=[];let s=!0;this.interceptors.request.forEach(function(b){if(typeof b.runWhen=="function"&&b.runWhen(t)===!1)return;s=s&&b.synchronous;const S=t.transitional||Vs;S&&S.legacyInterceptorReqResOrdering?l.unshift(b.fulfilled,b.rejected):l.push(b.fulfilled,b.rejected)});const d=[];this.interceptors.response.forEach(function(b){d.push(b.fulfilled,b.rejected)});let u,f=0,g;if(!s){const p=[Qd.bind(this),void 0];for(p.unshift(...l),p.push(...d),g=p.length,u=Promise.resolve(t);f<g;)u=u.then(p[f++],p[f++]);return u}g=l.length;let y=t;for(;f<g;){const p=l[f++],b=l[f++];try{y=p(y)}catch(S){b.call(this,S);break}}try{u=Qd.call(this,y)}catch(p){return Promise.reject(p)}for(f=0,g=d.length;f<g;)u=u.then(d[f++],d[f++]);return u}getUri(n){n=ht(this.defaults,n);const t=lm(n.baseURL,n.url,n.allowAbsoluteUrls);return rm(t,n.params,n.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(n){ct.prototype[n]=function(t,r){return this.request(ht(r||{},{method:n,url:t,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(n){function t(r){return function(o,i,l){return this.request(ht(l||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}ct.prototype[n]=t(),ct.prototype[n+"Form"]=t(!0)});let I0=class pm{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const r=this;this.promise.then(a=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](a);r._listeners=null}),this.promise.then=a=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(a);return i.cancel=function(){r.unsubscribe(o)},i},n(function(o,i,l){r.reason||(r.reason=new ia(o,i,l),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const n=new AbortController,t=r=>{n.abort(r)};return this.subscribe(t),n.signal.unsubscribe=()=>this.unsubscribe(t),n.signal}static source(){let n;return{token:new pm(function(a){n=a}),cancel:n}}};function z0(e){return function(t){return e.apply(null,t)}}function M0(e){return E.isObject(e)&&e.isAxiosError===!0}const Vl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Vl).forEach(([e,n])=>{Vl[n]=e});function fm(e){const n=new ct(e),t=Gf(ct.prototype.request,n);return E.extend(t,ct.prototype,n,{allOwnKeys:!0}),E.extend(t,n,null,{allOwnKeys:!0}),t.create=function(a){return fm(ht(e,a))},t}const ue=fm(oa);ue.Axios=ct;ue.CanceledError=ia;ue.CancelToken=I0;ue.isCancel=om;ue.VERSION=um;ue.toFormData=Yo;ue.AxiosError=z;ue.Cancel=ue.CanceledError;ue.all=function(n){return Promise.all(n)};ue.spread=z0;ue.isAxiosError=M0;ue.mergeConfig=ht;ue.AxiosHeaders=Me;ue.formToJSON=e=>am(E.isHTMLForm(e)?new FormData(e):e);ue.getAdapter=dm.getAdapter;ue.HttpStatusCode=Vl;ue.default=ue;const{Axios:Xb,AxiosError:Zb,CanceledError:ew,isCancel:nw,CancelToken:tw,VERSION:rw,all:aw,Cancel:ow,isAxiosError:iw,spread:lw,toFormData:sw,AxiosHeaders:cw,HttpStatusCode:dw,formToJSON:uw,getAdapter:pw,mergeConfig:fw}=ue,ae=ue.create({baseURL:"https://vald-automator-production.up.railway.app",timeout:3e4}),H0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),ae.post("/api/check",t,{timeout:9e4})},U0=(e,n)=>ae.get("/api/trainers",{params:{gym:e,branch:n}}),mm=(e,n,t)=>ae.get("/api/trainer-whatsapp",{params:{gym:e,branch:n,trainer:t}}),$0=e=>ae.post("/api/programs/approve",e),K0=e=>ae.post("/api/programs/unapprove",e),V0=e=>ae.post("/api/programs/ignore",e),G0=e=>ae.post("/api/programs/unignore",e),hm=e=>ae.post("/api/programs/preview",e,{responseType:"text",timeout:6e4}),q0=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),ae.post("/api/report/generate",n,{responseType:"blob",timeout:12e4})},W0=(e,n)=>{const t=new FormData;return t.append("gym",e),t.append("file",n),ae.post("/api/quick-generate",t,{timeout:9e4})},Xd=e=>ae.get("/api/trainers/all",{params:{gym:e}}),Y0=e=>ae.post("/api/trainers",e),Q0=(e,n)=>ae.put(`/api/trainers/${e}`,n),J0=e=>ae.delete(`/api/trainers/${e}`),X0=(e,n)=>{const t=new FormData;return t.append("month",e),t.append("year",n),ae.post("/api/report/payment",t,{responseType:"blob",timeout:12e4})},Z0=(e,n)=>{const t=new FormData;return t.append("month",e),t.append("year",n),ae.post("/api/report/bodydot-payment",t,{responseType:"blob",timeout:12e4})},eb=(e,n,t)=>{const r=new FormData;return r.append("gym",e),r.append("month",n),r.append("year",t),ae.post("/api/report/growth",r,{responseType:"blob",timeout:12e4})},nb=e=>ae.get("/api/bodydot/tests",{params:{gym:e}}),Zd=e=>ae.post("/api/bodydot/tests/approve",e),tb=e=>ae.post("/api/bodydot/tests/ignore",e),rb=e=>ae.post(`/api/bodydot/tests/${e}/unapprove`),ab=(e,n)=>ae.get("/api/report/counts",{params:{year:e,month:n}}),ob=e=>{const n=new FormData;return Object.entries(e).forEach(([t,r])=>r!=null&&n.append(t,r)),ae.post("/api/report/bodydot",n,{responseType:"blob",timeout:3e5})},ib={"Body Masters":["RUH - Al Malaz","RUH - Al Massif","RUH - Al Aarid","RUH - Al Sahafa","RUH - Al Wadi","RUH - Eshbilia","RUH - Muzahmiyah","RUH - Rabwa","RUH - Salam","RUH - Swaidi","RUH - Takhasousi","RUH - Al Badia","RUH - Al Fayha","RUH - Al Khaleej","RUH - Al Kharj","RUH - Al Nahda","RUH - Badr","RUH - Ezdehar","RUH - Murooj","RUH - Shubra","DMM - Al Athir","DMM - Al Jameyeen","DMM - Hufof","DMM - Khobar","JED - Hamadania","JED - Al Rawdah","JED - Makkah","JED - Obhor - Al Amwaj","JED - Obhor - Al Sheraa","ALQ - Al Rass","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","MED - Shouran","MED - Taiba","Uhud","AlUla","Al Mubaraz","Hafr El Batin","Tabuk","Najran","Khamis Mushait","Hail"],"Body Motions":["RUH - Al Malaz","RUH - Al Sahafa","RUH - Al Aarid","RUH - Al Fayha","RUH - Al Uraija","RUH - Badr","RUH - Al Badia","JED - Al Basateen","JED - Al Faisaliyah","JED - Al Naeem","JED - Obhor","DMM - Al Faisaliyah","DMM - Al Jalawiah","DMM - Al Nada","ALQ - Al Rayyan","ALQ - Buraidah","ALQ - Unaizah","Al Ahsaa","AlUla","Tabuk"]},gm=w.createContext(null);function lb({children:e}){const[n,t]=w.useState({}),[r,a]=w.useState(!1),o=w.useCallback(async g=>{if(!(!g||n[g])){a(!0);try{const y=await Xd(g);t(p=>({...p,[g]:y.data||{}}))}catch{}finally{a(!1)}}},[n]),i=w.useCallback(async g=>{if(g){a(!0);try{const y=await Xd(g);t(p=>({...p,[g]:y.data||{}}))}catch{}finally{a(!1)}}},[]),l=g=>Object.keys(n[g]||{}).sort((y,p)=>{const b=ib[g]||[],S=b.indexOf(y),v=b.indexOf(p);return S===-1&&v===-1?y.localeCompare(p):S===-1?1:v===-1?-1:S-v}),s=(g,y)=>{var p;return[...((p=n[g])==null?void 0:p[y])||[]].sort((b,S)=>b.name.localeCompare(S.name)).map(b=>b.name)},d=g=>Object.values(n[g]||{}).flat().map(y=>y.name).sort((y,p)=>y.localeCompare(p)),u=(g,y)=>{for(const[p,b]of Object.entries(n[g]||{}))if(b.some(S=>S.name===y))return p;return null},f=(g,y,p)=>{var b;return(((b=n[g])==null?void 0:b[y])||[]).find(S=>S.name===p)||null};return c.jsx(gm.Provider,{value:{data:n,loading:r,load:o,reload:i,getBranches:l,getTrainers:s,getAllTrainers:d,getBranchForTrainer:u,getTrainerRecord:f},children:e})}function vm(){const e=w.useContext(gm);if(!e)throw new Error("useTrainers must be used inside TrainersProvider");return e}const sb={upper:"Upper Body",lower:"Lower Body",full:"Full Body"},cb={NEW:"bg-emerald-900/60 text-emerald-300 border border-emerald-700",UPDATED:"bg-amber-900/60 text-amber-300 border border-amber-700"};function eu({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:o,inputRef:i}){const[l,s]=w.useState(""),[d,u]=w.useState(!1),[f,g]=w.useState(0),y=w.useRef(null),p=w.useRef(null),b=l?e.filter(m=>m.toLowerCase().includes(l.toLowerCase())):e;w.useEffect(()=>{function m(h){y.current&&!y.current.contains(h.target)&&u(!1)}return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),w.useEffect(()=>{s(n||"")},[n]),w.useEffect(()=>{g(0)},[l]);function S(m){t(m),s(m),u(!1),r&&r(m)}function v(m){!d||b.length===0||(m.key==="ArrowDown"?(m.preventDefault(),g(h=>Math.min(h+1,b.length-1))):m.key==="ArrowUp"?(m.preventDefault(),g(h=>Math.max(h-1,0))):m.key==="Enter"?(m.preventDefault(),S(b[f])):m.key==="Escape"&&u(!1))}return w.useEffect(()=>{if(!p.current)return;const m=p.current.children[f];m&&m.scrollIntoView({block:"nearest"})},[f]),c.jsxs("div",{ref:y,className:"relative",children:[c.jsx("input",{ref:i,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:l,disabled:o,onChange:m=>{s(m.target.value),u(!0),m.target.value||t("")},onFocus:()=>u(!0),onKeyDown:v}),d&&!o&&b.length>0&&c.jsx("ul",{ref:p,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:b.map((m,h)=>c.jsx("li",{onMouseDown:()=>S(m),onMouseEnter:()=>g(h),className:`px-3 py-2 text-sm cursor-pointer ${h===f?"bg-gray-700 text-white":m===n?"text-brand-400 font-semibold":"text-white"}`,children:m},m))})]})}function nu({test:e,gym:n}){const{getBranches:t,getTrainers:r,getAllTrainers:a,getBranchForTrainer:o,load:i}=vm(),[l,s]=w.useState(e.existing_branch||""),[d,u]=w.useState(e.existing_trainer_name||""),f=w.useRef(null),[g,y]=w.useState(e.existing_dispatch_date||new Date().toISOString().split("T")[0]);w.useEffect(()=>{i(n)},[n,i]);const[p,b]=w.useState(!1),[S,v]=w.useState(!1),[m,h]=w.useState(!1),[x,k]=w.useState(!1),[_,L]=w.useState(!1),[A,R]=w.useState(""),C=t(n),W=l?r(n,l):a(n);function fe(j){if(u(j),!l&&j){const F=o(n,j);F&&s(F)}}w.useEffect(()=>{n&&l&&d&&mm(n,l,d).then(j=>{var F;return R(((F=j.data)==null?void 0:F.whatsapp)||"")}).catch(()=>R(""))},[n,l,d]);const G=async()=>{var j,F;if(!e.cells_data){window.open(`https://vald-automator-production.up.railway.app/api/programs/preview-demo?gym=${encodeURIComponent(n)}&test_type=${e.test_type}`,"_blank");return}b(!0);try{const B=await hm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:e.prev_asymmetries||null}),se=new Blob([B.data],{type:"text/html"}),K=URL.createObjectURL(se),me=window.open(K,"_blank");me&&me.addEventListener("load",()=>me.print())}catch(B){alert("Failed to open program: "+(((F=(j=B.response)==null?void 0:j.data)==null?void 0:F.detail)||B.message))}finally{b(!1)}},M=()=>{const j=g||e.existing_dispatch_date;if(j&&e.date&&j<e.date)return alert(`The dispatch date (${j}) is before the test date (${e.date}). Please check it.`),!1;if(e.status!=="UPDATED")return!0;const F=K=>new Date(`${K}T12:00:00`).toLocaleString("en-GB",{month:"long",year:"numeric"}),B=e.existing_dispatch_date,se=[];return B&&j&&B.slice(0,7)!==j.slice(0,7)&&se.push(`• It was dispatched ${B} and is counted in ${F(B)}. Dispatch ${j} moves it to ${F(j)}, changing both months' totals.`),e.existing_branch&&l&&l!==e.existing_branch&&se.push(`• It is recorded at ${e.existing_branch}. This moves it to ${l}.`),se.length?window.confirm(`${e.patient} — this test was already approved.

${se.join(`
`)}

Approve with these changes?`):!0},le=async()=>{var F,B,se;if(!(e.status==="UPDATED"&&!l&&!d)&&(!l||!d)){alert("Please select a branch and trainer before approving.");return}if(M()){h(!0);try{const me=(F=(await $0({gym:n,branch:l||e.existing_branch||"",client_id:e.external_id!=="N/A"?e.external_id:null,client_name:e.patient,test_type:e.test_type,movements:e.movement_count,test_date:e.date,trainer_name:d||e.existing_trainer_name||null,dispatch_date:g||e.existing_dispatch_date||null,check_status:e.status,asymmetry_values:e.asymmetry_values||null})).data)==null?void 0:F.id;v(!0)}catch(K){alert("Error approving: "+(((se=(B=K.response)==null?void 0:B.data)==null?void 0:se.detail)||K.message))}finally{h(!1)}}},Y=async()=>{var j,F;L(!0);try{await V0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count,external_id:e.external_id!=="N/A"?e.external_id:null}),k(!0)}catch(B){alert("Error ignoring: "+(((F=(j=B.response)==null?void 0:j.data)==null?void 0:F.detail)||B.message))}finally{L(!1)}},Le=async()=>{var j,F;try{await G0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),k(!1)}catch(B){alert("Error undoing ignore: "+(((F=(j=B.response)==null?void 0:j.data)==null?void 0:F.detail)||B.message))}},N=async()=>{var j,F;try{await K0({gym:n,client_name:e.patient,test_type:e.test_type,test_date:e.date,movements:e.movement_count}),v(!1)}catch(B){alert("Error undoing approval: "+(((F=(j=B.response)==null?void 0:j.data)==null?void 0:F.detail)||B.message))}},P=()=>{if(!A){alert("No WhatsApp number set for this trainer.");return}const j=A.replace(/\D/g,"");window.open(`https://wa.me/${j}`,"_blank")};return c.jsxs("div",{className:`rounded-xl border p-5 space-y-4 transition-all
      ${S?"border-emerald-700 bg-emerald-950/20":x?"border-red-900 bg-red-950/20":"border-gray-700 bg-gray-900"}`,children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:`text-xs font-semibold px-2 py-0.5 rounded-full ${cb[e.status]}`,children:e.status}),c.jsx("h3",{className:"font-semibold text-white",children:e.patient}),e.external_id&&e.external_id!=="N/A"&&c.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["#",e.external_id]})]}),c.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[c.jsx("span",{children:sb[e.test_type]||e.test_type}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.movement_count," movements"]}),c.jsx("span",{children:"·"}),c.jsx("span",{children:e.date}),e.status==="UPDATED"&&c.jsxs("span",{className:"text-amber-400",children:["(was ",e.old_count,")"]})]})]}),c.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.patient),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),c.jsx(eu,{options:C,value:l,onChange:j=>{s(j),u("")},onSelect:()=>{f.current&&f.current.focus()},placeholder:"Search branch…",disabled:S||x})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),c.jsx(eu,{options:W,value:d,onChange:fe,placeholder:"Search trainer…",disabled:S||x,inputRef:f})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),c.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:g,onChange:j=>y(j.target.value),disabled:S||x})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[c.jsx("button",{onClick:G,disabled:p,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:p?"Loading…":"🖨 Open & Print"}),c.jsx("button",{onClick:()=>{const j={upper:"Upper Body",lower:"Lower Body",full:"Full Body"}[e.test_type]||e.test_type;navigator.clipboard.writeText(`${e.patient} - ${j}`)},className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 transition-colors",children:"📋 Copy File Name"}),!S&&!x&&c.jsx("button",{onClick:Y,disabled:_,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:_?"Ignoring…":"Ignore"}),c.jsx("div",{className:"flex-1"}),c.jsxs("button",{onClick:P,disabled:!A,title:A?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[c.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),S?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-emerald-700/40 text-emerald-400 font-semibold border border-emerald-700",children:"✓ Approved"}),c.jsx("button",{onClick:N,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):x?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-xs px-4 py-1.5 rounded-lg bg-red-900/40 text-red-400 font-semibold border border-red-800",children:"✗ Ignored"}),c.jsx("button",{onClick:Le,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors",children:"Undo"})]}):c.jsx("button",{onClick:le,disabled:m,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:m?"Saving…":"Approve"})]})]})}const db=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],tu=e=>[e.status,e.patient,e.test_type,e.date,e.external_id].join("|");function ub(){const[e,n]=w.useState("Body Motions"),[t,r]=w.useState(!1),[a,o]=w.useState(null),[i,l]=w.useState(null),[s,d]=w.useState("desc"),u=async p=>{var b,S;r(!0),o(null),l(null);try{const v=await H0(e,p);l(v.data)}catch(v){o(((S=(b=v.response)==null?void 0:b.data)==null?void 0:S.detail)||v.message||"Failed to process file")}finally{r(!1)}},f=i?[...i].sort((p,b)=>{const S=new Date(p.date)-new Date(b.date);return s==="asc"?S:-S}):[],g=f.filter(p=>p.status==="NEW"),y=f.filter(p=>p.status==="UPDATED");return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Program Generation"}),c.jsx("div",{className:"flex gap-3",children:db.map(p=>c.jsx("button",{onClick:()=>{n(p.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===p.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:p.logo,alt:p.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},p.name))}),c.jsx(sy,{onFile:u,loading:t}),a&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),i!==null&&c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"flex items-center gap-4 text-sm flex-wrap",children:[c.jsxs("span",{className:"text-gray-300",children:[c.jsx("span",{className:"font-bold text-emerald-400",children:g.length})," new"]}),c.jsx("span",{className:"text-gray-600",children:"|"}),c.jsxs("span",{className:"text-gray-300",children:[c.jsx("span",{className:"font-bold text-amber-400",children:y.length})," updated"]}),i.length===0&&c.jsx("span",{className:"text-gray-500",children:"No new or updated tests found."}),c.jsxs("div",{className:"ml-auto flex gap-1",children:[c.jsx("button",{onClick:()=>d("desc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="desc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Newest first"}),c.jsx("button",{onClick:()=>d("asc"),className:`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${s==="asc"?"bg-brand-600 border-brand-500 text-white":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500"}`,children:"Oldest first"})]})]}),g.length>0&&c.jsxs("section",{className:"space-y-3",children:[c.jsxs("h2",{className:"text-lg font-semibold text-emerald-400 border-b border-emerald-900 pb-1",children:["New Tests (",g.length,")"]}),g.map(p=>c.jsx(nu,{test:p,gym:e},tu(p)))]}),y.length>0&&c.jsxs("section",{className:"space-y-3",children:[c.jsxs("h2",{className:"text-lg font-semibold text-amber-400 border-b border-amber-900 pb-1",children:["Updated Tests (",y.length,")"]}),y.map(p=>c.jsx(nu,{test:p,gym:e},tu(p)))]})]})]})}const xm=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],ym=[{key:"vald",name:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",name:"Bodydot",logo:"/VALD-automator/Bodydot.png"}],Ce=["January","February","March","April","May","June","July","August","September","October","November","December"];function pb(e,n){const t=new Date(e,n-1,1).getDay(),r=new Date(e,n,0).getDate();return Math.ceil((t+r)/7)}function fb(){const e=new Date,[n,t]=w.useState("vald"),[r,a]=w.useState("Body Motions"),[o,i]=w.useState("monthly"),[l,s]=w.useState(e.getFullYear()),[d,u]=w.useState(e.getMonth()+1),[f,g]=w.useState(1),[y,p]=w.useState(null),[b,S]=w.useState(null),[v,m]=w.useState(!1),[h,x]=w.useState(null),k=new Date(l,d,0).getDate(),_=pb(l,d),L=(()=>{const R=e.getFullYear(),C=e.getMonth()+1;return l>R?!0:l<R?!1:d>C?!0:d<C?!1:o==="weekly"?(f-1)*7+1>e.getDate():o==="custom"&&y?y>e.getDate():!1})(),A=async()=>{var R,C,W,fe;m(!0),x(null);try{const G={gym:r,period_type:o==="custom"?"monthly":o,year:l,month:d,week_number:o==="weekly"?f:null,start_day:o==="custom"&&y?y:null,end_day:o==="custom"&&b?b:null},M=n==="bodydot"?await ob(G):await q0(G),le=new Blob([M.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),Y=URL.createObjectURL(le),Le=document.createElement("a"),P=(((R=M.headers)==null?void 0:R["content-disposition"])||"").match(/filename="([^"]+)"/),j=n==="bodydot"?"Bodydot ":"",F=o==="custom"?`${Ce[d-1]} ${l} (Day ${y||1}–${b||k})`:o==="monthly"?`${Ce[d-1]} ${l}`:`Week ${f} - ${Ce[d-1]} ${l}`;Le.href=Y,Le.download=P?P[1]:`${j}${F} - ${r}.xlsx`,Le.click(),URL.revokeObjectURL(Y)}catch(G){let M=G.message;if(((C=G.response)==null?void 0:C.data)instanceof Blob)try{M=JSON.parse(await G.response.data.text()).detail||M}catch{}else M=((fe=(W=G.response)==null?void 0:W.data)==null?void 0:fe.detail)||M;x(M||"Failed to generate report")}finally{m(!1)}};return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Reports"}),c.jsx("div",{}),c.jsx("h1",{className:"text-2xl font-bold text-white hidden lg:block",children:"Payment Report"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start",children:[c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Service"}),c.jsx("div",{className:"flex gap-3",children:ym.map(R=>c.jsx("button",{onClick:()=>t(R.key),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===R.key?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:R.logo,alt:R.name,className:"h-14 w-28 object-contain px-0.5 py-px"})},R.key))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),c.jsx("div",{className:"flex gap-3",children:xm.map(R=>c.jsx("button",{onClick:()=>a(R.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${r===R.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:R.logo,alt:R.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},R.name))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Report Type"}),c.jsx("div",{className:"flex gap-2",children:["monthly","weekly","custom"].map(R=>c.jsx("button",{onClick:()=>i(R),className:`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors
                ${o===R?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:R},R))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:d,onChange:R=>u(Number(R.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Ce.map((R,C)=>c.jsx("option",{value:C+1,children:R},C+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:l,onChange:R=>s(Number(R.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(R=>c.jsx("option",{value:R,children:R},R))})]})]}),o==="custom"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date Range"}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"Start Day"}),c.jsxs("select",{value:y||"",onChange:R=>p(R.target.value?Number(R.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[c.jsx("option",{value:"",children:"—"}),Array.from({length:k},(R,C)=>C+1).map(R=>c.jsx("option",{value:R,children:R},R))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-500 mb-1",children:"End Day"}),c.jsxs("select",{value:b||"",onChange:R=>S(R.target.value?Number(R.target.value):null),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[c.jsx("option",{value:"",children:"—"}),Array.from({length:k},(R,C)=>C+1).map(R=>c.jsx("option",{value:R,children:R},R))]})]})]})]}),o==="weekly"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Week"}),c.jsx("div",{className:"flex gap-2 flex-wrap",children:Array.from({length:_},(R,C)=>C+1).map(R=>c.jsxs("button",{onClick:()=>g(R),className:`w-12 h-10 rounded-lg text-sm font-semibold transition-colors
                  ${f===R?"bg-brand-600 text-white":"bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`,children:["W",R]},R))}),c.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Week ",f,": days ",(f-1)*7+1,"–",Math.min(f*7,new Date(l,d,0).getDate())]})]}),h&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:h}),c.jsx("button",{onClick:A,disabled:v||L,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:v?"Generating…":"Generate & Download Report"}),L&&c.jsx("p",{className:"text-xs text-amber-500 text-center",children:"Cannot generate a report for a future period."}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Report pulls all ",c.jsx("strong",{className:"text-gray-400",children:"approved"})," ",n==="bodydot"?"Bodydot":"VALD"," programs",o==="weekly"?` dispatched in week ${f} of ${Ce[d-1]} ${l}`:o==="custom"?` dispatched between day ${y||1} and day ${b||k} of ${Ce[d-1]} ${l}`:` dispatched in ${Ce[d-1]} ${l}`,"."]})]}),c.jsx("div",{className:"hidden lg:block bg-gray-700 self-stretch"}),c.jsxs("div",{className:"space-y-6",children:[c.jsx(hb,{}),c.jsx("div",{className:"border-t border-gray-700 pt-6",children:c.jsx(mb,{})})]})]})]})}function mb(){const e=new Date,[n,t]=w.useState("Body Motions"),[r,a]=w.useState(e.getMonth()+1),[o,i]=w.useState(e.getFullYear()),[l,s]=w.useState(!1),[d,u]=w.useState(null),f=`${Ce[(r-2+12)%12]} ${r===1?o-1:o}`,g=async()=>{var y,p,b;s(!0),u(null);try{const S=await eb(n,r,o),v=new Blob([S.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),m=URL.createObjectURL(v),h=document.createElement("a"),k=(((y=S.headers)==null?void 0:y["content-disposition"])||"").match(/filename="([^"]+)"/);h.href=m;const _=String(o%100).padStart(2,"0"),L=Ce[(r-2+12)%12].slice(0,3).toUpperCase(),A=Ce[r-1].slice(0,3).toUpperCase(),R=`Test Growth Tracker - ${n} - ${L}-${A} ${_}.xlsx`;h.download=k?k[1]:R,h.click(),URL.revokeObjectURL(m)}catch(S){u(((b=(p=S.response)==null?void 0:p.data)==null?void 0:b.detail)||S.message||"Failed to generate growth tracker")}finally{s(!1)}};return c.jsxs("div",{className:"max-w-2xl space-y-5",children:[c.jsx("div",{children:c.jsx("h1",{className:"text-2xl font-bold text-white",children:"VALD Test Growth Tracker"})}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Gym"}),c.jsx("div",{className:"flex gap-3",children:xm.map(y=>c.jsx("button",{onClick:()=>t(y.name),className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===y.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:y.logo,alt:y.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},y.name))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:r,onChange:y=>a(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Ce.map((y,p)=>c.jsx("option",{value:p+1,children:y},p+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:o,onChange:y=>i(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(y=>c.jsx("option",{value:y,children:y},y))})]})]}),d&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:d}),c.jsx("button",{onClick:g,disabled:l,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:l?"Generating…":"Generate & Download Growth Tracker"}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Compares ",c.jsxs("strong",{className:"text-gray-400",children:[Ce[r-1]," ",o]})," vs"," ",c.jsx("strong",{className:"text-gray-400",children:f})," test counts per branch and trainer."]})]})}function hb(){const e=new Date,[n,t]=w.useState("vald"),[r,a]=w.useState(e.getMonth()+1),[o,i]=w.useState(e.getFullYear()),[l,s]=w.useState(!1),[d,u]=w.useState(null),f=n==="bodydot",g=async()=>{var y,p,b,S;s(!0),u(null);try{const v=f?await Z0(r,o):await X0(r,o),m=new Blob([v.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),h=URL.createObjectURL(m),x=document.createElement("a"),_=(((y=v.headers)==null?void 0:y["content-disposition"])||"").match(/filename="([^"]+)"/);x.href=h,x.download=_?_[1]:`${f?"Bodydot ":""}Payment - ${Ce[r-1]} ${o}.xlsx`,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(h)}catch(v){let m=v.message;if(((p=v.response)==null?void 0:p.data)instanceof Blob)try{m=JSON.parse(await v.response.data.text()).detail||m}catch{}else m=((S=(b=v.response)==null?void 0:b.data)==null?void 0:S.detail)||m;u(m||"Failed to generate payment report")}finally{s(!1)}};return c.jsxs("div",{className:"flex flex-col gap-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white lg:hidden",children:"Payment Report"}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Service"}),c.jsx("div",{className:"flex gap-3",children:ym.map(y=>c.jsx("button",{onClick:()=>{t(y.key),u(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
                ${n===y.key?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:y.logo,alt:y.name,className:"h-14 w-28 object-contain px-0.5 py-px"})},y.key))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:r,onChange:y=>a(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:Ce.map((y,p)=>c.jsx("option",{value:p+1,children:y},p+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:o,onChange:y=>i(Number(y.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(y=>c.jsx("option",{value:y,children:y},y))})]})]}),d&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:d}),c.jsx("button",{onClick:g,disabled:l,className:"w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors",children:l?"Generating…":"Generate & Download Payment Report"}),c.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["Appends all ",f?"Bodydot":"VALD"," programs from ",c.jsx("strong",{className:"text-gray-400",children:"May 2026"})," through ",c.jsxs("strong",{className:"text-gray-400",children:[Ce[r-1]," ",o]})," to the payment report."]})]})}const gb=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}],vb={upper:"Upper Body",lower:"Lower Body",full:"Full Body"};function xb({item:e,gym:n}){const[t,r]=w.useState(!1),a=async()=>{var o,i;r(!0);try{const l=await hm({gym:n,test_type:e.test_type,patient_name:e.patient,test_date:e.date,cells_data:e.cells_data,prev_asymmetries:null}),s=new Blob([l.data],{type:"text/html"}),d=URL.createObjectURL(s),u=window.open(d,"_blank");u&&u.addEventListener("load",()=>u.print())}catch(l){alert("Failed to open program: "+(((i=(o=l.response)==null?void 0:o.data)==null?void 0:i.detail)||l.message))}finally{r(!1)}};return c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 flex items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"font-semibold text-white",children:e.patient}),c.jsxs("p",{className:"text-sm text-gray-400 mt-0.5",children:[vb[e.test_type]||e.test_type,c.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.movement_count," movements",c.jsx("span",{className:"mx-1.5 text-gray-600",children:"·"}),e.date]})]}),c.jsx("button",{onClick:a,disabled:t,className:"shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:t?"Loading…":"🖨 Open & Print"})]})}function yb(){const[e,n]=w.useState("Body Motions"),[t,r]=w.useState(!1),[a,o]=w.useState(null),[i,l]=w.useState(null),s=async g=>{var y,p;if(g.length){r(!0),o(null),l(null);try{const b=await W0(e,g[0]);l(b.data)}catch(b){o(((p=(y=b.response)==null?void 0:y.data)==null?void 0:p.detail)||b.message||"Failed to process file")}finally{r(!1)}}},{getRootProps:d,getInputProps:u,isDragActive:f}=Us({onDrop:s,accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-excel.sheet.macroEnabled.12":[".xlsm"],"application/vnd.ms-excel":[".xls"]},multiple:!1,disabled:t});return c.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Generate"}),c.jsx("div",{className:"flex gap-3",children:gb.map(g=>c.jsx("button",{onClick:()=>{n(g.name),l(null)},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${e===g.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:g.logo,alt:g.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},g.name))}),c.jsxs("div",{...d(),className:`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors
          ${f?"border-brand-500 bg-brand-900/20":"border-gray-700 hover:border-gray-500"}
          ${t?"opacity-50 cursor-not-allowed":""}`,children:[c.jsx("input",{...u()}),c.jsx("div",{className:"text-4xl mb-3",children:"📂"}),t?c.jsx("p",{className:"text-gray-400",children:"Generating programs…"}):f?c.jsx("p",{className:"text-brand-400 font-medium",children:"Drop it here"}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"text-gray-300 font-medium",children:"Drop your VALD export file here"}),c.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"or click to browse (.xlsx / .xlsm)"})]})]}),a&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:a}),i!==null&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("p",{className:"text-sm text-gray-400",children:[c.jsx("span",{className:"font-bold text-white",children:i.length})," program",i.length!==1?"s":""," found"]}),i.length===0&&c.jsx("p",{className:"text-gray-500 text-sm",children:"No programs could be parsed from this file."}),i.map((g,y)=>c.jsx(xb,{item:g,gym:e},y))]})]})}const ru=["January","February","March","April","May","June","July","August","September","October","November","December"],Ca=[{key:"vald",label:"VALD",logo:"/VALD-automator/VALD.png"},{key:"bodydot",label:"Bodydot",logo:"/VALD-automator/Bodydot.png"}];function mr({curr:e,prev:n,compact:t=!1}){const r=e-n;if(r===0)return c.jsxs("span",{className:"text-gray-600",children:["— ",t?"":"no change"]});const a=r>0,o=a?"text-emerald-400":"text-red-400",i=n>0?Math.round(r/n*100):null,l=i===null?"new":`${i>0?"+":""}${i}%`;return c.jsxs("span",{className:o,children:[a?"▲":"▼"," ",Math.abs(r),!t&&c.jsxs("span",{className:"text-gray-500",children:[" (",l,")"]})]})}function bb(){var h;const e=new Date,[n,t]=w.useState(e.getMonth()+1),[r,a]=w.useState(e.getFullYear()),[o,i]=w.useState(null),[l,s]=w.useState(!1),[d,u]=w.useState(null);w.useEffect(()=>{let x=!1;return s(!0),u(null),ab(r,n).then(k=>{x||i(k.data)}).catch(k=>{var _,L;x||u(((L=(_=k.response)==null?void 0:_.data)==null?void 0:L.detail)||k.message)}).finally(()=>{x||s(!1)}),()=>{x=!0}},[r,n]);const f=(o==null?void 0:o.gyms)||["Body Motions","Body Masters"],g=(o==null?void 0:o.prev)||{},y=(o==null?void 0:o.period_label)||`${ru[n-1]} ${r}`,p=((h=o==null?void 0:o.prev)==null?void 0:h.period_label)||"last month",b=(x,k)=>f.reduce((_,L)=>{var A;return _+(((A=k==null?void 0:k[x])==null?void 0:A[L])||0)},0),S=(x,k)=>Ca.reduce((_,L)=>{var A;return _+(((A=k==null?void 0:k[L.key])==null?void 0:A[x])||0)},0),v=x=>Ca.reduce((k,_)=>k+b(_.key,x),0),m=[{label:"Total tests",curr:v(o),prev:v(g)},...Ca.map(x=>({label:x.label,curr:b(x.key,o),prev:b(x.key,g)}))];return c.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Quick Report"}),c.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Tests dispatched — ",c.jsx("span",{className:"text-gray-300 font-medium",children:y})," vs"," ",c.jsx("span",{className:"text-gray-300 font-medium",children:p}),(o==null?void 0:o.partial)&&c.jsx("span",{className:"text-gray-500",children:" (same period, month-to-date)"}),"."]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-sm",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Month"}),c.jsx("select",{value:n,onChange:x=>t(Number(x.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:ru.map((x,k)=>c.jsx("option",{value:k+1,children:x},k+1))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Year"}),c.jsx("select",{value:r,onChange:x=>a(Number(x.target.value)),className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-500",children:[e.getFullYear()-1,e.getFullYear(),e.getFullYear()+1].map(x=>c.jsx("option",{value:x,children:x},x))})]})]}),d&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:d}),c.jsx("div",{className:`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-opacity ${l?"opacity-50":""}`,children:m.map(x=>c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 px-5 py-4",children:[c.jsx("div",{className:"text-xs uppercase tracking-wide text-gray-500",children:x.label}),c.jsx("div",{className:"mt-1 text-3xl font-bold text-white tabular-nums",children:x.curr}),c.jsxs("div",{className:"mt-1 text-sm",children:[c.jsx(mr,{curr:x.curr,prev:x.prev}),c.jsxs("span",{className:"text-gray-600 text-xs",children:[" vs ",p]})]})]},x.label))}),c.jsx("div",{className:`rounded-xl border border-gray-700 overflow-hidden transition-opacity ${l?"opacity-50":""}`,children:c.jsxs("table",{className:"w-full text-sm",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-gray-800/70 text-gray-400",children:[c.jsx("th",{className:"text-left font-medium px-5 py-3",children:"Service"}),f.map(x=>c.jsx("th",{className:"text-right font-medium px-5 py-3",children:x},x)),c.jsx("th",{className:"text-right font-semibold px-5 py-3 text-gray-300",children:"Total"})]})}),c.jsxs("tbody",{children:[Ca.map(x=>c.jsxs("tr",{className:"border-t border-gray-800 align-top",children:[c.jsx("td",{className:"px-5 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"inline-flex items-center justify-center h-7 w-14 rounded bg-gray-100",children:c.jsx("img",{src:x.logo,alt:x.label,className:"h-6 w-auto object-contain px-0.5"})}),c.jsx("span",{className:"text-white font-medium",children:x.label})]})}),f.map(k=>{var _,L,A;return c.jsxs("td",{className:"text-right px-5 py-3 text-gray-200 tabular-nums",children:[c.jsx("div",{children:((_=o==null?void 0:o[x.key])==null?void 0:_[k])??"—"}),c.jsx("div",{className:"text-xs mt-0.5",children:c.jsx(mr,{curr:((L=o==null?void 0:o[x.key])==null?void 0:L[k])||0,prev:((A=g==null?void 0:g[x.key])==null?void 0:A[k])||0,compact:!0})})]},k)}),c.jsxs("td",{className:"text-right px-5 py-3 font-semibold text-white tabular-nums",children:[c.jsx("div",{children:b(x.key,o)}),c.jsx("div",{className:"text-xs mt-0.5 font-normal",children:c.jsx(mr,{curr:b(x.key,o),prev:b(x.key,g),compact:!0})})]})]},x.key)),c.jsxs("tr",{className:"border-t-2 border-gray-700 bg-gray-800/40 align-top",children:[c.jsx("td",{className:"px-5 py-3 font-semibold text-gray-300",children:"Total"}),f.map(x=>c.jsxs("td",{className:"text-right px-5 py-3 font-semibold text-white tabular-nums",children:[c.jsx("div",{children:S(x,o)}),c.jsx("div",{className:"text-xs mt-0.5 font-normal",children:c.jsx(mr,{curr:S(x,o),prev:S(x,g),compact:!0})})]},x)),c.jsxs("td",{className:"text-right px-5 py-3 font-bold text-brand-300 tabular-nums text-base",children:[c.jsx("div",{children:v(o)}),c.jsx("div",{className:"text-xs mt-0.5 font-normal",children:c.jsx(mr,{curr:v(o),prev:v(g),compact:!0})})]})]})]})]})}),c.jsxs("p",{className:"text-[11px] text-gray-600",children:["▲ up / ▼ down vs ",p,".",(o==null?void 0:o.partial)&&" This month is still in progress, so it’s compared to the same day range of last month."]})]})}const wb=[{name:"Body Motions",logo:"/VALD-automator/Motions_logo.png"},{name:"Body Masters",logo:"/VALD-automator/Masters_logo.png"}];function Sb({trainer:e,allBranches:n,onUpdated:t,onDeleted:r}){const[a,o]=w.useState(!1),[i,l]=w.useState(e.name),[s,d]=w.useState(e.whatsapp||""),[u,f]=w.useState(e.branch),[g,y]=w.useState(!1),[p,b]=w.useState(!1),S=i!==e.name||s!==(e.whatsapp||"")||u!==e.branch,v=async()=>{var x,k;y(!0);try{const _=await Q0(e.id,{name:i,whatsapp:s,branch:u});t(_.data),o(!1)}catch(_){alert("Failed to save: "+(((k=(x=_.response)==null?void 0:x.data)==null?void 0:k.detail)||_.message))}finally{y(!1)}},m=async()=>{var x,k;if(confirm(`Delete "${e.name}"?`)){b(!0);try{await J0(e.id),r(e.id)}catch(_){alert("Failed to delete: "+(((k=(x=_.response)==null?void 0:x.data)==null?void 0:k.detail)||_.message)),b(!1)}}},h=()=>{l(e.name),d(e.whatsapp||""),f(e.branch),o(!1)};return a?c.jsxs("div",{className:"py-3 border-b border-gray-700 space-y-2",children:[c.jsxs("div",{className:"flex gap-2 items-center",children:[c.jsx("input",{value:i,onChange:x=>l(x.target.value),placeholder:"Name",className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"}),c.jsx("input",{value:s,onChange:x=>d(x.target.value),placeholder:"WhatsApp e.g. +966...",className:"w-44 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"})]}),c.jsxs("div",{className:"flex gap-2 items-center",children:[c.jsx("select",{value:u,onChange:x=>f(x.target.value),className:"flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",children:n.map(x=>c.jsx("option",{value:x,children:x},x))}),c.jsx("button",{onClick:v,disabled:g||!S,className:"px-3 py-1 text-xs rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40",children:g?"Saving…":"Save"}),c.jsx("button",{onClick:h,className:"px-3 py-1 text-xs rounded border border-gray-600 text-gray-400 hover:text-white",children:"Cancel"})]})]}):c.jsxs("div",{className:"flex items-center gap-3 py-2.5 border-b border-gray-800 last:border-0 group",children:[c.jsx("span",{className:"w-72 shrink-0 text-sm text-white",children:e.name}),c.jsx("span",{className:"flex-1 text-sm text-gray-400",children:e.whatsapp||c.jsx("span",{className:"text-gray-600 italic",children:"no number"})}),c.jsxs("div",{className:"flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[c.jsx("button",{onClick:()=>o(!0),className:"text-xs px-2.5 py-1 rounded border border-gray-600 text-gray-300 hover:border-brand-500 hover:text-brand-300",children:"Edit"}),c.jsx("button",{onClick:m,disabled:p,className:"text-xs px-2.5 py-1 rounded border border-gray-700 text-gray-500 hover:border-red-600 hover:text-red-400 disabled:opacity-40",children:p?"…":"Delete"})]})]})}function kb({gym:e,branch:n,onAdded:t}){const[r,a]=w.useState(""),[o,i]=w.useState(""),[l,s]=w.useState(!1),d=async()=>{var u,f;if(r.trim()){s(!0);try{const g=await Y0({gym:e,branch:n,name:r.trim(),whatsapp:o});t(g.data),a(""),i("")}catch(g){alert("Failed to add: "+(((f=(u=g.response)==null?void 0:u.data)==null?void 0:f.detail)||g.message))}finally{s(!1)}}};return c.jsxs("div",{className:"flex gap-2 pt-3 border-t border-gray-700 mt-1",children:[c.jsx("input",{value:r,onChange:u=>a(u.target.value),placeholder:"New trainer name",className:"flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:u=>u.key==="Enter"&&d()}),c.jsx("input",{value:o,onChange:u=>i(u.target.value),placeholder:"WhatsApp (optional)",className:"w-44 bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",onKeyDown:u=>u.key==="Enter"&&d()}),c.jsx("button",{onClick:d,disabled:l||!r.trim(),className:"px-4 py-1.5 text-sm rounded bg-brand-600 hover:bg-brand-500 text-white disabled:opacity-40 shrink-0",children:l?"Adding…":"+ Add"})]})}function Eb(){var y;const{data:e,load:n,reload:t,getBranches:r}=vm(),[a,o]=w.useState("Body Motions"),[i,l]=w.useState("");w.useEffect(()=>{n(a)},[a]);const s=r(a),d=i?[...((y=e[a])==null?void 0:y[i])||[]].sort((p,b)=>p.name.localeCompare(b.name)):[],u=async p=>{p.branch!==i?(await t(a),l(p.branch)):t(a)},f=()=>t(a),g=()=>t(a);return c.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Trainers"}),c.jsx("div",{className:"flex gap-3",children:wb.map(p=>c.jsx("button",{onClick:()=>{o(p.name),l("")},className:`rounded-xl overflow-hidden transition-all border-2 bg-gray-100
              ${a===p.name?"border-brand-500 shadow-lg shadow-brand-500/30 scale-105":"border-transparent opacity-60 hover:opacity-90 hover:border-gray-500"}`,children:c.jsx("img",{src:p.logo,alt:p.name,className:"h-14 w-auto object-contain px-3 py-1.5"})},p.name))}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Branch"}),c.jsxs("select",{value:i,onChange:p=>l(p.target.value),className:"bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 w-72",children:[c.jsx("option",{value:"",children:"— Select branch —"}),s.map(p=>c.jsx("option",{value:p,children:p},p))]})]}),i&&c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5",children:[c.jsxs("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3",children:[i," — ",d.length," trainer",d.length!==1?"s":""]}),d.map(p=>c.jsx(Sb,{trainer:{...p,branch:i},allBranches:s,onUpdated:u,onDeleted:f},p.id)),c.jsx(kb,{gym:a,branch:i,onAdded:g})]})]})}const _b="https://bdot-proxy.andyayas27.workers.dev",bm=`${_b}/v1`,Ab="YmRvdF94NjI2cmg1N2VzYnh0N2pqdTZidTpmOTBkYzg5N2U3NTk2MGY0OTk1OGI5YTIwZTE2ZDg4ODI1MzBkNGI0MGVmY2VkZjYzYmU5ZTFlNjc5MjdlMGVk",au=[{id:"bf9ffaec-d3ed-4742-bce9-945f619ea1bc",name:"Body Motions – Al Sahafa",bilingual:!0,gym:"Body Motions",branch:"RUH - Al Sahafa"},{id:"1627c00e-e275-4356-91ae-6f85127bd21c",name:"Body Masters – Al Aarid",bilingual:!0,gym:"Body Masters",branch:"RUH - Al Aarid"},{id:"ebce917d-1c31-4516-8396-64283b4cbeaa",name:"Body Coach",bilingual:!1,gym:"Body Coach",branch:null}];function Rb(e){let n=0,t=0;for(const r of(e==null?void 0:e.sequences)||[])for(const a of r.stepResults||[])t+=1,a.status==="Analyzed"&&(n+=1);return{analyzed:n,total:t,valid:n>0&&n>t-n}}const ou=e=>new Promise(n=>setTimeout(n,e)),Lb=4;let Eo=0;const wm=[];function Tb(){return Eo<Lb?(Eo++,Promise.resolve()):new Promise(e=>wm.push(e))}function Cb(){Eo--;const e=wm.shift();e&&(Eo++,e())}async function Sm(e,n,t=5){let r;for(let a=0;a<t;a++){let o;try{o=await fetch(e,n)}catch(i){r=i,await ou(Math.min(2**a,8)*1e3);continue}if(o.status===429||o.status>=500){const i=parseFloat(o.headers.get("Retry-After")),l=(Number.isFinite(i)?i:Math.min(2**a,8))*1e3+Math.random()*300;r=new Error(`HTTP ${o.status}`),await ou(l);continue}return o}throw r||new Error("request failed")}let Na=null,iu=0,hr=null;async function Nb(){return Na&&Date.now()<iu-6e4?Na:hr||(hr=(async()=>{try{const e=await Sm(`${bm}/oauth/token`,{method:"POST",headers:{Authorization:`Basic ${Ab}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});if(!e.ok)throw new Error(`Auth failed (HTTP ${e.status})`);const n=await e.json();return Na=n.access_token,iu=Date.now()+n.expires_in*1e3,Na}finally{hr=null}})(),hr)}async function Ws(e){await Tb();try{const n=await Nb(),t=await Sm(`${bm}${e}`,{headers:{Authorization:`Bearer ${n}`}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}finally{Cb()}}async function km(e){const n=await Ws(`/clients?organizationId=${e}`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")),t}const Ii=new Map;async function Em(e){if(Ii.has(e))return Ii.get(e);const n=await Ws(`/clients/${e}/measurement-sessions`),t=Array.isArray(n)?n:n.data||[];return t.sort((r,a)=>new Date(a.createdAt)-new Date(r.createdAt)),Ii.set(e,t),t}const zi=new Map;async function gt(e,n){if(zi.has(n))return zi.get(n);const t=await Ws(`/clients/${e}/measurement-sessions/${n}`);return zi.set(n,t),t}const jb=`<!DOCTYPE html>
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
</html>`,Db=`${window.location.origin}/VALD-automator/bodydot/`;function Ys(e,n,t){const r={session:e,clientName:n,lang:t?"bilingual":"en",autoPrint:!0},a='<meta charset="UTF-8">',o=`<base href="${Db}"><script>window.__BODYDOT__ = ${JSON.stringify(r)};<\/script>`,i=jb.replace(a,`${a}${o}`),l=new Blob([i],{type:"text/html"}),s=URL.createObjectURL(l);if(!window.open(s,"_blank"))throw URL.revokeObjectURL(s),new Error("Popup blocked — allow popups for this site and try again.");setTimeout(()=>URL.revokeObjectURL(s),6e4)}const Pb=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Posture Assessment</title>
<!-- Sora for text, JetBrains Mono for every number; IBM Plex Sans Arabic only as a fallback so
     Arabic client names render properly in the header. -->
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@600;700&display=swap" rel="stylesheet">
<style>
/* BodyDot Client View — design_handoff_bodydot_client_view (concept 2a). One fixed A4 page. */
@page { size: A4; margin: 0 }
* { box-sizing: border-box }
html, body { margin: 0; background: #DAD6CE; font-family: 'Sora', 'IBM Plex Sans Arabic', sans-serif; color: #122649;
             -webkit-print-color-adjust: exact; print-color-adjust: exact }
.toolbar { display: flex; justify-content: center; padding: 18px 0 0 }
.toolbar button { font: 700 11px 'Sora', sans-serif; letter-spacing: .12em; background: #122649; color: #fff; border: 0;
                  padding: 10px 22px; cursor: pointer }
.sheet { width: 794px; height: 1123px; margin: 22px auto 40px; background: #EFECE6; box-shadow: 0 24px 60px rgba(18,38,73,.18);
         overflow: hidden; display: flex; flex-direction: column;
         --hb-pad: 9px 14px; --pr-pad: 8px 0; --body-gap: 24px }
@media print { html, body { background: none } .toolbar { display: none } .sheet { margin: 0; box-shadow: none } }
.mono { font-family: 'JetBrains Mono', monospace }
.hdr { background: #122649; padding: 22px 34px 20px; display: flex; align-items: flex-end; justify-content: space-between; gap: 20px }
.stat { display: flex; flex-direction: column; gap: 2px; align-items: flex-end }
.stat b { font-size: 42px; font-weight: 800; line-height: .85; letter-spacing: -.04em }
.stat span { font-size: 9px; font-weight: 700; letter-spacing: .13em; color: #fff }
.body { flex: 1; padding: 22px 34px 20px; display: flex; flex-direction: column; gap: var(--body-gap); min-height: 0 }
.sh { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; border-bottom: 1.5px solid #122649; padding-bottom: 7px }
.sh h2 { margin: 0; font-size: 18px; font-weight: 700; letter-spacing: -.015em; line-height: 1.1 }
.cap { font-size: 8.5px; font-weight: 600; letter-spacing: .14em; opacity: .7 }
.pr { display: grid; grid-template-columns: 36px minmax(0,1fr) 190px 66px; gap: 0 16px; align-items: center; padding: var(--pr-pad);
      border-bottom: 1px solid rgba(18,38,73,.13) }
.pr .n { font-size: 22px; font-weight: 800; opacity: .22; line-height: 1; letter-spacing: -.04em }
.pr .nm { font-size: 13px; font-weight: 700; letter-spacing: -.01em; line-height: 1.2 }
.pr .ds { font-size: 9.5px; line-height: 1.35; opacity: .82; margin-top: 3px }
.bar { position: relative; height: 5px; background: rgba(18,38,73,.1) }
.band { position: absolute; top: 0; bottom: 0; background: rgba(0,94,255,.55) }
.dot { position: absolute; top: -3.5px; width: 12px; height: 12px; border-radius: 50%; background: #FF403C; border: 2px solid #EFECE6; margin-left: -6px }
.bl { display: flex; justify-content: space-between; gap: 6px; margin-top: 6px; font-size: 8px; white-space: nowrap }
.chip { font-size: 12.5px; font-weight: 500; color: #fff; background: #FF403C; padding: 5px 0; text-align: center; line-height: 1.1 }
.row3 { display: grid; grid-template-columns: 96px minmax(0,1fr) minmax(0,1fr); gap: 0 4px }
.side { background: #122649; padding: 10px 12px; display: flex; flex-direction: column; gap: 5px }
.side b { font-size: 9.5px; font-weight: 800; letter-spacing: .12em; color: #fff; line-height: 1.25 }
.side span { font-size: 8.5px; line-height: 1.4; color: #64E0FF }
.cell { background: #fff; padding: var(--hb-pad); display: flex; flex-direction: column; gap: 4px }
.hb { display: grid; grid-template-columns: 10px minmax(0,1fr); gap: 8px; align-items: baseline; font-size: 9.5px; line-height: 1.35 }
.hb i { font-style: normal; font-size: 11px; font-weight: 700; line-height: 1 }
.tag { padding: 7px 14px; font-size: 11px; font-weight: 800; letter-spacing: .14em }
.grp { display: flex; flex-direction: column; gap: 6px; min-width: 0 }
.grp h4 { margin: 0; font-size: 8px; font-weight: 700; letter-spacing: .06em; line-height: 1.3; text-transform: uppercase; white-space: nowrap;
          border-bottom: 1px solid rgba(18,38,73,.15); padding-bottom: 5px }
.m { display: grid; grid-template-columns: 6px minmax(0,1fr) auto; gap: 6px; align-items: baseline; font-size: 9px; line-height: 1.3 }
.m s { width: 6px; height: 6px; border-radius: 50%; transform: translateY(-1px); text-decoration: none }
.lg { display: flex; align-items: center; gap: 6px } .lg s { width: 7px; height: 7px; border-radius: 50% }
.ft { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 12px; border-top: 1px solid rgba(18,38,73,.15);
      padding-top: 10px; font-size: 8.5px; color: rgba(18,38,73,.65) }
.note { padding: 12px 0 2px; font-size: 11px; opacity: .8 }
.err { font-family: sans-serif; padding: 40px; color: #c0392b }
</style>
</head>
<body>
<div class="toolbar"><button onclick="window.print()">PRINT / SAVE AS PDF</button></div>
<div class="sheet" id="sheet"></div>
<script>
// ── Content: verbatim from "BodyDot Client View PDF - Content.xlsx" ─────────────────────────
const CONTENT = {"groups":[{"order":1,"label":"Head & neck","ar":"الرأس والرقبة"},{"order":2,"label":"Shoulders & upper back","ar":"الكتفان وأعلى الظهر"},{"order":3,"label":"Trunk & balance","ar":"الجذع والاتزان"},{"order":4,"label":"Lower back & pelvis","ar":"أسفل الظهر والحوض"},{"order":5,"label":"Hips, knees & ankles","ar":"الورك والركبتان والكاحلان"}],"measures":[{"code":"S01","name":"Forward head","group":"Head & neck","description":"Your head sits too far in front of your body instead of resting on top of your neck.","doLife":"Hold your phone up at eye level instead of looking down at it.","doGym":"When your plan has a pulling exercise, slow down and hold for one second at the end of each pull.","dontLife":"Do not sleep on a thick, high pillow. It pushes your head forward all night.","dontGym":"Do not let your chin push forward when a set gets hard. Keep it level."},{"code":"S11","name":"Head over shoulder","group":"Head & neck","description":"If both results are off, your head and your shoulders are both sitting forward.","doLife":"Raise your screen so the top of it is level with your eyes.","doGym":"Before you train, do 10 slow chin tucks: pull your chin straight back and hold 5 seconds.","dontLife":"Do not lie on your side propping your head on your hand to read or scroll.","dontGym":"Do not poke your head forward to see yourself in the mirror. Move your eyes, not your head."},{"code":"F01","name":"Head tilt","group":"Head & neck","description":"Your head leans towards one shoulder instead of sitting level.","doLife":"Change the side you carry your bag on every day.","doGym":"On any exercise you do one side at a time, start with the weaker side and match the other side to it.","dontLife":"Do not hold your phone between your ear and your shoulder.","dontGym":"Do not turn your head to one side while you lift. Keep your eyes forward."},{"code":"S02","name":"Rounded shoulders","group":"Shoulders & upper back","description":"Your shoulders roll forward instead of sitting under your ears.","doLife":"Stand up and open your chest for 30 seconds every hour that you sit.","doGym":"On every pulling exercise in your plan, pause for one second when the handle is closest to you.","dontLife":"Do not use a laptop on your lap. It pulls your shoulders forward.","dontGym":"Do not let your shoulders roll forward at the end of a set. Stop the set instead."},{"code":"S05","name":"Upper back curve","group":"Shoulders & upper back","description":"A small curve is normal and healthy. Too much and you look hunched.","doLife":"Sit with your back against the chair, not curved away from it.","doGym":"Spend 1 minute lying back over a foam roller before you start training.","dontLife":"Do not spend long periods bent over a low table or a phone.","dontGym":"Do not round your upper back to move the last few centimetres of a lift. Keep your chest open."},{"code":"Q01","name":"Overhead shoulder control","group":"Shoulders & upper back","description":"If they fall forward, your shoulders cannot reach a safe overhead position yet.","doLife":"Reach both arms overhead against a wall and hold for 30 seconds a day.","doGym":"Before any overhead exercise, slide both arms slowly up a wall 10 times to warm the shoulders.","dontLife":"Do not carry a heavy bag on one shoulder all day.","dontGym":"Do not arch your lower back to get the weight overhead. Use a lighter weight."},{"code":"F02","name":"Shoulder level","group":"Shoulders & upper back","description":"One shoulder sits higher than the other.","doLife":"Carry bags on both sides, or use a backpack with both straps.","doGym":"When your plan uses dumbbells, watch that both arms finish at the same height.","dontLife":"Do not sit with one arm resting high on an armrest or a car door.","dontGym":"Do not let the strong side take over. When one side stops, the set is finished."},{"code":"F03","name":"Shoulder slope","group":"Shoulders & upper back","description":"A steep drop can mean the muscles on top of your shoulder are weak.","doLife":"Keep your shoulders relaxed when you walk, not pulled up and not pulled down.","doGym":"When you hold or carry weight, keep your shoulders steady instead of letting them sag.","dontLife":"Do not carry heavy shopping bags with straight hanging arms for a long time.","dontGym":"Do not force your shoulders down hard on every repetition. Let them move naturally."},{"code":"S10","name":"Upper body lean","group":"Shoulders & upper back","description":"It is not about the shoulder joint. It is about how your whole body is stacked.","doLife":"Stand with your weight in the middle of your feet, not on your toes or your heels.","doGym":"On standing exercises, keep your ribs stacked above your hips.","dontLife":"Do not stand leaning on one hip for long periods.","dontGym":"Do not lean backwards to finish a press. If you have to lean, the weight is too heavy."},{"code":"F04","name":"Elbow straightness","group":"Shoulders & upper back","description":"Some people cannot straighten fully because of an old injury or tightness.","doLife":"Let your arms hang straight and relaxed when you stand and walk.","doGym":"Let the weight come all the way down on arm exercises, so your elbow straightens each time.","dontLife":"Do not keep your arms bent and folded for long periods.","dontGym":"Do not stop halfway down to make the set easier."},{"code":"S04","name":"Front-to-back balance","group":"Trunk & balance","description":"Your chest should sit directly over your hips.","doLife":"Walk for 10 minutes a day looking at the horizon, not at the ground.","doGym":"Finish every session with 2 minutes lying flat on your back on the floor.","dontLife":"Do not sit on soft, low sofas that let your hips sink below your knees.","dontGym":"Do not let your chest drop forward on standing exercises. Stop the set when it does."},{"code":"F07","name":"Side-to-side balance","group":"Trunk & balance","description":"Your body should be centred. Leaning to one side means that side is working much harder than the other.","doLife":"Stand with equal weight on both feet. Check yourself in a mirror.","doGym":"Check yourself in the mirror from the front between sets. Put equal weight on both feet.","dontLife":"Do not always carry a child, a bag or a tool on the same side.","dontGym":"Do not stand resting on one leg between sets."},{"code":"S03","name":"Forward trunk lean","group":"Trunk & balance","description":"Your spine moves as one piece here, not as one small part.","doLife":"Lie flat on your back on the floor for 5 minutes a day.","doGym":"Slow down on the hip exercises in your plan and feel your glutes do the work.","dontLife":"Do not sit for more than one hour without standing up.","dontGym":"Do not skip your warm-up. Your hips are the part that needs it most."},{"code":"Q02","name":"Upright in the squat","group":"Trunk & balance","description":"Leaning far forward usually means stiff ankles or stiff hips, or a weak back.","doLife":"Practise squatting down to pick things up instead of bending over.","doGym":"Before leg day, stretch your calves and the front of your hips for 1 minute each.","dontLife":"Do not sit in very low, soft chairs that force you to lean forward to stand up.","dontGym":"Do not go deeper than the point where your chest starts to drop forward."},{"code":"S07","name":"Hip tilt","group":"Lower back & pelvis","description":"Your hip bones tip forward, which pushes your lower back into a deeper arch and your belly forward.","doLife":"Stand up and walk for 2 minutes every hour that you sit.","doGym":"Between sets, stretch the front of your hip for 30 seconds on each side.","dontLife":"Do not wear high heels for long periods. They tip your hips further forward.","dontGym":"Do not let your lower back arch when you press overhead. Keep your ribs down."},{"code":"S06","name":"Lower back curve","group":"Lower back & pelvis","description":"Everybody has one. Too deep a curve squeezes the joints of your back.","doLife":"When you stand for a long time, rest one foot on a low step and change feet often.","doGym":"Before each lift, tighten your belly gently, as if someone was about to poke it.","dontLife":"Do not sleep on your stomach. It deepens the curve all night.","dontGym":"Do not arch your back hard at the top of a lift."},{"code":"Q05","name":"Hip control in the squat","group":"Lower back & pelvis","description":"Tucking under rounds your lower back at the exact moment it is carrying the most weight.","doLife":"Squat only as deep as you can go while keeping your back flat.","doGym":"Stop your squat just above the depth where your hips start to tuck underneath you.","dontLife":"Do not force yourself to sit in a very deep position for a long time.","dontGym":"Do not chase depth with a heavy weight. Depth comes later."},{"code":"F05","name":"Hip level","group":"Lower back & pelvis","description":"One hip sits higher than the other. It can come from a real difference in leg length, or from a habit such as always standing on one leg.","doLife":"Stand with your weight on both feet, not resting on one hip.","doGym":"On single-leg exercises, keep your hips level and square. Use the mirror to check.","dontLife":"Do not cross the same leg over every time you sit.","dontGym":"Do not shift your weight onto one side as you stand up out of a squat."},{"code":"S09","name":"Hip position","group":"Lower back & pelvis","description":"Many people stand this way to rest, hanging on the joints instead of using the muscles.","doLife":"Stand with your hips above your ankles, not pushed out in front.","doGym":"Finish standing lifts with your hips underneath you, not pushed out in front.","dontLife":"Do not stand with your hips pushed forward and your weight hanging back.","dontGym":"Do not push your hips far forward to finish a lift. Stop when your body is straight."},{"code":"F06","name":"Knee alignment","group":"Hips, knees & ankles","description":"Knees that fall inward, or push outward, put uneven pressure on the knee joint every step you take.","doLife":"Walk with your feet pointing straight ahead, not turned out.","doGym":"On every leg exercise, think about pushing your knees out in line with your toes.","dontLife":"Do not sit for long with your knees pressed together and your feet apart.","dontGym":"Do not let your knees drop inward as you stand up from the bottom."},{"code":"Q03","name":"Knee control in the squat","group":"Hips, knees & ankles","description":"Some movement is normal. A lot usually means your ankles are stiff.","doLife":"Stretch your calves every day: push against a wall with your back leg straight.","doGym":"Stretch your calves for 1 minute before any leg exercise.","dontLife":"Do not wear shoes with a very soft or very high heel every day.","dontGym":"Do not let your heels lift off the floor. Stop at the depth where they stay down."},{"code":"T02","name":"Hip fold","group":"Hips, knees & ankles","description":"Folding at the hips is what protects your back every single time you pick something up.","doLife":"When you pick something up, push your hips backwards first, then bend.","doGym":"On any exercise where you bend forward, push your hips backwards first, then lower.","dontLife":"Do not bend from your back to pick things up off the floor.","dontGym":"Do not round your back to reach lower. Bend your knees a little instead."},{"code":"S08","name":"Knee position","group":"Hips, knees & ankles","description":"Standing with the knee pushed back locks the joint and loads it all day.","doLife":"Stand with your knees very slightly soft, not locked backwards.","doGym":"Stop just short of locking your knees at the top of leg exercises.","dontLife":"Do not stand with your knees pushed hard backwards.","dontGym":"Do not rest between repetitions by locking your knees backwards."},{"code":"T01","name":"Knee straightness when reaching","group":"Hips, knees & ankles","description":"Bending them is the most common way people cheat the test, and it hides tight hamstrings.","doLife":"Stretch the back of your thighs for 30 seconds on each leg, every day.","doGym":"Stretch the back of your thighs at the end of your session, while you are still warm.","dontLife":"Do not bounce when you stretch. Hold still and breathe.","dontGym":"Do not bend your knees to reach further in a stretch. Go less far with straight legs."},{"code":"T03","name":"Reach to the floor","group":"Hips, knees & ankles","description":"It is a result, not a cause. It comes from your hips, your hamstrings and your back working together.","doLife":"Do a gentle forward fold every morning. Measure once a week to see it improve.","doGym":"Do your stretching at the end of the session, not the start.","dontLife":"Do not force the stretch as soon as you wake up. Your back is stiffest then.","dontGym":"Do not bounce to reach further. Hold still and breathe out slowly."},{"code":"Q04","name":"Squat depth","group":"Hips, knees & ankles","description":"It is not a fault and it is not a problem.","doLife":"Stand up from a chair without using your hands, 10 times a day.","doGym":"Spend 2 minutes of your warm-up sitting in the lowest squat position you can hold.","dontLife":"Do not avoid squatting down. The less you do it, the less you will be able to do it.","dontGym":"Do not add weight to get deeper. Earn the depth with your own body weight first."}]};

// ── Measurement source + normal range per code ───────────────────────────────────────────────
// The Bodydot API returns values only (no ranges; partners set their own), so ranges live here.
// They are the TRAINER PROGRAM SHEET's ranges (program.html normalValues), which are the business's
// correct ranges — so the client and the trainer always see the same verdict. Measures the trainer
// sheet has no range for (S11, F01, F02, S10, F04, S09, Q03) use the client-view handoff's range.
// Distances arrive in metres and are shown in cm.
// Several measures have a left and a right reading (or a front and a back one); they share one
// display name, so the page shows the side that is further outside its range, or their average
// when both are in range.
const SOURCES = {
  S01: { codes: ['forwardHeadAngle', 'forwardHeadAngleLeft'],                       min: 0,   max: 30,  unit: '°' },
  S11: { codes: ['kendallSidePostureEar', 'kendallSidePostureEarLeft'],             min: 0,   max: 30,  unit: '°' },
  F01: { codes: ['headHorizontalAngle'],                                            min: -3,  max: 3,   unit: '°' },
  S02: { codes: ['forwardShoulderAngle', 'forwardShoulderAngleLeft'],               min: 0,   max: 42,  unit: '°' },
  S05: { codes: ['thoracicKyphosis', 'thoracicKyphosisLeft'],                       min: 35,  max: 45,  unit: '°' },
  Q01: { codes: ['overheadSquatArmAngle', 'overheadSquatArmAngleLeft'],             min: 170, max: 180, unit: '°' },
  F02: { codes: ['shoulderHorizontalAngle'],                                        min: -2,  max: 2,   unit: '°' },
  F03: { codes: ['leftShoulderSlope', 'rightShoulderSlope'],                        min: 12,  max: 18,  unit: '°' },
  S10: { codes: ['kendallSidePostureShoulder', 'kendallSidePostureShoulderLeft'],   min: -5,  max: 5,   unit: '°' },
  F04: { codes: ['leftElbowAngle', 'rightElbowAngle'],                              min: 170, max: 180, unit: '°' },
  S04: { codes: ['sagittalVerticalAxis', 'sagittalVerticalAxisLeft'],               min: 0,   max: 5,   unit: ' cm', scale: 100 },
  F07: { codes: ['coronalBalance'],                                                 min: -5,  max: 5,   unit: ' cm', scale: 100 },
  S03: { codes: ['t1PelvicAngle', 't1PelvicAngleLeft'],                             min: 0,   max: 20,   unit: '°' },
  Q02: { codes: ['overheadSquatTrunkAngle', 'overheadSquatTrunkAngleLeft'],         min: 60,  max: 90,  unit: '°' },
  S07: { codes: ['anteriorPelvicTilt', 'anteriorPelvicTiltLeft'],                   min: 5,   max: 8,  unit: '°' },
  S06: { codes: ['lumbarLordosis', 'lumbarLordosisLeft'],                           min: 45,  max: 55,  unit: '°' },
  Q05: { codes: ['overheadSquatPelvicAngle', 'overheadSquatPelvicAngleLeft'],       min: 0,   max: 10,  unit: '°' },
  F05: { codes: ['frontalASISAlignment'],                                           min: -2,  max: 2,   unit: '°' },
  S09: { codes: ['kendallSidePostureHip', 'kendallSidePostureHipLeft'],             min: -5,  max: 5,   unit: '°' },
  F06: { codes: ['leftHKAAngle', 'rightHKAAngle'],                                  min: -3,  max: 3,   unit: '°' },
  Q03: { codes: ['overheadSquatKneeDistance', 'overheadSquatKneeDistanceLeft'],     min: 0,   max: 10,  unit: ' cm', scale: 100 },
  T02: { codes: ['toeTouchHipAngle', 'toeTouchHipAngleLeft'],                       min: 0,   max: 70,  unit: '°' },
  S08: { codes: ['kendallSidePostureKnee', 'kendallSidePostureKneeLeft'],           min: -5,  max: 5,   unit: '°' },
  T01: { codes: ['toeTouchKneeAngle', 'toeTouchKneeAngleLeft'],                     min: 170, max: 180, unit: '°' },
  T03: { codes: ['toeTouchDistance', 'toeTouchDistanceLeft'],                       min: -5,  max: 5,   unit: ' cm', scale: 100 },
  Q04: { codes: ['overheadSquatKneeDepth', 'overheadSquatKneeDepthLeft'],           min: 60,  max: 150, unit: '°' },
};

const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = x => Number.isInteger(x) ? String(x) : x.toFixed(1);
const deviation = (v, s) => v > s.max ? v - s.max : v < s.min ? s.min - v : 0;

// Every value in the session, by valueCode (a code can appear in more than one step).
// Prefer the 'custom' sequence when present, as the trainer program does.
function sessionValues(session) {
  const seqs = session.sequences || [];
  const custom = seqs.some(s => s.code === 'custom');
  const out = {};
  for (const seq of seqs) {
    if (custom && seq.code !== 'custom') continue;
    for (const step of seq.stepResults || []) {
      for (const v of (step.data && step.data.values) || []) {
        if (typeof v.value === 'number' && isFinite(v.value)) (out[v.valueCode] = out[v.valueCode] || []).push(v.value);
      }
    }
  }
  return out;
}

function measuresFrom(session) {
  const vals = sessionValues(session);
  const out = [];
  for (const c of CONTENT.measures) {
    const s = SOURCES[c.code];
    if (!s) continue;
    const readings = s.codes.flatMap(k => vals[k] || []).map(v => Math.round(v * (s.scale || 1) * 10) / 10);
    if (!readings.length) continue;                       // not captured in this session: leave it off the page
    const worst = readings.reduce((a, b) => deviation(b, s) > deviation(a, s) ? b : a);
    const value = deviation(worst, s) > 0 ? worst
                : Math.round(readings.reduce((a, b) => a + b, 0) / readings.length * 10) / 10;
    out.push({ ...c, value, min: s.min, max: s.max, unit: s.unit });
  }
  return out;
}

function sheetDate(iso) {
  const d = new Date(String(iso || '').slice(0, 10) + 'T12:00:00Z');
  return isNaN(d) ? '' : String(d.getUTCDate()).padStart(2, '0') + ' ' + MONTHS[d.getUTCMonth()] + ' ' + d.getUTCFullYear();
}

// The client id is often typed into the client name in Bodydot; it doesn't belong on the client's page.
const displayName = n => (String(n || '').replace(/\\s*\\d{4,}\\s*/g, ' ').trim() || String(n || '').trim());

// ── Selection logic: "BodyDot Client View PDF.docx" ──────────────────────────────────────────
function derive(measures) {
  const all = measures.map(m => {
    const dev = deviation(m.value, m), over = m.value > m.max;
    const d0 = Math.min(m.min, m.value), d1 = Math.max(m.max, m.value);
    const pad = Math.max((d1 - d0) * .18, Math.max((m.max - m.min) * .12, 1.5));
    const a = d0 - pad, span = d1 + pad - a, pct = x => ((x - a) / span * 100).toFixed(1) + '%';
    return { ...m, ok: dev === 0, score: dev / Math.max(m.max - m.min, 1),
             val: fmt(m.value) + m.unit, range: fmt(m.min) + ' to ' + fmt(m.max) + m.unit.trim(),
             delta: dev === 0 ? 'in range' : fmt(Math.round(dev * 10) / 10) + m.unit.trim() + (over ? ' over' : ' under'),
             bl: pct(m.min), bw: ((m.max - m.min) / span * 100).toFixed(1) + '%', ml: pct(m.value) };
  });
  const out = all.filter(m => !m.ok);
  const groups = [...CONTENT.groups].sort((a, b) => a.order - b.order);
  // highest score in each group first (so the five cover different areas), then fill by score
  const pick = [];
  groups.forEach(g => { const w = out.filter(m => m.group === g.label).sort((a, b) => b.score - a.score)[0]; if (w) pick.push(w); });
  [...out].sort((a, b) => b.score - a.score).forEach(m => { if (pick.length < 5 && !pick.includes(m)) pick.push(m); });
  const pr = pick.sort((a, b) => b.score - a.score).slice(0, 5).map((m, i) => ({ ...m, n: String(i + 1).padStart(2, '0') }));
  const list = k => [...new Set(pr.map(p => p[k]).filter(Boolean))];
  const prCodes = new Set(pr.map(p => p.code));
  const rest = groups.map(g => ({ label: g.label,
      items: all.filter(m => m.group === g.label && !prCodes.has(m.code)).sort((a, b) => a.ok - b.ok) }))
    .filter(g => g.items.length);
  return { out: out.length, ok: all.length - out.length, pr, rest,
           doLife: list('doLife'), dontLife: list('dontLife'), doGym: list('doGym'), dontGym: list('dontGym') };
}

const hb = (arr, g, c) => arr.map(t => \`<div class="hb"><i style="color:\${c}">\${g}</i><div>\${esc(t)}</div></div>\`).join('');

function render(client, v) {
  const priorities = v.pr.length
    ? v.pr.map(m => \`<div class="pr"><div class="n">\${m.n}</div>
        <div><div class="nm">\${esc(m.name)}</div><div class="ds">\${esc(m.description)}</div></div>
        <div><div class="bar"><div class="band" style="left:\${m.bl};width:\${m.bw}"></div><div class="dot" style="left:\${m.ml}"></div></div>
          <div class="bl mono"><span style="opacity:.68">NORMAL \${m.range}</span><span style="color:#C7231F;font-weight:500">\${m.delta}</span></div></div>
        <div class="chip mono">\${m.val}</div></div>\`).join('')
    : \`<div class="note">Every measurement is within its normal range. Keep doing what you are doing.</div>\`;
  const habits = v.pr.length ? \`
  <div style="display:flex;flex-direction:column;gap:4px">
    <div style="display:grid;grid-template-columns:96px minmax(0,1fr);gap:0 4px"><div></div><div class="cap" style="padding:0 14px 1px;line-height:1.2">BASED ON YOUR CURRENT PRIORITIES</div></div>
    <div class="row3"><div></div><div class="tag" style="background:#CDFF20">TO DO</div><div class="tag" style="background:#FF403C;color:#fff">NOT TO DO</div></div>
    <div class="row3"><div class="side"><b>DAILY LIFE</b><span>Home, work, phone, sleep</span></div><div class="cell">\${hb(v.doLife, '+', '#005EFF')}</div><div class="cell">\${hb(v.dontLife, '×', '#FF403C')}</div></div>
    <div class="row3"><div class="side"><b>IN THE GYM</b><span>Warm-up, sets, rest</span></div><div class="cell">\${hb(v.doGym, '+', '#005EFF')}</div><div class="cell">\${hb(v.dontGym, '×', '#FF403C')}</div></div>
  </div>\` : '';
  document.getElementById('sheet').innerHTML = \`
<div class="hdr">
  <div style="display:flex;flex-direction:column;gap:8px;min-width:0">
    <img src="assets/udra-wordmark-white.png" alt="udra" style="width:76px;height:24px;object-fit:contain;display:block">
    <div style="font-size:9px;font-weight:700;letter-spacing:.16em;color:#64E0FF">YOUR POSTURE ASSESSMENT</div>
    <div dir="auto" style="font-size:28px;font-weight:700;letter-spacing:-.025em;color:#fff;line-height:1.05;unicode-bidi:plaintext;text-align:left">\${esc(client.name)}</div>
  </div>
  <div style="display:flex;gap:26px;align-items:flex-end;flex-shrink:0">
    <div class="stat"><b style="color:#FF403C">\${v.out}</b><span>TO WORK ON</span></div>
    <div class="stat"><b style="color:#CDFF20">\${v.ok}</b><span>ON TRACK</span></div>
    <div class="mono" style="font-size:10px;color:#64E0FF;padding-bottom:3px">\${esc(client.date)}</div>
  </div>
</div>
<div class="body">
  <div>
    <div class="sh"><h2>Your five priorities</h2><div class="cap">START HERE</div></div>
    \${priorities}
  </div>\${habits}
  <div style="display:flex;flex-direction:column;gap:12px">
    <div class="sh"><h2>Your Full Assessment</h2><div style="display:flex;gap:14px">
      <div class="lg"><s style="background:#FF403C"></s><span class="cap">OUTSIDE RANGE</span></div>
      <div class="lg"><s style="background:#005EFF"></s><span class="cap">ON TRACK</span></div></div></div>
    <div style="display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:0 14px">
      \${v.rest.map(g => \`<div class="grp"><h4>\${esc(g.label)}</h4>\${g.items.map(m => \`<div class="m"><s style="background:\${m.ok ? '#005EFF' : '#FF403C'}"></s><span>\${esc(m.name)}</span><span class="mono" style="font-weight:500;color:\${m.ok ? '#122649' : '#C7231F'}">\${m.val}</span></div>\`).join('')}</div>\`).join('')}
    </div>
  </div>
  <div class="ft"><div><span style="color:#E0201C;font-weight:700;font-size:9px">Reassess in 4 to 6 weeks to check your progress.</span> Not-to-do items are temporary. Pain is a stop sign; tell your coach.</div>
    <img src="assets/udra-mark.png" alt="" style="width:18px;height:18px;object-fit:contain;flex-shrink:0"></div>
</div>\`;
}

// ── Overflow: the page is a fixed A4. Tighten in the handoff's order and stop as soon as it fits;
// font sizes are never touched, so nothing drops below 8px.
const FIT_STEPS = [
  { '--hb-pad': '6px 12px' }, { '--hb-pad': '4px 10px' },
  { '--pr-pad': '6px 0' },    { '--pr-pad': '4px 0' },
  { '--body-gap': '18px' },   { '--body-gap': '12px' },
];
function overflows(sheet) {
  // The footer is pushed to the bottom (margin-top:auto), so the page overflows exactly when the
  // footer's bottom edge passes the body's inner bottom edge.
  const body = sheet.querySelector('.body');
  const limit = body.getBoundingClientRect().bottom - parseFloat(getComputedStyle(body).paddingBottom);
  return sheet.querySelector('.ft').getBoundingClientRect().bottom > limit + 0.5;
}
function fit() {
  const sheet = document.getElementById('sheet');
  let used = 0;
  for (const step of FIT_STEPS) {
    if (!overflows(sheet)) break;
    for (const [k, val] of Object.entries(step)) sheet.style.setProperty(k, val);
    used++;
  }
  sheet.dataset.fitSteps = used;                         // how much tightening this client needed
  sheet.dataset.overflow = overflows(sheet) ? 'yes' : 'no';
}

document.addEventListener('DOMContentLoaded', function () {
  const b = window.__BODYDOT__;
  try {
    if (!b || !b.session) throw new Error('No assessment data was passed to this page.');
    const measures = measuresFrom(b.session);
    if (!measures.length) throw new Error('This assessment has no measurements to show.');
    const client = { name: displayName(b.clientName), date: sheetDate(b.session.createdAt) };
    document.title = (client.name ? client.name + ' — ' : '') + 'Posture Assessment';
    render(client, derive(measures));
    const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(() => {
      fit();
      if (b.autoPrint) { b.autoPrint = false; setTimeout(() => window.print(), 250); }
    });
  } catch (err) {
    document.body.innerHTML = '<p class="err">Could not build the client view: ' + esc(err && err.message ? err.message : err) + '</p>';
  }
});
<\/script>
</body>
</html>
`,Ob=["Body Coach"],Qs=e=>Ob.includes(e),Fb=`${window.location.origin}/VALD-automator/bodydot/`;function Js(e,n){const t={session:e,clientName:n,autoPrint:!0},r='<meta charset="UTF-8">',a=`<base href="${Fb}"><script>window.__BODYDOT__ = ${JSON.stringify(t).replace(/</g,"\\u003c")};<\/script>`,o=Pb.replace(r,`${r}${a}`),i=URL.createObjectURL(new Blob([o],{type:"text/html"}));if(!window.open(i,"_blank"))throw URL.revokeObjectURL(i),new Error("Popup blocked — allow popups for this site and try again.");setTimeout(()=>URL.revokeObjectURL(i),6e4)}function Bb({options:e,value:n,onChange:t,onSelect:r,placeholder:a,disabled:o,inputRef:i,allowCustom:l=!1}){const[s,d]=w.useState(n||""),[u,f]=w.useState(!1),[g,y]=w.useState(0),p=w.useRef(null),b=w.useRef(null),S=s?e.filter(h=>h.toLowerCase().includes(s.toLowerCase())):e;w.useEffect(()=>{function h(x){p.current&&!p.current.contains(x.target)&&f(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),w.useEffect(()=>{d(n||"")},[n]),w.useEffect(()=>{y(0)},[s]);function v(h){t(h),d(h),f(!1),r&&r(h)}function m(h){!u||S.length===0||(h.key==="ArrowDown"?(h.preventDefault(),y(x=>Math.min(x+1,S.length-1))):h.key==="ArrowUp"?(h.preventDefault(),y(x=>Math.max(x-1,0))):h.key==="Enter"?(h.preventDefault(),v(S[g])):h.key==="Escape"&&f(!1))}return w.useEffect(()=>{if(!b.current)return;const h=b.current.children[g];h&&h.scrollIntoView({block:"nearest"})},[g]),c.jsxs("div",{ref:p,className:"relative",children:[c.jsx("input",{ref:i,type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50",placeholder:a,value:s,disabled:o,onChange:h=>{const x=h.target.value;d(x),f(!0),l?t(x):x||t("")},onFocus:()=>f(!0),onKeyDown:m}),u&&!o&&S.length>0&&c.jsx("ul",{ref:b,className:"absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto",children:S.map((h,x)=>c.jsx("li",{onMouseDown:()=>v(h),onMouseEnter:()=>y(x),className:`px-3 py-2 text-sm cursor-pointer ${x===g?"bg-gray-700 text-white":h===n?"text-brand-400 font-semibold":"text-white"}`,children:h},h))})]})}function Ib({test:e,org:n,roster:t,onStatus:r,picker:a}){const o=c.jsx("button",{onClick:()=>navigator.clipboard.writeText(e.client_name||""),title:"Copy client name",className:"text-gray-600 hover:text-gray-300 transition-colors p-1 rounded",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),i=e.stored||{},[l,s]=w.useState(i.trainer_name||""),[d,u]=w.useState(i.dispatch_date||new Date().toISOString().slice(0,10)),[f,g]=w.useState(!1),[y,p]=w.useState(!1),[b,S]=w.useState("");w.useEffect(()=>{n.gym&&n.branch&&l?mm(n.gym,n.branch,l).then(A=>{var R;return S(((R=A.data)==null?void 0:R.whatsapp)||"")}).catch(()=>S("")):S("")},[n.gym,n.branch,l]);const v=()=>({gym:n.gym,org_id:n.id,client_id:e.client_id,client_name:e.client_name||"",session_id:e.session_id,test_date:e.test_date,valid:e.valid}),m=async()=>{var A,R;g(!0);try{const{data:C}=await Zd({...v(),trainer_name:l.trim()||null,dispatch_date:d||null,sent:i.sent||!1});r(e.session_id,C)}catch(C){alert("Error approving: "+(((R=(A=C.response)==null?void 0:A.data)==null?void 0:R.detail)||C.message))}finally{g(!1)}},h=async()=>{var A,R;g(!0);try{const{data:C}=await tb(v());r(e.session_id,C)}catch(C){alert("Error ignoring: "+(((R=(A=C.response)==null?void 0:A.data)==null?void 0:R.detail)||C.message))}finally{g(!1)}},x=async()=>{p(!0);try{const A=await gt(e.client_id,e.session_id);Ys(A,e.client_name||"",n.bilingual)}catch(A){alert("Could not open program: "+A.message)}finally{p(!1)}},k=async()=>{p(!0);try{const A=await gt(e.client_id,e.session_id);Js(A,e.client_name||"")}catch(A){alert("Could not open the client view: "+A.message)}finally{p(!1)}},_=()=>{if(!b){alert("No WhatsApp number set for this trainer.");return}window.open(`https://wa.me/${b.replace(/\D/g,"")}`,"_blank")},L=async()=>{var A,R;g(!0);try{const{data:C}=await Zd({...v(),trainer_name:null,dispatch_date:null,sent:!1});r(e.session_id,C)}catch(C){alert("Error approving: "+(((R=(A=C.response)==null?void 0:A.data)==null?void 0:R.detail)||C.message))}finally{g(!1)}};return e.valid?c.jsxs("div",{className:"rounded-xl border border-gray-700 bg-gray-900 p-5 space-y-4",children:[c.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"NEW"}),c.jsx("h3",{className:"font-semibold text-white",children:e.client_name||"—"})]}),c.jsxs("div",{className:"mt-1 flex flex-wrap gap-3 text-sm text-gray-400",children:[c.jsx("span",{children:"VALID"}),c.jsx("span",{children:"·"}),c.jsxs("span",{children:[e.analyzed,"/",e.total]})]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,o]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Trainer"}),c.jsx(Bb,{options:t,value:l,onChange:s,placeholder:"Search or type a name…",allowCustom:!0,disabled:f})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-gray-400 mb-1",children:"Dispatch Date"}),c.jsx("input",{type:"date",className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500",value:d,onChange:A=>u(A.target.value),disabled:f})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[c.jsx("button",{onClick:x,disabled:y,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:y?"Loading…":"🖨 Open & Print"}),Qs(n.gym)&&c.jsx("button",{onClick:k,disabled:y,title:"One-page results and daily habits for the client",className:"text-xs px-3 py-1.5 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-300 hover:text-gray-200 disabled:opacity-50 transition-colors",children:"🖨 Client View"}),c.jsx("button",{onClick:h,disabled:f,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-500 hover:border-red-700 hover:text-red-400 disabled:opacity-50 transition-colors",children:"Ignore"}),c.jsx("div",{className:"flex-1"}),c.jsxs("button",{onClick:_,disabled:!b,title:b?"":"No WhatsApp number for this trainer",className:"flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-green-700",children:[c.jsx("svg",{viewBox:"0 0 24 24",className:"w-3.5 h-3.5 fill-current",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"WhatsApp"]}),c.jsx("button",{onClick:m,disabled:f,className:"text-xs px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:f?"Saving…":"Approve"})]})]}):c.jsxs("div",{className:"flex items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-950/10 px-5 py-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"INVALID"}),c.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),c.jsxs("p",{className:"text-xs mt-0.5 text-gray-500",children:[e.analyzed,"/",e.total," analyzed"]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[a,o,c.jsx("button",{onClick:L,disabled:f,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white font-semibold transition-colors",children:f?"…":"Approve"})]})]})}const gn=25,zb=4,Mb="2026-05-15";function Xs(e){return(e||"").normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/\s+/g," ").trim()}function _m(e,n){const t=Xs(e);return n.every(r=>t.includes(r))}function Hb(e){const n=new Date(e);return isNaN(n)?null:n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function _o(e){const n=new Date(e);if(isNaN(n))return e;const t=n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),r=n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${t} · ${r}`}function Ub({test:e,org:n,picker:t,onStatus:r}){var u,f,g;const[a,o]=w.useState(!1),i=((u=e.stored)==null?void 0:u.valid)===!1,l=async()=>{o(!0);try{const y=await gt(e.client_id,e.session_id);Ys(y,e.client_name||"",n.bilingual)}catch(y){alert("Could not generate program: "+y.message)}finally{o(!1)}},s=async()=>{o(!0);try{const y=await gt(e.client_id,e.session_id);Js(y,e.client_name||"")}catch(y){alert("Could not open the client view: "+y.message)}finally{o(!1)}},d=async()=>{var y,p;o(!0);try{const{data:b}=await rb(e.session_id);r(e.session_id,b)}catch(b){alert("Could not undo: "+(((p=(y=b.response)==null?void 0:y.data)==null?void 0:p.detail)||b.message))}finally{o(!1)}};return c.jsxs("div",{className:`flex items-center justify-between gap-4 rounded-xl border px-5 py-3 ${i?"border-red-900/50 bg-red-950/10":"border-emerald-800/60 bg-emerald-950/10"}`,children:[c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[i?c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 border border-red-800",children:"RECORDED · INVALID"}):c.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700",children:"APPROVED"}),c.jsx("h3",{className:"font-semibold text-white truncate",children:e.client_name||"—"})]}),c.jsxs("p",{className:"text-xs mt-0.5 text-gray-400",children:[_o(e.created_at||e.test_date),!i&&((f=e.stored)!=null&&f.trainer_name?c.jsxs("span",{className:"text-emerald-400",children:[" · ",e.stored.trainer_name]}):" · no trainer"),(g=e.stored)!=null&&g.sent?" · sent":""]})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t,!i&&c.jsx("button",{onClick:l,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:a?"Loading…":"Generate Program"}),!i&&Qs(n.gym)&&c.jsx("button",{onClick:s,disabled:a,title:"One-page results and daily habits for the client",className:"text-xs px-3 py-1.5 rounded-lg border border-brand-600/70 text-brand-300 hover:bg-brand-600/10 disabled:opacity-50 transition-colors font-semibold",children:"Client View"}),c.jsx("button",{onClick:d,disabled:a,className:"text-xs px-3 py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 disabled:opacity-50 transition-colors",children:"Undo"})]})]})}function $b({client:e,org:n,roster:t,statusMap:r,onStatus:a,searching:o}){const[i,l]=w.useState(void 0),[s,d]=w.useState(null),[u,f]=w.useState(void 0);w.useEffect(()=>{let h=!0;return l(void 0),d(null),Em(e.id).then(x=>h&&l((x||[]).filter(k=>(k.createdAt||"").slice(0,10)>=Mb))).catch(()=>h&&l(null)),()=>{h=!1}},[e.id]);const g=s||i&&i[0]&&i[0].id;w.useEffect(()=>{let h=!0;if(g)return f(void 0),gt(e.id,g).then(x=>h&&f(x)).catch(()=>h&&f(null)),()=>{h=!1}},[e.id,g]);const y=h=>c.jsxs("div",{className:"rounded-xl border border-gray-800 bg-gray-900 px-5 py-3 text-sm",children:[c.jsx("span",{className:"font-medium text-white",children:e.name||"—"}),c.jsxs("span",{className:"text-gray-500",children:[" · ",h]})]});if(i===void 0)return o?y("loading tests…"):null;if(!i||!i.length)return o?y("no test data"):null;const p=i.find(h=>h.id===g)||i[0],b=r[g],S=u?Rb(u):null,v={client_id:e.id,client_name:e.name,session_id:g,created_at:p.createdAt,test_date:(p.createdAt||"").slice(0,10),valid:S?S.valid:void 0,analyzed:S?S.analyzed:0,total:S?S.total:0,stored:b},m=i.length>1?c.jsx("select",{value:g,onChange:h=>d(h.target.value),className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:i.map((h,x)=>c.jsxs("option",{value:h.id,children:[_o(h.createdAt),x===0?" (latest)":""]},h.id))}):c.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:_o(p.createdAt)});return b!=null&&b.approved?c.jsx(Ub,{test:v,org:n,picker:m,onStatus:a}):u===void 0?y("checking validity…"):c.jsx(Ib,{test:v,org:n,roster:t,onStatus:a,picker:m})}function Kb({org:e}){const[n,t]=w.useState([]),[r,a]=w.useState(!1),[o,i]=w.useState(null),[l,s]=w.useState(""),[d,u]=w.useState(0),[f,g]=w.useState([]),[y,p]=w.useState({});w.useEffect(()=>{let k=!0;return a(!0),i(null),t([]),s(""),u(0),p({}),km(e.id).then(_=>k&&t(_)).catch(_=>k&&i(`Error loading clients: ${_.message}`)).finally(()=>k&&a(!1)),U0(e.gym,e.branch).then(_=>k&&g(_.data||[])).catch(()=>{}),nb(e.gym).then(_=>{const L={};for(const A of _.data||[])L[A.session_id]=A;k&&p(L)}).catch(()=>{}),()=>{k=!1}},[e.id]);const b=(k,_)=>p(L=>({...L,[k]:_})),S=Xs(l).split(" ").filter(Boolean),v=S.length?n.filter(k=>_m(k.name,S)):n,m=Math.max(1,Math.ceil(v.length/gn)),h=Math.min(d,m-1),x=v.slice(h*gn,h*gn+gn);return c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap",children:[c.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),c.jsx("input",{type:"text",value:l,onChange:k=>{s(k.target.value),u(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),o&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:o}),r?c.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):v.length===0?c.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"space-y-3",children:x.map(k=>c.jsx($b,{client:k,org:e,roster:f,statusMap:y,onStatus:b,searching:S.length>0},k.id))}),c.jsx(Am,{safePage:h,totalPages:m,count:x.length,total:v.length,setPage:u})]})]})}function Vb({org:e}){const[n,t]=w.useState([]),[r,a]=w.useState(!1),[o,i]=w.useState(null),[l,s]=w.useState(""),[d,u]=w.useState(0),[f,g]=w.useState({}),y=w.useRef(0);w.useEffect(()=>{let x=!0;return s(""),u(0),i(null),t([]),g({}),a(!0),km(e.id).then(k=>x&&t(k)).catch(k=>x&&i(`Error loading clients: ${k.message}`)).finally(()=>x&&a(!1)),()=>{x=!1}},[e.id]);const p=Xs(l).split(" ").filter(Boolean),b=p.length?n.filter(x=>_m(x.name,p)):n,S=Math.max(1,Math.ceil(b.length/gn)),v=Math.min(d,S-1),m=b.slice(v*gn,v*gn+gn),h=m.map(x=>x.id).join(",");return w.useEffect(()=>{if(!m.length)return;const x=++y.current,k=m.filter(A=>f[A.id]===void 0);if(!k.length)return;let _=0;const L=async()=>{for(;_<k.length;){if(x!==y.current)return;const A=k[_++];let R=null;try{R=await Em(A.id)}catch{R=null}if(x!==y.current)return;g(C=>({...C,[A.id]:R}))}};Promise.all(Array.from({length:Math.min(zb,k.length)},L))},[h]),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsx("h2",{className:"text-lg font-semibold text-white",children:e.name}),c.jsx("input",{type:"text",value:l,onChange:x=>{s(x.target.value),u(0)},placeholder:"Search clients…",className:"px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-500 max-w-xs"})]}),o&&c.jsx("div",{className:"rounded-lg bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 text-sm",children:o}),r?c.jsx("p",{className:"text-gray-400 text-sm py-4",children:"Loading clients…"}):b.length===0?c.jsx("p",{className:"text-gray-500 text-sm py-4",children:n.length===0?"No clients found.":"No clients match your search."}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"rounded-xl border border-gray-800 bg-gray-900 overflow-hidden",children:m.map(x=>c.jsx(Gb,{client:x,bilingual:e.bilingual,clientView:Qs(e.gym),sessionInfo:f[x.id]},x.id))}),c.jsx(Am,{safePage:v,totalPages:S,count:m.length,total:b.length,setPage:u})]})]})}function Gb({client:e,bilingual:n,clientView:t,sessionInfo:r}){const[a,o]=w.useState(!1),[i,l]=w.useState(null),s=Array.isArray(r)?r:[],d=s.length>1,u=i||s[0]&&s[0].id,f=async()=>{if(u){o(!0);try{const p=await gt(e.id,u);Ys(p,e.name||"",n)}catch(p){alert(`Could not generate program for ${e.name||"client"}: ${p.message}`)}finally{o(!1)}}},g=async()=>{if(u){o(!0);try{const p=await gt(e.id,u);Js(p,e.name||"")}catch(p){alert(`Could not open the client view for ${e.name||"client"}: ${p.message}`)}finally{o(!1)}}};let y;return r===void 0?y=c.jsx("span",{className:"text-gray-600",children:"Loading tests…"}):s.length?y=c.jsxs("span",{className:"text-gray-400",children:["Test date: ",Hb(s[0].createdAt),d&&c.jsxs("span",{className:"text-brand-400",children:[" · ",s.length," tests"]})]}):y=c.jsx("span",{className:"text-gray-600",children:"No test data"}),c.jsxs("div",{className:"flex items-center justify-between gap-4 px-5 py-3 border-b border-gray-800 last:border-b-0",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"font-medium text-white",children:e.name||"—"}),c.jsx("p",{className:"text-xs mt-0.5",children:y})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[d&&c.jsx("select",{value:u,onChange:p=>l(p.target.value),disabled:a,className:"text-xs px-2 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 min-w-[195px]",children:s.map((p,b)=>c.jsxs("option",{value:p.id,children:[_o(p.createdAt),b===0?" (latest)":""]},p.id))}),c.jsx("button",{onClick:f,disabled:a||!u,className:"text-xs px-3 py-1.5 rounded-lg bg-brand-600 text-white hover:bg-brand-500 disabled:opacity-50 transition-colors font-semibold",children:a?"Loading…":"Generate Program"}),t&&c.jsx("button",{onClick:g,disabled:a||!u,title:"One-page results and daily habits for the client",className:"text-xs px-3 py-1.5 rounded-lg border border-brand-600/70 text-brand-300 hover:bg-brand-600/10 disabled:opacity-50 transition-colors font-semibold",children:"Client View"})]})]})}function Am({safePage:e,totalPages:n,count:t,total:r,setPage:a}){return c.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-400",children:[c.jsxs("span",{children:[e*gn+1,"–",e*gn+t," of ",r]}),n>1&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:()=>a(o=>Math.max(0,o-1)),disabled:e===0,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"← Prev"}),c.jsxs("span",{className:"text-gray-500",children:["Page ",e+1," of ",n]}),c.jsx("button",{onClick:()=>a(o=>Math.min(n-1,o+1)),disabled:e>=n-1,className:"px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 disabled:opacity-40 transition-colors",children:"Next →"})]})]})}function qb(){const[e,n]=w.useState(null),t=au.find(r=>r.id===e);return c.jsxs("div",{className:"max-w-3xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-white",children:"Bodydot"}),c.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Select a center, search a client, then approve and generate programs."})]}),c.jsx("div",{className:"flex flex-wrap gap-3",children:au.map(r=>c.jsx("button",{onClick:()=>n(r.id),className:`flex-1 min-w-[200px] text-left rounded-xl border-2 px-5 py-4 transition-colors
              ${e===r.id?"border-brand-500 bg-brand-900/20":"border-gray-700 bg-gray-900 hover:border-gray-500"}`,children:c.jsx("div",{className:"font-semibold text-white",children:r.name})},r.id))}),t&&(t.branch?c.jsx(Kb,{org:t},t.id):c.jsx(Vb,{org:t},t.id))]})}function Wb(){return c.jsx(lb,{children:c.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-900",children:[c.jsxs("nav",{className:"bg-gray-900 border-b border-gray-800 px-6 py-2 flex items-center",children:[c.jsx("div",{className:"flex items-center justify-center mr-6 h-[90px]",children:c.jsx("img",{src:"/VALD-automator/UDRA-white-logo.png",alt:"UDRA Logo",className:"h-[43px] w-auto object-contain"})}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx(_t,{to:"/",end:!0,className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"VALD Generation"}),c.jsx(_t,{to:"/bodydot",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Bodydot Generation"}),c.jsx(_t,{to:"/reports",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"bg-brand-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}`,children:"Reports"})]}),c.jsx("div",{className:"flex-1"}),c.jsx("div",{className:"w-px h-6 bg-gray-700 mx-4"}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx(_t,{to:"/quick",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Generate"}),c.jsx(_t,{to:"/quick-report",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Quick Report"}),c.jsx(_t,{to:"/trainers",className:({isActive:e})=>`px-4 py-2 rounded-md text-sm font-medium transition-colors ${e?"border border-brand-500 text-brand-300 bg-brand-950/40":"text-gray-500 hover:text-gray-300 hover:bg-gray-800 border border-transparent"}`,children:"Trainers"})]})]}),c.jsx("main",{className:"flex-1 p-6",children:c.jsxs(Yv,{children:[c.jsx(nt,{path:"/",element:c.jsx(ub,{})}),c.jsx(nt,{path:"/reports",element:c.jsx(fb,{})}),c.jsx(nt,{path:"/quick",element:c.jsx(yb,{})}),c.jsx(nt,{path:"/quick-report",element:c.jsx(bb,{})}),c.jsx(nt,{path:"/trainers",element:c.jsx(Eb,{})}),c.jsx(nt,{path:"/bodydot",element:c.jsx(qb,{})})]})})]})})}Mi.createRoot(document.getElementById("root")).render(c.jsx(Ql.StrictMode,{children:c.jsx(rx,{children:c.jsx(Wb,{})})}));
