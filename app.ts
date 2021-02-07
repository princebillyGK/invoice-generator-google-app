function doGet(e): GoogleAppsScript.HTML.HtmlOutput {
    const commonParams = {
        SCRIPT_URL : ScriptApp.getService().getUrl()
    }
    try {
        let html = HtmlService.createTemplateFromFile(`frontend/${e.parameter["page"] || "index"}`)
        return {...html, ...commonParams}.evaluate()
    } catch (e) {
        Logger.log(e);
        let html = HtmlService.createTemplateFromFile(`frontend/404`)
        return {...html, ...commonParams}.evaluate()
    }
}

