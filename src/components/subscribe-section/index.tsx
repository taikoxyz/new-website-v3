import React from "react";
import css from "./subscribe.module.scss";

interface Props {
    children?: React.ReactNode;
}

export const SubscribeSection: React.FC<Props> = ({ children }) => {
    return (
        <section className={css.subscribe}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};
