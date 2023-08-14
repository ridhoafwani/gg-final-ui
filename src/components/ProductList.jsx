/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
	return (
		<Flex wrap="wrap" w="100%" maxW="1440px" justifyContent="center">
			{products.map((product) => (
				<Link
					to={product.url}
					key={product._id}
					style={{ textDecoration: "none" }}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ProductCard key={product.id} product={product} />
				</Link>
			))}
		</Flex>
	);
}
