export const mockInitialState = {
  state: {
    camerasList: [
      {
        camera: 'EDL_RUCAM',
        description: 'Rover Up-Look Camera'
      },
      {
        camera: 'EDL_RDCAM',
        description: 'Rover Down-Look Camera'
      },
      {
        camera: 'EDL_DDCAM',
        description: 'Descent Stage Down-Look Camera'
      },
      {
        camera: 'EDL_PUCAM1',
        description: 'Parachute Up-Look Camera A'
      },
      {
        camera: 'EDL_PUCAM2',
        description: 'Parachute Up-Look Camera B'
      },
      {
        camera: 'NAVCAM_LEFT',
        description: 'Navigation Camera - Left'
      },
      {
        camera: 'NAVCAM_RIGHT',
        description: 'Navigation Camera - Right'
      },
      {
        camera: 'MCZ_RIGHT',
        description: 'Mast Camera Zoom - Right'
      },
      {
        camera: 'MCZ_LEFT',
        description: 'Mast Camera Zoom - Left'
      },
      {
        camera: 'FRONT_HAZCAM_LEFT_A',
        description: 'Front Hazard Avoidance Camera - Left'
      },
      {
        camera: 'FRONT_HAZCAM_RIGHT_A',
        description: 'Front Hazard Avoidance Camera - Right'
      },
      {
        camera: 'REAR_HAZCAM_LEFT',
        description: 'Rear Hazard Avoidance Camera - Left'
      },
      {
        camera: 'REAR_HAZCAM_RIGHT',
        description: 'Rear Hazard Avoidance Camera - Right'
      },
      {
        camera: 'SKYCAM',
        description: 'MEDA Skycam'
      },
      {
        camera: 'SHERLOC_WATSON',
        description: 'SHERLOC WATSON Camera'
      },
      {
        camera: 'FHAZ',
        description: 'Front Hazard Avoidance Camera'
      },
      {
        camera: 'RHAZ',
        description: 'Rear Hazard Avoidance Camera'
      },
      {
        camera: 'MAST',
        description: 'Mast Camera'
      },
      {
        camera: 'CHEMCAM',
        description: 'Chemistry and Camera Complex'
      },
      {
        camera: 'MAHLI',
        description: 'Mars Hand Lens Imager'
      },
      {
        camera: 'MARDI',
        description: 'Mars Descent Imager'
      },
      {
        camera: 'NAVCAM',
        description: 'Navigation Camera'
      },
      {
        camera: 'PANCAM',
        description: 'Panoramic Camera'
      },
      {
        camera: 'MINITES',
        description: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
      }
    ],
    roversList: [
      {
        id: 'b84b',
        selectedIndex: 0,
        code: 'curiosity',
        name: 'Curiosity',
        cameras: [
          {
            camera: 'FHAZ',
            description: 'Front Hazard Avoidance Camera'
          },
          {
            camera: 'RHAZ',
            description: 'Rear Hazard Avoidance Camera'
          },
          {
            camera: 'MAST',
            description: 'Mast Camera'
          },
          {
            camera: 'CHEMCAM',
            description: 'Chemistry and Camera Complex'
          },
          {
            camera: 'MAHLI',
            description: 'Mars Hand Lens Imager'
          },
          {
            camera: 'MARDI',
            description: 'Mars Descent Imager'
          },
          {
            camera: 'NAVCAM',
            description: 'Navigation Camera'
          }
        ],
        haveManifest: false,
        loadingManifest: false,
        loadedManifest: false,
        errorLoadingManifest: false,
        roverPhotos: [],
        roverPhotosCurrentPage: 1
      },
      {
        id: '8f5d',
        selectedIndex: 0,
        code: 'opportunity',
        name: 'Opportunity',
        cameras: [
          {
            camera: 'FHAZ',
            description: 'Front Hazard Avoidance Camera'
          },
          {
            camera: 'RHAZ',
            description: 'Rear Hazard Avoidance Camera'
          },
          {
            camera: 'NAVCAM',
            description: 'Navigation Camera'
          },
          {
            camera: 'PANCAM',
            description: 'Panoramic Camera'
          },
          {
            camera: 'MINITES',
            description: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
          }
        ],
        haveManifest: false,
        loadingManifest: false,
        loadedManifest: false,
        errorLoadingManifest: false,
        roverPhotos: [],
        roverPhotosCurrentPage: 1
      },
      {
        id: '9af9',
        selectedIndex: 0,
        code: 'spirit',
        name: 'Spirit',
        cameras: [
          {
            camera: 'FHAZ',
            description: 'Front Hazard Avoidance Camera'
          },
          {
            camera: 'RHAZ',
            description: 'Rear Hazard Avoidance Camera'
          },
          {
            camera: 'NAVCAM',
            description: 'Navigation Camera'
          },
          {
            camera: 'PANCAM',
            description: 'Panoramic Camera'
          },
          {
            camera: 'MINITES',
            description: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
          }
        ],
        haveManifest: false,
        loadingManifest: false,
        loadedManifest: false,
        errorLoadingManifest: false,
        roverPhotos: [],
        roverPhotosCurrentPage: 1
      },
      {
        id: '512c',
        selectedIndex: 0,
        code: 'perseverance',
        name: 'Perseverance',
        cameras: [
          {
            camera: 'EDL_RUCAM',
            description: 'Rover Up-Look Camera'
          },
          {
            camera: 'EDL_RDCAM',
            description: 'Rover Down-Look Camera'
          },
          {
            camera: 'EDL_DDCAM',
            description: 'Descent Stage Down-Look Camera'
          },
          {
            camera: 'EDL_PUCAM1',
            description: 'Parachute Up-Look Camera A'
          },
          {
            camera: 'EDL_PUCAM2',
            description: 'Parachute Up-Look Camera B'
          },
          {
            camera: 'NAVCAM_LEFT',
            description: 'Navigation Camera - Left'
          },
          {
            camera: 'NAVCAM_RIGHT',
            description: 'Navigation Camera - Right'
          },
          {
            camera: 'MCZ_RIGHT',
            description: 'Mast Camera Zoom - Right'
          },
          {
            camera: 'MCZ_LEFT',
            description: 'Mast Camera Zoom - Left'
          },
          {
            camera: 'FRONT_HAZCAM_LEFT_A',
            description: 'Front Hazard Avoidance Camera - Left'
          },
          {
            camera: 'FRONT_HAZCAM_RIGHT_A',
            description: 'Front Hazard Avoidance Camera - Right'
          },
          {
            camera: 'REAR_HAZCAM_LEFT',
            description: 'Rear Hazard Avoidance Camera - Left'
          },
          {
            camera: 'REAR_HAZCAM_RIGHT',
            description: 'Rear Hazard Avoidance Camera - Right'
          },
          {
            camera: 'SKYCAM',
            description: 'MEDA Skycam'
          },
          {
            camera: 'SHERLOC_WATSON',
            description: 'SHERLOC WATSON Camera'
          }
        ],
        haveManifest: false,
        loadingManifest: false,
        loadedManifest: false,
        errorLoadingManifest: false,
        roverPhotos: [],
        roverPhotosCurrentPage: 1
      }
    ],
    roverCodesList: [
      'curiosity',
      'opportunity',
      'spirit',
      'perseverance'
    ],
    initialDataReady: true,
    expandedPanel: [],
    loading: false,
    loaded: false,
    errorLoading: false,
    errorCode: '',
    errorMessage: ''
  }
};

