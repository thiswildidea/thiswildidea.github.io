// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.LayerBlendMode=void 0;(function(a){a[a.Normal=0]="Normal";a[a.Average=1]="Average";a[a.Lighten=2]="Lighten";a[a.Lighter=3]="Lighter";a[a.Plus=4]="Plus";a[a.Screen=5]="Screen";a[a.ColorDodge=6]="ColorDodge";a[a.Darken=7]="Darken";a[a.Multiply=8]="Multiply";a[a.ColorBurn=9]="ColorBurn";a[a.Overlay=10]="Overlay";a[a.SoftLight=11]="SoftLight";a[a.HardLight=12]="HardLight";a[a.VividLight=13]="VividLight";a[a.Hue=14]="Hue";a[a.Saturation=15]="Saturation";a[a.Luminosity=
16]="Luminosity";a[a.Color=17]="Color";a[a.DestinationOver=18]="DestinationOver";a[a.DestinationAtop=19]="DestinationAtop";a[a.DestinationIn=20]="DestinationIn";a[a.DestinationOut=21]="DestinationOut";a[a.SourceAtop=22]="SourceAtop";a[a.SourceIn=23]="SourceIn";a[a.SourceOut=24]="SourceOut";a[a.Xor=25]="Xor";a[a.Difference=26]="Difference";a[a.Exclusion=27]="Exclusion";a[a.Minus=28]="Minus";a[a.Invert=29]="Invert";a[a.Reflect=30]="Reflect";a[a.COUNT=31]="COUNT"})(b.LayerBlendMode||(b.LayerBlendMode=
{}));b.blendModeFromString={normal:b.LayerBlendMode.Normal,average:b.LayerBlendMode.Average,lighten:b.LayerBlendMode.Lighten,lighter:b.LayerBlendMode.Lighter,screen:b.LayerBlendMode.Screen,plus:b.LayerBlendMode.Plus,"color-dodge":b.LayerBlendMode.ColorDodge,darken:b.LayerBlendMode.Darken,multiply:b.LayerBlendMode.Multiply,"color-burn":b.LayerBlendMode.ColorBurn,overlay:b.LayerBlendMode.Overlay,"soft-light":b.LayerBlendMode.SoftLight,"hard-light":b.LayerBlendMode.HardLight,"vivid-light":b.LayerBlendMode.VividLight,
hue:b.LayerBlendMode.Hue,saturation:b.LayerBlendMode.Saturation,luminosity:b.LayerBlendMode.Luminosity,color:b.LayerBlendMode.Color,difference:b.LayerBlendMode.Difference,exclusion:b.LayerBlendMode.Exclusion,minus:b.LayerBlendMode.Minus,invert:b.LayerBlendMode.Invert,reflect:b.LayerBlendMode.Reflect,"destination-over":b.LayerBlendMode.DestinationOver,"destination-atop":b.LayerBlendMode.DestinationAtop,"destination-in":b.LayerBlendMode.DestinationIn,"destination-out":b.LayerBlendMode.DestinationOut,
"source-atop":b.LayerBlendMode.SourceAtop,"source-in":b.LayerBlendMode.SourceIn,"source-out":b.LayerBlendMode.SourceOut,xor:b.LayerBlendMode.Xor};b.isCompositeBlendMode=function(a){return a===b.LayerBlendMode.DestinationOver||a===b.LayerBlendMode.DestinationAtop||a===b.LayerBlendMode.DestinationIn||a===b.LayerBlendMode.DestinationOut||a===b.LayerBlendMode.SourceAtop||a===b.LayerBlendMode.SourceIn||a===b.LayerBlendMode.SourceOut||a===b.LayerBlendMode.Xor};Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});