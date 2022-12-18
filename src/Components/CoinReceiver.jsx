import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const CoinReceiver = ({balance, setBalance, coins, setCoins}) => {
  const balanceHandler = (coinValue) => {
    // type casts
    coinValue = Number(coinValue);
    setBalance(balance += coinValue);

    const updatedCoins = structuredClone(coins);

    Object.keys(updatedCoins).forEach((key, index) => {
      try{
        if (coinValue == key) {
          updatedCoins[coinValue] += 1;
        }
      } catch(err) {
        //no such coin
      }
    });

    setCoins(updatedCoins);
  }

  return (
    <div className="coin-receiver d-flex flex-direction-row justify-content-center" aria-label="Basic example">
      <h2>Insert coins:</h2>
      <Button variant="secondary" onClick={(e) => balanceHandler(e.currentTarget.textContent)}>1</Button>
      <Button variant="secondary" onClick={(e) => balanceHandler(e.currentTarget.textContent)}>5</Button>
      <Button variant="secondary" onClick={(e) => balanceHandler(e.currentTarget.textContent)}>10</Button>
    </div>
  )
}

export default CoinReceiver