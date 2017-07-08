# Gemini

https://github.com/gemini-testing/gemini

Docs: https://gemini-testing.github.io/

## Getting started

Install all packages:

```
$ npm i
```

Drive should be executable (version can be different)

```
$ sudo chmod +x node_modules/selenium-standalone/.selenium/chromedriver/2.30-x64-chromedriver
```

Update all screenshots

```
$ gemini update
```

## Run tests

Start selenium

```
$ npm run selenium
```

Start server

```
$ npm start
```

And run tests

```
$ npm t
```

## Small http-server

Server is using following urls:

* http://localhost:3002/ - main index.html
* http://localhost:3002/gemini-reports/ - reports of failed tests