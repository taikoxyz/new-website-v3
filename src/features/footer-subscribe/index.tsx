'use client';

import React from "react";
import { Button } from "@/components/buttons/button";
import { Icon } from "@/components/icon";
import { useForm } from "@/lib/hooks/use-form";
import { Input } from "@/components/input";
import { MediaQuery } from "@/components/media-query";
import { footerContent } from "@/content/data/navigation";
import css from "./footer-subscribe.module.scss";

interface Inputs {
    email: string;
}

export const FooterSubscribe: React.FC = () => {
    const { values, handleChange, handleSubmit } = useForm<Inputs>({
        initialValues: {
            email: "",
        },
        onSubmit: ({}, _, ev) => {
            ev?.preventDefault();
        },
    });

    return (
        <div className={css.root}>
            <Icon className={css.icon} icon="notification" />

            <p className={css.title}>
                {footerContent.subscribe.stayUpdated
                    .split("\n")
                    .map((text, id) => (
                        <span key={text + id}>{text}</span>
                    ))}
            </p>

            <div className={css.box}>
                <form className={`${css.form} aos`} onSubmit={handleSubmit} data-aos-offset="210px">
                    <div className={css.container}>
                        <Input
                            value={values.email}
                            onChange={handleChange}
                            className={{
                                root: css.input,
                                field: css.input_field,
                                input: css.input_input,
                            }}
                            placeholder={footerContent.subscribe.email}
                            name="email"
                        />

                        <MediaQuery query="(min-width: 657px)">
                            <Button
                                className={css.button}
                                text={footerContent.subscribe.subscribe}
                                animated={{ offset: "200px" }}
                            />
                        </MediaQuery>

                        <MediaQuery query="(max-width: 656px)">
                            <Button className={css.button} text={footerContent.subscribe.subscribe} />
                        </MediaQuery>
                    </div>
                </form>
            </div>
        </div>
    );
};
