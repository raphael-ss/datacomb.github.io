---
sidebar_position: 2
slug: /docs/fundamentos/dados
title: "Dados - Visão Geral"
description: "Aprenda sobre coleta de dados, qualidade dos dados, tipos de dados e mais."
---

# Visão Geral: Dados 📋

Nesta seção, veremos um pouco sobre como pensar e nos relacionar com dados. 
Atualmente, o mundo produz cerca de 328.77 milhões de *terabytes* de dados. **Por dia**. Não é um exagero afirmar que as empresas e
negócios hoje são movidos por dados, e a importância das ferramentas para analisar esses dados e a importância do conhecimento dos profissionais que
os analisam só cresce a cada dia.

Veja um gráfico de linha que demonstra o crescimento dos empregos dos cientistas de dados nos últimos anos:

![Crescimento dos empregos de Cientistas de Dados](/img/data-science-jobs.png)

Sem mais delongas, vamos falar de dados.

## Erros e Lacunas nos Dados

Há uma frase bastante comum no mundo dos dados (me disseram): **"Entra lixo, sai lixo"**. Isso significa que as **conclusões retiradas dos dados só serão**
**verdadeiras, fortes e significantes se os dados por trás também forem**.
Por exemplo, se construirmos um ótimo modelo, e o 'alimentar' com dados ruins, isto é, dados irrelevantes, com viés, sem sentido, errados,
ou datados, teremos más previsões. 

:::tip Importante
Devemos sempre refletir para questionar as perguntas certas, para que possamos coletar dados relevantes e significantes.
Uma boa prática é se perguntar:

1. **"Tenho dados suficientes para responder essa pergunta?"**
2. **"Meus dados são capazes de responder exatamente à minha pergunta?"**

Assim, podemos garantir a eficiência do nosso trabalho.
:::

## Viés nos Dados

Uma discussão muito importante atualmente, dados enviesados podem causar muitos problemas à sociedade. Um exemplo é a
questão levantada pelo documentário "Coded Bias", da Netflix, que aborda um viés racial nos dados que treinaram um
software de reconhecimento facial nos EUA.

Viés nos dados coletados levam a uma pior qualidade dos dados e das conclusões retiradas desses. É vital a capacidade de
reconhecer dados enviesados, e uma responsabilidade de se questionar:

1. **"Quem coletou esses dados?"**
2. **"Quem participa dos dados?"**
3. **"Quem está de fora desse conjunto de dados?"**

## O Que É Estatística?

Estatística é a ciência de medir, analisar e relacionar dados. Ela ajuda a determinar diversas conclusões de dados e eventos, se esses
acontecem por chance ou por fatores sistêmicos. Por exemplo, é estatisticamente mais provável ter trânsito durante horas de pico, provenientes do
movimento pendular (ida e volta do trabalho), do que em horas normais. Observe o trânsito às 17h numa quarta-feira e às 17h num domingo numa cidade grande.

