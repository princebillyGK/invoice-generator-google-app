function include(filename: string, params?: { [key: string]: any }): string {
    /*  includes partial html template */
    return {...HtmlService.createTemplateFromFile(filename), ...params}
        .evaluate().getContent()
}

