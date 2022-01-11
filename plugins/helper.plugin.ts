import { Plugin } from "@nuxt/types";
import queryString from "query-string";
import { router } from "~/configs";

export interface Helper {
  stringifyParams(params: any): string;
  formatBytes(bytes: number, decimals: number): string;
  getBase64(file: File | Blob): Promise<string>;
  prepareUrl(baseUrl: string, params: any): string;
  jsonReparse(data: any): any;
  handleRequestSuccess(response: any, redirectTo?: string): void;
  handleRequestError(error: any): void;
  hasAnyRole(role: string): boolean;
  confirmPrompt(message: any, icon?: string): Promise<boolean>;
  confirmDelete(): Promise<boolean>;
  generateArrayOfYears(max?: number): Array<any>;
  generateArrayOfMonths(): Array<any>;
  generateArrayOfDays(month: number): Array<any>;
  parseDate(isoDate: string): String;
}

declare module "vue/types/vue" {
  interface Vue {
    $helper: Helper;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $helper: Helper;
  }

  interface Context {
    $helper: Helper;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $helper: Helper;
  }
}

const helperPlugin: Plugin = ({ $auth, $toast, app, redirect }, inject) => {
  const helper: Helper = {
    stringifyParams(params: any) {
      return queryString
        .stringify(params)
        .replace(/[^?=&]+=(&|$)/g, "")
        .replace(/&$/, "");
      // .replace(/%20/g, '+')
    },
    formatBytes(bytes: number, decimals: number) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    getBase64(file: File | Blob) {
      return new Promise((resolve, reject) => {
        const reader: any = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let encoded = reader.result.replace(/^data:(.*;base64,)?/, "");
          if (encoded.length % 4 > 0) {
            encoded += "=".repeat(4 - (encoded.length % 4));
          }
          resolve(encoded);
        };
        reader.onerror = (error: any) => reject(error);
      });
    },
    prepareUrl(baseUrl: string, params: any) {
      let url = baseUrl;

      for (let key in params) {
        url = url.replace("{" + key + "}", params[key]);
      }

      return url;
    },
    jsonReparse(data: any) {
      return JSON.parse(JSON.stringify(data));
    },
    handleRequestSuccess(response: any, redirectTo?: string): void {
      const { status_message: statusMessage } = response;

      $toast.success(statusMessage);

      if (redirectTo) {
        redirect(redirectTo);
      }
    },
    handleRequestError(error: any): void {
      if (typeof error.response === "undefined") {
        $toast.error(error);
        return;
      }

      const {
        response: { data }
      } = error;
      const { message: statusMessage } = data;

      $toast.error(statusMessage || app.i18n.t("message.unknownServerError"));
    },
    hasAnyRole(role: string): boolean {
      return $auth.loggedIn ? ($auth.user as any).roles.includes(role) : false;
    },
    confirmPrompt(message: any, icon?: string): Promise<boolean> {
      return new Promise(resolve => {
        $toast.show(message, {
          duration: 0,
          icon: icon,
          action: [
            {
              text: app.i18n.t("label.yes") as string,
              onClick: async (event, toastObject) => {
                toastObject.goAway(0);
                resolve(true);
              }
            },
            {
              text: app.i18n.t("label.no") as string,
              onClick: (event, toastObject) => {
                toastObject.goAway(0);
                resolve(false);
              }
            }
          ]
        });
      });
    },
    confirmDelete(): Promise<boolean> {
      const message = app.i18n.t("message.confirmDelete") as string;
      const icon = "mdi-alert";

      return this.confirmPrompt(message, icon);
    },

    generateArrayOfYears(max: number = new Date().getFullYear()): Array<any> {
      // let max = new Date().getFullYear();
      let min = max - 39;
      var years = [];

      for (var i = max; i >= min; i--) {
        years.push(i.toString());
      }
      return years;
    },

    generateArrayOfMonths(): Array<any> {
      let max = 12;
      let min = 1;
      var months = [];

      for (var i = max; i >= min; i--) {
        months.push(i.toString());
      }
      return months;
    },

    generateArrayOfDays(month: number): Array<any> {
      let max;
      let month_31 = [1, 3, 5, 7, 8, 10, 12];

      if (month == 2) max = 29;
      else if (month_31.includes(month)) max = 31;
      else max = 30;

      let min = 1;
      var days = [];

      for (var i = max; i >= min; i--) {
        days.push(i.toString());
      }
      return days;
    },
    parseDate(isoDate: string) {
      const newDate = new Date(isoDate);

      let day = newDate.getDate() as any;
      let month = newDate.getMonth() as any;
      let year = newDate.getFullYear() as any;
      const time = newDate.toLocaleTimeString();
      let monthName;

      if (day < 10) {
        day = `0${day}`;
      }

      if (month == 0) monthName = "Jan";
      else if (month == 1) monthName = "Feb";
      else if (month == 2) monthName = "Mar";
      else if (month == 3) monthName = "Apr";
      else if (month == 4) monthName = "May";
      else if (month == 5) monthName = "June";
      else if (month == 6) monthName = "July";
      else if (month == 7) monthName = "Aug";
      else if (month == 8) monthName = "Sep";
      else if (month == 9) monthName = "Oct";
      else if (month == 10) monthName = "Nov";
      else monthName == "Dec";

      return `${monthName} ${day}, ${year} ${time}`;
    }
  };

  inject("helper", helper);
};

export default helperPlugin;
