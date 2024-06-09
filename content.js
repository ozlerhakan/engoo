

window.onload = function () {
    const intervalId = setInterval(() => {
        const vocabularies = document.querySelectorAll("span.css-18tpl2u")
        if (vocabularies && vocabularies.length != 0) {
            clearTimeout(intervalId);

            let text = '';
            vocabularies.forEach(function (element, index) {
                text += '( ' + element.textContent + ')';
                if (index < vocabularies.length - 1) {
                    text += '|'
                }
            });
            const re = new RegExp(text, 'ig');
            let spans = document.querySelector('#windowexercise-2 > div > div > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(2)')
            if (spans == undefined) {
                spans = document.querySelector('#windowexercise-2 > div > div > div:nth-child(2) > div')
                if (spans == undefined) {
                    return;
                }
            }
            for (const element of spans.children) {
                const allMatchItr = [...element.innerText.trim().matchAll(re)]
                let innerElementText = element.outerHTML
                for (match of allMatchItr) {
                    innerElementText = innerElementText.replace(match[0], " <b style='font-site:40px; font-family: Helvetica,Arial,sans-serif;text-decoration:none;color:#ffffff;padding:0px4px;display:inline-block;background-color:#eb4034'>" + match[0] + "</b> ")
                }
                element.innerHTML = innerElementText
            }
        } else {
            console.log("cannot find the element, querying again in 2000ms.");
        }
    }, 2000);
}