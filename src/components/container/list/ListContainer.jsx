import React from "react";
import Container from "../Container";

class ListContainer extends React.Component{
    render(){
        return(
            <div className="list--container">
                <Container />
                <Container />
            </div>
        );
    }
}

export default ListContainer;