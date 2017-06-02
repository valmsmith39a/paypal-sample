const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case "RESOLVE_GET_LOCALES":
      return action.payload;
    case "GET_LOCALES_FAILURE":
      return state;
    default:
      return state;
  };
};
