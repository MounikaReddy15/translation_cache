# Translation Caching using Node.js

#### It runs on localhost:6000

#### It uses Redis for Caching

#### Redis can be used as both database and cache, here we are using it for caching

### To translate a given text or sentence

#### use the below API

```
http://localhost:6000/translate
```

#### we need to pass in both target and source language and the text to translate

```
Eg:  {
    "source":"English",
    "word": "Welcome",
    "target":"Spanish"
}
```

#### To run on your localhost:

```
$ https://github.com/MounikaReddy15/translation_cache.git
$ cd translation-cache-api
$ npm start to run the server
```

#### To test the api we used Mocha a javascript framework for Node.js

#### Chai is the assertion library

#### Chai HTTP addon allows Chai library to easily use assertions on HTTP requests

To run the test:

```
npm test
```
