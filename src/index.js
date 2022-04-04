import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

import "./styles.css";

const Calendar = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () => import("./components/Calendar")
  );
});

const Header = styled.h1`
  position: absolute;
  width: 100%;
  margin: 100px auto;
`;

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header>Calendar</Header>

        <Suspense maxDuration={300} fallback={<Loader />}>
          <div className="calendar-container">
            <Calendar />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
