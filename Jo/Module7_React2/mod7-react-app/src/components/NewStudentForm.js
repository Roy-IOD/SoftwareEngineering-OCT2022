import { useState } from "react"

function NewStudentForm(props) {

    const [fullName, setFullName] = useState('')
    const [location, setLocation] = useState('')
    const [currentJob, setCurrentJob] = useState('')

    //see https://beta.reactjs.org/learn/updating-arrays-in-state#adding-to-an-array for tips on updating arrays in state
    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateHandler([
            {id: props.studentList.length+1, name: fullName, location: location, job: currentJob}, //create a new object based on form values
            ...props.studentList //include all the previous array items
        ])
    }

    return (
        <div className="componentBox NewStudentForm">
            <form onSubmit={handleSubmit}>
                Full Name: <input name="fullName" value={fullName} onChange = {(e) => setFullName(e.target.value)} /><br/>
                Location: <input name="location" value={location} onChange = {(e) => setLocation(e.target.value)} /><br/>
                Current Job: <input name="currentJob" value={currentJob} onChange = {(e) => setCurrentJob(e.target.value)} /><br/>
                <button>Add New Student</button>
            </form>
        </div>
    )
}

export default NewStudentForm