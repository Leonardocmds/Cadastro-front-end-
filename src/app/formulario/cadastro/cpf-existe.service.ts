import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

import { CadastroService } from './cadastro.service';

@Injectable({
  providedIn: 'root'
})
export class CpfExisteService {

  constructor(private cadastroService: CadastroService) { }

  cpfJaExiste(){
    return(control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((cpf) => this.cadastroService.verificaCPF(cpf)
      ),
      map((cpfExiste) =>(cpfExiste ? {cpfExistente: true} : null)
      ),
      first()
      );
    };
  }

}
