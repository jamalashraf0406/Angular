import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('svrContentInput') svrContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(svrNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: svrNameInput.value,
      serverContent: this.svrContentInput.nativeElement.value
    });
  }

  onAddBlueprint(svrNameInput: HTMLInputElement) {
    // this.svrContentInput.nativeElement.value = "Jamal Ashraf"; strongly not recommended
    this.blueprintCreated.emit({
      serverName: svrNameInput.value,
      serverContent: this.svrContentInput.nativeElement.value
    });
  }

}
