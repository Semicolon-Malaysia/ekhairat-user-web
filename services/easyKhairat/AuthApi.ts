import BaseApi from "./BaseApi";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

const version = BaseApi.VERSION;

export default class AuthApi extends BaseApi {
  constructor(axios: NuxtAxiosInstance) {
    super(axios);
    this.basePath = `api/${version}`;
  }

  async getUser() {
    const url = `${this.basePath}/${this.routes.auth.me}`;
    return await this.axios.$get(url);
  }

  async register(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.register}`;
    return await this.axios.$post(url, payload);
  }

  async login(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.login}`;
    return await this.axios.$post(url, payload);
  }

  async loginAdmin(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.loginAdmin}`;
    return await this.axios.$post(url, payload);
  }

  async logout() {
    const url = `${this.basePath}/${this.routes.auth.logout}`;
    return await this.axios.$post(url);
  }

  async forgotPassword(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.forgotPassword}`;
    return await this.axios.$post(url, payload);
  }

  async resetPassword(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.resetPassword}`;
    return await this.axios.$post(url, payload);
  }

  async verifyEmail(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.verifyEmail}`;
    return await this.axios.$post(url, payload);
  }

  async resendVerificationEmail(payload: Object) {
    const url = `${this.basePath}/${this.routes.auth.resendVerificationEmail}`;
    return await this.axios.$post(url, payload);
  }
}
