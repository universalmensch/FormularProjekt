import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
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

    const renderTooltip = (props: any) => (
        <Tooltip id="tooltip" {...props} className="Tooltip">
            Dein monatliches Einkommen nach Steuern und Versicherungsbeiträgen.
        </Tooltip>
    );

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Abschluss</Form.Label>
                        <Form.Select
                            className="selection"
                            value={abschluss}
                            onChange={(event) => setAbschluss(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Realschulabschluss">Realschulabschluss</option>
                            <option value="Ausbildung">Ausbildung</option>
                            <option value="Abitur">Abitur</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                            <Form.Label>monatliches netto Einkommen
                                <img
                                    src="/questionmark2.png"
                                    className="fragezeichen"
                                />
                            </Form.Label>
                        </OverlayTrigger>
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
