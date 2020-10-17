import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
counter=0;scroll:boolean=false;
scrt=0;
click:boolean=false;
  constructor() { }
@HostListener('window:keydown',['$event'])
handleKeyDown(event:KeyboardEvent)
{
 this.counter++; 
}
  ngOnInit(): void { 
    window.addEventListener('scroll',this.scrolling,true)
  }
  ngOnDestroy():void{
    window.removeEventListener('scroll',this.scrolling,false)
  }
  scrolling=(s)=>{
    let sc = s.target.scrollingElement.scrollTop;
    this.scrt=sc;
    if(sc >=100){this.scroll=true}
    else{this.scroll=false}
  }
  onClickMe=(de)=>{
     this.click=!this.click;
    
  }
}