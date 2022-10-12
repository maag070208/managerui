import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBody } from '@app/core/models/body/IBody.model';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() body!:IBody;

  constructor() { }

  ngOnInit(): void {
  }

}
