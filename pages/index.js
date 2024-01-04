// import {useEffect, useState} from "react";
import Product from "../components/Product";
// import {initMongoose} from "../lib/mongoose";
// import {findAllProducts} from "./api/products";
// import Footer from "../components/Footer";
// import Layout from "../components/Layout";

import { useEffect, useState } from "react"

// export default function Home({products}) {
//   const [phrase,setPhrase] = useState('');

//   const categoriesNames = [...new Set(products.map(p => p.category))];

//   if (phrase) {
//     products = products.filter(p => p.name.toLowerCase().includes(phrase));
//   }

//   return (
//     <Layout>
//       <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-200 w-full py-2 px-4 rounded-xl"/>
//       <div>
//         {categoriesNames.map(categoryName => (
//           <div key={categoryName}>
//             {products.find(p => p.category === categoryName) && (
//               <div>
//                 <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
//                 <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
//                   {products.filter(p => p.category === categoryName).map(productInfo => (
//                     <div key={productInfo._id} className="px-5 snap-start">
//                       <Product {...productInfo} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//     </Layout>
//   )
// }

// export async function getServerSideProps() {
//   await initMongoose();
//   const products = await findAllProducts();
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// }


export default function Home() {
  const [productsInfo,setProductsInfo] = useState([]);
  const [phrase,setPhrase] = useState('');
  
  useEffect(()=>{
   fetch('/api/products')
   .then(response=>response.json())
   .then(json=>setProductsInfo(json))
  },[]);
  

  const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
  
  return(
<div className="p-5">
  <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products ..." className="bg-gray-100 w-full py-2 px-4 rouded-xl"/>
  <div>
    {categoriesNames.map(categoryName => (
      <div key={categoryName}>
        <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
        <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
          {productsInfo.filter(p => p.category === categoryName).map(productInfo => (
          
            <div key={productInfo._id} className="px-5 snap-start">
            <Product {...productInfo}/>
            </div>
          ))}
         </div>
      </div>
    ))}
  <h2 className="text-2xl">Mobiles</h2>
  <div className="py-4">
   
  </div>
  </div>
  </div>
  )
}