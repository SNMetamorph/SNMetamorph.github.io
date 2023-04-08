class Plot {
    constructor() {
        this.renderArea = new RenderArea(
            document.body.clientWidth, 
            document.body.clientHeight, 
            "plot2d-canvas",
            {
                onMouseUp: () => this.onMouseUp(),
                onMouseDown: () => this.onMouseDown(),
                onMouseMove: (event) => this.onMouseMove(event),
                onMouseOut: () => this.onMouseOut(),
                onMouseWheel: (event) => this.onMouseWheel(event)
            }
        );
        this.canDragPlot = false;
        this.renderArea.addToPage();
        this.applyColorTheme();
    }

    applyColorTheme(theme) {
        this.colorTheme = theme || {
            background: "#090c10",
            gridLine: "#30363d",
            axisLine: "#6a8095",
            menuBackground: "#161b22",
            menuText: "#c9d1d9",
            axisValuesText: "#ffffff",
            gridLineWidth: 1,
            axisLineWidth: 2
        };
        document.getElementById("plot2d-menu").style.color = this.colorTheme.menuText;
        document.getElementById("plot2d-menu").style.backgroundColor = this.colorTheme.menuBackground;
    }

    onMouseMove(event) {
        if (!this.canDragPlot) {
            return;
        }
        const startPoint = this.renderArea.getStartPoint();
        startPoint.x += -event.movementX / this.renderArea.getUnitScale().width;
        startPoint.y += event.movementY / this.renderArea.getUnitScale().height;
        this.renderArea.setStartPoint(startPoint.x, startPoint.y);
        this.mouseX = startPoint.x + (event.offsetX / this.renderArea.getUnitScale().width);
        this.mouseY = startPoint.y + (event.offsetY / this.renderArea.getUnitScale().height);
        this.render();
    }

    onMouseUp() {
        this.canDragPlot = false;
    }

    onMouseDown() {
        this.canDragPlot = true;
    }

    onMouseOut() {
        this.canDragPlot = false;
    }

    onMouseWheel(event) {
        // const zoomFactorStep = 0.1;
        // const zoomFactor = event.deltaY > 0 ? 1 - zoomFactorStep : 1 + zoomFactorStep;
        const scaleStep = 5;
        const zoomStep = event.deltaY > 0 ? -scaleStep : scaleStep;
        const unitScale = this.renderArea.getUnitScale();
        const newUnitScale = { 
            width: unitScale.width + zoomStep,
            height: unitScale.height + zoomStep
        }
        
        if (newUnitScale.width > 1 && newUnitScale.height > 1)
        {
            const startPoint = this.renderArea.getStartPoint();
            const oldAreaSize = this.renderArea.getAreaSize();
            this.renderArea.setUnitScale(newUnitScale.width, newUnitScale.height);
            const areaSizeDelta = {
                width: this.renderArea.getAreaSize().width - oldAreaSize.width,
                height: this.renderArea.getAreaSize().height - oldAreaSize.height
            } 
            this.renderArea.setStartPoint(
                startPoint.x - areaSizeDelta.width / 2, 
                startPoint.y - areaSizeDelta.height / 2
            );
            this.render();
        }
    }

    render() {
        this.renderArea.clear(this.colorTheme.background);
        this.renderGrid(this.colorTheme.gridLine, this.colorTheme.gridLineWidth);
        this.renderAxis(this.colorTheme.axisLine, this.colorTheme.axisLineWidth);
    }

    getClosestValueFromRange(value, range) {
        let minDistanceValue = range[0];
        let minDistance = Math.abs(value - range[0]);
        range.forEach((elem) => {
            const distance = Math.abs(elem - value);
            if (distance < minDistance) {
                minDistanceValue = elem;
                minDistance = distance;
            }
        });
        return minDistanceValue;
    }

    getGridStepSize() {
        let stepSize = {}
        const unitScale = this.renderArea.getUnitScale();
        let cellsPerUnit = {
            x: Math.floor(unitScale.width / 40),
            y: Math.floor(unitScale.height / 40)
        }

        // x1, x2, x4, x5, x8, x10, x20, x40, x50, x80
        const scaleFactors = [1, 2, 4, 5, 8];
        const levelX = Math.floor((cellsPerUnit.x - 1) / 20);
        const levelY = Math.floor((cellsPerUnit.y - 1) / 20);
        const ax = this.getClosestValueFromRange(cellsPerUnit.x / Math.pow(10, levelX), scaleFactors) * Math.pow(10, levelX);
        const ay = this.getClosestValueFromRange(cellsPerUnit.y / Math.pow(10, levelY), scaleFactors) * Math.pow(10, levelY);
        console.log("c ", cellsPerUnit.x, " ax ", ax, " ay ", ay);
        stepSize.x = 1 / ax;
        stepSize.y = 1 / ay;
        return stepSize;
    }

    renderGrid(color, width) {
        const startX = Math.floor(this.renderArea.getStartPoint().x);
        const startY = Math.floor(this.renderArea.getStartPoint().y);
        const endX = Math.ceil(startX + this.renderArea.getAreaSize().width) + 1;
        const endY = Math.ceil(startY + this.renderArea.getAreaSize().height) + 1;
        const stepSize = this.getGridStepSize();
        const fontSize = 12;
        const marginDown = 4 / this.renderArea.getUnitScale().height;
        const marginLeft = 4 / this.renderArea.getUnitScale().width;

        this.renderArea.drawText(-marginLeft, -marginDown, 0, this.colorTheme.axisValuesText, fontSize, undefined, "right", "top");
        for (let i = startX; i <= endX; i += stepSize.x) { 
            if (Math.abs(i) < 0.000001) {
                continue;
            }
            this.renderArea.drawLine(i, startY, i, endY, color, width); // vertical lines
            this.renderArea.drawText(i, -marginDown, +i.toFixed(5).toString(), this.colorTheme.axisValuesText, fontSize, undefined, "center", "top");
        }
        for (let i = startY; i <= endY; i += stepSize.y) {
            if (Math.abs(i) < 0.000001) {
                continue;
            }
            this.renderArea.drawLine(startX, i, endX, i, color, width); // horizontal lines
            this.renderArea.drawText(-marginLeft, i, +i.toFixed(5).toString(), this.colorTheme.axisValuesText, fontSize, undefined, "right", "middle");
        }
    }

    renderAxis(color, width) {
        const startX = Math.floor(this.renderArea.getStartPoint().x);
        const startY = Math.floor(this.renderArea.getStartPoint().y);
        const endX = Math.ceil(startX + this.renderArea.getAreaSize().width) + 1;
        const endY = Math.ceil(startY + this.renderArea.getAreaSize().height) + 1;
        this.renderArea.drawLine(startX, 0, endX, 0, color, width);
        this.renderArea.drawLine(0, startY, 0, endY, color, width);
    }
}
