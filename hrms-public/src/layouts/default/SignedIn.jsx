import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import navIcon from '../../assets/images/pp-mini.jpg';

export default function SignedIn(props) {
    return (
        <div>

            <Navbar variant="dark" expand="lg" className="innerNav">
                <img width="60" className="navIcon" src={navIcon} alt="" />
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>

                        <NavDropdown
                            title="Yüksel Can ÖZDEMİR"
                            className="navDropdown"
                            variant="info"
                        >
                            <NavDropdown.Item variant="info" href="#action/3.1" defaultActive>Profil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Öz Geçmişler</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ayarlar</NavDropdown.Item>
                            <NavDropdown.Item >Yardım</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={props.signOut}>Çıkış Yap</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
