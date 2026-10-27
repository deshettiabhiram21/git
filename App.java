
import com.sun.net.httpserver.HttpServer;
import java.net.InetSocketAddress;
import java.io.OutputStream;

public class App {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(
            new InetSocketAddress("0.0.0.0", 8080), 0
        );

        server.createContext("/", exchange -> {
            byte[] response = "Hello, Kubernetes!".getBytes();
            exchange.sendResponseHeaders(200, response.length);

            OutputStream out = exchange.getResponseBody();
            out.write(response);
            out.close();
        });

        server.start();
        System.out.println("Server running on port 8080");
    }
}
