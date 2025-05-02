<script lang="ts">
	let step = 1;
</script>

<div></div>
<div class="card w-96 bg-base-100 card-lg shadow-sm">
	<div class="card-body">
		{#if step == 1}
			<h2 class="card-title">
				Com que frequência você usa o Spotify ou outro streaming de música para ouvir músicas?
			</h2>
			<label>
				<input type="radio" name="freq-streaming" value="todos" class="radio" />
				Todos os dias
			</label><br />
			<label>
				<input type="radio" name="freq-streaming" value="5-6" class="radio" />
				5 a 6 dias na semana
			</label><br />
			<label>
				<input type="radio" name="freq-streaming" value="4-5" class="radio" />
				4 a 5 dias na semana
			</label><br />
			<label>
				<input type="radio" name="freq-streaming" value="3-4" class="radio" />
				3 a 4 dias na semana
			</label><br />
			<label>
				<input type="radio" name="freq-streaming" value="2-3" class="radio" />
				2 a 3 dias na semana
			</label><br />
			<label>
				<input type="radio" name="freq-streaming" value="1" class="radio" />
				Uma vez na semana
			</label><br />
		{:else}
			<h2 class="card-title">
				Com que frequência você usa o Spotify ou outro streaming de música para descobrir uma música
				nova ou um novo artista?
			</h2>

			<label>
				<input type="radio" name="freq-new" value="sempre" class="radio" />
				Sempre
			</label><br />
			<label>
				<input type="radio" name="freq-new" value="quase-sempre" class="radio" />
				Quase sempre
			</label><br />
			<label>
				<input type="radio" name="freq-new" value="as-vezes" class="radio" />
				Às vezes
			</label><br />
			<label>
				<input type="radio" name="freq-new" value="quase-nunca" class="radio" />
				Quase nunca
			</label><br />
			<label>
				<input type="radio" name="freq-new" value="nunca" class="radio" />
				Nunca
			</label><br />
		{/if}

		<div class="justify-end card-actions">
			<button class="btn btn-primary" on:click={step++}>Proximo</button>
		</div>
	</div>
</div>
