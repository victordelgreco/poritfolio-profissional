import './Cards.css'
import Card from 'react-bootstrap/Card';
import ButtonContactMe from '../Button/ButtonContateMe/ButtonContateMe'

const dadosCard = [
    {
        title:'Site CP DESIGN',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS']
    },
    {
        title:'Lumilandia',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS']
    },
    {
        title:'VegaWood',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS']
    },
    {
        title:'Calculadora',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS']
    },
    {
        title:'Api Rick and Morty',
        linguages:['WORDPRESS','HTML','CSS','JAVA SCRIPTS']
    }
]




export default function CardsList({}) {
    let getDadosCards = dadosCard
    return (

        getDadosCards.map(getDadosCard =>(
<Card style={{ width: '18rem', backgroundColor: 'transparent', boxShadow:'none', color:'#fff'}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{getDadosCard.title}</Card.Title>
          <Card.Text>{getDadosCard.linguages.map(lenguage =>(lenguage))}</Card.Text>
          <ButtonContactMe/>
        </Card.Body>
      </Card>

        ))
      
    );
  }
  
