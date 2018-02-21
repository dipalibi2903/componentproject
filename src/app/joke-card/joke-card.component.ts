import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { IjokeCard } from './../ijoke-card';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.css']
})
export class JokeCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @Input('joke') data: Joke;
  @Output() jokeDeleted=new EventEmitter<Joke>();
  
  deleteJoke(data){
    this.jokeDeleted.emit(data);
  }

}
