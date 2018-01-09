import { ComponentFixtureAutoDetect, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('h1')).nativeElement;
  });

  it('タイトルが表示されるべき', () => {
    expect(el.textContent).toContain(component.title);
  });

  it('comp.titleを変更しても元のタイトルが表示されるべき', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    expect(el.textContent).toContain(oldTitle);
  });

  it('detectChangesを呼べばタイトルは変更されているべき', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });
});
