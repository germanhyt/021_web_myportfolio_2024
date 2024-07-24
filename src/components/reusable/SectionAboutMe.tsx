import ContactDetails from "../contact/ContactDetails";

function SectionAboutMe() {
  return (
    <section id="aboutme" className="container mx-auto min-h-[620px]">
      <div className=" px-10 sm:px-12 py-12 mt-24 sm:mt-32 dark:bg-primary-dark shadow-md rounded-lg">
        <div className="w-full flex justify-center items-center py-4 sm:py-8">
          <h3 className="font-semibold text-base sm:text-xl dark:text-primary-light">
            Sobre Mi
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="top-1 sm:col-span-2 py-4 sm:py-6">
            <p className="text-center sm:text-start dark:text-primary-light">
              Buen día, soy Germán, recién egresado de la carrera de sistemas,
              estoy motivado en unirme a su equipo, la cual me permita
              desarollar profesionalmente. Mi meta no es simplemente acumular
              experiencia, sino causar un impacto positivo en la organización
              mientras desarrollo mis habilidades técnicas y blandas. Me
              considero una persona responsable, autodidacta, con compromiso, y
              con capacidad tanto para el liderazgo como para el trabajo en
              equipo. No busco solo una oportunidad, sino una sinergia donde
              pueda contribuir con mi objetivo de convertirme en un buen
              Ingeniero de Sistemas.
            </p>
          </div>
          <div className="top-2">
            <ContactDetails />
          </div>
          <div className="top-3 flex justify-center items-center">
            <img
              className="w-[200px] h-[210px] rounded-lg"
              src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1711399091/Imagenes_Portafolio/profile_2_ghyt_kdsref.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
