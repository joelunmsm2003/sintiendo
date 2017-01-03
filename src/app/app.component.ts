import { Component } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http }      from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  API_URL: string = 'http://localhost:8000';
  message: string;
  
  constructor(private http: Http, private authHttp: AuthHttp) {}

  public ping() {
    this.message = '';
    this.http.get(`${this.API_URL}/ping`)
      .map(res => res.json())
      .subscribe(
        data => this.message = data,
        error => this.message = error._body
      );
  }


   public securedPing(data) {
    console.log('dhdhdhdhh',data)
    this.message = '';
    this.authHttp.get(`${this.API_URL}/user/`)
      .map(res => res.json())
      .subscribe(
        data => {

          console.log('user',data)

        }
        
      );
  }

   public authenticate(username, password) {

  let creds = JSON.stringify({ username: 'root', password: 'elenaunmsm2003' });

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  this.http.post(`${this.API_URL}/api-token-auth/`, creds, {
    headers: headers
    })
    .subscribe(
      data => {

      	
      
        localStorage.setItem('id_token', JSON.parse(data._body).token)

        console.log(localStorage)
      }
      
      () => console.log('Authentication Complete')
    );
  }


}
