import { Component, OnInit,EventEmitter } from '@angular/core';
import { IjokeCard } from './../ijoke-card';
import { Output } from '@angular/core';
import { Joke } from './../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated=new EventEmitter<Joke>();
  constructor() { }

  createJoke(punchLine:string,punchAns:string){
    this.jokeCreated.emit(new Joke(punchLine,punchAns));
  }

  ngOnInit() {
  }



}
