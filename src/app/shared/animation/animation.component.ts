import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    /*trigger('overlay', [
      transition(':enter', [
        style({opacity: 0}),
        query('.container', [ style(zoomFadeInFrom) ]),
        group([
          animate(easeInFor(100), style({opacity: 1})),
          query('.container', animate(easeInFor(300), style('*'))),
        ]),
      ], { params: {x: '0px', y: '0px', ox: '50%', oy: '50%'}}),
      transition(':leave', group([
        animate(300, style({opacity: 0})),
        query('.container', [
          animate(300, style(zoomFadeIn))
        ])
      ]), { params: {x: '0px', y: '0px', ox: '50%', oy: '50%'}})
    ])
     var fadeAnimation = animation([
     style({ opacity: '{{ start }}' }),
     animate('{{ time }}',
     style({ opacity: '{{ end }}'))
     ], { params: { time: '1000ms', start: 0, end: 1 }});

     var fadeAnimation = animation([
     style({ opacity: '{{ start }}' }),
     animate('{{ time }}',
     style({ opacity: '{{ end }}'))
     ], { params: { time: '1000ms', start: 0, end: 1 }});

    */
  ],
})
export class AnimationComponent implements OnInit {

  msgs: Message[] = [];
  activeIndex: number = 0;
  age: number;

  ngOnInit() {
    //this.msgs.push({severity: 'success', summary: 'Success Message'});
  }

  onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
