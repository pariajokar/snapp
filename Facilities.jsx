import React from "react"
import './assets/css/master.css'
import facImg from './assets/img/Food.jpg'
import easypay from './assets/img/210x190-easy.png'
import fastpay from './assets/img/210x190-fast.png'
import ecopay from './assets/img/210x190-eco.png'

export default function Facilities(){

    return(
        <section className="fac-sec position-relative p-0 w-100 container-fluid bg-white d-flex flex-column  align-items-center flex-md-wrap">




        <article className="fac-part1   container-md container-fluid ">
            <figure className="w-100 h-100 d-flex   justify-content-center align-items-center"><img src={facImg} alt="facilities-img" className="rounded"/></figure>

        </article>



        <article className="fac-part2 w-100 row d-flex flex-row-reverse">
            <div className="fac-part2-img col-md-12 col-lg-6"></div>
            <div className="fac-part-content col-md-12 col-lg-6 p-lg-5  p-sm-4 p-1  d-flex justify-content-around flex-column">
                <h1>سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h1>
                <p>اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</p>
            </div>
        </article>
        




        <article  className="fac-part3 row position-absolute  d-flex container-xl container-fluid justify-content-around align-items-center flex-md-wrap">

           
               <div className=" property d-flex flex-column align-items-center col-12 col-md-6 col-lg-4"> 
               <figure className="bg-light rounded "><img src={fastpay} alt="" /></figure>
                <h2>سریع</h2>
                <p>قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.</p>
                </div>
            
            <div className="property d-flex flex-column align-items-center col-12 col-md-6 col-lg-4 ">
                <figure className="bg-light rounded"><img src={easypay} alt="" /></figure>
                <h2>آسان</h2>
                <p>برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
            </div>
            <div className="property d-flex flex-column align-items-center col-12 col-md-6 col-lg-4">
                <figure className="bg-light rounded"><img src={ecopay} alt="" /></figure>
                <h2>به صرفه</h2>
                <p>سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.</p>
            </div>
          
            
        </article>







    </section>)
}


