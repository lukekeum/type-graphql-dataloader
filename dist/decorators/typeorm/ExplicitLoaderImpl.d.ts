import { TypeormLoaderOption } from "./TypeormLoader";
declare type KeyFunc = (root: any) => any | any[] | undefined;
export declare function ExplicitLoaderImpl<V>(keyFunc: KeyFunc, option?: TypeormLoaderOption): PropertyDecorator;
export {};
