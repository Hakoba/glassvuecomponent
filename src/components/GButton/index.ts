import { App as Application } from "vue";
import GButton from "./GButton.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, GButton);
  }
};

// use(Plugin);

export default Plugin;

export { GButton };
