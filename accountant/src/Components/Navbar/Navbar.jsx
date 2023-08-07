import React from "react";

//Import icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'

export default function Navbar(){
    return(
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon"/>
                </div>

                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate/>Support</li>
                    <li className="flex"> <AiOutlineGlobal/>Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign in</span>
                    <span>Sign out</span>
                </div>
            </div>
        </div>
    )
}