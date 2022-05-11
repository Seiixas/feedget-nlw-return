import { Microphone } from "phosphor-react";
import { useEffect, useState } from "react";

import recodingAudioStartEffect from '../../../assets/audio/recoding_audio_stop.mp3';
import recodingAudioStopEffect from '../../../assets/audio/recoding_audio_start.mp3';

interface SpeechButtonProps {
  onMicrophoneRecording: (message: string) => void;
}

declare global {
  interface Window { 
    SpeechRecognition: any;
    webkitSpeechRecognition: any 
  }
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'pt-BR';

export function SpeechButton ({ onMicrophoneRecording }: SpeechButtonProps) {
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    handleListen()
  }, [isListening])

  async function handleListen() {
    const startRecodingSoundEffect = new Audio(recodingAudioStartEffect);
    const stopRecodingSoundEffect = new Audio(recodingAudioStopEffect);

    if (isListening) {
      mic.start()
      await startRecodingSoundEffect.play();
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = async () => {
        console.log('Stopped Mic on Click')
        await stopRecodingSoundEffect.play();
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map(result => result.transcript)
        .join('');
      onMicrophoneRecording(transcript);
      mic.onerror = (event: any) => {
        console.log(event.error)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={() => setIsListening(prevState => !prevState)}
      title="Clique para começar a falar e transcrever em texto"
      className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-md border-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      <Microphone
        size={36}
        className="w-6 h-6"
        color={isListening ? '#8257e6' : '#fff'} />
    </button>
  )
}