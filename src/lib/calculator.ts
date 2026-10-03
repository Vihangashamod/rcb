export const pavers = [
  { id: "un2", name: "UN II", length: 220, width: 110, depth: 60 },
  { id: "un3", name: "UN III", length: 220, width: 110, depth: 80 },
  { id: "cobble2", name: "Cobble II", length: 200, width: 100, depth: 60 },
  { id: "cobble3", name: "Cobble III", length: 220, width: 100, depth: 80 },
] as const;

export function estimatePavers(
  length: number,
  width: number,
  unit: "m" | "ft",
  paverId: string,
  waste: number,
) {
  const paver = pavers.find((p) => p.id === paverId);
  if (
    !paver ||
    ![length, width, waste].every(Number.isFinite) ||
    length <= 0 ||
    width <= 0 ||
    length > 10000 ||
    width > 10000 ||
    waste < 0 ||
    waste > 30
  )
    return null;
  const area = length * width * (unit === "ft" ? 0.09290304 : 1);
  const perSquareMetre = 1_000_000 / (paver.length * paver.width);
  const base = Math.ceil(area * perSquareMetre);
  const total = Math.ceil(area * perSquareMetre * (1 + waste / 100));
  return { area, base, total, extra: total - base, perSquareMetre, paver };
}
