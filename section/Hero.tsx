import Container from "../components/container";
import AuroraBackground from "../components/hero/aurora-background";
import AvailabilityBadge from "../components/hero/AvailabilityBadge";
import FloatingIcons from "../components/hero/floating-icons";
import HeroButtons from "../components/hero/HeroButtons";
import HeroStats from "../components/hero/HeroStats";
import HeroTyping from "../components/hero/HeroTyping";
import ProfileImage from "../components/hero/ProfileImage";
import ScrollIndicator from "../components/hero/ScrollIndicator";
import SocialLinks from "../components/hero/SocialLinks";

export default function Hero() {
 return (
 <section className="relative min-h-screen flex items-center">

  <AuroraBackground/>

  <Container>

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}

      <div>
        <AvailabilityBadge/>

        <h1>
          Hi, I&apos;m
          <span className="gradient-text">
            Njoku Emeka
          </span>
        </h1>

        <HeroTyping/>

        <p>
          Frontend Engineer building production-ready fintech,
          media, travel and telecom products with Next.js.
        </p>

        <HeroButtons/>

        <SocialLinks/>
      </div>

      {/* RIGHT IMAGE */}

      <div className="relative">

        <FloatingIcons/>

        <ProfileImage/>

      </div>

    </div>

    <HeroStats/>

    <ScrollIndicator/>

  </Container>

</section>
 )
}