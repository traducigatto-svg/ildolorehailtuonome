import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Libro from "@/pages/Libro";
import Notti from "@/pages/Notti";
import Lettera from "@/pages/Lettera";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.4 }}>
            <div className="grain min-h-screen bg-night text-ink">
                <BrowserRouter>
                    <ScrollToTop />
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/libro" element={<Libro />} />
                        <Route path="/le-7-notti" element={<Notti />} />
                        <Route path="/lettera" element={<Lettera />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </ReactLenis>
    );
}

export default App;
