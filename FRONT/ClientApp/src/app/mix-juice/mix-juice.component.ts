import { Component, Directive, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-mix-juice',
  templateUrl: './mix-juice.component.html',
  styleUrls: ['./mix-juice.component.css']
})


export class MixJuiceComponent implements OnInit {


  constructor(public appService: AppService) { }
  
     Message:string = "Invalid Prod TP";
    MessageResult:string = "CANNOT MIX IT";
    time = new Date();
    clickedSubmit: Boolean = false;
       
    mixForm = new FormGroup({
    productIndex: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.Message = "Invalid Prod TP";
    this.MessageResult = "CANNOT MIX IT";
  }

  MixDrink() {

    if (this.Message == "Invalid Prod TP")
    {
      this.MessageResult = "CANNOT MIX IT";
      return;
    }else{
      switch (this.Message) {
        case "Milk":
          this.MessageResult = "MILK SHAKE"
          break;
        case "Orange":
          this.MessageResult = "ORANGE JUICE"
        default:
          break;
      }
    }
    

  }

  typeProduct(){

    this.appService.validProduct(this.mixForm.controls.productIndex.value).subscribe(
      data => {
        if (data.length > 0) {
          this.Message = data+'';
        }
        if (this.Message != "Invalid Prod TP"){
          this.MessageResult = "Ready To Mix";
        }else{
          this.MessageResult = "CANNOT MIX IT";
        }
      }

    );

  }

  @HostListener('click', ['$event']) 
  onClick(event: any) {
    if (event.target['id'] == "click"){
      console.log(this.time.toLocaleTimeString() + "  “Mix Drink” button has been clicked")
    }
  } 

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.target['id'] == "type"){
      console.log(this.time.toLocaleTimeString() + " keypress  " +  event.key);
    }
  }

}

