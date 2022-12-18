import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderMenu({balance}) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Your current balance is {balance}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;