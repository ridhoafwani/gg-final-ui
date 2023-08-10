// import { Flex, Box, Text } from "@chakra-ui/react";

// export default function VideoEmbed() {
// 	return (
// 		<Flex
// 			flexDir="column"
// 			alignItems="center"
// 			justifyContent="center"
// 			my="10"
// 			p="10px"
// 			borderRadius="md"
// 			boxShadow="lg"
// 			w="100%"
// 			maxW="1080px"
// 			h="auto"
// 			overflow="hidden"
// 		>
// 			<Box
// 				as="iframe"
// 				src="https://www.youtube.com/embed/wI2vqXsjsIo"
// 				width="100%"
// 				sx={{
// 					aspectRatio: "16/9",
// 				}}
// 			/>

// 			<Text>This video Title</Text>
// 		</Flex>
// 	);
// }

import { Flex, Box, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

export default function VideoEmbed() {
	const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
	const [showLiveComment, setShowLiveComment] = useState(false);

	const toggleLiveComment = () => {
		setShowLiveComment((prev) => !prev);
	};

	return (
		<Flex
			flexDir="column"
			alignItems="center"
			justifyContent="center"
			my={10}
			p="10px"
			borderRadius="md"
			boxShadow="lg"
			w="100%"
			maxW="1080px"
			h="auto"
			overflow="hidden"
		>
			<Box
				as="iframe"
				src="https://www.youtube.com/embed/wI2vqXsjsIo"
				width="100%"
				sx={{
					aspectRatio: "16/9",
				}}
			/>

			<Text fontSize="xl" fontWeight="bold" mt={4}>
				This video Title
			</Text>

			{isSmallerThanMd && (
				<Button mt={4} colorScheme="blue" onClick={toggleLiveComment}>
					{showLiveComment ? "Hide Live Comment" : "Show Live Comment"}
				</Button>
			)}

			{showLiveComment && !isSmallerThanMd && (
				<Text fontSize="lg" mt={4}>
					Live Comment section goes here...
				</Text>
			)}
		</Flex>
	);
}
