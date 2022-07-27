import { Component, OnInit,Renderer2 ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-whyimrcfy',
  templateUrl: './whyimrcfy.component.html',
  styleUrls: ['./whyimrcfy.component.scss']
})
export class WhyimrcfyComponent implements OnInit {
  @ViewChild('toggle', {static: true}) public toggle!: ElementRef;
  show: boolean=true;
  isBottom = false;
  defaultStatus: string = 'Product';
  image: any ;
  image1: boolean = false;
  back:any='color'
  def: boolean = true
  image2:any;
  text: boolean = false;
  text1: boolean = false;
  text2: boolean = false;
  text3: boolean = false;
  text4: boolean = false;

  icon: boolean = true;
  icon1: boolean = true;
  icon2: boolean = true;
  icon3: boolean = true;
  icon4: boolean = true;

  constructor( private renderer: Renderer2) { }

  ngOnInit(): void {
  
  }
  activeStatus(e: string) {
    // console.log("welcome");
    
    this.show=!this.show;
    this.defaultStatus = e;
     this.removeClass();
    this.isBottom = false;
  }

  removeClass() {
    console.log("welcomeeee2222");
    
    this.renderer.removeClass(this.toggle.nativeElement, 'show')
  }

  slider(index: number) {
    // console.log("index");

    switch (index) {
      case 1:
        // code block
        this.text = true;
        this.text1 = false;
        this.text2 = false;
        this.text3 = false;
        this.text4 = false;

        this.icon = false
        this.icon1 = true
        this.icon2 = true
        this.icon3 = true
        this.icon4 = true
        this.def = false
        this.image1 = true;
        this.image = '../../assets/landing/toy.png';
        this.image2='../../assets/landing/Sangamithra.jpg'

        break;
      case 2:
        // code block
        this.text = false;
        this.text1 = true;
        this.text2 = false;
        this.text3 = false;
        this.text4 = false;

        this.icon = true
        this.icon1 = false
        this.icon2 = true
        this.icon3 = true
        this.icon4 = true

        this.def = false
        this.image1 = true;
        this.image='../../assets/landing/Sangamithra.jpg'
        this.image2='../../assets/landing/auditorium.jpeg'

        break;

        break;
      case 3:
        // code block
        this.text = false;
        this.text1 = false;
        this.text2 = true;
        this.text3 = false;
        this.text4 = false;

        this.icon = true
        this.icon1 = true
        this.icon2 = false
        this.icon3 = true
        this.icon4 = true
        this.def = false

        this.image='../../assets/landing/Sangamithra Entrance.jpg'
        this.image2='../../assets/landing/matchmaking.jpeg'


        break;
      case 4:
        // code block
        this.text = false;
        this.text1 = false;
        this.text2 = false;
        this.text3 = true;
        this.text4 = false;

        this.icon = true
        this.icon1 = true
        this.icon2 = true
        this.icon3 = false
        this.icon4 = true
        this.def = false

        this.image1 = true;
        this.image='../../assets/landing/mobile-app.jpeg'
        this.image2='../../assets/landing/wedding.jpg'

        break;
      case 5:
        // code block
        this.text = false;
        this.text1 = false;
        this.text2 = false;
        this.text3 = false;
        this.text4 = true;

        this.icon = true
        this.icon1 = true
        this.icon2 = true
        this.icon3 = true
        this.icon4 = false
        this.def = false

        this.image1 = true;
        
        this.image = '../../assets/landing/Event Hall.jpg'
        this.image2='../../assets/landing/Wedding1.jpg'



    }
  }

}
