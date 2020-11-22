import React,{useState} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';

import { useHistory } from 'react-router-dom';



function Search({hideButtons=false}) {
    const [input,setInput] =useState('');
    const history =useHistory();

    const search =e =>{
        // prevent the page from refarace
        e.preventDefault();
        console.log('You Hit search Button',input);
        //History (Push to the Search Page)
        history.push('/search');
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className='search__inputIcon'/>
                <input value={input} onChange={e =>{setInput(e.target.value)}}/>
                <MicIcon className='search__inputIcon'/>
            </div>

            {!hideButtons?(
                <div className="search__buttons">
                     <Button className="search__buttonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                     <Button className="search__buttonsHidden" variant="outlined">I`m Feeling Lucky</Button>
                 </div>
                ) :(

                   
                <div className="search__buttons">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I`m Feeling Lucky</Button>
                </div>

                )}
        </form>
    )
}

export default Search
