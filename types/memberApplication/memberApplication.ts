import User from "../user";

export default interface MemberApplication {
  approved_at: String | null;
  approved_by: String | null;
  approved_by_id: String | null;
  checked_at: String | null;
  checked_by: String | null;
  checked_by_id: String | null;
  created_at: String | null;
  id: Number | null;
  member_info: String | null;
  status: Number | null;
  status_description: String | null;
  submitted_at: String | null;
  surau_in_kariah: String | null;
  updated_at: String | null;
  user: User | null;
  user_id: Number | null;
}
