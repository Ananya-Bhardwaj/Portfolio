import { FaGit, FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { cibLeetcode } from "@coreui/icons"
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className='flex items-center justify-between py-4 text-white'>
          <div className="m-6 flex flex-shrink-0 items-center">
            <h1>Ananya.Bhardwaj</h1>
          </div>
          <div className="flex items-center m-6 justify-center gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/ananya-bhardwaj-093713227/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/Ananya-Bhardwaj" target="_blank"><FaGithub/></a>
            <a href="https://twitter.com/AnanyaBhar1049" target="_blank"><FaSquareXTwitter/></a>
            {/* <CIcon icon={cibLeetcode} /> */}
          </div>
        </nav>
    </>
  )
}

export default Navbar