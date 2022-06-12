'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">documentacion</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-44541af847cea819855d76fe9c4c7e47f92ba93750fc4b35458d05192a87a138ba316d2904fdf5db89fdb14ebf746115e705000152041923de81235913646748"' : 'data-target="#xs-components-links-module-AppModule-44541af847cea819855d76fe9c4c7e47f92ba93750fc4b35458d05192a87a138ba316d2904fdf5db89fdb14ebf746115e705000152041923de81235913646748"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-44541af847cea819855d76fe9c4c7e47f92ba93750fc4b35458d05192a87a138ba316d2904fdf5db89fdb14ebf746115e705000152041923de81235913646748"' :
                                            'id="xs-components-links-module-AppModule-44541af847cea819855d76fe9c4c7e47f92ba93750fc4b35458d05192a87a138ba316d2904fdf5db89fdb14ebf746115e705000152041923de81235913646748"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-7ca427c944330d14392efa60f77c2b34199cbf311ec210e7fd44b774e86a10b59b34207749340a5737db280964c74d9e7c4932d34e7a651fc4a24f358ec93ea7"' : 'data-target="#xs-components-links-module-DashboardModule-7ca427c944330d14392efa60f77c2b34199cbf311ec210e7fd44b774e86a10b59b34207749340a5737db280964c74d9e7c4932d34e7a651fc4a24f358ec93ea7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-7ca427c944330d14392efa60f77c2b34199cbf311ec210e7fd44b774e86a10b59b34207749340a5737db280964c74d9e7c4932d34e7a651fc4a24f358ec93ea7"' :
                                            'id="xs-components-links-module-DashboardModule-7ca427c944330d14392efa60f77c2b34199cbf311ec210e7fd44b774e86a10b59b34207749340a5737db280964c74d9e7c4932d34e7a651fc4a24f358ec93ea7"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoverPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoverPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoverPhotosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoverPhotosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsModule.html" data-type="entity-link" >DetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailsModule-ba7da39ead86f35824df060dde31454d38d877dd72f4ce10c149a76d7658422e0d5e9e19a7217f3197399808e3df073c94a26931a1451a9b4f921170dce1e750"' : 'data-target="#xs-components-links-module-DetailsModule-ba7da39ead86f35824df060dde31454d38d877dd72f4ce10c149a76d7658422e0d5e9e19a7217f3197399808e3df073c94a26931a1451a9b4f921170dce1e750"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailsModule-ba7da39ead86f35824df060dde31454d38d877dd72f4ce10c149a76d7658422e0d5e9e19a7217f3197399808e3df073c94a26931a1451a9b4f921170dce1e750"' :
                                            'id="xs-components-links-module-DetailsModule-ba7da39ead86f35824df060dde31454d38d877dd72f4ce10c149a76d7658422e0d5e9e19a7217f3197399808e3df073c94a26931a1451a9b4f921170dce1e750"' }>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsRoutingModule.html" data-type="entity-link" >DetailsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-99d683e012638fe088f1a09514f877b9c8f9b19e81d63e39164bd14019d586a8405e4d11353cf0e5d8253425b94fff792b2912e32c8496cd35d8eb4cf630eab9"' : 'data-target="#xs-components-links-module-SharedModule-99d683e012638fe088f1a09514f877b9c8f9b19e81d63e39164bd14019d586a8405e4d11353cf0e5d8253425b94fff792b2912e32c8496cd35d8eb4cf630eab9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-99d683e012638fe088f1a09514f877b9c8f9b19e81d63e39164bd14019d586a8405e4d11353cf0e5d8253425b94fff792b2912e32c8496cd35d8eb4cf630eab9"' :
                                            'id="xs-components-links-module-SharedModule-99d683e012638fe088f1a09514f877b9c8f9b19e81d63e39164bd14019d586a8405e4d11353cf0e5d8253425b94fff792b2912e32c8496cd35d8eb4cf630eab9"' }>
                                            <li class="link">
                                                <a href="components/ErrorDialogLauncherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorDialogLauncherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorDialogPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorDialogPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link" >Utils</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreEffects.html" data-type="entity-link" >StoreEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiManifest.html" data-type="entity-link" >ApiManifest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIPhotoCameraResponse.html" data-type="entity-link" >APIPhotoCameraResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIPhotoDataReponse.html" data-type="entity-link" >APIPhotoDataReponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIPhotoResponse.html" data-type="entity-link" >APIPhotoResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIPhotoRoverResponse.html" data-type="entity-link" >APIPhotoRoverResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorDialogData.html" data-type="entity-link" >ErrorDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Manifest.html" data-type="entity-link" >Manifest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManifestPhoto.html" data-type="entity-link" >ManifestPhoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelLoadStatus.html" data-type="entity-link" >PanelLoadStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rover.html" data-type="entity-link" >Rover</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoverCamera.html" data-type="entity-link" >RoverCamera</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoverListItem.html" data-type="entity-link" >RoverListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoverPhoto.html" data-type="entity-link" >RoverPhoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoverPhotosRequest.html" data-type="entity-link" >RoverPhotosRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoreState.html" data-type="entity-link" >StoreState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});