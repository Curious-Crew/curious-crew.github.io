let currentLang = localStorage.getItem('curious-crew-lang') || 'uk';

// Функція зміни мови
function setLanguage(lang) {
  if (!['uk', 'en', 'ar'].includes(lang)) return;
  
  currentLang = lang;
  localStorage.setItem('curious-crew-lang', lang);
  
  // Встановлюємо напрямок тексту (RTL для арабської)
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // Оновлюємо всі переклади
  updateAllTranslations();
  
  // Оновлюємо активну кнопку мови
  updateLanguageButtons();
  
  // Оновлюємо динамічний контент
  if (typeof updateContactChannels === 'function') {
    updateContactChannels();
  }
}

// Функція оновлення всіх перекладів
function updateAllTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getTranslation(key);
    
    if (translation) {
      el.textContent = translation;
    }
  });
}

// Функція отримання перекладу по ключу
function getTranslation(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // Якщо переклад не знайдено, повертаємо українську версію
      value = translations['uk'];
      for (const fallbackKey of keys) {
        if (value && value[fallbackKey]) {
          value = value[fallbackKey];
        }
      }
      break;
    }
  }
  
  return value;
}

// Функція оновлення активної кнопки мови
function updateLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});