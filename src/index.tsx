import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CarouselApp } from './components/carousel-app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const imagesUrls:string[] = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg')
];

const imagesSource:string[] = ['https://pixabay.com', 'https://unsplash.com'];

ReactDOM.render(
  <CarouselApp imagesUrls={imagesUrls} imagesSource={imagesSource} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
