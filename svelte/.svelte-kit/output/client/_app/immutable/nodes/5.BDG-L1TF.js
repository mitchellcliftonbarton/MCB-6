import{a as Ae,e as te}from"../chunks/globalStore.B6N8OPHQ.js";import{H as Ne}from"../chunks/control.lsnNd6o-.js";import{s as ae,A as x,i as E,d as _,e as w,b as I,l as D,S as Pe,f as b,o as $,n as le,a as S,h as Ce,c as O,y as Me,t as H,q as U,v as Z,u as Re,T as we,r as oe,m as ce,g as Se}from"../chunks/scheduler.DaRbBg4G.js";import{S as Ie,i as ye,t as v,b as k,c as J,a as K,m as Q,d as X,e as W,g as z}from"../chunks/index.Bh_7T8ID.js";import{P as Ee,c as De}from"../chunks/utils.uOkkGDQR.js";import{I as Ve,f as fe}from"../chunks/format.BS2q7Gxc.js";import{W as Oe}from"../chunks/WipGridItem.BMmQTYcV.js";import{N as Te}from"../chunks/NavOptionsDropdown.C0qjmeWp.js";function Be(r,e){throw new Ne(r,e)}new TextEncoder;async function je({params:r}){const{slug:e=""}=r||{},a=await Ae.fetch(`
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
    `,{slug:e});return a||Be(404,{message:"Not found"}),{wipDetail:a}}const lt=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"}));function qe(r){let e,a;return e=new Ve({props:{image:r[2],alt:r[2].alt,classes:"media-contain "+r[0]}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){Q(e,t,l),a=!0},p(t,l){const s={};l&1&&(s.classes="media-contain "+t[0]),e.$set(s)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){X(e,t)}}}function He(r){let e,a,t;return{c(){e=w("video"),a=w("source"),this.h()},l(l){e=I(l,"VIDEO",{class:!0,poster:!0,preload:!0});var s=D(e);a=I(s,"SOURCE",{src:!0,type:!0}),s.forEach(_),this.h()},h(){Pe(a.src,t=r[1].asset.url)||b(a,"src",t),b(a,"type","video/mp4"),b(e,"class",r[0]),b(e,"poster",r[2].asset.url),e.loop=!0,e.playsInline=!0,b(e,"preload","metadata"),e.controls=!0},m(l,s){E(l,e,s),$(e,a)},p(l,s){s&1&&b(e,"class",l[0])},i:le,o:le,d(l){l&&_(e)}}}function Ue(r){let e,a,t,l;const s=[He,qe],i=[];function n(o,f){return o[1]?0:1}return e=n(r),a=i[e]=s[e](r),{c(){a.c(),t=x()},l(o){a.l(o),t=x()},m(o,f){i[e].m(o,f),E(o,t,f),l=!0},p(o,[f]){a.p(o,f)},i(o){l||(v(a),l=!0)},o(o){k(a),l=!1},d(o){o&&_(t),i[e].d(o)}}}function We(r,e,a){let{mediaItem:t,classes:l}=e;const s=t.preview_video,i=t.poster;return r.$$set=n=>{"mediaItem"in n&&a(3,t=n.mediaItem),"classes"in n&&a(0,l=n.classes)},[l,s,i,t]}class ze extends Ie{constructor(e){super(),ye(this,e,We,Ue,ae,{mediaItem:3,classes:0})}}function ue(r,e,a){const t=r.slice();return t[4]=e[a],t}function de(r,e,a){const t=r.slice();return t[7]=e[a],t}function me(r){let e,a=fe(new Date(r[1].date),"MM.dd.yy")+"",t;return{c(){e=w("p"),t=H(a),this.h()},l(l){e=I(l,"P",{class:!0});var s=D(e);t=U(s,a),s.forEach(_),this.h()},h(){b(e,"class","text-grey-5")},m(l,s){E(l,e,s),$(e,t)},p(l,s){s&2&&a!==(a=fe(new Date(l[1].date),"MM.dd.yy")+"")&&Z(t,a)},d(l){l&&_(e)}}}function _e(r){let e,a=r[1].medium+"",t;return{c(){e=w("p"),t=H(a),this.h()},l(l){e=I(l,"P",{class:!0});var s=D(e);t=U(s,a),s.forEach(_),this.h()},h(){b(e,"class","text-grey-5")},m(l,s){E(l,e,s),$(e,t)},p(l,s){s&2&&a!==(a=l[1].medium+"")&&Z(t,a)},d(l){l&&_(e)}}}function pe(r){let e,a,t,l,s,i,n,o=r[0]?"-":"+",f,P,d,c,u;a=new Ee({props:{value:r[1].notes,components:De}});let p=r[0]&&he(r);return{c(){e=w("div"),J(a.$$.fragment),t=S(),l=w("div"),s=w("button"),i=H("Notes "),n=w("span"),f=H(o),P=S(),p&&p.c(),this.h()},l(h){e=I(h,"DIV",{class:!0});var y=D(e);K(a.$$.fragment,y),y.forEach(_),t=O(h),l=I(h,"DIV",{class:!0});var C=D(l);s=I(C,"BUTTON",{});var B=D(s);i=U(B,"Notes "),n=I(B,"SPAN",{class:!0});var j=D(n);f=U(j,o),j.forEach(_),B.forEach(_),P=O(C),p&&p.l(C),C.forEach(_),this.h()},h(){b(e,"class","text-center hidden lg:block svelte-35slvr"),b(n,"class","inline-block w-4"),b(l,"class","lg:hidden text-center svelte-35slvr")},m(h,y){E(h,e,y),Q(a,e,null),E(h,t,y),E(h,l,y),$(l,s),$(s,i),$(s,n),$(n,f),$(l,P),p&&p.m(l,null),d=!0,c||(u=Re(s,"click",r[3]),c=!0)},p(h,y){const C={};y&2&&(C.value=h[1].notes),a.$set(C),(!d||y&1)&&o!==(o=h[0]?"-":"+")&&Z(f,o),h[0]?p?(p.p(h,y),y&1&&v(p,1)):(p=he(h),p.c(),v(p,1),p.m(l,null)):p&&(z(),k(p,1,1,()=>{p=null}),W())},i(h){d||(v(a.$$.fragment,h),v(p),d=!0)},o(h){k(a.$$.fragment,h),k(p),d=!1},d(h){h&&(_(e),_(t),_(l)),X(a),p&&p.d(),c=!1,u()}}}function he(r){let e,a,t;return a=new Ee({props:{value:r[1].notes,components:De}}),{c(){e=w("div"),J(a.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0});var s=D(e);K(a.$$.fragment,s),s.forEach(_),this.h()},h(){b(e,"class","mt-4")},m(l,s){E(l,e,s),Q(a,e,null),t=!0},p(l,s){const i={};s&2&&(i.value=l[1].notes),a.$set(i)},i(l){t||(v(a.$$.fragment,l),t=!0)},o(l){k(a.$$.fragment,l),t=!1},d(l){l&&_(e),X(a)}}}function ve(r){let e,a,t=te(r[1].media),l=[];for(let i=0;i<t.length;i+=1)l[i]=ge(de(r,t,i));const s=i=>k(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=x()},l(i){for(let n=0;n<l.length;n+=1)l[n].l(i);e=x()},m(i,n){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(i,n);E(i,e,n),a=!0},p(i,n){if(n&2){t=te(i[1].media);let o;for(o=0;o<t.length;o+=1){const f=de(i,t,o);l[o]?(l[o].p(f,n),v(l[o],1)):(l[o]=ge(f),l[o].c(),v(l[o],1),l[o].m(e.parentNode,e))}for(z(),o=t.length;o<l.length;o+=1)s(o);W()}},i(i){if(!a){for(let n=0;n<t.length;n+=1)v(l[n]);a=!0}},o(i){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)k(l[n]);a=!1},d(i){i&&_(e),we(l,i)}}}function Ge(r){let e,a;return e=new ze({props:{mediaItem:r[7],classes:"media-contain"}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){Q(e,t,l),a=!0},p(t,l){const s={};l&2&&(s.mediaItem=t[7]),e.$set(s)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){X(e,t)}}}function Le(r){let e,a;return e=new Ve({props:{image:r[7],alt:r[7].alt,classes:"media-cover"}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){Q(e,t,l),a=!0},p(t,l){const s={};l&2&&(s.image=t[7]),l&2&&(s.alt=t[7].alt),e.$set(s)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){k(e.$$.fragment,t),a=!1},d(t){X(e,t)}}}function ge(r){let e,a,t,l,s,i,n,o;const f=[Le,Ge],P=[];function d(c,u){return c[7]._type==="Image"&&c[7].asset?0:c[7]._type==="Video"&&c[7].file?1:-1}return~(t=d(r))&&(l=P[t]=f[t](r)),{c(){e=w("div"),a=w("figure"),l&&l.c(),i=S(),this.h()},l(c){e=I(c,"DIV",{class:!0,style:!0});var u=D(e);a=I(u,"FIGURE",{class:!0});var p=D(a);l&&l.l(p),p.forEach(_),i=O(u),u.forEach(_),this.h()},h(){var c,u,p,h,y,C;b(a,"class",s=(p=(u=(c=r[7].asset)==null?void 0:c.metadata)==null?void 0:u.dimensions)!=null&&p.aspectRatio?"fill-parent":""),b(e,"class",n=oe(`image-container relative ${r[7]._type==="Image"&&r[7].asset?"is-image":"is-video"}`)+" svelte-35slvr"),ce(e,"aspect-ratio",((C=(y=(h=r[7].asset)==null?void 0:h.metadata)==null?void 0:y.dimensions)==null?void 0:C.aspectRatio)??"auto")},m(c,u){E(c,e,u),$(e,a),~t&&P[t].m(a,null),$(e,i),o=!0},p(c,u){var h,y,C,B,j,T;let p=t;t=d(c),t===p?~t&&P[t].p(c,u):(l&&(z(),k(P[p],1,1,()=>{P[p]=null}),W()),~t?(l=P[t],l?l.p(c,u):(l=P[t]=f[t](c),l.c()),v(l,1),l.m(a,null)):l=null),(!o||u&2&&s!==(s=(C=(y=(h=c[7].asset)==null?void 0:h.metadata)==null?void 0:y.dimensions)!=null&&C.aspectRatio?"fill-parent":""))&&b(a,"class",s),(!o||u&2&&n!==(n=oe(`image-container relative ${c[7]._type==="Image"&&c[7].asset?"is-image":"is-video"}`)+" svelte-35slvr"))&&b(e,"class",n),(!o||u&2)&&ce(e,"aspect-ratio",((T=(j=(B=c[7].asset)==null?void 0:B.metadata)==null?void 0:j.dimensions)==null?void 0:T.aspectRatio)??"auto")},i(c){o||(v(l),o=!0)},o(c){k(l),o=!1},d(c){c&&_(e),~t&&P[t].d()}}}function $e(r){let e,a,t,l="Related",s,i,n,o=te(r[1].related),f=[];for(let d=0;d<o.length;d+=1)f[d]=be(ue(r,o,d));const P=d=>k(f[d],1,1,()=>{f[d]=null});return{c(){e=w("div"),a=w("div"),t=w("h2"),t.textContent=l,s=S(),i=w("ul");for(let d=0;d<f.length;d+=1)f[d].c();this.h()},l(d){e=I(d,"DIV",{class:!0});var c=D(e);a=I(c,"DIV",{class:!0});var u=D(a);t=I(u,"H2",{"data-svelte-h":!0}),Se(t)!=="svelte-1nm7e2v"&&(t.textContent=l),s=O(u),i=I(u,"UL",{class:!0});var p=D(i);for(let h=0;h<f.length;h+=1)f[h].l(p);p.forEach(_),u.forEach(_),c.forEach(_),this.h()},h(){b(i,"class","related-items mt-8 svelte-35slvr"),b(a,"class","related-inner text-center svelte-35slvr"),b(e,"class","related enter-in-1 lg:px-32 col-span-4 lg:col-span-1 flex flex-col py-20 svelte-35slvr")},m(d,c){E(d,e,c),$(e,a),$(a,t),$(a,s),$(a,i);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(i,null);n=!0},p(d,c){if(c&2){o=te(d[1].related);let u;for(u=0;u<o.length;u+=1){const p=ue(d,o,u);f[u]?(f[u].p(p,c),v(f[u],1)):(f[u]=be(p),f[u].c(),v(f[u],1),f[u].m(i,null))}for(z(),u=o.length;u<f.length;u+=1)P(u);W()}},i(d){if(!n){for(let c=0;c<o.length;c+=1)v(f[c]);n=!0}},o(d){f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)k(f[c]);n=!1},d(d){d&&_(e),we(f,d)}}}function be(r){let e,a,t,l;return a=new Oe({props:{item:r[4]}}),{c(){e=w("li"),J(a.$$.fragment),t=S(),this.h()},l(s){e=I(s,"LI",{class:!0});var i=D(e);K(a.$$.fragment,i),t=O(i),i.forEach(_),this.h()},h(){b(e,"class","w-[200px] svelte-35slvr")},m(s,i){E(s,e,i),Q(a,e,null),$(e,t),l=!0},p(s,i){const n={};i&2&&(n.item=s[4]),a.$set(n)},i(s){l||(v(a.$$.fragment,s),l=!0)},o(s){k(a.$$.fragment,s),l=!1},d(s){s&&_(e),X(a)}}}function ke(r){var se,ie;let e,a,t=r[1].currentIndex+"",l,s,i=r[1].totalCount+"",n,o,f,P,d,c,u,p=r[1].title+"",h,y,C,B,j,T,ee,Y,G;f=new Te({props:{wipDetail:r[1]}});let M=r[1].date&&me(r),R=r[1].medium&&_e(r),V=r[1].notes&&pe(r),A=r[1].media.length>0&&ve(r),N=((ie=(se=r[1])==null?void 0:se.related)==null?void 0:ie.length)>0&&$e(r);return{c(){e=w("div"),a=w("p"),l=H(t),s=H(" of "),n=H(i),o=S(),J(f.$$.fragment),P=S(),d=w("div"),c=w("div"),u=w("h1"),h=H(p),y=S(),M&&M.c(),C=S(),R&&R.c(),B=S(),V&&V.c(),j=S(),T=w("div"),A&&A.c(),ee=S(),N&&N.c(),Y=x(),this.h()},l(m){e=I(m,"DIV",{class:!0});var g=D(e);a=I(g,"P",{});var L=D(a);l=U(L,t),s=U(L," of "),n=U(L,i),L.forEach(_),o=O(g),K(f.$$.fragment,g),g.forEach(_),P=O(m),d=I(m,"DIV",{class:!0});var F=D(d);c=I(F,"DIV",{class:!0});var q=D(c);u=I(q,"H1",{class:!0});var re=D(u);h=U(re,p),re.forEach(_),y=O(q),M&&M.l(q),C=O(q),R&&R.l(q),q.forEach(_),B=O(F),V&&V.l(F),F.forEach(_),j=O(m),T=I(m,"DIV",{class:!0});var ne=D(T);A&&A.l(ne),ne.forEach(_),ee=O(m),N&&N.l(m),Y=x(),this.h()},h(){b(e,"class","flex lg:hidden justify-between bg-grey-1 col-span-4 py-2 px-4 z-10 relative"),b(u,"class","italic inline"),b(c,"class","breadcrumbs text-center svelte-35slvr"),b(d,"class","info enter-in-1 pt-8 lg:pt-0 lg:px-32 col-span-4 lg:col-span-1 flex flex-col items-center justify-center svelte-35slvr"),b(T,"class","image enter-in-1 col-span-4 lg:col-span-2 mt-12 lg:mt-0 lg:py-20 svelte-35slvr")},m(m,g){E(m,e,g),$(e,a),$(a,l),$(a,s),$(a,n),$(e,o),Q(f,e,null),E(m,P,g),E(m,d,g),$(d,c),$(c,u),$(u,h),$(c,y),M&&M.m(c,null),$(c,C),R&&R.m(c,null),$(d,B),V&&V.m(d,null),E(m,j,g),E(m,T,g),A&&A.m(T,null),E(m,ee,g),N&&N.m(m,g),E(m,Y,g),G=!0},p(m,g){var F,q;(!G||g&2)&&t!==(t=m[1].currentIndex+"")&&Z(l,t),(!G||g&2)&&i!==(i=m[1].totalCount+"")&&Z(n,i);const L={};g&2&&(L.wipDetail=m[1]),f.$set(L),(!G||g&2)&&p!==(p=m[1].title+"")&&Z(h,p),m[1].date?M?M.p(m,g):(M=me(m),M.c(),M.m(c,C)):M&&(M.d(1),M=null),m[1].medium?R?R.p(m,g):(R=_e(m),R.c(),R.m(c,null)):R&&(R.d(1),R=null),m[1].notes?V?(V.p(m,g),g&2&&v(V,1)):(V=pe(m),V.c(),v(V,1),V.m(d,null)):V&&(z(),k(V,1,1,()=>{V=null}),W()),m[1].media.length>0?A?(A.p(m,g),g&2&&v(A,1)):(A=ve(m),A.c(),v(A,1),A.m(T,null)):A&&(z(),k(A,1,1,()=>{A=null}),W()),((q=(F=m[1])==null?void 0:F.related)==null?void 0:q.length)>0?N?(N.p(m,g),g&2&&v(N,1)):(N=$e(m),N.c(),v(N,1),N.m(Y.parentNode,Y)):N&&(z(),k(N,1,1,()=>{N=null}),W())},i(m){G||(v(f.$$.fragment,m),v(V),v(A),v(N),G=!0)},o(m){k(f.$$.fragment,m),k(V),k(A),k(N),G=!1},d(m){m&&(_(e),_(P),_(d),_(j),_(T),_(ee),_(Y)),X(f),M&&M.d(),R&&R.d(),V&&V.d(),A&&A.d(),N&&N.d(m)}}}function Fe(r){let e,a,t,l=r[1],s;document.title=e="Mitchell Barton | WIP | "+r[1].title;let i=ke(r);return{c(){a=S(),t=w("div"),i.c(),this.h()},l(n){Ce("svelte-mww7q4",document.head).forEach(_),a=O(n),t=I(n,"DIV",{class:!0});var f=D(t);i.l(f),f.forEach(_),this.h()},h(){b(t,"class","wip-container grid grid-cols-4 items-start pb-32 lg:pb-60")},m(n,o){E(n,a,o),E(n,t,o),i.m(t,null),s=!0},p(n,[o]){(!s||o&2)&&e!==(e="Mitchell Barton | WIP | "+n[1].title)&&(document.title=e),o&2&&ae(l,l=n[1])?(z(),k(i,1,1,le),W(),i=ke(n),i.c(),v(i,1),i.m(t,null)):i.p(n,o)},i(n){s||(v(i),s=!0)},o(n){k(i),s=!1},d(n){n&&(_(a),_(t)),i.d(n)}}}function Je(r,e,a){let t,{data:l}=e,s=!1;Me(()=>{console.log(t.media)});const i=()=>a(0,s=!s);return r.$$set=n=>{"data"in n&&a(2,l=n.data)},r.$$.update=()=>{r.$$.dirty&4&&a(1,t=l.wipDetail)},[s,t,l,i]}class at extends Ie{constructor(e){super(),ye(this,e,Je,Fe,ae,{data:2})}}export{at as component,lt as universal};
