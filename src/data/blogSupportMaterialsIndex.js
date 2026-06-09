import {
  supportAssetOptions as baseAssetOptions,
  supportAudienceHighlights,
  supportDeciderProfiles as baseDeciderProfiles,
  supportMaterials as baseSupportMaterials,
  supportMaterialsNaming,
  supportMaterialTypeOptions as baseMaterialTypeOptions,
  supportProblemOptions as baseProblemOptions,
  supportSectorOptions as baseSectorOptions,
} from "./blogSupportMaterials";
import { seriesGeneratedMaterials } from "./blogSeriesGeneratedMaterials";

export const supportMaterials = [...seriesGeneratedMaterials, ...baseSupportMaterials];

function uniqueValues(list) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export const supportProblemOptions = uniqueValues([
  ...baseProblemOptions,
  ...supportMaterials.map((item) => item.problemType),
]);

export const supportDeciderProfiles = uniqueValues([
  ...baseDeciderProfiles,
  ...supportMaterials.flatMap((item) => item.deciderProfiles),
]);

export const supportSectorOptions = uniqueValues([
  ...baseSectorOptions,
  ...supportMaterials.flatMap((item) => item.sectors),
]);

export const supportAssetOptions = uniqueValues([
  ...baseAssetOptions,
  ...supportMaterials.flatMap((item) => item.assetTypes),
]);

export const supportMaterialTypeOptions = uniqueValues([
  ...baseMaterialTypeOptions,
  ...supportMaterials.map((item) => item.materialType),
]);

export { supportAudienceHighlights, supportMaterialsNaming };
