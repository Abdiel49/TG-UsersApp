import {BASE_API_URL} from '@env';

export const photosServices = async ({postId}) => {
  if (!postId) {
    return [];
  }
  let url = `${BASE_API_URL}photos?id=${postId}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
