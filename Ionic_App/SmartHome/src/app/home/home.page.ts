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
    this.data.username='';
    this.data.password='';
    this.data.response='';

  }

  Encender(){
    this.httpClient.post('http://10.74.16.79/on1.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  Apagar(){
    this.httpClient.post('http://10.74.16.79/off1.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  MandarCorreo(){
    this.httpClient.post('http://10.74.16.79/correo.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

PaginaLuces()
  {
    this.router.navigate(['/luces']);
  }


  Login(){
    var link = 'http://10.74.16.79/login.php';
    var datos = JSON.stringify({username: this.myForm.value.username, password: this.myForm.value.password});

    //console.log(this.myForm.value);

    this.httpClient.post(link, datos)
      .subscribe(data =>{
        this.data.response = data["_body"];
      }, error =>{
        console.log("Conexión Fallida");
      });
    
    console.log("Respuesta recibida:");
    console.log(this.data.response);

    if(this.data.response != "Conexión Fallida")
    {
      this.router.navigate(['/menu']);
    }
    
  }

  saveData(){
    console.log(this.myForm.value);
  }

  private createMyForm(){
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
