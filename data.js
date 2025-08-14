// Dados do jogo - Perguntas organizadas por nível
const GAME_DATA = {
  levels: {
    1: [
      {
        pergunta: "Quem criou o céu e a terra?",
        opcoes: ["Jesus", "Moisés", "Deus", "Adão"],
        correta: 2,
        explicacao: "Gênesis 1:1 - No princípio, Deus criou os céus e a terra."
      },
      {
        pergunta: "Qual o primeiro homem criado por Deus?",
        opcoes: ["Abraão", "Noé", "Adão", "Jacó"],
        correta: 2,
        explicacao: "Gênesis 2:7 - Então o Senhor Deus formou o homem do pó da terra."
      },
      {
        pergunta: "Qual o nome da esposa de Adão?",
        opcoes: ["Maria", "Eva", "Sara", "Rute"],
        correta: 1,
        explicacao: "Gênesis 2:22 - Da costela que havia tirado do homem, o Senhor Deus fez uma mulher e a levou até ele."
      },
      {
        pergunta: "Quem construiu a arca?",
        opcoes: ["Abraão", "Moisés", "Noé", "Davi"],
        correta: 2,
        explicacao: "Gênesis 6:14 - Faça para você uma arca de madeira de cipreste."
      },
      {
        pergunta: "Quem foi engolido por um grande peixe?",
        opcoes: ["Pedro", "Jonas", "Paulo", "Tiago"],
        correta: 1,
        explicacao: "Jonas 1:17 - O Senhor providenciou um grande peixe para engolir Jonas."
      },
      {
        pergunta: "Quem abriu o Mar Vermelho?",
        opcoes: ["Josué", "Jesus", "Moisés", "Elias"],
        correta: 2,
        explicacao: "Êxodo 14:21 - Moisés estendeu a mão sobre o mar, e o Senhor afastou o mar."
      },
      {
        pergunta: "Quem era a mãe de Jesus?",
        opcoes: ["Maria Madalena", "Marta", "Maria", "Ana"],
        correta: 2,
        explicacao: "Lucas 1:30-31 - O anjo lhe disse: 'Não tenha medo, Maria; você foi agraciada por Deus!'"
      },
      {
        pergunta: "Quem batizou Jesus?",
        opcoes: ["Pedro", "João Batista", "Tiago", "Moisés"],
        correta: 1,
        explicacao: "Mateus 3:13-17 - Então Jesus veio da Galileia ao Jordão para ser batizado por João."
      },
      {
        pergunta: "Onde Jesus nasceu?",
        opcoes: ["Jerusalém", "Nazaré", "Belém", "Galileia"],
        correta: 2,
        explicacao: "Mateus 2:1 - Jesus nasceu em Belém da Judeia, nos dias do rei Herodes."
      },
      {
        pergunta: "Quem era o pai terreno de Jesus?",
        opcoes: ["José", "João", "Tiago", "Zacarias"],
        correta: 0,
        explicacao: "Mateus 1:16 - Jacó gerou José, marido de Maria, da qual nasceu Jesus, que é chamado Cristo."
      },
      {
        pergunta: "Quantos discípulos Jesus teve?",
        opcoes: ["10", "12", "14", "7"],
        correta: 1,
        explicacao: "Mateus 10:1-4 - Jesus chamou seus doze discípulos e deu-lhes autoridade."
      },
      {
        pergunta: "Qual o último livro da Bíblia?",
        opcoes: ["Apocalipse", "Judas", "Romanos", "Atos"],
        correta: 0,
        explicacao: "Apocalipse é o último livro da Bíblia, escrito por João."
      },
      {
        pergunta: "Quem derrotou o gigante Golias?",
        opcoes: ["Saul", "Davi", "Samuel", "Salomão"],
        correta: 1,
        explicacao: "1 Samuel 17:50 - Assim Davi prevaleceu sobre o filisteu com uma funda e uma pedra."
      },
      {
        pergunta: "Qual mandamento diz para honrar os pais?",
        opcoes: ["4º", "5º", "6º", "7º"],
        correta: 1,
        explicacao: "Êxodo 20:12 - Honra teu pai e tua mãe, para que se prolonguem os teus dias na terra."
      },
      {
        pergunta: "Qual era a profissão de Pedro?",
        opcoes: ["Ferreiro", "Carpinteiro", "Pescador", "Pastor"],
        correta: 2,
        explicacao: "Mateus 4:18 - Jesus viu dois irmãos: Simão, chamado Pedro, e André, que lançavam as redes ao mar, pois eram pescadores."
      },
      {
        pergunta: "Quem foi o primeiro mártir cristão?",
        opcoes: ["Pedro", "Tiago", "Estêvão", "Paulo"],
        correta: 2,
        explicacao: "Atos 7:59-60 - E apedrejavam Estêvão, que orava e dizia: Senhor Jesus, recebe o meu espírito."
      },
      {
        pergunta: "Quem foi lançado na cova dos leões?",
        opcoes: ["Daniel", "Elias", "José", "Ezequiel"],
        correta: 0,
        explicacao: "Daniel 6:16 - Então o rei ordenou que trouxessem Daniel e o lançassem na cova dos leões."
      },
      {
        pergunta: "Qual o nome do irmão de Moisés?",
        opcoes: ["Josué", "Arão", "Davi", "Elias"],
        correta: 1,
        explicacao: "Êxodo 4:14 - Acaso não há Arão, teu irmão, o levita? Eu sei que ele fala bem."
      },
      {
        pergunta: "Quem foi alimentado por corvos?",
        opcoes: ["Elias", "Eliseu", "Jeremias", "Daniel"],
        correta: 0,
        explicacao: "1 Reis 17:6 - E os corvos lhe traziam pão e carne pela manhã, e pão e carne à noite."
      },
      {
        pergunta: "Quantos dias e noites choveu durante o dilúvio?",
        opcoes: ["30", "40", "50", "60"],
        correta: 1,
        explicacao: "Gênesis 7:12 - E houve chuva sobre a terra quarenta dias e quarenta noites."
      }
    ],
    2: [
      {
        pergunta: "Quem foi o homem mais sábio da Bíblia?",
        opcoes: ["Davi", "Salomão", "Moisés", "Abraão"],
        correta: 1,
        explicacao: "1 Reis 3:12 - Darei a você um coração sábio e discernimento."
      },
      {
        pergunta: "Quem liderou Israel após Moisés?",
        opcoes: ["Josué", "Arão", "Samuel", "Elias"],
        correta: 0,
        explicacao: "Josué 1:1-2 - Depois da morte de Moisés, o Senhor disse a Josué: 'Meu servo Moisés está morto.'"
      },
      {
        pergunta: "Quem matou mil homens com uma queixada de jumento?",
        opcoes: ["Sansão", "Gideão", "Jefté", "Davi"],
        correta: 0,
        explicacao: "Juízes 15:15 - Encontrando uma queixada de jumento, Sansão pegou-a e matou mil homens."
      },
      {
        pergunta: "Quem escreveu o livro do Apocalipse?",
        opcoes: ["Pedro", "João", "Paulo", "Tiago"],
        correta: 1,
        explicacao: "Apocalipse 1:1 - Revelação de Jesus Cristo, que Deus lhe deu para mostrar aos seus servos."
      },
      {
        pergunta: "Quem reconstruiu os muros de Jerusalém?",
        opcoes: ["Esdras", "Neemias", "Zorobabel", "Josué"],
        correta: 1,
        explicacao: "Neemias 2:17 - Venham, reconstruamos o muro de Jerusalém."
      },
      {
        pergunta: "Qual livro fala da mulher virtuosa?",
        opcoes: ["Provérbios", "Ester", "Rute", "Cantares"],
        correta: 0,
        explicacao: "Provérbios 31:10 - Mulher virtuosa, quem a achará? O seu valor muito excede o de rubis."
      },
      {
        pergunta: "Quem viu uma sarça ardente que não se consumia?",
        opcoes: ["Elias", "Moisés", "Josué", "Isaque"],
        correta: 1,
        explicacao: "Êxodo 3:2 - O anjo do Senhor apareceu a ele numa chama de fogo que saía do meio de uma sarça."
      },
      {
        pergunta: "Quem foi chamado de amigo de Deus?",
        opcoes: ["Moisés", "Davi", "Abraão", "Samuel"],
        correta: 2,
        explicacao: "Tiago 2:23 - Abraão creu em Deus, e isso lhe foi creditado como justiça, e ele foi chamado amigo de Deus."
      },
      {
        pergunta: "Quem foi escolhido para substituir Judas Iscariotes?",
        opcoes: ["Barnabé", "Matias", "Silas", "Timóteo"],
        correta: 1,
        explicacao: "Atos 1:26 - Então tiraram sortes, e a sorte caiu sobre Matias, que foi acrescentado aos onze apóstolos."
      },
      {
        pergunta: "Quem sonhou com vacas magras e gordas?",
        opcoes: ["José", "Faraó", "Jacó", "Daniel"],
        correta: 1,
        explicacao: "Gênesis 41:1-7 - Faraó sonhou que estava junto ao rio Nilo e viu sete vacas gordas e sete vacas magras."
      },
      {
        pergunta: "Quem ressuscitou Lázaro?",
        opcoes: ["Pedro", "Jesus", "Elias", "Paulo"],
        correta: 1,
        explicacao: "João 11:43-44 - Jesus bradou em alta voz: 'Lázaro, venha para fora!'"
      },
      {
        pergunta: "Qual discípulo era cobrador de impostos?",
        opcoes: ["Pedro", "Tomé", "Mateus", "Felipe"],
        correta: 2,
        explicacao: "Mateus 9:9 - Jesus viu um homem chamado Mateus, sentado na coletoria, e disse-lhe: 'Siga-me.'"
      },
      {
        pergunta: "Qual foi o primeiro milagre de Jesus?",
        opcoes: ["Curar um cego", "Transformar água em vinho", "Multiplicar pães", "Andar sobre as águas"],
        correta: 1,
        explicacao: "João 2:1-11 - Jesus transformou água em vinho nas bodas de Caná."
      },
      {
        pergunta: "Quem escreveu a maioria das cartas do Novo Testamento?",
        opcoes: ["Pedro", "João", "Paulo", "Tiago"],
        correta: 2,
        explicacao: "Paulo escreveu 13 das 21 epístolas do Novo Testamento."
      },
      {
        pergunta: "Quem andou com Deus e foi levado sem ver a morte?",
        opcoes: ["Elias", "Enoque", "Isaías", "Abel"],
        correta: 1,
        explicacao: "Gênesis 5:24 - Enoque andou com Deus; e já não foi encontrado, pois Deus o havia arrebatado."
      },
      {
        pergunta: "Quem traiu Jesus com um beijo?",
        opcoes: ["Judas", "Pedro", "João", "Tomé"],
        correta: 0,
        explicacao: "Mateus 26:48-49 - Aquele que o traía havia combinado um sinal com eles: 'Aquele a quem eu beijar, é ele; prendam-no.'"
      },
      {
        pergunta: "Quem andou sobre as águas com Jesus?",
        opcoes: ["João", "Pedro", "Paulo", "Tomé"],
        correta: 1,
        explicacao: "Mateus 14:29 - Então Pedro saiu do barco, andou sobre as águas e foi na direção de Jesus."
      },
      {
        pergunta: "Quem negou Jesus três vezes?",
        opcoes: ["Pedro", "João", "Tomé", "André"],
        correta: 0,
        explicacao: "Mateus 26:75 - Então Pedro se lembrou da palavra que Jesus havia dito: 'Antes que o galo cante, você me negará três vezes.'"
      },
      {
        pergunta: "Quem foi o pai de João Batista?",
        opcoes: ["Zacarias", "José", "Simão", "Caifás"],
        correta: 0,
        explicacao: "Lucas 1:13 - O anjo lhe disse: 'Não tenha medo, Zacarias; sua oração foi ouvida. Isabel, sua esposa, lhe dará um filho.'"
      },
      {
        pergunta: "Quantos anos Matusalém viveu?",
        opcoes: ["900", "950", "969", "1000"],
        correta: 2,
        explicacao: "Gênesis 5:27 - Todos os dias de Matusalém foram novecentos e sessenta e nove anos; e morreu."
      }
    ],
    3: [
      {
        pergunta: "Qual era a profissão de Paulo antes da conversão?",
        opcoes: ["Carpinteiro", "Ferreiro", "Fabricante de tendas", "Pescador"],
        correta: 2,
        explicacao: "Atos 18:3 - Como tinham a mesma profissão, passou a morar e trabalhar com eles."
      },
      {
        pergunta: "Quem viu visões na ilha de Patmos?",
        opcoes: ["Paulo", "Pedro", "João", "Tiago"],
        correta: 2,
        explicacao: "Apocalipse 1:9 - Eu, João, irmão e companheiro de vocês no sofrimento, estava na ilha de Patmos."
      },
      {
        pergunta: "Quem escreveu muitos Salmos?",
        opcoes: ["Moisés", "Davi", "Isaías", "Paulo"],
        correta: 1,
        explicacao: "73 dos 150 Salmos são atribuídos a Davi."
      },
      {
        pergunta: "Quem enfrentou os profetas de Baal no Monte Carmelo?",
        opcoes: ["Elias", "Eliseu", "Isaías", "Daniel"],
        correta: 0,
        explicacao: "1 Reis 18:20-40 - Elias desafiou os profetas de Baal no Monte Carmelo."
      },
      {
        pergunta: "Qual profeta foi levado ao céu num redemoinho?",
        opcoes: ["Elias", "Eliseu", "Isaías", "Jeremias"],
        correta: 0,
        explicacao: "2 Reis 2:11 - E Elias subiu ao céu num redemoinho."
      },
      {
        pergunta: "Quem teve um sonho interpretado por Daniel?",
        opcoes: ["Faraó", "Nabucodonosor", "Herodes", "Pilatos"],
        correta: 1,
        explicacao: "Daniel 2:1-49 - Nabucodonosor sonhou com uma grande estátua que Daniel interpretou."
      },
      {
        pergunta: "Qual mulher escondeu os espias israelitas?",
        opcoes: ["Raabe", "Rute", "Ester", "Débora"],
        correta: 0,
        explicacao: "Josué 2:1-6 - Raabe escondeu os espias que Josué havia enviado."
      },
      {
        pergunta: "Quem foi vendido como escravo pelos irmãos?",
        opcoes: ["Benjamim", "José", "Judá", "Simeão"],
        correta: 1,
        explicacao: "Gênesis 37:28 - Os irmãos de José o venderam aos ismaelitas por vinte moedas de prata."
      },
      {
        pergunta: "Qual rei teve lepra?",
        opcoes: ["Davi", "Salomão", "Uzias", "Josias"],
        correta: 2,
        explicacao: "2 Crônicas 26:19-21 - Uzias ficou irado e foi ferido com lepra na testa."
      },
      {
        pergunta: "Quem foi a primeira esposa de Jacó?",
        opcoes: ["Raquel", "Lia", "Bila", "Zilpa"],
        correta: 1,
        explicacao: "Gênesis 29:23 - Quando chegou a noite, Labão tomou sua filha Lia e a trouxe a Jacó."
      },
      {
        pergunta: "Qual profeta foi engolido por um grande peixe?",
        opcoes: ["Jeremias", "Ezequiel", "Jonas", "Oséias"],
        correta: 2,
        explicacao: "Jonas 1:17 - O Senhor providenciou um grande peixe para engolir Jonas."
      },
      {
        pergunta: "Quem construiu o primeiro templo em Jerusalém?",
        opcoes: ["Davi", "Salomão", "Zorobabel", "Herodes"],
        correta: 1,
        explicacao: "1 Reis 6:1 - Salomão começou a construir o templo do Senhor."
      },
      {
        pergunta: "Qual discípulo duvidou da ressurreição de Jesus?",
        opcoes: ["Pedro", "João", "Tomé", "André"],
        correta: 2,
        explicacao: "João 20:24-25 - Tomé disse: 'Se eu não vir o sinal dos pregos em suas mãos... não crerei.'"
      },
      {
        pergunta: "Quem foi a mãe de Samuel?",
        opcoes: ["Ana", "Penina", "Rute", "Noemi"],
        correta: 0,
        explicacao: "1 Samuel 1:20 - Ana engravidou e, no devido tempo, deu à luz um filho. Ela lhe deu o nome de Samuel."
      },
      {
        pergunta: "Qual cidade foi destruída por Deus com fogo e enxofre?",
        opcoes: ["Babilônia", "Nínive", "Sodoma", "Tiro"],
        correta: 2,
        explicacao: "Gênesis 19:24 - Então o Senhor fez chover enxofre e fogo sobre Sodoma e Gomorra."
      },
      {
        pergunta: "Quem foi o sucessor de Elias?",
        opcoes: ["Eliseu", "Samuel", "Isaías", "Jeremias"],
        correta: 0,
        explicacao: "2 Reis 2:9-15 - Eliseu recebeu porção dobrada do espírito de Elias."
      },
      {
        pergunta: "Qual era o nome original de Paulo?",
        opcoes: ["Simão", "Saulo", "Silas", "Silvano"],
        correta: 1,
        explicacao: "Atos 13:9 - Então Saulo, também chamado Paulo, cheio do Espírito Santo..."
      },
      {
        pergunta: "Quem foi jogado numa fornalha ardente?",
        opcoes: ["Daniel", "Sadraque, Mesaque e Abede-Nego", "José", "Jeremias"],
        correta: 1,
        explicacao: "Daniel 3:20-23 - Nabucodonosor mandou lançar Sadraque, Mesaque e Abede-Nego na fornalha ardente."
      },
      {
        pergunta: "Qual mulher se tornou rainha da Pérsia?",
        opcoes: ["Rute", "Ester", "Débora", "Miriã"],
        correta: 1,
        explicacao: "Ester 2:17 - O rei amou Ester mais que todas as outras mulheres e a fez rainha."
      },
      {
        pergunta: "Quantos filhos Jacó teve?",
        opcoes: ["10", "11", "12", "13"],
        correta: 2,
        explicacao: "Gênesis 35:22 - Os filhos de Jacó foram doze, que se tornaram as doze tribos de Israel."
      }
    ],
    4: [
      {
        pergunta: "Qual profeta predisse o nascimento de Jesus em Belém?",
        opcoes: ["Isaías", "Jeremias", "Miquéias", "Daniel"],
        correta: 2,
        explicacao: "Miquéias 5:2 - Mas tu, Belém Efrata... de ti me sairá o que governará em Israel."
      },
      {
        pergunta: "Quem foi o último juiz de Israel?",
        opcoes: ["Gideão", "Sansão", "Samuel", "Eli"],
        correta: 2,
        explicacao: "1 Samuel 7:15 - Samuel julgou Israel todos os dias da sua vida."
      },
      {
        pergunta: "Qual era o nome da sogra de Rute?",
        opcoes: ["Ana", "Noemi", "Miriã", "Débora"],
        correta: 1,
        explicacao: "Rute 1:4 - Eles se casaram com mulheres moabitas; uma se chamava Orfa e a outra Rute."
      },
      {
        pergunta: "Quem foi o primeiro rei de Israel?",
        opcoes: ["Davi", "Salomão", "Saul", "Samuel"],
        correta: 2,
        explicacao: "1 Samuel 10:1 - Samuel tomou um frasco de óleo e o derramou sobre a cabeça de Saul."
      },
      {
        pergunta: "Qual livro da Bíblia não menciona o nome de Deus?",
        opcoes: ["Rute", "Ester", "Cantares", "Eclesiastes"],
        correta: 1,
        explicacao: "O livro de Ester é único por não mencionar explicitamente o nome de Deus."
      },
      {
        pergunta: "Quem escreveu o livro de Lamentações?",
        opcoes: ["Jeremias", "Isaías", "Ezequiel", "Daniel"],
        correta: 0,
        explicacao: "Jeremias escreveu Lamentações após a destruição de Jerusalém."
      },
      {
        pergunta: "Qual era o nome do servo de Abraão que foi buscar esposa para Isaque?",
        opcoes: ["Eliézer", "Ismael", "Agar", "Lot"],
        correta: 0,
        explicacao: "Gênesis 24:2 - Abraão disse ao mais antigo servo da sua casa, que administrava todos os seus bens."
      },
      {
        pergunta: "Quem foi morto por Davi com uma pedra?",
        opcoes: ["Saul", "Golias", "Absalão", "Joabe"],
        correta: 1,
        explicacao: "1 Samuel 17:49 - Davi meteu a mão no alforje, tirou uma pedra e a atirou com a funda."
      },
      {
        pergunta: "Qual profeta foi alimentado por uma viúva em Sarepta?",
        opcoes: ["Elias", "Eliseu", "Isaías", "Jeremias"],
        correta: 0,
        explicacao: "1 Reis 17:9-16 - Elias foi sustentado pela viúva de Sarepta durante a seca."
      },
      {
        pergunta: "Quem foi o pai de Salomão?",
        opcoes: ["Saul", "Samuel", "Davi", "Jessé"],
        correta: 2,
        explicacao: "2 Samuel 12:24 - Davi consolou Bate-Seba, sua mulher... ela deu à luz um filho, e lhe pôs o nome de Salomão."
      },
      {
        pergunta: "Qual era o nome da montanha onde Moisés recebeu os Dez Mandamentos?",
        opcoes: ["Monte Carmelo", "Monte Sinai", "Monte Nebo", "Monte Sião"],
        correta: 1,
        explicacao: "Êxodo 19:20 - O Senhor desceu sobre o monte Sinai, no cume do monte."
      },
      {
        pergunta: "Quem foi transformado em estátua de sal?",
        opcoes: ["A esposa de Ló", "A esposa de Noé", "Sara", "Rebeca"],
        correta: 0,
        explicacao: "Gênesis 19:26 - A esposa de Ló olhou para trás e se transformou numa coluna de sal."
      },
      {
        pergunta: "Qual discípulo era irmão de Pedro?",
        opcoes: ["João", "Tiago", "André", "Felipe"],
        correta: 2,
        explicacao: "Mateus 4:18 - Jesus viu dois irmãos: Simão, chamado Pedro, e André, seu irmão."
      },
      {
        pergunta: "Quem foi o profeta que ungiu Davi como rei?",
        opcoes: ["Elias", "Eliseu", "Samuel", "Natã"],
        correta: 2,
        explicacao: "1 Samuel 16:13 - Samuel tomou o chifre de óleo e ungiu Davi na presença de seus irmãos."
      },
      {
        pergunta: "Qual era o nome do jardim onde Adão e Eva viviam?",
        opcoes: ["Jardim do Éden", "Jardim de Getsêmani", "Jardim de José", "Jardim Real"],
        correta: 0,
        explicacao: "Gênesis 2:8 - O Senhor Deus plantou um jardim no Éden, do lado leste."
      },
      {
        pergunta: "Quem foi o profeta que confrontou o rei Acabe?",
        opcoes: ["Elias", "Eliseu", "Isaías", "Jeremias"],
        correta: 0,
        explicacao: "1 Reis 18:17-18 - Quando Acabe viu Elias, disse-lhe: 'É você, perturbador de Israel?'"
      },
      {
        pergunta: "Qual era o nome do filho de Abraão com Agar?",
        opcoes: ["Isaque", "Ismael", "Jacó", "Esaú"],
        correta: 1,
        explicacao: "Gênesis 16:15 - Agar deu à luz um filho a Abraão, e Abraão deu ao filho o nome de Ismael."
      },
      {
        pergunta: "Quem foi o rei que construiu os jardins suspensos da Babilônia?",
        opcoes: ["Nabucodonosor", "Belsazar", "Dario", "Ciro"],
        correta: 0,
        explicacao: "Nabucodonosor II foi o rei babilônico famoso por suas construções grandiosas."
      },
      {
        pergunta: "Qual era o nome da irmã de Moisés?",
        opcoes: ["Débora", "Miriã", "Ana", "Ester"],
        correta: 1,
        explicacao: "Êxodo 15:20 - Miriã, a profetisa, irmã de Arão, tomou um tamborim na mão."
      },
      {
        pergunta: "Quem foi o discípulo que Jesus amava?",
        opcoes: ["Pedro", "João", "Tiago", "André"],
        correta: 1,
        explicacao: "João 13:23 - Um dos discípulos, aquele a quem Jesus amava, estava reclinado ao lado de Jesus."
      }
    ],
    5: [
      {
        pergunta: "Qual era o nome do sumo sacerdote que julgou Jesus?",
        opcoes: ["Anás", "Caifás", "Zacarias", "Simão"],
        correta: 1,
        explicacao: "Mateus 26:57 - Os que prenderam Jesus o levaram a Caifás, o sumo sacerdote."
      },
      {
        pergunta: "Quem foi o centurião que reconheceu Jesus como Filho de Deus?",
        opcoes: ["Cornélio", "Júlio", "O centurião da crucificação", "Cláudio"],
        correta: 2,
        explicacao: "Marcos 15:39 - O centurião que estava em frente da cruz, vendo como ele morreu, disse: 'Verdadeiramente este homem era Filho de Deus!'"
      },
      {
        pergunta: "Qual era o nome do monte onde Jesus foi transfigurado?",
        opcoes: ["Monte Sinai", "Monte Tabor", "Monte das Oliveiras", "Monte Hermom"],
        correta: 1,
        explicacao: "Mateus 17:1-2 - Jesus levou Pedro, Tiago e João ao monte alto e foi transfigurado diante deles."
      },
      {
        pergunta: "Quem foi o profeta que predisse a vinda do Messias em Daniel 9?",
        opcoes: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
        correta: 3,
        explicacao: "Daniel 9:24-27 - Daniel profetizou sobre as setenta semanas e a vinda do Messias."
      },
      {
        pergunta: "Qual era o nome do portão onde Pedro foi liberto da prisão?",
        opcoes: ["Portão de Ferro", "Portão Dourado", "Portão das Ovelhas", "Portão do Peixe"],
        correta: 0,
        explicacao: "Atos 12:10 - Passaram pela primeira e segunda guardas e chegaram ao portão de ferro."
      },
      {
        pergunta: "Quem foi o rei que teve um sonho com uma grande estátua?",
        opcoes: ["Nabucodonosor", "Belsazar", "Dario", "Ciro"],
        correta: 0,
        explicacao: "Daniel 2:31-35 - Nabucodonosor sonhou com uma grande estátua que Daniel interpretou."
      },
      {
        pergunta: "Qual era o nome da ilha onde Paulo naufragou?",
        opcoes: ["Creta", "Malta", "Chipre", "Rodes"],
        correta: 1,
        explicacao: "Atos 28:1 - Uma vez em segurança, descobrimos que a ilha se chamava Malta."
      },
      {
        pergunta: "Quem foi o profeta que viu o vale de ossos secos?",
        opcoes: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
        correta: 2,
        explicacao: "Ezequiel 37:1-14 - Ezequiel foi levado pelo Espírito ao vale cheio de ossos secos."
      },
      {
        pergunta: "Qual era o nome do oficial etíope que Filipe evangelizou?",
        opcoes: ["Simão", "Eunuco da Etiópia", "Cornélio", "Sérgio Paulo"],
        correta: 1,
        explicacao: "Atos 8:27 - Havia um etíope, eunuco, alto oficial de Candace, rainha dos etíopes."
      },
      {
        pergunta: "Quem foi o rei que teve a mão seca restaurada?",
        opcoes: ["Jeroboão", "Roboão", "Uzias", "Josias"],
        correta: 0,
        explicacao: "1 Reis 13:4-6 - A mão de Jeroboão secou quando ele a estendeu contra o homem de Deus."
      },
      {
        pergunta: "Qual era o nome da cidade onde Paulo teve a visão do homem macedônio?",
        opcoes: ["Antioquia", "Trôade", "Filipos", "Tessalônica"],
        correta: 1,
        explicacao: "Atos 16:8-9 - Passando por Mísia, desceram a Trôade. Durante a noite Paulo teve uma visão."
      },
      {
        pergunta: "Quem foi o profeta que casou com uma prostituta por ordem de Deus?",
        opcoes: ["Isaías", "Jeremias", "Oséias", "Amós"],
        correta: 2,
        explicacao: "Oséias 1:2 - O Senhor disse a Oséias: 'Vá, case-se com uma prostituta.'"
      },
      {
        pergunta: "Qual era o nome do vale onde Davi derrotou Golias?",
        opcoes: ["Vale de Elá", "Vale de Josafá", "Vale de Hinom", "Vale de Siquém"],
        correta: 0,
        explicacao: "1 Samuel 17:2 - Saul e os israelitas se ajuntaram e acamparam no vale de Elá."
      },
      {
        pergunta: "Quem foi o profeta que predisse a destruição de Nínive?",
        opcoes: ["Jonas", "Naum", "Habacuque", "Sofonias"],
        correta: 1,
        explicacao: "Naum 1:1 - Sentença contra Nínive. Livro da visão de Naum, o elcosita."
      },
      {
        pergunta: "Qual era o nome do rio onde Naamã foi curado da lepra?",
        opcoes: ["Rio Jordão", "Rio Eufrates", "Rio Nilo", "Rio Tigre"],
        correta: 0,
        explicacao: "2 Reis 5:14 - Então desceu Naamã e mergulhou sete vezes no Jordão."
      },
      {
        pergunta: "Quem foi o rei que queimou o rolo da profecia de Jeremias?",
        opcoes: ["Jeoaquim", "Zedequias", "Joaquim", "Josias"],
        correta: 0,
        explicacao: "Jeremias 36:23 - Jeoaquim cortava o rolo com um canivete e o lançava no fogo."
      },
      {
        pergunta: "Qual era o nome da fonte onde Gideão escolheu seus 300 homens?",
        opcoes: ["Fonte de Harod", "Fonte de Siloé", "Fonte de Jacó", "Fonte de Berseba"],
        correta: 0,
        explicacao: "Juízes 7:1 - Gideão e todo o povo que estava com ele se levantaram de madrugada e acamparam junto à fonte de Harod."
      },
      {
        pergunta: "Quem foi o profeta que viu quatro carros com cavalos de diferentes cores?",
        opcoes: ["Daniel", "Ezequiel", "Zacarias", "Habacuque"],
        correta: 2,
        explicacao: "Zacarias 6:1-8 - Zacarias viu quatro carros que saíam dentre dois montes de bronze."
      },
      {
        pergunta: "Qual era o nome da cidade onde Abraão quase sacrificou Isaque?",
        opcoes: ["Moriá", "Betel", "Hebrom", "Berseba"],
        correta: 0,
        explicacao: "Gênesis 22:2 - Vá à terra de Moriá e ofereça-o ali em holocausto."
      },
      {
        pergunta: "Quem foi o último profeta do Antigo Testamento?",
        opcoes: ["Zacarias", "Ageu", "Malaquias", "Joel"],
        correta: 2,
        explicacao: "Malaquias é tradicionalmente considerado o último profeta do Antigo Testamento."
      }
    ]
  },
  
  // Configurações do jogo
  config: {
    questionsPerLevel: 20,
    passingScore: 100, // Porcentagem necessária para passar de nível
    maxLevels: 5
  },
  
  // Mensagens de resultado baseadas na pontuação
  resultMessages: {
    perfect: {
      title: "🏆 Perfeito!",
      message: "Parabéns! Você demonstrou um conhecimento excepcional da Palavra de Deus!",
      icon: "🏆"
    },
    excellent: {
      title: "⭐ Excelente!",
      message: "Muito bem! Seu conhecimento bíblico é impressionante!",
      icon: "⭐"
    },
    good: {
      title: "👍 Bom trabalho!",
      message: "Bom desempenho! Continue estudando a Palavra de Deus!",
      icon: "👍"
    },
    needsImprovement: {
      title: "📚 Continue estudando!",
      message: "Você pode melhorar! Dedique mais tempo ao estudo da Bíblia.",
      icon: "📚"
    }
  }
};

// Função para obter mensagem de resultado baseada na pontuação
function getResultMessage(percentage) {
  if (percentage === 100) return GAME_DATA.resultMessages.perfect;
  if (percentage >= 80) return GAME_DATA.resultMessages.excellent;
  if (percentage >= 60) return GAME_DATA.resultMessages.good;
  return GAME_DATA.resultMessages.needsImprovement;
}

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para obter perguntas de um nível específico
function getLevelQuestions(level) {
  const questions = GAME_DATA.levels[level] || [];
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, GAME_DATA.config.questionsPerLevel);
}

// Exportar para uso global (compatibilidade com versão original)
if (typeof window !== 'undefined') {
  window.GAME_DATA = GAME_DATA;
  window.getResultMessage = getResultMessage;
  window.shuffleArray = shuffleArray;
  window.getLevelQuestions = getLevelQuestions;
}