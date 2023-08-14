/* eslint-disable react/prop-types */
import {
	InputGroup,
	Input,
	InputRightElement,
	IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBox({ searchTerm, setSearchTerm }) {
	return (
		<InputGroup my="5" maxW="md" mx="auto">
			<Input
				placeholder="Search videos"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				borderRadius="md"
			/>
			<InputRightElement width="4rem">
				<IconButton
					aria-label="Search"
					icon={<SearchIcon />}
					borderRadius="full"
					onClick={() => {}}
					bg="transparent"
					_hover={{ bg: "transparent" }}
				/>
			</InputRightElement>
		</InputGroup>
	);
}
