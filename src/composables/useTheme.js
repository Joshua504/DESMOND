import { ref, readonly } from 'vue';

// Create a shared state that can be imported in multiple components
const isDarkMode = ref(true);

// Initialize from localStorage if available
if (typeof window !== 'undefined') {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    isDarkMode.value = savedMode === 'true';
    document.body.classList.toggle('light-mode', !isDarkMode.value);
  }
}

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle('light-mode', !isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value);
  };

  return {
    isDarkMode: readonly(isDarkMode),
    toggleTheme
  };
}
