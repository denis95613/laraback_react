import { commonConstants } from "../constants";

export const commonActions = {
  setProType,
};

function setProType(proType) {
  return (dispatch) => {
    dispatch(success({ proType }));
  };
}

function success(proType) {
  return { type: commonConstants.SET_SUCCESS, proType };
}
