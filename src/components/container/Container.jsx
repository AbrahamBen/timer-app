import React from "react";
import TimerForm from "../timer-form/TimerForm";
import Timer from "../timer/Timer";


//2. Create component
class Container extends React.Component{

    state ={
        isFormOpen:false
    }

    render() {
        return (
             <div className="list--container">
                {
                    this.props.isFormOpen ?
                    (
                    <TimerForm />
                    ):
                    (
                    <Timer 
                    title="Apprendre React"
                    project="Développement Web"
                    id="01"
                    elapsed="5609628"
                    runningSince={null} 
                    />
                    )
                }
             </div>
        );
    }
}

export default Container;