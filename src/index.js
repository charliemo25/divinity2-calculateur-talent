import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

function AttrTab(props){
    return (
        <tr>
            <th scope="row">{props.name}</th>
            <td>10</td>
            <td>
                <button type="button" className="btn btn-primary" >+</button>
                <button type="button" className="btn btn-primary">-</button>
            </td>
        </tr>
    );
}


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Faire l'objet niveau
            attributs:[{
                Force: 10,
                Dexterité: 10,
                Intelligence: 10,
                Constitution: 10,
                Mémoire: 10,
                Perception: 10
            }]
            
        };
    }

    render() {
        return (
            <main>
                {/* Header */}
                <header className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Divinity: Original sin 2 - calculateur de talent</h1>
                            <p className="lead">Ceci est un calculateur de talent pour construire son personnage.</p>
                    </div>
                </header>

                {/* Affichage niveau */}
                <Niveau />

                {/* Attribut */}
                <Attribut />
                
            </main>
        );
    }
}

class Niveau extends React.Component {
    render() {
        return (
            <section className="container-fluid" id="niveau">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <p>Niveau requis: 1</p>
                        </div>
                        <div className="col-5 offset-2">
                            <p>Points restant: 0</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Attribut extends React.Component {

    render() {

        return (
            <section className="container-fluid" id ="attribut">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-5">
                            <table className="table" id="tab-attr">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Attribut</th>
                                        <th scope="col">Points</th>
                                        <th scope="col">Ajouter/Retirer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AttrTab name="Force" />
                                    <AttrTab name="Dexterité" />
                                    <AttrTab name="Intelligence" />
                                    <AttrTab name="Constitution" />
                                    <AttrTab name="Mémoire" />
                                    <AttrTab name="Perception" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();
