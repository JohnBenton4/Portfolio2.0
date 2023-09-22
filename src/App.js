import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Work = lazy(() => import("./routes/Work"));
const Resume = lazy(() => import("./routes/Resume"));
const Contact = lazy(() => import("./routes/Contact"));
const DateApp = lazy(() => import("./routes/DateApp"));
const IntrovertEmpowerment = lazy(() => import("./routes/IntrovertEmpowerment"));
const MoodGame = lazy(() => import("./routes/MoodGame"));


const App = () => {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dateApp" element={<DateApp />} />
          <Route path="/introvertEmpowerment" element={<IntrovertEmpowerment />} />
          <Route path="/moodGame" element={<MoodGame />} />


        </Routes>
      </Suspense>
    </>
  );
};

export default App;
