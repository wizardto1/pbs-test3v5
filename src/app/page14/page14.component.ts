import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
@Component({
  selector: 'app-page14',
  templateUrl: './page14.component.html',
  styleUrls: ['./page14.component.css']
})
export class Page14Component implements OnInit {
flag;
score1="-";
scorestring="-";
note1="-";
time1="-";
flag1="-";
  time="-";
  note="-";
  flag2="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private timeService: TimeService, private router: Router) { }

  setScore14(flag){
    this.scoresService.setScore14(flag)
    this.scoresService.setButton14(this.buttonDisabled)
    this.time=this.timeService.getTime()
    this.scoresService.setLeg5(this.flag2)
    this.scoresService.setnote14(this.note)
    this.scoresService.settime10(this.time)
      this.scoresService.Up1();
    
      if (this.flag==1){
        this.scoresService.Reset0()
       
     }
      if (this.scoresService.GetCounter()==3){
       this.scoresService.SetZeroEnd();
        this.router.navigate(['/results']);
      }
      else{
        this.timeService.returnTime();
        this.router.navigate(['/page15']);
      }
  }
  OnInput (event:any){
      this.time = event.target.value;
      
    }
  OnInput2 (event:any){
      this.note = event.target.value;
      
    }
      EndTest(){
    this.scoresService.SetEnd();
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore14()
this.buttonDisabled=this.scoresService.getButton14() 
this.flag2=this.scoresService.getLeg5()
this.time="-"
this.score1=this.scoresService.getScore1();

if (this.score1=="passed"){
  this.scorestring=" >10s";
  this.flag=1;
}
else if (this.score1=="no"){
  this.scorestring=" <10s";
}

this.note1=this.scoresService.getnote1();
this.flag1=this.scoresService.getLeg1();
this.time1=this.scoresService.gettime1();
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}