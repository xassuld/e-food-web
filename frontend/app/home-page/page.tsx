import Navigation from "../hasa/navigation";
import Body from "../hasa/body";
import Footer from "../hasa/footer";
export default function First() {
  return (
    <div className="w-screen flex flex-col">
      {/* NAVIGATION */}
      <Navigation />
      {/* BODY */}
      <div>
        <img src="Image÷.png" alt="" />
      </div>
      <Body />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
