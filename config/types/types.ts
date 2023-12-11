export type BuildOptions = {
  port: number;
  mode: BuildMode;
  paths: BuildPaths;
};

export type BuildPaths = {
  html: string;
  entry: string;
  output: string;
};

export type BuildMode = "development" | "production";
