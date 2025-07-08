<script>
	import { goto } from '$app/navigation';
</script>

<div>
	<div class="container">
		<h2 class="card-title">Bem-vindo ao experimento!</h2>
		<p>
			Nessa pesquisa, queremos entender os fatores que influenciam nossas escolhas de música e como
			eles se relacionam à existência de superestrelas.<br /><br />
			💡 O que você precisa saber antes de começar:<br /><br />
			• Você ouvirá 1 minuto de música e será convidado a avaliar a(s) música(s) que ouvir.<br />
			• Você poderá pular a música apenas uma vez e precisará avaliá-la antes de seguir para a próxima.<br
			/>
			• O tempo total de escuta será de 1 minuto, distribuído entre as músicas conforme sua escolha.<br
			/>
			• Ao final, algumas perguntas serão feitas para análise estatística.<br />
			• Os riscos à saúde física são mínimos. Nos disponibilizamos a oferecer apoio caso a pesquisa gere
			algum risco à sua integridade física, mental ou de qualquer outra natureza.<br />
			• O tempo total de participação está estimado em 20 minutos.<br />
			• Sua participação é voluntária. Caso você fique cansado, considere que alguma questão é difícil
			ou queira encerrar sua participação, está no seu direito e compreendemos perfeitamente.<br />
			• Todos os dados serão tratados de forma sigilosa e, quando divulgados, serão para o conjunto de
			todos os participantes. Informamos que não haverá nenhum tipo de identificação através do seu nome
			ou endereço.<br />
			• Não pretendemos afetar o seu bem-estar. Se depois de consentir em sua participação, você desistir
			de continuar participando, tem o direito e a liberdade de retirar seu consentimento em qualquer
			fase da pesquisa, seja antes ou depois da coleta dos dados, independentemente do motivo e sem nenhum
			prejuízo a sua pessoa.<br />
			• Você não terá nenhuma despesa e também não receberá nenhuma remuneração.<br />
			• É seu direito ter sua privacidade respeitada, ser indenizado em caso de danos decorrentes da
			pesquisa e ser ressarcido em caso de despesas decorrentes de sua participação na pesquisa.<br
			/>
			• A pesquisa procura respeitar os seus valores culturais, sociais, religiosos e morais, como também
			os seus costumes e hábitos.<br />
			• Disponibilizaremos as análises dos resultados anonimizados, após a conclusão da pesquisa, para
			livre consulta a quem se interessar.<br />
			• Os dados da pesquisa, em arquivo físico ou digital, ficarão sob guarda e responsabilidade do
			pesquisador responsável por um período de 5 anos após o término da pesquisa. Ao final deste período,
			os dados serão descartados.<br />
			• Se tiver dúvidas, entre em contato: <b>thais-ribeiro@cedeplar.ufmg.br</b><br />
			• O Comitê de Ética em Pesquisa da Universidade Federal de Minas Gerais (COEP/UFMG) poderá ser
			contatado em caso de dúvidas relacionadas aos aspectos éticos deste estudo.<br />
			• Se concordar em participar, marque a caixa abaixo e clique em "Continuar".<br />
			• 🎧 Para uma melhor experiência, recomendamos o uso de fones de ouvido.<br /><br />
			Obrigada pela colaboração :)
		</p>
		<div>
			<div class="mt-5 mb-5">
				<form id="confirmation" on:submit|preventDefault={goto('/select/genre')}>
					<label class="fieldset-label">
						<input type="checkbox" class="checkbox" required />
						Concordo em participar
					</label>
				</form>
			</div>
			<button type="submit" form="confirmation" class="btn btn-primary">Continuar</button>
		</div>
	</div>
</div>
