import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-saluda',
  templateUrl: './saluda.component.html',
  styleUrls: ['./saluda.component.scss']
})
export class SaludaComponent implements OnInit {
  @Input() dato: string="";

  constructor() {

  }

  ngOnInit(): void {
  }

}
