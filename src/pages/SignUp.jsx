import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSignup } from "../hooks/useSignup";

export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (event) => {
		event.preventDefault();
		await signup(email, password, name);
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
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Sign up for new account
					</Heading>
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
							<FormControl id="name" isRequired>
								<FormLabel>Name</FormLabel>
								<Input
									type="text"
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
							</FormControl>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={showPassword ? "text" : "password"}
										onChange={(e) => setPassword(e.target.value)}
										value={password}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword((showPassword) => !showPassword)
											}
										>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Stack spacing={10}>
								<Button
									mt="10"
									type="submit"
									loadingText="Submitting"
									size="lg"
									colorScheme="pink"
									_hover={{
										bg: "pink.300",
									}}
									disabled={isLoading}
								>
									Sign up
								</Button>
							</Stack>
						</form>
						<Stack pt={6}>
							<Text align={"center"}>
								Already a user?{" "}
								<Link href="/signin" color={"blue.400"}>
									Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
