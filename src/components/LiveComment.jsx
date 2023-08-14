/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import Comment from "./Comment";
import { useAuthContext } from "../hooks/useAuthContext";

export default function LiveComment({ commentList }) {
	const state = useAuthContext();

	return (
		<Flex p="5" flexDirection="column" maxW="full" w="100%">
			{commentList.map((comment) => {
				return (
					<Comment
						key={comment._id}
						own={
							state.user === null ? false : comment.user.id === state.user.id
						}
						message={comment.comment}
						name={comment.user.name}
						profilePic={comment.user.profilePictUrl}
						time={comment.timestamp}
					/>
				);
			})}
		</Flex>
	);
}
