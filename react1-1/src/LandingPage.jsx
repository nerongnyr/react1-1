import { useState } from "react";
import ToolBar from "./ToolBar";

export default function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}>        
            </ToolBar>
            <div>소플과 함꼐하는 리액트 공부!</div>
        </>
    )
}