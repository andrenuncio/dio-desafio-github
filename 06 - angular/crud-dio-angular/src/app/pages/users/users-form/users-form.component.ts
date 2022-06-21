import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm: FormGroup;
  users: Array<User> = [];
  userId:  any //string | null; // Ou Any

  constructor(private fb: FormBuilder,
     private userService: UserService,
     private actRoute: ActivatedRoute,
     private router: Router
     ) {
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: ''

    })
   }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      // console.log(this.userId);
      if(this.userId!== null){
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
      }
    })

    this.getUsers();
  }

  getUsers(): void{

    this.userService.getUsers().subscribe( response => {
      this.users = response;
    })
  }

  createUser(): void{
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe({
      next: result =>{console.log(`Usuario ${result.nome} ${result.sobrenome} cadastrado com sucesso`);},
      error: err => {console.log('Error ',err)},
      complete: () => {this.router.navigate(['/'])}
    })
  }

  actionButton(){
    if(this.userId !== null){
      this.updateUser();
    }else{
      this.createUser();
    }
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: result => {console.log('Usuario Atualizado', result)},
      error: err => {console.log('Error ',err)},
      complete: () => {this.router.navigate(['/'])}
    });
  }

}
