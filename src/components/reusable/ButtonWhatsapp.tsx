function ButtonWhatsapp() {
  return (
    <div className="relative hidden sm:flex">
      <div className="fixed bottom-5 right-5 z-10 hover:scale-[0.9] transition-all duration-300">
        <a
          href="https://api.whatsapp.com/send?phone=51910139973&text=Hola%20qu%C3%A9%20tal%2C%20vengo%20de%20tu%20web...%F0%9F%93%B2%F0%9F%91%8D%F0%9F%8C%90"
          target="__blank"
        >
          <img
            src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697081191/006_Portfolio_Freelance/img-wtsp_iq3zwc.png"
            alt="img"
            className="w-20 h-20"
          />
        </a>
      </div>
    </div>
  );
}

export default ButtonWhatsapp;
