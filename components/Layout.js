import Header from "components/Header";
import Footer from "components/Footer";
function Layout({ children }) {
  return (
    <div className="layout font-sans min-h-full grid grid-rows-main">
      <Header></Header>

      {children ? children : <div className="placeholder">&nbsp;</div>}

      <Footer></Footer>
    </div>
  );
}

export default Layout;
