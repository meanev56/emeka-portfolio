import Container from "@/components/container";
import ContactHeader from "@/components/contact/contact-header";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactSocials from "@/components/contact/contact-socials";

export const metadata = {
  title: "Contact | Njoku Emeka",
  description: "Get in touch with Njoku Emeka for frontend engineering opportunities.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <ContactHeader />

        <section className="mt-20 grid lg:grid-cols-[1.2fr_.8fr] gap-12">
          <ContactForm />

          <div className="space-y-8">
            <ContactInfo />
            <ContactSocials />
          </div>
        </section>
      </Container>
    </main>
  );
}