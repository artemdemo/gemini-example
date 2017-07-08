# Gemini

https://github.com/gemini-testing/gemini

Docs: https://gemini-testing.github.io/

## Getting started

Install all packages:

```
$ npm i
```

Install last chrome drive

```
$ node_modules/selenium-standalone/bin/selenium-standalone install
```

Drive should be executable (version can be different)

```
$ sudo chmod +x node_modules/selenium-standalone/bin/selenium-standalone/2.30-x64-chromedriver
```

Update all screenshots

```
$ gemini update
```

## Run tests

```
$ npm t
```

Detailed reports of failed tests you will find in `gemini-reports` folder.

## Small http-server

In order to make the process more visual, you can use installed `http-server`.

Just run 

```
$ npm start
```

Then you can use following urls:

* http://localhost:3002/ - main index.html
* http://localhost:3002/gemini-reports/ - reports of failed tests