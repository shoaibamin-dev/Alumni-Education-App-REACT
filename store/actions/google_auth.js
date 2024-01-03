export const GOOGLESIGNIN = "GOOGLESIGNIN";

export const googleSignIn = (
  uid,
  token,
  fname,
  lname,
  fullname,
  email,
  profile_image
) => {
  return {
    type: GOOGLESIGNIN,
    payload: {
      uid,
      token,
      fname,
      lname,
      fullname,
      email,
      profile_image,
    },
  };
};
