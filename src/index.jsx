import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Test from "./components/Test";
import ReactRender from "./components/ReactRender";
import Memoize from "./components/Memoize";
import Counter from "./components/Memoize/Counter";
import PokemonList from "./components/Memoize/PokemonList";
import WaveWithMemo from "./components/Memoize/WaveWithMemo";
import WaveWithoutMemo from "./components/Memoize/WaveWithoutMemo";
import UseRef from "./components/UseRef";
import ModalClickOutside from "./components/UseRef/ModalClickOutside";
import StopWatch from "./components/UseRef/StopWatch";
import ManageEffects from "./components/ManageEffects";
import PokemonCarousel from "./components/ManageEffects/PokemonCarousel";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route index element={<App />} />

        <Route path="components">
          <Route path="test" element={<Test />} />
          <Route path="reactrender" element={<ReactRender />} />

          <Route path="memoize" element={<Memoize />}>
            <Route index element={<Test />} />
            <Route path="counter" element={<Counter />} />
            <Route path="pokemon-list" element={<PokemonList />} />
            <Route path="wave-with-memo" element={<WaveWithMemo />} />
            <Route path="wave-without-memo" element={<WaveWithoutMemo />} />
          </Route>

          <Route path="useref" element={<UseRef />}>
            <Route path="modal-click-outside" element={<ModalClickOutside />} />
            <Route path="stopwatch" element={<StopWatch />} />
          </Route>

          <Route path="manage-effects" element={<ManageEffects />}>
            <Route path="pokemon-carousel" element={<PokemonCarousel />} />
          </Route>
        </Route>

        {/* <Route path="/components/test" element={<Test />} />
        <Route path="/components/reactrender" element={<ReactRender />} />
        <Route path="/components/counter" element={<Counter />} />

        <Route path="memoize" element={<Memoize />}>
          <Route index element={<Test />} />
          <Route path="counter" element={<Counter />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
