// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./VoxelIsosurface ./VoxelTransferFunctionStyle ./VoxelUniqueValue".split(" "),function(b,d,a,e,c,l,m,h,n,k){var f;a=f=class extends a.JSONSupport{constructor(g){super(g);this.variableId=0;this.label="";this.isosurfaces=this.uniqueValues=this.transferFunction=null;this.uniqueValues=
new (d.ofType(k));this.isosurfaces=new (d.ofType(h))}clone(){return new f({variableId:this.variableId,label:this.label,transferFunction:e.clone(this.transferFunction),uniqueValues:e.clone(this.uniqueValues),isosurfaces:e.clone(this.isosurfaces)})}};b.__decorate([c.property({type:l.Integer,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"variableId",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:n,json:{write:{enabled:!0,
overridePolicy(){return{enabled:!this.uniqueValues||1>this.uniqueValues.length}}}}})],a.prototype,"transferFunction",void 0);b.__decorate([c.property({type:d.ofType(k),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&0<this.uniqueValues.length}}}}})],a.prototype,"uniqueValues",void 0);b.__decorate([c.property({type:d.ofType(h),json:{write:{enabled:!0,overridePolicy(){const g=!!this.isosurfaces&&0<this.isosurfaces.length;return{enabled:(!this.uniqueValues||1>this.uniqueValues.length)&&
g}}}}})],a.prototype,"isosurfaces",void 0);return a=f=b.__decorate([m.subclass("esri.layers.voxel.VoxelVariableStyle")],a)});