import { ChangeDetectorRef , Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor( private chdetector:ChangeDetectorRef)
  {
  }
  images:string[]=[
    "5.png",
    "4.png",
    "10.png"
  ]
  timerId:any;
  curIdx:number=0;
  goNext(){
      this.curIdx++;
  if(this.curIdx==this.images.length)
  {
    this.curIdx=0;
  }
  }
  goPrev(){
    this.curIdx--;
    if(this.curIdx<0)
    {
      this.curIdx=this.images.length-1;
    }

  }

  ngOnInit(){
    console.log("home component initialized");
    this.timerId=setInterval(()=>{
      this.goNext();
      this.chdetector.detectChanges();
    },2000)
  }
  ngOnDestroy()
  {
    clearInterval(this.timerId);
  }
  showImg(idx:number){
        this.curIdx=idx;
  
  }

}
