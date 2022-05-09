import { Toggle } from "react-toggle-component";
import { CloseButton } from "../../CloseButton";

import spainFlag from '../../../assets/images/spain_flag.svg';
import brazilFlag from '../../../assets/images/brazil_flag.svg';
import usaFlag from '../../../assets/images/usa_flag.svg';
import i18next from "i18next";

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

  function handleChangeLanguage(lang: string) {
    i18next.changeLanguage(lang)
  }

  return (
    <>
      <div className="bg-white dark:bg-zinc-900 p-4">
        <CloseButton />
        <fieldset>
          <legend>Cores</legend>
          <label className="text-sm">Modo Escuro</label>
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
              className="block"
              name="toggle-1" />

          <label className="text-sm">Daltonismo</label>
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
        </fieldset>
        <fieldset className="flex justify-center gap-2">
          <legend>Idioma</legend>
          <button
            type="button"
            onClick={() => handleChangeLanguage('ptBR')}>
            <img src={brazilFlag} width={38} alt="" />
          </button>
          <button
            type="button"
            onClick={() => handleChangeLanguage('en')}>
            	<img src={usaFlag} width={38} alt="" />
          </button>
          <button
            type="button"
            onClick={() => handleChangeLanguage('es')}>
            <img src={spainFlag} width={38} alt="" />
          </button>
          
        </fieldset>
      </div>
    </>
  )
}