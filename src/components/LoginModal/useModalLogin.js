import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, userSelector, clearState } from "reducers/userSlice";

let showToast = true;

export function useModalLogin({ isOpen, onClose }) {

    const [showPass, setShowPass] = useState(false);
    const handleClick = () => setShowPass(!showPass);

    const dispatch = useDispatch();
    const toast = useToast();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);

    const onSubmit = data => {
        dispatch(loginAction(data));
        showToast = true;
    };

    useEffect(() => {
        cleanFields();
    }, // eslint-disable-next-line 
        [isOpen]);

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            if (showToast) {
                toast({
                    title: "Error",
                    description: errorMessage,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                showToast = !showToast;
                dispatch(clearState());
            }
        }

        if (isSuccess) {
            onClose();
        }
    }, // eslint-disable-next-line 
        [isError, isSuccess]);

    const cleanFields = () => {
        setValue("email", "");
        setValue("password", "");
    }

    return {
        handleSubmit, onSubmit, isFetching, register, errors, showPass, handleClick
    }
}