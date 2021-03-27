export const resolveUsersList = (usersList, payload) => {
  const newUsersList = [...usersList];

  newUsersList.push(payload);

  return newUsersList;
};
