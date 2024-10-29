# Saashq Gantt

### Install

```
npm install @saashq/gantt
```

### Usage

Include it in your HTML:

```
<script src="saashq-gantt.min.js"></script>
<link rel="stylesheet" href="saashq-gantt.css">
```

And start hacking:

```js
var tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
  ...
]
var gantt = new Gantt("#gantt", tasks);
```

You can also pass various options to the Gantt constructor:

```js
var gantt = new Gantt('#gantt', tasks, {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',
    date_format: 'YYYY-MM-DD',
    language: 'en', // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
    custom_popup_html: null,
});
```

You can add `dark` class to the container element to apply dark theme.

```html
<div class="gantt-target dark"></div>
```

## License: MIT
