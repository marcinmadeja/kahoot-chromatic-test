import { Button } from "../button-raised/button-raised";
import "./dialog.css"

export const Dialog = () => {
  return (
    <div className="dialog__overlay">
      <div className="dialog">
        <div className="dialog__content">
          <div className="dialog__title">
            <h2>Dialog title</h2>
          </div>

          <div className="dialog__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci libero maxime nesciunt molestias facere nobis eius sit quasi debitis eligendi ea id pariatur nostrum quas, dolorem veniam. Distinctio, quis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci libero maxime nesciunt molestias facere nobis eius sit quasi debi.
          </div>

          <div className="dialog__actions">
            <Button className="color-grey">cancel</Button>
            <Button className="color-green">ok</Button>
          </div>
        </div>
      </div>
    </div>
  );
}