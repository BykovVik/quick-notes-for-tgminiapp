import React from "react";

const HomePage = () => {
    if (window) {
        console.log("Работает", window.Telegram)
    }
    return (
        <div>Hello Vik</div>
    )
}

export default HomePage