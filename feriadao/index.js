const holidays = [
  { date: "1/1/2024", name: "Confraternização Universal" },
  { date: "2/10/2024", name: "Carnaval" },
  { date: "3/29/2024", name: "Páscoa" },
  { date: "4/21/2024", name: "Tiradentes" },
  { date: "5/1/2024", name: "Dia do trabalho" },
  { date: "5/13/2024", name: "Dia do vídeo!" },
  { date: "5/30/2024", name: "Corpus Christi" },
  { date: "9/7/2024", name: "Independência do Brasil" },
  { date: "10/12/2024", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2024", name: "Finados" },
  { date: "11/15/2024", name: "Proclamação da República" },
  { date: "12/25/2024", name: "Natal" }
];

function isItHolidayToday() {
  const today = new Date().toLocaleDateString("en-us");
  const holiday = holidays.find((holiday) => holiday.date === today)
  if (holiday) return `Sim, hoje é ${holiday.name} 🥳`;

  return "Não, não é 😢";
}

module.exports = { isItHolidayToday };