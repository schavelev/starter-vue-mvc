[Read this in English](README.md)
# StarterVueMvc

![image](vue+aspnet+ts-bootstrap+require.png?raw=true "image")


Решение Visual Studio 2017, заготовка для приложений Vue.js + Asp.Net Core MVC + TypeScript + Bootstrap4.

Также используется в качестве примера для статей на habrahabr.ru:
- [Vue.js + Asp.Net Core MVC + TypeScript и ещё Bootstrap4](https://habrahabr.ru/post/350332/);
- продолжение следует... 

# Установка

Клонировать этот репозиторий на свой компьютер. 
```dos
git clone https://github.com/schavelev/starter-vue-mvc.git
```

Установить расширение к VS2017: [Bundler & Minifier](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BundlerMinifier).

# Сборка и запуск проекта

Сборка и запуск приложения - традиционное для среды VS2017. Бандлинг производится через команду "Bundler&Minifier\Update Bundles" локального меню на файле bundleconfig.json.

Также сборку и запуск можно произвести через командную строку в каталоге проекта:
```dos
npm install
dotnet build
dotnet bundle
dotnet run
```
В браузере открываем страницу по указанному адресу, например, http://localhost:51766.
