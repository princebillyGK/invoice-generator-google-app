function doGet(): GoogleAppsScript.HTML.HtmlOutput {
    return HtmlService.createHtmlOutputFromFile('frontend/index')
}
