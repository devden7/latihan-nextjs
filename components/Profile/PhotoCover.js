import Image from "next/image";
import Sampul from "../../public/sampul.jpg";
const PhotoCover = () => {
  return (
    <section>
      <div className="bg-red-300 h-60 rounded-b-[4rem] overflow-hidden">
        <Image
          src={Sampul}
          alt="Foto Sampul"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default PhotoCover;
