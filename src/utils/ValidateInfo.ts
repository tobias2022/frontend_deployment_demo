import { IErrors } from "../interfaces/types";

const ValidateInfo = (userInput: IErrors) => {
    const errors: IErrors = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    if (!userInput.firstname.trim()) {
        errors.firstname = "Please enter your first name.";
    }
    if (!userInput.lastname.trim()) {
        errors.lastname = "Please enter your last name.";
    }

    if (!userInput.email) {
        errors.email = "Please enter a valid email address.";
    } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(
            userInput.email
        )
    ) {
        errors.email = "Email address is invalid.";
    }

    if (!userInput.password) {
        errors.password = "Please set up you password.";
    } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/gm.test(
            userInput.password
        )
    ) {
        errors.password = `Your password should have at least 1 lowercase letter,1 uppercase letter,1 digit,1 special character and at least 8 characters long`;
    }

    if (!userInput.confirmPassword) {
        errors.confirmPassword = "Please confirm your password.";
    } else if (userInput.confirmPassword !== userInput.password) {
        errors.confirmPassword = "Password do not match, please re-enter it.";
    }
    return errors;
};

export default ValidateInfo;
