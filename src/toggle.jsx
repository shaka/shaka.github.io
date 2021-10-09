import { useDarkMode } from './useDarkMode'

const Toggle = () => {
    const [isDark, setIsDark] = useDarkMode()
  
    return (
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark Mode
      </label>
    )
  }

export default Toggle;