import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule,SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(public router: Router) { }
  lastMonthsIncome = ['February: $1500', 'March: $1200',  'April: $1100'];
  currentMonthIncome = '$2000';

  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';

  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call insurance company' }
  ];

  
  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;
  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }
  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
  onTodo() {
    this.router.navigate(['/budget-planner/to-do']);
  }
  
  
  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }

}
