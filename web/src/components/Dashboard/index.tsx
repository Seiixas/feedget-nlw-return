import { Door } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Card } from "./Card";

export function Dashboard() {
  const token = localStorage.getItem('feedget@token');
  const [feedbacks, setFeedbacks] = useState([]);

  function handleLogout() {
    localStorage.removeItem('feedget@token');
    window.location.reload();
  }

  useEffect(() => {
    try {
      (async () => {
        const response = 
          await api.get('/feedbacks', {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });
        setFeedbacks(response.data);
      })();
    } catch (err: any) {
      localStorage.removeItem('feedget@token');
    }

    console.log(feedbacks);
  }, []);

  return (
    <div className="m-3">
      <header className="flex text-zinc-100 p-2 text-xl items-center justify-between">
        <h1>
          <strong>Feedbacks Submetidos</strong>
        </h1>
        <button
          className="text-zinc-800  bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 rounded px-2 py-2 hover:text-brand-500 transition"
          type="button"
          onClick={handleLogout}>
            <span className="flex items-center gap-2">
              Sair <Door className=""/>
            </span>
        </button>
      </header>
      {
        feedbacks.map((feedback: any) => (
          <Card 
            comment={feedback.comment}
            feedbackType={feedback.type}
            key={feedback.id}
            feedbackId={feedback.id}
            solved={feedback.is_solved} />
        ))
      }
    </div>
  )
}