import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Card } from "./Card";

export function Dashboard() {
  const token = localStorage.getItem('feedget@token');
  const [feedbacks, setFeedbacks] = useState([]);

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
      <header className="text-zinc-100 p-2 text-xl">
        <h1>
          <strong>Feedbacks Submetidos</strong>
        </h1>
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