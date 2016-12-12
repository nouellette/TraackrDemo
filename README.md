## Getting Started

This demo contains contains a client server (serving up static content) and the UI code. This client server will also act as a proxy to the Traackr api to allow flexibility and security.

Prerequisites:

```
node version 6.3.0 or greater
```

Building (download packages, convert typescript code to js code):

```
$ npm run build
```

Start the server:

```
$ npm run start
```

Access page (using ip in case we want to use docker containers later):

```
0.0.0.0:3000
```

If you want to change code and view it on page refresh without triggering transpiler (add watcher to .ts files):

```
$ npm run startDev
```

## Testing

```
$ npm run test
```

## Additional information

Additional testing commands:

```
$ npm run lint
$ npm run depcheck
```

Linting output can be found:

```
reports/checkstyle.xml
```

Code coverage can be found:

```
reports/coverage/lcov-report/index.html (run this file in your browser for ui)
```

## Known bugs:

Refresh page when in deep link (e.g 0.0.0.0:3000/search). Client server isn't setup to handle this situation. Possible solution is to parse the route and serve back data into the SPA page so angular can use it to route correctly.
Pagination selection of previous or next hover effect remains active till a click occures. Possible solution would be to clear class at click event time or add click down handler to clear.


## Production feature still needed:

Production build process needs to be implemented (combine, uglify, tree shake)
Tried adding it but doesn't create the output directory. Problem comes from having both the server and ui code governed by same tsconfig.json file. Solution is to find the right syntax.