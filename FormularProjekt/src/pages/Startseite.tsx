import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Startseite() {
    return(
        <div className="AußenContainer">
            <div className="Startseite">
                <h1>Hallo, schön dass du da bist.</h1>
                <h4><b>Bitte nehme dir kurz Zeit um unsere Umfrage auszufüllen.</b></h4>
                //TODO geburtstagsfeld mit placeholder, start/end seite, sportseite überarbeiten, fragezeichen anpassen und an wichtigen stellen einfügen, formartierungen retten
                
            </div>
            <LinkContainer to="/Formular_Seite_1">
                    <Button className="StartButton">
                        Starte deine Umfrage
                    </Button>
                </LinkContainer>
        </div>
    );
}