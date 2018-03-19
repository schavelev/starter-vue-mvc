[на русском языке](README.ru-ru.md)
# StarterVueMvc

![image](vue+aspnet+ts-bootstrap+require.png?raw=true "image")

Starter application Vue.js + Asp.Net Core MVC + TypeScript + Bootstrap4. A solution for Visual Studio 2017 with 3 independent projects:
- TryVueMvc
- TryVueMvcDecorator
- TryVueMvcGrid

Also used as an example for articles on habrahabr.ru (in Russian):
- [Vue.js + Asp.Net Core MVC + TypeScript and also Bootstrap4](https://habrahabr.ru/post/350332/);
- [Strict typing for Vue.js applications on TypeScript](https://habrahabr.ru/post/351216/);
- to be continued... 

# Installation

Clone the repository to your computer.

```dos
git clone https://github.com/schavelev/starter-vue-mvc.git
```

Install the [Bundler & Minifier extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BundlerMinifier).

# Building and running

Building and running the application is traditional for the VS2017 environment. Bandling can be done through the "Bundler & Minifier \ Update Bundles" command of the local menu on the bundleconfig.json file.

You can also build and run through the command line in the project directory:
```dos
npm install
dotnet build
dotnet bundle
dotnet run
```
Open a page in the browser at the specified address. For example http: // localhost: 51766.
