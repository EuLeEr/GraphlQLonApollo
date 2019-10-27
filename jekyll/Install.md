Использование и установка локального Jekyll как средства редактирования github-pages активно ведется в [репозитории][A simple Ruby Gem]

1. Локальная установка (утомительнейшая возня) 

   - - [ ] Установка [ruby](https://www.ruby-lang.org/en/) (кажется, не поддерживается в Windows), в линукс package manager ( Debian-fork)  apt устанавливает предельно старую сборку , [требования к текущей версии](https://pages.github.com/versions/) и как следствие - необходима сборка из [исходников](https://www.ruby-lang.org/en/downloads/releases/) 

     ```bash
     ruby -v
     gem -v
     ```

   - Установка bundler 

     ```bash
     gem update bundler 
     ```

   - В ветке  проекта gh-page или компании-пользователя github-page создать файл Gemfile зависимостями от github 

     ```bash
     source 'https://rubygems.org'
     
     gem 'github-pages', group: :jekyll_plugins
     ```

   -  После этого можно установить все зависимости запуском `bundle install`

   - Что дальше - непонятно и для чего

     

2. Docker - описан в [репозитории][A simple Ruby Gem]





[A simple Ruby Gem]: https://github.com/github/pages-gem

