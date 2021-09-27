import React, { useState } from 'react';
// import { Button, ToastContainer, Row, Col, Toast } from 'react-bootstrap';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#FFF'
    };
    const imgStyle = {
        width: "50px",
        height: "50px",
    }
    // const [show, setShow] = useState(false);
    return (
        <div className="px-5" style={headerStyle}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img style={imgStyle} src="https://raw.githubusercontent.com/mdanikislam/model-pic/main/logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Contact US</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </Col>
            </Row> */}
        </div>
    );
};

export default Header; <p>Header Area</p>