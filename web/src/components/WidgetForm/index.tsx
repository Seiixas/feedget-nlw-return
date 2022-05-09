import { useState } from "react";

import bugImageUrl from '../../assets/images/bug.svg';
import ideaImageUrl from '../../assets/images/idea.svg';
import thoughtImageUrl from '../../assets/images/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSucessStep";
import { WidgetSettings } from "./Steps/WidgetSettings";
import { useTranslation } from "react-i18next";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackFinalMessage, setFeedbackFinalMessage] = useState('Agradecemos o seu feedback');
  const [feedbackFinalType, setFeedbackFinalType] = useState<'error' | 'warning' | 'success'>('success');
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);

  const { t: translationOf } = useTranslation();

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setIsSettingsOpened(false);
    setFeedbackType(null);
    setFeedbackFinalType('success');
    setFeedbackFinalMessage('Agradecemos o seu feedback');
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     
      { 
        isSettingsOpened ? (<WidgetSettings />) : (
          feedbackSent ? (
            <FeedbackSuccessStep
              onFeedbackRestartRequested={handleRestartFeedback}
              message={feedbackFinalMessage}
              type={feedbackFinalType} />
          ) : (
            <>
            {!feedbackType ? (
                <FeedbackTypeStep 
                  onFeedbackTypeChanged={setFeedbackType}
                  onSettingsOpened={() => setIsSettingsOpened(true)} />
              ) : <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    onFeedbackSent={() => setFeedbackSent(true)}
                    changeMessage={(message: string) => setFeedbackFinalMessage(message)}
                    changeFeedbackType={(type: 'error' | 'warning' | 'success') => setFeedbackFinalType(type)} />}
                </>
              )
        )
      }

          <footer className="text-xs text-neutral-400">
            {translationOf('Footer')} <a className="underline underline-offset-2" href="http://www.rocketseat.com.br/" target="blank">Rocketseat</a>.
          </footer>
        </div>
  );
}