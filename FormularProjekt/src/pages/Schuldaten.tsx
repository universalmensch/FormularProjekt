import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Schuldaten() {
    const [schuljahr, setSchuljahr] = useState<string>(() => {
        return sessionStorage.getItem('schuljahr') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('schuljahr', schuljahr);
    }, [schuljahr]);

    const [abschluss, setAbschluss] = useState<string>(() => {
        return sessionStorage.getItem('abschluss') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('abschluss', abschluss);
    }, [abschluss]);

    const [lieblingsfach, setLieblingsfach] = useState<string>(() => {
        return sessionStorage.getItem('lieblingsfach') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('lieblingsfach', lieblingsfach);
    }, [lieblingsfach]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Schuljahr</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="number"
                            value={schuljahr}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSchuljahr(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Lieblingsfach</Form.Label>
                        <Form.Select
                            className="selection"
                            value={lieblingsfach}
                            onChange={(event) => setLieblingsfach(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Andere">Andere</option>
                            <option value="Deutsch">Deutsch</option>
                            <option value="Englisch">Englisch</option>
                            <option value="Informatik">Informatik</option>
                            <option value="Mathematik">Mathematik</option>
                            <option value="Physik">Physik</option>
                            <option value="Biologie">Biologie</option>
                            <option value="Chemie">Chemie</option>
                        </Form.Select>
                    </Form.Group>
                
                    <Form.Group className="Formularelement">
                        <Form.Label>Angestrebter Abschluss</Form.Label>
                        <Form.Select
                            className="selection"
                            value={abschluss}
                            onChange={(event) => setAbschluss(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Hauptschulabschluss">Hauptschulabschluss</option>
                            <option value="Realschulabschluss">Realschulabschluss</option>
                            <option value="Abitur">Abitur</option>
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
