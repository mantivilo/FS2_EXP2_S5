import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPageComponent } from './category-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CategoryPageComponent', () => {
    let component: CategoryPageComponent;
    let fixture: ComponentFixture<CategoryPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CategoryPageComponent],
            providers: [
                { provide: ActivatedRoute, useValue: { params: of({}) } }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
