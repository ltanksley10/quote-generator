import React, { Component } from 'react';
import QuoteInfo from './components/QuoteInfo';
import quotes from './QuoteDB';

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author,
            backgrounds: [
                'https://images.unsplash.com/photo-1492892132812-a00a8b245c45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
                'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1445855743215-296f71d4b49c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1484268234627-2278797bec04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1552084162-ec07b3f162dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1556834234-ff0f846f83cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1567712200021-20639e891b7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1476172461888-b2b80f220697?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1567003762442-2078a0da1cee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80',
                'https://images.unsplash.com/photo-1580610447943-1bfbef5efe07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1514864151880-d1bef4892f29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
                'https://images.unsplash.com/photo-1515606174663-ad8323c6895e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1475372674317-8003c861cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
                'https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
                'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1445570123738-861d5bbb99c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
                'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
                'https://images.unsplash.com/photo-1527519135413-1e146b552e10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
                'https://images.unsplash.com/photo-1557162471-8752b8dd92f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1507187632231-5beb21a654a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1377&q=80',
                'https://images.unsplash.com/photo-1466354424719-343280fe118b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80',
                'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1468083684825-012f39547b23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            ],
            viewedBackgrounds: []
        };
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
    
    // findRandomQuote = (arr) => {
    //     let num = Math.floor(Math.random() * quotes.length);
    //     let { viewedQuotes } = this.state;
    //     let splicedQuote = quotes.splice(num, 1)[0];
    //     viewedQuotes.push(splicedQuote);
    //     if (quotes.length == 0) {
    //         quotes = viewedQuotes.splice(0, viewedQuotes.length);
    //         viewedQuotes = [];
    //     }
    //     this.setState({
    //         quote: splicedQuote.quote,
    //         author: splicedQuote.author
    //     });
    // }
    
    findRandomBackground = (arr) => {
        const { backgrounds } = this.state;
        let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        this.shuffleAll(backgrounds);
        document.body.style.background = `url(${background})`;
        document.body.style.transitionProperty = "background";
        document.body.style.transitionDuration = ".5s";
        document.body.style.transitionTimingFunction = "ease-in-out";
        document.body.style.transitionDelay = ".1s";
    }
    
    // findRandomBackground = (arr) => {
    //     let { backgrounds } = this.state;
    //     let { viewedBackgrounds } = this.state;
    //     let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    //     let splicedBackground = backgrounds.splice(background, 1)[0];
    //     viewedBackgrounds.push(splicedBackground);
    //     if (backgrounds.length == 0) {
    //         backgrounds = viewedBackgrounds;
    //     }
    //     document.body.style.background = `url(${splicedBackground})`;
    //     document.body.style.transitionProperty = "background";
    //     document.body.style.transitionDuration = ".5s";
    //     document.body.style.transitionTimingFunction = "ease-in-out";
    //     document.body.style.transitionDelay = ".1s";
    // }

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