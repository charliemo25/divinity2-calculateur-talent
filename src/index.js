import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

function Niveau(props){
    return (
        <div className="row">
            <div className="col-5">
                <p>Niveau requis: 1</p>
            </div>
            <div className="col-5 offset-2">
                <p>Points restant: 3</p>
            </div>
        </div>
    );
}

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
                <section className="container-fluid" id="niveau">
                    <div className="container">
                        <Niveau />
                    </div>
                </section>

                {/* Attribut */}
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
                                    <Attribut />
                            </table>
                        </div>
                    </div>
                </div>
            </section>
                
            </main>
        );
    }
}

// class Niveau extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             Niveau: 1,
//             Point: 3,
//         };
//     }

//     render() {
//         return (
//             <section className="container-fluid" id="niveau">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-5">
//                             <p>Niveau requis: 1</p>
//                         </div>
//                         <div className="col-5 offset-2">
//                             <p>Points restant: 3</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

class Attribut extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Force: 10,
            Dexterité: 10,
            Intelligence: 10,
            Constitution: 10,
            Mémoire: 10,
            Perception: 10,
        };
    }

    handleClick(operator, attr){

        if(operator === "+") {
            // On incrémente l'attribut(Force, Dexterité...)
            this.setState({ [attr]: this.state[attr] + 1 });
        }

        if(operator === "-") {
            // On decrémente l'attribut(Force, Dexterité...)
            this.setState({ [attr]: this.state[attr] - 1 });
        }

    }

    render() {   
        const attributs = this.state;

        const table = Object.keys(attributs).map((nom) =>
            <tr>
                <th scope="row">{nom}</th>
                <td>
                    {attributs[nom]}
                    <button type="button" className="btn btn-primary " onClick={() => this.handleClick("+", nom)} >+</button>
                    <button type="button" className="btn btn-primary " onClick={() => this.handleClick("-", nom)}>-</button>
                </td>
            </tr>       
        );

        return (
            <tbody>
                {table}
            </tbody>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();
