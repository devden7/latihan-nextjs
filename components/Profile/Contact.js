import Image from "next/image";
import DummySertifikat from "../../public/DummySertifikat.png";
import DummyPortofolio from "../../public/DummyPortofolio.png";
const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-slate-800">test@test.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-slate-800">+62 81234567890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-slate-800">Bandung, Indonesia</p>
        </div>
        <div className="font-semibold">
          <h3 className="text-lg mb-2">Birthday</h3>
          <p className="text-slate-800 ">01 Januari 2050</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Sertifikat</h3>
          <div className="w-52">
            <Image src={DummySertifikat} alt="Sertifikat" />
          </div>
          <p>Updated 09.22</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Portofolio</h3>
          <div className="w-52">
            <Image
              src={DummyPortofolio}
              alt="Portofolio"
              className=" rounded-lg"
            />
          </div>
          <p>Updated 10.22</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <p className="text-slate-800">linkedin.com (linkedin)</p>
          <p className="text-slate-800">instagram.com (instagram)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
