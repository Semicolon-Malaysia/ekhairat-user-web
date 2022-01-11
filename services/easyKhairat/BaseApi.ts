import { NuxtAxiosInstance } from "@nuxtjs/axios";
import routes from "./routes.services";

export default class BaseApi {
  public static VERSION: string = "v1";

  protected basePath!: string;
  protected readonly routes: any;

  constructor(protected readonly axios: NuxtAxiosInstance) {
    this.routes = routes;
    this.axios = axios;
  }
}
