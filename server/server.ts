import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as ProductsRoute from "./routes/products";


export class Server {
    private app: express.Express;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.setRoutes();
        this.setStaticRoutes();
    }

    private setRoutes() {
        let router: express.Router = express.Router();

        router.use(ProductsRoute.Products.routes());

        this.app.use(router);
    }

    private setStaticRoutes() {
        this.app.use("/node_modules", express.static(
            path.join(__dirname, "../../node_modules")
        ));
        this.app.use(express.static(path.join(__dirname, "../client")));
    }

    public startServer() {
        this.app.listen(8080, function(){
            console.log("Application listening on 8080");
        });
    }
}
