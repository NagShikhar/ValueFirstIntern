import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resdata',
  templateUrl: './resdata.component.html',
  styleUrls: ['./resdata.component.css']
})
export class ResdataComponent {
  email :string="";
  password:string="";
  confirmpassword:string="";




  constructor(private http: HttpClient) { 

  }


  onSubmit() {
    const registrationData = {
      email: this.email,
      password: this.password,
      confirmpassword:this.confirmpassword,
    };

    this.http.post('http://localhost:3000/resdata', registrationData)
      .subscribe(
        response => {
          
          console.log(response);
        },
        error => {
         
          console.error(error);
        }
      );
  }

}
