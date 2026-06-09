import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { useTheme } from "./hooks/useTheme";
import AboutPage from "./pages/AboutPage";
import BlogMaterialDetailPage from "./pages/BlogMaterialDetailPage";
import BlogMaterialsPage from "./pages/BlogMaterialsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogSeriesDetailPage from "./pages/BlogSeriesDetailPage";
import ContactPage from "./pages/ContactPage";
import CookiesPage from "./pages/CookiesPage";
import HomePage from "./pages/HomePage";
import LgpdPage from "./pages/LgpdPage";
import NotFoundPage from "./pages/NotFoundPage";
import OemPage from "./pages/OemPage";
import PlatformPage from "./pages/PlatformPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SegmentsPage from "./pages/SegmentsPage";
import TermsPage from "./pages/TermsPage";
import UseCasesPage from "./pages/UseCasesPage";

function LegacyRedirect() {
  return <Navigate replace to="/segmentos" />;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Routes>
      <Route element={<SiteLayout onToggleTheme={toggleTheme} theme={theme} />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<PlatformPage />} path="/plataforma" />
        <Route element={<OemPage />} path="/oem" />
        <Route element={<SegmentsPage />} path="/segmentos" />
        <Route element={<UseCasesPage />} path="/casos-de-uso" />
        <Route element={<AboutPage />} path="/sobre" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<BlogMaterialsPage />} path="/blog/materiais" />
        <Route element={<BlogMaterialDetailPage />} path="/blog/materiais/:slug" />
        <Route element={<BlogSeriesDetailPage />} path="/blog/series/:slug" />
        <Route element={<BlogPostPage />} path="/blog/:slug" />
        <Route element={<ContactPage />} path="/contato" />
        <Route element={<PrivacyPolicyPage />} path="/politica-de-privacidade" />
        <Route element={<TermsPage />} path="/termos-de-uso" />
        <Route element={<CookiesPage />} path="/cookies" />
        <Route element={<LgpdPage />} path="/lgpd" />
        <Route element={<LegacyRedirect />} path="/solucoes" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  );
}
