class C2H2{
    readonly carbonCount: number;
    readonly hydrogenCount: number;
}
class C4H2 implements C2H2 {
    readonly carbonCount: number = 4;
    readonly hydrogenCount: number = 2;
}
class C6H2 implements C2H2 {
    readonly carbonCount: number = 6;
    readonly hydrogenCount: number = 2;
}
void function *generateC2H2(){
    yield new C2H2()
    yield new C4H2()
    yield new C6H2()
}