import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const About = React.lazy(() => import('about/Module'));
const AboutTabs = React.lazy(() => import('about/Tabs'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <AboutTabs />
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="main" />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
