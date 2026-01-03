import React from "react";
import { acData } from "../stores/data/ac";
import { useParams } from "react-router-dom";
const AcsSingle = () => {
  const { id } = useParams();
  const product = acData.find((item) => item.id === id);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
    return (
        <div className="ind-section">
            <div className="ind-image">
                <img src={product.image} alt={product.model} />
            </div>
            <div className="ind-details">
                <div className="ind-model">
                <h3>{product.model}</h3>    
            </div>
            <div className="ind-price">
                <h2>Price: ${product.price}</h2>
            </div>
            <div className="ind-desc">
                <p>{product.description}</p>
            </div>
            </div>
        </div>
    )
}

export default AcsSingle;   