import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'react-datepicker/dist/react-datepicker.css'

export function Basisinformationen() {
    const [vorname, setVorname] = useState<string>(() =>{
        return sessionStorage.getItem('vorname') || '';
       });

    useEffect(() => {
        sessionStorage.setItem('vorname', vorname);
    }, [vorname]);

    const [vornameError, setVornameError] = useState<boolean>(false);


    const [nachname, setNachname] = useState<string>(() =>{
        return sessionStorage.getItem('nachname') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('nachname', nachname);
    }, [nachname]);

    const [nachnameError, setNachnameError] = useState<boolean>(false);

    const handleWeiter = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(vorname.trim() === ''){
            setVornameError(true);
            event.preventDefault();
        }

        if(nachname.trim() === ''){
            setNachnameError(true);
            event.preventDefault();
        }
    }

    return(
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label
                            htmlFor="VornameEingabe"
                            className="VornameLabel"
                        >
                            Vorname*
                        </Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            id="VornameEingabe"
                            value={vorname}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                setVorname(event.target.value);
                                setVornameError(false);
                            }}
                            isInvalid={vornameError}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bitte gib deinen Vornamen ein.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label
                            htmlFor="NachnameEingabe"
                            className="NachnameLabel"
                        >
                            Nachname*
                        </Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            id="NachnameEingabe"
                            value={nachname}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                setNachname(event.target.value);
                                setNachnameError(false);
                            }}
                            isInvalid={nachnameError}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bitte gib deinen Nachnamen ein.
                        </Form.Control.Feedback>
                    </Form.Group>

                    
                </Form>
            </div>
            <Container className="NavigationButtons">
                <Row>
                    <Col>
                        <LinkContainer to="/">
                            <Button className="ZurueckButton">
                                Zurück
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/Formular_Seite_2">
                            <Button className="WeiterButton" type="submit" onClick={handleWeiter}>
                                Weiter
                            </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
            <Container className="Progressbar">
                <ProgressBar now={10} label={`10%`} className="Progresselement"/>
            </Container>
        </div>
    );
}