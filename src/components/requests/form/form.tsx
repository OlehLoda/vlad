import { FormEvent, useState } from "react";
import s from "./form.module.css";
import { IRequest } from "../requests";

export default function Form({ setRequests }: { setRequests: (value: IRequest) => void }) {
  const [rating, setRating] = useState(0);

  const dots = [];
  for (let index = 1; index < 11; index++) dots.push(index);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: Record<string, string | number> = {};

    const elements = Array.from(e.currentTarget.elements);

    elements
      .filter((e) => (e as HTMLInputElement).name.length > 0)
      .forEach((el) => {
        const { name, value } = el as HTMLInputElement;
        data[name] = value;
      });

    const final_data: IRequest = {
      name: "",
      title: "",
      description: "",
      ...data,
      rating,
    };

    console.log(final_data);

    setRequests(final_data);
  };

  return (
    <form className={s.wrap} onSubmit={onSubmit}>
      <h2>Заповніть бланк для опрацювання проблеми</h2>
      <input required placeholder="Ім’я" name="name" type="text" className={s.input} />
      <input required placeholder="Тема" name="title" type="text" className={s.input} />
      <textarea
        required
        rows={3}
        maxLength={240}
        name="description"
        className={s.input}
        placeholder="Опис роботи"
      />
      <div>
        <p>Рівень терміновості</p>
        <p>{rating}/10</p>
      </div>
      <div>
        {dots.map((dot, index) => {
          const is_active = dot <= rating ? s.active : "";
          return (
            <span className={s.dot + " " + is_active} onClick={() => setRating(dot)} key={index} />
          );
        })}
      </div>
      <button type="submit">Оформити заявку</button>
    </form>
  );
}
