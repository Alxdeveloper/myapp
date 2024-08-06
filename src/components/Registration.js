import React from 'react'

const Registration = () => {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-5 mb-lg-0">
            <p class="section-title pr-5">
              <span class="pr-2">Join us Today</span>
            </p>
            <h1 class="mb-4">Book Your class</h1>
            <p>
              Our classes are flexible designed with work at heart. We adjust according to your availability.
            </p>
            <ul class="list-inline m-0">
              <li class="py-2">
                <i class="fa fa-check text-success mr-3"></i>
                Fill your details
              </li>
              <li class="py-2">
                <i class="fa fa-check text-success mr-3"></i>
                Choose your class
              </li>
              <li class="py-2">
                <i class="fa fa-check text-success mr-3"></i>
                Enjoy 
              </li>
            </ul>
            <a href="/" class="btn btn-primary mt-4 py-2 px-4">Book Now</a>
          </div>
          <div class="col-lg-5">
            <div class="card border-0">
              <div class="card-header bg-secondary text-center p-4">
                <h1 class="text-white m-0">Join below</h1>
              </div>
              <div class="card-body rounded-bottom bg-primary p-5">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control border-0 p-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control border-0 p-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <select
                      class="custom-select border-0 px-4"
                    >
                      <option selected>Select A Class</option>
                      <option value="1">Mathematics</option>
                      <option value="2">Coding</option>
                      <option value="3">Finance</option>
                    </select>
                  </div>
                  <div>
                    <button
                      class="btn btn-secondary btn-block border-0 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Registration;