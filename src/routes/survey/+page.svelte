<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let step = 1;
	let question = $state(data.questions[step - 1]);
	let inputName = $state(`question-${step}`);
	type Answer = {
		questionID: string;
		answer: string;
	};
	let answers: Answer[] = $state([]);
	let form: HTMLFormElement;

	const getAnswers = (): Answer[] | undefined => {
		if (question.type === 'text') {
			const input = document.querySelector(`input[type="text"]`);
			if (!input.value) {
				return undefined;
			}
			return [{ questionID: inputName, answer: input.value }];
		}
		let questionAnswers: Answer[] = [];
		const inputs = document.querySelectorAll('input[type="radio"]:checked');
		if (
			inputs.length === 0 ||
			(question.type === 'table_radio' && inputs.length < question.headers.length)
		) {
			return undefined;
		}
		inputs.forEach((input) => {
			input.checked = false;
			questionAnswers.push({ questionID: input.name, answer: input.value });
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
		<input class="input w-100" type="text" id={inputName} name={inputName} />
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
			class="btn btn-primary mt-5"
			type="submit"
			onclick={() => {
				let questionAnswers = getAnswers();
				if (!questionAnswers) {
					alert('Responda a pergunta antes de prosseguir.');
					return;
				}
				answers = answers.concat(questionAnswers);

				if (step < data.questions.length) {
					step++;
					question = data.questions[step - 1];

					inputName = `question-${step}`;
				} else {
					form.submit();
				}
			}}>Proximo</button
		>
	</div>
	<form method="POST" bind:this={form}>
		<input type="hidden" name="popularity" value={data.popularity} />
		<input type="hidden" name="popular-rating" value={data.popularRating} />
		<input type="hidden" name="unpopular-rating" value={data.unpopularRating} />
		{#each answers as answer}
			<input type="hidden" name={answer.questionID} value={answer.answer} />
		{/each}
	</form>
</div>
