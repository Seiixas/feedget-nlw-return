import { useTranslation } from 'react-i18next';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { SettingsButton } from '../../SettingsButton';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
  onSettingsOpened: () => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged, onSettingsOpened }: FeedbackTypeStepProps) {
  const { t: translationOf } = useTranslation();

  return (
    <>
      <header>
        <SettingsButton
          onClick={onSettingsOpened} />
        <span className="text-xl leading-6">{translationOf('Feedback')}</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-100 dark:bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap=2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => {onFeedbackTypeChanged(key as FeedbackType)}}
              key={key}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{translationOf(key)}</span>
            </button>
          );
        }) }
      </div>
    </>
  );
}