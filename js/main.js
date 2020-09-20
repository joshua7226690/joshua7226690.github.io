var n = 1;

function quiz(a) {
  var introduction, situation, options;
  switch (a) {
    case 1:
      introduction = '東華常出車禍的地方彎道與路口，彎中減速';
      situation = '東華大學外環車道常有彎道，如果有突發狀況必須減速時我應該';
      options = ['盡可能的讓機車垂直於路面，然後再煞車', '平順且逐漸地煞車，但不要施加與機車垂直於路面時候相同煞車力道', '以上皆是'];
      break;
    case 2:
      introduction = '停車再開';
      situation = '東華校內許多路口在地上設有停車再開的標示，如果行車經過時我應該？';
      options = ['減速慢行，確認路口沒有車輛後快速通過', '查看左右無來車後即可通過', '確實將車輛停下，並確實卻人左右無來車後快速通過', '以上皆是'];
      break;
    case 3:
      introduction = '禮讓行人';
      situation = '東華大學因腹地廣大，有許多不同的交通工具被使用，如果今天在路口遇到行人、腳踏車正要穿越時，我應該？';
      options = ['車輛暫停，禮讓行人', '加速通過，以防車輛回堵', '緩慢通過，禮讓行人', '以上皆是'];
      break;
    case 4:
      introduction = '腳踏車、機車不要併排，要開燈';
      situation = '當跟朋友騎乘機車或是腳踏車在東華校園或是志學街時，千萬不要！';
      options = ['併排騎車', '騎乘腳踏車時不裝設車燈', '以上皆是'];
      break;
    case 5:
      introduction = '志學方向燈';
      situation = '終於來到志學街吃飯了，看到左邊有位子要趕快停車，這個時候不能？';
      options = ['打左轉方向燈，趕快轉彎', '先打左轉方向燈，然後向右靠，等待沒車後轉彎', '以上皆是'];
      break;
  }

  document.getElementById("introduction").innerHTML = introduction;
  document.getElementById("situation").innerHTML = situation;
  document.getElementById("optionA").innerHTML = options[0];
  document.getElementById("optionB").innerHTML = options[1];
  document.getElementById("optionC").innerHTML = options[2];

  if (options.length == 4) {
    document.getElementById("btnD").style.display = "block";
    document.getElementById("optionD").innerHTML = options[3];
  } else {
    document.getElementById("btnD").style.display = "none";
  }
}

function wrong(a, b) {
  var reason;

  switch (a) {
    case 1:
      switch (b) {
        case 'A':
          reason = '此答案不完全正確，條件不允許很可能會打滑';
          break;
        case 'B':
          reason = '此答案不完全正確';
          break;
      }
      break;

    case 2:
      switch (b) {
        case 'A':
          reason = '行經路口時減速慢行這件事是沒有錯的，但在設有停車再開的標示時應確實將車輛停妥';
          break;
        case 'B':
          reason = '行經路口時應確認左右有無來車，但在設有停車再開的標示時應確實將車輛停妥';
          break;
        case 'D':
          reason = '雖然好像看起來都可以，但請再思考一下';
          break;
      }
      break;

    case 3:
      switch (b) {
        case 'B':
          reason = '如果加速通過的話可能會被警察開單，甚至發生車禍導致行人重傷，不要貪圖一時之快，毀了兩個家庭，爸爸麻麻會難過的';
          break;
        case 'C':
          reason = '雖然已經減慢速度，但是仍有車禍發生的可能，被警察抓到，這個月又要吃土了';
          break;
        case 'D':
          reason = '再回去看一次題目啦！看起來可以選以上皆是ㄇ';
          break;
      }
      break;

    case 4:
      switch (b) {
        case 'A':
          reason = '是沒錯啦，但答案只有這一個嗎？';
          break;
        case 'B':
          reason = '是對的啦，但答案只有這一個而已？';
          break;
        case 'C':
          reason = '';
          break;
      }
      break;

    case 5:
      switch (b) {
        case 'A':
          reason = '千萬不要打了方向燈馬上轉彎，這樣真的很三寶，打了燈不代表有絕對路權，不過該注意的不只這個';
          break;
        case 'B':
          reason = '千萬千萬不能這麼做，你都打左轉燈了大家一定會往右通行，如果這時還靠右鐵定會發生車禍，千萬不要當三寶，不過不能做的不只這個';
          break;
      }
      break;
  }

  alert('錯囉！\n' + reason);
}

function check(a, b) {
  if (a == 1 && b == 'C') {
    correct(1);
  } else if (a == 2 && b == 'C') {
    correct(2);
  } else if (a == 3 && b == 'A') {
    correct(3);
  } else if (a == 4 && b == 'C') {
    correct(4);
  } else if (a == 5 && b == 'C') {
    correct(5);
  } else {
    wrong(a, b);
  }
}

