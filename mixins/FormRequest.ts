import { Component, Vue } from "nuxt-property-decorator";

import { debounce } from "lodash";

@Component
export default class FormRequest extends Vue {
  loading: boolean = false;
  formErrors: Array<object> = [];

  created() {
    this.handleFormSubmitError = debounce(this.handleFormSubmitError, 250);
  }

  protected clearPreviousErrors(): void {
    this.formErrors = [];
  }

  protected handleFormSubmitSuccess(response: any, redirectTo?: string): void {
    const { status_message: statusMessage } = response;

    this.$toast.success(statusMessage);

    if (redirectTo) {
      this.$router.push(redirectTo);
    }
  }

  protected handleFormSubmitError(error: any): void {
    if (typeof error.response !== "undefined") {
      return this.handleRequestError(error);
    }

    this.$toast.error(error);
  }

  protected handleRequestError(error: any): void {
    const {
      response: { data }
    } = error;
    const { code: statusCode, message: statusMessage } = data;

    if (statusCode === 422) {
      this.formErrors = data.errors;
    } else {
      this.$toast.error(statusMessage || this.$t("message.unknownServerError"));
    }
  }
}
