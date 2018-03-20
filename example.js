/**
 * @author Kris Szafranski <kris@primeacademy.io>
 */
// leave out @class or it will be listed twice
// will alphabetize method names
class Circle
{
    /**
     * Create a Circle
     * @param {number} radius
     * @param {string} color
     */
    constructor(radius = 4, color = 'blue') {
        this.radius = radius;
        this.color = color;
    }

    // note three * breaks this bloc
    /**
     * Calculate the diameter of this circle
     * @returns {number} The diameter of this circle
     */
    diameter() {
        return this.radius * 2;
    }

    /**
     * Calculates the circumference of this circle using 2 pi r
     * @returns {number} The circumference of this circle 
     */
    circumference() {
        return 2 * Math.PI * this.radius
    }

    /**
     * Calculates the area of this circle using pi r^2
     * @returns {number} The area of this circle
     */
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}