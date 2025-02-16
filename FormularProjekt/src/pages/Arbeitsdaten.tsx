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
                        //TODO iel genauer bzw auswahl an einkommesspannen netto
                        <Form.Label>Einkommen</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="number"
                            value={einkommen}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEinkommen(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Unternehmen Brnache? als selection?</Form.Label>
                        //TODO agrag baugewerbe chemie und rohstoffindustrie dienstleistung ecormerce ernergie und umwelt finanzen und immobilien und versicherungen
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            value={unternehmen}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setUnternehmen(event.target.value)}
                        />
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
