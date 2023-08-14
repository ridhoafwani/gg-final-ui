import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	useColorModeValue,
	Text,
	Link,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";

export default function SimpleCard() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isLoading, error } = useLogin();
	const handleSubmit = async (event) => {
		event.preventDefault();
		await login(email, password);
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Sign in to your account</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<form onSubmit={handleSubmit}>
							{error && (
								<Alert my="2" status="error" variant="subtle">
									<AlertIcon />
									{error}
								</Alert>
							)}
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</FormControl>
							<Stack spacing={10}>
								<Button
									mt="10"
									colorScheme="pink"
									_hover={{
										bg: "pink.300",
									}}
									disabled={isLoading}
									type="submit"
								>
									Sign in
								</Button>
							</Stack>
						</form>
						<Stack pt={6}>
							<Text align={"center"}>
								Didnt have an account?{" "}
								<Link href="/signup" color={"blue.400"}>
									signup
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
