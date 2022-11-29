import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div>
			<Link prefetch href='/'>
				Index
			</Link>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Qwik Flower",
};
