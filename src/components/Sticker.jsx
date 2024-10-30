import "../stylesheet/Sticker.css";

const Sticker = ({title, subtitle, number}) => {
  return (
    <div className="Sticker">
      <div className="text">
        <h1>{title}</h1>
        <h3>
          {subtitle}
        </h3>
      </div>
      <div className="point">
        <p className="point_text">
          <strong>Mis 7 Compromisos</strong>
        </p>
      </div>
      <div className="line"></div>
      <div className="cube">
        <div className="number">
          <h4>{number}</h4>
        </div>
      </div>
    </div>
  );
};

export default Sticker;