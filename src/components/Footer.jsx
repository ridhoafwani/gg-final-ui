/* eslint-disable react/prop-types */
import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
			mt="5"
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Text>© 2023 Developed by Afwani for GG 3.0 final project</Text>
				<Stack direction={"row"} spacing={6}>
					<SocialButton
						label={"Twitter"}
						href={"https://twitter.com/afwani_ridho"}
					>
						<FaTwitter />
					</SocialButton>
					<SocialButton
						label={"LinkedIn"}
						href={"https://www.linkedin.com/in/ridhoafwani"}
					>
						<FaLinkedin />
					</SocialButton>
					<SocialButton
						label={"Instagram"}
						href={"https://www.instagram.com/afwaniridho/"}
					>
						<FaInstagram />
					</SocialButton>
					<SocialButton
						label={"Github"}
						href={"https://github.com/ridhoafwani"}
					>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}
