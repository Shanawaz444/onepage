import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-v2',
  templateUrl: './navbar-v2.component.html',
  styleUrls: ['./navbar-v2.component.scss']
})
export class NavbarV2Component implements OnInit {

  scroll:boolean=false;
  offset:number=0;
  hiddenList:boolean=false;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',this.scrolling,true);
    this.hiddenList=false;
  }
  ngOnDestroy(): void {
    window.addEventListener('scroll',this.scrolling,false);
  }
  scrolling =(event:any)=>{
    this.offset=event.target.scrollingElement.scrollTop;
    if(this.offset>=100)
    {
      this.scroll=true;
    }
    else{
      this.scroll=false;
    }
  }

  triggerHiddenList()
  {
    this.hiddenList=!this.hiddenList;
  }
}
