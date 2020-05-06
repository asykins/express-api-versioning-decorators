import { Request, Response } from "express";
import { ApiController } from "../abstracts/api-controller";
import { ApiVersioning } from "../middlewares/decorator/api-versioning-decorator";

export class TestController extends ApiController
{
    defaultRoute: string = "/api/test";

    constructor(){
        super();
        this.initRoutes();
    }

    protected initRoutes(): void {
        //this.router.get(this.defaultRoute, this.get);
    }

    @ApiVersioning({version: "1.0.0", route: '/api/test', verb: "GET"})
    public get(request: Request, response: Response) {
        response.json({data: { dev: { firstName: "Thomas", lastName: "Halin" }}})
    }
}