<script>
	import { goto } from '$app/navigation';
</script>

<div>
	<div class="card w-100 bg-base-100 card-lg shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Bem-vindo ao experimento!</h2>
			<p>
				Nesta pesquisa, queremos entender como as pessoas interagem com músicas em curtos períodos
				de tempo. Você ouvirá um conjunto de músicas por até 1 minuto no total e, após cada
				reprodução, será convidado a avaliar a música antes de continuar.
				<br /><br />
				💡 O que você precisa saber antes de começar:<br />
				- Você poderá pular músicas, mas precisará avaliá-las antes de seguir para a próxima.<br />
				- O tempo total de escuta será de 1 minuto, distribuído entre as músicas conforme sua escolha.<br
				/>
				- Ao final da pesquisa, algumas perguntas demográficas serão feitas para análise estatística.
				<br /><br />
				🎧 Para uma melhor experiência, recomendamos o uso de fones de ouvido.
				<br /><br />
				Sua participação é voluntária e todas as respostas serão registradas anonimamente. Se concordar
				em participar, marque a caixa abaixo e clique em "Continuar".
				<br /><br />
				Se tiver dúvidas, entre em contato com a equipe do estudo. Obrigado pela sua colaboração!
			</p>
			<div class="card-actions">
				<form id="confirmation" on:submit|preventDefault={goto('/select/genre')}>
					<label class="fieldset-label">
						<input type="checkbox" class="checkbox" required />
						Concordo em participar
					</label>
				</form>
				<button type="submit" form="confirmation" class="btn btn-primary">Continuar</button>
			</div>
		</div>
	</div>
</div>
