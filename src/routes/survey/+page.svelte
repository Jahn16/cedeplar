<script lang="ts">
	import questions from '$lib/data/questions.json';

	let step = 1;
	let question = questions[step - 1];
	let inputName = `question-${step}`;
	let allAnswers: { string: string }[] = [];

	const getAnswers = (): { string: string }[] | undefined => {
		if (question.type === 'text') {
			const input = document.querySelector(`input[type="text"]`);
			if (!input.value) {
				return undefined;
			}
			return [{ [inputName]: input.value }];
		}
		let questionAnswers: { string: string }[] = [];
		const inputs = document.querySelectorAll('input[type="radio"]:checked');
		if (
			inputs.length === 0 ||
			(question.type === 'table_radio' && inputs.length < question.headers.length)
		) {
			return undefined;
		}
		inputs.forEach((input) => {
			questionAnswers.push({ [input.name]: input.value });
		});
		console.log('Collected answers:', questionAnswers);
		return questionAnswers;
	};
</script>

<!-- eslint-disable svelte/require-each-key -->
<div class="container-md">
	<h2 class="card-title mb-5">
		{question.question}
	</h2>
	{#if question.options}
		{#each question.options as option}
			<div class="mt-3">
				<label>
					<input type="radio" name={inputName} value={option} class="radio" />
					{option}
				</label>
			</div>
		{/each}
	{:else if question.type === 'text'}
		<input class="input" type="text" id={inputName} name={inputName} />
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
						{#each question.headers.slice(1) as header}
							<td>
								<input type="radio" name={inputName + '-' + (i + 1)} value={header} class="radio" />
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
				let questionAnswers = getAnswers();
				if (!questionAnswers) {
					alert('Responda a pergunta antes de prosseguir.');
					return;
				}

				step++;
				question = questions[step - 1];
				inputName = `question-${step}`;
				allAnswers = allAnswers.concat(questionAnswers);
				console.log('All answers so far:', allAnswers);
			}}>Proximo</button
		>
	</div>
</div>
