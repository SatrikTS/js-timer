(function() {
  const startButton = document.querySelector('.start');
  const stopButton = document.querySelector('.stop');
  const stats = document.querySelector('.stats');
  const timeArea = document.querySelector('.time-area');
  let time = 0;
  let timerId = null;
  let activeTimer = false;


  function template() {
    template.count = template.count ? ++template.count : 1;
    /*
    * Считаем количество запусков функции
    * Функция - это обьект. Поэтому храним счетчик в обьекте функции.
    */

    const li = document.createElement('li');
    const b = document.createElement('b');
    const span = document.createElement('span');
    span.innerText = `${time.toFixed(2)} секунд`;
    b.innerText = `${template.count} - `;
    li.appendChild(b);
    li.appendChild(span);
    return li;
  }

  startButton.addEventListener('click', () => {
    if (activeTimer) return; //Если таймер уже был запущен, то ничего не делать
    activeTimer = true;
    timerId = setInterval( () => {
      time += 0.01;
      timeArea.innerText = time.toFixed(2);
    }, 10);
  });

  stopButton.addEventListener('click', () => {
    if (time == 0) return;
    activeTimer = false;
    clearInterval(timerId);
    stats.appendChild( template() );
    timeArea.innerText = '';
    time = 0;
  });
})();

