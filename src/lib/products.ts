export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Construction Machinery" | "Block Making Machinery";
  categorySlug: "construction-machinery" | "block-making-machinery";
  brand: string;
  brandSlug: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export interface Category {
  name: string;
  slug: "construction-machinery" | "block-making-machinery";
  description: string;
  brands: string[];
}

export const categories: Category[] = [
  {
    name: "Construction Machinery",
    slug: "construction-machinery",
    description:
      "Heavy earthmoving, excavation, road compaction and site engineering machinery trusted across Sri Lankan construction projects.",
    brands: ["SDLG Machinery", "Yineng Wheel Loaders"],
  },
  {
    name: "Block Making Machinery",
    slug: "block-making-machinery",
    description:
      "High-output automatic, semi-automatic, and hydraulic brick and block making plants for solid, hollow, and interlock paving production.",
    brands: ["Noah", "Shengya", "TNY"],
  },
];

export const products: Product[] = [
  // ----------------------------------------------------
  // Construction Machinery -> SDLG Machinery
  // ----------------------------------------------------
  {
    id: "sdlg-wheel-loaders",
    name: "SDLG Wheel Loaders",
    slug: "sdlg-wheel-loaders",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "SDLG Machinery",
    brandSlug: "sdlg",
    tagline: "High-torque, fuel-efficient articulated wheel loaders for heavy aggregate and quarry operations.",
    description:
      "SDLG wheel loaders combine robust engineering with high reliability. Built in partnership with global construction leaders, these loaders feature reinforced chassis, high-breakout force, spacious ergonomic cabs, and optimal fuel efficiency for demanding Sri Lankan work conditions.",
    image: "/wheel-loader.jpg",
    specs: [
      { label: "Rated Load Capacity", value: "3,000 kg – 5,000 kg" },
      { label: "Standard Bucket Capacity", value: "1.8 m³ – 3.0 m³" },
      { label: "Engine Power", value: "92 kW – 162 kW Turbocharged" },
      { label: "Operating Weight", value: "10,500 kg – 17,200 kg" },
      { label: "Maximum Dumping Height", value: "2,950 mm – 3,180 mm" },
      { label: "Transmission", value: "Powershift with hydraulic torque converter" },
    ],
    features: [
      "Heavy-duty planetary transmission with smooth shifting under full load",
      "Ergonomic ROPS/FOPS certified cab with panoramic visibility and climate control",
      "Reinforced articulated frame designed for high-stress quarry and batching duties",
      "Accessible maintenance points for quick daily service checks",
    ],
  },
  {
    id: "sdlg-excavators",
    name: "SDLG Excavators",
    slug: "sdlg-excavators",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "SDLG Machinery",
    brandSlug: "sdlg",
    tagline: "Precision hydraulic excavators engineered for trenching, foundation prep, and quarry excavation.",
    description:
      "SDLG tracked excavators deliver smooth multi-function hydraulics and high digging forces. Engineered for long service intervals in extreme heat and dusty environments, they provide high productivity with minimal downtime.",
    image: "/excavator.jpg",
    specs: [
      { label: "Bucket Capacity", value: "0.25 m³ – 1.2 m³" },
      { label: "Operating Weight", value: "6,000 kg – 21,500 kg" },
      { label: "Rated Engine Output", value: "40 kW – 115 kW" },
      { label: "Max Digging Depth", value: "3,800 mm – 6,700 mm" },
      { label: "Max Digging Reach", value: "6,100 mm – 9,900 mm" },
      { label: "Hydraulic System", value: "Dual variable displacement piston pumps" },
    ],
    features: [
      "Advanced intelligent electronic control system with dual power modes",
      "X-frame undercarriage built with high-tensile steel for extreme stability",
      "Cushioned hydraulic cylinders to minimize operator fatigue and shock loads",
      "Available with standard piping for hydraulic breakers and rock attachments",
    ],
  },
  {
    id: "sdlg-road-rollers",
    name: "SDLG Road Rollers",
    slug: "sdlg-road-rollers",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "SDLG Machinery",
    brandSlug: "sdlg",
    tagline: "Vibratory soil compactors and tandem rollers for asphalt and sub-base compaction.",
    description:
      "SDLG vibratory rollers guarantee uniform compaction density across road works, commercial sub-bases, and embankment layers. Features high static linear load and dual vibration frequencies.",
    image: "/add-1.jpg",
    specs: [
      { label: "Operating Weight", value: "12,000 kg – 16,000 kg" },
      { label: "Drum Width", value: "2,130 mm" },
      { label: "Vibration Frequency", value: "30 Hz / 35 Hz dual amplitude" },
      { label: "Centrifugal Force", value: "180 kN / 290 kN" },
      { label: "Engine Model", value: "Weichai / Cummins Heavy Diesel" },
      { label: "Gradeability", value: "Up to 35%" },
    ],
    features: [
      "Closed hydraulic vibratory system with rapid response and high reliability",
      "Heavy-duty drive axle with non-spin differential for superior traction",
      "Spacious vibration-isolated cabin with high all-round sightlines",
      "Heavy sprinkler system with pressurized dual filtration for asphalt jobs",
    ],
  },
  {
    id: "sdlg-graders",
    name: "SDLG Graders",
    slug: "sdlg-graders",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "SDLG Machinery",
    brandSlug: "sdlg",
    tagline: "High-precision motor graders for leveling, ditch cutting, and surface finishing.",
    description:
      "SDLG motor graders provide exact blade control, high drawbar pull, and agile articulation. Designed for road preparation, site grading, and general infrastructure projects across Sri Lanka.",
    image: "/slide-1.jpg",
    specs: [
      { label: "Operating Weight", value: "15,000 kg – 17,500 kg" },
      { label: "Blade Width (Moldboard)", value: "3,660 mm – 3,965 mm" },
      { label: "Engine Rating", value: "140 kW (190 HP)" },
      { label: "Max Blade Lift Above Ground", value: "450 mm" },
      { label: "Max Blade Depth Cut", value: "500 mm" },
      { label: "Turning Radius", value: "7.6 m articulated" },
    ],
    features: [
      "Load-sensing hydraulic steering for responsive maneuverability in tight sections",
      "Full 360-degree blade rotation with high-strength wear plates",
      "Electro-hydraulic controlled transmission with forward 6 / reverse 3 gears",
      "Optional front dozer blade and rear ripper multi-shank attachment",
    ],
  },

  // ----------------------------------------------------
  // Construction Machinery -> Yineng Wheel Loaders
  // ----------------------------------------------------
  {
    id: "yineng-yn920d",
    name: "Yineng YN920D Wheel Loader",
    slug: "yineng-yn920d",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "Yineng Wheel Loaders",
    brandSlug: "yineng",
    tagline: "Agile, compact wheel loader built for building material yards, farms, and light earthmoving.",
    description:
      "The Yineng YN920D is a workhorse compact articulated loader. Offering low fuel consumption, a tight turning radius, and straightforward mechanical maintenance, it is ideal for brickyards, batching plant feeding, and site transport.",
    image: "/wheel-loader.jpg",
    specs: [
      { label: "Rated Bucket Capacity", value: "0.8 m³ – 1.0 m³" },
      { label: "Rated Load", value: "1,600 kg – 2,000 kg" },
      { label: "Engine Power", value: "48 kW – 55 kW" },
      { label: "Dumping Height", value: "3,200 mm (High-dump available)" },
      { label: "Operating Weight", value: "4,200 kg" },
      { label: "Drive Type", value: "Four-wheel drive (4WD)" },
    ],
    features: [
      "Articulated hydraulic steering for effortless maneuvering in confined spaces",
      "High dump arm geometry capable of loading standard tippers and mixers",
      "Reinforced heavy drive axles with air-over-hydraulic disc brakes",
      "Accessible engine bay with quick-release side panels for fast routine maintenance",
    ],
  },
  {
    id: "yineng-yn917g",
    name: "Yineng YN917G Wheel Loader",
    slug: "yineng-yn917g",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "Yineng Wheel Loaders",
    brandSlug: "yineng",
    tagline: "Compact loader optimized for narrow spaces, landscaping, and aggregate handling.",
    description:
      "The YN917G is an economical mini articulated loader tailored for small-to-medium contractors. It delivers dependable performance, easy operation, and high reliability with low operating expenses.",
    image: "/add-2.jpg",
    specs: [
      { label: "Rated Load", value: "1,200 kg – 1,500 kg" },
      { label: "Bucket Capacity", value: "0.6 m³" },
      { label: "Engine Power", value: "37 kW – 42 kW Diesel" },
      { label: "Dumping Clearance", value: "2,900 mm" },
      { label: "Machine Weight", value: "3,400 kg" },
      { label: "Wheelbase", value: "1,950 mm" },
    ],
    features: [
      "Fuel-efficient diesel power unit with dependable cold-start system",
      "Single-lever pilot joystick control for smooth bucket operation",
      "High-tensile boom arms with sealed grease pins for extended durability",
      "Suitable for bucket, pallet forks, and sweeper attachments",
    ],
  },
  {
    id: "yineng-yn926g",
    name: "Yineng YN926G Wheel Loader",
    slug: "yineng-yn926g",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "Yineng Wheel Loaders",
    brandSlug: "yineng",
    tagline: "Mid-size articulated wheel loader with extended reach and high tipping load.",
    description:
      "Engineered for high throughput in interlock block plants, batching stations, and sand yards, the YN926G balances stability with fast cycle times. Its reinforced chassis handles continuous aggregate feeding with ease.",
    image: "/image (4).jpg",
    specs: [
      { label: "Rated Load Capacity", value: "2,000 kg – 2,200 kg" },
      { label: "Bucket Capacity", value: "1.1 m³ – 1.2 m³" },
      { label: "Engine Output", value: "65 kW Turbocharged" },
      { label: "Max Dump Height", value: "3,400 mm" },
      { label: "Total Operating Weight", value: "5,300 kg" },
      { label: "Brake System", value: "Air-assist caliper disc brakes on all wheels" },
    ],
    features: [
      "Heavy torque converter with automatic 2-speed power shift",
      "Wide-stance axle configuration for enhanced lateral stability on slopes",
      "High-lift boom geometry tailored for loading high-sided transport tippers",
      "Shock-insulated luxury cabin with adjustable suspension seat",
    ],
  },
  {
    id: "yineng-yn959g",
    name: "Yineng YN959G Wheel Loader",
    slug: "yineng-yn959g",
    category: "Construction Machinery",
    categorySlug: "construction-machinery",
    brand: "Yineng Wheel Loaders",
    brandSlug: "yineng",
    tagline: "Heavy-duty 5-ton series loader for high-intensity quarry and industrial bulk handling.",
    description:
      "The flagship YN959G is built for heavy aggregate distribution, quarry operations, and port logistics. High breakout forces and heavy-duty structural components deliver reliable power under peak continuous workloads.",
    image: "/wheel-loader.jpg",
    specs: [
      { label: "Rated Load", value: "4,500 kg – 5,000 kg" },
      { label: "Bucket Capacity", value: "2.5 m³ – 3.0 m³" },
      { label: "Engine Power", value: "162 kW Heavy Industrial Diesel" },
      { label: "Dumping Clearance", value: "3,150 mm" },
      { label: "Machine Weight", value: "16,500 kg" },
      { label: "Breakout Force", value: "≥ 165 kN" },
    ],
    features: [
      "Premium heavy-duty planetary transmission with electronic shifting",
      "Twin tilt cylinders providing massive breakout torque for dense gravel and rock",
      "High-efficiency cyclonic dust pre-cleaner for engine protection",
      "Heavy reinforced box-section rear frame with cast iron counterweight",
    ],
  },

  // ----------------------------------------------------
  // Block Making Machinery -> Noah
  // ----------------------------------------------------
  {
    id: "noah-qt3-15",
    name: "Noah QT3-15 Block Machine",
    slug: "noah-qt3-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Noah",
    brandSlug: "noah",
    tagline: "Compact automatic hydraulic block machine for startup and commercial brick production.",
    description:
      "The Noah QT3-15 is an economical, fully hydraulic block making machine capable of producing hollow blocks, solid cement bricks, and interlocking paving blocks. Features multi-source vibration for high brick density and crisp edges.",
    image: "/noah.jpg",
    specs: [
      { label: "Cycle Time", value: "15 – 20 seconds" },
      { label: "Capacity (Hollow 400×200×200)", value: "3 pcs / mould (~4,300 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "8 – 10 pcs / mould (~12,000 pcs / 8h)" },
      { label: "Pallet Size", value: "680 × 540 × 20 mm" },
      { label: "Total Power", value: "16.5 kW" },
      { label: "Vibration Force", value: "35 kN" },
    ],
    features: [
      "Hydraulic compression combined with table vibration for maximum brick density",
      "Quick-change mold system allows easy transition between pavers and hollow blocks",
      "Automatic pallet feeder and green block conveyor reduction system",
      "Sturdy heavy-gauge steel framework engineered for continuous factory operation",
    ],
  },
  {
    id: "noah-qt4-15",
    name: "Noah QT4-15 Block Machine",
    slug: "noah-qt4-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Noah",
    brandSlug: "noah",
    tagline: "High-demand automatic block and paver machine with integrated hydraulic station.",
    description:
      "The Noah QT4-15 is one of Sri Lanka's most popular commercial block-making models. Offering four 8-inch blocks per stroke and high cycle repeatability, it is a proven choice for manufacturing plants.",
    image: "/QT8-15.jpg",
    specs: [
      { label: "Cycle Time", value: "15 – 18 seconds" },
      { label: "Capacity (Hollow 400×200×200)", value: "4 pcs / mould (~5,760 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "12 – 16 pcs / mould (~18,000 pcs / 8h)" },
      { label: "Pallet Size", value: "850 × 550 × 25 mm" },
      { label: "Total Power", value: "27.5 kW" },
      { label: "Vibration Method", value: "Table vibration + head pressing" },
    ],
    features: [
      "PLC intelligent control system with touch screen interface and diagnostics",
      "Uniform mandatory material distribution rake for consistent paver surface density",
      "Proportional hydraulic flow valves ensuring smooth, jerk-free mould movements",
      "Heat-treated carburized moulds offering over 100,000 cycle lifespan",
    ],
  },
  {
    id: "noah-qt6-15",
    name: "Noah QT6-15 Block Machine",
    slug: "noah-qt6-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Noah",
    brandSlug: "noah",
    tagline: "High-capacity production line for medium-to-large scale concrete product plants.",
    description:
      "The Noah QT6-15 produces 6 standard hollow blocks per stroke. Ideal for commercial operations requiring high output, consistent tensile strength, and color paving tile capability.",
    image: "/noah.jpg",
    specs: [
      { label: "Cycle Time", value: "15 – 18 seconds" },
      { label: "Capacity (Hollow 400×200×200)", value: "6 pcs / mould (~8,640 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "18 – 24 pcs / mould (~28,000 pcs / 8h)" },
      { label: "Pallet Size", value: "900 × 700 × 25 mm" },
      { label: "Total Power", value: "32.5 kW" },
      { label: "Vibration Force", value: "68 kN" },
    ],
    features: [
      "Double-rod hydraulic synchronization ensuring precise mould level and height",
      "Can be paired with automatic stacker, batching plant, and color face hopper",
      "Synchronous mechanical vibration table for high-frequency harmonic compaction",
      "Industrial electrical cabinet with safety interlocks and overload protection",
    ],
  },
  {
    id: "noah-qt9-15",
    name: "Noah QT9-15 Block Machine",
    slug: "noah-qt9-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Noah",
    brandSlug: "noah",
    tagline: "Heavy industrial automatic concrete block plant for commercial suppliers.",
    description:
      "Built for large manufacturing yards, the Noah QT9-15 delivers high throughput across kerbstones, hollow blocks, and patterned interlock pavers with strict dimensional tolerance.",
    image: "/QT8-15.jpg",
    specs: [
      { label: "Cycle Time", value: "13 – 16 seconds" },
      { label: "Capacity (Hollow 400×200×200)", value: "9 pcs / mould (~15,000 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "28 – 32 pcs / mould (~40,000 pcs / 8h)" },
      { label: "Pallet Size", value: "1,150 × 700 × 30 mm" },
      { label: "Total Power", value: "45.0 kW" },
      { label: "Machine Weight", value: "9,800 kg" },
    ],
    features: [
      "Servo vibration technology optional for faster cycle times and reduced power consumption",
      "Heavy four-column guiding structure with hard chrome plated guide rods",
      "Dual hydraulic pump system separating moulding pressure from feeder movement",
      "Integrated automatic block cuber / stacker compatibility",
    ],
  },
  {
    id: "noah-qt12-15",
    name: "Noah QT12-15 Block Machine",
    slug: "noah-qt12-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Noah",
    brandSlug: "noah",
    tagline: "Ultra-high output fully automated stationary concrete production plant.",
    description:
      "The Noah QT12-15 represents maximum production capacity. Producing 12 hollow blocks per stroke, it is engineered for major infrastructure projects and regional block supply operations.",
    image: "/ready-mix-plant.jpg",
    specs: [
      { label: "Cycle Time", value: "12 – 15 seconds" },
      { label: "Capacity (Hollow 400×200×200)", value: "12 pcs / mould (~20,000 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "36 – 40 pcs / mould (~55,000 pcs / 8h)" },
      { label: "Pallet Size", value: "1,350 × 900 × 35 mm" },
      { label: "Total Power", value: "65.0 kW" },
      { label: "Vibration Force", value: "105 kN" },
    ],
    features: [
      "Multi-axis synchronized servo vibration system with variable frequency drive",
      "Heavy welded stress-relieved steel frame designed for non-stop continuous shifts",
      "Comprehensive telemetry and PLC control with remote monitoring support",
      "Complete automatic line available: batching, mixing, moulding, curing, stacking",
    ],
  },
  {
    id: "noah-qt8-15",
    name: "Noah QT8-15 Block Machine",
    slug: "noah-qt8-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Noah",
    brandSlug: "noah",
    tagline: "Premier high-yield automatic brick, paver, and kerbstone manufacturing system.",
    description:
      "The Noah QT8-15 provides 8 blocks per cycle. Renowned for uniform compactive force, it produces exceptionally durable pavers and masonry units compliant with national construction standards.",
    image: "/QT8-15.jpg",
    specs: [
      { label: "Cycle Time", value: "14 – 17 seconds" },
      { label: "Capacity (Hollow 400×200×200)", value: "8 pcs / mould (~12,000 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "24 – 28 pcs / mould (~35,000 pcs / 8h)" },
      { label: "Pallet Size", value: "1,050 × 850 × 30 mm" },
      { label: "Total Power", value: "42.0 kW" },
      { label: "Machine Weight", value: "8,500 kg" },
    ],
    features: [
      "Advanced 360-degree rotating feeding grid for rapid, uniform cavity filling",
      "Heavy hydraulic cylinder with pilot-operated check valves to preserve pressure",
      "Low-noise suspension damping system protecting floor foundations from vibration",
      "Custom mould tooling for Uni-paver, Zigzag, Hexagon, and Cobblestone patterns",
    ],
  },

  // ----------------------------------------------------
  // Block Making Machinery -> Shengya
  // ----------------------------------------------------
  {
    id: "shengya-qmr2-45",
    name: "Shengya QMR2-45 Mobile Egg Layer Block Machine",
    slug: "shengya-qmr2-45",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Shengya",
    brandSlug: "shengya",
    tagline: "Mobile egg-laying block machine — no pallets required for high-mobility production.",
    description:
      "The Shengya QMR2-45 is a mobile block making machine that lays hollow blocks directly on a concrete floor as it moves. It completely eliminates the initial investment in wooden or PVC pallets, making it accessible and cost-effective.",
    image: "/shengya.jpg",
    specs: [
      { label: "Pallet Requirement", value: "None (Lays directly on concrete floor)" },
      { label: "Capacity (400×200×200 Hollow)", value: "2 pcs / mould (~1,500 – 2,000 pcs / 8h)" },
      { label: "Cycle Time", value: "30 – 40 seconds" },
      { label: "Power Source", value: "Single-phase / 3-phase or Diesel engine option" },
      { label: "Power Rating", value: "1.5 kW" },
      { label: "Machine Weight", value: "260 kg (Highly portable)" },
    ],
    features: [
      "Zero pallet cost — lay blocks directly on floor and roll forward",
      "Manual steering wheel for straightforward maneuverability on factory floors",
      "Durable vibrator motor mounted on mould for clean compaction",
      "Simple mechanical lever release with minimal moving parts to maintain",
    ],
  },
  {
    id: "shengya-qtj4-40",
    name: "Shengya QTJ4-40 Stationary Block Machine",
    slug: "shengya-qtj4-40",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Shengya",
    brandSlug: "shengya",
    tagline: "Reliable semi-automatic mechanical vibration block making machine.",
    description:
      "The Shengya QTJ4-40 is a sturdy stationary block machine. It uses vertical vibration and upper pressure head compression to form dense, high-strength hollow and solid blocks with low operating power.",
    image: "/6.jpg",
    specs: [
      { label: "Cycle Time", value: "30 – 35 seconds" },
      { label: "Capacity (400×200×200 Hollow)", value: "4 pcs / mould (~3,200 – 4,000 pcs / 8h)" },
      { label: "Capacity (Solid Bricks)", value: "18 – 24 pcs / mould (~15,000 pcs / 8h)" },
      { label: "Pallet Size", value: "850 × 480 × 30 mm" },
      { label: "Total Power", value: "9.6 kW" },
      { label: "Machine Weight", value: "1,400 kg" },
    ],
    features: [
      "Combined top press and bottom vibration for high structural integrity",
      "Reduction gearbox drive for lifting and lowering the mould box smoothly",
      "Low power consumption suitable for rural and semi-urban electricity supplies",
      "Versatile mould swapping for hollow blocks, solid bricks, and chimney blocks",
    ],
  },
  {
    id: "shengya-qtj4-26a",
    name: "Shengya QTJ4-26A Semi-Automatic Block Machine",
    slug: "shengya-qtj4-26a",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Shengya",
    brandSlug: "shengya",
    tagline: "High-density mechanical vibration block machine with enhanced force.",
    description:
      "The Shengya QTJ4-26A upgrades the 4-series with reinforced columns and dual vibration exciters. It achieves higher block density and cleaner face finishes on cement blocks and paving slabs.",
    image: "/shengya.jpg",
    specs: [
      { label: "Cycle Time", value: "25 – 30 seconds" },
      { label: "Capacity (400×200×200 Hollow)", value: "4 pcs / mould (~3,800 – 4,500 pcs / 8h)" },
      { label: "Capacity (Pavers)", value: "14 – 16 pcs / mould (~12,000 pcs / 8h)" },
      { label: "Pallet Size", value: "880 × 480 × 35 mm" },
      { label: "Total Power", value: "11.6 kW" },
      { label: "Excitation Frequency", value: "Up to 4,200 rpm" },
    ],
    features: [
      "Dual directional vibration shafts for symmetrical density distribution",
      "Strengthened mechanical guiding sleeves preventing mould misalignment",
      "Accommodates local raw materials: cement, crushed stone, sand, and stone dust",
      "Easy mechanical lever control with low maintenance overhead",
    ],
  },
  {
    id: "shengya-qt4-40-diesel-hydraulic",
    name: "Shengya QT4-40 Diesel Hydraulic Block Machine",
    slug: "shengya-qt4-40-diesel-hydraulic",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "Shengya",
    brandSlug: "shengya",
    tagline: "Diesel-powered hydraulic block machine designed for sites without three-phase power.",
    description:
      "The QT4-40 Diesel Hydraulic machine allows full commercial block production anywhere, even without a national electricity grid connection. Equipped with a reliable diesel generator engine and hydraulic pump station.",
    image: "/hf.jpg",
    specs: [
      { label: "Power Source", value: "Heavy-duty Industrial Diesel Engine" },
      { label: "Engine Rating", value: "15 – 18 HP Electric Start" },
      { label: "Capacity (400×200×200 Hollow)", value: "4 pcs / mould (~3,500 – 4,000 pcs / 8h)" },
      { label: "Cycle Time", value: "25 – 35 seconds" },
      { label: "Hydraulic Pressure", value: "16 MPa" },
      { label: "Pallet Size", value: "850 × 450 × 30 mm" },
    ],
    features: [
      "Complete independence from grid electricity — operate anywhere in Sri Lanka",
      "Hydraulic mould lift and pressing ensures effortless operation without manual strain",
      "Integrated diesel electric-start battery and fuel tank for all-day running",
      "Compatible with standard interchangeable moulds for hollow, solid, and interlock units",
    ],
  },

  // ----------------------------------------------------
  // Block Making Machinery -> TNY
  // ----------------------------------------------------
  {
    id: "tny-qt3-15",
    name: "TNY QT3-15 Automatic Block Machine",
    slug: "tny-qt3-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "TNY",
    brandSlug: "tny",
    tagline: "Compact hydraulic block and paver manufacturing machine with precision PLC control.",
    description:
      "TNY QT3-15 is built for high reliability and clean finish. Combining hydraulic compaction and multi-axis table vibration, it produces high-strength interlock pavers and hollow blocks with low cycle waste.",
    image: "/jinbaoshan.jpg",
    specs: [
      { label: "Cycle Time", value: "15 – 20 seconds" },
      { label: "Capacity (Hollow Blocks)", value: "3 pcs / mould (~4,300 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "8 – 10 pcs / mould (~12,000 pcs / 8h)" },
      { label: "Pallet Dimensions", value: "680 × 530 × 20 mm" },
      { label: "Total Power Rating", value: "17.0 kW" },
      { label: "Hydraulic Pressure", value: "16 – 21 MPa" },
    ],
    features: [
      "Microprocessor PLC controller with automated cycle and manual override",
      "High-pressure hydraulic station with oil cooling radiator for tropical climates",
      "Accurate material feeder box with uniform agitator fingers",
      "Rigid steel frame fabricated with ultrasonic weld inspection",
    ],
  },
  {
    id: "tny-qt4-15",
    name: "TNY QT4-15 Automatic Block Machine",
    slug: "tny-qt4-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "TNY",
    brandSlug: "tny",
    tagline: "The benchmark commercial automatic block and paver machine for growing businesses.",
    description:
      "The TNY QT4-15 is an established benchmark in concrete product machinery. With four blocks per stroke and automatic pallet dispatch, it delivers high commercial return with consistent block density.",
    image: "/QT8-15.jpg",
    specs: [
      { label: "Cycle Time", value: "15 – 18 seconds" },
      { label: "Capacity (400×200×200 Hollow)", value: "4 pcs / mould (~5,760 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "12 – 16 pcs / mould (~18,000 pcs / 8h)" },
      { label: "Pallet Dimensions", value: "850 × 550 × 25 mm" },
      { label: "Total Power", value: "28.5 kW" },
      { label: "Vibration Force", value: "45 kN" },
    ],
    features: [
      "Heavy four-pillar guiding system with bronze self-lubricating bushings",
      "Quick mould clamping mechanism reducing changeover time between blocks and pavers",
      "High-frequency dynamic vibration table ensuring sharp corners and high density",
      "Auto stacker / block conveyor attachment ready",
    ],
  },
  {
    id: "tny-qt6-15",
    name: "TNY QT6-15 Automatic Block Machine",
    slug: "tny-qt6-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "TNY",
    brandSlug: "tny",
    tagline: "High-volume six-block production plant with integrated hydraulic cooling.",
    description:
      "The TNY QT6-15 is engineered for commercial concrete manufacturers requiring high output per shift. Capable of handling high aggregate ratios with consistent crushing strength in finished blocks.",
    image: "/image (1).jpg",
    specs: [
      { label: "Cycle Time", value: "15 – 18 seconds" },
      { label: "Capacity (Hollow Blocks)", value: "6 pcs / mould (~8,640 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "18 – 24 pcs / mould (~28,000 pcs / 8h)" },
      { label: "Pallet Dimensions", value: "900 × 700 × 25 mm" },
      { label: "Total Power", value: "33.5 kW" },
      { label: "Hydraulic System", value: "Variable displacement piston pump" },
    ],
    features: [
      "Dual hydraulic cylinders ensuring balanced pressing across large mould surfaces",
      "Full digital touch screen with fault alarm and memory for up to 20 block recipes",
      "Heavy duty baseplate reducing ground vibration transmission",
      "Optional secondary color feeding hopper for top-layer architectural pavers",
    ],
  },
  {
    id: "tny-qt8-15",
    name: "TNY QT8-15 Heavy Automatic Block Machine",
    slug: "tny-qt8-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "TNY",
    brandSlug: "tny",
    tagline: "Heavy-duty 8-unit concrete block and paver manufacturing line.",
    description:
      "The TNY QT8-15 is built for high continuous volume. Produces 8 standard hollow blocks or 28 interlocking paving units every 15 seconds, delivering industry-leading output and uniform density.",
    image: "/QT8-15.jpg",
    specs: [
      { label: "Cycle Time", value: "14 – 17 seconds" },
      { label: "Capacity (Hollow Blocks)", value: "8 pcs / mould (~12,000 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "24 – 28 pcs / mould (~35,000 pcs / 8h)" },
      { label: "Pallet Dimensions", value: "1,050 × 850 × 30 mm" },
      { label: "Total Power", value: "43.5 kW" },
      { label: "Machine Weight", value: "8,700 kg" },
    ],
    features: [
      "High-power table vibration exciters with synchronized eccentric shafts",
      "Carburized and quenched moulds with precision wire-cut tolerances",
      "Integrated pallet feeder and automatic output staging elevator",
      "Heavy-wall structural steel construction engineered for decade-long durability",
    ],
  },
  {
    id: "tny-qt9-15",
    name: "TNY QT9-15 Industrial Block Machine",
    slug: "tny-qt9-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "TNY",
    brandSlug: "tny",
    tagline: "High-capacity automated plant for large-scale infrastructure block supply.",
    description:
      "TNY QT9-15 is designed for major suppliers and industrial construction firms. High pallet capacity and high-pressure hydraulic compaction guarantee blocks that exceed standard load tests.",
    image: "/ready-mix-plant.jpg",
    specs: [
      { label: "Cycle Time", value: "13 – 16 seconds" },
      { label: "Capacity (Hollow Blocks)", value: "9 pcs / mould (~15,000 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "28 – 32 pcs / mould (~40,000 pcs / 8h)" },
      { label: "Pallet Dimensions", value: "1,150 × 700 × 30 mm" },
      { label: "Total Power", value: "48.0 kW" },
      { label: "Excitation Force", value: "85 kN" },
    ],
    features: [
      "Advanced proportional valve hydraulic control for fast, impact-free movements",
      "Automatic diagnostic monitoring with pressure and temperature safeties",
      "Heavy guide pillars with dust-proof seals for harsh plant conditions",
      "High efficiency feeding system preventing segregation of coarse and fine aggregates",
    ],
  },
  {
    id: "tny-qt10-15",
    name: "TNY QT10-15 Heavy Automatic Block Plant",
    slug: "tny-qt10-15",
    category: "Block Making Machinery",
    categorySlug: "block-making-machinery",
    brand: "TNY",
    brandSlug: "tny",
    tagline: "Top-tier 10-block high performance plant for mass concrete production.",
    description:
      "The TNY QT10-15 delivers massive throughput for commercial suppliers and municipal infrastructure contracts. Engineered with high vibration harmonics to ensure uniform strength across all 10 cavities.",
    image: "/QT8-15.jpg",
    specs: [
      { label: "Cycle Time", value: "13 – 16 seconds" },
      { label: "Capacity (Hollow Blocks)", value: "10 pcs / mould (~16,500 pcs / 8h)" },
      { label: "Capacity (Interlock Pavers)", value: "30 – 35 pcs / mould (~45,000 pcs / 8h)" },
      { label: "Pallet Dimensions", value: "1,200 × 850 × 30 mm" },
      { label: "Total Power", value: "54.0 kW" },
      { label: "Machine Weight", value: "10,200 kg" },
    ],
    features: [
      "Servo-assisted vibration system providing high dynamic force with lower energy draw",
      "Automatic lubrication system maintaining critical pivot bearings during shifts",
      "Complete automation readiness: automatic stacking, pallet return, and packing line",
      "Versatile product output: hollow blocks, pavers, solid bricks, kerbs, and grass pavers",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand === brand);
}

export function getWhatsAppInquiryUrl(productName: string, brand: string): string {
  const phone = "94771600600";
  const message = `Hello RCB Holdings, I would like to inquire about the ${productName} (${brand}). Please provide more details and availability.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
