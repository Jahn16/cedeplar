<script lang="ts">
	import questionsData from '$lib/data/questions.json';

	interface Question {
		question: string;
		type: string;
		options?: string[];
	}

	const questions: Question[] = questionsData as Question[];

	let step = 1;
	let question = questions[step - 1];
	let inputName = `question-${step}`;
	let answer = '';
</script>

<div></div>
<div class="card w-96 bg-base-100 card-lg shadow-sm">
	<div class="card-body">
		<h2 class="card-title">
			{question.question}
		</h2>
		{#if question.options}
			<!-- eslint-disable svelte/require-each-key -->
			{#each question.options as option}
				<label>
					<input type="radio" name={inputName} value={option} class="radio" bind:group={answer} />
					{option}
				</label><br />
			{/each}
		{:else if question.type === 'text'}
			<input class="input" id={inputName} bind:value={answer} />
		{/if}

		<div class="justify-end card-actions">
			<button
				class="btn btn-primary"
				type="submit"
				on:click={() => {
					step++;
					question = questions[step - 1];
					inputName = `question-${step}`;
					console.log(answer);
					answer = '';
				}}>Proximo</button
			>
		</div>
	</div>
</div>
