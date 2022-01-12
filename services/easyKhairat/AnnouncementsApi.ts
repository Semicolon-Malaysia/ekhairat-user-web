import BaseApi from "./BaseApi";
import { Helper } from "~/plugins/helper.plugin";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

const version = BaseApi.VERSION;

export default class AnnouncementsApi extends BaseApi {
  constructor(axios: NuxtAxiosInstance, private readonly helper: Helper) {
    super(axios);
    this.basePath = `api/${version}`;
  }

  async getAll(query?: Object) {
    const url = `${
      this.routes.announcements.getAllOrCreate
    }/${this.helper.stringifyParams(query)}`;
    const baseUrl = `${this.basePath}/${url}`;

    return await this.axios.$get(baseUrl);
  }

  async getOneById(id: String) {
    const baseUrl = this.helper.prepareUrl(
      this.routes.announcements.getOneOrUpdateOrDelete,
      id
    );
    const url = `${this.basePath}/${baseUrl}`;

    return await this.axios.$get(url);
  }

  async create(payload: Object) {
    const url = `${this.basePath}/${this.routes.announcements.getAllOrCreate}`;

    return await this.axios.$post(url, payload);
  }

  async update(id: String, payload: Object) {
    const baseUrl = this.helper.prepareUrl(
      this.routes.announcements.getOneOrUpdateOrDelete,
      id
    );
    const url = `${this.basePath}/${baseUrl}`;

    return await this.axios.$put(url, payload);
  }

  async delete(id: String) {
    const baseUrl = this.helper.prepareUrl(
      this.routes.announcements.getOneOrUpdateOrDelete,
      id
    );
    const url = `${this.basePath}/${baseUrl}`;

    return await this.axios.$delete(url);
  }
}
