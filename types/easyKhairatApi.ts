import AnnouncementsApi from "~/services/easyKhairat/AnnouncementsApi";
import AuthApi from "~/services/easyKhairat/AuthApi";
import EnumApi from "~/services/easyKhairat/EnumApi";

export default interface EasyKhairatApi {
  announcements: AnnouncementsApi;
  auth: AuthApi;
  enum: EnumApi;
}
