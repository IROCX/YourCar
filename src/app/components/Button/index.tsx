import React from 'react';

interface IButtonProps {
    theme?: "filled" | "outlined",
    text: string
}

function Button({theme, text}: IButtonProps) {
    const BASE_BUTTON_STYLE = "px-5 py-3 outline-none rounded-md text-white text-xs font-semibold border-transparent border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1"
    const OUTLINED_BUTTON_STYLE = "bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500"
    const FILLED_BUTTON_STYLE = "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white hover:border-transparent"

    return (
        <div>
            <button
                className={`${BASE_BUTTON_STYLE} ${theme === "filled" ? FILLED_BUTTON_STYLE : OUTLINED_BUTTON_STYLE}`}>
                {text}
            </button>
        </div>
    );
}

export default Button;