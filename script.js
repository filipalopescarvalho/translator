async function translateText() {
    const plaintextValue = document.getElementById("plaintext").value;
    const sourceLang = document.getElementById("source-lang").value;
    const targetLang = document.getElementById("target-lang").value;
  
    console.log("Translating from:", sourceLang, "to:", targetLang);
    console.log("Text to translate:", plaintextValue);
  
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(plaintextValue)}&langpair=${sourceLang}|${targetLang}`;
  
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
      const data = await response.json();
      console.log("Response data:", data);
  
      if (data && data.responseData && data.responseData.translatedText) {
        document.getElementById("output").innerText = data.responseData.translatedText;
      } else {
        document.getElementById("output").innerText = "Translation failed.";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("output").innerText = "An error occurred. Please try again.";
    }
  }
  
  function swapLanguages() {
    const sourceLangInput = document.getElementById("source-lang");
    const targetLangInput = document.getElementById("target-lang");
  
    const temp = sourceLangInput.value;
    sourceLangInput.value = targetLangInput.value;
    targetLangInput.value = temp;
  }
  
  document.getElementById("translate-btn").addEventListener("click", translateText);
  document.getElementById("swap-btn").addEventListener("click", swapLanguages);