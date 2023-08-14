/* eslint-disable react/prop-types */
import { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Textarea,
} from "@chakra-ui/react";

const CommentForm = ({ onSubmit }) => {
	const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(comment);
		setComment("");
	};

	return (
		<Box as="form" onSubmit={handleSubmit} w="100%">
			<FormControl mb={4}>
				<FormLabel>Comment</FormLabel>
				<Textarea
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					required
				/>
			</FormControl>
			<Button
				type="submit"
				colorScheme="pink"
				_hover={{
					bg: "pink.300",
				}}
			>
				Submit Comment
			</Button>
		</Box>
	);
};

export default CommentForm;
