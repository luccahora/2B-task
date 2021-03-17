export function loadLists() {
  return [
    {
      title: "To do",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "CR Feat usuário",
          priority: "Baixa",
        },
        {
          id: 2,
          content: "Alterar rotas",
          priority: "Urgente",
        },
        {
          id: 3,
          content: "Comunicar que Lucca passou o processo seletivo ",
          priority: "Revisar",
        },
      ],
    },
    {
      title: "Doing ",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Verificar teste Lucca",
          priority: "Urgente",
        },
      ],
    },

    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Tela de login",
          priority: "Urgente",
        },
        {
          id: 12,
          content: "Tela de cadastro",
          priority: "Urgente",
        },
        {
          id: 13,
          content: "Atualizar biblioteca React Query",
          priority: "Baixa",
        },
      ],
    },
  ];
}
