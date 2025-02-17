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
                        <Form.Label>Anzahl Arbeitnehmer</Form.Label>
                        <Form.Select 
                            className="selection"
                            value={anzahlArbeitnehmer} 
                            onChange={(event) => setAnzahlArbeitnehmer(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="1">1 bis 10</option>
                            <option value="10">10 bis 50</option>
                            <option value="50">50 bis 100</option>
                            <option value="100">100 bis 500</option>
                            <option value="500">über 500</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Jahresumsatz</Form.Label>
                        <Form.Select 
                            className="selection"
                            value={jahresumsatz} 
                            onChange={(event) => setJahresumsatz(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="500">unter 500 000 €</option>
                            <option value="1000">500 000 € bis 1 000 000 €</option>
                            <option value="10 000">1 000 000 € bis 10 000 000 €</option>
                            <option value="viel">über 10 000 000 €</option>
                        </Form.Select>
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
