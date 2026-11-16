/**
 * Fabric / material options for the product GLB.
 *
 * The current model (`product.glb`) is a FurniMesh export with a single mesh
 * (`geometry_0`) and one PBR material that uses a baked base-color texture
 * (white fabric + darker wood in one atlas). Tint via `color` multiplies with
 * that texture so fabric recolors while dark frame regions stay relatively dark.
 *
 * Structured for later extension with texture images / product variants.
 */

export const PRODUCT_FABRIC_MESH_NAME = "geometry_0";

export type ProductMaterialId = "beige" | "gray" | "brown" | "black";

export interface ProductMaterialOption {
  id: ProductMaterialId;
  label: string;
  /** Hex color applied as material color (multiplies with existing texture). */
  color: string;
  /** Reserved for future fabric texture swaps. */
  textureUrl?: string;
}

export const PRODUCT_MATERIALS: readonly ProductMaterialOption[] = [
  { id: "beige", label: "Beige", color: "#D8C7AE" },
  { id: "gray", label: "Gray", color: "#8A8A8A" },
  { id: "brown", label: "Brown", color: "#6B4F3A" },
  { id: "black", label: "Black", color: "#222222" },
] as const;

export const DEFAULT_PRODUCT_MATERIAL: ProductMaterialId = "beige";

export function getProductMaterial(
  id: ProductMaterialId,
): ProductMaterialOption {
  return (
    PRODUCT_MATERIALS.find((material) => material.id === id) ??
    PRODUCT_MATERIALS[0]
  );
}
