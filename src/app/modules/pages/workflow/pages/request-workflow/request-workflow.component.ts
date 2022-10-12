import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBody } from '@app/core/models/body/IBody.model';
import { AlertService } from '@app/core/services/alert.service';

@Component({
  selector: 'app-request-workflow',
  templateUrl: './request-workflow.component.html',
  styleUrls: ['./request-workflow.component.scss']
})
export class RequestWorkflowComponent implements OnInit {

  public body:IBody = {title:"Mis Workflows"};

  constructor(
    ) { }

  ngOnInit(): void {

  }

}
