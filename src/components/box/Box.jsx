//1.Importation des modules necessaires
import React from "react";
import ListContainer from "../container/list/ListContainer";
import ActionContainer from "../container/action/ActionContainer";

//2. Création du composant
class Box extends React.Component{
    render() {
        return (
             <div className="boxed--view">
                <div className="boxed--viev__box">
                    <ListContainer/>
                    <ActionContainer />
                </div>
             </div>
        );
    }
}
//3.Exportation du composant

export default Box;