import * as express from "express";
import * as Product from "../model/product";
import * as ProductsModel from "../model/products";

export class Products {
     private productList: ProductsModel.Products;

     public static routes(): express.Router {
        let router: express.Router = express.Router();
        let productsRoute: Products = new Products();

        router.get("/products", productsRoute.index.bind(productsRoute));
        router.post("/products", productsRoute.create.bind(productsRoute));
        router.get("/products/:product_id", productsRoute.fetch.bind(productsRoute));

        return router;
    }

    constructor() {

        this.productList = new ProductsModel.Products([
            new Product.Product(1, "Serwer", 1),
            new Product.Product(2, "Express", 2),
            new Product.Product(3, "More")
        ]);
    }

    public index(req: express.Request, res: express.Response) {
        res.json(this.productList.list());
    }

    public create(req: express.Request, res: express.Response) {
        let productName: string = req.body.product_name;
        let productQuantity: number = parseInt(req.body.quantity) || 0;

        if(!productName) {
            res.status(500).send("Product name not found");
            return;
        }

        res.json(this.productList.add(productName, productQuantity));

    }

    public fetch(req: express.Request, res: express.Response){
        let productId: number = parseInt(req.params.product_id);
        let product: Product.Product = this.productList.fetch(productId);

        if(!product){
            res.status(404).send("Product not found");
            return;
        }

        res.json(product);
    }
}