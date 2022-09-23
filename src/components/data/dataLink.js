import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const  socialIconLink = [
    { id: "fa", label: <FaFacebook />, to: "https://www.facebook.com", colori: "green.400" , aLabel :"Facebook"},
    { id: "tw", label: <FaTwitter />, to: "https://www.facebook.com", colori: "green.400" , aLabel :"twitter"},
    { id: "in", label: <FaInstagram />, to: "https://www.facebook.com", colori: "green.400", aLabel :"Instagram" }
]

export const linkListFooter = [
    { id: "PP", url: "https://dietplannerapp.com/privacy-policy/", label: "Privacy" },
    { id: "T", url: "https://dietplannerapp.com/terms/", label: "Terms" },
    { id: "C", to: "/contact", label: "Contact" }

]