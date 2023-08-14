/* eslint-disable react/prop-types */
import {
	Flex,
	Box,
	Text,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";
import LiveComment from "./LiveComment";
import CommentForm from "./CommentForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function VideoEmbed({ title, url, onSubmit, commentList }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);
	const state = useAuthContext();
	const location = useLocation();
	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate("/signin", { state: { from: location.pathname } });
	};
	return (
		<Flex
			flexDir="column"
			alignItems="center"
			justifyContent="center"
			p="10px"
			borderRadius="md"
			boxShadow="base"
			w="100%"
			maxW="1440px"
			overflow="hidden"
			my="10"
		>
			<Box
				as="iframe"
				src={url}
				width="100%"
				sx={{
					aspectRatio: "16/9",
				}}
			/>

			<Text fontSize="xl" fontWeight="bold" mt={4}>
				{title}
			</Text>

			<Button
				my={3}
				ref={btnRef}
				onClick={onOpen}
				colorScheme="pink"
				_hover={{
					bg: "pink.300",
				}}
			>
				Show Comment
			</Button>

			<Modal
				onClose={onClose}
				finalFocusRef={btnRef}
				isOpen={isOpen}
				scrollBehavior="inside"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Comment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<LiveComment commentList={commentList} />
					</ModalBody>
					<ModalFooter justifyContent="flex-start">
						{state.user ? (
							<CommentForm onSubmit={onSubmit} />
						) : (
							<Button
								_hover={{
									bg: "pink.300",
								}}
								colorScheme="pink"
								onClick={handleOnClick}
							>
								Login to Post Comment
							</Button>
						)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
}
