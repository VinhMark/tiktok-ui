import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "~/routes";
import { DefaultLayout } from "~/components/Layouts";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Page = route.component;
            // Default layout
            let Layout = DefaultLayout;
            // Has layout is route object layout
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              // Is not layout
              Layout = Fragment;
            }
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                key={index}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
