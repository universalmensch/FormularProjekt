import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Arbeitgeberdaten() {
    const [anzahlArbeitnehmer, setAnzahlArbeitnehmer] = useState<string>(() => {
        return sessionStorage.getItem('anzahlArbeitnehmer') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('anzahlArbeitnehmer', anzahlArbeitnehmer);
    }, [anzahlArbeitnehmer]);

    const [jahresumsatz, setJahresumsatz] = useState<string>(() => {
        return sessionStorage.getItem('jahresumsatz') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('jahresumsatz', jahresumsatz);
    }, [jahresumsatz]);

    const [umsatzsteuerID, setUmsatzsteuerID] = useState<string>(() => {
        return sessionStorage.getItem('umsatzsteuerID') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('umsatzsteuerID', umsatzsteuerID);
    }, [umsatzsteuerID]);

    const renderTooltip = (props: any) => (
        <Tooltip id="tooltip" {...props} className="Tooltip">
            Die Umsatzsteuer-ID wird für die steuerliche Identifikation verwendet.
        </Tooltip>
    );

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Anzahl Arbeitnehmer auswahl 1 10 - 100</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="number"
                            value={anzahlArbeitnehmer}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setAnzahlArbeitnehmer(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Jahresumsatz</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="number"
                            value={jahresumsatz}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setJahresumsatz(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                            <Form.Label>Umsatzsteuer-ID
                                <img
                                    src="/questionmark.png"
                                    className="fragezeichen"
                                />
                            </Form.Label>
                        </OverlayTrigger>            
                        <Form.Control
                            placeholder="DE123456789"
                            className="EingabeFeld"
                            type="text"
                            value={umsatzsteuerID}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setUmsatzsteuerID(event.target.value)}
                        />
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
