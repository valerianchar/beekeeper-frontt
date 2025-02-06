import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersQueries } from '../../queries/users.queries';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InputComponent } from '../../shared/components/input/input.component';
import { MatDivider } from '@angular/material/divider';

export interface AccountForm {
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  password_confirmation: FormControl<string>;
}
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, MatDivider],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  protected form: FormGroup<AccountForm> = new FormGroup<AccountForm>({
    firstname: new FormControl<string>('user.firstname', {
      nonNullable: true,
    }),
    lastname: new FormControl<string>('user.lastname', {
      nonNullable: true,
    }),
    email: new FormControl<string>('user.email', {
      nonNullable: true,
    }),
    password: new FormControl<string>('user.password', {
      nonNullable: true,
    }),
    password_confirmation: new FormControl<string>('user.password', {
      nonNullable: true,
    }),
  });

  protected readonly userQueries = inject(UsersQueries);
  protected readonly destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    // this.userQueries
    //   .getUser()
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe((user) => {
    //     this.form = new FormGroup<AccountForm>({
    //       firstname: new FormControl<string>(user.firstname, {
    //         nonNullable: true,
    //       }),
    //       lastname: new FormControl<string>(user.lastname, {
    //         nonNullable: true,
    //       }),
    //       email: new FormControl<string>(user.email, {
    //         nonNullable: true,
    //       }),
    //       password: new FormControl<string>(user.password, {
    //         nonNullable: true,
    //       }),
    //       password_confirmation: new FormControl<string>(user.password, {
    //         nonNullable: true,
    //       }),
    //     });
    //   });
  }
}
