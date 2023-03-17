
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const data = [
    {
      prdImg:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg",
      prdName:"Macbook pro",
      price:"$40.00 - $80.00",
      rating:""
    },
    {
      prdImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQFQ254RAM4Hm7ilbV97tAjMaJjw_nu0aoQ&usqp=CAU",
      prdName:"Dell xps 15",
      price:"$20.00 $18.00",
      rating:""
    },
    {
      prdImg:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/IdeaPad_Slim_3_Chromebook_14_8_Abyss_Blue_05.png",
      prdName:"Lenova ChromeBook",
      price:"$50.00 $25.00",
      rating:""
    },
    {
      prdImg:"https://static.toiimg.com/thumb/resizemode-4,msid-54237869,imgsize-200,width-1200/54237869.jpg",
      prdName:"Lenova ChromeBook 14",
      price:"$40.00",
      rating:""
    },
    {
      prdImg:"https://laptopmedia.com/wp-content/uploads/2019/11/aceraspire7a715-74gfeatured.jpg",
      prdName:"Acer Aspire 7",
      price:"$50.00 $25.00",
      rating:""
    },
    {
      prdImg:"https://www.cnet.com/a/img/resize/7e3b11617180316ce98d2918d7dd2c0b28f17caa/hub/2022/09/22/c371fa9e-ffa7-45db-a193-e4a65b060466/hp-pavilion-plus-14-laptop-06.jpg?auto=webp&fit=crop&height=675&width=1200",
      prdName:"HP Pavilion Plus",
      price:"$120.00 - $280.00",
      rating:""
    },
    {
      prdImg:"https://cdn1.smartprix.com/rx-iuNdrjJ6t-w1200-h1200/uNdrjJ6t.jpg",
      prdName:"Asus Zen Pro",
      price:"$20.00 $18.00",
      rating:""
    },
    {
      prdImg:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/aplus-media-library-service-media/e88a8147-3759-4784-98da-f9a93efe14af.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      prdName:"Xiaomi NoteBook Pro",
      price:"$40.00",
      rating:""
    }
  ]
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <div className='cart'>
        <Badge bg="success">Cart {count}
        </Badge>
      </div>
      <div className='card-container'>
      {
        data.map((prd,idx)=>(
          <Cards 
          idx={idx}
          prd={prd}
          setCount={setCount}
          count={count}></Cards>
        ))        
      }          
      </div> 
    </div>
  );
}

export default App;

function Cards({prd,idx,setCount,count}){
  const [show,setShow]=useState(false);
  function addCart(){
    setShow(!show)
    setCount(count + 1)
  }
  function RemoveCart(){
    setShow(!show)
    setCount(count - 1)
  }
  return (
    <Card key={idx} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prd.prdImg} alt="Product Image" />
      <Card.Body>
        <Card.Title>{prd.prdName}</Card.Title>
        <Card.Text>{prd.price}</Card.Text>
        <Card.Text>{prd.rating}</Card.Text>
        {!show ? <Button variant="primary" onClick={addCart}>Add cart</Button> : "" }
        {show ? <Button variant="danger" onClick={RemoveCart}>Remove cart</Button> : ""}
      </Card.Body>
    </Card>
  )
}