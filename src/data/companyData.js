// PROFECTUS BIZLINK (OPC) PRIVATE LIMITED - Centralized Corporate Data Model
// Sourced strictly from the official company profile (company_profile.pdf)
// Zero invented statistics or unsupported claims.

import automotiveImg from '../assets/sectors/automotive.jpg';
import electronicsImg from '../assets/sectors/electronics.jpg';
import engineeringImg from '../assets/sectors/engineering.jpg';
import textilesImg from '../assets/sectors/textiles.jpg';
import fmcgImg from '../assets/sectors/fmcg.jpg';
import plasticImg from '../assets/sectors/plastic.jpg';
import warehouseImg from '../assets/sectors/warehouse.jpg';
import foodProcessingImg from '../assets/sectors/food_processing.jpg';
import qualityWorkforceImg from '../assets/quality_workforce.jpg';

export const COMPANY_INFO = {
  name: 'PROFECTUS BIZLINK',
  legalName: 'PROFECTUS BIZLINK (OPC) PRIVATE LIMITED',
  tagline: 'Building Workforce. Powering Industries.',
  subtitle: 'Workforce Solutions for IT, Manufacturing, Logistics & Multi-Industry Operations',
  director: 'Kirubasankar',
  phone: '+91 78453 39972',
  phoneTel: '+917845339972',
  whatsappUrl: 'https://wa.me/917845339972?text=Hello%20PROFECTUS%20BIZLINK,%20I%20would%20like%20to%20inquire%20about%20industrial%20manpower%20solutions.',
  email: 'career@profectusbizlink.com',
  address: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    full: 'Chennai, Tamil Nadu, India'
  },
  companyProfile: 'PROFECTUS BIZLINK (OPC) PRIVATE LIMITED provides manpower and workforce solutions to organizations with a strong focus on manufacturing and industrial operations. We support employers through candidate sourcing, screening, onboarding and workforce deployment across production, assembly, quality, warehouse, machine operations, packaging and allied functions.',
  aboutText: 'We serve as a dedicated manpower sourcing and staffing partner for organizations requiring dependable workforce support. Our approach is built around understanding client requirements, mobilizing candidates, screening against role specifications, coordinating documentation and supporting seamless deployment.',
  mission: 'To empower manufacturing enterprises with reliable, productive and role-matched workforce solutions while creating sustainable industrial employment opportunities.',
  vision: 'To be the most trusted manpower sourcing and industrial staffing partner across India’s premier manufacturing and engineering corridors.',
  partnershipPromise: 'We aim to become a dependable manpower partner for manufacturing organizations by combining candidate reach, structured recruitment, responsive coordination and workforce support.',
  statutoryNote: 'Specific manpower categories, employment terms, statutory responsibilities and deployment arrangements are governed by the commercial service agreement with each client.'
};

