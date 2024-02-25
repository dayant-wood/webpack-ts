import path from "path";
import "webpack-dev-server";
import { buildWebpack } from "./config/buildWebpack";
import { BuildOptions, BuildMode } from "./config/types/types";
import webpack from "webpack";

type ENV = {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
};
export default (env: ENV) => {
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths: {
      html: path.resolve(__dirname, "public", "index.html"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
    },
    analyzer: env.analyzer,
  });

  return config;
};
