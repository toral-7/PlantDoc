# PlantDoc - Plant Nutrient Deficiency Diagnostic Tool

## 📋 Overview

**PlantDoc** is a web-based agricultural diagnostic tool that helps farmers and gardeners identify nutrient deficiencies in plants using two methods:

1. **Photo Analysis** - Upload a leaf photo for AI-powered deficiency detection
2. **Symptom Checklist** - Answer guided questions about plant symptoms for diagnosis

The app covers **40+ plant types** and **12 nutrient elements** (macronutrients and micronutrients), providing evidence-based treatment recommendations including fertilizer types, dosages, application methods, and prevention tips.

---

## ✨ Key Features

- **Dual Diagnosis Methods**
  - Photo-based analysis using color detection
  - Symptom-based checklist with rule-based matching
  
- **Comprehensive Database**
  - 40+ plant types (vegetables, fruits, crops, ornamentals, houseplants)
  - 12 nutrient elements (N, P, K, Mg, Ca, S, Fe, Zn, Mn, B, Cu, Mo)
  - Detailed treatment plans per nutrient
  - Both synthetic and organic fertilizer options
  
- **Advanced Treatment Information**
  - Multiple treatment options per deficiency
  - Dosage instructions
  - Application methods (foliar spray, soil drench, etc.)
  - Recovery timelines
  - Prevention tips
  
- **Severity Levels**
  - Mild, Moderate, Severe classifications
  - Specific recovery times for each level
  - Action items based on severity
  
- **Professional UI**
  - Clean, responsive design
  - Mobile-friendly interface
  - Intuitive navigation
  - Color-coded severity indicators


## 📱 How to Use

### Photo Analysis Path
1. Click **"Photo Analysis"** on home page
2. Select your plant type from dropdown
3. Upload a clear photo of the affected leaf
4. Click **"Analyze Photo"**
5. View results with severity level and treatment plan

### Symptom Checklist Path
1. Click **"Symptom Checklist"** on home page
2. Select your plant type
3. Check all visible symptoms
4. Click **"Diagnose Plant"**
5. View results with recommended treatments

### Results Screen
- **Deficiency Name** - Which nutrient is deficient
- **Severity Level** - Mild/Moderate/Severe
- **Confidence Score** - Only for photo analysis (60-85%)
- **Treatment Plan** - Fertilizer, dosage, frequency, method, recovery time
- **Secondary Deficiency** - If multiple deficiencies detected
- **Action Buttons** - Analyze another photo or use checklist again

---

## 🌱 Nutrients Covered

### Primary Macronutrients (NPK)
- **Nitrogen (N)** - Leaf growth, chlorophyll, protein synthesis
- **Phosphorus (P)** - Root development, flowering, fruiting
- **Potassium (K)** - Plant vigor, disease resistance, fruit quality

### Secondary Macronutrients
- **Magnesium (Mg)** - Chlorophyll center, photosynthesis
- **Calcium (Ca)** - Cell wall structure, root development
- **Sulfur (S)** - Protein synthesis, enzyme function

### Micronutrients
- **Iron (Fe)** - Chlorophyll production, respiration
- **Zinc (Zn)** - Enzyme activity, growth hormone
- **Manganese (Mn)** - Photosynthesis, enzyme function
- **Boron (B)** - Cell wall formation, flowering
- **Copper (Cu)** - Enzyme function, disease resistance
- **Molybdenum (Mo)** - Nitrogen metabolism, enzyme function

---

## 🔧 Technology Stack

- **Frontend**: React 18
- **Styling**: Inline CSS with professional design system
- **Icons**: Lucide React
- **Image Processing**: Canvas API (browser-based)
- **State Management**: React Hooks (useState, useRef)
- **Data**: JavaScript objects and arrays

---

## 💾 Data Structure

### Nutrient Database (`nutrients.js`)

Each nutrient object contains:

```javascript
{
  id: "nitrogen",
  name: "Nitrogen",
  symbol: "N",
  color: "#FFEB3B",
  importance: "...",
  visualSymptoms: { ... },
  symptoms: [ ... ],
  severity: {
    mild: { ... },
    moderate: { ... },
    severe: { ... }
  },
  treatments: {
    fertilizer: [ ... ],
    organic: [ ... ]
  },
  preventionTips: [ ... ]
}
```

---

## 📊 Photo Analysis Algorithm

1. User uploads image of plant leaf
2. Image resized to 200×200 pixels
3. Color analysis examines RGB values:
   - **Yellow pixels** (R>150, G>150, B<100) → Nitrogen deficiency
   - **Brown pixels** (R>G>B) → Potassium deficiency
   - **High red ratio** → Phosphorus deficiency
   - **Low blue values** → Iron deficiency
4. Percentage calculation determines confidence score
5. Confidence mapped to severity (Mild/Moderate/Severe)

---

## ✅ Features by Page

### Home Page
- Welcome screen with app description
- Two method cards (Photo vs Checklist)
- About section explaining the tool

### Photo Analysis Page
- Plant type selector (40+ options)
- Image upload with preview
- Analyze button with loading state
- Professional form layout

### Symptom Checklist Page
- Step-by-step guidance
- Plant selector
- Multi-select symptoms organized by nutrient
- Counter showing selections
- Diagnose button

### Results Page
- Gradient header with deficiency name
- Severity badge (color-coded)
- Confidence score (if from photo)
- Structured treatment plan:
  - Fertilizer type
  - Dosage
  - Application frequency
  - Application method
  - Recovery timeline
- Secondary deficiency warning (if applicable)
- Action buttons for next steps

---

## 🎨 Design Features

- **Color Scheme**: Professional green & blue (agriculture-focused)
- **Typography**: Proper font hierarchy and spacing
- **Components**: Card-based layout with shadows and hover effects
- **Responsive**: Mobile-friendly design
- **Accessibility**: Clear labels and high contrast

---

## 📈 How It Works

### Photo Path Logic
```
Upload Image → Analyze Colors → Match to Nutrient 
→ Calculate Confidence → Assign Severity → Show Results
```

### Checklist Path Logic
```
Select Plant → Check Symptoms → Match Symptoms to Nutrients 
→ Score Matches → Assign Severity → Show Results
```

---

## 💡 Tips for Users

### Best Practices for Photo Analysis
- Use clear, well-lit photos
- Focus on the affected leaf
- Capture multiple leaves if possible
- Take photos during daytime
- Avoid shadows

### Best Practices for Symptom Checklist
- Be thorough in symptom selection
- Check all visible symptoms
- Select at least one symptom for accurate diagnosis
- Use multiple symptoms for better accuracy

---

## 🚧 Future Enhancements

- Multi-language support (Hindi, regional languages)
- Save and history of diagnoses
- Offline capability with service workers
- Custom fertilizer cost calculator
- Integration with soil testing databases
- Camera capture for mobile
- Share results feature
- PDF report generation

---

## 📞 Support

For issues or improvements:
1. Check the symptom descriptions in the database
2. Verify plant selection is correct
3. Try the alternative diagnostic method
4. Review treatment options for your specific plant

---

## 📄 License

Community Service Project - Free to use for educational and agricultural purposes.

---

**PlantDoc** - Helping farmers and gardeners maintain healthy plants through science-based nutrient diagnosis.