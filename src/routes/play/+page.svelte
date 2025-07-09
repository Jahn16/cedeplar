<script lang="ts">
	import { Howl } from 'howler';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	import translation from '$lib/data/translation.json';
	const secondPopularity = data.popularity == 'popular' ? 'unpopular' : 'popular';

	let songs = [data.songs[data.genre][data.popularity], data.songs[data.genre][secondPopularity]];

	let sound1 = new Howl({ src: `songs/${data.genre}/${data.popularity}.mp3` });
	let sound2 = new Howl({ src: `songs/${data.genre}/${secondPopularity}.mp3` });
	let isPlaying = $state(false);
	let counter = $state(0);
	const maxValue = 10;
	let currentSoundIndex = $state(0);
	let currentSong = $state(songs[0]);
	let isModalOpen = $state(false);
	let rating = $state(0);
	let infoModalOpen = $state(true);
	let swichTime = $state(-1);
	let ratings = {
		popular: 0,
		unpopular: 0
	};

	let form: HTMLFormElement;

	const end = () => {
		stop();

		rate().then(() => form.submit());
	};

	sound1.once('play', () => {
		let intervalID = setInterval(() => {
			if (counter == maxValue) {
				end();
				clearInterval(intervalID);
			}
			if (isPlaying) {
				counter++;
			}
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
		swichTime = counter;
		currentSong = songs[1];
		isPlaying = true;
		sound2.play();
		currentSoundIndex++;
	};

	const rate = () => {
		isModalOpen = true;
		return new Promise((resolve) => {
			const intervalID = setInterval(() => {
				if (rating != 0 && !isModalOpen) {
					ratings[currentSong.popularity] = rating;
					rating = 0;
					resolve();
					clearInterval(intervalID);
				}
			}, 100);
		});
	};
</script>

<dialog id="my_modal_1" class="modal" class:modal-open={infoModalOpen}>
	<div class="modal-box">
		<h3 class="text-lg font-bold">Atenção: você tem 1 minuto para reprodução</h3>
		<p class="py-4">
			Durante 1 minuto, você pode mudar para ouvir a música da outra categoria se quiser. Mesmo que
			você troque de música, você não ouvirá mais do que 1 minuto de música.
		</p>
		<div class="modal-action">
			<form method="dialog">
				<button
					class="btn"
					onclick={() => {
						infoModalOpen = false;
					}}>OK</button
				>
			</form>
		</div>
	</div>
</dialog>

<dialog id="my_modal_1" class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box">
		<h3 class="text-lg font-bold">Avalie a música!</h3>
		<div class="rating">
			{#each { length: 5 }, i}
				<input
					type="radio"
					name="rating"
					class="mask mask-star-2 bg-orange-400"
					aria-label="{i + 1} star"
					value={i + 1}
					bind:group={rating}
				/>
			{/each}
		</div>

		<div class="modal-action">
			<button
				class="btn btn-primary"
				disabled={rating == 0}
				onclick={() => {
					isModalOpen = false;
				}}>Enviar</button
			>
		</div>
	</div>
</dialog>

<div class="card w-96 bg-base-100 card-md shadow-sm">
	<figure>
		<img
			src="https://artists.apple.com/assets/artist-og-share-c766a5950ae664ea9073ede99da0df1094ae1a24bee32b86ab9e43e7e02bce2e.jpg"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title" style="text-transform: capitalize;">
			{translation.pt.popularity[currentSong.popularity]}
		</h2>
		<br />
		<progress class="progress w-80" value={counter} max={maxValue}></progress>
		<br />

		<div>
			<div class="rating">
				{#each { length: 5 }, rating}
					<div
						class="mask mask-star"
						aria-label="{rating + 1} star"
						aria-current={rating + 1 == currentSong.rating}
					></div>
				{/each}
			</div>
		</div>

		<div class="card-actions justify-end">
			{#if !isPlaying}
				<button class="btn" onclick={play}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path fill="currentColor" d="M8.5 8.64L13.77 12L8.5 15.36zM6.5 5v14l11-7" /></svg
					>
					Play
				</button>
			{:else}
				<button
					class="btn"
					onclick={() => {
						stop();
						rate().then(() => changeTrack());
					}}
					disabled={currentSoundIndex != 0}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path fill="currentColor" d="m21 9l-4-4v3h-7v2h7v3M7 11l-4 4l4 4v-3h7v-2H7z" /></svg
					>
					Trocar
				</button>
			{/if}
		</div>
	</div>
</div>
<form method="POST" bind:this={form}>
	<input type="hidden" name="genre" value={data.genre} />
	<input type="hidden" name="first_popularity" value={data.popularity} />
	<input type="hidden" name="switch_time" value={swichTime} />
	<input type="hidden" name="popular_rating" value={ratings.popular} />
	<input type="hidden" name="unpopular_rating" value={ratings.unpopular} />
</form>
