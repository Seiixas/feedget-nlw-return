import { Check, X } from "phosphor-react";
import { api } from "../../lib/api";

interface CardProps {
  feedbackType: string;
  comment: string;
  feedbackId: string;
  solved: boolean;
}

export function Card({ feedbackType, comment, feedbackId, solved }: CardProps) {

  async function handleSubmitFeedbackAsDone() {
    await api.patch(`/feedbacks/${feedbackId}/done`);
  }

  async function handleSubmitFeedbackAsUndone() {
    await api.patch(`/feedbacks/${feedbackId}/undone`);
  }

  return (
    <div
      className="shadow-xl text-zinc-800  bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 rounded-xl flex py-2 px-4 items-center justify-between mb-2">
      <div className="flex flex-col">
        <h1 className="text-xl">
          <strong>{feedbackType}</strong>
        </h1>
        <span className="text-sm"><em>Status: {solved ? 'Resolvido' : 'Pendente'}</em></span>
        <span className="mt-2 text-justify">
          {comment}
        </span>
      </div>
      <div>
        <button 
          type="button"
          className="block"
          onClick={handleSubmitFeedbackAsDone}>
          <Check 
            size={26}
            color="#fff"
            className="bg-brand-500 rounded mb-2"
            weight="bold" />
        </button>
        
        <button
          type="button"
          className="block"
          onClick={handleSubmitFeedbackAsUndone}>
          <X 
            size={26}
            color="#fff"
            className="bg-brand-500 rounded"
            weight="bold" />
        </button>
        
      </div>
    </div>
  )
}