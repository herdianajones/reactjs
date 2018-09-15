import React, { Component } from 'react';
import './../style/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul className="ul_Header">
                    <li>Beranda</li>
                    <li>Tentang</li>
                    <li>Kontak</li>
                </ul>
            </div>
        );
    }
}

export default Header;
