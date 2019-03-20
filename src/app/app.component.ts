import { Component, OnChanges } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magicSquare';
  array:any
  check=false;
  check1=false;
  check2=false;
  message:String;
  data:Number[][]=[[],[],[]];
  item:Number[][]=[[],[],[]];
  sum1=0;
  sum2=0;
  sum3=0;
  sum4=0
  sum5=0
  sum6=0
  sum7=0
  sum8=0
  count:Number[]=[];
  // count1=0;
  // count2=0;
  // count3=0;
  // count4=0;
  // count5=0;
  // count6=0;
  // count7=0;
  // count8=0;
 
  valid:Object
  validNumber:Boolean;  
  number:Number;
  constructor(){}
   ngOnInit(): void {}
 ngAfterContentChecked(): void {
   this.sum1=Number(this.data[0][0] || 0) + Number(this.data[1][0] || 0)+Number(this.data[2][0] || 0);
   this.sum2=Number(this.data[0][1] || 0) + Number(this.data[1][1] || 0)+Number(this.data[2][1] || 0) ;
   this.sum3=Number(this.data[0][2] || 0) + Number(this.data[1][2] || 0)+Number(this.data[2][2] || 0);
   this.sum4=Number(this.data[0][0] || 0) + Number(this.data[0][1] || 0)+Number(this.data[0][2] || 0);
   this.sum5=Number(this.data[1][0] || 0) + Number(this.data[1][1] || 0)+Number(this.data[1][2] || 0);
   this.sum6=Number(this.data[2][0] || 0) + Number(this.data[2][1] || 0)+Number(this.data[2][2] || 0);
   this.sum7=Number(this.data[0][0] || 0) + Number(this.data[1][1] || 0)+Number(this.data[2][2] || 0);
   this.sum8=Number(this.data[0][2] || 0) + Number(this.data[1][1] || 0)+Number(this.data[2][0] || 0);
   
   this.count[0]=Number(this.item[0][0] || 0) + Number(this.item[1][0] || 0)+Number(this.item[2][0] || 0);
   this.count[1]=Number(this.item[0][1] || 0) + Number(this.item[1][1] || 0)+Number(this.item[2][1] || 0);
   this.count[2]=Number(this.item[0][2] || 0) + Number(this.item[1][2] || 0)+Number(this.item[2][2] || 0);
   this.count[3]=Number(this.item[0][0] || 0) + Number(this.item[0][1] || 0)+Number(this.item[0][2] || 0);
   this.count[4]=Number(this.item[1][0] || 0) + Number(this.item[1][1] || 0)+Number(this.item[1][2] || 0);
   this.count[5]=Number(this.item[2][0] || 0) + Number(this.item[2][1] || 0)+Number(this.item[2][2] || 0);
   this.count[6]=Number(this.item[0][0] || 0) + Number(this.item[1][1] || 0)+Number(this.item[2][2] || 0);
   this.count[7]=Number(this.item[0][2] || 0) + Number(this.item[1][1] || 0)+Number(this.item[2][0] || 0);
   if(this.sum1>15 || this.sum2>15 ||this.sum3>15 ||this.sum4>15 ||this.sum5>15 ||this.sum6>15 ||this.sum7>15 ||this.sum8>15){
     this.message="sum should not more than 15 , try again!"
     this.check=true;
    }else{
      this.check=false;
    }
   
     this.validateInput();     
     this.accept();  
     
    }

 checkValidNumber(number,i,j){
  console.log(number+""+i+""+j); 
  console.log("hello"+Number(this.data[i][j]));
  this.validNumber = number > 9 || number < 0;
   if(!this.validNumber){
      this.item[Number(i)][Number(j)]=1;
      if(this.data[i][j]==0){
        this.item[Number(i)][Number(j)]=0;
      }
 }
}

 validateInput(){
  for(let k=0;k<9;k++){

    console.log(this.count[0]);
    if(this.count[k]==3)
    {
  
      if(!this.accept())
      this.message="sum should be equal to 15 , try again! "
      this.check1=true;
     }else{
       this.check1=false;
     }
  
  }
 
 }

 accept(){
  if(this.sum1==15 && this.sum2==15 && this.sum3==15 &&this.sum4==15 &&this.sum5==15 &&this.sum6==15 &&this.sum7==15 &&this.sum8==15){
    this.message="Congratulation! You Have completed task"
      this.check2=true;
      return true
   }else{
     this.check2=false;

     return false
   }

 }

  }
