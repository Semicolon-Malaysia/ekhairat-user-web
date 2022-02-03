import BaseApi from "./BaseApi";
import { Helper } from "~/plugins/helper.plugin";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

const version = BaseApi.VERSION;

export default class ApplicationsApi extends BaseApi {
  constructor(axios: NuxtAxiosInstance, private readonly helper: Helper) {
    super(axios);
    this.basePath = `api/${version}`;
  }

  async createOrGetApplication(payload: Object) {
    const url = `${this.basePath}/${this.routes.memberApplications.getAllOrCreate}`;
    return this.axios.$post(url, payload);
  }

  async getOneById(id: String) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.getOneById}`;
    const url = this.helper.prepareUrl(baseUrl, { id });

    return this.axios.$get(url);
  }

  async updateMemberAndSpouseInfo(id: String, payload: Object) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.updateMemberAndSpouseInfo}`;
    const url = this.helper.prepareUrl(baseUrl, { id });

    return this.axios.$post(url, payload);
  }

  async updateAddressInfo(id: String, payload: Object) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.updateAddressInfo}`;
    const url = this.helper.prepareUrl(baseUrl, { id });

    return this.axios.$post(url, payload);
  }

  async addDependant(id: String, payload: Object) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.addDependant}`;
    const url = this.helper.prepareUrl(baseUrl, { id });

    return this.axios.$post(url, payload);
  }

  async editDependant(id: String, payload: Object) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.editDependant}`;
    const url = this.helper.prepareUrl(baseUrl, { id });

    return this.axios.$put(url, payload);
  }

  async deleteDependant(id: String, dependantId: String) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.deleteDependant}`;
    const url = this.helper.prepareUrl(baseUrl, { id, dependantId });

    return this.axios.$delete(url);
  }

  async submitApplication(id: String, payload: Object) {
    const baseUrl = `${this.basePath}/${this.routes.memberApplications.submit}`;
    const url = this.helper.prepareUrl(baseUrl, { id });

    return this.axios.$post(url, payload);
  }
}
