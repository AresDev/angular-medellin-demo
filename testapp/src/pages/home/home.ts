import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var cordova:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterContentInit {
  
  public result:string;
  constructor(public navCtrl: NavController) {
    
  }
  
  ngAfterContentInit(): void {
    setTimeout(() => {
      cordova.plugins.testplugin.coolMethod('Hello Angular Medellin', (response)=>{
          
        this.result = response;
      }); 
    }, 4000);
  }

  ngOnInit() {

      

  }
}
