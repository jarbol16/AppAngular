import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  nombre: string = "Intergrupo";
  direccion: string = "Sabeneta #23"

  ngOnInit(): void {

  }

}
