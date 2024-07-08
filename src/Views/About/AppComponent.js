import React from "react";
import { toast } from 'react-toastify';
import './demo.scss';
class AppComponent extends React.Component {
    state = {
        courseName: '',
        description: ''
    }
    handleCoursename = (Event) => {
        this.setState({
            courseName: Event.target.value
        })
    }
    handleDescription = (Event) => {
        this.setState({
            description: Event.target.value
        })
    }
    handleSubmitButton = (Event) => {
        let { courseName, description } = this.state;
        if (!courseName && !description) {
            toast.error("Vui long nhập dữ liệu!")
            Event.preventDefault();
            return;
        }
        if (courseName != null && description != null) {
            this.props.addCourse({
                id: Math.floor(Math.random() * 1001),
                CourseName: courseName,
                Description: description
            })
            toast.success("Successfully!")
        }
        else {
            toast.error("Error messenger!")
        }
        this.setState({
            courseName: '',
            description: ''
        })

    }
    render() {
        let { courseName, description } = this.state;
        return (
            <form className="form_input">
                <span className="title_name">CourseName</span>
                <input type="text"
                    value={courseName}
                    onChange={(Event) => this.handleCoursename(Event)}
                />
                <br />
                <span className="title_name">Description</span>
                <input type="text"
                    value={description}
                    onChange={(Event) => this.handleDescription(Event)}
                />
                <br />
                <button className="btnSubmit" type="submit" onClick={(Event) => this.handleSubmitButton(Event)}>Submit</button>
            </form>
        )
    }
}
export default AppComponent;