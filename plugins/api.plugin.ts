import easyKhairatApi from "@/types/easyKhairatApi";
import { Plugin } from "@nuxt/types";
import AnnouncementsApi from "~/services/easyKhairat/AnnouncementsApi";
import ApplicationsApi from "~/services/easyKhairat/ApplicationsApi";
import AuthApi from "~/services/easyKhairat/AuthApi";
import EnumApi from "~/services/easyKhairat/EnumApi";

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
      announcements: new AnnouncementsApi($axios, $helper),
      applicationApi: new ApplicationsApi($axios, $helper),
      auth: new AuthApi($axios),
      enum: new EnumApi($axios, $helper)
    }
  };

  inject("api", api);
};

export default apiPlugin;
