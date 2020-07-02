import  React from "react";
import '../styles/components/Cart.styl'

const Cart = (props) => {
  const { img,  title, description, tag, className} = props
  return (
    <div className={className}>
      <div className="Cart">
        <div className="Cart--image">
          <img src={img} alt="imagen" />
          <span>{tag}</span>
        </div>
        <div className="Cart--description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart