/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import ProductList from "../components/ProductList";
import VideoEmbed from "../components/VideoEmbed";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const socket = io.connect("https://ggfinalapi.ridhoafwani.dev");

export default function Video() {
	const [commentList, setCommentList] = useState([]);
	const { id } = useParams();
	const [video, setVideo] = useState(null);
	const [products, setProducts] = useState([]);
	const state = useAuthContext();

	const fetchComments = async () => {
		try {
			const commentResponse = await axios.get(
				`https://ggfinalapi.ridhoafwani.dev/videos/${id}/comments`
			);
			setCommentList(commentResponse.data);
		} catch (error) {
			console.error("Error fetching comments:", error);
		}
	};

	const fetchData = async () => {
		try {
			const videoResponse = await axios.get(
				`https://ggfinalapi.ridhoafwani.dev/videos/${id}`
			);
			setVideo(videoResponse.data);

			const productsResponse = await axios.get(
				`https://ggfinalapi.ridhoafwani.dev/videos/${id}/products`
			);
			setProducts(productsResponse.data);

			await fetchComments();
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
		socket.emit("join_room", id);
	}, [id]);

	useEffect(() => {
		socket.on("new_comment", () => {
			fetchComments();
		});
	}, [socket]);

	const onSubmit = async (comment) => {
		await axios.post(
			`https://ggfinalapi.ridhoafwani.dev/videos/${id}/comments`,
			{
				comment: comment,
				userId: state.user.id,
			}
		);
		await socket.emit("add_comment", id);
		await fetchComments();
	};

	return (
		<Flex
			onClick={() => {
				socket.emit("add_comment", 1);
			}}
			direction="column"
			alignItems="center"
		>
			<VideoEmbed
				url={video?.url}
				title={video?.title}
				onSubmit={onSubmit}
				commentList={commentList}
			/>

			<ProductList products={products} />
		</Flex>
	);
}
