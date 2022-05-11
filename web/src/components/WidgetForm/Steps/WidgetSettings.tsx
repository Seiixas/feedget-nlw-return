import { Toggle } from "react-toggle-component";
import { CloseButton } from "../../WidgetForm/Buttons/CloseButton";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "phosphor-react";

interface WidgetSettingsProps {
  onFeedbackRestartRequested: () => void;
}

export function WidgetSettings({ onFeedbackRestartRequested }: WidgetSettingsProps) {

  const { t: translationOf } = useTranslation();

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
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>
        <CloseButton />
        <fieldset>
          <legend className="text-brand-500">
            <strong>{translationOf('Color')}</strong>
          </legend>
          <div className="flex justify-between py-1">
            <label className="text-sm">{translationOf('DarkMode')}</label>
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
          </div>
          <div className="flex justify-between py-1">
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
          </div>
          <hr className="m-1" />
        </fieldset>
        <fieldset className="flex justify-center gap-2">
          <legend className="text-brand-500 py-1">
            <strong>{translationOf('Language')}</strong>
          </legend>
          <button
            type="button"
            className="bg-brand-500 rounded py-1 px-2 text-white"
            onClick={() => handleChangeLanguage('ptBR')}>
              Português
          </button>
          <button
            type="button"
            className="bg-brand-500 rounded py-1 px-2 text-white"
            onClick={() => handleChangeLanguage('en')}>
            	English
          </button>
          <button
            type="button"
            className="bg-brand-500 rounded py-1 px-2 text-white"
            onClick={() => handleChangeLanguage('es')}>
              Español
          </button>
          
        </fieldset>
      </div>
    </>
  )
}