import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'
  ]
})
export class TextComponent implements OnInit {
  @Input() customClass: string;
  @Input() content: string;
  @Input() customColor: boolean;
  validClasses: string[];
  /*Clase que se va a usar para el estilo en css */
  finalClass: string;

  constructor() { 
    this.customClass = "";
    this.content = "";
    this.customColor = false;
    this.validClasses = ['h1', 'h2', 'h3', 'h4', 'h4-regular', 'h4-medium', 'body1', 'body2', 'button', 'caption', 'caption-10'];
    this.finalClass = this.customClass;
  }

  ngOnInit(): void {
    if(!this.validClasses.includes(this.customClass)){
      console.error("Error: The valid values for class in the text \'" + this.content 
      + "\' are: h1, h2, h3, h4, h4-regular, body1, body2, button, caption, caption-10")
    }
    if (this.content == ""){
      console.error("Error: the tag must be used like this <text [content]=\"'Your text here.'\" ... ></text>");
    }
    this.setColor();
  }

  setColor():void{
    if(!this.customColor){
      this.finalClass = this.customClass + " "+ this.customClass +"-colored";
    }
    else
      this.finalClass = this.customClass;
  }
  
}
