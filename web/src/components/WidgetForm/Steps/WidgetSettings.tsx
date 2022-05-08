import { Toggle } from "react-toggle-component";
import { CloseButton } from "../../CloseButton";

export function WidgetSettings() {

  function handleDarkMode() {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
  }

  return (
    <>
      <div className="bg-white dark:bg-zinc-900 p-4">
        <CloseButton />
        <ul>
          <li className="flex justify-between mb-2 gap-2">
            <label>Modo Escuro</label>
            <Toggle
              leftBackgroundColor="#996DFF"
              rightBackgroundColor="#8257e6"
              borderColor="#71717a"
              leftBorderColor="#71717a"
              rightBorderColor="#71717a"
              leftKnobColor="#fff"
              rightKnobColor="#fff"
              borderWidth="1px"
              onToggle={handleDarkMode}
              checked={
                localStorage.getItem('color-theme') === 'dark' ? true : false
              }
              name="toggle-1" />
          </li>
          <li className="flex justify-between">
            <label>Daltonismo</label>
            <Toggle
              leftBackgroundColor="#996DFF"
              rightBackgroundColor="#8257e6"
              borderColor="#71717a"
              leftBorderColor="#71717a"
              rightBorderColor="#71717a"
              leftKnobColor="#fff"
              rightKnobColor="#fff"
              borderWidth="1px"
              name="toggle-2" />
          </li>
        </ul>
      </div>
    </>
  )
}