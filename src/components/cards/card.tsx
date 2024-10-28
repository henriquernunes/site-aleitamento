import React, { useState } from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';
import Fundo from '../../assets/002aa288-1d72-48f2-a5a3-72659677082d.jpg';
import mastite from '../../assets/mastite.jpg';
import doloridos from '../../assets/mamilosdoloridos.jpg';
import ducto from '../../assets/ducto.jpg';
import ansiedade from '../../assets/ansiedade.jpg';
import ingurjitamento from '../../assets/ingurjitamento.jpg';
import mito from '../../assets/mito.jpg';
import sistemaimu from '../../assets/sistemaimu.jpg';
import multidis from '../../assets/multidis.png';
import { FaInstagram } from 'react-icons/fa';



const Card: React.FC = () => {

  const navigate = useNavigate();
  const [isDiscentesOpen, setIsDiscentesOpen] = useState(false);
  const [isDocenteOpen, setIsDocenteOpen] = useState(false);

  const handleClick = () => {
    navigate('/referencias');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const toggleDiscentes = () => {
    setIsDiscentesOpen(!isDiscentesOpen);
    if (!isDiscentesOpen) {
      setIsDocenteOpen(false); // Fecha o DOCENTE se os DISCENTES forem abertos
    }
  };

  const toggleDocente = () => {
    setIsDocenteOpen(!isDocenteOpen);
    if (!isDocenteOpen) {
      setIsDiscentesOpen(false); // Fecha os DISCENTES se o DOCENTE for aberto
    }
  };

  return (
    <>

      <section className='card-section'>
        <div className="card-container">
          <img className='card-image' src={Fundo} alt="Imagem de fundo" />
        </div>
      </section>


      <div className='card'>
        <nav className='card-nav'>
          <ul>
            <li>
              <a href="#am">O QUE É O ALEITAMENTO MATERNO</a>
            </li>
            <li>
              <a href="#am2">QUAIS SÃO OS PRINCIPAIS TIPOS DE ALEITAMENTO MATERNO?</a>
            </li>
            <li>
              <a href="#am3">BENEFÍCIOS DO ALEITAMENTO MATERNO</a>
            </li>
            <li>
              <a href="#am4">FASES DO LEITE MATERNO</a>
            </li>
            <li>
              <a href="#am5">COMO FAZER A PEGA CORRETA?</a>
            </li>
            <li>
              <a href="#am6">COMPLICAÇÕES MATERNAS DA AMAMENTAÇÃO</a>
            </li>
            <li>
              <a href="#am7">QUANDO É CONTRA INDICADO O ALEITAMENTO MATERNO</a>
            </li>
            <li>
              <a href="#am8">MITOS SOBRE O ALEITAMENTO MATERNO</a>
            </li>
          </ul>
        </nav>

        <section className='card-section2' id='am'>
          <h1 className='card-title2'>O QUE É O ALEITAMENTO MATERNO</h1>

          <p className='card-p'>Amamentar vai além de nutrir a criança; é uma interação profunda entre mãe e filho, que impacta o estado nutricional da criança, sua capacidade de combater infecções, sua fisiologia, desenvolvimento cognitivo e emocional, além de influenciar sua saúde a longo prazo. Também traz benefícios para a saúde física e mental da mãe.</p>

          <p className='card-p'>A amamentação é uma das principais prioridades do Governo Federal. O Ministério da Saúde orienta que os bebês sejam amamentados até os dois anos de idade ou mais, sendo que, nos primeiros seis meses, devem receber exclusivamente leite materno, sem a necessidade de oferecer sucos, chás, água ou outros alimentos. Quanto mais tempo o bebê for amamentado, melhor para ele e para a mãe. Após os seis meses, a amamentação deve ser complementada com alimentos saudáveis e de acordo com os hábitos da família, mas sem interromper o aleitamento.</p>
        </section>

        <section className='card-section2' id='am2'>
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
          </ul>
          <p className='card-p'>
            No segundo ano de vida, o leite materno continua sendo uma fonte importante de nutrientes, fornecendo grande parte das necessidades de vitaminas, proteínas e energia. Além disso, ele mantém a proteção contra infecções, e estudos mostram que crianças não amamentadas nessa fase têm quase o dobro de risco de morrer por doenças infecciosas. (WHO, 2000)
          </p>
        </section>


        <section className='card-section2' id='am3'>
          <h1 className='card-title2'>BENEFÍCIOS DO ALEITAMENTO MATERNO</h1>
          <div>
            <p className='card-p'>No AM há benefícios fundamentais para a saúde do recém nascido e também para o corpo da mãe enquanto amamenta, sendo de curto e longo prazo para ambos.</p>
          </div>
          <h2 className='card-title3'><b>Para o Recém Nascido</b></h2>
          <ul className='card-list'>
            <li>
              Diminui risco de alergias, hipertensão, colesterol alto, obesidade, diabetes, diarreia, infecções respiratórias e mortalidade infantil.
            </li>
          </ul>
          <p className='card-p'>
            A amamentação tem efeitos protetores importantes na saúde da criança, ajudando a prevenir diversas doenças, como alergias, doenças cardiovasculares, diabetes, e infecções, além de reduzir a mortalidade infantil. Isso ocorre devido aos componentes imunológicos presentes no leite materno, que fortalecem o sistema imunológico da criança. (Ministério da Saúde, 2022)
          </p>
          <ul className='card-list'>
            <li>
              Contém nutrientes essenciais para um melhor crescimento e desenvolvimento da criança.
            </li>
          </ul>
          <p className='card-p'>
            O leite materno possui todos os nutrientes necessários, como proteínas, gorduras, vitaminas e minerais, na proporção ideal para o desenvolvimento físico e cognitivo saudável do bebê, contribuindo para seu crescimento de maneira equilibrada. (Ministério da Saúde, 2019)
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

          <h2 className='card-title3'><b>Para a Mãe</b></h2>
          <ul className='card-list'>
            <li style={{ marginBottom: 10 }}>
              O amamentar ajuda a prevenir doenças como câncer de mama, ovário e útero,  diabetes tipo 2, hipertensão e obesidade. Apenas nos primeiros 6 meses pode aumentar o tempo entre as gestações, e quanto mais tempo a mulher amamenta, maiores os benefícios para sua saúde. Além disso, amamentar também faz bem para a saúde mental, aumentando a autoestima e confiança, o que fortalece o bem-estar da mulher. Ajuda a regular o metabolismo e manter o peso saudável após o parto.
            </li>
            <li style={{ marginBottom: 10 }}>
              Estimula a liberação de ocitocina, um hormônio que ajuda a reduzir o estresse e promove sentimentos de bem-estar, o que pode diminuir o risco de depressão pós-parto. Além disso, o ato de amamentar promove o contato pele a pele, que fortalece o vínculo emocional entre a mãe e o bebê, ajudando a melhorar o estado emocional da mãe, diminuindo assim as chances de depressão pós-parto;
            </li>
            <li style={{ marginBottom: 10 }}>
              Auxilia na recuperação pós-parto e diminui as chances de hemorragia quando a ocitocina é liberada durante a amamentação, ajudando o útero a se contrair, o que facilita a sua recuperação e diminui o risco de hemorragias após o parto. Isso acelera o processo de recuperação física da mãe.
            </li>
            <li style={{ marginBottom: 10 }}>
              Promove o vínculo afetivo através do contato próximo e o tempo dedicado ao aleitamento. São momentos que promovem intimidade e segurança tanto para a mãe quanto para o recém nascido.
            </li>
            <li style={{ marginBottom: 10 }}>
              Ajuda a espaçar as gestações: Mulheres que amamentam exclusivamente e que ainda não menstruaram após o parto, com filhos menores de 6 meses, têm menos chances de engravidar. Esse método de evitar a gravidez é chamado de Método da Amenorreia Lactacional (LAM). Para usar esse método, a mulher deve receber orientação do seu médico.
            </li>
            <li style={{ marginBottom: 10 }}>
              Custo financeiro: Amamentar é muito mais econômico do que dar outros tipos de leite para a criança, pois o leite materno é produzido pela mãe para seu filho. Não precisa de preparo, o que economiza tempo, água e gás. Por outro lado, as fórmulas de leite industrializadas podem consumir uma parte significativa do orçamento da família. Além disso, não amamentar pode gerar custos extras, pois crianças que não são amamentadas costumam ficar doentes com mais frequência.
            </li>
          </ul>
        </section>

        <section className='card-section2' id='am4'>
          <h1 className='card-title2'>FASES DO LEITE MATERNO</h1>
          <h2 className='card-title3'><b>Colostro</b></h2>
          <p className='card-p'>O colostro constitui o primeiro leite com o qual o recém-nascido entra em contato ao realizar a sucção nas mamas da mãe. Trata-se de um líquido de coloração amarelada e consistência viscosa, presente nos alvéolos mamários desde o último trimestre da gestação até os primeiros dias do período pós-parto. Geralmente, a "descida do leite" ocorre dentro de até 30 horas após o parto. (SANTOS., et al, 2017)
          </p>
          <p className='card-p'>O colostro é produzido em quantidade limitada, porém é suficiente para nutrir e suprir as necessidades do neonato. Caracteriza-se por seu elevado teor proteico e pela presença de minerais importantes, como sódio, potássio e cloro, além de conter vitaminas lipossolúveis, tais como E, A e K. Além disso, é frequentemente descrito como uma "vacina natural", devido à sua riqueza em anticorpos transferidos verticalmente, desempenhando um papel essencial na imunidade do recém-nascido. (SANTOS., et al, 2017)
          </p>

          <h2 className='card-title3'><b>Transição</b></h2>
          <p className='card-p'>
            O leite de transição, que se manifesta entre o sexto e o décimo quinto dia após o parto, é também denominado apojadura ou "descida do leite". Durante essa fase, observa-se uma redução nas quantidades de minerais e proteínas, enquanto ocorre um aumento nos níveis de gordura e carboidratos, o leite fica mais denso e volumoso, preparando gradualmente a composição do leite maduro. (FREITAS.,2019)
          </p>

          <h2 className='card-title3'><b>Maduro</b></h2>
          <p className='card-p'>
            O leite maduro começa a ser produzido por volta do vigésimo quinto dia e apresenta um aspecto viscoso e uma coloração esbranquiçada, caracterizando-se por concentrações elevadas de proteínas, minerais e vitaminas lipossolúveis, especialmente como vitaminas A, E e carotenoides. Além disso, contém quantidades mínimas de lactose, gorduras e vitaminas do complexo B, que são essenciais para o desenvolvimento e crescimento do recém-nascido. Durante o período de lactação, a produção de leite pode aumentar conforme a necessidade do recém-nascido.
          </p>
        </section>

        <section className='card-section2' id='am5'>
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
          <div className='video-container'>
            <iframe
              width="380"
              height="220"
              src="https://www.youtube.com/embed/kBEXkGnoHRg"
              title="Pega certa"
              style={{ border: 'none' }}  // Usando estilo CSS para remover a borda
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className='card-section2' id='am6'>
          <h1 className='card-title2'>COMPLICAÇÕES MATERNAS DA AMAMENTAÇÃO</h1>
          <h2 className='card-title3'>Ingurgitamento da mama</h2>
          <div className='mastite-container'>
            <img className='img-mastite' src={ingurjitamento} alt="" />
            <p className="card-p pteste">
              O ingurgitamento mamário, popularmente conhecido como leite empedrado, é o acúmulo excessivo de leite nas mamas, causando dor, rigidez, vermelhidão e aumento do volume. Essa condição, comum nos estágios iniciais da lactação, ocorre geralmente nos primeiros dias após o nascimento do bebê. É frequentemente resultado de técnicas incorretas de amamentação, sucção ineficaz do bebê ou uso de suplementos para aumentar a produção de leite, levando a um enchimento excessivo e doloroso dos seios. (LEAL., <em>et al</em>, 2022)
            </p>
          </div>


          <p className='card-p'>
            É fundamental distinguir entre o ingurgitamento fisiológico e o patológico. O ingurgitamento fisiológico é discreto e indica que o leite está descendo, não necessitando de intervenção. Por outro lado, o ingurgitamento patológico se caracteriza por uma distensão tecidual excessiva, causando intenso desconforto, muitas vezes acompanhado de febre e mal-estar. Nessa situação, a mama aumenta de tamanho, torna-se dolorosa e apresenta áreas avermelhadas, edemaciadas e brilhantes. Os mamilos podem ficar achatados, dificultando a pega do bebê, e o leite, frequentemente, não flui com facilidade. Essa condição costuma ocorrer entre o terceiro e o quinto dia após o parto e está geralmente associada a fatores como o início tardio da amamentação, mamadas infrequentes, restrições na duração e frequência das mamadas, uso de suplementos e sucção ineficaz do bebê.  (LEAL., <em>et al</em>, 2022)
          </p>

          <h2 className='card-title3'>Mamilos doloridos</h2>
          <div className='mastite-container'>
            <img className='img-mastite' src={doloridos} alt="" />
            <p className='card-p'>
              Além do ingurgitamento, a dor nos mamilos também é um problema comum durante a amamentação. Isso geralmente ocorre quando o bebê não está corretamente posicionado ao mamar, o que pode fazer com que ele retraia o lábio e o chupe, provocando irritação e feridas nos mamilos. Para evitar ou tratar essa dor, é crucial garantir que o bebê esteja com a boca bem aberta, abocanhando toda a aréola, e não apenas o mamilo, durante a amamentação. Isso promove uma sucção mais eficaz e previne lesões nos mamilos.(CAMARGO., <em>et al</em>, 2024)
            </p>
          </div>
          <p className='card-p'>
            A causa mais frequente de dor ao amamentar é a pega incorreta do bebê. Além de dificultar a saída do leite, comprometendo a nutrição da criança, a sucção inadequada pode lesionar os mamilos devido ao excesso de fricção. Corrigir a pega é essencial tanto para o conforto da mãe quanto para o sucesso da amamentação. (CAMARGO., <em>et al</em>, 2024)
          </p>
          {/*
          <div className='img-container'>
            <img className='img-mastite' src={doloridos} alt="doloridos" />
          </div>
          */}

          <h2 className='card-title3'>Ductos de leite entupidos</h2>
          <div className='mastite-container'>
            <img className='img-mastite' src={ducto} alt="" />
            <p className='card-p'>
              O bloqueio de ductos lactíferos ocorre quando o leite produzido numa determinada área da mama por alguma razão não é drenado adequadamente (não é necessária uma obstrução sólida). Isso ocorre com frequência quando a mama não está sendo esvaziada adequadamente, como quando a amamentação é infrequente ou quando a criança apresenta sucção inefetiva. Pode ocorrer também quando existe pressão local em uma área, como, por exemplo, um sutiã muito apertado, ou como consequência do uso de cremes nos mamilos. (GIUGLIANI., <em>et al</em>, 2004)
            </p>
          </div>
          <p className='card-p'>
            O bloqueio dos ductos lactíferos costuma se apresentar com nódulos mamários dolorosos e sensíveis, em uma mãe sem histórico de outras doenças mamárias. A área afetada pode apresentar dor, calor e vermelhidão (eritema), sem que isso seja acompanhado de febre alta. Em alguns casos, pode-se observar um pequeno e quase imperceptível ponto branco na ponta do mamilo, que pode causar dor intensa durante a amamentação. (GIUGLIANI., <em>et al</em>, 2004)
          </p>

          <h2 className='card-title3'>Mastite</h2>
          <div className='mastite-container'>
            <img className='img-mastite' src={mastite} alt="" />
            <p className='card-p'>
              A mastite é uma infecção da mama que pode ocorrer em mulheres que estão amamentando, especialmente em casos de ingurgitamento ou bloqueio dos ductos lactíferos. Bactérias podem entrar no seio através de mamilos rachados ou machucados, provocando uma infecção. A área afetada torna-se dolorida, quente e avermelhada, e a mulher pode apresentar febre, calafrios e sintomas semelhantes aos da gripe.
            </p>
          </div>
          <p className='card-p'>
            Qualquer fator que favorece a estagnação do leite materno aumenta o risco de desenvolver mastite, como mamadas em horários rígidos, redução súbita no número de mamadas, longos períodos de sono do bebê durante a noite, uso de chupetas ou mamadeiras, esvaziamento incompleto das mamas, freio de língua curto, sucção fraca do bebê, produção excessiva de leite, separação entre mãe e bebê, ou desmame abrupto. A fadiga materna também é considerada um fator que facilita o surgimento da mastite. Mulheres que já tiveram mastite na lactação atual ou em lactações anteriores são mais propensas a novos episódios, devido à ruptura da integridade da junção entre as células alveolares. (GIUGLIANI., <em>et al</em>, 2004)
          </p>
          {/*
          <div className='img-container'>
            <img className='img-mastite' src={mastite} alt="mastite" />
          </div>
          */}

          <h2 className='card-title3'>Ansiedade</h2>
          <div className='mastite-container'>
            <img className='img-mastite' src={ansiedade} alt="" />
            <p className='card-p'>
              A falta de experiência com a amamentação, juntamente com a dificuldade em segurar o bebê e garantir que ele abocanhe corretamente o seio e sugue de forma eficaz, pode levar a sentimentos de ansiedade, frustração e inadequação nas mães. A fadiga e a incerteza sobre se o bebê está recebendo uma quantidade suficiente de leite também contribuem para esse estresse. Além disso, as alterações físicas que ocorrem após o parto, como dor nos mamilos, ingurgitamento mamário e mastite, podem intensificar esses sentimentos. (ABUCHAIM., <em>et al</em>, 2023)
            </p>
          </div>
          <p className='card-p'>
            Esses fatores emocionais e físicos são algumas das razões mais comuns que levam as mães a interromper a amamentação. É importante reconhecer que o apoio emocional, a orientação prática e a educação sobre a amamentação podem ajudar a superar essas dificuldades. O suporte de profissionais de saúde, grupos de apoio e a troca de experiências com outras mães podem oferecer a assistência necessária para melhorar a confiança das mães, facilitar a amamentação e, assim, incentivar a continuidade desse importante vínculo entre mãe e bebê. (ABUCHAIM., <em>et al</em>, 2023)
          </p>
        </section>

        <section className='card-section2' id='am7'>
          <h1 className='card-title2'>QUANDO É CONTRA INDICADO O ALEITAMENTO MATERNO</h1>
          <ul className='card-list'>
            <li>Mães com HIV;</li>
            <li>Mães com HTLV1 e HTLV2; (Vírus linfotrópico da célula T humana tipo 1 e tipo 2);</li>
            <li>Uso de medicamentos que impedem a amamentação, como antineoplásicos e radiofármacos.</li>
            <li>Criança com galactosemia, condição que impede a ingestão de leite contendo lactose.</li>
          </ul>

          <h2 className='card-title3'>Situações em que se recomenda interromper temporariamente a amamentação:</h2>
          <ul className='card-list'>
            <li>Infecção por herpes, quando há lesões na pele da mama (a amamentação deve continuar na mama saudável);</li>
            <li>Varicela, se a mãe tiver lesões de pele entre cinco dias antes e dois dias após o parto. Nesse caso, a mãe deve ser isolada até que as feridas formem crostas, e a criança deve receber imunoglobulina específica logo após o nascimento;</li>
            <li>Doença de Chagas, na fase aguda ou quando houver sangramento visível nas mamas.</li>
          </ul>

          <h2 className='card-title3'>Situações em que a amamentação pode continuar com cuidados:</h2>
          <ul className='card-list'>
            <li>Tuberculose: a mãe deve usar máscara e evitar contato próximo, mas pode amamentar. O bebê deve tomar isoniazida por três meses e ser monitorado com o teste tuberculínico;</li>
            <li>Hanseníase: a mãe pode amamentar após a primeira dose de tratamento, pois já não transmite a doença;</li>
            <li>Hepatite B: com a vacina e a imunoglobulina logo após o nascimento, o risco de transmissão pelo leite é praticamente eliminado;</li>
            <li>Hepatite C: a prevenção de fissuras no seio é importante para evitar a possível transmissão pelo contato com sangue;</li>
            <li>Dengue: a amamentação é permitida, pois o leite contém fatores que podem proteger o bebê da doença;</li>
            <li>Toxoplasmose: a amamentação é recomendada, segundo o Centro de Controle e Prevenção de Doenças (CDC) dos EUA.</li>
          </ul>
        </section>

        <section className='card-section2' id='am8'>
          <h1 className='card-title2'>MITOS SOBRE O ALEITAMENTO MATERNO</h1>
          <ul className='card-list1'>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Crença na produção de leite insuficiente:</b> Biologicamente, as mães produzem leite suficiente para atender à demanda de seus filhos. A insegurança sobre essa capacidade pode levar algumas mães a introduzirem outros alimentos sem buscar orientação profissional, comprometendo o aleitamento materno exclusivo e seus benefícios para mãe e bebê.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Algumas mulheres produzem leite fraco:</b> Esse é um dos mitos mais comuns sobre amamentação. Na realidade, toda mãe produz o leite ideal para o desenvolvimento do seu bebê.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Só o leite materno não sustenta o bebê, e ele chora de fome:</b> O choro nem sempre indica fome. O bebê pode estar com cólica, sentir frio ou calor, estar molhado ou apenas querer atenção e colo. O choro é sua única forma de comunicação nos primeiros meses de vida.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Amamentar é um excelente anticoncepcional:</b> Algumas mulheres podem voltar a ovular mesmo durante a amamentação, pois o ciclo menstrual pode ser retomado, apesar da supressão hormonal. Portanto, deve haver um acompanhamento médico pois existem critérios para haver essa contracepção.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Durante a amamentação, qualquer pílula anticoncepcional pode ser usada:</b> Há pílulas anticoncepcionais específicas para mulheres que estão amamentando. Essas pílulas, conhecidas como minipílulas, contêm apenas progestagênio, um hormônio que bloqueia a ovulação, e podem ser usadas a partir da sexta semana pós-parto.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Canjica e caldo de cana aumentam a produção de leite:</b> A produção de leite materno depende principalmente da frequência com que o bebê mama e esvazia a mama. Quanto mais o bebê suga e esvazia as mamas, maior será a produção de leite.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>O leite materno pode ser fraco para o bebê:</b> Não existe leite materno fraco. Sua composição é praticamente a mesma para todas as mulheres que amamentam, sendo o alimento ideal para o bebê. Ele deve ser exclusivo até o sexto mês de vida e complementar até dois anos ou mais.</li>
            <li><img className='img-mito' src={mito} alt="mito" /><b>Compressa de água quente ajuda com o leite empedrado:</b> O tratamento recomendado para leite empedrado é fazer massagem e ordenha. Compressas quentes podem piorar a situação, aumentando o leite retido nas mamas e intensificando o problema.</li>
          </ul>
        </section>

        <section className='card-section2'>
          <div className='referencia-container'>
            <button className='card-title2 referencia' onClick={handleClick}>REFERÊNCIAS, clique aqui</button>
          </div>
        </section>


        <section className="extras">
          <div className="buttons-container">
            <div className="button-content">
              <button className="xx" onClick={toggleDiscentes}>
                DISCENTES:
              </button>
              {isDiscentesOpen && (
                <ul className="yy">
                  <li>
                    <b>Alanis Vitória Ribeiro da Silva</b><br />
                    <a href="https://orcid.org/0009-0002-9692-1252">https://orcid.org/0009-0002-9692-1252</a>
                  </li>
                  <li>
                    <b>Michelly Araújo</b><br />
                    <a href="http://lattes.cnpq.br/4902150032061030">http://lattes.cnpq.br/4902150032061030</a>
                  </li>
                  <li>
                    <b>Pedro Henrique Resende Rodrigues</b><br />
                    <a href="http://lattes.cnpq.br/5665982111339469">http://lattes.cnpq.br/5665982111339469</a>
                  </li>
                  <li>
                    <b>Quésia Costa Grapiúna</b><br />
                    <a href="http://lattes.cnpq.br/9087099641404324">http://lattes.cnpq.br/9087099641404324</a>
                  </li>
                  <li>
                    <b>Victoria Vieira Oliveira Silva</b><br />
                    <a href="https://orcid.org/0009-0008-1507-7541">https://orcid.org/0009-0008-1507-7541</a>
                  </li>
                </ul>
              )}
            </div>

            <div className="button-content">
              <button className="xx xx1" onClick={toggleDocente}>
                DOCENTE:
              </button>
              {isDocenteOpen && (
                <ul className="yy">
                  <li>
                    <b>Renan Andrews Ribeiro Sousa</b><br />
                    <a href="http://lattes.cnpq.br/5872370605309780">http://lattes.cnpq.br/5872370605309780</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="livros" style={{ marginBottom: 0 }}>
            <h1 className='card-title3' style={{ fontSize: 20, marginBottom: 25 }}>Confira nossos trabalhos publicados</h1>
            <a href="https://www.reflexaoacademica.com.br/assets/ebooks/Y4Pus2n6e63U7OB1a1VxZ5NW39r0F7po.pdf" target="_blank" rel="noopener noreferrer">
              <div className="livros-content">
                <img src={sistemaimu} alt="Livro" className="livro-logo" />
                <h2>Sistema imunológico e doenças autoimunes (Capítulo IX)</h2>
              </div>
            </a>
          </div>

          <div className="livros" style={{ marginTop: 0 }}>
            <a href="http://www.editoraneurus.com.br/multidisciplinariedade-em-saude-reabilitacao-fisioterapeutica-abordagens-psicologicas-e-inovacoes-tecnologicas" target="_blank" rel="noopener noreferrer">
              <div className="livros-content">
                <img src={multidis} alt="Livro" className="livro-logo" />
                <h2>Multidisciplinariedade em saúde (Capítulo IV)</h2>
              </div>
            </a>
          </div>
        </section>

        <section>
          <div className="social-media">
            <a href="https://www.instagram.com/enfermagem_g5?igsh=MXFxaXJudGszbXIzdg%3D%3D">
              <h2>Acompanhe nossa rede social</h2>
              <div className="instagram">
                <FaInstagram className='icon' />
                <span>@enfermagem_g5</span>
              </div>
            </a>
          </div>
        </section>

      </div>





    </>
  );
};

export default Card;
