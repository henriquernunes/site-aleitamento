import React from 'react';
import './card.css';
import Fundo from '../../assets/002aa288-1d72-48f2-a5a3-72659677082d.jpg';

const Card: React.FC = () => {
  return (
    <>
      <div className='card'>
        <section className='card-section'>
          <div className="card-container">
            <img className='card-image' src={Fundo} alt="Imagem de fundo" />
          </div>
        </section>

        <section className='card-section2'>
          <h2 className='card-title2'>O QUE É O ALEITAMENTO MATERNO</h2>
          <div>
            <p className='card-p'>Amamentar vai além de nutrir a criança; é uma interação profunda entre mãe e filho, que impacta o estado nutricional da criança, sua capacidade de combater infecções, sua fisiologia, desenvolvimento cognitivo e emocional, além de influenciar sua saúde a longo prazo. Também traz benefícios para a saúde física e mental da mãe.</p>
          </div>
          <div>
            <p className='card-p'>A amamentação é uma das principais prioridades do Governo Federal. O Ministério da Saúde orienta que os bebês sejam amamentados até os dois anos de idade ou mais, sendo que, nos primeiros seis meses, devem receber exclusivamente leite materno, sem a necessidade de oferecer sucos, chás, água ou outros alimentos. Quanto mais tempo o bebê for amamentado, melhor para ele e para a mãe. Após os seis meses, a amamentação deve ser complementada com alimentos saudáveis e de acordo com os hábitos da família, mas sem interromper o aleitamento.</p>
          </div>
        </section>

        <section className='card-section3'>
          <h2 className='card-title2'>O ALEITAMENTO MATERNO COSTUMA SER CLASSIFICADO EM SEIS TIPOS</h2>
          <div>
            <p className='card-p'><b>• Aleitamento materno exclusivo:</b> a criança recebe apenas leite materno, seja direto da mama, ordenhado ou de outra fonte, sem consumir outros líquidos ou sólidos, exceto por gotas ou xaropes com vitaminas, sais de reidratação, suplementos minerais ou medicamentos.</p>
          </div>
          <div>
            <p className='card-p'><b>• Aleitamento materno predominante:</b> além do leite materno, a criança também recebe água, bebidas à base de água (como chás, infusões, água adocicada), sucos de frutas ou líquidos rituais.</p>
          </div>
          <div>
            <p className='card-p'><b>• Aleitamento materno:</b> a criança é alimentada com leite materno, direto da mama ou ordenhado, podendo ou não receber outros alimentos.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
