"use client"

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import { BsTwitter } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { GrMedium } from "react-icons/gr"

export default function Footer({ contactMeLinks }) {
  return (
    <footer className="w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <a href={contactMeLinks[0]} aria-label="Email">
          <EmailOutlinedIcon className="icons_contactme" />
        </a>
        <a href={contactMeLinks[1]} aria-label="Twitter">
          <BsTwitter className="icons_contactme" />
        </a>
        <a href={contactMeLinks[2]} aria-label="Linkedin">
          <FaLinkedin className="icons_contactme" />
        </a>
        <a href={contactMeLinks[3]} aria-label="Medium">
          <GrMedium className="icons_contactme" />
        </a>
      </div>
    </footer>
  )
}
