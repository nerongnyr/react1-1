const style = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1 solid gray"
    }
}

export default function ToolBar(props) {
   // const { isLoggedIn, onClickLogin, onVlicnLogout } = props

    return (
        <div>
            {props.isLoggedIn && <span>환영합니다</span>}
            {props.isLoggedIn ? (
                <button onClick={props.onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={props.onClickLogin}>로그인</button>
            )}
        </div>
    )
}