import { Component, OnInit } from '@angular/core';
// import SwiperCore, { Pagination, Navigation } from "swiper";
import { SwiperOptions } from 'swiper';

// import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
// SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true


    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 4
  };  

  // tradeshow=false;
  education =false;
  recruit = false;
  internal = false;
  iscard = false;
  activeValue = 'Party Hall'
  // cardNames: string[];
  public cardNames=['Party Hall','Reception Hall','Marriage Hall','Sangamithra','Lobby','Mobile App'];

  public image =''
  constructor() {
    // this.image='../../assets/landing/dddddd.jpeg' 
  }

  ngOnInit(): void {
    this.toggleVisibility('Party Hall',0)
    this.trading(5)
      
  }
 public toggleVisibility(name:any, index:any){
  this.activeValue = name;
    // console.log('even--',index);
    switch(index) {
      case 0:
        // code block
        this.image='../../assets/landing/Event Hall.jpg'
        // this.image='../../assets/videos/lobby.mp4'
        break;
      case 1:
        // code block
        this.image='../../assets/landing/Wedding Hall.jpg'
        break;
      case 2:
        // code block
        this.image='../../assets/landing/Sangamithra.jpg'
        break;
      case 3:
        // code block
        this.image='../../assets/landing/Sangamithra Entrance.jpg'
        break;
      case 4:
        // code block
        this.image='../../assets/landing/Lobby22.jpg'
        break;
      case 5:
        // code block
        this.image='../../assets/landing/mobile-app.jpeg'
        break;
        
      default:
        this.image='../../assets/landing/Event Hall.jpg'
    }

    

  }

  public trading(index:any){
    switch(index) {
      case 1:
        this.education = false;
        this.recruit = false;
        this.internal = false;
        this.iscard = true;


        break;
      case 2:
        // code block
        this.iscard = false;
        this.internal = false;
        this.recruit = false;
        this.education = true;

        break;
      case 3:
          this.education = false;
          this.iscard = false;
          this.internal = false;
        this.recruit = true;

      break;
      case 4:
        this.recruit = false;         
        this.education = false;
        this.iscard = false;
        this.internal = true;
        // code block
      
        break;        
      default:
        this.iscard = true;

    }

    

  }

}
