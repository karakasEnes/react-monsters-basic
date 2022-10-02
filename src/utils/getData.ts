export const getData = async <T>(url: string): Promise<T> => {
  const users = await fetch(url);
  const responses = await users.json();
  return responses;
};
