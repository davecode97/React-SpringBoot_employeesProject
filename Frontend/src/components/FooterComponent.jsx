import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"><div className="mt-3">&copy;2021</div></span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;