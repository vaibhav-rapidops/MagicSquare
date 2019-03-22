import { Component, OnChanges } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';
import { TouchSequence } from 'selenium-webdriver';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magicSquare';

  check=false;
  check1=false;
  check2=false;
  check3=false;
  flag=true;
  message1:String;
  message2:String;
  message3:String;
  message4:String;
  
  data:Number[][]=[[],[],[]];
  item:Number[][]=[[],[],[]];
  count:Number[]=[];
  sum:Number[]=[];
  temp:Number[]=[];
 
  valid:Object
  validNumber:Boolean;  
  number:Number;
  constructor(){
    for(let i=0;i<9;i++){
      this.temp[i]=0;
    }
  }
   ngOnInit(): void {}
 ngAfterContentChecked(): void {
   this.doSum()
   this.doCount()
   this.checkSum()
   this.validateInput();     
   this.acceptSquare();  
     
    }
  doSum(){
    this.sum[0]=Number(this.data[0][0] || 0) + Number(this.data[1][0] || 0)+Number(this.data[2][0] || 0);
    this.sum[1]=Number(this.data[0][1] || 0) + Number(this.data[1][1] || 0)+Number(this.data[2][1] || 0);
    this.sum[2]=Number(this.data[0][2] || 0) + Number(this.data[1][2] || 0)+Number(this.data[2][2] || 0);
    this.sum[3]=Number(this.data[0][0] || 0) + Number(this.data[0][1] || 0)+Number(this.data[0][2] || 0);
    this.sum[4]=Number(this.data[1][0] || 0) + Number(this.data[1][1] || 0)+Number(this.data[1][2] || 0);
    this.sum[5]=Number(this.data[2][0] || 0) + Number(this.data[2][1] || 0)+Number(this.data[2][2] || 0);
    this.sum[6]=Number(this.data[0][0] || 0) + Number(this.data[1][1] || 0)+Number(this.data[2][2] || 0);
    this.sum[7]=Number(this.data[0][2] || 0) + Number(this.data[1][1] || 0)+Number(this.data[2][0] || 0);

  }
  doCount(){
    this.count[0]=Number(this.item[0][0] || 0) + Number(this.item[1][0] || 0)+Number(this.item[2][0] || 0);
   this.count[1]=Number(this.item[0][1] || 0) + Number(this.item[1][1] || 0)+Number(this.item[2][1] || 0);
   this.count[2]=Number(this.item[0][2] || 0) + Number(this.item[1][2] || 0)+Number(this.item[2][2] || 0);
   this.count[3]=Number(this.item[0][0] || 0) + Number(this.item[0][1] || 0)+Number(this.item[0][2] || 0);
   this.count[4]=Number(this.item[1][0] || 0) + Number(this.item[1][1] || 0)+Number(this.item[1][2] || 0);
   this.count[5]=Number(this.item[2][0] || 0) + Number(this.item[2][1] || 0)+Number(this.item[2][2] || 0);
   this.count[6]=Number(this.item[0][0] || 0) + Number(this.item[1][1] || 0)+Number(this.item[2][2] || 0);
   this.count[7]=Number(this.item[0][2] || 0) + Number(this.item[1][1] || 0)+Number(this.item[2][0] || 0);

  }  


 checkValidNumber(number,i,j,name){
  this.validNumber = number > 9 || number < 0;
   if(!this.validNumber){
      this.item[Number(i)][Number(j)]=1;
      this.checkDuplicate(i,j,name);
      if(this.data[i][j]==0){
        this.item[Number(i)][Number(j)]=0;
      }
 }
}
checkSum(){
  if(this.sum[0]>15 || this.sum[1]>15 ||this.sum[2]>15 ||this.sum[3]>15 ||this.sum[4]>15 ||this.sum[5]>15 ||this.sum[6]>15 ||this.sum[7]>15){
    this.message1="sum should not more than 15 , try again!"
    this.check=true;

    }else{
     this.check=false;
   }
}
 validateInput(){
  for(let k=0;k<8;k++){
      if(this.count[k]==3 && this.sum[k]!=15 )
        {  
        this.message2="sum should be equal to 15 , try again! "+this.sum[k];
         this.check1=true;
         break;
        }else{
        this.check1=false;
       }
    }
  }
 

 acceptSquare(){
  if(this.sum[0]==15 && this.sum[1]==15 && this.sum[2]==15 &&this.sum[3]==15 &&this.sum[4]==15 &&this.sum[5]==15 &&this.sum[6]==15 &&this.sum[7]==15){
    this.message3="Congratulation! You Have completed task"
      this.check2=true;
      return true
   }else{
     this.check2=false;
     return false
   }

 }

 checkDuplicate(i,j,name){
      if(Number(this.data[i][j])!=0){
        this.temp[Number(name)]=Number(this.data[i][j]);
       
      }else{
        this.temp[Number(name)]=0;
      }
          for(let i=0;i<this.temp.length;i++){
               for(let j=i+1;j<this.temp.length-1;j++){
                            if(this.temp[i]==this.temp[j] && this.temp[i]!=0 && this.temp[j]!=0){
                        this.message4="No duplicate number allowed";               
                        this.check3=true;
                        this.flag=false;
                       break;
                   }else{
                     this.flag=true;
                   this.check3=false;
               }
             }
        if(this.flag==false){
           break;
        }
       }
    }
 }


