(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{494:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(69),c=a(506),i=a(507),o=a(508),s=a(512),d=a(513),u=(a(184),a(133),a(2)),m=a.n(u),p=a(10),h=a.n(p),b=a(11),f=a.n(b),v=a(12),g=a.n(v),E=a(13),O=a.n(E),j=a(6),C=a.n(j),k=a(14),N=a.n(k),y=a(3),x=a.n(y),L=a(102),A=a.n(L),I=a(7),T=a.n(I),P=a(5),V=a.n(P),w=(a(1),a(44)),G=a(175),K=a(176),z=a(4),W=a(248);function D(e){var t=e.children,a=e.className,n=e.content,r=V()(a,"description"),c=Object(G.a)(D,e),i=Object(K.a)(D,e);return l.a.createElement(i,m()({},c,{className:r}),z.a.isNil(t)?n:t)}D.handledProps=["as","children","className","content"],D.propTypes={},D.create=Object(W.c)(D,(function(e){return{content:e}}));var H=D;function J(e){var t=e.children,a=e.className,n=e.content,r=V()("header",a),c=Object(G.a)(J,e),i=Object(K.a)(J,e);return l.a.createElement(i,m()({},c,{className:r}),z.a.isNil(t)?n:t)}J.handledProps=["as","children","className","content"],J.propTypes={},J.create=Object(W.c)(J,(function(e){return{content:e}}));var M=J;function Q(e){var t=e.children,a=e.className,n=e.content,r=e.description,c=e.floated,i=e.header,o=e.verticalAlign,s=V()(Object(w.e)(c,"floated"),Object(w.f)(o),"content",a),d=Object(G.a)(Q,e),u=Object(K.a)(Q,e);return z.a.isNil(t)?l.a.createElement(u,m()({},d,{className:s}),M.create(i),H.create(r),n):l.a.createElement(u,m()({},d,{className:s}),t)}Q.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],Q.propTypes={},Q.create=Object(W.c)(Q,(function(e){return{content:e}}));var R=Q,F=a(139);function S(e){var t=e.className,a=e.verticalAlign,n=V()(Object(w.f)(a),t),r=Object(G.a)(S,e);return l.a.createElement(F.a,m()({},r,{className:n}))}S.handledProps=["className","verticalAlign"],S.propTypes={},S.create=Object(W.c)(S,(function(e){return{name:e}}));var U=S,Y=a(186),q=a.n(Y),B=a(279),X=function(e){function t(){var e,a;h()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=g()(this,(e=O()(t)).call.apply(e,[this].concat(l))),x()(C()(a),"handleClick",(function(e){a.props.disabled||T()(a.props,"onClick",e,a.props)})),a}return N()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,a=e.active,r=e.children,c=e.className,i=e.content,o=e.description,s=e.disabled,d=e.header,u=e.icon,p=e.image,h=e.value,b=Object(K.a)(t,this.props),f=V()(Object(w.a)(a,"active"),Object(w.a)(s,"disabled"),Object(w.a)("li"!==b,"item"),c),v=Object(G.a)(t,this.props),g="li"===b?{value:h}:{"data-value":h};if(!z.a.isNil(r))return l.a.createElement(b,m()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),r);var E=U.create(u,{autoGenerateKey:!1}),O=B.a.create(p,{autoGenerateKey:!1});if(!Object(n.isValidElement)(i)&&q()(i))return l.a.createElement(b,m()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),E||O,R.create(i,{autoGenerateKey:!1,defaultProps:{header:d,description:o}}));var j=M.create(d,{autoGenerateKey:!1}),C=H.create(o,{autoGenerateKey:!1});return E||O?l.a.createElement(b,m()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),E||O,(i||j||C)&&l.a.createElement(R,null,j,C,i)):l.a.createElement(b,m()({},g,{role:"listitem",className:f,onClick:this.handleClick},v),j,C,i)}}]),t}(n.Component);x()(X,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),X.propTypes={},X.create=Object(W.c)(X,(function(e){return{content:e}}));var Z=X;function $(e){var t=e.children,a=e.className,n=e.content,r=Object(G.a)($,e),c=Object(K.a)($,e),i=V()(Object(w.a)("ul"!==c&&"ol"!==c,"list"),a);return l.a.createElement(c,m()({},r,{className:i}),z.a.isNil(t)?n:t)}$.handledProps=["as","children","className","content"],$.propTypes={};var _=$,ee=function(e){function t(){var e,a;h()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=g()(this,(e=O()(t)).call.apply(e,[this].concat(l))),x()(C()(a),"handleItemOverrides",(function(e){return{onClick:function(t,n){T()(e,"onClick",t,n),T()(a.props,"onItemClick",t,n)}}})),a}return N()(t,e),f()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,r=a.bulleted,c=a.celled,i=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,p=a.horizontal,h=a.inverted,b=a.items,f=a.link,v=a.ordered,g=a.relaxed,E=a.selection,O=a.size,j=a.verticalAlign,C=V()("ui",O,Object(w.a)(n,"animated"),Object(w.a)(r,"bulleted"),Object(w.a)(c,"celled"),Object(w.a)(d,"divided"),Object(w.a)(p,"horizontal"),Object(w.a)(h,"inverted"),Object(w.a)(f,"link"),Object(w.a)(v,"ordered"),Object(w.a)(E,"selection"),Object(w.b)(g,"relaxed"),Object(w.e)(u,"floated"),Object(w.f)(j),"list",o),k=Object(G.a)(t,this.props),N=Object(K.a)(t,this.props);return z.a.isNil(i)?z.a.isNil(s)?l.a.createElement(N,m()({role:"list",className:C},k),A()(b,(function(t){return Z.create(t,{overrideProps:e.handleItemOverrides})}))):l.a.createElement(N,m()({role:"list",className:C},k),s):l.a.createElement(N,m()({role:"list",className:C},k),i)}}]),t}(n.Component);x()(ee,"Content",R),x()(ee,"Description",H),x()(ee,"Header",M),x()(ee,"Icon",U),x()(ee,"Item",Z),x()(ee,"List",_),x()(ee,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]),ee.propTypes={};var te=ee,ae=a(492),ne=function(e){return n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Header,null,"Tags")),n.createElement(o.a.Content,null,n.createElement(te,null,e.tags.sort((function(e,t){return e.totalCount>t.totalCount?-1:e.totalCount<t.totalCount?1:0})).map((function(t){var a=t.fieldValue===e.tag,l=a?"/":"/blog/tags/"+Object(ae.kebabCase)(t.fieldValue)+"/";return n.createElement(te.Item,{as:"span",key:t.fieldValue},n.createElement(te.Icon,{name:"tag",color:a?"blue":null}),n.createElement(te.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:l},t.fieldValue," (",t.totalCount,")")))})))))},le=a(280),re=function(e){return n.createElement(n.Fragment,null,e.tags.sort((function(e,t){return e.totalCount>t.totalCount?-1:e.totalCount<t.totalCount?1:0})).map((function(t){var a=t.fieldValue===e.tag,l=a?"/":"/blog/tags/"+Object(ae.kebabCase)(t.fieldValue)+"/";return n.createElement(le.a,{key:t.fieldValue,tag:!0,color:a?"black":null},n.createElement(r.Link,{to:l},t.fieldValue," (",t.totalCount,")"))})))},ce=(a(32),a(8),a(33),a(99),a(509)),ie=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(ce.a,{pagination:!0},Object(ae.times)(e.pageCount,(function(a){var l=(a+1).toString(),r=e.pageCount<10?5:3,c=+l-r<+t&&+l+r>+t,i=+l===e.pageCount;return c||1==+l||i?n.createElement(ce.a.Item,{key:l,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+l+"/",name:l,active:t===l}):+l==e.pageCount-1||2==+l?n.createElement(ce.a.Item,{key:l,disabled:!0},"..."):null})))},oe=a(493),se=a(495),de=a(496);a.d(t,"pageQuery",(function(){return ue}));t.default=Object(oe.a)((function(e){var t=e.data.tags.group,a=e.data.posts.edges,l=e.location.pathname,u=Math.ceil(e.data.posts.totalCount/10),m=n.createElement(c.a,null,n.createElement("div",{className:"tablet only mobile only computer only"},n.createElement(re,{Link:r.Link,tags:t,tag:e.pageContext.tag})),a.map((function(e){var t=e.node,a=t.frontmatter,l=t.timeToRead,c=t.fields.slug,s=t.excerpt,d=(a.author.avatar.children[0],Object(ae.get)(a,"image.children.0.fixed",{})),u=n.createElement(i.a.Group,null,n.createElement(i.a,null,n.createElement(i.a.Content,null,n.createElement(i.a.Metadata,{style:{margin:0}},a.updatedDate," - ",l," min read")))),m=n.createElement(o.a.Description,null,s,n.createElement("br",null),n.createElement(r.Link,{to:c},"Read more…"));return n.createElement(o.a,{key:c,fluid:!0,image:d,header:a.title,extra:u,description:m})})));e.data.posts.edges[0].node.frontmatter.author.avatar.children[0];return n.createElement(c.a,null,n.createElement(s.a,{vertical:!0},n.createElement(d.a,{columns:3,padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{className:"tablet hidden mobile hidden",style:{maxWidth:300}},n.createElement(de.a,{sourceType:"profile",screenName:"Y0KUDA",options:{height:1200}})),n.createElement("div",{style:{maxWidth:800}},m,n.createElement(s.a,{vertical:!0,textAlign:"center"},n.createElement(ie,{Link:r.Link,pathname:l,pageCount:u}))),n.createElement("div",{className:"tablet hidden mobile hidden",style:{maxWidth:300}},n.createElement(se.a,null),n.createElement(ne,{Link:r.Link,tags:t,tag:e.pageContext.tag})))))}));var ue="3412199638"},499:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return l}));var n=a(494);t.default=n.default;var l="2468622471"}}]);
//# sourceMappingURL=component---src-templates-blog-page-tsx-baad26bd16e5e71fb292.js.map