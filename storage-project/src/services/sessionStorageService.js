const USER_KEY = "user";

export const saveUser = (user) => {

  sessionStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
};

export const getUser = () => {

  const data =
  sessionStorage.getItem(USER_KEY);

  return data ? JSON.parse(data) : null;
};

export const logoutUser = () => {

  sessionStorage.removeItem(USER_KEY);
};