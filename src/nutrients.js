// PlantDoc - Nutrient Database
// Contains all 6 macronutrients with detailed symptoms, treatments, and prevention tips

export const nutrients = [
  {
    id: "nitrogen",
    name: "Nitrogen",
    symbol: "N",
    color: "#FFEB3B",
    importance: "Essential for leaf growth, protein synthesis, and chlorophyll production. Nitrogen is the nutrient plants need most.",
    
    visualSymptoms: {
      description: "Yellowing (chlorosis) starting from older/lower leaves and progressing upward. Young leaves remain green but may be smaller. Entire plant appears pale and stunted.",
      characteristics: [
        "Older leaves turn yellow first, then brown",
        "Young leaves remain green but may be smaller",
        "Entire plant appears pale and light green",
        "Growth is stunted and weak",
        "Leaves may drop prematurely",
        "Reduced flower and fruit production"
      ]
    },
    
    symptoms: [
      { id: "n1", label: "Yellowing of older/lower leaves first", weight: 3 },
      { id: "n2", label: "Green veins with yellow leaf tissue (interveinal)", weight: 2 },
      { id: "n3", label: "Stunted plant growth overall", weight: 3 },
      { id: "n4", label: "Reduced fruit or flower production", weight: 2 },
      { id: "n5", label: "Entire plant appears pale or light green", weight: 2 },
      { id: "n6", label: "Thin, weak stems", weight: 2 },
      { id: "n7", label: "Small leaves compared to normal", weight: 1 }
    ],
    
    severity: {
      mild: {
        description: "Slight yellowing on lower leaves, plant still vigorous and growing",
        timeToRecover: "5-7 days with treatment",
        symptoms: ["Faint yellowing on oldest leaves only"],
        actions: ["Monitor closely", "Apply light fertilization"]
      },
      moderate: {
        description: "Clear yellowing visible, growth slower than normal, some leaf drop possible",
        timeToRecover: "7-14 days with treatment",
        symptoms: ["Yellowing spreads up the plant", "Reduced new growth", "Some older leaves drop"],
        actions: ["Immediate treatment needed", "Weekly monitoring"]
      },
      severe: {
        description: "Intense yellowing throughout plant, very weak growth, plant may be dying",
        timeToRecover: "14-21 days with treatment",
        symptoms: ["Most leaves yellow or brown", "Plant is dying", "Very little new growth"],
        actions: ["Urgent treatment required", "Daily monitoring"]
      }
    },
    
    treatments: {
      fertilizer: [
        {
          name: "Urea (46% N) - Fast Acting",
          type: "synthetic",
          dosage: "1-2 teaspoons per gallon of water",
          application: "Water around base of plant, avoid leaves. Repeat every 3-5 days",
          timeline: "Results in 3-5 days",
          pros: ["Fastest results", "Very effective", "Easy to apply", "Inexpensive"],
          cons: ["Can burn plants if over-applied", "Not organic", "Requires careful dosing"]
        },
        {
          name: "Balanced NPK (20-20-20)",
          type: "synthetic",
          dosage: "Follow label instructions (usually 1 tbsp per gallon)",
          application: "Weekly foliar spray or root watering",
          timeline: "Results in 5-7 days",
          pros: ["Balanced nutrition", "Addresses multiple deficiencies", "Less burn risk"],
          cons: ["Slower than pure nitrogen", "May not be needed for other nutrients"]
        },
        {
          name: "Ammonium Sulfate (21% N)",
          type: "synthetic",
          dosage: "1 tablespoon per gallon of water",
          application: "Apply as soil drench every 7 days until improvement",
          timeline: "Results in 5-7 days",
          pros: ["Good nitrogen content", "Also provides sulfur", "Less likely to burn"],
          cons: ["Can lower soil pH over time"]
        },
        {
          name: "Calcium Nitrate (15.5% N)",
          type: "synthetic",
          dosage: "1-2 teaspoons per gallon",
          application: "Water at base, repeat every 5-7 days",
          timeline: "Results in 5-7 days",
          pros: ["Good nitrogen", "Also provides calcium", "Balanced formula"],
          cons: ["More expensive", "Not as fast as urea"]
        }
      ],
      
      organic: [
        {
          name: "Compost",
          type: "organic",
          dosage: "2-3 inches mixed into top 4-6 inches of soil or as mulch",
          application: "Work into soil or apply as top dressing around plant base",
          timeline: "Gradual results over 2-3 weeks",
          pros: ["Improves soil health long-term", "Sustainable", "No burn risk", "Free if homemade"],
          cons: ["Slower results than synthetic", "Needs quality compost", "Requires soil mixing"]
        },
        {
          name: "Coffee Grounds",
          type: "organic",
          dosage: "Sprinkle ½ inch layer around plant base (not touching stem)",
          application: "Mix into top 2-3 inches of soil or use as mulch",
          timeline: "Results in 1-2 weeks",
          pros: ["Free if you drink coffee", "Also adds potassium and phosphorus", "Improves soil structure"],
          cons: ["Works slower", "Needs decomposition time", "Can mold if wet"]
        },
        {
          name: "Grass Clippings (from untreated lawn)",
          type: "organic",
          dosage: "3-4 inches as mulch around plant (keep 6 inches from stem)",
          application: "Layer on soil surface, allow to decompose",
          timeline: "Results in 1-2 weeks",
          pros: ["Free if you mow", "Adds nitrogen as it decomposes", "Mulches and insulates soil"],
          cons: ["May contain herbicides if treated", "Slower acting", "Can attract pests if not done right"]
        },
        {
          name: "Fish Emulsion",
          type: "organic",
          dosage: "2 tablespoons per gallon (follow product label)",
          application: "Water around base or foliar spray every 7-10 days",
          timeline: "Results in 3-5 days",
          pros: ["Organic certified", "Fast acting for organic", "Also adds micronutrients", "Good for leaves"],
          cons: ["Strong fishy smell", "More expensive", "Can burn if concentrated"]
        },
        {
          name: "Seaweed Extract",
          type: "organic",
          dosage: "Follow product label (usually 1:10 dilution)",
          application: "Foliar spray or soil drench weekly",
          timeline: "Results in 5-7 days",
          pros: ["Contains growth hormones", "Balanced nutrition", "Organic certified", "Bioavailable"],
          cons: ["More expensive", "Can smell", "Slower than fish emulsion"]
        },
        {
          name: "Compost Tea/Grass Tea",
          type: "organic",
          dosage: "1 gallon per plant",
          application: "Water at base of plant weekly",
          timeline: "Results in 1-2 weeks",
          pros: ["DIY - make yourself", "Organic", "Improves soil microbes", "No cost if using scraps"],
          cons: ["Time to prepare (24-48 hours)", "Variable strength", "Can spoil if not done right"]
        }
      ]
    },
    
    preventionTips: [
      "Maintain balanced soil with regular compost additions (1-2 inches annually)",
      "Use complete fertilizers with proper NPK ratio for your plant type",
      "Ensure proper soil drainage to prevent nitrogen leaching",
      "Monitor plant color regularly for early signs of yellowing",
      "Don't over-water - reduces nitrogen availability to roots",
      "Test soil pH - nitrogen uptake is better at pH 6-7",
      "Avoid excessive nitrogen - leads to soft growth and pest problems",
      "Mulch plants to retain soil moisture and nutrients"
    ]
  },

  {
    id: "phosphorus",
    name: "Phosphorus",
    symbol: "P",
    color: "#9C27B0",
    importance: "Critical for root development, energy transfer, flower and fruit formation, and seed production.",
    
    visualSymptoms: {
      description: "Purple, red, or dark discoloration of leaves (especially on undersides and older leaves). Poor root development, delayed flowering, and weak fruit/seed production.",
      characteristics: [
        "Leaves turn purple, red, or dark brown",
        "Discoloration starts on older/lower leaves",
        "Undersides of leaves are more purple than tops",
        "Stunted root development",
        "Few flowers produced or delayed flowering",
        "Small, poor quality fruits or seeds",
        "Overall plant is dark green to purple"
      ]
    },
    
    symptoms: [
      { id: "p1", label: "Purple or reddish discoloration of leaves", weight: 3 },
      { id: "p2", label: "Poor root development (weak root system)", weight: 3 },
      { id: "p3", label: "Delayed flowering or few flowers produced", weight: 2 },
      { id: "p4", label: "Small or poor quality fruits/seeds", weight: 2 },
      { id: "p5", label: "Dark green to purple coloring on older leaves", weight: 2 },
      { id: "p6", label: "Stunted overall plant growth", weight: 2 },
      { id: "p7", label: "Leaves stay small and don't expand normally", weight: 1 }
    ],
    
    severity: {
      mild: {
        description: "Slight purple tint on some older leaves, plant still growing and flowering",
        timeToRecover: "5-7 days with treatment",
        symptoms: ["Faint purple tint on oldest leaves"],
        actions: ["Monitor root development", "Apply phosphorus fertilizer"]
      },
      moderate: {
        description: "Noticeable purple discoloration, reduced flowering, slower root growth",
        timeToRecover: "7-14 days with treatment",
        symptoms: ["Clear purple on lower leaves", "Fewer flowers than normal", "Weak root system"],
        actions: ["Immediate treatment", "Weekly monitoring"]
      },
      severe: {
        description: "Entire plant is purple or dark brown, severe stunting, plant struggling to survive",
        timeToRecover: "14-21 days with treatment",
        symptoms: ["All leaves are purple/brown", "No flowers or fruits", "Plant may die"],
        actions: ["Urgent treatment required", "May not recover"]
      }
    },
    
    treatments: {
      fertilizer: [
        {
          name: "Triple Superphosphate (45% P)",
          type: "synthetic",
          dosage: "1 teaspoon per gallon of water",
          application: "Water around base of plant every 7-10 days",
          timeline: "Results in 7-10 days",
          pros: ["High phosphorus content", "Good for flowering", "Affordable"],
          cons: ["Takes longer to work", "Can lock up micronutrients if over-applied"]
        },
        {
          name: "Bone Meal (10-13% P)",
          type: "organic-synthetic hybrid",
          dosage: "1-2 tablespoons worked into soil per plant",
          application: "Mix into top few inches of soil or apply around base",
          timeline: "Results in 2-3 weeks",
          pros: ["Slow release", "Good for roots", "Also adds calcium"],
          cons: ["Slow working", "Not immediately available", "Can attract animals"]
        },
        {
          name: "NPK Ratio 10-52-10",
          type: "synthetic",
          dosage: "Follow label instructions (usually 1 tbsp per gallon)",
          application: "Water at base weekly",
          timeline: "Results in 7-10 days",
          pros: ["High in phosphorus", "Balanced with K and N", "Good for flowers"],
          cons: ["Contains other nutrients may not need"]
        }
      ],
      
      organic: [
        {
          name: "Bone Meal (organic source)",
          type: "organic",
          dosage: "1-2 tablespoons per plant, worked into soil",
          application: "Mix into top 3-4 inches of soil or apply as top dressing",
          timeline: "Results in 2-3 weeks (slow release)",
          pros: ["Organic", "Slow release = long-lasting", "Also provides calcium", "Good for root development"],
          cons: ["Very slow to work", "Takes weeks for results", "Can attract animals (raccoons, dogs)"]
        },
        {
          name: "Rock Phosphate (Soft Rock Phosphate)",
          type: "organic",
          dosage: "Sprinkle 1-2 tablespoons around base and work into soil",
          application: "Mix into soil or apply as top dressing",
          timeline: "Results in 3-4 weeks (slow)",
          pros: ["Organic source", "Very long-lasting", "Good for acidic soils"],
          cons: ["Very slow to work", "Takes 4+ weeks", "Not soluble in neutral/alkaline soils"]
        },
        {
          name: "Wood Ash (from untreated wood)",
          type: "organic",
          dosage: "Sprinkle ¼-½ inch layer around plant base",
          application: "Mix lightly into top inch of soil",
          timeline: "Results in 2-3 weeks",
          pros: ["Free if you have wood fire", "Also adds potassium and calcium", "Raises pH"],
          cons: ["Slow to work", "Can raise pH too much", "Only use on acidic soils"]
        },
        {
          name: "Compost with added Bone Meal",
          type: "organic",
          dosage: "2-3 inches of compost mixed with ½ cup bone meal per plant",
          application: "Work into top 4-6 inches of soil",
          timeline: "Results in 2-3 weeks",
          pros: ["Multiple benefits", "Improves soil structure", "Sustained release"],
          cons: ["Requires preparation", "Slow to work", "Labor intensive"]
        },
        {
          name: "Mycorrhizal Fungi (root booster)",
          type: "organic",
          dosage: "Follow product label (usually sprinkle on roots)",
          application: "Apply to roots when planting or around existing plant base",
          timeline: "Results in 1-2 weeks",
          pros: ["Improves phosphorus uptake", "Strengthens roots", "Organic certified"],
          cons: ["Works indirectly (improves uptake)", "Requires proper moisture", "Need quality product"]
        }
      ]
    },
    
    preventionTips: [
      "Add phosphorus-rich compost during soil preparation",
      "Apply bone meal or rock phosphate at planting time for long-term availability",
      "Maintain proper soil pH (6.0-7.0) for phosphorus availability",
      "Avoid excessive nitrogen which can suppress phosphorus uptake",
      "Don't over-water - phosphorus availability decreases in waterlogged soils",
      "Use mycorrhizal fungi inoculants to improve phosphorus uptake",
      "Mulch with compost to gradually release phosphorus",
      "Test soil phosphorus levels regularly"
    ]
  },

  {
    id: "potassium",
    name: "Potassium",
    symbol: "K",
    color: "#FF5722",
    importance: "Essential for overall plant strength, disease resistance, fruit quality, and stress tolerance. Helps plants survive drought and cold.",
    
    visualSymptoms: {
      description: "Yellowing or browning of leaf margins (edges) that starts on older leaves. Leaves may curl or become scorched looking. Weak stems and poor fruit quality.",
      characteristics: [
        "Scorched or burned leaf margins (edges)",
        "Yellowing at leaf tips and edges first",
        "Brown edges curl inward (necrosis)",
        "Older leaves affected first, then progresses upward",
        "Weak, thin stems that may bend easily",
        "Poor fruit development and quality",
        "Increased susceptibility to diseases"
      ]
    },
    
    symptoms: [
      { id: "k1", label: "Scorched or burned leaf margins and tips", weight: 3 },
      { id: "k2", label: "Yellowing at leaf edges that curls inward", weight: 3 },
      { id: "k3", label: "Weak, thin stems that bend easily", weight: 2 },
      { id: "k4", label: "Poor fruit development and small fruits", weight: 2 },
      { id: "k5", label: "Increased disease susceptibility", weight: 2 },
      { id: "k6", label: "Leaves appear wilted despite adequate water", weight: 2 },
      { id: "k7", label: "Reduced plant vigor overall", weight: 1 }
    ],
    
    severity: {
      mild: {
        description: "Slight browning on some leaf tips, plant still strong",
        timeToRecover: "5-7 days with treatment",
        symptoms: ["Brown tips on a few leaves only"],
        actions: ["Monitor closely", "Apply potassium fertilizer"]
      },
      moderate: {
        description: "Clear browning of leaf margins, weak stems, reduced fruit quality",
        timeToRecover: "7-14 days with treatment",
        symptoms: ["Brown margins on many leaves", "Noticeable stem weakness", "Small fruits"],
        actions: ["Immediate treatment", "Weekly monitoring"]
      },
      severe: {
        description: "Severe leaf scorch, plant very weak, stems breaking, poor fruit",
        timeToRecover: "14-21 days with treatment",
        symptoms: ["All leaves scorched", "Plant collapse possible", "No viable fruit"],
        actions: ["Urgent treatment required", "May not recover fully"]
      }
    },
    
    treatments: {
      fertilizer: [
        {
          name: "Potassium Sulfate (K2SO4 - 50% K)",
          type: "synthetic",
          dosage: "1-2 teaspoons per gallon of water",
          application: "Water around base every 5-7 days",
          timeline: "Results in 5-7 days",
          pros: ["High potassium", "Also adds sulfur", "Good for vegetables"],
          cons: ["Can affect salt levels", "Requires careful dosing"]
        },
        {
          name: "Potassium Chloride (60% K)",
          type: "synthetic",
          dosage: "1 teaspoon per gallon of water",
          application: "Water around base every 7 days",
          timeline: "Results in 5-7 days",
          pros: ["Very high potassium", "Fast acting", "Inexpensive"],
          cons: ["Can accumulate salt", "May affect soil pH", "Not for salt-sensitive plants"]
        },
        {
          name: "NPK 10-10-40",
          type: "synthetic",
          dosage: "Follow label instructions",
          application: "Water at base weekly",
          timeline: "Results in 5-7 days",
          pros: ["Balanced with other nutrients", "Good for fruiting", "Easy to use"],
          cons: ["May contain nutrients not needed"]
        }
      ],
      
      organic: [
        {
          name: "Wood Ash (from untreated hardwood)",
          type: "organic",
          dosage: "Sprinkle ¼-½ inch around plant base",
          application: "Mix lightly into top inch of soil, water in",
          timeline: "Results in 1-2 weeks",
          pros: ["Free if you have wood fire", "Also adds calcium and magnesium", "Raises pH"],
          cons: ["Very high potassium can lock other nutrients", "Only use on acidic soils", "Can over-apply easily"]
        },
        {
          name: "Seaweed/Kelp (dried and ground)",
          type: "organic",
          dosage: "1-2 tablespoons sprinkled around base",
          application: "Mix into soil or dissolve in water (1 tbsp per gallon)",
          timeline: "Results in 7-10 days",
          pros: ["Organic", "Also contains trace minerals", "Balanced nutrition", "Improves flavor"],
          cons: ["More expensive", "Salty residue possible", "Smell"]
        },
        {
          name: "Banana Peels (potassium-rich)",
          type: "organic",
          dosage: "3-4 peels per plant, cut into small pieces",
          application: "Bury 2-3 inches deep near plant roots",
          timeline: "Results in 2-3 weeks",
          pros: ["Free from kitchen scraps", "Also adds other minerals", "Biodegradable"],
          cons: ["Slow decomposition", "Takes weeks to work", "Can attract pests"]
        },
        {
          name: "Compost (from potassium-rich materials)",
          type: "organic",
          dosage: "2-3 inches as mulch or worked into soil",
          application: "Apply around base or work into top 3-4 inches",
          timeline: "Results in 2-3 weeks",
          pros: ["Sustainable", "Improves soil", "Multiple nutrients"],
          cons: ["Slow release", "Varies in potassium content", "Needs quantity"]
        },
        {
          name: "Greensand (Glauconite)",
          type: "organic",
          dosage: "2-3 pounds per 100 sq ft, worked into soil",
          application: "Mix into soil at planting or surface apply",
          timeline: "Results in 4-6 weeks (slow)",
          pros: ["Organic certified", "Long-lasting", "Also has trace minerals"],
          cons: ["Very slow to work", "Takes months for full effect", "Pricey"]
        }
      ]
    },
    
    preventionTips: [
      "Add potassium-rich materials (wood ash, compost) during soil preparation",
      "Use balanced fertilizers to prevent creating imbalances",
      "Avoid excessive nitrogen which competes with potassium uptake",
      "Maintain proper soil pH for potassium availability",
      "Water consistently - potassium is mobile in soil and leaches with water",
      "Test soil potassium levels regularly",
      "Mulch with compost to gradually release potassium",
      "Don't over-lime - excess calcium locks up potassium"
    ]
  },

  {
    id: "calcium",
    name: "Calcium",
    symbol: "Ca",
    color: "#2196F3",
    importance: "Critical for cell wall structure and strength. Prevents diseases like blossom-end rot in tomatoes and tip burn in lettuce.",
    
    visualSymptoms: {
      description: "Blossom-end rot in fruits (dark, sunken spots), tipburn in leaves (edges turn brown and papery), and weak plant structure. New growth is often most affected.",
      characteristics: [
        "Dark, sunken spots on bottom of fruits (blossom-end rot)",
        "Leaves have brown, papery tips or edges (tipburn)",
        "New growth at stem tips may die back",
        "Fruit cracks easily",
        "Weak, brittle stems",
        "Young leaves are most affected",
        "Heart rot in cabbage/lettuce"
      ]
    },
    
    symptoms: [
      { id: "ca1", label: "Blossom-end rot on fruits (dark sunken spots)", weight: 3 },
      { id: "ca2", label: "Tipburn - brown papery edges on new leaves", weight: 3 },
      { id: "ca3", label: "New growth dies back at stem tips", weight: 2 },
      { id: "ca4", label: "Weak, brittle stems that crack easily", weight: 2 },
      { id: "ca5", label: "Fruit cracks and splits easily", weight: 2 },
      { id: "ca6", label: "Young leaves are curled or deformed", weight: 2 },
      { id: "ca7", label: "Heart rot in leafy greens (internal browning)", weight: 2 }
    ],
    
    severity: {
      mild: {
        description: "A few fruits show small blossom-end rot spots, slight leaf tipburn",
        timeToRecover: "5-7 days with treatment, but affected fruit won't recover",
        symptoms: ["1-2 fruits affected", "Minor leaf tipburn"],
        actions: ["Prevention for future growth", "Improve water consistency"]
      },
      moderate: {
        description: "Many fruits affected with blossom-end rot, noticeable leaf damage",
        timeToRecover: "7-14 days to prevent further damage",
        symptoms: ["Many fruits with rot", "Significant tipburn", "New growth affected"],
        actions: ["Immediate treatment", "Improve watering schedule"]
      },
      severe: {
        description: "Most fruits unmarketable, extensive leaf damage, plant productivity severely compromised",
        timeToRecover: "14-21 days, but current crop likely lost",
        symptoms: ["Most fruits affected", "Extensive tipburn", "Plant stress visible"],
        actions: ["Urgent correction needed", "Focus on preventing further loss"]
      }
    },
    
    treatments: {
      fertilizer: [
        {
          name: "Calcium Nitrate (19% Ca, 15% N)",
          type: "synthetic",
          dosage: "1-2 teaspoons per gallon of water",
          application: "Water around base every 5-7 days",
          timeline: "Results in 5-7 days (new growth)",
          pros: ["Good calcium and nitrogen", "Fast acting", "Balanced formula"],
          cons: ["Can't fix already damaged fruit", "Requires consistent watering"]
        },
        {
          name: "Gypsum (CaSO4 - calcium sulfate)",
          type: "synthetic mineral",
          dosage: "1-2 tablespoons per plant worked into soil",
          application: "Mix into top 2-3 inches of soil, water in well",
          timeline: "Results in 1-2 weeks",
          pros: ["Good for blossom-end rot", "Also adds sulfur", "Doesn't affect pH"],
          cons: ["Can't fix current fruit", "Requires consistent moisture"]
        }
      ],
      
      organic: [
        {
          name: "Crushed Eggshells",
          type: "organic",
          dosage: "Dry, crush finely, apply 2-3 tablespoons around base",
          application: "Mix into soil or sprinkle on top, water in",
          timeline: "Results in 3-4 weeks (slow)",
          pros: ["Free from kitchen scraps", "Organic", "Long-lasting", "Slow release"],
          cons: ["Very slow to work", "Takes weeks", "Limited availability"]
        },
        {
          name: "Wood Ash (calcium-rich)",
          type: "organic",
          dosage: "Sprinkle ¼ inch layer around base",
          application: "Mix lightly into soil, water well",
          timeline: "Results in 1-2 weeks",
          pros: ["Free if you have fire", "Also has potassium", "Fast acting"],
          cons: ["Raises pH significantly", "Only for acidic soils", "Can lock other nutrients"]
        },
        {
          name: "Gypsum (Organic-approved)",
          type: "organic mineral",
          dosage: "1-2 tablespoons per plant",
          application: "Work into soil or dissolve in water (1 tbsp per gallon)",
          timeline: "Results in 1-2 weeks",
          pros: ["Organic certified", "Doesn't affect pH", "Also adds sulfur", "For blossom-end rot"],
          cons: ["Can't fix current fruit", "Requires consistent watering"]
        },
        {
          name: "Seashell Powder or Oyster Shell",
          type: "organic",
          dosage: "Work into soil per label (usually 2-3 tablespoons)",
          application: "Mix into top 3-4 inches of soil before planting",
          timeline: "Results in 2-4 weeks",
          pros: ["Natural, from shells", "Long-lasting", "Slow release"],
          cons: ["Takes 2-4 weeks", "Pre-planting best", "May need repeat applications"]
        },
        {
          name: "Composted Plant Matter + Eggshells",
          type: "organic",
          dosage: "2-3 inches compost mixed with crushed eggshells",
          application: "Work into soil or apply as mulch",
          timeline: "Results in 2-3 weeks",
          pros: ["Multiple benefits", "Improved soil", "Multiple minerals"],
          cons: ["Requires preparation", "Slow to work"]
        }
      ]
    },
    
    preventionTips: [
      "Add lime or gypsum to soil before planting based on soil test",
      "Maintain consistent soil moisture - irregular watering causes blossom-end rot",
      "Mulch around plants to keep moisture consistent",
      "Avoid excessive nitrogen which can inhibit calcium uptake",
      "Maintain soil pH in optimal range (6.0-7.0) for calcium availability",
      "Apply calcium-rich compost regularly",
      "Provide good drainage to prevent nutrient lock-up",
      "Avoid over-tilling which can damage root uptake of calcium"
    ]
  },

  {
    id: "magnesium",
    name: "Magnesium",
    symbol: "Mg",
    importance: "Central to chlorophyll molecules and photosynthesis. Also involved in enzyme function and nutrient uptake.",
    color: "#4CAF50",
    
    visualSymptoms: {
      description: "Interveinal chlorosis - yellowing between leaf veins while veins stay green. Appears in older leaves first and can progress upward. Symptoms are very distinctive.",
      characteristics: [
        "Yellowing between veins (interveinal chlorosis) while veins stay green",
        "Appears first on older/lower leaves",
        "Veins and surrounding tissue remain green",
        "Leaves look striped or banded",
        "Eventually entire leaf may yellow",
        "New growth appears normal at first",
        "Plant may still be growing"
      ]
    },
    
    symptoms: [
      { id: "mg1", label: "Interveinal chlorosis (yellow between green veins)", weight: 3 },
      { id: "mg2", label: "Older leaves turn yellow while veins stay green", weight: 3 },
      { id: "mg3", label: "Leaves look striped or banded in color", weight: 2 },
      { id: "mg4", label: "Lower leaves affected first, then progresses up", weight: 2 },
      { id: "mg5", label: "Reduced plant vigor", weight: 1 },
      { id: "mg6", label: "Leaf curling or upward rolling", weight: 1 }
    ],
    
    severity: {
      mild: {
        description: "Slight yellowing between veins on some lower leaves only",
        timeToRecover: "5-7 days with treatment",
        symptoms: ["Faint interveinal chlorosis on oldest leaves"],
        actions: ["Monitor closely", "Apply magnesium solution"]
      },
      moderate: {
        description: "Clear interveinal chlorosis on many leaves, spreading upward",
        timeToRecover: "7-10 days with treatment",
        symptoms: ["Obvious striped pattern", "Multiple leaves affected", "Clear vein pattern"],
        actions: ["Immediate treatment", "Weekly monitoring"]
      },
      severe: {
        description: "Extensive interveinal chlorosis, most leaves affected, plant weakening",
        timeToRecover: "10-14 days with treatment",
        symptoms: ["Most leaves yellowed except veins", "Plant losing vigor", "Poor growth"],
        actions: ["Urgent treatment required", "Multiple applications needed"]
      }
    },
    
    treatments: {
      fertilizer: [
        {
          name: "Magnesium Sulfate (Epsom Salt) - Fast Acting",
          type: "synthetic",
          dosage: "1 tablespoon per gallon of water",
          application: "Foliar spray (spray on leaves) every 5-7 days, or water at base",
          timeline: "Results in 3-5 days (faster via foliar)",
          pros: ["Very fast results", "Inexpensive", "Easy to apply", "Works through leaves"],
          cons: ["Temporary if soil is deficient", "Requires repeat applications"]
        },
        {
          name: "Balanced NPK with Magnesium",
          type: "synthetic",
          dosage: "Follow label instructions",
          application: "Water at base or foliar spray weekly",
          timeline: "Results in 5-7 days",
          pros: ["Balanced nutrition", "Addresses multiple needs", "Easy to use"],
          cons: ["Slower than pure Epsom salt"]
        },
        {
          name: "Chelated Magnesium",
          type: "synthetic",
          dosage: "Follow label instructions (usually 1 tsp per gallon)",
          application: "Foliar spray or soil drench weekly",
          timeline: "Results in 5-7 days",
          pros: ["Highly available", "Works faster", "Good for immediate correction"],
          cons: ["More expensive than Epsom salt"]
        }
      ],
      
      organic: [
        {
          name: "Epsom Salt (Organic-approved)",
          type: "organic mineral",
          dosage: "1 tablespoon per gallon of water",
          application: "Foliar spray (morning/evening) every 5-7 days, OR water at base",
          timeline: "Results in 3-5 days (fastest organic option)",
          pros: ["Fast results", "Very inexpensive", "Foliar works fastest", "Also adds sulfur"],
          cons: ["Temporary if soil is deficient", "Need repeat applications for long-term"]
        },
        {
          name: "Dolomite Lime (contains Magnesium)",
          type: "organic mineral",
          dosage: "Work into soil per label (usually 1-2 tablespoons per plant)",
          application: "Mix into top 3-4 inches of soil, water in",
          timeline: "Results in 2-3 weeks",
          pros: ["Long-lasting", "Also adds calcium", "Raises pH if needed", "Sustainable"],
          cons: ["Slow to work", "Takes 2-3 weeks", "Raises pH (not good for acidic soils)"]
        },
        {
          name: "Compost with Seaweed",
          type: "organic",
          dosage: "2-3 inches compost with dried seaweed mixed in",
          application: "Apply around base or work into soil",
          timeline: "Results in 2-3 weeks",
          pros: ["Sustainable", "Multiple minerals", "Improves soil", "Long-term benefit"],
          cons: ["Slow to work", "Requires preparation"]
        },
        {
          name: "Magnesium Sulfate Foliar Spray (Organic)",
          type: "organic",
          dosage: "1-2 tablespoons per gallon of water",
          application: "Spray on leaves in early morning or evening, repeat every 5-7 days",
          timeline: "Results in 3-5 days",
          pros: ["Fastest organic option", "Inexpensive", "Absorbed through leaves quickly"],
          cons: ["Works temporarily unless soil fixed", "Spray must coat leaves well"]
        }
      ]
    },
    
    preventionTips: [
      "Use dolomite lime instead of regular lime to ensure magnesium availability",
      "Add compost high in organic matter - improves magnesium retention",
      "Maintain proper soil pH (6.0-7.0) - magnesium is more available in neutral soils",
      "Avoid excessive potassium which can block magnesium uptake",
      "Test soil magnesium levels regularly",
      "Apply magnesium-rich mulch (seaweed) annually",
      "Don't over-apply nitrogen which reduces magnesium uptake",
      "Ensure good soil drainage - magnesium leaches from wet soils"
    ]
  },

  {
    id: "sulfur",
    name: "Sulfur",
    symbol: "S",
    color: "#FFC107",
    importance: "Essential for protein synthesis, enzyme function, and overall plant metabolism. Also improves disease resistance and flavor.",
    
    visualSymptoms: {
      description: "Yellowing of entire plant (similar to nitrogen but affects whole plant uniformly). Young leaves are affected first (opposite of nitrogen). Plant is very pale green or yellow.",
      characteristics: [
        "Uniform yellowing of entire plant",
        "Young/new leaves turn yellow first (unlike nitrogen)",
        "Veins may remain slightly greener than tissue",
        "Plant appears pale and sickly",
        "Stunted growth similar to nitrogen deficiency",
        "Leaves are small",
        "Plant lacks vigor"
      ]
    },
    
    symptoms: [
      { id: "s1", label: "Uniform yellowing of young leaves first", weight: 3 },
      { id: "s2", label: "Entire plant appears pale yellow or pale green", weight: 3 },
      { id: "s3", label: "New growth is stunted and yellow", weight: 2 },
      { id: "s4", label: "Reduced plant vigor overall", weight: 2 },
      { id: "s5", label: "Leaves are small compared to normal", weight: 1 },
      { id: "s6", label: "Delayed flowering", weight: 1 }
    ],
    
    severity: {
      mild: {
        description: "Slight yellowing of new growth, plant still vigorous",
        timeToRecover: "5-7 days with treatment",
        symptoms: ["Faint yellowing on new leaves only"],
        actions: ["Monitor new growth", "Apply sulfur treatment"]
      },
      moderate: {
        description: "Clear yellowing of new growth, slower overall growth",
        timeToRecover: "7-14 days with treatment",
        symptoms: ["Obvious yellowing of new leaves", "Stunted growth", "Pale appearance"],
        actions: ["Immediate treatment", "Weekly monitoring"]
      },
      severe: {
        description: "Entire plant is yellow, severe stunting, plant is weak",
        timeToRecover: "14-21 days with treatment",
        symptoms: ["Whole plant is yellow", "Very stunted", "Poor growth"],
        actions: ["Urgent treatment required", "May not fully recover"]
      }
    },
    
    treatments: {
      fertilizer: [
        {
          name: "Ammonium Sulfate (21% N, 24% S)",
          type: "synthetic",
          dosage: "1 tablespoon per gallon of water",
          application: "Water around base every 7 days",
          timeline: "Results in 5-7 days",
          pros: ["Good sulfur content", "Also provides nitrogen", "Affordable"],
          cons: ["Can lower soil pH over time", "Not pure sulfur"]
        },
        {
          name: "Potassium Sulfate (50% K, 18% S)",
          type: "synthetic",
          dosage: "1-2 teaspoons per gallon",
          application: "Water at base every 5-7 days",
          timeline: "Results in 5-7 days",
          pros: ["Good sulfur", "Also provides potassium", "Balanced"],
          cons: ["May not need potassium"]
        },
        {
          name: "Sulfur Powder (Elemental Sulfur)",
          type: "synthetic",
          dosage: "Dust onto plants or mix into soil (follow label)",
          application: "Dust on wet leaves or work into soil surface",
          timeline: "Results in 2-4 weeks (slow release)",
          pros: ["Pure sulfur", "Long-lasting", "Also helps with some pests"],
          cons: ["Takes 2-4 weeks", "Needs bacteria to convert", "Can burn if applied wet in sun"]
        }
      ],
      
      organic: [
        {
          name: "Sulfur Powder (Organic elemental sulfur)",
          type: "organic",
          dosage: "Dust on plants or mix into soil per label",
          application: "Apply to moist leaves early morning or work into soil",
          timeline: "Results in 2-4 weeks",
          pros: ["Organic certified", "Pure sulfur", "Long-lasting", "Also deters some pests"],
          cons: ["Slow to work (2-4 weeks)", "Needs soil microbes to convert", "Don't apply in heat"]
        },
        {
          name: "Gypsum (calcium sulfate) + Nitrogen source",
          type: "organic mineral",
          dosage: "1-2 tablespoons gypsum + organic fertilizer",
          application: "Mix together and work into soil",
          timeline: "Results in 1-2 weeks",
          pros: ["Provides sulfur", "Also adds calcium", "Doesn't affect pH"],
          cons: ["Need to add separate N source", "Slower than synthetic"]
        },
        {
          name: "Compost + Sulfur",
          type: "organic",
          dosage: "2-3 inches compost with sulfur powder mixed in",
          application: "Work into top 3-4 inches of soil or apply as mulch",
          timeline: "Results in 2-3 weeks",
          pros: ["Multiple benefits", "Improves soil", "Sustainable"],
          cons: ["Slow to work", "Requires preparation"]
        },
        {
          name: "Fish Emulsion with Sulfur",
          type: "organic",
          dosage: "2 tablespoons per gallon (per label)",
          application: "Water around base every 7 days",
          timeline: "Results in 5-7 days",
          pros: ["Organic", "Also has other nutrients", "Some sulfur available"],
          cons: ["Smell", "Variable sulfur content", "More expensive"]
        },
        {
          name: "Seaweed Extract with Sulfur",
          type: "organic",
          dosage: "Follow product label",
          application: "Foliar spray or soil drench weekly",
          timeline: "Results in 7-10 days",
          pros: ["Organic", "Multiple minerals", "Balanced nutrition"],
          cons: ["Slower", "More expensive", "Smell potential"]
        }
      ]
    },
    
    preventionTips: [
      "Use sulfur-containing fertilizers like ammonium sulfate regularly",
      "Add compost which contains organic sulfur",
      "Apply sulfur powder annually to improve availability",
      "Maintain good soil organic matter - helps retain sulfur",
      "Don't over-lime - excess lime locks up sulfur",
      "Avoid waterlogged soils - sulfur leaches away",
      "Test soil sulfur levels periodically",
      "Use gypsum products which add sulfur without affecting pH"
    ]
  }
];

// Export for easy access
export const getNutrientById = (id) => {
  return nutrients.find(n => n.id === id);
};

export const getNutrientsByIds = (ids) => {
  return nutrients.filter(n => ids.includes(n.id));
};

export const getAllSymptoms = () => {
  const allSymptoms = [];
  nutrients.forEach(nutrient => {
    nutrient.symptoms.forEach(symptom => {
      allSymptoms.push({
        id: symptom.id,
        label: symptom.label,
        nutrient: nutrient.id,
        weight: symptom.weight,
        nutrientName: nutrient.name
      });
    });
  });
  return allSymptoms;
};
