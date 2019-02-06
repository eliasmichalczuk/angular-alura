import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  template:
    `<small
    class="text-danger d-block-mt-2 test-vmessage-component">
    {{text}}
    </small>`,
  styleUrls: ['./vmessage.component.css']
})
export class VmessageComponent implements OnInit {
  @Input() text = '';
  constructor() { }
  ngOnInit() {
  }
}
