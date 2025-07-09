<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';
	import translation from '$lib/data/translation.json';

	let { data }: PageProps = $props();
	const popularities = ['popular', 'unpopular'];
</script>

<div class="grid grid-cols-2 gap-4">
	{#each popularities as popularity}
		<div class="card w-96 bg-base-100 card-md shadow-sm">
			<div class="card-body">
				<h2 class="card-title" style="text-transform: capitalize;">
					{translation.pt.popularity[popularity]}
				</h2>
				<br />
				<br />

				<div>
					<div class="rating">
						{#each { length: 5 }, rating}
							<div
								class="mask mask-star-2 bg-orange-400"
								aria-label="{rating + 1} star"
								aria-current={data.rating[popularity] == rating}
							></div>
						{/each}
					</div>
				</div>

				<div class="card-actions justify-end">
					<button class="btn" on:click={goto(`/play?genre=${data.genre}&popularity=${popularity}`)}>
						Selecionar
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>
