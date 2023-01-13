import type { TgdContext } from "#/types/TgdContext";
import type { PluginDefinition } from "apollo-server-core";
import type { BaseContext } from "apollo-server-types";
import { Container } from "typedi";
import type { Connection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

interface ApolloServerLoaderPluginOption {
  typeormGetConnection?: () => Connection;
}

const ApolloServerLoaderPlugin = (
  option?: ApolloServerLoaderPluginOption
): PluginDefinition => ({
  requestDidStart: async () => ({
    async didResolveSource(requestContext: { context: BaseContext }) {
      Object.assign(requestContext.context, {
        _tgdContext: {
          requestId: uuidv4(),
          typeormGetConnection: option?.typeormGetConnection,
        } as TgdContext,
      });
    },
    async willSendResponse(requestContext: { context: BaseContext }) {
      Container.reset(requestContext.context._tgdContext.requestId);
    },
  }),
});

export { ApolloServerLoaderPlugin };
