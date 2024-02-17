"use strict";(self.webpackChunkdatacomb=self.webpackChunkdatacomb||[]).push([[5548],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=m(e.components);return o.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||t;return n?o.createElement(h,s(s({ref:a},c),{},{components:n})):o.createElement(h,s({ref:a},c))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,s=new Array(t);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<t;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8898:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const t={sidebar_position:3,slug:"/docs/programacao-2/python-pandas-2",title:"Python - Pandas 2",description:"Continua\xe7\xe3o de Pandas"},s="Python - Pandas \ud83d\udc3c",i={unversionedId:"prog2/python-pandas-2",id:"prog2/python-pandas-2",title:"Python - Pandas 2",description:"Continua\xe7\xe3o de Pandas",source:"@site/docs/prog2/python-pandas-2.md",sourceDirName:"prog2",slug:"/docs/programacao-2/python-pandas-2",permalink:"/docs/programacao-2/python-pandas-2",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/docs/programacao-2/python-pandas-2",title:"Python - Pandas 2",description:"Continua\xe7\xe3o de Pandas"},sidebar:"tutorialSidebar",previous:{title:"Python - Pandas",permalink:"/docs/programacao-2/python-pandas"},next:{title:"Python - Matplotlib e Seaborn",permalink:"/docs/programacao-2/python-matplotlib"}},l={},m=[{value:"Manipula\xe7\xe3o de <em>DataFrames</em>",id:"manipula\xe7\xe3o-de-dataframes",level:2},{value:"Selecionando Colunas",id:"selecionando-colunas",level:3},{value:"Selecionando Linhas",id:"selecionando-linhas",level:3},{value:"Fixando \xcdndices",id:"fixando-\xedndices",level:3},{value:"Modificando <em>DataFrames</em>",id:"modificando-dataframes",level:3},{value:"Renomeando Colunas",id:"renomeando-colunas",level:3},{value:"Agregando Valores",id:"agregando-valores",level:2},{value:"M\xe9todos de <em>DataFrames</em>",id:"m\xe9todos-de-dataframes",level:2}],c={toc:m},p="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python---pandas-"},"Python - Pandas \ud83d\udc3c"),(0,r.kt)("p",null,"Caso n\xe3o tenha visto, foi postado um artigo de ",(0,r.kt)("a",{parentName:"p",href:"/docs/programacao-2/python-pandas.md"},"introdu\xe7\xe3o \xe0 Pandas"),", que cont\xe9m um overview da biblioteca, raz\xf4es fort\xedssimas para us\xe1-la, e manipula\xe7\xe3o de ",(0,r.kt)("em",{parentName:"p"},"Series"),", um dos objetos centrais da biblioteca. "),(0,r.kt)("p",null,"Aqui, cobrirei a manipula\xe7\xe3o de ",(0,r.kt)("em",{parentName:"p"},"DataFrames"),", assim como diversos m\xe9todos bastante \xfateis que facilitam o trabalho na rotina. "),(0,r.kt)("h2",{id:"manipula\xe7\xe3o-de-dataframes"},"Manipula\xe7\xe3o de ",(0,r.kt)("em",{parentName:"h2"},"DataFrames")),(0,r.kt)("p",null,"Dado o formato dtabular dos dados num DF, queremos ser capazes de manupular as colunas e as linhas para obter as informa\xe7\xf5es necess\xe1rias, assim como para exibir os dados de uma forma mais clara."),(0,r.kt)("h3",{id:"selecionando-colunas"},"Selecionando Colunas"),(0,r.kt)("p",null,"Podemos selecionar uma coluna de 2 formas: fazendo ",(0,r.kt)("inlineCode",{parentName:"p"},"df.name")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"df['name']"),". Para usar o 1\xb0, o nome da coluna precisa ser compat\xedvel com o formato de vari\xe1vel que Python espera, sem espa\xe7os ou s\xedmbolos. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame([\n  ['January', 100, 100, 23, 100],\n  ['February', 51, 45, 145, 45],\n  ['March', 81, 96, 65, 96],\n  ['April', 80, 80, 54, 180],\n  ['May', 51, 54, 54, 154],\n  ['June', 112, 109, 79, 129]],\n  columns=['month', 'clinic_east',\n           'clinic_north', 'clinic_south',\n           'clinic_west']\n)\nclinic_north = df.clinic_north\nclinic_north_and_south = df[['clinic_north', 'clinic_south']]\nprint(type(clinic_north))\nprint(type(clinic_north_and_south))\n\n#-<class 'pandas.core.series.Series'>\n#-<class 'pandas.core.frame.DataFrame'>\n")),(0,r.kt)("h3",{id:"selecionando-linhas"},"Selecionando Linhas"),(0,r.kt)("p",null,"Para selecionar linhas, ou registros, podemos usar o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"iloc[]"),". Observe, no contexto do exemplo anterior:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\nmarch = df.iloc[2]\nprint(march)\n\n'''\nmonth           March\nclinic_east        81\nclinic_north       96\nclinic_south       65\nclinic_west        96\nName: 2, dtype: object\n'''\n#-Observe que, assim como selecionando colunas, o resultado tamb\xe9m \xe9 uma Series\n")),(0,r.kt)("p",null,"Podemos tamb\xe9m selecionar fazendo ",(0,r.kt)("em",{parentName:"p"},"slicing"),", assim como fazemos com listas, como ",(0,r.kt)("inlineCode",{parentName:"p"},"iloc[a:b]")," (",(0,r.kt)("inlineCode",{parentName:"p"},"b")," n\xe3o inclusivo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\napril_may_june = df.iloc[3:6]\nprint(april_may_june)\n\n'''\n   month  clinic_east  clinic_north  clinic_south  clinic_west\n3  April           80            80            54          180\n4    May           51            54            54          154\n5   June          112           109            79          129\n'''\n#-Perceba que o resultado \xe9 um DF\n")),(0,r.kt)("p",null,"Podemos selecionar colunas usando ",(0,r.kt)("strong",{parentName:"p"},"l\xf3gica"),". Isto \xe9, selecionar conjuntos menores de dados que obedecem \xe0 uma condi\xe7\xe3o pr\xe9-estabelecida. Esse tipo de sele\xe7\xe3o segue o padr\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"df[df.column_name == column_value]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\njanuary = df[df.month == 'January']\nprint(january)\n\n'''\n     month  clinic_east  clinic_north  clinic_south  clinic_west\n0  January          100           100            23          100\n'''\n")),(0,r.kt)("p",null,"Para express\xf5es l\xf3gicas mais complexas, podemos usar operadores l\xf3gicos:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"&"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"and"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"|"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"or")))),(0,r.kt)("p",null,"Observe um exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\nmarch_april = df[(df.month == 'March') | (df.month == 'April')]\nprint(march_april)\n\n'''\n   month  clinic_east  clinic_north  clinic_south  clinic_west\n2  March           81            96            65           96\n3  April           80            80            54          180\n'''\n")),(0,r.kt)("p",null,"Pode ser usado tamb\xe9m o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"isin()")," para selecionar os valores presentes em uma lista de valores poss\xedveis. Observe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\njanuary_february_march = df[df.month.isin(['January', 'February', 'March','Bob'])]\nprint(january_february_march)\n\n'''\n      month  clinic_east  clinic_north  clinic_south  clinic_west\n0   January          100           100            23          100\n1  February           51            45           145           45\n2     March           81            96            65           96\n'''\n#-Perceba que n\xe3o existe o valor 'Bob' na coluna 'month', e ele simplesmente n\xe3o \xe9 retornado;\n")),(0,r.kt)("h3",{id:"fixando-\xedndices"},"Fixando \xcdndices"),(0,r.kt)("p",null,"Quando selecionamos um conjunto de registros de um DF, eles mant\xe9m seu \xedndices originais, o que dificulta o trabalho com o novo conjunto, assim como a utiliza\xe7\xe3o de ",(0,r.kt)("inlineCode",{parentName:"p"},"iloc"),". "),(0,r.kt)("p",null,"Para isso, podemos 'setar' os \xedndices novamente, a partir de 0, usando o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"reset_index()"),", com os argumentos ",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"inplace"),", que denotam se a nova coluna criada (index) deve ser removida e se a modifica\xe7\xe3o deve ser feita no DF correspondente ou retornada num DF novo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\ndf2 = df.loc[[1, 3, 5]]\nprint(df2)\ndf2.reset_index(inplace=True, drop=True)\nprint(df2)\n\n'''\nANTES:\n      month  clinic_east  clinic_north  clinic_south  clinic_west\n1  February           51            45           145           45\n3     April           80            80            54          180\n5      June          112           109            79          129\n\nDEPOIS:\n      month  clinic_east  clinic_north  clinic_south  clinic_west\n0  February           51            45           145           45\n1     April           80            80            54          180\n2      June          112           109            79          129\n'''\n")),(0,r.kt)("h3",{id:"modificando-dataframes"},"Modificando ",(0,r.kt)("em",{parentName:"h3"},"DataFrames")),(0,r.kt)("p",null,"Podemos adicionar uma coluna para refer\xeancia futura, facilitar c\xe1lculos ou para exportar os c\xe1lculos j\xe1 feitos. Para isso, podemos selecionar uma coluna inexistente e passar uma lista ou iter\xe1vel como valor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame([\n  [1, '3 inch screw', 0.5, 0.75],\n  [2, '2 inch nail', 0.10, 0.25],\n  [3, 'hammer', 3.00, 5.50],\n  [4, 'screwdriver', 2.50, 3.00]\n],\n  columns=['Product ID', 'Description', 'Cost to Manufacture', 'Price']\n)\n\ndf['Sold in Bulk?'] = ['Yes', 'Yes', 'No', 'No']\nprint(df)\n\n'''\n   Product ID   Description  Cost to Manufacture  Price Sold in Bulk?\n0           1  3 inch screw                  0.5   0.75           Yes\n1           2   2 inch nail                  0.1   0.25           Yes\n2           3        hammer                  3.0   5.50            No\n3           4   screwdriver                  2.5   3.00            No\n'''\n")),(0,r.kt)("p",null,"Podemos passar somente 1 valor tamb\xe9m, o que define que esse valor dessa coluna seja o mesmo para qualquer linha:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\ndf['Is taxed?'] = 'Yes'\nprint(df)\n\n'''\n   Product ID   Description  Cost to Manufacture  Price Is taxed?\n0           1  3 inch screw                  0.5   0.75       Yes\n1           2   2 inch nail                  0.1   0.25       Yes\n2           3        hammer                  3.0   5.50       Yes\n3           4   screwdriver                  2.5   3.00       Yes\n'''\n")),(0,r.kt)("p",null,"Outra forma de adicionar colunas, uma forma particularmente \xfatil, \xe9 fazendo opera\xe7\xf5es com colunas anteriores. Veja uma forma de fazer isso:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\n#-Aqui, para todos os valores do DF, subtra\xedmos o custo do pre\xe7o, para calcular a margem\ndf['Margin'] = df.Price - df['Cost to Manufacture']\nprint(df)\n\n'''\n   Product ID   Description  Cost to Manufacture  Price  Margin\n0           1  3 inch screw                  0.5   0.75    0.25\n1           2   2 inch nail                  0.1   0.25    0.15\n2           3        hammer                  3.0   5.50    2.50\n3           4   screwdriver                  2.5   3.00    0.50\n'''\n")),(0,r.kt)("p",null,"Frequentemente, as novas colunas que queremos criar demandam opera\xe7\xf5es um pouco mais complexas do que multiplica\xe7\xe3o, subtra\xe7\xe3o, soma, e etc. Por conta disso, podemos usar o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),", para aplicar uma fun\xe7\xe3o a todos os valores de uma coluna:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame([\n  ['JOHN SMITH', 'john.smith@gmail.com'],\n  ['Jane Doe', 'jdoe@yahoo.com'],\n  ['joe schmo', 'joeschmo@hotmail.com']\n],\ncolumns=['Name', 'Email'])\n\ndf['Lowercase Name'] = df.Name.apply(str.lower)\nprint(df)\n\n'''\n         Name                 Email Lowercase Name\n0  JOHN SMITH  john.smith@gmail.com     john smith\n1    Jane Doe        jdoe@yahoo.com       jane doe\n2   joe schmo  joeschmo@hotmail.com      joe schmo\n'''\n")),(0,r.kt)("p",null,"Podemos tamb\xe9m aplicar uma fun\xe7\xe3o ",(0,r.kt)("em",{parentName:"p"},"lambda")," \xe0 uma coluna com ",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),". Visite o artigo anterior de Pandas para uma ",(0,r.kt)("a",{parentName:"p",href:"/docs/programacao-2/python-pandas.md"},"revis\xe3o de fun\xe7\xf5es ",(0,r.kt)("em",{parentName:"a"},"lambda")),". Veja um exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\ndf['Last Name'] = df['Lowercase Name'].apply(lambda name: name.split()[-1])\nprint(df)\n\n'''\n         Name                 Email Lowercase Name Last Name\n0  JOHN SMITH  john.smith@gmail.com     john smith     smith\n1    Jane Doe        jdoe@yahoo.com       jane doe       doe\n2   joe schmo  joeschmo@hotmail.com      joe schmo     schmo\n'''\n")),(0,r.kt)("p",null,"Podemos tamb\xe9m aplicar uma fun\xe7\xe3o ",(0,r.kt)("em",{parentName:"p"},"lambda")," \xe0s linhas, ou registros, para criar uma nova coluna:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame([\n    [10310,\"Lauren Durham\",19,43],\n    [18656,\"Grace Sellers\",17,40],\n    [61254,\"Shirley Rasmussen\",16,30],\n    [16886,\"Brian Rojas\",18,47],\n    [89010,\"Samantha Mosley\",11,38],\n    [87246,\"Louis Guzman\",14,39],\n    [20578,\"Denise Mcclure\",15,40],\n], columns=[\"id\",\"name\",\"hourly_wage\",\"hours_worked\"])\n\ntotal_earned = lambda row: (row['hourly_wage']*row['hours_worked']) if row['hours_worked'] <= 40 else (row['hourly_wage'] * 40) + (row['hours_worked'] - 40) * (row['hourly_wage'] * 1.50)\n\n#-Especificando o argumento 'axis' como 1, aplicamos \xe0s linhas\ndf['total_earned'] = df.apply(total_earned, axis=1)\nprint(df)\n\n'''\n      id               name  hourly_wage  hours_worked  total_earned\n0  10310      Lauren Durham           19            43         845.5\n1  18656      Grace Sellers           17            40         680.0\n2  61254  Shirley Rasmussen           16            30         480.0\n3  16886        Brian Rojas           18            47         909.0\n4  89010    Samantha Mosley           11            38         418.0\n5  87246       Louis Guzman           14            39         546.0\n6  20578     Denise Mcclure           15            40         600.0\n'''\n")),(0,r.kt)("h3",{id:"renomeando-colunas"},"Renomeando Colunas"),(0,r.kt)("p",null,"Para renomear as colunas de DF's, pode-se redefinir o atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"columns")," diretamente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame({\n    'name': ['John', 'Jane', 'Sue', 'Fred'],\n    'age': [23, 29, 21, 18]\n})\ndf.columns = ['First Name', 'Age']\nprint(df)\n\n'''\n  First Name  Age\n0       John   23\n1       Jane   29\n2        Sue   21\n3       Fred   18\n'''\n")),(0,r.kt)("p",null,"Para evitar erros ao renomear as colunas, pode-se tamb\xe9m usar o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"rename()"),". Para isso, deve ser passado um dicion\xe1rio com os pares ",(0,r.kt)("inlineCode",{parentName:"p"},"'old_column_name': 'new_column_name'"),". Veja um exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#-...\ndf.rename(columns={\n    'name': 'First Name',\n    'age': 'Age'},\n    inplace=True)\nprint(df)\n\n'''\n  First Name  Age\n0       John   23\n1       Jane   29\n2        Sue   21\n3       Fred   18\n'''\n")),(0,r.kt)("p",null,"Desse modo, \xe9 poss\xedvel renomear somente uma coluna espec\xedfica, e ser mais especifico sobre quais quer renomear, o que evita erros que podem ser passados despercebidos."),(0,r.kt)("h2",{id:"agregando-valores"},"Agregando Valores"),(0,r.kt)("p",null,"Uma estat\xedstica agregada \xe9 uma maneira de criar 1 n\xfamero que descreve um grupo de outros. Alguns jeitos comuns de trabalhar com essas estat\xedsticas \xe9 calcular a ",(0,r.kt)("strong",{parentName:"p"},"m\xe9dia"),", ",(0,r.kt)("strong",{parentName:"p"},"mediana"),", ",(0,r.kt)("strong",{parentName:"p"},"desvio padr\xe2o"),", entre outros. Podemos captar esses valores com m\xe9todos como:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mean()"),": M\xe9dia de todos os valores"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"std()"),": desvio padr\xe2o"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"median()"),": mediana"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"max()"),": valor m\xe1ximo na coluna"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"min()"),": valor mm\xednimo na coluna"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"count()"),": n\xfamero de valores numa coluna"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nunique()"),": n\xfamero de valores \xfanicos numa coluna"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"unique()"),": lista de valores \xfanicos")),(0,r.kt)("p",null,"Alguns desses m\xe9todos j\xe1 foram introduzidos no artigo anteriror. Por\xe9m, a diferen\xe7a aqui \xe9: \xe0s vezes, podemos querer calcular esses valores em um conjunto seleto de dados. "),(0,r.kt)("p",null,"Para isso, podemos utilizar o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"groupby()"),"."),(0,r.kt)("p",null,"Utilizando esse m\xe9todo, a regra geral da sintaxe se parece algo como: ",(0,r.kt)("inlineCode",{parentName:"p"},"df.groupby('column1').column2.measurement()"),", onde ",(0,r.kt)("inlineCode",{parentName:"p"},"column1")," \xe9 a coluna pela qual queremos agrupar, ",(0,r.kt)("inlineCode",{parentName:"p"},"column2")," \xe9 a coluna a qual queremos performar os a medi\xe7\xe3o, e ",(0,r.kt)("inlineCode",{parentName:"p"},"measurement")," \xe9 a medi\xe7\xe3o que queremos aplicar. Veja um exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'orders = pd.DataFrame([\n    [97916,"Douglas","Perez","DouglasPerez28@gmail.com","stilettos","fabric,brown",190],\n    [67691,"Tiffany","O\'neill","TiffanyO\'neill51@gmail.com","wedges","leather","navy",294],\n    [72818,"Susan","Rivas","Susan.Rivas@gmail.com","sandals","faux-leather","white",182],\n    [28080,"Angela","Hopper","AngelaHopper62@outlook.com","stilettos","leather","red",96],\n    [89958,"Thomas","Benjamin","TBenjamin1981@gmail.com","sandals","faux-leather","navy",157],\n    [11853,"Jonathan","Park","JP1285@gmail.com","wedges","fabric","white",98],]\n,columns=["id","first_name","last_name","email","shoe_type","shoe_material","shoe_color","price"])\n\npricey_shoes = orders.groupby(\'shoe_type\').price.max()\nprint(pricey_shoes)\n\n\'\'\'\nshoe_type\nsandals      182.0\nstilettos     96.0\nwedges       294.0\nName: price, dtype: float64\n\'\'\'\n')),(0,r.kt)("p",null,"No exemplo acima, obtivemos o valor m\xe1ximo de pre\xe7o para cada tipo de sapato. Uma boa pr\xe1tica \xe9 usar o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"reset_index")," para transformar a ",(0,r.kt)("em",{parentName:"p"},"Series")," retornada num DF indexado. "),(0,r.kt)("p",null,"Tamb\xe9m e poss\xedvel usar o ",(0,r.kt)("inlineCode",{parentName:"p"},"groupby()")," com mais de uma coluna como argumento."),(0,r.kt)("h2",{id:"m\xe9todos-de-dataframes"},"M\xe9todos de ",(0,r.kt)("em",{parentName:"h2"},"DataFrames")))}d.isMDXComponent=!0}}]);