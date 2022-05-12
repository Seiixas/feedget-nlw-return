import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Card } from "./Card";

export function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/feedbacks');
      setFeedbacks(response.data);
    }

    fetchData();
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
        feedbacks.map((feedback) => (
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