export const UploadReducer = (state, action) => {
  switch (action.type) {
    case "SET_HASH_ID":
      localStorage.setItem("uploadIdentifier_id", action.data.id);
      localStorage.setItem("uploadIdentifier_sha1", action.data.sha1);
      return { ...state, id: action.data.id, sha1: action.data.sha1 };
    default:
      return state;
  }
};
