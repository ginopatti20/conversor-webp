// src/components/Header.js
import React from 'react';
import './Header.css'; // Archivo CSS para el estilo

function Header() {
  return (
    <header className="header">
        <div className="header-content">
            <div className="header-logo">
            <img src="./src/assets/logo.png" alt="logo de Gino Patti | Web Desinger" />
        </div>

        <nav className="header-nav">
            <a href="https://ginopattiweb.tech/">Inicio</a>
            <a href="https://www.youtube.com/@ginopattiweb">Tutoriales</a>
            <a href="https://ginopatti.gumroad.com/">Templates de Elementor</a>
            <a href="#https://ginopattiweb.tech/portfolio/">Portfolio</a>
        </nav>

        <button className="header-contact-btn">Contacto</button>
        </div>
    </header>
  );
}

export default Header;
