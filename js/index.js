const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const diaDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
let registrosDeFuncionarios = [];
let diasTrabalhados = [];
let horasTrabalhadas = [];
let horasIntervalos = [];
let ar = [];
let funcionarios = {};

function calcularHorasTrabalhadas(horarios) {
	if (horarios.length < 2) return 0;
	if (horarios.length === 2) {
		return diferencaEmMinutos(horarios[0], horarios[1]);
	}
	if (horarios.length === 4) {
		let entrada = horarios[0];
		let saidaAlmoco = horarios[1];
		let voltaAlmoco = horarios[2];
		let saida = horarios[3];

		let total = diferencaEmMinutos(entrada, saida);
		let intervalo = diferencaEmMinutos(saidaAlmoco, voltaAlmoco);
		let excesso = intervalo > 60 ? intervalo - 60 : 0;
// console.log(total,"total");
// console.log(intervalo,"intervalo");
// console.log(excesso,"excesso");
// console.log(total - intervalo + excesso,"total - intervalo + excesso");
		return total - intervalo + excesso;
	}
	return 0;
}