import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { HistoryComponent } from './history/history.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  //{path: 'side-bar', component: SideBarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'to-do', component: ToDoComponent},
  {path: 'profile', component: ProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
