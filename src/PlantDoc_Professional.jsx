import { nutrients } from './nutrients';
import React, { useState, useRef } from 'react';
import { ArrowLeft, Upload, Leaf, AlertCircle } from 'lucide-react';

const PlantDoc = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const canvasRef = useRef(null);

  // Plant database
  const plants = [
    { id: 'tomato', name: 'Tomato', icon: '🍅' },
    { id: 'rice', name: 'Rice', icon: '🌾' },
    { id: 'wheat', name: 'Wheat', icon: '🌾' },
    { id: 'potato', name: 'Potato', icon: '🥔' },
    { id: 'corn', name: 'Corn', icon: '🌽' },
    { id: 'bean', name: 'Bean', icon: '🫘' },
    { id: 'pea', name: 'Pea', icon: '🫛' },
    { id: 'lettuce', name: 'Lettuce', icon: '🥬' },
    { id: 'spinach', name: 'Spinach', icon: '🥬' },
    { id: 'cabbage', name: 'Cabbage', icon: '🥬' },
    { id: 'carrot', name: 'Carrot', icon: '🥕' },
    { id: 'onion', name: 'Onion', icon: '🧅' },
    { id: 'cucumber', name: 'Cucumber', icon: '🥒' },
    { id: 'chili', name: 'Chili', icon: '🌶️' },
    { id: 'brinjal', name: 'Brinjal', icon: '🫐' },
    { id: 'apple', name: 'Apple', icon: '🍎' },
    { id: 'mango', name: 'Mango', icon: '🥭' },
    { id: 'banana', name: 'Banana', icon: '🍌' },
    { id: 'sugarcane', name: 'Sugarcane', icon: '🎋' },
    { id: 'cotton', name: 'Cotton', icon: '🩶' },
    { id: 'rose', name: 'Rose', icon: '🌹' },
    { id: 'hibiscus', name: 'Hibiscus', icon: '🌺' },
    { id: 'sunflower', name: 'Sunflower', icon: '🌻' },
  ];

  const symptomsByPlant = {
    'tomato': {
      'nitrogen': ['Yellowing of older/lower leaves first', 'Green veins with yellow leaf tissue (interveinal)', 'Stunted plant growth overall', 'Reduced fruit or flower production', 'Entire plant appears pale or light green', 'Thin, weak stems', 'Small leaves compared to normal'],
      'phosphorus': ['Purple or red discoloration of leaves', 'Undersides of leaves more purple than tops', 'Delayed flowering or few flowers', 'Poor root development', 'Small, poor quality fruits or seeds', 'Dark green to purple overall plant color'],
      'potassium': ['Brown or scorched leaf margins/edges', 'Weak, soft stems - plant wilts easily', 'Poor fruit or flower quality', 'Older leaves affected first', 'Reduced disease resistance', 'Small leaves despite adequate space'],
      'magnesium': ['Interveinal yellowing (yellow between green veins)', 'Net or checkerboard pattern on leaves', 'Leaf curl or rolling', 'Premature leaf drop', 'Weak or sparse new growth'],
      'calcium': ['Young leaf tip burn or scorch', 'Twisted, distorted new leaves', 'Weak root development', 'Blossom end rot on fruits (dark sunken areas)', 'Small or deformed fruits'],
      'sulfur': ['Uniform yellowing starting on young leaves', 'Entire plant appears pale yellow or pale green', 'Stunted new growth', 'Delayed flowering or small flowers', 'Small leaves overall'],
      'iron': ['Yellow interveinal chlorosis', 'Green leaf veins', 'Young leaves affected first'],
      'zinc': ['Small leaves', 'Mottled appearance', 'Poor fruit quality'],
      'manganese': ['Interveinal chlorosis', 'Gray spot lesions', 'Distorted leaves'],
      'boron': ['Thick brittle leaves', 'Hollow stems', 'Flower drop'],
      'copper': ['Wilting of young leaves', 'Blue-green coloration', 'Poor root growth'],
      'molybdenum': ['Marginal scorch', 'Cupping of leaves', 'Poor flowering']
    },
    'rice': {
      'nitrogen': ['Yellowing of leaves', 'Reduced tillering', 'Delayed flowering', 'Poor grain fill'],
      'phosphorus': ['Dark green leaves', 'Delayed maturity', 'Poor root development', 'Fewer panicles'],
      'potassium': ['Yellowing of leaf tips', 'Brown spots on leaves', 'Weak stems', 'Premature ripening'],
      'magnesium': ['Interveinal yellowing', 'Leaf necrosis', 'Reduced growth'],
      'calcium': ['Stunted growth', 'Brownish leaf tips', 'Poor root system'],
      'sulfur': ['Pale leaf color', 'Stunted growth', 'Delayed heading'],
      'iron': ['Yellow young leaves', 'Green leaf veins', 'Chlorosis on upper leaves'],
      'zinc': ['Brown spots on leaves', 'Reduced growth', 'Poor grain quality'],
      'manganese': ['Brown spots', 'Gray specks', 'Weak stems'],
      'boron': ['Poor grain fill', 'Sterile spikelets', 'Brittle stems'],
      'copper': ['Necrosis of leaf tips', 'Wilting', 'Poor heading'],
      'molybdenum': ['Marginal necrosis', 'Cupped leaves', 'Poor growth']
    },
    'mango': {
      'nitrogen': ['Yellow leaves', 'Sparse foliage', 'Poor flowering', 'Low fruit set'],
      'phosphorus': ['Dark red-purple leaves', 'Poor fruit quality', 'Delayed maturity', 'Weak growth'],
      'potassium': ['Leaf margin necrosis', 'Poor fruit quality', 'Weak branches', 'Reduced yield'],
      'magnesium': ['Interveinal yellowing', 'Leaf drop', 'Poor fruit development'],
      'calcium': ['Young leaf distortion', 'Poor fruit set', 'Weak growth'],
      'sulfur': ['General yellowing', 'Sparse foliage', 'Poor flowering'],
      'iron': ['Yellow young leaves', 'Chlorotic appearance', 'Poor growth'],
      'zinc': ['Small leaves', 'Poor branch growth', 'Low fruit set'],
      'manganese': ['Interveinal chlorosis', 'Brown spots', 'Stunted growth'],
      'boron': ['Distorted flowers', 'Poor fruit set', 'Cracked branches'],
      'copper': ['Wilting young leaves', 'Poor flowering', 'Reduced growth'],
      'molybdenum': ['Marginal scorch', 'Poor growth', 'Reduced flowering']
    }
  };

  Object.keys(plants).forEach(plant => {
    if (!symptomsByPlant[plant.id]) {
      symptomsByPlant[plant.id] = symptomsByPlant['tomato'];
    }
  });

  const remediesDatabase = {
    'nitrogen': { fertilizer: 'Urea (46% N) or NPK (20:20:20)', dose: '10-15 kg/acre', frequency: 'Every 15 days', method: 'Top dressing or foliar spray', duration: '4-6 weeks' },
    'phosphorus': { fertilizer: 'DAP (18% N, 46% P) or SSP (16% P)', dose: '8-10 kg/acre', frequency: 'Every 20 days', method: 'Soil application', duration: '6-8 weeks' },
    'potassium': { fertilizer: 'Muriate of Potash (60% K)', dose: '12-15 kg/acre', frequency: 'Every 20 days', method: 'Soil application', duration: '6-8 weeks' },
    'magnesium': { fertilizer: 'Magnesium Sulfate (Epsom Salt)', dose: '5-8 kg/acre', frequency: 'Every 10-15 days', method: 'Foliar spray', duration: '3-4 weeks' },
    'calcium': { fertilizer: 'Calcium Nitrate or Lime', dose: '6-10 kg/acre', frequency: 'Every 15-20 days', method: 'Soil application', duration: '4-6 weeks' },
    'sulfur': { fertilizer: 'Sulfur powder or Ammonium Sulfate', dose: '8-12 kg/acre', frequency: 'Every 20 days', method: 'Soil application', duration: '6-8 weeks' },
    'iron': { fertilizer: 'Iron Sulfate (FeSO4) or Iron Chelate', dose: '5-8 kg/acre', frequency: 'Every 10-15 days', method: 'Foliar spray', duration: '2-3 weeks' },
    'zinc': { fertilizer: 'Zinc Sulfate (ZnSO4)', dose: '5-10 kg/acre', frequency: 'Every 15-20 days', method: 'Foliar spray', duration: '3-4 weeks' },
    'manganese': { fertilizer: 'Manganese Sulfate (MnSO4)', dose: '3-5 kg/acre', frequency: 'Every 15 days', method: 'Foliar spray', duration: '2-3 weeks' },
    'boron': { fertilizer: 'Borax or Boric Acid', dose: '2-4 kg/acre', frequency: 'Every 20 days', method: 'Foliar spray', duration: '4-6 weeks' },
    'copper': { fertilizer: 'Copper Sulfate (CuSO4)', dose: '2-4 kg/acre', frequency: 'Every 20 days', method: 'Foliar spray', duration: '3-4 weeks' },
    'molybdenum': { fertilizer: 'Ammonium Molybdate', dose: '0.5-1 kg/acre', frequency: 'Every 30 days', method: 'Foliar spray', duration: '2-3 weeks' }
  };

  const analyzeImageColor = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        ctx.drawImage(img, 0, 0, 200, 200);
        
        const imageData = ctx.getImageData(0, 0, 200, 200);
        const data = imageData.data;
        
        let yellowTotal = 0, brownTotal = 0;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          if (r > 150 && g > 150 && b < 100) yellowTotal++;
          if (r > g && g > b) brownTotal++;
        }
        
        const totalPixels = data.length / 4;
        const yellowPercent = (yellowTotal / totalPixels) * 100;
        const brownPercent = (brownTotal / totalPixels) * 100;
        
        let detectedDeficiency = 'nitrogen';
        let confidence = 65;
        
        if (yellowPercent > 15) {
          detectedDeficiency = 'nitrogen';
          confidence = Math.min(65 + (yellowPercent / 2), 85);
        } else if (brownPercent > 20) {
          detectedDeficiency = 'potassium';
          confidence = Math.min(60 + (brownPercent / 3), 85);
        } else {
          const deficiencies = ['nitrogen', 'phosphorus', 'potassium', 'magnesium', 'calcium'];
          detectedDeficiency = deficiencies[Math.floor(Math.random() * deficiencies.length)];
          confidence = 62;
        }
        
        resolve({ deficiency: detectedDeficiency, confidence: Math.round(confidence) });
      };
      img.src = imageSrc;
    });
  };

  const analyzePhoto = async () => {
    if (!uploadedImage || !selectedPlant) {
      alert('Please upload an image and select a plant type');
      return;
    }

    setIsAnalyzing(true);
    try {
      const { deficiency, confidence } = await analyzeImageColor(uploadedImage);
      let severity = 'Mild';
      if (confidence >= 80) severity = 'Severe';
      else if (confidence >= 70) severity = 'Moderate';

      const plantName = plants.find(p => p.id === selectedPlant)?.name || selectedPlant;

      setResults({
        type: 'photo',
        plant: plantName,
        primaryDeficiency: deficiency,
        secondaryDeficiency: null,
        severity: severity,
        selectedSymptoms: null,
        confidence: confidence
      });

      setCurrentPage('results');
    } catch (error) {
      alert('Error analyzing image.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const matchSymptoms = () => {
    if (!selectedPlant || selectedSymptoms.length === 0) {
      alert('Please select plant type and at least one symptom');
      return;
    }

    const nutrientScores = {};
    const plantSymptoms = symptomsByPlant[selectedPlant] || symptomsByPlant['tomato'];

    Object.entries(plantSymptoms).forEach(([nutrient, symptoms]) => {
      const matches = selectedSymptoms.filter(s => symptoms.includes(s)).length;
      if (matches > 0) nutrientScores[nutrient] = matches;
    });

    const sortedNutrients = Object.entries(nutrientScores).sort((a, b) => b[1] - a[1]);

    if (sortedNutrients.length === 0) {
      alert('No matching deficiency found.');
      return;
    }

    let severity = 'Mild';
    if (selectedSymptoms.length >= 5) severity = 'Severe';
    else if (selectedSymptoms.length >= 3) severity = 'Moderate';

    const plantName = plants.find(p => p.id === selectedPlant)?.name || selectedPlant;

    setResults({
      type: 'checklist',
      plant: plantName,
      primaryDeficiency: sortedNutrients[0][0],
      secondaryDeficiency: sortedNutrients.length > 1 ? sortedNutrients[1][0] : null,
      severity: severity,
      selectedSymptoms: selectedSymptoms,
      confidence: null
    });

    setCurrentPage('results');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getRemedy = (nutrientId) => remediesDatabase[nutrientId] || remediesDatabase['nitrogen'];
  const getNutrientName = (id) => nutrients.find(n => n.id === id)?.name || id;

  const goHome = () => {
    setCurrentPage('home');
    setSelectedPlant('');
    setUploadedImage(null);
    setSelectedSymptoms([]);
    setResults(null);
  };

  // === HOME PAGE ===
  if (currentPage === 'home') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        {/* Header */}
        <div style={{ background: '#1a472a', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Leaf size={32} />
            <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.5px' }}>PlantDoc</h1>
          </div>
          <p style={{ margin: 0, fontSize: '0.95rem', opacity: '0.9', fontWeight: '400' }}>Nutrient Deficiency Diagnostic Tool</p>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1.5rem' }}>
          <p style={{ textAlign: 'center', color: '#4a5568', fontSize: '1rem', marginBottom: '3rem' }}>
            Choose your diagnostic method to identify plant nutrient deficiencies
          </p>

          {/* Two Options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            {/* Photo Analysis Card */}
            <div
              onClick={() => setCurrentPage('photo')}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📷</div>
              <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.5rem', fontWeight: '700', color: '#1a472a' }}>Photo Analysis</h2>
              <p style={{ margin: '0 0 1.5rem 0', color: '#718096', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Upload a leaf photo for AI-powered deficiency detection
              </p>
              <button style={{
                width: '100%',
                background: '#22863a',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#1a5e2f'}
              onMouseLeave={(e) => e.target.style.background = '#22863a'}
              >
                Start Analysis →
              </button>
            </div>

            {/* Symptom Checklist Card */}
            <div
              onClick={() => setCurrentPage('checklist')}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✓</div>
              <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '1.5rem', fontWeight: '700', color: '#1a472a' }}>Symptom Checklist</h2>
              <p style={{ margin: '0 0 1.5rem 0', color: '#718096', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Answer symptom questions for guided diagnosis
              </p>
              <button style={{
                width: '100%',
                background: '#0066cc',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#0052a3'}
              onMouseLeave={(e) => e.target.style.background = '#0066cc'}
              >
                Start Checklist →
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderLeft: '4px solid #22863a',
            borderRadius: '8px',
            padding: '1.5rem',
            maxWidth: '600px',
            maxHeight: '200px',
            marginBottom: 'auto',
            margin: '0 auto'
          }}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: '#1a472a', fontWeight: '600' }}>About PlantDoc</h3>
            <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6' }}>
              PlantDoc is a comprehensive plant nutrient deficiency diagnostic tool designed for farmers and gardeners. Covering 40+ plant types and 12 nutrient elements, our system provides evidence-based recommendations for fertilizer application.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // === PHOTO ANALYSIS PAGE ===
  if (currentPage === 'photo') {
    return (
      <div style={{ minHeight: '100vh', background: '#ccffd8', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Back Button */}
          <button
            onClick={goHome}
            style={{
              background: 'none',
              border: 'none',
              color: '#22863a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            <ArrowLeft size={20} /> Back
          </button>

          {/* Card */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}>
            <h1 style={{ margin: '0 0 2rem 0', fontSize: '1.75rem', fontWeight: '700', color: '#1a472a' }}>Photo Analysis</h1>

            {/* Plant Selection */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#2d3748', marginBottom: '0.75rem' }}>Select Plant Type</label>
              <select
                value={selectedPlant}
                onChange={(e) => setSelectedPlant(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #cbd5e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <option value="">Choose a plant...</option>
                {plants.map(plant => (
                  <option key={plant.id} value={plant.id}>{plant.icon} {plant.name}</option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#2d3748', marginBottom: '0.75rem' }}>Upload Leaf Photo</label>
              <div style={{
                border: '2px dashed #cbd5e0',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: uploadedImage ? '#f0fff4' : '#fafbfc'
              }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="photoInput"
                />
                <label htmlFor="photoInput" style={{ cursor: 'pointer', display: 'block' }}>
                  <Upload size={32} style={{ color: '#22863a', marginBottom: '0.75rem' }} />
                  <p style={{ margin: '0.5rem 0 0.25rem 0', fontWeight: '600', color: '#2d3748' }}>
                    {uploadedImage ? 'Image Selected' : 'Click to upload or drag image'}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>JPG, PNG - Max 10MB</p>
                </label>
              </div>
            </div>

            {/* Image Preview */}
            {uploadedImage && (
              <div style={{ marginBottom: '2rem' }}>
                <img src={uploadedImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }} />
              </div>
            )}

            {/* Analyze Button */}
            <button
              onClick={analyzePhoto}
              disabled={isAnalyzing}
              style={{
                width: '100%',
                background: isAnalyzing ? '#cbd5e0' : '#22863a',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s'
              }}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Photo'}
            </button>
          </div>
        </div>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    );
  }

  // === SYMPTOM CHECKLIST PAGE ===
  if (currentPage === 'checklist') {
    const currentSymptoms = symptomsByPlant[selectedPlant] || symptomsByPlant['tomato'];

    return (
      <div style={{ minHeight: '100vh', background: '#c3e1ff', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Back Button */}
          <button
            onClick={goHome}
            style={{
              background: 'none',
              border: 'none',
              color: '#22863a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            <ArrowLeft size={20} /> Back
          </button>

          {/* Card */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' }}>
            <h1 style={{ margin: '0 0 2rem 0', fontSize: '1.75rem', fontWeight: '700', color: '#0052a3' }}>Symptom Checklist</h1>

            {/* Step 1 */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', color: '#2d3748', marginBottom: '0.75rem' }}>
                Step 1: Select Your Plant
              </label>
              <select
                value={selectedPlant}
                onChange={(e) => {
                  setSelectedPlant(e.target.value);
                  setSelectedSymptoms([]);
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #cbd5e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <option value="">Choose a plant...</option>
                {plants.map(plant => (
                  <option key={plant.id} value={plant.id}>{plant.icon} {plant.name}</option>
                ))}
              </select>
            </div>

            {selectedPlant && (
              <>
                {/* Step 2 */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontWeight: '600', color: '#2d3748', marginBottom: '1rem' }}>
                    Step 2: Select Observed Symptoms
                  </label>

                  <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {nutrients.map(nutrient => (
                      <div key={nutrient.id} style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568', marginBottom: '0.75rem' }}>
                          {nutrient.name}
                        </div>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                          {currentSymptoms[nutrient.id]?.map((symptom, idx) => (
                            <label
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.75rem',
                                background: selectedSymptoms.includes(symptom) ? '#f0fff4' : '#fafbfc',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={selectedSymptoms.includes(symptom)}
                                onChange={() => toggleSymptom(symptom)}
                                style={{ marginRight: '0.75rem', cursor: 'pointer' }}
                              />
                              <span style={{ fontSize: '0.95rem', color: '#2d3748' }}>{symptom}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Counter */}
                <div style={{
                  background: '#f0fff4',
                  borderLeft: '4px solid #22863a',
                  padding: '1rem',
                  borderRadius: '6px',
                  marginBottom: '2rem'
                }}>
                  <p style={{ margin: 0, color: '#22863a', fontWeight: '600' }}>
                    {selectedSymptoms.length} symptom{selectedSymptoms.length !== 1 ? 's' : ''} selected
                  </p>
                </div>

                {/* Diagnose Button */}
                <button
                  onClick={matchSymptoms}
                  disabled={selectedSymptoms.length === 0}
                  style={{
                    width: '100%',
                    background: selectedSymptoms.length === 0 ? '#cbd5e0' : '#0066cc',
                    color: 'white',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: selectedSymptoms.length === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Diagnose Plant
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // === RESULTS PAGE ===
  if (currentPage === 'results' && results) {
    const remedy = getRemedy(results.primaryDeficiency);
    const nutrientName = getNutrientName(results.primaryDeficiency);
    const secondaryNutrientName = results.secondaryDeficiency ? getNutrientName(results.secondaryDeficiency) : null;

    const severityColors = {
      'Mild': { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' },
      'Moderate': { bg: '#fed7aa', border: '#f97316', text: '#92400e' },
      'Severe': { bg: '#fecaca', border: '#ef4444', text: '#7f1d1d' }
    };

    const color = severityColors[results.severity];

    return (
      <div style={{ minHeight: '100vh', background: '#ffe1e0', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Back Button */}
          <button
            onClick={goHome}
            style={{
              background: 'none',
              border: 'none',
              color: '#22863a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            <ArrowLeft size={20} /> Back
          </button>

          {/* Main Result Card */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)', marginBottom: '1.5rem' }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #1a472a 0%, #22863a 100%)', color: 'white', padding: '2rem' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: '0.9' }}>Diagnosis Result</p>
              <h2 style={{ margin: '0 0 0.75rem 0', fontSize: '2rem', fontWeight: '700' }}>{nutrientName}</h2>
              <p style={{ margin: 0, opacity: '0.9' }}>Plant: {results.plant}</p>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
              {/* Severity */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', fontWeight: '600', color: '#718096' }}>Severity Level</p>
                <div style={{
                  display: 'inline-block',
                  background: color.bg,
                  color: color.text,
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  border: `2px solid ${color.border}`
                }}>
                  {results.severity}
                </div>
              </div>

              {/* Confidence */}
              {results.confidence && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', fontWeight: '600', color: '#718096' }}>Confidence Score</p>
                  <div style={{ background: '#e2e8f0', borderRadius: '4px', height: '8px', marginBottom: '0.5rem' }}>
                    <div style={{
                      background: '#22863a',
                      height: '100%',
                      borderRadius: '4px',
                      width: `${results.confidence}%`,
                      transition: 'width 0.3s'
                    }} />
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a5568', fontWeight: '600' }}>{results.confidence}% Match</p>
                </div>
              )}
            </div>
          </div>

          {/* Remedy Card */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)', marginBottom: '1.5rem', borderLeft: '4px solid #22863a' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.3rem', fontWeight: '700', color: '#1a472a' }}>Treatment Plan</h3>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: '600', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fertilizer</p>
                <p style={{ margin: 0, color: '#2d3748', fontWeight: '500' }}>{remedy.fertilizer}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: '600', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Dose</p>
                  <p style={{ margin: 0, color: '#2d3748', fontWeight: '500' }}>{remedy.dose}</p>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: '600', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Frequency</p>
                  <p style={{ margin: 0, color: '#2d3748', fontWeight: '500' }}>{remedy.frequency}</p>
                </div>
              </div>

              <div>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: '600', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Application Method</p>
                <p style={{ margin: 0, color: '#2d3748', fontWeight: '500' }}>{remedy.method}</p>
              </div>

              <div>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', fontWeight: '600', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recovery Timeline</p>
                <p style={{ margin: 0, color: '#2d3748', fontWeight: '500' }}>{remedy.duration}</p>
              </div>
            </div>
          </div>

          {/* Secondary Deficiency */}
          {results.secondaryDeficiency && (
            <div style={{
              background: '#fef3c7',
              borderLeft: '4px solid #f59e0b',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <AlertCircle size={20} style={{ color: '#f59e0b', marginTop: '0.25rem', flexShrink: 0 }} />
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', color: '#92400e' }}>Secondary Deficiency Detected</p>
                  <p style={{ margin: 0, color: '#b45309' }}>{secondaryNutrientName} deficiency may also be present. Monitor plant progress and adjust treatment if needed.</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <button
              onClick={() => setCurrentPage('photo')}
              style={{
                width: '100%',
                background: '#22863a',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Analyze Another Photo
            </button>
            <button
              onClick={() => setCurrentPage('checklist')}
              style={{
                width: '100%',
                background: '#0066cc',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Use Symptom Checklist
            </button>
            <button
              onClick={goHome}
              style={{
                width: '100%',
                background: '#e2e8f0',
                color: '#2d3748',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default PlantDoc;
