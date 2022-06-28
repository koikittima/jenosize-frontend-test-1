import React from "react";
import { Container, Row, Col,} from 'react-bootstrap';

function Footer() {

    return (
        <footer className="bg-nav border  pt-4 pb-2">
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <i className="fas fa-pen-square font30 gray-40 "></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <i className="fa fa-check-circle font30 gray-40 ml-2" ></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <i className="fa fa-paper-plane font30 gray-40"></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <i className="fas fa-chart-pie font30 blue-80 " ></i>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <i className="fa fa-cog font30 gray-40 ml-1" ></i>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between'>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <span className='gray-40 font12 blod '>Write</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <span className='gray-40 font12 blod'>Checked</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <span className='gray-40 font12 blod'>Report</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <span className='blue-80 font12 blod blue-80'>Chart</span>
                    </Col>
                    <Col lg={2} md={2} m={2} xs={2} className="">
                        <span className='gray-40 font12 blod'>Settings</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
