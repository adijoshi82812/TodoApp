import React, { Component } from 'react';

class Footer extends Component{
    render(){
        const date = new Date();
        const hours = date.getHours();

        let greet;
        if(hours <= 12){
            greet = "Good Morning";
        }else if(hours >= 12 && hours <= 17){
            greet = "Good Afternoon";
        }else{
            greet = "Good Night";
        }

        return(
            <footer
                className="w3-center w3-red w3-container"
            >
                <p>
                    {greet}
                </p>
                <p>
                    Copyright &copy; Joshi's
                </p>
            </footer>
        );
    }
}

export default Footer;