import { useState } from "react";

import html2canvas from "html2canvas";

import screenshotAudioUrl from './../../../assets/audio/screenshot.mp3';

import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  onScreenshotTook, screenshot
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    const screen = document.querySelector('html');
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(screen!);

    makeScreenshotEffect(screen!);

    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  async function makeScreenshotEffect(screen: HTMLHtmlElement) {
    const TRANSITION_TIME = '0.4s';
    const OPACITY_EXPECTED = '0.8';
    const AUDIO_VOLUME = .25;
    const SCREENSHOT_EFFECT_TIME_IN_MILLISECOND = 500;
    
    const previousTransitionValue = screen.style.transition;
    const previousOpacityValue = screen.style.opacity;

    const screenshotSoundEffect = new Audio(screenshotAudioUrl);

    screenshotSoundEffect.volume = AUDIO_VOLUME;
    await screenshotSoundEffect.play();

    screen.style.transition = TRANSITION_TIME;
    screen.style.opacity = OPACITY_EXPECTED;

    setTimeout(() => {
      screen.style.opacity = previousOpacityValue;
      screen.style.transition = previousTransitionValue;
    }, SCREENSHOT_EFFECT_TIME_IN_MILLISECOND);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-100 dark:text-zinc-500 hover:text-zinc-500 dark:hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }} >
          <Trash
            weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-md border-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}