function j(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t&&typeof t=="object"&&typeof t.then=="function"}function D(t){return t()}function z(){return Object.create(null)}function b(t){t.forEach(D)}function K(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e}function Q(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t,e,n){t.$$.on_destroy.push(R(e,n))}function yt(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function gt(t,e,n,i,r,o){if(r){const s=L(e,n,i,o);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let k=!1;function U(){k=!0}function V(){k=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:X(1,r,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function Z(t,e){t.appendChild(e)}function tt(t,e){if(k){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){k&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function P(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function $t(){return A(" ")}function kt(){return A("")}function T(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,r=!1){nt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,i){return q(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Et(t,e,n){return it(t,e,n,P)}function rt(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Ct(t){return rt(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let g;function ct(){if(g===void 0){g=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{g=!0}}return g}function Nt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=P("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ct();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=T(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=T(i.contentWindow,"resize",e)}),Z(t,i),()=>{(r||o&&i.contentWindow)&&o(),O(i)}}function st(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let y;function d(t){y=t}function m(){if(!y)throw new Error("Function called outside component initialization");return y}function St(t){m().$$.on_mount.push(t)}function Mt(t){m().$$.after_update.push(t)}function zt(t){m().$$.on_destroy.push(t)}function Tt(){const t=m();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=st(e,n);i.slice().forEach(o=>{o.call(t,r)})}}}function Wt(t,e){m().$$.context.set(t,e)}function Bt(t){return m().$$.context.get(t)}const p=[],W=[],w=[],B=[],I=Promise.resolve();let E=!1;function F(){E||(E=!0,I.then(N))}function Dt(){return F(),I}function C(t){w.push(t)}const v=new Set;let x=0;function N(){const t=y;do{for(;x<p.length;){const e=p[x];x++,d(e),ot(e.$$)}for(d(null),p.length=0,x=0;W.length;)W.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];v.has(n)||(v.add(n),n())}w.length=0}while(p.length);for(;B.length;)B.pop()();E=!1,v.clear(),d(t)}function ot(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const $=new Set;let h;function lt(){h={r:0,c:[],p:h}}function ut(){h.r||b(h.c),h=h.p}function H(t,e){t&&t.i&&($.delete(t),t.i(e))}function at(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Lt(t,e){const n=e.token={};function i(r,o,s,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=l);const u=r&&(e.current=r)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==o&&a&&(lt(),at(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),ut())}):e.block.d(1),u.c(),H(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&N()}if(J(t)){const r=m();if(t.then(o=>{d(r),i(e.then,1,e.value,o),d(null)},o=>{if(d(r),i(e.catch,2,e.error,o),d(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ot(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Pt(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function qt(t){return typeof t=="object"&&t!==null?t:{}}function It(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function ft(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||C(()=>{const c=o.map(D).filter(K);s?s.push(...c):b(c),t.$$.on_mount=[]}),l.forEach(C)}function dt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(p.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,i,r,o,s,l=[-1]){const c=y;d(t);const u=t.$$={fragment:null,ctx:null,props:o,update:j,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...S)=>{const M=S.length?S[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&_t(t,a)),_}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){U();const a=et(e.target);u.fragment&&u.fragment.l(a),a.forEach(O)}else u.fragment&&u.fragment.c();e.intro&&H(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),V(),N()}d(c)}class Gt{$destroy(){dt(this,1),this.$destroy=j}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{qt as A,dt as B,G as C,Dt as D,j as E,yt as F,gt as G,xt as H,bt as I,tt as J,pt as K,Tt as L,zt as M,mt as N,Lt as O,Ot as P,Bt as Q,C as R,Gt as S,Nt as T,T as U,b as V,W,et as a,vt as b,Et as c,O as d,P as e,At as f,wt as g,rt as h,Ht as i,jt as j,$t as k,kt as l,Ct as m,lt as n,at as o,ut as p,H as q,Wt as r,ht as s,A as t,Mt as u,St as v,It as w,Ft as x,ft as y,Pt as z};