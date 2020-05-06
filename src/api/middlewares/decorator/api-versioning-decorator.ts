import { ApiVersioningParams } from "../../interfaces/ApiVersioningParams";
import { ApiVersionContainer } from "../api-version-container";

export const ApiVersioning = (apiVersioningParams: ApiVersioningParams): MethodDecorator => {
    return function(target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor){
        ApiVersionContainer.instance().bind(apiVersioningParams, descriptor.value);
    }
}
