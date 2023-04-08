class RenderArea {
    constructor(width, height, id, callbacks) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.setAttribute("id", id);
        this.ctx = this.canvas.getContext("2d");
        this.setUnitScale();
        this.setStartPoint(
            -this.canvas.width / 2 / this.unitScale.width, 
            -this.canvas.height / 2 / this.unitScale.height
        );
        if (callbacks) {
            this.addCallbacks(callbacks);
        }
    }

    addToPage() {
        document.querySelector("body").appendChild(this.canvas);
    }

    addCallbacks(callbacks) {
        this.canvas.addEventListener("mouseup", callbacks.onMouseUp);
        this.canvas.addEventListener("mousedown", callbacks.onMouseDown);
        this.canvas.addEventListener("mousemove", callbacks.onMouseMove);
        this.canvas.addEventListener("mouseout", callbacks.onMouseOut);
        this.canvas.addEventListener("wheel", callbacks.onMouseWheel);
    }

    setStartPoint(x, y) {
        this.startPoint = new Point(x, y);
    }

    getStartPoint() {
        return this.startPoint;
    }

    setUnitScale(width = 40, height = 40) {
        // size of 1 cartesian unit in pixels
        this.unitScale = { 
            width: width,  
            height: height
        }
        this.areaWidth = this.canvas.width / this.unitScale.width;
        this.areaHeight = this.canvas.height / this.unitScale.height;
    }

    getUnitScale() {
        return this.unitScale;
    }

    getAreaSize() {
        return {
            width: this.areaWidth,
            height: this.areaHeight
        }
    }

    x_c2p(x) {
        const offsetX = x - this.startPoint.x; // offset from left side of canvas
        return offsetX * this.unitScale.width;
    }

    y_c2p(y) {
        const offsetY = y - this.startPoint.y; // offset from bottom side of canvas
        return this.canvas.height - (offsetY * this.unitScale.height);
    }

    clear(color) {
        this.ctx.fillStyle = color || "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawLinePx(x1, y1, x2, y2, color, lineWidth) {
		this.ctx.beginPath();
		this.ctx.strokeStyle = color || "black";
		this.ctx.lineWidth = lineWidth || 1;
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
    };
    
    drawPointPx(x, y, radius, color, fill = true) {
        const pointColor = color || "black";
        const pointRadius = radius || 3;
		this.ctx.beginPath();
        this.ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
        if (fill) {
            this.ctx.fillStyle = pointColor;
            this.ctx.fill();
        }
        else {
            this.ctx.strokeStyle = pointColor;
            this.ctx.stroke();
        }
    };
    
	drawTextPx(x, y, text, color, textSize, font, textAlign, textBaseline, addStroke) {
		this.ctx.fillStyle = color || "black";
		this.ctx.strokeStyle = "black";
		this.ctx.lineWidth = 0.5;
        this.ctx.textAlign = textAlign || "start";
        this.ctx.textBaseline = textBaseline || "top";
		this.ctx.font = (textSize || 12) + "px " + (font || "Consolas");
		this.ctx.fillText(text, x, y);
		if (addStroke) {
			this.ctx.strokeText(text, x, y);
		}
    };
    
    drawLine(x1, y1, x2, y2, color, lineWidth) {
        this.drawLinePx(this.x_c2p(x1), this.y_c2p(y1), this.x_c2p(x2), this.y_c2p(y2), color, lineWidth);
    };

    drawPoint(x, y, radius, color, fill) {
        this.drawPointPx(this.x_c2p(x), this.y_c2p(y), radius * this.unitScale.width, color, fill);
    };
    
    drawText(x, y, text, color, textSize, font, textAlign, textBaseline, addStroke = false) {
		this.drawTextPx(this.x_c2p(x), this.y_c2p(y), text, color, textSize, font, textAlign, textBaseline, addStroke);
	};
}
