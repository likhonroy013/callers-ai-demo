(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Yu={exports:{}},nl={},Ku={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),yc=Symbol.for("react.lazy"),Fo=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Zu={};function on(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Xu}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=on.prototype;function $i(e,t,n){this.props=e,this.context=t,this.refs=Zu,this.updater=n||Xu}var Bi=$i.prototype=new Ju;Bi.constructor=$i;Gu(Bi,on.prototype);Bi.isPureReactComponent=!0;var Oo=Array.isArray,qu=Object.prototype.hasOwnProperty,Vi={current:null},bu={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)qu.call(t,r)&&!bu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Gn,type:e,key:i,ref:o,props:l,_owner:Vi.current}}function vc(e,t){return{$$typeof:Gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ao=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gn:case uc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+kl(o,0):r,Oo(l)?(n="",e!=null&&(n=e.replace(Ao,"$&/")+"/"),xr(l,t,n,"",function(c){return c})):l!=null&&(Hi(l)&&(l=vc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ao,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+kl(i,u);o+=xr(i,t,n,s,l)}else if(s=gc(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+kl(i,u++),o+=xr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},wr={transition:null},kc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Vi};function ts(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Hi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=sc;L.Profiler=cc;L.PureComponent=$i;L.StrictMode=ac;L.Suspense=mc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;L.act=ts;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Vi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)qu.call(t,s)&&!bu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Gn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};L.createElement=es;L.createFactory=function(e){var t=es.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:pc,render:e}};L.isValidElement=Hi;L.lazy=function(e){return{$$typeof:yc,_payload:{_status:-1,_result:e},_init:wc}};L.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};L.unstable_act=ts;L.useCallback=function(e,t){return ae.current.useCallback(e,t)};L.useContext=function(e){return ae.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};L.useEffect=function(e,t){return ae.current.useEffect(e,t)};L.useId=function(){return ae.current.useId()};L.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ae.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};L.useRef=function(e){return ae.current.useRef(e)};L.useState=function(e){return ae.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ae.current.useTransition()};L.version="18.3.1";Ku.exports=L;var ue=Ku.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=ue,Ec=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,_c=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jc={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Nc.call(t,r)&&!jc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ec,type:e,key:i,ref:o,props:l,_owner:_c.current}}nl.Fragment=Cc;nl.jsx=ns;nl.jsxs=ns;Yu.exports=nl;var p=Yu.exports,Kl={},rs={exports:{}},we={},ls={exports:{}},is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,z){var P=C.length;C.push(z);e:for(;0<P;){var W=P-1>>>1,G=C[W];if(0<l(G,z))C[W]=z,C[P]=G,P=W;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var z=C[0],P=C.pop();if(P!==z){C[0]=P;e:for(var W=0,G=C.length,er=G>>>1;W<er;){var gt=2*(W+1)-1,wl=C[gt],vt=gt+1,tr=C[vt];if(0>l(wl,P))vt<G&&0>l(tr,wl)?(C[W]=tr,C[vt]=P,W=vt):(C[W]=wl,C[gt]=P,W=gt);else if(vt<G&&0>l(tr,P))C[W]=tr,C[vt]=P,W=vt;else break e}}return z}function l(C,z){var P=C.sortIndex-z.sortIndex;return P!==0?P:C.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],y=1,h=null,m=3,g=!1,w=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=C)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function v(C){if(k=!1,d(C),!w)if(n(s)!==null)w=!0,vl(E);else{var z=n(c);z!==null&&xl(v,z.startTime-C)}}function E(C,z){w=!1,k&&(k=!1,f(j),j=-1),g=!0;var P=m;try{for(d(z),h=n(s);h!==null&&(!(h.expirationTime>z)||C&&!ze());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var G=W(h.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?h.callback=G:h===n(s)&&r(s),d(z)}else r(s);h=n(s)}if(h!==null)var er=!0;else{var gt=n(c);gt!==null&&xl(v,gt.startTime-z),er=!1}return er}finally{h=null,m=P,g=!1}}var N=!1,_=null,j=-1,H=5,T=-1;function ze(){return!(e.unstable_now()-T<H)}function an(){if(_!==null){var C=e.unstable_now();T=C;var z=!0;try{z=_(!0,C)}finally{z?cn():(N=!1,_=null)}}else N=!1}var cn;if(typeof a=="function")cn=function(){a(an)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,oc=Ro.port2;Ro.port1.onmessage=an,cn=function(){oc.postMessage(null)}}else cn=function(){I(an,0)};function vl(C){_=C,N||(N=!0,cn())}function xl(C,z){j=I(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,vl(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return C()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=m;m=C;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(C,z,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,C={id:y++,callback:z,priorityLevel:C,startTime:P,expirationTime:G,sortIndex:-1},P>W?(C.sortIndex=P,t(c,C),n(s)===null&&C===n(c)&&(k?(f(j),j=-1):k=!0,xl(v,P-W))):(C.sortIndex=G,t(s,C),w||g||(w=!0,vl(E))),C},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(C){var z=m;return function(){var P=m;m=z;try{return C.apply(this,arguments)}finally{m=P}}}})(is);ls.exports=is;var zc=ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=ue,xe=zc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var os=new Set,Mn={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)os.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},$o={};function Tc(e){return Xl.call($o,e)?!0:Xl.call(Uo,e)?!1:Lc.test(e)?$o[e]=!0:(Uo[e]=!0,!1)}function Mc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ic(e,t,n,r){if(t===null||typeof t>"u"||Mc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);ee[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Qi);ee[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ic(t,n,l,r)&&(n=null),r||l===null?Tc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),ss=Symbol.for("react.context"),Xi=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Sl;function xn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Dc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Dt:return"Portal";case Gl:return"Profiler";case Ki:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ss:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Xi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Rc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fc(e){var t=cs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Fc(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ds(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ei(e,t){ds(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(wn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ps(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function gs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ac=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(e,t){if(t){if(Ac[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oi=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Kt=null,Xt=null;function Yo(e){if(e=qn(e)){if(typeof ui!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ul(t),ui(e.stateNode,e.type,t))}}function vs(e){Kt?Xt?Xt.push(e):Xt=[e]:Kt=e}function xs(){if(Kt){var e=Kt,t=Xt;if(Xt=Kt=null,Yo(e),t)for(e=0;e<t.length;e++)Yo(t[e])}}function ws(e,t){return e(t)}function ks(){}var Nl=!1;function Ss(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return ws(e,t,n)}finally{Nl=!1,(Kt!==null||Xt!==null)&&(ks(),xs())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var si=!1;if(Ye)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){si=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{si=!1}function Uc(e,t,n,r,l,i,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var Cn=!1,Ir=null,Dr=!1,ai=null,$c={onError:function(e){Cn=!0,Ir=e}};function Bc(e,t,n,r,l,i,o,u,s){Cn=!1,Ir=null,Uc.apply($c,arguments)}function Vc(e,t,n,r,l,i,o,u,s){if(Bc.apply(this,arguments),Cn){if(Cn){var c=Ir;Cn=!1,Ir=null}else throw Error(x(198));Dr||(Dr=!0,ai=c)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Es(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(Mt(e)!==e)throw Error(x(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Cs(e){return e=Hc(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ns(e);if(t!==null)return t;e=e.sibling}return null}var _s=xe.unstable_scheduleCallback,Xo=xe.unstable_cancelCallback,Wc=xe.unstable_shouldYield,Qc=xe.unstable_requestPaint,Q=xe.unstable_now,Yc=xe.unstable_getCurrentPriorityLevel,Ji=xe.unstable_ImmediatePriority,js=xe.unstable_UserBlockingPriority,Rr=xe.unstable_NormalPriority,Kc=xe.unstable_LowPriority,zs=xe.unstable_IdlePriority,rl=null,Ue=null;function Xc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Jc,Gc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Gc(e)/Zc|0)|0}var or=64,ur=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=kn(u):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=qc(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Ls(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ts,bi,Ms,Is,Ds,fi=!1,sr=[],lt=null,it=null,ot=null,Rn=new Map,Fn=new Map,et=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&bi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nf(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Rn.set(i,pn(Rn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Fn.set(i,pn(Fn.get(i)||null,e,t,n,r,l)),!0}return!1}function Rs(e){var t=kt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Es(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oi=r,n.target.dispatchEvent(r),oi=null}else return t=qn(n),t!==null&&bi(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){kr(e)&&n.delete(t)}function rf(){fi=!1,lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),Rn.forEach(Zo),Fn.forEach(Zo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fi||(fi=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,rf)))}function On(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),it!==null&&mn(it,e),ot!==null&&mn(ot,e),Rn.forEach(t),Fn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Rs(n),n.blockedOn===null&&et.shift()}var Gt=Ze.ReactCurrentBatchConfig,Or=!0;function lf(e,t,n,r){var l=D,i=Gt.transition;Gt.transition=null;try{D=1,eo(e,t,n,r)}finally{D=l,Gt.transition=i}}function of(e,t,n,r){var l=D,i=Gt.transition;Gt.transition=null;try{D=4,eo(e,t,n,r)}finally{D=l,Gt.transition=i}}function eo(e,t,n,r){if(Or){var l=di(e,t,n,r);if(l===null)Fl(e,t,r,Ar,n),Go(e,r);else if(nf(l,e,t,n,r))r.stopPropagation();else if(Go(e,r),t&4&&-1<tf.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Ts(i),i=di(e,t,n,r),i===null&&Fl(e,t,r,Ar,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var Ar=null;function di(e,t,n,r){if(Ar=null,e=Zi(r),e=kt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Es(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Ji:return 1;case js:return 4;case Rr:case Kc:return 16;case zs:return 536870912;default:return 16}default:return 16}}var nt=null,to=null,Sr=null;function Os(){if(Sr)return Sr;var e,t=to,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Jo(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Jo,this.isPropagationStopped=Jo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=ke(un),Jn=B({},un,{view:0,detail:0}),uf=ke(Jn),jl,zl,hn,ll=B({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(jl=e.screenX-hn.screenX,zl=e.screenY-hn.screenY):zl=jl=0,hn=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),qo=ke(ll),sf=B({},ll,{dataTransfer:0}),af=ke(sf),cf=B({},Jn,{relatedTarget:0}),Pl=ke(cf),ff=B({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),df=ke(ff),pf=B({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=ke(pf),hf=B({},un,{data:0}),bo=ke(hf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vf[e])?!!t[e]:!1}function ro(){return xf}var wf=B({},Jn,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=ke(wf),Sf=B({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=ke(Sf),Ef=B({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Cf=ke(Ef),Nf=B({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=ke(Nf),jf=B({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zf=ke(jf),Pf=[9,13,27,32],lo=Ye&&"CompositionEvent"in window,Nn=null;Ye&&"documentMode"in document&&(Nn=document.documentMode);var Lf=Ye&&"TextEvent"in window&&!Nn,As=Ye&&(!lo||Nn&&8<Nn&&11>=Nn),tu=" ",nu=!1;function Us(e,t){switch(e){case"keyup":return Pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function Tf(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(nu=!0,tu);case"textInput":return e=t.data,e===tu&&nu?null:e;default:return null}}function Mf(e,t){if(Ft)return e==="compositionend"||!lo&&Us(e,t)?(e=Os(),Sr=to=nt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return As&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function Bs(e,t,n,r){vs(r),t=Ur(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,An=null;function Df(e){qs(e,0)}function il(e){var t=Ut(e);if(fs(t))return e}function Rf(e,t){if(e==="change")return t}var Vs=!1;if(Ye){var Ll;if(Ye){var Tl="oninput"in document;if(!Tl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Tl=typeof lu.oninput=="function"}Ll=Tl}else Ll=!1;Vs=Ll&&(!document.documentMode||9<document.documentMode)}function iu(){_n&&(_n.detachEvent("onpropertychange",Hs),An=_n=null)}function Hs(e){if(e.propertyName==="value"&&il(An)){var t=[];Bs(t,An,e,Zi(e)),Ss(Df,t)}}function Ff(e,t,n){e==="focusin"?(iu(),_n=t,An=n,_n.attachEvent("onpropertychange",Hs)):e==="focusout"&&iu()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(An)}function Af(e,t){if(e==="click")return il(t)}function Uf(e,t){if(e==="input"||e==="change")return il(t)}function $f(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:$f;function Un(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bf(e){var t=Qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ws(n.ownerDocument.documentElement,n)){if(r!==null&&io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=uu(n,i);var o=uu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=Ye&&"documentMode"in document&&11>=document.documentMode,Ot=null,pi=null,jn=null,mi=!1;function su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mi||Ot==null||Ot!==Mr(r)||(r=Ot,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Un(jn,r)||(jn=r,r=Ur(pi,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ot)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ml={},Ys={};Ye&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function ol(e){if(Ml[e])return Ml[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ys)return Ml[e]=t[n];return e}var Ks=ol("animationend"),Xs=ol("animationiteration"),Gs=ol("animationstart"),Zs=ol("transitionend"),Js=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Js.set(e,t),Tt(t,[e])}for(var Il=0;Il<au.length;Il++){var Dl=au[Il],Hf=Dl.toLowerCase(),Wf=Dl[0].toUpperCase()+Dl.slice(1);mt(Hf,"on"+Wf)}mt(Ks,"onAnimationEnd");mt(Xs,"onAnimationIteration");mt(Gs,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Zs,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vc(r,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;cu(l,u,c),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;cu(l,u,c),i=s}}}if(Dr)throw e=ai,Dr=!1,ai=null,e}function F(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var r=e+"__bubble";n.has(r)||(bs(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),bs(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[fr]){e[fr]=!0,os.forEach(function(n){n!=="selectionchange"&&(Qf.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Rl("selectionchange",!1,t))}}function bs(e,t,n,r){switch(Fs(t)){case 1:var l=lf;break;case 4:l=of;break;default:l=eo}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=kt(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Ss(function(){var c=i,y=Zi(n),h=[];e:{var m=Js.get(e);if(m!==void 0){var g=no,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":g=kf;break;case"focusin":w="focus",g=Pl;break;case"focusout":w="blur",g=Pl;break;case"beforeblur":case"afterblur":g=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cf;break;case Ks:case Xs:case Gs:g=df;break;case Zs:g=_f;break;case"scroll":g=uf;break;case"wheel":g=zf;break;case"copy":case"cut":case"paste":g=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=eu}var k=(t&4)!==0,I=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var a=c,d;a!==null;){d=a;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Dn(a,f),v!=null&&k.push(Bn(a,v,d)))),I)break;a=a.return}0<k.length&&(m=new g(m,w,null,n,y),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==oi&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Ke]))break e;if((g||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?kt(w):null,w!==null&&(I=Mt(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(k=qo,v="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=eu,v="onPointerLeave",f="onPointerEnter",a="pointer"),I=g==null?m:Ut(g),d=w==null?m:Ut(w),m=new k(v,a+"leave",g,n,y),m.target=I,m.relatedTarget=d,v=null,kt(y)===c&&(k=new k(f,a+"enter",w,n,y),k.target=d,k.relatedTarget=I,v=k),I=v,g&&w)t:{for(k=g,f=w,a=0,d=k;d;d=It(d))a++;for(d=0,v=f;v;v=It(v))d++;for(;0<a-d;)k=It(k),a--;for(;0<d-a;)f=It(f),d--;for(;a--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;g!==null&&fu(h,m,g,k,!1),w!==null&&I!==null&&fu(h,I,w,k,!0)}}e:{if(m=c?Ut(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=Rf;else if(ru(m))if(Vs)E=Uf;else{E=Of;var N=Ff}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Af);if(E&&(E=E(e,c))){Bs(h,E,n,y);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ti(m,"number",m.value)}switch(N=c?Ut(c):window,e){case"focusin":(ru(N)||N.contentEditable==="true")&&(Ot=N,pi=c,jn=null);break;case"focusout":jn=pi=Ot=null;break;case"mousedown":mi=!0;break;case"contextmenu":case"mouseup":case"dragend":mi=!1,su(h,n,y);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":su(h,n,y)}var _;if(lo)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ft?Us(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(As&&n.locale!=="ko"&&(Ft||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ft&&(_=Os()):(nt=y,to="value"in nt?nt.value:nt.textContent,Ft=!0)),N=Ur(c,j),0<N.length&&(j=new bo(j,e,null,n,y),h.push({event:j,listeners:N}),_?j.data=_:(_=$s(n),_!==null&&(j.data=_)))),(_=Lf?Tf(e,n):Mf(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(y=new bo("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:c}),y.data=_))}qs(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=Dn(n,i),s!=null&&o.unshift(Bn(n,s,u))):l||(s=Dn(n,i),s!=null&&o.push(Bn(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Yf,`
`).replace(Kf,"")}function dr(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(x(425))}function $r(){}var hi=null,yi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Gf=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Zf)}:vi;function Zf(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);On(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+sn,Vn="__reactProps$"+sn,Ke="__reactContainer$"+sn,xi="__reactEvents$"+sn,Jf="__reactListeners$"+sn,qf="__reactHandles$"+sn;function kt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mu(e);e!==null;){if(n=e[Ae])return n;e=mu(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ul(e){return e[Vn]||null}var wi=[],$t=-1;function ht(e){return{current:e}}function O(e){0>$t||(e.current=wi[$t],wi[$t]=null,$t--)}function R(e,t){$t++,wi[$t]=e.current,e.current=t}var pt={},le=ht(pt),pe=ht(!1),_t=pt;function bt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Br(){O(pe),O(le)}function hu(e,t,n){if(le.current!==pt)throw Error(x(168));R(le,t),R(pe,n)}function ea(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Rc(e)||"Unknown",l));return B({},n,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,_t=le.current,R(le,e),R(pe,pe.current),!0}function yu(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=ea(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,O(pe),O(le),R(le,e)):O(pe),R(pe,n)}var Ve=null,sl=!1,Al=!1;function ta(e){Ve===null?Ve=[e]:Ve.push(e)}function bf(e){sl=!0,ta(e)}function yt(){if(!Al&&Ve!==null){Al=!0;var e=0,t=D;try{var n=Ve;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,sl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),_s(Ji,yt),l}finally{D=t,Al=!1}}return null}var Bt=[],Vt=0,Hr=null,Wr=0,Se=[],Ee=0,jt=null,He=1,We="";function xt(e,t){Bt[Vt++]=Wr,Bt[Vt++]=Hr,Hr=e,Wr=t}function na(e,t,n){Se[Ee++]=He,Se[Ee++]=We,Se[Ee++]=jt,jt=e;var r=He;e=We;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Ie(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function oo(e){e.return!==null&&(xt(e,1),na(e,1,0))}function uo(e){for(;e===Hr;)Hr=Bt[--Vt],Bt[Vt]=null,Wr=Bt[--Vt],Bt[Vt]=null;for(;e===jt;)jt=Se[--Ee],Se[Ee]=null,We=Se[--Ee],Se[Ee]=null,He=Se[--Ee],Se[Ee]=null}var ve=null,ge=null,A=!1,Me=null;function ra(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Si(e){if(A){var t=ge;if(t){var n=t;if(!gu(e,t)){if(ki(e))throw Error(x(418));t=ut(n.nextSibling);var r=ve;t&&gu(e,t)?ra(r,n):(e.flags=e.flags&-4097|2,A=!1,ve=e)}}else{if(ki(e))throw Error(x(418));e.flags=e.flags&-4097|2,A=!1,ve=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!A)return vu(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=ge)){if(ki(e))throw la(),Error(x(418));for(;t;)ra(e,t),t=ut(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?ut(e.stateNode.nextSibling):null;return!0}function la(){for(var e=ge;e;)e=ut(e.nextSibling)}function en(){ge=ve=null,A=!1}function so(e){Me===null?Me=[e]:Me.push(e)}var ed=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function ia(e){function t(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function n(f,a){if(!e)return null;for(;a!==null;)t(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=ft(f,a),f.index=0,f.sibling=null,f}function i(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,a,d,v){return a===null||a.tag!==6?(a=Ql(d,f.mode,v),a.return=f,a):(a=l(a,d),a.return=f,a)}function s(f,a,d,v){var E=d.type;return E===Rt?y(f,a,d.props.children,v,d.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&xu(E)===a.type)?(v=l(a,d.props),v.ref=yn(f,a,d),v.return=f,v):(v=Lr(d.type,d.key,d.props,null,f.mode,v),v.ref=yn(f,a,d),v.return=f,v)}function c(f,a,d,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Yl(d,f.mode,v),a.return=f,a):(a=l(a,d.children||[]),a.return=f,a)}function y(f,a,d,v,E){return a===null||a.tag!==7?(a=Nt(d,f.mode,v,E),a.return=f,a):(a=l(a,d),a.return=f,a)}function h(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ql(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return d=Lr(a.type,a.key,a.props,null,f.mode,d),d.ref=yn(f,null,a),d.return=f,d;case Dt:return a=Yl(a,f.mode,d),a.return=f,a;case qe:var v=a._init;return h(f,v(a._payload),d)}if(wn(a)||fn(a))return a=Nt(a,f.mode,d,null),a.return=f,a;mr(f,a)}return null}function m(f,a,d,v){var E=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:u(f,a,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===E?s(f,a,d,v):null;case Dt:return d.key===E?c(f,a,d,v):null;case qe:return E=d._init,m(f,a,E(d._payload),v)}if(wn(d)||fn(d))return E!==null?null:y(f,a,d,v,null);mr(f,d)}return null}function g(f,a,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,u(a,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return f=f.get(v.key===null?d:v.key)||null,s(a,f,v,E);case Dt:return f=f.get(v.key===null?d:v.key)||null,c(a,f,v,E);case qe:var N=v._init;return g(f,a,d,N(v._payload),E)}if(wn(v)||fn(v))return f=f.get(d)||null,y(a,f,v,E,null);mr(a,v)}return null}function w(f,a,d,v){for(var E=null,N=null,_=a,j=a=0,H=null;_!==null&&j<d.length;j++){_.index>j?(H=_,_=null):H=_.sibling;var T=m(f,_,d[j],v);if(T===null){_===null&&(_=H);break}e&&_&&T.alternate===null&&t(f,_),a=i(T,a,j),N===null?E=T:N.sibling=T,N=T,_=H}if(j===d.length)return n(f,_),A&&xt(f,j),E;if(_===null){for(;j<d.length;j++)_=h(f,d[j],v),_!==null&&(a=i(_,a,j),N===null?E=_:N.sibling=_,N=_);return A&&xt(f,j),E}for(_=r(f,_);j<d.length;j++)H=g(_,f,j,d[j],v),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?j:H.key),a=i(H,a,j),N===null?E=H:N.sibling=H,N=H);return e&&_.forEach(function(ze){return t(f,ze)}),A&&xt(f,j),E}function k(f,a,d,v){var E=fn(d);if(typeof E!="function")throw Error(x(150));if(d=E.call(d),d==null)throw Error(x(151));for(var N=E=null,_=a,j=a=0,H=null,T=d.next();_!==null&&!T.done;j++,T=d.next()){_.index>j?(H=_,_=null):H=_.sibling;var ze=m(f,_,T.value,v);if(ze===null){_===null&&(_=H);break}e&&_&&ze.alternate===null&&t(f,_),a=i(ze,a,j),N===null?E=ze:N.sibling=ze,N=ze,_=H}if(T.done)return n(f,_),A&&xt(f,j),E;if(_===null){for(;!T.done;j++,T=d.next())T=h(f,T.value,v),T!==null&&(a=i(T,a,j),N===null?E=T:N.sibling=T,N=T);return A&&xt(f,j),E}for(_=r(f,_);!T.done;j++,T=d.next())T=g(_,f,j,T.value,v),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?j:T.key),a=i(T,a,j),N===null?E=T:N.sibling=T,N=T);return e&&_.forEach(function(an){return t(f,an)}),A&&xt(f,j),E}function I(f,a,d,v){if(typeof d=="object"&&d!==null&&d.type===Rt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:e:{for(var E=d.key,N=a;N!==null;){if(N.key===E){if(E=d.type,E===Rt){if(N.tag===7){n(f,N.sibling),a=l(N,d.props.children),a.return=f,f=a;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&xu(E)===N.type){n(f,N.sibling),a=l(N,d.props),a.ref=yn(f,N,d),a.return=f,f=a;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===Rt?(a=Nt(d.props.children,f.mode,v,d.key),a.return=f,f=a):(v=Lr(d.type,d.key,d.props,null,f.mode,v),v.ref=yn(f,a,d),v.return=f,f=v)}return o(f);case Dt:e:{for(N=d.key;a!==null;){if(a.key===N)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){n(f,a.sibling),a=l(a,d.children||[]),a.return=f,f=a;break e}else{n(f,a);break}else t(f,a);a=a.sibling}a=Yl(d,f.mode,v),a.return=f,f=a}return o(f);case qe:return N=d._init,I(f,a,N(d._payload),v)}if(wn(d))return w(f,a,d,v);if(fn(d))return k(f,a,d,v);mr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(n(f,a.sibling),a=l(a,d),a.return=f,f=a):(n(f,a),a=Ql(d,f.mode,v),a.return=f,f=a),o(f)):n(f,a)}return I}var tn=ia(!0),oa=ia(!1),Qr=ht(null),Yr=null,Ht=null,ao=null;function co(){ao=Ht=Yr=null}function fo(e){var t=Qr.current;O(Qr),e._currentValue=t}function Ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Yr=e,ao=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Yr===null)throw Error(x(308));Ht=e,Yr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var St=null;function po(e){St===null?St=[e]:St.push(e)}function ua(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,po(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,po(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}function wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;be=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==o&&(u===null?y.firstBaseUpdate=c:u.next=c,y.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,y=c=s=null,u=i;do{var m=u.lane,g=u.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,k=u;switch(m=t,g=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(g,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(g,h,m):w,m==null)break e;h=B({},h,m);break e;case 2:be=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else g={eventTime:g,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(c=y=g,s=h):y=y.next=g,o|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(y===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var bn={},$e=ht(bn),Hn=ht(bn),Wn=ht(bn);function Et(e){if(e===bn)throw Error(x(174));return e}function ho(e,t){switch(R(Wn,t),R(Hn,e),R($e,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}O($e),R($e,t)}function nn(){O($e),O(Hn),O(Wn)}function aa(e){Et(Wn.current);var t=Et($e.current),n=ri(t,e.type);t!==n&&(R(Hn,e),R($e,n))}function yo(e){Hn.current===e&&(O($e),O(Hn))}var U=ht(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function go(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Nr=Ze.ReactCurrentDispatcher,$l=Ze.ReactCurrentBatchConfig,zt=0,$=null,K=null,Z=null,Gr=!1,zn=!1,Qn=0,td=0;function te(){throw Error(x(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,l,i){if(zt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?id:od,e=n(r,l),zn){i=0;do{if(zn=!1,Qn=0,25<=i)throw Error(x(301));i+=1,Z=K=null,t.updateQueue=null,Nr.current=ud,e=n(r,l)}while(zn)}if(Nr.current=Zr,t=K!==null&&K.next!==null,zt=0,Z=K=$=null,Gr=!1,t)throw Error(x(300));return e}function wo(){var e=Qn!==0;return Qn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function je(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(x(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=je(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,c=i;do{var y=c.lane;if((zt&y)===y)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=h,o=r):s=s.next=h,$.lanes|=y,Pt|=y}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=u,Re(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=je(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Re(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ca(){}function fa(e,t){var n=$,r=je(),l=t(),i=!Re(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,ko(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Kn(9,pa.bind(null,n,r,l,t),void 0,null),J===null)throw Error(x(349));zt&30||da(n,t,l)}return l}function da(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ha(t)&&ya(e)}function ma(e,t,n){return n(function(){ha(t)&&ya(e)})}function ha(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function ya(e){var t=Xe(e,1);t!==null&&De(t,e,1,-1)}function Su(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=ld.bind(null,$,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ga(){return je().memoizedState}function _r(e,t,n,r){var l=Oe();$.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=je();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function Eu(e,t){return _r(8390656,8,e,t)}function ko(e,t){return al(2048,8,e,t)}function va(e,t){return al(4,2,e,t)}function xa(e,t){return al(4,4,e,t)}function wa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ka(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,wa.bind(null,t,e),n)}function So(){}function Sa(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ea(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ca(e,t,n){return zt&21?(Re(n,t)||(n=Ps(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function nd(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),t()}finally{D=n,$l.transition=r}}function Na(){return je().memoizedState}function rd(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_a(e))ja(t,n);else if(n=ua(e,t,n,r),n!==null){var l=se();De(n,e,r,l),za(n,t,r)}}function ld(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_a(e))ja(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Re(u,o)){var s=t.interleaved;s===null?(l.next=l,po(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ua(e,t,l,r),n!==null&&(l=se(),De(n,e,r,l),za(n,t,r))}}function _a(e){var t=e.alternate;return e===$||t!==null&&t===$}function ja(e,t){zn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function za(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qi(e,n)}}var Zr={readContext:_e,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},id={readContext:_e,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Eu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,wa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Su,useDebugValue:So,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Su(!1),t=e[0];return e=nd.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Oe();if(A){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),J===null)throw Error(x(349));zt&30||da(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Eu(ma.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,pa.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Oe(),t=J.identifierPrefix;if(A){var n=We,r=He;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:_e,useCallback:Sa,useContext:_e,useEffect:ko,useImperativeHandle:ka,useInsertionEffect:va,useLayoutEffect:xa,useMemo:Ea,useReducer:Bl,useRef:ga,useState:function(){return Bl(Yn)},useDebugValue:So,useDeferredValue:function(e){var t=je();return Ca(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Yn)[0],t=je().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:fa,useId:Na,unstable_isNewReconciler:!1},ud={readContext:_e,useCallback:Sa,useContext:_e,useEffect:ko,useImperativeHandle:ka,useInsertionEffect:va,useLayoutEffect:xa,useMemo:Ea,useReducer:Vl,useRef:ga,useState:function(){return Vl(Yn)},useDebugValue:So,useDeferredValue:function(e){var t=je();return K===null?t.memoizedState=e:Ca(t,K.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=je().memoizedState;return[e,t]},useMutableSource:ca,useSyncExternalStore:fa,useId:Na,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=ct(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(De(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=ct(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(De(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=ct(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(De(t,e,r,n),Cr(t,e,r))}};function Cu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function Pa(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=me(t)?_t:le.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=me(t)?_t:le.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ci(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Dc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function La(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Fi=r),_i(e,t)},n}function Ta(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sd.bind(null,e,t,n),t.then(e,e))}function ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var ad=Ze.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?oa(t,null,n,r):tn(t,e.child,n,r)}function Pu(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=xo(e,t,n,r,i,l),n=wo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(A&&n&&oo(t),t.flags|=1,oe(e,t,r,l),t.child)}function Lu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Lo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ma(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ma(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return ji(e,t,n,r,l)}function Ia(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Qt,ye),ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Qt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,R(Qt,ye),ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,R(Qt,ye),ye|=r;return oe(e,t,l,n),t.child}function Da(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ji(e,t,n,r,l){var i=me(n)?_t:le.current;return i=bt(t,i),Zt(t,l),n=xo(e,t,n,r,i,l),r=wo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(A&&r&&oo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Tu(e,t,n,r,l){if(me(n)){var i=!0;Vr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)jr(e,t),Pa(t,n,r),Ni(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=me(n)?_t:le.current,c=bt(t,c));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Nu(t,o,r,c),be=!1;var m=t.memoizedState;o.state=m,Kr(t,r,o,l),s=t.memoizedState,u!==r||m!==s||pe.current||be?(typeof y=="function"&&(Ci(t,n,y,r),s=t.memoizedState),(u=be||Cu(t,n,u,r,m,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,sa(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Le(t.type,u),o.props=c,h=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=_e(s):(s=me(n)?_t:le.current,s=bt(t,s));var g=n.getDerivedStateFromProps;(y=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==h||m!==s)&&Nu(t,o,r,s),be=!1,m=t.memoizedState,o.state=m,Kr(t,r,o,l);var w=t.memoizedState;u!==h||m!==w||pe.current||be?(typeof g=="function"&&(Ci(t,n,g,r),w=t.memoizedState),(c=be||Cu(t,n,c,r,m,w,s)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zi(e,t,n,r,i,l)}function zi(e,t,n,r,l,i){Da(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&yu(t,n,!1),Ge(e,t,i);r=t.stateNode,ad.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,u,i)):oe(e,t,u,i),t.memoizedState=r.state,l&&yu(t,n,!0),t.child}function Ra(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),ho(e,t.containerInfo)}function Mu(e,t,n,r,l){return en(),so(l),t.flags|=256,oe(e,t,n,r),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fa(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(U,l&1),e===null)return Si(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=pl(o,r,0,null),e=Nt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Li(n),t.memoizedState=Pi,e):Eo(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return cd(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ft(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ft(u,i):(i=Nt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Li(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Pi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eo(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&so(r),tn(t,e.child,null,n),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(x(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),i=Nt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Li(o),t.memoizedState=Pi,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(x(419)),r=Hl(i,r,void 0),hr(e,t,o,r)}if(u=(o&e.childLanes)!==0,de||u){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),De(r,e,l,-1))}return Po(),r=Hl(Error(x(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ed.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ge=ut(l.nextSibling),ve=t,A=!0,Me=null,e!==null&&(Se[Ee++]=He,Se[Ee++]=We,Se[Ee++]=jt,He=e.id,We=e.overflow,jt=t),t=Eo(t,r.children),t.flags|=4096,t)}function Iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ei(e.return,t,n)}function Wl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Oa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,n,t);else if(e.tag===19)Iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wl(t,!0,n,null,i);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Ra(t),en();break;case 5:aa(t);break;case 1:me(t.type)&&Vr(t);break;case 4:ho(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;R(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Fa(e,t,n):(R(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);R(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ia(e,t,n)}return Ge(e,t,n)}var Aa,Ti,Ua,$a;Aa=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ti=function(){};Ua=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et($e.current);var i=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ni(e,l),r=ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}li(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};$a=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return me(t.type)&&Br(),ne(t),null;case 3:return r=t.stateNode,nn(),O(pe),O(le),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Ui(Me),Me=null))),Ti(e,t),ne(t),null;case 5:yo(t);var l=Et(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ua(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ne(t),null}if(e=Et($e.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)F(Sn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Vo(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Wo(r,i),F("invalid",r)}li(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",""+u]):Mn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":lr(r),Ho(r,i,!0);break;case"textarea":lr(r),Qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[Vn]=r,Aa(e,t,!1,!1),t.stateNode=e;e:{switch(o=ii(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)F(Sn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Vo(e,r),l=bl(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),F("invalid",e);break;case"textarea":Wo(e,r),l=ni(e,r),F("invalid",e);break;default:l=r}li(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?gs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&In(e,s):typeof s=="number"&&In(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&F("scroll",e):s!=null&&Yi(e,i,s,o))}switch(n){case"input":lr(e),Ho(e,r,!1);break;case"textarea":lr(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)$a(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Et(Wn.current),Et($e.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ne(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ge!==null&&t.mode&1&&!(t.flags&128))la(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ae]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Me!==null&&(Ui(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Po())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Ti(e,t),e===null&&$n(t.stateNode.containerInfo),ne(t),null;case 10:return fo(t.type._context),ne(t),null;case 17:return me(t.type)&&Br(),ne(t),null;case 19:if(O(U),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xr(e),o!==null){for(t.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return ne(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,R(U,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function pd(e,t){switch(uo(t),t.tag){case 1:return me(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),O(pe),O(le),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yo(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return nn(),null;case 10:return fo(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var yr=!1,re=!1,md=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Mi(e,t,n){try{n()}catch(r){V(e,t,r)}}var Du=!1;function hd(e,t){if(hi=Or,e=Qs(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,s=-1,c=0,y=0,h=e,m=null;t:for(;;){for(var g;h!==n||l!==0&&h.nodeType!==3||(u=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++c===l&&(u=o),m===i&&++y===r&&(s=o),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,I=w.memoizedState,f=t.stateNode,a=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Le(t.type,k),I);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Du,Du=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Mi(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ii(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ba(e){var t=e.alternate;t!==null&&(e.alternate=null,Ba(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Vn],delete t[xi],delete t[Jf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Va(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Va(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}var q=null,Te=!1;function Je(e,t,n){for(n=n.child;n!==null;)Ha(e,t,n),n=n.sibling}function Ha(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:re||Wt(n,t);case 6:var r=q,l=Te;q=null,Je(e,t,n),q=r,Te=l,q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),On(e)):Ol(q,n.stateNode));break;case 4:r=q,l=Te,q=n.stateNode.containerInfo,Te=!0,Je(e,t,n),q=r,Te=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mi(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!re&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Je(e,t,n),re=r):Je(e,t,n);break;default:Je(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new md),t.forEach(function(r){var l=Cd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Te=!1;break e;case 3:q=u.stateNode.containerInfo,Te=!0;break e;case 4:q=u.stateNode.containerInfo,Te=!0;break e}u=u.return}if(q===null)throw Error(x(160));Ha(i,o,l),q=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wa(t,e),t=t.sibling}function Wa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Fe(e),r&4){try{Pn(3,e,e.return),fl(3,e)}catch(k){V(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Pe(t,e),Fe(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),Fe(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ds(l,i),ii(u,o);var c=ii(u,i);for(o=0;o<s.length;o+=2){var y=s[o],h=s[o+1];y==="style"?gs(l,h):y==="dangerouslySetInnerHTML"?hs(l,h):y==="children"?In(l,h):Yi(l,y,h,c)}switch(u){case"input":ei(l,i);break;case"textarea":ps(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Yt(l,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(k){V(e,e.return,k)}}break;case 6:if(Pe(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(Pe(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Pe(t,e),Fe(e);break;case 13:Pe(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=Q())),r&4&&Fu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||y,Pe(t,e),re=c):Pe(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(S=e,y=e.child;y!==null;){for(h=S=y;S!==null;){switch(m=S,g=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Wt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Au(h);continue}}g!==null?(g.return=m,S=g):Au(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ys("display",o))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Fe(e),r&4&&Fu(e);break;case 21:break;default:Pe(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Va(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Ru(e);Ri(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Ru(e);Di(e,u,o);break;default:throw Error(x(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yd(e,t,n){S=e,Qa(e)}function Qa(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||yr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||re;u=yr;var c=re;if(yr=o,(re=s)&&!c)for(S=l;S!==null;)o=S,s=o.child,o.tag===22&&o.memoizedState!==null?Uu(l):s!==null?(s.return=o,S=s):Uu(l);for(;i!==null;)S=i,Qa(i),i=i.sibling;S=l,yr=u,re=c}Ou(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ou(e)}}function Ou(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ku(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&On(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}re||t.flags&512&&Ii(t)}catch(m){V(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Au(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Uu(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var i=t.return;try{Ii(t)}catch(s){V(t,i,s)}break;case 5:var o=t.return;try{Ii(t)}catch(s){V(t,o,s)}}}catch(s){V(t,t.return,s)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var gd=Math.ceil,Jr=Ze.ReactCurrentDispatcher,Co=Ze.ReactCurrentOwner,Ne=Ze.ReactCurrentBatchConfig,M=0,J=null,Y=null,b=0,ye=0,Qt=ht(0),X=0,Xn=null,Pt=0,dl=0,No=0,Ln=null,fe=null,_o=0,ln=1/0,Be=null,qr=!1,Fi=null,at=null,gr=!1,rt=null,br=0,Tn=0,Oi=null,zr=-1,Pr=0;function se(){return M&6?Q():zr!==-1?zr:zr=Q()}function ct(e){return e.mode&1?M&2&&b!==0?b&-b:ed.transition!==null?(Pr===0&&(Pr=Ps()),Pr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Fs(e.type)),e):1}function De(e,t,n,r){if(50<Tn)throw Tn=0,Oi=null,Error(x(185));Zn(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(dl|=n),X===4&&tt(e,b)),he(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Q()+500,sl&&yt()))}function he(e,t){var n=e.callbackNode;bc(e,t);var r=Fr(e,e===J?b:0);if(r===0)n!==null&&Xo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xo(n),t===1)e.tag===0?bf($u.bind(null,e)):ta($u.bind(null,e)),Gf(function(){!(M&6)&&yt()}),n=null;else{switch(Ls(r)){case 1:n=Ji;break;case 4:n=js;break;case 16:n=Rr;break;case 536870912:n=zs;break;default:n=Rr}n=ba(n,Ya.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ya(e,t){if(zr=-1,Pr=0,M&6)throw Error(x(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Fr(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=M;M|=2;var i=Xa();(J!==e||b!==t)&&(Be=null,ln=Q()+500,Ct(e,t));do try{wd();break}catch(u){Ka(e,u)}while(!0);co(),Jr.current=i,M=l,Y!==null?t=0:(J=null,b=0,t=X)}if(t!==0){if(t===2&&(l=ci(e),l!==0&&(r=l,t=Ai(e,l))),t===1)throw n=Xn,Ct(e,0),tt(e,r),he(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!vd(l)&&(t=el(e,r),t===2&&(i=ci(e),i!==0&&(r=i,t=Ai(e,i))),t===1))throw n=Xn,Ct(e,0),tt(e,r),he(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:wt(e,fe,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=_o+500-Q(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(wt.bind(null,e,fe,Be),t);break}wt(e,fe,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=vi(wt.bind(null,e,fe,Be),r);break}wt(e,fe,Be);break;case 5:wt(e,fe,Be);break;default:throw Error(x(329))}}}return he(e,Q()),e.callbackNode===n?Ya.bind(null,e):null}function Ai(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=el(e,t),e!==2&&(t=fe,fe=n,t!==null&&Ui(t)),e}function Ui(e){fe===null?fe=e:fe.push.apply(fe,e)}function vd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Re(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~No,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(M&6)throw Error(x(327));Jt();var t=Fr(e,0);if(!(t&1))return he(e,Q()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Ai(e,r))}if(n===1)throw n=Xn,Ct(e,0),tt(e,t),he(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,fe,Be),he(e,Q()),null}function jo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Q()+500,sl&&yt())}}function Lt(e){rt!==null&&rt.tag===0&&!(M&6)&&Jt();var t=M;M|=1;var n=Ne.transition,r=D;try{if(Ne.transition=null,D=1,e)return e()}finally{D=r,Ne.transition=n,M=t,!(M&6)&&yt()}}function zo(){ye=Qt.current,O(Qt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nn(),O(pe),O(le),go();break;case 5:yo(r);break;case 4:nn();break;case 13:O(U);break;case 19:O(U);break;case 10:fo(r.type._context);break;case 22:case 23:zo()}n=n.return}if(J=e,Y=e=ft(e.current,null),b=ye=t,X=0,Xn=null,No=dl=Pt=0,fe=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Ka(e,t){do{var n=Y;try{if(co(),Nr.current=Zr,Gr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(zt=0,Z=K=$=null,zn=!1,Qn=0,Co.current=null,n===null||n.return===null){X=1,Xn=t,Y=null;break}e:{var i=e,o=n.return,u=n,s=t;if(t=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,y=u,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var g=ju(o);if(g!==null){g.flags&=-257,zu(g,o,u,i,t),g.mode&1&&_u(i,c,t),t=g,s=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){_u(i,c,t),Po();break e}s=Error(x(426))}}else if(A&&u.mode&1){var I=ju(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),zu(I,o,u,i,t),so(rn(s,u));break e}}i=s=rn(s,u),X!==4&&(X=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=La(i,s,t);wu(i,f);break e;case 1:u=s;var a=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(at===null||!at.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ta(i,u,t);wu(i,v);break e}}i=i.return}while(i!==null)}Za(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Xa(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function Po(){(X===0||X===3||X===2)&&(X=4),J===null||!(Pt&268435455)&&!(dl&268435455)||tt(J,b)}function el(e,t){var n=M;M|=2;var r=Xa();(J!==e||b!==t)&&(Be=null,Ct(e,t));do try{xd();break}catch(l){Ka(e,l)}while(!0);if(co(),M=n,Jr.current=r,Y!==null)throw Error(x(261));return J=null,b=0,X}function xd(){for(;Y!==null;)Ga(Y)}function wd(){for(;Y!==null&&!Wc();)Ga(Y)}function Ga(e){var t=qa(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Za(e):Y=t,Co.current=null}function Za(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=dd(n,t,ye),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function wt(e,t,n){var r=D,l=Ne.transition;try{Ne.transition=null,D=1,kd(e,t,n,r)}finally{Ne.transition=l,D=r}return null}function kd(e,t,n,r){do Jt();while(rt!==null);if(M&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ef(e,i),e===J&&(Y=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,ba(Rr,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ne.transition,Ne.transition=null;var o=D;D=1;var u=M;M|=4,Co.current=null,hd(e,n),Wa(n,e),Bf(yi),Or=!!hi,yi=hi=null,e.current=n,yd(n),Qc(),M=u,D=o,Ne.transition=i}else e.current=n;if(gr&&(gr=!1,rt=e,br=l),i=e.pendingLanes,i===0&&(at=null),Xc(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Fi,Fi=null,e;return br&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Oi?Tn++:(Tn=0,Oi=e):Tn=0,yt(),null}function Jt(){if(rt!==null){var e=Ls(br),t=Ne.transition,n=D;try{if(Ne.transition=null,D=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,br=0,M&6)throw Error(x(331));var l=M;for(M|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(S=c;S!==null;){var y=S;switch(y.tag){case 0:case 11:case 15:Pn(8,y,i)}var h=y.child;if(h!==null)h.return=y,S=h;else for(;S!==null;){y=S;var m=y.sibling,g=y.return;if(Ba(y),y===c){S=null;break}if(m!==null){m.return=g,S=m;break}S=g}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var a=e.current;for(S=a;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=a;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:fl(9,u)}}catch(E){V(u,u.return,E)}if(u===o){S=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,S=v;break e}S=u.return}}if(M=l,yt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{D=n,Ne.transition=t}}return!1}function Bu(e,t,n){t=rn(n,t),t=La(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Zn(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)Bu(e,e,n);else for(;t!==null;){if(t.tag===3){Bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=rn(n,e),e=Ta(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Zn(t,1,e),he(t,e));break}}t=t.return}}function Sd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(X===4||X===3&&(b&130023424)===b&&500>Q()-_o?Ct(e,0):No|=n),he(e,t)}function Ja(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=se();e=Xe(e,t),e!==null&&(Zn(e,t,n),he(e,n))}function Ed(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ja(e,n)}function Cd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Ja(e,n)}var qa;qa=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,fd(e,t,n);de=!!(e.flags&131072)}else de=!1,A&&t.flags&1048576&&na(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var l=bt(t,le.current);Zt(t,n),l=xo(null,t,r,e,l,n);var i=wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Vr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mo(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Ni(t,r,e,n),t=zi(null,t,r,!0,i,n)):(t.tag=0,A&&i&&oo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_d(r),e=Le(r,e),l){case 0:t=ji(null,t,r,e,n);break e;case 1:t=Tu(null,t,r,e,n);break e;case 11:t=Pu(null,t,r,e,n);break e;case 14:t=Lu(null,t,r,Le(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Tu(e,t,r,l,n);case 3:e:{if(Ra(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,sa(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(x(423)),t),t=Mu(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(x(424)),t),t=Mu(e,t,r,n,l);break e}else for(ge=ut(t.stateNode.containerInfo.firstChild),ve=t,A=!0,Me=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return aa(t),e===null&&Si(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Da(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Si(t),null;case 13:return Fa(e,t,n);case 4:return ho(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Pu(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,R(Qr,r._currentValue),r._currentValue=o,i!==null)if(Re(i.value,o)){if(i.children===l.children&&!pe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Qe(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?s.next=s:(s.next=y.next,y.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ei(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ei(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=_e(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Lu(e,t,r,l,n);case 15:return Ma(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),jr(e,t),t.tag=1,me(r)?(e=!0,Vr(t)):e=!1,Zt(t,n),Pa(t,r,l),Ni(t,r,l,n),zi(null,t,r,!0,e,n);case 19:return Oa(e,t,n);case 22:return Ia(e,t,n)}throw Error(x(156,t.tag))};function ba(e,t){return _s(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Nd(e,t,n,r)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _d(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xi)return 11;if(e===Gi)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rt:return Nt(n.children,l,i,t);case Ki:o=8,l|=8;break;case Gl:return e=Ce(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Zl:return e=Ce(13,n,t,l),e.elementType=Zl,e.lanes=i,e;case Jl:return e=Ce(19,n,t,l),e.elementType=Jl,e.lanes=i,e;case as:return pl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:o=10;break e;case ss:o=9;break e;case Xi:o=11;break e;case Gi:o=14;break e;case qe:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=as,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,n,r,l,i,o,u,s){return e=new jd(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mo(i),e}function zd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return pt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(me(n))return ea(e,n,t)}return t}function tc(e,t,n,r,l,i,o,u,s){return e=To(n,r,!0,e,l,i,o,u,s),e.context=ec(null),n=e.current,r=se(),l=ct(n),i=Qe(r,l),i.callback=t??null,st(n,i,l),e.current.lanes=l,Zn(e,l,r),he(e,r),e}function ml(e,t,n,r){var l=t.current,i=se(),o=ct(l);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,o),e!==null&&(De(e,l,o,i),Cr(e,l,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Pd(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}hl.prototype.render=Io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));ml(e,t,null,null)};hl.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ml(null,e,null,null)}),t[Ke]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Is();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Rs(e)}};function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function Ld(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=tl(o);i.call(c)}}var o=tc(t,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=o,e[Ke]=o.current,$n(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=tl(s);u.call(c)}}var s=To(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=s,e[Ke]=s.current,$n(e.nodeType===8?e.parentNode:e),Lt(function(){ml(t,s,n,r)}),s}function gl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=tl(o);u.call(s)}}ml(t,o,e,l)}else o=Ld(n,t,e,l,r);return tl(o)}Ts=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(qi(t,n|1),he(t,Q()),!(M&6)&&(ln=Q()+500,yt()))}break;case 13:Lt(function(){var r=Xe(e,1);if(r!==null){var l=se();De(r,e,1,l)}}),Mo(e,1)}};bi=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=se();De(t,e,134217728,n)}Mo(e,134217728)}};Ms=function(e){if(e.tag===13){var t=ct(e),n=Xe(e,t);if(n!==null){var r=se();De(n,e,t,r)}Mo(e,t)}};Is=function(){return D};Ds=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};ui=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(x(90));fs(r),ei(r,l)}}}break;case"textarea":ps(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};ws=jo;ks=Lt;var Td={usingClientEntryPoint:!1,Events:[qn,Ut,ul,vs,xs,jo]},vn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cs(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{rl=vr.inject(Md),Ue=vr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Do(t))throw Error(x(200));return zd(e,t,null,n)};we.createRoot=function(e,t){if(!Do(e))throw Error(x(299));var n=!1,r="",l=nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,$n(e.nodeType===8?e.parentNode:e),new Io(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Cs(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!yl(t))throw Error(x(200));return gl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Do(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=tc(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};we.render=function(e,t,n){if(!yl(t))throw Error(x(200));return gl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!yl(e))throw Error(x(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=jo;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return gl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),rs.exports=we;var Id=rs.exports,Wu=Id;Kl.createRoot=Wu.createRoot,Kl.hydrateRoot=Wu.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ie=(e,t)=>{const n=ue.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:s,...c},y)=>ue.createElement("svg",{ref:y,...Dd,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Rd(e)}`,u].join(" "),...c},[...t.map(([h,m])=>ue.createElement(h,m)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=ie("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ie("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ie("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=ie("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ie("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ie("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=ie("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ie("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ie("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ie("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=ie("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=ie("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=ie("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=ie("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ie("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Gd=[{id:"DL2847",route:"ATL → JFK",time:"3:45 PM",status:"delayed",passengers:186,gate:"B24",passenger:{name:"Sarah Mitchell",seat:"12A"}},{id:"DL1092",route:"ATL → LAX",time:"4:15 PM",status:"on-time",passengers:212,gate:"A12",passenger:{name:"James Wilson",seat:"8C"}},{id:"DL0445",route:"ATL → ORD",time:"4:30 PM",status:"on-time",passengers:158,gate:"C08",passenger:{name:"Emily Chen",seat:"15F"}},{id:"DL2231",route:"ATL → SFO",time:"5:00 PM",status:"cancelled",passengers:194,gate:"B31",passenger:{name:"Michael Brooks",seat:"22A"}}],Zd={whatsapp:(e,t,n)=>[{type:"system",text:"WhatsApp Business connecting...",delay:400},{type:"ai",text:`Hi ${t.name.split(" ")[0]}! 👋 This is Delta reaching out personally.`,delay:1e3},{type:"ai",text:n||`I know travel disruptions are stressful, and I'm really sorry to let you know that your flight ${e.id} to ${e.route.split(" → ")[1]} has been ${e.status}. I want to help make this right for you.`,delay:2200},{type:"user",text:"Oh no, I have an important meeting tomorrow!",delay:1800},{type:"ai",text:"I completely understand how important this is to you. Let me personally find the best options to get you there. Give me just a moment... 💙",delay:1500},{type:"ai",text:`Great news! I found some excellent alternatives:

✈️ Option 1: ${e.id.slice(0,2)}2891 at 4:30 PM → Arrives 7:45 PM
✈️ Option 2: ${e.id.slice(0,2)}1847 at 5:15 PM → Arrives 8:30 PM
✈️ Option 3: Stay on current flight, now departing 5:45 PM

Which works best for your schedule?`,delay:2500},{type:"user",text:"The 4:30 one please! Can I keep my window seat?",delay:1600},{type:"ai",text:`Absolutely! I've got you covered. ✅

You're all set on ${e.id.slice(0,2)}2891:
• Seat ${t.seat} (window) - just like you prefer
• Boarding at 4:00 PM
• Gate B31

Sending your new boarding pass now!`,delay:2e3},{type:"ai",text:"Also, as a thank you for your patience and flexibility, I've added 2,500 bonus SkyMiles to your account. You deserve it! 🌟",delay:1800},{type:"user",text:"Wow, that was so easy! Thank you so much!",delay:1200},{type:"ai",text:"You're so welcome! It's my pleasure to help. If anything changes, I'll reach out immediately. Have a wonderful flight, and thank you for flying Delta! ✈️💙",delay:1500},{type:"system",text:"✓ Rebooked • Boarding pass sent • 2,500 miles added • Customer delighted",delay:800}],call:(e,t,n)=>[{type:"system",text:"📞 Initiating call...",delay:400},{type:"system",text:"🔔 Ringing...",delay:1200},{type:"ai",text:`"Hello, may I speak with ${t.name}? ... Hi! This is Delta calling, and my name is Alex from our Customer Care team."`,delay:2e3},{type:"user",text:`"Yes, this is ${t.name.split(" ")[0]}. Is everything okay with my flight?"`,delay:1500},{type:"ai",text:n?`"${n}"`:`"I'm calling because I wanted to reach you personally about your flight ${e.id}. I know how frustrating disruptions can be, especially when you have plans. Your flight has been ${e.status}, and I'm here to take care of you."`,delay:2500},{type:"user",text:'"Oh no... I really need to get there. What can we do?"',delay:1800},{type:"ai",text:`"I hear you, and I want you to know I'm going to do everything I can to get you where you need to be. Let me pull up the best options for you right now... Okay, I found three great alternatives."`,delay:2200},{type:"ai",text:`"Your first option is flight ${e.id.slice(0,2)}2891 leaving at 4:30 PM - you'd arrive at 7:45 PM. Second, there's ${e.id.slice(0,2)}1847 at 5:15 PM arriving 8:30 PM. Or if you prefer, you can stay on your current flight which will now depart at 5:45 PM. What sounds best to you?"`,delay:3e3},{type:"user",text:'"The 4:30 would be perfect! And I really need my window seat..."',delay:1600},{type:"ai",text:`"Say no more - I'm booking that for you right now with seat ${t.seat}, your window seat. ... Done! You're all set. Boarding begins at 4:00 PM at Gate B31."`,delay:2e3},{type:"ai",text:`"And you know what? Because this inconvenience wasn't your fault, I'm adding 2,500 SkyMiles to your account as my way of saying thank you for being such an understanding customer."`,delay:2200},{type:"user",text:`"That's so kind of you! Thank you for calling me."`,delay:1200},{type:"ai",text:'"It was my pleasure! Your new boarding pass is being sent to your phone right now. Is there anything else I can help you with today? ... Wonderful. Thank you for flying Delta, have a safe and pleasant journey!"',delay:2e3},{type:"system",text:"📞 Call ended • Duration: 3:42 • Resolution: Complete • CSAT: ⭐⭐⭐⭐⭐",delay:800}],sms:(e,t,n)=>[{type:"system",text:"SMS sending...",delay:300},{type:"ai",text:`Delta Flight Update: Hi ${t.name.split(" ")[0]}, your flight ${e.id} has been ${e.status}. We're here to help - reply YES to speak with an agent now, or tap: delta.com/rebook/${e.id}`,delay:1200},{type:"user",text:"YES",delay:2e3},{type:"ai",text:n||"Thanks for responding! I'm your Delta assistant. I know this isn't the news you wanted. Let me find you the best alternatives right away.",delay:1500},{type:"ai",text:`Found 3 options for you:

1️⃣ 4:30 PM → 7:45 PM arrival
2️⃣ 5:15 PM → 8:30 PM arrival  
3️⃣ Current flight, new time 5:45 PM

Reply 1, 2, or 3`,delay:2200},{type:"user",text:"1",delay:1e3},{type:"ai",text:`Perfect choice! ✓ CONFIRMED:

✈️ Flight ${e.id.slice(0,2)}2891
🪑 Seat ${t.seat} (window)
🚪 Gate B31
⏰ Boards 4:00 PM

Boarding pass incoming!`,delay:1800},{type:"ai",text:`BONUS: 2,500 SkyMiles added to your account. Thanks for your patience! 💙

Reply HELP anytime. Safe travels!`,delay:1500},{type:"user",text:"Thank you!!",delay:1200},{type:"ai",text:"You're welcome! We appreciate you flying Delta. ✈️",delay:1e3},{type:"system",text:"✓ SMS Resolution Complete • 8 messages • Customer satisfied",delay:600}]},Tr=({channel:e,size:t=20})=>{switch(e){case"whatsapp":return p.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})});case"call":return p.jsx(lc,{size:t});case"sms":return p.jsx(Ad,{size:t});default:return null}},Jd=({flight:e,onSelect:t,onClose:n,customMessage:r,setCustomMessage:l})=>{const i=[{id:"whatsapp",name:"WhatsApp",desc:"Rich messaging with media",color:"#25D366"},{id:"call",name:"Voice Call",desc:"Personal phone conversation",color:"#E31837"},{id:"sms",name:"SMS",desc:"Quick text updates",color:"#3B82F6"}];return p.jsx("div",{className:"modal-overlay",children:p.jsxs("div",{className:"modal",children:[p.jsxs("div",{className:"modal-header",children:[p.jsxs("div",{children:[p.jsxs("h3",{children:["AI Outreach for ",e.id]}),p.jsxs("p",{children:[e.passengers," passengers affected"]})]}),p.jsx("button",{className:"close-btn",onClick:n,children:p.jsx(Xd,{size:20})})]}),p.jsx("div",{className:"channel-grid",children:i.map(o=>p.jsxs("button",{className:"channel-btn",style:{"--channel-color":o.color},onClick:()=>t(o.id),children:[p.jsx("div",{className:"channel-icon",style:{background:o.color},children:p.jsx(Tr,{channel:o.id,size:24})}),p.jsx("span",{className:"channel-name",children:o.name}),p.jsx("span",{className:"channel-desc",children:o.desc})]},o.id))}),p.jsxs("div",{className:"custom-message",children:[p.jsxs("label",{children:[p.jsx(Bd,{size:14}),"Custom AI Message (Optional)"]}),p.jsx("textarea",{value:r,onChange:o=>l(o.target.value),placeholder:`e.g., "We sincerely apologize for the ${e.status} flight. Let me personally help you find the best alternative..."`,rows:3})]}),p.jsx("div",{className:"modal-footer",children:p.jsxs("div",{className:"ai-badge",children:[p.jsx(Qd,{size:14}),"AI will adapt tone based on channel"]})})]})})},qd=({onTriggerAI:e,aiTriggered:t,stats:n,selectedChannel:r})=>{const[l,i]=ue.useState(null),[o,u]=ue.useState(!1),[s,c]=ue.useState(""),y=g=>{i(g)},h=()=>{l&&!t&&u(!0)},m=g=>{u(!1),e(l,g,s),c("")};return p.jsxs("div",{className:"console",children:[p.jsxs("div",{className:"console-header",children:[p.jsxs("div",{className:"console-brand",children:[p.jsx("svg",{viewBox:"0 0 100 100",width:"24",height:"24",children:p.jsx("polygon",{points:"50,10 90,90 10,90",fill:"#E31837"})}),p.jsx("span",{children:"Delta Operations"})]}),p.jsx("div",{className:"console-time",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),p.jsxs("div",{className:"stats-bar",children:[p.jsxs("div",{className:"stat",children:[p.jsx("span",{className:"stat-value",children:n.active}),p.jsx("span",{className:"stat-label",children:"Active Flights"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("span",{className:"stat-value",children:n.delayed}),p.jsx("span",{className:"stat-label",children:"Delayed"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("span",{className:"stat-value",children:n.aiHandling}),p.jsx("span",{className:"stat-label",children:"AI Handling"})]}),p.jsxs("div",{className:"stat",children:[p.jsx("span",{className:"stat-value",children:n.resolved}),p.jsx("span",{className:"stat-label",children:"Resolved"})]})]}),p.jsxs("div",{className:"flight-section",children:[p.jsxs("div",{className:"section-header",children:[p.jsx("h2",{children:"Flight Status"}),p.jsxs("span",{className:"live-badge",children:[p.jsx("span",{className:"live-dot"}),"LIVE"]})]}),p.jsx("div",{className:"flight-list",children:Gd.map(g=>p.jsxs("div",{className:`flight-card ${(l==null?void 0:l.id)===g.id?"selected":""} ${g.status}`,onClick:()=>y(g),children:[p.jsxs("div",{className:"flight-main",children:[p.jsx("div",{className:"flight-id",children:g.id}),p.jsx("div",{className:"flight-route",children:g.route}),p.jsx("div",{className:"flight-time",children:g.time})]}),p.jsxs("div",{className:"flight-meta",children:[p.jsxs("span",{className:`status-badge ${g.status}`,children:[g.status==="delayed"&&p.jsx(Qu,{size:12}),g.status==="on-time"&&p.jsx(Od,{size:12}),g.status==="cancelled"&&p.jsx(Qu,{size:12}),g.status]}),p.jsxs("span",{className:"passenger-count",children:[p.jsx(Yd,{size:12})," ",g.passengers]})]})]},g.id))})]}),l&&p.jsxs("div",{className:"action-panel",children:[p.jsxs("div",{className:"action-header",children:[p.jsxs("h3",{children:["Flight ",l.id]}),p.jsxs("span",{className:"passenger-total",children:[l.passengers," passengers affected"]})]}),t?p.jsxs("div",{className:"ai-active",children:[p.jsxs("div",{className:"ai-status",children:[p.jsx("div",{className:"pulse-ring"}),p.jsxs("span",{children:["AI Active via ",r]})]}),p.jsx("div",{className:"ai-progress",children:p.jsxs("span",{children:["Contacting ",l.passengers," passengers..."]})})]}):p.jsxs("button",{className:"trigger-btn",onClick:h,disabled:l.status==="on-time",children:[p.jsx(ic,{size:18}),"Trigger AI Assistance"]}),l.status==="on-time"&&p.jsx("p",{className:"action-note",children:"AI assistance available for delayed/cancelled flights"})]}),o&&p.jsx(Jd,{flight:l,onSelect:m,onClose:()=>u(!1),customMessage:s,setCustomMessage:c})]})},bd=({messages:e,isTyping:t,channel:n})=>{const r=ue.useRef(null);ue.useEffect(()=>{var o;(o=r.current)==null||o.scrollIntoView({behavior:"smooth"})},[e]);const i=(()=>{switch(n){case"whatsapp":return{name:"Delta Airlines",status:t?"typing...":"online",color:"#25D366"};case"call":return{name:"Delta Customer Care",status:t?"Speaking...":"On Call",color:"#E31837"};case"sms":return{name:"Delta (89377)",status:t?"typing...":"SMS",color:"#3B82F6"};default:return{name:"Delta AI",status:"Waiting...",color:"#E31837"}}})();return p.jsxs("div",{className:"phone-container",children:[p.jsxs("div",{className:"phone",children:[p.jsxs("div",{className:"phone-status-bar",children:[p.jsx("span",{className:"phone-time",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),p.jsxs("div",{className:"phone-icons",children:[p.jsx(Hd,{size:14}),p.jsx(Kd,{size:14}),p.jsx(Fd,{size:14})]})]}),p.jsxs("div",{className:"chat-header",style:{borderBottomColor:n?i.color+"30":"#f0f0f0"},children:[p.jsx("div",{className:"chat-avatar",style:{background:n?i.color+"15":"#f5f5f5"},children:n?p.jsx("div",{style:{color:i.color},children:p.jsx(Tr,{channel:n,size:22})}):p.jsx("svg",{viewBox:"0 0 100 100",width:"32",height:"32",children:p.jsx("polygon",{points:"50,10 90,90 10,90",fill:"#E31837"})})}),p.jsxs("div",{className:"chat-info",children:[p.jsx("span",{className:"chat-name",children:i.name}),p.jsx("span",{className:"chat-status",style:{color:i.color},children:i.status})]}),p.jsx("button",{className:"chat-menu",children:p.jsx($d,{size:20})})]}),p.jsx("div",{className:"messages-container",children:e.length===0?p.jsxs("div",{className:"empty-state",children:[p.jsx(Vd,{size:32}),p.jsx("p",{children:"Waiting for AI outreach..."}),p.jsx("span",{children:"Select a flight & channel to start"})]}):p.jsxs("div",{className:"messages",children:[e.map((o,u)=>p.jsxs("div",{className:`message ${o.type}`,children:[o.type==="ai"&&p.jsx("div",{className:"msg-avatar",style:{background:n==="whatsapp"?"#25D36615":n==="call"?"#E3183715":"#3B82F615"},children:p.jsx("div",{style:{color:n==="whatsapp"?"#25D366":n==="call"?"#E31837":"#3B82F6"},children:p.jsx(Tr,{channel:n,size:16})})}),p.jsx("div",{className:"msg-content",children:o.type==="system"?p.jsx("div",{className:"system-msg",children:o.text}):p.jsxs(p.Fragment,{children:[p.jsx("div",{className:`msg-bubble ${n}`,children:o.text.split(`
`).map((s,c)=>p.jsxs("span",{children:[s,p.jsx("br",{})]},c))}),p.jsx("span",{className:"msg-time",children:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})})]},u)),t&&p.jsxs("div",{className:"message ai",children:[p.jsx("div",{className:"msg-avatar",style:{background:n==="whatsapp"?"#25D36615":n==="call"?"#E3183715":"#3B82F615"},children:p.jsx("div",{style:{color:n==="whatsapp"?"#25D366":n==="call"?"#E31837":"#3B82F6"},children:p.jsx(Tr,{channel:n,size:16})})}),p.jsx("div",{className:"msg-content",children:p.jsxs("div",{className:"typing-indicator",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]})})]}),p.jsx("div",{ref:r})]})}),p.jsxs("div",{className:"input-bar",style:{borderTopColor:n?i.color+"20":"#f0f0f0"},children:[p.jsx("button",{className:"input-btn",children:p.jsx(Wd,{size:20})}),p.jsx("input",{type:"text",placeholder:n==="call"?"Voice call in progress...":"Message",disabled:!0}),p.jsx("button",{className:"input-btn",children:n==="call"?p.jsx(lc,{size:20}):p.jsx(Ud,{size:20})})]})]}),p.jsxs("div",{className:"phone-label",children:[n?`${n.charAt(0).toUpperCase()+n.slice(1)} • `:"","Passenger View"]})]})};function ep(){const[e,t]=ue.useState(!1),[n,r]=ue.useState([]),[l,i]=ue.useState(!1),[o,u]=ue.useState(null),[s,c]=ue.useState({active:847,delayed:23,aiHandling:0,resolved:1842}),y=(m,g,w)=>{t(!0),u(g),c(a=>({...a,aiHandling:m.passengers}));const k=Zd[g](m,m.passenger,w);let I=0;const f=()=>{if(I>=k.length){c(d=>({...d,aiHandling:0,resolved:d.resolved+m.passengers}));return}const a=k[I];a.type==="ai"?(i(!0),setTimeout(()=>{i(!1),r(d=>[...d,{type:a.type,text:a.text}]),I++,setTimeout(f,a.delay)},1e3)):(r(d=>[...d,{type:a.type,text:a.text}]),I++,setTimeout(f,a.delay))};setTimeout(f,600)},h=()=>{t(!1),r([]),i(!1),u(null),c(m=>({...m,aiHandling:0}))};return p.jsxs("div",{className:"app",children:[p.jsxs("header",{className:"app-header",children:[p.jsxs("div",{className:"header-brand",children:[p.jsx("div",{className:"brand-icon",children:p.jsx(ic,{size:20})}),p.jsx("span",{children:"Callers AI"}),p.jsx("span",{className:"header-divider",children:"×"}),p.jsx("span",{children:"One Brain Demo"})]}),p.jsx("button",{className:"reset-btn",onClick:h,children:"Reset Demo"})]}),p.jsxs("main",{className:"split-view",children:[p.jsx(qd,{onTriggerAI:y,aiTriggered:e,stats:s,selectedChannel:o}),p.jsx(bd,{messages:n,isTyping:l,channel:o})]}),p.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .app {
          min-height: 100vh;
          background: #F5F3EF;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* ===== HEADER ===== */
        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          background: #fff;
          border-bottom: 1px solid #E8E4DD;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .brand-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E31837, #c41230);
          border-radius: 8px;
          color: #fff;
        }

        .header-divider {
          color: #ccc;
          font-weight: 400;
        }

        .reset-btn {
          padding: 8px 16px;
          background: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .reset-btn:hover {
          background: #eee;
        }

        /* ===== SPLIT VIEW ===== */
        .split-view {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 32px;
          padding: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ===== CONSOLE ===== */
        .console {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #E8E4DD;
          overflow: hidden;
        }

        .console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: #1a1a1a;
          color: #fff;
        }

        .console-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
        }

        .console-time {
          font-size: 13px;
          color: #888;
          font-variant-numeric: tabular-nums;
        }

        /* Stats */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #E8E4DD;
          border-bottom: 1px solid #E8E4DD;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          background: #FAFAF8;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .stat-label {
          font-size: 11px;
          color: #888;
          margin-top: 4px;
        }

        /* Flight Section */
        .flight-section {
          padding: 20px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-size: 14px;
          font-weight: 600;
        }

        .live-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 700;
          color: #22c55e;
          padding: 4px 8px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 4px;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .flight-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .flight-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #FAFAF8;
          border: 1px solid #E8E4DD;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .flight-card:hover {
          border-color: #ccc;
        }

        .flight-card.selected {
          border-color: #E31837;
          background: rgba(227, 24, 55, 0.03);
        }

        .flight-main {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .flight-id {
          font-weight: 700;
          font-size: 14px;
          color: #1a1a1a;
        }

        .flight-route {
          font-size: 13px;
          color: #666;
        }

        .flight-time {
          font-size: 13px;
          color: #888;
          font-variant-numeric: tabular-nums;
        }

        .flight-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.on-time {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .status-badge.delayed {
          background: rgba(234, 179, 8, 0.1);
          color: #ca8a04;
        }

        .status-badge.cancelled {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .passenger-count {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #888;
        }

        /* Action Panel */
        .action-panel {
          margin-top: 20px;
          padding: 20px;
          background: #FAFAF8;
          border-top: 1px solid #E8E4DD;
        }

        .action-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .action-header h3 {
          font-size: 14px;
          font-weight: 600;
        }

        .passenger-total {
          font-size: 12px;
          color: #888;
        }

        .trigger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #E31837, #c41230);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .trigger-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(227, 24, 55, 0.3);
        }

        .trigger-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .action-note {
          margin-top: 12px;
          font-size: 12px;
          color: #888;
          text-align: center;
        }

        .ai-active {
          text-align: center;
        }

        .ai-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #22c55e;
          margin-bottom: 8px;
          text-transform: capitalize;
        }

        .pulse-ring {
          width: 12px;
          height: 12px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-ring 1.5s infinite;
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
          100% { box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
        }

        .ai-progress {
          font-size: 12px;
          color: #888;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: #fff;
          border-radius: 16px;
          width: 90%;
          max-width: 480px;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid #E8E4DD;
        }

        .modal-header h3 {
          font-size: 16px;
          font-weight: 600;
        }

        .modal-header p {
          font-size: 13px;
          color: #888;
          margin-top: 4px;
        }

        .close-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
        }

        .close-btn:hover {
          color: #1a1a1a;
        }

        .channel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 20px;
        }

        .channel-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 12px;
          background: #FAFAF8;
          border: 2px solid #E8E4DD;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .channel-btn:hover {
          border-color: var(--channel-color);
          background: #fff;
          transform: translateY(-2px);
        }

        .channel-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #fff;
          margin-bottom: 12px;
        }

        .channel-name {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .channel-desc {
          font-size: 11px;
          color: #888;
          text-align: center;
        }

        .custom-message {
          padding: 0 20px 20px;
        }

        .custom-message label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #666;
          margin-bottom: 8px;
        }

        .custom-message textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #E8E4DD;
          border-radius: 8px;
          font-family: inherit;
          font-size: 13px;
          resize: none;
          outline: none;
        }

        .custom-message textarea:focus {
          border-color: #E31837;
        }

        .custom-message textarea::placeholder {
          color: #aaa;
        }

        .modal-footer {
          padding: 16px 20px;
          background: #FAFAF8;
          border-top: 1px solid #E8E4DD;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          color: #888;
        }

        /* ===== PHONE VIEW ===== */
        .phone-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .phone {
          width: 100%;
          max-width: 375px;
          height: 700px;
          background: #fff;
          border-radius: 32px;
          border: 8px solid #1a1a1a;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .phone-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: #fff;
        }

        .phone-time {
          font-size: 14px;
          font-weight: 600;
        }

        .phone-icons {
          display: flex;
          gap: 4px;
          color: #1a1a1a;
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 2px solid #f0f0f0;
          transition: border-color 0.3s;
        }

        .chat-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 50%;
          transition: background 0.3s;
        }

        .chat-info {
          flex: 1;
        }

        .chat-name {
          display: block;
          font-weight: 600;
          font-size: 15px;
        }

        .chat-status {
          font-size: 12px;
          color: #22c55e;
          transition: color 0.3s;
        }

        .chat-menu {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
        }

        /* Messages */
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #F5F3EF;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #888;
          text-align: center;
        }

        .empty-state p {
          font-size: 14px;
          margin-top: 12px;
        }

        .empty-state span {
          font-size: 12px;
          margin-top: 4px;
          color: #aaa;
        }

        .messages {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message {
          display: flex;
          gap: 8px;
          max-width: 85%;
        }

        .message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message.system {
          align-self: center;
          max-width: 100%;
        }

        .msg-avatar {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .msg-content {
          display: flex;
          flex-direction: column;
        }

        .msg-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.4;
        }

        .message.ai .msg-bubble {
          background: #fff;
          color: #1a1a1a;
          border-bottom-left-radius: 4px;
        }

        .message.ai .msg-bubble.whatsapp {
          border-left: 3px solid #25D366;
        }

        .message.ai .msg-bubble.call {
          border-left: 3px solid #E31837;
          font-style: italic;
        }

        .message.ai .msg-bubble.sms {
          border-left: 3px solid #3B82F6;
        }

        .message.user .msg-bubble {
          background: #E31837;
          color: #fff;
          border-bottom-right-radius: 4px;
        }

        .msg-time {
          font-size: 10px;
          color: #888;
          margin-top: 4px;
          padding: 0 4px;
        }

        .message.user .msg-time {
          text-align: right;
        }

        .system-msg {
          font-size: 12px;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 14px;
          background: #fff;
          border-radius: 16px;
          border-bottom-left-radius: 4px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #ccc;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        /* Input Bar */
        .input-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: #fff;
          border-top: 2px solid #f0f0f0;
          transition: border-color 0.3s;
        }

        .input-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
        }

        .input-bar input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          font-size: 14px;
          outline: none;
        }

        .phone-label {
          margin-top: 16px;
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .split-view {
            grid-template-columns: 1fr;
          }

          .phone-container {
            order: -1;
          }

          .channel-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}Kl.createRoot(document.getElementById("root")).render(p.jsx(ep,{}));
