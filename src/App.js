import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Tours from "./pages/Tours"
import Layout from './assets/Layout';
import NotFound from "./pages/NotFound"
import TourLayout from "./assets/TourLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tours" element={<TourLayout />}>
          <Route index  element={<Tours />} />
        </Route> 
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
