function combination(a, b) {
  let num = 1;
  for (let n = 1; n <= b; n++) {
    num *= (a - n + 1) / n;
  }
  return num;
}

var p_pre = document.getElementById('inputValue');
var a_pre = document.getElementById('inputValue2');
var c_pre = document.getElementById('inputValue3');
var p_val = p_pre.value;
var a_val = a_pre.value;
var c_val = c_pre.value;
const cor_list = [];

for (let i = 1; i <= 50; i++) {
  let cor = 0;
  if (i % 2 === 0) {
    let dwn = 0;
    for (let k = 1; k <= i + 1; k++) {
      dwn +=
        (1 - p_val) ** (k - 1) *
        p_val ** (i - k + 1) *
        combination(i, k - 1);
    }
    dwn -=
      (1 - p_val) ** (i / 2) *
      p_val ** (i / 2) *
      combination(i, i / 2);
    let up = 0;
    for (let k = 1; k <= i / 2; k++) {
      up +=
        (1 - p_val) ** (k - 1) *
        p_val ** (i - k + 1) *
        combination(i, k - 1);
    }
    let r = up / dwn;
    let x = combination(i, i / 2) * (1 - p_val) ** (i / 2) * p_val ** (i / 2);
    cor = (1 - x) * r + x * (a_val / c_val);
  } else {
    for (let k = 1; k <= (i + 1) / 2; k++) {
      cor +=
        (1 - p_val) ** ((i + 1) / 2 - k) *
        p_val ** ((i - 1) / 2 + k) *
        combination(i, (i + 1) / 2 - k);
    }
  }
  cor_list.push(cor);
}

// グラフ描画のためのライブラリを使用する例（chart.jsを使用）
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: Array.from({ length: 50 }, (_, i) => i + 1),
    datasets: [
      {
        label: "correct rate",
        data: cor_list,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
});

function redrawChart() {
var p_pre = document.getElementById('inputValue');
var a_pre = document.getElementById('inputValue2');
var c_pre = document.getElementById('inputValue3');
var p_val = p_pre.value;
var a_val = a_pre.value;
var c_val = c_pre.value;
const cor_list = [];

for (let i = 1; i <= 50; i++) {
  let cor = 0;
  if (i % 2 === 0) {
    let dwn = 0;
    for (let k = 1; k <= i + 1; k++) {
      dwn +=
        (1 - p_val) ** (k - 1) *
        p_val ** (i - k + 1) *
        combination(i, k - 1);
    }
    dwn -=
      (1 - p_val) ** (i / 2) *
      p_val ** (i / 2) *
      combination(i, i / 2);
    let up = 0;
    for (let k = 1; k <= i / 2; k++) {
      up +=
        (1 - p_val) ** (k - 1) *
        p_val ** (i - k + 1) *
        combination(i, k - 1);
    }
    let r = up / dwn;
    let x = combination(i, i / 2) * (1 - p_val) ** (i / 2) * p_val ** (i / 2);
    cor = (1 - x) * r + x * (a_val / c_val);
  } else {
    for (let k = 1; k <= (i + 1) / 2; k++) {
      cor +=
        (1 - p_val) ** ((i + 1) / 2 - k) *
        p_val ** ((i - 1) / 2 + k) *
        combination(i, (i + 1) / 2 - k);
    }
  }
  cor_list.push(cor);
}
    myChart.data.datasets[0].data = cor_list;
    myChart.update();
}