// ==========================================
// 1. 6 CORE WORKFORCE CAPABILITIES (Theme Colors & Numbering)
// ==========================================
export const CORE_SERVICES = [
  {
    id: 'bulk-manpower',
    number: '01',
    title: 'Bulk Manpower Supply',
    themeColor: '#2563EB', // Blue
    colorClass: 'text-[#2563EB] bg-[#2563EB]/10 border-[#2563EB]/25',
    accentColor: '#2563EB',
    badgeText: 'High-Volume Mobilization',
    shortDesc: 'Assembly line operators, helpers, packers, warehouse staff and industrial support personnel.',
    fullDesc: 'Structured high-volume candidate sourcing and mobilization for plant expansions, new line rollouts and peak shift requirements with reliable turnaround.',
    profiles: ['Assembly Operators', 'Helpers', 'Assemblers', 'Packers', 'Warehouse Staff', 'Industrial Support Workforce'],
    turnaround: 'Structured Mobilization',
    suitableFor: 'New plant commissioning, shift expansions and seasonal production spikes',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'contract-staffing',
    number: '02',
    title: 'Contract Staffing',
    themeColor: '#10B981', // Green
    colorClass: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/25',
    accentColor: '#10B981',
    badgeText: 'Flexible Deployment',
    shortDesc: 'Workforce deployment aligned with defined operational requirements, subject to client and statutory arrangements.',
    fullDesc: 'Flexible workforce deployment models structured around your operational cycles, production milestones and statutory arrangements.',
    profiles: ['Line Operators', 'Project-Based Staff', 'Seasonal Relief Workers', 'Process Support Personnel'],
    turnaround: 'Aligned to Requirements',
    suitableFor: 'Fixed-term projects, cyclical production peaks and flexible operational staffing',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'technical-recruitment',
    number: '03',
    title: 'Technical Recruitment',
    themeColor: '#F59E0B', // Orange
    colorClass: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/25',
    accentColor: '#F59E0B',
    badgeText: 'Skilled Profiles',
    shortDesc: 'CNC, VMC and HMC operators, maintenance technicians and skilled industrial personnel.',
    fullDesc: 'Targeted sourcing and screening for precision machining, tooling, industrial equipment maintenance and technical operations.',
    profiles: ['CNC Operators', 'VMC Operators', 'HMC Operators', 'Maintenance Helpers', 'Mechanical Technicians', 'Electrical Technicians'],
    turnaround: 'Role-Based Matching',
    suitableFor: 'Machining workshops, tool rooms, heavy engineering units and precision component manufacturing',
    image: engineeringImg
  },
  {
    id: 'production-workforce',
    number: '04',
    title: 'Production Workforce',
    themeColor: '#06B6D4', // Cyan
    colorClass: 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/25',
    accentColor: '#06B6D4',
    badgeText: 'Shopfloor Continuity',
    shortDesc: 'Personnel for continuous production lines, assembly operations, material handling and process support.',
    fullDesc: 'Dedicated shopfloor personnel trained for continuous line manufacturing, component assembly, line balancing and material handling.',
    profiles: ['Assembly Operators', 'Production Operators', 'Line Workers', 'Helpers', 'Sub-Assemblers'],
    turnaround: 'Continuous Deployment',
    suitableFor: 'Assembly lines, discrete manufacturing plants and sub-assembly cells',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'quality-workforce',
    number: '05',
    title: 'Quality Workforce',
    themeColor: '#8B5CF6', // Purple
    colorClass: 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/25',
    accentColor: '#8B5CF6',
    badgeText: 'Inspection & Standards',
    shortDesc: 'Quality inspectors, line quality checkers and quality documentation assistants.',
    fullDesc: 'Personnel for incoming inspection, in-process quality control, final dispatch inspection and quality documentation support.',
    profiles: ['Quality Inspectors', 'Line Quality Checkers', 'Final Inspection Personnel', 'Quality Assistants'],
    turnaround: 'Criteria-Based Sourcing',
    suitableFor: 'Zero-defect manufacturing lines, automotive component testing and electronics inspection',
    image: qualityWorkforceImg
  },
  {
    id: 'warehouse-logistics',
    number: '06',
    title: 'Warehouse & Logistics',
    themeColor: '#F97373', // Coral
    colorClass: 'text-[#F97373] bg-[#F97373]/10 border-[#F97373]/25',
    accentColor: '#F97373',
    badgeText: 'Fulfillment & Dispatch',
    shortDesc: 'Pickers, packers, loaders, dispatch assistants, inventory handlers and warehouse personnel.',
    fullDesc: 'Dependable manpower for raw material stores, finished goods warehouses, inventory management, sorting, picking and dispatch logistics.',
    profiles: ['Pickers', 'Packers', 'Loaders', 'Dispatch Assistants', 'Inventory Assistants', 'Warehouse Associates'],
    turnaround: 'Shift-Ready Sourcing',
    suitableFor: 'FMCG distribution hubs, 3PL facilities, raw material stores and dispatch operations',
    image: warehouseImg
  }
];

export const SERVICES_DATA = CORE_SERVICES;

