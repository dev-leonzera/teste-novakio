import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';
  public datetime = '';
  public sentMessage = '';

  constructor(
    private apiService: ApiService, private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getHello().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });

    this.apiService.getDatetime().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      }
      )).subscribe((response) => {
        if (response) {
          this.datetime = response.datetime;
        }
      });
  }

  sendMessage(message: String): void {
    this.apiService.sendMessage(message).pipe(
      catchError((err) => {
       console.log(err.message);
       return []
      })).subscribe((response) => {
        if(response){
          this.sentMessage = response.mensagem;
        }
      });
  }

}
