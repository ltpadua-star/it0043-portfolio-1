const defaultStorage = {
    theme: 'light',
    visitorName: '',
    lastVisit:null,
};

const SETTINGS_KEY = 'portfolioSettings';

function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));}

const settings = {
    theme: "dark",
    visitorName: "Lia",
    lastVisit: new Date().toISOString(),
};

saveSettings(settings);

localStorage.setItem('portfolioSettings', JSON.stringify(settings));

function loadSettings() {
  try {
    const savedSettings = localStorage.getItem(SETTINGS_KEY);

    if (!savedSettings) {
      return defaultSettings;
    }

    return {
      ...defaultSettings,
      ...JSON.parse(savedSettings)
    };
  } catch (error) {
    console.log("Saved settings are corrupted.");
    return defaultSettings;
  }
}

const nameInput = document.querySelector("#visitorName");
const saveNameButton = document.querySelector("#saveNameButton");
const welcomeMessage = document.querySelector("#welcomeMessage");

if (settings.visitorName !== "") {
  nameInput.value = settings.visitorName;
  welcomeMessage.textContent =
    `Welcome back, ${settings.visitorName}!`;
}

saveNameButton.addEventListener("click", function () {
  settings.visitorName = nameInput.value;
  saveSettings(settings);

  welcomeMessage.textContent =
    `Welcome, ${settings.visitorName}!`;
});


