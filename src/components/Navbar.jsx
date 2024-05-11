import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { cibLeetcode } from "@coreui/icons"
import CIcon from "@coreui/icons-react";

const Navbar = () => {
  return (
    <>
        <nav className='flex items-center justify-between py-4 text-white'>
          <div className="m-6 flex flex-shrink-0 items-center">
            <h1>Ananya.bhar</h1>
          </div>
          <div className="flex items-center m-6 justify-center gap-6 text-2xl">
            <FaLinkedin/>
            <FaGithub />
            <FaSquareXTwitter />
            {/* <CIcon icon={cibLeetcode} /> */}
          </div>
        </nav>
    </>
  )
}

export default Navbar