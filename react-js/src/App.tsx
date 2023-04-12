import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
// import './App.css'
import Homepage from './pages/HomePage'
import ProductPage from './pages/Products'
import  ProductDetail  from './pages/ProductDetail'
import ProductAdd from './admin/ProductAdd'
import { getAllProduct ,deleteProduct, addProduct} from './api/Product'
import { useNavigate } from 'react-router-dom'
import ProductUpdate from './admin/ProductUpdate'
import { updateProduct } from './api/Product'
import ManagementProduct from './admin/ManagementProduct'
import HomePageLayout from './layouts/HomePageLayout'
import LayoutAdmin from './layouts/LayoutAdmin'
import Sign_in from './pages/client/Sign_in'
import Sign_up from './pages/client/Sign_up'
import ManagemetCategory from './admin/catygory/ManagemetCategory'
import { getAllCategory } from './api/Categories'

function App() {

  const [category, setCategories] = useState([])
  useEffect(() =>{
    getAllCategory().then(({data}) => setCategories(data))
  
    
  }, [])


  const [products, setProduct] = useState([])
  /// product
  useEffect(() =>{
    getAllProduct().then(({data}) => setProduct(data))
  }, [])
  console.log((products));
  
  
  const oneHandleRemove =(id:number)=>{
    deleteProduct(id)
    // .then( () => setProduct(products.filter(item => item.id === Number(id))))
    .then(() => location.reload())
  }
  const navigate = useNavigate()
  const onHandleAdd = (product) =>{
    console.log(product)
    addProduct(product)
    .then( () =>{
      navigate("/admin/products")
    })
    .then(() => location.reload())
  }
  const onHandleUpdate = (id:String|undefined ,product) =>{
    console.log(product)
    updateProduct(id,product)
    .then( () =>{
      navigate("/admin/products")
    })
    .then(() => location.reload())

  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< HomePageLayout/>}  >
          <Route index element={<Homepage />} />
          <Route path='products' >
            <Route index element={<ProductPage products={products}  />} />
            <Route path=':_id' element={<ProductDetail products={products}  />}/>
          </Route>
        </Route>
        <Route path='/admin'>

          <Route path='products' element={<LayoutAdmin />} >
            <Route index element={<ManagementProduct products={products} categories={category} oneRemove={oneHandleRemove} oneUpdate={onHandleUpdate}  />} />
            
            <Route path='add' element={<ProductAdd onAdd={onHandleAdd} categories={category} />}  />
            <Route path='update/:_id' element={<ProductUpdate products={products} categories={category} onUpdate={onHandleUpdate} />}  />
          </Route>

          <Route path='category' element={<LayoutAdmin />}>
            <Route index element={<ManagemetCategory categories={category} />} />
          </Route>
        
        </Route>


        <Route path='/client'>
          <Route path='signin'element={<Sign_in />} />
          <Route path='signup' element={<Sign_up />} />
        </Route>

       

      </Routes>
      
    </div>
  )
}

export default App
