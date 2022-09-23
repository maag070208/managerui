import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ISnackBarData } from '@app/core/models/alert/snack-bar.model';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnChanges {

  constructor(public snackBarRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: ISnackBarData) { 
      console.log(data);
    }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
