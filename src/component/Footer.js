import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <h4>Halo kakak {this.props.id}</h4>
                <h4>Usia {this.props.umur} th, ya?</h4>
            </div>
        );
    }
}

export default Footer;
