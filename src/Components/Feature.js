import React from 'react'
function Feature(){
   return(
    <div>
    <div id="cantainer-background">
      <nav className="navbar navbar-expand-md" id="navbar-color">
        {/* Brand */}
        <a className="navbar-brand" href="#" id="logo-color"><i><img src="/icon/logo.png" alt /></i>Burger</a>
        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span><i><img src="./icon/menu.png" alt id="menu-color" /></i></span>
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" id="first">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Burger</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#card">Chicken Burger</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
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
    
    <div className="banner2">
      <h1>Fast &amp; Free</h1>
      <h2>DELIVERY</h2>
    </div>
    <div className="container">
      <h1 className="text-center" style={{fontWeight: 'bold', marginTop: 50}}>About Us</h1>
      <div className="about-us">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <img className="card-image-top" src="/images/about us.png" style={{height: 350}} />
            </div>
          </div>
          <div className="col-md-7">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic alias in nemo odio, velit quam quaerat eius. Ratione blanditiis animi adipisci laborum modi laboriosam debitis eos delectus rem natus, eveniet beatae quae voluptate repellat exercitationem error deleniti, neque quas numquam necessitatibus accusantium est perferendis? Sunt possimus quidem voluptate, beatae necessitatibus unde aliquam perferendis. Odio quidem sequi, ut esse ipsa rerum quis enim debitis hic, tempora tenetur. Labore fugiat commodi quae unde assumenda molestias quaerat, sed asperiores culpa atque nesciunt fuga voluptatem eos nemo quos rerum neque incidunt aliquid, odio nulla. Perferendis earum necessitatibus asperiores at aliquam voluptas itaque tempore, excepturi atque consectetur. Ad, atque. Impedit deleniti, vel dolorem eos earum saepe placeat nulla ullam praesentium vitae, dolores quo dolor repudiandae facere, sapiente possimus consectetur accusantium reprehenderit. Reprehenderit mollitia molestias iusto laborum nemo odit voluptate quidem consequuntur magni quaerat quas atque quae adipisci ratione tempore, ducimus labore accusamus. Iste, in ea!</p>
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center" style={{fontWeight: 'bold', marginTop: 50}}>Contact Us</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" className="form-control" id="usr" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="eml" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="phn" placeholder="Phone" />
          </div>
          <div id="btn1"><button>Send Message</button></div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea className="form-control" id="comment" rows={5} defaultValue={""} />
          </div>
        </div>
      </div>
    </div>
    <footer id="footer">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 text-lg-left text-center">
            <div className="copyright">
              © Copyright <strong>Burger</strong>. All Rights Reserved
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
              <a href="#" className="scrollto">Home</a>
              <a href="#" className="scrollto">Burger</a>
              <a href="#" className="scrollto">Chicken Burger</a>
              <a href="#" className="scrollto">About Us</a>
              <a href="#" className="scrollto">Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </div>
  


    )
}
export default Feature;
