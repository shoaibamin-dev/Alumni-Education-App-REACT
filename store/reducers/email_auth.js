import { EMAILSIGNIN } from "../actions/email_auth";

const initialState = {
  id: null,
  token: null,
  email: null,
  firstname: null,
  lastname: null,
  profile_img: null,
  gender: null,
  user_type: null,
  about: null,
  education: [],
  employment: [],
  age: null,
  city: null,
  phone: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAILSIGNIN:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        profile_img: action.payload.profile_img,
        gender: action.payload.gender,
        user_type: action.payload.user_type,
        about: action.payload.about,
        education: action.payload.education,
        employment: action.payload.employment,
        age: action.payload.age,
        city: action.payload.city,
        phone: action.payload.phone,
      };
  }
  return {
    state,
  };
};
