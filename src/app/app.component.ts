import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor';

  constructor(private testService: TestService) {}

  fetch() {
    this.testService.fetch()
    .subscribe( data => console.log(data));
  }
}
