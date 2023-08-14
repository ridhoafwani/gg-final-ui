/* eslint-disable react/prop-types */
import { Box, Flex, Image, Text, Badge } from "@chakra-ui/react";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

const Message = ({ own, message, name, profilePic, time }) => {
	const formattedTime = timeAgo.format(new Date(time));

	if (own) {
		return (
			<Box mt={4} alignSelf="flex-end">
				<Flex>
					<Text
						borderRadius="20px"
						p={2}
						bg="#1877f2"
						color="white"
						maxWidth="300px"
					>
						{message}
					</Text>
				</Flex>
				<Badge fontSize="12px" mt={2} ml="auto" textTransform="lowercase">
					{formattedTime}
				</Badge>
			</Box>
		);
	}

	return (
		<Box mt={4}>
			<Badge fontSize="12px" mb={2} textTransform="capitalizez">
				{name}
			</Badge>
			<Flex>
				<Image
					src={
						profilePic === ""
							? "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							: profilePic
					}
					alt=""
					borderRadius="full"
					boxSize="32px"
					objectFit="cover"
					mr={2}
				/>
				<Text
					borderRadius="20px"
					p={2}
					bg="rgb(245, 241, 241)"
					color="black"
					maxWidth="300px"
				>
					{message}
				</Text>
			</Flex>
			<Badge fontSize="12px" mt={2} textTransform="lowercase">
				{formattedTime}
			</Badge>
		</Box>
	);
};

export default Message;
