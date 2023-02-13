import { Call, Mail, MapOutline, Print } from "react-ionicons";

export default function Footer() {
  return (
    <footer className="bg-[#232733] pt-12 px-7">
      <div className="container flex desktop:flex-row tablet:flex-row mobile:flex-col flex-col justify-between mb-6">
        {/* first column */}
        <div className="text-white desktop:w-4/12 tablet:w-4/12 mobile:w-full py-4">
          <h3 className="text-xl mb-6">Follow Us</h3>
          <ul className="text-[#98a2aa]">
            <li>
              <a href="#">Xing</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
        {/* second column */}
        <div className="text-white w-4/12 py-4 desktop:w-4/12 tablet:w-4/12 mobile:w-full">
          <h3 className="text-xl mb-6">Öffnungszeiten:</h3>
          <ul className="text-[#98a2aa]">
            <li>Montag - Freitag</li>
            <li>08:00 - 17:00 Uhr</li>
            <li>24/7 Stunden Support</li>
            <li>+49 (0) 173-2846903</li>
          </ul>
        </div>
        {/* third column */}
        <div className="text-white w-4/12 py-4 desktop:w-4/12 tablet:w-4/12 mobile:w-full">
          <h3 className="text-xl mb-6">Kontakt</h3>
          <ul className="text-[#98a2aa] flex flex-col gap-3">
            <li className="flex gap-2">
              <MapOutline color={"#98a2aa"} /> Kortumstraße 52, 44787 Bochum,
              Deutschland
            </li>
            <li className="flex gap-2">
              <Mail color={"#98a2aa"} /> info@hl-loshi-dolmetscherdienste.de
            </li>
            <li className="flex gap-2">
              <Call color={"#98a2aa"} /> +49 (0) 234 - 79631337
            </li>
            <li className="flex gap-2">
              <Print color={"#98a2aa"} /> +49 (0) 234 - 79631338
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex desktop:flex-row tablet:flex-row mobile:flex-col mobile:gap-6 tablet:gap-0 justify-between border-t border-white border-opacity-10 py-8 text-[#98a2aa]">
        <ul className="flex gap-4">
          <li>
            <a href="#">Impressum</a>
          </li>
          <li>
            <a href="#">Datenschutz</a>
          </li>
          <li>
            <a href="3">AGB</a>
          </li>
        </ul>
        <p>Copyright © 2020 LOSHI Dolmetscher- & Übersetzungsbüro</p>
      </div>
    </footer>
  );
}
