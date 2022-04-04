import React, { Suspense } from "react";
import styled from "styled-components";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

import "./css/styles.css";

const LazyCalendar = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
        () => import("./components/Calendar")
    );
});

const Header = styled.h1`
  position: absolute;
  width: 100%;
  margin: 100px auto;
`;

export default function AppComponent() {
    return (
        <div className="App">
            <ErrorBoundary>
                <Header>Calendar</Header>

                <Suspense maxDuration={300} fallback={<Loader />}>
                    <div className="calendar-container">
                        <LazyCalendar />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
