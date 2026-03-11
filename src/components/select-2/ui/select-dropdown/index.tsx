'use client';

import React, { useMemo, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { ISelectDefaultItem, ISelectProps } from "../../types";
import { useSelect } from "../../provider";
import css from "./select-dropdown.module.scss";
import clsx from "clsx";

export const SelectDropdown = <T extends ISelectDefaultItem | object>({
    classNames,
    render,
    options,
    renderKey,
    renderName,
    value,
    onChange
}: ISelectProps<T>) => {
    const { state } = useSelect();
    const nodeRef = useRef<HTMLDivElement>(null);

    const valueValue = useMemo(
        () => (value as any)?.[renderKey!],
        [value, renderKey]
    );

    const renderOptions = useMemo(
        () => {
            const activeName = (value as any)?.[renderName!];

            if (activeName === state.inputValue || state.inputValue === '') {
                return options;
            }

            return options.filter((option) => {
                const optionName = (option as any)[renderName!].toLowerCase();
                return optionName.includes(state.inputValue.toLowerCase());
            });
        },
        [renderName, options, value, state.inputValue, renderKey]
    );

    return (
        <CSSTransition
            classNames={css}
            timeout={200}
            in={state.active}
            mountOnEnter
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div
                ref={nodeRef}
                className={clsx(
                    css.dropdown,
                    classNames?.dropdown || css.dropdown_default
                )}
                data-select="dropdown"
            >
                <div
                    className={clsx(
                        css.dropdownContainer,
                        classNames?.dropdownContainer || css.dropdownContainer_default
                    )}
                    data-select="dropdown-container"
                >
                    {renderOptions.map((option) => {
                        const key = (option as any)[renderKey!];
                        const isActive = key === valueValue;

                        return (
                            <React.Fragment key={key}>
                                {render?.option
                                    ? render.option(option, isActive)
                                    : (
                                        <div
                                            className={clsx(
                                                css.option,
                                                classNames?.option || css.option_default,
                                                isActive && (classNames?.optionActive || css.optionActive_default)
                                            )}
                                            onClick={() => onChange?.(isActive ? null : option)}
                                            data-select="option"
                                        >
                                            <span>{(option as any)[renderName!]}</span>
                                        </div>
                                    )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </CSSTransition>
    );
};
