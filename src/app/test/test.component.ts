import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';

@Component({
   selector: 'app-test',
  templateUrl: './test.component.html',
   styles: [`
    .zippy {
      background: green;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  title = 'child app';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  constructor() { }

  ngOnInit() {
  }

}