import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  interval: any;
  sample:any=1;
  firstposlefttrans:boolean=false;
  firstgoingtosec:boolean=false;
  firstcomstomiddle:boolean=false;
  secondtofirsttrans:boolean=false;
  firstbacktonrml:boolean=false;
  secondcomeback1:boolean=false;
  secondcomeback2:boolean=false;
  secondcomeback3:boolean=false;
  firstmediaposlefttrans:boolean=false;
  firstmediagoingtosec:boolean=false;
  firstmediacomstomiddle:boolean=false;
  done:boolean=false;
  compleatedone:boolean=true;
  language_title:string="Updating is being build:";
  langguage_discreption:string="updating this Portfoilo from Angular v9 to v11 build is in process";
  startTimer()
  {
    this.compleatedone=false;
    this.interval=setInterval(()=>{
      this.sample++;
      if(this.done)
      {
        this.secondcomeback1=true;
        this.firstbacktonrml=true;
        this.firstmediaposlefttrans=true;
        if(this.sample==2)
        {
          this.secondcomeback2=true;
          this.firstmediagoingtosec=true;
        }
        if(this.sample==3)
      {
        this.secondcomeback3=true;
        this.firstgoingtosec=false;
        this.firstposlefttrans=false;
        this.firstcomstomiddle=false;
        this.secondtofirsttrans=false;
        this.firstbacktonrml=false;
        this.secondcomeback1=false;
        this.secondcomeback2=false;
        this.secondcomeback3=false;
        this.firstmediacomstomiddle=true;
        this.firstmediaposlefttrans=false;
        this.firstmediagoingtosec=false;
        this.done=false;
        clearInterval(this.interval)
        this.sample=1;
        this.compleatedone=true;
        this.firstmediacomstomiddle=false;
      }

      }else{
        
        if(this.sample==2)
      {
        this.firstgoingtosec=true;
        this.firstmediagoingtosec=true;
      }
      if(this.sample==3)
      {
        this.firstcomstomiddle=true;
        this.firstgoingtosec=false;
        this.firstposlefttrans=false;
        this.firstmediacomstomiddle=true;
        this.firstmediaposlefttrans=false;
        this.firstmediagoingtosec=false;
        this.done=true;
        clearInterval(this.interval)
        this.sample=1;
        this.compleatedone=true;
        this.firstmediacomstomiddle=false;
      }
      }
  
     

    

    },600);
  }
  onLeftBtnClick()
  {
    
    if(this.compleatedone){

      this.startTimer()
    this.firstposlefttrans=true;
        this.secondtofirsttrans=true;
        this.firstmediaposlefttrans=true;
    }
  }
  ngOnInit(): void {
  }

}
