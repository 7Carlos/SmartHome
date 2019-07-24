import { Component, OnInit } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';

import { Router } from '@angular/router';



import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { NavComponent } from '@ionic/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {

  constructor(public httpClient: HttpClient,
    private router: Router,
    public formBuilder: FormBuilder) {
    
  }

  ApagarAlarma(){
    this.httpClient.post('http://10.74.16.79/alarma.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }


  ngOnInit() {
  }

}
