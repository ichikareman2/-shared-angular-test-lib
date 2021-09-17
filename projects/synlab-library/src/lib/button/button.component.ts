import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'syn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
