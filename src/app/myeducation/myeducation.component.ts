import {HostListener,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myeducation',
  templateUrl: './myeducation.component.html',
  styleUrls: ['./myeducation.component.scss']
})
export class MyeducationComponent implements OnInit {

  constructor() { }
  primaryedu:String="SCHOOL LIFE";
  primary_edu_paragraph:string="I have studied my primary and secondary school in Stella Maries School and Ravindhra Bharathi Olympiad school,my school life was fun and that is the age where we can get much time for our self's. ";
  totalwidth=0;
  innerwidth=1;
  headder_padding_left=0;
  @HostListener('window:resize', ['$event'])
    onResize(event) {
  this.innerwidth = window.innerWidth;
  this.chaing_width();
}
  chaing_width()
  {
    if(this.innerwidth>517)
     {
       this.totalwidth=innerWidth/2;
     }
     else{
       this.totalwidth=innerWidth/1.1;
     }
     
     this.headder_padding_left=innerWidth/80;
  }
  ngOnInit(): void {
    
    this.onResize(event);
 
  }
  


}
