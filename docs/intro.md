---
sidebar_position: 1
slug: /
id: "Intro"
---

# Data Science - Introdução

## Apresentações Iniciais 📜

Olá! caso tenha caído aqui de paraquedas, esse é um site de documentação e estudo de Ciência de Dados, Python e R, IA e Aprendizado de
Máquina, e Visão Computacional, feito pelo estudante de Ciência da Computação @raphael-ss.

Vamos incluir projetos básicos e intermediários, uso de bibliotecas, padrões de escrita e boas práticas, e, claro, os tópicos dentro da área.

Caso queira aprender Data Science, mas não sabe por onde começar, vamos caminhar juntos em etapas para descobrir as maravilhas desse campo.
Nessa seção, vamos falar sobre as instalações necessárias para os procedimentos e projetos, sobre as ferramentas que vamos usar e sobre o que
podemos fazer com isso.

Estamos utilizando o kernel Linux (especificamente Ubuntu) para desenvolvimento, projetos e instalações, por vários motivos. O principal sendo que, felizmente ou infelizmente, Linux é o melhor lidando com programação e computação em geral.

Caso não tenha esse kernel na sua máquina, basta fazer um dual boot. Não demora muito e não é trabalhoso, pode confiar. Para ver como, basta
[clicar aqui](https://tecnoblog.net/responde/como-fazer-um-dual-boot-com-windows-e-linux/).

Caso tenha alguma dúvida específica, sugestão ou correção que queira enviar, basta mandar para raphaelsoaresbrasil@gmail.com.
Bom, seguindo com as instalações.

## Instalações Necessárias ❗

### Anaconda 🐍

Iremos trabalhar com as ferramentas usadas na prática, seja em mercado de trabalho ou pesquisa, para que você se acostume ao longo do
processo a interagir com essas ferramentas, e tenha um gostinho de como é na prática.

Inicialmente, vamos instalar a distro de Python e gerenciador de pacotes **Anaconda**. Esse software engloba um gerenciador de pacotes e bibliotecas, como o *pip*, diversas IDE's para escolher, e a linguagem Python (versões desde Python 2.7 até Python 3.11), com múltiplas bibliotecas de Data Science
incluídas. 

Antes de tudo, vamos rodar alguns comandos para assegurar que seu pc está atualizado. Abra o terminal e siga as instruções:

```bash
$ sudo apt update
```
E também:

```bash
$ sudo apt upgrade
```

Você também pode checar se já tem Python instalado:
``` bash
$ python3 --version
```

Caso tenha, não há problema; estaremos usando o ambiente da Anaconda para desenvolver projetos, e isso não vai interferir na instalação.

:::danger Observação
É necessário que você tenha privilégio _sudo_, isto é, seja um administrador. 

Caso não seja, não vai ser capaz de fazer as instalações.
:::

Primeiro, vamos trocar para o diretório _tmp_, onde as instalações feitas somem após o computador for desligado.


Não vamos ter que reinstalar toda vez, só vamos instalar o *bash* do Anaconda nesse diretório, e só vamos utilizar uma vez.

```bash
$ cd /tmp
```

Agora, usaremos o _curl_ para buscar o arquivo de instalação. Verifique se tem curl instalado:

```bash
$ curl --version
```

Caso não possua, [clique aqui](https://linuxhint.com/install_curl_ubuntu/) para ver um tutorial de instalação.
Continuando:

```bash
$ curl https://repo.anaconda.com/archive/Anaconda3-2023.03-1-Linux-x86_64.sh --output anaconda.sh
```

:::danger Observação
Perceba que o curl está indo buscar o arquivo no endereço especificado. Se atente à um fato importante: procure instalar sempre a versão mais
atualizada do software. Isso trará menos problemas de início. Esse link é a versão mais atualizada para Linux até o momento atual. 

Recomendo que procure saber se existe uma versão nova antes de instalar. Para ser redirecionado para o índice de versões, 
[clique aqui](https://repo.anaconda.com/archive/).
:::

Agora, depois de concluído o processo, rode este comando para conferir se a instalação se deu corretamente:

```bash
$ sha256sum anaconda.sh
```

O *output* deverá ser a mesma série de caracteres especificada no índice de versões.

Agora, vamos rodar o script:

```bash
$ bash anaconda.sh
```

Você verá um contrato de termos de usuário. Se quiser, leia, e desça até o final. 
Você verá algo como:

```output
Do you approve the license terms? [yes|no]
```

Se você concordar, digite *yes* e seguiremos com a instalação.
Você verá um *output* perguntando onde você quer instalar. Caso queira especificar um local diferente do sugerido, escreva o caminho do diretório.
Caso não, aperte *Enter*. Sugiro que instale no local recomendado.

A instalação irá acontecer, é só esperar.

Depois de instalado, o programa vai te perguntar se quer inicializar o Anaconda. Digite *yes*.

Agora, saia do diretório /tmp e vá até o diretório de instalação, e rode o seguinte comando:

```bash
$ source ~/.bashrc
```
Isso te levará ao ambiente de programação base do Anaconda.
Digite o comando seguinte para verificar o que já está disponível:

```bash
$ conda list
```

Você verá uma lista com todos os pacotes disponíveis após a instalação do Anaconda.


Para ativar o **Anaconda Navigator**, ambiente de desenvolvimento, rode o comando dentro da pasta que você instalou:

```bash
$ anaconda-navigator
```
Você deverá ver algo assim:

![anaconda-navigator](/img/anaconda-navigator.png)

Pronto! Agora, essa instalação está completa. Vamos falar sobre como criar ambientes e gerenciá-los nas próximas seções.

### SQLite 🪶

O SQLite é um software de banco de dados, ou seja, um RDBMS. É um software que permite que os usuários interajam com um banco de dados relacional. No SQLite, um banco de dados é armazenado em um único arquivo - uma característica que o distingue de outros mecanismos de banco de dados. Esse fato permite um alto grau de acessibilidade: copiar um banco de dados não é mais complicado do que copiar o arquivo que armazena os dados, compartilhar um banco de dados pode significar enviar um anexo de e-mail.

Esse programa é mencionado [neste artigo](/docs/data-science-foundations/database-overview.md) do site, e em artigos sobre SQL.

A portabilidade característica distintiva do SQLite, infelizmente, o torna uma escolha inadequada quando muitos usuários diferentes estão atualizando a tabela ao mesmo tempo (para manter a integridade dos dados, apenas um usuário pode escrever no arquivo por vez). Além disso, pode ser necessário um esforço adicional para garantir a segurança dos dados privados devido às mesmas características que tornam o SQLite acessível. 

Além disso, o SQLite não oferece exatamente a mesma funcionalidade que muitos outros sistemas de banco de dados, limitando alguns recursos avançados oferecidos por outros sistemas de banco de dados relacionais. 

Por fim, o SQLite não valida os tipos de dados. Enquanto muitos outros softwares de banco de dados rejeitariam dados que não estão em conformidade com o esquema de uma tabela, o SQLite permite que os usuários armazenem dados de qualquer tipo em qualquer coluna (sim, não é muito pŕatico, mas é remediável).

Considerando isso, os benefícios de poder acessar e usar um banco de dados sem o envolvimento de uma aplicação de servidor são enormes. SQLite é usado no mundo todo para testagem, desenvolvimento, e em qualquer cenário que faz sentido que o banco de dados esteja no mesmo local que o código.

Vamos usá-lo em alguns artigos e projetos. Para instalar, siga os procedimentos:

```bash
$ sudo apt update
```

E,

```bash
$ sudo apt upgrade
```

Para atualizar pacotes do sistema (isso evita dor de cabeça de vez em quando).

Faça:

```bash
$ sudo apt-get install sqlite3
```

Após a instalação, digite o comando:

```bash
$ sqlite3 newdb.sqlite
```

Você verá algo como:

```
SQLite version 3.40.1 2022-12-28 14:03:47
Enter ".help" for usage hints.
sqlite> 
```

Isso significa que a instalação funcionou. Para sair, digite:

```bash
sqlite> .exit
```

Pronto! SQLite está instalado. Para mais informações sobre o software, [clique aqui](https://www.sqlite.org/index.html).
