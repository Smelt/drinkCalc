import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { User} from '../model/user.model'
import {Drink} from '../model/drink.model';
import {UserService } from '../services/user.service';
import {DrinkService } from '../services/drinks.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  drinksArr: Drink[] = new Array();  
  user: User;
  alcoholConsumed: number = 0;
  rawBAC: number = 0;
  actualBAC: number = 0;
  drinkTime: number;
  drinkType: string = "Beer";
  drinkContent: number = 1;
  calorieCount = 0;


  constructor(private userService: UserService, private drinkService: DrinkService) {
    this.drinkTime = DrinkService.getCurrHour();
    this.drinksArr = drinkService.getDrinksArr();
   }

  ngOnInit() {
    this.user = new User("Tom", "Smith", "male", 185);
  }

  onAddDrink(){
    const type = this.drinkType;
    const content = this.drinkContent;
    const time = this.drinkTime;
    this.drinkService.addDrink(new Drink(type,time,content));
    this.calorieCount = this.drinkService.calculateCalorieCount();
    this.alcoholConsumed = this.drinkService.totalAlcoholConsumed();
    this.actualBAC = this.drinkService.calculateBAC();
    this.rawBAC = this.drinkService.calculateRawBAC();
    this.onResetDrink();
   
  }

  onResetDrink(){
    this.drinkContent = 1;
    this.drinkTime = 12;
    this.drinkType = "Beer";
  }
}



