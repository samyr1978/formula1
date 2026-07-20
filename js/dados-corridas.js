// Banco de dados fixo dos pilotos
const dbPilotos = {
    63: { nome: "George Russell", equipe: "Mercedes", pais: "Reino Unido" },
    12: { nome: "Kimi Antonelli", equipe: "Mercedes", pais: "Itália" },

    16: { nome: "Charles Leclerc", equipe: "Ferrari", pais: "Mônaco" },
    44: { nome: "Lewis Hamilton", equipe: "Ferrari", pais: "Reino Unido" },

    1:  { nome: "Lando Norris", equipe: "McLaren", pais: "Reino Unido" },
    81: { nome: "Oscar Piastri", equipe: "McLaren", pais: "Austrália" },

    3:  { nome: "Max Verstappen", equipe: "Red Bull", pais: "Holanda" },
    6:  { nome: "Isack Hadjar", equipe: "Red Bull", pais: "França" },
        
    10: { nome: "Pierre Gasly", equipe: "Alpine", pais: "França" },
    43: { nome: "Franco Colapinto", equipe: "Alpine", pais: "Argentina" },

    31: { nome: "Esteban Ocon", equipe: "Haas", pais: "França" },
    87: { nome: "Oliver Bearman", equipe: "Haas", pais: "Reino Unido" },

    30: { nome: "Liam Lawson", equipe: "Racing Bulls", pais: "Nova Zelândia" },
    41: { nome: "Arvid Lindblad", equipe: "Racing Bulls", pais: "Reino Unido" },
    
    55: { nome: "Carlos Sainz", equipe: "Williams", pais: "Espanha" },
    23: { nome: "Alexander Albon", equipe: "Williams", pais: "Tailândia" },

    27: { nome: "Nico Hulkenberg", equipe: "Audi", pais: "Alemanha" },
    5:  { nome: "Gabriel Bortoleto", equipe: "Audi", pais: "Brasil" },
    
    11: { nome: "Sergio Perez", equipe: "Cadillac", pais: "México" },
    77: { nome: "Valtteri Bottas", equipe: "Cadillac", pais: "Finlândia" },
    
    14: { nome: "Fernando Alonso", equipe: "Aston Martin", pais: "Espanha" },
    18: { nome: "Lance Stroll", equipe: "Aston Martin", pais: "Canadá" },

    0: { nome: "-", equipe: "-", pais: "-" },
};


