import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function BestaetigungsSeite() {
    return(
        <div className="AußenContainer">
            <div className="Bestaetigungsseite">
                <p><b>Deine Eingaben wurden gespeichert.</b></p>
                <p><b>Du kannst dieses Fenster nun schließen.</b></p>
                
            </div>
            <LinkContainer to="/">
                    <Button 
                        className="zurueckZurStartseite"
                        onClick={() => {
                            sessionStorage.clear();
                        }}
                    >
                        Zurück zur Startseite
                    </Button>
                </LinkContainer>
        </div>
    );
}