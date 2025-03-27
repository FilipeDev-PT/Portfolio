import{j as e,u as P,L as y,r as p,C as A,a as R,R as H,b as g,B as $,c as w}from"./vendor-B5dwtk1U.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const B="_container_1j2di_1",T="_conteinerContent_1j2di_27",F="_conteinerContentContent_1j2di_49",D="_conteinerContentChildren_1j2di_63",G="_iconsRight_1j2di_113",O="_iconsLeft_1j2di_115",q="_divIconsChevron_1j2di_141",l={container:B,conteinerContent:T,conteinerContentContent:F,conteinerContentChildren:D,iconsRight:G,iconsLeft:O,divIconsChevron:q},E="_header_dlg9b_1",M="_contentButtonsHeader_dlg9b_17",b={header:E,contentButtonsHeader:M},z="_buttonsHeaderNavigate_1wrnv_1",J="_buttonsHeaderNavigateActive_1wrnv_17",N={buttonsHeaderNavigate:z,buttonsHeaderNavigateActive:J};function x({initial:s,text:n,onClick:i,number:r,styles:t}){return e.jsx("button",{className:`${N.buttonsHeaderNavigate} ${t==r||s!=""?N.buttonsHeaderNavigateActive:""}`,onClick:()=>i(r),children:n})}function K({constPagina:s,setConstPagina:n,urlPageina:i}){const r=P();function t(o){n(o);const a=i[o];r(`/${a}`)}return e.jsxs("header",{className:b.header,children:[e.jsx("h3",{children:"Filipe Cristovam"}),e.jsxs("div",{className:b.contentButtonsHeader,children:[e.jsx(x,{text:"About",onClick:t,number:1,styles:s,initial:`${s==1?"initial":""}`}),e.jsx(x,{text:"Skills",onClick:t,number:2,styles:s,initial:""}),e.jsx(x,{text:"Projects",onClick:t,number:3,styles:s,initial:""})]})]})}const V="_divLateralNavigate_1dnon_1",W={divLateralNavigate:V},X="_iconLateralNavigate_1s4tb_1",Z={iconLateralNavigate:X};function d({name:s,link:n}){const i=y[s];return i?e.jsx("a",{href:n,target:"_blank",children:e.jsx(i,{className:Z.iconLateralNavigate})}):(console.warn(`Ícone "${s}" não encontrado.`),null)}function Q(){return e.jsxs("div",{className:W.divLateralNavigate,children:[e.jsx(d,{name:"Linkedin",link:"https://www.linkedin.com/in/filipe-cristovam-6b5b7031a/"}),e.jsx(d,{name:"Mail",link:"mailto:filipe.dev.contact@gmail.com"}),e.jsx(d,{name:"Phone",link:"https://wa.me/5562981046068"}),e.jsx(d,{name:"Github",link:"https://github.com/FilipeDev-PT"})]})}function _({children:s}){const n=window.location.href,i=["Portfolio","about","skills","projects"],[r,t]=p.useState(parseInt(i.indexOf(n.split("/").pop()))>1),[o,a]=p.useState(parseInt(i.indexOf(n.split("/").pop()))<3||n.split("/").pop()===""),C=P(),[m,f]=p.useState(n.split("/").pop()==""?1:parseInt(i.indexOf(n.split("/").pop()))),I=()=>{if(m<3){const c=m+1;c==3?a(!1):a(!0),c>1?t(!0):t(!1),f(c);const j=i[c];C(`/${j}`)}},L=()=>{if(m>1){const c=m-1;c==1?t(!1):t(!0),c<3?a(!0):a(!1),f(c);const j=i[c];C(`/${j}`)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:l.container,children:[e.jsx("div",{className:l.divIconsChevron,children:r?e.jsx(A,{className:l.iconsLeft,onClick:L}):""}),e.jsxs("div",{className:l.conteinerContent,children:[e.jsx(K,{constPagina:m,setConstPagina:f,urlPageina:i}),e.jsxs("div",{className:l.conteinerContentContent,children:[e.jsx(Q,{}),e.jsx("div",{className:l.conteinerContentChildren,children:s})]})]}),e.jsx("div",{className:l.divIconsChevron,children:o?e.jsx(R,{className:l.iconsRight,onClick:I}):""})]})})}const U="_divContentAbout_ht6n9_1",Y="_imgAbout_ht6n9_17",ee="_divContentTitle_ht6n9_27",te="_divImg_ht6n9_97",h={divContentAbout:U,imgAbout:Y,divContentTitle:ee,divImg:te},ne="/Portfolio/assets/Img_Pessoal-Dd6sOVCw.png";function S(){return e.jsx(_,{children:e.jsxs("div",{className:h.divContentAbout,children:[e.jsx("div",{className:h.divImg,children:e.jsx("img",{src:ne,alt:"",className:h.imgAbout})}),e.jsxs("div",{className:h.divContentTitle,children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Frontend"}),e.jsx("h4",{children:"Developer"})]}),e.jsx("div",{children:e.jsx("p",{children:"Olá, eu sou Filipe. Desenvolvo projetos em React, principalmente. Participei da criação de aplicações de controle de obra para a FGR, desenvolvi soluções de problemas financeiros, contábeis e de produção, tanto para a G.A. Silva quanto para a FGR. Sou um amante por tecnologia e amo receber novos desafios. Busco uma empresa onde consiga desenvolver minhas habilidades como programador, evoluir e no futuro liderar equipes de desenvolvimento, para assim ajudar no crescimento da empresa."})})]})]})})}const se="_divContentSkills_1lvzl_1",oe={divContentSkills:se},ie="_divContentSkill_ecbdp_1",ae="_imgSkills_ecbdp_21",k={divContentSkill:ie,imgSkills:ae};function u({link:s,content:n}){return e.jsxs("div",{className:k.divContentSkill,children:[e.jsx("img",{src:s,alt:"",className:k.imgSkills}),e.jsx("p",{children:n})]})}const re="/Portfolio/assets/React-DDqrNN29.png",ce="/Portfolio/assets/JavaScript-BZuPeKh4.png",le="/Portfolio/assets/HTMl-B-G_LlA8.png",de="/Portfolio/assets/CSS-SgARIAW8.png",me="/Portfolio/assets/GIT-hRe8zdVx.png";function ue(){return e.jsx(_,{children:e.jsxs("div",{className:oe.divContentSkills,children:[e.jsx(u,{link:re,content:"React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário dinâmicas e interativas. Ela facilita a criação de componentes reutilizáveis e a gestão eficiente de estados. React é amplamente usada em desenvolvimento web e mobile (com React Native), especialmente em aplicações de página única (SPA) devido à sua alta performance e escalabilidade."}),e.jsx(u,{link:ce,content:"JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade e dinamismo em páginas web. Com ela, é possível manipular elementos HTML, validar formulários e criar animações, entre outras funcionalidades. JavaScript é essencial para o desenvolvimento frontend e pode ser usado tanto no navegador quanto no backend (com Node.js)."}),e.jsx(u,{link:le,content:"HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar conteúdo na web. Ela define elementos como títulos, parágrafos, listas, links e imagens, formando a base de qualquer página web. HTML é fundamental para criar a estrutura de uma página, que pode ser estilizada com CSS e tornada interativa com JavaScript."}),e.jsx(u,{link:de,content:"CSS (Cascading Style Sheets) é uma linguagem usada para estilizar a aparência de páginas web. Com CSS, é possível controlar aspectos visuais como cores, fontes, espaçamento, layout e responsividade. Ele trabalha em conjunto com HTML para definir o design e a disposição dos elementos, tornando as páginas mais atraentes e funcionais em diferentes dispositivos."}),e.jsx(u,{link:me,content:"Git é um sistema de controle de versão distribuído que permite rastrear alterações no código-fonte ao longo do tempo. Ele facilita a colaboração entre desenvolvedores, permitindo o gerenciamento de versões, a criação de ramificações (branches) e a fusão de mudanças (merges). Git é amplamente utilizado em projetos de software, especialmente quando há várias pessoas envolvidas no desenvolvimento."})]})})}const ve="_divItensProject_1fnhs_1",pe="_imgSelect_1fnhs_49",ge="_divIconsProject_1fnhs_75",he="_divCloseImg_1fnhs_85",fe="_imgDivSelect_1fnhs_107",v={divItensProject:ve,imgSelect:pe,divIconsProject:ge,divCloseImg:he,imgDivSelect:fe};function je({link:s,content:n,linkGitHub:i,linkSite:r}){const[t,o]=p.useState(!1),a=()=>{o(!t)};return e.jsxs("div",{className:`${v.divItensProject} ${t?v.imgDivSelect:""}`,children:[t?e.jsx("div",{className:v.divCloseImg,onClick:a,children:e.jsx(d,{name:"X"})}):"",e.jsx("img",{src:s,alt:"",onClick:a,className:`${t?v.imgSelect:""}`}),e.jsx("p",{children:n}),e.jsxs("div",{className:v.divIconsProject,children:[e.jsx(d,{name:"Github",link:i}),e.jsx(d,{name:"Globe",link:r})]})]})}const xe="_divProject_lgpj0_1",_e={divProject:xe},Ce="/Portfolio/assets/AppControle-B7aPaa2o.png";function be(){return e.jsx(_,{children:e.jsx("div",{className:_e.divProject,children:e.jsx(je,{link:Ce,content:"Aplicativo de controle de obra, feito inteiramente por mim, sendo realizado todo o banco de dados, backend em C# e frontend em React. Aplicativo responsavel por consulta de medições, remanejamento de saldo de contratos (reformas), e um backend excluiso para criação de programações.",linkGitHub:"https://github.com/FilipeDev-PT/AppControle",linkSite:"https://filipedev-pt.github.io/AppControle/"})})})}const Ne=()=>{const s=({children:n})=>n;return e.jsx(s,{children:e.jsxs(H,{children:[e.jsx(g,{path:"/Portfolio",element:e.jsx(S,{})}),e.jsx(g,{path:"/about",element:e.jsx(S,{})}),e.jsx(g,{path:"/skills",element:e.jsx(ue,{})}),e.jsx(g,{path:"/projects",element:e.jsx(be,{})})]})})};function Se(){return e.jsx(e.Fragment,{children:e.jsx($,{children:e.jsx(Ne,{})})})}w.createRoot(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(Se,{})}));
