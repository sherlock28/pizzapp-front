import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, userSelector, clearState } from "reducers/userSlice";
import { useToast } from "@chakra-ui/react";

export function useSignInForm() {
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const toast = useToast();

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => setShowPass(!showPass);

  const onSubmit = data => {
    dispatch(loginAction(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(
    () => {
      if (isError) {
        toast({
          title: "Error",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        dispatch(clearState());
      }

      if (isSuccess) {
        setLocation("/");
      }
    }, // eslint-disable-next-line
    [isError, isSuccess]
  );

  return {
    onSubmit,
    handleShowPass,
    register,
    handleSubmit,
    errors,
    isFetching,
    showPass,
  };
}
