import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Cerveceria } from 'src/app/model/interfases/Cerveceria'

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.scss']
})
export class ListatareasComponent implements OnInit {

  cervecerias: Cerveceria[] = []

  constructor(private _apiService: ApiService) { }
 

  items: any[] = [
    {
      id:1,
      nombre:"Tarea 1",
      descripcion: " hdhsdf sdfsdsf fñsdhgf "
    },
    {
      id:2,
      nombre:"Tarea 2",
      descripcion: " hdhsdf sdfsdsf fñsdhgf "
    },
    {
      id:3,
      nombre:"Tarea 3",
      descripcion: " hdhsdf sdfsdsf fñsdhgf "
    }
  ]

  ngOnInit(): void {
    this._apiService.invocarAPi().subscribe((respuesta: Cerveceria[]) => {
      console.log(respuesta);
      this.cervecerias = respuesta;
    });
    console.log("Init");
  }

}
