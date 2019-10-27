# Краткое содержание

Репозиторий содержит код для сборки или запуска на ресурсе [CodeSandBox](https://codesandbox.io/) разнообразных  клиентов  GraphQL.

Для запуска примеров необходимо: 

1. Клонировать локально на репозиторий

2. На машине должен быть установлен [Nodejs][node-download] ( создано на v 10.x )

3. Для запуска всех клиентов должен быть запущен [server GraphQL](https://github.com/EuLeEr/GraphlQLonApollo/tree/master/photo-share-api)

4. В качестве источника данных для него должна быть развернута или создана на [ Atlas][atlas] база данных MongoDB (имя базы данных прописывается в .env) c collection **users** и записью, например: 

   > {"githubLogin":"bigbear418",
   >
   > "name":"Diana   Lopez","avatar":"https://randomuser.me/api/portraits/thumb/women/42.jpg",
   >
   > "githubToken":"85e31e843e4333096a1fd3be80dce6fb52d9f6d7"}

   

   

## Клиенты

1. В папке  [ Простой клиент ](https://github.com/EuLeEr/GraphlQLonApollo/tree/master/vanila_client) . Изоморфный (может быть запущен как с Node, как и просто в браузер) клиент graphql.js
2. В папке [Минимальный Клиент](https://github.com/EuLeEr/GraphlQLonApollo/tree/master/graphql-client)  клиент graphql-request
3. В папке [Полноценный Клиент Apollo Servers](https://github.com/EuLeEr/GraphlQLonApollo/tree/master/photo-share-client)  c сохранение результатов запросов в локальном кэше и поддержкой компонентов React

------



## Ведение документации и сайта Github-pages

Для сайта и документирования использован github-pages проекта с branch [gh-pages](https://github.com/EuLeEr/GraphlQLonApollo/tree/gh-pages) с простой markdown разметкой. 

Утомительные попытки создать сайт документирования с помощью Jekyll и обращение к примерам успешным  [github-pages примерам](https://github.com/collections/github-pages-examples)  показало , что ни один из этих ресурсов не использует на настоящий момент Jekyll как средство ведения сайта на git-hub pages. Тем не менее краткая инструкция по настройке  (не исчерпывающая , поскольку её нет ни на одном ресуре) 

[находится](jekyll/Install.md)





[node-download]: https://nodejs.org/dist/latest-v10.x/
[atlas]: https://cloud.mongodb.com