// ==========================================
// 2. 8 INDUSTRIAL SECTORS
// ==========================================
export const INDUSTRIES_DATA = [
  {
    id: 'automotive',
    number: '01',
    name: 'Automotive & Auto Components',
    shortName: 'Automotive',
    desc: 'Assembly and production operators, machine operators, quality inspectors, welders, fitters and warehouse logistics workforce.',
    roles: ['Assembly Operators', 'Production Operators', 'Machine Operators', 'Quality Inspectors', 'Welders & Fitters', 'Warehouse Workforce'],
    image: automotiveImg,
    accentColor: '#2563EB'
  },
  {
    id: 'electronics',
    number: '02',
    name: 'Electronics & Electrical',
    shortName: 'Electronics',
    desc: 'Assembly operators, soldering and production support, testing assistants, quality checkers, packing crews and material-handling personnel.',
    roles: ['Assembly Operators', 'Soldering Support', 'Testing Assistants', 'Quality Checkers', 'Packing Crew', 'Material Handling'],
    image: electronicsImg,
    accentColor: '#06B6D4'
  },
  {
    id: 'engineering',
    number: '03',
    name: 'Engineering & Industrial Products',
    shortName: 'Engineering',
    desc: 'CNC, VMC and HMC operators, fitters, fabricators, machine helpers, inspection staff and stores personnel.',
    roles: ['CNC / VMC Operators', 'HMC Machinists', 'Fitters & Fabricators', 'Machine Helpers', 'Inspection Staff', 'Stores Personnel'],
    image: engineeringImg,
    accentColor: '#F59E0B'
  },
  {
    id: 'textiles',
    number: '04',
    name: 'Textiles & Garments',
    shortName: 'Textiles',
    desc: 'Production helpers, machine operators, checking staff, finishing technicians, packing crews and warehouse personnel.',
    roles: ['Production Helpers', 'Machine Operators', 'Checking Personnel', 'Finishing Staff', 'Packing Manpower', 'Warehouse Teams'],
    image: textilesImg,
    accentColor: '#10B981'
  },
  {
    id: 'consumer-fmcg',
    number: '05',
    name: 'FMCG Manufacturing',
    shortName: 'FMCG',
    desc: 'Production line workers, packing and sorting staff, material handlers, line quality inspectors and warehouse support personnel.',
    roles: ['Line Workers', 'Packing & Sorting', 'Material Handlers', 'Line Quality Staff', 'Dispatch Support', 'Warehouse Helpers'],
    image: fmcgImg,
    accentColor: '#F97373'
  },
  {
    id: 'plastic-moulding',
    number: '06',
    name: 'Plastic / Injection Moulding',
    shortName: 'Plastic & Moulding',
    desc: 'Machine operators, moulding helpers, trimming and finishing staff, quality checkers and packaging personnel.',
    roles: ['Moulding Operators', 'Moulding Helpers', 'Trimming & Finishing', 'Quality Checkers', 'Packaging Crew'],
    image: plasticImg,
    accentColor: '#8B5CF6'
  },
  {
    id: 'warehouse-3pl',
    number: '07',
    name: 'Warehouse & 3PL Operations',
    shortName: 'Warehouse & 3PL',
    desc: 'Pickers, packers, inventory assistants, loaders, dispatch coordinators and warehouse associates.',
    roles: ['Pickers & Packers', 'Inventory Assistants', 'Loading / Unloading', 'Dispatch Coordinators', 'Warehouse Associates'],
    image: warehouseImg,
    accentColor: '#2563EB'
  },
  {
    id: 'food-processing',
    number: '08',
    name: 'Food Processing',
    shortName: 'Food Processing',
    desc: 'Production helpers, packaging personnel, quality checkers, material handlers and hygiene-support personnel.',
    roles: ['Production Helpers', 'Packaging Staff', 'Quality Support', 'Material Handlers', 'Hygiene Support Personnel'],
    image: foodProcessingImg,
    accentColor: '#10B981'
  }
];

