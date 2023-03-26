import StudentList from "../components/StudentList";
import {Outlet} from 'react-router-dom'

function Students() {
    return (
        <div className="Students">
            <p>These pages are all student related</p>
            <Outlet/>
        </div>
    )
}

export default Students