export const validateEmail = {
  required: "Debes ingresar tu email",
  pattern: {
    value:
      // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    message: "El email es invalido",
  },
};

export const validatePassword = {
  required: "Debes ingresar tu contraseña",
};
