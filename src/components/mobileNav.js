import {Navbar, Container, Nav, Button} from "react-bootstrap"

const mobileNav = () => {
    return(
        <Navbar className="navigasi">
            <Container>
                <Nav className="list">
                    <Nav.Link id="nav" className="active">Beranda</Nav.Link>
                    <Nav.Link id="nav">Pesan</Nav.Link>
                    <Nav.Link id="nav">Tentang</Nav.Link>
                    
                </Nav>
                <Button variant="link"><b>Login</b></Button>
                
            </Container>
        </Navbar>
    )
}

export default mobileNav