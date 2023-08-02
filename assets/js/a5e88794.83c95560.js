"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[410],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>k});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=o.createContext({}),l=function(e){var a=o.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=l(e.components);return o.createElement(d.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=t,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||i;return n?o.createElement(k,r(r({ref:a},c),{},{components:n})):o.createElement(k,r({ref:a},c))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[p]="string"==typeof e?e:t,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8090:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),t=(n(7294),n(3905));const i={sidebar_position:6,slug:"/docs/programacao/python-dictionaries",title:"Python - Dicion\xe1rios",description:"Dicion\xe1rios em Python."},r="Python - Dicion\xe1rios",s={unversionedId:"programacao/python-dicts",id:"programacao/python-dicts",title:"Python - Dicion\xe1rios",description:"Dicion\xe1rios em Python.",source:"@site/docs/programacao/python-dicts.md",sourceDirName:"programacao",slug:"/docs/programacao/python-dictionaries",permalink:"/docs/programacao/python-dictionaries",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/docs/programacao/python-dictionaries",title:"Python - Dicion\xe1rios",description:"Dicion\xe1rios em Python."},sidebar:"tutorialSidebar",previous:{title:"Python - Fun\xe7\xf5es",permalink:"/docs/programacao/python-funcoes"},next:{title:"Python - M\xf3dulos",permalink:"/docs/programacao/python-modules"}},d={},l=[{value:"Declara\xe7\xe3o de Dicion\xe1rios",id:"declara\xe7\xe3o-de-dicion\xe1rios",level:2},{value:"Trabalhando com Dicion\xe1rios",id:"trabalhando-com-dicion\xe1rios",level:2},{value:"Acessando e Atualizando Valores",id:"acessando-e-atualizando-valores",level:3},{value:"M\xe9todos de Dicion\xe1rios",id:"m\xe9todos-de-dicion\xe1rios",level:2},{value:"<code>keys()</code>",id:"keys",level:3},{value:"<code>values()</code>",id:"values",level:3},{value:"<code>items()</code>",id:"items",level:3},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>update()</code>",id:"update",level:3},{value:"<code>pop()</code>",id:"pop",level:3},{value:"<code>clear()</code>",id:"clear",level:3},{value:"Compreens\xe3o de Dicion\xe1rios",id:"compreens\xe3o-de-dicion\xe1rios",level:2}],c={toc:l},p="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(p,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"python---dicion\xe1rios"},"Python - Dicion\xe1rios"),(0,t.kt)("p",null,"Tamb\xe9m chamados de ",(0,t.kt)("em",{parentName:"p"},"hashtables"),", os dicion\xe1rios s\xe3o um tipo de dado extremamente \xfatil em Python. Diferentemente de uma lista, um dicion\xe1rio \xe9\numa cole\xe7\xe3o n\xe3o-ordenada de dados, ou seja, n\xe3o possui \xedndice. No entanto, os dados num dicion\xe1rio s\xe3o organizados em um padr\xe3o de ",(0,t.kt)("inlineCode",{parentName:"p"},"key:value"),"(chave:valor)."),(0,t.kt)("p",null,"Uma forma de entender dicion\xe1rios \xe9 pensar neles como ",(0,t.kt)("strong",{parentName:"p"},"listas associativas"),", onde cada item n\xe3o est\xe1 associado \xe0 um \xedndice, mas \xe0 uma chave, que pode\nter diferentes tipos, desde que sejam imut\xe1veis, como veremos a seguir. "),(0,t.kt)("p",null,"Em suma, dicion\xe1rios s\xe3o um conjunto de valores na forma ",(0,t.kt)("inlineCode",{parentName:"p"},"key:value"),", onde cada chave \xe9 um valor \xfanico no dicion\xe1rio e um tipo imut\xe1vel."),(0,t.kt)("p",null,"Para mais informa\xe7\xf5es sobre dicion\xe1rios, ",(0,t.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/datastructures.html#dictionaries"},"acesse a documenta\xe7\xe3o de Python3"),"."),(0,t.kt)("h2",{id:"declara\xe7\xe3o-de-dicion\xe1rios"},"Declara\xe7\xe3o de Dicion\xe1rios"),(0,t.kt)("p",null,"Para declarar um dicion\xe1rio vazio em Python, siga a sintaxe:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"#-Forma 1:\ndict_1 = dict()\n\n#-Forma 2:\ndict_2 = {}\n")),(0,t.kt)("p",null,"Ambas as formas s\xe3o corretas, embora a forma 1 seja melhor em organiza\xe7\xe3o e leitura de um c\xf3digo mais complexo, tendo em vista que ",(0,t.kt)("strong",{parentName:"p"},"conjuntos"),", outro tipo\nde Python, tamb\xe9m s\xe3o denotados por chaves ",(0,t.kt)("inlineCode",{parentName:"p"},"{}"),". Mais sobre conjuntos nos pr\xf3ximos artigos."),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Tipos de Dados em ",(0,t.kt)("em",{parentName:"mdxAdmonitionTitle"},"Dicts")),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Chaves"),":")),(0,t.kt)("p",{parentName:"admonition"},"As chaves s\xf3 podem ser dos tipos imut\xe1veis de Python, que s\xe3o ",(0,t.kt)("em",{parentName:"p"},"strings"),", ",(0,t.kt)("em",{parentName:"p"},"int"),", ",(0,t.kt)("em",{parentName:"p"},"float")," ou ",(0,t.kt)("em",{parentName:"p"},"tuples"),"."),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Valores"),";")),(0,t.kt)("p",{parentName:"admonition"},"Os valores podem ser de qualquer tipo, inclusive listas, e at\xe9 outros dicion\xe1rios.")),(0,t.kt)("p",null,"Veja um exemplo da declara\xe7\xe3o de dicion\xe1rios com valores:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"names_and_age = names_and_age = {\"Robert\":32, \"Mary\":28, \"John\":29}\nprint(names_and_age)\n\n#->> {'Robert':32, 'Mary':28, 'John':29}\n")),(0,t.kt)("h2",{id:"trabalhando-com-dicion\xe1rios"},"Trabalhando com Dicion\xe1rios"),(0,t.kt)("p",null,"Existem algumas funcionalidades e m\xe9todos que nos ajudam a trabalhar com dicion\xe1rios. Observe:"),(0,t.kt)("h3",{id:"acessando-e-atualizando-valores"},"Acessando e Atualizando Valores"),(0,t.kt)("p",null,"Podemos acessar valores num dicion\xe1rio por meio de sua chave. Fa\xe7a da seguinte forma:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'my_dict = {"key_1":"value_1", "key_2":"value_2"}\n\nvalue = my_dict["key_1"]\n\nprint(value)\n\n#->> value_1\n')),(0,t.kt)("p",null,"Valores tamb\xe9m podem ser atualizados por esse m\xe9todo. Se a chave n\xe3o estiver no dicion\xe1rio, uma nova chave ser\xe1 criada com o valor especificado, e\nse a chave j\xe1 estiver no dicion\xe1rio, o valor antigo ser\xe1 substitu\xeddo pelo novo.\nVeja o exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"meals_and_prices = {\"Spaghetti\":10, \"Steak and Potatoes\":12, \"Chicken and Salad\":9}\nprint(meals_and_prices)\n\n#-Atualizando o valor de 'Steak and Potatoes':\nmeals_and_prices[\"Steak and Potatoes\"] = 11\nprint(meals_and_prices)\n\n#-Criando a chave 'French Fries' com o valor inicial de $6:\nmeals_and_prices[\"French Fries\"] = 6\nprint(meals_and_prices)\n\n#->> {'Spaghetti': 10, 'Steak and Potatoes': 12, 'Chicken and Salad': 9}\n#->> {'Spaghetti': 10, 'Steak and Potatoes': 11, 'Chicken and Salad': 9}\n#->> {'Spaghetti': 10, 'Steak and Potatoes': 11, 'Chicken and Salad': 9, 'French Fries': 6}\n")),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,t.kt)("em",{parentName:"mdxAdmonitionTitle"},"KeyError")),(0,t.kt)("p",{parentName:"admonition"},"Tentar acessar uma chave que n\xe3o existe numa express\xe3o ou opera\xe7\xe3o levar\xe1 \xe0 um ",(0,t.kt)("em",{parentName:"p"},"KeyError"),". Para evitar, use o operador ",(0,t.kt)("inlineCode",{parentName:"p"},"in")," para checar se a chave procurada existe.")),(0,t.kt)("h2",{id:"m\xe9todos-de-dicion\xe1rios"},"M\xe9todos de Dicion\xe1rios"),(0,t.kt)("p",null,"Alguns m\xe9todos s\xe3o semelhantes aos m\xe9todos de listas, e outros s\xe3o exclusivos. Veja:"),(0,t.kt)("h3",{id:"keys"},(0,t.kt)("inlineCode",{parentName:"h3"},"keys()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"keys()")," retorna um ",(0,t.kt)("strong",{parentName:"p"},"objeto com uma lista de todas as chaves do dicion\xe1rio"),". N\xe3o toma argumentos. N\xe3o \xe9 poss\xedvel modificar esse objeto como uma lista, e este reflete as mudan\xe7as feitas no dicion\xe1rio. Pode ser convertido numa lista. Veja:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"meals_and_prices = {\"Spaghetti\":10, \"Steak and Potatoes\":12, \"Chicken and Salad\":9}\n\nmeals_dict_object = meals_and_prices.keys()\nmeals_list = list(meals_and_prices.keys())\n\nprint(meals_dict_object)\nprint(meals_list)\n\nmeals_and_prices[\"French Fries\"] = 6\n\nprint(meals_dict_object)\nprint(meals_list)\n\n#->> dict_keys(['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad'])\n#->> ['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad']\n#->> dict_keys(['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad', 'French Fries'])\n#->> ['Spaghetti', 'Steak and Potatoes', 'Chicken and Salad']\n\n")),(0,t.kt)("h3",{id:"values"},(0,t.kt)("inlineCode",{parentName:"h3"},"values()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"values()")," \xe9 semelhante ao m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"keys()"),", por\xe9m retorna ",(0,t.kt)("strong",{parentName:"p"},"um objeto com uma lista de todos os valores do dicion\xe1rio"),". Assim como o anterior,\nreflete as modifica\xe7\xf5es feitas no dicion\xe1rio. Veja:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}\n\nprices_dict_object = meals_and_prices.values()\nprices_list = list(meals_and_prices.values())\n\nprint(prices_dict_object)\nprint(prices_list)\n\nmeals_and_prices["French Fries"] = 6\n\nprint(prices_dict_object)\nprint(prices_list)\n\n#->> dict_values([10, 12, 9])\n#->> [10, 12, 9]\n#->> dict_values([10, 12, 9, 6])\n#->> [10, 12, 9]\n')),(0,t.kt)("h3",{id:"items"},(0,t.kt)("inlineCode",{parentName:"h3"},"items()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"items()")," tamb\xe9m \xe9 semelhante aos 2 anteriores. Este retorna ",(0,t.kt)("strong",{parentName:"p"},"um objeto com uma lista de tuplas com os pares ",(0,t.kt)("inlineCode",{parentName:"strong"},"key:value")," do dicion\xe1rio"),". Assim\ncomo os dois anteriores, reflete as modifica\xe7\xf5es do dicion\xe1rio. Veja:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"meals_and_prices = {\"Spaghetti\":10, \"Steak and Potatoes\":12, \"Chicken and Salad\":9}\n\nitems_dict_object = meals_and_prices.items()\nitems_list = list(meals_and_prices.items())\n\nprint(items_dict_object)\nprint(items_list)\n\nmeals_and_prices[\"French Fries\"] = 6\n\nprint(items_dict_object)\nprint(items_list)\n\n#->> dict_items([('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9)])\n#->> [('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9)]\n#->> dict_items([('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9), ('French Fries', 6)])\n#->> [('Spaghetti', 10), ('Steak and Potatoes', 12), ('Chicken and Salad', 9)]\n")),(0,t.kt)("h3",{id:"get"},(0,t.kt)("inlineCode",{parentName:"h3"},"get()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"get()")," funciona para obter um valor do dicion\xe1rio. Toma 2 argumentos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"1\xb0 (obrigat\xf3rio): chave do valor desejado "),(0,t.kt)("li",{parentName:"ul"},"2\xb0 (opcional): valor de retorno caso a chave n\xe3o exista (",(0,t.kt)("em",{parentName:"li"},"default")," \xe9 ",(0,t.kt)("em",{parentName:"li"},"None"),")")),(0,t.kt)("p",null,"Veja um exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}\n\nprint(meals_and_prices.get("Spaghetti"))\nprint(meals_and_prices.get("French Fries"))\nprint(meals_and_prices.get("French Fries", "\'French Fries\' n\xe3o est\xe1 no dict."))\n\n#->> 10\n#->> None\n#->>\'French Fries\' n\xe3o est\xe1 no dict.\n')),(0,t.kt)("h3",{id:"update"},(0,t.kt)("inlineCode",{parentName:"h3"},"update()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"update()")," combina dois dicion\xe1rios, atualizando o dicion\xe1rio onde o m\xe9todo foi aplicado com os valores do dicion\xe1rio passado como argumento.\nToma 1 argumento:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"1\xb0 (obrigat\xf3rio): dicion\xe1rio com dados a serem acrescentados")),(0,t.kt)("p",null,"Se existir a mesma chave em ambos os dicion\xe1rios, o valor da chave no dicion\xe1rio a ser atualizado ser\xe1 substitu\xeddo pelo valor da chave no dicion\xe1rio\npassado como argumento."),(0,t.kt)("p",null,"Veja um exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}\n\nmore_meals_and_prices = {"Hamburguer":8, "Spaghetti":9, "Fish and Rice":10}\n\nmeals_and_prices.update(more_meals_and_prices)\n\nprint(meals_and_prices)\n\n#->> {\'Spaghetti\': 9, \'Steak and Potatoes\': 12, \'Chicken and Salad\': 9, \'Hamburguer\': 8, \'Fish and Rice\': 10}\n')),(0,t.kt)("h3",{id:"pop"},(0,t.kt)("inlineCode",{parentName:"h3"},"pop()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"pop()")," remove uma chave e retorna o valor correspondente \xe0 essa chave. Toma 2 argumentos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"1\xb0 (obrigat\xf3rio): a chave a ser removida"),(0,t.kt)("li",{parentName:"ul"},"2\xb0 (opcional): o valor retornado caso a chave n\xe3o exista")),(0,t.kt)("p",null,"Como mencionado, esse m\xe9todo retorna o valor referente \xe0 chave removida. Veja um exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}\n\nprint(meals_and_prices.pop("Steak and Potatoes"))\nprint(meals_and_prices.pop("French Fries", "French Fries n\xe3o est\xe1 no dict."))\nprint(meals_and_prices)\n\n#->> 12\n#->> French Fries n\xe3o est\xe1 no dict.\n#->> {\'Spaghetti\': 10, \'Chicken and Salad\': 9}\n')),(0,t.kt)("h3",{id:"clear"},(0,t.kt)("inlineCode",{parentName:"h3"},"clear()")),(0,t.kt)("p",null,"O m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"clear()")," remove todos os itens dentro do dicion\xe1rio. N\xe3o toma nenhum argumento. Veja:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'meals_and_prices = {"Spaghetti":10, "Steak and Potatoes":12, "Chicken and Salad":9}\nmeals_and_prices.clear()\n\nprint(meals_and_prices)\n\n#->> {}\n')),(0,t.kt)("h2",{id:"compreens\xe3o-de-dicion\xe1rios"},"Compreens\xe3o de Dicion\xe1rios"),(0,t.kt)("p",null,"Assim como listas, podemos performar compreens\xf5es para definir dicion\xe1rios, o que \xe9 uma funcionalidade bastante \xfatil."))}m.isMDXComponent=!0}}]);