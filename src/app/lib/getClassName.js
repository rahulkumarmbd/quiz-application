export const getClassName = (generalClassName, className, errorMessage) => {
  let name = generalClassName;

  if (className) {
    name += " " + className;
  }

  if (errorMessage) {
    name += " " + "error";
  }

  return name;
};
