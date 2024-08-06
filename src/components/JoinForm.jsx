import React from 'react'

const JoinForm = () => {
  return (
    <div class="col-lg-5">
            <div class="card border-0">
              <div class="card-header bg-secondary text-center p-4">
                <h1 class="text-white m-0">Sign Up</h1>
              </div>
    <div class="card-body rounded-bottom bg-primary p-5">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control border-0 p-4"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control border-0 p-4"
                      placeholder="Last Name"
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
                    <input
                      type="password"
                      class="form-control border-0 p-4"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control border-0 p-4"
                      placeholder="Reapeat password"
                      required="required"
                    />
                  </div>
                    <div>
                    <button
                      class="btn btn-secondary btn-block border-0 py-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <br></br>
                  <p>Already have account?<a href='/' class="text-white" >Login</a></p>
                </form>
                  </div>
                  </div>
                  </div>
  )
}
export default JoinForm;
