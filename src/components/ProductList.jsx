import { Flex, useColorModeValue } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function ProductList() {
	return (
		<Flex
			my={{ base: "2 ", md: "10" }}
			mx={{ base: "2 ", md: "10" }}
			h={{ base: "auto", md: "100vh" }}
			flexDirection={{ base: "row", md: "column" }}
			bg={useColorModeValue("white", "gray.800")}
			maxW={{ base: "full", md: "xs" }}
			borderWidth="1px"
			rounded="lg"
			shadow="lg"
			overflow="auto" // or "auto" depending on your needs
			css={{
				"&::-webkit-scrollbar": {
					width: "0.4em", // adjust as needed
				},
				"&::-webkit-scrollbar-thumb": {
					backgroundColor: "rgba(0, 0, 0, 0.3)", // adjust as needed
					borderRadius: "0.4em", // adjust as needed
				},
			}}
		>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</Flex>
	);
}
