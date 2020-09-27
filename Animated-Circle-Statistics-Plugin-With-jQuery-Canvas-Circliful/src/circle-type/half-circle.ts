import SvgTags from "../base-class/svg-tags";
import ObjectHelper from "../helper/object-helper";
import {StyleHelper} from "../helper/style-helper";
import SvgTagsHelper from "../helper/svg-tags-helper";
import SimpleCircle from "./simple-circle";

/**
 * Every circle gets dynamically called by the given type in the options object example: { type: 'HalfCircle' }
 */
class HalfCircle extends SimpleCircle {
    /**
     * @inheritDoc
     */
    public drawCircle() {
        const additionalContainerAttributes = {
            class: ObjectHelper.extractPropertyFromObject(this.additionalCssClasses, "svgContainer"),
        };
        this.drawContainer(additionalContainerAttributes);
        this.drawBackgroundCircle();
        this.drawForegroundCircle();
        this.drawText();
        this.append();
    }

    /**
     * @description Draws the background circle
     */
    public drawBackgroundCircle() {
        const startAngle = 270;
        const endAngle = 90;
        const customCssClass = ObjectHelper.extractPropertyFromObject(
            this.additionalCssClasses,
            "backgroundCircle",
        );
        const arc = SvgTags.addArc({
            "id": `bg-arc-${this.options.id}`,
            "d": SvgTagsHelper.describeArc(this.coordinates.x, this.coordinates.y, this.radius, startAngle, endAngle),
            "class": `background-circle ${customCssClass}`,
            "stroke-width": this.options.backgroundCircleWidth,
        });

        this.tags.push({
            element: arc,
            parentId: `svg-${this.options.id}`,
        });
    }

    /**
     * @description Draws the foreground circle by given percentage with optional animation
     */
    public drawForegroundCircle() {
        const endAngle = 180 / 100 * this.options.percent;
        const customCssClass = ObjectHelper.extractPropertyFromObject(
            this.additionalCssClasses,
            "foregroundCircle",
        );
        const arc = SvgTags.addArc({
            "id": `arc-${this.options.id}`,
            "class": `foreground-circle ${customCssClass}`,
            "d": SvgTagsHelper.describeArc(this.coordinates.x, this.coordinates.y, this.radius, 0, endAngle),
            "transform": `rotate(-90, ${this.coordinates.x}, ${this.coordinates.y})`,
            "stroke-width": this.options.foregroundCircleWidth,
            "stroke-linecap": this.options.strokeLinecap,
        });

        if (this.options.animation) {
            this.animate(arc);
        }

        this.tags.push({
            element: arc,
            parentId: `svg-${this.options.id}`,
        });
    }

    /**
     * @description Animates circle counter clock wise
     * @param arc
     */
    public animate(arc: Element) {
        StyleHelper.animateArc({
            arc,
            arcParams: {
                percent: this.options.percent,
                x: this.coordinates.x,
                y: this.coordinates.y,
                radius: this.radius,
                endAngleGrade: 180,
            },
            animationStep: this.options.animationStep,
            progressColors: this.options.progressColors,
        }, this.options.onAnimationEnd);
    }
}

export default HalfCircle;
