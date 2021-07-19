import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                        <div><a href="https://llanesdavid97.github.io" className="navbar-brand" style={{marginLeft:"20px"}}>Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;