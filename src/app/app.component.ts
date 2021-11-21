import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KnowMe';
  ngOnInit(): void {
    alert("build in process upgrading this application from angular 9 to angular 12 !")
  }
}
