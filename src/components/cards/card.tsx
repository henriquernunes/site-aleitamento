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
          <h1 className='card-title2'>O QUE É O ALEITAMENTO MATERNO</h1>

          <p className='card-p'>Amamentar vai além de nutrir a criança; é uma interação profunda entre mãe e filho, que impacta o estado nutricional da criança, sua capacidade de combater infecções, sua fisiologia, desenvolvimento cognitivo e emocional, além de influenciar sua saúde a longo prazo. Também traz benefícios para a saúde física e mental da mãe.</p>

          <p className='card-p'>A amamentação é uma das principais prioridades do Governo Federal. O Ministério da Saúde orienta que os bebês sejam amamentados até os dois anos de idade ou mais, sendo que, nos primeiros seis meses, devem receber exclusivamente leite materno, sem a necessidade de oferecer sucos, chás, água ou outros alimentos. Quanto mais tempo o bebê for amamentado, melhor para ele e para a mãe. Após os seis meses, a amamentação deve ser complementada com alimentos saudáveis e de acordo com os hábitos da família, mas sem interromper o aleitamento.</p>
        </section>

        <section className='card-section2'>
          <h1 className='card-title2'>QUAIS SÃO OS PRINCIPAIS TIPOS DE ALEITAMENTO MATERNO?</h1>
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
          <h1 className='card-title2'>BENEFÍCIOS DO ALEITAMENTO MATERNO</h1>
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

          <h2 className='card-title3'><b>Para o Mãe</b></h2>
          <p className='card-p'>O amamentar ajuda a prevenir doenças como câncer de mama, ovário, útero e diabetes tipo 2. Apenas nos primeiros 6 meses pode aumentar o tempo entre as gestações, e quanto mais tempo a mulher amamenta, maiores os benefícios para sua saúde. Além disso, amamentar também faz bem para a saúde mental, aumentando a autoestima e confiança, o que fortalece o bem-estar da mulher.
          </p>
          <p className='card-p'>
            Amamentar ajuda a regular o metabolismo da mãe e a manter o peso saudável após o parto, o que contribui para a prevenção dessas condições como hipertensão, obesidade e diabetes tipo 2.
          </p>
          <p className='card-p'>
            Estimula a liberação de ocitocina, um hormônio que ajuda a reduzir o estresse e promove sentimentos de bem-estar, o que pode diminuir o risco de depressão pós-parto. Além disso, o ato de amamentar promove o contato pele a pele, que fortalece o vínculo emocional entre a mãe e o bebê, ajudando a melhorar o estado emocional da mãe, diminuindo assim as chances de depressão pós-parto;
          </p>
          <p className='card-p'>
            Auxilia na recuperação pós-parto e diminui as chances de hemorragia quando a ocitocina é liberada durante a amamentação, ajudando o útero a se contrair, o que facilita a sua recuperação e diminui o risco de hemorragias após o parto. Isso acelera o processo de recuperação física da mãe.
          </p>
          <p className='card-p'>
            Promove o vínculo afetivo através do contato próximo e o tempo dedicado ao aleitamento. São momentos que promovem intimidade e segurança tanto para a mãe quanto para o recém nascido.
          </p>
          <p className='card-p'>
            Ajuda a espaçar as gestações: Mulheres que amamentam exclusivamente e que ainda não menstruaram após o parto, com filhos menores de 6 meses, têm menos chances de engravidar. Esse método de evitar a gravidez é chamado de Método da Amenorreia Lactacional (LAM). Para usar esse método, a mulher deve receber orientação do seu médico.
          </p>
          <p className='card-p'>
            Custo financeiro: Amamentar é muito mais econômico do que dar outros tipos de leite para a criança, pois o leite materno é produzido pela mãe para seu filho. Não precisa de preparo, o que economiza tempo, água e gás. Por outro lado, as fórmulas de leite industrializadas podem consumir uma parte significativa do orçamento da família. Além disso, não amamentar pode gerar custos extras, pois crianças que não são amamentadas costumam ficar doentes com mais frequência.
          </p>
        </section>

        <section className='card-section2'>
          <h1 className='card-title2'>FASES DO LEITE MATERNO</h1>
          <h2 className='card-title3'><b>Colostro</b></h2>
          <p className='card-p'>O colostro constitui o primeiro leite com o qual o recém-nascido entra em contato ao realizar a sucção nas mamas da mãe. Trata-se de um líquido de coloração amarelada e consistência viscosa, presente nos alvéolos mamários desde o último trimestre da gestação até os primeiros dias do período pós-parto. Geralmente, a "descida do leite" ocorre dentro de até 30 horas após o parto. (SANTOS., et al, 2017).
          </p>
          <p className='card-p'>O colostro é produzido em quantidade limitada, porém é suficiente para nutrir e suprir as necessidades do neonato. Caracteriza-se por seu elevado teor proteico e pela presença de minerais importantes, como sódio, potássio e cloro, além de conter vitaminas lipossolúveis, tais como E, A e K. Além disso, é frequentemente descrito como uma "vacina natural", devido à sua riqueza em anticorpos transferidos verticalmente, desempenhando um papel essencial na imunidade do recém-nascido. (SANTOS., et al, 2017).
          </p>

          <h2 className='card-title3'><b>Transição</b></h2>
          <p className='card-p'>
            O leite de transição, que se manifesta entre o sétimo e o vigésimo primeiro dia após o parto, é também denominado apojadura ou "descida do leite". Durante essa fase, observa-se uma redução nas quantidades de minerais e proteínas, enquanto ocorre um aumento nos níveis de gordura e carboidratos, preparando gradualmente a composição do leite maduro. (FREITAS.,2019)
          </p>

          <h2 className='card-title3'><b>Maduro</b></h2>
          <p className='card-p'>
            O leite maduro apresenta um aspecto viscoso e uma coloração esbranquiçada, caracterizando-se por concentrações elevadas de proteínas, minerais e vitaminas lipossolúveis, especialmente como vitaminas A, E e carotenoides. Além disso, contém quantidades mínimas de lactose, gorduras e vitaminas do complexo B, que são essenciais para o desenvolvimento e crescimento do recém-nascido. Durante o período de lactação, a produção de leite pode aumentar conforme a necessidade do recém-nascido.
          </p>
        </section>

        <section className='card-section2'>
          <h1 className='card-title2'>COMO FAZER A PEGA CORRETA?</h1>

          <p className='card-p'>Amamentar não deve causar dor. No início, pode haver algum desconforto até que mãe e bebê se adaptem. A amamentação deve ser prazerosa para ambos.
          </p>
          <p className='card-p'>
            A técnica de amamentação, que inclui o posicionamento de mãe e bebê e a pega/sucção do bebê, é crucial para a retirada eficiente do leite materno e para evitar lesões nos mamilos. Uma posição inadequada pode dificultar o correto abocanhamento do mamilo e da aréola pelo bebê, resultando em uma "má pega". Essa má pega, por sua vez, compromete o esvaziamento da mama, podendo diminuir a produção de leite. Além disso, mesmo que o bebê passe longos períodos mamando, uma pega inadequada pode impedir o ganho de peso esperado, pois ele consegue obter o leite anterior, mas tem dificuldade em retirar o leite posterior, que é mais calórico.
          </p>
          <p className='card-p'>A Organização Mundial da Saúde (OMS) define <b>quatro pontos essenciais</b> que indicam um posicionamento e pega corretos:
          </p>
          <h2 className='card-title3'><b>Pontos-chave para o posicionamento adequado</b></h2>
          <ol className='card-list'>
            <li>
              O rosto do bebê deve estar voltado para a mama, com o nariz alinhado ao mamilo;
            </li>
            <li>
              O corpo do bebê deve estar próximo ao da mãe;
            </li>
            <li>
              Cabeça e tronco do bebê devem estar alinhados, sem torção no pescoço;
            </li>
            <li>
              O bebê deve estar bem apoiado.
            </li>
          </ol>

          <h2 className='card-title3'><b>Pontos-chave para a pega adequada</b></h2>
          <ol className='card-list'>
            <li>
              A aréola deve estar mais visível acima da boca do bebê;
            </li>
            <li>
              A boca do bebê deve estar bem aberta;
            </li>
            <li>
              O lábio inferior deve estar virado para fora;
            </li>
            <li>
              O queixo deve tocar a mama.
            </li>
          </ol>

          <p className='card-p'>O ritmo de cada bebê deve ser respeitado.</p>
          <p className='card-p'>A seguir um vídeo explicando como essa pega deve ser feita corretamente. O vídeo é do canal “Grão de gente” disponível também no YouTube.
          </p>
          <iframe
            width="410"
            height="233"
            src="https://www.youtube.com/embed/kBEXkGnoHRg"
            title="Pega certa"
            style={{ border: 'none' }}  // Usando estilo CSS para remover a borda
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>


      </div>
    </>
  );
};

export default Card;
