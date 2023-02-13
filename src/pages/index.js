import Image from "next/image";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import Separator from "@/components/Seperator";
import services from "@/data/servicesData.json";

// Image import
import HajrijeIMG from "../../public/assets/Hajrie-1317x1536.jpg";
import Footer from "@/components/Footer";

export default function Home() {
  console.log(services);
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="bg-anotherHeroImage bg-cover tablet:bg-center h-[732px] text-white flex justify-center items-center">
        <div className="container px-7">
          <h1 className="text-5xl max-w-4xl">
            Hohe professionelle Übersetzungsdienste, denen Sie vertrauen können
          </h1>
          <p className="text-xl mb-6 mt-4">
            Wir stehen Ihnen jederzeit gerne zur Verfügung
          </p>
          <PrimaryButton link="asdasd" title="Mehr Lesen" />
        </div>
      </div>

      {/* Intro section */}
      <div className="container px-7 mt-20 flex flex-col items-center text-center">
        <h2 className="text-4xl max-w-5xl">
          Herzlich Willkommen auf den Seiten von
          „HL-Loshi-Dolmetscherdienste.de“ - Ihrem internationalen Dolmetscher -
          und Übersetzungsdienst mitten im Herzen der Stadt Bochum.
        </h2>
        <Separator />
        <p className="max-w-2xl text-textColor">
          Sie sind auf der Suche nach einem zuverlässigen Dolmetscher- und
          Übersetzungsbüro mit langjähriger Erfahrung und einem breiten
          Dienstleistungsspektrum? Dann zögern Sie nicht uns zu kontaktieren.
          Überzeugen Sie sich am besten selbst.
        </p>
        <p className="text-textColor">Erfolg beginnt mit uns!</p>
      </div>

      {/* Unsere philosophie */}
      <div className="container px-7 flex desktop:flex-row tablet:flex-row mobile:flex-col flex-col gap-9 my-20">
        <Image
          src={HajrijeIMG}
          height="100%"
          alt="Hajrije"
          className="desktop:w-6/12 tablet:w-6/12 mobile:w-full max-h-[600px] object-cover bg-cover"
        />
        <div className="desktop:w-6/12 tablet:w-6/12 mobile:w-full">
          <p className="text-sm text-black pb-3">Unsere Philosophie</p>
          <h2 className="text-4xl">
            Hindernisse und Schwierigkeiten sind Stufen, auf denen wir in die
            Höhe steigen
          </h2>
          <Separator />
          <h3 className="text-3xl italic text-[#51565e]">
            Seit 2002 ist „LOSHI“ Anbieter von Dolmetscher-und
            Übersetzerdienstleistungen.
          </h3>
          <p className="text-textColor mb-12 mt-10">
            In dieser Zeit haben wir uns einen großen Erfahrungsschatz
            angeeignet und wissen genau, worauf es bei Dolmetscher- und
            Übersetzerdienstleistungen ankommt.
          </p>
          <PrimaryButton link="#" title="Mehr Lesen" />
        </div>
      </div>

      {/* Warum unseren service wählen */}
      <div className="bg-homepagesectionBG px-7 bg-fixed bg-cover text-white pt-20 pb-16">
        <div className="container">
          {/* top */}
          <div className="flex desktop:flex-row tablet:flex-col mobile:flex-col flex-col justify-between items-center">
            <div>
              <p className="text-sm pb-3">WARUM UNSEREN SERVICE WÄHLEN</p>
              <h2 className="text-4xl">
                Wir bieten eine breite Palette von Übersetzungsdiensten
              </h2>
              <Separator />
            </div>
            <p>
              Als Dolmetscher- und Übersetzungsdienstleister bringen wir
              freiberufliche Übersetzer aus aller Herren Länder zusammen, die
              nicht nur unsere…
            </p>
          </div>
          {/* Bottom */}
          <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 gap-10 mt-10">
            {services.map((service, i) => (
              <div className="flex" key={i}>
                <Image
                  src={service.image}
                  alt="Icon"
                  width={40}
                  height={40}
                  className="w-9 h-9 mr-2"
                />
                <div>
                  <h3 className="font-medium text-2xl mb-6">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
