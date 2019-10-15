export const doLogin = (userType) => {
  return {
    type: 'LOGIN',
    userType: userType
  }
};

export const doLogout = () => {
  return {
    type: 'LOGOUT'
  }
};