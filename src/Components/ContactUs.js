import React from 'react'
function ContactUs(){
return(
  <div>
  <div className="banner2">
    <h1>Fast &amp; Free</h1>
    <h2>DELIVERY</h2>
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
</div>
)
}
export default ContactUs;