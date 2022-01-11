import easyKhairatApi from "@/types/easyKhairatApi";
import { Plugin } from "@nuxt/types";
import AuthApi from "~/services/easyKhairat/AuthApi";

interface Api {
  easyKhairat: easyKhairatApi;
}

declare module "vue/types/vue" {
  interface Vue {
    $api: Api;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $api: Api;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $api: Api;
  }
}

const apiPlugin: Plugin = (context, inject) => {
  const { $axios, $helper } = context;

  const api: Api = {
    easyKhairat: {
      auth: new AuthApi($axios)
    }
  };

  inject("api", api);
};

export default apiPlugin;
