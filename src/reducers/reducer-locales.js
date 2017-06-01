const INITIAL_STATE = [
  {
    localeName: "some name",
    propertyValue: "some value"
  }
];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case "FETCH_LOCALES_SUCCESS":
      return action.payload
    case "FETCH_LOCALES_FAILURE":
      return state
    default:
      return state
  };
};
