import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "yooo",
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
    
  };

componentDidUpdate(prevProps,prevState){
  
  
  if(prevProps.status !== this.props.status){
    this.setState({
      status:this.props.status,
    })
  }
  console.log('componentDidUpdate')
}

  render() {
    return (
      <div>
        {/* Тернарний оператор для заміни тексту на поле вводу */}
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "--------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={this.onStatusChange}
              value={this.state.status }
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
