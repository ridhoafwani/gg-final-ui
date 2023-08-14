/* eslint-disable react/prop-types */
import { Box, Image } from "@chakra-ui/react";

function ProductCard({ product }) {
	return (
		<Box maxW="sm" m="5" borderWidth="1px" borderRadius="lg" boxShadow="base">
			<Image src={product.thumbnail} alt={product.title} />

			<Box p="6">
				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					noOfLines={1}
				>
					{product.title}
				</Box>

				<Box>
					<Box as="span" mr="2">
						Rp.
					</Box>
					{product.price.toLocaleString("id-ID")}
				</Box>
			</Box>
		</Box>
	);
}

export default ProductCard;
