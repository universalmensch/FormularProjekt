import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Sportdaten() {
    const [sport, setsport] = useState<string>(() => sessionStorage.getItem('sport') || '')
    const [sportHaeufigkeit, setSportHaeufigkeit] = useState<string>(() => sessionStorage.getItem('sportHaeufigkeit') || '');
    const [sportZeit, setSportZeit] = useState<string>(() => sessionStorage.getItem('sportZeit') || '');
    const [sportGruende, setSportGruende] = useState<string>(() => sessionStorage.getItem('sportGruende') || '');

    useEffect(() => sessionStorage.setItem('sport', sport), [sport]);
    useEffect(() => sessionStorage.setItem('sportHaeufigkeit', sportHaeufigkeit), [sportHaeufigkeit]);
    useEffect(() => sessionStorage.setItem('sportZeit', sportZeit), [sportZeit]);
    useEffect(() => sessionStorage.setItem('sportGruende', sportGruende), [sportGruende]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Machst du regelmäßig Sport?</Form.Label>
                        <Form.Select
                            className="selection"
                            value={sport}
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => setsport(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Ja">Ja</option>
                            <option value="Nein">Nein</option>
                        </Form.Select>
                    </Form.Group>

                    {sport === 'Ja' && (
                        <>
                            <Form.Group className="Formularelement">
                                <Form.Label>Wie häufig machst du Sport (pro Woche)?</Form.Label>
                                <Form.Select
                                    className="selection"
                                    value={sportHaeufigkeit}
                                    onChange={(event: ChangeEvent<HTMLSelectElement>) => setSportHaeufigkeit(event.target.value)}
                                >
                                    <option value="">Bitte auswählen</option>
                                    <option value="1">1 mal oder weniger</option>
                                    <option value="24">2 bis 4 mal</option>
                                    <option value="56">5 bis 6 mal</option>
                                    <option value="7">7 mal oder öfter</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="Formularelement">
                                <Form.Label>Zu welcher Tageszeit machst du Sport?</Form.Label>
                                <Form.Select
                                    className="selection"
                                    value={sportZeit}
                                    onChange={(event: ChangeEvent<HTMLSelectElement>) => setSportZeit(event.target.value)}
                                >
                                    <option value="">Bitte auswählen</option>
                                    <option value="morgens">Morgens</option>
                                    <option value="mittags">Mittags</option>
                                    <option value="abends">Abends</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="Formularelement">
                                <Form.Label>Was ist deine Motivation um Sport zu treiben?</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className="EingabeFeld"
                                    rows={3}
                                    value={sportGruende}
                                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setSportGruende(event.target.value)}
                                />
                            </Form.Group>
                        </>
                    )}
                    
                
                    
                </Form>
            </div>
            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/Formular_Seite_4">
                            <Button className="ZurueckButton">Zurück</Button>
                        </LinkContainer>

                        <LinkContainer to="/Formular_Seite_6">
                            <Button className="WeiterButton" type="submit">
                                Weiter
                            </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={70} label={`70%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
