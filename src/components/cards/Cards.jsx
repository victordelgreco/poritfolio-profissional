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
        image: 'https://media.istockphoto.com/id/1452761950/pt/foto/sunset-with-mountains-in-the-background-and-flowers-in-front.jpg?s=2048x2048&w=is&k=20&c=s-p2qakw4mLxyz2Mbs1ddiBLZuocDa_P09RVTy4JVbc='
    },
    {
        title:'VegaWood',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/1452761950/pt/foto/sunset-with-mountains-in-the-background-and-flowers-in-front.jpg?s=2048x2048&w=is&k=20&c=s-p2qakw4mLxyz2Mbs1ddiBLZuocDa_P09RVTy4JVbc='
    },
    {
        title:'Calculadora',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/1452761950/pt/foto/sunset-with-mountains-in-the-background-and-flowers-in-front.jpg?s=2048x2048&w=is&k=20&c=s-p2qakw4mLxyz2Mbs1ddiBLZuocDa_P09RVTy4JVbc='
    },
    {
        title:'Api Rick and Morty',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS'],
        image: 'https://media.istockphoto.com/id/1452761950/pt/foto/sunset-with-mountains-in-the-background-and-flowers-in-front.jpg?s=2048x2048&w=is&k=20&c=s-p2qakw4mLxyz2Mbs1ddiBLZuocDa_P09RVTy4JVbc='
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
  
