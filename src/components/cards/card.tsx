import React from 'react';
import './card.css';
import Fundo from '../../assets/002aa288-1d72-48f2-a5a3-72659677082d.jpg';


const Card: React.FC = () => {
  return (
    <section className='card-section'>
      <div className="card-container">
        <img className='card-image' src={Fundo} alt="Imagem de fundo" />
      </div>
    </section>
    
  );
};

export default Card;
