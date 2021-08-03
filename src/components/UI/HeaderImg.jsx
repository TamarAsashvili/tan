import React from 'react';
import { Carousel, Image } from 'react-bootstrap';


export default function HeaderImg() {
    return (

        <div >
            <Carousel >
                <Carousel.Item>

                    <Image
                        className="d-block w-100"
                        src='https://picsum.photos/id/13/800/400?text=First slide&bg=282c34'

                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://picsum.photos/id/83/800/400?text=Second slide&bg=282c34"
                        alt="Second slide"

                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://picsum.photos/id/45/800/400?text=Third slide&bg=20232a"
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/id/5/800/400?text=Third slide&bg=20232a"
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>

    );
}


