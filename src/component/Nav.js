import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'

function NavBar() {
    const router = useRouter()
    const [show, setShow] = useState(false)
    return (
        <React.Fragment>
            <Navbar expand="lg" sticky="top" className=" pb-0 flex-column px-md-0 pb-md-0 bg-blue border-bottom">
                <Container className="" >
                    <Row className="w-100">
                        <Col lg={12} md={12} sm={12} className="d-flex align-items-center justify-content-between">
                            <Link href='/'>
                                <div className="d-flex align-items-center cursor-p ">
                                    <Navbar.Brand>
                                        {router.asPath.includes("detail") ?
                                            <span className='text-white font14'><i class="fa fa-chevron-left mr-2"></i>Bact</span>
                                            :
                                            <i className="fa fa-home text-white"></i>}
                                    </Navbar.Brand>
                                </div>
                            </Link>

                            <div className="d-flex  align-items-center cursor-pointer"
                                onClick={() => {
                                    setShow(!show)
                                }}
                            >

                                <div className='"d-flex justify-content-center mr-4'>
                                    <span className="text-white "> {router.asPath.includes("detail") ? "OKRS Report" : "All Report"}</span>
                                </div>
                                {router.asPath.includes("detail") ? ""
                                    :
                                    show ? <i className="fas fa-chevron-up text-white font12" />
                                        : <i className="fas fa-chevron-down text-white font12" />
                                }
                            </div>

                            <Link href='/'>
                                <div className="d-flex align-items-center cursor-p ">
                                    {router.asPath.includes("detail") ? <i class="fa fa-ellipsis-h text-white"></i> : <i className='fas fa-sliders-h text-white'></i>}
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavBar;

