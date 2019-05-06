export const statusCodes = {
  OK: { code: 200, msg: "OK" },
  
  USER_NOT_FOUND: { code: 600, msg: "Usuário e/ou senha incorretos." },
  WRONG_PASSWORD: { code: 600, msg: "Usuário e/ou senha incorretos." },
  USER_FETCH_ERROR: { code: 601, msg: "Usuário não encontrado (postgreSQL)." },

  EC_ORDER_CREATE_ERROR: { code: 610, msg: "EC_ORDER_CREATE_ERROR" },
  EC_ORDER_UPDATE_ERROR: { code: 611, msg: "EC_ORDER_UPDATE_ERROR" },

  FIREBASE_CREATE_ERROR: { code: 650, msg: "Erro no create de usuário no firebase." },
  FIREBASE_UPDATE_ERROR: { code: 651, msg: "Erro no update de usuário no firebase." },

  MUNDIPAGG_CREATE_USER_ERROR: { code: 670, msg: "Erro ao criar usuário na mundipagg." },
  MUNDIPAGG_CREATE_CARD_ERROR: { code: 671, msg: "Erro ao criar cartão na mundipagg." },
  MUNDIPAGG_FETCH_CARD_ERROR: { code: 672, msg: "Erro ao buscar cartão na mundipagg." }
};
