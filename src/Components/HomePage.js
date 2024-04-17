import React from 'react'
function HomePage(){
   return(
    <div>
    <div id="cantainer-background">
      
      <div className="main-content">
        <div className="content">
          <h1>BEST DEAL</h1>
          <h2>BURGER</h2>
          <div id="btn1"><button>Order Now</button></div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="best-card">
        <div className="row" style={{marginTop: 100}}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img className="card-image-top" src="/images/card1.png" alt />
              <div className="card-img-overlay">
                <h1 className="card-titel">Fresh Fries</h1>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img className="card-image-top" src="/images/card2.jpg" alt />
              <div className="card-img-overlay">
                <h1 className="card-titel">Fresh Burger</h1>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img className="card-image-top" src="/images/card3.png" alt height="230px" />
              <div className="card-img-overlay">
                <h1 className="card-titel">Fast Delivery</h1>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* new card */}
    <div className="container">
      <div className="card-content">
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <h1>SUPER DEAL</h1>
            <h1>BURGER</h1>
            <h3>50% OFF</h3>
            <h5>$100,50</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat consequuntur rem aliquam quam ipsam? Deserunt vitae repellat laboriosam, temporibus consectetur fugiat numquam aliquam impedit nostrum ipsum ea nihil cumque accusamus aliquid. Ad iure cumque nam veritatis et sit praesentium voluptas, animi ex omnis dolor ratione assumenda ipsum deleniti doloremque, corporis velit ipsam quam? Obcaecati, perspiciatis unde mollitia iste reprehenderit praesentium odio esse facilis ducimus dignissimos provident eaque maiores vitae maxime repudiandae consectetur, ex, harum beatae error eos repellat? Quas, quod? Ut, nesciunt velit in perferendis sunt architecto, eum natus dolor pariatur, illum magni aperiam ipsum. Aliquid, corporis voluptates. Enim error quo, dolorem ducimus consequuntur autem nam voluptate ipsam. Error iste ullam ipsa eius, dolores obcaecati esse temporibus eveniet iure nam minus modi quod asperiores earum vitae. Quia quaerat libero, sed, iure quae dignissimos iste saepe commodi necessitatibus harum alias voluptatum?</p>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img className="card-image-top" src="\images\side-background.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="banner">
        <h1>Best <span className="change-content" /></h1>
        <h2>50% OFF</h2>
        <div id="btn2"><button>Order Now</button></div>
      </div>
    </div>
 </div> 
 )
}
export default HomePage;
