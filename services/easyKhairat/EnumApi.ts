import BaseApi from "./BaseApi";
import { Helper } from "~/plugins/helper.plugin";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

const version = BaseApi.VERSION;

export default class EnumApi extends BaseApi {
  constructor(axios: NuxtAxiosInstance, private readonly helper: Helper) {
    super(axios);
    this.basePath = `api/${version}`;
  }

  async getEnum(enumType: String) {
    let route = this.routes.enum[`${enumType}`];

    const url = `${this.basePath}/${route}`;
    return await this.axios.$get(url);
  }
}
