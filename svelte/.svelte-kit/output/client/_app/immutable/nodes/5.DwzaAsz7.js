import{a as ue,e as T}from"../chunks/client.DNOLrnPx.js";import{H as de}from"../chunks/control.CYgJF_JY.js";import{s as G,u as S,i as E,d as m,e as q,b as j,l as A,O as me,f as I,o as D,n as U,a as P,h as _e,c as M,t as L,q as z,r as F,P as ne,g as pe}from"../chunks/scheduler.BlFFreo2.js";import{S as oe,i as ce,t as _,b as y,c as H,a as W,m as N,d as R,e as C,g as O}from"../chunks/index.CgkC8aef.js";import{P as he,c as ge}from"../chunks/utils.Ct7lYG3D.js";import{I as fe,f as X}from"../chunks/format.BxKBOmgH.js";import{W as ve}from"../chunks/WipGridItem.BqpnS-QL.js";function be(s,e){throw new de(s,e)}new TextEncoder;async function $e({params:s}){const{slug:e=""}=s||{},l=await ue.fetch(`
      *[_type == "wip" && slug.current == $slug][0] {
        title,
        slug,
        date,
        media[]{
          _type,
          alt,
          asset->{
            ...,
            metadata
          },
          file{
            asset->{
              ...,
              metadata
            }
          },
          vimeo_url,
          preview_video{
            asset->{
              ...,
              metadata
            }
          },
          poster{
            asset->{
              ...,
              metadata
            },
            alt
          }
        },
        image{
          asset->{
            ...,
            metadata
          }
        },
        alt,
        medium,
        notes,
        related[]->{
          title,
          slug,
          date,
          media[]{
            _type,
            alt,
            asset->{
              ...,
              metadata
            },
            file{
              asset->{
                ...,
                metadata
              }
            },
            vimeo_url,
            preview_video{
              asset->{
                ...,
                metadata
              }
            },
            poster{
              asset->{
                ...,
                metadata
              },
              alt
            }
          },
          medium
        },
        "previousItem": *[_type == "wip" && media != null && (date > ^.date || (date == ^.date && _createdAt > ^._createdAt))] | order(date asc, _createdAt asc)[0] {
          slug
        },
        "nextItem": *[_type == "wip" && media != null && (date < ^.date || (date == ^.date && _createdAt < ^._createdAt))] | order(date desc, _createdAt desc)[0] {
          slug
        },
        "totalCount": count(*[_type == "wip" && media != null]),
        "currentIndex": count(*[_type == "wip" && media != null && (date > ^.date || (date == ^.date && _createdAt > ^._createdAt))] | order(date asc, _createdAt asc)) + 1,
        "firstItem": *[_type == "wip" && media != null] | order(date desc, _createdAt desc)[0] {
          slug
        },
        "lastItem": *[_type == "wip" && media != null] | order(date asc, _createdAt asc)[0] {
          slug
        }
      }
    `,{slug:e});return l||be(404,{message:"Not found"}),{wipDetail:l}}const He=Object.freeze(Object.defineProperty({__proto__:null,load:$e},Symbol.toStringTag,{value:"Module"}));function ke(s){let e,l;return e=new fe({props:{image:s[2],alt:s[2].alt,classes:"media-contain "+s[0]}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){N(e,t,a),l=!0},p(t,a){const r={};a&1&&(r.classes="media-contain "+t[0]),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function we(s){let e,l,t;return{c(){e=q("video"),l=q("source"),this.h()},l(a){e=j(a,"VIDEO",{class:!0,poster:!0,preload:!0});var r=A(e);l=j(r,"SOURCE",{src:!0,type:!0}),r.forEach(m),this.h()},h(){me(l.src,t=s[1].asset.url)||I(l,"src",t),I(l,"type","video/mp4"),I(e,"class",s[0]),I(e,"poster",s[2].asset.url),e.loop=!0,e.playsInline=!0,I(e,"preload","metadata"),e.controls=!0},m(a,r){E(a,e,r),D(e,l)},p(a,r){r&1&&I(e,"class",a[0])},i:U,o:U,d(a){a&&m(e)}}}function ye(s){let e,l,t,a;const r=[we,ke],i=[];function n(c,o){return c[1]?0:1}return e=n(s),l=i[e]=r[e](s),{c(){l.c(),t=S()},l(c){l.l(c),t=S()},m(c,o){i[e].m(c,o),E(c,t,o),a=!0},p(c,[o]){l.p(c,o)},i(c){a||(_(l),a=!0)},o(c){y(l),a=!1},d(c){c&&m(t),i[e].d(c)}}}function Ie(s,e,l){let{mediaItem:t,classes:a}=e;const r=t.preview_video,i=t.poster;return s.$$set=n=>{"mediaItem"in n&&l(3,t=n.mediaItem),"classes"in n&&l(0,a=n.classes)},[a,r,i,t]}class Ee extends oe{constructor(e){super(),ce(this,e,Ie,ye,G,{mediaItem:3,classes:0})}}function Y(s,e,l){const t=s.slice();return t[2]=e[l],t}function Z(s,e,l){const t=s.slice();return t[5]=e[l],t}function x(s){let e,l=X(new Date(s[0].date),"MM.dd.yy")+"",t;return{c(){e=q("p"),t=L(l),this.h()},l(a){e=j(a,"P",{class:!0});var r=A(e);t=z(r,l),r.forEach(m),this.h()},h(){I(e,"class","text-grey-5")},m(a,r){E(a,e,r),D(e,t)},p(a,r){r&1&&l!==(l=X(new Date(a[0].date),"MM.dd.yy")+"")&&F(t,l)},d(a){a&&m(e)}}}function ee(s){let e,l=s[0].medium+"",t;return{c(){e=q("p"),t=L(l),this.h()},l(a){e=j(a,"P",{class:!0});var r=A(e);t=z(r,l),r.forEach(m),this.h()},h(){I(e,"class","text-grey-5")},m(a,r){E(a,e,r),D(e,t)},p(a,r){r&1&&l!==(l=a[0].medium+"")&&F(t,l)},d(a){a&&m(e)}}}function te(s){let e,l,t;return l=new he({props:{value:s[0].notes,components:ge}}),{c(){e=q("div"),H(l.$$.fragment),this.h()},l(a){e=j(a,"DIV",{class:!0});var r=A(e);W(l.$$.fragment,r),r.forEach(m),this.h()},h(){I(e,"class","text-center svelte-1rj5qm6")},m(a,r){E(a,e,r),N(l,e,null),t=!0},p(a,r){const i={};r&1&&(i.value=a[0].notes),l.$set(i)},i(a){t||(_(l.$$.fragment,a),t=!0)},o(a){y(l.$$.fragment,a),t=!1},d(a){a&&m(e),R(l)}}}function le(s){let e,l,t=T(s[0].media),a=[];for(let i=0;i<t.length;i+=1)a[i]=ae(Z(s,t,i));const r=i=>y(a[i],1,1,()=>{a[i]=null});return{c(){for(let i=0;i<a.length;i+=1)a[i].c();e=S()},l(i){for(let n=0;n<a.length;n+=1)a[n].l(i);e=S()},m(i,n){for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(i,n);E(i,e,n),l=!0},p(i,n){if(n&1){t=T(i[0].media);let c;for(c=0;c<t.length;c+=1){const o=Z(i,t,c);a[c]?(a[c].p(o,n),_(a[c],1)):(a[c]=ae(o),a[c].c(),_(a[c],1),a[c].m(e.parentNode,e))}for(O(),c=t.length;c<a.length;c+=1)r(c);C()}},i(i){if(!l){for(let n=0;n<t.length;n+=1)_(a[n]);l=!0}},o(i){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)y(a[n]);l=!1},d(i){i&&m(e),ne(a,i)}}}function qe(s){let e,l;return e=new Ee({props:{mediaItem:s[5],classes:"media-contain"}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){N(e,t,a),l=!0},p(t,a){const r={};a&1&&(r.mediaItem=t[5]),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function je(s){let e,l;return e=new fe({props:{image:s[5],alt:s[5].alt,classes:"media-contain"}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){N(e,t,a),l=!0},p(t,a){const r={};a&1&&(r.image=t[5]),a&1&&(r.alt=t[5].alt),e.$set(r)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function ae(s){let e,l,t,a,r;const i=[je,qe],n=[];function c(o,v){return o[5]._type==="Image"&&o[5].asset?0:o[5]._type==="Video"&&o[5].file?1:-1}return~(l=c(s))&&(t=n[l]=i[l](s)),{c(){e=q("figure"),t&&t.c(),a=P(),this.h()},l(o){e=j(o,"FIGURE",{class:!0});var v=A(e);t&&t.l(v),a=M(v),v.forEach(m),this.h()},h(){I(e,"class","image-container relative svelte-1rj5qm6")},m(o,v){E(o,e,v),~l&&n[l].m(e,null),D(e,a),r=!0},p(o,v){let u=l;l=c(o),l===u?~l&&n[l].p(o,v):(t&&(O(),y(n[u],1,1,()=>{n[u]=null}),C()),~l?(t=n[l],t?t.p(o,v):(t=n[l]=i[l](o),t.c()),_(t,1),t.m(e,a)):t=null)},i(o){r||(_(t),r=!0)},o(o){y(t),r=!1},d(o){o&&m(e),~l&&n[l].d()}}}function re(s){let e,l,t,a="Related",r,i,n,c=T(s[0].related),o=[];for(let u=0;u<c.length;u+=1)o[u]=ie(Y(s,c,u));const v=u=>y(o[u],1,1,()=>{o[u]=null});return{c(){e=q("div"),l=q("div"),t=q("h2"),t.textContent=a,r=P(),i=q("ul");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=j(u,"DIV",{class:!0});var p=A(e);l=j(p,"DIV",{class:!0});var d=A(l);t=j(d,"H2",{"data-svelte-h":!0}),pe(t)!=="svelte-1nm7e2v"&&(t.textContent=a),r=M(d),i=j(d,"UL",{class:!0});var h=A(i);for(let b=0;b<o.length;b+=1)o[b].l(h);h.forEach(m),d.forEach(m),p.forEach(m),this.h()},h(){I(i,"class","related-items mt-8 svelte-1rj5qm6"),I(l,"class","related-inner text-center svelte-1rj5qm6"),I(e,"class","related enter-in-1 lg:px-32 col-span-4 lg:col-span-1 flex flex-col py-20 svelte-1rj5qm6")},m(u,p){E(u,e,p),D(e,l),D(l,t),D(l,r),D(l,i);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(i,null);n=!0},p(u,p){if(p&1){c=T(u[0].related);let d;for(d=0;d<c.length;d+=1){const h=Y(u,c,d);o[d]?(o[d].p(h,p),_(o[d],1)):(o[d]=ie(h),o[d].c(),_(o[d],1),o[d].m(i,null))}for(O(),d=c.length;d<o.length;d+=1)v(d);C()}},i(u){if(!n){for(let p=0;p<c.length;p+=1)_(o[p]);n=!0}},o(u){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)y(o[p]);n=!1},d(u){u&&m(e),ne(o,u)}}}function ie(s){let e,l,t,a;return l=new ve({props:{item:s[2]}}),{c(){e=q("li"),H(l.$$.fragment),t=P(),this.h()},l(r){e=j(r,"LI",{class:!0});var i=A(e);W(l.$$.fragment,i),t=M(i),i.forEach(m),this.h()},h(){I(e,"class","w-[200px] svelte-1rj5qm6")},m(r,i){E(r,e,i),N(l,e,null),D(e,t),a=!0},p(r,i){const n={};i&1&&(n.item=r[2]),l.$set(n)},i(r){a||(_(l.$$.fragment,r),a=!0)},o(r){y(l.$$.fragment,r),a=!1},d(r){r&&m(e),R(l)}}}function se(s){var J,K;let e,l,t,a=s[0].title+"",r,i,n,c,o,v,u,p,d,h=s[0].date&&x(s),b=s[0].medium&&ee(s),$=s[0].notes&&te(s),k=s[0].media.length>0&&le(s),w=((K=(J=s[0])==null?void 0:J.related)==null?void 0:K.length)>0&&re(s);return{c(){e=q("div"),l=q("div"),t=q("h1"),r=L(a),i=P(),h&&h.c(),n=P(),b&&b.c(),c=P(),$&&$.c(),o=P(),v=q("div"),k&&k.c(),u=P(),w&&w.c(),p=S(),this.h()},l(f){e=j(f,"DIV",{class:!0});var g=A(e);l=j(g,"DIV",{class:!0});var V=A(l);t=j(V,"H1",{class:!0});var B=A(t);r=z(B,a),B.forEach(m),i=M(V),h&&h.l(V),n=M(V),b&&b.l(V),V.forEach(m),c=M(g),$&&$.l(g),g.forEach(m),o=M(f),v=j(f,"DIV",{class:!0});var Q=A(v);k&&k.l(Q),Q.forEach(m),u=M(f),w&&w.l(f),p=S(),this.h()},h(){I(t,"class","italic inline"),I(l,"class","breadcrumbs text-center svelte-1rj5qm6"),I(e,"class","info enter-in-1 pt-8 lg:pt-0 lg:px-32 col-span-4 lg:col-span-1 flex flex-col items-center justify-center svelte-1rj5qm6"),I(v,"class","image enter-in-1 col-span-4 lg:col-span-2 mt-12 lg:mt-0 px-8 lg:px-0 lg:py-20 svelte-1rj5qm6")},m(f,g){E(f,e,g),D(e,l),D(l,t),D(t,r),D(l,i),h&&h.m(l,null),D(l,n),b&&b.m(l,null),D(e,c),$&&$.m(e,null),E(f,o,g),E(f,v,g),k&&k.m(v,null),E(f,u,g),w&&w.m(f,g),E(f,p,g),d=!0},p(f,g){var V,B;(!d||g&1)&&a!==(a=f[0].title+"")&&F(r,a),f[0].date?h?h.p(f,g):(h=x(f),h.c(),h.m(l,n)):h&&(h.d(1),h=null),f[0].medium?b?b.p(f,g):(b=ee(f),b.c(),b.m(l,null)):b&&(b.d(1),b=null),f[0].notes?$?($.p(f,g),g&1&&_($,1)):($=te(f),$.c(),_($,1),$.m(e,null)):$&&(O(),y($,1,1,()=>{$=null}),C()),f[0].media.length>0?k?(k.p(f,g),g&1&&_(k,1)):(k=le(f),k.c(),_(k,1),k.m(v,null)):k&&(O(),y(k,1,1,()=>{k=null}),C()),((B=(V=f[0])==null?void 0:V.related)==null?void 0:B.length)>0?w?(w.p(f,g),g&1&&_(w,1)):(w=re(f),w.c(),_(w,1),w.m(p.parentNode,p)):w&&(O(),y(w,1,1,()=>{w=null}),C())},i(f){d||(_($),_(k),_(w),d=!0)},o(f){y($),y(k),y(w),d=!1},d(f){f&&(m(e),m(o),m(v),m(u),m(p)),h&&h.d(),b&&b.d(),$&&$.d(),k&&k.d(),w&&w.d(f)}}}function De(s){let e,l,t,a=s[0],r;document.title=e="Mitchell Barton | WIP | "+s[0].title;let i=se(s);return{c(){l=P(),t=q("div"),i.c(),this.h()},l(n){_e("svelte-mww7q4",document.head).forEach(m),l=M(n),t=j(n,"DIV",{class:!0});var o=A(t);i.l(o),o.forEach(m),this.h()},h(){I(t,"class","wip-container grid grid-cols-4 items-start")},m(n,c){E(n,l,c),E(n,t,c),i.m(t,null),r=!0},p(n,[c]){(!r||c&1)&&e!==(e="Mitchell Barton | WIP | "+n[0].title)&&(document.title=e),c&1&&G(a,a=n[0])?(O(),y(i,1,1,U),C(),i=se(n),i.c(),_(i,1),i.m(t,null)):i.p(n,c)},i(n){r||(_(i),r=!0)},o(n){y(i),r=!1},d(n){n&&(m(l),m(t)),i.d(n)}}}function Ae(s,e,l){let t,{data:a}=e;return s.$$set=r=>{"data"in r&&l(1,a=r.data)},s.$$.update=()=>{s.$$.dirty&2&&l(0,t=a.wipDetail)},[t,a]}class We extends oe{constructor(e){super(),ce(this,e,Ae,De,G,{data:1})}}export{We as component,He as universal};
