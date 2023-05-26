import React from 'react'
import { useState,useEffect } from "react"
//import axios from 'axios';


function DailyQuote() {

    const [Quote, setQuote] = useState("");
    const [Author, setAuthor] = useState("");
    //https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand

    useEffect(() => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
            //console.log(quote);
            }
        )
    },[]);

    let fetchNewQuote = () => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
            //console.log(quote);
            }
        )
        }

return (
    <div>
    <div className="DailyQuote">
            <h4>{Quote}</h4>
            <small>{Author}</small><br/>
            <button className='button' onClick={fetchNewQuote}>Generate New Quote</button>
        </div>
    
    </div>
)
}

export default DailyQuote
