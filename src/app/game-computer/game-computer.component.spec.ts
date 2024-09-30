import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComputerComponent } from './game-computer.component';

describe('GameComputerComponent', () => {
  let component: GameComputerComponent;
  let fixture: ComponentFixture<GameComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComputerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
