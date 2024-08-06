import React from 'react'

const Header = () => {
  return (
    <div class="container-fluid bg-primary px-0 px-md-5 mb-5">
      <div class="row align-items-center px-3">
        <div class="col-lg-6 text-center text-lg-left">
          <h4 class="text-white mb-4 mt-5 mt-lg-0">Digital Learning platform</h4>
          <h1 class="display-3 font-weight-bold text-white">
            Modern Approach to Education
          </h1>
          <p class="text-white mb-4">
            Todays world calls for a atwist in kids learning from the traditional approach of classroom. With the technological advancement you learn modern concepts interactively with internet at the palm of their comforts. Enroll today for an awesome experience.
          </p>
          <a href="/" class="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
        </div>
        <div class="col-lg-6 text-center text-lg-right">
          <img class="img-fluid mt-5" src="img/header.png" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Header;
