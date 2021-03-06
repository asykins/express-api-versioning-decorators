import express, { Router } from "express";

export abstract class ApiController
{
    router: Router = express.Router();
    abstract defaultRoute: string;
    protected abstract initRoutes(): void;
}