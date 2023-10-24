/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';


export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                <img src='./ταινία.png' alt='Netflix'></img>
                    </a>

            </div>
            <div className='header--user'>
            <a href='/'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfWu5P3XRq40XTOquHgtUR_TZ63XAu2hvQQ&usqp=CAU' alt='Usuário'/>
            </a>

                </div>

        </header>

    )
}
