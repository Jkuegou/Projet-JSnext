export const fitnessCalculations = {
  // Calcul de l'IMC
  calculateBMI: (weight, height) => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  },

  // Catégorie IMC
  getBMICategory: (bmi) => {
    if (bmi < 18.5) return 'Insuffisance pondérale';
    if (bmi < 25) return 'Poids normal';
    if (bmi < 30) return 'Surpoids';
    return 'Obésité';
  },

  // Calcul du métabolisme de base (formule de Harris-Benedict)
  calculateBMR: (weight, height, age, gender) => {
    if (gender === 'homme') {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  },

  // Calcul des calories quotidiennes selon le niveau d'activité
  calculateDailyCalories: (bmr, activityLevel) => {
    const activityMultipliers = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extremely_active: 1.9
    };
    return bmr * (activityMultipliers[activityLevel] || 1.2);
  },

  // Calcul du poids idéal (formule de Lorentz)
  calculateIdealWeight: (height, gender) => {
    if (gender === 'homme') {
      return height - 100 - ((height - 150) / 4);
    } else {
      return height - 100 - ((height - 150) / 2.5);
    }
  },

  // Calcul du pourcentage de graisse corporelle (approximatif)
  estimateBodyFat: (bmi, age, gender) => {
    if (gender === 'homme') {
      return (1.20 * bmi) + (0.23 * age) - 16.2;
    } else {
      return (1.20 * bmi) + (0.23 * age) - 5.4;
    }
  },

  // Conversion d'unités
  conversions: {
    kgToLbs: (kg) => kg * 2.20462,
    lbsToKg: (lbs) => lbs / 2.20462,
    cmToFeet: (cm) => cm / 30.48,
    feetToCm: (feet) => feet * 30.48,
    cmToInches: (cm) => cm / 2.54,
    inchesToCm: (inches) => inches * 2.54
  }
};