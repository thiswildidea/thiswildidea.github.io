// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/OptimizedFeature","../../../../../layers/support/FieldsIndex","./FeatureSetReader"],function(l,f,e,m,n){function p({coords:a,lengths:b}){let c=0;for(const d of b){for(b=1;b<d;b++)a[2*(c+b)]+=a[2*(c+b)-2],a[2*(c+b)+1]+=a[2*(c+b)-1];c+=d}}class g extends n.FeatureSetReader{static fromFeatures(a,b){const {objectIdField:c,geometryType:d}=b,k=f.convertFromFeatures([],a,d,!1,!1,c);for(let h=0;h<k.length;h++)k[h].displayId=
a[h].displayId;return g.fromOptimizedFeatures(k,b)}static fromFeatureSet(a,b){a=f.convertFromFeatureSet(a,b.objectIdField);return g.fromOptimizedFeatureSet(a,b)}static fromOptimizedFeatureSet(a,b){var {features:c}=a;c=g.fromOptimizedFeatures(c,b);c._exceededTransferLimit=a.exceededTransferLimit;c._transform=a.transform;c._fieldsIndex=new m(b.fields);return c}static fromOptimizedFeatures(a,b,c){const d=n.FeatureSetReader.createInstance();a=new g(d,a,b);a._fieldsIndex=new m(b.fields);a._transform=c;
return a}constructor(a,b,c){super(a,c);this._exceededTransferLimit=!1;this._featureIndex=-1;this._fieldsIndex=null;this._geometryType=c?.geometryType;this._features=b}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(a){const b=
new Set(a);this._features=this._features.filter(c=>!(null!=c.objectId&&b.has(c.objectId)))}append(a){for(const b of a)this._features.push(b)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let a="";for(const b in this._current.attributes)a+=this._current.attributes[b];return a}getIndex(){return this._featureIndex}setIndex(a){this._featureIndex=a}getObjectId(){return this._current?.objectId}getDisplayId(){return this._current.displayId}setDisplayId(a){this._current.displayId=
a}getGroupId(){return this._current.groupId}setGroupId(a){this._current.groupId=a}copy(){const a=new g(this.instance,this._features,this.fullSchema());this.copyInto(a);return a}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return f.convertToFeature(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),
y:this.getY()}:null}readLegacyGeometry(){const a=this.readUnquantizedGeometry();return f.convertToGeometry(a,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const a=this.readCentroid();return null==a?null:{x:a.coords[0]*this._sx+this._tx,y:a.coords[1]*this._sy+this._ty}}readGeometryArea(){return e.hasGeometry(this._current)?f.getQuantizedArea(this._current.geometry,2):0}readUnquantizedGeometry(){var a=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!a)return a;a=a.clone();
p(a);return a}readHydratedGeometry(){var a=this._current.geometry;if(null==a)return null;a=a.clone();null!=this._transform&&f.unquantizeOptimizedGeometry(a,a,this.hasZ,this.hasM,this._transform);return a}getXHydrated(){if(!e.hasGeometry(this._current))return 0;const a=this._current.geometry.coords[0],b=this.getQuantizationTransform();return null==b?a:a*b.scale[0]+b.translate[0]}getYHydrated(){if(!e.hasGeometry(this._current))return 0;const a=this._current.geometry.coords[1],b=this.getQuantizationTransform();
return null==b?a:b.translate[1]-a*b.scale[1]}getX(){return e.hasGeometry(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return e.hasGeometry(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!e.hasGeometry(this._current)){if(null!=this._current.centroid){const [c,d]=this._current.centroid.coords;return this.createQuantizedExtrudedGeometry(c,d)}return null}const a=this._current.geometry.clone();if(a.isPoint)return a.coords[0]=a.coords[0]*
this._sx+this._tx,a.coords[1]=a.coords[1]*this._sy+this._ty,a;let b=0;for(const c of a.lengths)a.coords[2*b]=a.coords[2*b]*this._sx+this._tx,a.coords[2*b+1]=a.coords[2*b+1]*this._sy+this._ty,b+=c;return a}readCentroid(){return e.hasGeometry(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(a,b){var c=this._fieldsIndex.get(a);if(c){c=this._current.attributes[c.name];if(null==c)return c;"esriFieldTypeTimestampOffset"===this.fields.get(a)?.type&&(c=this.parseTimestampOffset(c));
return b&&this.fields.isDateField(a)?new Date(c):c}}copyInto(a){super.copyInto(a);a._featureIndex=this._featureIndex;a._transform=this._transform;a._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}}l.FeatureSetReaderJSON=g;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});