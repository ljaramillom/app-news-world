import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-news';
  listaNoticias: any[] = [];
  loading: boolean;

  constructor(private noticiasService: NoticiasService) { }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listaNoticias = [];
    setTimeout(() => {
      this.noticiasService.getNoticias(parametros).subscribe(
        data => {
          this.loading = false;
          this.listaNoticias = data.articles;
        },
        error => {
          this.loading = false;
          console.log(error);
        });
    }, 2000);
  }
}
