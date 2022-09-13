import React from "react"
import './assets/css/master.css'


export default function MainSection(){

    return(
        
        <div className=" main-sec col-12 row ">
            <MainSectionP1/>
            <MainSectionP2/>
         
          
     
        </div>
 )
}

function MainSectionP1(){
    return(
        <section className="col-sm-12  col-md-6  p-0 MsP1 m-0">
            <div className="img-div"></div>
        </section>
    )

}
function MainSectionP2(){
    return(
        <section className="col-sm-12 col-md-6  d-flex flex-column justify-content-between align-items-end p-lg-5  p-sm-4 p-3 MsP2 m-0" >
            <h1 className="">تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ</h1>
            <p>از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.</p>
            <form className="d-flex flex-row-reverse  ">
                <input type="text"  className='d-none d-md-flex bg-transparent border-0  send-input px-3 'placeholder="09xxxxx4688" />
                <button className='d-none d-md-flex p-2 px-3 rounded border-0 send-btn' >ارسال لینک</button>
            </form>
            <button className=' rounded p-2 col-sm-12 col-md-7'>ورود به وب اپلیکیشن اسنپ</button>
        </section>
    )

}
