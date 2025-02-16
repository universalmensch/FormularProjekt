import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Kontaktdaten() {
    const [email, setEmail] = useState<string>(() => sessionStorage.getItem('email') || '');
    const [telefonnummer, setTelefonnummer] = useState<string>(() => sessionStorage.getItem('telefonnummer') || '');
    const [straße, setStraße] = useState<string>(() => sessionStorage.getItem('straße') || '');
    const [hausnummer, setHausnummer] = useState<string>(() => sessionStorage.getItem('hausnummer') || '');
    const [postleitzahl, setPostleitzahl] = useState<string>(() => sessionStorage.getItem('postleitzahl') || '');
    const [ort, setOrt] = useState<string>(() => sessionStorage.getItem('ort') || '');

    useEffect(() => sessionStorage.setItem('email', email), [email]);
    useEffect(() => sessionStorage.setItem('telefonnummer', telefonnummer), [telefonnummer]);
    useEffect(() => sessionStorage.setItem('straße', straße), [straße]);
    useEffect(() => sessionStorage.setItem('hausnummer', hausnummer), [hausnummer]);
    useEffect(() => sessionStorage.setItem('postleitzahl', postleitzahl), [postleitzahl]);
    useEffect(() => sessionStorage.setItem('ort', ort), [ort]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label htmlFor="EmailEingabe">E-Mail</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="email"
                            id="EmailEingabe"
                            value={email}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label htmlFor="TelefonnummerEingabe">Mobilnummer</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="tel"
                            id="TelefonnummerEingabe"
                            value={telefonnummer}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setTelefonnummer(event.target.value)}
                        />
                    </Form.Group>

                    <Row>
                        <Col md={8}>
                            <Form.Group className="Formularelement">
                                <Form.Label htmlFor="StraßeEingabe">Straße</Form.Label>
                                <Form.Control
                                    className="EingabeFeld"
                                    type="text"
                                    id="StraßeEingabe"
                                    value={straße}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setStraße(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="Formularelement">
                                <Form.Label htmlFor="HausnummerEingabe">Hausnummer</Form.Label>
                                <Form.Control
                                    className="EingabeFeld"
                                    type="number"
                                    id="HausnummerEingabe"
                                    value={hausnummer}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setHausnummer(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8}>
                            <Form.Group className="Formularelement">
                                <Form.Label htmlFor="OrtEingabe">Ort</Form.Label>
                                <Form.Control
                                    className="EingabeFeld"
                                    type="text"
                                    id="OrtEingabe"
                                    value={ort}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setOrt(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="Formularelement">
                                <Form.Label htmlFor="PostleitzahlEingabe">Postleitzahl</Form.Label>
                                <Form.Control
                                    className="EingabeFeld"
                                    type="number"
                                    id="PostleitzahlEingabe"
                                    value={postleitzahl}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPostleitzahl(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    
                </Form>
            </div>
            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/Formular_Seite_1">
                            <Button className="ZurueckButton">Zurück</Button>
                        </LinkContainer>

                        <LinkContainer to="/Formular_Seite_3">
                            <Button className="WeiterButton" type="submit">
                                Weiter
                            </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={25} label={`25%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
