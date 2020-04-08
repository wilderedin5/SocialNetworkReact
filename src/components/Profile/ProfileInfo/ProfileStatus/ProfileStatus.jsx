import React from 'react';

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render(){
        return(
            <div>
                { (!this.state.editMode) ?
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || "----"}</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;