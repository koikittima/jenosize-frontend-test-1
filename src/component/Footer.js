import React from "react";
import { Container, Row, Col,} from 'react-bootstrap';

function Footer() {

    return (
        <footer className="bg-nav border footer-fixed py-4">
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <i className="fas fa-pen-square font25 gray-40 "></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <i className="fa fa-check-circle font25 gray-40" ></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <i className="fa fa-paper-plane font25 gray-40"></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <i className="fas fa-chart-pie font25 blue-80 " ></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <i className="fa fa-cog font25 gray-40 " ></i>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between'>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <span className='gray-40 font12 blod'>Write</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <span className='gray-40 font12 blod'>Checked</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <span className='gray-40 font12 blod'>Report</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <span className='blue-80 font12 blod blue-80'>Chart</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="d-flex justify-content-center">
                        <span className='gray-40 font12 blod '>Settings</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
