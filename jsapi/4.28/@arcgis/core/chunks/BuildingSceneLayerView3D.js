/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import r from"../core/Accessor.js";import{V as s}from"./typedArrayUtil.js";import i from"../core/Collection.js";import{h as o}from"./handleUtils.js";import{L as p}from"./Logger.js";import{a as l}from"./maybe.js";import{isAbortError as a,allSettledValues as n,createResolver as m}from"../core/promiseUtils.js";import{initial as u,watch as j,syncAndInitial as d}from"../core/reactiveUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import"../layers/buildingSublayers/BuildingGroupSublayer.js";import h from"../core/Error.js";import{WhereClause as g}from"../core/sql/WhereClause.js";import"../layers/buildingSublayers/BuildingComponentSublayer.js";import f from"../layers/support/FeatureFilter.js";import{fixFields as b,unpackFieldNames as w,populateMissingFields as S}from"../layers/support/fieldUtils.js";import v from"../rest/support/Query.js";import F from"../core/Evented.js";import{IdentifiableMixin as U}from"../core/Identifiable.js";import{EsriPromiseMixin as x}from"../core/Promise.js";import{I as V,c as C,F as I}from"./I3SMeshView3D.js";import{d as E}from"./vec4f64.js";import{a as L}from"./edgeUtils.js";import{C as M}from"./symbolColorUtils.js";import{I as P,a as _,b as R,c as D}from"./I3SQueryFeatureStore.js";import{f as T,g as O,c as A}from"./I3SUtil.js";import{D as B}from"./DefinitionExpressionSceneLayerView.js";import"./tracking.js";import{h as G,g as k,a as q}from"./popupUtils.js";import{T as Q}from"./Scheduler.js";import{L as W}from"./LayerView3D.js";import{u as N}from"../views/SceneView.js";import H from"../views/layers/LayerView.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/lang.js";import"./utils.js";import"../core/Handles.js";import"./metadata.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"./time.js";import"../config.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"./shared.js";import"./SimpleObservable.js";import"../core/sql.js";import"../intl.js";import"./messages.js";import"./arcadeOnDemand.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"./Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./loadAll.js";import"../layers/buildingSublayers/BuildingSublayer.js";import"./MultiOriginJSONSupport.js";import"./commonProperties2.js";import"../TimeExtent.js";import"./timeUtils.js";import"./layerContainerType.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"./MemCache.js";import"./Version.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"./vec4.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"../layers/FeatureLayer.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"../layers/Layer.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./editsZScale.js";import"./queryZScale.js";import"./zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"./fieldType.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"./uuid.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"./featureLayerUtils.js";import"./featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./serviceCapabilitiesUtils.js";import"./jsonUtils2.js";import"../layers/support/Subtype.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./MD5.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./portalItemUtils.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"./interfaces.js";import"./capabilities.js";import"./I3SIndexInfo.js";import"./I3SLayerDefinitions.js";import"./mat3.js";import"./mat3f64.js";import"./mat4f64.js";import"./quat.js";import"./quatf64.js";import"./spatialReferenceEllipsoidUtils.js";import"./computeTranslationToOriginAndRotation.js";import"./projectVectorToVector.js";import"./I3SBinaryReader.js";import"./VertexAttribute.js";import"./orientedBoundingBox.js";import"./plane.js";import"./vector.js";import"./ByteSizeUnit.js";import"./vec2f64.js";import"./mathUtils2.js";import"./ViewingMode.js";import"./Attribute.js";import"./TimeOnly.js";import"./UpdatingHandles.js";import"./I3SOverrides.js";import"./projectBoundingRect.js";import"./dehydratedPoint.js";import"./sphere.js";import"./resourceUtils2.js";import"./basicInterfaces.js";import"./Texture2.js";import"./InstancedDoublePrecision.glsl.js";import"./ShaderOutput.js";import"./ForwardLinearDepth.glsl.js";import"./interfaces3.js";import"./View.glsl.js";import"./ShaderBuilder.js";import"./Util.js";import"./Float3PassUniform.js";import"./FloatPassUniform.js";import"./Matrix4PassUniform.js";import"./Matrix3PassUniform.js";import"./Float2PassUniform.js";import"./ShaderTechniqueConfiguration.js";import"./doublePrecisionUtils.js";import"./requestImageUtils.js";import"./enums3.js";import"./Texture.js";import"./contextUtils.js";import"./ContentObject.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultBufferWriter.js";import"./BufferView.js";import"./vec2.js";import"./vec32.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Indices.js";import"./mat3f32.js";import"./vec2f32.js";import"./NestedMap.js";import"./Geometry.js";import"./triangle.js";import"./lineSegment.js";import"./InterleavedLayout.js";import"./types.js";import"./VertexNormal.glsl.js";import"./Normals.glsl.js";import"./EvaluateAmbientLighting.glsl.js";import"./PiUtils.glsl.js";import"./RgbaFloat16Encoding.glsl.js";import"./Float4PassUniform.js";import"./IntegerPassUniform.js";import"./Texture2DPassUniform.js";import"./Texture2DDrawUniform.js";import"./GLTextureMaterial.js";import"./Material.js";import"./OrderIndependentTransparency.js";import"./TransparencyPassType.js";import"./renderState2.js";import"./RenderSlot.js";import"./verticalOffsetUtils.js";import"./AlphaCutoff.js";import"./Program2.js";import"./DefaultMaterial.glsl.js";import"./MixExternalColor.glsl.js";import"./Slice.glsl.js";import"./Transform.glsl.js";import"./ObjectAndLayerIdColor.glsl.js";import"./OutputDepth.glsl.js";import"./ReadLinearDepth.glsl.js";import"./OutputHighlight.glsl.js";import"./VisualVariables.glsl.js";import"./FloatsPassUniform.js";import"./DiscardOrAdjustAlphaBlend.glsl.js";import"./ColorConversion.glsl.js";import"./VertexColor.glsl.js";import"./VerticalOffset.glsl.js";import"./EvaluateSceneLighting.glsl.js";import"./SceneLighting.js";import"./FramebufferObject.js";import"./BufferObject.js";import"./RenderPlugin.js";import"./SSAOBlur.glsl.js";import"./ScreenSpacePass.glsl.js";import"./SSAO.glsl.js";import"./CameraSpace.glsl.js";import"./RenderFeature.js";import"./RenderState.js";import"./BooleanPassUniform.js";import"./RealisticTree.glsl.js";import"./I3SNode.js";import"./frustum.js";import"./ElevationContext.js";import"./dehydratedFeatureUtils.js";import"./graphicUtils.js";import"./hydratedFeatures.js";import"./ElevationProvider.js";import"./ElevationQuery2.js";import"./LineCallout.glsl.js";import"./HUDVisibility.glsl.js";import"./MultipassGeometryTest.glsl.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./earcut.js";import"./DoubleArray.js";import"./SnappingCandidate.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./RenderGeometry.js";import"./OverlayCompositing.glsl.js";import"./WaterSurface.glsl.js";import"./NormalUtils.glsl.js";import"./axisAngleDegrees.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./TextureOnly.glsl.js";import"./Camera.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./TriangleMaterial.js";import"./Octree.js";import"./MarkerSizing.glsl.js";import"./floatRGBA.js";import"./RibbonLine.glsl.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./glUtil.js";import"./DefaultLayouts.js";import"./projectPointToVector.js";import"./utils8.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./callExpressionWithFeature.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./HUDMaterial.js";import"./HUDMaterial.glsl.js";import"./line.js";import"./line2.js";import"./LineMarkerMaterial.js";import"./LineMarker.glsl.js";import"./lineStippleUtils.js";import"./projectVectorToDehydratedPoint.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./georeference.js";import"../geometry/support/MeshGeoreferencedRelativeVertexSpace.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces6.js";import"./NativeLine.glsl.js";import"./webStyleSymbolUtils.js";import"./Intersector4.js";import"./Path.glsl.js";import"./ColorMaterial.js";import"./ColorMaterial.glsl.js";import"./Pattern.glsl.js";import"./fontUtils.js";import"./layerViewUtils.js";import"./ReactiveSet.js";import"./meshFeatureSet.js";import"../geometry/Mesh.js";import"./meshErrors.js";import"./External.js";import"./infoFor3D.js";import"./FeatureLayerView3D.js";import"./FeatureLayerViewBase3D.js";import"./FeatureLikeLayerView3D.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils6.js";import"./utils7.js";import"../rest/support/ProjectParameters.js";import"./dehydratedFeatureComparison.js";import"./TerrainConst.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"./queryForSymbologySnapping.js";import"./projectPointToVectorWithEngine.js";import"./elevationInfoUtils.js";import"./hash.js";import"./Graphics3DScaleVisibility.js";import"./rendererConversion.js";import"./basemapUtils.js";import"../Basemap.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./PooledRBush.js";import"./quickselect.js";import"./PropertiesPool.js";import"./floorFilterUtils.js";import"./QueryEngine.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./timeSupport.js";import"./projectionSupport.js";import"./json.js";import"./QueryEngineCapabilities.js";import"./utils11.js";import"./utils2.js";import"./generateRendererUtils.js";import"./scaleUtils.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./Heatmap.glsl.js";import"./HeatmapDensity.glsl.js";import"./heatmapTextureUtils.js";import"./projectExtentUtils.js";import"./query.js";import"./urlUtils2.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./WorkerHandle.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./RefreshableLayerView.js";import"./LayerConstants.js";import"../layers/support/SceneModification.js";import"./persistable.js";import"./multiOriginJSONSupportUtils.js";import"./resourceExtension.js";import"./SceneLayerWorker.js";import"./Intersector3.js";import"../core/signal.js";import"./debugFlags.js";import"./heightModelInfoUtils.js";import"../Camera.js";import"./Cyclical.js";import"../Viewpoint.js";import"./domUtils.js";import"./GraphicsCollection.js";import"./coordinateSystem.js";import"../views/View.js";import"../Map.js";import"../Ground.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../views/Theme.js";import"./InputManager.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces5.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./projectionUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../views/GroundView.js";import"./cameraUtils.js";import"./projectVectorToPoint.js";import"./earthUtils.js";import"./spatialReferenceSupport.js";import"../layers/support/ElevationSampler.js";import"../views/PopupView.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./projectPointToWGS84ComparableLonLat.js";import"./projectVectorToWGS84ComparableLonLat.js";import"./colorUtils2.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./ray.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"./Frustum2.js";import"./viewpointUtils.js";import"./ZoomMomentumEstimator.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./RenderCoordsHelper.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./RenderableTile.js";import"./enums2.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey2.js";import"./ElevationSamplerData.js";import"./rasterUtils.js";import"./TileInfoView.js";import"./TileStrategy.js";import"./QueueProcessor.js";import"../views/2d/ViewState.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"./StyleDefinition.js";import"./enums.js";import"./edgeProcessing.js";import"./resources2.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./testSVGPremultipliedAlpha.js";import"./isWebGL2Context.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"./themeUtils.js";import"../widgets/Attribution.js";import"../widgets/Widget.js";import"./dom.js";import"./index.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"../widgets/Attribution/AttributionViewModel.js";import"./globalCss.js";import"./accessibleHandler.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/support/GoTo.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"./resources.js";import"../widgets/Zoom/ZoomViewModel.js";const z=(t,r)=>{let s=class extends(x(U(F.EventedMixin(t)))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){return!!this.sublayer?.visible}set visible(e){this._overrideIfSome("visible",e)}get fullOpacity(){const e=e=>null!=e?e:1;return e(this.sublayer?.opacity)*e(this.parent?.fullOpacity)}canResume(){return!this.parent?.suspended&&this.view?.ready&&this.visible||!1}isUpdating(){return!1}};return e([y()],s.prototype,"sublayer",void 0),e([y()],s.prototype,"parent",void 0),e([y({readOnly:!0})],s.prototype,"suspended",null),e([y({type:Boolean,readOnly:!0})],s.prototype,"updating",null),e([y()],s.prototype,"view",void 0),e([y()],s.prototype,"visible",null),e([y()],s.prototype,"fullOpacity",null),s=e([c("esri.views.3d.layers.BuildingSublayerView3D")],s),s};var Z;function J(e){switch(e.filterMode.type){case"solid":return{mode:Z.Solid};case"wire-frame":return{mode:Z.WireFrame,edgeMaterial:L(e.filterMode.edges,{})};case"x-ray":return{mode:Z.XRay}}}function X(e,t){if(null==t)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case Z.Solid:return;case Z.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case Z.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=M.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=(r=e.edgeMaterial,null==r?null:(K.lastMaterial!==r&&(K.cachedMaterial=function(e){const t=E(e.color);return t[3]*=.075,{...e,color:t}}(r),K.lastMaterial=r),K.cachedMaterial)))}var r}!function(e){e[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay"}(Z||(Z={}));const K={cachedMaterial:null,lastMaterial:null};class $ extends r{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}highlight(e){throw new Error("Not implemented")}}e([y()],$.prototype,"sublayer",void 0),e([y()],$.prototype,"availableFields",null),e([y()],$.prototype,"filter",null);let Y=class extends(B(V(z($)))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){return this.sublayer.popupEnabled&&G(this.sublayer,this.layerView?.view.popup?.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields]),(()=>this._updateRequiredFields())),this._updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),u);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>null!=this._filter?this._filter.sortedObjectIds:null),e),this._updatingHandles.add((()=>null!=this._filter?this._filter.parsedWhereClause:null),e),this._updatingHandles.add((()=>[null!=this._filter?this._filter.parsedGeometry:null,null!=this.filter?this.filter.spatialRelationship:null]),(()=>this._geometryFilterChange())),this._updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),u),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((([e,t])=>{let r;try{r=g.create(e,this.sublayer.fieldsIndex)}catch(e){return p.getLogger(this).error("Failed to parse filterExpression: "+e),null}if(!r.isStandardized)return p.getLogger(this).error("filterExpression is using non standard function"),null;const s=[],i=r.fieldNames;return T(i,this.sublayer.fields,{missingFields:s}),s.length>0?(p.getLogger(this).error(`filterExpression references unknown fields: ${s.join(", ")}`),null):[r,t]})).filter((e=>null!=e)):[]}get filter(){return null!=this._filter?this._filter.viewFilter:null}set filter(e){null!=e&&P.checkSupport(e)?null!=this._filter?this._filter.viewFilter=e:this._filter=new P({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):this._filter=null}isUpdating(){return super.isUpdating()||null!=this._filter&&this._filter.updating}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((t,r)=>{for(const[s,i]of e)try{if(s.testFeature(t))return X(r,i)}catch(e){this.logError(e)}return X(r,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return b(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,[t])=>e.concat(t.fieldNames)),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const s=[...e.outFields||[],...e.layer.outFields||[]];r=[...w(t,s),...r]}return b(t,r)}_createLayerGraphic(e){const r=new t(null,null,e);return r.layer=this.sublayer.layer,r.sourceLayer=this.sublayer,r}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(!t?.clientGraphics||0===t.clientGraphics.length)return[];const s=[],i=[],o=null!=this.sublayer.associatedLayer?await this.sublayer.associatedLayer.load():this.sublayer,l=w(this.sublayer.fieldsIndex,await k(o,q(this.sublayer,t))),a=new Set;for(const e of t.clientGraphics)S(l,e,a)?i.push(e):s.push(e);return 0===i.length?s:(null!=this.sublayer.associatedLayer&&await this.sublayer.associatedLayer.load().catch((()=>p.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(i,Array.from(a)).catch((()=>i)).then((e=>s.concat(e))))}async _updateRequiredFields(){const e=b(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?q(t,e)?void 0:new h("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new h("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),null!=this._filter&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new v(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then((e=>{if(!e?.features)return e;const t=this.sublayer,r=t.layer;for(const s of e.features)s.layer=r,s.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)}_ensureQueryEngine(){return null==this._queryEngine&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=C(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new _({layerView:this,priority:Q.FEATURE_QUERY_ENGINE,spatialIndex:new R({featureAdapter:new D({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,s)=>e({id:t,index:r,meta:s})),t,I.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:O(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():v.from(e))}};e([y()],Y.prototype,"i3slayer",null),e([y()],Y.prototype,"layerView",void 0),e([y()],Y.prototype,"lodFactor",null),e([y({readOnly:!0})],Y.prototype,"parsedFilterExpressions",null),e([y({type:f})],Y.prototype,"filter",null),e([y()],Y.prototype,"_filter",void 0),e([y({type:[String],readOnly:!0})],Y.prototype,"filterExpressionFields",null),e([y({type:[String],readOnly:!0})],Y.prototype,"requiredFields",void 0),e([y({type:[String],readOnly:!0})],Y.prototype,"availableFields",null),Y=e([c("esri.views.3d.layers.BuildingComponentSublayerView3D")],Y);const ee=Y;class te extends H{constructor(e){super(e),this.layer=null,this.sublayerViews=null}highlight(e){throw new Error("Not implemented")}}e([y()],te.prototype,"layer",void 0),e([y()],te.prototype,"sublayerViews",void 0);const re=z(r);let se=class extends(W(te)){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new i,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null,r=null!=t?t.filterBlocks?.find((e=>"solid"===e.filterMode.type)):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null;return t?.filterBlocks?t.filterBlocks.toArray().map((e=>[e.filterExpression??"",J(e)])):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce(((e,t)=>e+t.updatingProgress),0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){A(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController=l(this._abortController)}_initializeSubLayerViews(e,t){const r=this,s=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const r=new re({sublayer:e,view:s,parent:t});this._initializeSubLayerViews(e.sublayers,r)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const i=new ee({sublayer:e,layerView:r,view:s,parent:t});this.sublayerViews.push(i);const o=this._pendingWhenSublayerViews.get(e);if(o){for(const e of o)e.resolve(i);this._pendingWhenSublayerViews.delete(e)}this.addHandles([j((()=>i.updating),(()=>this.notifyChange("updating")),d),j((()=>i.updatingProgress),(()=>this.notifyChange("updatingProgressValue")),d)])})).catch((t=>{a(t)||p.getLogger(this).error(`Error while creating view for sublayer ${e.id}\nLayer: ${this.layer.url}\n`,t)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeatures(e,t){if(!t?.clientGraphics||0===t.clientGraphics.length)return[];const r=s(t.clientGraphics,(e=>e.sourceLayer)),i=[];for(const[s,o]of r){const r=this._findComponent(s);null!=r&&i.push(r.fetchPopupFeatures(e,{...t,clientGraphics:o}))}return(await n(i)).flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return null==t?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(null!=t)return t;const r=this._pendingWhenSublayerViews.get(e),s=m();return r?r.push(s):this._pendingWhenSublayerViews.set(e,[s]),s.promise}_findComponent(e){return this.sublayerViews.find((t=>e===t.sublayer))}highlight(e){e instanceof t?e=[e]:e instanceof i&&(e=e.toArray());const r=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof t){const t=e,s=new Map;for(const e of t){let t=s.get(e.sourceLayer);null==t&&(t=[],s.set(e.sourceLayer,t)),t.push(e)}this.sublayerViews.forEach((e=>{const t=s.get(e.sublayer);t&&r.push(e.highlight(t))}))}return o(r)}get usedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.usedMemory),0)}get unloadedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.unloadedMemory),0)}};e([y()],se.prototype,"sublayerViews",void 0),e([y({readOnly:!0})],se.prototype,"filterExpression",null),e([y({readOnly:!0})],se.prototype,"filterExpressions",null),e([y(N)],se.prototype,"updatingProgress",void 0),e([y({readOnly:!0,dependsOn:[]})],se.prototype,"updatingProgressValue",null),se=e([c("esri.views.3d.layers.BuildingSceneLayerView3D")],se);const ie=se;export{ie as default};
