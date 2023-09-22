import Image from "next/image";
import Sampul from "../../public/sampul.jpg";
const PhotoCover = () => {
  return (
    <section>
      <div className=" h-60 rounded-b-[4rem] overflow-hidden">
        <Image
          src={Sampul}
          alt="Foto Sampul"
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
};

export default PhotoCover;
