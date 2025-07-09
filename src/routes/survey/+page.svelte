<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let step = 13;
	let question = $state(data.questions[step - 1]);
	let inputName = $state(`question-${step}`);
	type Answer = {
		questionID: string;
		answer: string;
	};
	let answers: Answer[] = $state([]);
	let form: HTMLFormElement;

	const getAnswers = (): Answer[] => {
		if (question.type === 'text') {
			const input = document.querySelector(`input[type="text"]`);
			return [{ questionID: inputName, answer: input.value }];
		}
		let questionAnswers: Answer[] = [];
		let inputs;
		if (question.type.includes('radio')) {
			inputs = document.querySelectorAll('input[type="radio"]:checked');
		} else {
			inputs = document.querySelectorAll('input');
		}
		for (const input of inputs) {
			questionAnswers.push({ questionID: input.name, answer: input.value });
		}
		console.log('Collected answers:', questionAnswers);
		return questionAnswers;
	};
	const validateAnswers = (questionAnswers: Answer[]): boolean => {
		if (!questionAnswers.length) {
			console.log('No answers provided');
			alert('Por favor, responda a pergunta antes de prosseguir.');
			return false;
		}
		if (question.type === 'text') {
			if (!questionAnswers[0].answer && question.required !== false) {
				console.log('Text input is empty');
				alert('Por favor, responda a pergunta antes de prosseguir.');
				return false;
			}
		}
		if (question.type.startsWith('table') && questionAnswers.length < question.rows.length) {
			console.log('No answers selected or incomplete table answers');
			alert('Por favor, responda todas as perguntas da tabela antes de prosseguir.');
			return false;
		}
		if (question.type === 'table_number') {
			for (const answer of questionAnswers) {
				let value = Number(answer.answer);
				if (value < question.minValue || value > question.maxValue) {
					console.log(`Value out of range: ${value}`);
					alert(`O valor deve estar entre ${question.minValue} e ${question.maxValue}.`);
					return false;
				}
			}
		}
		return true;
	};

	const clearInputs = () => {
		const inputs = document.querySelectorAll('input[type="radio"]:checked');
		inputs.forEach((input) => {
			input.checked = false;
		});
	};
</script>

<!-- eslint-disable svelte/require-each-key -->
<div class="md:container-md sm:container-sm mx-5">
	<h2 style="font-weight: bold">
		{question.question}
	</h2>
	{#if question.type === 'radio'}
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
		<table class="md:table sm:table-sm">
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
	{:else if question.type === 'table_number'}
		{#each question.rows as option, i}
			<div class="mt-3">
				<label>
					<input
						type="number"
						name={inputName + '-' + (i + 1)}
						min={question.minValue}
						max={question.maxValue}
						class="input w-20 mr-5"
					/>
					{option}
				</label>
			</div>
		{/each}
	{/if}

	<div class="justify-end card-actions">
		<button
			class="btn btn-primary mt-5"
			type="submit"
			onclick={() => {
				let questionAnswers = getAnswers();
				if (!validateAnswers(questionAnswers)) {
					return;
				}
				clearInputs();
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
		<input type="hidden" name="play_id" value={data.playID} />
		{#each answers as answer}
			<input type="hidden" name={answer.questionID} value={answer.answer} />
		{/each}
	</form>
</div>
