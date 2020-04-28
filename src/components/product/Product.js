import React from 'react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import ProductCard from '../productCard/ProductCard';

class Product extends React.Component{
  constructor(){
    super();
    this.state={
      cards :[
        {
          id: 0,
          imageUrl : img1,
          title : 'Scene 1',
          description: 'Old man on a boat with birds.'
        },
        {
          id: 1,
          imageUrl : img2,
          title: 'Scene 2',
          description: 'Woman'
        },
        {
          id: 2,
          imageUrl : img3,
          title: 'Scene 3',
          description: 'Southen light!'
        }
      ]
    }
  }

  render(){
    console.log(this.state);
    const cardComponent = this.state.cards.map((card)=>{
      return (
        <ProductCard key={card.id} imgUrl={card.imageUrl} title={card.title} desc={card.description}/>
      )
    })

    console.log(cardComponent);

    return(
      <div className="row px-3">
        {cardComponent}
      </div>
    )
  }
}

export default Product;
