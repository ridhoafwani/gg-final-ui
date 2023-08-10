/* eslint-disable react/prop-types */
import { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from "@chakra-ui/react";

const CommentForm = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ name, comment });
		setName("");
		setComment("");
	};

	return (
		<Box as="form" onSubmit={handleSubmit}>
			<FormControl mb={4}>
				<FormLabel>Name</FormLabel>
				<Input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Comment</FormLabel>
				<Textarea
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					required
				/>
			</FormControl>
			<Button type="submit" colorScheme="blue">
				Submit Comment
			</Button>
		</Box>
	);
};

export default CommentForm;
