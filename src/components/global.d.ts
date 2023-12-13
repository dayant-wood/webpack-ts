declare module "*.module.scss" {
  type Classnames = {
    [classname: string]: string;
  };
  const classNames: Classnames;
  export = classNames;
}
