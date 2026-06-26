import { USERS } from "../utils/constants";

export const loginUser = (email, password) => {

  const user = USERS.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (user) {

    sessionStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    return user;
  }

  return null;
};
export const logoutUser = () => {
  sessionStorage.removeItem("user");
};