Estatística pode ajudar a revelar padrões sistêmicos em conjuntos de dados, e garantir *insights* reais e concretos ao invés de ter que confiar em opiniões pessoais ou empirismo para um projeto ou pesquisa.
Existe um artigo extremamente interessante sobre o uso de estatística na determinação da existência de discriminação nos processos
de contratação, ou seja, a prova que existe preconceito e discriminação nos processos seletivos para empregos em algumas empresas nos EUA. Para saber mais e ler o artigo da advogada que argumentou com estatística, [clique aqui](https://scholars.law.unlv.edu/facpub/573/). 

## Visualizações de Dados e sua Importância 📊

Visualizar dados em gráficos e representações é uma das maneiras mais comuns e importantes de entender e comunicar dados. Boas visualizações
levam à um entendimento mais profundo de todos os leitores, inclusive do Cientista que a fez.

Também provém melhores argumentos de convencimento em apresentações e comunicação de resultados ou decisões, o que tem grande peso e importância
no mundo corporativo. Um exemplo histórico, e, infelizmente, trágico, é o da visualização do engenheiro contratado da NASA que tentou argumentar que o ônibus espacial Challenger não deveria decolar no dia 28 de janeiro de 1986.

Ele montou uma visualização que mostrava a frequência de problemas numa peça de selagem chamada O-Ring relacionada com a temperatura no dia da decolagem.
Porém, a visualização não foi clara; muito pelo contrário, foi até confusa.

O ônubus espacial carregava 7 astronautas americanos, e por conta da falha na peça, após cerca de 2 minutos após a decolagem,
o ônibus explodiu, matando todos os 7 tripulantes.

É claro que não foi culpa da visualização feita pelo engenheiro, mas pode-se imaginar que caso essa fosse mais convincente,
o evento teria sido evitado.

Para ler e entender mais sobre o caso e a importância da visualização, e como uma visualização ruim pode impactar a vida real,
[clique aqui](https://www.govloop.com/community/blog/challenger-disaster-importance-data-visualization/).

É importante também, ao comunicar sobre dados e suas conclusões, prover contexto e clareza, pra ter certeza que o interlocutor
entendeu de fato, e não está só lendo os números e gráficos.

Ainda em visualizações, é importante saber quando uma visualização é **enganosa**. Observe a imagem a seguir:

![Visualização Enganosa comparada com a verdadeira](/img/misleading-visualizations.png)

Veja o **primeiro gráfico**: Se algum desavisado olhar sem muita atenção, entenderá que houve um **aumento enorme** nas taxas de juros (*interest rates*). Porém, perceba que o eixo Y começa de um ponto diferente de 0, ou seja, da origem.

Isso influencia bastante a forma que interpretamos a visualização, e pode levar o leitor à uma conclusão exagerada, ou até mesmo equivocada. 

Já o **segundo gráfico** mostra o aumento com ambos eixos X e Y dimensionados corretamente a partir da origem e em escala. Percebe a diferença?

## Correlação e Causalidade

É bastante dita a frase **"correlação não é igual à causalidade"**. Isto é, ainda que dois eventos possam estar conectados ou relacionados, não significa que estão numa relação de causa e efeito, ou seja, não significa que um causa o outro.

Um **nexo causal**, ou link causal, significa provar que um evento causa o outro. Um bom exemplo da importância do nexo causal é procurar descobrir a causa de uma doença ou epidemia com base em dados dos casos registrados. 

## Coleta de Dados

Sabemos que precisamos de dados para trabalhar assim como um pedreiro precisa de tijolos. Porém, como coletar esses dados? Onde os encontramos?

Dados podem vir de diversos lugares, como pesquisas, governos, observações,
diretamente de indivíduos, etc.

Uma das formas de coletar informação é medi-la ou coletá-la diretamente, como em
enquetes, estudos observacionais, experimentos, entre outros. Esse tipo de dado é considerado **estático**. Ou seja, a informação é coletada uma única vez e não muda. Como, por exemplo, uma enquete feita via e-mail: os resultados são coletados e registrados uma única vez.

Dados também podem ser gravados ao-vivo e em constante mudança, baseados na informação mais recente. Por exemplo, sites e aplicativos podem rastrear cliques e o tempo gasto na página de diversos usuários ao mesmo tempo, sem uma pessoa gravando ativamente os dados no momento. 

Diferente dos dados estáticos, sensores e *trackers* podem atualizar dados e adicionar novas informações constantemente. Outro exemplo seria a previsão do tempo: dados sobre o clima e o tempo são adicionados frequentemente para melhorar as previsões.

Existem diversos bancos de dados disponíveis publicamente que podemos usar para nossos projetos. Basta procurar online se existe alguma organização que provê dados gratuitamente e publicamente.

## Tipos de Dados

No mundo da Estatística, podemos separar dados em alguns tipos para organizá-los e analizá-los de forma mais eficiente.

### Variáveis Categóricas

Variáveis Categóricas são dados que podem ser agrupados em categorias distintas, e são separados em **nominais** e **ordinais**. As ordinais são dados ordenados em uma ordem ou ranking, como por exemplo lugares (1°, 2°, 3°...), e nominais são dados sem ordem ou ranking aparente, como por exemplo nomes, espécies, etc.

Também existem as **variáveis categóricas binárias**, que são essencialmente variáveis separadas em somente duas categorias, como Masculino ou Feminino.
Essencialmente, são variáveis definidas com palavras ao invés de números.

### Variáveis Numéricas ou Quantitativas

Variáveis numéricas são obtidas por meio de contagem ou quantidade. Por exemplo, idade e salário são variáveis numéricas.

## Qualidade dos Dados

Devemos nos perguntar e refletir se os dados que coletamos representam de fato a realidade. Isto é, se são **precisos**. Para obter precisão de fato, precisamos de **padronização**, para que possamos medir os dados da mesma forma, e comparar dados que podem ser comparados. Sem medidas ou métodos padronizados, os dados coletados não serão precisos.


## Conclusão 🎑

Bom, essa seção termina aqui.
Caso tenha alguma dúvida que não conseguiu encontrar online, envie para raphaelsoaresbrasil@gmail.com.
Obrigado pela atenção, e bons estudos.