import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Startseite() {
    return(
        <div className="AußenContainer">
            <div className="Startseite">
                <h1>Hallo, schön dass du da bist.</h1>
                <h3><b>ja der satz ist noch kacke Wir freuen uns, dass du an unserer Umfrage teilnimmst.</b></h3>
                //TODO bite auswählen einheitlich rauchen trinken arbeitsmodell sport placeholder ustid und steuerid geburtstagsfeld
                
            </div>
            <LinkContainer to="/Formular_Seite_1">
                    <Button className="StartButton">
                        Starte deine Umfrage
                    </Button>
                </LinkContainer>
        </div>
    );
}