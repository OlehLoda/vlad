import s from "./requests.module.css";
import Create from "./create/create";
import RequestsList from "./requests-list/requests-list";
import { useEffect, useState } from "react";
import Form from "./form/form";

export interface IRequest {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export default function Requests() {
  const [active, setActive] = useState<boolean>(false);
  const [requests, setRequests] = useState<IRequest[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("requests") || "null");
    if (data) setRequests(data);
  }, []);

  return (
    <div>
      <Create setActive={setActive} />
      {active && (
        <Form
          setRequests={(value) => {
            setRequests((prev) => {
              const newData = [...prev, value];
              localStorage.setItem("requests", JSON.stringify(newData));
              return newData;
            });
            setActive(false);
          }}
        />
      )}
      <RequestsList requests={requests} />
    </div>
  );
}
