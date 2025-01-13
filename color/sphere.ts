import './color/Green'
import './color/Blue'
import './color/Red'
import './color/anti'
void function SpherePoint(r: number, theta: number, fai: number):
    { x: number, y: number, z: number,T:number} {
    let x = r * Math.cos(fai)
    let y = r * Math.sin(theta)
    let z = r * Math.sin(theta) * Math.cos(fai)
    let T = r * Math.sin(theta) * Math.sin(fai)
    return { x, y, z, T}
}
void function xyz(){
    this.x = new Red
    this.y = new Green
    this.z = new Blue
    this.T = new white
}
void function SphereRadius(x:number, y:number, z:number){
    const SphereRadiusX = Math.sin(x) + Math.cos(y) 
    const SphereRadiusY = Math.sin(y) + Math.cos(x) 
    const SphereRadiusZ = Math.sin(z) + Math.cos(y)
    return [0,0,0]
}
