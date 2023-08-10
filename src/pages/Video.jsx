import ProductList from "../components/ProductList";
import VideoEmbed from "../components/VideoEmbed";
import LiveComment from "../components/LiveComment";

import { Flex, useMediaQuery } from "@chakra-ui/react";

export default function Video() {
	const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");

	return (
		<Flex
			direction={{ base: "column", md: "row" }} // Column on small screens, row on larger screens
			h={{ base: "auto", md: "100vh" }} // 100vh on small screens, auto on larger screens
			overflow="hidden"
		>
			<ProductList flex={isSmallerThanMd ? 0 : 1} />
			<VideoEmbed flex={2} />
			{isSmallerThanMd ? null : <LiveComment flex={1} />}
		</Flex>
	);
}
