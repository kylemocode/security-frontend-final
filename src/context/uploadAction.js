export const setHashId = data => {
  return {
    type: "SET_HASH_ID",
    data: {
      id: data.id,
      sha1: data.sha1
    }
  };
};
