


<h3  align="center">



O Consulta CEP é um projeto desonvolvido durante a avaliação técnica da **[Eureka Labs][eureka_labs_site]** utilizando as tecnologias ***TypeScript, Node, React e Next.js***.



</h3>



## **:rocket: OBJETIVO**



O projeto tem como finalidade buscar as informações de um determinado CEP, como, por exemplo: logradouro, bairro e cidade. E retorná-las de uma forma descontraída, como se fosse uma placa de rua.



## **:computer: TECNOLOGIAS**




#### **Website** ([React][react] + [TypeScript][typescript])



- **[Next][next]**

- **[Styled Components][styled-components]**



#### **Server** ([NodeJS][node] + [TypeScript][typescript])



- **[Express][express]**

- **[CORS][cors]**

- **[TypeORM][typeorm]**

- **[PostgreSQL][postgres]**

- **[ts-node-dev][tsnodedev]**

- **[Docker][docker]**

- **[Jest][jest]**



#### **Utilitários**




- API: **[ViaCEP API][viacep_api]**

- Editor: **[Visual Studio Code][vscode]**

- Teste de API: **[Insomnia][insomnia]**

- Ícones: **[Feather Icons][feather_icons]**

- Fontes: **[Roboto][font_roboto]**



## **:books:  Metodologias**



Para o desenvolvimento desse projeto, foram aplicados alguns princípios das metodologias DDD e SOLID para a arquitetura de código e também testes unitários com Jest.



## **:wine_glass: COMO UTILIZAR**



### Configurações Iniciais



Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.







Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>.



Após ter o **Node** instalado, clone o repositório do projeto em sua máquina em um diretório de sua preferência



```sh

$ git clone https://github.com/jogui7/consulta-cep.git

```



Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz de cada diretório, no diretório do **backend** e no diretório do **frontend**. Para instalar as dependências, siga os exemplos abaixo:




Exemplos:

```sh

# Instalando as dependências do backend:

$ cd ./backend

$ npm install

	ou

$ yarn


# Instalando as dependências do frontend:

$ cd ./frontend

$ npm install

	ou

$ yarn

```







### Instalando o Docker
Para rodar o banco de dados foi utilizado o Docker, então você pode instalá-lo através desse [link](https://www.docker.com/get-started).

Com o Docker instalando, sua cli já está disponível, então podemos inicializar um container com o nosso banco de dados com o seguinte comando:

```sh

$ docker run --name consulta-cep -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres

```

Agora com o banco de dados rodando já podemos utilizar a aplicação.

### Utilizando o Backend



```sh

# Abrindo o terminal no diretório do backend:

$ cd ./backend



# Instanciando o banco de dados:

$ npm run typeorm migration:run

	ou

$ yarn typeorm migration:run



# Executando a aplicação em modo de desenvolvimento:

$ npm run dev

	ou

$ yarn dev

```



> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./backend/package.json)</kbd> para saber quais scripts estão disponíveis.


### Testando o Backend

Para testar o backend foi criado um teste unitário com jest para testar o serviço de buscar o cep, para rodar os testes, dentro do diretório do backend rode o script abaixo no seu terminal:

```sh

$ yarn test

```

### Utilizando o Frontend



```sh

# Abrindo o terminal no diretório do frontend:

$ cd ./frontend



# Executando o frontend no modo de desenvolvimento:

$ npm run dev

	ou

$ yarn dev

```



> Se o browser não abrir automaticamente, acesse: http://localhost:3000.


### Utilizando o a aplicação em produção

Para utilizar a aplicação em modo de produção é necessário realizar a build do frontend e do backend, para isso, é só rodar o script de build no diretório do **backend** e no diretório do **frontend**. Para isso siga o exemplo abaixo:

```sh

# Instalando as dependências do backend:

$ cd ./backend

$ npm run build

	ou

$ yarn build


# Instalando as dependências do frontend:

$ cd ./frontend

$ npm run build

	ou

$ yarn build

```


## **:books: REFERÊNCIAS**



- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)


- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)

- [TypeScript](https://www.typescriptlang.org/docs/home.html)


- [TypeORM][typeorm]

- [Express](https://expressjs.com/pt-br/)

- [Node](https://nodejs.org/en/)




## **:page_with_curl: LICENÇA**



Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.



<h3  align="center">

Feito por <a  href="https://www.linkedin.com/in/joão-guis-090b431a7/">João Guilherme Bini Guis</a>

<br><br>


</a>

</h3>



<!-- Website Links -->



[eureka_labs_site]:  https://eurekalabs.com.br



<!-- Badges -->



[BADGE_CLOSED_ISSUES]:  https://img.shields.io/github/issues-closed/x0n4d0/ecoleta?color=red



[BADGE_OPEN_ISSUES]:  https://img.shields.io/github/issues/x0n4d0/ecoleta?color=green



[BADGE_LICENSE]:  https://img.shields.io/github/license/x0n4d0/ecoleta



[BADGE_NODE_VERSION]:  https://img.shields.io/badge/node-12.17.0-green



[BADGE_NPM_VERSION]:  https://img.shields.io/badge/npm-6.14.4-red



[BADGE_WEB_REACT]:  https://img.shields.io/badge/web-react-blue



[BADGE_MOBILE_REACT_NATIVE]:  https://img.shields.io/badge/mobile-react%20native-blueviolet



[BADGE_SERVER_NODEJS]:  https://img.shields.io/badge/server-nodejs-important



[BADGE_STARS]:  https://img.shields.io/github/stars/x0n4d0/ecoleta?style=social



[BADGE_FORKS]:  https://img.shields.io/github/forks/x0n4d0/ecoleta?style=social



[BADGE_TYPESCRIPT]:  https://badges.frapsoft.com/typescript/code/typescript.png?v=101



[BADGE_OPEN_SOURCE]:  https://badges.frapsoft.com/os/v1/open-source.png?v=103



<!-- Techs -->



[react]:  https://reactjs.org/


[styled-components]: https://styled-components.com


[next]:  https://nextjs.org



[typescript]:  https://www.typescriptlang.org/



[node]:  https://nodejs.org/en/



[viacep_api]:  https://viacep.com.br



[vscode]:  https://code.visualstudio.com/



[express]:  https://expressjs.com/



[cors]:  https://expressjs.com/en/resources/middleware/cors.html



[typeorm]:  https://typeorm.io/



[Docker]:  https://www.docker.com



[postgres]:  https://www.postgresql.org



[tsnodedev]:  https://www.npmjs.com/package/ts-node-dev



[feather_icons]:  https://feathericons.com/



[insomnia]:  https://insomnia.rest/



[jest]:  https://jestjs.io



[font_roboto]:  https://fonts.google.com/specimen/Roboto



[yarn]:  https://classic.yarnpkg.com/en/docs/install/#debian-stable
