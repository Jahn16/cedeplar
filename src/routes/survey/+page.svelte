<script lang="ts">
	import questions from '$lib/data/questions.json';

	let step = 1;
	let question = questions[step - 1];
	let inputName = `question-${step}`;

	const getAnswers = () => {
		document
			.querySelectorAll('input[type="radio"]:checked, input[type="text"]')
			.forEach((input) => {
				console.log(`${input.value}`);
			});
	};
</script>

<!-- eslint-disable svelte/require-each-key -->
<div></div>
<div class="card w-96 bg-base-100 card-lg shadow-sm">
	<div class="card-body">
		<h2 class="card-title">
			{question.question}
		</h2>
		{#if question.options}
			{#each question.options as option}
				<label>
					<input type="radio" name={inputName} value={option} class="radio" />
					{option}
				</label><br />
			{/each}
		{:else if question.type === 'text'}
			<input class="input" type="text" id={inputName} />
		{:else if question.type === 'table_radio'}
			<table class="table table-sm">
				<thead>
					<tr>
						{#each question.headers as header}
							<th scope="col">{header}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each question.rows as row, i}
						<tr>
							<th>{row}</th>
							{#each question.headers as header}
								<td>
									<input type="radio" name={inputName + '-' + i} value={header} class="radio" />
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}

		<div class="justify-end card-actions">
			<button
				class="btn btn-primary"
				type="submit"
				on:click={() => {
					step++;
					question = questions[step - 1];
					inputName = `question-${step}`;
					getAnswers();
				}}>Proximo</button
			>
		</div>
	</div>
</div>
