import React, { Component } from 'react';
import DB from'./../db/DBNews.json';
import ImagePage from '../Components/ImagePage';
import Item from './Items/Item';
class News extends Component {
    render() {
        return (
          <div>
         <ImagePage></ImagePage>
     <div className="row">
           {
                DB.map((value,key) => {
                  if(value.type===1)
                  {
                  return (
                    <Item key={key} id={value.id} img={value.image} title={value.title} description={value.description.substring(0,50)+" [...]"} price={value.price}></Item>
                  )
                  }
                  return true;
              })
            }
       </div>
     </div>
        );
    }
}

export default News;