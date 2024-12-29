import React from 'react';
import list from '../../Data/data.jsx';
import './Accessories.css';
// import Card from './Components/Cards/card'
import Cards from '../../Components/Cards/card';

const Accessories = ({handleClick}) => {
  return (
    <section>
        
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Accessories