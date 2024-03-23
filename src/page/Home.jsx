import Banner from "../components/Banner";
import HomeDoctorSlider from "../components/Doctor/DoctorHomeSlider";
import Features from "../components/Features";
import Footer from "../components/Footer/Footer";

import Service from "../components/Service";
import Specialize from "../components/Specialize";
import HomeBlogSlider from "../components/blogs/HomeBlogsSlider";

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <Specialize />
      <HomeDoctorSlider />
      <Features />
      <HomeBlogSlider />
      <Footer />
    </div>
  );
}
