import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { NavComponent } from '@ionic/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.page.html',
  styleUrls: ['./puertas.page.scss'],
})
export class PuertasPage implements OnInit {

  constructor(public httpClient: HttpClient,
              private router: Router,
              public formBuilder: FormBuilder) { }

  Abrir(){
    this.httpClient.post('http://10.74.16.79/abrir.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  Cerrar(){
    this.httpClient.post('http://10.74.16.79/cerrar.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  EncenderAlarma(){
    this.httpClient.post('http://10.74.16.79/on1.php', {})      
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

 



  ngOnInit() {
  }

}
