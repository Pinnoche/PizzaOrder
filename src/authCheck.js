import { useAuthStore } from "@/stores/auth";

export const authGuard = async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAdmin || to.meta.requiresStaff || to.meta.requiresAuth) {
    await authStore.getAdmin();
    await authStore.getStaff();
    await authStore.getUser();
    const isAdminAuthenticated = !!authStore.authAdmin;
    const isStaffAuthenticated = !!authStore.authStaff;
    const isUserAuthenticated = !!authStore.authUser;

    if (to.meta.requiresAdmin && !isAdminAuthenticated) {
      return next({ name: "a_login" });
    }
    if (
      to.meta.requiresStaff &&
      !(isAdminAuthenticated || isStaffAuthenticated)
    ) {
      return next({ name: "s_login" });
    }
    if (
      to.meta.requiresAuth &&
      !(isAdminAuthenticated || isStaffAuthenticated || isUserAuthenticated)
    ) {
      return next({ name: "login" });
    }
    if (
      ((to.name === "login" || to.name === "register") &&
        (isAdminAuthenticated ||
          isStaffAuthenticated ||
          isUserAuthenticated)) ||
      ((to.name === "s_login" || to.name === "s_register") &&
        (isAdminAuthenticated || isStaffAuthenticated)) ||
      (to.name === "a_login" && isAdminAuthenticated)
    ) {
      return next({
        name:
          to.name === "login"
            ? "welcome"
            : to.name === "s_login"
            ? "staffs"
            : "admin",
      });
    }
  }
  next();
};
