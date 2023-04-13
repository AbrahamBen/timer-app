import React from "react";

class TimerForm extends React.Component{

    render() {
        const submitText =this.props.title ? 'Modifier':'Créer;'
        return (
            <div className="form">
                <div className="form--content">
                    <div className="form--item">
                        <label>Titre</label>
                        <input type="text" placeholder="Mon  titre" />
                    </div>

                    <div className="form--item">
                        <label>Projet</label>
                        <input type="text" placeholder="Mon projet" />
                    </div>

                    <div className="form--button">
                        <button className="btn--submit">
                            {submitText}
                        </button>
                        <button className="btn--cancel">
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;