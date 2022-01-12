import { auth } from "~/configs";

export default {
  auth: {
    me: "auth/me",
    register: "auth/register",
    verifyEmail: "auth/verify-email",
    resendVerification: "auth/resend-verification-email",
    login: "auth/login",
    loginAdmin: "auth/login-admin",
    logout: "auth/logout",
    forgotPassword: "auth/forgot-password",
    resetPassword: "auth/reset-password"
  },
  announcements: {
    getAllOrCreate: "/announcements",
    getOneOrUpdateOrDelete: "/announcements/{id}"
  },
  enum: {
    maritalStatus: "/enum/marital-status",
    houseOwnershipStatus: "/enum/house-ownership-status",
    memberApplicationStatus: "/enum/member-application-status",
    relationshipStatus: "/enum/relationship-status"
  },
  modelApplications: {
    getAllOrCreate: "/member-applications",
    getOneById: "/member-applications/{id}",
    updateMemberAndSpouseInfo:
      "/member-applications/{id}/update-member-and-spouse-info",
    updateAddressInfo: "/member-applications/{id}/update-address-info",
    addDependant: "/member-applications/{id}/add-depenendant",
    editDependant: "/member-applications/{id}/edit-dependant",
    deleteDependant: "/member-applications/{id}/delete-dependant/{dependantId}",
    submit: "/member-applications/{id}/submit",
    check: "/member-applications/check",
    approve: "/member-applications/approve",
    reject: "/member-applications/reject"
  }
};
