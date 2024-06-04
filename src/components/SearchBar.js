import React, { useState } from 'react'

export default function SearchBar({callBack}) {

    const [searchValue, setInnerValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        callBack(searchValue) 
    }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
        <input 
            type="text" 
            onChange={(e) => setInnerValue(e.target.value)}
            placeholder='type to search a career...'
            title='type to search a career'
            />
            <button>search</button>
    </form>
  )
}
