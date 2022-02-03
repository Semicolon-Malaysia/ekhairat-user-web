import AnnouncementsApi from "~/services/easyKhairat/AnnouncementsApi";
import ApplicationsApi from "~/services/easyKhairat/ApplicationsApi";
import AuthApi from "~/services/easyKhairat/AuthApi";
import EnumApi from "~/services/easyKhairat/EnumApi";

export default interface EasyKhairatApi {
  announcements: AnnouncementsApi;
  applicationApi: ApplicationsApi;
  auth: AuthApi;
  enum: EnumApi;
}
