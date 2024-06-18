import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class MainPageComponent {
    categories = [
        { title: 'Cartas coleccionables', img: 'assets/img/category1.webp', link: '/cartas' },
        { title: 'Rol', img: 'assets/img/category2.png', link: '/rol' },
        { title: 'Estrategía', img: 'assets/img/category3.jpg', link: '/estrategia' },
        { title: 'Familiares', img: 'assets/img/category4.png', link: '/familiares' },
    ];
}

