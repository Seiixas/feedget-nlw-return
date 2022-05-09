import { Bug, Warning } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
  message: string;
  type: string;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested, message, type }: FeedbackSuccessStepProps
) {

  const { t: translationOf } = useTranslation();

  return (
    <>
      <header>
        <CloseButton />

        <div className="flex flex-col items-center py-10 w-[304px]">
          { type === 'success' ? 
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.5 34C38.5 36.209 36.709 38 34.5 38H6.5C4.291 38 2.5 36.209 2.5 34V6C2.5 3.791 4.291 2 6.5 2H34.5C36.709 2 38.5 3.791 38.5 6V34Z" fill="#77B255"/>
              <path d="M31.78 8.36202C30.624 7.61102 29.076 7.94002 28.322 9.09802L17.436 25.877L12.407 21.227C11.393 20.289 9.81103 20.352 8.87403 21.365C7.93703 22.379 7.99903 23.961 9.01303 24.898L16.222 31.564C16.702 32.009 17.312 32.229 17.918 32.229C18.591 32.229 19.452 31.947 20.017 31.09C20.349 30.584 32.517 11.82 32.517 11.82C33.268 10.661 32.938 9.11302 31.78 8.36202Z" fill="white"/>
            </svg>
            :
            <svg width="41" height="40"
              x="0px" y="0px" viewBox="0 0 576 512">
              <path className="st0" d="M569.5,440c18.5,32-4.7,72-41.6,72H48.1c-36.9,0-60-40.1-41.6-72L246.4,24c18.5-32,64.7-32,83.2,0L569.5,440
                L569.5,440z M288,354c-25.4,0-46,20.6-46,46s20.6,46,46,46s46-20.6,46-46S313.4,354,288,354z M244.3,188.7l7.4,136
                c0.3,6.4,5.6,11.3,12,11.3h48.5c6.4,0,11.6-5,12-11.3l7.4-136c0.4-6.9-5.1-12.7-12-18.7h-63.4C249.4,176,244,181.8,244.3,188.7
                L244.3,188.7z" fill="#ffa600"/>
            </svg>
            
          }

          <span className="text-xl mt-2">{message}</span>

          <button
            className="py-2 px-6 mt-6 bg-zinc-100 dark:bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
            onClick={onFeedbackRestartRequested}
          >
            { type === 'success' ? translationOf('SendAnother') : translationOf('TrySendAnother') }
          </button>
        </div>
      </header>
    </>
  );
}