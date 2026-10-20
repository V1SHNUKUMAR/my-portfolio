import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

// Old static-site URLs keep working (bookmarks, links shared elsewhere).
const LEGACY_REDIRECTS = {
  'index.html': '/',
  'projects.html': '/projects',
  'about.html': '/about',
  'contact.html': '/contact',
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
