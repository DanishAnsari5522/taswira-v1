import { Button } from 'react-bootstrap'
import { FaFire } from 'react-icons/fa'
import Carousel from 'react-bootstrap/Carousel';
import '../css/Home.css'
import one from '../../src/assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.jpg'
import Kocho from './Kocho';

function Home() {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item className='ds1'>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={one} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Unlimited Transactions with zero fees</h1><br />
                                <Button>Get Started</Button>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ds1'>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={two} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Unlimited Transactions with zero fees</h1><br />
                                <Button>Get Started</Button>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ds1'>
                    <div className='ds'>
                        <div className="body">
                            <div className="second-div">
                                <img src={two} className="slider-image" />
                            </div>
                            <div className="first-div">
                                <h1 className='unlimited'>Unlimited Transactions with zero fees</h1><br />
                                <Button>Get Started</Button>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Kocho />
          
        </>
    )
}

export default Home