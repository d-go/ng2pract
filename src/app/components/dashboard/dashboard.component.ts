import { Component, OnInit } from '@angular/core';
import { AccountOverviewComponent } from '../account-overview/account-overview.component';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { DtwoCardComponent } from '../card/card.component';
import { IncomeSpendComponent } from '../income-spend/income-spend.component';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [MD_SIDENAV_DIRECTIVES, AccountOverviewComponent, DtwoCardComponent,
                    IncomeSpendComponent]
})

export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}