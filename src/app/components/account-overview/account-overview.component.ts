import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    moduleId: module.id,
    selector: 'account-overview',
    templateUrl: 'account-overview.component.html',
    directives:  [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public doughnutChartLabels: string[] = ['Account 1', 'Account 2', 'Account 3', 'Account 4', 'Account 5'];
    public doughnutChartData: number[] = [350, 450, 100, 250, 50];
    public doughnutChartType: string = 'doughnut';

    public pieOptions: any = {
        title: 'Hola'
    }

  
    public chartClicked(e: any): void {
        
    }

    public chartHovered(e: any): void {
        
    }


}