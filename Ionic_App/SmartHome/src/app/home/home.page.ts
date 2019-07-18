import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { NavComponent } from '@ionic/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { ReactiveFormsModule } from '@angular/forms';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any = {};
  myForm: FormGroup;

  constructor(public httpClient: HttpClient,
              private router: Router,
              public formBuilder: FormBuilder) {
                this.myForm = this.createMyForm();
               }

  Encender(){
    this.httpClient.post('http://10.3.141.1/api.php', {})      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  Login(){
    // Comprobar Nombre de Usuario y Contraseña


    this.router.navigate(['/menu']);
  }

  saveData(){
    console.log(this.myForm.value.username);
  }

  private createMyForm(){
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
