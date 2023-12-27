import './Cards.css'
import Card from 'react-bootstrap/Card';
import ButtonDetails from '../Button/ButtonDetails/ButtonDetails'


const dadosCard = [
    {
        title:'Site CP DESIGN',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image:'https://media.istockphoto.com/id/1452761950/pt/foto/sunset-with-mountains-in-the-background-and-flowers-in-front.jpg?s=2048x2048&w=is&k=20&c=s-p2qakw4mLxyz2Mbs1ddiBLZuocDa_P09RVTy4JVbc='
    },
    {
        title:'Lumilandia',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/537613568/pt/foto/forma%C3%A7%C3%B5es-rochosas-no-interior-inferior-ranhura-desfiladeiro-ant%C3%ADlope-canyon.jpg?s=2048x2048&w=is&k=20&c=QPn7bnWwVKuP2Eb27mKlTUQj04pBkEITuO_AXabFROk='
    },
    {
        title:'VegaWood',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/1202227531/pt/foto/beautiful-emerald-colored-glacial-rivers-of-iceland-taken-from-a-helicopter.jpg?s=2048x2048&w=is&k=20&c=JRyhVFCUopw5P-psB5MTNUNy9mig0xnEsEVPfAWyFpg='
    },
    {
        title:'Calculadora',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/1419410282/pt/foto/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=sDYnFJrlDAZPahcJU0pY9JNrAE7aqvbk8hGaNotcJ48='
    },
    {
        title:'Api Rick and Morty',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/159751452/pt/foto/lower-antelope-canyon.jpg?s=2048x2048&w=is&k=20&c=Mhb8eTHFT94_B31jk9rHfEIuq0SKTjSthhhiQh5zERc='
    }
]




export default function CardsList({}) {
    let getDadosCards = dadosCard
    return (

        getDadosCards.map(getDadosCard =>(
<Card style={{ width: '18rem', backgroundColor: 'transparent', boxShadow:'none', color:'#fff', margin:'0px 15px'}}>
        <Card.Img variant="top" src={getDadosCard.image} />
        <Card.Body>
          <Card.Title>{getDadosCard.title}</Card.Title>
          <Card.Text>{getDadosCard.linguages.map(lenguage =>(<div className='linguages-section'>{lenguage}</div>))}</Card.Text>
          <ButtonDetails/>
        </Card.Body>

      </Card>

        ))
      
    );
  }
  
