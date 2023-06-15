import { TestBed } from '@angular/core/testing';
import { AirbnbComponent } from './airbnb.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AirbnbComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AirbnbComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AcPipes'`, () => {
    const fixture = TestBed.createComponent(AirbnbComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AcPipes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AirbnbComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AcPipes app is running!');
  });
});
