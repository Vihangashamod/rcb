import { test } from "node:test";
import assert from "node:assert/strict";
import { estimatePavers } from "../src/lib/calculator.ts";
test("20 m² cobble paving with 5 percent cutting allowance", () => {
  const result = estimatePavers(5, 4, "m", "cobble2", 5)!;
  assert.equal(result.area, 20);
  assert.equal(result.base, 1000);
  assert.equal(result.total, 1050);
});
test("feet are converted to square metres and rounded up", () => {
  const result = estimatePavers(10, 10, "ft", "un2", 10)!;
  assert.ok(Math.abs(result.area - 9.290304) < 0.000001);
  assert.equal(result.total, 423);
});
test("rejects empty, negative, infinite, oversized and unknown inputs", () => {
  for (const value of [0, -1, NaN, Infinity, 10001])
    assert.equal(estimatePavers(value, 4, "m", "un2", 5), null);
  assert.equal(estimatePavers(5, 4, "m", "unknown", 5), null);
  assert.equal(estimatePavers(5, 4, "m", "un2", 31), null);
});
