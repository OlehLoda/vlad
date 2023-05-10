import { useState } from "react";
import s from "./requests-list.module.css";
import { IRequest } from "../requests";
import AvatarIcon from "../../../../public/icons/avatar";
import LoadMoreIcon from "../../../../public/icons/load-more";

interface Props {
  requests: IRequest[];
}

export default function RequestsList({ requests }: Props) {
  const [quantity, setQuantity] = useState<number>(2);

  return (
    <div className={s.requestsList}>
      <h2>Доступні для виконання</h2>
      <div className={s.wrapRequests}>
        {requests.length > 0 ? (
          requests.map(({ name, title, description, rating }, index) => {
            if (index < quantity)
              return (
                <div key={index} className={s.card}>
                  <div className={s.name}>
                    <AvatarIcon />
                    <p>{name}</p>
                    <p>
                      Тема: <span>{title}</span>
                    </p>
                  </div>
                  <hr className={s.hr} />
                  <div className={s.description}>
                    <p>{description}</p>
                  </div>
                  <hr className={s.vr} />
                  <div className={s.info}>
                    <div>
                      <p>Вартість</p>
                      <p>{Math.max(rating * 50, 50)} UAH</p>
                    </div>
                    <div>
                      <p>Терміновість</p>
                      <p>{rating}/10</p>
                    </div>
                    <button>Відгукнутися</button>
                  </div>
                </div>
              );
          })
        ) : (
          <p className={s.empty}>Ви поки не оформили жодної заявки</p>
        )}
      </div>
      {quantity < requests.length && (
        <div className={s.load} onClick={() => setQuantity((prev) => prev + 1)}>
          <LoadMoreIcon />
          <p>ЗАВАНТАЖИТИ ЩЕ</p>
        </div>
      )}
    </div>
  );
}
