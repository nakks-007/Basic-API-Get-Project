import { Component } from '@angular/core';
import { PinCodeAPIService } from './services/pin-code-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-Project1';

  storePinCode : any

  constructor(private api : PinCodeAPIService) { }

  ngOnInit() { 
    this.api.getPincode().subscribe(res => { this.storePinCode = res } )
   }
}
