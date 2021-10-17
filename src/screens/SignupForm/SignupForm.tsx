import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import ValidateInfo from "../../utils/ValidateInfo";
import Form from "../../components/Form/Form";
import SignupFormStyle from "./SignupForm.module.scss";
import request from "../../utils/requestsCRUD";

export interface ITitle {
    password: boolean;
    icon: any;
    visibleIcon?: any;
    invisibleIcon?: any;
    title: string;
    label: string;
    type: string;
    id: number;
}
const SingupForm = () => {
    const formTitles = [
        {
            password: false,
            icon: <FiUser />,
            title: "firstname",
            label: "First Name",
            type: "text",
            id: 1,
        },
        {
            password: false,
            icon: <FiUser />,
            title: "lastname",
            label: "Last Name",
            type: "text",
            id: 2,
        },
        {
            password: false,
            icon: <FiMail />,
            title: "email",
            label: "Email Address",
            type: "text",
            id: 3,
        },
        {
            password: true,
            icon: <FiLock />,
            visibleIcon: <FiEye />,
            invisibleIcon: <FiEyeOff />,
            title: "password",
            label: "Password",
            type: "password",
            id: 4,
        },
        {
            password: true,
            icon: <FiLock />,
            visibleIcon: <FiEye />,
            invisibleIcon: <FiEyeOff />,
            title: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            id: 5,
        },
    ];
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        setErrors(ValidateInfo(values));
        await request({
            url: "/users",
            method: "POST",
            data: values,
        });
    };

    return (
        <div className={SignupFormStyle["signup-form__container"]}>
            <div className={SignupFormStyle["signup-form"]}>
                <div>
                    <h2 className={SignupFormStyle["signup-form__title"]}>
                        Welcome to Quantum
                    </h2>
                    <p className={SignupFormStyle["signup-form__subtitle"]}>
                        Sign up to continue
                    </p>
                </div>
                <Form
                    titles={formTitles}
                    change={handleValueChange}
                    submit={handleFormSubmit}
                    errors={errors}
                    values={values}
                />
            </div>
        </div>
    );
};

export default SingupForm;
