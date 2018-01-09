import { inject, ComponentFixtureAutoDetect, ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { LoadingService } from './services/loading.service';
import { AreaService } from './services/area.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {

  const dummyAreas = [];
  let areaService: AreaService
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
        { provide: LoadingService, useValue: {} },
        { provide: AreaService, useValue: { getList: () => { } } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    areaService = TestBed.get(AreaService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('h1')).nativeElement;
    spyOn(areaService, 'getList').and.returnValue(Observable.of(dummyAreas));
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

  it('...', inject([AreaService], (AreaService) => {

  }));

  it('AreaServiceからリストを取得できる', async(() => {
    component.areasObservable.subscribe(areas => {
      expect(areas).toEqual(dummyAreas);
    })
  }))
});
