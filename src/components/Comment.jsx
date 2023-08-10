import { Flex, Image, Text } from "@chakra-ui/react";

export default function Comment() {
	return (
		<Flex wrap="wrap" marginTop="2" display="flex" alignItems="center">
			<Image
				borderRadius="full"
				boxSize="20px"
				src="https://100k-faces.glitch.me/random-image"
				alt={`Avatar of Ridho Afwani`}
			/>
			<Text fontWeight="semibold" ml="2">
				Ridho Afwani
			</Text>
			<Text ml="2"> : </Text>
			<Text ml="2">This is comment text that sent into the video</Text>
		</Flex>
	);
}
