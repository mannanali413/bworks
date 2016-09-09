import Circle from './Circle';
import Square from './Square';
import Rectangle from './Rectangle';
import Ellipse from './Ellipse';
 
export default class ShapeFactory {
    /**
     * This is a static method. This means we can call this method directly on the ShapeFactory class.
     * @param shapeType - What type of shape we want to create.
     * @returns {Shape} - The created shape object.
     */
    static getShape(shapeType) {
        switch (shapeType) {
            
            case 'circle':
                return new Circle();

            case 'square':
                return new Square();
            
            case 'rectangle':
                return new Rectangle();

            case 'ellipse':
                return new Ellipse()

            default:
                throw new Error(`${shapeType} will be implemented in future`);
        }
    }

    static getAllShapesList(){
        return ['circle', 'square', 'rectangle', 'ellipse']
    }
}