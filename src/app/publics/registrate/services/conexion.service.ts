import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newData } from '../interface/form';

const APIKEY = 'https://sheetdb.io/api/v1/wvgnzyqckdein'
@Injectable({
  providedIn: 'root'
})

export class ConexionService {
  public senal!: boolean

  constructor(private http:HttpClient) { }

  addData(newData: newData){
    const headers = {'Content-Type': 'application/json'}
    this.http.post<newData>(APIKEY, {
      Headers: headers,
      body: newData
    }).subscribe({
      next: ()=>{
        console.log('Datos enviados correctamente');
        this.senal = true
        
      },
      error: (e)=>{
        console.log('Datos no enviados', e);
        
      }
    })
  }

}

