const text = document.querySelectorAll('.text');

// Шрифт
const fontSelect = document.querySelector('.settings__form select');

fontSelect.onchange = () => {
    text.forEach(p => p.style.fontFamily = fontSelect.value);
};

// Размер шрифта
const fontSize = document.querySelector('#fontSize');

fontSize.oninput = () => {
    text.forEach(p => p.style.fontSize = fontSize.value + 'px');
};

// Цвет текста
const fontColor = document.querySelector('.settings__font-color');

fontColor.oninput = () => {
    text.forEach(p => p.style.color = fontColor.value);
};

// Межстрочный интервал
const lineHeight = document.querySelector('input[type="range"]');

lineHeight.oninput = () => {
    text.forEach(p => p.style.lineHeight = lineHeight.value + '%');
};

// Цвет фона
const bgRadios = document.querySelectorAll('.settings__background-color-label');

bgRadios.forEach(label => {
    label.onclick = () => {
        document.body.style.backgroundColor = getComputedStyle(label).backgroundColor;
    };
});

// Кнопка закрыть/открыть панель настроек
const closeBtn = document.querySelector('.settings__close');
const settingsPanel = document.querySelector('.content__settings');

closeBtn.onclick = () => {
    settingsPanel.classList.toggle('hidden');
};