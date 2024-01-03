import { GOOGLESIGNIN } from "../actions/google_auth";

const initialState = {
  id: null,
  token: null,
  fname: null,
  lname: null,
  fullname: null,
  email: null,
  profile_image: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOOGLESIGNIN:
      return {
        ...state,
        id: action.payload.uid,
        idToken: action.payload.token,
        fname: action.payload.fname,
        lname: action.payload.lname,
        fullname: action.payload.fullname,
        email: action.payload.email,
        profile_image: action.payload.profile_image,
      };
  }
  return {
    state,
  };
};
