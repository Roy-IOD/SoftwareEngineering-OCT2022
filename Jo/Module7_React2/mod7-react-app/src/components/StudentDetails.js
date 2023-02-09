import {useParams, Link} from 'react-router-dom'
import { students, StudentAvatar } from './StudentList';

function StudentDetails() {
    const {studentid} = useParams();
    console.log(studentid)
    const student = students.find(stud => parseInt(studentid) === stud.id)

    return (
        <div className="StudentDetails componentBox">
            {student ? (
                <div><h2>{student.name}</h2>

                    <StudentAvatar name={student.name} size="200"/>
                    <p>description about this student</p>
                </div>
            ) : <p>Student {studentid} not found</p>}
            <br/>
            <Link to="/students">View all students</Link>
        </div>
    )
}

export default StudentDetails