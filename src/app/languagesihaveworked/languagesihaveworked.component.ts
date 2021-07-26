import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-languagesihaveworked',
  templateUrl: './languagesihaveworked.component.html',
  styleUrls: ['./languagesihaveworked.component.scss']
})
export class LanguagesihaveworkedComponent implements OnInit {
  
  constructor() { }
  scroll:boolean=false;
scrt=0;
 timeleft: number=2
 interval: any;
 interval1: any;
 image_logo: string="angular_logo";
 switchname: string="angular_logo";
 polygonchange: string='polygon(0 0%,100% 15%,100% 100%,0 83%)';
 languagecologo:string='languagecologo1.jpg';
 language_name:string='Angular 9'
 developed_by:string='Developed by Google'
 opacity_decision:boolean=false;
 //bottomlangimg:string="translatex(-50%)";
 bottomlangimg1:boolean=true;
 bottomlangimg2:boolean=false;
 bottomlogos:string="angularlion.png";
 bottomlogoswidth:string="100px"
 middlelogoswidth:string="180px"
 languagediscrept1:string=" Learn one way to build applications with Angular"
 languagediscrept2:string="and reuse your code and abilities to build apps"
 languagediscrept3:string=" for any deployment target. For web, mobile web,"
 languagediscrept4:string="native mobile and native desktop."
 //wiwiwi:any;
 startTimer()
{
  this.interval=setInterval(()=>{
    if(this.timeleft>0)
    {
      this.timeleft--;
      if(this.timeleft==0)
      {
        this.opacity_decision=true;
        this.bottomlangimg2=true
        this.bottomlangimg1=false

      }
    }else{
      this.timeleft=5
      switch (this.switchname) {
        case "flutter_logo":
          this.image_logo="dart_logo";
          this.polygonchange='polygon(0 0%,100% 15%,100% 100%,0 83%)';
          this.switchname="dart_logo"
          this.languagecologo='dartsmalllogo.png'
          this.language_name='Dart'
          this.developed_by='Developed by Google'
          this.bottomlogos="dartbottomlogo.png";
          this.bottomlogoswidth="150px"
          this.middlelogoswidth="100px"
          this.languagediscrept1="Dart is a client-optimized language for fast apps on any platform,"
          this.languagediscrept2="natively compiled applications for mobile, web, and"
          this.languagediscrept3="desktop from a single codebase."
          this.languagediscrept4=""
          break;
        case "angular_logo":
          this.image_logo="flutter_logo";
          this.polygonchange='polygon(0 34%,82% 25%,33% 96%,0 7%)';
          this.switchname="flutter_logo"
          this.languagecologo='languagecologo2.jpg'
          this.language_name='Flutter'
          this.developed_by='Developed by Google'
          this.bottomlogos="fluttersmalllogo.png";
          this.bottomlogoswidth="150px"
          this.middlelogoswidth="100px"
          this.languagediscrept1="Flutter is Google’s UI toolkit for building beautiful,"
          this.languagediscrept2="natively compiled applications for mobile, web, and"
          this.languagediscrept3="desktop from a single codebase."
          this.languagediscrept4=""
          break;
        case "dart_logo":
          this.image_logo="python_logo";
          this.polygonchange='polygon(50% 0%, 90% 0, 63% 56%, 90% 100%, 44% 100%, 0% 60%, 43% 0)';
          this.switchname="python_logo"
          this.languagecologo='pythonsmalllogo.png'
          this.language_name='Python'
          this.developed_by='Created by Guido Van Rossum'
          this.bottomlogos="pythonbottomlogo.png";
          this.bottomlogoswidth="100px"
          this.middlelogoswidth="100px"
          this.languagediscrept1="Python is a programming language that lets you work ,"
          this.languagediscrept2="quickly and integrate systems more effectively"
          this.languagediscrept3="interpreted, high-level and general-purpose programming language."
          this.languagediscrept4=""
          break;  
        case "python_logo":
          this.image_logo="c++_logo";
          this.polygonchange='polygon(40% 3%, 62% 28%, 62% -28%, 62% 67%, 42% 91%, 23% 69%, 23% 24%)';
          this.switchname="c++_logo"
          this.languagecologo='c++smalllogo.png'
          this.language_name='C++'
          this.developed_by='Developed by Microsoft'
          this.bottomlogos="c++bottomlogo.png";
          this.bottomlogoswidth="150px"
          this.middlelogoswidth="100px"
          this.languagediscrept1="C++ is a general-purpose programming language created "
          this.languagediscrept2="by Bjarne Stroustrup,as an extension of the C programming "
          this.languagediscrept3="language that run in Windows and Macintosh environments."
          this.languagediscrept4=""
          break;
        case "c++_logo":
          this.image_logo="typescript_logo";
          this.polygonchange='polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)';
          this.switchname="typescript_logo"
          this.languagecologo='typescriptsmalllogo.png'
          this.language_name='TypeScript'
          this.developed_by='Developed by Microsoft'
          this.bottomlogos="typescriptbottomlogo.png";
          this.bottomlogoswidth="240px"
          this.middlelogoswidth="100px"
          this.languagediscrept1="TypeScript is a programming language developed and maintained "
          this.languagediscrept2="by Microsoft.It is a strict syntactical superset of JavaScript"
          this.languagediscrept3="TypeScript is designed for development of large applications."
          this.languagediscrept4=""
          break; 
        case "typescript_logo":
          this.image_logo="angular_logo";
          this.polygonchange='polygon(0 0%,100% 15%,100% 100%,0 83%)';
          this.switchname="angular_logo"
          this.languagecologo='languagecologo1.jpg'
          this.language_name='Angular 9'
          this.developed_by='Developed by Google'
          this.bottomlogos="angularlion.png";
          this.bottomlogoswidth="100px"
          this.middlelogoswidth="180px"
          this.languagediscrept1=" Learn one way to build applications with Angular"
          this.languagediscrept2="and reuse your code and abilities to build apps"
          this.languagediscrept3=" for any deployment target. For web, mobile web,"
          this.languagediscrept4="native mobile and native desktop."
          break;         
        default:
          break;
      }
    this.opacity_decision=false;  
    this.bottomlangimg1=true
    this.bottomlangimg2=false
    }
  },1000)
}

scrolling=(s:any)=>{
  let sc = s.target.scrollingElement.scrollTop;
  this.scrt=sc;
  if(sc >=1000){this.scroll=true}
  else{this.scroll=false}
}
//@HostListener('window:resize',['$event'])
  ngOnInit(): void {
    window.addEventListener('scroll',this.scrolling,true)
    this.startTimer()
   // this.innerwidth1=window.innerWidth;
  }
  ngOnDestroy():void{
    window.removeEventListener('scroll',this.scrolling,false)
  }
 
}
//polygon(374px 10%, 96% 46%, 52% 88%, 45px 49%)
//polygon(41% 3%, 60% 29%, 60% 66%, 42% 91%, 23% 68%, 23% 29%)