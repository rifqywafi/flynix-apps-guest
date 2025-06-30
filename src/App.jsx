
// import './App.css'
import { Routes, Route } from "react-router-dom"
import "./assets/tailwind.css"
import React, {Suspense} from "react"
import Loading from "./components/Loading";
// import ContactForm from "./pages/contact-us/ContactForm"
// import LandingPage from './pages/landing-page/LandingPage'
// import ArticleDetail from './pages/articles/ArticleDetail'
// import Faq from "./pages/faq/Faq"
// import OurTeam from "./pages/our-team/OurTeam"
// import Navbar from "./layouts/Navbar"
// import Footer from "./layouts/Footer"
// import UserReview from "./pages/reviews/UserReview"
// import Career from "./pages/careers/Career"
// import ErrorPage from "./pages/errors/ErrorPage"

const ContactForm = React.lazy(() => import("./pages/ContactForm"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const ArticleDetail = React.lazy(() => import("./pages/ArticleDetail"));
const Faq = React.lazy(() => import("./pages/Faq"));
const OurTeam = React.lazy(() => import("./pages/OurTeam"));
const UserReview = React.lazy(() => import("./pages/UserReview"));
const Career = React.lazy(() => import("./pages/Career"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Articles = React.lazy(() => import("./pages/Articles"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const PricingSimulate = React.lazy(() => import("./pages/PricingSimulate"));
const BookingDetail = React.lazy(() => import("./pages/BookingDetail"))
const CareerDetail = React.lazy(() => import("./pages/CareerDetail"))
const OurTeamDetail = React.lazy(() => import("./pages/OurTeamDetail"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Katalog = React.lazy(() => import("./pages/Katalog"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const ErrorLayout = React.lazy(() => import("./layouts/ErrorLayout"));

function App() {
  return (
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/article/detail" element={<ArticleDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/our-team/:id" element={<OurTeamDetail />} />
            <Route path="/user-review" element={<UserReview />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:id" element={<CareerDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:id" element={<BookingDetail />} />
            <Route path="/article" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/:id" element={<PricingSimulate />} />
            <Route path="/katalog" element={<Katalog />} />
          </Route>
          <Route element={<ErrorLayout />}>
            <Route path="*" element={<ErrorPage code={404}/>}/>
            <Route path="/401" element={<ErrorPage code={401} />}/>
            <Route path="/403" element={<ErrorPage code={403} />}/>
            <Route path="/400" element={<ErrorPage code={400}/>}/>
          </Route>
        </Routes>
      </Suspense>
  )
}

export default App
