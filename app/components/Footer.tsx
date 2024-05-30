import KeyworkLogo from '../icons/keywork_icon.png'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import 'react-social-icons/tiktok'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/youtube'
import Link from 'next/link'


export function Footer() {

    const iconStyle = {
        height: 32,
        width: 32
      };

    return(
        <footer className="bg-white text-white h-[200px] flex items-center">

            <div className="bg-gray w-1/2 h-full flex items-center">
                <div className="bg-gray w-9/12 h-3/4 p-4 ml-12 justify-center">
                    
                    <Link href='/'>
                        <Image 
                            src={KeyworkLogo} 
                            alt="Keywork logo" 
                            className="w-1/3 hidden lg:block"
                        />
                    </Link>

                    <div className="bg-gray h-[40px] ml-[3px] mt-14 flex space-x-2 items-center">
                        <SocialIcon url="www.instagram.com" style={iconStyle}/>
                        <SocialIcon url="www.twitter.com" style={iconStyle}/>
                        <SocialIcon url="www.tiktok.com" style={iconStyle}/>
                        <SocialIcon url="www.facebook.com" style={iconStyle}/>
                        <SocialIcon url="www.linkedin.com" style={iconStyle}/>
                        <SocialIcon url="www.youtube.com" style={iconStyle}/>
                    </div>

                </div>

            </div>

            <div className="bg-gray w-1/2 h-full flex justify-center">

                <div className="w-9/12 flex justify-between mt-12">

                    <div className="bg-grayflex flex-col space-y-5">
                        <h1 className="font-bold">Empresa</h1>
                        <h1>Sobre nosotros</h1>
                        <h1>Nuestro equipo</h1>
                    </div>

                    <div className="bg-gray flex flex-col space-y-5">
                        <h1 className="font-bold">Recursos</h1>
                        <h1>Ayuda y soporte</h1>
                        <h1>Contáctanos</h1>
                        <h1>Afiliados</h1>
                    </div>

                    <div className="bg-gray flex flex-col space-y-5">
                        <h1 className="font-bold">Acerca de</h1>
                        <h1>Políticas de privacidad</h1>
                        <h1>Términos de servicio</h1>
                    </div>

                </div>

            </div>

        </footer>
    )
}