import { ApiVersioningParams } from "../interfaces/ApiVersioningParams";

export class ApiVersionContainer {
    private static _containerInstance: ApiVersionContainer;
    public apiMap: Map<string, Function>;

    private constructor(){
        this.apiMap = new Map<string, Function>();
    }

    public static instance(): ApiVersionContainer {
        if(!ApiVersionContainer._containerInstance){
            ApiVersionContainer._containerInstance = new ApiVersionContainer();
        }
        return ApiVersionContainer._containerInstance;
    }    

    public resolve(apiVersioningParams: ApiVersioningParams): Function | undefined {
        let resolvedFunction = this.apiMap.get(JSON.stringify(apiVersioningParams));
        return resolvedFunction;
    }
    
    public bind(apiVersioningParams: ApiVersioningParams, func: Function): void {
        this.apiMap.set(JSON.stringify(apiVersioningParams), func);
    }
}