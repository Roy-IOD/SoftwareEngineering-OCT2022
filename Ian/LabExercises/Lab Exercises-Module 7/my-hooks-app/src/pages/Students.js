import StudentList from "../components/StudentList";
import {Outlet} from 'react-router-dom'

function Students() {
    return (
        <div className="Students">
            <Outlet/>
        </div>
    )
}

export default Students