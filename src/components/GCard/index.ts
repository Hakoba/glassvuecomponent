import { App as Application } from "vue";
import GCard from "./GCard.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, GCard);
  }
};

// use(Plugin);

export default Plugin;

export { GCard };
