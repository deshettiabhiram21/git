
from http.server import BaseHTTPRequestHandler, HTTPServer


class MyHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        response = b"Hello, Kubernetes!"

        self.send_response(200)
        self.send_header(
            "Content-type",
            "text/plain; charset=utf-8"
        )
        self.send_header(
            "Content-Length",
            str(len(response))
        )
        self.end_headers()

        self.wfile.write(response)


server = HTTPServer(("0.0.0.0", 8080), MyHandler)

print("Starting server on port 8080")

server.serve_forever()
