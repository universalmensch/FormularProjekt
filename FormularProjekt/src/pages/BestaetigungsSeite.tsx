import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function BestaetigungsSeite() {
    return(
        <div className="AußenContainer">
            <div className="Bestaetigungsseite">
                <p>deine Eingaben wurden gespeichert</p>
                <p>du kannst dieses Fenster nun schließen</p>
                
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