import React from 'react'
import GoodCard from './GoodCard'

const GoodCardsList = (props) => {
  return (
    <div className="good-cards d-flex justify-content-around mt-5 flex-wrap">
      {
        props.goods.map(element => <GoodCard key={element.id} {...element} handlers={props.handlers} balance={props.balance} goods={props.goods} coins={props.coins} setCoins={props.setCoins}/>)
      }
    </div>
  )
}

export default GoodCardsList