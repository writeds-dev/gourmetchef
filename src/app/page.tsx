import HeroBanner from "@/components/home/home-banner/page";
import Service from "@/components/home/Details/page"
import Items from "@/components/home//Items/page"
import Partner from "@/components/home/about/page"
import SectionBanner from "@/components/home/SectionBanner/page"
import FAQSection from "@/components/home/faq/page"
import Certification from "@/components/home/Certificate/page";
import Label from "@/components/home/Label/page"
import Whychoosus from "@/components/home/why-us/page"
import BlogPosts from "@/components/home/blog/page";
import ClientSection from "@/components/home/client/page"
import CoreSection from "@/components/home/corevision/page";
import CorePillar from "@/components/home/corepillar/page"
export default async function Home() {

  return (
    <>
<HeroBanner/>
<Service/>
<Items/>
<Certification/>
<Label/>
<Partner/>
<Whychoosus/>
<ClientSection/>
<SectionBanner/>
<CoreSection/>
<CorePillar/>
<FAQSection/>
<BlogPosts/>
</>
  );
}
