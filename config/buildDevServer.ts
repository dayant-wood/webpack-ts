import { BuildOptions } from "./types/types";
import { Configuration } from "webpack-dev-server";

export const buildDevServer = (options: BuildOptions): Configuration => {
  return {
    port: options.port ?? 3000,
    open: true,
  };
};
