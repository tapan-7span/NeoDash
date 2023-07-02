export const CheckUser = () => {
  const userDetail = localStorage.getItem("NT-user");
  if (userDetail) {
    return JSON.parse(userDetail);
  } else {
    return null;
  }
};

export const RemoveUser = () => {
  localStorage.removeItem("NT-user");
};

export const setUser = (user) => {
  const userJson = JSON.stringify(user);
  localStorage.setItem("NT-user", userJson);
};

export const ValidateUser = (pin) => {
  console.log("Pin Entered");
}