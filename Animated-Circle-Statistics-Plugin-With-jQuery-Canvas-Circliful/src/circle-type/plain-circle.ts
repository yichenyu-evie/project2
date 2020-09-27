import {BaseCircle} from "../base-class/base-circle";
import SvgTags from "../base-class/svg-tags";
import ObjectHelper from "../helper/object-helper";
import {StyleHelper} from "../helper/style-helper";
import SvgTagsHelper from "../helper/svg-tags-helper";
import {IAvailableOptions} from "../interface/iavailable-options";
import {ISize} from "../interface/isize";

/**
 * Every circle gets dynamically called by the given type in the options object example: { type: 'PlainCircle' }
 */
class PlainCircle extends BaseCircle {
    private coordinates = {
        x: 0,
        y: 0,
    };
    protected radius: number;
    protected additionalCssClasses: IAvailableOptions["additionalCssClasses"] = {};

    /**
     * @inheritDoc
     */
    public initialize(options: IAvailableOptions, size: ISize) {
        super.initialize(options, size);

        const maxSize = this.size.maxSize;
        this.coordinates = {
            x: maxSize / 2,
            y: maxSize / 2,
        };
        this.radius = maxSize / 2.2;

        if (this.options.additionalCssClasses) {
            this.additionalCssClasses = this.options.additionalCssClasses;
        }

        this.animateInView();
    }

    /**
     * @inheritDoc
     */
    public drawCircle() {
        this.drawContainer();
        this.drawPlainCircle();
        this.append();
    }

    /**
     * @description Draws the circle by given percentage with optional animation
     */
    public drawPlainCircle() {
        const startAngle = this.options.startAngle ? this.options.startAngle : 0;
        const endAngle = 360 / 100 * this.options.percent + Number(startAngle);
        const customCssClass = ObjectHelper.extractPropertyFromObject(
            this.additionalCssClasses,
            "foregroundCircle",
        );
        const arc = SvgTags.addArc({
            "id": `arc-${this.options.id}`,
            "class": `foreground-circle ${customCssClass}`,
            "d": SvgTagsHelper.describeArc(this.coordinates.x, this.coordinates.y, this.radius, startAngle, endAngle),
            "stroke-width": this.options.foregroundCircleWidth,
            "stroke-linecap": this.options.strokeLinecap,
        });

        if (this.options.animation && !this.options.startAngle) {
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
            },
            animationStep: this.options.animationStep,
            progressColors: this.options.progressColors,
        }, this.options.onAnimationEnd);
    }
}

export default PlainCircle;
