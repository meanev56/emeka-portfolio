import {
 RiGithubFill,
 RiLinkedinBoxFill
} from "react-icons/ri";

function SocialLinks() {
  return (

<div className="flex gap-6 mt-8">

  <a href="https://github.com/meanev56">
    <RiGithubFill className="text-3xl hover:text-blue-400"/>
  </a>

  <a href="https://www.linkedin.com/in/njoku-emeka-7b0a8613a/">
    <RiLinkedinBoxFill className="text-3xl hover:text-blue-400"/>
  </a>

  <a href="#">
    Upwork
  </a>

</div>
  )
}

export default SocialLinks