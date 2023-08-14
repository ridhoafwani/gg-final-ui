import {
	Box,
	Flex,
	Avatar,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { logout } = useLogout();
	const state = useAuthContext();
	const location = useLocation();
	const navigate = useNavigate();

	const handleClickLogout = () => {
		logout();
	};

	const handleClickSignIn = () => {
		navigate("/signin", { state: { from: location.pathname } });
	};

	const handleClickSignUp = () => {
		navigate("/signup", { state: { from: location.pathname } });
	};

	return (
		<>
			<Box
				bg={useColorModeValue("gray.100", "gray.900")}
				px={{ base: 4, md: 10 }}
			>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Box>Simple TokPlay</Box>
					</Link>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>

							<Menu>
								{state.user === null ? (
									<>
										<Button
											as={"a"}
											fontSize={"sm"}
											fontWeight={400}
											onClick={handleClickSignIn}
										>
											Sign In
										</Button>
										<Button
											as={"a"}
											display={{ base: "none", md: "inline-flex" }}
											fontSize={"sm"}
											fontWeight={600}
											color={"white"}
											bg={"pink.400"}
											onClick={handleClickSignUp}
											_hover={{
												bg: "pink.300",
											}}
										>
											Sign Up
										</Button>
									</>
								) : (
									<>
										<MenuButton
											as={Button}
											rounded={"full"}
											variant={"link"}
											cursor={"pointer"}
											minW={0}
										>
											<Avatar
												size={"sm"}
												src={
													state.user.profile === ""
														? `https://api.multiavatar.com/${state.user.name}.svg`
														: state.user.profile
												}
											/>
										</MenuButton>
										<MenuList alignItems={"center"}>
											<br />
											<Center>
												<Avatar
													size={"2xl"}
													src={
														state.user.profile === ""
															? `https://api.multiavatar.com/${state.user.name}.svg`
															: state.user.profile
													}
												/>
											</Center>
											<br />
											<Center>
												<Text textTransform="capitalize">
													{state.user.name}
												</Text>
											</Center>
											<br />
											<MenuDivider />
											<MenuItem onClick={handleClickLogout}>Logout</MenuItem>
										</MenuList>
									</>
								)}
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
