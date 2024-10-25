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

        <section className='card-section2'>
          <h2 className='card-title2'>QUAIS SÃO OS PRINCIPAIS TIPOS DE ALEITAMENTO MATERNO?</h2>
          <ul className='card-list'>
            <li>
              <b>Aleitamento materno exclusivo:</b> a criança recebe apenas leite materno, seja direto da mama, ordenhado ou de outra fonte, sem consumir outros líquidos ou sólidos, exceto por gotas ou xaropes com vitaminas, sais de reidratação, suplementos minerais ou medicamentos.
            </li>
            <li>
              <b>Aleitamento materno predominante:</b> além do leite materno, a criança também recebe água, bebidas à base de água (como chás, infusões, água adocicada), sucos de frutas ou líquidos rituais.
            </li>
            <li>
              <b>Aleitamento materno:</b> a criança é alimentada com leite materno, direto da mama ou ordenhado, podendo ou não receber outros alimentos.
            </li>
            <li>
              <b>Aleitamento materno complementado:</b> a criança recebe leite materno junto com alimentos sólidos ou semissólidos, que complementam, mas não substituem o leite materno.
            </li>
            <li>
              <b>Aleitamento materno misto ou parcial:</b> a criança é alimentada tanto com leite materno quanto com outros tipos de leite.
            </li>
            <li>
              No segundo ano de vida, o leite materno continua sendo uma fonte importante de nutrientes, fornecendo grande parte das necessidades de vitaminas, proteínas e energia. Além disso, ele mantém a proteção contra infecções, e estudos mostram que crianças não amamentadas nessa fase têm quase o dobro de risco de morrer por doenças infecciosas (WORLD HEALTH ORGANIZATION, 2000).
            </li>
          </ul>
        </section>


        <section className='card-section2'>
          <h2 className='card-title2'>BENEFÍCIOS DO ALEITAMENTO MATERNO</h2>
          <div>
            <p className='card-p'>No AM há benefícios fundamentais para a saúde do recém nascido e também para o corpo da mãe enquanto amamenta, sendo de curto e longo prazo para ambos.</p>
          </div>
          <h2 className='card-title3'><b>Para o Recém Nascido</b></h2>
          <ul className='card-list'>
            <li>
              Diminui risco de alergias, hipertensão, colesterol alto, obesidade, diabetes, diarreia, infecções respiratórias e mortalidade infantil
            </li>
          </ul>
          <p className='card-p'>
            A amamentação tem efeitos protetores importantes na saúde da criança, ajudando a prevenir diversas doenças, como alergias, doenças cardiovasculares, diabetes, e infecções, além de reduzir a mortalidade infantil. Isso ocorre devido aos componentes imunológicos presentes no leite materno, que fortalecem o sistema imunológico da criança.(Ministério da Saúde, 2022)
          </p>
          <ul className='card-list'>
            <li>
              Contém nutrientes essenciais para um melhor crescimento e desenvolvimento da criança.
            </li>
          </ul>
          <p className='card-p'>
            Leite materno possui todos os nutrientes necessários, como proteínas, gorduras, vitaminas e minerais, na proporção ideal para o desenvolvimento físico e cognitivo saudável do bebê, contribuindo para seu crescimento de maneira equilibrada. (Ministério da Saúde, 2019)
          </p>
          <ul className='card-list'>
            <li>
              Promove melhor desenvolvimento da cavidade bucal, preparando para a mastigação e fala.
            </li>
          </ul>
          <p className='card-p'>
            A sucção durante a amamentação estimula o desenvolvimento adequado dos músculos faciais, ajudando na formação da mandíbula e no alinhamento correto dos dentes. Isso também facilita a transição para a mastigação de alimentos sólidos e contribui para o desenvolvimento da fala.
          </p>
          <ul className='card-list'>
            <li>
              Proporciona a formação de crianças, adolescentes e adultos mais saudáveis.
            </li>
          </ul>
          <p className='card-p'>
            O aleitamento materno estabelece uma base sólida de saúde para toda a vida. Crianças que foram amamentadas tendem a apresentar menos problemas de saúde ao longo do crescimento, sendo menos propensas à obesidade, hipertensão e outras doenças crônicas na adolescência e na fase adulta. (Ministério da Saúde, 2022)
          </p>
        </section>
      </div>
    </>
  );
};

export default Card;
