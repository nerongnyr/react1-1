export default function NumberList() {
    // const { numbers } = props
    const numbers = [1,2,3,4,5]

    const todoLists = [
        {   id: 1,
            todo: "할일1" 
        },
        {   id: 1,
            todo: "할일2" 
        },
        {   id: 1,
            todo: "할일3" 
        },
        {   id: 1,
            todo: "할일4" 
        },
        {   id: 1,
            todo: "할일5" 
        }
    ]

    const listItems = numbers.map((numbers, index) =>
        <li key={index}>{numbers}</li>
    )

    //id값을 key props로 사용한 경우
    const itemLists = todoLists.map((todoLists) =>
        <li key={todoLists.id}>{todoLists.todo}</li>
    )
    //index값을 key props로 사용한 경우
    const foos = todoLists.map((foo, index) =>
        <li key={index}>{foo.todo}</li>
    )

    //포멧팅 된 문자열을 key props로 사용한 경우
    const bars = todoLists.map((bar) =>
        <li key={`student-id-${bar.id}`}>{bar.todo}</li>
    )

    return (
        <>
            <ul>{listItems}</ul>
            <ul>{itemLists}</ul>
            <ul>{foos}</ul>
            <ul>{bars}</ul>
        </>
    )
}