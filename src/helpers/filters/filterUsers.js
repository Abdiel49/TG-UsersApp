export const filterUsers = (users, text) => {
  console.log('users and text to filter', users, text);
  const searchText = text.trim().toLowerCase();
  if (!searchText) {
    return users;
  }
  return users.filter(user => user.email.toLowerCase().includes(searchText));
};
