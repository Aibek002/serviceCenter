import s from './content.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { Card ,Container,Button } from 'react-bootstrap'
function Content() {
  const logoStyle = {
    display: 'flex',
    marginRight: '10px',
  };
  const contctUs = {
    margin: '0px',
    textTransform: 'uppercase',
  }
  const textContactUs = {
    fontSize: '0.75rem',
    fontWeight: '300',
    textAlign: 'left',
    lineHeight: '1.5',
    marginLeft: '20px',

  }


  return (<>

    <div className={s.content}>

      <div className={s.contentItem}>
        <div className={s.item}><p className={s.textTitle}>Оценка недвижимости в Алматы</p></div>
        <div className={s.item}><p className={s.text}>Предварите​льный оценка<br /> 2 часа - БЕСПЛАТНО</p></div>

        <div className={s.item}>
          <div className={s.flex}>
            <div className={s.flexItem1}>
              <div style={logoStyle}> <img src="https://assets.nicepagecdn.com/80badba9/4873990/images/597177-39fea02a.png" className={s.logoFlex} alt="" />
                <h3 className={s.h3}>НАШИ КОНТАКТЫ</h3></div>
              <p style={textContactUs}>
                +7 (727) 327 27 73 ,<br />
                +7 (707) 327 27 73 ,<br />
                info@gamagroup.kz
              </p>
              <div style={logoStyle}> <img src="https://assets.nicepagecdn.com/80badba9/4873990/images/3177361-cd9ee2c6.png" className={s.logoFlex} alt="" />
                <h3 className={s.h3}>НАШ АДРЕС</h3></div>
              <p style={textContactUs}>
                Республика Казахстан, Алматы,<br /> Жамбыла,114/85, офис 133
              </p>
              <div style={logoStyle}> <img src="https://assets.nicepagecdn.com/80badba9/4873990/images/447114-f6e8f45b.png" className={s.logoFlex} alt="" />
                <h3 className={s.h3}>ВРЕМЯ РАБОТЫ</h3></div>
              <p style={textContactUs}>
                Пн – Пт …… 10:00 – 20:00,<br />
                Сб, Вс ..….… Закрыто
              </p>
            </div>
            <div className={s.flexItem2}>
              <div >
                <h3 style={contctUs}>Свяжитесь с нами</h3>

                <div className={s.ServicesMenu}>
                  <div className={s.items}>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className='d-block w-100'
                          style={{ width: 'auto', height: '400px', borderRadius: '10px' }}
                          src="https://images.pexels.com/photos/1845296/pexels-photo-1845296.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <Carousel.Caption>
                          <h1>Forest img </h1>
                          <p>dscscsdcs</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className='d-block w-100'
                          style={{ width: 'auto', height: '400px', borderRadius: '10px' }}
                          src="https://images.pexels.com/photos/1849112/pexels-photo-1849112.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <Carousel.Caption>
                          <h1>Forest img </h1>
                          <p>dscscsdcs</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel> </div>
                  <div className={s.items}>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className='d-block w-100'
                          style={{ width: 'auto', height: '400px', borderRadius: '10px' }}
                          src="https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <Carousel.Caption>
                          <h1>Forest img </h1>
                          <p>dscscsdcs</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className='d-block w-100'
                          style={{ width: 'auto', height: '400px', borderRadius: '10px' }}
                          src="https://images.pexels.com/photos/1725385/pexels-photo-1725385.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <Carousel.Caption>
                          <h1>Forest img </h1>
                          <p>dscscsdcs</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className={s.items}>

                    <Carousel>
                      <Carousel.Item>
                        <img
                          className='d-block w-100'
                          style={{ width: 'auto', height: '400px', borderRadius: '10px' }}
                          src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <Carousel.Caption>
                          <h1>Forest img </h1>
                          <p>dscscsdcs</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className='d-block w-100'
                          style={{ width: 'auto', height: '400px', borderRadius: '10px' }}
                          src="https://images.pexels.com/photos/273244/pexels-photo-273244.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          alt=""
                        />
                        <Carousel.Caption>
                        Container                    <h1>Forest img </h1>
                          <p>dscscsdcs</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div> 
    <h2 className='text-center m-4'>
        Our Service
      </h2>
    <Container className='d-flex'>
        <Card className='m-4'>
          <Card.Img
            variant='top'
            src='https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1600'
          />
          <Card.Body>
            <Card.Title>
              Developers
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero praesentium commodi quos cumque iure doloremque quod ut dicta illo natus at quia, officia doloribus quis. Voluptatem tenetur ut odio saepe?

            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
        <Card className='m-4'>
      
          <Card.Body>
            <Card.Title>
              Developers
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero praesentium commodi quos cumque iure doloremque quod ut dicta illo natus at quia, officia doloribus quis. Voluptatem tenetur ut odio saepe?

            </Card.Text>
            <Button variant='primary' >Read More</Button>
            
          </Card.Body><Card.Img
            variant='top'
            src='https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1600'
          />
        </Card>
        <Card className='m-4'>
          <Card.Img
            variant='top'
            src='https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1600'
          />
          <Card.Body>
            <Card.Title>
              Developers
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero praesentium commodi quos cumque iure doloremque quod ut dicta illo natus at quia, officia doloribus quis. Voluptatem tenetur ut odio saepe?

            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
    </Container>
  </>
  );

}

export default Content;