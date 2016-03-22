# Directive : lazy control

This directive aims to ease forms declaration by reducing boilerplate HTML.
The directive will take care of the field layout and will guarantee that every form fields have the same HTML structure.
Here are some example :

```
<input
	type="text"
	placeholder="Foobar ?"
	ng-model="entity.slug"
	lazy-control
	lazy-control-label-key="FOOBAR"
	lazy-control-help-text="There you should set the foo."
/>
```
The attribute *data-lazy-control-help-text* is optional.


```
<input
	type="checkbox"
	ng-model="entity.remember"
	checked
	lazy-control
	lazy-control-label="Remember me"
/>
```

This should work for text input (mail, number, regexp, mail, url, ...), textarea, select, checkbox and radio.
 