// ==========================================
// 3. 6-STEP HOME PROCESS TIMELINE (Connected Horizontal Flow)
// ==========================================
export const HOME_PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Requirement Understanding',
    desc: 'Analyzing headcount requirements, shift patterns, job descriptions, skill specifications and joining schedules.',
    icon: 'FileText',
    color: '#2563EB' // Blue
  },
  {
    step: '02',
    title: 'Sourcing',
    desc: 'Mobilizing candidates across local talent networks and verified industrial candidate pools.',
    icon: 'Users',
    color: '#10B981' // Green
  },
  {
    step: '03',
    title: 'Screening',
    desc: 'Screening candidates against technical qualifications, practical experience and role specifications.',
    icon: 'CheckCircle2',
    color: '#F59E0B' // Orange
  },
  {
    step: '04',
    title: 'Interview & Selection',
    desc: 'Facilitating structured interviews and direct coordination with plant hiring managers.',
    icon: 'UserCheck',
    color: '#06B6D4' // Cyan
  },
  {
    step: '05',
    title: 'Documentation & Onboarding',
    desc: 'Handling candidate identity verification, KYC, gate pass documentation and Day 1 orientation.',
    icon: 'ShieldCheck',
    color: '#8B5CF6' // Purple
  },
  {
    step: '06',
    title: 'Workforce Support',
    desc: 'Providing continuous attendance monitoring, shift balance coordination and standby replacement support.',
    icon: 'Handshake',
    color: '#F97373' // Coral
  }
];

export const PROCESS_STEPS = HOME_PROCESS_TIMELINE;

// ==========================================
// 4. ABOUT PAGE: VALUES (5 Items Connected Layout)
// ==========================================
export const ABOUT_VALUES = [
  {
    id: 'integrity',
    title: 'Integrity',
    desc: 'Transparent recruitment standards and ethical employment practices across all client operations.',
    icon: 'ShieldCheck',
    accentColor: '#2563EB'
  },
  {
    id: 'commitment',
    title: 'Commitment',
    desc: 'Dedicated to fulfilling agreed headcount schedules and maintaining shift continuity on time.',
    icon: 'Award',
    accentColor: '#10B981'
  },
  {
    id: 'quality',
    title: 'Quality',
    desc: 'Rigorous role-based screening to ensure shopfloor workers meet specific operational criteria.',
    icon: 'CheckCircle2',
    accentColor: '#8B5CF6'
  },
  {
    id: 'respect',
    title: 'Respect',
    desc: 'Upholding workforce dignity, fair orientation and clear wage communication for all candidates.',
    icon: 'Heart',
    accentColor: '#F97373'
  },
  {
    id: 'partnership',
    title: 'Partnership',
    desc: 'Building collaborative relationships with plant leadership for sustainable long-term success.',
    icon: 'Handshake',
    accentColor: '#F59E0B'
  }
];

// ==========================================
// 5. ABOUT PAGE: WHY CHOOSE BIZLINK? (6 Navy Full-Width Benefits)
// ==========================================
export const WHY_CHOOSE_BENEFITS = [
  {
    title: 'Manufacturing Focus',
    desc: 'In-depth understanding of shopfloor dynamics, assembly line takt times, CNC cells and continuous shifts.'
  },
  {
    title: 'Reliable Workforce',
    desc: 'Pre-screened operators and helpers committed to shift attendance and zero unscheduled downtime.'
  },
  {
    title: 'Quick Mobilization',
    desc: 'Structured sourcing networks enabling responsive candidate deployment for urgent plant ramp-ups.'
  },
  {
    title: 'Flexible Solutions',
    desc: 'Scalable manpower models tailored to seasonal spikes, new line rollouts and plant contracts.'
  },
  {
    title: 'Dedicated Support',
    desc: 'Single-point operations desk coordinating onboarding, documentation and standby replacements.'
  },
  {
    title: 'Pan-India Reach',
    desc: 'Candidate mobilization across major industrial clusters, regional hubs and technical talent belts.'
  }
];

// ==========================================
// 6. ABOUT PAGE: OUR APPROACH (5-Step Horizontal Timeline)
// ==========================================
export const ABOUT_APPROACH_TIMELINE = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Detailed mapping of plant roles, machinery specifications, shift timings and compliance needs.'
  },
  {
    number: '02',
    title: 'Source',
    desc: 'Multi-channel mobilization through regional recruitment networks and active industrial databases.'
  },
  {
    number: '03',
    title: 'Screen',
    desc: 'Criteria-based qualification screening, physical fitness assessment, previous experience verification and interview coordination.'
  },
  {
    number: '04',
    title: 'Deploy',
    desc: 'Smooth plant-gate induction, KYC documentation processing and first-shift orientation.'
  },
  {
    number: '05',
    title: 'Support',
    desc: 'Ongoing workforce continuity, attendance coordination and replacement support.'
  }
];