function correct(a) {
  document.getElementById("quiz").classList.remove('w3-display-middle');
  document.getElementById("quiz").classList.add('w3-display-left');
  document.getElementById("quiz").style.width = '50%';
  document.getElementById("quiz").style.marginLeft = '2em';
  document.getElementById("quiz").style.marginRight = '2em';
  document.getElementById("answer").style.display = "block";
  document.getElementById("next").disabled = false;

  var explanation = document.getElementById('explanation');
  explanation.innerHTML = '';
  switch (a) {
    case 1:
      var p1 = document.createElement('p');
      p1.appendChild(document.createTextNode('彎中煞車是非常危險的事情，當傾角越大的時候，'));
      p1.appendChild(document.createElement('br'));
      var img = document.createElement('img');
      img.src = 'img/1.JPG';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createTextNode('輪胎失去循跡力的可能性就越大。避免危險，入彎前車速不宜過快。'));
      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('為了要能夠快速且安全的在彎中停下來，根據道路以及交通狀況，您應該盡可能的讓機車垂直於路面，然後再煞車。如果條件不允許，應平順且逐漸地煞車，但不要施加與機車垂直於路面時候相同的煞車力道。當您變慢的時候，您可以減小您的傾角，當可以用於煞車的循跡力變多的時候，您就可以使用更多的煞車，如此當機車停下來的時候，應該會是垂直於路面，手把回正的狀態。'));
      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 2:
      var p1 = document.createElement('p');
      p1.appendChild(document.createTextNode('遇到「停」標記或是停車線，請先在那邊停車，然後再向前，在交叉路口與您車道會合的地方，再次停下。在那個地方將您的身體向前傾來查看建築物、停著的車子或是草叢，看看能不能看到有其他車流過來。在您在觀察的時候，確保您的前輪還沒有進入橫向路面。'));
      p1.appendChild(document.createElement('br'));
      var img = document.createElement('img');
      img.src = 'img/4.JPG';
      img.style.width = '100%';
      p1.appendChild(img);
      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('根據台灣交通法規：看到「停」的標誌，一定要停車，不遵守將開罰600元到1800元罰單'));
      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;

    case 3:
      var p1 = document.createElement('p');
      var img = document.createElement('img');
      img.src = 'img/15.JPG';
      img.style.width = '100%';
      p1.appendChild(img);
      p1.appendChild(document.createElement('br'));
      p1.appendChild(document.createTextNode('遇到行人穿越時，應該讓車輛暫停，禮讓行人，車輛不暫停禮讓行人先行通過，處1,200-3,600元罰鍰，禮讓行人是行車禮儀更是法規規範，不要為了那幾秒，跟錢包過不去阿！'));
      explanation.appendChild(p1);
      break;

    case 4:
      var p1 = document.createElement('p');
      p1.appendChild(document.createTextNode('不論行駛在東華校內或是志學街時，都不應該併排騎車，並且腳踏車應確實裝設前後車燈，機車應該全時點燈。'));
      explanation.appendChild(p1);
      break;

    case 5:
      var p1 = document.createElement('p');
      p1.appendChild(document.createTextNode('如果要左轉停車，應該先打方向燈後減速，待沒有車輛後再轉彎，千萬不要打了方向燈馬上轉彎，也不要先打左轉方向燈，然後向右靠，這些行為都很危險。'));
      var p2 = document.createElement('p');
      p2.appendChild(document.createTextNode('根據交通法規：轉彎時，至少距離交岔路口30公尺前即應顯示方向燈或手勢，如果不依規定使用燈光，將會依違反道路交通管理處罰條例42條，處新臺幣1,200~3,600元的罰鍰。'));
      p2.appendChild(document.createElement('br'));
      p2.appendChild(document.createTextNode('轉彎時，至少距離交岔路口30公尺前即應顯示方向燈或手勢，如果不依規定使用燈光，將會依違反道路交通管理處罰條例42條，處新臺幣1,200~3,600元的罰鍰。'));
      explanation.appendChild(p1);
      explanation.appendChild(p2);
      break;
  }
}

function next() {
  document.getElementById("next").disabled = true;
  quiz(n += 1);
  document.getElementById("quiz").classList.remove('w3-display-left');
  document.getElementById("quiz").classList.add('w3-display-middle');
  document.getElementById("quiz").style.width = null;
  document.getElementById("quiz").style.marginLeft = null;
  document.getElementById("quiz").style.marginRight = null;
  document.getElementById("answer").style.display = "none";
}