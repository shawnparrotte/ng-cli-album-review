import { Component } from '@angular/core';
import { ReviewComponent } from './review/review.component';
// import { ReviewService } from ...

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ReviewComponent]
})
export class AppComponent {}
