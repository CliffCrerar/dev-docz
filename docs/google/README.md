Google Dev stuff
================

Developer resources related to Google and the google cloud.

# G script

https://www.freecodecamp.org/news/use-google-sheets-and-google-apps-script-to-build-a-blog-cms-c2eab3fb0b2b/

"https://codelabs.developers.google.com/codelabs/apps-script-intro/#0"

"https://support.office.com/en-us/article/connect-to-a-web-page-power-query-b2725d67-c9e8-43e6-a590-c0a175bd64d8"

"https://developers.google.com/apps-script/guides/videos"

https://github.com/GoogleCloudPlatform/google-cloud-node-todos

https://github.com/sebelga/gstore-api

https://github.com/sebelga/gstore-node

https://github.com/googleapis/google-cloud-kvstore




https://googleapis.dev/nodejs/googleapis/latest/

## Logging

logging.gs

```js
// [START apps_script_logging]
/**
 * Logs the time taken to execute 'myFunction'.
 */
function measuringExecutionTime() {
  // A simple INFO log message, using sprintf() formatting.
  console.info('Timing the %s function (%d arguments)', 'myFunction', 1);

  // Log a JSON object at a DEBUG level. The log is labeled
  // with the message string in the log viewer, and the JSON content
  // is displayed in the expanded log structure under "structPayload".
  var parameters = {
      isValid: true,
      content: 'some string',
      timestamp: new Date()
  };
  console.log({message: 'Function Input', initialData: parameters});

  var label = 'myFunction() time'; // Labels the timing log entry.
  console.time(label); // Starts the timer.
  try {
    myFunction(parameters); // Function to time.
  } catch (e) {
    // Logs an ERROR message.
    console.error('myFunction() yielded an error: ' + e);
  }
  console.timeEnd(label); // Stops the timer, logs execution duration.
}
// [END apps_script_logging]

// [START apps_script_logging_2]
/**
 * Logs Google Sheet information.
 * @param {number} rowNumber The spreadsheet row number.
 * @param {string} email The email to send with the row data.
 */
function emailDataRow(rowNumber, email) {
  Logger.log('Emailing data row ' + rowNumber + ' to ' + email);
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var rowData = data[rowNumber-1].join(" ");
  Logger.log('Row ' + rowNumber + ' data: ' + rowData);
  MailApp.sendEmail(email,
                    'Data in row ' + rowNumber,
                    rowData);
}
// [END apps_script_logging_2]
```

## UI Webapp

code.gs

```js
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
```

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    Hello, World!
  </body>
</html>
```

# UI Sidebar

code.gs

```js
// Use this code for Google Docs, Slides, Forms, or Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}
```

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    Hello, World!
    <input type="button" value="Close"
        onclick="google.script.host.close()" />
  </body>
</html>

```


## Printing scriplets

scriptlet.html

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    Hello, World! The time is <?= new Date() ?>.
  </body>
</html>
```

standard_scriptlet.html

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>
    <?= 'My favorite Google products:' ?>
    <? var data = ['Gmail', 'Docs', 'Android'];
      for (var i = 0; i < data.length; i++) { ?>
        <b><?= data[i] ?></b>
    <? } ?>
  </body>
</html>
```

## forms

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script>
      // Prevent forms from submitting.
      function preventFormSubmit() {
        var forms = document.querySelectorAll('form');
        for (var i = 0; i < forms.length; i++) {
          forms[i].addEventListener('submit', function(event) {
            event.preventDefault();
          });
        }
      }
      window.addEventListener('load', preventFormSubmit);

      function handleFormSubmit(formObject) {
        google.script.run.withSuccessHandler(updateUrl).processForm(formObject);
      }
      function updateUrl(url) {
        var div = document.getElementById('output');
        div.innerHTML = '<a href="' + url + '">Got it!</a>';
      }
    </script>
  </head>
  <body>
    <form id="myForm" onsubmit="handleFormSubmit(this)">
      <input name="myFile" type="file" />
      <input type="submit" value="Submit" />
    </form>
    <div id="output"></div>
 </body>
</html>
```

code.gs

```js
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function processForm(formObject) {
  var formBlob = formObject.myFile;
  var driveFile = DriveApp.createFile(formBlob);
  return driveFile.getUrl();
}
``

## Dialogs

index.html

```html
```

dialogs.gs

```js
```
menu.gs

```js
```

page.html
```js
```

