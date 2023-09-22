const Footer = () => {
  return (
    <div className=" h-72 pt-12 px-16 text-slate-900">
      <div className="flex gap-40">
        <div className="w-1/4">
          <h2 className="font-bold tracking-widest text-4xl mb-6">LOGO</h2>
          <p className="text-sm mb-14">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            vero consequatur harum exercitationem. Quasi quis soluta sed nihil,
            neque dignissimos!
          </p>
          <p className="text-sm font-medium">&copy; LOGO 2022</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-bold text-base">JOB SEEKERS</h3>
          <p>Jobs Category</p>
          <p>Jobs by Companies</p>
          <p>Career Support</p>
          <p>Testimony</p>
          <p>Download App</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-bold text-base">RECRUITERS</h3>
          <p>Post A Job Ads</p>
          <p>Search For Resumes</p>
          <p>Advertise with us</p>
          <p>Company Profiles</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-bold text-base">ABOUT</h3>
          <p>About Us</p>
          <p>News and Events</p>
          <p>Careers</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-bold text-base">CONTACT</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Send Feedback</p>
          <p>Socials</p>
          <div className="text-3xl flex gap-3">
            <span>
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
