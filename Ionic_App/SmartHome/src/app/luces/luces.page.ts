import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { NavComponent } from '@ionic/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-luces',
  templateUrl: './luces.page.html',
  styleUrls: ['./luces.page.scss'],
})
export class LucesPage implements OnInit {

  constructor(public httpClient: HttpClient,
              private router: Router,
              public formBuilder: FormBuilder) { }


  Home()
  {
    this.router.navigate(['/home']);
  }

  Encender1(){
    this.httpClient.post('http://10.74.16.79/on1.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  Apagar1(){
    this.httpClient.post('http://10.74.16.79/off1.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }


  Encender2(){
    this.httpClient.post('http://10.74.16.79/on2.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  Apagar2(){
    this.httpClient.post('http://10.74.16.79/off2.php', {})      
    .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }





  ngOnInit() {
  }

}
