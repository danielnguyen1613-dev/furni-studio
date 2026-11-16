interface Product3DViewerProps {
  modelUrl?: string;
}

export function Product3DViewer({
  modelUrl,
}: Product3DViewerProps) {
  // Placeholder only — modelUrl reserved for Three.js integration
  void modelUrl;

  return <div className="aspect-[4/3] w-full bg-cyan-400" />;
}
