import React from "react"
import video from './assets/img/jazb-ranande.mp4'
import './assets/css/master.css'
export default function Register(){
    return(
        <section className="container-fluid w-100 register ">
            <div className="reg-part1 container-sm container-fluid d-flex flex-column justify-content-around align-items-center">
                <h1 className="hero-text">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h1>
                <p>بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</p>
                <button className="rounded text-white border-0">ثبت‌نام رانندگان</button>
            </div>
            <div className="reg-part2 d-flex  container-lg container-fluid   justify-content-center ">
                
              <video  controls  className=" video rounded">
                 <source src={video}></source>
               </video>
    
            </div>
        </section>)
    }
    
    