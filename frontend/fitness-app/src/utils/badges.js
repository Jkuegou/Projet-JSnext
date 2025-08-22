export const badges = [
  { id: 1, name: "Nouveau Champion", condition: (stats) => stats.workouts >= 1 },
  { id: 2, name: "3 Jours Consécutifs", condition: (stats) => stats.streak >= 3 },
  { id: 3, name: "100 Km cumulés", condition: (stats) => stats.distance >= 100 }
];

export function getUnlockedBadges(stats) {
  return badges.filter(badge => badge.condition(stats));
}
