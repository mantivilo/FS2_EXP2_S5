import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RegistrationFormComponent', () => {
    let component: RegistrationFormComponent;
    let fixture: ComponentFixture<RegistrationFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, RegistrationFormComponent],
            providers: [
                { provide: ActivatedRoute, useValue: { params: of({}) } }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should validate form correctly', () => {
        component.registrationForm.setValue({
            nombreCompleto: 'Test User',
            nombreUsuario: 'testuser',
            email: 'test@example.com',
            clave: 'Test1234',
            repetirClave: 'Test1234',
            fechaNacimiento: '2000-01-01',
            direccionDespacho: '123 Test St'
        });
        expect(component.registrationForm.valid).toBeTrue();
    });

    it('should detect mismatched passwords', () => {
        component.registrationForm.setValue({
            nombreCompleto: 'Test User',
            nombreUsuario: 'testuser',
            email: 'test@example.com',
            clave: 'Test1234',
            repetirClave: 'Test5678',
            fechaNacimiento: '2000-01-01',
            direccionDespacho: '123 Test St'
        });
        expect(component.registrationForm.invalid).toBeTrue();
        expect(component.registrationForm.errors?.['mismatch']).toBeTrue();
    });
});
