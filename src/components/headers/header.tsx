import React from 'react';
import './header.css';
import Logo from '../../assets/Logo uepa - preto.png';

const Header: React.FC = () => {
  return (
    <header className="header">
        <div className='header-img'>
            <img src={Logo} alt="Logo" className='logo' />
        </div>
        <div>
            <h1 className='header-title'>ENFERMAGEM G5</h1>
        </div>
    </header>
  );
}

export default Header;
    