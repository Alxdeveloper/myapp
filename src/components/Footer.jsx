import React from 'react'

const Footer = () => {
  return (
    <div
    class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5" >
    <div class="row pt-5">
      <div class="col-lg-3 col-md-6 mb-5">
        <a
          href="/"
          class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0">
          <i class="flaticon-043-teddy-bear"></i>
          <span class="text-white">DigiLearn</span>
        </a>
        <p>
          Learn with us with professionals Gauranteed 
        </p>
        <div class="d-flex justify-content-start mt-4">
          <a
            class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
            href="/"><i class="fab fa-twitter"></i></a>
          <a
            class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
            href="/" ><i class="fab fa-facebook-f"></i></a>
          <a
            class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
            
            href="/"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a
            class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
            
            href="/"
            ><i class="fab fa-instagram">OK</i
          ></a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h3 class="text-primary mb-4">Get In Touch</h3>
        <div class="d-flex">
          <h4 class="fa fa-map-marker-alt text-primary"></h4>
          <div class="pl-3">
            <h5 class="text-white">Address</h5>
            <p>112, 60103 Embu</p>
          </div>
        </div>
        <div class="d-flex">
          <h4 class="fa fa-envelope text-primary"></h4>
          <div class="pl-3">
            <h5 class="text-white">Email</h5>
            <p>dmurangiri92@gmail.com</p>
          </div>
        </div>
        <div class="d-flex">
          <h4 class="fa fa-phone-alt text-primary">.</h4>
          <div class="pl-3">
            <h5 class="text-white">Phone</h5>
            <p>+254 701 152721</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h3 class="text-primary mb-4">Quick Links</h3>
        <div class="d-flex flex-column justify-content-start">
          <a class="text-white mb-2" href="/"
            ><i class="fa fa-angle-right mr-2"></i>Home</a
          >
          <a class="text-white mb-2" href="/"
            ><i class="fa fa-angle-right mr-2"></i>About Us</a>
          <a class="text-white mb-2" href="/"
            ><i class="fa fa-angle-right mr-2"></i>Our Classes</a
          >
          <a class="text-white mb-2" href="/"
            ><i class="fa fa-angle-right mr-2"></i>Our Teachers</a
          >
          <a class="text-white mb-2" href="/"
            ><i class="fa fa-angle-right mr-2"></i>Our Blog</a
          >
          <a class="text-white" href="/"
            ><i class="fa fa-angle-right mr-2"></i>Contact Us</a
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h3 class="text-primary mb-4">Newsletter</h3>
        <form action="">
          <div class="form-group">
            <input
              type="text"
              class="form-control border-0 py-4"
              placeholder="Your Name"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control border-0 py-4"
              placeholder="Your Email"
              required="required"
            />
          </div>
          <div>
            <button
              class="btn btn-primary btn-block border-0 py-3"
              type="submit"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="container-fluid pt-5" >
      <p class="m-0 text-center text-white">
        &copy;
        All Rights Reserved.Designed by Densir Tech Ltd
        <br />Distributed By: Densir Technologies
      </p>
    </div>
    </div>
  )
}
export default Footer;
