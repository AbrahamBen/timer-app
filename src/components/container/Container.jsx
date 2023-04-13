import React from "react";
import TimerForm from "../timer-form/TimerForm";
import Timer from "../timer/Timer";


class Container extends React.Component{

    render() {
        return (
             <div>
                {
                    this.props.isFormOpen ?
                    (<TimerForm />):
                    (<Timer />)
                }
             </div>
        );
    }
}

export default Container;