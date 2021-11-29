import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    tkd: [
      {
        name: "Taekwondo",
        subtitle:"Linha WTF",
        image: "home.jpg",
        extra: "More",
        isHome: true,
        isPoomsae: false,
        isFaixa: false, 
        isAula: false,
        description: "O taekwondo foi criado pelo general Sul-coreano Choi Hong-hi. Ele fez a junção dos estilos de taekyon com o karate."
      },
      {
        name: "Conteúdo",
        subtitle:"Linha WTF",
        image: "home2.jpg",
        extra: "More",
        isHome: true,
        isPoomsae: false,
        isFaixa: false, 
        isAula: false,
        description: "Contém varias linhas de estudos e conteúdos, como Poomsae, Defesa Pessoal, Lutas"
      },
      {
        name: "Faixas",
        subtitle:"Diferentes Gubs",
        image: "faixas.jpg",
        extra: "More",
        isHome: true,
        isPoomsae: false,
        isFaixa: false, 
        isAula: false,
        description: "As faixas podem representar sua maturidade e conhecimentos em relação à arte marcial."
      },
      {
        name: "Faixas Coloridas",
        subtitle:"Apartir dos 4 anos",
        image: "faixasColoridas.jpg",
        extra: "More",
        isHome: false,
        isPoomsae: false,
        isFaixa: true, 
        isAula: false,
        description: "As faixas coloridas vão do branco até a ponta preta."
      },
      {
        name: "Faixas Pretas",
        subtitle:"Mínimo 18 anos no Brasil",
        image: "faixasPretas.jpg",
        extra: "More",
        isHome: false,
        isPoomsae: false,
        isFaixa: true, 
        isAula: false,
        description: "Estágio em que, em tese, o praticante alcançaria a sabedoria e o conhecimento na modalidade. Para muitas pessoas, a faixa preta é considerada o fim de um caminho; para outras, simboliza apenas o início, o começo de uma jornada repleta de escuridão e de dúvidas. Não podemos esquecer que os DANs são graduações utilizadas para a faixa preta. São numerados em ordem crescente.."
      },
      {
        name: "Poomsae",
        subtitle:"Cada faixa tem o seu",
        image: "poomsae.jpg",
        extra: "More",
        isHome: false,
        isPoomsae: true,
        isFaixa: false, 
        isAula: false,
        description: "Deve demontrar técnica e força."
      },
      {
        name: "Aulas semanais",
        subtitle:"Aula experimental grátis",
        image: "calendario.png",
        extra: "Agende!",
        description: "SEG - QUA - SEX : Aulas dos adultos | TER - QUI : Infanto-Juvenil | SAB : Infantil 9:30am, Turmas mista 10:30am",
        isHome: false,
        isPoomsae: false,
        isFaixa: false, 
        isAula: true,
      },
    ]
  },
})

