import './color/Green'
import './color/Blue'
import './color/Red'
import './color/anti'
void function SpherePoint(r: number, theta: number, fai: number):
    { x: number, y: number, z: number,T:number} {
    let x = r * Math.sin(theta) * Math.cos(fai)
    let y = r * Math.sin(theta) * Math.sin(fai)
    let z = r * Math.cos(fai)
    let T = r * Math.sin(theta)
    return { x, y, z, T}
}
void function xyz(){
    let Red = this.x
    let Green = this.y
    let Blue = this.z
    let anti = this.T
}
void function SphereRadius(x:number, y:number, z:number){
    const SphereRadiusX = Math.sin(x) + Math.cos(y) 
    const SphereRadiusY = Math.sin(y) + Math.cos(x) 
    const SphereRadiusZ = Math.sin(z) + Math.cos(y)
    return [0,0,0]
}
