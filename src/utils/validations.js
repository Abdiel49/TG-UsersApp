export const isEmail = email => {
  const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  return re.test(String(email).toLowerCase());
};
