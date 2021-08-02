import Header from "components/Header";
import Footer from "components/Footer";
function Layout({ children }) {
  return (
    <div className="layout font-sans">
      <Header></Header>

      {children}

      <Footer></Footer>
    </div>
  );
}

export default Layout;
