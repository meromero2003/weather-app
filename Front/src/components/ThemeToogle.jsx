const ThemeToogle = ({ isDark, setIsDark }) => {
    return (
        <button onClick={() => setIsDark(!isDark)}
        style={{marginBottom:"10px", padding:"8px 12px", borderRadius:"10px",
        border:"none", cursor:"pointer"}}>
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}

export default ThemeToogle;