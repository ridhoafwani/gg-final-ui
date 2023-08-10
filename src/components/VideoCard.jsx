import { StarIcon } from "@chakra-ui/icons";
import {
	Box,
	Card,
	CardBody,
	Stack,
	Text,
	Tag,
	TagLeftIcon,
	TagLabel,
} from "@chakra-ui/react";

export default function VideoCard() {
	return (
		<Card
			m="6px"
			borderRadius="16px"
			boxShadow="lg"
			maxWidth="280px"
			minHeight="420px"
			backgroundImage="https://i.ytimg.com/vi_webp/nf3EUJT9pjY/movieposter.webp"
			backgroundSize="cover"
		>
			<Box
				width="100%"
				height="100%"
				backgroundColor="rgba(0, 0, 0, 0.6)" // Add a semi-transparent black overlay
				borderRadius="16px"
			>
				<CardBody p="16px" height="100%">
					<Tag size="md" variant="solid" colorScheme="pink">
						LIVE
					</Tag>

					<Stack
						display="flex"
						flexDir="column"
						justifyContent="flex-end"
						height="100%"
						pb="30px"
					>
						<Tag
							size="md"
							variant="solid"
							colorScheme="pink"
							width="fit-content"
						>
							Hanya Saat LIVE
						</Tag>

						<Tag
							size="lg"
							variant="solid"
							colorScheme="green"
							width="fit-content"
						>
							<TagLeftIcon boxSize="12px" as={StarIcon} />
							<TagLabel>Kupon Spesial</TagLabel>
						</Tag>

						<Text fontSize="xl" fontWeight="bold" color="white">
							Gabung Lagi Yuk Bund😮✨shgdjkdshfvjkdshkljashdkjlfhdskljfh
						</Text>
					</Stack>
				</CardBody>
			</Box>
		</Card>
	);
}
