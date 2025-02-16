import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Gesundheitsdaten() {
    const [rauchen, setRauchen] = useState<string>(() => sessionStorage.getItem('rauchen') || '');
    const [zigaretten, setZigaretten] = useState<string>(() => sessionStorage.getItem('zigaretten') || '');
    const [alkohol, setAlkohol] = useState<string>(() => sessionStorage.getItem('alkohol') || '');
    const [alkoholHaeufigkeit, setAlkoholHaeufigkeit] = useState<string>(() => sessionStorage.getItem('alkoholHaeufigkeit') || '');

    useEffect(() => sessionStorage.setItem('rauchen', rauchen), [rauchen]);
    useEffect(() => sessionStorage.setItem('zigaretten', zigaretten), [zigaretten]);
    useEffect(() => sessionStorage.setItem('alkohol', alkohol), [alkohol]);
    useEffect(() => sessionStorage.setItem('alkoholHaeufigkeit', alkoholHaeufigkeit), [alkoholHaeufigkeit]);

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
                    //TODO quatitative und zeitlich fragen beides

                    {rauchen === 'ja' && (
                        <Form.Group className="Formularelement">
                            <Form.Label>Wie viele Zigaretten am Tag?</Form.Label>
                            <Form.Control
                                className="EingabeFeld"
                                type="number"
                                value={zigaretten}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setZigaretten(event.target.value)}
                            />
                        </Form.Group>
                    )}

                    <Form.Group className="Formularelement">
                        <Form.Label>Trinkst du Alkohol?</Form.Label>
                        <Form.Select
                            className="selection"
                            value={alkohol}
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => setAlkohol(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="ja">Ja</option>
                            <option value="nein">Nein</option>
                        </Form.Select>
                    </Form.Group>
                    
                    {alkohol === 'ja' && (
                        <Form.Group className="Formularelement">
                            <Form.Label>Wie oft?</Form.Label>
                            <Form.Control
                                type="text"
                                value={alkoholHaeufigkeit}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setAlkoholHaeufigkeit(event.target.value)}
                            />
                        </Form.Group>
                    )}//TODO in selection ändern
                
                    
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
