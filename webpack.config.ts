import path from "path";
import "webpack-dev-server";
import { buildWebpack } from "./config/buildWebpack";
import { BuildOptions, BuildMode } from "./config/types/types";

type ENV = {
  mode: BuildMode;
  port: number;
};
export default (env: ENV) => {
  const options: BuildOptions = {
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths: {
      html: path.resolve(__dirname, "public", "index.html"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
    },
  };

  return buildWebpack(options);
};
