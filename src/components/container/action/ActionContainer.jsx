import React from "react";
import TimerForm from "../../timer-form/TimerForm";
import Button from "../../button/Button";

class ActionContainer extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.isFormOpen ?
                    (<TimerForm />) :
                    (<Button />)
                }
            </div>
        );
    }
}


export default ActionContainer;