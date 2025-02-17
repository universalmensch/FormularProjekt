import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Koerperdaten() {
    const [augenfarbe, setAugenfarbe] = useState<string>(() => sessionStorage.getItem('augenfarbe') || '');
    const [größe, setGröße] = useState<string>(() => sessionStorage.getItem('größe') || '');
    const [gewicht, setGewicht] = useState<string>(() => sessionStorage.getItem('gewicht') || '100');

    useEffect(() => sessionStorage.setItem('augenfarbe', augenfarbe), [augenfarbe]);
    useEffect(() => sessionStorage.setItem('größe', größe), [größe]);
    useEffect(() => sessionStorage.setItem('gewicht', gewicht), [gewicht]);

    const [selectedOption, setSelectedOption] = useState<string>(() =>{
        return sessionStorage.getItem('selectedOption') || 'option2'
    });

    useEffect(() => {
        sessionStorage.setItem('selectedOption', selectedOption);
    }, [selectedOption]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement Checkboxgroup">
                        <Form.Label>Geschlecht</Form.Label>
                        
                        <div className="checkbox">
                            <Form.Check
                                type="radio"
                                id="Weiblich"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="Weiblich">Weiblich</Form.Label>
                        </div>

                        <div className="checkbox">
                            <Form.Check
                                type="radio"
                                id="Maennlich"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="Maennlich">Männlich</Form.Label>
                        </div>

                        <div className="checkbox">
                            <Form.Check
                                type="radio"
                                id="divers"
                                value="option4"
                                checked={selectedOption === 'option4'}
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="divers">Divers</Form.Label>
                        </div>
                        
                        <div className="checkbox">
                            <Form.Check
                                type="radio"
                                id="KeineAngabe"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleChange}
                            />
                            <Form.Label htmlFor="KeineAngabe">Keine Angabe</Form.Label>
                        </div>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Augenfarbe</Form.Label>
                        <Form.Select
                            className="selection"
                            value={augenfarbe}
                            onChange={(event: ChangeEvent<HTMLSelectElement>) => setAugenfarbe(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Andere">Andere</option>
                            <option value="Blau">Blau</option>
                            <option value="Grün">Grün</option>
                            <option value="Braun">Braun</option>
                            <option value="Grau">Grau</option>
                        </Form.Select>
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="Formularelement">
                                <Form.Label htmlFor="GrößeEingabe">Größe (cm)</Form.Label>
                                <Form.Control
                                    className="EingabeFeld"
                                    type="number"
                                    id="GrößeEingabe"
                                    value={größe}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setGröße(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="Formularelement">
                                <Form.Label htmlFor="GewichtEingabe">Gewicht (kg)</Form.Label>
                                <Form.Control
                                    className="EingabeFeld"
                                    type="number"
                                    id="GewichtEingabe"
                                    value={gewicht}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) => setGewicht(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>

            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/Formular_Seite_2">
                            <Button className="ZurueckButton">Zurück</Button>
                        </LinkContainer>

                        <LinkContainer to="/Formular_Seite_4">
                            <Button className="WeiterButton" type="submit">
                                Weiter
                            </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={40} label={`40%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
