import React from "react";
import TimerForm from "../../timer-form/TimerForm";
import Button from "../../button/Button";

class ActionContainer extends React.Component{

    state={
        isFormOpen:false
    }
    render(){

        if (this.state.isFormOpen) {
            return (<TimerForm />)
        }else{
           return (<Button />)
        }
    }
}


export default ActionContainer;