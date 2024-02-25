export type BuildOptions = {
  port: number;
  mode: BuildMode;
  paths: BuildPaths;
  analyzer?: boolean;
};

export type BuildPaths = {
  html: string;
  entry: string;
  output: string;
  src: string;
};

export type BuildMode = "development" | "production";
