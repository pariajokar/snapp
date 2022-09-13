import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header.jsx'
import MainSection from './mainsection.jsx'
import Navbar from './NavBar.jsx'
import Facilities from './Facilities.jsx'
import './assets/css/master.css'
import './assets/css/local.css'
import Register from './Register.jsx'
import Cards from './cards.jsx' 
import Footer from './Footer.jsx'




function Main() {

    return (

        <main className=""> 
           
            <Header/>
            <MainSection/>
            <Navbar/>
            <Facilities/>
            <Register/>
            <Cards/>
            <Footer/>
        
          
        </main>
    );

}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main/>);


//  let i = 1
//  let mobile = document.getElementsByClassName('mobile')[0]
//  let icon= document.getElementsByClassName('div-icon')[0]


//  function Myfunc() {
//      if(i%2){
//         // alert('hi')
      
//          mobile.style={display : 'flex'};
//     //   icon.firstChild.className.replace('fa fa-align-justify ',' ')
//     }
//    else{
//     // alert('heloo')
//     mobile.style={display : 'none'};
//     //  mobile.style.display = 'none';
//     //  icon.firstChild.className.replace(' fa fa-close',' fa fa-align-justify')
//    }i++ }
// Myfunc =() =>{

// }



// function App(){
//     return(
//         <section className='container-fluid app'>
//             <section className='row w-80'>
//             <p>یک اپلیکیشن برای تمام نیاز ها</p>
//             <section id='div'>
//             <div id='main-div'></div>
//             </section>
//             </section>
//         </section>
//     )
// }

// const list = [
//     {title: 'پیک موتوری' , img:'./assets/img/bike.svg',desc:'حمل و نقل با اسنپ'},
//     {title: 'تاکسی اینترنتی' , img:'./assets/img/cab.svg',desc:' امکان درخواست آنلاین خودرو با اسنپ'},
//     {title: ' درخواست وانت' , img:'./assets/img/Pickup-new.png',desc:'حمل و نقل با اسنپ'},
//     {title: 'سفارش انلاین غذا' , img:'./assets/img/food.svg',desc:'سفارش غذا، نان و شیرینی با اسنپ'},
//     {title: 'سوپر مارکت انلاین' , img:'./assets/img/market.svg',desc:'تهیه اقلام روزانه با اسنپ'},
//     {title:'اسنپ اکسپرس',img:'./assets/img/market.svg',desc:'تحویل کمتر از 30 دقیقه'},
//     {title:'بلیط پرواز داخلی',img:'./assets/img/Domestic Trip.png',desc:'گردشگری با اسنپ'},
//     {title:'بلیط پرواز خارجی',img:'./assets/img/Domestic Trip.png',desc:'گردشگری با اسنپ'},
//     {title:'دکتر',img:'./assets/img/doctor.svg',desc:'درمان با اسنپ'},
//     {title:'رزرو هتل',img:'./assets/img/hotel.png',desc:'گردشگری با اسنپ'},
//     {title:'رزرو اقامتگاه',img:'./assets/img/trip.svg',desc:'گردشگری با اسنپ'},
//     {title:'فروشگاه',img:'./assets/img/new Shop.png',desc:'خرید از فروشگاه های معتبر شهر'},
//     {title:'',img:'./assets/img/',desc:''},
//     {title:'',img:'./assets/img/',desc:''},
//     {title:'',img:'./assets/img/',desc:''},
//     {}
// ]


// class user{
//     constructor(title,img,desc){
//     this.title = title
//     this.img = img 
//     this.desc= desc
//     }
//    Text(){

//     let div1=document.createElement('div')
//     div1.innerHTML=this.title
//     return div1
//    }
//    Img(){

//     let div2=document.createElement('div')
//     div2.innerHTML='<img src='+this.img+' >'
//     return div2
//    }
//    final(){

//     let _mainDiv=document.getElementById('main-div')
//     _mainDiv.appendChild(this.Img)
//     _mainDiv.appendChild(this.Text)
//     return _mainDiv
    
//    }}
//    for(let i=0; i<list.length; i++){
    
//         var users=new user(list[i].title,list[i].img,list[i].desc)
//         document.getElementById('div').appendChild(users.final())
//     }


    

