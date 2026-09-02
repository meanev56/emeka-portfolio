import Image from 'next/image'

function ProfileImage() {
  return (
    <div className="relative w-72 h-72 mx-auto">

  <div className="absolute inset-0 rounded-full bg-linear-to from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-50"/>

  <Image
    src="/profile.png"
    alt="Njoku Emeka"
    fill
    className="rounded-full object-cover border-4 border-slate-800"
  />

</div>
  )
}

export default ProfileImage