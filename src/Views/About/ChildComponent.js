import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleDeleteItem = (item) => {
        this.props.delete(item);
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { showJobs } = this.state;
        let { dataCourse } = this.props;
        return (
            <>
                {showJobs === false
                    ?
                    <button type="button" onClick={() => this.handleShowHide()}>Show</button>
                    :
                    <>
                        <div>
                            {dataCourse.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {index + 1} - {item.CourseName} - {item.Description} <span onClick={() => this.handleDeleteItem(item)}>X</span>
                                    </div>
                                )
                            })
                            }
                        </div>
                        <button type="button" onClick={() => this.handleShowHide()}>Hide</button>
                    </>
                }

            </>
        )
    }
}
export default ChildComponent;