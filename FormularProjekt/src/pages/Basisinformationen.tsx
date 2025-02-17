import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import { MiddlewareReturn } from '@floating-ui/core';
import { MiddlewareState } from '@floating-ui/dom';

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

    const [geburtstag, setGeburtstag] = useState<Date | null>(() =>{
        const savedDate = sessionStorage.getItem('geburtstag');
        return savedDate ? new Date(savedDate) : null;
    });

    useEffect(() => {
        if (geburtstag) {
            sessionStorage.setItem('geburtstag', geburtstag.toDateString());
        } else {
            sessionStorage.removeItem('geburtstag');
        }
    }, [geburtstag]);

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

                    <Form.Group className="Formularelement">
                        <Form.Label htmlFor="GeburtstagsEingabe">Geburtstag</Form.Label>
                        <div></div>
                        <DatePicker
                            className="Datepicker"
                            id="GeburtstagsEingabe"
                            placeholderText="TT.MM.JJJJ"
                            dateFormat="dd.MM.yyyy"
                            selected={geburtstag}
                            onChange={(date) => setGeburtstag(date ? date : null)}
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            popperPlacement="top"
                            popperModifiers={[
                                {
                                    name: "preventOverflow",
                                    options: { boundary: "window" },
                                    fn: function (state: MiddlewareState): MiddlewareReturn | Promise<MiddlewareReturn> {
                                        throw new Error('unfixable zeug ist doch aufgerufen worden' + state);
                                    }
                                },
                                {
                                    name: "flip",
                                    options: { fallbackPlacements: [] },
                                    fn: function (state: MiddlewareState): MiddlewareReturn | Promise<MiddlewareReturn> {
                                        throw new Error('unfixable zeug ist doch aufgerufen worden' + state);
                                    }
                                },
                            ]}
                        />
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