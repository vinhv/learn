import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css'],
})
export class ParentViewComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  name!: { name: string; age: number };
  constructor() {}

  ngOnInit() {
    this.name = { name: 'op', age: 9 };
  }
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
    this.logg('after checked');
  }

  ngOnChanges() {
    this.logg('onchenges');
  }

  ngDoCheck() {
    this.logg('doCheck');
  }

  logg(hookName: string, st?: any) {
    console.log(`parent ${hookName} start ${st}!`);
  }
}
