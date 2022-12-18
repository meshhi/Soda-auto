import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

const GoodCard = ({id, title, description, image, cost, count, handlers, balance, goods, coins, setCoins}) => {

  const coinChangeCounterGreed = (nominals, change, availableCoins) => {
    count = 0;

    let monetki = [];
    for (let nominal of nominals) {
      if (nominal > change) {
        continue;
      }
      count += change / nominal;
      if (availableCoins[nominal] <= count) {
        if (nominal == 1 && availableCoins[nominal] == 0) {
          return 'Can`t change sorry'
        }
        continue;
      }
      for (let i = 0; i < count; i++) {
        monetki.push(nominal)
      }
      change = change % nominal;

      if (change == 0) {
        return count;
      }
    }

    return monetki;
  }

  const buyHandler = (cost, count, balance, title, id) => {
    if (count && (cost <= balance)) {
      
      let nominals = []
      for (let item in coins) {
        nominals.push(Number(item))
      }
      nominals.sort((a, b) => a < b )

      const updatedCoins = structuredClone(coins);
      let change = balance - cost;

      let changeResult = coinChangeCounterGreed(nominals, change, updatedCoins);

      console.log(changeResult)

      alert(`You bought ${title}. Your change is ${change}.`)

      handlers.setCurrentBalance(change)
      
      const updatedGoods = goods.map((good) => {
        if (good.id === id) {
          good.count--;
        }
        return good
      })
      handlers.setGoods(updatedGoods)

    } else if (!count){
      alert(`This drink is sold`)
    } else (
      alert(`Not enough money`)
    )
  }

  return (
    <Card className="good-card__item" style={{ width: '18rem' }}>
      <Card.Img style={{ height: '250px' }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" onClick={() => buyHandler(cost, count, balance, title, id)}>Buy <Badge bg="secondary">{cost}</Badge></Button>
          <Alert className="flex-grow-1 ms-2 text-center" variant={count ? "secondary" : "danger"}>
            {count} left
          </Alert>
        </div>

      </Card.Body>
    </Card>
  )
}

export default GoodCard