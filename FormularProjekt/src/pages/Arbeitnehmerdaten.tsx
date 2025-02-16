import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Arbeitnehmerdaten() {
    const [abteilung, setAbteilung] = useState<string>(() => sessionStorage.getItem('abteilung') || '');
    const [position, setPosition] = useState<string>(() => sessionStorage.getItem('position') || '');
    const [arbeitszeit, setArbeitszeit] = useState<string>(() => sessionStorage.getItem('arbeitszeit') || 'vollzeit');

    useEffect(() => {
        sessionStorage.setItem('abteilung', abteilung);
    }, [abteilung]);

    useEffect(() => {
        sessionStorage.setItem('position', position);
    }, [position]);

    useEffect(() => {
        sessionStorage.setItem('arbeitszeit', arbeitszeit);
    }, [arbeitszeit]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Abteilung verwaltung buchhaltung marketing entwicklung produktioin</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            value={abteilung}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setAbteilung(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Position  ???</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            value={position}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setPosition(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Arbeitszeitform</Form.Label>
                        <Form.Select 
                            className="selection"
                            value={arbeitszeit} 
                            onChange={(event) => setArbeitszeit(event.target.value)}
                        >
                            <option value="vollzeit">Vollzeit</option>
                            <option value="teilzeit">Teilzeit</option>
                        </Form.Select>
                    </Form.Group>
                
                    
                </Form>
            </div>
            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/Formular_Seite_7c">
                            <Button className="ZurueckButton">Zurück</Button>
                        </LinkContainer>
                        <LinkContainer to="/Formular_Abschluss">
                            <Button className="WeiterButton" type="submit">Abschließen</Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={100} label={`100%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
