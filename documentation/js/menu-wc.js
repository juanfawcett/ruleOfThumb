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
                    <a href="index.html" data-type="index-link">rule-of-thumb documentation</a>
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
                                            'data-target="#components-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' : 'data-target="#xs-components-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' :
                                            'id="xs-components-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' : 'data-target="#xs-injectables-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' :
                                        'id="xs-injectables-links-module-AppModule-93db066f7c43d1029b52c380d25443c2fb02ad579f05bcfe7c6f367280cba9c507a9dac13223d00a66ec011854455768e403a49a9091c5ad9dfface3f0502cac"' }>
                                        <li class="link">
                                            <a href="injectables/CommonFacade.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonFacade</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GlobalPipesModule.html" data-type="entity-link" >GlobalPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-GlobalPipesModule-1879b11e68e86c9590523223e1c8e8526edcd5838c7b45775580685ddf2aaf8aadded427a214d14653428caa022280027d9bcc68ed070d7d35a94fe8486bb087"' : 'data-target="#xs-pipes-links-module-GlobalPipesModule-1879b11e68e86c9590523223e1c8e8526edcd5838c7b45775580685ddf2aaf8aadded427a214d14653428caa022280027d9bcc68ed070d7d35a94fe8486bb087"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-GlobalPipesModule-1879b11e68e86c9590523223e1c8e8526edcd5838c7b45775580685ddf2aaf8aadded427a214d14653428caa022280027d9bcc68ed070d7d35a94fe8486bb087"' :
                                            'id="xs-pipes-links-module-GlobalPipesModule-1879b11e68e86c9590523223e1c8e8526edcd5838c7b45775580685ddf2aaf8aadded427a214d14653428caa022280027d9bcc68ed070d7d35a94fe8486bb087"' }>
                                            <li class="link">
                                                <a href="pipes/PercentagePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PercentagePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RelativetimePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RelativetimePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' : 'data-target="#xs-components-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' :
                                            'id="xs-components-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' }>
                                            <li class="link">
                                                <a href="components/AsideAddNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsideAddNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AsideSpeakOutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsideSpeakOutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeContainer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeContainer</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RulingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RulingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RulingsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RulingsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' : 'data-target="#xs-injectables-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' :
                                        'id="xs-injectables-links-module-HomeModule-559cecf7386eefac5f3972b89f66cfec9fe61e9e9f5c6289c3391d410c502a1877caa1677242f67f2b00b503b934afbbe96b9fb8cea859bbe7d0c9b258eff3dd"' }>
                                        <li class="link">
                                            <a href="injectables/HomeFacade.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeFacade</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-cf970248489dd906a61acbd7b38e43459433768e7b5b9d4970efcb2bfd952c31c6399304ca5bf5d28309da422efd0f4d7cac5c29c1391fa49da9e7ff294df46c"' : 'data-target="#xs-components-links-module-SharedModule-cf970248489dd906a61acbd7b38e43459433768e7b5b9d4970efcb2bfd952c31c6399304ca5bf5d28309da422efd0f4d7cac5c29c1391fa49da9e7ff294df46c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-cf970248489dd906a61acbd7b38e43459433768e7b5b9d4970efcb2bfd952c31c6399304ca5bf5d28309da422efd0f4d7cac5c29c1391fa49da9e7ff294df46c"' :
                                            'id="xs-components-links-module-SharedModule-cf970248489dd906a61acbd7b38e43459433768e7b5b9d4970efcb2bfd952c31c6399304ca5bf5d28309da422efd0f4d7cac5c29c1391fa49da9e7ff294df46c"' }>
                                            <li class="link">
                                                <a href="components/DropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanguageSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PercentageBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PercentageBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThumbButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThumbButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddNameComponent.html" data-type="entity-link" >AddNameComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
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
                                    <a href="injectables/CommonEffects.html" data-type="entity-link" >CommonEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonFacade.html" data-type="entity-link" >CommonFacade</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeEffects.html" data-type="entity-link" >HomeEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeFacade.html" data-type="entity-link" >HomeFacade</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
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
                                <a href="interfaces/LastVoted.html" data-type="entity-link" >LastVoted</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name.html" data-type="entity-link" >Name</a>
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