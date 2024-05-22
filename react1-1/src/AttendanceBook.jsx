export default function AttendanceBook() {
    return (
        <ul>
            {student.map((student,index) =>{
                return <li key={index}>{student.name}</li>
            })}

        </ul>
    )
}

const student = [
    {
        name: "홍길동"
    },
    {
        name: "홍길동2"
    },
    {
        name: "홍길동3"
    },
    {
        name: "홍길동4"
    },
    {
        name: "홍길동5"
    }
]