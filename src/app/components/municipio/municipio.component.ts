import { Component } from '@angular/core';
import { MunicipioServicesService } from 'src/app/services/municipio.services.service';


@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss']
})
export class MunicipioComponent {

  constructor(private deptoServicio:MunicipioServicesService){
  }

  public municipios: any[] = [] //any significa que puede recibir cualquier cosa
  public searchMunicipio = ""

  ngOnInit(){
    this.deptoServicio.obtenerMunicipios().subscribe( lista => {
      this.municipios = lista
    })
  }

}