export const mockRouterStore = {
  router: {
    state: {
      root: {
        params: {},
        data: {},
        url: [],
        outlet: 'primary',
        routeConfig: null,
        queryParams: {},
        fragment: null,
        firstChild: {
          params: {},
          data: {},
          url: [
            {
              path: 'dashboard',
              parameters: {}
            }
          ],
          outlet: 'primary',
          routeConfig: {
            path: 'dashboard'
          },
          queryParams: {},
          fragment: null,
          firstChild: {
            params: {},
            data: {},
            url: [],
            outlet: 'primary',
            routeConfig: {
              path: ''
            },
            queryParams: {},
            fragment: null,
            children: []
          },
          children: [
            {
              params: {},
              data: {},
              url: [],
              outlet: 'primary',
              routeConfig: {
                path: ''
              },
              queryParams: {},
              fragment: null,
              children: []
            }
          ]
        },
        children: [
          {
            params: {},
            data: {},
            url: [
              {
                path: 'dashboard',
                parameters: {}
              }
            ],
            outlet: 'primary',
            routeConfig: {
              path: 'dashboard'
            },
            queryParams: {},
            fragment: null,
            firstChild: {
              params: {},
              data: {},
              url: [],
              outlet: 'primary',
              routeConfig: {
                path: ''
              },
              queryParams: {},
              fragment: null,
              children: []
            },
            children: [
              {
                params: {},
                data: {},
                url: [],
                outlet: 'primary',
                routeConfig: {
                  path: ''
                },
                queryParams: {},
                fragment: null,
                children: []
              }
            ]
          }
        ]
      },
      url: '/dashboard'
    },
    navigationId: 1
  }
};

