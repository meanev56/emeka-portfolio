import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-10">

  <Link href="/projects">
    <Button className="rounded-full px-8 py-6 text-lg">
      View Projects
    </Button>
  </Link>

  <Link href="/resume.pdf">
    <Button variant="outline" className="rounded-full px-8 py-6">
      Download CV
    </Button>
  </Link>

  <Link href="/contact">
    <Button variant="ghost">
      Hire Me
    </Button>
  </Link>

</div>
  )
}

export default HeroButtons