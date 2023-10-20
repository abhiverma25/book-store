import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSignup(): void{
    this.router.navigate(['/auth/signup'])
  }

  goToBookdetails(): void{
    this.router.navigate(['/public/book-details', 100])
  }
}
