import React from 'react'

export const Footer = () => {
  return (
    <>
    <div className='container-fluid mt-5 ps-5 pe-5 pt-2 pe-2'>
        <div className="card border-bottom">
            <div className="card-body">
                <div className="row p-2">
                    <div className="col-3">
                        <p className='pb-1 fw-bold'>About Us</p>
                        <ul className='list-unstyled'>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <p className='pb-1 fw-bold'>Address</p>
                        <p>124/4 new york,America</p>
                    </div>
                    <div className="col-3">
                    <p className='pb-1 fw-bold'>Contact Us</p>
                    <p>Email:vijayvengatesh144@gmail.com</p>
                    <p>Cell:9597185295</p>
                    </div>
                    <div className="col-3">
                    <p className='pb-1 fw-bold'>Follow Us</p>
                    <div className='d-flex  gap-2'>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* copy rights start */}
    <div className="container-fluid text-center">
    <p>Copyright @parag 2016 All Rights Reserved</p>
    </div>
    {/* copy right end */}
    </>
  )
}
