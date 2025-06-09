const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const diaDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
let registrosDeFuncionarios = [];
let diasTrabalhados = [];
let horasTrabalhadas = [];
let horasIntervalos = [];
let ar = [];
let funcionarios = {};

function completePonto() {
	const listasText = document.querySelector("#listasText");
	const confirm = prompt(
		`
	\nTodos - 1
	\nMeu - 2
	`,
		5
	);
	const pontosUltraMarco = () => {
		return `12		Not Set1	 2025-03-01     07:55:15	1
22	nilo	Not Set1	 2025-03-01     07:55:56	1
10	mauricio	Not Set7	 2025-03-01     09:54:08	1
12		Not Set7	 2025-03-01     11:18:41	1
22	nilo	Not Set1	 2025-03-01     11:18:48	1
22	nilo	Not Set1	 2025-03-01     12:18:19	1
12		Not Set1	 2025-03-01     12:19:05	1
10	mauricio	Not Set7	 2025-03-01     13:01:49	1
10	mauricio	Not Set7	 2025-03-01     13:47:29	1
22	nilo	Not Set1	 2025-03-01     15:40:02	1
12		Not Set1	 2025-03-01     15:43:44	1
10	mauricio	Not Set7	 2025-03-01     17:06:21	1
8	lurdes	Not Set1	 2025-03-02     07:55:49	1
9	manuella meireles	Not Set1	 2025-03-02     07:56:09	1
8	lurdes	Not Set1	 2025-03-02     12:04:49	1
8	lurdes	Not Set1	 2025-03-02     13:04:24	1
9	manuella meireles	Not Set1	 2025-03-02     14:00:03	1
8	lurdes	Not Set1	 2025-03-02     14:00:37	1
10	mauricio	Not Set7	 2025-03-03     07:52:16	1
14	Rosangela Fagundes	Not Set1	 2025-03-03     07:56:44	1
20	carolina peixoto	Not Set1	 2025-03-03     07:57:11	1
8	lurdes	Not Set1	 2025-03-03     08:14:42	1
22	nilo	Not Set1	 2025-03-03     08:14:46	1
14	Rosangela Fagundes	Not Set1	 2025-03-03     10:39:57	1
20	carolina peixoto	Not Set1	 2025-03-03     10:58:45	1
14	Rosangela Fagundes	Not Set1	 2025-03-03     11:02:07	1
20	carolina peixoto	Not Set1	 2025-03-03     11:57:37	1
22	nilo	Not Set1	 2025-03-03     12:05:59	1
10	mauricio	Not Set7	 2025-03-03     12:18:52	1
8	lurdes	Not Set1	 2025-03-03     12:18:57	1
22	nilo	Not Set1	 2025-03-03     13:04:45	1
10	mauricio	Not Set7	 2025-03-03     13:17:34	1
8	lurdes	Not Set1	 2025-03-03     13:18:09	1
20	carolina peixoto	Not Set1	 2025-03-03     14:02:54	1
14	Rosangela Fagundes	Not Set1	 2025-03-03     15:59:57	1
22	nilo	Not Set1	 2025-03-03     16:00:09	1
8	lurdes	Not Set1	 2025-03-03     16:03:26	1
10	mauricio	Not Set7	 2025-03-03     16:05:36	1
14	Rosangela Fagundes	Not Set1	 2025-03-04     07:41:32	1
12		Not Set1	 2025-03-04     07:41:43	1
17	lays	Not Set1	 2025-03-04     07:47:54	1
21	brenda pierini	Not Set1	 2025-03-04     07:56:30	1
10	mauricio	Not Set7	 2025-03-04     07:57:11	1
20	carolina peixoto	Not Set1	 2025-03-04     08:01:58	1
22	nilo	Not Set1	 2025-03-04     08:36:31	1
8	lurdes	Not Set1	 2025-03-04     08:36:36	1
12		Not Set1	 2025-03-04     09:39:22	1
14	Rosangela Fagundes	Not Set1	 2025-03-04     10:21:08	1
14	Rosangela Fagundes	Not Set1	 2025-03-04     11:15:40	1
17	lays	Not Set1	 2025-03-04     11:26:09	1
20	carolina peixoto	Not Set1	 2025-03-04     11:26:13	1
21	brenda pierini	Not Set1	 2025-03-04     11:26:18	1
22	nilo	Not Set1	 2025-03-04     12:00:21	1
17	lays	Not Set1	 2025-03-04     12:28:34	1
20	carolina peixoto	Not Set1	 2025-03-04     12:28:43	1
21	brenda pierini	Not Set1	 2025-03-04     12:28:50	1
22	nilo	Not Set1	 2025-03-04     12:55:30	1
8	lurdes	Not Set1	 2025-03-04     13:42:42	1
20	carolina peixoto	Not Set1	 2025-03-04     14:30:36	1
8	lurdes	Not Set1	 2025-03-04     14:42:32	1
10	mauricio	Not Set7	 2025-03-04     14:54:15	1
10	mauricio	Not Set7	 2025-03-04     15:57:02	1
17	lays	Not Set1	 2025-03-04     16:00:29	1
21	brenda pierini	Not Set1	 2025-03-04     16:01:37	1
10	mauricio	Not Set7	 2025-03-04     16:03:18	1
22	nilo	Not Set1	 2025-03-04     16:08:30	1
8	lurdes	Not Set1	 2025-03-04     16:11:28	1
21	brenda pierini	Not Set1	 2025-03-05     04:43:55	1
14	Rosangela Fagundes	Not Set1	 2025-03-05     06:04:31	1
20	carolina peixoto	Not Set1	 2025-03-05     08:38:02	1
21	brenda pierini	Not Set1	 2025-03-05     09:09:10	1
14	Rosangela Fagundes	Not Set1	 2025-03-05     10:02:36	1
21	brenda pierini	Not Set1	 2025-03-05     10:05:02	1
10	mauricio	Not Set7	 2025-03-05     10:07:52	1
20	carolina peixoto	Not Set1	 2025-03-05     10:15:52	1
14	Rosangela Fagundes	Not Set1	 2025-03-05     10:49:30	1
20	carolina peixoto	Not Set1	 2025-03-05     11:21:52	1
8	lurdes	Not Set1	 2025-03-05     11:44:11	1
21	brenda pierini	Not Set1	 2025-03-05     13:06:39	1
14	Rosangela Fagundes	Not Set1	 2025-03-05     14:21:38	1
17	lays	Not Set1	 2025-03-05     14:27:51	1
22	nilo	Not Set1	 2025-03-05     14:34:12	1
10	mauricio	Not Set7	 2025-03-05     14:50:48	1
8	lurdes	Not Set1	 2025-03-05     14:50:56	1
12		Not Set1	 2025-03-05     14:59:29	1
10	mauricio	Not Set7	 2025-03-05     15:48:28	1
8	lurdes	Not Set1	 2025-03-05     15:48:33	1
12		Not Set1	 2025-03-05     16:32:59	1
20	carolina peixoto	Not Set1	 2025-03-05     16:47:16	1
12		Not Set1	 2025-03-05     17:28:53	1
22	nilo	Not Set1	 2025-03-05     17:57:33	1
22	nilo	Not Set1	 2025-03-05     18:57:31	1
17	lays	Not Set1	 2025-03-05     20:00:21	1
8	lurdes	Not Set1	 2025-03-05     20:11:44	1
17	lays	Not Set1	 2025-03-05     21:00:20	1
17	lays	Not Set1	 2025-03-05     22:57:12	1
12		Not Set1	 2025-03-05     22:57:17	1
22	nilo	Not Set1	 2025-03-05     23:02:14	1
21	brenda pierini	Not Set1	 2025-03-06     04:45:05	1
14	Rosangela Fagundes	Not Set1	 2025-03-06     06:16:23	1
20	carolina peixoto	Not Set1	 2025-03-06     08:11:02	1
21	brenda pierini	Not Set1	 2025-03-06     09:22:49	1
14	Rosangela Fagundes	Not Set1	 2025-03-06     10:04:41	1
10	mauricio	Not Set7	 2025-03-06     10:10:21	1
21	brenda pierini	Not Set1	 2025-03-06     10:31:00	1
20	carolina peixoto	Not Set1	 2025-03-06     10:33:01	1
14	Rosangela Fagundes	Not Set1	 2025-03-06     10:37:22	1
20	carolina peixoto	Not Set1	 2025-03-06     11:31:07	1
8	lurdes	Not Set1	 2025-03-06     11:41:29	1
14	Rosangela Fagundes	Not Set1	 2025-03-06     14:20:35	1
17	lays	Not Set1	 2025-03-06     14:33:06	1
22	nilo	Not Set1	 2025-03-06     14:39:34	1
12		Not Set1	 2025-03-06     14:40:25	1
8	lurdes	Not Set1	 2025-03-06     15:36:51	1
10	mauricio	Not Set7	 2025-03-06     16:00:21	1
20	carolina peixoto	Not Set1	 2025-03-06     16:30:32	1
8	lurdes	Not Set1	 2025-03-06     16:38:30	1
12		Not Set1	 2025-03-06     16:48:34	1
10	mauricio	Not Set7	 2025-03-06     16:54:46	1
12		Not Set7	 2025-03-06     17:45:24	1
22	nilo	Not Set1	 2025-03-06     18:00:16	1
10	mauricio	Not Set7	 2025-03-06     18:05:07	1
22	nilo	Not Set1	 2025-03-06     19:00:33	1
17	lays	Not Set1	 2025-03-06     20:21:05	1
17	lays	Not Set1	 2025-03-06     21:17:45	1
22	nilo	Not Set1	 2025-03-06     21:54:03	1
17	lays	Not Set1	 2025-03-06     22:55:11	1
12		Not Set1	 2025-03-06     22:55:26	1
21	brenda pierini	Not Set1	 2025-03-07     04:46:31	1
14	Rosangela Fagundes	Not Set1	 2025-03-07     06:05:29	1
20	carolina peixoto	Not Set1	 2025-03-07     08:13:57	1
21	brenda pierini	Not Set1	 2025-03-07     09:10:00	1
10	mauricio	Not Set7	 2025-03-07     10:01:09	1
14	Rosangela Fagundes	Not Set1	 2025-03-07     10:24:36	1
21	brenda pierini	Not Set1	 2025-03-07     10:29:29	1
20	carolina peixoto	Not Set1	 2025-03-07     10:38:40	1
14	Rosangela Fagundes	Not Set1	 2025-03-07     11:01:48	1
20	carolina peixoto	Not Set1	 2025-03-07     11:39:12	1
8	lurdes	Not Set1	 2025-03-07     11:41:32	1
21	brenda pierini	Not Set1	 2025-03-07     13:08:00	1
22	nilo	Not Set1	 2025-03-07     13:43:13	1
14	Rosangela Fagundes	Not Set1	 2025-03-07     14:18:47	1
12		Not Set1	 2025-03-07     14:29:34	1
17	lays	Not Set1	 2025-03-07     14:31:45	1
10	mauricio	Not Set7	 2025-03-07     15:01:58	1
8	lurdes	Not Set1	 2025-03-07     15:06:53	1
10	mauricio	Not Set7	 2025-03-07     15:53:40	1
8	lurdes	Not Set1	 2025-03-07     15:53:43	1
20	carolina peixoto	Not Set1	 2025-03-07     16:23:48	1
12		Not Set1	 2025-03-07     16:43:19	1
22	nilo	Not Set1	 2025-03-07     17:01:11	1
12		Not Set1	 2025-03-07     17:41:55	1
22	nilo	Not Set1	 2025-03-07     18:01:37	1
10	mauricio	Not Set7	 2025-03-07     18:19:02	1
8	lurdes	Not Set1	 2025-03-07     20:03:39	1
17	lays	Not Set1	 2025-03-07     21:02:45	1
22	nilo	Not Set1	 2025-03-07     22:00:05	1
17	lays	Not Set1	 2025-03-07     22:00:47	1
17	lays	Not Set1	 2025-03-07     22:54:48	1
12		Not Set1	 2025-03-07     22:55:56	1
21	brenda pierini	Not Set1	 2025-03-08     08:24:44	1
8	lurdes	Not Set1	 2025-03-08     08:37:08	1
17	lays	Not Set1	 2025-03-08     09:47:14	1
21	brenda pierini	Not Set1	 2025-03-08     11:07:31	1
21	brenda pierini	Not Set1	 2025-03-08     12:09:11	1
8	lurdes	Not Set1	 2025-03-08     12:42:40	1
17	lays	Not Set1	 2025-03-08     13:19:43	1
8	lurdes	Not Set1	 2025-03-08     14:01:26	1
17	lays	Not Set1	 2025-03-08     14:19:00	1
8	lurdes	Not Set1	 2025-03-08     15:07:02	1
21	brenda pierini	Not Set1	 2025-03-08     15:12:43	1
17	lays	Not Set1	 2025-03-08     16:59:05	1
14	Rosangela Fagundes	Not Set1	 2025-03-09     08:18:46	1
14	Rosangela Fagundes	Not Set1	 2025-03-09     10:05:58	1
14	Rosangela Fagundes	Not Set1	 2025-03-09     11:05:55	1
20	carolina peixoto	Not Set1	 2025-03-09     14:06:27	1
21	brenda pierini	Not Set1	 2025-03-10     04:46:55	1
14	Rosangela Fagundes	Not Set1	 2025-03-10     06:05:26	1
20	carolina peixoto	Not Set1	 2025-03-10     08:02:00	1
21	brenda pierini	Not Set1	 2025-03-10     09:06:22	1
10	mauricio	Not Set7	 2025-03-10     09:51:33	1
21	brenda pierini	Not Set1	 2025-03-10     10:09:27	1
20	carolina peixoto	Not Set1	 2025-03-10     10:57:06	1
14	Rosangela Fagundes	Not Set1	 2025-03-10     11:06:16	1
8	lurdes	Not Set1	 2025-03-10     11:34:07	1
20	carolina peixoto	Not Set1	 2025-03-10     12:02:05	1
14	Rosangela Fagundes	Not Set1	 2025-03-10     12:09:02	1
21	brenda pierini	Not Set1	 2025-03-10     13:07:33	1
14	Rosangela Fagundes	Not Set1	 2025-03-10     14:16:21	1
17	lays	Not Set1	 2025-03-10     14:21:02	1
22	nilo	Not Set1	 2025-03-10     15:01:42	1
12		Not Set1	 2025-03-10     16:01:28	1
20	carolina peixoto	Not Set1	 2025-03-10     16:14:49	1
10	mauricio	Not Set7	 2025-03-10     16:51:58	1
8	lurdes	Not Set1	 2025-03-10     16:52:01	1
10	mauricio	Not Set7	 2025-03-10     17:46:20	1
8	lurdes	Not Set1	 2025-03-10     17:52:01	1
22	nilo	Not Set1	 2025-03-10     17:59:17	1
10	mauricio	Not Set7	 2025-03-10     18:19:20	1
22	nilo	Not Set1	 2025-03-10     18:51:49	1
12		Not Set1	 2025-03-10     18:58:20	1
12		Not Set1	 2025-03-10     19:51:38	1
8	lurdes	Not Set1	 2025-03-10     20:19:46	1
17	lays	Not Set1	 2025-03-10     21:22:42	1
17	lays	Not Set1	 2025-03-10     22:22:03	1
22	nilo	Not Set1	 2025-03-10     22:44:13	1
12		Not Set1	 2025-03-10     22:59:33	1
17	lays	Not Set1	 2025-03-10     22:59:42	1
21	brenda pierini	Not Set1	 2025-03-11     04:46:31	1
14	Rosangela Fagundes	Not Set1	 2025-03-11     06:06:10	1
20	carolina peixoto	Not Set1	 2025-03-11     08:06:26	1
14	Rosangela Fagundes	Not Set1	 2025-03-11     10:01:14	1
10	mauricio	Not Set7	 2025-03-11     10:12:46	1
21	brenda pierini	Not Set1	 2025-03-11     10:38:42	1
14	Rosangela Fagundes	Not Set1	 2025-03-11     10:41:20	1
21	brenda pierini	Not Set1	 2025-03-11     11:35:23	1
8	lurdes	Not Set1	 2025-03-11     11:45:32	1
20	carolina peixoto	Not Set1	 2025-03-11     11:48:12	1
9	manuella meireles	Not Set1	 2025-03-11     11:52:54	1
20	carolina peixoto	Not Set1	 2025-03-11     12:48:26	1
21	brenda pierini	Not Set1	 2025-03-11     13:07:25	1
14	Rosangela Fagundes	Not Set1	 2025-03-11     14:23:43	1
22	nilo	Not Set1	 2025-03-11     14:39:59	1
17	lays	Not Set1	 2025-03-11     14:43:08	1
17	lays	Not Set1	 2025-03-11     16:07:01	1
20	carolina peixoto	Not Set1	 2025-03-11     16:07:04	1
10	mauricio	Not Set7	 2025-03-11     16:48:48	1
8	lurdes	Not Set1	 2025-03-11     16:49:04	1
17	lays	Not Set1	 2025-03-11     17:06:36	1
10	mauricio	Not Set7	 2025-03-11     17:43:43	1
8	lurdes	Not Set1	 2025-03-11     17:47:10	1
22	nilo	Not Set1	 2025-03-11     17:50:44	1
22	nilo	Not Set1	 2025-03-11     18:50:19	1
8	lurdes	Not Set1	 2025-03-11     20:06:46	1
22	nilo	Not Set1	 2025-03-11     22:31:34	1
17	lays	Not Set1	 2025-03-11     22:56:41	1
21	brenda pierini	Not Set1	 2025-03-12     04:55:02	1
14	Rosangela Fagundes	Not Set1	 2025-03-12     06:03:22	1
20	carolina peixoto	Not Set1	 2025-03-12     07:57:37	1
14	Rosangela Fagundes	Not Set1	 2025-03-12     10:10:48	1
10	mauricio	Not Set7	 2025-03-12     10:33:54	1
21	brenda pierini	Not Set1	 2025-03-12     10:49:28	1
14	Rosangela Fagundes	Not Set1	 2025-03-12     11:08:43	1
21	brenda pierini	Not Set1	 2025-03-12     11:47:20	1
8	lurdes	Not Set1	 2025-03-12     11:50:04	1
20	carolina peixoto	Not Set1	 2025-03-12     11:55:03	1
20	carolina peixoto	Not Set1	 2025-03-12     12:55:08	1
21	brenda pierini	Not Set1	 2025-03-12     13:09:11	1
17	lays	Not Set1	 2025-03-12     14:09:27	1
14	Rosangela Fagundes	Not Set1	 2025-03-12     14:23:15	1
22	nilo	Not Set1	 2025-03-12     15:10:46	1
10	mauricio	Not Set7	 2025-03-12     16:07:46	1
8	lurdes	Not Set1	 2025-03-12     16:07:52	1
20	carolina peixoto	Not Set1	 2025-03-12     16:08:38	1
10	mauricio	Not Set7	 2025-03-12     16:33:34	1
17	lays	Not Set1	 2025-03-12     16:40:06	1
8	lurdes	Not Set1	 2025-03-12     17:08:17	1
17	lays	Not Set1	 2025-03-12     17:41:27	1
22	nilo	Not Set1	 2025-03-12     17:50:54	1
10	mauricio	Not Set7	 2025-03-12     18:20:56	1
22	nilo	Not Set1	 2025-03-12     18:50:55	1
8	lurdes	Not Set1	 2025-03-12     19:58:09	1
17	lays	Not Set1	 2025-03-12     22:58:31	1
22	nilo	Not Set1	 2025-03-12     23:01:05	1
21	brenda pierini	Not Set1	 2025-03-13     04:47:49	1
14	Rosangela Fagundes	Not Set1	 2025-03-13     06:04:16	1
20	carolina peixoto	Not Set1	 2025-03-13     08:20:11	1
10	mauricio	Not Set7	 2025-03-13     09:51:52	1
14	Rosangela Fagundes	Not Set1	 2025-03-13     10:13:38	1
14	Rosangela Fagundes	Not Set1	 2025-03-13     10:48:17	1
21	brenda pierini	Not Set1	 2025-03-13     11:02:54	1
8	lurdes	Not Set1	 2025-03-13     11:40:46	1
21	brenda pierini	Not Set1	 2025-03-13     12:00:04	1
20	carolina peixoto	Not Set1	 2025-03-13     12:07:59	1
20	carolina peixoto	Not Set1	 2025-03-13     13:10:47	1
21	brenda pierini	Not Set1	 2025-03-13     13:27:18	1
14	Rosangela Fagundes	Not Set1	 2025-03-13     14:14:29	1
10	mauricio	Not Set7	 2025-03-13     14:22:09	1
17	lays	Not Set1	 2025-03-13     14:39:04	1
22	nilo	Not Set1	 2025-03-13     14:39:40	1
10	mauricio	Not Set7	 2025-03-13     15:20:27	1
8	lurdes	Not Set1	 2025-03-13     15:23:12	1
20	carolina peixoto	Not Set1	 2025-03-13     16:06:18	1
17	lays	Not Set1	 2025-03-13     16:06:21	1
8	lurdes	Not Set1	 2025-03-13     16:24:42	1
17	lays	Not Set1	 2025-03-13     17:04:53	1
22	nilo	Not Set1	 2025-03-13     17:50:25	1
10	mauricio	Not Set7	 2025-03-13     18:14:54	1
22	nilo	Not Set1	 2025-03-13     18:50:42	1
8	lurdes	Not Set1	 2025-03-13     20:08:00	1
22	nilo	Not Set1	 2025-03-13     22:30:13	1
17	lays	Not Set1	 2025-03-13     23:01:37	1
21	brenda pierini	Not Set1	 2025-03-14     05:08:44	1
14	Rosangela Fagundes	Not Set1	 2025-03-14     06:02:51	1
20	carolina peixoto	Not Set1	 2025-03-14     08:07:27	1
14	Rosangela Fagundes	Not Set1	 2025-03-14     09:58:27	1
10	mauricio	Not Set7	 2025-03-14     10:21:04	1
21	brenda pierini	Not Set1	 2025-03-14     10:44:05	1
14	Rosangela Fagundes	Not Set1	 2025-03-14     11:07:26	1
21	brenda pierini	Not Set1	 2025-03-14     11:33:13	1
20	carolina peixoto	Not Set1	 2025-03-14     11:39:19	1
20	carolina peixoto	Not Set1	 2025-03-14     12:39:09	1
21	brenda pierini	Not Set1	 2025-03-14     13:07:07	1
14	Rosangela Fagundes	Not Set1	 2025-03-14     14:14:00	1
17	lays	Not Set1	 2025-03-14     14:30:49	1
22	nilo	Not Set1	 2025-03-14     14:32:47	1
20	carolina peixoto	Not Set1	 2025-03-14     16:25:07	1
17	lays	Not Set1	 2025-03-14     16:25:10	1
17	lays	Not Set1	 2025-03-14     17:25:48	1
10	mauricio	Not Set7	 2025-03-14     17:41:55	1
22	nilo	Not Set1	 2025-03-14     17:47:13	1
10	mauricio	Not Set7	 2025-03-14     18:01:36	1
10	mauricio	Not Set7	 2025-03-14     18:08:25	1
22	nilo	Not Set1	 2025-03-14     18:48:17	1
22	nilo	Not Set1	 2025-03-14     22:26:23	1
17	lays	Not Set1	 2025-03-14     22:59:35	1
21	brenda pierini	Not Set1	 2025-03-15     08:04:05	1
22	nilo	Not Set1	 2025-03-15     08:11:33	1
21	brenda pierini	Not Set1	 2025-03-15     11:22:27	1
22	nilo	Not Set1	 2025-03-15     11:40:08	1
21	brenda pierini	Not Set1	 2025-03-15     12:03:48	1
22	nilo	Not Set1	 2025-03-15     12:51:34	1
21	brenda pierini	Not Set1	 2025-03-15     13:56:24	1
22	nilo	Not Set1	 2025-03-15     16:01:51	1
10	mauricio	Not Set7	 2025-03-16     07:47:40	1
14	Rosangela Fagundes	Not Set1	 2025-03-16     08:06:25	1
14	Rosangela Fagundes	Not Set1	 2025-03-16     10:34:00	1
14	Rosangela Fagundes	Not Set1	 2025-03-16     11:44:19	1
14	Rosangela Fagundes	Not Set1	 2025-03-16     14:02:08	1
10	mauricio	Not Set7	 2025-03-16     14:04:48	1
21	brenda pierini	Not Set1	 2025-03-17     05:06:20	1
14	Rosangela Fagundes	Not Set1	 2025-03-17     06:04:58	1
20	carolina peixoto	Not Set1	 2025-03-17     08:06:26	1
21	brenda pierini	Not Set1	 2025-03-17     09:46:06	1
14	Rosangela Fagundes	Not Set1	 2025-03-17     10:07:33	1
10	mauricio	Not Set7	 2025-03-17     10:10:49	1
21	brenda pierini	Not Set1	 2025-03-17     10:43:49	1
14	Rosangela Fagundes	Not Set1	 2025-03-17     10:51:06	1
20	carolina peixoto	Not Set1	 2025-03-17     11:02:10	1
8	lurdes	Not Set1	 2025-03-17     11:40:21	1
20	carolina peixoto	Not Set1	 2025-03-17     12:00:38	1
21	brenda pierini	Not Set1	 2025-03-17     13:10:53	1
14	Rosangela Fagundes	Not Set1	 2025-03-17     14:18:42	1
17	lays	Not Set1	 2025-03-17     14:29:25	1
22	nilo	Not Set1	 2025-03-17     14:40:19	1
20	carolina peixoto	Not Set1	 2025-03-17     16:12:12	1
17	lays	Not Set1	 2025-03-17     16:12:15	1
10	mauricio	Not Set7	 2025-03-17     16:40:24	1
8	lurdes	Not Set1	 2025-03-17     16:40:29	1
17	lays	Not Set1	 2025-03-17     17:13:44	1
10	mauricio	Not Set7	 2025-03-17     17:16:18	1
8	lurdes	Not Set1	 2025-03-17     17:39:43	1
22	nilo	Not Set1	 2025-03-17     17:57:25	1
10	mauricio	Not Set7	 2025-03-17     18:19:31	1
22	nilo	Not Set1	 2025-03-17     18:56:33	1
8	lurdes	Not Set1	 2025-03-17     20:01:55	1
22	nilo	Not Set1	 2025-03-17     22:31:58	1
17	lays	Not Set1	 2025-03-17     23:00:15	1
21	brenda pierini	Not Set1	 2025-03-18     04:50:22	1
14	Rosangela Fagundes	Not Set1	 2025-03-18     06:03:22	1
20	carolina peixoto	Not Set1	 2025-03-18     08:16:32	1
21	brenda pierini	Not Set1	 2025-03-18     09:43:04	1
14	Rosangela Fagundes	Not Set1	 2025-03-18     09:53:33	1
10	mauricio	Not Set7	 2025-03-18     10:13:31	1
14	Rosangela Fagundes	Not Set1	 2025-03-18     10:49:02	1
21	brenda pierini	Not Set1	 2025-03-18     10:49:52	1
20	carolina peixoto	Not Set1	 2025-03-18     11:37:37	1
8	lurdes	Not Set1	 2025-03-18     11:41:59	1
20	carolina peixoto	Not Set1	 2025-03-18     12:36:51	1
21	brenda pierini	Not Set1	 2025-03-18     13:11:31	1
14	Rosangela Fagundes	Not Set1	 2025-03-18     14:16:14	1
17	lays	Not Set1	 2025-03-18     14:30:06	1
22	nilo	Not Set1	 2025-03-18     14:37:23	1
17	lays	Not Set1	 2025-03-18     16:13:23	1
20	carolina peixoto	Not Set1	 2025-03-18     16:13:39	1
17	lays	Not Set1	 2025-03-18     17:16:08	1
22	nilo	Not Set1	 2025-03-18     17:52:44	1
10	mauricio	Not Set7	 2025-03-18     18:29:12	1
22	nilo	Not Set1	 2025-03-18     19:02:57	1
8	lurdes	Not Set1	 2025-03-18     19:03:29	1
8	lurdes	Not Set1	 2025-03-18     20:02:46	1
22	nilo	Not Set1	 2025-03-18     22:31:27	1
17	lays	Not Set1	 2025-03-18     23:00:44	1
21	brenda pierini	Not Set1	 2025-03-19     04:48:51	1
14	Rosangela Fagundes	Not Set1	 2025-03-19     06:05:34	1
20	carolina peixoto	Not Set1	 2025-03-19     07:55:35	1
21	brenda pierini	Not Set1	 2025-03-19     09:53:04	1
14	Rosangela Fagundes	Not Set1	 2025-03-19     10:05:43	1
10	mauricio	Not Set7	 2025-03-19     10:11:00	1
14	Rosangela Fagundes	Not Set1	 2025-03-19     10:42:54	1
21	brenda pierini	Not Set1	 2025-03-19     10:53:26	1
20	carolina peixoto	Not Set1	 2025-03-19     11:08:56	1
20	carolina peixoto	Not Set1	 2025-03-19     12:08:04	1
8	lurdes	Not Set1	 2025-03-19     13:02:37	1
21	brenda pierini	Not Set1	 2025-03-19     13:05:29	1
17	lays	Not Set1	 2025-03-19     14:32:16	1
22	nilo	Not Set1	 2025-03-19     14:34:31	1
17	lays	Not Set1	 2025-03-19     16:13:30	1
20	carolina peixoto	Not Set1	 2025-03-19     16:13:38	1
8	lurdes	Not Set1	 2025-03-19     17:00:37	1
17	lays	Not Set1	 2025-03-19     17:12:44	1
22	nilo	Not Set1	 2025-03-19     18:03:22	1
10	mauricio	Not Set7	 2025-03-19     18:05:27	1
22	nilo	Not Set1	 2025-03-19     19:04:25	1
8	lurdes	Not Set1	 2025-03-19     21:02:52	1
22	nilo	Not Set1	 2025-03-19     22:31:00	1
17	lays	Not Set1	 2025-03-19     23:01:23	1
8	lurdes	Not Set1	 2025-03-19     23:24:40	1
8	lurdes	Not Set1	 2025-03-20     04:56:17	1
14	Rosangela Fagundes	Not Set1	 2025-03-20     06:02:46	1
20	carolina peixoto	Not Set1	 2025-03-20     08:09:23	1
21	brenda pierini	Not Set1	 2025-03-20     08:20:12	1
8	lurdes	Not Set1	 2025-03-20     09:34:15	1
14	Rosangela Fagundes	Not Set1	 2025-03-20     09:59:18	1
8	lurdes	Not Set1	 2025-03-20     10:27:48	1
14	Rosangela Fagundes	Not Set1	 2025-03-20     10:44:48	1
21	brenda pierini	Not Set1	 2025-03-20     11:04:41	1
21	brenda pierini	Not Set1	 2025-03-20     11:59:15	1
20	carolina peixoto	Not Set1	 2025-03-20     12:07:16	1
8	lurdes	Not Set1	 2025-03-20     13:02:01	1
20	carolina peixoto	Not Set1	 2025-03-20     13:05:50	1
10	mauricio	Not Set7	 2025-03-20     13:09:31	1
14	Rosangela Fagundes	Not Set1	 2025-03-20     14:14:10	1
22	nilo	Not Set1	 2025-03-20     14:40:31	1
17	lays	Not Set1	 2025-03-20     14:48:00	1
21	brenda pierini	Not Set1	 2025-03-20     15:09:20	1
20	carolina peixoto	Not Set1	 2025-03-20     16:28:02	1
17	lays	Not Set1	 2025-03-20     16:35:47	1
17	lays	Not Set1	 2025-03-20     17:35:00	1
22	nilo	Not Set1	 2025-03-20     17:49:50	1
22	nilo	Not Set1	 2025-03-20     18:51:58	1
10	mauricio	Not Set7	 2025-03-20     19:10:38	1
22	nilo	Not Set1	 2025-03-20     22:30:45	1
17	lays	Not Set1	 2025-03-20     23:00:08	1
21	brenda pierini	Not Set1	 2025-03-21     04:51:53	1
14	Rosangela Fagundes	Not Set1	 2025-03-21     06:07:01	1
20	carolina peixoto	Not Set1	 2025-03-21     08:16:17	1
21	brenda pierini	Not Set1	 2025-03-21     08:42:43	1
21	brenda pierini	Not Set1	 2025-03-21     09:40:25	1
14	Rosangela Fagundes	Not Set1	 2025-03-21     10:06:01	1
10	mauricio	Not Set7	 2025-03-21     10:34:56	1
14	Rosangela Fagundes	Not Set1	 2025-03-21     11:02:16	1
8	lurdes	Not Set1	 2025-03-21     11:41:47	1
21	brenda pierini	Not Set1	 2025-03-21     13:06:25	1
20	carolina peixoto	Not Set1	 2025-03-21     14:12:11	1
14	Rosangela Fagundes	Not Set1	 2025-03-21     14:20:15	1
22	nilo	Not Set1	 2025-03-21     14:40:09	1
17	lays	Not Set1	 2025-03-21     14:43:12	1
23	yaritza bueno	Not Set1	 2025-03-21     14:46:45	1
20	carolina peixoto	Not Set1	 2025-03-21     15:20:14	1
17	lays	Not Set1	 2025-03-21     16:51:55	1
8	lurdes	Not Set1	 2025-03-21     17:34:07	1
17	lays	Not Set1	 2025-03-21     17:49:59	1
8	lurdes	Not Set1	 2025-03-21     18:33:53	1
22	nilo	Not Set1	 2025-03-21     18:35:01	1
10	mauricio	Not Set7	 2025-03-21     18:39:04	1
23	yaritza bueno	Not Set1	 2025-03-21     19:02:35	1
22	nilo	Not Set1	 2025-03-21     19:34:42	1
8	lurdes	Not Set1	 2025-03-21     20:02:32	1
23	yaritza bueno	Not Set1	 2025-03-21     20:02:46	1
23	yaritza bueno	Not Set1	 2025-03-21     22:00:23	1
22	nilo	Not Set1	 2025-03-21     22:30:51	1
17	lays	Not Set1	 2025-03-21     22:57:59	1
23	yaritza bueno	Not Set1	 2025-03-22     07:50:13	1
22	nilo	Not Set1	 2025-03-22     09:53:14	1
20	carolina peixoto	Not Set1	 2025-03-22     10:02:02	1
23	yaritza bueno	Not Set1	 2025-03-22     11:10:15	1
23	yaritza bueno	Not Set1	 2025-03-22     12:10:14	1
20	carolina peixoto	Not Set1	 2025-03-22     12:29:26	1
22	nilo	Not Set1	 2025-03-22     12:59:56	1
20	carolina peixoto	Not Set1	 2025-03-22     13:11:26	1
22	nilo	Not Set1	 2025-03-22     14:03:41	1
23	yaritza bueno	Not Set1	 2025-03-22     15:35:58	1
22	nilo	Not Set1	 2025-03-22     17:00:12	1
20	carolina peixoto	Not Set1	 2025-03-22     17:03:10	1
17	lays	Not Set1	 2025-03-23     07:42:37	1
8	lurdes	Not Set1	 2025-03-23     08:13:41	1
8	lurdes	Not Set1	 2025-03-23     13:00:02	1
8	lurdes	Not Set1	 2025-03-23     13:31:28	1
17	lays	Not Set1	 2025-03-23     13:59:35	1
8	lurdes	Not Set1	 2025-03-23     14:00:02	1
21	brenda pierini	Not Set1	 2025-03-24     04:47:24	1
14	Rosangela Fagundes	Not Set1	 2025-03-24     06:05:18	1
20	carolina peixoto	Not Set1	 2025-03-24     08:14:15	1
21	brenda pierini	Not Set1	 2025-03-24     09:36:55	1
14	Rosangela Fagundes	Not Set1	 2025-03-24     10:04:21	1
10	mauricio	Not Set7	 2025-03-24     10:11:48	1
21	brenda pierini	Not Set1	 2025-03-24     10:32:08	1
14	Rosangela Fagundes	Not Set1	 2025-03-24     10:51:13	1
8	lurdes	Not Set1	 2025-03-24     11:42:14	1
21	brenda pierini	Not Set1	 2025-03-24     13:05:53	1
23	yaritza bueno	Not Set1	 2025-03-24     13:36:05	1
10	mauricio	Not Set7	 2025-03-24     13:36:15	1
20	carolina peixoto	Not Set1	 2025-03-24     14:07:03	1
14	Rosangela Fagundes	Not Set1	 2025-03-24     14:16:31	1
10	mauricio	Not Set7	 2025-03-24     14:31:53	1
17	lays	Not Set1	 2025-03-24     14:36:40	1
22	nilo	Not Set1	 2025-03-24     14:37:49	1
20	carolina peixoto	Not Set1	 2025-03-24     15:03:33	1
8	lurdes	Not Set1	 2025-03-24     16:09:12	1
17	lays	Not Set1	 2025-03-24     16:28:19	1
20	carolina peixoto	Not Set1	 2025-03-24     16:28:41	1
8	lurdes	Not Set1	 2025-03-24     17:08:42	1
17	lays	Not Set1	 2025-03-24     17:29:03	1
22	nilo	Not Set1	 2025-03-24     18:00:03	1
10	mauricio	Not Set7	 2025-03-24     18:29:15	1
22	nilo	Not Set1	 2025-03-24     18:58:25	1
8	lurdes	Not Set1	 2025-03-24     20:00:14	1
23	yaritza bueno	Not Set1	 2025-03-24     20:10:21	1
23	yaritza bueno	Not Set1	 2025-03-24     21:09:43	1
23	yaritza bueno	Not Set1	 2025-03-24     22:02:14	1
17	lays	Not Set1	 2025-03-24     23:00:36	1
22	nilo	Not Set1	 2025-03-24     23:03:05	1
21	brenda pierini	Not Set1	 2025-03-25     04:51:33	1
14	Rosangela Fagundes	Not Set1	 2025-03-25     06:06:27	1
20	carolina peixoto	Not Set1	 2025-03-25     08:04:23	1
14	Rosangela Fagundes	Not Set1	 2025-03-25     09:56:17	1
21	brenda pierini	Not Set1	 2025-03-25     10:09:12	1
10	mauricio	Not Set7	 2025-03-25     10:13:38	1
14	Rosangela Fagundes	Not Set1	 2025-03-25     10:31:10	1
21	brenda pierini	Not Set1	 2025-03-25     11:06:21	1
8	lurdes	Not Set1	 2025-03-25     11:36:33	1
20	carolina peixoto	Not Set1	 2025-03-25     11:41:02	1
20	carolina peixoto	Not Set1	 2025-03-25     12:39:30	1
21	brenda pierini	Not Set1	 2025-03-25     13:06:16	1
23	yaritza bueno	Not Set1	 2025-03-25     13:41:24	1
14	Rosangela Fagundes	Not Set1	 2025-03-25     14:22:07	1
22	nilo	Not Set1	 2025-03-25     14:39:59	1
17	lays	Not Set1	 2025-03-25     14:53:55	1
17	lays	Not Set1	 2025-03-25     16:17:57	1
20	carolina peixoto	Not Set1	 2025-03-25     16:18:10	1
10	mauricio	Not Set7	 2025-03-25     17:03:33	1
8	lurdes	Not Set1	 2025-03-25     17:03:39	1
17	lays	Not Set1	 2025-03-25     17:19:45	1
22	nilo	Not Set1	 2025-03-25     18:00:20	1
8	lurdes	Not Set1	 2025-03-25     18:09:12	1
10	mauricio	Not Set7	 2025-03-25     18:09:16	1
10	mauricio	Not Set7	 2025-03-25     18:22:41	1
22	nilo	Not Set1	 2025-03-25     18:59:05	1
23	yaritza bueno	Not Set1	 2025-03-25     19:41:16	1
8	lurdes	Not Set1	 2025-03-25     20:11:21	1
23	yaritza bueno	Not Set1	 2025-03-25     20:41:52	1
23	yaritza bueno	Not Set1	 2025-03-25     22:02:09	1
22	nilo	Not Set1	 2025-03-25     22:34:12	1
17	lays	Not Set1	 2025-03-25     23:01:04	1
21	brenda pierini	Not Set1	 2025-03-26     04:54:58	1
14	Rosangela Fagundes	Not Set1	 2025-03-26     06:08:01	1
22	nilo	Not Set1	 2025-03-26     08:04:49	1
20	carolina peixoto	Not Set1	 2025-03-26     08:23:18	1
14	Rosangela Fagundes	Not Set1	 2025-03-26     10:07:34	1
14	Rosangela Fagundes	Not Set1	 2025-03-26     11:02:12	1
8	lurdes	Not Set1	 2025-03-26     11:41:25	1
10	mauricio	Not Set7	 2025-03-26     11:48:50	1
22	nilo	Not Set1	 2025-03-26     11:58:57	1
20	carolina peixoto	Not Set1	 2025-03-26     12:28:38	1
22	nilo	Not Set1	 2025-03-26     13:03:24	1
20	carolina peixoto	Not Set1	 2025-03-26     13:25:32	1
23	yaritza bueno	Not Set1	 2025-03-26     13:42:17	1
14	Rosangela Fagundes	Not Set1	 2025-03-26     14:15:37	1
17	lays	Not Set1	 2025-03-26     14:29:55	1
22	nilo	Not Set1	 2025-03-26     16:02:01	1
10	mauricio	Not Set7	 2025-03-26     16:07:53	1
8	lurdes	Not Set1	 2025-03-26     16:09:01	1
17	lays	Not Set1	 2025-03-26     16:35:25	1
20	carolina peixoto	Not Set1	 2025-03-26     16:36:11	1
10	mauricio	Not Set7	 2025-03-26     16:45:59	1
8	lurdes	Not Set1	 2025-03-26     17:08:43	1
17	lays	Not Set1	 2025-03-26     17:36:57	1
23	yaritza bueno	Not Set1	 2025-03-26     19:38:19	1
10	mauricio	Not Set7	 2025-03-26     20:15:02	1
8	lurdes	Not Set1	 2025-03-26     20:33:17	1
23	yaritza bueno	Not Set1	 2025-03-26     20:34:20	1
23	yaritza bueno	Not Set1	 2025-03-26     22:01:21	1
17	lays	Not Set1	 2025-03-26     23:00:01	1
21	brenda pierini	Not Set1	 2025-03-27     04:48:55	1
14	Rosangela Fagundes	Not Set1	 2025-03-27     06:04:14	1
20	carolina peixoto	Not Set1	 2025-03-27     08:17:40	1
22	nilo	Not Set1	 2025-03-27     08:27:49	1
14	Rosangela Fagundes	Not Set1	 2025-03-27     10:11:43	1
14	Rosangela Fagundes	Not Set1	 2025-03-27     11:04:16	1
8	lurdes	Not Set1	 2025-03-27     11:40:36	1
22	nilo	Not Set1	 2025-03-27     12:01:44	1
21	brenda pierini	Not Set1	 2025-03-27     12:08:13	1
22	nilo	Not Set1	 2025-03-27     13:04:47	1
10	mauricio	Not Set7	 2025-03-27     13:07:11	1
21	brenda pierini	Not Set1	 2025-03-27     13:08:06	1
23	yaritza bueno	Not Set1	 2025-03-27     13:40:06	1
21	brenda pierini	Not Set1	 2025-03-27     14:06:13	1
20	carolina peixoto	Not Set1	 2025-03-27     14:09:10	1
17	lays	Not Set1	 2025-03-27     14:23:47	1
22	nilo	Not Set1	 2025-03-27     15:11:57	1
17	lays	Not Set1	 2025-03-27     16:01:34	1
8	lurdes	Not Set1	 2025-03-27     16:42:44	1
10	mauricio	Not Set7	 2025-03-27     16:42:49	1
17	lays	Not Set1	 2025-03-27     16:59:27	1
10	mauricio	Not Set7	 2025-03-27     17:34:54	1
8	lurdes	Not Set1	 2025-03-27     17:41:40	1
23	yaritza bueno	Not Set1	 2025-03-27     19:17:20	1
8	lurdes	Not Set1	 2025-03-27     20:10:12	1
10	mauricio	Not Set7	 2025-03-27     20:16:13	1
23	yaritza bueno	Not Set1	 2025-03-27     20:18:08	1
23	yaritza bueno	Not Set1	 2025-03-27     22:01:11	1
17	lays	Not Set1	 2025-03-27     22:59:39	1
21	brenda pierini	Not Set1	 2025-03-28     04:46:03	1
14	Rosangela Fagundes	Not Set1	 2025-03-28     06:04:01	1
20	carolina peixoto	Not Set1	 2025-03-28     08:03:20	1
22	nilo	Not Set1	 2025-03-28     08:33:15	1
14	Rosangela Fagundes	Not Set1	 2025-03-28     10:08:21	1
14	Rosangela Fagundes	Not Set1	 2025-03-28     10:52:44	1
21	brenda pierini	Not Set1	 2025-03-28     11:30:14	1
8	lurdes	Not Set1	 2025-03-28     11:39:10	1
22	nilo	Not Set1	 2025-03-28     12:14:57	1
21	brenda pierini	Not Set1	 2025-03-28     12:30:19	1
10	mauricio	Not Set7	 2025-03-28     12:40:27	1
21	brenda pierini	Not Set1	 2025-03-28     13:07:21	1
22	nilo	Not Set1	 2025-03-28     13:11:03	1
23	yaritza bueno	Not Set1	 2025-03-28     13:38:48	1
20	carolina peixoto	Not Set1	 2025-03-28     13:53:37	1
14	Rosangela Fagundes	Not Set1	 2025-03-28     14:30:38	1
17	lays	Not Set1	 2025-03-28     14:42:40	1
20	carolina peixoto	Not Set1	 2025-03-28     14:51:10	1
22	nilo	Not Set1	 2025-03-28     16:08:16	1
17	lays	Not Set1	 2025-03-28     16:20:48	1
20	carolina peixoto	Not Set1	 2025-03-28     16:21:03	1
8	lurdes	Not Set1	 2025-03-28     17:02:09	1
10	mauricio	Not Set7	 2025-03-28     17:03:13	1
17	lays	Not Set1	 2025-03-28     17:25:29	1
10	mauricio	Not Set7	 2025-03-28     17:36:58	1


	`;
	};
	const UltrasMy = () => {
		return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
10	mauricio	Not Set7	 2025-01-02     16:00:00	1
10	mauricio	Not Set7	 2025-01-02     17:00:00	1
10	mauricio	Not Set7	 2025-01-02     21:20:00	1
10	mauricio	Not Set7	 2025-01-03     13:00:00	1
10	mauricio	Not Set7	 2025-01-03     16:00:00	1
10	mauricio	Not Set7	 2025-01-03     17:00:00	1
10	mauricio	Not Set7	 2025-01-03     21:20:00	1
10	mauricio	Not Set7	 2025-01-04     13:00:00	1
10	mauricio	Not Set7	 2025-01-04     16:00:00	1
10	mauricio	Not Set7	 2025-01-04     17:00:00	1
10	mauricio	Not Set7	 2025-01-04     21:20:00	1

10	mauricio	Not Set7	 2025-01-05     13:00:00	1
10	mauricio	Not Set7	 2025-01-05     16:00:00	1
10	mauricio	Not Set7	 2025-01-05     17:00:00	1
10	mauricio	Not Set7	 2025-01-05     21:20:00	1

10	mauricio	Not Set7	 2025-01-06     13:00:00	1
10	mauricio	Not Set7	 2025-01-06     16:00:00	1
10	mauricio	Not Set7	 2025-01-06     17:00:00	1
10	mauricio	Not Set7	 2025-01-06     21:20:00	1

10	mauricio	Not Set7	 2025-01-07     13:00:00	1
10	mauricio	Not Set7	 2025-01-07     16:00:00	1
10	mauricio	Not Set7	 2025-01-07     17:00:00	1
10	mauricio	Not Set7	 2025-01-07     21:20:00	1

10	mauricio	Not Set7	 2025-01-08     13:00:00	1
10	mauricio	Not Set7	 2025-01-08     16:00:00	1
10	mauricio	Not Set7	 2025-01-08     17:00:00	1
10	mauricio	Not Set7	 2025-01-08     21:20:00	1

10	mauricio	Not Set7	 2025-01-09     13:00:00	1
10	mauricio	Not Set7	 2025-01-09     16:00:00	1
10	mauricio	Not Set7	 2025-01-09     17:00:00	1
10	mauricio	Not Set7	 2025-01-09     21:20:00	1

10	mauricio	Not Set7	 2025-01-10     13:00:00	1
10	mauricio	Not Set7	 2025-01-10     16:00:00	1
10	mauricio	Not Set7	 2025-01-10     17:00:00	1
10	mauricio	Not Set7	 2025-01-10     21:20:00	1

10	mauricio	Not Set7	 2025-01-11     13:00:00	1
10	mauricio	Not Set7	 2025-01-11     16:00:00	1
10	mauricio	Not Set7	 2025-01-11     17:00:00	1
10	mauricio	Not Set7	 2025-01-11     21:20:00	1

10	mauricio	Not Set7	 2025-01-12     13:00:00	1
10	mauricio	Not Set7	 2025-01-12     16:00:00	1
10	mauricio	Not Set7	 2025-01-12     17:00:00	1
10	mauricio	Not Set7	 2025-01-12     21:20:00	1

10	mauricio	Not Set7	 2025-01-13     13:00:00	1
10	mauricio	Not Set7	 2025-01-13     16:00:00	1
10	mauricio	Not Set7	 2025-01-13     17:00:00	1
10	mauricio	Not Set7	 2025-01-13     21:20:00	1
10	mauricio	Not Set7	 2025-01-14     13:00:00	1
10	mauricio	Not Set7	 2025-01-14     16:00:00	1
10	mauricio	Not Set7	 2025-01-14     17:00:00	1
10	mauricio	Not Set7	 2025-01-14     21:20:00	1


10	mauricio	Not Set7	 2025-01-15     13:00:00	1
10	mauricio	Not Set7	 2025-01-15     16:00:00	1
10	mauricio	Not Set7	 2025-01-15     17:00:00	1
10	mauricio	Not Set7	 2025-01-15     21:20:00	1

10	mauricio	Not Set7	 2025-01-16     13:00:00	1
10	mauricio	Not Set7	 2025-01-16     16:00:00	1
10	mauricio	Not Set7	 2025-01-16     17:00:00	1
10	mauricio	Not Set7	 2025-01-16     21:20:00	1

10	mauricio	Not Set7	 2025-01-17     13:00:00	1
10	mauricio	Not Set7	 2025-01-17     16:00:00	1
10	mauricio	Not Set7	 2025-01-17     17:00:00	1
10	mauricio	Not Set7	 2025-01-17     21:20:00	1


10	mauricio	Not Set7	 2025-01-18     13:00:00	1
10	mauricio	Not Set7	 2025-01-18     16:00:00	1
10	mauricio	Not Set7	 2025-01-18     17:00:00	1
10	mauricio	Not Set7	 2025-01-18     21:20:00	1

10	mauricio	Not Set7	 2025-01-19     13:00:00	1
10	mauricio	Not Set7	 2025-01-19     16:00:00	1
10	mauricio	Not Set7	 2025-01-19     17:00:00	1
10	mauricio	Not Set7	 2025-01-19     21:20:00	1

10	mauricio	Not Set7	 2025-01-20     13:00:00	1
10	mauricio	Not Set7	 2025-01-20     16:00:00	1
10	mauricio	Not Set7	 2025-01-20     17:00:00	1
10	mauricio	Not Set7	 2025-01-20     21:20:00	1
`;
	};
	const UltrasMys = () => {
		return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
10	mauricio	Not Set7	 2025-01-02     17:00:00	1
10	mauricio	Not Set7	 2025-01-02     21:20:00	1
10	mauricio	Not Set7	 2025-01-03     13:00:00	1
10	mauricio	Not Set7	 2025-01-03     16:00:00	1
10	mauricio	Not Set7	 2025-01-03     21:20:00	1
10	mauricio	Not Set7	 2025-01-04     13:00:00	1
10	mauricio	Not Set7	 2025-01-04     16:00:00	1
10	mauricio	Not Set7	 2025-01-04     17:00:00	1
10	mauricio	Not Set7	 2025-01-04     21:20:00	1

10	mauricio	Not Set7	 2025-01-05     13:00:00	1
10	mauricio	Not Set7	 2025-01-05     16:00:00	1
10	mauricio	Not Set7	 2025-01-05     17:00:00	1
10	mauricio	Not Set7	 2025-01-05     21:20:00	1

10	mauricio	Not Set7	 2025-01-06     13:00:00	1
10	mauricio	Not Set7	 2025-01-06     16:00:00	1
10	mauricio	Not Set7	 2025-01-06     17:00:00	1
10	mauricio	Not Set7	 2025-01-06     21:20:00	1

10	mauricio	Not Set7	 2025-01-07     13:00:00	1
10	mauricio	Not Set7	 2025-01-07     16:00:00	1
10	mauricio	Not Set7	 2025-01-07     17:00:00	1
10	mauricio	Not Set7	 2025-01-07     21:20:00	1

10	mauricio	Not Set7	 2025-01-08     13:00:00	1
10	mauricio	Not Set7	 2025-01-08     16:00:00	1
10	mauricio	Not Set7	 2025-01-08     17:00:00	1
10	mauricio	Not Set7	 2025-01-08     21:20:00	1

10	mauricio	Not Set7	 2025-01-09     13:00:00	1
10	mauricio	Not Set7	 2025-01-09     16:00:00	1
10	mauricio	Not Set7	 2025-01-09     17:00:00	1
10	mauricio	Not Set7	 2025-01-09     21:20:00	1

10	mauricio	Not Set7	 2025-01-10     13:00:00	1
10	mauricio	Not Set7	 2025-01-10     16:00:00	1
10	mauricio	Not Set7	 2025-01-10     17:00:00	1
10	mauricio	Not Set7	 2025-01-10     21:20:00	1

10	mauricio	Not Set7	 2025-01-11     13:00:00	1
10	mauricio	Not Set7	 2025-01-11     16:00:00	1
10	mauricio	Not Set7	 2025-01-11     17:00:00	1
10	mauricio	Not Set7	 2025-01-11     21:20:00	1

10	mauricio	Not Set7	 2025-01-12     13:00:00	1
10	mauricio	Not Set7	 2025-01-12     16:00:00	1
10	mauricio	Not Set7	 2025-01-12     17:00:00	1
10	mauricio	Not Set7	 2025-01-12     21:20:00	1

10	mauricio	Not Set7	 2025-01-13     13:00:00	1
10	mauricio	Not Set7	 2025-01-13     16:00:00	1
10	mauricio	Not Set7	 2025-01-13     17:00:00	1
10	mauricio	Not Set7	 2025-01-13     21:20:00	1
10	mauricio	Not Set7	 2025-01-14     13:00:00	1
10	mauricio	Not Set7	 2025-01-14     16:00:00	1
10	mauricio	Not Set7	 2025-01-14     17:00:00	1
10	mauricio	Not Set7	 2025-01-14     21:20:00	1


10	mauricio	Not Set7	 2025-01-15     13:00:00	1
10	mauricio	Not Set7	 2025-01-15     16:00:00	1
10	mauricio	Not Set7	 2025-01-15     17:00:00	1
10	mauricio	Not Set7	 2025-01-15     21:20:00	1

10	mauricio	Not Set7	 2025-01-16     13:00:00	1
10	mauricio	Not Set7	 2025-01-16     16:00:00	1
10	mauricio	Not Set7	 2025-01-16     17:00:00	1
10	mauricio	Not Set7	 2025-01-16     21:20:00	1

10	mauricio	Not Set7	 2025-01-17     13:00:00	1
10	mauricio	Not Set7	 2025-01-17     16:00:00	1
10	mauricio	Not Set7	 2025-01-17     17:00:00	1
10	mauricio	Not Set7	 2025-01-17     21:20:00	1


10	mauricio	Not Set7	 2025-01-18     13:00:00	1
10	mauricio	Not Set7	 2025-01-18     16:00:00	1
10	mauricio	Not Set7	 2025-01-18     17:00:00	1
10	mauricio	Not Set7	 2025-01-18     21:20:00	1

10	mauricio	Not Set7	 2025-01-19     13:00:00	1
10	mauricio	Not Set7	 2025-01-19     16:00:00	1
10	mauricio	Not Set7	 2025-01-19     17:00:00	1
10	mauricio	Not Set7	 2025-01-19     21:20:00	1

10	mauricio	Not Set7	 2025-01-20     13:00:00	1
10	mauricio	Not Set7	 2025-01-20     16:00:00	1
10	mauricio	Not Set7	 2025-01-20     17:00:00	1
10	mauricio	Not Set7	 2025-01-20     21:20:00	1
`;
	};
const janeiro = () => {
		return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
10	mauricio	Not Set7	 2025-01-02     16:00:00	1
10	mauricio	Not Set7	 2025-01-02     17:00:00	1
10	mauricio	Not Set7	 2025-01-02     21:20:00	1
10	mauricio	Not Set7	 2025-01-03     13:00:00	1
10	mauricio	Not Set7	 2025-01-03     16:00:00	1
10	mauricio	Not Set7	 2025-01-03     17:00:00	1
10	mauricio	Not Set7	 2025-01-03     21:20:00	1
10	mauricio	Not Set7	 2025-01-04     13:00:00	1
10	mauricio	Not Set7	 2025-01-04     16:00:00	1
10	mauricio	Not Set7	 2025-01-04     17:00:00	1
10	mauricio	Not Set7	 2025-01-04     21:20:00	1
10	mauricio	Not Set7	 2025-01-05     07:45:00	1
10	mauricio	Not Set7	 2025-01-05     14:00:00	1
10	mauricio	Not Set7	 2025-01-06     13:00:00	1
10	mauricio	Not Set7	 2025-01-06     16:00:00	1
10	mauricio	Not Set7	 2025-01-06     17:00:00	1
10	mauricio	Not Set7	 2025-01-06     21:20:00	1
10	mauricio	Not Set7	 2025-01-07     13:00:00	1
10	mauricio	Not Set7	 2025-01-07     16:00:00	1
10	mauricio	Not Set7	 2025-01-07     17:00:00	1
10	mauricio	Not Set7	 2025-01-07     21:20:00	1
`;
	};
const abril = () => {
		return `14	Rosangela Fagundes	Not Set1	 2025-04-01     06:06:14	1
21	brenda pierini	Not Set1	 2025-04-01     06:14:13	1
20	carolina peixoto	Not Set1	 2025-04-01     07:56:29	1
22	nilo	Not Set1	 2025-04-01     08:11:22	1
21	brenda pierini	Not Set1	 2025-04-01     09:37:40	1
10	mauricio	Not Set7	 2025-04-01     09:49:26	1
14	Rosangela Fagundes	Not Set1	 2025-04-01     10:02:54	1
21	brenda pierini	Not Set1	 2025-04-01     10:36:44	1
8	lurdes	Not Set1	 2025-04-01     11:00:07	1
14	Rosangela Fagundes	Not Set1	 2025-04-01     11:01:28	1
20	carolina peixoto	Not Set1	 2025-04-01     11:04:33	1
20	carolina peixoto	Not Set1	 2025-04-01     11:57:52	1
22	nilo	Not Set1	 2025-04-01     11:59:35	1
21	brenda pierini	Not Set1	 2025-04-01     13:02:55	1
22	nilo	Not Set1	 2025-04-01     13:04:23	1
10	mauricio	Not Set7	 2025-04-01     13:41:39	1
8	lurdes	Not Set1	 2025-04-01     13:41:48	1
23	yaritza bueno	Not Set1	 2025-04-01     13:49:34	1
14	Rosangela Fagundes	Not Set1	 2025-04-01     14:18:37	1
10	mauricio	Not Set7	 2025-04-01     14:20:13	1
17	lays	Not Set1	 2025-04-01     14:31:40	1
8	lurdes	Not Set1	 2025-04-01     14:42:07	1
22	nilo	Not Set1	 2025-04-01     15:59:12	1
17	lays	Not Set1	 2025-04-01     16:57:24	1
20	carolina peixoto	Not Set1	 2025-04-01     16:57:40	1
17	lays	Not Set1	 2025-04-01     17:30:10	1
23	yaritza bueno	Not Set1	 2025-04-01     19:51:08	1
8	lurdes	Not Set1	 2025-04-01     19:55:41	1
23	yaritza bueno	Not Set1	 2025-04-01     20:50:20	1
17	lays	Not Set1	 2025-04-01     22:59:23	1
10	mauricio	Not Set7	 2025-04-02     04:52:34	1
14	Rosangela Fagundes	Not Set1	 2025-04-02     06:13:56	1
22	nilo	Not Set1	 2025-04-02     08:05:42	1
20	carolina peixoto	Not Set1	 2025-04-02     08:08:25	1
14	Rosangela Fagundes	Not Set1	 2025-04-02     09:59:11	1
14	Rosangela Fagundes	Not Set1	 2025-04-02     10:43:32	1
10	mauricio	Not Set7	 2025-04-02     11:00:31	1
8	lurdes	Not Set1	 2025-04-02     11:15:00	1
22	nilo	Not Set1	 2025-04-02     11:55:26	1
10	mauricio	Not Set7	 2025-04-02     11:57:04	1
22	nilo	Not Set1	 2025-04-02     13:00:42	1
23	yaritza bueno	Not Set1	 2025-04-02     13:41:15	1
10	mauricio	Not Set7	 2025-04-02     13:50:37	1
20	carolina peixoto	Not Set1	 2025-04-02     14:00:16	1
22	nilo	Not Set1	 2025-04-02     14:14:44	1
14	Rosangela Fagundes	Not Set1	 2025-04-02     14:20:20	1
17	lays	Not Set1	 2025-04-02     14:38:17	1
20	carolina peixoto	Not Set1	 2025-04-02     15:01:25	1
17	lays	Not Set1	 2025-04-02     16:11:03	1
20	carolina peixoto	Not Set1	 2025-04-02     16:11:15	1
8	lurdes	Not Set1	 2025-04-02     16:51:17	1
17	lays	Not Set1	 2025-04-02     17:09:30	1
23	yaritza bueno	Not Set1	 2025-04-02     20:11:22	1
9	manuella meireles	Not Set1	 2025-04-02     20:17:16	1
23	yaritza bueno	Not Set1	 2025-04-02     21:08:18	1
23	yaritza bueno	Not Set1	 2025-04-02     22:00:58	1
17	lays	Not Set1	 2025-04-02     23:01:15	1
9	manuella meireles	Not Set1	 2025-04-03     04:54:03	1
14	Rosangela Fagundes	Not Set1	 2025-04-03     06:02:14	1
22	nilo	Not Set1	 2025-04-03     08:05:37	1
20	carolina peixoto	Not Set1	 2025-04-03     08:07:49	1
10	mauricio	Not Set7	 2025-04-03     09:52:25	1
14	Rosangela Fagundes	Not Set1	 2025-04-03     10:03:31	1
14	Rosangela Fagundes	Not Set1	 2025-04-03     11:03:12	1
8	lurdes	Not Set1	 2025-04-03     11:40:48	1
22	nilo	Not Set1	 2025-04-03     12:08:33	1
22	nilo	Not Set1	 2025-04-03     13:01:11	1
20	carolina peixoto	Not Set1	 2025-04-03     13:17:23	1
23	yaritza bueno	Not Set1	 2025-04-03     13:40:17	1
14	Rosangela Fagundes	Not Set1	 2025-04-03     14:21:02	1
20	carolina peixoto	Not Set1	 2025-04-03     14:25:10	1
10	mauricio	Not Set7	 2025-04-03     14:29:14	1
17	lays	Not Set1	 2025-04-03     14:35:44	1
10	mauricio	Not Set7	 2025-04-03     15:43:35	1
22	nilo	Not Set1	 2025-04-03     16:09:22	1
8	lurdes	Not Set1	 2025-04-03     16:21:11	1
17	lays	Not Set1	 2025-04-03     16:23:49	1
20	carolina peixoto	Not Set1	 2025-04-03     17:22:27	1
8	lurdes	Not Set1	 2025-04-03     17:23:17	1
17	lays	Not Set1	 2025-04-03     17:24:35	1
10	mauricio	Not Set7	 2025-04-03     18:34:02	1
8	lurdes	Not Set1	 2025-04-03     20:00:40	1
23	yaritza bueno	Not Set1	 2025-04-03     20:20:54	1
23	yaritza bueno	Not Set1	 2025-04-03     21:19:26	1
23	yaritza bueno	Not Set1	 2025-04-03     22:00:31	1
17	lays	Not Set1	 2025-04-03     22:59:05	1
21	brenda pierini	Not Set1	 2025-04-04     04:44:54	1
14	Rosangela Fagundes	Not Set1	 2025-04-04     06:01:47	1
22	nilo	Not Set1	 2025-04-04     08:09:14	1
20	carolina peixoto	Not Set1	 2025-04-04     08:17:28	1
21	brenda pierini	Not Set1	 2025-04-04     09:14:26	1
10	mauricio	Not Set7	 2025-04-04     09:26:50	1
14	Rosangela Fagundes	Not Set1	 2025-04-04     09:56:27	1
21	brenda pierini	Not Set1	 2025-04-04     09:59:47	1
14	Rosangela Fagundes	Not Set1	 2025-04-04     10:25:17	1
8	lurdes	Not Set1	 2025-04-04     11:40:44	1
22	nilo	Not Set1	 2025-04-04     11:59:39	1
21	brenda pierini	Not Set1	 2025-04-04     12:01:16	1
9	manuella meireles	Not Set1	 2025-04-04     12:40:19	1
22	nilo	Not Set1	 2025-04-04     12:58:34	1
21	brenda pierini	Not Set1	 2025-04-04     13:07:08	1
23	yaritza bueno	Not Set1	 2025-04-04     13:39:31	1
20	carolina peixoto	Not Set1	 2025-04-04     14:13:51	1
14	Rosangela Fagundes	Not Set1	 2025-04-04     14:23:37	1
17	lays	Not Set1	 2025-04-04     14:38:28	1
20	carolina peixoto	Not Set1	 2025-04-04     15:21:45	1
22	nilo	Not Set1	 2025-04-04     16:00:17	1
8	lurdes	Not Set1	 2025-04-04     16:28:46	1
17	lays	Not Set1	 2025-04-04     16:31:59	1
20	carolina peixoto	Not Set1	 2025-04-04     16:59:36	1
8	lurdes	Not Set1	 2025-04-04     17:22:31	1
17	lays	Not Set1	 2025-04-04     17:32:51	1
10	mauricio	Not Set7	 2025-04-04     19:12:38	1
23	yaritza bueno	Not Set1	 2025-04-04     19:39:22	1
8	lurdes	Not Set1	 2025-04-04     20:00:15	1
23	yaritza bueno	Not Set1	 2025-04-04     20:46:31	1
23	yaritza bueno	Not Set1	 2025-04-04     22:01:24	1
17	lays	Not Set1	 2025-04-04     23:01:35	1
23	yaritza bueno	Not Set1	 2025-04-05     07:44:11	1
22	nilo	Not Set1	 2025-04-05     07:59:56	1
14	Rosangela Fagundes	Not Set1	 2025-04-05     09:23:24	1
10	mauricio	Not Set7	 2025-04-05     09:55:14	1
14	Rosangela Fagundes	Not Set1	 2025-04-05     11:28:21	1
14	Rosangela Fagundes	Not Set1	 2025-04-05     12:08:01	1
22	nilo	Not Set1	 2025-04-05     12:25:44	1
23	yaritza bueno	Not Set1	 2025-04-05     12:27:25	1
22	nilo	Not Set1	 2025-04-05     13:27:35	1
23	yaritza bueno	Not Set1	 2025-04-05     13:30:25	1
22	nilo	Not Set1	 2025-04-05     15:00:36	1
23	yaritza bueno	Not Set1	 2025-04-05     15:41:52	1
14	Rosangela Fagundes	Not Set1	 2025-04-05     17:02:17	1
10	mauricio	Not Set7	 2025-04-05     17:12:02	1
21	brenda pierini	Not Set1	 2025-04-07     04:46:16	1
14	Rosangela Fagundes	Not Set1	 2025-04-07     05:57:16	1
22	nilo	Not Set1	 2025-04-07     08:04:01	1
10	mauricio	Not Set7	 2025-04-07     08:16:36	1
20	carolina peixoto	Not Set1	 2025-04-07     08:48:53	1
21	brenda pierini	Not Set1	 2025-04-07     09:05:18	1
21	brenda pierini	Not Set1	 2025-04-07     10:04:31	1
14	Rosangela Fagundes	Not Set1	 2025-04-07     10:09:58	1
20	carolina peixoto	Not Set1	 2025-04-07     10:22:38	1
8	lurdes	Not Set1	 2025-04-07     11:08:02	1
14	Rosangela Fagundes	Not Set1	 2025-04-07     11:17:18	1
20	carolina peixoto	Not Set1	 2025-04-07     11:34:39	1
22	nilo	Not Set1	 2025-04-07     12:02:20	1
21	brenda pierini	Not Set1	 2025-04-07     13:10:10	1
22	nilo	Not Set1	 2025-04-07     13:11:59	1
23	yaritza bueno	Not Set1	 2025-04-07     13:39:00	1
17	lays	Not Set1	 2025-04-07     14:26:32	1
14	Rosangela Fagundes	Not Set1	 2025-04-07     14:32:41	1
22	nilo	Not Set1	 2025-04-07     16:03:01	1
10	mauricio	Not Set7	 2025-04-07     16:21:35	1
20	carolina peixoto	Not Set1	 2025-04-07     16:41:17	1
17	lays	Not Set1	 2025-04-07     16:41:19	1
8	lurdes	Not Set1	 2025-04-07     17:08:00	1
17	lays	Not Set1	 2025-04-07     17:40:39	1
8	lurdes	Not Set1	 2025-04-07     17:52:16	1
23	yaritza bueno	Not Set1	 2025-04-07     20:12:21	1
9	manuella meireles	Not Set1	 2025-04-07     20:31:15	1
23	yaritza bueno	Not Set1	 2025-04-07     21:14:36	1
8	lurdes	Not Set1	 2025-04-07     22:00:04	1
23	yaritza bueno	Not Set1	 2025-04-07     22:01:09	1
17	lays	Not Set1	 2025-04-07     23:02:07	1
21	brenda pierini	Not Set1	 2025-04-08     04:56:53	1
14	Rosangela Fagundes	Not Set1	 2025-04-08     06:01:25	1
20	carolina peixoto	Not Set1	 2025-04-08     08:19:29	1
21	brenda pierini	Not Set1	 2025-04-08     09:26:21	1
14	Rosangela Fagundes	Not Set1	 2025-04-08     09:57:12	1
21	brenda pierini	Not Set1	 2025-04-08     10:13:55	1
10	mauricio	Not Set7	 2025-04-08     10:27:37	1
20	carolina peixoto	Not Set1	 2025-04-08     10:42:33	1
14	Rosangela Fagundes	Not Set1	 2025-04-08     11:01:31	1
8	lurdes	Not Set1	 2025-04-08     11:41:05	1
20	carolina peixoto	Not Set1	 2025-04-08     11:43:45	1
21	brenda pierini	Not Set1	 2025-04-08     13:05:31	1
23	yaritza bueno	Not Set1	 2025-04-08     13:40:09	1
14	Rosangela Fagundes	Not Set1	 2025-04-08     14:20:10	1
10	mauricio	Not Set7	 2025-04-08     14:23:09	1
17	lays	Not Set1	 2025-04-08     14:30:52	1
10	mauricio	Not Set7	 2025-04-08     15:20:43	1
20	carolina peixoto	Not Set1	 2025-04-08     16:31:12	1
17	lays	Not Set1	 2025-04-08     16:31:17	1
8	lurdes	Not Set1	 2025-04-08     17:26:10	1
17	lays	Not Set1	 2025-04-08     17:31:12	1
8	lurdes	Not Set1	 2025-04-08     18:23:29	1
10	mauricio	Not Set7	 2025-04-08     18:31:09	1
8	lurdes	Not Set1	 2025-04-08     20:03:38	1
23	yaritza bueno	Not Set1	 2025-04-08     20:17:22	1
23	yaritza bueno	Not Set1	 2025-04-08     21:18:14	1
23	yaritza bueno	Not Set1	 2025-04-08     22:01:54	1
17	lays	Not Set1	 2025-04-08     22:59:11	1
21	brenda pierini	Not Set1	 2025-04-09     04:52:22	1
14	Rosangela Fagundes	Not Set1	 2025-04-09     05:59:39	1
20	carolina peixoto	Not Set1	 2025-04-09     08:27:17	1
21	brenda pierini	Not Set1	 2025-04-09     09:59:40	1
14	Rosangela Fagundes	Not Set1	 2025-04-09     10:23:33	1
10	mauricio	Not Set7	 2025-04-09     10:26:12	1
14	Rosangela Fagundes	Not Set1	 2025-04-09     11:22:09	1
8	lurdes	Not Set1	 2025-04-09     11:49:55	1
20	carolina peixoto	Not Set1	 2025-04-09     12:30:02	1
20	carolina peixoto	Not Set1	 2025-04-09     13:26:18	1
23	yaritza bueno	Not Set1	 2025-04-09     14:12:56	1
17	lays	Not Set1	 2025-04-09     14:36:56	1
20	carolina peixoto	Not Set1	 2025-04-09     16:38:54	1
17	lays	Not Set1	 2025-04-09     16:39:00	1
10	mauricio	Not Set7	 2025-04-09     17:00:02	1
8	lurdes	Not Set1	 2025-04-09     17:00:06	1
10	mauricio	Not Set7	 2025-04-09     17:25:12	1
17	lays	Not Set1	 2025-04-09     17:35:37	1
8	lurdes	Not Set1	 2025-04-09     18:00:08	1
10	mauricio	Not Set7	 2025-04-09     19:02:06	1
8	lurdes	Not Set1	 2025-04-09     20:04:06	1
23	yaritza bueno	Not Set1	 2025-04-09     20:27:04	1
23	yaritza bueno	Not Set1	 2025-04-09     21:22:52	1
23	yaritza bueno	Not Set1	 2025-04-09     22:01:26	1
17	lays	Not Set1	 2025-04-09     22:58:55	1
21	brenda pierini	Not Set1	 2025-04-10     04:54:19	1
14	Rosangela Fagundes	Not Set1	 2025-04-10     06:06:27	1
20	carolina peixoto	Not Set1	 2025-04-10     08:13:56	1
22	nilo	Not Set1	 2025-04-10     08:20:07	1
10	mauricio	Not Set7	 2025-04-10     10:15:05	1
14	Rosangela Fagundes	Not Set1	 2025-04-10     10:18:22	1
21	brenda pierini	Not Set1	 2025-04-10     10:25:44	1
8	lurdes	Not Set1	 2025-04-10     11:04:27	1
14	Rosangela Fagundes	Not Set1	 2025-04-10     11:10:54	1
21	brenda pierini	Not Set1	 2025-04-10     11:30:01	1
22	nilo	Not Set1	 2025-04-10     12:02:19	1
21	brenda pierini	Not Set1	 2025-04-10     13:04:35	1
22	nilo	Not Set1	 2025-04-10     13:05:02	1
23	yaritza bueno	Not Set1	 2025-04-10     13:44:24	1
20	carolina peixoto	Not Set1	 2025-04-10     13:58:52	1
14	Rosangela Fagundes	Not Set1	 2025-04-10     14:20:22	1
17	lays	Not Set1	 2025-04-10     14:36:26	1
20	carolina peixoto	Not Set1	 2025-04-10     15:33:33	1
22	nilo	Not Set1	 2025-04-10     16:11:57	1
20	carolina peixoto	Not Set1	 2025-04-10     16:41:55	1
17	lays	Not Set1	 2025-04-10     16:42:01	1
8	lurdes	Not Set1	 2025-04-10     16:55:00	1
10	mauricio	Not Set7	 2025-04-10     17:13:09	1
17	lays	Not Set1	 2025-04-10     17:43:19	1
10	mauricio	Not Set7	 2025-04-10     17:43:47	1
8	lurdes	Not Set1	 2025-04-10     17:53:40	1
10	mauricio	Not Set7	 2025-04-10     18:32:31	1
23	yaritza bueno	Not Set1	 2025-04-10     19:57:33	1
8	lurdes	Not Set1	 2025-04-10     20:01:04	1
23	yaritza bueno	Not Set1	 2025-04-10     20:50:01	1
23	yaritza bueno	Not Set1	 2025-04-10     22:00:09	1
17	lays	Not Set1	 2025-04-10     23:01:56	1
21	brenda pierini	Not Set1	 2025-04-11     04:49:51	1
14	Rosangela Fagundes	Not Set1	 2025-04-11     05:59:56	1
22	nilo	Not Set1	 2025-04-11     08:05:42	1
20	carolina peixoto	Not Set1	 2025-04-11     08:29:11	1
14	Rosangela Fagundes	Not Set1	 2025-04-11     10:04:25	1
10	mauricio	Not Set7	 2025-04-11     10:45:01	1
14	Rosangela Fagundes	Not Set1	 2025-04-11     11:05:37	1
21	brenda pierini	Not Set1	 2025-04-11     11:08:09	1
22	nilo	Not Set1	 2025-04-11     12:01:02	1
21	brenda pierini	Not Set1	 2025-04-11     12:09:44	1
20	carolina peixoto	Not Set1	 2025-04-11     12:24:03	1
22	nilo	Not Set1	 2025-04-11     13:03:14	1
21	brenda pierini	Not Set1	 2025-04-11     13:16:43	1
8	lurdes	Not Set1	 2025-04-11     13:17:08	1
23	yaritza bueno	Not Set1	 2025-04-11     13:32:01	1
17	lays	Not Set1	 2025-04-11     14:30:56	1
17	lays	Not Set1	 2025-04-11     17:00:46	1
20	carolina peixoto	Not Set1	 2025-04-11     17:00:51	1
8	lurdes	Not Set1	 2025-04-11     17:26:02	1
10	mauricio	Not Set7	 2025-04-11     17:26:18	1
10	mauricio	Not Set7	 2025-04-11     17:58:02	1
17	lays	Not Set1	 2025-04-11     18:00:05	1
22	nilo	Not Set1	 2025-04-11     18:04:29	1
8	lurdes	Not Set1	 2025-04-11     18:27:08	1
8	lurdes	Not Set1	 2025-04-11     19:46:15	1
10	mauricio	Not Set7	 2025-04-11     20:23:56	1
23	yaritza bueno	Not Set1	 2025-04-11     20:24:46	1
23	yaritza bueno	Not Set1	 2025-04-11     21:34:55	1
23	yaritza bueno	Not Set1	 2025-04-11     22:00:16	1
17	lays	Not Set1	 2025-04-11     23:00:26	1
8	lurdes	Not Set1	 2025-04-12     07:07:02	1
22	nilo	Not Set1	 2025-04-12     07:07:43	1
21	brenda pierini	Not Set1	 2025-04-12     07:41:47	1
17	lays	Not Set1	 2025-04-12     07:48:54	1
23	yaritza bueno	Not Set1	 2025-04-12     07:55:32	1
20	carolina peixoto	Not Set1	 2025-04-12     10:52:19	1
21	brenda pierini	Not Set1	 2025-04-12     12:00:25	1
23	yaritza bueno	Not Set1	 2025-04-12     13:52:53	1
17	lays	Not Set1	 2025-04-12     14:00:09	1
20	carolina peixoto	Not Set1	 2025-04-12     14:04:05	1
8	lurdes	Not Set1	 2025-04-12     14:26:34	1
17	lays	Not Set1	 2025-04-12     15:00:41	1
23	yaritza bueno	Not Set1	 2025-04-12     15:04:51	1
8	lurdes	Not Set1	 2025-04-12     15:27:43	1
20	carolina peixoto	Not Set1	 2025-04-12     15:31:59	1
22	nilo	Not Set1	 2025-04-12     15:40:10	1
21	brenda pierini	Not Set1	 2025-04-12     15:44:40	1
8	lurdes	Not Set1	 2025-04-12     15:44:51	1
23	yaritza bueno	Not Set1	 2025-04-12     16:19:52	1
17	lays	Not Set1	 2025-04-12     17:03:19	1
20	carolina peixoto	Not Set1	 2025-04-12     17:03:26	1
17	lays	Not Set1	 2025-04-13     07:54:49	1
14	Rosangela Fagundes	Not Set1	 2025-04-13     10:02:26	1
14	Rosangela Fagundes	Not Set1	 2025-04-13     11:44:00	1
17	lays	Not Set1	 2025-04-13     14:02:13	1
21	brenda pierini	Not Set1	 2025-04-14     04:55:06	1
14	Rosangela Fagundes	Not Set1	 2025-04-14     06:04:24	1
20	carolina peixoto	Not Set1	 2025-04-14     07:43:12	1
22	nilo	Not Set1	 2025-04-14     08:30:16	1
10	mauricio	Not Set7	 2025-04-14     10:09:34	1
14	Rosangela Fagundes	Not Set1	 2025-04-14     10:12:25	1
14	Rosangela Fagundes	Not Set1	 2025-04-14     10:58:00	1
21	brenda pierini	Not Set1	 2025-04-14     11:09:42	1
8	lurdes	Not Set1	 2025-04-14     11:39:46	1
22	nilo	Not Set1	 2025-04-14     11:50:07	1
9	manuella meireles	Not Set1	 2025-04-14     11:59:04	1
21	brenda pierini	Not Set1	 2025-04-14     12:06:50	1
20	carolina peixoto	Not Set1	 2025-04-14     12:12:00	1
22	nilo	Not Set1	 2025-04-14     12:54:31	1
20	carolina peixoto	Not Set1	 2025-04-14     13:06:26	1
21	brenda pierini	Not Set1	 2025-04-14     13:09:59	1
23	yaritza bueno	Not Set1	 2025-04-14     13:37:06	1
17	lays	Not Set1	 2025-04-14     14:26:58	1
22	nilo	Not Set1	 2025-04-14     16:10:25	1
20	carolina peixoto	Not Set1	 2025-04-14     16:29:18	1
23	yaritza bueno	Not Set1	 2025-04-14     16:33:54	1
10	mauricio	Not Set7	 2025-04-14     17:19:03	1
23	yaritza bueno	Not Set1	 2025-04-14     17:27:58	1
8	lurdes	Not Set1	 2025-04-14     17:28:11	1
8	lurdes	Not Set1	 2025-04-14     18:42:11	1
17	lays	Not Set1	 2025-04-14     20:16:29	1
8	lurdes	Not Set1	 2025-04-14     20:34:57	1
17	lays	Not Set1	 2025-04-14     21:14:05	1
23	yaritza bueno	Not Set1	 2025-04-14     22:09:25	1
17	lays	Not Set1	 2025-04-14     23:00:16	1
21	brenda pierini	Not Set1	 2025-04-15     05:54:37	1
14	Rosangela Fagundes	Not Set1	 2025-04-15     06:01:09	1
22	nilo	Not Set1	 2025-04-15     07:55:35	1
20	carolina peixoto	Not Set1	 2025-04-15     08:10:22	1
21	brenda pierini	Not Set1	 2025-04-15     08:18:17	1
21	brenda pierini	Not Set1	 2025-04-15     09:08:13	1
14	Rosangela Fagundes	Not Set1	 2025-04-15     10:02:08	1
20	carolina peixoto	Not Set1	 2025-04-15     10:37:28	1
14	Rosangela Fagundes	Not Set1	 2025-04-15     10:47:11	1
20	carolina peixoto	Not Set1	 2025-04-15     11:35:04	1
22	nilo	Not Set1	 2025-04-15     11:52:44	1
22	nilo	Not Set1	 2025-04-15     12:52:43	1
21	brenda pierini	Not Set1	 2025-04-15     13:05:04	1
8	lurdes	Not Set1	 2025-04-15     13:34:10	1
14	Rosangela Fagundes	Not Set1	 2025-04-15     14:24:06	1
23	yaritza bueno	Not Set1	 2025-04-15     14:33:04	1
23	yaritza bueno	Not Set1	 2025-04-15     16:03:46	1
22	nilo	Not Set1	 2025-04-15     16:08:03	1
23	yaritza bueno	Not Set1	 2025-04-15     17:04:42	1
20	carolina peixoto	Not Set1	 2025-04-15     17:16:36	1
8	lurdes	Not Set1	 2025-04-15     18:01:25	1
8	lurdes	Not Set1	 2025-04-15     18:58:59	1
8	lurdes	Not Set1	 2025-04-15     21:49:17	1
21	brenda pierini	Not Set1	 2025-04-16     04:54:50	1
14	Rosangela Fagundes	Not Set1	 2025-04-16     06:00:01	1
22	nilo	Not Set1	 2025-04-16     08:10:09	1
20	carolina peixoto	Not Set1	 2025-04-16     08:20:05	1
14	Rosangela Fagundes	Not Set1	 2025-04-16     10:27:01	1
10	mauricio	Not Set7	 2025-04-16     10:29:57	1
14	Rosangela Fagundes	Not Set1	 2025-04-16     11:04:51	1
21	brenda pierini	Not Set1	 2025-04-16     11:08:52	1
22	nilo	Not Set1	 2025-04-16     11:58:08	1
21	brenda pierini	Not Set1	 2025-04-16     12:21:34	1
8	lurdes	Not Set1	 2025-04-16     13:02:10	1
22	nilo	Not Set1	 2025-04-16     13:02:53	1
21	brenda pierini	Not Set1	 2025-04-16     13:05:03	1
14	Rosangela Fagundes	Not Set1	 2025-04-16     14:21:05	1
20	carolina peixoto	Not Set1	 2025-04-16     14:22:34	1
23	yaritza bueno	Not Set1	 2025-04-16     14:35:42	1
20	carolina peixoto	Not Set1	 2025-04-16     15:44:53	1
22	nilo	Not Set1	 2025-04-16     16:23:02	1
10	mauricio	Not Set7	 2025-04-16     16:48:11	1
8	lurdes	Not Set1	 2025-04-16     16:48:16	1
20	carolina peixoto	Not Set1	 2025-04-16     16:49:55	1
10	mauricio	Not Set7	 2025-04-16     17:15:32	1
8	lurdes	Not Set1	 2025-04-16     17:46:42	1
23	yaritza bueno	Not Set1	 2025-04-16     19:05:54	1
23	yaritza bueno	Not Set1	 2025-04-16     20:08:11	1
8	lurdes	Not Set1	 2025-04-16     21:06:42	1
10	mauricio	Not Set7	 2025-04-16     21:38:37	1
21	brenda pierini	Not Set1	 2025-04-17     04:51:21	1
14	Rosangela Fagundes	Not Set1	 2025-04-17     05:59:33	1
22	nilo	Not Set1	 2025-04-17     08:15:40	1
20	carolina peixoto	Not Set1	 2025-04-17     08:35:00	1
21	brenda pierini	Not Set1	 2025-04-17     09:06:27	1
21	brenda pierini	Not Set1	 2025-04-17     09:41:01	1
14	Rosangela Fagundes	Not Set1	 2025-04-17     10:05:36	1
10	mauricio	Not Set7	 2025-04-17     10:28:04	1
14	Rosangela Fagundes	Not Set1	 2025-04-17     11:03:12	1
20	carolina peixoto	Not Set1	 2025-04-17     11:06:55	1
22	nilo	Not Set1	 2025-04-17     11:57:22	1
20	carolina peixoto	Not Set1	 2025-04-17     12:08:47	1
22	nilo	Not Set1	 2025-04-17     12:59:01	1
8	lurdes	Not Set1	 2025-04-17     12:59:27	1
21	brenda pierini	Not Set1	 2025-04-17     13:07:22	1
14	Rosangela Fagundes	Not Set1	 2025-04-17     14:23:57	1
23	yaritza bueno	Not Set1	 2025-04-17     14:40:23	1
22	nilo	Not Set1	 2025-04-17     16:06:53	1
20	carolina peixoto	Not Set1	 2025-04-17     16:54:37	1
8	lurdes	Not Set1	 2025-04-17     18:33:40	1
23	yaritza bueno	Not Set1	 2025-04-17     18:48:50	1
23	yaritza bueno	Not Set1	 2025-04-17     19:41:28	1
8	lurdes	Not Set1	 2025-04-17     19:45:51	1
10	mauricio	Not Set7	 2025-04-17     20:07:38	1
8	lurdes	Not Set1	 2025-04-17     21:06:19	1
23	yaritza bueno	Not Set1	 2025-04-18     07:39:49	1
8	lurdes	Not Set1	 2025-04-18     08:26:15	1
23	yaritza bueno	Not Set1	 2025-04-18     14:00:26	1
8	lurdes	Not Set1	 2025-04-18     14:01:39	1
21	brenda pierini	Not Set1	 2025-04-19     07:35:09	1
10	mauricio	Not Set7	 2025-04-19     09:51:55	1
8	lurdes	Not Set1	 2025-04-19     11:04:28	1
21	brenda pierini	Not Set1	 2025-04-19     12:49:36	1
21	brenda pierini	Not Set1	 2025-04-19     13:50:48	1
10	mauricio	Not Set7	 2025-04-19     13:51:52	1
8	lurdes	Not Set1	 2025-04-19     13:52:30	1
10	mauricio	Not Set7	 2025-04-19     14:41:04	1
8	lurdes	Not Set1	 2025-04-19     14:53:27	1
8	lurdes	Not Set1	 2025-04-19     17:00:30	1
10	mauricio	Not Set7	 2025-04-19     17:02:42	1
10	mauricio	Not Set7	 2025-04-20     07:56:05	1
22	nilo	Not Set1	 2025-04-20     08:10:53	1
10	mauricio	Not Set7	 2025-04-20     13:49:33	1
22	nilo	Not Set1	 2025-04-20     13:50:23	1
9	manuella meireles	Not Set1	 2025-04-21     07:53:20	1
8	lurdes	Not Set1	 2025-04-21     08:21:39	1
8	lurdes	Not Set1	 2025-04-21     14:01:51	1
14	Rosangela Fagundes	Not Set1	 2025-04-22     05:59:50	1
22	nilo	Not Set1	 2025-04-22     08:18:11	1
20	carolina peixoto	Not Set1	 2025-04-22     08:25:39	1
14	Rosangela Fagundes	Not Set1	 2025-04-22     10:00:17	1
22	nilo	Not Set1	 2025-04-22     12:00:32	1
8	lurdes	Not Set1	 2025-04-22     13:01:13	1
22	nilo	Not Set1	 2025-04-22     13:06:19	1
10	mauricio	Not Set7	 2025-04-22     13:17:29	1
23	yaritza bueno	Not Set1	 2025-04-22     13:38:51	1
17	lays	Not Set1	 2025-04-22     14:10:37	1
14	Rosangela Fagundes	Not Set1	 2025-04-22     14:19:25	1
20	carolina peixoto	Not Set1	 2025-04-22     15:15:02	1
22	nilo	Not Set1	 2025-04-22     16:04:12	1
20	carolina peixoto	Not Set1	 2025-04-22     16:23:19	1
8	lurdes	Not Set1	 2025-04-22     16:25:44	1
20	carolina peixoto	Not Set1	 2025-04-22     16:30:07	1
17	lays	Not Set1	 2025-04-22     16:30:10	1
8	lurdes	Not Set1	 2025-04-22     17:26:17	1
17	lays	Not Set1	 2025-04-22     17:32:21	1
23	yaritza bueno	Not Set1	 2025-04-22     20:07:10	1
10	mauricio	Not Set7	 2025-04-22     20:24:11	1
8	lurdes	Not Set1	 2025-04-22     20:57:37	1
9	manuella meireles	Not Set1	 2025-04-22     20:59:29	1
23	yaritza bueno	Not Set1	 2025-04-22     21:06:37	1
23	yaritza bueno	Not Set1	 2025-04-22     22:11:37	1
17	lays	Not Set1	 2025-04-22     22:59:44	1
21	brenda pierini	Not Set1	 2025-04-23     04:48:31	1
14	Rosangela Fagundes	Not Set1	 2025-04-23     05:58:55	1
22	nilo	Not Set1	 2025-04-23     08:03:29	1
14	Rosangela Fagundes	Not Set1	 2025-04-23     10:03:28	1
10	mauricio	Not Set7	 2025-04-23     10:59:40	1
14	Rosangela Fagundes	Not Set1	 2025-04-23     11:00:02	1
21	brenda pierini	Not Set1	 2025-04-23     11:04:10	1
22	nilo	Not Set1	 2025-04-23     11:55:01	1
21	brenda pierini	Not Set1	 2025-04-23     12:02:50	1
8	lurdes	Not Set1	 2025-04-23     12:58:54	1
22	nilo	Not Set1	 2025-04-23     13:01:26	1
21	brenda pierini	Not Set1	 2025-04-23     13:10:37	1
23	yaritza bueno	Not Set1	 2025-04-23     13:36:58	1
14	Rosangela Fagundes	Not Set1	 2025-04-23     14:18:52	1
17	lays	Not Set1	 2025-04-23     14:38:55	1
22	nilo	Not Set1	 2025-04-23     16:04:56	1
17	lays	Not Set1	 2025-04-23     16:40:14	1
8	lurdes	Not Set1	 2025-04-23     17:28:07	1
17	lays	Not Set1	 2025-04-23     17:40:07	1
8	lurdes	Not Set1	 2025-04-23     18:31:38	1
10	mauricio	Not Set7	 2025-04-23     18:55:40	1
23	yaritza bueno	Not Set1	 2025-04-23     20:08:15	1
8	lurdes	Not Set1	 2025-04-23     21:00:05	1
23	yaritza bueno	Not Set1	 2025-04-23     21:08:43	1
23	yaritza bueno	Not Set1	 2025-04-23     22:00:59	1
17	lays	Not Set1	 2025-04-23     23:00:43	1
21	brenda pierini	Not Set1	 2025-04-24     04:55:52	1
14	Rosangela Fagundes	Not Set1	 2025-04-24     06:00:28	1
22	nilo	Not Set1	 2025-04-24     08:28:09	1
14	Rosangela Fagundes	Not Set1	 2025-04-24     10:04:32	1
14	Rosangela Fagundes	Not Set1	 2025-04-24     10:40:25	1
22	nilo	Not Set1	 2025-04-24     11:39:40	1
22	nilo	Not Set1	 2025-04-24     12:40:29	1
21	brenda pierini	Not Set1	 2025-04-24     12:43:29	1
8	lurdes	Not Set1	 2025-04-24     12:50:05	1
10	mauricio	Not Set7	 2025-04-24     12:54:22	1
23	yaritza bueno	Not Set1	 2025-04-24     13:43:04	1
14	Rosangela Fagundes	Not Set1	 2025-04-24     14:16:23	1
17	lays	Not Set1	 2025-04-24     14:41:19	1
22	nilo	Not Set1	 2025-04-24     16:00:05	1
17	lays	Not Set1	 2025-04-24     16:36:22	1
8	lurdes	Not Set1	 2025-04-24     17:31:51	1
17	lays	Not Set1	 2025-04-24     17:36:06	1
8	lurdes	Not Set1	 2025-04-24     18:19:29	1
23	yaritza bueno	Not Set1	 2025-04-24     20:34:59	1
10	mauricio	Not Set7	 2025-04-24     20:54:50	1
8	lurdes	Not Set1	 2025-04-24     20:56:16	1
23	yaritza bueno	Not Set1	 2025-04-24     21:42:36	1
23	yaritza bueno	Not Set1	 2025-04-24     22:03:09	1
17	lays	Not Set1	 2025-04-24     22:57:41	1
21	brenda pierini	Not Set1	 2025-04-25     04:54:31	1
14	Rosangela Fagundes	Not Set1	 2025-04-25     05:59:40	1
22	nilo	Not Set1	 2025-04-25     08:27:51	1
14	Rosangela Fagundes	Not Set1	 2025-04-25     10:12:55	1
10	mauricio	Not Set7	 2025-04-25     10:23:46	1
14	Rosangela Fagundes	Not Set1	 2025-04-25     10:35:26	1
21	brenda pierini	Not Set1	 2025-04-25     11:28:01	1
22	nilo	Not Set1	 2025-04-25     11:40:42	1
22	nilo	Not Set1	 2025-04-25     12:41:54	1
8	lurdes	Not Set1	 2025-04-25     12:59:39	1
21	brenda pierini	Not Set1	 2025-04-25     13:07:35	1
23	yaritza bueno	Not Set1	 2025-04-25     13:40:54	1
14	Rosangela Fagundes	Not Set1	 2025-04-25     14:00:23	1
17	lays	Not Set1	 2025-04-25     14:12:52	1
17	lays	Not Set1	 2025-04-25     14:32:02	1
22	nilo	Not Set1	 2025-04-25     16:00:24	1
17	lays	Not Set1	 2025-04-25     16:31:56	1
17	lays	Not Set1	 2025-04-25     17:31:06	1
8	lurdes	Not Set1	 2025-04-25     17:43:14	1


`;
	};
	// let confirm = 5;
	if (confirm) {
		if (confirm == 1) {
			listasText.value = janeiro();
		}
		if (confirm == 2) {
			listasText.value = UltrasMy();
		}
		if (confirm == 3) {
			listasText.value = UltrasMys();
		}
		if (confirm == 4) {
			listasText.value = pontosUltraMarco();
		}
		if (confirm == 5) {
			listasText.value = abril();
		}
	}
}

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


// function calculoFuncionario() {
// 	let textarea = document.getElementById("listasText").value.trim();
// 	let linhas = textarea.split("\n");
// funcionarios = {};
// registrosDeFuncionarios = [];
// let registrosDeHoras = [];
// let minutosTotaisDoMes = 0;
// 	linhas.forEach(linha => {
// 		let partes = linha.split("\t");
// 		if (partes.length < 5) return;

// 		let id = parseInt(partes[0].trim());
// 		let nome = partes[1].trim();
// 		let setor = partes[2].trim();
// 		let dataMatch = partes[3].match(/\d{4}-\d{2}-\d{2}/);
// 		let horaMatch = partes[3].match(/\d{2}:\d{2}:\d{2}/);
// 		let data = dataMatch ? dataMatch[0] : null;
// 		let hora = horaMatch ? horaMatch[0] : null;
// 		let maquina = parseInt(partes[4].trim());

// 		if (!funcionarios[id]) {
// 			funcionarios[id] = {
// 				id,
// 				nome,
// 				setor,
// 				dias: [],
// 				maquina
// 			};
// 			registrosDeFuncionarios.push(funcionarios[id]);
// 		}

// 		if (data && hora) {
// 			// Verifica se essa data já está registrada
// 			let diaExistente = funcionarios[id].dias.find(d => d.data === data);
			
// 			if (diaExistente) {
// 				// Adiciona o horário se ainda não estiver registrado
// 				if (!diaExistente.horarios.includes(hora)) {
// 					diaExistente.horarios.push(hora);
// 				}
// 			} else {
// 				// Cria novo registro de dia com o horário
// 				funcionarios[id].dias.push({ data, horarios: [hora] });
// 			}
// 		}
// 	});
// const funci = registrosDeFuncionarios.map(fu => fu.id + " - " + fu.nome);
 
// const conf = prompt(`id \n ${funci.join("\n")}`,10);
// // if (conf) {
// // const regi =	registrosDeFuncionarios.filter(i => i.id == conf);
// // 		// console.log(regi,"regi");
// // 	registrosDeFuncionarios.forEach((item, index) => {
// // 		if (item.id == conf) {
// // 		const hours = item.dias;
// // 	hours.forEach((i, index) => {
		
// // 		console.log(i.horarios,"horarios",i,"i");
// // 	});
// // 	//	console.log(item,"item.id");
// // 	//	console.log(item.dias,"item.dias");
			
// // 		}
// // 	});
// // }
// const corpo = document.querySelector(".corpo");
// corpo.innerHTML = ``;
// const ul = document.createElement("ul");
// const h4 = document.createElement("h4");
// h4.innerHTML = `REGISTRO DE FUNCIONÁRIO:`;
// function functionName() {
// registrosDeFuncionarios.forEach((item, index) => {
	

// 	// Obtem o mês e ano atual
// const agora = new Date();
// const mesAtual = agora.getMonth();
// const anoAtual = agora.getFullYear();

// let minutosTotaisDoMes = 0;

// item.dias.forEach(dia => {
// 	// const [ano, mes, diaNum] = dia.data.split("-").map(Number);
// 	// if (ano === anoAtual && mes - 1 === mesAtual) {
// 	// 	if (dia.horarios.length >= 2) {
// 	// 		let entrada = dia.horarios[0];
// 	// 		let saida = dia.horarios[dia.horarios.length - 1];
// 	// 		let intervalo = 0;

// 	// 		if (dia.horarios.length === 4) {
// 	// 			const inicioIntervalo = dia.horarios[1];
// 	// 			const fimIntervalo = dia.horarios[2];
// 	// 			let intervaloMinutos = diferencaEmMinutos(inicioIntervalo, fimIntervalo);
// 	// 			if (intervaloMinutos > 60) {
// 	// 				intervalo = 60; // só subtrai 60 minutos de intervalo
// 	// 				minutosTotaisDoMes += (diferencaEmMinutos(entrada, saida) - 60) + (intervaloMinutos - 60);
// 	// 			} else {
// 	// 				intervalo = intervaloMinutos;
// 	// 				minutosTotaisDoMes += diferencaEmMinutos(entrada, saida) - intervaloMinutos;
// 	// 			}
// 	// 		} else {
// 	// 			minutosTotaisDoMes += diferencaEmMinutos(entrada, saida);
// 	// 		}
// 	// 	}
// 	// }
// 		if (dia.horarios.length >= 2) {
// 			let entrada = dia.horarios[0];
// 			let saida = dia.horarios[dia.horarios.length - 1];
// 			let intervalo = 0;

// 			if (dia.horarios.length === 4) {
// 				const inicioIntervalo = dia.horarios[1];
// 				const fimIntervalo = dia.horarios[2];
// 				let intervaloMinutos = diferencaEmMinutos(inicioIntervalo, fimIntervalo);
// 				if (intervaloMinutos > 60) {
// 					intervalo = 60; // só subtrai 60 minutos de intervalo
// 					minutosTotaisDoMes += (diferencaEmMinutos(entrada, saida) - 60) + (intervaloMinutos - 60);
// 				} else {
// 					intervalo = intervaloMinutos;
// 					minutosTotaisDoMes += diferencaEmMinutos(entrada, saida) - intervaloMinutos;
// 				}
// 			} else {
// 				minutosTotaisDoMes += diferencaEmMinutos(entrada, saida);
// 			}
// 		}
// 		console.log("minutosTotaisDoMes",formatarHoras(minutosTotaisDoMes));
// });

// //h4.innerHTML = `REGISTRO DE FUNCIONÁRIO: ${item.nome} <br>Total mês atual: ${formatarHoras(minutosTotaisDoMes)}`;


// });
// }

// if (conf) {
// 	registrosDeFuncionarios.forEach((item, index) => {
// 		if (item.id == conf) {
// 		const hours = item.dias;
// 	h4.innerHTML = `REGISTRO DE FUNCIONÁRIO: ${item.nome}`;
// 		corpo.appendChild(h4);
// 	hours.forEach((i, index) => {
// 		let Trabalhados = diferencaEmMinutos(i.horarios[0], i.horarios[i.horarios.length - 1]);
// 		// console.log(i.horarios[0]);
// 		const hour = i.horarios;
// 			// registrosDeHoras.push(i.horarios[0], i.horarios[i.horarios.length - 1]);
// 			registrosDeHoras.push(formatarHoras(Trabalhados.toFixed(2).split(".")[0]));
// 	const uls = document.createElement("ul");
// 	const li = document.createElement("li");

// 	let totalMinutosTrabalhados = diferencaEmMinutos(i.horarios[0], i.horarios[i.horarios.length - 1]);
// 	 let totalMinutosIntervalo = diferencaEmMinutos(i.horarios[1], i.horarios[i.horarios.length - 2]);
	 
// 	let ara;
// 		if (i.horarios.length == 4) {
// 	let MinutosTrabalhados = diferencaEmMinutos(i.horarios[0], i.horarios[i.horarios.length - 1]);
// 	let MinutosIntervalo = diferencaEmMinutos(i.horarios[1], i.horarios[i.horarios.length - 2]);

// if (MinutosIntervalo > 60) {
// 	const MinutosIntervaloExtra = (MinutosIntervalo - 60);
// 	ara = MinutosTrabalhados - MinutosIntervalo + MinutosIntervaloExtra;
// } if (MinutosIntervalo <= 60) {
// 	ara = MinutosTrabalhados - MinutosIntervalo;
// }
// 	}
	
// 		if (i.horarios.length < 4) {
	
// 	let MinutosTrabalhados = diferencaEmMinutos(i.horarios[0], i.horarios[i.horarios.length - 1]);
// 	ara = MinutosTrabalhados;
// 		}

// 	if (i.horarios.length == 2) {
// 		let MinutosTrabalhados = diferencaEmMinutos(i.horarios[0], i.horarios[i.horarios.length - 1]);
// 		totalMinutosIntervalo = 0;
// 	}

// 	// console.log(formatarHoras(registrosDeHoras));
// 	console.log(registrosDeHoras,"registrosDeHoras");
// 	// console.log(hour.map(d => d.substring(0,5))[0]);
// const viewDoms = ()=>{
// 	return `
// 	Dia: ${i.data.split("-").reverse().join("/")}
// 	<br>
// 	${i.horarios.join("<br>")} 
// 	<br>
	
// <!--
// 	${"Horas: " + i.horarios[index]} 
// 	<br>
// 	<br>
// 	horarios
// 	${hour.map(d => d.substring(0,5)).join("<br>")}
// 	<br>
// 	-->
// 	Horas Trabalhadas: ${formatarHoras(ara.toFixed(2).split(".")[0])}
// 	<br>
// 	Horas Intervalo: ${formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0])}
// 	<!-- 
// 	<br>
// 	Horas Intervalo: ${formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0])}
// 	<br>
// 	Horas Intervalo: ${formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0]) < 0 ? "sem intervalo" : formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0])}
// 	-->
// 	`;
// };
// const viewDom = ()=>{
// 	return `
// 	Dia: ${i.data.split("-").reverse().join("/")}
// 	<br>
// 	${i.horarios.join("<br>")} 
// 	<br>
	
// 	Horas Trabalhadas: ${formatarHoras(ara.toFixed(2).split(".")[0])}
// 	<br>
// 	Horas Intervalo: ${totalMinutosIntervalo <= 0 ? "sem Intervalo": formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0])}
// 	<!--
// 	<br>
// 	Horas Intervalo: ${formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0])}
// 	-->
// 	`;
// };
// 	li.innerHTML = viewDom();

// 	uls.appendChild(li);
// 		corpo.appendChild(uls);
// 	// console.log(formatarHoras(totalMinutosIntervalo.toFixed(2).split(".")[0]));
// 	});
// 		}
// 	});
// }

// 	 functionName();
// }

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

const hm = document.querySelector("#hm");
const hora1 = document.querySelector("#hora1");
const hora2 = document.querySelector("#hora2"); 
const hora3 = document.querySelector("#hora3");
const hora4 = document.querySelector("#hora4");
const lb = document.querySelector("#lb");
const lab = document.querySelector("#lab");
hm.addEventListener("click",  () => {
const horatext = document.querySelector("#horatext").value.trim();
const ht = horatext.split("\n");
ht.forEach((item, index) => {
	
const t =	calculoEmMinutos(ht[0], ht[ht.length-1]);
const interv =	calculoEmMinutos(ht[1], ht[ht.length-2]);
// console.log(formatarHoras(t.toFixed(2).split(".")[0]),"t");
// console.log(formatarHoras(interv.toFixed(2).split(".")[0]),"interv");
});
const traba =	calculoEmMinutos(ht[0], ht[ht.length-1]);
const int =	calculoEmMinutos(ht[1], ht[ht.length-2]);

const trab =	calculoEmMinutos(hora1.value, hora2.value);
const inter =	calculoEmMinutos(hora3.value, hora4.value);
lb.innerHTML = ``;
lab.innerHTML = ``;
lab.innerHTML = ` 
Total:
<br>
${formatarHoras((traba).toFixed(2).split(".")[0])}
<br>
Intervalo:
<br>
${formatarHoras((int).toFixed(2).split(".")[0])}

<br>
Trabalhadas:
<br>
${formatarHoras((traba-int).toFixed(2).split(".")[0])}
<br>
Trabalhada:
<br>
${formatarHoras((traba-int))}
<br>
${formatarHoras((traba-int).toFixed(2))}

<br>
Intervalos:
<br>
${formatarHoras((int))}
<br>
${formatarHoras((int).toFixed(2))}
<br>
${formatarHoras((int).toFixed(2).split(".")[0])}
<br>
`;

if (hora1.value !== "" && hora2.value !== "" && hora3.value !== "" && hora4.value !== "") {
	
lb.innerHTML = `
<br>
${formatarHoras((trab - inter).toFixed(2).split(".")[0])}`;
} else {
lb.innerHTML = `
<br>
${formatarHoras((trab).toFixed(2).split(".")[0])}`;
	
}

});
function calculoEmMinutos(horaInicio, horaFim) {
	const [h1, m1, s1] = horaInicio.split(":").map(Number);
	const [h2, m2, s2] = horaFim.split(":").map(Number);

	const totalInicio = h1 * 60 + m1 + s1 / 60;
	const totalFim = h2 * 60 + m2 + s2 / 60;
// console.log(formatarHoras(Math.round((totalFim - totalInicio) * 100) / 100),"Math.round");
	return Math.round((totalFim - totalInicio) * 100) / 100; 
	// arredonda para 2 casas decimais
}


function formatarHoras(totalMinutos) {
	let horas = Math.floor(totalMinutos / 60);
	let minutos = totalMinutos % 60;
	let tot = `${horas.toString().padStart(2, "0").split(".")}:${minutos.toString().padStart(2, "0")}`;
	// console.log(tot,"tot");
	
	return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
}


// function calculoFuncionarios() {
// 	let textarea = document.getElementById("listasText").value.trim();
// 	let linhas = textarea.split("\n");
// // registrosDeFuncionarios = [];
// 	linhas.forEach(linha => {
// 		let partes = linha.split("\t");
// 		if (partes.length < 5) return;

// 		let id = parseInt(partes[0].trim());
// 		let nome = partes[1].trim();
// 		let setor = partes[2].trim();
// 		let dataMatch = partes[3].match(/\d{4}-\d{2}-\d{2}/);
// 		let horaMatch = partes[3].match(/\d{2}:\d{2}:\d{2}/);
// 		let data = dataMatch ? dataMatch[0] : null;
// 		let hora = horaMatch ? horaMatch[0] : null;
// 		let maquina = parseInt(partes[4].trim());
		
// 		if (!funcionarios[id]) {
// 			 funcionarios[id] = { id, nome, setor, datas:[], horas:[], registros:[],
// 			 dias:[],
// 			 maquina };
		
// 		registrosDeFuncionarios.push(funcionarios[id]);
// 		}
// 		if (data) {
// 			funcionarios[id].dias.push({ data:data});
// 		}
			
		
// 		// if (data && hora) {
// 		// 	// funcionarios[id] = { id, nome, setor, registros: [] };
// 		// 	 //funcionarios[id] = [ id, nome, setor, data, hora, maquina ];
// 		// 	 //funcionarios[id] = [{ id: id, nome: nome, setor: setor, data:{ data}, hora: {hora}, maquina: maquina }];
// 		// funcionarios[id].data.push({ data });
// 		// funcionarios[id].hora.push({ hora });
// 		// registrosDeFuncionarios.push(funcionarios[id]);
// 		// }
			 

// 		if (data && hora) {
// 			 // funcionarios[id].registros.push({ data, hora, maquina });
// 			 //funcionarios[id].datas.push({ data});
// 			 //funcionarios[id].horas.push({ hora});
			 
// 			// registrosDeFuncionarios.push(funcionarios[id]);
// 		}
// 	});
// 	console.log(Object.values(funcionarios[10].dias),"values");
// 			console.log(Object.keys(funcionarios[10].dias),"keys");
// }

// function calculoFuncionario() {
// 	let textarea = document.getElementById("listasText").value.trim();
// 	let linhas = textarea.split("\n");
// // registrosDeFuncionarios = [];
// 	linhas.forEach(linha => {
// 		let partes = linha.split("\t");
// 		if (partes.length < 5) return;

// 		let id = parseInt(partes[0].trim());
// 		let nome = partes[1].trim();
// 		let setor = partes[2].trim();
// 		let dataMatch = partes[3].match(/\d{4}-\d{2}-\d{2}/);
// 		let horaMatch = partes[3].match(/\d{2}:\d{2}:\d{2}/);
// 		let data = dataMatch ? dataMatch[0] : null;
// 		let hora = horaMatch ? horaMatch[0] : null;
// 		let maquina = parseInt(partes[4].trim());
// 		// if (!funcionarios[id]) {
// 		// 	// funcionarios[id] = { id, nome, setor, registros: [] };
// 		// 	 funcionarios[id] = [ id, nome, setor, data, hora, maquina ];
// 		// 	 console.log(funcionarios[id]);
// 		// 	// funcionarios[id] = [{ id: id, nome: nome, setor: setor, data: data, hora: hora, maquina: maquina }];
// 		// }
// 		// if (!funcionarios[id]) {
// 		// 	// funcionarios[id] = { id, nome, setor, registros: [] };
// 		// 	 //funcionarios[id] = [ id, nome, setor, data, hora, maquina ];
// 		// 	 funcionarios[id] = [{ id: id, nome: nome, setor: setor, data: data, hora: hora, maquina: maquina }];
// 		// registrosDeFuncionarios.push(funcionarios[id]);
// 		// }
// 		if (!funcionarios[id]) {
// 			// funcionarios[id] = { id, nome, setor, registros: [] };
// 			 funcionarios[id] =  { id, nome, setor, datas:[], horas:[], registros:[],
// 			 registro:[],
// 			 maquina };
		
// 			 //funcionarios[id] = [{ id: id, nomes: nome, setor: setor, datas:[ {data}], horas: [{hora}], maquina: maquina }];
// 		registrosDeFuncionarios.push(funcionarios[id]);
// 		}
// 		if (funcionarios[id]) {
// 		diasTrabalhados.push(data);

// 		funcionarios[id].datas.push(data);
// 		funcionarios[id].horas.push(hora);
// 		if (funcionarios[id].datas) {
			
// 		}
// 		funcionarios[id].registros.push({data,hora});
// 		funcionarios[id].registro.push(data,hora);
// 		const func = funcionarios[id].datas;
		
// 	let diasUnicos = [...new Set(func.map(dat => dat.slice(0, 10)))];

// 		// if (data == data) {
// 		// 	// console.log(funcionarios[id].datas, "datas");
// 		// funcionarios[id].registros.push({data,hora});
// 		// } 
// 		if (diasUnicos == data) {
// 			// console.log(funcionarios[id].datas, "datas");
// 		// funcionarios[id].registros.push({data,hora});
// 		} 
// 		else {
// 		// funcionarios[id].registros.push({data,hora});
// 		}
// 		// registrosDeFuncionarios.push(funcionarios[id]);
// 		}
//   funcionarios[id].registros.forEach((item, index) => {
//   	// console.log("itemdata",Object.entries(item.data));
// //    	console.log("item",Object.entries(item));
//   });
//   //console.log(funcionarios[id].registro);
//   funcionarios[id].registro.forEach((item, index) => {
//     	const cpfsExtraidos = item.match(/\d{4}-\d{2}-\d{2}/g);
//     	const cpfsExtraido = item.split(/\d{2}:\d{2}:\d{2}/g);
//   // 	const cpfsExtraidos = label.match(regexCPFs) || [];
// // 	const cpfsFormatados = cpfsExtraidos.map(cpf => cpf.replace(/\D/g, ""));
// // 	const cpfsValidos = cpfsFormatados.filter(validarCPF);
// //    	console.log("itemdata",item.match(/\d{4}-\d{2}-\d{2}/));
//   	if (cpfsExtraidos != [] && cpfsExtraidos != null) {
//   		ar.push(cpfsExtraidos);
//   	}
//   	// console.log("items",cpfsExtraido);
//   });
// 		// if (data && hora) {
// 		// 	// funcionarios[id] = { id, nome, setor, registros: [] };
// 		// 	 //funcionarios[id] = [ id, nome, setor, data, hora, maquina ];
// 		// 	 //funcionarios[id] = [{ id: id, nome: nome, setor: setor, data:{ data}, hora: {hora}, maquina: maquina }];
// 		// funcionarios[id].data.push({ data });
// 		// funcionarios[id].hora.push({ hora });
// 		// registrosDeFuncionarios.push(funcionarios[id]);
// 		// }
			 

// 		if (data && hora) {
// 			 // funcionarios[id].registros.push({ data, hora, maquina });
// 			 //funcionarios[id].datas.push({ data});
// 			 //funcionarios[id].horas.push({ hora});
			 
// 			// registrosDeFuncionarios.push(funcionarios[id]);
// 		}
// 	});
// 	const funcReg = funcionarios[10].registros;
// 	const ol = funcionarios.registros;
// 	// console.log(ol.filter(cpf => funcRegis[cpf] > 2));
// 	let oi = [];
// funcReg.forEach((item, index) => {
// 	let funcRegi = item.data;
// 	oi.push(funcRegi);
// });
// let funcRegis =	oi.reduce((acc, cpf) => {
// 		acc[cpf] = (acc[cpf] || 0) + 1;
// 		return acc;
// 	}, {});
// const cpfsRepetidos = Object.keys(funcRegis).filter(cpf => funcRegis[cpf] > 2);
	 
// // 	console.log(funcReg[0].data);
// // 	console.log(funcReg[0].hora);
// 	//  console.log("funcionarios",funcionarios);
// // 	 console.log("registrosDeFuncionarios",registrosDeFuncionarios);
// 	 //console.log("todos",registrosDeFuncionarios,diasTrabalhados,horasTrabalhadas,horasIntervalos,funcionarios);
// 	 		const lin = diasTrabalhados.some(i => {
// 		return i;
// 		});
// 		if (lin) {
// 		}
// 	 console.log("lin",lin);
// 	 console.log("funcionarios",funcionarios);
// 	 console.log("diasTrabalhados",diasTrabalhados);
// }

const btn_limpar = document.querySelector("#btn_limpar");
function lim() {
	console.log("Var");
	console.log("todos",registrosDeFuncionarios,diasTrabalhados,horasTrabalhadas,horasIntervalos,funcionarios);
}

btn_limpar.addEventListener("click",  () => {
	
});
document.addEventListener("DOMContentLoaded", () => {
	const dataHoje = new Date();
	const diaSemana = diaDaSemana[new Date(dataHoje).getDay()];

	console.log(diaSemana);
});

const btn_ajust = document.querySelector("#btn_ajust");

function functioncreatePet() {
	const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver

}

function functionPerson() {
	function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const p = new Person();

}

hm.addEventListener("click",  () => {

	
});
