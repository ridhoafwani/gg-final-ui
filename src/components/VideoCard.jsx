/* eslint-disable react/prop-types */
import { Box, Image, Badge } from "@chakra-ui/react";

export default function VideoCard({ title, thumbnail }) {
	return (
		<Box m="5" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image src={thumbnail} alt={title} />

			<Box p="6">
				<Box display="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="pink">
						Video
					</Badge>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					noOfLines={2}
					height="3em"
				>
					{title}
				</Box>
			</Box>
		</Box>
	);
}
