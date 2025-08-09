    const fs = require('fs');
const path = require('path');

console.log('🔍 === RECHERCHE DES ROUTES MALFORMÉES ===\n');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  // Patterns problématiques à rechercher
  const patterns = [
    // Route avec : seul
    { 
      regex: /router\.(get|post|put|patch|delete)\s*\(\s*['"`]([^'"`]*:\s*['"`])/g, 
      desc: "Route avec ':' seul" 
    },
    // Route avec : suivi d'espace
    { 
      regex: /router\.(get|post|put|patch|delete)\s*\(\s*['"`]([^'"`]*:\s+)/g, 
      desc: "Route avec ': ' (deux points + espace)" 
    },
    // Route avec : en fin
    { 
      regex: /router\.(get|post|put|patch|delete)\s*\(\s*['"`]([^'"`]*:['"`])/g, 
      desc: "Route se terminant par ':'" 
    },
    // Paramètre vide
    { 
      regex: /:\s*[,)]/g, 
      desc: "Paramètre vide après ':'" 
    }
  ];

  let hasIssues = false;
  
  patterns.forEach(({ regex, desc }) => {
    const matches = [...content.matchAll(regex)];
    if (matches.length > 0) {
      if (!hasIssues) {
        console.log(`📁 Fichier: ${fileName}`);
        hasIssues = true;
      }
      
      matches.forEach((match, index) => {
        console.log(`  ❌ ${desc}:`);
        console.log(`     Pattern trouvé: "${match[0]}"`);
        
        // Trouver le numéro de ligne
        const lines = content.substring(0, match.index).split('\n');
        console.log(`     Ligne: ${lines.length}`);
        console.log('');
      });
    }
  });
  
  return hasIssues;
}

function scanDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️ Dossier ${dirPath} introuvable`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  let totalIssues = 0;
  
  files.forEach(file => {
    if (file.endsWith('.js')) {
      const filePath = path.join(dirPath, file);
      if (checkFile(filePath)) {
        totalIssues++;
      }
    }
  });
  
  return totalIssues;
}

// Vérifier les dossiers
const foldersToCheck = ['routes', 'controllers', 'middleware'];
let totalFiles = 0;

foldersToCheck.forEach(folder => {
  console.log(`🔍 Vérification du dossier: ${folder}`);
  const issues = scanDirectory(folder);
  if (issues === 0) {
    console.log(`✅ Aucun problème trouvé dans ${folder}\n`);
  } else {
    totalFiles += issues;
  }
});

if (totalFiles === 0) {
  console.log('🎉 Aucune route malformée trouvée !');
  console.log('Le problème pourrait être ailleurs...');
} else {
  console.log(`🚨 ${totalFiles} fichier(s) avec des routes problématiques trouvé(s)`);
}

console.log('\n=== FIN DE LA RECHERCHE ===');