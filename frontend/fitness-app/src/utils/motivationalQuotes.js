const motivationalQuotes = [
  "Le corps accomplit ce que l'esprit croit.",
  "Chaque entraînement compte, peu importe la taille.",
  "La douleur d'aujourd'hui est la force de demain.",
  "Ne t'arrête pas quand tu es fatigué, arrête-toi quand tu as fini.",
  "La discipline bat la motivation.",
  "Petits progrès chaque jour = grands résultats demain.",
  "Ton seul adversaire, c'est toi-même."
];

export function getRandomQuote() {
  const index = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[index];
}
