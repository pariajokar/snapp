import {Component} from "react";
import Logo from './assets/img/snappTextLogo.svg'
import './assets/css/master.css'



export default class Header extends Component {
    constructor() {
        super();
        this.state={
            r : '-100%',
            flag:true
        }
    }
    Toggle=()=>{
    
        if(this.state.flag){
            this.setState({r: 0})
        }
        else{
            this.setState({r: '-100%'})
        }
        this.setState({flag: !this.state.flag})
    }
  render() {
    return (

        <>
        <header className = " _header   container-fluid container-xxl " >
        <section className = "row " >
        <MenuHeader/>
        <figure className = "col-md-2 col-6  d-flex justify-content-start align-items-center logo-figure" >
        <img src = { Logo }
        alt = "snapLogo"className = " logo-img"/>
        </figure> 
        <div className = "d-md-none col-6 div-icon d-flex align-items-center justify-content-end"  >
             <i className = "fa fa-align-justify menu-icon font-size-50" onClick={this.Toggle} > </i>
             </div >
        </section>

        </header>
        


        <section className="container mobile " id='mobile' style={{right:this.state.r}}>
            <section className="mobile-sec p-4">

        <ul className="mobile-ul list-unstyled d-flex flex-column justify-content-between">
            <li><a href="#">فرصت های شغلی</a></li>
            <li><a href="#">بلاگ</a></li>
            <li><a href="#">باشگاه رانندگان</a></li>
            <li><a href="#">ثبت نام راننده اسنپ</a></li>
            <li><a href="">پنل سازمانی</a></li>
            <li><a href="">پنل سازمانی</a></li>
            <li><a href="">تماس با ما</a></li>
        </ul>
        </section>
        
        </section>
</>
    )}

}

 

  class MenuHeader extends Component{

    render() {
    return ( <div className = "col-10  d-none d-md-flex  d-flex justify-content-end ul-div" >
        <ul className = " d-none d-md-flex   flex-row-reverse list-unstyled justify-content-around align-items-center ul" >
        <li><a href = "" > فرصت های شغلی </a></li >
        <li><a href = "" > بلاگ </a></li >
        <li> <a href = "" > باشگاه رانندگان </a></li >
        <li > <a href = "" > ثبت نام راننده اسنپ </a></li >
        <li > <a href = "" > پنل سازمانی </a></li >
        <li > <a href = "" > پنل سازمانی </a></li >
        <li > <a href = "" > تماس با ما </a></li >
        </ul> </div>
    )
}}
