import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/welcomePage/Header";
import logo from "../logo.png";
function LoginPage() {
  return (
    <div className="bg-black h-screen">
      <img
        className="absolute h-screen w-full filter object-cover brightness-0 sm:brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/8a0b0cf6-c8c9-4e6a-9f50-bd325ea0ed27/TR-tr-20211004-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      ></img>
      <div className="relative h-20">
        <div className="w-full flex absolute bottom-0 mx-auto left-0 h-14 items-center justify-between">
          <Link to="/"><img className="h-8 ml-2 sm:h-14 sm:ml-14" src={logo}></img></Link>
        </div>
      </div>

        <div className="divide-y-2 divide-gray-600 sm:divide-none">
        <div className="bg-black bg-opacity-50 backdrop-filter text-white backdrop-brightness-50 w-full sm:w-1/4 h-96 mx-auto px-4 sm:px-16 py-5 sm:py-14 h-3/5 rounded">
            <div>
            <h1 className="text-4xl font-bold mb-7">Oturum Aç</h1>
            <input className="transition duration-200 bg-gray-innerInput py-2 px-3 w-full text-center rounded-sm h-12 mb-3 text-left focus:outline-none focus:ring-2 focus:ring-netflixred focus:border-transparent" placeholder="Eposta ya da telefon numarası"></input>
            <input type="password" className="transition duration-200 bg-gray-innerInput py-2 px-3 w-full text-center rounded-sm h-12 mb-12 text-left focus:outline-none focus:ring-2 focus:ring-netflixred focus:border-transparent" placeholder="Parola"></input>
            <button className="transition duration-200 bg-netflixred text-large font-medium text-white py-2 w-full hover:bg-netflixred-hover">Oturum Aç</button>
            <div className="flex justify-between items-center mt-3">
            <span><input type="checkbox" ></input><label className="text-gray-400 ml-1">Beni hatırla</label></span>
            <span className="text-gray-400">Yardım ister misiniz?</span>
            </div>
            </div>

            <div className="text-gray-500 mt-5">Netflix'e katılmak ister misiniz? <span className="text-gray-300 font-bold hover:underline cursor-pointer">Şimdi kaydolun</span>.</div>
            <div className="font-thin text-sm mt-5">Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor. <span className="text-blue-500 hover:underline cursor-pointer">Daha fazlasını öğrenin</span>.</div>
        
        </div>
        <div className="absolute bg-black bg-opacity-40 bottom-0  w-full backdrop-filter backdrop-brightness-50 object-cover p-5 ">
            <div className="w-5/6 sm:w-1/2 mx-auto py-5">
                <p className="text-gray-400">Sorularınız mı var? <label className="cursor-pointer hover:underline">0850-390-7444</label> numaralı telefonu arayın</p>
                <ul className="text-gray-400 text-sm grid grid-cols-4 gap-4 mx-auto mt-5">
                    <li><span className="cursor-pointer hover:underline">SSS</span></li>
                    <li><span className="cursor-pointer hover:underline">Yardım Merkezi</span></li>
                    <li><span className="cursor-pointer hover:underline">Kullanım Koşulları</span></li>
                    <li><span className="cursor-pointer hover:underline">Gizlilik</span></li>
                    <li><span className="cursor-pointer hover:underline">Çerez Tercihleri</span></li>
                    <li><span className="cursor-pointer hover:underline">Kurumsal Bilgiler</span></li>
                </ul>
            </div>
        </div>
        </div>

    </div>
  );
}

export default LoginPage;
