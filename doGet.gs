function doGet() {
  t = HtmlService.createTemplateFromFile('index.html');
  t.title = 'GAS-html-sample';
  t.data = JSON.stringify(getContent());
  
  return t.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getContent() {
  var properties = PropertiesService.getScriptProperties().getProperties();
  var values = SpreadsheetApp
  .openById(properties.SPREADSHEET_ID)
  .getActiveSheet()
  .getDataRange()
  .getValues();
  return Array.prototype.concat.apply([], values);
}
