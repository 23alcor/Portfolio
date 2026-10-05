import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { ResearchPage } from "./pages/ResearchPage"
import { SiteLayout } from "./components/SiteLayout"
import { ScrollManager } from "./components/ScrollManager"
import { PageViews } from "./components/PageViews"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <PageViews />
      <Toaster />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="research/:slug" element={<ResearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
