// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/a11yUtils ../core/deprecate ../core/Logger ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ../layers/support/rasterDatasets/RasterFactory ./Widget ./OrientedImageryViewer/arcUtils ./OrientedImageryViewer/constants ./OrientedImageryViewer/OrientedImageryViewerViewModel ./support/componentsUtils ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),
function(r,h,H,v,t,u,k,I,g,S,J,K,L,M,b,z,N,T,A,c){g=class extends L{constructor(a,d){super(a,d);this.navigationToolActive=this.imageEnhancementToolActive=this.galleryOpened=this.dockEnabled=!1;this.viewModel=new z;this.messagesCommon=null;this.visibleElements={...b.defaultVisibleElements};this._navigationTool=null;this._actionItems=new Map;this._galleryController=new AbortController;this._galleryObserver=new IntersectionObserver(this._lazyLoadImage.bind(this));this._loadImageFromGallery=this._loadImageFromGallery.bind(this);
this._registerGalleryItem=this._registerGalleryItem.bind(this);this._unregisterGalleryItem=this._unregisterGalleryItem.bind(this);this._renderViewerContainer=this._renderViewerContainer.bind(this);this._renderViewer=this._renderViewer.bind(this)}initialize(){this.addHandles([u.watch(()=>[this.viewModel?.selectedFeatureAngle,this._navigationTool],([,a])=>{!this.viewModel.updating&&a&&this._updateNavigationTool(a)},u.initial),u.watch(()=>this.currentCoverageVisible,a=>this._onCurrentCoverageVisibilityChange(a)),
u.watch(()=>this.isAdditionalCoverageVisible,a=>this._onAdditionalCoverageVisibilityChange(a)),u.watch(()=>this.isAdditionalPointSourcesVisible,a=>this._onAdditionalCameraLocationsVisibility(a))])}loadDependencies(){return N.loadCalciteComponents({tooltip:()=>new Promise((a,d)=>r(["../chunks/calcite-tooltip"],a,d)),action:()=>new Promise((a,d)=>r(["../chunks/calcite-action"],a,d)),"action-group":()=>new Promise((a,d)=>r(["../chunks/calcite-action-group"],a,d)),"action-bar":()=>new Promise((a,d)=>
r(["../chunks/calcite-action-bar"],a,d)),label:()=>new Promise((a,d)=>r(["../chunks/calcite-label"],a,d)),panel:()=>new Promise((a,d)=>r(["../chunks/calcite-panel"],a,d)),slider:()=>new Promise((a,d)=>r(["../chunks/calcite-slider"],a,d))})}destroy(){this._galleryController.abort();this._galleryObserver.disconnect()}get activeLayer(){v.deprecatedProperty(t.getLogger(this),"activeLayer",{replacement:"layer"});return this.layer}set activeLayer(a){v.deprecatedProperty(t.getLogger(this),"activeLayer",
{replacement:"layer"});this.layer=a}get currentCoverageVisible(){return this.viewModel.currentCoverageVisible}set currentCoverageVisible(a){this.viewModel.currentCoverageVisible=a}get disabled(){return this.viewModel.disabled}set disabled(a){this.viewModel.disabled=a}get isDocked(){v.deprecatedProperty(t.getLogger(this),"isDocked",{replacement:"dockEnabled"});return this.dockEnabled}set isDocked(a){v.deprecatedProperty(t.getLogger(this),"isDocked",{replacement:"dockEnabled"});this.dockEnabled=a}get imageGalleryEnabled(){return this.viewModel.imageGalleryEnabled}get isAdditionalCoverageVisible(){return this.viewModel.isAdditionalCoverageVisible}set isAdditionalCoverageVisible(a){this.viewModel.isAdditionalCoverageVisible=
a}get isAdditionalPointSourcesVisible(){return this.viewModel.isAdditionalPointSourcesVisible}set isAdditionalPointSourcesVisible(a){this.viewModel.isAdditionalPointSourcesVisible=a}get mapImageConversionToolState(){return this.viewModel.mapImageConversionToolState}set mapImageConversionToolState(a){this.viewModel.mapImageConversionToolState=a}get layer(){return this.viewModel.layer}set layer(a){this.viewModel.layer=a}get referencePoint(){return this.viewModel.referencePoint??null}get view(){return this.viewModel.view}set view(a){this.viewModel.view=
a}castVisibleElements(a){return{...b.defaultVisibleElements,...a}}async _getThumbnailPixelBlockInternal(a,d){const {level:e,offset:f,size:m}=this._getMaxLevelRasterParameters(a);try{const {pixelBlock:n}=await a.fetchRawPixels(e,f,m,d);return n}catch(n){t.getLogger(this).warn("failed to create canvas with pixeldata",n)}return null}_getMaxLevelRasterParameters(a){const {storageInfo:d,width:e,height:f}=a.rasterInfo,{maximumPyramidLevel:m,pyramidScalingFactor:n}=d;a=n??2;return{level:m,offset:{x:0,y:0},
size:{width:Math.ceil(e/a**m),height:Math.ceil(f/a**m)}}}async _getThumbnailPixelBlock(a){const {signal:d}=this._galleryController;try{const e=await K.open({url:a,signal:d});return e?await this._getThumbnailPixelBlockInternal(e,{signal:d}):null}catch(e){t.getLogger(this).error("failed to create thumbnail",e)}return null}_handleBrightnessChange(a){this.viewModel.brightness=a.target.value??0}_handleContrastChange(a){this.viewModel.contrast=a.target.value??0}_handleSharpnessChange(a){this.viewModel.sharpness=
a.target.value??0}_lazyLoadImage(a,d){a.forEach(async e=>{if(e.isIntersecting){e=e.target;var f=e.getAttribute("data-src");if(f&&(f=await this._getThumbnailPixelBlock(f))){e.width=f.width;e.height=f.height;var m=e.getContext("2d");if(m){var n=m.createImageData(e.width,e.height);n.data.set(f.getAsRGBA());m.putImageData(n,0,0);d.unobserve(e)}}}})}_loadImageFromGallery(a){({target:a}=a);if(a){var d=a.getAttribute("data-objectid");d&&this.viewModel.selectedFeature?.attributes.objectId!==Number(d)&&(this.viewModel.selectedFeature=
this.viewModel.features?.find(({attributes:e})=>e.objectId===Number(d)))}}_onAdditionalCoverageVisibilityChange(a){this.viewModel.setAdditionalCoverageVisibility(a)}_onAdditionalCameraLocationsVisibility(a){this.viewModel.setAdditionalCameraLocationsVisibility(a)}_onCurrentCoverageVisibilityChange(a){this.viewModel.setCurrentCoverageVisibility(a)}_registerGalleryItem(a){this._galleryObserver.observe(a)}_resetImageTools(){this.viewModel.sharpness=this.viewModel.brightness=this.viewModel.contrast=0}_resizeNavigationTool(){this._navigationTool?.parentElement?.classList.toggle(b.css.navigationZoomed)}_storeActionElement(a){this._actionItems.set(a.text,
a)}_storeNavigationToolReference(a){this._navigationTool=a}_toggleAdditionalCameraLocations(){this.isAdditionalPointSourcesVisible=!this.isAdditionalPointSourcesVisible}_toggleAdditionalCoverage(){this.isAdditionalCoverageVisible=!this.isAdditionalCoverageVisible}_toggleCurrentCoverage(){this.currentCoverageVisible=!this.currentCoverageVisible}_toggleImageEnhancementToolState(a){a.stopPropagation();if(this.imageEnhancementToolActive=!this.imageEnhancementToolActive)this.galleryOpened&&(this.galleryOpened=
!1),this.navigationToolActive&&(this.navigationToolActive=!1)}_toggleImageGallery(a){a.stopPropagation();if(this.galleryOpened=this.imageGalleryEnabled?!this.galleryOpened:!1)this.imageEnhancementToolActive&&(this.imageEnhancementToolActive=!1),this.navigationToolActive&&(this.navigationToolActive=!1)}_toggleNavigationTool(){if(this.navigationToolActive=!this.navigationToolActive)this.galleryOpened&&(this.galleryOpened=!1),this.imageEnhancementToolActive&&(this.imageEnhancementToolActive=!1)}_toggleMapImageConversionToolState(){this.mapImageConversionToolState=
!this.mapImageConversionToolState}_unregisterGalleryItem(a){this._galleryObserver.unobserve(a)}_updateNavigationTool(a){const {previousFeatureAngle:d,selectedFeatureAngle:e}=this.viewModel,f=(e-d+540)%360-180;a.style.setProperty(b.navigationToolRotationFrom,`${d}deg`);a.style.setProperty(b.navigationToolRotationTo,`${d+f}deg`)}loadBestImage(a){this.viewModel.loadBestImage(a)}async plotMapPoint(a){return this.viewModel.plotMapPoint(a)}resetImage(){this.viewModel.resetImage()}render(){const {dockEnabled:a,
viewModel:{updating:d}}=this;return c.tsx("div",{class:this.classes(b.base,b.root)},c.tsx("calcite-panel",{bind:this,class:a?b.css.dock:b.css.float,heading:this.visibleElements.title?this.messages.title:void 0,loading:d},this.visibleElements.coverageMenu?this._renderMenuBarContainer():null,this._renderBody()))}_renderActionTooltips(){return[...this._actionItems].map(([a,d])=>c.tsx("calcite-tooltip",{key:a,referenceElement:d},c.tsx("span",null,a)))}_renderBody(){return c.tsx("div",{class:b.css.body},
this._renderViewerContainer(),this._renderImageGallery(),this._renderImageEnhancementTools(),this._renderNavigation())}_renderImageEnhancementTools(){const {imageEnhancementToolActive:a,viewModel:{brightness:d,contrast:e,sharpness:f}}=this;return a&&c.tsx("calcite-panel",{bind:this,class:b.css.imageEnhancementWrapper,closable:!0,closed:!a,heading:this.messages.imageEnhancement,key:this.messages.imageEnhancement,onCalcitePanelClose:this._toggleImageEnhancementToolState},c.tsx("div",{class:b.css.imageEnhancementTools},
c.tsx("div",{class:b.css.imageEnhancementToolContainer},c.tsx("calcite-label",null,this.messages.brightness,c.tsx("calcite-slider",{bind:this,labelTicks:!0,max:10,min:-10,ticks:5,value:d,onCalciteSliderInput:this._handleBrightnessChange}))),c.tsx("div",{class:b.css.imageEnhancementToolContainer},c.tsx("calcite-label",null,this.messages.contrast,c.tsx("calcite-slider",{bind:this,labelTicks:!0,max:10,min:-10,ticks:5,value:e,onCalciteSliderInput:this._handleContrastChange}))),c.tsx("div",{class:b.css.imageEnhancementToolContainer},
c.tsx("calcite-label",null,this.messages.sharpness,c.tsx("calcite-slider",{bind:this,labelTicks:!0,max:1,min:0,step:.1,ticks:.5,value:f,onCalciteSliderInput:this._handleSharpnessChange})))),c.tsx("calcite-action",{bind:this,icon:"reset",onclick:this._resetImageTools,slot:"header-actions-end",text:this.messagesCommon.reset}))}_renderImageGallery(){const {container:a,galleryOpened:d,imageGalleryEnabled:e,viewModel:{thumbnails:f}}=this;return e&&d&&a&&f?c.tsx("calcite-panel",{bind:this,class:b.css.carousel,
closable:!0,closed:!d,heading:this.messages.imageGallery,key:this.messages.imageGallery,onCalcitePanelClose:this._toggleImageGallery},c.tsx("div",{class:b.css.carouselContainer},this._renderThumbnails(f))):null}_renderMapImageConversionTool(){const {mapImageConversionToolState:a,viewModel:{imageLoaded:d}}=this;return c.tsx("calcite-action",{active:a,afterCreate:this._storeActionElement,bind:this,disabled:!d,icon:"image-pin",onclick:this._toggleMapImageConversionToolState,text:this.messages.mapImageConversionTool})}_renderNavigation(){const {viewModel:{sectorData:a,
features:d,selectedFeature:e,updating:f,navigatorSelectedFeature:m}}=this;if(!d.length||!this.container||!e)return null;let n,B,C,D,E;if(m){const {x:l,y:p,direction:q}=m,[w,x,y,O]=b.segmentArcs[q];n=`M ${l} ${p} L ${w} ${x} A ${b.sectorsRadii[2]} ${b.sectorsRadii[2]} 0 0 1 ${y} ${O} Z`;B=l;D=p;C=b.segmentArcs[q][4];E=b.segmentArcs[q][5]}const F=l=>{(l=l.target.dataset?.sector)&&this.viewModel.handleSectorClick(+l)},G=l=>{if(l=l.target.dataset){var {featureIndexInSector:p,sector:q}=l;p&&q&&this.viewModel.handleFeatureClick({sector:q,
featureIndexInSector:+p})}},P=l=>{l.removeEventListener("click",G)},Q=a?.map(l=>l?.items).filter(Boolean).flatMap(l=>l?.map(({x:p,y:q,objectID:w,featureIndexInSector:x,sector:y})=>c.tsx("circle",{afterRemoved:P,class:this.classes(b.css.feature,{selected:e.attributes.objectId===w}),cx:p,cy:q,"data-featureIndexInSector":x,"data-sector":y,key:`${b.css.feature}-${w}`,onclick:G,r:b.featureCircleRadius}))),R=l=>{l.removeEventListener("click",F)};return this.navigationToolActive&&!f?c.tsx("div",{bind:this,
class:b.css.navigationWrapper,key:this.messages.navigationTool},c.tsx("svg",{afterCreate:this._storeNavigationToolReference.bind(this),class:H.prefersReducedMotion()?b.navigation:b.css.rotateWithAnimation,focusable:"false",height:b.navigationToolDimensionLength,role:"img",width:b.navigationToolDimensionLength,xmlns:"http://www.w3.org/2000/svg"},c.tsx("defs",null,c.tsx("linearGradient",{gradientUnits:"userSpaceOnUse",id:`${this.id}-coverage-fill`,x1:B,x2:C,y1:D,y2:E},c.tsx("stop",{class:b.css.navigationPathOffset0,
offset:0}),c.tsx("stop",{class:b.css.navigationPathOffset1,offset:1}))),c.tsx("g",null,c.tsx("circle",{class:this.classes(b.css.sector,b.css.outerSector),cx:b.sectorsRadii[3],cy:b.sectorsRadii[3],onclick:this._resizeNavigationTool.bind(this),r:b.sectorsRadii[3]}),c.tsx("circle",{class:b.css.sector,cx:b.sectorsRadii[3],cy:b.sectorsRadii[3],r:b.sectorsRadii[2]}),c.tsx("circle",{class:b.css.sector,cx:b.sectorsRadii[3],cy:b.sectorsRadii[3],r:b.sectorsRadii[1]}),c.tsx("circle",{class:b.css.sector,cx:b.sectorsRadii[3],
cy:b.sectorsRadii[3],r:b.sectorsRadii[0]}),c.tsx("path",{class:b.css.pointer,d:"M 56.5 6.06217782649107 L 60 0 L 63.5 6.06217782649107 Z",key:`${b.css.pointer}-west`}),c.tsx("path",{class:this.classes(b.css.pointer,b.css.north),d:"M 113.93782217350893 56.5 L 120 60 L 113.93782217350893 63.5 Z",key:`${b.css.pointer}-north`}),c.tsx("path",{class:b.css.pointer,d:"M 56.5 113.93782217350893 L 60 120 L 63.5 113.93782217350893 Z",key:`${b.css.pointer}-east`}),c.tsx("path",{class:b.css.pointer,d:"M 6.06217782649107 56.5 L 0 60 L 6.06217782649107 63.5 Z",
key:`${b.css.pointer}-south`}),c.tsx("path",{class:this.classes(b.css.sector,b.css.sectorSeparator),d:"M 23.937554159486076 23.937554159486076 L 96.06244584051393 96.06244584051393 M 23.937554159486076 96.06244584051393 L 96.06244584051393 23.937554159486076",key:b.css.sectorSeparator}),M.getAllArcPath([b.sectorsRadii[2],b.sectorsRadii[1],b.sectorsRadii[0]],b.sectorsRadii[3],b.sectorsRadii[3]).map((l,p)=>c.tsx("path",{afterRemoved:R,class:this.classes(b.css.sector,a?.[p]?.length?b.css.sectorEnabled:
b.css.sectorDisabled),d:l,"data-sector":`${p}`,key:`${b.css.sector}-${p}`,onclick:F})),c.tsx("path",{class:this.classes(b.css.sector,b.css.sectorCross),d:"M 56.4 56.4 L 63.53 63.53 M 63.53 56.4 L 56.4 63.53",key:b.css.sectorCross}),Q,5<=e.attributes.cameraPitch&&n?c.tsx("path",{class:b.css.selectedFeaturePath,d:n,fill:`url(#${this.id}-coverage-fill)`,key:b.css.selectedFeaturePath}):null))):null}_renderNavigationTool(){const {imageLoaded:a}=this.viewModel;return c.tsx("calcite-action",{active:this.navigationToolActive,
afterCreate:this._storeActionElement,bind:this,disabled:!a,icon:"explore",onclick:this._toggleNavigationTool,text:this.messages.navigationTool})}_renderImageEnhancementTool(){const {imageLoaded:a}=this.viewModel;return c.tsx("calcite-action",{active:this.imageEnhancementToolActive,afterCreate:this._storeActionElement,bind:this,disabled:!a,icon:"sliders-horizontal",onclick:this._toggleImageEnhancementToolState,text:this.messages.imageEnhancement})}_renderMenuBarContainer(){const {currentCoverageVisible:a,
isAdditionalCoverageVisible:d,isAdditionalPointSourcesVisible:e,imageGalleryEnabled:f}=this;return c.tsx("calcite-action-bar",{expandDisabled:!0,layout:"horizontal",slot:"action-bar"},c.tsx("calcite-action-group",{expanded:!0},c.tsx("calcite-action",{active:a,afterCreate:this._storeActionElement,bind:this,class:b.css.currentCoverage,icon:"trapezoid-area",onclick:this._toggleCurrentCoverage,text:this.messages.currentFootprint}),c.tsx("calcite-action",{active:d,afterCreate:this._storeActionElement,
bind:this,class:b.css.addCoverage,icon:"trapezoid-area",onclick:this._toggleAdditionalCoverage,text:this.messages.additionalFootprints}),c.tsx("calcite-action",{active:e,afterCreate:this._storeActionElement,bind:this,class:b.css.addExpPoints,icon:"circle-area",onclick:this._toggleAdditionalCameraLocations,text:this.messages.additionalCameraLocations})),c.tsx("calcite-action-group",{layout:"horizontal"},this.visibleElements.mapImageConversionTool?this._renderMapImageConversionTool():null,this.visibleElements.navigationTool?
this._renderNavigationTool():null,this.visibleElements.imageEnhancement?this._renderImageEnhancementTool():null),c.tsx("calcite-action-group",null,c.tsx("calcite-action",{active:this.galleryOpened,afterCreate:this._storeActionElement,bind:this,disabled:!f,icon:"images",onclick:this._toggleImageGallery,text:this.messages.imageGallery,textEnabled:!0})),this._renderActionTooltips())}_renderMessageBox(){const {displayMessage:a}=this.viewModel;return a?c.tsx("span",{class:b.css.messageBox},this.messages[a.key],
a?.data):null}_renderThumbnails(a){const {selectedFeature:d}=this.viewModel;return d?c.tsx("div",{class:b.css.carouselContent},a.items.map(({url:e,objectId:f},m)=>c.tsx("div",{class:`${b.css.carouselItemWrapper}${d.attributes.objectId===f?"--selected":""}`,key:`${b.css.carouselItemWrapper}-${m}`},c.tsx("canvas",{afterCreate:this._registerGalleryItem,afterRemoved:this._unregisterGalleryItem,alt:`thumbnail-${f}`,class:b.css.carouselItem,"data-objectid":`${f}`,"data-src":e,onclick:this._loadImageFromGallery})))):
null}_renderViewerContainer(){return c.tsx("div",{class:b.css.viewerContainer},this._renderViewer(),this._renderMessageBox())}_renderViewer(){const {displayMessage:a}=this.viewModel;return c.tsx("div",{afterCreate:this.viewModel.loadViewer,bind:this,class:`${b.css.viewer}${a?"--hide":""}`})}};h.__decorate([k.property()],g.prototype,"activeLayer",null);h.__decorate([k.property()],g.prototype,"currentCoverageVisible",null);h.__decorate([k.property()],g.prototype,"disabled",null);h.__decorate([k.property()],
g.prototype,"dockEnabled",void 0);h.__decorate([k.property()],g.prototype,"isDocked",null);h.__decorate([k.property()],g.prototype,"galleryOpened",void 0);h.__decorate([k.property()],g.prototype,"imageEnhancementToolActive",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"imageGalleryEnabled",null);h.__decorate([k.property()],g.prototype,"isAdditionalCoverageVisible",null);h.__decorate([k.property()],g.prototype,"isAdditionalPointSourcesVisible",null);h.__decorate([k.property()],g.prototype,
"mapImageConversionToolState",null);h.__decorate([k.property()],g.prototype,"layer",null);h.__decorate([k.property()],g.prototype,"navigationToolActive",void 0);h.__decorate([k.property({type:z})],g.prototype,"viewModel",void 0);h.__decorate([k.property(),A.messageBundle("esri/widgets/OrientedImageryViewer/t9n/OrientedImageryViewer")],g.prototype,"messages",void 0);h.__decorate([k.property(),A.messageBundle("esri/t9n/common")],g.prototype,"messagesCommon",void 0);h.__decorate([k.property()],g.prototype,
"referencePoint",null);h.__decorate([k.property()],g.prototype,"view",null);h.__decorate([k.property()],g.prototype,"visibleElements",void 0);h.__decorate([I.cast("visibleElements")],g.prototype,"castVisibleElements",null);h.__decorate([k.property()],g.prototype,"_navigationTool",void 0);return g=h.__decorate([J.subclass("esri.widgets.OrientedImageryViewer")],g)});