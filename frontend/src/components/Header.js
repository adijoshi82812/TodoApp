import React, { Component } from 'react';

class Header extends Component{
    render(){
        const firstname = "Aditya"
        const lastname = "Joshi"
        return(
            <header>
                <h1>
                    Todo App by {firstname} {lastname}
                </h1>
            </header>
        );
    }
}

export default Header;