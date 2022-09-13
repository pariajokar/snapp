import React from "react"
import imgNav1 from './assets/img/bazaar.png'
import imgNav2 from './assets/img/google-play-badge.png'
import imgNav3 from './assets/img/iApps.png'
import imgNav4 from './assets/img/sibapp-badge-white.png'
import imgNav5 from './assets/img/snapp-pwa.png'
import './assets/css/master.css'

export default function Navbar() {

    return(
        <section className='col-12 d-none d-md-flex  row nav  p-0 m-0 justify-content-center'>
            <div className=' d-flex justify-content-around align-items-center col-10 '>
                <figure className='img-container col-2'><img src={imgNav1} alt=""  /></figure>
                <figure className='img-container col-2'><img src={imgNav2}  alt=""   /></figure>
                <figure className='img-container col-2'><img src={imgNav3} alt=""  /></figure>
                <figure className='img-container col-2' ><img src={imgNav4}  alt=""  /></figure>
                <figure className='img-container col-2'><img src={imgNav5}  alt=""   /></figure>
            </div>
        </section>
    )

}