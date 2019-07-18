import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any = {};

  constructor(public httpClient: HttpClient, private router: Router) { }

  Encender(){
    this.httpClient.post('http://10.3.141.1/on1.php', {})      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  Login(){
    // Comprobar Nombre de Usuario y Contraseña



    this.router.navigate(['/menu']);

  }
}
