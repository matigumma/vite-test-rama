// yarn add react-router-dom

// App:
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Info....
import Blog....
import Contacto....

<Router>
    <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/:id" element={<BlogDetails />} />
    </Routes>
</Router>