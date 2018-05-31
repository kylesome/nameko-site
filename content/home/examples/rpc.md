### RPC

Nameko includes an implementation of RPC over AMQP. It comprises the @rpc entrypoint, a proxy for services to talk to other services, and a standalone proxy that non-Nameko clients can use to make RPC calls to a cluster

```python{7,17}
# rpc.py
from nameko.rpc import rpc, RpcProxy

class ServiceY:
    name = "service_y"

    @rpc
    def append_identifier(self, value):
        return u"{}-y".format(value)


class ServiceX:
    name = "service_x"

    y = RpcProxy("service_y")

    @rpc
    def remote_method(self, value):
        res = u"{}-x".format(value)
        return self.y.append_identifier(res)
```