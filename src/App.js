import './App.css';
import Product from './product/product';

function App() {

  let products = [
    {
      name : "shades",
      price: 50,
      description : "a pair of stylish shades",
      image : "https://www.seli.com.ng/sites/default/files/AA98473ASLV01BL_1.jpg"
  },
  {
      name:"jacket",
      price :100,
      description :"a black winter jacket",
      image :"https://img.leboncoin.fr/api/v1/lbcpb1/images/9f/e2/2e/9fe22e6e5298ed6241466e21ef68e83b3808958a.jpg?rule=ad-image"
  },
  {
      name :"shoes",
      price :75,
      description :"a comfy pair of shoes",
      image :"https://i5.walmartimages.com/seo/Fila-Women-s-Panache-Redmond-Ladies-Platform-Shoe-White_4587d52c-2468-4cc3-a145-be0ac3f67015.1d4568af040e5edfe6aa773aab89efcb.jpeg"
  },
  {
      name :"pants",
      price :80,
      description :"a nice jeans",
      image :"https://chillandlit.tn/57609-large_default/jean-large-taille-haute-dechire.jpg"
  }
  ]

  return (
    <div className="App">
      {products.map((prod)=>{
        return <Product prod={prod} />
      })}
      
    </div>
  );
}

export default App;
