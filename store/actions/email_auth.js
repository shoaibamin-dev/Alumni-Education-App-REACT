export const EMAILSIGNIN = "EMAILSIGNIN";

export const emailSignIn = (
  id,
  token,
  email,
  firstname,
  lastname,
  profile_img,
  gender,
  user_type,
  about,
  education,
  employment,
  age,
  city,
  phone
) => {
  return {
    type: EMAILSIGNIN,
    payload: {
      id,
      token,
      email,
      firstname,
      lastname,
      profile_img,
      gender,
      user_type,
      about,
      education,
      employment,
      age,
      gender,
      city,
      phone,
    },
  };
};
