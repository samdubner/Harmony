export const getUserGroupsReq = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}/groups`,
    method: "GET",
  });
};
