export const getUserGroupsReq = (user) => {
  return $.ajax({
    url: `/api/users/${user}/groups`,
    method: "GET",
  });
};

export const createGroupReq = group => {
    return $.ajax({
        url: "/api/groups",
        method: "POST",
        data: {
            group
        }
    })
}