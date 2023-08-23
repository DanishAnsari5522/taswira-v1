import Carousel from 'react-bootstrap/Carousel';
import bacs from '../../assets/back.jpg'
import wed1 from '../../assets/wed1.jpg'
import bacs2 from '../../assets/back9.jpg'
import '../css/Carosal.css'


function Carosal() {
  return (
    <Carousel style={{ marginBottom: '50px' }}>
      <Carousel.Item>
        <img
          className="w-100 h-1/2"
          src={bacs} alt='error' />


        <Carousel.Caption>
          <h1 style={{ marginBottom: '33rem', color: 'black' }}>ITS  YOUR   DREAM   SO  IT   MATTERS</h1>
          <p > Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>

        <img
          className="d-block w-100 h-50"
          src={wed1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ marginBottom: '33rem', color: 'white' }}>Best Wedding Photography Packages </h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={bacs2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 style={{ marginBottom: '33rem', color: 'white' }}>Wedding Reels is an experienced
          </h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;