"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[55],{3905:(e,o,a)=>{a.d(o,{Zo:()=>c,kt:()=>v});var t=a(7294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var o=t.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):n(n({},o),e)),a},c=function(e){var o=p(e.components);return t.createElement(l.Provider,{value:o},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?t.createElement(v,n(n({ref:o},c),{},{components:a})):t.createElement(v,n({ref:o},c))}));function v(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[m]="string"==typeof e?e:r,n[1]=i;for(var p=2;p<s;p++)n[p]=a[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7829:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2,slug:"/docs/computer-vision/cv-color-spaces",title:"Vis\xe3o Computacional - Color Spaces",description:"Descri\xe7\xe3o dos Espa\xe7os de Cores"},n="Color Spaces",i={unversionedId:"computer-vision/color-spaces",id:"computer-vision/color-spaces",title:"Vis\xe3o Computacional - Color Spaces",description:"Descri\xe7\xe3o dos Espa\xe7os de Cores",source:"@site/docs/computer-vision/color-spaces.md",sourceDirName:"computer-vision",slug:"/docs/computer-vision/cv-color-spaces",permalink:"/docs/computer-vision/cv-color-spaces",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/docs/computer-vision/cv-color-spaces",title:"Vis\xe3o Computacional - Color Spaces",description:"Descri\xe7\xe3o dos Espa\xe7os de Cores"},sidebar:"tutorialSidebar",previous:{title:"Vis\xe3o Computacional - Introdu\xe7\xe3o",permalink:"/docs/computer-vision/cv-intro"},next:{title:"Vis\xe3o Computacional - OpenCV B\xe1sico",permalink:"/docs/computer-vision/cv-color-opencv-basico"}},l={},p=[{value:"RBG",id:"rbg",level:2},{value:"HSV",id:"hsv",level:2},{value:"LAB",id:"lab",level:2},{value:"Conclus\xe3o \ud83c\udf91",id:"conclus\xe3o-",level:2}],c={toc:p},m="wrapper";function d(e){let{components:o,...s}=e;return(0,r.kt)(m,(0,t.Z)({},c,s,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"color-spaces"},"Color Spaces"),(0,r.kt)("p",null,"Os espa\xe7os de cores, ou ",(0,r.kt)("em",{parentName:"p"},"color spaces"),", s\xe3o representa\xe7\xf5es matem\xe1ticas em visualiza\xe7\xf5es espaciais que nos permitem manipular e\ndescrever cores, por meio de n\xfameros. Existem diversos par\xe2metros para se deteminar um espa\xe7o de cor, e vamos discutir sobre 3 deles."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"RGB")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HSV")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"LAB"))),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Veja os valores representados nos ",(0,r.kt)("em",{parentName:"p"},"color spaces")," como ",(0,r.kt)("strong",{parentName:"p"},"tuplas"),". \xc9 assim que iremos manipul\xe1-los em Python, em projetos e exemplos de Vis\xe3o Computacional.\nRelembre que tuplas s\xe3o como listas, mas imut\xe1veis. ")),(0,r.kt)("h2",{id:"rbg"},"RBG"),(0,r.kt)("p",null,"Provavelmente o mais popular da lista, ",(0,r.kt)("strong",{parentName:"p"},"RGB")," (red, green, blue) usa de 3 par\xe2metros para determinar uma cor. Basicamente, esse espa\xe7o separa\numa cor em ",(0,r.kt)("strong",{parentName:"p"},"3 n\xedveis de intensidade de Vermelho, Verde e Azul"),", que variam de ",(0,r.kt)("strong",{parentName:"p"},"0-255"),". \xc9 o espa\xe7o decor mais utilizado pela simplicidade\ne pela facilidade de representa\xe7\xe3o em telas e dispotivos que emitem luz colorida. Portanto, \xe9 o espa\xe7o de cor no qual se representa cada\npixel da tela que voc\xea est\xe1 lendo isso. Por exemplo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"4CC063",src:a(4336).Z,width:"644",height:"226"})),(0,r.kt)("p",null,"Essa cor \xe9 representada pela combina\xe7\xe3o (76, 192, 99) de vermelho, verde e azul, respectivamente. Voc\xea pode inferir que, como temos um valor desse para\ncada pixel, temos um valor m\xednimo de representa\xe7\xe3o de 3 bytes por pixel, ou ainda 24 bits, dando uma faixa de representa\xe7\xe3o de 256 n\xedveis de intensidade."),(0,r.kt)("p",null,"A raz\xe3o de ser o espa\xe7o m\xednimo alocado por pixel \xe9 por que na pr\xe1tica, podemos representar informa\xe7\xe3o adicional em cada pixel, como um par\xe2metro de transpar\xeancia, mas n\xe3o vem ao caso."),(0,r.kt)("p",null,"O espa\xe7o de cor ",(0,r.kt)("strong",{parentName:"p"},"RGB")," \xe9 aditivo, ou seja, a representa\xe7\xe3o da cor \xe9 a soma das intensidades. Por isso, quando uma das intensidades \xe9 0, essa representa\na cor Preto. E, similarmente, quando todas s\xe3o 255, isto \xe9, todas as 3 intensidades est\xe3o no valor m\xe1ximo, obtemos a cor Branca."),(0,r.kt)("p",null,"Veja um exemplo do espectro de RGB:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rgb",src:a(8301).Z,width:"720",height:"720"})),(0,r.kt)("p",null,"Perceba que \xe9 um modelo de representa\xe7\xe3o simples. Pode ser encontrado tamb\xe9m como um cubo de 3 dimens\xf5es (l\xf3gico), onde cada dimens\xe3o ou eixo\nrepresenta uma intensidade."),(0,r.kt)("h2",{id:"hsv"},"HSV"),(0,r.kt)("p",null,"Esse modelo \xe9 mais interessante e eficiente na manipula\xe7\xe3o de cores. ",(0,r.kt)("strong",{parentName:"p"},"HSV")," \xe9 um acr\xf4nimo para (hue, saturation, value). Tamb\xe9m pode\nser encontrado como HSB (hue, saturation, brightness). Vamos por partes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hue"),"(matiz):")),(0,r.kt)("p",null,"Representa uma cor, numa faixa de cores. Abrange todas as cores no espectro, do vermelho at\xe9 o violeta, mais o magenta. Atinge\nvalores de 0-360, mas tamb\xe9m pode ser normalizado para 0-100%."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Saturation")," (satura\xe7\xe3o):")),(0,r.kt)("p",null,'Representa n\xedveis de tons de cinza na cor. Quanto mais\nalto, mais "pura" \xe9 a imagem, e quanto mais baixo, mais cinza ser\xe1. Os valores de satura\xe7\xe3o variam entre 0-100%.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Value")," (valor ou brilho):")),(0,r.kt)("p",null,"Representa o brilho da cor. Varia de 0-100%."),(0,r.kt)("p",null,"A mesma cor usada de exemplo anteriormente \xe9 representada pelos valores (132\xb0, 60%, 75%). "),(0,r.kt)("p",null,"Veja essa representa\xe7\xe3o do ",(0,r.kt)("em",{parentName:"p"},"color space")," em 3D:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hsv",src:a(6838).Z,width:"2400",height:"1800"})),(0,r.kt)("admonition",{title:"Curiosidade",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note que o par\xe2metro ",(0,r.kt)("strong",{parentName:"p"},"Hue")," varia de 0-360. Isso tem a ver com sua faixa de representa\xe7\xe3o, medida em graus (\xb0). Por isso, a imagem\nda representa\xe7\xe3o espacial do espa\xe7o de cor \xe9 um cilindro.")),(0,r.kt)("p",null,"Consideramos esse modelo como melhor na hora de identificar as cores do mundo real, justamente pela sua estrutura\xe7\xe3o que cont\xe9m satura\xe7\xe3o e brilho, e possibilita um leque maior e mais aplic\xe1vel de cores no mundo real. "),(0,r.kt)("p",null,"Iremos usar este espa\xe7o de cor nos projetos e artigos."),(0,r.kt)("h2",{id:"lab"},"LAB"),(0,r.kt)("p",null,"Representa cores por um esquema de coordenadas, onde L \xe9 Leveza ou Lightness,\nA \xe9 o valor do Vermelho/Verde, e B \xe9 o de Azul/Amarelo."),(0,r.kt)("p",null,"Veja:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lab Color Space",src:a(1774).Z,width:"600",height:"622"})),(0,r.kt)("h2",{id:"conclus\xe3o-"},"Conclus\xe3o \ud83c\udf91"),(0,r.kt)("p",null,"Bom, essa se\xe7\xe3o termina aqui.\nCaso tenha alguma d\xfavida que n\xe3o conseguiu encontrar online, envie para ",(0,r.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nObrigado pela aten\xe7\xe3o, e bons estudos."))}d.isMDXComponent=!0},4336:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/4CC063-8816d20317555495d20402596f4c1194.png"},6838:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/hsv-92d1ac93caafd88e3f180cdd99474c4f.png"},1774:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/lab-color-space-d9ec7a76c4b554d8c27ae50d9c31d285.png"},8301:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/rgb-4e45e6d7e8499d90a50c237d03ebccaf.jpg"}}]);