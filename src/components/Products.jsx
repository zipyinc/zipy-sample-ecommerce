/* eslint-disable */

import Card from './Card'
import popularProductsData from '../data/PopularProductsData';
import newArrivedData from '../data/NewArrivedData';


function Products() {


    return (
        <div className="container">
            <section id="popular-products">
                <h2>Popular products</h2>
                <div id="popular-items" className='grid-container'>
                    {/* cards */}
                    {popularProductsData.map( item => (
                        <Card key={item.id} name={item.name} path={item.path} text={item.text}/>
                    ))}
                </div>
            </section>
            
            <section id="new-arrived">
                <h2>New arrived</h2>
                <div id="new-arrived-items" className='grid-container'>
                    {/* cards */}
                    {newArrivedData.map( item => (
                        <Card key={item.id} name={item.name} path={item.path} text={item.text}/>
                    ))}

                </div>
            </section>
        </div>
    )
}

export default Products