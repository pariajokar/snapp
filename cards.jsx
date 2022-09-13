import React from 'react';
import './assets/css/master.css'
import card1 from './assets/img/180x100-hour.png'
import card2 from './assets/img/180x100-income.png'
import card3 from './assets/img/180x100-carfix.png'
import card4 from './assets/img/180x100-benefits.png'





export default function Cards(){

    return(
        <section className="container-fluid main-container">
    <section className=" col-12 container-sm container-fluid card-container d-flex align-items-center justify-content-center">
        <section className="row card-row col-12">

            <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center card">
                <div  className="row col-12 p-3 p-lg-4 ">
                <section className="col-12  col-lg-8 card-sec2  d-flex flex-column justify-content-center">
                        <h1>ساعت کاری دلخواه</h1>
                        <p>فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.</p>
                    </section>
                    <section className="col-12 col-lg-4 card-sec1"><figure className="d-flex h-100 justify-content-center align-items-center"><img src={card1} alt="" className="img-fluid"/></figure></section>
                   
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center card">
                <div  className="row  col-12 p-3 p-lg-4">
                <section className="col-12   col-lg-8 card-sec2  d-flex flex-column justify-content-center">
                        <h1> درآمد تضمینی + پاداش‌های ماهانه و هفتگی</h1>
                        <p>با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.</p>
                    </section>
                    <section className="col-12 col-lg-4 card-sec1"><figure  className="d-flex h-100 justify-content-center align-items-center"><img src={card2} alt="" /></figure></section>
                   
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center card">
                <div className="row  col-12 p-3 p-lg-4">
                <section className="col-12  col-lg-8 card-sec2  d-flex flex-column justify-content-center ">
                        <h1>مزایا و خدمات باشگاه رانندگان</h1>
                        <p>در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.</p>
                    </section>
                    <section className="col-12 col-lg-4 card-sec1"><figure className="d-flex h-100 justify-content-center align-items-center"><img src={card3} alt="" /></figure></section>
                   
                </div>
            </div>
            <div className=" col-12 col-lg-6 d-flex justify-content-center align-items-center card">
                <div  className="row  col-12 p-3 p-lg-4">
                <section className="col-12 col-lg-8 card-sec2 d-flex flex-column justify-content-center">
                        <h1>کار‌فیکس</h1>
                        <p>باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.</p>
                    </section>
                    <section className="col-12 col-lg-4 card-sec1"><figure  className="d-flex h-100 justify-content-center align-items-center"><img src={card4} alt="" /></figure></section>
                  
                </div>
            </div>
          
           
        </section>
    </section>
    </section>)
}
