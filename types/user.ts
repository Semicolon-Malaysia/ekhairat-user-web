export default interface User {
  id: String | null;
  full_name: String | null;
  username: String | null;
  email: String | null;
  ic_no?: String | null;
  avatar?: String | null;
  created_at?: String | null;
  email_verified_at?: String | null;
  phone_no?: String | null;
  roles?: Array<String> | null;
}
