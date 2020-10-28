import { Component, ViewEncapsulation } from '@angular/core';
import * as data from '../assets/elements.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementsJson: any = JSON.parse(JSON.stringify(data)).default;
  public displayJson: any = JSON.parse(JSON.stringify(data)).default;
  title = 'periodic-table';

  public elementClick(event, row, column): void{
    if (this.displayJson[row][column] === null){
      return;
    }
    if (this.displayJson[row][column].name === ''){
      this.displayJson[row][column].name = this.elementsJson[row][column].name;
    }
    else {
      this.displayJson[row][column].name = '';
    }
  }
  public show(shouldShow: boolean): void {
    this.displayJson.forEach((row, i) => {
      row.forEach((element, j) => {
        if (this.displayJson[i][j] === null){
          return;
        }
        if (shouldShow){
          this.displayJson[i][j].name = this.elementsJson[i][j].name;
        }
        else{
          this.displayJson[i][j].name = '';
        }
      });
    });
  }
}
