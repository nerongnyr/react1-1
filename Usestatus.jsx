import useUserStatus from "react";

export default function UserStatus (props) {
    const isOnline = userStatus (props.user.id)
    if (isOnline === null) {
        return '대기중...'
    }
    return isOnline ? '온라인' : '오프라인'
}