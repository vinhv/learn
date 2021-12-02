import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css'],
})
export class ChildViewComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  name1: string = 'a';
  @Input() name!: { name: string; age: number };

  constructor() {}

  ngAfterContentInit(): void {
    this.logg('content init');
  }
  ngAfterContentChecked(): void {
    this.logg('content checked');
  }
  ngAfterViewInit(): void {
    this.logg('after init');
  }
  ngAfterViewChecked(): void {
    this.logg('after checked', this.name);
  }

  ngOnChanges() {
    this.logg('onchenges', this.name);
  }

  ngDoCheck() {
    this.logg('doCheck');
  }
  ngOnInit() {
    this.logg('oninit');
  }

  logg(hookName: string, st?: any) {
    console.log(`child ${hookName} start ${st ? st.name : ''}!`);
  }
}
