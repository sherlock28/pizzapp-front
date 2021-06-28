import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerAction, userSelector, clearState } from "reducers/userSlice";
import { useLocation } from "wouter";

export function useSignUpForm() {
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const [_, setLocation] = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );

    const toast = useToast();

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!showPass);

    const onSubmit = data => {
        if (data.password === data.confirmpass) {
            dispatch(registerAction(data));
        }
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearState());
            toast({
                title: "Success.",
                description: "Usuario creado con exito.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            setLocation("/login");
        }

        if (isError) {
            toast({
                title: "Error",
                description: errorMessage,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            dispatch(clearState());
        }
    },// eslint-disable-next-line 
        [isSuccess, isError]);

    return {
        handleShowPass,
        register,
        onSubmit,
        handleSubmit,
        errors,
        showPass,
        isFetching
    }
}