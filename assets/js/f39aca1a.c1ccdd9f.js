"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[6580],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>f});var i=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,i)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,i,n=function(e,a){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),c=function(e){var a=i.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},p=function(e){var a=c(e.components);return i.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return o?i.createElement(f,t(t({ref:a},p),{},{components:o})):i.createElement(f,t({ref:a},p))}));function f(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,t=new Array(r);t[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:n,t[1]=l;for(var c=2;c<r;c++)t[c]=o[c];return i.createElement.apply(null,t)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7892:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(7462),n=(o(7294),o(3905));const r={sidebar_position:3,slug:"/docs/extras/programacao-em-c/separacao-de-arquivos-e-makefile",title:"Separa\xe7\xe3o de Arquivos e Makefile"},t="Separa\xe7\xe3o de Arquivos e Makefile",l={unversionedId:"extras/c-programming/separacao-de-arquivos",id:"extras/c-programming/separacao-de-arquivos",title:"Separa\xe7\xe3o de Arquivos e Makefile",description:"Em projetos de constru\xe7\xe3o de software de m\xe9dia/larga escala, \xe9 absolutamente invi\xe1vel escrever todo o c\xf3digo em somente 1 arquivo. Por isso, e por v\xe1rias outras raz\xf5es, como manutenibilidade, melhor organiza\xe7\xe3o e divis\xe3o de tarefas, e seguran\xe7a, a linguagem nos permite dividir o c\xf3digo em arquivos separados,",source:"@site/docs/extras/c-programming/separacao-de-arquivos.md",sourceDirName:"extras/c-programming",slug:"/docs/extras/programacao-em-c/separacao-de-arquivos-e-makefile",permalink:"/docs/extras/programacao-em-c/separacao-de-arquivos-e-makefile",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/docs/extras/programacao-em-c/separacao-de-arquivos-e-makefile",title:"Separa\xe7\xe3o de Arquivos e Makefile"},sidebar:"tutorialSidebar",previous:{title:"Recurs\xe3o",permalink:"/docs/extras/programacao-em-c/recursao"},next:{title:"Intro - Extras",permalink:"/docs/extras/intro"}},s={},c=[{value:"Bibliotecas",id:"bibliotecas",level:2},{value:"Vis\xe3o Geral de Bibliotecas",id:"vis\xe3o-geral-de-bibliotecas",level:3},{value:"Criando Bibliotecas",id:"criando-bibliotecas",level:3},{value:"Compilando Bibliotecas",id:"compilando-bibliotecas",level:3},{value:"Makefile",id:"makefile",level:2},{value:"Conclus\xe3o \ud83c\udf91",id:"conclus\xe3o-",level:2}],p={toc:c},m="wrapper";function d(e){let{components:a,...o}=e;return(0,n.kt)(m,(0,i.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"separa\xe7\xe3o-de-arquivos-e-makefile"},"Separa\xe7\xe3o de Arquivos e Makefile"),(0,n.kt)("p",null,"Em projetos de constru\xe7\xe3o de software de m\xe9dia/larga escala, \xe9 absolutamente invi\xe1vel escrever todo o c\xf3digo em somente 1 arquivo. Por isso, e por v\xe1rias outras raz\xf5es, como manutenibilidade, melhor organiza\xe7\xe3o e divis\xe3o de tarefas, e seguran\xe7a, a linguagem nos permite dividir o c\xf3digo em arquivos separados,\ndesempenhando fun\xe7\xf5es diferentes."),(0,n.kt)("h2",{id:"bibliotecas"},"Bibliotecas"),(0,n.kt)("h3",{id:"vis\xe3o-geral-de-bibliotecas"},"Vis\xe3o Geral de Bibliotecas"),(0,n.kt)("p",null,"Uma biblioteca \xe9, essencialmente, um conjunto de c\xf3digo que serve um prop\xf3sito. Existem diferentes 'tipos' de bibliotecas, de diferentes linguagens.\nEm C, existem bibliotecas muito comuns (e necess\xe1rias para tarefas rotineiras), como ",(0,n.kt)("inlineCode",{parentName:"p"},"stdio.h"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stdlib.h"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"math.h"),", e etc."),(0,n.kt)("p",null,"O conjunto de fun\xe7\xf5es de uma biblioteca \xe9 descrito em um arquivo chamado ",(0,n.kt)("em",{parentName:"p"},"header-file"),", ou cabe\xe7alho. Esse arquivo possui extens\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".h"),", e \xe0s vezes,\nessa interface \xe9 conhecida como API (",(0,n.kt)("em",{parentName:"p"},"application programming interface"),")."),(0,n.kt)("p",null,"Para ter acesso \xe0 uma biblioteca, precisamos acess\xe1-la usando o pr\xe9-processador ",(0,n.kt)("inlineCode",{parentName:"p"},"include"),", como em:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <math.h>\n")),(0,n.kt)("p",null,"\xc9 poss\xedvel n\xe3o s\xf3 instalar bibliotecas feitas por terceiros, mas podemos criar novas bibliotecas. Existem diversas raz\xf5es para criar bibliotecas.\nEntre essas raz\xf5es, est\xe3o a modulariza\xe7\xe3o do c\xf3digo, organiza\xe7\xe3o, reutiliza\xe7\xe3o, e disponibiliza\xe7\xe3o para terceiros."),(0,n.kt)("h3",{id:"criando-bibliotecas"},"Criando Bibliotecas"),(0,n.kt)("p",null,"Para criar uma biblioteca, precisamos de 2 arquivos: um arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".h"),", que cont\xe9m a especifica\xe7\xe3o tudo que ser\xe1 utilizado externamente (cabe\xe7alhos de fun\xe7\xe3o, defini\xe7\xe3o de estruturas, constantes, etc) e um arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".c"),", onde as funcionalidades especificadas no cabe\xe7alho s\xe3o de fato implementadas."),(0,n.kt)("admonition",{title:"Nota",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Ambos os arquivos devem ter o mesmo nome, como por exemplo:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"fisica.c\nfisica.h\n")),(0,n.kt)("p",{parentName:"admonition"},"E, al\xe9m disso, ambos os arquivos devem estar dentro do mesmo diret\xf3rio do arquivo que possui a ",(0,n.kt)("inlineCode",{parentName:"p"},"main()"),".")),(0,n.kt)("p",null,"Para incluir a biblioteca criada, fazemos:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'#include "exemplo.h"\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"<>")," x ",(0,n.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},'""')),(0,n.kt)("p",{parentName:"admonition"},"Perceba que, ao incluir a biblioteca criada, n\xe3o usamos ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," como usamos com a ",(0,n.kt)("inlineCode",{parentName:"p"},"<stdio.h>"),", mas sim as aspas. Isso por que, com as aspas, a busca pela biblioteca ocorre primeiro no diret\xf3rio local, e depois no PATH, enquanto com ",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),", a busca s\xf3 acontece no PATH.")),(0,n.kt)("p",null,"Veja um exemplo da cria\xe7\xe3o de uma biblioteca:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="calculadora.h"',title:'"calculadora.h"'},"#ifndef _CALCULADORA_H\n#define _CALCULADORA_H\n\nfloat soma(float a, float b);\nfloat subtrai(float a, float b);\nfloat multiplica(float a, float b);\nfloat divide(float a, float b);\n\n#endif\n")),(0,n.kt)("p",null,"Observe o arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".h"),":"),(0,n.kt)("admonition",{title:"Problema: Recursividade",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Pode acontecer um problema de recursividade na inclus\xe3o das bibliotecas. "),(0,n.kt)("p",{parentName:"admonition"},"Imagine que voc\xea criou a biblioteca A e a biblioteca B, e incluiu ambas no arquivo da ",(0,n.kt)("inlineCode",{parentName:"p"},"main()"),".\nFazer isso vai fazer com que as bibliotecas A e B fiquem se auto-incluindo, ou seja, um problema de recursividade."),(0,n.kt)("p",{parentName:"admonition"},"Por isso, \xe9 necess\xe1rio adicionar as cl\xe1usulas ",(0,n.kt)("inlineCode",{parentName:"p"},"#ifndef"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"#define")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"#endif"),"."),(0,n.kt)("p",{parentName:"admonition"},"Isso far\xe1 com que a biblioteca seja incluida somente uma vez, evitando a recursividade.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="calculadora.c"',title:'"calculadora.c"'},'#include "calculadora.h"\n\nfloat soma(float a, float b) {\n    return a + b;\n}\nfloat subtrai(float a, float b) {\n    return a - b;\n}\nfloat multiplica(float a, float b) {\n    return a * b;\n}\nfloat divide(float a, float b) {\n    if (b != 0)\n    return a/b;\n    return 0;\n}\n')),(0,n.kt)("p",null,"O arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".c")," inclui o ",(0,n.kt)("inlineCode",{parentName:"p"},".h"),", e implementa as funcionalidades de fato. Agora, podemos fazer um arquivo principal, que faz uso dessa biblioteca rec\xe9m-criada:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="principal.c"',title:'"principal.c"'},'#include "calculadora.h"\n#include <stdio.h>\n\nint main() {\n    printf("Soma: %2.f\\n", soma(1.1, 2.2));\n    printf("Subtra\xe7\xe3o: %2.f\\n", subtrai(1.1, 2.2));\n    printf("Multiplica\xe7\xe3o: %2.f\\n", multiplica(1.1, 2.2));\n    printf("Divis\xe3o: %2.f\\n", divide(1.1, 2.2));\n    return 0;\n}\n')),(0,n.kt)("h3",{id:"compilando-bibliotecas"},"Compilando Bibliotecas"),(0,n.kt)("p",null,"Ap\xf3s terminar os arquivos, da biblioteca, \xe9 necess\xe1rio compil\xe1-los. Para fazer a compila\xe7\xe3o desses arquivos, faremos um processo chamado de 'linkedi\xe7\xe3o',\nonde basicamente estamos 'linkando' todos os arquivos do projeto."),(0,n.kt)("p",null,"Podemos fazer isso em 2 etapas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Compilar os arquivos ",(0,n.kt)("inlineCode",{parentName:"strong"},".c")),":")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gcc -c principal.c calculadora.c")),(0,n.kt)("p",null,"Ap\xf3s esse comando, devem ser gerados arquivos ",(0,n.kt)("inlineCode",{parentName:"p"},".o"),", especificamente um para cada arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".c"),". Caso tenha mais de uma biblioteca, podemos usar o comando:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gcc -c *.c")),(0,n.kt)("p",null,"Para compilar todos os arquivos ",(0,n.kt)("inlineCode",{parentName:"p"},".c")," e gerar um arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".o")," para cada um. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Compilar o Projeto (Linkedi\xe7\xe3o)"),":")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gcc principal.o calculadora.o -o principal")),(0,n.kt)("p",null,"Ou, como anteriormente, se houver mais de uma:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gcc *.o -o principal")),(0,n.kt)("p",null,"Tamb\xe9m podemos fazer os dois passos de uma vez s\xf3, com o comando:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"gcc *.c -o principal")),(0,n.kt)("p",null,"Para mais informa\xe7\xf5es sobre bibliotecas, veja o artigo sobre bibliotecas est\xe1ticas e din\xe2micas."),(0,n.kt)("h2",{id:"makefile"},"Makefile"),(0,n.kt)("p",null,"O Makefile \xe9, essencialmente, uma receita de compila\xe7\xe3o. Um arquivo Makefile cont\xe9m uma s\xe9rie de instru\xe7\xf5es e diretivas para a compila\xe7\xe3o de um projeto, usando a ferramenta de automa\xe7\xe3o de compila\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"make"),". Essa ferramenta usa o arquivo para instalar, desisntalar, remover, limpar e etc, um projeto."),(0,n.kt)("p",null,"O arquivo Makefile deve estar no diret\xf3rio raiz do projeto. Veja o exemplo de um Makefile:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-makefile"},"all: geraos principal\n\nprincipal: principal.o calculadora.o\ngcc principal.o calculadora.o -o principal\n\ngeraos: principal.c calculadora.c\ngcc -c principal.c calculadora.c\n\nclean:\nrm -rf *.o principal\n")),(0,n.kt)("p",null,"Observe o exemplo. Primeiramente, s\xe3o criadas as ",(0,n.kt)("strong",{parentName:"p"},"macros"),", que s\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"all"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"principal"),", etc. Macros s\xe3o palavras que representam regras.\nDepois do ",(0,n.kt)("inlineCode",{parentName:"p"},":"),", s\xe3o definidos os ingredientes da execu\xe7\xe3o do macro. "),(0,n.kt)("p",null,"Por padr\xe3o, a primeira macro de um Makefile ser\xe1 executada quando realizamos o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"make"),". \xc9 um padr\xe3o criar uma macro chamada\n",(0,n.kt)("inlineCode",{parentName:"p"},"all")," para representar o que deve ser chamado."),(0,n.kt)("p",null,"Tamb\xe9m \xe9 comum criar uma macro chamada ",(0,n.kt)("inlineCode",{parentName:"p"},"clean")," (limpar) para realizar uma limpeza no projeto e apagar arquivos quando necess\xe1rio."),(0,n.kt)("p",null,"Para executar as regras de um Makefile, basta utilizar o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"make <nome_do_macro>"),". O ",(0,n.kt)("em",{parentName:"p"},"default")," \xe9 o 1\xb0 macro, no caso, ",(0,n.kt)("inlineCode",{parentName:"p"},"all"),"."),(0,n.kt)("p",null,"Veja um exemplo de um Makefile adaptado:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-makefile"},'CC=gcc\nCFLAGS=-lm\nDEPS= principal.h calculadora.h\nOBJ=principal.o calculadora.o\n\n%.o: %.c $(DEPS)\n    $(CC) -c -o $@ $< $(CFLAGS)\n\nprincipal: $(OBJ)\n    $(CC) -o $@ $^ $(CFLAGS)\n    echo "Compilado!"\n\nclean:\n    rm -rf *.o principal\n    \nrun:\n    ./principal\n')),(0,n.kt)("h2",{id:"conclus\xe3o-"},"Conclus\xe3o \ud83c\udf91"),(0,n.kt)("p",null,"Bom, essa se\xe7\xe3o termina aqui.\nCaso tenha alguma d\xfavida que n\xe3o conseguiu encontrar online, envie para ",(0,n.kt)("a",{parentName:"p",href:"mailto:raphaelsoaresbrasil@gmail.com."},"raphaelsoaresbrasil@gmail.com."),"\nObrigado pela aten\xe7\xe3o, e bons estudos."))}d.isMDXComponent=!0}}]);