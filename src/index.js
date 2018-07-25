import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {

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

    constructor(props) {
        super(props);
        this.state = {
            attributs:{
                Force: 10,
                Dexterité: 10,
                Intelligence: 10,
                Constitution: 10,
                Mémoire: 10,
                Perception: 10,
            },
        };
    }

    createAttrTab(){

        const attributs = this.state.attributs;
        
        let table = [];

        //Parcours de l'objet attributs
        for (const nom of Object.keys(attributs)) {
            
            console.log(nom, attributs[nom]);

            let children = [];

            //Nom de l'attribut
            children.push(
                <th scope="row">{nom}</th>
            );

            //valeur de l'attribut
            children.push(
                <td scope="row">
                    {attributs[nom]}
                    <button type="button" className="btn btn-primary" >+</button>
                    <button type="button" className="btn btn-primary">-</button>
                </td>
            );

            table.push(<tr>{children}</tr>);

        }

        return table;

    }

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
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createAttrTab()}
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
