/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiAlertTriangle } from "react-icons/fi";
import FormStyle from "./Form.module.scss";
import { ITitle } from "../../screens/SignupForm/SignupForm";

interface formProps {
    titles: ITitle[];
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: (e: React.SyntheticEvent) => void;
    errors: { [p: string]: string };
    values: { [p: string]: string };
}

const Form: React.FC<formProps> = ({
    titles,
    change,
    submit,
    errors,
    values,
}) => {
    const [visible, setVisible] = useState(false);

    const handleVisability = () => {
        setVisible(!visible);
    };
    return (
        <IconContext.Provider value={{ color: "B5B5B5", size: "1.3rem" }}>
            <form className={FormStyle["form-container"]} onSubmit={submit}>
                {titles.map((title) => (
                    <div
                        className={FormStyle["input-container"]}
                        key={title.id}
                    >
                        <label
                            className={FormStyle["input-title"]}
                            htmlFor={title.title}
                        >
                            {title.label}
                        </label>
                        {!title.password ? (
                            <div className={FormStyle["info-input"]}>
                                <div className={FormStyle.icon}>
                                    {title.icon}
                                </div>
                                <input
                                    className={FormStyle.input}
                                    type={title.type}
                                    name={title.title}
                                    id={title.title}
                                    value={values[title.title]}
                                    onChange={change}
                                />
                            </div>
                        ) : (
                            <div className={FormStyle["info-input"]}>
                                <div className={FormStyle.icon}>
                                    {title.icon}
                                </div>
                                <input
                                    className={FormStyle.inputPassword}
                                    type={visible ? "text" : title.type}
                                    name={title.title}
                                    id={title.title}
                                    value={values[title.title]}
                                    onChange={change}
                                />
                                <button
                                    className={FormStyle["icon-hiden"]}
                                    onClick={handleVisability}
                                    type="button"
                                >
                                    {visible
                                        ? title.visibleIcon
                                        : title.invisibleIcon}
                                </button>
                            </div>
                        )}
                        <IconContext.Provider
                            value={{ color: "EC5E5C", size: "1.3rem" }}
                        >
                            {errors[title.title] && (
                                <div className={FormStyle.error}>
                                    <div className={FormStyle.warningIcon}>
                                        <FiAlertTriangle />
                                    </div>
                                    {errors[title.title]}
                                </div>
                            )}
                        </IconContext.Provider>
                    </div>
                ))}

                <button className={FormStyle.signup__btn} type="submit">
                    Sign Up
                </button>
            </form>
        </IconContext.Provider>
    );
};

export default Form;