export const mockRouteStoreDetails = {
  router: {
    state: {
      root: {
        params: {},
        data: {},
        url: [],
        outlet: 'primary',
        routeConfig: null,
        queryParams: {},
        fragment: null,
        firstChild: {
          params: {
            code: 'curiosity',
            sol: '2',
            camera: 'NAVCAM'
          },
          data: {},
          url: [
            {
              path: 'details',
              parameters: {}
            },
            {
              path: 'curiosity',
              parameters: {}
            },
            {
              path: '2',
              parameters: {}
            },
            {
              path: 'NAVCAM',
              parameters: {}
            }
          ],
          outlet: 'primary',
          routeConfig: {
            path: 'details/:code/:sol/:camera'
          },
          queryParams: {},
          fragment: null,
          firstChild: {
            params: {
              code: 'curiosity',
              sol: '2',
              camera: 'NAVCAM'
            },
            data: {},
            url: [],
            outlet: 'primary',
            routeConfig: {
              path: ''
            },
            queryParams: {},
            fragment: null,
            children: []
          },
          children: [
            {
              params: {
                code: 'curiosity',
                sol: '2',
                camera: 'NAVCAM'
              },
              data: {},
              url: [],
              outlet: 'primary',
              routeConfig: {
                path: ''
              },
              queryParams: {},
              fragment: null,
              children: []
            }
          ]
        },
        children: [
          {
            params: {
              code: 'curiosity',
              sol: '2',
              camera: 'NAVCAM'
            },
            data: {},
            url: [
              {
                path: 'details',
                parameters: {}
              },
              {
                path: 'curiosity',
                parameters: {}
              },
              {
                path: '2',
                parameters: {}
              },
              {
                path: 'NAVCAM',
                parameters: {}
              }
            ],
            outlet: 'primary',
            routeConfig: {
              path: 'details/:code/:sol/:camera'
            },
            queryParams: {},
            fragment: null,
            firstChild: {
              params: {
                code: 'curiosity',
                sol: '2',
                camera: 'NAVCAM'
              },
              data: {},
              url: [],
              outlet: 'primary',
              routeConfig: {
                path: ''
              },
              queryParams: {},
              fragment: null,
              children: []
            },
            children: [
              {
                params: {
                  code: 'curiosity',
                  sol: '2',
                  camera: 'NAVCAM'
                },
                data: {},
                url: [],
                outlet: 'primary',
                routeConfig: {
                  path: ''
                },
                queryParams: {},
                fragment: null,
                children: []
              }
            ]
          }
        ]
      },
      url: '/details/curiosity/2/NAVCAM'
    },
    navigationId: 2
  }
};

export const mockState = {
  state: {
    ...mockInitialState.state
  },
  router: {
    ...mockRouteStoreDetails.router
  }
};

export const mockStateDetails = {
  state: {
    ...mockInitialState.state
  },
  router: {
    ...mockRouteStoreDetails.router
  }
};
