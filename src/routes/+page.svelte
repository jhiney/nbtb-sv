<script>
	//Special thanks to the Svelte tutorial for the awesome animation
	//https://svelte.dev/tutorial/congratulations
	//While I've toned down the amount of elements, the bulk of the code remains the same from the tutorial
	import { onMount } from 'svelte';
	let characters = ['🔔', '🌮','🌯'];
	let bells = new Array(8)
		.fill()
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: Math.random() * 100,
				r: 0.5
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;
		function loop() {
			frame = requestAnimationFrame(loop);
			bells = bells.map((emoji) => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;
				return emoji;
			});
		}
		loop();
		return () => cancelAnimationFrame(frame);
	});
</script>

{#each bells as b}
	<span style="left: {b.x}%; top: {b.y}%; transform: scale({b.r})">{b.character}</span>
{/each}

<div
	class="flex flex-1 flex-col justify-center items-center p-8 bg-gradient-to-b from-tbp to-purple-600 min-h-screen"
>
	<h1 class=" text-gray-50 text-9xl text-center unstyled font-black font-sans">
		Nothing Beats
		<br /> The Bell
		<br />
		API Reference
	</h1>
</div>

<style>
	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>
