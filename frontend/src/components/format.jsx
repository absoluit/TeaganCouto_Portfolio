import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

function Format() {
  return (
    <div className="appShell">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Format;