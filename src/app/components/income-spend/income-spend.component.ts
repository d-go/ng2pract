import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';


@Component({
  moduleId: module.id,
  selector: 'income-spend',
  templateUrl: 'income-spend.component.html',
  styleUrls: ['./income-spend.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class IncomeSpendComponent implements OnInit {

  ngOnInit() {

    var max = 60000;
    var step = max / 5;
   
    this.barChartOptions.scales.yAxes[0].ticks.max = max;
    this.barChartOptions.scales.yAxes[0].ticks.stepSize = step;
   
  }

  public barChartOptions: any = {
    responsive: true,
    scales: {
        yAxes: [{
            gridLines: {
                display: true
            },
            ticks: {
              max: 60000,
              min: 0,
              stepSize: 10000
            }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
    }
  };

  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [30000, 30000, 42000, 36000, 30000, 38500, 22000], label: 'Income' },
    { data: [28000, 22000, 22000, 15000, 28000, 13000, 50000], label: 'Spending' }
  ];

  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //  console.log(e);
  }
}