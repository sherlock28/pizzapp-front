import { useEffect } from "react";
import { useLocation } from "wouter";
import { useSelector } from "react-redux";
import { userSelector } from "reducers/userSlice";
import { paths } from "config/paths";

export function useIsLogged() {
  const [location, setLocation] = useLocation();
  const { isLoggedIn } = useSelector(userSelector);

  const PATHS_REDIRECT = {
    "/login": "/",
    "/register": "/",
    "/account": "/login",
    "/cart": "/login",
  };

  const redirectTo = PATHS_REDIRECT[location];

  useEffect(() => {
    /* Begind logged in */
    if (isLoggedIn && location === paths.login) setLocation(redirectTo);
    if (isLoggedIn && location === paths.register) setLocation(redirectTo);

    /* Not begind logged in */
    if (!isLoggedIn && location === paths.account) setLocation(redirectTo);
    if (!isLoggedIn && location === paths.cart) setLocation(redirectTo);
  }, [isLoggedIn, location, redirectTo, setLocation]);
}
