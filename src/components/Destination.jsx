import React from 'react'
import '../css/Destination.css'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
export const Destination = () => {
  return (
    <>
    <div className="container-fluid text-center">
        <h1 className='text-center fw-lighter'>Find Your Destination</h1>
        <p className='text-center'>Most Popular places Are Waiting for you</p>
        <div className="row mt-2">
        <div className="col-12 d-flex justify-content-center">
        <p className='ms-5 ps-5 mt-1'><i class="bi bi-search"></i></p>
        <input type="text" placeholder="search" className='ps-1 fs-5' style={{border:"none",outline:"none"}}/>
        </div>
        </div>

        {/* cityies start */}

        <Carousel className='p-5 m-3'>
        <Carousel.Item >
          <Row>
            <Col md={4} className='p-2'>
              <Card>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/98/44/37/360_F_98443741_G8VlrLoRGWUSA3cGgw36RqEiBkfVR9pX.jpg" />
                <p className='position-absolute' style={{top:"10px",left:"35%",fontSize:"30px",fontWeight:"bold",fontFamily:"italic",color:"white"}}>Thailant</p>
              </Card>
            </Col>
            <Col md={4} className='p-2' >
              <Card>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/98/44/37/360_F_98443741_G8VlrLoRGWUSA3cGgw36RqEiBkfVR9pX.jpg" />
                <p className='position-absolute' style={{top:"10px",left:"35%",fontSize:"30px",fontWeight:"bold",fontFamily:"italic",color:"white"}}>Thailant</p>
              </Card>
            </Col>
            <Col md={4} className='p-2'>
              <Card>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/98/44/37/360_F_98443741_G8VlrLoRGWUSA3cGgw36RqEiBkfVR9pX.jpg" />
                <p className='position-absolute' style={{top:"10px",left:"35%",fontSize:"30px",fontWeight:"bold",fontFamily:"italic",color:"white"}}>Thailant</p>
              </Card>
            </Col>
            <Col md={4} className='p-2'>
              <Card>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/98/44/37/360_F_98443741_G8VlrLoRGWUSA3cGgw36RqEiBkfVR9pX.jpg" />
                <p className='position-absolute' style={{top:"10px",left:"35%",fontSize:"30px",fontWeight:"bold",fontFamily:"italic",color:"white"}}>Thailant</p>
              </Card>
            </Col>
            <Col md={4} className='p-2'>
              <Card>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/98/44/37/360_F_98443741_G8VlrLoRGWUSA3cGgw36RqEiBkfVR9pX.jpg" />
                <p className='position-absolute' style={{top:"10px",left:"35%",fontSize:"30px",fontWeight:"bold",fontFamily:"italic",color:"white"}}>Thailant</p>
              </Card>
            </Col>
            <Col md={4} className='p-2'>
              <Card>
                <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/98/44/37/360_F_98443741_G8VlrLoRGWUSA3cGgw36RqEiBkfVR9pX.jpg" />
                <p className='position-absolute' style={{top:"10px",left:"35%",fontSize:"30px",fontWeight:"bold",fontFamily:"italic",color:"white"}}>Thailant</p>
              </Card>
            </Col>
            
          </Row>
        </Carousel.Item>
      </Carousel>
        {/*cities end */}

    </div>
    </>
  )
}
