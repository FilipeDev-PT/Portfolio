import{j as e,u as C,L as P,r as N,C as S,a as L,R as y,b as u,B as q,c as R}from"./vendor-B5dwtk1U.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const A="_container_6a8y7_1",I="_conteinerContent_6a8y7_27",w="_conteinerContentContent_6a8y7_49",B="_conteinerContentChildren_6a8y7_63",H="_iconsRight_6a8y7_81",T="_iconsLeft_6a8y7_83",r={container:A,conteinerContent:I,conteinerContentContent:w,conteinerContentChildren:B,iconsRight:H,iconsLeft:T},$="_header_feb1u_1",E="_contentButtonsHeader_feb1u_17",h={header:$,contentButtonsHeader:E},O="_buttonsHeaderNavigate_2wsap_1",F={buttonsHeaderNavigate:O};function x({text:i,onClick:n,number:s}){return e.jsx("button",{className:F.buttonsHeaderNavigate,onClick:()=>n(s),children:i})}function M({constPagina:i,urlPageina:n}){const s=C();function a(t){i(t);const o=n[t];s(`/${o}`)}return e.jsxs("header",{className:h.header,children:[e.jsx("h3",{children:"Filipe Cristovam"}),e.jsxs("div",{className:h.contentButtonsHeader,children:[e.jsx(x,{text:"ABOUT",onClick:a,number:0}),e.jsx(x,{text:"SKILLS",onClick:a,number:1}),e.jsx(x,{text:"PROJECTS",onClick:a,number:2})]})]})}const G="_divLateralNavigate_1dnon_1",z={divLateralNavigate:G},D="_iconLateralNavigate_1s4tb_1",J={iconLateralNavigate:D};function m({name:i,link:n}){const s=P[i];return s?e.jsx("a",{href:n,target:"_blank",children:e.jsx(s,{className:J.iconLateralNavigate})}):(console.warn(`Ícone "${i}" não encontrado.`),null)}function V(){return e.jsxs("div",{className:z.divLateralNavigate,children:[e.jsx(m,{name:"Linkedin",link:"https://www.linkedin.com/in/filipe-cristovam-6b5b7031a/"}),e.jsx(m,{name:"Mail",link:"mailto:filipe.dev.contact@gmail.com"}),e.jsx(m,{name:"Phone",link:"https://wa.me/5562981046068"}),e.jsx(m,{name:"Github",link:"https://github.com/FilipeDev-PT"})]})}function j({children:i}){const n=window.location.href,s=["Portfolio","about","skills","projects"],a=C(),[t,o]=N.useState(n.split("/").pop()==="Portfolio"?1:parseInt(s.indexOf(n.split("/").pop())));console.log(n.split("/").pop()),console.log(t);const c=()=>{if(t<3){const l=t+1;o(l);const f=s[l];a(`/${f}`)}},k=()=>{if(t>1){const l=t-1;o(l);const f=s[l];a(`/${f}`)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:r.container,children:[e.jsx(S,{className:r.iconsLeft,onClick:k}),e.jsxs("div",{className:r.conteinerContent,children:[e.jsx(M,{constPagina:o,urlPageina:s}),e.jsxs("div",{className:r.conteinerContentContent,children:[e.jsx(V,{}),e.jsx("div",{className:r.conteinerContentChildren,children:i})]})]}),e.jsx(L,{className:r.iconsRight,onClick:c})]})})}const K="_divContentAbout_1qvgf_1",U="_imgAbout_1qvgf_17",W="_divContentTitle_1qvgf_27",Z="_divImg_1qvgf_99",p={divContentAbout:K,imgAbout:U,divContentTitle:W,divImg:Z},Q="/Portfolio/assets/Img_Pessoal-Dd6sOVCw.png";function _(){return e.jsx(j,{children:e.jsxs("div",{className:p.divContentAbout,children:[e.jsx("div",{className:p.divImg,children:e.jsx("img",{src:Q,alt:"",className:p.imgAbout})}),e.jsxs("div",{className:p.divContentTitle,children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Frontend"}),e.jsx("h4",{children:"Developer"})]}),e.jsx("div",{children:e.jsx("p",{children:"Olá, eu sou Filipe. Desenvolvo projetos em React, principalmente. Participei da criação de aplicações de controle de obra para a FGR, desenvolvi soluções de problemas financeiros, contábeis e de produção, tanto para a G.A. Silva quanto para a FGR. Sou um amante por tecnologia e amo receber novos desafios. Busco uma empresa onde consiga desenvolver minhas habilidades como programador, evoluir e no futuro liderar equipes de desenvolvimento, para assim ajudar no crescimento da empresa."})})]})]})})}const X="_divContentSkills_185p3_1",Y={divContentSkills:X},ee="_divContentSkill_1u8em_1",te="_imgSkills_1u8em_21",b={divContentSkill:ee,imgSkills:te};function d({link:i,content:n}){return e.jsxs("div",{className:b.divContentSkill,children:[e.jsx("img",{src:i,alt:"",className:b.imgSkills}),e.jsx("p",{children:n})]})}const ne="/Portfolio/assets/React-DDqrNN29.png",oe="/Portfolio/assets/JavaScript-BZuPeKh4.png",ie="/Portfolio/assets/HTMl-B-G_LlA8.png",se="/Portfolio/assets/CSS-SgARIAW8.png",ae="/Portfolio/assets/GIT-hRe8zdVx.png";function re(){return e.jsx(j,{children:e.jsxs("div",{className:Y.divContentSkills,children:[e.jsx(d,{link:ne,content:"React é uma biblioteca JavaScript desenvolvida pelo Facebook para construir interfaces de usuário dinâmicas e interativas. Ela facilita a criação de componentes reutilizáveis e a gestão eficiente de estados. React é amplamente usada em desenvolvimento web e mobile (com React Native), especialmente em aplicações de página única (SPA) devido à sua alta performance e escalabilidade."}),e.jsx(d,{link:oe,content:"JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade e dinamismo em páginas web. Com ela, é possível manipular elementos HTML, validar formulários e criar animações, entre outras funcionalidades. JavaScript é essencial para o desenvolvimento frontend e pode ser usado tanto no navegador quanto no backend (com Node.js)."}),e.jsx(d,{link:ie,content:"HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar conteúdo na web. Ela define elementos como títulos, parágrafos, listas, links e imagens, formando a base de qualquer página web. HTML é fundamental para criar a estrutura de uma página, que pode ser estilizada com CSS e tornada interativa com JavaScript."}),e.jsx(d,{link:se,content:"CSS (Cascading Style Sheets) é uma linguagem usada para estilizar a aparência de páginas web. Com CSS, é possível controlar aspectos visuais como cores, fontes, espaçamento, layout e responsividade. Ele trabalha em conjunto com HTML para definir o design e a disposição dos elementos, tornando as páginas mais atraentes e funcionais em diferentes dispositivos."}),e.jsx(d,{link:ae,content:"Git é um sistema de controle de versão distribuído que permite rastrear alterações no código-fonte ao longo do tempo. Ele facilita a colaboração entre desenvolvedores, permitindo o gerenciamento de versões, a criação de ramificações (branches) e a fusão de mudanças (merges). Git é amplamente utilizado em projetos de software, especialmente quando há várias pessoas envolvidas no desenvolvimento."})]})})}const ce="_divItensProject_p6wfk_1",le={divItensProject:ce};function v({link:i,content:n}){return e.jsxs("div",{className:le.divItensProject,children:[e.jsx("img",{src:i,alt:""}),e.jsx("p",{children:n})]})}const de="_divProject_lgpj0_1",ue={divProject:de},g="/Portfolio/assets/AppControle-B7aPaa2o.png";function me(){return e.jsx(j,{children:e.jsxs("div",{className:ue.divProject,children:[e.jsx(v,{link:g,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"}),e.jsx(v,{link:g,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"}),e.jsx(v,{link:g,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"}),e.jsx(v,{link:g,content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus culpa nesciunt ipsa est ducimus expedita sed aliquid velit, enim corrupti nemo repudiandae architecto dolorem totam consequuntur illo explicabo exercitationem?"})]})})}const pe=()=>{const i=({children:n})=>n;return e.jsx(i,{children:e.jsxs(y,{children:[e.jsx(u,{path:"/Portfolio",element:e.jsx(_,{})}),e.jsx(u,{path:"/about",element:e.jsx(_,{})}),e.jsx(u,{path:"/skills",element:e.jsx(re,{})}),e.jsx(u,{path:"/projects",element:e.jsx(me,{})})]})})};function ve(){return e.jsx(e.Fragment,{children:e.jsx(q,{children:e.jsx(pe,{})})})}R.createRoot(document.getElementById("root")).render(e.jsx(N.StrictMode,{children:e.jsx(ve,{})}));
