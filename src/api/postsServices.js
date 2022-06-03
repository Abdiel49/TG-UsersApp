import {BASE_API_URL} from '@env';

export const postsServices = async ({userId}) => {
  if (!userId) {
    return [];
  }
  let url = `${BASE_API_URL}posts?userId=${userId}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
