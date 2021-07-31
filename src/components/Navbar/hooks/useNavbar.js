import { useColorMode } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, userSelector } from "reducers/userSlice";
import { useLocation } from "wouter";
import { paths } from "config/paths";

export function useNavbar() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const { token } = useSelector(userSelector);
  // eslint-disable-next-line
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogout = () => {
    dispatch(logoutAction({ jwt: token }));
  };

  const goToCart = () => {
    setLocation(paths.cart);
  };

  const goToMyAccount = () => {
    setLocation(paths.account);
  };

  return {
    toggleColorMode,
    handleLogout,
    goToCart,
    goToMyAccount,
  };
}
