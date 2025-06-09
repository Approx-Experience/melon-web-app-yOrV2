import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import React from 'react'

const Homepage = () => {
  return (
    <div>
      {/* First Section: Banner */}
      <section
        className='banner-section py-5'
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <Container>
          <Row className='align-items-center'>
            <Col lg={6}>
              <div className='banner-content'>
                <h1 className='display-4 fw-bold mb-3'>
                  New Spring Collection
                </h1>
                <p className='lead mb-4'>
                  Discover our latest arrivals featuring fresh styles and
                  vibrant colors perfect for the new season. From casual wear to
                  elegant pieces, find your perfect look.
                </p>
                <Button
                  size='lg'
                  style={{ backgroundColor: '#000', borderColor: '#000' }}
                  className='px-4 py-2'
                >
                  Shop New Collection
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className='banner-image text-center'>
                <img
                  src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  alt='New Collection'
                  className='img-fluid rounded'
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Second Section: Category Links */}
      <section className='category-section py-5'>
        <Container>
          <div className='text-center mb-5'>
            <h2 className='fw-bold'>Shop by Category</h2>
            <p className='text-muted'>Explore our curated collections</p>
          </div>
          <Row>
            <Col md={3} className='mb-4'>
              <Card className='border-0 category-card h-100'>
                <div
                  className='category-image-wrapper'
                  style={{ height: '200px', overflow: 'hidden' }}
                >
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                    className='category-image'
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <Card.Body className='text-center'>
                  <Card.Title>Women's Fashion</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className='mb-4'>
              <Card className='border-0 category-card h-100'>
                <div
                  className='category-image-wrapper'
                  style={{ height: '200px', overflow: 'hidden' }}
                >
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                    className='category-image'
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <Card.Body className='text-center'>
                  <Card.Title>Men's Fashion</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className='mb-4'>
              <Card className='border-0 category-card h-100'>
                <div
                  className='category-image-wrapper'
                  style={{ height: '200px', overflow: 'hidden' }}
                >
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                    className='category-image'
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <Card.Body className='text-center'>
                  <Card.Title>Footwear</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className='mb-4'>
              <Card className='border-0 category-card h-100'>
                <div
                  className='category-image-wrapper'
                  style={{ height: '200px', overflow: 'hidden' }}
                >
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                    className='category-image'
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <Card.Body className='text-center'>
                  <Card.Title>Accessories</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Third Section: Featured Products */}
      <section
        className='featured-products py-5'
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <Container>
          <div className='text-center mb-5'>
            <h2 className='fw-bold'>Featured Products</h2>
            <p className='text-muted'>Discover our hand-picked favorites</p>
          </div>
          <Row>
            <Col md={12}>
              <div className='product-cards-area'>
                {/* This is where future product cards will go */}
                <div className='text-center text-muted py-5'>
                  <p>Product cards will be displayed here</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Homepage
