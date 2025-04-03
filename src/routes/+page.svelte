<script lang="ts">
	import { Howl } from 'howler';

	import songs from '$lib/data/songs.json';

	let sound1 = new Howl({ src: songs[0].url });
	let sound2 = new Howl({ src: songs[1].url });

	sound1.once('play', async () => {
		await new Promise((resolve) => setTimeout(resolve, 10000));
		sound1.stop();
		sound2.stop();
	});
	const play = () => {
		sound1.play();
	};
	const changeTrack = () => {
		sound1.stop();
		sound2.play();
	};
</script>

<button on:click={play}>Play</button>

<button on:click={changeTrack}>Troca</button>
