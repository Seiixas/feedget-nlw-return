import { ArrowLeft, ArrowRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../WidgetForm/Buttons/CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../../WidgetForm/Buttons/ScreenshotButton";
import { SpeechButton } from "../../WidgetForm/Buttons/SpeechButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType,
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
  changeMessage: (message: string) => void;
  changeFeedbackType: (type: 'success' | 'warning' | 'error') => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
    changeMessage,
    changeFeedbackType
  }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [severity, setSeverity] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  
  const { t: translationOf } = useTranslation();

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot,
        comment,
        severity
      });
    } catch (error: any) {
      changeFeedbackType('warning');
      changeMessage(error.response.data.message);
      if (error.response.status === 500) {
        changeFeedbackType('error');
        changeMessage('Erro Interno do Servidor');
      }
    }

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img 
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.source}
            className="w-6 h-6"/>
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 dark:placeholder-zinc-400  text-zinc-800 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder={translationOf("Details")}
          onChange={event => setComment(event.target.value)}
          value={comment}
        />
        {feedbackType === 'BUG' && (
          <div className="flex items-center justify-between py-1">
            <span>Como você classifica o problema?</span>
            <div>
              <label 
                htmlFor="level-1"
                className="text-xl cursor-pointer"
                title="Não me afeta tanto"
                onClick={() => setSeverity('0%')}>😀</label>
              <label 
                htmlFor="level-2"
                className="text-xl cursor-pointer"
                title="Poderia melhorar"
                onClick={() => setSeverity('25%')}>🙂</label>
              <label 
                htmlFor="level-3"
                className="text-xl cursor-pointer"
                title="Me incomoda"
                onClick={() => setSeverity('50%')}>😐</label>
              <label 
                htmlFor="level-4"
                className="text-xl cursor-pointer"
                title="Tive problemas"
                onClick={() => setSeverity('75%')}>🙁</label>
              <label 
                htmlFor="level-5"
                className="text-xl cursor-pointer"
                title="É crítico"
                onClick={() => setSeverity('100%')}>😡</label>
                
              <input
                type="radio"
                className="hidden"
                name="experience"
                id="level-1"
                value="0%" />
              <input
                type="radio"
                className="hidden"
                name="experience"
                id="level-2"
                value="25%" />
              <input
                type="radio"
                className="hidden"
                name="experience"
                id="level-3"
                value="50%" />
              <input
                type="radio"
                className="hidden"
                name="experience"
                id="level-4"
                value="75%" />
              <input
                type="radio"
                className="hidden"
                name="experience"
                id="level-5"
                value="100%" />
            </div>
          </div>
        )}

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <SpeechButton
            onMicrophoneRecording={(message: string) => setComment(message)} />
          <button
            disabled={(comment.length === 0 || isSendingFeedback) ?? true}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
              {isSendingFeedback ? <Loading /> : translationOf('SendFeedback')}
          </button>
        </footer>

      </form>
    </>
  )
}