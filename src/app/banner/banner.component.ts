import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  contacticons:any=[
    {
      "className":"github",
      "href":"https://github.com/Shanawaz444",
      "src":"assets/images/github.png"
    },
    {
      "className":"linkedin",
      "href":"https://www.linkedin.com/in/shanawaz444/",
      "src":"assets/images/linkedin.png"
    },
    {
      "className":"gmail",
      "href":"shanawaz0891@gmail.com",
      "src":"assets/images/gmail.png"
    },
    {
      "className":"instagram",
      "href":"https://www.instagram.com/shan_444_/",
      "src":"assets/images/instagram.png"
    },
  ];

  constructor() { } 
ngOnInit(): void {
  
  }

}
