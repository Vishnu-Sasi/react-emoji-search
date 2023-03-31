import React, { useState, useEffect } from 'react';
import Emoji from '../EmojiData/Emoji.json';
import "./EmojiSearch.css"
const EmojiSearch = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = Emoji.filter((emoji) =>
    emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div className='main'>
      <h2> Emoji Search</h2>
      <center>
        <input
          size='30'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      <div className='display'>
        {data.map((emoji) => (
          <div className='card' key={emoji.title}>
            <div
              className='card-body'
              onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
                alert('Emoji Copy');
              }}>
              {emoji.symbol} {emoji.title}
              <p> (click to copy)</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default EmojiSearch;
