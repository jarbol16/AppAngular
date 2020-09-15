import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  @Input() nombre: String = "Sin Nombre"
  
  nombreUsuario: string = "jarboleda";
  puedeVer = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(evento: any): void{
    this.nombre +=  "  Daniel Arboleda"
    console.log(JSON.stringify(evento));
  }

  respuestaTarea(evt: any): void {
    console.log("Body");
    console.log(JSON.stringify(evt))
  }



}
