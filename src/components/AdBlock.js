import React from 'react';
import {Carousel} from 'react-bootstrap';

import CheckPhoto from '../img/checkphoto.png';

class AdBlock extends React.Component {
  render() {
    return (
        <div>
          <Carousel>
            <Carousel.Item>
              <img width={800} height={400} alt="800x400" src={CheckPhoto}/>
              <Carousel.Caption>
                <h3>第一张图片</h3>
                <p>Nothing is given.Everything is earned.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={800} height={400} alt="800x400" src={CheckPhoto}/>
              <Carousel.Caption>
                <h3>第二张图片</h3>
                <p>Nothing is given.Everything is earned.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={800} height={400} alt="800x400" src={CheckPhoto}/>
              <Carousel.Caption>
                <h3>第三张图片</h3>
                <p>Nothing is given.Everything is earned.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
  }
}

export default AdBlock;