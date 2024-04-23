import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { AsyncPipe } from '@angular/common';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
	providers: [UserService],
  template: `
		<h1>Users:</h1>
		<ul>
			@for(user of users; track user.name) {
				<li>{{ user.name }}</li>
			}
		</ul>
	`,
})
export class AppComponent {
	users: User[] = [];

	constructor(public userService: UserService) {}

	ngOnInit() {
		this.userService.getAllUsers().subscribe(res => this.users = res);
	}
}