import React, { useState, useEffect } from 'react';
import './Settings.css';
import axios from 'axios';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [language, setLanguage] = useState('fr');

  const handleSaveSettings = async () => {
  try {
    await axios.put(
      'http://localhost:5000/api/users/settings',
      {
        language,
        darkMode,
        emailNotifications: emailNotif,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      }
    );
    alert('Paramètres enregistrés avec succès');
  } catch (error) {
    console.error('Erreur lors de l’enregistrement des paramètres :', error.message);
    alert('Échec de l’enregistrement des paramètres');
  }
};


  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/settings', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        // Met à jour les states
        setLanguage(res.data.language);
        setDarkMode(res.data.darkMode);
        setEmailNotif(res.data.emailNotifications);
      } catch (error) {
        console.error('Erreur lors du chargement des paramètres :', error.message);
      }
    };

    fetchSettings();
  }, []);

  const handleDeleteAccount = async () => {
  if (window.confirm('Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible.')) {
    try {
      await axios.delete('http://localhost:5000/api/users/delete', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      // Nettoyer le localStorage et rediriger
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      alert('Compte supprimé');
      window.location.href = '/';
    } catch (error) {
      console.error('Erreur lors de la suppression du compte :', error.message);
      alert('Erreur lors de la suppression du compte');
    }
  }
};


  return (
    <div className="settings-container">
      <h2>Paramètres</h2>

      <section className="settings-section">
        <h3>Préférences</h3>
        <div className="settings-row">
          <label>Langue</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="settings-row">
          <label>Mode sombre</label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </section>

      <section className="settings-section">
        <h3>Notifications</h3>
        <div className="settings-row">
          <label>Email</label>
          <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
        </div>
      </section>

      <section className="settings-section">
        <h3>Sécurité</h3>
        <div className="settings-row">
          <label>Mot de passe</label>
          <button className="btn-small">Changer</button>
        </div>
      </section>

      <section className="settings-section danger-zone">
        <h3>Zone dangereuse</h3>
        <button className="btn-danger" onClick={handleDeleteAccount}>
          Supprimer mon compte
        </button>
      </section>
      <div className="form-actions">
  <button className="btn-primary" onClick={handleSaveSettings}>
    Sauvegarder
  </button>
</div>
    </div>
  );
};

export default Settings;
