const BASE_API_URL = 'https://jsonplaceholder.typicode.com/';

const _defaultFilter = {
  email: null,
};

/**
 * It fetches a list of users from the API, and returns the result as a JavaScript object
 * @param [filter] - an object with the following properties: {email: <valid email>}
 * @returns An array of users.
 * -----
 * @example getUserList({email: 'user@example.com'}) => [{...}, {...}, ...]
 */
export const getUserList = async (filter = _defaultFilter) => {
  let url = `${BASE_API_URL}users`;
  if (filter.email) {
    url += `?email=${filter.email}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
