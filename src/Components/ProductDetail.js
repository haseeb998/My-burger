import React from 'react'
import { useParams} from 'react-router-dom'
import DATA from '../DATA.js'



function ProductDetail() {
    { /* Now we need a product id which is pass from the product page. */ }
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id);
    const product = proDetail[0];
    console.log(product);

    


    return (
        <div>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.pic} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product. pName}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product. detail}</p>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail
