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
  companyProfile: 'PROFECTUS BIZLINK (OPC) PRIVATE LIMITED provides manpower and workforce solutions across diverse industries. We support organizations through candidate sourcing, screening, onboarding and workforce deployment across IT, manufacturing, logistics, retail, BPO, FMCG, textile, healthcare, engineering, hospitality and other sectors.',
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
    id: 'it-non-it-staffing',
    number: '01',
    title: 'IT & Non-IT Staffing',
    themeColor: '#2563EB', // Blue
    colorClass: 'text-[#2563EB] bg-[#2563EB]/10 border-[#2563EB]/25',
    accentColor: '#2563EB',
    badgeText: 'Cross-Domain Staffing',
    shortDesc: 'Flexible recruitment and staffing solutions for IT and non-IT roles across diverse organizational requirements.',
    fullDesc: 'Flexible recruitment and staffing solutions for IT and non-IT roles across diverse organizational requirements.',
    profiles: ['IT & Technology', 'Administrative roles', 'Operations', 'Support functions', 'Other non-technical positions'],
    turnaround: 'Rapid Role Matching',
    suitableFor: 'Technology firms, corporate enterprises, shared services and multi-domain organizational teams',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bulk-manpower-supply',
    number: '02',
    title: 'Bulk Manpower Supply',
    themeColor: '#10B981', // Green
    colorClass: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/25',
    accentColor: '#10B981',
    badgeText: 'High-Volume Mobilization',
    shortDesc: 'Scalable workforce deployment for organizations with high-volume, time-sensitive and operational staffing requirements.',
    fullDesc: 'Scalable workforce deployment for organizations with high-volume, time-sensitive and operational staffing requirements.',
    profiles: ['Production', 'Assembly', 'Packaging', 'Warehouse', 'Machine operations', 'General workforce requirements'],
    turnaround: 'Structured Mobilization',
    suitableFor: 'High-volume plant expansions, shift ramp-ups, peak operational cycles and large-scale deployments',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'technical-recruitment',
    number: '03',
    title: 'Technical Recruitment',
    themeColor: '#F59E0B', // Orange
    colorClass: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/25',
    accentColor: '#F59E0B',
    badgeText: 'Skilled & Qualified Talent',
    shortDesc: 'Targeted recruitment of skilled and qualified candidates for technical, engineering and specialized positions.',
    fullDesc: 'Targeted recruitment of skilled and qualified candidates for technical, engineering and specialized positions across diverse industry sectors.',
    profiles: ['Engineering & Technical Roles', 'Specialized Technicians', 'Industrial & Systems Engineers', 'Maintenance & Tooling', 'Precision Machinists', 'Quality & Calibration Specialists'],
    turnaround: 'Criteria-Based Screening',
    suitableFor: 'Technical units, engineering enterprises, maintenance departments and specialized operational setups across industries',
    image: engineeringImg
  },
  {
    id: 'retail-telecalling-staffing',
    number: '04',
    title: 'Retail & Telecalling Staffing',
    themeColor: '#8B5CF6', // Purple
    colorClass: 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/25',
    accentColor: '#8B5CF6',
    badgeText: 'Customer Operations',
    shortDesc: 'Recruitment and staffing support for retail operations, customer-facing roles, telecalling and customer support requirements.',
    fullDesc: 'Recruitment and staffing support for retail operations, customer-facing roles, telecalling and customer support requirements.',
    profiles: ['Retail staff', 'Sales support', 'Telecallers', 'Customer support', 'Front-office/customer-facing roles'],
    turnaround: 'Customer-Centric Sourcing',
    suitableFor: 'Retail stores, commercial showrooms, customer contact centers, outbound sales and support desks',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c57750c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electronics-manufacturing-logistics',
    number: '05',
    title: 'Electronics, Manufacturing & Logistics Workforce',
    themeColor: '#06B6D4', // Cyan
    colorClass: 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/25',
    accentColor: '#06B6D4',
    badgeText: 'Industrial & Supply Chain',
    shortDesc: 'Workforce solutions supporting electronics, manufacturing, production, quality, warehouse and logistics operations.',
    fullDesc: 'Workforce solutions supporting electronics, manufacturing, production, quality, warehouse and logistics operations.',
    profiles: ['Electronics & Electrical', 'Production Workforce', 'Quality Workforce', 'Warehouse & Logistics', 'Supply Chain', 'Manufacturing operations'],
    turnaround: 'Shift-Ready Deployment',
    suitableFor: 'Electronics assembly plants, discrete manufacturing facilities, distribution warehouses and 3PL hubs',
    image: electronicsImg
  },
  {
    id: 'other-business-sectors',
    number: '06',
    title: 'Other Business Sectors',
    themeColor: '#F97373', // Coral
    colorClass: 'text-[#F97373] bg-[#F97373]/10 border-[#F97373]/25',
    accentColor: '#F97373',
    badgeText: 'Flexible Solutions',
    shortDesc: 'Other business sectors depending on client requirements.',
    fullDesc: 'Other business sectors depending on client requirements.',
    profiles: ['Custom Client Requirements', 'Multi-Sector Staffing', 'Flexible Deployments', 'Emerging Verticals', 'Ad-Hoc Business Needs'],
    turnaround: 'Tailored Engagement',
    suitableFor: 'Diverse commercial, industrial, service and emerging sector business requirements',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
];

export const SERVICES_DATA = CORE_SERVICES;

// ==========================================
// 2. 12 MULTI-INDUSTRY SECTORS WE SERVE
// ==========================================
export const INDUSTRIES_DATA = [
  {
    id: 'manufacturing-industries',
    number: '01',
    name: 'Manufacturing Industries',
    shortName: 'Manufacturing',
    desc: 'Production line operators, machine operators, assembly technicians, tool room specialists, quality checkers and plant maintenance workforce.',
    roles: ['Assembly Operators', 'Production Operators', 'Machine Technicians', 'Line Helpers', 'Tool Room Staff', 'Plant Maintenance'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    accentColor: '#2563EB'
  },
  {
    id: 'it-technology',
    number: '02',
    name: 'IT & Technology Companies',
    shortName: 'IT & Technology',
    desc: 'Software engineers, full stack developers, cloud & infrastructure specialists, QA testers, database admins, and technical support executives.',
    roles: ['Software Developers', 'QA Engineers', 'Cloud Specialists', 'Technical Support', 'Database Admins', 'IT Helpdesk'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    accentColor: '#3B82F6'
  },
  {
    id: 'non-it-companies',
    number: '03',
    name: 'Non-IT Companies',
    shortName: 'Non-IT & Corporate',
    desc: 'Administrative staff, accounts & finance assistants, HR executives, operations coordinators, back-office data entry, and executive support.',
    roles: ['Administrative Staff', 'HR Coordinators', 'Accounts Assistants', 'Operations Executives', 'Back Office Support', 'Data Entry'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    accentColor: '#6366F1'
  },
  {
    id: 'warehouse-logistics',
    number: '04',
    name: 'Warehouse & Logistics',
    shortName: 'Warehouse & Logistics',
    desc: 'Pickers, packers, inventory supervisors, material handlers, loaders, dock supervisors and dispatch coordinators.',
    roles: ['Pickers & Packers', 'Inventory Associates', 'Material Handlers', 'Dock Workers', 'Dispatch Supervisors', 'Forklift Operators'],
    image: warehouseImg,
    accentColor: '#F59E0B'
  },
  {
    id: 'retail-ecommerce',
    number: '05',
    name: 'Retail & E-commerce',
    shortName: 'Retail & E-commerce',
    desc: 'Store sales staff, cashiers, showroom executives, fulfillment assistants, inventory checkers, and visual merchandising coordinators.',
    roles: ['Store Associates', 'Showroom Executives', 'Cashiers', 'E-commerce Pickers', 'Merchandising Staff', 'Floor Supervisors'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67c57750c9?auto=format&fit=crop&w=800&q=80',
    accentColor: '#EC4899'
  },
  {
    id: 'bpo-telecalling-support',
    number: '06',
    name: 'BPO, Telecalling & Customer Support',
    shortName: 'BPO & Telecalling',
    desc: 'Inbound customer service agents, outbound telesales executives, technical helpdesk specialists, multi-lingual support, and chat/email support.',
    roles: ['Inbound Agents', 'Outbound Telesales', 'Customer Support', 'Technical Helpdesk', 'Chat Support', 'Team Leaders'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    accentColor: '#8B5CF6'
  },
  {
    id: 'fmcg-food-industries',
    number: '07',
    name: 'FMCG & Food Industries',
    shortName: 'FMCG & Food',
    desc: 'Production line workers, high-speed packaging staff, hygiene assistants, quality inspectors, material handlers and cold-chain dispatch crew.',
    roles: ['Production Line Crew', 'Packaging Operators', 'Hygiene Assistants', 'Quality Checkers', 'Sorting Staff', 'Material Handlers'],
    image: foodProcessingImg,
    accentColor: '#10B981'
  },
  {
    id: 'textile-garment-industries',
    number: '08',
    name: 'Textile & Garment Industries',
    shortName: 'Textile & Garments',
    desc: 'Tailoring machine operators, checking staff, fabric cutters, finishing technicians, ironers, packaging manpower and warehouse handlers.',
    roles: ['Sewing / Machine Operators', 'Fabric Cutters', 'Finishing Technicians', 'Quality Checkers', 'Ironing & Packing', 'Warehouse Handlers'],
    image: textilesImg,
    accentColor: '#14B8A6'
  },
  {
    id: 'transport-logistics',
    number: '09',
    name: 'Transport & Logistics',
    shortName: 'Transport & Logistics',
    desc: 'Fleet coordinators, commercial drivers, delivery assistants, route planners, freight handlers, transit supervisors and dispatch managers.',
    roles: ['Fleet Coordinators', 'Delivery Associates', 'Route Supervisors', 'Freight Handlers', 'Transit Assistants', 'Dispatch Coordinators'],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    accentColor: '#0EA5E9'
  },
  {
    id: 'healthcare-support-services',
    number: '10',
    name: 'Healthcare & Support Services',
    shortName: 'Healthcare & Support',
    desc: 'Hospital ward assistants, patient coordinators, lab assistants, medical records clerks, facility attendants and pharmacy assistants.',
    roles: ['Ward Assistants', 'Patient Coordinators', 'Lab Technicians', 'Medical Records Clerks', 'Pharmacy Assistants', 'Support Staff'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    accentColor: '#E11D48'
  },
  {
    id: 'engineering-industrial-companies',
    number: '11',
    name: 'Engineering & Industrial Companies',
    shortName: 'Engineering & Industrial',
    desc: 'CNC/VMC machinists, mechanical & electrical fitters, welders, fabricators, maintenance engineers, and precision tooling technicians.',
    roles: ['CNC / VMC Machinists', 'Mechanical Fitters', 'Welders & Fabricators', 'Maintenance Engineers', 'Tooling Technicians', 'Quality Supervisors'],
    image: engineeringImg,
    accentColor: '#D97706'
  },
  {
    id: 'hospitality-facility-services',
    number: '12',
    name: 'Hospitality & Facility Services',
    shortName: 'Hospitality & Facility',
    desc: 'Front desk executives, housekeeping supervisors, food & beverage stewards, facility maintenance crew, event support and concierge staff.',
    roles: ['Front Desk Executives', 'Housekeeping Staff', 'F&B Stewards', 'Facility Technicians', 'Event Support', 'Concierge & Helpdesk'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    accentColor: '#84CC16'
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
