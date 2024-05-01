import { useState, useEffect } from "react";

function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(userId)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }


        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    return isOnline
}