import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Video from "./pages/Video";

// router and routes
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="video" element={<Video />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
