"use client";

import {
  PRODUCT_MATERIALS,
  type ProductMaterialId,
} from "@/config/product-materials";
import { cn } from "@/lib/utils";

interface ProductMaterialSelectorProps {
  value: ProductMaterialId;
  onChange: (id: ProductMaterialId) => void;
}

export function ProductMaterialSelector({
  value,
  onChange,
}: ProductMaterialSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-foreground">Fabric</p>
      <div
        className="flex flex-wrap gap-2"
        role="listbox"
        aria-label="Fabric material"
      >
        {PRODUCT_MATERIALS.map((material) => {
          const selected = material.id === value;

          return (
            <button
              key={material.id}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => onChange(material.id)}
              className={cn(
                "flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                selected
                  ? "border-foreground bg-background text-foreground"
                  : "border-transparent bg-background/70 text-foreground/80 hover:border-foreground/30",
              )}
            >
              <span
                className="size-4 shrink-0 rounded-sm border border-black/15"
                style={{ backgroundColor: material.color }}
                aria-hidden
              />
              {material.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
