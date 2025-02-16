import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Arbeitsdaten() {
    const [abschluss, setAbschluss] = useState<string>(() => sessionStorage.getItem('abschluss') || '');
    const [einkommen, setEinkommen] = useState<string>(() => sessionStorage.getItem('einkommen') || '');
    const [unternehmen, setUnternehmen] = useState<string>(() => sessionStorage.getItem('unternehmen') || '');
    const beruf = sessionStorage.getItem('beruf') || '';

    useEffect(() => {
        sessionStorage.setItem('abschluss', abschluss);
    }, [abschluss]);

    useEffect(() => {
        sessionStorage.setItem('einkommen', einkommen);
    }, [einkommen]);

    useEffect(() => {
        sessionStorage.setItem('unternehmen', unternehmen);
    }, [unternehmen]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Abschluss</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            value={abschluss}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setAbschluss(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>monatliches netto Einkommen</Form.Label>
                        <Form.Select
                            className="selection"
                            value={einkommen}
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => setEinkommen(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="500">weniger als 3000€</option>
                            <option value="3000">3000€ bis 5000€</option>
                            <option value="5000">5000€ bis 10000€</option>
                            <option value="10000">über 10000€</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Branche</Form.Label>
                        <Form.Select
                            className="selection"
                            value={unternehmen}
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => setUnternehmen(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Andere">Andere</option>
                            <option value="Argrar">Agrar</option>
                            <option value="Baugewerbe">Baugewerbe</option>
                            <option value="Chemie">Chemie</option>
                            <option value="Rohstoffindustrie">Rohstoffindustrie</option>
                            <option value="Dienstleistungssektor">Dienstleistungssektor</option>
                            <option value="Ecommerce">Ecommerce</option>
                            <option value="Energie">Energie</option>
                            <option value="Finanzen, Immobilien und Versicherungen">Finanzen, Immobilien und Versicherungen</option>
                        </Form.Select>
                    </Form.Group>
                    
                </Form>
            </div>
            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/Formular_Seite_6">
                            <Button className="ZurueckButton">Zurück</Button>
                        </LinkContainer>
                        <LinkContainer to={beruf === 'Arbeitnehmer' ? "/Formular_Seite_8a" : "/Formular_Seite_8b"}>
                            <Button className="WeiterButton" type="submit">Weiter</Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={90} label={`90%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
