<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	const capitalize = (s: string) => {
		return s.charAt(0).toUpperCase() + s.slice(1);
	};
</script>

<div>
	<form method="POST">
		<fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
			<legend class="fieldset-legend">Início</legend>
			<span class="fieldset-label"
				>Você ouvirá 1 minuto de música e será convidado a avalair a música que ouvir. Para uma
				melhor experiência, use fones de ouvido.</span
			>

			<legend class="fieldset-legend">Gênero</legend>
			<select name="genre" class="select" required>
				<option disabled selected>Selecione um gênero</option>
				{#each data.genres as genre}
					<option value={genre}>{capitalize(genre)}</option>
				{/each}
			</select>

			<!-- <legend class="fieldset-legend">Categoria</legend> -->
			<!-- <select name="popularity" class="select" required> -->
			<!-- 	<option disabled selected>Selecione uma categoria</option> -->
			<!-- 	<option value="popular">Top 10</option> -->
			<!-- 	<option value="unpopular">Menos conhecida</option> -->
			<!-- </select> -->
			<!-- <span class="fieldset-label">Categoria baseada na popularidade da música</span> -->

			<button class="btn btn-neutral mt-4" type="submit">Começar</button>
		</fieldset>
	</form>
</div>
