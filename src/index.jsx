import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Test from "./components/Test";
import ReactRender from "./components/ReactRender";
import Counter from "./components/Counter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route index element={<App />} />
        <Route path="/components/test" element={<Test />} />
        <Route path="/components/reactrender" element={<ReactRender />} />
        <Route path="/components/counter" element={<Counter />} />

        {/* <Route path="dashboard" element={<App />}>
          <Route index element={<Test />} />
          <Route path="settings" element={<Test />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
