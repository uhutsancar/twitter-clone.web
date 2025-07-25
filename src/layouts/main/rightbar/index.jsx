import Premium from "~/layouts/main/rightbar/premium";
import Search from "./search";
import Topics from "~/layouts/main/rightbar/topics";
import WhoFollow from "./who-follow";
import Footer from "./footer";
import StickyBox from "react-sticky-box";

export default function RightBar() {
  return (
    <StickyBox className="self-start" offsetBottom={80}>
      <aside className="w-[350px] mr-2.5">
        <Search />
        <Premium />
        <Topics />
        <WhoFollow />
        <Footer />
      </aside>
    </StickyBox>
  );
}
