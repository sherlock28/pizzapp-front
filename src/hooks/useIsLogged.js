import { useLocation } from "wouter";
import { useSelector } from "react-redux";
import { userSelector } from "reducers/userSlice";
import { paths } from "config/paths";

export function useIsLogged() {

    const [location, setLocation] = useLocation();
    const { isLoggedIn } = useSelector(userSelector);

    if (isLoggedIn && location === paths.login) setLocation("/");
    if (isLoggedIn && location === paths.register) setLocation("/");

    if (!isLoggedIn && location === paths.account) setLocation("/login");
    if (!isLoggedIn && location === paths.cart) setLocation("/login");
}