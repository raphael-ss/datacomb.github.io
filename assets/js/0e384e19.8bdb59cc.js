"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[671],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>g});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),l=function(e){var a=t.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},u=function(e){var a=l(e.components);return t.createElement(d.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||n;return o?t.createElement(g,s(s({ref:a},u),{},{components:o})):t.createElement(g,s({ref:a},u))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9881:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=o(7462),r=(o(7294),o(3905));const n={sidebar_position:1,slug:"/",id:"Intro"},s="DataComb - Introdu\xe7\xe3o",i={unversionedId:"Intro",id:"Intro",title:"DataComb - Introdu\xe7\xe3o",description:"Apresenta\xe7\xf5es Iniciais \ud83d\udcdc",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",id:"Intro"},sidebar:"tutorialSidebar",next:{title:"Sobre o Autor",permalink:"/Author"}},d={},l=[{value:"Apresenta\xe7\xf5es Iniciais \ud83d\udcdc",id:"apresenta\xe7\xf5es-iniciais-",level:2},{value:"Instala\xe7\xf5es Necess\xe1rias \u2757",id:"instala\xe7\xf5es-necess\xe1rias-",level:2},{value:"Anaconda \ud83d\udc0d",id:"anaconda-",level:3},{value:"Jupyter Notebook \ud83c\udf14",id:"jupyter-notebook-",level:3},{value:"SQLite \ud83e\udeb6",id:"sqlite-",level:3}],u={toc:l},p="wrapper";function c(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datacomb---introdu\xe7\xe3o"},"DataComb - Introdu\xe7\xe3o"),(0,r.kt)("h2",{id:"apresenta\xe7\xf5es-iniciais-"},"Apresenta\xe7\xf5es Iniciais \ud83d\udcdc"),(0,r.kt)("p",null,"Ol\xe1!"),(0,r.kt)("p",null,"Caso n\xe3o conhe\xe7a, esta \xe9 uma p\xe1gina de documenta\xe7\xe3o e estudo de Ci\xeancia de Dados, Matem\xe1tica, e t\xf3picos como Programa\xe7\xe3o e Vis\xe3o Computacional."),(0,r.kt)("p",null,"Escrita pelo estudante de Ci\xeancia da Computa\xe7\xe3o da UFES (Universidade Federal do Esp\xedrito Santo), @raphael-ss."),(0,r.kt)("p",null,"Vamos incluir projetos b\xe1sicos e intermedi\xe1rios, uso de bibliotecas e m\xf3dulos como Numpy, OpenCV, e outros, padr\xf5es de escrita e boas pr\xe1ticas, e, claro, os t\xf3picos dentro da \xe1rea."),(0,r.kt)("p",null,"Nessa se\xe7\xe3o, vamos falar sobre as instala\xe7\xf5es necess\xe1rias para os procedimentos e projetos, sobre as ferramentas que vamos usar e sobre o que podemos fazer com isso."),(0,r.kt)("p",null,"Estamos utilizando o kernel Linux (especificamente Ubuntu) para desenvolvimento, projetos e instala\xe7\xf5es, por v\xe1rios motivos. O principal sendo que, felizmente ou infelizmente, Linux \xe9 o melhor lidando com programa\xe7\xe3o e computa\xe7\xe3o em geral."),(0,r.kt)("p",null,"Caso n\xe3o tenha esse kernel na sua m\xe1quina, basta fazer um dual boot. N\xe3o demora muito e n\xe3o \xe9 trabalhoso, pode confiar. Para ver como, basta\n",(0,r.kt)("a",{parentName:"p",href:"https://tecnoblog.net/responde/como-fazer-um-dual-boot-com-windows-e-linux/"},"clicar aqui"),"."),(0,r.kt)("p",null,"Caso tenha alguma d\xfavida espec\xedfica, sugest\xe3o ou corre\xe7\xe3o que queira enviar, basta mandar para ",(0,r.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nBom, seguindo com as instala\xe7\xf5es."),(0,r.kt)("h2",{id:"instala\xe7\xf5es-necess\xe1rias-"},"Instala\xe7\xf5es Necess\xe1rias \u2757"),(0,r.kt)("h3",{id:"anaconda-"},"Anaconda \ud83d\udc0d"),(0,r.kt)("p",null,"Iremos trabalhar com as ferramentas usadas na pr\xe1tica, seja em mercado de trabalho ou pesquisa, para que voc\xea se acostume ao longo do\nprocesso a interagir com essas ferramentas, e tenha um gostinho de como \xe9 na pr\xe1tica."),(0,r.kt)("p",null,"Inicialmente, vamos instalar a distro de Python e gerenciador de pacotes ",(0,r.kt)("strong",{parentName:"p"},"Anaconda"),". Esse software engloba um gerenciador de pacotes e bibliotecas, como o ",(0,r.kt)("em",{parentName:"p"},"pip"),", diversas IDE's para escolher, e a linguagem Python (vers\xf5es desde Python 2.7 at\xe9 Python 3.11), com m\xfaltiplas bibliotecas de Data Science\ninclu\xeddas. "),(0,r.kt)("p",null,"Antes de tudo, vamos rodar alguns comandos para assegurar que seu pc est\xe1 atualizado. Abra o terminal e siga as instru\xe7\xf5es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt update\n")),(0,r.kt)("p",null,"E tamb\xe9m:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt upgrade\n")),(0,r.kt)("p",null,"Voc\xea tamb\xe9m pode checar se j\xe1 tem Python instalado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python3 --version\n")),(0,r.kt)("p",null,"Caso tenha, n\xe3o h\xe1 problema; estaremos usando o ambiente da Anaconda para desenvolver projetos, e isso n\xe3o vai interferir na instala\xe7\xe3o."),(0,r.kt)("admonition",{title:"Observa\xe7\xe3o",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\xc9 necess\xe1rio que voc\xea tenha privil\xe9gio ",(0,r.kt)("em",{parentName:"p"},"sudo"),", isto \xe9, seja um administrador. "),(0,r.kt)("p",{parentName:"admonition"},"Caso n\xe3o seja, n\xe3o vai ser capaz de fazer as instala\xe7\xf5es.")),(0,r.kt)("p",null,"Primeiro, vamos trocar para o diret\xf3rio ",(0,r.kt)("em",{parentName:"p"},"tmp"),", onde as instala\xe7\xf5es feitas somem ap\xf3s o computador for desligado."),(0,r.kt)("p",null,"N\xe3o vamos ter que reinstalar toda vez, s\xf3 vamos instalar o ",(0,r.kt)("em",{parentName:"p"},"bash")," do Anaconda nesse diret\xf3rio, e s\xf3 vamos utilizar uma vez."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /tmp\n")),(0,r.kt)("p",null,"Agora, usaremos o ",(0,r.kt)("em",{parentName:"p"},"curl")," para buscar o arquivo de instala\xe7\xe3o. Verifique se tem curl instalado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --version\n")),(0,r.kt)("p",null,"Caso n\xe3o possua, ",(0,r.kt)("a",{parentName:"p",href:"https://linuxhint.com/install_curl_ubuntu/"},"clique aqui")," para ver um tutorial de instala\xe7\xe3o.\nContinuando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://repo.anaconda.com/archive/Anaconda3-2023.03-1-Linux-x86_64.sh --output anaconda.sh\n")),(0,r.kt)("admonition",{title:"Observa\xe7\xe3o",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Perceba que o curl est\xe1 indo buscar o arquivo no endere\xe7o especificado. Se atente \xe0 um fato importante: procure instalar sempre a vers\xe3o mais\natualizada do software. Isso trar\xe1 menos problemas de in\xedcio. Esse link \xe9 a vers\xe3o mais atualizada para Linux at\xe9 o momento atual. "),(0,r.kt)("p",{parentName:"admonition"},"Recomendo que procure saber se existe uma vers\xe3o nova antes de instalar. Para ser redirecionado para o \xedndice de vers\xf5es,\n",(0,r.kt)("a",{parentName:"p",href:"https://repo.anaconda.com/archive/"},"clique aqui"),".")),(0,r.kt)("p",null,"Agora, depois de conclu\xeddo o processo, rode este comando para conferir se a instala\xe7\xe3o se deu corretamente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sha256sum anaconda.sh\n")),(0,r.kt)("p",null,"O ",(0,r.kt)("em",{parentName:"p"},"output")," dever\xe1 ser a mesma s\xe9rie de caracteres especificada no \xedndice de vers\xf5es."),(0,r.kt)("p",null,"Agora, vamos rodar o script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash anaconda.sh\n")),(0,r.kt)("p",null,"Voc\xea ver\xe1 um contrato de termos de usu\xe1rio. Se quiser, leia, e des\xe7a at\xe9 o final.\nVoc\xea ver\xe1 algo como:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-output"},"Do you approve the license terms? [yes|no]\n")),(0,r.kt)("p",null,"Se voc\xea concordar, digite ",(0,r.kt)("em",{parentName:"p"},"yes")," e seguiremos com a instala\xe7\xe3o.\nVoc\xea ver\xe1 um ",(0,r.kt)("em",{parentName:"p"},"output")," perguntando onde voc\xea quer instalar. Caso queira especificar um local diferente do sugerido, escreva o caminho do diret\xf3rio.\nCaso n\xe3o, aperte ",(0,r.kt)("em",{parentName:"p"},"Enter"),". Sugiro que instale no local recomendado."),(0,r.kt)("p",null,"A instala\xe7\xe3o ir\xe1 acontecer, \xe9 s\xf3 esperar."),(0,r.kt)("p",null,"Depois de instalado, o programa vai te perguntar se quer inicializar o Anaconda. Digite ",(0,r.kt)("em",{parentName:"p"},"yes"),"."),(0,r.kt)("p",null,"Agora, saia do diret\xf3rio /tmp e v\xe1 at\xe9 o diret\xf3rio de instala\xe7\xe3o, e rode o seguinte comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ source ~/.bashrc\n")),(0,r.kt)("p",null,"Isso te levar\xe1 ao ambiente de programa\xe7\xe3o base do Anaconda.\nDigite o comando seguinte para verificar o que j\xe1 est\xe1 dispon\xedvel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ conda list\n")),(0,r.kt)("p",null,"Voc\xea ver\xe1 uma lista com todos os pacotes dispon\xedveis ap\xf3s a instala\xe7\xe3o do Anaconda."),(0,r.kt)("p",null,"Para ativar o ",(0,r.kt)("strong",{parentName:"p"},"Anaconda Navigator"),", ambiente de desenvolvimento, rode o comando dentro da pasta que voc\xea instalou:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ anaconda-navigator\n")),(0,r.kt)("p",null,"Voc\xea dever\xe1 ver algo assim:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anaconda-navigator",src:o(172).Z,width:"1922",height:"1057"})),(0,r.kt)("p",null,"Pronto! Agora, essa instala\xe7\xe3o est\xe1 completa. Vamos falar sobre a IDE que usaremos."),(0,r.kt)("h3",{id:"jupyter-notebook-"},"Jupyter Notebook \ud83c\udf14"),(0,r.kt)("p",null,"O Jupyter Notebook (\xe0s vezes chamado de IPython Notebook) \xe9 uma IDE que tem uma forma popular de escrever e executar c\xf3digo Python, especialmente para an\xe1lise de dados, ci\xeancia de dados e aprendizado de m\xe1quina. "),(0,r.kt)("p",null,"Os Jupyter Notebooks s\xe3o f\xe1ceis de usar porque permitem que voc\xea ",(0,r.kt)("strong",{parentName:"p"},"execute o c\xf3digo e revise rapidamente o resultado"),". Esse processo iterativo \xe9 fundamental para a an\xe1lise de dados e facilita o teste de hip\xf3teses e o registro dos resultados (como um caderno de anota\xe7\xf5es)."),(0,r.kt)("p",null,"Por exemplo, vamos supor que voc\xea esteja visualizando um conjunto de dados sobre expectativa de vida por pa\xeds. Voc\xea s\xf3 quer mostrar alguns pa\xedses, mas n\xe3o tem certeza de quais selecionar. Com um Jupyter Notebook, voc\xea pode ",(0,r.kt)("strong",{parentName:"p"},"experimentar v\xe1rias vers\xf5es e compar\xe1-las facilmente"),". Melhor ainda, voc\xea tem um ",(0,r.kt)("strong",{parentName:"p"},"registro escrito")," do que j\xe1 tentou, que pode mostrar a um colega de equipe (ou para si mesmo no futuro). Esse \xe9 apenas um exemplo das muitas vantagens de trabalhar em um ambiente semelhante a um caderno de anota\xe7\xf5es."),(0,r.kt)("p",null,"O Jupyter Notebook usa um kernel de back-end chamado ",(0,r.kt)("strong",{parentName:"p"},"IPython"),". O 'I' significa 'Interativo', o que significa que um programa ou script pode ser dividido em partes menores e essas partes podem ser executadas independentemente do restante do programa."),(0,r.kt)("p",null,"Voc\xea n\xe3o precisa se preocupar com a diferen\xe7a entre Python e IPython. A coisa importante a saber \xe9 que voc\xea pode executar pequenos trechos de c\xf3digo, o que pode ser \xfatil ao trabalhar com dados."),(0,r.kt)("p",null,"O Jupyter Notebook \xe9 um tipo de Ambiente de Desenvolvimento Integrado (IDE). As IDEs s\xe3o locais para escrever c\xf3digo que oferecem alguns recursos de suporte. Quase todas as IDEs fornecem ",(0,r.kt)("strong",{parentName:"p"},"realce de sintaxe"),", ",(0,r.kt)("strong",{parentName:"p"},"depura\xe7\xe3o")," (debugger) e ",(0,r.kt)("strong",{parentName:"p"},"preenchimento autom\xe1tico de c\xf3digo"),". O Jupyter Notebook tamb\xe9m oferece ",(0,r.kt)("strong",{parentName:"p"},"documenta\xe7\xe3o de ajuda incorporada")," e ",(0,r.kt)("strong",{parentName:"p"},"introspec\xe7\xe3o")," (ou seja, voc\xea pode verificar os par\xe2metros de cada comando) e ",(0,r.kt)("strong",{parentName:"p"},"exibi\xe7\xe3o de gr\xe1ficos e imagens embutida no pr\xf3prio notebook"),"."),(0,r.kt)("h3",{id:"sqlite-"},"SQLite \ud83e\udeb6"),(0,r.kt)("p",null,"O SQLite \xe9 um software de banco de dados, ou seja, um RDBMS. \xc9 um software que permite que os usu\xe1rios interajam com um banco de dados relacional. No SQLite, um banco de dados \xe9 armazenado em um \xfanico arquivo - uma caracter\xedstica que o distingue de outros mecanismos de banco de dados. Esse fato permite um alto grau de acessibilidade: copiar um banco de dados n\xe3o \xe9 mais complicado do que copiar o arquivo que armazena os dados, compartilhar um banco de dados pode significar enviar um anexo de e-mail."),(0,r.kt)("p",null,"Esse programa \xe9 mencionado ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentos/banco-de-dados-visao-geral"},"neste artigo")," do site, e em artigos sobre SQL."),(0,r.kt)("p",null,"A portabilidade caracter\xedstica distintiva do SQLite, infelizmente, o torna uma escolha inadequada quando muitos usu\xe1rios diferentes est\xe3o atualizando a tabela ao mesmo tempo (para manter a integridade dos dados, apenas um usu\xe1rio pode escrever no arquivo por vez). Al\xe9m disso, pode ser necess\xe1rio um esfor\xe7o adicional para garantir a seguran\xe7a dos dados privados devido \xe0s mesmas caracter\xedsticas que tornam o SQLite acess\xedvel. "),(0,r.kt)("p",null,"Al\xe9m disso, o SQLite n\xe3o oferece exatamente a mesma funcionalidade que muitos outros sistemas de banco de dados, limitando alguns recursos avan\xe7ados oferecidos por outros sistemas de banco de dados relacionais. "),(0,r.kt)("p",null,"Por fim, o SQLite n\xe3o valida os tipos de dados. Enquanto muitos outros softwares de banco de dados rejeitariam dados que n\xe3o est\xe3o em conformidade com o esquema de uma tabela, o SQLite permite que os usu\xe1rios armazenem dados de qualquer tipo em qualquer coluna (sim, n\xe3o \xe9 muito p\u0155atico, mas \xe9 remedi\xe1vel)."),(0,r.kt)("p",null,"Considerando isso, os benef\xedcios de poder acessar e usar um banco de dados sem o envolvimento de uma aplica\xe7\xe3o de servidor s\xe3o enormes. SQLite \xe9 usado no mundo todo para testagem, desenvolvimento, e em qualquer cen\xe1rio que faz sentido que o banco de dados esteja no mesmo local que o c\xf3digo."),(0,r.kt)("p",null,"Vamos us\xe1-lo em alguns artigos e projetos. Para instalar, siga os procedimentos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt update\n")),(0,r.kt)("p",null,"E,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt upgrade\n")),(0,r.kt)("p",null,"Para atualizar pacotes do sistema (isso evita dor de cabe\xe7a de vez em quando)."),(0,r.kt)("p",null,"Fa\xe7a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install sqlite3\n")),(0,r.kt)("p",null,"Ap\xf3s a instala\xe7\xe3o, digite o comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sqlite3 newdb.sqlite\n")),(0,r.kt)("p",null,"Voc\xea ver\xe1 algo como:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SQLite version 3.40.1 2022-12-28 14:03:47\nEnter ".help" for usage hints.\nsqlite> \n')),(0,r.kt)("p",null,"Isso significa que a instala\xe7\xe3o funcionou. Para sair, digite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sqlite> .exit\n")),(0,r.kt)("p",null,"Pronto! SQLite est\xe1 instalado. Para mais informa\xe7\xf5es sobre o software, ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/index.html"},"clique aqui"),"."))}c.isMDXComponent=!0},172:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/anaconda-navigator-1b6c2fbf51c4fd32d4fec65f783be8da.png"}}]);