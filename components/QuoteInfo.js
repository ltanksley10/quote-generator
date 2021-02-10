import React from 'react';
import quotes from '../QuoteDB';
import backgrounds from '../BackgroundDB';

export default function QuoteInfo(props) {
    const { quote, findRandomQuote, findRandomBackground } = props;
    return (
        <div className="card" id="quote-box">
            <div className="card-body">
                <p className="card-text text-center" id="text"><i className="fas fa-quote-left"></i> {quote.quote} <i className="fas fa-quote-right"></i></p>
                <h5 className="card-title text-center" id="author">~<em> {quote.author}</em></h5>
                <div className="d-grid gap-2 d-flex justify-content-center">
                    <button onClick={() => {findRandomQuote(quotes); findRandomBackground(backgrounds)}} type="submit" 
                        className="btn btn-outline-secondary btn-sm" id="new-quote">New Quote</button>
                    <button className="btn btn-outline-info btn-sm" onClick={() => {findRandomQuote(quotes); 
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))}} 
                        type="submit" id="tweet-quote"><i className="fab fa-twitter"></i> Share Me</button>
                </div>
            </div>
        </div>
    );
}