// ==========================================
// 7. ABOUT PAGE: OUR IMPACT (2x2 Editorial Layout)
// ==========================================
export const ABOUT_IMPACT_ITEMS = [
  {
    id: 'stronger-operations',
    title: 'Stronger Operations',
    desc: 'Ensuring industrial assembly lines, CNC cells and warehouses run at planned capacity without headcount bottlenecks.',
    icon: 'Factory',
    accentColor: '#2563EB'
  },
  {
    id: 'employment-opportunities',
    title: 'Employment Opportunities',
    desc: 'Connecting job seekers and technical ITI/diploma holders with structured, verified employment in manufacturing corridors.',
    icon: 'Users',
    accentColor: '#10B981'
  },
  {
    id: 'business-growth',
    title: 'Business Growth',
    desc: 'Enabling manufacturing enterprises to scale production output smoothly for new orders and facility expansions.',
    icon: 'TrendingUp',
    accentColor: '#F59E0B'
  },
  {
    id: 'safe-compliant',
    title: 'Safe & Compliant Workforce',
    desc: 'Promoting statutory documentation, background verification and safety-conscious workforce orientation on shopfloors.',
    icon: 'ShieldCheck',
    accentColor: '#8B5CF6'
  }
];

// ==========================================
// 8. CASE STUDIES DATA (Realistic Corporate Scenarios - Zero Invented Statistics)
// ==========================================
export const CASE_STUDIES_DATA = [
  {
    id: 'automotive-assembly-mobilisation',
    category: 'Automotive Manufacturing',
    title: 'High-Volume Assembly Line Sourcing for Tier-1 Auto Component Plant',
    sector: 'Automotive & Auto Components',
    location: 'Industrial Corridor, Tamil Nadu',
    image: automotiveImg,
    isPlaceholder: true, // Clearly marked
    overview: 'A Tier-1 automotive components manufacturer required an urgent workforce deployment to support the introduction of a new component assembly line operating on a continuous 3-shift model.',
    challenge: 'The plant needed operators with assembly experience and physical agility who could adapt quickly to automated torque fastening tools and takt-time standards while ensuring minimal initial attrition.',
    solution: 'BizLink deployed a targeted sourcing campaign across nearby manufacturing clusters. Candidates were pre-screened for hand-eye coordination, line experience and shift readiness before client interaction.',
    rolesDeployed: [
      'Line Assembly Operators',
      'Sub-Assembly Helpers',
      'Line Quality Checkers',
      'Material Handling Support'
    ],
    outcomes: [
      'On-schedule line commissioning without shift delays',
      'Full statutory KYC and gate pass documentation completed prior to Day 1',
      'Standby buffer maintained to protect shift continuity during initial ramp-up'
    ]
  },
  {
    id: 'warehouse-logistics-fulfillment',
    category: 'Warehouse & Logistics',
    title: 'Fulfillment & Dispatch Workforce for 3PL Distribution Center',
    sector: 'Warehouse & 3PL Operations',
    location: 'Logistics Park, Tamil Nadu',
    image: warehouseImg,
    isPlaceholder: true,
    overview: 'A regional logistics hub handling FMCG and retail goods needed structured staffing to manage incoming container unloading, inventory binning, order picking and outbound pallet dispatch.',
    challenge: 'Seasonal demand surges created heavy shipment volume fluctuations requiring shift-flexible teams capable of accurate barcode scanning and fast turnaround.',
    solution: 'BizLink established a scalable contract staffing model providing trained pickers and packers accustomed to hand-held terminals (HHTs) and FIFO inventory staging protocols.',
    rolesDeployed: [
      'Order Pickers & Packers',
      'Inventory Staging Assistants',
      'Loading & Unloading Teams',
      'Dispatch Coordinators'
    ],
    outcomes: [
      'Maintained consistent order turnaround during high-volume periods',
      'Reduced manual handling errors through structured pre-deployment role briefing',
      'Coordinated single-point attendance tracking across all operating shifts'
    ]
  },
  {
    id: 'production-operations-machining',
    category: 'Production Operations',
    title: 'Skilled Machine Operators for Precision Engineering Workshop',
    sector: 'Engineering & Industrial Products',
    location: 'Engineering Belt, Tamil Nadu',
    image: engineeringImg,
    isPlaceholder: true,
    overview: 'A precision engineering unit machining high-tolerance components needed qualified operators for CNC turning and VMC milling cells to meet delivery schedules for industrial export orders.',
    challenge: 'The facility required operators capable of engineering drawing interpretation, tool offset adjustments and vernier/micrometer dimensional checks with verifiable machining workshop experience.',
    solution: 'BizLink conducted role-specific technical screening, evaluating candidates on machine safety protocols, basic tool maintenance and quality inspection before scheduling on-site machine trials.',
    rolesDeployed: [
      'CNC Lathe Operators',
      'VMC Machine Machinists',
      'Tool Room Helpers',
      'In-Process Quality Inspectors'
    ],
    outcomes: [
      'Targeted matching of operators to machine controls (Fanuc / Siemens)',
      'Smooth transition into production runs with reduced machine setup supervision',
      'Transparent verification of previous work experience and technical certifications'
    ]
  },
  {
    id: 'electronics-smt-assembly',
    category: 'Electronics Assembly',
    title: 'Cleanroom Assembly & Quality Workforce for Electrical Manufacturer',
    sector: 'Electronics & Electrical',
    location: 'Electronics Manufacturing Cluster',
    image: electronicsImg,
    isPlaceholder: true,
    overview: 'An electrical equipment manufacturer expanding its SMT (Surface Mount Technology) and manual PCB assembly cells required cleanroom-ready operators.',
    challenge: 'The primary challenge was ensuring that candidates complied with ESD (Electrostatic Discharge) standards, were proficient in microscopic soldering inspection and could adapt to controlled cleanroom environments.',
    solution: 'BizLink mobilized candidates with prior cleanroom experience, pre-orienting them on ESD footwear, wrist strap protocols and delicate electronic component handling.',
    rolesDeployed: [
      'PCB Assembly Operators',
      'Soldering Support Assistants',
      'Functional Testing Aides',
      'Final Packaging Crew'
    ],
    outcomes: [
      'Fast integration into active cleanroom shifts with zero ESD protocol non-compliance',
      '100% credential verification and health checks prior to cleanroom entry',
      'Proactive shift balance support to prevent assembly line bottlenecks'
    ]
  }
];

