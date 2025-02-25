---
title: Date Picker
keywords:
  - form
  - date-picker
custom_edit_url: null
---

Use this component when you wish to collect date values. The format of a submitted value is `YYYY-MM-DD`.

The `name` attribute indicates how to reference this component in the query arguments: `q.args.<name-attr>`. 

You can see the API for [ui.date_picker](/docs/api/ui#date_picker) or check the interactive example in Tour app.

## Basic date picker

```py
q.page['example'] = ui.form_card(box='1 1 2 2', items=[
    ui.date_picker(name='date_picker', label='Date picker')
])
```

## Setting initial values

Use the `value` attribute to control the preselected state of the date picker.

```py
q.page['example'] = ui.form_card(box='1 1 2 2', items=[
    ui.date_picker(name='date_picker', label='Date picker', value='2021-10-19')
])
```

## Disabled date picker

Use the `disabled` attribute to indicate that the date_picker is read-only or not actionable yet (e.g.
waiting for a user to fill in other form items).

```py
q.page['example'] = ui.form_card(box='1 1 2 2', items=[
    ui.date_picker(name='date_picker', label='Date picker', disabled=True)
])
```
