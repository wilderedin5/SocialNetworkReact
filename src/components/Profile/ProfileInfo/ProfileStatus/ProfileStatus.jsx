import React from 'react';

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }
    onChangeStatus = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    render(){
        return(
            <div>
                { (!this.state.editMode) ?
                <div>
                    <span onClick={this.onChangeStatus}>{this.props.status}</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={this.onChangeStatus} value={this.props.status} />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;