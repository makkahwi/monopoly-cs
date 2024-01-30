import service from ".";
const { demoStatus } = require("api");

const joinGame = async (data) => {
  switch (demoStatus) {
    case true:
      return {
        id: 100,
        name: "Suhaib",
        role: "Player",
        game: "thisIsGameCode",
        initialCredit: 1000,
        roundBonus: 200,
        players: [
          { id: 90, name: "Ali", status: "Active" },
          { id: 91, name: "Yaser", status: "Lost" },
          { id: 100, name: "Suhaib", status: "Active" },
        ],
      };
    default:
      return service.post("/join-game", data);
  }
};

const createGame = async (data) => {
  switch (demoStatus) {
    case true:
      return {
        id: 105,
        name: "Suhaib",
        role: "Banker",
        game: "thisIsGameCode",
        initialCredit: 1000,
        roundBonus: 200,
        players: [{ id: 105, name: "Suhaib" }],
      };
    default:
      return service.post("/create-game", data);
  }
};

const sendCredit = async (data) => {
  switch (demoStatus) {
    case true:
      return {
        id: 5,
        from: "Suhaib",
        to: data.recipient,
        amount: data.amount,
        note: data.note,
      };
    default:
      return service.post("/send-credit", data);
  }
};

const requestFromBank = async (data) => {
  switch (demoStatus) {
    case true:
      return {
        id: 6,
        to: "Suhaib",
        amount: data.amount,
        note: data.note,
      };
    default:
      return service.post("/request-from-bank", data);
  }
};

const bankRequests = async () => {
  switch (demoStatus) {
    case true:
      return [
        {
          id: 4,
          to: "Suhaib",
          amount: 200,
          note: "Round",
          status: "Rejected",
        },
        {
          id: 5,
          to: "Suhaib",
          amount: 200,
          note: "Round",
          status: "Accepted",
        },
        {
          id: 6,
          to: "Suhaib",
          amount: 100,
          note: "Mortgage",
          status: "Waiting",
        },
      ];
    default:
      return service.get("/bank-requests");
  }
};

const addCredit = async (data) => {
  switch (demoStatus) {
    case true:
      return {
        id: 6,
        from: "Bank",
        to: data.recipient,
        amount: data.amount,
        note: data.note,
      };
    default:
      return service.post("/add-credit", data);
  }
};

const getTransactions = async () => {
  switch (demoStatus) {
    case true:
      return [
        {
          id: 5,
          from: "Bank",
          to: "Suhaib",
          amount: 200,
          note: "round",
        },
        {
          id: 6,
          from: "Suhaib",
          to: "Bank",
          amount: 200,
          note: "Mortgage",
        },
      ];
    default:
      return service.get("/transactions");
  }
};

const getPlayers = async () => {
  switch (demoStatus) {
    case true:
      return [
        { id: 90, name: "Ali", status: "Active" },
        { id: 91, name: "Yaser", status: "Lost" },
        { id: 100, name: "Suhaib", status: "Active" },
      ];
    default:
      return service.get("/players");
  }
};

const getBankInfo = async () => {
  switch (demoStatus) {
    case true:
      return { id: 1, name: "Bank", status: "Active" };
    default:
      return service.get("/bank-info");
  }
};

export {
  joinGame,
  createGame,
  sendCredit,
  requestFromBank,
  bankRequests,
  addCredit,
  getTransactions,
  getPlayers,
  getBankInfo,
};
