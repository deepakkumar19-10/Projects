// src/services/speech.js
/**
 * Speaks a devotional chant or text using Web Speech Synthesis API.
 * Automatically chooses Hindi (hi-IN) voice if available.
 */
export const speakDevotional = (text = "राधे राधे", lang = "hi-IN") => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

  try {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.rate = 0.88;
    speech.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find(
      (v) => v.lang === "hi-IN" || v.lang.toLowerCase().includes("hi")
    );

    if (hindiVoice) {
      speech.voice = hindiVoice;
    }

    window.speechSynthesis.speak(speech);
  } catch (error) {
    console.warn("Speech synthesis unavailable:", error);
  }
};
