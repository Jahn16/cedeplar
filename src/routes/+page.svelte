<script lang="ts">
	import '../style.css';

	import { Howl } from 'howler';

	import songs from '$lib/data/songs.json';

	let sound1 = new Howl({ src: songs[0].url });
	let sound2 = new Howl({ src: songs[1].url });
	let isPlaying = false;
	let counter = 0;
	const maxValue = 15;
	let currentSoundIndex = 0;

	sound1.once('play', () => {
		let intervalID = setInterval(() => {
			if (counter == maxValue) {
				stop();
				clearInterval(intervalID);
			}
			counter++;
		}, 1000);
	});
	const stop = () => {
		isPlaying = false;
		sound1.stop();
		sound2.stop();
	};
	const play = () => {
		isPlaying = true;
		sound1.play();
	};
	const changeTrack = () => {
		currentSoundIndex++;
		sound1.stop();
		sound2.play();
	};
</script>

<div class="flex justify-center">
	<div class="card w-96 bg-base-100 card-md shadow-sm">
		<div class="card-body">
			<h2 class="card-title">{songs[currentSoundIndex].name}</h2>
			<progress class="progress w-80" value={counter} max="15"></progress>
			<div class="card-actions justify-end">
				{#if !isPlaying}
					<button class="btn" on:click={play}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path fill="currentColor" d="M8.5 8.64L13.77 12L8.5 15.36zM6.5 5v14l11-7" /></svg
						>
						Play
					</button>
				{:else}
					<button class="btn" on:click={changeTrack} disabled={currentSoundIndex != 0}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path fill="currentColor" d="m21 9l-4-4v3h-7v2h7v3M7 11l-4 4l4 4v-3h7v-2H7z" /></svg
						>
						Trocar
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>
