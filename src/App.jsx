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
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Anonymous from "./guard/Anonymous";

// router and routes
const router = createBrowserRouter(
	// routes
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="video/:id" element={<Video />} />
			</Route>
			<Route element={<Anonymous />}>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
