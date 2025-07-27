import React, { useState, useEffect } from 'react';
import './Nutrition.css';

const Nutrition = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [dailyStats, setDailyStats] = useState({
    calories: 1450,
    protein: 85,
    carbs: 180,
    fat: 65,
    water: 6,
    caloriesGoal: 2000,
    proteinGoal: 120,
    carbsGoal: 250,
    fatGoal: 70,
    waterGoal: 8
  });

  const [meals, setMeals] = useState([
    {
      id: 1,
      type: 'breakfast',
      name: 'Breakfast',
      icon: 'fas fa-coffee',
      foods: [
        { name: 'Oatmeal with berries', calories: 320, protein: 12, carbs: 55, fat: 8 },
        { name: 'Greek yogurt', calories: 150, protein: 15, carbs: 8, fat: 8 },
        { name: 'Orange juice', calories: 80, protein: 1, carbs: 20, fat: 0 }
      ]
    },
    {
      id: 2,
      type: 'lunch',
      name: 'Lunch',
      icon: 'fas fa-utensils',
      foods: [
        { name: 'Grilled chicken salad', calories: 380, protein: 35, carbs: 15, fat: 18 },
        { name: 'Quinoa', calories: 160, protein: 6, carbs: 30, fat: 3 },
        { name: 'Avocado', calories: 120, protein: 2, carbs: 6, fat: 11 }
      ]
    },
    {
      id: 3,
      type: 'dinner',
      name: 'Dinner',
      icon: 'fas fa-moon',
      foods: [
        { name: 'Salmon fillet', calories: 240, protein: 25, carbs: 0, fat: 15 }
      ]
    },
    {
      id: 4,
      type: 'snacks',
      name: 'Snacks',
      icon: 'fas fa-cookie-bite',
      foods: []
    }
  ]);

  const [foodSearch, setFoodSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  const [showAddFood, setShowAddFood] = useState(false);

  const [nutritionTips, setNutritionTips] = useState([
    {
      id: 1,
      title: 'Hydration is Key',
      content: 'Drink at least 8 glasses of water daily for optimal performance and recovery.',
      category: 'hydration'
    },
    {
      id: 2,
      title: 'Protein Timing',
      content: 'Consume protein within 30 minutes after your workout for better muscle recovery.',
      category: 'protein'
    },
    {
      id: 3,
      title: 'Meal Prep Success',
      content: 'Prepare your meals in advance to maintain consistent nutrition throughout the week.',
      category: 'planning'
    }
  ]);

  const [waterIntake, setWaterIntake] = useState(6);
  const [mealPlan, setMealPlan] = useState([
    { day: 'Monday', breakfast: 'Oatmeal Bowl', lunch: 'Chicken Salad', dinner: 'Grilled Salmon' },
    { day: 'Tuesday', breakfast: 'Smoothie Bowl', lunch: 'Turkey Wrap', dinner: 'Beef Stir-fry' },
    { day: 'Wednesday', breakfast: 'Greek Yogurt', lunch: 'Quinoa Bowl', dinner: 'Pasta Primavera' },
    { day: 'Thursday', breakfast: 'Avocado Toast', lunch: 'Sushi Bowl', dinner: 'Chicken Curry' },
    { day: 'Friday', breakfast: 'Protein Pancakes', lunch: 'Buddha Bowl', dinner: 'Fish Tacos' },
    { day: 'Saturday', breakfast: 'Eggs Benedict', lunch: 'Caesar Salad', dinner: 'Pizza Night' },
    { day: 'Sunday', breakfast: 'French Toast', lunch: 'Soup & Sandwich', dinner: 'Roast Chicken' }
  ]);

  const foodDatabase = [
    { name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0 },
    { name: 'Apple', calories: 95, protein: 0, carbs: 25, fat: 0 },
    { name: 'Chicken breast', calories: 165, protein: 31, carbs: 0, fat: 4 },
    { name: 'Brown rice', calories: 216, protein: 5, carbs: 45, fat: 2 },
    { name: 'Almonds', calories: 160, protein: 6, carbs: 6, fat: 14 },
    { name: 'Broccoli', calories: 55, protein: 4, carbs: 11, fat: 1 },
    { name: 'Sweet potato', calories: 112, protein: 2, carbs: 26, fat: 0 },
    { name: 'Tuna', calories: 154, protein: 25, carbs: 0, fat: 5 }
  ];

  const handleFoodSearch = (query) => {
    setFoodSearch(query);
    if (query.length > 2) {
      const results = foodDatabase.filter(food => 
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const addFoodToMeal = (food) => {
    setMeals(meals.map(meal => 
      meal.type === selectedMeal 
        ? { ...meal, foods: [...meal.foods, food] }
        : meal
    ));
    setFoodSearch('');
    setSearchResults([]);
    setShowAddFood(false);
    updateDailyStats();
  };

  const removeFoodFromMeal = (mealType, foodIndex) => {
    setMeals(meals.map(meal => 
      meal.type === mealType 
        ? { ...meal, foods: meal.foods.filter((_, index) => index !== foodIndex) }
        : meal
    ));
    updateDailyStats();
  };

  const updateDailyStats = () => {
    const totalCalories = meals.reduce((total, meal) => 
      total + meal.foods.reduce((mealTotal, food) => mealTotal + food.calories, 0), 0
    );
    const totalProtein = meals.reduce((total, meal) => 
      total + meal.foods.reduce((mealTotal, food) => mealTotal + food.protein, 0), 0
    );
    const totalCarbs = meals.reduce((total, meal) => 
      total + meal.foods.reduce((mealTotal, food) => mealTotal + food.carbs, 0), 0
    );
    const totalFat = meals.reduce((total, meal) => 
      total + meal.foods.reduce((mealTotal, food) => mealTotal + food.fat, 0), 0
    );

    setDailyStats(prev => ({
      ...prev,
      calories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fat: totalFat
    }));
  };

  const addWater = () => {
    if (waterIntake < dailyStats.waterGoal) {
      setWaterIntake(waterIntake + 1);
    }
  };

  const getMacroPercentage = (current, goal) => {
    return Math.min((current / goal) * 100, 100);
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'success';
    if (percentage >= 70) return 'warning';
    return 'primary';
  };

  return (
    <div className="nutrition-container">
      <div className="nutrition-header">
        <h2>Nutrition</h2>
        <p className="text-muted">Track your daily nutrition and reach your goals</p>
      </div>

      <div className="row">
        {/* Daily Overview */}
        <div className="col-md-8">
          {/* Date Selector */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Daily Overview</h5>
                <input 
                  type="date" 
                  className="form-control date-picker"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Macro Stats */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card macro-card calories">
                <div className="card-body text-center">
                  <i className="fas fa-fire macro-icon"></i>
                  <h3 className="macro-value">{dailyStats.calories}</h3>
                  <p className="macro-label">Calories</p>
                  <small className="text-muted">Goal: {dailyStats.caloriesGoal}</small>
                  <div className="progress mt-2">
                    <div 
                      className="progress-bar bg-primary" 
                      style={{width: `${getMacroPercentage(dailyStats.calories, dailyStats.caloriesGoal)}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card macro-card protein">
                <div className="card-body text-center">
                  <i className="fas fa-drumstick-bite macro-icon"></i>
                  <h3 className="macro-value">{dailyStats.protein}g</h3>
                  <p className="macro-label">Protein</p>
                  <small className="text-muted">Goal: {dailyStats.proteinGoal}g</small>
                  <div className="progress mt-2">
                    <div 
                      className="progress-bar bg-success" 
                      style={{width: `${getMacroPercentage(dailyStats.protein, dailyStats.proteinGoal)}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card macro-card carbs">
                <div className="card-body text-center">
                  <i className="fas fa-bread-slice macro-icon"></i>
                  <h3 className="macro-value">{dailyStats.carbs}g</h3>
                  <p className="macro-label">Carbs</p>
                  <small className="text-muted">Goal: {dailyStats.carbsGoal}g</small>
                  <div className="progress mt-2">
                    <div 
                      className="progress-bar bg-warning" 
                      style={{width: `${getMacroPercentage(dailyStats.carbs, dailyStats.carbsGoal)}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card macro-card fat">
                <div className="card-body text-center">
                  <i className="fas fa-cheese macro-icon"></i>
                  <h3 className="macro-value">{dailyStats.fat}g</h3>
                  <p className="macro-label">Fat</p>
                  <small className="text-muted">Goal: {dailyStats.fatGoal}g</small>
                  <div className="progress mt-2">
                    <div 
                      className="progress-bar bg-info" 
                      style={{width: `${getMacroPercentage(dailyStats.fat, dailyStats.fatGoal)}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meals */}
          <div className="meals-section">
            {meals.map(meal => (
              <div key={meal.id} className="card mb-4 meal-card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <i className={`${meal.icon} me-2 text-primary`}></i>
                    <h5 className="mb-0">{meal.name}</h5>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => {
                      setSelectedMeal(meal.type);
                      setShowAddFood(true);
                    }}
                  >
                    <i className="fas fa-plus me-1"></i>Add Food
                  </button>
                </div>
                <div className="card-body">
                  {meal.foods.length === 0 ? (
                    <p className="text-muted text-center">No foods added yet</p>
                  ) : (
                    <div className="foods-list">
                      {meal.foods.map((food, index) => (
                        <div key={index} className="food-item d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-0">{food.name}</h6>
                            <small className="text-muted">
                              {food.calories} cal | {food.protein}g protein | {food.carbs}g carbs | {food.fat}g fat
                            </small>
                          </div>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFoodFromMeal(meal.type, index)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          {/* Water Intake */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Water Intake</h5>
            </div>
            <div className="card-body text-center">
              <div className="water-tracker">
                <div className="water-glasses">
                  {[...Array(dailyStats.waterGoal)].map((_, index) => (
                    <div 
                      key={index} 
                      className={`water-glass ${index < waterIntake ? 'filled' : ''}`}
                      onClick={() => setWaterIntake(index + 1)}
                    >
                      <i className="fas fa-glass-water"></i>
                    </div>
                  ))}
                </div>
                <p className="mt-3">{waterIntake} / {dailyStats.waterGoal} glasses</p>
                <button 
                  className="btn btn-primary"
                  onClick={addWater}
                  disabled={waterIntake >= dailyStats.waterGoal}
                >
                  <i className="fas fa-plus me-1"></i>Add Glass
                </button>
              </div>
            </div>
          </div>

          {/* Nutrition Tips */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Nutrition Tips</h5>
            </div>
            <div className="card-body">
              {nutritionTips.map(tip => (
                <div key={tip.id} className="tip-item mb-3">
                  <h6 className="tip-title">{tip.title}</h6>
                  <p className="tip-content">{tip.content}</p>
                  <span className={`badge bg-${tip.category === 'hydration' ? 'info' : tip.category === 'protein' ? 'success' : 'warning'}`}>
                    {tip.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Meal Plan */}
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Weekly Meal Plan</h5>
            </div>
            <div className="card-body">
              <div className="meal-plan">
                {mealPlan.map((day, index) => (
                  <div key={index} className="day-plan mb-3">
                    <h6 className="day-title">{day.day}</h6>
                    <div className="day-meals">
                      <small className="d-block text-muted">
                        <i className="fas fa-coffee me-1"></i>{day.breakfast}
                      </small>
                      <small className="d-block text-muted">
                        <i className="fas fa-utensils me-1"></i>{day.lunch}
                      </small>
                      <small className="d-block text-muted">
                        <i className="fas fa-moon me-1"></i>{day.dinner}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Food Modal */}
      {showAddFood && (
        <div className="modal-overlay" onClick={() => setShowAddFood(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5>Add Food to {meals.find(m => m.type === selectedMeal)?.name}</h5>
              <button 
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setShowAddFood(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="search-section">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for food..."
                  value={foodSearch}
                  onChange={(e) => handleFoodSearch(e.target.value)}
                />
                {searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map((food, index) => (
                      <div 
                        key={index} 
                        className="search-result-item"
                        onClick={() => addFoodToMeal(food)}
                      >
                        <div>
                          <h6>{food.name}</h6>
                          <small className="text-muted">
                            {food.calories} cal | {food.protein}g protein | {food.carbs}g carbs | {food.fat}g fat
                          </small>
                        </div>
                        <button className="btn btn-sm btn-primary">
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nutrition;