import React from 'react'
function ChickenBurger(){
return(
<div>
<div className="container">
  <div className="new-card">
    <div className="row">
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img className="card-image-top" src="/images/cheese burger.jpg" alt />
          <div className="card-body">
            <h2 className="card-titel text-center">Chesse Burger</h2>
            <h3 className="card-titel text-center">$30,20</h3>
            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
            <div id="btn3"><button>Order Now</button></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img className="card-image-top" src="/images/chicken burger.png" alt />
          <div className="card-body">
            <h2 className="card-titel text-center">Chicken Burger</h2>
            <h3 className="card-titel text-center">$50,60</h3>
            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
            <div id="btn3"><button>Order Now</button></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img className="card-image-top" src="/images/beef burger.png" alt />
          <div className="card-body">
            <h2 className="card-titel text-center">Chesse Burger</h2>
            <h3 className="card-titel text-center">$35,50</h3>
            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
            <div id="btn3"><button>Order Now</button></div>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{marginTop: 50}}>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img className="card-image-top" src="/images/sandwich.png" alt />
          <div className="card-body">
            <h2 className="card-titel text-center">Best Sandwich</h2>
            <h3 className="card-titel text-center">$70,30</h3>
            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
            <div id="btn3"><button>Order Now</button></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img className="card-image-top" src="/images/beef burger2.png" alt />
          <div className="card-body">
            <h2 className="card-titel text-center">Beef Burger</h2>
            <h3 className="card-titel text-center">$100,50</h3>
            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
            <div id="btn3"><button>Order Now</button></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img className="card-image-top" src="/images/fries.png" alt />
          <div className="card-body">
            <h2 className="card-titel text-center">Best Fries</h2>
            <h3 className="card-titel text-center">$50,10</h3>
            <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, error?</p>
            <div id="btn3"><button>Order Now</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
)
}
export default ChickenBurger;