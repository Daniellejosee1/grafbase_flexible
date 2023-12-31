import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from '@/components/AuthProviders';

const Navbar = () => {
    const Session = {};
    return(
        <nav className = "flexBetween navbar">
            <div className = "flex-1 gap-10 flexStart">
                <Link href ="/">
                    <Image
                         src= "/logo.svg"
                        width={115}
                        height={43}
                        alt="Flexible"
                    />
                
                </Link>
                <ul className = "xl:flex-hidden text-small gap-7">
                    {NavLinks.map((link) =>(
                        <Link href = {link.href} key = {link.key} >
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="gap-4 flexCenter">
                session ? {
                    
                    <>
                        UserPhoto 

                        <Link href ="/create-project">
                            Share work
                        </Link>
                    </>
                } :
                {
                    <AuthProviders/>}
                
            </div>
        </nav>
    )

}

export default Navbar