import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  public image ='../../assets/landing/Wedding Hall.jpg'
  public cardNames=['Party Hall','Reception Hall','Marriage Hall','Sangamithra','Lobby','Mobile App'];
  activeValue = 'Party Hall'

  constructor() { }

  ngOnInit(): void {
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
}
