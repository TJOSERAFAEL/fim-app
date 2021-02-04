import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.sass']
})
export class DoughnutChartComponent implements OnInit {

  private _data: any[];
  private _labels: any[];
  private _colors: any[];

  @Input() set data(value: any[]) {
    this._data = value;
    this.doughnutChartData = this._data;
  }

  get data(): any[] {
    return this._data;
  }

  @Input() set labels(value: any[]) {
    this.doughnutChartLabels = value;
    this._labels = value;
  }

  get labels(): any[] {
    return this._labels;
  }

  @Input() set colors(value: any[]) {
    this.doughnutChartColors = new Array<any>({backgroundColor: value});
    this._colors = value;
  }

  get colors(): any[] {
    return this._colors;
  }

  doughnutChartColors: Array<any>;
  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartOptions = {
    responsive: true
  };
 
  constructor() {
    console.log(this.doughnutChartColors);
  }

  ngOnInit() {
    this.doughnutChartLabels = this._labels;
    this.doughnutChartData = [this._data];
  }

}
