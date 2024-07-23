function changeSvg(element, arg) {
    if (arg === "hide") {
        return returnLength(element, "hide");
    } else if (arg === "hide-multiple") {
        element.forEach((e) => {
            returnLength(e, "hide");
        });
        return returnLength(element[0]);
    } else {
        return returnLength(element);
    }
}

function returnLength(element, arg) {
    let length = 0;
    const tg = element.tagName;
    if (tg === "line") {
        let line = element;
        let x1 = parseFloat(line.getAttribute("x1"));
        let y1 = parseFloat(line.getAttribute("y1"));
        let x2 = parseFloat(line.getAttribute("x2"));
        let y2 = parseFloat(line.getAttribute("y2"));
        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    } else if (tg === "path") {
        let path = element;
        length = path.getTotalLength();
    } else if (tg === "polyline") {
        let points = element.points;
        for (let i = 0; i < points.numberOfItems - 1; i++) {
            let p1 = points.getItem(i);
            let p2 = points.getItem(i + 1);
            length += Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        }
    } else if (tg === "text" || tg === "tspan") {
        length = element.getComputedTextLength();
    }

    if (arg === "hide") {
        element.style.strokeDasharray = length + " " + length;
        element.style.strokeDashoffset = length;
    }

    return length;
}