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


function calculoFuncionario() {
	let textarea = document.getElementById("listasText").value.trim();
	let linhas = textarea.split("\n");
funcionarios = {};
registrosDeFuncionarios = [];
let registrosDeHoras = [];
	linhas.forEach(linha => {
		let partes = linha.split("\t");
		if (partes.length < 5) return;

		let id = parseInt(partes[0].trim());
		let nome = partes[1].trim();
		let setor = partes[2].trim();
		let dataMatch = partes[3].match(/\d{4}-\d{2}-\d{2}/);
		let horaMatch = partes[3].match(/\d{2}:\d{2}:\d{2}/);
		let data = dataMatch ? dataMatch[0] : null;
		let hora = horaMatch ? horaMatch[0] : null;
		let maquina = parseInt(partes[4].trim());

		if (!funcionarios[id]) {
			funcionarios[id] = {
				id,
				nome,
				setor,
				dias: [],
				maquina
			};
			registrosDeFuncionarios.push(funcionarios[id]);
		}

		if (data && hora) {
			// Verifica se essa data já está registrada
			let diaExistente = funcionarios[id].dias.find(d => d.data === data);
			
			if (diaExistente) {
				// Adiciona o horário se ainda não estiver registrado
				if (!diaExistente.horarios.includes(hora)) {
					diaExistente.horarios.push(hora);
				}
			} else {
				// Cria novo registro de dia com o horário
				funcionarios[id].dias.push({ data, horarios: [hora] });
			}
		}
	});
 const funci = registrosDeFuncionarios.map(fu => fu.id + " - " + fu.nome);
 
 const conf = prompt(`id \n ${funci.join("\n")}`,10);
const corpo = document.querySelector(".corpo");
corpo.innerHTML = ``;
const ul = document.createElement("ul");
const h4 = document.createElement("h4");

if (conf) {
	registrosDeFuncionarios.forEach((item, index) => {
		if (item.id == conf) {
		const hours = item.dias;
		
		let IntervaloDoMes = 0;
		let minutosTotaisDoMes = 0;
const agora = new Date();
const mesAtual = agora.getMonth();
const anoAtual = agora.getFullYear();

	hours.forEach((i, index) => {
	const [ano, mes, diaNum] = i.data.split("-").map(Number);
	const datasplit = i.data.split("-");
	
	// if (ano === anoAtual && mes - 1 === mesAtual)
	 if (parseInt(datasplit[0]) && parseInt(datasplit[1]) ) 
	{

		const hour = i.horarios;
		calcularHorasTrabalhadas(hour);
		let entrada = hour[0];
		let saida = hour[hour.length - 1];
		let totalMinutosTrabalhados = diferencaEmMinutos(entrada, saida);
		let totalMinutosIntervalo = 0;
		let minutosTrabalhados = 0;

		if (hour.length === 4) {
			const intervaloInicio = hour[1];
			const intervaloFim = hour[2];
			let minutosIntervalo = diferencaEmMinutos(intervaloInicio, intervaloFim);
			totalMinutosIntervalo = minutosIntervalo;

			if (minutosIntervalo > 60) {
				const excedente = minutosIntervalo - 60;
				// minutosTrabalhados = totalMinutosTrabalhados - 60 + excedente;
				minutosTrabalhados = totalMinutosTrabalhados + excedente;
				
			} else {
				minutosTrabalhados = totalMinutosTrabalhados - minutosIntervalo;
			}
		} else {
			minutosTrabalhados = totalMinutosTrabalhados;
		}

		if (hour.length === 2) {
			totalMinutosIntervalo = 0;
		}

		minutosTotaisDoMes += minutosTrabalhados;
		IntervaloDoMes += totalMinutosIntervalo;

		const uls = document.createElement("ul");
		const li = document.createElement("li");
		li.innerHTML = `
			Dia: ${i.data.split("-").reverse().join("/")}
			
			
			
			<br>
			${hour.join("<br>")}
			<br>
			Horas Trabalhadas: ${formatarHoras(minutosTrabalhados.toFixed(2).split(".")[0])}
			<br>
			Horas Intervalo: ${totalMinutosIntervalo <= 0 ? "sem Intervalo" : formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0])}
		`;

		uls.appendChild(li);
		corpo.appendChild(uls);
	}
});
h4.innerHTML += `REGISTRO DE FUNCIONÁRIO: ${item.nome} <br>Total de horas no mês: ${formatarHoras(minutosTotaisDoMes.toFixed(2).split(".")[0])}
<br>Total de horas Intervalo no mês:
${formatarHoras(IntervaloDoMes.toFixed(2).split(".")[0])}
<br>
<br>
			Dias Trabalhadas: ${hours.length}
<br>
			Dias:
<br>
			${Object.values(hours).map(d => "<br>" +d.data.substring(8,11)+"/"+d.data.substring(5,7)+"/"+ d.data.substring(0,4) + "<br>" + d.horarios.join("<br>"))}
<br>
<!--
			${Object.values(hours).map(d => "<br>" +d.data.substring(8,11)+"/"+d.data.substring(5,7)+"/"+ d.data.substring(0,4) + "<br>" + d.horarios.join("<br>"))}
			${Object.values(hours).map(d => d.data.substring(8,11)+"/"+d.data.substring(5,7)+"/"+ d.data.substring(0,4)).join("<br>").concat( hours.map(d => d.horarios.join("\n")))}
			${Object.values(hours).map(d => d.data.substring(8,11)+"/"+d.data.substring(5,7)+"/"+ d.data.substring(0,4)).join("<br>") + hours.map(d => d.horarios.join("\n")).join("\n")}
Diass: 
<br>
			
			${Object.values(hours).map(d => d.data).join("<br>").split("-").join("/")}
<br>
			${Object.values(hours).map(d => d.data + "<br> "+ d.horarios.join("<br>")).join("<br>").split("-").join("/")}
			${Object.values(hours).map(d => d.data + "<br> "+ d.horarios.join("<br>")).join("<br>").split("-").join("/")}
			${Object.values(hours).map(d => d.data + "<br> "+ d.horarios.join("<br>")).join("<br>").split("-").join("/")}
			horarios: 
			${Object.values(hours).map(d => d.horarios).join("<br>").split(",").join("<br>")}
			-->
<br>
`;
// console.log(Object.values(hours).map(d => d.data + "<br> "+ d.horarios.join("<br>")).join("<br>").split("-").join("/"));
 //const y = Object.values(hours).map(d => d.data.substring(8,11)+"-"+d.data.substring(5,7)+"-"+ d.data.substring(0,4) + "<br> " + d.horarios.join("\n"));
 const y = Object.values(hours).map(d => "<br>" +d.data.substring(8,11)+"/"+d.data.substring(5,7)+"/"+ d.data.substring(0,4) + "<br>" + d.horarios.join("<br>"));
// const y = hours.map(d => d.horarios.join("\n")).join("\n");
console.log(y);
//console.log(Object.values(hours).map(d => d.data + "<br> "+ d.horarios));
// console.log(Object.values(hours).map(d => d.horarios));
corpo.prepend(h4);
		}
	});
}

}

function diferencaEmMinutos(hora1, hora2) {
	let [h1, m1, s1] = hora1.split(":").map(Number);
	let [h2, m2, s2] = hora2.split(":").map(Number);

	let t1 = new Date(0, 0, 0, h1, m1, s1);
	let t2 = new Date(0, 0, 0, h2, m2, s2);

	return (t2 - t1) / 60000;
}
