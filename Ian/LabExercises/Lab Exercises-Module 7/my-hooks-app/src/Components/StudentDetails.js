import {useParams} from 'react-router-dom'
import { students, StudentAvatar } from './StudentList';

function StudentDetails() {
    const {id} = useParams();
    const student = students.find(stud => parseInt(id) === stud.id)

    return (
        <div className="StudentDetails componentBox">
            {student ? (
                <div><h2>{student.name}</h2>

                    <StudentAvatar name={student.name} size="200"/>
                    <p>description about this student</p>
                </div>
            ) : <p>Student {id} not found</p>}
        </div>
    )
}

export default StudentDetails