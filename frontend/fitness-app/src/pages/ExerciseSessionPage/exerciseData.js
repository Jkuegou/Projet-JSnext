// // exerciseData.js - Mock database for workout exercises

// const workoutsData = [
//   {
//     id: 1,
//     name: "Full Body HIIT",
//     duration: "15 minutes",
//     difficulty: "Intermediate",
//     tasks: [
//       {
//         id: 1,
//         name: "Jumping Jacks",
//         description: "Stand with feet together, jump while spreading legs and raising arms overhead, then return to starting position. Keep your core engaged and land softly on your toes.",
//         videoUrl: "./videos/1.mp4",
//         // videoUrl: "https://example.com/videos/jumping-jacks.mp4",
//         time: 30
//       },
//       {
//         id: 2,
//         name: "Push-ups",
//         description: "Start in plank position, lower your body until chest nearly touches floor, then push back up. Keep your body in a straight line throughout the movement. Modify by dropping to knees if needed.",
//         videoUrl: "https://example.com/videos/pushups.mp4",
//         time: 45
//       },
//       {
//         id: 3,
//         name: "Mountain Climbers",
//         description: "Start in plank position, alternate bringing knees to chest rapidly while maintaining plank position. Keep your core tight and avoid letting hips pike up or sag down.",
//         videoUrl: "https://example.com/videos/mountain-climbers.mp4",
//         time: 30
//       },
//       {
//         id: 4,
//         name: "Bodyweight Squats",
//         description: "Stand with feet shoulder-width apart, lower your body as if sitting back into a chair, then return to standing. Keep your chest up, knees behind toes, and weight in your heels.",
//         videoUrl: "https://example.com/videos/squats.mp4",
//         time: 40
//       },
//       {
//         id: 5,
//         name: "Plank Hold",
//         description: "Hold a plank position with forearms on ground and body in straight line from head to heels. Keep your core engaged and avoid letting hips sag or pike up. Breathe steadily.",
//         videoUrl: "https://example.com/videos/plank.mp4",
//         time: 60
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: "Core Strength",
//     duration: "12 minutes",
//     difficulty: "Beginner",
//     tasks: [
//       {
//         id: 6,
//         name: "Crunches",
//         description: "Lie on your back with knees bent, hands behind head. Lift shoulders off ground by contracting abs, then lower slowly. Don't pull on your neck.",
//         videoUrl: "https://example.com/videos/crunches.mp4",
//         time: 45
//       },
//       {
//         id: 7,
//         name: "Bicycle Crunches",
//         description: "Lie on back, hands behind head. Bring opposite elbow to knee while extending other leg. Alternate sides in a pedaling motion while keeping core engaged.",
//         videoUrl: "https://example.com/videos/bicycle-crunches.mp4",
//         time: 40
//       },
//       {
//         id: 8,
//         name: "Dead Bug",
//         description: "Lie on back with arms up and knees bent at 90 degrees. Lower opposite arm and leg slowly while keeping lower back pressed to floor. Return to start and repeat other side.",
//         videoUrl: "https://example.com/videos/dead-bug.mp4",
//         time: 50
//       },
//       {
//         id: 9,
//         name: "Side Plank (Right)",
//         description: "Lie on right side, prop up on forearm with elbow under shoulder. Lift hips to create straight line from head to feet. Hold position while breathing normally.",
//         videoUrl: "https://example.com/videos/side-plank.mp4",
//         time: 30
//       },
//       {
//         id: 10,
//         name: "Side Plank (Left)",
//         description: "Lie on left side, prop up on forearm with elbow under shoulder. Lift hips to create straight line from head to feet. Hold position while breathing normally.",
//         videoUrl: "https://example.com/videos/side-plank-left.mp4",
//         time: 30
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: "Upper Body Power",
//     duration: "18 minutes",
//     difficulty: "Advanced",
//     tasks: [
//       {
//         id: 11,
//         name: "Burpees",
//         description: "Start standing, squat down and place hands on floor, jump feet back to plank, do a push-up, jump feet forward, then jump up with arms overhead. Maintain good form throughout.",
//         videoUrl: "https://example.com/videos/burpees.mp4",
//         time: 40
//       },
//       {
//         id: 12,
//         name: "Pike Push-ups",
//         description: "Start in downward dog position, lower head toward hands by bending elbows, then push back up. This targets shoulders and upper chest more than regular push-ups.",
//         videoUrl: "https://example.com/videos/pike-pushups.mp4",
//         time: 35
//       },
//       {
//         id: 13,
//         name: "Tricep Dips",
//         description: "Sit on edge of chair or bench, hands gripping edge. Lower body by bending elbows, then push back up. Keep elbows close to body and core engaged throughout movement.",
//         videoUrl: "https://example.com/videos/tricep-dips.mp4",
//         time: 45
//       },
//       {
//         id: 14,
//         name: "Diamond Push-ups",
//         description: "Start in push-up position but make a diamond shape with hands by touching thumbs and index fingers. Lower chest toward hands, then push up. Great for triceps.",
//         videoUrl: "https://example.com/videos/diamond-pushups.mp4",
//         time: 30
//       },
//       {
//         id: 15,
//         name: "Bear Crawl",
//         description: "Start on hands and knees with knees hovering just off ground. Crawl forward by moving opposite hand and foot together. Keep hips level and core tight throughout.",
//         videoUrl: "https://example.com/videos/bear-crawl.mp4",
//         time: 50
//       }
//     ]
//   }
// ];

