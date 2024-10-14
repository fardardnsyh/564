import {Container, Button, Row, Col} from "react-bootstrap"
// import tanya from '../img/tanya.png';

const Awal = () => {
    return(
        <div>
        {/* <div className="bundar3"></div>
        <div className="bundar4"></div> */}

        <Container className="awalan">
        <Row>
            <Col xs={12} sm={6}>
                <div className="awal">
                    <p className="wel"><b>Welcome To</b></p>
                    <p className="raha"><b>RahasiaKuy</b></p>
                    <p className="rahasia">RahasiaKuy memungkinkan kamu untuk <br />menerima pesan secara anonim dari<br />teman kamu.</p>
                    <Button variant="link" className="Tombol">Mulai Sekarang</Button>
                </div>
            </Col>
            <Col sm={6}>
            <div>
                <img src={require('../img/tanya.png')} className="gambar1" />
            </div>
            </Col>   
        </Row>
        </Container>
        </div>
        

    )
}

export default Awal