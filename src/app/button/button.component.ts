import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostBinding,
  Input,
} from '@angular/core';
import IButtonModel from './button-model.interface';

@Component({
  selector: 'button[customButton], a[customButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() iconAlign: 'left' | 'rigth' = 'left';
  @Input() color!: 'default' | 'primary' | 'secundary' | 'danger' | 'outline';

  @Input() set outline(value: boolean) {
    this._outline = value !== null && `${value}` != 'false';
  }

  @HostBinding('class.custom-button') _customButton = true;
  @HostBinding('class.custom-button--outline') _outline = true;

  @HostBinding('class.custom-button--default') get default(): boolean {
    return this.color === 'default';
  }

  @HostBinding('class.custom-button--danger') get danger(): boolean {
    return this.color === 'danger';
  }
  @HostBinding('class.custom-button--primary') get light(): boolean {
    return this.color === 'primary';
  }
  @HostBinding('class.custom-button--secondary') get dark(): boolean {
    return this.color === 'secundary';
  }

  constructor() {}

  ngOnInit(): void {}
}

// @Input : Usamos entrada para definir color / iconAlign e tipo de contorno.
// Na entrada do esquema usamos uma função set para lidar com a entrada em si e garantir que temos um valor de entrada ou não, para que possamos
// usá - lo desta forma:
// <um contorno de botão personalizado></a>

// =================================================

// @HostBinding : Decorador que marca uma propriedade DOM como uma propriedade de ligação de host e fornece metadados de configuração.
//  Veja os documentos aqui: https://angular.io/api/core/HostBinding.
// Aqui usamos hostBinding para vincular a classe CSS correta para o tipo de botão correto.
