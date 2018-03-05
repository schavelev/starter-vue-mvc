# StarterVueMvc
![image](vue+aspnet+ts-bootstrap+require.png?raw=true "image")

Решение Visual Studio 2017, заготовка для приложений Asp.Net Core MVC + Vue.js + TypeScript + Bootstrap4. Также используется в качестве примера для статей на habrahabr.ru:
- [Vue.js + Asp.Net Core MVC + TypeScript и ещё Bootstrap4](https://habrahabr.ru/post/350332/);
- продолжение следует... 

# Установка

Скачать или клонировать этот репозиторий. Установить расширение к VS2017: [Bundler & Minifier](https://github.com/madskristensen/BundlerMinifier).

# Сборка и запуск проекта

Сборка и запуск приложения - традиционное для среды VS2017.

Также сборку и запуск можно произвести через командную строку в каталоге проекта:
```dos
npm install
dotnet build
dotnet bundle
dotnet run
```
В браузере открываем страницу по указанному адресу, например, http://localhost:51766.
