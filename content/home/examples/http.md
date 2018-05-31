### HTTP

The HTTP entrypoint is built on top of [werkzeug](http://werkzeug.pocoo.org/), and supports all the standard HTTP methods (GET/POST/DELETE/PUT etc)

```python{8,12}

# http.py
import json
from nameko.web.handlers import http

class HttpService:
    name = "http_service"

    @http('GET', '/get/<int:value>')
    def get_method(self, request, value):
        return json.dumps({'value': value})

    @http('POST', '/post')
    def do_post(self, request):
        return u"received: {}".format(request.get_data(as_text=True))
```