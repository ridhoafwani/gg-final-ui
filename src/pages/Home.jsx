import { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import { Flex, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBox from "../components/SearchBox";

export default function Home() {
	const [videos, setVideos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		axios
			.get("https://ggfinalapi.ridhoafwani.dev/videos/")
			.then((response) => {
				setVideos(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const filteredVideos = videos.filter((video) =>
		video.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Container maxW="container.2xl">
			<SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Flex wrap="wrap" mt="10px" height="100%" px="20px" justify="center">
				{filteredVideos.length > 0 ? (
					filteredVideos.map((video) => (
						<Link
							to={`/video/${video._id}`}
							key={video._id}
							style={{ textDecoration: "none" }}
						>
							<VideoCard title={video.title} thumbnail={video.thumbnail} />
						</Link>
					))
				) : (
					<Text fontSize="xl" color="gray.500">
						No videos found.
					</Text>
				)}
			</Flex>
		</Container>
	);
}
