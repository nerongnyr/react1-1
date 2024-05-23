import {useState} from "react"

export default function LoginControl(props) {
    const [isLogedIn, setIsLogedIn] = useState(false)

    const handleLoginClick = () => {
        setIsLogedIn(true)
    }
    const handleLogoutClick = () => {
        setIsLogedIn(false)
    }

    // let button
    // if (isLogedIn) {
    //     button = <LogoutButton onClick = {handleLogoutClick} />
    // } else {
    //     button = <LoginButton onClick = {handleLoginClick} />
    // }
    return (
        <div>
            <Greeting isLogedIn = {isLogedIn} />
            {/* {button} */}
            {isLogedIn
            ? <LogoutButton onClick = {handleLogoutClick}></LogoutButton>
            : <LoginButton onClick = {handleLogoutClick}></LoginButton>
            }
        </div>
    )
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    )
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    )
}