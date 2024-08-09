document.addEventListener("DOMContentLoaded", function (event) {
  const formatDate = (d) => (d < 10 ? `0${d}` : d);
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const colors = [
    "text-cyan-500",
    "text-green-500",
    "text-red-400",
    "text-orange-400",
  ];
  let currentColorIndex = 0;
  let currentTimeColorIndex = colors.length - 1;
  setInterval(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    document.getElementById("hours").innerHTML = formatDate(hours);
    document.getElementById("minutes").innerHTML = formatDate(minutes);
    document.getElementById("seconds").innerHTML = formatDate(seconds);

    document.getElementById("day").innerHTML = formatDate(day);
    document.getElementById("month").innerHTML = months[month];
    document.getElementById("year").innerHTML = year;
  }, 1000);

  changeColor = (el) => {
    el.classList.remove(colors[currentColorIndex]);
    currentColorIndex++;
    if (currentColorIndex > colors.length - 1) {
      currentColorIndex = 0;
    }
    el.classList.add(colors[currentColorIndex]);
  };

  changeTimeColor = (el) => {
    el.classList.remove(colors[currentTimeColorIndex]);
    currentTimeColorIndex--;
    if (currentTimeColorIndex < 0) {
      currentTimeColorIndex = colors.length - 1;
    }
    el.classList.add(colors[currentTimeColorIndex]);
  };
});
