

window.onload = function () {
    const timer = setInterval(() => {
        const vocabularies = document.querySelectorAll("span.css-18tpl2u")
        if (vocabularies && vocabularies.length != 0) {
            clearTimeout(timer);

            let text = '';
            vocabularies.forEach(function (element, index) {
                text += element.textContent;
                if (index < vocabularies.length - 1) {
                    text += '|'
                }
            });
            const re = new RegExp(text, 'ig');
            const spans = document.querySelector('#windowexercise-2 > div > div > div > div:nth-child(3) > div')
            for (const element of spans.children) {
                if (element.tagName != 'P') {
                    continue
                }
                const allMatchItr = [...element.innerText.trim().matchAll(re)]
                let innerElementText = element.innerText
                for (match of allMatchItr) {
                    innerElementText = innerElementText.replace(match[0], "<b>" + match[0] + "</b>")
                }
                element.innerHTML = innerElementText
            }
        } else {
            console.log("cannot find the element, querying again in 150ms.");
        }
    }, 1500);
}