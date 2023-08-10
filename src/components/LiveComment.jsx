import { Flex, useColorModeValue } from "@chakra-ui/react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function LiveComment() {
	return (
		<Flex
			mt="10"
			mx="10"
			height="100 hv"
			flexDirection="column"
			bg={useColorModeValue("white", "gray.800")}
			maxW="full"
			overflow="scroll" // or "auto" depending on your needs
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
			<Flex
				height="70%"
				p="5"
				flexDirection="column"
				bg={useColorModeValue("white", "gray.800")}
				maxW="full"
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
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</Flex>

			<Flex
				mt="5"
				p="2"
				bg={useColorModeValue("white", "gray.800")}
				maxW="full"
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				alignContent="flex-end"
			>
				<CommentForm />
			</Flex>
		</Flex>
	);
}
