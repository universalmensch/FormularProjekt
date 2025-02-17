import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Gesundheitsdaten() {
    const [rauchen, setRauchen] = useState<string>(() => sessionStorage.getItem('rauchen') || '');
    const [zigaretten, setZigaretten] = useState<string>(() => sessionStorage.getItem('zigaretten') || '');
    const [tage, setTage] = useState<string>(() => sessionStorage.getItem('tage') || '');

    useEffect(() => sessionStorage.setItem('rauchen', rauchen), [rauchen]);
    useEffect(() => sessionStorage.setItem('zigaretten', zigaretten), [zigaretten]);
    useEffect(() => sessionStorage.setItem('tage', tage), [tage]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Rauchst du?</Form.Label>
                        <Form.Select
                            className="selection"
                            value={rauchen} 
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => setRauchen(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="ja">Ja</option>
                            <option value="nein">Nein</option>
                        </Form.Select>
                    </Form.Group>

                    {rauchen === 'ja' && (
                        <>
                            <Form.Group className="Formularelement">
                                <Form.Label>Wie oft (pro Woche)</Form.Label>
                                <Form.Select
                                    className="selection"
                                    value={tage} 
                                    onChange={(event: ChangeEvent<HTMLSelectElement>) => setTage(event.target.value)}
                                >
                                    <option value="">Bitte auswählen</option>
                                    <option value="1">1 mal</option>
                                    <option value="3">2 bis 3 mal</option>
                                    <option value="3">4 bis 5 mal</option>
                                    <option value="3">6 bis 7 mal</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Form.Group className="Formularelement">
                                <Form.Label>Wie viele Zigaretten?</Form.Label>
                                <Form.Select
                                    className="selection"
                                    value={zigaretten} 
                                    onChange={(event: ChangeEvent<HTMLSelectElement>) => setZigaretten(event.target.value)}
                                >
                                    <option value="">Bitte auswählen</option>
                                    <option value="1">1</option>
                                    <option value="2">2 bis 4</option>
                                    <option value="5">5 bis 10</option>
                                    <option value="10">über 10</option>
                                </Form.Select>
                            </Form.Group>
                        </>
                    )}
                </Form>
            </div>
            <Container className="NavigationButtons">
                        <Row>
                            <Col>
                                <LinkContainer to="/Formular_Seite_3">
                                    <Button className="ZurueckButton">Zurück</Button>
                                </LinkContainer>

                                <LinkContainer to="/Formular_Seite_5">
                                    <Button className="WeiterButton" type="submit">
                                        Weiter
                                    </Button>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Container>
            <Container className="Progressbar">
                <ProgressBar now={55} label={`55%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
