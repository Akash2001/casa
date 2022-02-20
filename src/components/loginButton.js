import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <></>;
  }

  return !isAuthenticated && <button className="login" onClick={() => loginWithRedirect()}>Log In</button>;
};