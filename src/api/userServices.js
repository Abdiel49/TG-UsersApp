const BASE_API_URL = 'https://jsonplaceholder.typicode.com/';

export const getUserList = async () => {
  const response = await fetch(`${BASE_API_URL}users`);
  const json = await response.json();
  return json;
};
