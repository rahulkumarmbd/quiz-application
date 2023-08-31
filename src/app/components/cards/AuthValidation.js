import { object, string } from "yup";

export const currentUserSchema = object({
  firstName: string()
    .required("Please provide your first name.")
    .min(3, "First name should be at least 3 characters."),
  lastName: string()
    .required("Please provide your last name.")
    .min(3, "Last name should be at least 3 characters."),
  email: string()
    .email("Please provide a valid email address.")
    .required("Email address is required.")
    .min(3, "Email should be at least 3 characters."),
});
