import { Request, Response } from "express";
import { ApiVersionContainer } from "./api-version-container";

export interface ApiVersionOptions {
    acceptedHeaders: string[];
    defaultVersion: string,
    acceptedVersion: string[]
}

export const ApiVersioningMiddleware = (options: ApiVersionOptions) => {
    return function(req: Request, res: Response, next: any){
        var version = getVersion(options.acceptedHeaders, options.defaultVersion, req);
        let func = ApiVersionContainer.instance().resolve({version: version, route: req.url, verb: req.method});
        if(func){
            func(req, res);
        } else {
            res.status(400).json({
                message: "No route found at this url or using this version.",
                ...options
            })
        }
    }
}

const getVersion = (acceptedHeaders: string[], defaultVersion: string, request: Request): string => {
    let version: string = "";
    acceptedHeaders.forEach(acceptedHeader => {
        const headerValue = request.header(acceptedHeader)
        if(headerValue) {
            version = headerValue;
        }
    });

    if(version){
        return version;
    } else {
        return defaultVersion;
    }
}