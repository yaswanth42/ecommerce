import React from "react";
import { womanData } from "../stores/data/woman";
import { useParams } from "react-router-dom";

const WomensSingle = () => {
  const { id } = useParams();
    const product = womanData.find((item) => item.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }
    return(
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
    );
};
export default WomensSingle;