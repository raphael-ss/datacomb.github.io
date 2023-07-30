"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[897],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>g});var n=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},m=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||t;return o?n.createElement(g,s(s({ref:a},m),{},{components:o})):n.createElement(g,s({ref:a},m))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,s=new Array(t);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<t;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8146:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const t={sidebar_position:4,slug:"/docs/programacao/python-controwflow",title:"Python - Controle de Desvio e Fluxo",description:"If Statements, For Loops, While Loops, e mais."},s="Python - Controle de Desvio e Fluxo",i={unversionedId:"programacao/python-controlflow",id:"programacao/python-controlflow",title:"Python - Controle de Desvio e Fluxo",description:"If Statements, For Loops, While Loops, e mais.",source:"@site/docs/programacao/python-controlflow.md",sourceDirName:"programacao",slug:"/docs/programacao/python-controwflow",permalink:"/docs/programacao/python-controwflow",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/docs/programacao/python-controwflow",title:"Python - Controle de Desvio e Fluxo",description:"If Statements, For Loops, While Loops, e mais."},sidebar:"tutorialSidebar",previous:{title:"Python - Strings",permalink:"/docs/programacao/python-strings"},next:{title:"Python - Fun\xe7\xf5es",permalink:"/docs/programacao/python-funcoes"}},l={},p=[{value:"Opera\xe7\xf5es L\xf3gicas e Valores Booleanos",id:"opera\xe7\xf5es-l\xf3gicas-e-valores-booleanos",level:2},{value:"Operadores de Compara\xe7\xe3o",id:"operadores-de-compara\xe7\xe3o",level:3},{value:"Operadores Booleanos",id:"operadores-booleanos",level:3},{value:"If-Then-Else",id:"if-then-else",level:2},{value:"For Loop",id:"for-loop",level:2},{value:"range()",id:"range",level:3},{value:"While Loop",id:"while-loop",level:2},{value:"break",id:"break",level:3},{value:"continue",id:"continue",level:3},{value:"Conclus\xe3o \ud83c\udf91",id:"conclus\xe3o-",level:2}],m={toc:p},u="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python---controle-de-desvio-e-fluxo"},"Python - Controle de Desvio e Fluxo"),(0,r.kt)("p",null,"Nessa se\xe7\xe3o, vamos falar de t\xf3picos essenciais em qualquer linguagem de programa\xe7\xe3o, e blocos de montagem b\xe1sicos de\nqualquer algoritmo. S\xe3o t\xf3picos importantes para controle de fluxo e desvio."),(0,r.kt)("p",null,"Por exemplo, caso queiramos fazer uma coisa se o resultado de um processo for X, ou fazer outra coisa se o resultado for Y.\nOu, caso queiramos repetir um processo at\xe9 uma condi\xe7\xe3o ser satisfeita, ou s\xf3 repetir um N n\xfamero de vezes."),(0,r.kt)("p",null,"Para isso usamos os loops (itera\xe7\xf5es) e condi\xe7\xf5es se-ent\xe3o-sen\xe3o."),(0,r.kt)("admonition",{title:"Whitespace",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Python n\xe3o possui delimitadores de express\xf5es/condi\xe7\xf5es ou de blocos de c\xf3digo."),(0,r.kt)("p",{parentName:"admonition"},"Diferente de outras linguagens, Python usa de espa\xe7o em branco, ou ",(0,r.kt)("em",{parentName:"p"},"whitespace"),", para delimitar quais express\xf5es est\xe3o aninhadas e quais n\xe3o est\xe3o,\nfor\xe7ando o programador a se 'comportar' e escrever o c\xf3digo com formata\xe7\xe3o e indenta\xe7\xe3o correta.\nPor isso, vigie as tabula\xe7\xf5es e espa\xe7os no c\xf3digo.")),(0,r.kt)("h2",{id:"opera\xe7\xf5es-l\xf3gicas-e-valores-booleanos"},"Opera\xe7\xf5es L\xf3gicas e Valores Booleanos"),(0,r.kt)("p",null,"Como em qualquer linguagem de programa\xe7\xe3o, Python possui opera\xe7\xf5es l\xf3gicas, ou seja, de ",(0,r.kt)("strong",{parentName:"p"},"opera\xe7\xf5es de compara\xe7\xe3o")," e\n",(0,r.kt)("strong",{parentName:"p"},"opera\xe7\xf5es booleanas"),". O resultado dessas opera\xe7\xf5es \xe9 um valor booleano, ou seja, ",(0,r.kt)("em",{parentName:"p"},"True")," ou ",(0,r.kt)("em",{parentName:"p"},"False"),", em Python."),(0,r.kt)("h3",{id:"operadores-de-compara\xe7\xe3o"},"Operadores de Compara\xe7\xe3o"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"==" -> "\xe9 igual \xe0"'),(0,r.kt)("li",{parentName:"ul"},'"!=" -> "n\xe3o \xe9 igual \xe0"'),(0,r.kt)("li",{parentName:"ul"},'">" -> "\xe9 maior que"'),(0,r.kt)("li",{parentName:"ul"},'">=" -> "\xe9 maior ou igual \xe0"'),(0,r.kt)("li",{parentName:"ul"},'"<" -> "\xe9 menor que"'),(0,r.kt)("li",{parentName:"ul"},'"<=" -> "\xe9 menor ou igual \xe0"')),(0,r.kt)("p",null,"Veja o exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"message_1 = \"hello world\"\nmessage_2 = \"Hello World\"\na = 15\nb = 5\n\nbool_1 = a > b #-Resulta em 'True'\nbool_2 = b > a #-Resulta em 'False'\n\nbool_3 = message_1 == message_2 #-Resulta em 'False'\nbool_4 = message_1 > message_2 #-Resulta em 'True'\n")),(0,r.kt)("admonition",{title:"Operador de Atribui\xe7\xe3o x Operador de Compara\xe7\xe3o",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Tome cuidado e preste aten\xe7\xe3o na hora de fazer as condi\xe7\xf5es: talvez voc\u1ebd confunda o operador "=", que \xe9 o operador de atribui\xe7\xe3o \xe0 uma vari\xe1vel,\ncom o operador "==", que \xe9 o de compara\xe7\xe3o.'),(0,r.kt)("p",{parentName:"admonition"},"Se voc\xea tentar fazer um loop com o primeiro, pode receber um erro, ou pior.")),(0,r.kt)("h3",{id:"operadores-booleanos"},"Operadores Booleanos"),(0,r.kt)("p",null,"Muito presentes em \xe1lgebra booleana e l\xf3gica proposicional, estes operadores servem para construir senten\xe7as l\xf3gicas no c\xf3digo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"',(0,r.kt)("strong",{parentName:"li"},"and"),'": "e", "\u22c0", "." -> requer que ambos sejam verdadeiros para a express\xe3o ser verdadeira'),(0,r.kt)("li",{parentName:"ul"},'"',(0,r.kt)("strong",{parentName:"li"},"or"),'": "ou", "\u22c1", "+" -> requer que pelo menos 1 seja verdadeiro para a express\xe3o ser verdadeira'),(0,r.kt)("li",{parentName:"ul"},'"',(0,r.kt)("strong",{parentName:"li"},"not"),'": "n\xe3o", "nega\xe7\xe3o", "\u22bd", "!", "~" -> nega o valor l\xf3gico, ou seja, troca'),(0,r.kt)("li",{parentName:"ul"},'"',(0,r.kt)("strong",{parentName:"li"},"in"),'": "est\xe1 contido", "\u2282" -> checa se um item est\xe1 contido/pertence \xe0 uma lista')),(0,r.kt)("p",null,"Para mais informa\xe7\xf5es sobre a tabela l\xf3gica, veja as imagens abaixo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Representa\xe7\xe3o visual das opera\xe7\xf5es acima",src:o(7988).Z,width:"1024",height:"779"})),(0,r.kt)("h2",{id:"if-then-else"},"If-Then-Else"),(0,r.kt)("p",null,"Em Python, o c\xf3digo para If statements \xe9 bem limpo e simples. Veja:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"if condition:\n    #-C\xf3digo\nelif condition:\n    #-C\xf3digo\nelse:\n    #-C\xf3digo\n")),(0,r.kt)("p",null,"Para que o c\xf3digo dentro da primeira declara\xe7\xe3o (",(0,r.kt)("em",{parentName:"p"},"if"),") seja executado, \xe9 necess\xe1rio que a condi\xe7\xe3o (",(0,r.kt)("em",{parentName:"p"},"condition"),") seja verdadeira.\nPara que o c\xf3digo dentro da segunda declara\xe7\xe3o (",(0,r.kt)("em",{parentName:"p"},"elif"),") seja executado, \xe9 necess\xe1rio que todas as condi\xe7\xf5es anteriores tenham sido falsas,\ne que a atual seja verdadeira.\nE, para que o c\xf3digo da terceira declara\xe7\xe3o (",(0,r.kt)("em",{parentName:"p"},"else"),") seja executado, todas as declara\xe7\xf5es anteriores devem ter sido falsas."),(0,r.kt)("p",null,"Veja o exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#-Nota: voc\xea pode usar par\xeanteses nas condi\xe7\xf5es e opera\xe7\xf5es para assegurar a ordem de execu\xe7\xe3o\nif (age > 18) and (has_subscription):\n    print("Voc\xea pode assistir \xe0 esse t\xedtulo!")\nelif (age > 18) and (has_subscription == False):\n    print("Voc\xea n\xe3o \xe9 assinante do plano que inclui esse t\xedtulo!")\nelse:\n    print("Esse t\xedtulo \xe9 s\xf3 para maiores de 18 anos!")\n')),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Voc\xea tamb\xe9m pode escrever essas declara\xe7\xf5es como uma opera\xe7\xe3o tern\xe1ria, como no exemplo:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'paridade = "par" if x % 2 == 0 else "\xedmpar"\n'))),(0,r.kt)("h2",{id:"for-loop"},"For Loop"),(0,r.kt)("p",null,"Para iterar sobre um processo N vezes, usamos o la\xe7o ",(0,r.kt)("em",{parentName:"p"},"For"),". Em Python, a l\xf3gica e sintaxe do la\xe7o ",(0,r.kt)("em",{parentName:"p"},"For")," \xe9 um pouco distinta de outras linguagens."),(0,r.kt)("p",null,"A sintaxe \xe9 dada por:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for temporary_variable in iterable:\n    #-C\xf3digo\n")),(0,r.kt)("p",null,"Veja:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"numbers = [1, 2, 3]\n\nfor number in numbers:\n    print(number)\n")),(0,r.kt)("p",null,"Isso significa: para cada n\xfamero na lista ",(0,r.kt)("em",{parentName:"p"},"numbers"),", armazene o n\xfamero na vari\xe1vel tempor\xe1ria ",(0,r.kt)("em",{parentName:"p"},"number"),", e a imprima."),(0,r.kt)("p",null,"Para executar N vezes, e sabendo o tamanho de N, usamos a fun\xe7\xe3o ",(0,r.kt)("em",{parentName:"p"},"range()"),"."),(0,r.kt)("h3",{id:"range"},"range()"),(0,r.kt)("p",null,"A fun\xe7\xe3o embutida ",(0,r.kt)("em",{parentName:"p"},"range()")," \xe9 bastante \xfatil, principalmente em itera\xe7\xf5es como o la\xe7o ",(0,r.kt)("em",{parentName:"p"},"For"),".\nEssa fun\xe7\xe3o toma 3 par\xe2metros: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"range(in\xedcio, fim, salto)"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In\xedcio (opcional):  de onde a contagem come\xe7ar\xe1; O default \xe9 igual \xe0 0."),(0,r.kt)("li",{parentName:"ul"},"Fim (obrigat\xf3rio): onde a contagem ir\xe1 parar;"),(0,r.kt)("li",{parentName:"ul"},"Salto (opcional): o quanto ser\xe1 incrementado;")),(0,r.kt)("p",null,"Na verdade, ",(0,r.kt)("em",{parentName:"p"},"range()")," n\xe3o \xe9 uma fun\xe7\xe3o, e sim um tipo de dados em Python, mas isso n\xe3o conv\xe9m no momento."),(0,r.kt)("p",null,"Para mais informa\xe7\xf5es, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#typesseq-range"},"visite a p\xe1gina de documenta\xe7\xe3o de Python"),"."),(0,r.kt)("p",null,"Veja o exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for i in range(5):\n    print(i)\n\n#->>0\n#->>1\n#->>2\n#->>3\n#->>4\n")),(0,r.kt)("h2",{id:"while-loop"},"While Loop"),(0,r.kt)("p",null,"O la\xe7o ",(0,r.kt)("em",{parentName:"p"},"While")," serve para iterar sobre um bloco de c\xf3digo at\xe9 uma condi\xe7\xe3o ser quebrada.\nA condi\xe7\xe3o \xe9 checada antes mesmo de executar a primeira vez, portanto, se a condi\xe7\xe3o for avaliada '",(0,r.kt)("em",{parentName:"p"},"False"),"' na primeira vez,\no c\xf3digo dentro nunca ser\xe1 executado. "),(0,r.kt)("p",null,"A sintaxe \xe9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"while condition:\n    #-C\xf3digo\n")),(0,r.kt)("p",null,"Veja:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"counter = 0\n\nwhile counter < 5:\n    print(counter)\n    counter += 1\n\n#->>0\n#->>1\n#->>2\n#->>3\n#->>4  \n")),(0,r.kt)("admonition",{title:"Loops Infinitos",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Cuidado para criar condi\xe7\xf5es que possam ser quebradas em la\xe7os ",(0,r.kt)("em",{parentName:"p"},"While"),".\nSe, por exemplo, voc\xea fizesse:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"counter = 0\n\nwhile counter < 5:\n    print(counter)\n    \n")),(0,r.kt)("p",{parentName:"admonition"},"O resultado seria um loop infinito, ou seja, um programa quebrado.\nLembre-se de criar declara\xe7\xf5es para quebrar a condi\xe7\xe3o do seu ",(0,r.kt)("em",{parentName:"p"},"While"),".")),(0,r.kt)("h3",{id:"break"},"break"),(0,r.kt)("p",null,"Python possui palavras chaves no controle de la\xe7os. A palavra ",(0,r.kt)("em",{parentName:"p"},"break")," \xe9 uma delas.\nPara interromper o la\xe7o imediatamente, use ",(0,r.kt)("em",{parentName:"p"},"break"),", como no exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-Nada ser\xe1 impresso no terminal, pois o loop foi interrompido na primeira itera\xe7\xe3o;\ncounter = 0\n\nwhile counter < 5:\n    if counter == 0: break\n")),(0,r.kt)("h3",{id:"continue"},"continue"),(0,r.kt)("p",null,"Outra palavra chave no controle de la\xe7os \xe9 ",(0,r.kt)("em",{parentName:"p"},"continue"),". Pode ser usada para pular o resto do c\xf3digo e voltar\npara a checagem da condi\xe7\xe3o."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"counter = 0\n\nwhile counter < 5:\n    if counter % 2 != 0: \n        print(counter)\n        counter += 1\n    else: \n        counter += 1\n        continue\n#->>1\n#->>3\n")),(0,r.kt)("p",null,"O exemplo acima ir\xe1 imprimir os n\xfameros \xedmpares entre (0, 5)."),(0,r.kt)("admonition",{title:"Dica",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para fazer o mesmo que o c\xf3digo acima de uma forma melhor e mais sucinta, fa\xe7a:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-Neste exemplo, iteramos entre os valores de (1, 5), pulando de 2 em 2. \nfor i in range(1, 5, 2):\n    print(i)\n"))),(0,r.kt)("h2",{id:"conclus\xe3o-"},"Conclus\xe3o \ud83c\udf91"),(0,r.kt)("p",null,"Bom, essa se\xe7\xe3o termina aqui. Caso tenha alguma d\xfavida que n\xe3o conseguiu encontrar online, envie para ",(0,r.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nObrigado pela aten\xe7\xe3o, e bons estudos."))}c.isMDXComponent=!0},7988:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/venn-diagram-boolean-58eb6790b51541cba737c58869286657.jpg"}}]);