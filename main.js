const jsdom = require("jsdom")
const canvas = require('canvas')
const dom2image = require('dom-to-image')
const { JSDOM } = jsdom;


(async () => {
    const dom = await JSDOM.fromFile('adv.html');
    const document = dom.window.document
    const replace = [
        'HTMLCanvasElement',
        'Element',
        'HTMLTextAreaElement',
        'HTMLInputElement',
        'SVGElement',
        'HTMLImageElement',
        'XMLSerializer',
        'Image',
        'CSSRule'
    ]
    for (let repl of replace) {
        global[repl] = dom.window[repl]
    }

    global.window = dom.window
    global.document = dom.window.document
    console.log('am here i guess');

    //global = dom.window

    try 
    {
        console.log('ehhhhhhhh')
    
        let dataURL = await dom2image.toPng(document.body)
        console.log('ehhhhhhhh')
        console.log(dataURL)
    } catch (error) {
        console.log(error)        
    }
    /* dom2image.toPng(document.body)
    .then(function (dataUrl) {
        console.log('am here i guess');
        
        console.log(dataUrl)
        console.log('am here i guess');
        
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
        console.log('am here i gue111ss');

    }); */

})()

