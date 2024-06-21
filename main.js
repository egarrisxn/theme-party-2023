//! Sounds & Selectors
// Selecting all checkboxes and radios under .settings
const toggles = document.querySelectorAll(".settings [type='checkbox']");
const radios = document.querySelectorAll(".settings [type='radio']");

// Selecting audio elements
const audioCheck = document.querySelector("#audio-check");
const audioToggle = document.querySelector("#audio-toggle");

// Selecting the document element
const doc = document.documentElement;

// Variable to store whether audio should be played
let isAudioPlayable;

//! Theme Settings
// Array of settings with their default values
const settings = [
  { key: "sound", default: "false" },
  { key: "motion", default: "false" },
  { key: "round", default: "false" },
  { key: "theme", default: "system" },
  { key: "customColor", default: "primary" },
];

//! Functions
// Update UI based on settings
function updateSettingsUi({ name, value }) {
  // For boolean toggles (checkboxes)
  if (value === "true" || value === "false") {
    const checkbox = document.querySelector(`[name="${name}"]`);
    checkbox.checked = value === "true";
  } else {
    // For radio buttons
    const radio = document.querySelector(`#${value}`);
    if (radio) {
      radio.checked = true;
    }
  }
}

// Update site UI (DOM) based on settings
function updateSiteUi({ name, value }) {
  if (name === "customColor") {
    // Setting custom CSS variable for color
    doc.style.setProperty("--customColor", `var(--${value})`);
  } else {
    // Setting data attribute on document element
    doc.dataset[name] = value;
  }
}

// Function to play audio based on type (check or toggle)
function playAudio(type) {
  if (isAudioPlayable) {
    const audioSound = type === "check" ? audioCheck : audioToggle;
    audioSound.currentTime = 0; // Rewind audio to start
    audioSound.play(); // Play the audio
  }
}

//! Event Listeners
// When the window is loaded, initialize settings from localStorage or defaults
window.addEventListener("DOMContentLoaded", () => {
  settings.forEach((setting) => {
    const value = localStorage.getItem(setting.key) ?? setting.default;
    updateSiteUi({ name: setting.key, value });
    updateSettingsUi({ name: setting.key, value });
    // Set audio playability based on sound setting
    if (setting.key === "sound") {
      isAudioPlayable = value === "true";
    }
  });
});

// Event listener for toggle (checkbox) changes
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    const { name, checked } = e.target;
    updateSiteUi({ name, value: checked });
    localStorage.setItem(name, checked); // Store setting in localStorage
    if (name === "sound") {
      isAudioPlayable = checked; // Update audio playability
    }
    playAudio("toggle"); // Play audio feedback
  });
});

// Event listener for radio button changes
radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const { name, id } = e.target;
    updateSiteUi({ name, value: id });
    localStorage.setItem(name, id); // Store setting in localStorage
    playAudio("check"); // Play audio feedback
  });
});
