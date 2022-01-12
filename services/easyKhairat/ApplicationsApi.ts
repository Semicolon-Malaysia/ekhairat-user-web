import BaseApi from "./BaseApi";
import { Helper } from "~/plugins/helper.plugin";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

const version = BaseApi.VERSION;

export default class ApplicationsApi extends BaseApi {
  constructor(axios: NuxtAxiosInstance, private readonly helper: Helper) {
    super(axios);
    this.basePath = `api/${version}`;
  }
}
