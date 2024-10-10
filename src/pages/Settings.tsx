import React, { useState } from 'react';

const Settings = () => {
  const [voiceLanguage, setVoiceLanguage] = useState('en-US');
  const [characterName, setCharacterName] = useState('');
  const [exhibitName, setExhibitName] = useState('');
  const [exhibitFile, setExhibitFile] = useState<File | null>(null);

  // Mock data for current settings
  const currentSettings = {
    availableLanguages: ['English', 'Danish', 'German', 'Swedish', 'Norwegian'],
    appColors: {
      primary: '#3B82F6',
      secondary: '#10B981',
      accent: '#F59E0B',
    },
    characters: ['Hans Christian Andersen', 'Queen Margrethe II', 'Niels Bohr', 'Karen Blixen'],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings updated:', { voiceLanguage, characterName });
    alert('Settings updated successfully!');
  };

  const handleExhibitUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (exhibitFile) {
      console.log('Exhibit uploaded:', { name: exhibitName, file: exhibitFile });
      alert('Exhibit uploaded successfully!');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Settings</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Available Languages</h3>
              <p>{currentSettings.availableLanguages.length} languages</p>
              <ul className="list-disc list-inside">
                {currentSettings.availableLanguages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">App Colors</h3>
              <div className="space-y-2">
                {Object.entries(currentSettings.appColors).map(([name, color]) => (
                  <div key={name} className="flex items-center">
                    <div
                      className="w-6 h-6 rounded-full mr-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="capitalize">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Guide Settings</h2>
            <div className="mb-4">
              <label htmlFor="voiceLanguage" className="block text-sm font-medium text-gray-700">
                Guide Voice Language
              </label>
              <select
                id="voiceLanguage"
                value={voiceLanguage}
                onChange={(e) => setVoiceLanguage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="en-US">English (US)</option>
                <option value="da-DK">Danish</option>
                <option value="de-DE">German</option>
                <option value="sv-SE">Swedish</option>
                <option value="nb-NO">Norwegian</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="characterName" className="block text-sm font-medium text-gray-700">
                Guide Character Name
              </label>
              <input
                type="text"
                id="characterName"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="e.g. Hans Christian Andersen"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Settings
            </button>
          </form>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Current Characters</h3>
            <ul className="list-disc list-inside">
              {currentSettings.characters.map((character, index) => (
                <li key={index}>{character}</li>
              ))}
            </ul>
          </div>
        </div>

        <form onSubmit={handleExhibitUpload} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">New Exhibit Upload</h2>
          <div className="mb-4">
            <label htmlFor="exhibitName" className="block text-sm font-medium text-gray-700">
              Exhibit Name
            </label>
            <input
              type="text"
              id="exhibitName"
              value={exhibitName}
              onChange={(e) => setExhibitName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="e.g. Viking Age Artifacts"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exhibitFile" className="block text-sm font-medium text-gray-700">
              Exhibit File (Audio, Image, or Document)
            </label>
            <input
              type="file"
              id="exhibitFile"
              onChange={(e) => setExhibitFile(e.target.files ? e.target.files[0] : null)}
              className="mt-1 block w-full"
              accept=".mp3,.wav,.jpg,.png,.pdf,.doc,.docx"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload Exhibit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;