import { useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";
// import { loginAction, userSelector, clearState } from "reducers/userSlice";
// import { useToast } from "@chakra-ui/react";

export function useContactForm() {
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const { isFetching, isSuccess, isError, errorMessage } =
  //     useSelector(userSelector);

  // const toast = useToast();

  const onSubmit = data => {
    console.log(data);
    // dispatch(sendMessage(data));
  };

  useEffect(() => {
    return () => {
      //  dispatch(clearState());
    };
  }, [dispatch]);

  //   useEffect(
  //     () => {
  //       if (isError) {
  //         toast({
  //           title: "Error",
  //           description: errorMessage,
  //           status: "error",
  //           duration: 3000,
  //           isClosable: true,
  //         });
  //         // dispatch(clearState());
  //       }

  //       if (isSuccess) {
  //         setLocation("/");
  //       }
  //     }, // eslint-disable-next-line
  //     [isError, isSuccess]
  //   );

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
}
