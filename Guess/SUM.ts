import 'det1234'
import 'det5678'
import 'det9101112'
import 'one'
import 'OppOOne'
import 'pyramid'
import 'square'
import 'AntiSquare'
import 'AntiPyramid'
import 'tri'
import 'AntiTri'
const DET = 'det1234'+'det5678'+'det9101112'
const tri = 'tri - AntiTri'
const DETTri = 'DET * tri'
const triDET = 'tri % DET'
const ONE = 'one' + 'OppOOne'
const Square = 'square * AntiSquare'
export const Pyramid = 'pyramid % AntiPyramid'
export const ONEsquare = 'ONE * square'
export const squareONE = 'square % ONE'
export const OppOPyramid = 'AntiPyramid / pyramid'
export const dimPyramid = 'square - AntiSquare'
void function SUM(){
    void ['DET/tri + tri/DET' === DETTri + triDET]
    void [DETTri + ONEsquare === squareONE + triDET]
    void [Pyramid === OppOPyramid + dimPyramid]
    return SUM
}
