import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class CategoryPageComponent {
    games = [
        { title: 'Magic the gathering', img: 'assets/img/MagicLogo.jpg', description: 'Juego de cartas coleccionables', price: 'desde $6.990', discount: false },
        { title: 'One piece', img: 'assets/img/OnePieceLogo.jpg', description: 'Juego de cartas intercambiables de la famosa saga One Piece', price: 'desde $3.990', discount: true },
        { title: 'Pokemon', img: 'assets/img/PokemonLogo.jpg', description: 'Juego de Cartas coleccionables de la famosa saga Pokemon', price: 'desde $5.990', discount: true },
    ];
}
