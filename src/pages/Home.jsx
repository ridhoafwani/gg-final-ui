import VideoCard from "../components/VideoCard";
import { Flex } from "@chakra-ui/react";

export default function Home() {
	return (
		<Flex wrap="wrap" mt="10px" height="100%" px="20px">
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
		</Flex>
	);
}
