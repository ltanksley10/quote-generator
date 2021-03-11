import React, { Component } from 'react';
import QuoteInfo from './components/QuoteInfo';
import quotes from './QuoteDB';
//ALL PHOTOS SOURCED FROM UNSPLASH.COM
import photo1 from './images/1.jpeg';
import photo2 from './images/2.jpeg';
import photo3 from './images/3.jpeg';
import photo4 from './images/4.jpeg';
import photo5 from './images/5.jpeg'; 
import photo6 from './images/6.jpeg';
import photo7 from './images/7.jpeg';
import photo8 from './images/8.jpeg';
import photo9 from './images/9.jpeg';
import photo10 from './images/10.jpeg';
import photo11 from './images/11.jpeg';
import photo12 from './images/12.jpeg';
import photo13 from './images/13.jpeg';
import photo14 from './images/14.jpeg';
import photo15 from './images/15.jpeg';
import photo16 from './images/16.jpeg';
import photo17 from './images/17.jpeg';
import photo18 from './images/18.jpeg';
import photo19 from './images/19.jpeg';
import photo20 from './images/20.jpeg';
import photo21 from './images/21.jpeg';
import photo22 from './images/22.jpeg';
import photo23 from './images/23.jpeg';
import photo24 from './images/24.jpeg';
import photo25 from './images/25.jpeg';
import photo26 from './images/26.jpeg';
import photo27 from './images/27.jpeg';
import photo28 from './images/28.jpeg';
import photo29 from './images/29.jpeg';
import photo30 from './images/30.jpeg';
import photo31 from './images/31.jpeg';
import photo32 from './images/32.jpeg';
import photo33 from './images/33.jpeg';
import photo34 from './images/34.jpeg';
import photo35 from './images/35.jpeg';
import photo36 from './images/36.jpeg';
import photo37 from './images/37.jpeg';

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author,
            backgrounds: [
                photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18,
                photo19, photo20, photo21, photo22, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30, photo31, photo32, photo33, photo34, photo35,
                photo36, photo37
            ]
        };
    }
    
    componentDidMount() {
        const imagesPreload = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18,
                photo19, photo20, photo21, photo22, photo23, photo24, photo25, photo26, photo27, photo28, photo29, photo30, photo31, photo32, photo33, photo34, photo35, photo36, photo37];
        imagesPreload.forEach((image) => {
            const newImage = new Image();
            newImage.src = image;
            window[image] = newImage;
        });
    }
    
    shuffleAll = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }
    
    findRandomQuote = (arr) => {
        let num = Math.floor(Math.random() * quotes.length);
        let randQuote = quotes[num];
        this.shuffleAll(quotes);
        this.setState({
            quote: randQuote.quote,
            author: randQuote.author
        });
    }

    findRandomBackground = (arr) => {
        const { backgrounds } = this.state;
        let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        this.shuffleAll(backgrounds);
        document.body.style.background = `url(${background})`;
        document.body.style.transitionProperty = "background";
        document.body.style.transitionDuration = ".5s";
        document.body.style.transitionTimingFunction = "ease-in-out";
        document.body.style.transitionDelay = ".15s";
    }

    render() {
        return (
          <div className="container">
            <QuoteInfo 
                findRandomQuote={this.findRandomQuote} 
                quote={this.state} 
                findRandomBackground={this.findRandomBackground} />
          </div>
        );
    };
}