// // Helper functions to interact with the data
// export const getAllWorkouts = () => {
//   return workoutsData;
// };

// export const getWorkoutById = (id) => {
//   return workoutsData.find(workout => workout.id === id);
// };

// export const getWorkoutByName = (name) => {
//   return workoutsData.find(workout => workout.name.toLowerCase() === name.toLowerCase());
// };

// export const getTotalWorkouts = () => {
//   return workoutsData.length;
// };

// export const getWorkoutDuration = (workoutId) => {
//   const workout = getWorkoutById(workoutId);
//   if (!workout) return 0;
  
//   return workout.tasks.reduce((total, task) => total + task.time, 0);
// };

// // Default export
// export default workoutsData;

// exerciseData.js - Mock database for workout exercises

const workoutsData = [
  {
    id: 1,
    name: "Full Body HIIT",
    duration: "15 minutes",
    difficulty: "Intermediate",
    tasks: [
      {
        id: 1,
        name: "Jumping Jacks",
        description: "Stand with feet together, jump while spreading legs and raising arms overhead, then return to starting position. Keep your core engaged and land softly on your toes.",
        videoUrl: "/videos/Jumping-Jack.mp4", // ✅ Chemin corrigé
        //  videoUrl: "Jumping-Jacks",
        time: 30
      },
      {
        id: 2,
        name: "Push-ups",
        description: "Start in plank position, lower your body until chest nearly touches floor, then push back up. Keep your body in a straight line throughout the movement. Modify by dropping to knees if needed.",
        videoUrl: "/videos/push-ups.mp4", // ✅ Chemin corrigé
        time: 45
      },
      {
        id: 3,
        name: "Mountain Climbers",
        description: "Start in plank position, alternate bringing knees to chest rapidly while maintaining plank position. Keep your core tight and avoid letting hips pike up or sag down.",
        videoUrl: "/videos/mountain-climbers.mp4", // ✅ Chemin corrigé
        time: 30
      },
      {
        id: 4,
        name: "Bodyweight Squats",
        description: "Stand with feet shoulder-width apart, lower your body as if sitting back into a chair, then return to standing. Keep your chest up, knees behind toes, and weight in your heels.",
        videoUrl: "/videos/Bodyweight-Squats.mp4", // ✅ Chemin corrigé
        time: 40
      },
      {
        id: 5,
        name: "Plank Hold",
        description: "Hold a plank position with forearms on ground and body in straight line from head to heels. Keep your core engaged and avoid letting hips sag or pike up. Breathe steadily.",
        videoUrl: "/videos/Plank-Hold.mp4", // ✅ Chemin corrigé
        time: 60
      }
    ]
  },
  {
    id: 2,
    name: "Core Strength",
    duration: "12 minutes",
    difficulty: "Beginner",
    tasks: [
      {
        id: 6,
        name: "Crunches",
        description: "Lie on your back with knees bent, hands behind head. Lift shoulders off ground by contracting abs, then lower slowly. Don't pull on your neck.",
        videoUrl: "/videos/crunches.mp4", // ✅ Chemin corrigé
        time: 45
      },
      {
        id: 7,
        name: "Bicycle Crunches",
        description: "Lie on back, hands behind head. Bring opposite elbow to knee while extending other leg. Alternate sides in a pedaling motion while keeping core engaged.",
        videoUrl: "/videos/bicycle-crunches.mp4", // ✅ Chemin corrigé
        time: 40
      },
      {
        id: 8,
        name: "Dead Bug",
        description: "Lie on back with arms up and knees bent at 90 degrees. Lower opposite arm and leg slowly while keeping lower back pressed to floor. Return to start and repeat other side.",
        videoUrl: "/videos/dead-bug.mp4", // ✅ Chemin corrigé
        time: 50
      },
      {
        id: 9,
        name: "Side Plank (Right)",
        description: "Lie on right side, prop up on forearm with elbow under shoulder. Lift hips to create straight line from head to feet. Hold position while breathing normally.",
        videoUrl: "/videos/side-plank.mp4", // ✅ Chemin corrigé
        time: 30
      },
      {
        id: 10,
        name: "Side Plank (Left)",
        description: "Lie on left side, prop up on forearm with elbow under shoulder. Lift hips to create straight line from head to feet. Hold position while breathing normally.",
        videoUrl: "/videos/side-plank-left.mp4", // ✅ Chemin corrigé
        time: 30
      }
    ]
  },
  {
    id: 3,
    name: "Upper Body Power",
    duration: "18 minutes",
    difficulty: "Advanced",
    tasks: [
      {
        id: 11,
        name: "Burpees",
        description: "Start standing, squat down and place hands on floor, jump feet back to plank, do a push-up, jump feet forward, then jump up with arms overhead. Maintain good form throughout.",
        videoUrl: "/videos/burpees.mp4", // ✅ Chemin corrigé
        time: 40
      },
      {
        id: 12,
        name: "Pike Push-ups",
        description: "Start in downward dog position, lower head toward hands by bending elbows, then push back up. This targets shoulders and upper chest more than regular push-ups.",
        videoUrl: "/videos/pike-pushups.mp4", // ✅ Chemin corrigé
        time: 35
      },
      {
        id: 13,
        name: "Tricep Dips",
        description: "Sit on edge of chair or bench, hands gripping edge. Lower body by bending elbows, then push back up. Keep elbows close to body and core engaged throughout movement.",
        videoUrl: "/videos/tricep-dips.mp4", // ✅ Chemin corrigé
        time: 45
      },
      {
        id: 14,
        name: "Diamond Push-ups",
        description: "Start in push-up position but make a diamond shape with hands by touching thumbs and index fingers. Lower chest toward hands, then push up. Great for triceps.",
        videoUrl: "/videos/diamond-pushups.mp4", // ✅ Chemin corrigé
        time: 30
      },
      {
        id: 15,
        name: "Bear Crawl",
        description: "Start on hands and knees with knees hovering just off ground. Crawl forward by moving opposite hand and foot together. Keep hips level and core tight throughout.",
        videoUrl: "/videos/bear-crawl.mp4", // ✅ Chemin corrigé
        time: 50
      }
    ]
  }
];

// Helper functions to interact with the data
export const getAllWorkouts = () => {
  return workoutsData;
};

export const getWorkoutById = (id) => {
  return workoutsData.find(workout => workout.id === id);
};

export const getWorkoutByName = (name) => {
  return workoutsData.find(workout => workout.name.toLowerCase() === name.toLowerCase());
};

export const getTotalWorkouts = () => {
  return workoutsData.length;
};

export const getWorkoutDuration = (workoutId) => {
  const workout = getWorkoutById(workoutId);
  if (!workout) return 0;
  
  return workout.tasks.reduce((total, task) => total + task.time, 0);
};

// Default export
export default workoutsData;