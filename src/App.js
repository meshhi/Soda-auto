import HeaderMenu from './Components/Navbar';
import GoodCardsList from './Components/GoodCards/GoodCardsList';
import React, { useState } from 'react';
import CoinReceiver from 'Components/CoinReceiver';

function App() {

  let [currentBalance, setCurrentBalance] = useState(0);
  let [coins, setCoins] = useState({'10': 0, '5': 0, '1': 0});

  let [goods, setGoods] = useState([{
    id: 1,
    title: 'Coffee',
    description: 'Some coffee here!',
    image: 'https://www.instyle.com/thmb/_y9iE8PLvgExAUJG8baXqKtnSN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/030217-coffee-lead-12969cd350a04bc6a3818ade7e05e473.jpg',
    cost: 5,
    count: 20,
  }, 
  {
    id: 2,
    title: 'Tea',
    description: 'Some tea here too!',
    image: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2019/07/beverage-blur-cup-370018.jpg',
    cost: 15,
    count: 10,
  }, 
  {
    id: 3,
    title: 'Soda',
    description: 'Some Soda here too!',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/soda-2.jpg?quality=82&strip=1',
    cost: 7,
    count: 5,
  }, 
  {
    id: 4,
    title: 'Milk',
    description: 'Some Milk here too!',
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F589dd2e644dfd7a46b4cbf4871afa2a782532280',
    cost: 9,
    count: 1,
  }
]);
  

  return (
    <section className="App">
      <HeaderMenu balance={currentBalance}></HeaderMenu>
      <CoinReceiver coins={coins} setCoins={setCoins} balance={currentBalance} setBalance={setCurrentBalance}/>
      <GoodCardsList goods={goods} handlers={{setCurrentBalance, setGoods}} balance={currentBalance} coins={coins} setCoins={setCoins}></GoodCardsList>
    </section>
  );
}

export default App;
