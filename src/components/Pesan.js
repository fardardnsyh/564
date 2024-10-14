import {Container, Row, Form, Col, Card, Button} from "react-bootstrap"

const Pesan = () => {
    return(
        <div className='pesan-page'>
            <Container>
                <Row>
                    <Col xs={12} sm={8}>
                        <div className="pesanKita">
                            <Form>
                                <Form.Group>
                                    <textarea className="kotakTanya" placeholder="Tulis Pertanyaan Disini!">
                                    </textarea>
                                </Form.Group>
                            </Form>
                            <Button variant="link" className="tombolPesan disabled">Kirim</Button>
                        </div>
                        
                        <div>
                            <p>Semua Pesan Kamu</p>
                            <Card className="pesan-kita">
                                <Card.Body>
                                    <h6>Judulnya Disini</h6>
                                    <span>Total Balasan : 9 &nbsp; &nbsp; &nbsp; Status : Public</span>
                                </Card.Body>
                            </Card>
                            <Card className="pesan-kita">
                                <Card.Body>
                                    <h6>Judulnya Disini</h6>
                                    <span>Total Balasan : 9 &nbsp; &nbsp; &nbsp; Status : Private</span>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </Col>
                    <Col sm={4}>
                        <div className="bungkusPesan">
                            <p>Pesan Populer</p>
                            <div className="bungkusPertama">
                                <div className="bungkusPesanOrang">
                                    <h6>Judulnya Disini</h6>
                                </div>
                            </div>
                            <div className="bungkusPertama">
                                <div className="bungkusPesanOrang">
                                    <h6>Judulnya Disini</h6>
                                </div>
                            </div>
                            <div className="bungkusPertama">
                                <div className="bungkusPesanOrang">
                                    <h6>Judulnya Disini</h6>
                                </div>
                            </div>
                            <div className="bungkusPertama">
                                <div className="bungkusPesanOrang">
                                    <h6>Judulnya Disini</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Pesan