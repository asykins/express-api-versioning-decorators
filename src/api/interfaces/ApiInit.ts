import { ApiController } from "../abstracts/api-controller";

export interface ApiInit 
{
    port: number;
    controllers: ApiController[];
    middlewares: any[];
}