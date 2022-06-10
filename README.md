# TextLib

Download and import in your project root using the command `npm install <file-route>`
Add to imports in app.module.ts or corresponding module.

Source code can be found in [projects/text/src/lib](https://github.com/Batman-exe/textLib/tree/0.0.1/projects/text/src/lib)


## Use

You can call the library using <text></text> tag, these are the inputs allowed:

##### content 
Used for text content (string mandatory)

##### customClass
Used for type of text (string mandatory)

Allowed classes:
h1
h2
h3
h4 or h4-medium (both are the same)
h4-regular
body1
body2
button
caption
caption-10 (same as caption but font-size: 12px)

##### customColor
Boolean used to indicate if you are using a different color in local css, false if you want to use default color from UI KIT 1.0, true otherwise.


### Sample
<text [customClass]="'h1'" [content]="'My text'"></text>

further samples could be found in [src/app/app.component.html](https://github.com/Batman-exe/textLib/blob/0.0.1/src/app/app.component.html)
