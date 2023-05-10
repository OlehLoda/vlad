import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

export default function LogIn() {
  const handleLogin = (user_info: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { tokenId, profileObj } = user_info as GoogleLoginResponse;
    console.log(user_info);

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        email: profileObj.email,
        first_name: profileObj.familyName,
        last_name: profileObj.givenName,
        token: tokenId,
      })
    );
  };

  return <button>Google</button>;
}
