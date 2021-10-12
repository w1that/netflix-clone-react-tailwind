import React from "react";
import Header from "../components/welcomePage/Header";

function WelcomePage() {
  return (
    <div style={{zIndex:-1}} className="bg-black h-screen">
      <img
        className="absolute h-4/5 w-full filter  object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/8a0b0cf6-c8c9-4e6a-9f50-bd325ea0ed27/TR-tr-20211004-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      ></img>
      <Header></Header>
      <div className="w-full sm:w-2/3 mx-auto text-center backdrop-filter backdrop-brightness-50 rounded-lg py-24 mt-24">
        <h1 className="text-3xl mx-5 sm:text-6xl sm:mx-36 text-white  font-bold">Sınırsız film, dizi ve çok daha fazlası.</h1>
        <h2 className="text-2xl mx-5 sm:text-3xl sm:mx-20 text-white font-medium my-5 ">İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.</h2>
        <div className="pt-4">
          <h3 className="text-xl text-white font-normal pb-5 px-6 sm:px-20">
            İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek
            için e‑posta adresinizi girin.
          </h3>
          <div className="flex w-4/5 sm:w-3/5 mx-auto justify-center">
            <input className="w-full h-10 sm:h-16 rounded-none px-4 focus:ring-0 " placeholder="E-posta adresi"></input>
            <button className="bg-netflixred w-48 sm:w-96 h-10 sm:h-16 font-normal sm:font-medium text-xl sm:text-2xl hover:bg-netflixred-hover text-white">Başlayın{">"}</button>
          </div>
        </div>
      </div>
      
      <div>
          <div className="relative bg-black h-screen" >
                <div className="absolute bg-gray-dark w-full h-3 ">
                <div className="display:none sm:flex justify-center px-4 py-4 sm:px-16 sm:py-14 h-96">
                    <div className="bg-green  text-center sm:text-left w-full sm:w-4/6  text-white">
                        <div className="p-4 sm:p-24">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-2">Televizyonunuzda izleyebilirsiniz.</h1>
                        <h2 className="text-xl sm:text-3xl font-normal mt-5 mb-1 pr-10">Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.</h2>
                   
                        </div>
                         </div>
                    <div className="bg-green w-2/6 sm:h-96 p-4 w-full mx-auto mr-10 sm:mr-24 sm:w-2/6">   {/**mx-auto w-full */}
                           
                        <video className="w-full" autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>

                     
                    </div>
                </div>
                </div>
          </div>
      </div>
    </div>
  );
}

export default WelcomePage;
