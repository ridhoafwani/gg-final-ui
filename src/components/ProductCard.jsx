import {
	Flex,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Text,
} from "@chakra-ui/react";

const data = {
	imageURL:
		"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
	name: "Wayfarer Classic hsjkdkjdfk hjsjdchjj jhdhjdh",
	price: "170.000",
};

function ProductCard() {
	return (
		<Flex
			px={{ base: 4, md: 10 }} // Adjust padding based on screen size
			pt="5"
			w="full"
			alignItems="center"
			justifyContent="center"
		>
			<Box
				bg={useColorModeValue("white", "gray.800")}
				maxW={{ base: "full", md: "full" }} // Adjust max width based on screen size
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
			>
				<Image
					src={data.imageURL}
					alt={`Picture of ${data.name}`}
					roundedTop="lg"
				/>

				<Box p={{ base: 4, md: 6 }}>
					{" "}
					{/* Adjust padding based on screen size */}
					<Box display="flex" alignItems="baseline">
						{data.isNew && (
							<Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
								New
							</Badge>
						)}
					</Box>
					<Flex
						mt="1"
						direction="column"
						justifyContent="space-between"
						alignContent="center"
						h={{ base: "auto", md: "auto" }} // Adjust height based on screen size
					>
						<Text
							fontSize="md"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated
						>
							{data.name}
						</Text>
						<Box
							fontSize="2xl"
							color={useColorModeValue("gray.800", "white")}
							mt={{ base: 2, md: 4 }} // Adjust margin top based on screen size
						>
							<Box as="span" color={"gray.600"} fontSize="lg">
								Rp
							</Box>
							{data.price}
						</Box>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
}

export default ProductCard;
