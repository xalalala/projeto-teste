import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosDevedoresComponent } from './alunos-devedores.component';

describe('AlunosDevedoresComponent', () => {
  let component: AlunosDevedoresComponent;
  let fixture: ComponentFixture<AlunosDevedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosDevedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosDevedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
