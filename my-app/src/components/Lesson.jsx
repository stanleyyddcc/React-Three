import React from "react";

class Lesson extends React.Component {
    constructor(props){
        super(props);
        this.state={isModalOpen:false};
    }

    handleClickLesson(){
        this.setState({isModalOpen:true});
    }
    handleClickClose(){
        this.setState({isModalOpen:false});
    }
  render() {
    let modal;
    if(this.state.isModalOpen){
        modal = (
            <div className="modal">
          <div className="modal-inner">
            <div className="modal-header"></div>
            <div className="modal-introduction">
              {/* Display the lesson name */}
              <h2>{this.props.name}</h2>

              {/* Display the lesson introduction */}
              <p>{this.props.introduction}</p>
            </div>
            <button className="modal-close-btn" onClick={()=>{this.handleClickClose()}}>Close</button>
          </div>
        </div>
        );
    }
    return (
      <div className="lesson-card">
        <div className="lesson-item" onClick={()=>{this.handleClickLesson()}}>
          <p>{this.props.name}</p>
          <img src={this.props.image} alt="html" />
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;
