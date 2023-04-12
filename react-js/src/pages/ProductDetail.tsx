import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetail = (props) => {
  const {_id} = useParams()
      const [product,setProduct] = useState({})
      useEffect(() =>{
        const currentProduct = props.products.find(item => item._id === String(_id))
        console.log(currentProduct)
        setProduct(currentProduct)
      },[props])
  return (
    <div>
     <section className="product">
	<div className="product__photo">
		<div className="photo-container">
			<div className="photo-main" style={{textAlign: 'center'}}>
				<img src={product?.image} alt="" />
			</div>
		</div>
	</div>
	<div className="product__info" style={{textAlign:'center'}}>
		<div className="title">
			<h1>{product?.name}</h1>
		</div>
		<div className="price">
			 <span>Giá : {product?.price} vnđ</span>
		</div>
		<div className="description">	
			<p> Chi Tiết : {product?.description}</p>
		</div>
		<button className="buy--btn" style={{backgroundColor: 'red', color:'black',}}>ADD TO CART</button>
	</div>
</section>
      </div>

  )
}
export default ProductDetail
