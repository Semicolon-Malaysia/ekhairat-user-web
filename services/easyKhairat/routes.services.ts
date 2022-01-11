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
  }
};
