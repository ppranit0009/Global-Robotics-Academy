import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MomentumStats from './components/MomentumStats.jsx';
import Difference from './components/Difference.jsx';
import PartnerBand from './components/PartnerBand.jsx';
import Pathway from './components/Pathway.jsx';
import Competitions from './components/Competitions.jsx';
import TeamSection from './components/TeamSection.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import CompetitionsPage from './pages/Competitions.jsx';
import Programs from './pages/Programs.jsx';
import TeamsPage from './pages/Teams.jsx';
import Impact from './pages/Impact.jsx';
import Partners from './pages/Partners.jsx';
import GalleryPage from './pages/Gallery.jsx';
import Videos from './pages/Videos.jsx';
import ContactPage from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import TeamForm from './pages/TeamForm.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import AdminLayout from './components/admin/AdminLayout.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import AdminLogin from './pages/admin/Login.jsx';
import AdminDashboard from './pages/admin/Dashboard.jsx';
import AdminCompetitions from './pages/admin/Competitions.jsx';
import AdminPrograms from './pages/admin/Programs.jsx';
import AdminTeams from './pages/admin/Teams.jsx';
import AdminGallery from './pages/admin/Gallery.jsx';
import AdminContact from './pages/admin/Contact.jsx';
import AdminUsers from './pages/admin/Users.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Pathway />
                <MomentumStats />
                <Difference />
                <PartnerBand />
                <Competitions showAllCompetitions={false} />
                <Gallery />
                <Footer />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/team-form" element={<TeamForm />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/competitions" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminCompetitions />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/programs" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminPrograms />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/teams" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminTeams />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/gallery" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminGallery />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/contact" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminContact />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminUsers />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="*" element={
              <>
                <Hero />
                <Pathway />
                <MomentumStats />
                <Difference />
                <PartnerBand />
                <Competitions showAllCompetitions={false} />
                <Gallery />
                <Footer />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;