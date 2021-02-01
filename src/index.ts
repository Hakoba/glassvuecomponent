import * as components from "./components/index";

const install = instance => {
  for (const componentKey in components) {
    instance.use(components[componentKey]);
  }
};

export default install;

export * from "./components";
