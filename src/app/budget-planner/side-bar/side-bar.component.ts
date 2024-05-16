import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  isSlideOut = true;
  constructor(private router: Router){}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onDash(){
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile(){
    this.router.navigate(['/budget-planner/profile']);
  }
  onHistory(){
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout(){
    this.router.navigate(['/login']);
  }

}
