// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Graphic ../../core/Error ../../core/handleUtils ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/Queue ../../core/reactiveUtils ../../core/SetUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/support/editableLayers ../../layers/support/layerUtils ../../views/draw/support/HighlightHelper ./CreateFeaturesWorkflow ./UpdateFeatureWorkflow ./UpdateRecordWorkflow ./UpdateWorkflowData ./Workflow ./workflowUtils ../Feature/support/featureUtils ../support/templateUtils".split(" "),
function(h,D,n,v,f,E,u,z,p,A,k,Q,R,S,F,B,w,G,H,I,J,K,L,C,M,N){var x;const O=f.getLogger("esri.widgets.Editor.UpdateWorkflow");f=x=class extends L{constructor(a){super(a);this._workflowStack=new z(A.last);this._sketchStack=new z(A.last);this.type="update"}get activeEditableItem(){return this.activeWorkflow?.data.editableItem??void 0}get activeWorkflow(){return this._workflowStack.last()}get nestedWorkflowCount(){return this._workflowStack.length}get shouldShowAttachments(){return!!this.activeEditableItem?.attachmentsOnUpdateEnabled}get shouldAllowAttachmentEditing(){return!!this.activeEditableItem?.supports.includes("update")}get hasPendingEdits(){return Array.from(this._workflowStack).some(a=>
a.hasPendingEdits)}get helpMessage(){return this.activeWorkflow?.helpMessage?this.activeWorkflow.helpMessage:"awaiting-feature-to-update"===this.stepId?"select":void 0}get reliesOnOwnerAdminPrivileges(){return this.activeWorkflow?.reliesOnOwnerAdminPrivileges??!1}get hasInvalidFormTemplate(){return!!this.activeEditableItem?.hasInvalidFormTemplate}get hasUnsupportedFields(){return!!this.activeEditableItem?.hasUnsupportedFields}async back(a=()=>Promise.resolve(!0)){const {featureFormViewModel:b}=this.data.viewModel;
if(null!=b.relationshipId)b.relationshipId=null;else if(this.activeWorkflow){if(!this.activeWorkflow.hasPendingEdits||await a())this.activeWorkflow.hasPreviousStep?await this.activeWorkflow.previous({cancelCurrentStep:!0}):await this.cancelActiveWorkflow({force:!0})}else this.hasPreviousStep?await this.previous({cancelCurrentStep:!0}):await this.cancel({force:!0})}async cancelActiveWorkflow(a){await this.activeWorkflow?.cancel(a);await this._popWorkflow()}async commit(){await this._drainWorkflowStack(a=>
a.commit());await super.commit()}static create(a){const {viewModel:b,startAt:c,addAttachmentsCallback:d,applyEditsCallback:e}=a;a=new x({data:new K({addAttachmentsCallback:d,applyEditsCallback:e,viewModel:b}),onCommit:async()=>{}});a._set("steps",this._createWorkflowSteps(a,c));return a}async save(){1<this.nestedWorkflowCount?(await this.activeWorkflow?.commit(),await this._popWorkflow()):await this.commit()}async startCreatingRelatedRecord(a){try{const b=await this._createNestedCreateFeaturesWorkflow(a);
await this._pushWorkflow(b)}catch(b){throw new n("editor:unable-to-start-creating","Could not begin updating the provided feature or table record.",{error:b});}}async startUpdating(a){try{const b=await this._createNestedUpdateWorkflow(a);await this._pushWorkflow(b)}catch(b){throw new n("editor:unable-to-start-updating","Could not begin updating the provided feature or table record.",{error:b});}}async deleteActiveFeature(){const {activeWorkflow:a}=this;if(!a)throw new n("editor:nothing-to-delete",
"There is no feature to delete");a&&/update-/.test(a.type)?await a.deleteAndCommit():await a.cancel();1===this.nestedWorkflowCount?await this.reset():await this._popWorkflow()}async cancelAll(){await this._drainWorkflowStack(a=>a.cancel({force:!0}))}async _createNestedCreateFeaturesWorkflow(a){const {relatedLayer:b}=a,{addAttachmentsCallback:c,applyEditsCallback:d,viewModel:e}=this.data;if(!B.isEditableLayer(b))throw new n("editor:unsupported-layer","Editing is not supported on the provided layer");
a=this._getCreationInfoForNestedCreateFeaturesWorkflow(a);return H.create({addAttachmentsCallback:c,applyEditsCallback:d,creationInfo:a,isNested:!0,parent:"create-features"!==this.activeWorkflow?.type?this.activeWorkflow:void 0,startAt:a.template||a.initialFeature?"creating-features":"awaiting-feature-creation-info",viewModel:e})}_getCreationInfoForNestedCreateFeaturesWorkflow(a){const {relatedLayer:b}=a;if(!B.isEditableLayer(b)||w.isSubtypeGroupLayer(b))throw new n("editor:unsupported-layer","Editing is not supported on the provided layer");
const c={layer:b,maxFeatures:1};a=this._makeRelatedRecordAttributes(a);const d=N.getAllTemplatesForLayer(b);0<d?.length?(c.attributeOverrides=a,1===d.length&&(c.template=d[0])):c.initialFeature=new D({sourceLayer:b,attributes:a});return c}async _createNestedUpdateWorkflow(a){const b=w.isTable(a.sourceLayer)?J.UpdateRecordWorkflow:I.UpdateFeatureWorkflow,{applyEditsCallback:c,viewModel:d}=this.data,e=await b.create({feature:a,parent:"create-features"!==this.activeWorkflow?.type?this.activeWorkflow:
void 0,viewModel:d,applyEdits:c});await p.whenOnce(()=>!e.updating);return e}async _drainWorkflowStack(a){const b=this._workflowStack,c=[];for(;0<b.length;){const d=b.pop();this._sketchStack.pop();const e=a(d).then(()=>d.destroy());this._updatingHandles.addPromise(e);c.push(e)}await Promise.all(c)}_makeRelatedRecordAttributes(a){const {parentFeature:b,relatedLayer:c,relationshipId:d}=a;if(M.isGraphicForRelatableFeatureSupportedLayer(b))if(a=c.relationships?.find(g=>g.id===d))if("origin"===a.role)q("unsupported-role",
"Creating new related records in the 'origin' table of a relationship is not yet supported");else{var e=b.sourceLayer;a.relatedTableId!==e.layerId&&q("invalid-argument-combination","The given parent feature does not belong to the relationship designated by the given relationship ID.");if(e=e.relationships?.find(g=>g.id===d))return(e=b.getAttribute(e.keyField))||q("no-key-on-origin-feature","The given parent feature does not have a value for the relationship's origin primary key field."),{[a.keyField]:e};
q("relationship-not-found","Could not begin creating a related record because the relationship specified could not be found on the origin layer.")}else q("relationship-not-found","Could not begin creating a related record because the relationship specified could not be found on the destination layer.")}async _popWorkflow(){this._workflowStack.pop()?.destroy();this._sketchStack.pop();const a=await this._reconcileWorkflowStack();if(0<a.failureCount)throw new n("editor:next-workflow-failed","Popped the top workflow, but the next workflow in the stack failed to activate",
a);}async _pushWorkflow(a){var b=this._workflowRequiresSketchViewModel(a);this.activeWorkflow?.exit({removeSketchHandles:b});b=this._sketchStack;const c=await a?.start(),d=b.peek();c?(d?.exit(),b.push(c)):b.push(this._cloneSketchController(d));this._workflowStack.push(a);a=await this._reconcileWorkflowStack();if(0<a.failureCount)throw new n("editor:failed-to-start-updating-feature","Failed to enter the provided workflow.",a);}async _reconcileWorkflowStack(){const a=this._workflowStack,b=this._sketchStack;
try{const c=a.peek();await c?.enter();await b.peek()?.enter();return{activeWorkflow:c,failureCount:0}}catch(c){a.pop().destroy();b.pop();const {activeWorkflow:d,failureCount:e}=await this._reconcileWorkflowStack();return{activeWorkflow:d,failureCount:e+1}}}_cloneSketchController(a){return{enter:a?.enter??(async()=>{}),exit:a?.exit??(async()=>{})}}_workflowRequiresSketchViewModel(a){const {type:b}=a;return"update-feature"===b||"create-features"===b&&!w.isTable(a.data.creationInfo?.layer)}static _createWorkflowSteps(a,
b="awaiting-feature-to-update"){const {data:c}=a;return C.createWorkflowSteps(["awaiting-feature-to-update","awaiting-update-feature-candidate","editing-existing-feature","adding-attachment","editing-attachment"],b,{"awaiting-feature-to-update":()=>({id:"awaiting-feature-to-update",async setUp(){const {spinnerViewModel:d}=c.viewModel,e=c.viewModel.view;let g=null;a.addHandles(v.makeHandle(()=>{g=E.abortMaybe(g)}),this.id);c.rootFeature=null;c.candidates=[];const l=e.on("immediate-click",async r=>
{r.stopPropagation();d.location=r.mapPoint;d.visible=!0;g?.abort();const {editableItems:m}=c.viewModel;g=new AbortController;const y=await new Promise((t,P)=>{u.onAbort(g?.signal,()=>P(u.createAbortError()));t(C.fetchCandidates(m,e,r,g?.signal))});u.throwIfAborted(g);c.candidates=y.filter(t=>"fulfilled"===t.status).flatMap(t=>t.value);d.visible=1===c.candidates.length;0!==c.candidates.length&&(1===c.candidates.length?(c.rootFeature=c.candidates[0],a.go("editing-existing-feature").catch(()=>{}).then(()=>
d.visible=!1)):a.next())});e.focus();a.addHandles(l,this.id)},async tearDown(){0===c.candidates.length&&(c.viewModel.spinnerViewModel.visible=!1);a.removeHandles(this.id)}}),"awaiting-update-feature-candidate":()=>({id:"awaiting-update-feature-candidate",async setUp(){c.rootFeature=null;const {view:d}=c.viewModel;if(d){var e=new G({view:d});a.addHandles([p.watch(()=>c.rootFeature,(g,l)=>{e.remove(l);e.add(g)},p.sync),v.makeHandle(()=>e.removeAll())],this.id)}},async tearDown(){a.removeHandles(this.id)}}),
"editing-existing-feature":()=>({id:"editing-existing-feature",async setUp(){const {rootFeature:d,viewModel:e}=a.data;if(!d)throw new n("editor:no-feature-specified","Cannot setup the 'updating-existing-feature' step until the root feature is defined");await a.startUpdating(d);e.spinnerViewModel.visible=!1;const g=u.debounce(async()=>{await p.whenOnce(()=>!a.updating);a.previous()}),{featureFormViewModel:l}=c.viewModel,r=l.relatedRecordCallbacks;l.relatedRecordCallbacks={addRelatedRecord:async m=>
{await a.startCreatingRelatedRecord(m);l.relationshipId=null},editRelatedRecord:async({relatedFeature:m})=>{await a.startUpdating(m);l.relationshipId=null},showAllRelatedRecords:m=>l.relationshipId=m.relationshipId};a.addHandles([v.makeHandle(()=>l.relatedRecordCallbacks=r),p.watch(()=>a.nestedWorkflowCount,(m,y)=>{0===m&&0!==y&&g()},p.sync)],this.id)},async tearDown(){await a.cancelAll();a.removeHandles(this.id)}}),"adding-attachment":()=>({id:"adding-attachment",parent:"editing-existing-feature",
async setUp(){},async tearDown(){c.viewModel.attachmentsViewModel.mode="view"}}),"editing-attachment":()=>({id:"editing-attachment",parent:"editing-existing-feature",async setUp(){},async tearDown(){c.viewModel.attachmentsViewModel.mode="view"}})})}};h.__decorate([k.property()],f.prototype,"activeEditableItem",null);h.__decorate([k.property()],f.prototype,"activeWorkflow",null);h.__decorate([k.property()],f.prototype,"nestedWorkflowCount",null);h.__decorate([k.property()],f.prototype,"shouldShowAttachments",
null);h.__decorate([k.property()],f.prototype,"shouldAllowAttachmentEditing",null);h.__decorate([k.property()],f.prototype,"hasPendingEdits",null);h.__decorate([k.property()],f.prototype,"helpMessage",null);h.__decorate([k.property()],f.prototype,"reliesOnOwnerAdminPrivileges",null);h.__decorate([k.property()],f.prototype,"hasInvalidFormTemplate",null);h.__decorate([k.property()],f.prototype,"hasUnsupportedFields",null);f=x=h.__decorate([F.subclass("esri.widgets.Editor.UpdateWorkflow")],f);const q=
(a,b)=>O.warn(`editor:${a}`,b,"The create operation will be allowed to proceed, but the resulting feature may not be related to the given parent feature.");return f});