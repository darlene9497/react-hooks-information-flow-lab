function Header({ onDarkModeClick, isDarkMode }) {
    console.log("Header rendered");

  return (
    <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
    </button>
  );
}
