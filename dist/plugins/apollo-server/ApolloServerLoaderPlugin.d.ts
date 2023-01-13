import type { PluginDefinition } from "apollo-server-core";
import type { Connection } from "typeorm";
interface ApolloServerLoaderPluginOption {
    typeormGetConnection?: () => Connection;
}
declare const ApolloServerLoaderPlugin: (option?: ApolloServerLoaderPluginOption | undefined) => PluginDefinition;
export { ApolloServerLoaderPlugin };
