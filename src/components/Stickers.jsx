import Sticker from "./Sticker";
import "../stylesheet/Container_Stickers.css"

const Stickers = () => {
  return (
    <>
      <div className="Container_Stickers">
        <Sticker
          title="Silencio"
          subtitle="Calmo mi mente de los juicios."
          number="1"></Sticker>
        <Sticker
          title="Escucho"
          subtitle="Solo permito que llegue a mi, opiniones positivas."
          number="2"></Sticker>
        <Sticker
          title="Creo"
          subtitle="Tengo dones y talentos."
          number="3"></Sticker>
        <Sticker
          title="Palabras"
          subtitle="Me acaricio con buenas expreciones para mi mismo."
          number="4"></Sticker>
        <Sticker
          title="Yo único"
          subtitle="Sin excusas soy valioso."
          number="5"></Sticker>
        <Sticker
          title="Dios en mi"
          subtitle="Yo soy templo del Espiritu de Dios"
          number="6"></Sticker>
        <Sticker title="Soy criatura nueva" subtitle="" number="7"></Sticker>
      </div>
    </>
  );
};

export default Stickers;
