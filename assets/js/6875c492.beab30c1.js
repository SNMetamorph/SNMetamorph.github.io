"use strict";(self.webpackChunksnmetamorph_blog=self.webpackChunksnmetamorph_blog||[]).push([[4813],{4934:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(3230),i=n(3555),r=n(4848);function a(e){const{metadata:t}=e,{previousPage:n,nextPage:a}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(i.A,{permalink:n,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),a&&(0,r.jsx)(i.A,{permalink:a,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},4331:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(9101),i=n(5418),r=n(4848);function a(e){let{items:t,component:n=i.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6942:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var s=n(4164),i=n(3230),r=n(6644),a=n(8630),l=n(7824),o=n(4848);function c(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function d(e){const t=c();return(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var u=n(4783),g=n(6953),h=n(4934),m=n(1210),p=n(4331),b=n(8811),x=n(5225);function f(e){let{tag:t}=e;const n=d(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.be,{title:n,description:t.description}),(0,o.jsx)(m.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:r}=e;const a=d(t);return(0,o.jsxs)(g.A,{sidebar:s,children:[t.unlisted&&(0,o.jsx)(b.A,{}),(0,o.jsxs)("header",{className:"margin-bottom--xl",children:[(0,o.jsx)(x.A,{as:"h1",children:a}),t.description&&(0,o.jsx)("p",{children:t.description}),(0,o.jsx)(u.A,{href:t.allTagsPath,children:(0,o.jsx)(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,o.jsx)(p.A,{items:n}),(0,o.jsx)(h.A,{metadata:r})]})}function A(e){return(0,o.jsxs)(r.e3,{className:(0,s.A)(a.G.wrapper.blogPages,a.G.page.blogTagPostListPage),children:[(0,o.jsx)(f,{...e}),(0,o.jsx)(j,{...e})]})}},8811:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),i=n(6907),r=n(8630),a=n(4182),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(a.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,s.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,{...e})]})}},6907:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>a,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var s=n(3230),i=n(1141),r=n(4848);function a(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},5418:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(6540),i=n(5679),r=n(9101),a=n(7710),l=n(4848);function o(e){const{...t}=e,{colorMode:n}=(0,a.G)(),i="dark"===n?"github-dark":"github-light",r=s.createRef();return(0,s.useEffect)((()=>{for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild);const e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo","SNMetamorph/SNMetamorph.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","utterances-comments"),e.setAttribute("theme",i),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",!0),r.current.appendChild(e)}),[i]),(0,l.jsx)("div",{id:"utterances-comments",ref:r,...t})}function c(e){const{metadata:t}=(0,r.e7)(),{comments:n=!0}=t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{...e}),t&&n&&(0,l.jsx)(o,{className:"blog-post-comments"})]})}}}]);