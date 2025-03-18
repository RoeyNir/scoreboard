let h = document.getElementById("count-el-h")
let g = document.getElementById("count-el-g")

let countH = 0
let countG = 0

function addH(points){
    countH += points
    h.innerText = countH
}

function addG(points){
    countG += points
    g.innerText = countG
}