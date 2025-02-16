import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Berufsdaten() {
    const [mutterAbschluss, setMutterAbschluss] = useState<string>(() => sessionStorage.getItem('mutterAbschluss') || '');
    const [vaterAbschluss, setVaterAbschluss] = useState<string>(() => sessionStorage.getItem('vaterAbschluss') || '');
    const [steuerId, setSteuerId] = useState<string>(() => sessionStorage.getItem('steuerId') || '');
    const [beruf, setBeruf] = useState<string>(() => sessionStorage.getItem('beruf') || '');

    const [berufError, setBerufError] = useState<boolean>(false);

    useEffect(() => sessionStorage.setItem('mutterAbschluss', mutterAbschluss), [mutterAbschluss]);
    useEffect(() => sessionStorage.setItem('vaterAbschluss', vaterAbschluss), [vaterAbschluss]);
    useEffect(() => sessionStorage.setItem('steuerId', steuerId), [steuerId]);
    useEffect(() => sessionStorage.setItem('beruf', beruf), [beruf]);

    const getNextRoute = () => {
        if (beruf === 'Schüler') return '/Formular_Seite_7a';
        if (beruf === 'Student') return '/Formular_Seite_7b';
        return '/Formular_Seite_7c';
    };

    const handleWeiter = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!beruf) {
            setBerufError(true);
            event.preventDefault();
        }
    };

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Beruf*</Form.Label>
                        <Form.Select 
                            className="selection"
                            value={beruf}
                            onChange={(event) => {
                                setBeruf(event.target.value);
                                setBerufError(false);
                            }}
                            isInvalid={berufError}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Schüler">Schüler</option>
                            <option value="Student">Student</option>
                            <option value="Arbeitnehmer">Arbeitnehmer</option>
                            <option value="Arbeitgeber">Arbeitgeber</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Bitte wähle deinen Beruf aus.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Steueridentifikationsnummer</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            value={steuerId}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSteuerId(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Abschluss deiner Mutter</Form.Label>
                        <Form.Select
                            className="selection"
                            value={mutterAbschluss}
                            onChange={(event) => setMutterAbschluss(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Realschulabschluss">Realschulabschluss</option>
                            <option value="Ausbildung">Ausbildung</option>
                            <option value="Abitur">Abitur</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                            <option value="Promotion">Promotion</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Abschluss deines Vaters</Form.Label>
                        <Form.Select
                            className="selection"
                            value={vaterAbschluss}
                            onChange={(event) => setVaterAbschluss(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Realschulabschluss">Realschulabschluss</option>
                            <option value="Ausbildung">Ausbildung</option>
                            <option value="Abitur">Abitur</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>

            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/Formular_Seite_5">
                            <Button className="ZurueckButton">Zurück</Button>
                        </LinkContainer>

                        <LinkContainer to={getNextRoute()}>
                            <Button className="WeiterButton" type="submit" onClick={handleWeiter}>
                                Weiter
                            </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={80} label={`80%`} className="Progresselement"/>
            </Container>
        </div>
    );
}