const resultados2026 = [
    {
        gp: "Austrália",
        data: "2026-03-05T22:30:00",
        temSprint: false,
        resultados: [
            { id: 63, posicao: 1, pontos: 25 },
            { id: 12, posicao: 2, pontos: 18 },
            { id: 16, posicao: 3, pontos: 15 },
            { id: 44, posicao: 4, pontos: 12},
            { id: 1,  posicao: 5, pontos: 10},
            { id: 3,  posicao: 6, pontos: 8},
            { id: 87, posicao: 7, pontos: 6},
            { id: 41, posicao: 8, pontos: 4},
            { id: 5,  posicao: 9, pontos: 2},
            { id: 10, posicao: 10, pontos: 1},
            { id: 31, posicao: 11, pontos: 0},
            { id: 23, posicao: 12, pontos: 0},
            { id: 30, posicao: 13, pontos: 0},
            { id: 43, posicao: 14, pontos: 0},
            { id: 55, posicao: 15, pontos: 0},
            { id: 11, posicao: 16, pontos: 0},
            { id: 18, posicao: 17, pontos: 0},
            { id: 14, posicao: 18, pontos: 0},
            { id: 77, posicao: 19, pontos: 0},
            { id: 6,  posicao: 20, pontos: 0},
            { id: 81, posicao: 21, pontos: 0},
            { id: 27, posicao: 22, pontos: 0}

        ]
    },
    
    {
        gp: "China",
        data: "2026-03-13T00:30:00",
        temSprint: true,
        sprint: [
            { id: 63, posicao: 1, pontos: 8 },
            { id: 16, posicao: 2, pontos: 7 },
            { id: 44, posicao: 3, pontos: 6 },
            { id: 1,  posicao: 4, pontos: 5},
            { id: 12, posicao: 5, pontos: 4},
            { id: 81, posicao: 6, pontos: 3},
            { id: 30, posicao: 7, pontos: 2},
            { id: 87, posicao: 8, pontos: 1},
            { id: 3,  posicao: 9, pontos: 0},
            { id: 31, posicao: 10, pontos: 0},
            { id: 10, posicao: 11, pontos: 0},
            { id: 55, posicao: 12, pontos: 0},
            { id: 5,  posicao: 13, pontos: 0},
            { id: 43, posicao: 14, pontos: 0},
            { id: 6,  posicao: 15, pontos: 0},
            { id: 23, posicao: 16, pontos: 0},
            { id: 14, posicao: 17, pontos: 0},
            { id: 18, posicao: 18, pontos: 0},
            { id: 11, posicao: 19, pontos: 0},
            { id: 27, posicao: 20, pontos: 0},
            { id: 77, posicao: 21, pontos: 0},
            { id: 41, posicao: 22, pontos: 0}
        ],
        resultados: [
            { id: 12, posicao: 1, pontos: 25 },
            { id: 63, posicao: 2, pontos: 18 },
            { id: 44, posicao: 3, pontos: 15 },
            { id: 16, posicao: 4, pontos: 12},
            { id: 87, posicao: 5, pontos: 10},
            { id: 10, posicao: 6, pontos: 8},
            { id: 30, posicao: 7, pontos: 6},
            { id: 6,  posicao: 8, pontos: 4},
            { id: 55, posicao: 9, pontos: 2},
            { id: 43, posicao: 10, pontos: 1},
            { id: 27, posicao: 11, pontos: 0},
            { id: 41, posicao: 12, pontos: 0},
            { id: 77, posicao: 13, pontos: 0},
            { id: 31, posicao: 14, pontos: 0},
            { id: 11, posicao: 15, pontos: 0},
            { id: 3,  posicao: 16, pontos: 0},
            { id: 14, posicao: 17, pontos: 0},
            { id: 18, posicao: 18, pontos: 0},
            { id: 81, posicao: 19, pontos: 0},
            { id: 1,  posicao: 20, pontos: 0},
            { id: 5,  posicao: 21, pontos: 0},
            { id: 23, posicao: 22, pontos: 0}
        ]
    },
    
    {
        gp: "Japão",
        data: "2026-04-05T02:00:00",
        temSprint: false,
        resultados: [
            { id: 12, posicao: 1, pontos: 25 },
            { id: 81, posicao: 2, pontos: 18 },
            { id: 16, posicao: 3, pontos: 15 },
            { id: 63, posicao: 4, pontos: 12},
            { id: 1,  posicao: 5, pontos: 10},
            { id: 44, posicao: 6, pontos: 8},
            { id: 10, posicao: 7, pontos: 6},
            { id: 3,  posicao: 8, pontos: 4},
            { id: 30, posicao: 9, pontos: 2},
            { id: 31, posicao: 10, pontos: 1},
            { id: 27, posicao: 11, pontos: 0},
            { id: 6,  posicao: 12, pontos: 0},
            { id: 5,  posicao: 13, pontos: 0},
            { id: 41, posicao: 14, pontos: 0},
            { id: 55, posicao: 15, pontos: 0},
            { id: 43, posicao: 16, pontos: 0},
            { id: 11, posicao: 17, pontos: 0},
            { id: 14, posicao: 18, pontos: 0},
            { id: 77, posicao: 19, pontos: 0},
            { id: 23, posicao: 20, pontos: 0},
            { id: 18, posicao: 21, pontos: 0},
            { id: 87, posicao: 22, pontos: 0}
        ]
    },
    
    {
        gp: "Miami",
        data: "2026-05-01T13:00:00",
        temSprint: true,
        sprint: [
            { id: 1,  posicao: 1, pontos: 8 },
            { id: 81, posicao: 2, pontos: 7 },
            { id: 16, posicao: 3, pontos: 6 },
            { id: 63, posicao: 4, pontos: 5},
            { id: 3,  posicao: 5, pontos: 4},
            { id: 12, posicao: 6, pontos: 3},
            { id: 44, posicao: 7, pontos: 2},
            { id: 10, posicao: 8, pontos: 1},
            { id: 6,  posicao: 9, pontos: 0},
            { id: 43, posicao: 10, pontos: 0},
            { id: 31, posicao: 11, pontos: 0},
            { id: 87, posicao: 12, pontos: 0},
            { id: 55, posicao: 13, pontos: 0},
            { id: 30, posicao: 14, pontos: 0},
            { id: 14, posicao: 15, pontos: 0},
            { id: 11, posicao: 16, pontos: 0},
            { id: 18, posicao: 17, pontos: 0},
            { id: 23, posicao: 18, pontos: 0},
            { id: 77, posicao: 19, pontos: 0},
            { id: 27, posicao: 20, pontos: 0},
            { id: 41, posicao: 21, pontos: 0},
            { id: 5,  posicao: 22, pontos: 0}
        ],
        resultados: [
            { id: 12, posicao: 1, pontos: 25 },
            { id: 1,  posicao: 2, pontos: 18 },
            { id: 81, posicao: 3, pontos: 15 },
            { id: 63, posicao: 4, pontos: 12},
            { id: 3,  posicao: 5, pontos: 10},
            { id: 44, posicao: 6, pontos: 8},
            { id: 43, posicao: 7, pontos: 6},
            { id: 16, posicao: 8, pontos: 4},
            { id: 55, posicao: 9, pontos: 2},
            { id: 23, posicao: 10, pontos: 1},
            { id: 87, posicao: 11, pontos: 0},
            { id: 5,  posicao: 12, pontos: 0},
            { id: 31, posicao: 13, pontos: 0},
            { id: 41, posicao: 14, pontos: 0},
            { id: 14, posicao: 15, pontos: 0},
            { id: 11, posicao: 16, pontos: 0},
            { id: 18, posicao: 17, pontos: 0},
            { id: 77, posicao: 18, pontos: 0},
            { id: 27, posicao: 19, pontos: 0},
            { id: 30, posicao: 20, pontos: 0},
            { id: 10, posicao: 21, pontos: 0},
            { id: 6,  posicao: 22, pontos: 0}
        ]
    },
    
    
    {
        gp: "Canadá",
        data: "2026-05-24T17:00:00",
        temSprint: true,
        sprint: [
            { id: 63, posicao: 1, pontos: 8 },
            { id: 1,  posicao: 2, pontos: 7 },
            { id: 12, posicao: 3, pontos: 6 },
            { id: 81, posicao: 4, pontos: 5},
            { id: 16, posicao: 5, pontos: 4},
            { id: 44, posicao: 6, pontos: 3},
            { id: 3,  posicao: 7, pontos: 2},
            { id: 41, posicao: 8, pontos: 1},
            { id: 43, posicao: 9, pontos: 0},
            { id: 55, posicao: 10, pontos: 0},
            { id: 30, posicao: 11, pontos: 0},
            { id: 5,  posicao: 12, pontos: 0},
            { id: 31, posicao: 13, pontos: 0},
            { id: 11, posicao: 14, pontos: 0},
            { id: 27, posicao: 15, pontos: 0},
            { id: 18, posicao: 16, pontos: 0},
            { id: 77, posicao: 17, pontos: 0},
            { id: 87, posicao: 18, pontos: 0},
            { id: 23, posicao: 19, pontos: 0},
            { id: 10, posicao: 20, pontos: 0},
            { id: 6,  posicao: 21, pontos: 0},
            { id: 14, posicao: 22, pontos: 0}
            
        ],
        resultados: [
            { id: 12, posicao: 1,  pontos: 25 },
            { id: 44, posicao: 2,  pontos: 18 },
            { id: 3,  posicao: 3,  pontos: 15 },
            { id: 16, posicao: 4,  pontos: 12 },
            { id: 6,  posicao: 5,  pontos: 10 },
            { id: 43, posicao: 6,  pontos: 8 },
            { id: 30, posicao: 7,  pontos: 6 },
            { id: 10, posicao: 8,  pontos: 4 },
            { id: 55, posicao: 9,  pontos: 2 },
            { id: 87, posicao: 10, pontos: 1 },
            { id: 81, posicao: 11, pontos: 0 },
            { id: 27, posicao: 12, pontos: 0 },
            { id: 5,  posicao: 13, pontos: 0 },
            { id: 31, posicao: 14, pontos: 0 },
            { id: 18, posicao: 15, pontos: 0 },
            { id: 77, posicao: 16, pontos: 0 },
            { id: 11, posicao: 17, pontos: 0 },
            { id: 1,  posicao: 18, pontos: 0 },
            { id: 63, posicao: 19, pontos: 0 },
            { id: 14, posicao: 20, pontos: 0 },
            { id: 23, posicao: 21, pontos: 0 },
            { id: 41, posicao: 22, pontos: 0 }

            
        ]
    }, 
    
     {
        gp: "Mônaco",
        data: "2026-06-07T10:00:00",
        temSprint: false,
       
        resultados: [
            { id: 12, posicao: 1, pontos: 25 },
            { id: 44, posicao: 2, pontos: 18 },
            { id: 10, posicao: 3, pontos: 15 },
            { id: 6, posicao: 4, pontos: 12},
            { id: 81,  posicao: 5, pontos: 10},
            { id: 30, posicao: 6, pontos: 8},
            { id: 41, posicao: 7, pontos: 6},
            { id: 23,  posicao: 8, pontos: 4},
            { id: 31, posicao: 9, pontos: 2},
            { id: 14, posicao: 10, pontos: 1},
            { id: 5, posicao: 11, pontos: 0},
            { id: 63,  posicao: 12, pontos: 0},
            { id: 27,  posicao: 13, pontos: 0},
            { id: 43, posicao: 14, pontos: 0},
            { id: 11, posicao: 15, pontos: 0},
            { id: 55, posicao: 16, pontos: 0},
            { id: 16, posicao: 17, pontos: 0},
            { id: 18, posicao: 18, pontos: 0},
            { id: 1, posicao: 19, pontos: 0},
            { id: 87, posicao: 20, pontos: 0},
            { id: 77, posicao: 21, pontos: 0},
            { id: 3, posicao: 22, pontos: 0}
        ]
    },

    {
        gp: "Barcelona",
        data: "2026-06-14T10:00:00",
        temSprint: false,
       
        resultados: [
            { id: 44, posicao: 1, pontos: 25 },
            { id: 63, posicao: 2, pontos: 18 },
            { id: 1, posicao: 3, pontos: 15 },
            { id: 3, posicao: 4, pontos: 12},
            { id: 81,  posicao: 5, pontos: 10},
            { id: 6, posicao: 6, pontos: 8},
            { id: 10, posicao: 7, pontos: 6},
            { id: 30,  posicao: 8, pontos: 4},
            { id: 41, posicao: 9, pontos: 2},
            { id: 43, posicao: 10, pontos: 1},
            { id: 5, posicao: 11, pontos: 0},
            { id: 55,  posicao: 12, pontos: 0},
            { id: 31,  posicao: 13, pontos: 0},
            { id: 11, posicao: 14, pontos: 0},
            { id: 16, posicao: 15, pontos: 0},
            { id: 12, posicao: 16, pontos: 0},
            { id: 87, posicao: 17, pontos: 0},
            { id: 23, posicao: 18, pontos: 0},
            { id: 14, posicao: 19, pontos: 0},
            { id: 27, posicao: 20, pontos: 0},
            { id: 77, posicao: 21, pontos: 0},
            { id: 18, posicao: 22, pontos: 0}
        ]
    },
    
     {
        gp: "Áustria",
        data: "2026-06-28T10:00:00",
        temSprint: false,
       
        resultados: [
            { id: 63, posicao: 1, pontos: 25 },
            { id: 3, posicao: 2, pontos: 18 },
            { id: 12, posicao: 3, pontos: 15 },
            { id: 81, posicao: 4, pontos: 12},
            { id: 44,  posicao: 5, pontos: 10},
            { id: 6, posicao: 6, pontos: 8},
            { id: 1, posicao: 7, pontos: 6},
            { id: 16,  posicao: 8, pontos: 4},
            { id: 30, posicao: 9, pontos: 2},
            { id: 41, posicao: 10, pontos: 1},
            { id: 5, posicao: 11, pontos: 0},
            { id: 27,  posicao: 12, pontos: 0},
            { id: 10,  posicao: 13, pontos: 0},
            { id: 87, posicao: 14, pontos: 0},
            { id: 43, posicao: 15, pontos: 0},
            { id: 31, posicao: 16, pontos: 0},
            { id: 23, posicao: 17, pontos: 0},
            { id: 14, posicao: 18, pontos: 0},
            { id: 18, posicao: 19, pontos: 0},
            { id: 55, posicao: 20, pontos: 0},
            { id: 11, posicao: 21, pontos: 0},
            { id: 77, posicao: 22, pontos: 0}
        ]
    },
    
    {
    gp: "Inglaterra",
        data: "2026-07-05T11:00:00",
        temSprint: true,
        sprint: [
            { id: 12, posicao: 1, pontos: 8 },
            { id: 44,  posicao: 2, pontos: 7 },
            { id: 1, posicao: 3, pontos: 6 },
            { id: 63, posicao: 4, pontos: 5},
            { id: 16, posicao: 5, pontos: 4},
            { id: 3, posicao: 6, pontos: 3},
            { id: 81,  posicao: 7, pontos: 2},
            { id: 30, posicao: 8, pontos: 1},
            { id: 6, posicao: 9, pontos: 0},
            { id: 41, posicao: 10, pontos: 0},
            { id: 10, posicao: 11, pontos: 0},
            { id: 43,  posicao: 12, pontos: 0},
            { id: 5, posicao: 13, pontos: 0},
            { id: 87, posicao: 14, pontos: 0},
            { id: 27, posicao: 15, pontos: 0},
            { id: 31, posicao: 16, pontos: 0},
            { id: 55, posicao: 17, pontos: 0},
            { id: 23, posicao: 18, pontos: 0},
            { id: 77, posicao: 19, pontos: 0},
            { id: 14, posicao: 20, pontos: 0},
            { id: 18,  posicao: 21, pontos: 0},
            { id: 11, posicao: 22, pontos: 0}
        ],
        resultados: [
            { id: 16, posicao: 1,  pontos: 25 },
            { id: 63, posicao: 2,  pontos: 18 },
            { id: 44,  posicao: 3,  pontos: 15 },
            { id: 1, posicao: 4,  pontos: 12 },
            { id: 6,  posicao: 5,  pontos: 10 },
            { id: 30, posicao: 6,  pontos: 8 },
            { id: 41, posicao: 7,  pontos: 6 },
            { id: 5, posicao: 8,  pontos: 4 },
            { id: 43, posicao: 9,  pontos: 2 },
            { id: 10, posicao: 10, pontos: 1 },
            { id: 81, posicao: 11, pontos: 0 },
            { id: 87, posicao: 12, pontos: 0 },
            { id: 31,  posicao: 13, pontos: 0 },
            { id: 11, posicao: 14, pontos: 0 },
            { id: 12, posicao: 15, pontos: 0 },
            { id: 77, posicao: 16, pontos: 0 },
            { id: 55, posicao: 17, pontos: 0 },
            { id: 14,  posicao: 18, pontos: 0 },
            { id: 18, posicao: 19, pontos: 0 },
            { id: 3, posicao: 20, pontos: 0 },
            { id: 23, posicao: 21, pontos: 0 },
            { id: 27, posicao: 22, pontos: 0 }
            
        ]
    },

     
    {
        gp: "Bélgica",
        data: "2026-07-19T10:00:00",
        temSprint: false,
       
        resultados: [
            { id: 12, posicao: 1, pontos: 25 },
            { id: 16, posicao: 2, pontos: 18 },
            { id: 3, posicao: 3, pontos: 15 },
            { id: 44, posicao: 4, pontos: 12},
            { id: 81,  posicao: 5, pontos: 10},
            { id: 6, posicao: 6, pontos: 8},
            { id: 1, posicao: 7, pontos: 6},
            { id: 5,  posicao: 8, pontos: 4},
            { id: 41, posicao: 9, pontos: 2},
            { id: 43, posicao: 10, pontos: 1},
            { id: 10, posicao: 11, pontos: 0},
            { id: 30,  posicao: 12, pontos: 0},
            { id: 27,  posicao: 13, pontos: 0},
            { id: 87, posicao: 14, pontos: 0},
            { id: 23, posicao: 15, pontos: 0},
            { id: 55, posicao: 16, pontos: 0},
            { id: 31, posicao: 17, pontos: 0},
            { id: 77, posicao: 18, pontos: 0},
            { id: 14, posicao: 19, pontos: 0},
            { id: 18, posicao: 20, pontos: 0},
            { id: 11, posicao: 21, pontos: 0},
            { id: 63, posicao: 22, pontos: 0}
        ]
    },

     {
        gp: "Hungria",
        data: "2026-07-26T10:00:00",
        temSprint: true,
       
        resultados: [
            
        ]
    },

     {
        gp: "Holanda",
        data: "2026-08-23T10:00:00",
        temSprint: true,
       
        resultados: [
            
        ]
    }
    
];
document.addEventListener("DOMContentLoaded", () => {
    const corpoPilotos = document.getElementById("corpo-tabela");
    const corpoConstrutores = document.getElementById("corpo-tabela-construtores");
}
);