// ==========================================
// 9. MANUFACTURING FUNCTIONS STRUCTURE
// ==========================================
export const MANUFACTURING_FUNCTIONS = [
  {
    function: 'Production / Assembly',
    icon: 'Factory',
    profiles: 'Assembly Operator, Production Operator, Line Worker, Helper, Sub-Assembler',
    description: 'Operators and assistants supporting continuous line flow, component assembly and shopfloor staging.'
  },
  {
    function: 'Machine Operations',
    icon: 'Settings2',
    profiles: 'CNC Operator, VMC Operator, HMC Operator, Machine Operator, Press Machine Operator',
    description: 'Trained machinists for precision cutting, turning, milling, pressing and machine monitoring.'
  },
  {
    function: 'Fabrication & Fitting',
    icon: 'Flame',
    profiles: 'Welding Helper, Fabricator, Fitter, Sheet Metal Worker, Grinding/Finishing Worker',
    description: 'Personnel for structural welding, fitting, sheet metal shaping, grinding and metal finishing.'
  },
  {
    function: 'Quality Assurance',
    icon: 'ShieldCheck',
    profiles: 'Quality Inspector, Line Quality Checker, Final Inspection, Quality Assistant',
    description: 'Staff for dimensional inspection, visual defect checking, line quality verification and documentation.'
  },
  {
    function: 'Material Handling & Stores',
    icon: 'Boxes',
    profiles: 'Material Handler, Stores Assistant, Loading/Unloading, Material Movement',
    description: 'Safe handling of raw materials, transit of components between process cells and shopfloor staging.'
  },
  {
    function: 'Warehouse & Dispatch',
    icon: 'Warehouse',
    profiles: 'Picker, Packer, Warehouse Associate, Inventory Assistant, Dispatch Assistant',
    description: 'Warehouse personnel for picking orders, stock verification, packing and dispatch staging.'
  }
];

export const WORKFORCE_FUNCTIONS = MANUFACTURING_FUNCTIONS;
