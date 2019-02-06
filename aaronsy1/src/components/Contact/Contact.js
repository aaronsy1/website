import React, { Component } from 'react';
import Particle from '../Particle/Particle';
import SimpleNav from '../SimpleNav/SimpleNav';
import Favicons from '../Favicons/Favicons';
import("./Contact.css");

export default class Contact extends Component {
    render() {
        return (
            <div >
                <div className = "contactContainer">
                    <div className = "email">
                    <p className = "text-center">
                        Contact:
                    </p>
                    <p className = "text-center gmail">
                        aaronsyweb@gmail.com
                    </p>
                    <p className = "text-center">
                        Riverside, California
                    </p>
                    
                    </div>
                    
                    
                </div>
                <SimpleNav/>
                <Favicons/>
                <Particle />
                

            </div>
        )
    }
}
