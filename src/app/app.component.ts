import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  condition: boolean = true;
  
  usernames =[{
    name: 'raja',
    status: 'active'
  },
  {
    name: 'david',
    status: 'inactive'
  },
  {
    name: 'vince',
    status: 'active'
  }]
}
