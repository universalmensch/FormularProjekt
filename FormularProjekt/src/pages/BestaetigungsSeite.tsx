import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function BestaetigungsSeite() {
    return(
        <div className="AußenContainer">
            <div className="Bestaetigungsseite">
                <h4><b>Deine Eingaben wurden gespeichert.</b></h4>
                <h4><b>Du kannst dieses Fenster nun schließen.</b></h4>
                
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