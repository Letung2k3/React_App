import React from "react";
import AppComponent from "./AppComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        objCourse: [
            { id: 'asbd1', CourseName: "Javascript", Description: "Font-End" },
            { id: 'asbd2', CourseName: "Spring", Description: "Back-End" },
            { id: 'asbd3', CourseName: "Mysql", Description: "Full-Stack" },
        ]
    }
    deleteEventCourse = (item) => {
        let { objCourse } = this.state;
        let newObjCourse = objCourse;
        newObjCourse = newObjCourse.filter((obj) => obj.id !== item.id);
        this.setState({
            objCourse: newObjCourse
        })
    }
    addEventCourse = (item) => {
        this.setState({
            objCourse: [...this.state.objCourse, item]
        })
    }
    render() {
        console.log(">>state bash here: ", this.state)
        let { objCourse } = this.state;
        return (
            <>
                <AppComponent addCourse={this.addEventCourse} />
                <ChildComponent
                    delete={this.deleteEventCourse}
                    dataCourse={objCourse}
                />
            </>
        )
    }
}
export default MyComponent;