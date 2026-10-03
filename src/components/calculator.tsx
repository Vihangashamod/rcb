"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Calculator as CalculatorIcon,
  Check,
  Copy,
  Ruler,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { estimatePavers, pavers } from "@/lib/calculator";
import { site } from "@/lib/site";
export function Calculator() {
  const [length, setLength] = useState("5"),
    [width, setWidth] = useState("4"),
    [unit, setUnit] = useState<"m" | "ft">("m"),
    [paver, setPaver] = useState("un2"),
    [waste, setWaste] = useState(5),
    [copied, setCopied] = useState(false),
    [copyError, setCopyError] = useState("");
  const estimate = estimatePavers(
    Number(length),
    Number(width),
    unit,
    paver,
    waste,
  );
  const selected = pavers.find((p) => p.id === paver)!;
  const summary = estimate
    ? `My paving estimate: ${length} × ${width} ${unit} (${estimate.area.toFixed(2)} m²), ${selected.name}, ${estimate.total.toLocaleString("en-US")} bricks including ${waste}% cutting allowance. Please confirm dimensions, laying pattern and quantity.`
    : "";
  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setCopyError("");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(
        "Copy unavailable. Use “Discuss this estimate” to open it in email.",
      );
    }
  }
  return (
    <section id="calculator" className="calculator-section section-pad">
      <div className="section-heading" data-reveal>
        <h2>
          Big plans.
          <br />
          The right number of bricks.
        </h2>
        <p>
          A little planning goes a long way. Measure your space and get an
          instant estimate for your paving project.
        </p>
      </div>
      <div className="calculator-shell" data-reveal>
        <div className="calculator-form">
          <div className="calculator-top">
            <span>
              <Ruler size={20} />
              Your project dimensions
            </span>
            <Tabs value={unit} onValueChange={(v) => setUnit(v as "m" | "ft")}>
              <TabsList aria-label="Measurement unit">
                <TabsTrigger value="m">Metres</TabsTrigger>
                <TabsTrigger value="ft">Feet</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <FieldGroup>
            <div className="dimension-fields">
              <Field
                data-invalid={
                  !!length && (Number(length) <= 0 || Number(length) > 10000)
                }
              >
                <FieldLabel htmlFor="length">Length ({unit})</FieldLabel>
                <Input
                  id="length"
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  max="10000"
                  step="any"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  aria-invalid={
                    !!length && (Number(length) <= 0 || Number(length) > 10000)
                  }
                />
              </Field>
              <span aria-hidden="true">×</span>
              <Field
                data-invalid={
                  !!width && (Number(width) <= 0 || Number(width) > 10000)
                }
              >
                <FieldLabel htmlFor="width">Width ({unit})</FieldLabel>
                <Input
                  id="width"
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  max="10000"
                  step="any"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  aria-invalid={
                    !!width && (Number(width) <= 0 || Number(width) > 10000)
                  }
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="paver">Choose your paving block</FieldLabel>
              <Select value={paver} onValueChange={setPaver}>
                <SelectTrigger id="paver">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {pavers.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name} — {p.length} × {p.width} × {p.depth} mm
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldDescription>
                {selected.depth} mm thickness · Approx.{" "}
                {(1000000 / (selected.length * selected.width)).toFixed(1)}{" "}
                blocks / m²
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="allowance" className="allowance-label">
                Cutting & spare allowance <strong>{waste}%</strong>
              </FieldLabel>
              <Slider
                id="allowance"
                aria-label="Cutting and spare allowance"
                min={0}
                max={15}
                step={1}
                value={[waste]}
                onValueChange={(v) => setWaste(v[0])}
              />
              <FieldDescription>
                5–10% is a useful starting point. Complex patterns may need
                more.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </div>
        <div className="calculator-result">
          <CalculatorIcon size={27} />
          <span className="result-label">Your estimated quantity</span>
          <div aria-live="polite" aria-atomic="true">
            <strong className="result-number">
              {estimate ? estimate.total.toLocaleString("en-US") : "—"}
            </strong>
            <span className="result-unit">paving blocks</span>
            <div className="result-breakdown">
              <span>
                Surface area
                <strong>{estimate ? estimate.area.toFixed(2) : "—"} m²</strong>
              </span>
              <span>
                Includes cutting allowance
                <strong>{estimate ? `+${estimate.extra}` : "—"} blocks</strong>
              </span>
            </div>
          </div>
          {estimate ? (
            <>
              <Button asChild variant="secondary" size="lg">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Paving project estimate")}&body=${encodeURIComponent(summary)}`}
                >
                  Discuss this estimate <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
              <Button variant="ghost" onClick={copy}>
                {copied ? (
                  <Check data-icon="inline-start" />
                ) : (
                  <Copy data-icon="inline-start" />
                )}
                {copied ? "Estimate copied" : "Copy estimate"}
              </Button>
              {copyError && <p role="status">{copyError}</p>}
            </>
          ) : (
            <p role="status">
              Enter a length and width greater than zero and up to 10,000.
            </p>
          )}
        </div>
      </div>
      <p className="calculator-disclaimer">
        Planning estimate only. Based on nominal block dimensions; joints, shape
        and laying pattern can change coverage. Confirm final quantities and
        product suitability with our team.
      </p>
    </section>
  );
}
