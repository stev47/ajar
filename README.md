# ajar

A minimal, promise-driven XMLHttpRequest-wrapper, promoting REST and JSON.

## Overview

```javascript
var ajar = require('ajar')
ajar.get('/entities/47').then(console.log)
```

Supported HTTP-methods are `GET`, `POST`, `PUT` and `DELETE`, all of them accept optional data parameters: `GET` and `DELETE` sends them as querystring parameters, while `POST` and `PUT` sends them as JSON-encoded body data.

On success the promise resolves with the JSON-decoded result.
On error the promise is rejected, the reason being either the `XMLHttpRequest` object or a corresponding Error object (eq. `SyntaxError` for JSON parsing errors).
Error handling is subject to change.

## Design Goals

- minimal, simple
- ES6, dependency free
- REST, JSON

Which means:
Looking for integrated XML validation with DOM-parsing or automated request queuing with rate-limiting controls?
Go look somewhere else.

## Contributing

People writing tests are welcome.

## License

GPLv3, see `LICENSE`
