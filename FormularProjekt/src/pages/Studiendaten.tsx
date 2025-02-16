import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Studiendaten() {
    const [studiengang, setStudiengang] = useState<string>(() => {
        return sessionStorage.getItem('studiengang') || '';
    });

    const [semester, setSemester] = useState<string>(() => {
        return sessionStorage.getItem('semester') || '';
    });

    const [lieblingsfachstudent, setLieblingsfachstudent] = useState<string>(() => {
        return sessionStorage.getItem('lieblingsfachstudent') || '';
    });

    useEffect(() => {
        sessionStorage.setItem('studiengang', studiengang);
    }, [studiengang]);

    useEffect(() => {
        sessionStorage.setItem('semester', semester);
    }, [semester]);

    useEffect(() => {
        sessionStorage.setItem('lieblingsfachstudent', lieblingsfachstudent);
    }, [lieblingsfachstudent]);

    return (
        <div className="AußenContainer">
            <div className="FormularBody">
                <Form className="Formular">
                    <Form.Group className="Formularelement">
                        <Form.Label>Studiengang</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="text"
                            value={studiengang}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setStudiengang(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Semester</Form.Label>
                        <Form.Control
                            className="EingabeFeld"
                            type="number"
                            value={semester}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setSemester(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="Formularelement">
                        <Form.Label>Lieblingsfach is komisch</Form.Label>
                        <Form.Select
                            className="selection"
                            value={lieblingsfachstudent}
                            onChange={(event) => setLieblingsfachstudent(event.target.value)}
                        >
                            <option value="">Bitte auswählen</option>
                            <option value="Andere">Andere</option>
                            <option value="Deutsch">Deutsch</option>
                            <option value="Englisch">Englisch</option>
                            <option value="Informatik">Programmieren</option>
                            <option value="Mathematik">Mathematik</option>
                            <option value="Physik">User Centered Design</option>
                            <option value="Religion">Produktions Organisation</option>
                            <option value="Sport">Statistik</option>
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
