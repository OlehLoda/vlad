import s from "./why-us.module.css";

export default function WhyUs() {
  return (
    <div className={s.wrap}>
      <h2>Все ще виникає питання чому ми ?</h2>
      <div>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.{" "}
        </p>
        <img src="/photo.jpg" alt="photo" />
      </div>
    </div>
  );
}
