import s from './content.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Container, Button, CardGroup } from 'react-bootstrap'


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
                          <h1>Forest img </h1>
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

    <Container >
      <h2 className='text-center m-4'>
        Our Service
      </h2>
      <CardGroup>
        <Card className='m-4'>
          <Card.Img
            variant='top'
            src='https://media.istockphoto.com/id/1494024803/photo/concept-of-financial-planning-responsibility-expenses-and-income-asset-approval-concepts.jpg?s=612x612&w=0&k=20&c=xwIh3Q9gQlaZAa_shFtiIHdU8Mlv8k_kHpInFS-cHJI='
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
            src='https://media.istockphoto.com/id/1356386941/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D1%80%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82-%D0%BD%D0%B0-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B3%D0%B0-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5.jpg?b=1&s=612x612&w=0&k=20&c=n2bRxzKmf-hLULffzULcdJmggwU7Y5GzAmYnIgx1rTo='
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
      </CardGroup>


    </Container>



    <Container
      style={{
        background: 'linear-gradient(to bottom, white, #53627f)',
        width: '99vw',
        margin: '0',
        maxWidth: '99vw'
      }}
    >
      <h2 className='text-center m-4'>
        Our Service
      </h2>
      <CardGroup
        style={{
          margin: '0 15% 0'
        }}
      >
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',
              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6963921/pexels-photo-6963921.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',
              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2381872/pexels-photo-2381872.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',

              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup
        style={{
          margin: '0 15% 0'
        }}

      >
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1140134194/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D0%B8%D0%B5-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BE-%D1%81%D0%B2%D0%BE%D0%B5%D0%BC-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%BC.jpg?b=1&s=612x612&w=0&k=20&c=63zfpPfjyS8J3pv1l3SnCjD1zgXDhpQoUFZ6URpOWBg=)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',
              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1191080360/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%BE-%D0%B8-%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B9-%D0%B4%D0%BE%D0%BC.jpg?b=1&s=612x612&w=0&k=20&c=esTrGsujwW-mcm2-vijSNxo6ZnfbFXArkr1OrTActxg=)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',

              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',

              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup
        style={{
          margin: '0 15% 0'
        }}
      >
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5974384/pexels-photo-5974384.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',
              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1270822086/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B.jpg?b=1&s=612x612&w=0&k=20&c=6G4uv23cIjRGP4XbTTumYbhFa10bxBh0nBtk6r3ju7M=)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',
              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='m-4'
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '320px'
          }}
        >

          <Card.Body

          >
            <Card.Text
              style={{
                textAlign: 'center',
                backgroundColor: 'rgba(180, 190, 199, 0.536)',
              }}
            >
              <p
                className={s.p}
              >Teambuilding</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>


  </>
  );

}

export default Content;