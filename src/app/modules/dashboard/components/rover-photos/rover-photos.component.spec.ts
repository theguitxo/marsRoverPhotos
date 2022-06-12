import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { ROVER_CURIOSITY } from "../../../../mocks/constants.mocks";
import { CAMERA } from "../../../../models/constants";
import { ManifestPhotoMock } from "../../../../mocks/manifest.photo.mocks";
import { initialState } from "../../../../store/app/app.state";
import { RoverPhotosComponent } from "./rover-photos.component";

const routerMock = {
  navigate() {
    return null;
  }
};

describe('RoverPhotosComponent', () =>{
  let component: RoverPhotosComponent;
  let fixture: ComponentFixture<RoverPhotosComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: Router,
          useValue: routerMock
        }
      ],
      declarations: [
        RoverPhotosComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(RoverPhotosComponent);
    component = fixture.componentInstance;

    component.data = ManifestPhotoMock;
    component.code = ROVER_CURIOSITY;
    
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to details with code, day and camera on execute viewCameraPhotos', () => {
    const spyNavigate = jest.spyOn(router, 'navigate');
    const cam = 'CHEMCAM' as CAMERA;
    component.viewCameraPhotos(1, cam);

    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['details', ROVER_CURIOSITY, 1, cam]);
  });

  it('should navigate to details with code and day on execute viewRoverPhotos', () => {
    const spyNavigate = jest.spyOn(router, 'navigate');
    component.viewRoverPhotos(1);

    expect(spyNavigate).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['details', ROVER_CURIOSITY, 1]);
  });
});
