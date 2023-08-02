
const Percent =document.getElementById('Percent');
const CE =document.getElementById('CE');
const C =document.getElementById('C');
const Backspace =document.getElementById('Backspace');
const Division =document.getElementById('Division');
const Radical =document.getElementById('Radical');
const Multiplication =document.getElementById('Multiplication');
const Square =document.getElementById('Square');
const Minus =document.getElementById('Minus');
const Cube =document.getElementById('Cube');
const Sum =document.getElementById('Sum');
const Reciprocal =document.getElementById('Reciprocal');
const SumMinus =document.getElementById('Sum-Minus');
const Dot =document.getElementById('Dot');
const Equal =document.getElementById('Equal'); 

const InputNumber=document.querySelector(".zero");
const numberArray=document.querySelectorAll('.btn');

const state = {
    firstNumber: "",
    secondNumber: "",
    result: "",
    operator: "",
};
let calculationMemory = [];

const shownum = () => {
    if (state.operator === "") {
        InputNumber.textContent = state.firstNumber;
    } else {
        InputNumber.textContent = state.secondNumber;
    }
};

numberArray.forEach((el) => {
    el.addEventListener("click", () => {
        if(state.firstNumber=="0"  && state.operator){
            state.firstNumber="0";
            state.secondNumber += el.textContent;
            state.secondNumber=parseInt(state.secondNumber, 10);
        }
        if (state.firstNumber!="0" && state.firstNumber === "" && state.operator === "") {
            InputNumber.textContent += el.textContent;
        }
        if (state.firstNumber!="0" &&state.operator && state.firstNumber) {
            state.secondNumber += el.textContent;
        } else if (state.firstNumber!="0"){
            state.firstNumber += el.textContent;
        }
        
        if (state.result) {
            state.firstNumber === state.result;
            state.result = "";
            state.secondNumber = "";
            if (state.firstNumber === "" && state.operator === "") {
            InputNumber.textContent += el.textContent;
            }
            if (state.operator && state.firstNumber) {
            state.secondNumber += el.textContent;
            } else {
            state.firstNumber += el.textContent;
            }
        }
    shownum();

    });
});

const ShowComputing=document.querySelector(".ShowComputing");

function addfunction() {
    state.operator = "+";
    if (!state.secondNumber) {
        state.secondNumber = InputNumber.textContent;
    }
    const sum = Number(state.firstNumber) + Number(state.secondNumber);
    ShowComputing.textContent = state.firstNumber + " + " + state.secondNumber + " = ";
    state.firstNumber = sum;
    state.result = sum;
    InputNumber.textContent = state.result;
    //state.secondNumber = "";
}

Sum.addEventListener("click", () => {
    state.operator = "+";
    if (!state.secondNumber) {
        const sum = Number(state.firstNumber) + Number(state.secondNumber);
        state.firstNumber = sum;
        ShowComputing.textContent = state.firstNumber + " + ";
        InputNumber.textContent = state.firstNumber; 
    }else {
        const sum = Number(state.firstNumber) + Number(state.secondNumber);
        InputNumber.textContent = sum;
        ShowComputing.textContent = state.firstNumber + " + " + state.secondNumber +"=";
        historyAddItem(ShowComputing.textContent ,InputNumber.textContent );
        state.firstNumber = sum;
        state.secondNumber = sum;
        InputNumber.textContent = sum;
        state.secondNumber = "";
        }
});

function menhafunction() {
    state.operator = "-";
    if (!state.secondNumber) {
        state.secondNumber = InputNumber.textContent;
    }
    const menha = Number(state.firstNumber) - Number(state.secondNumber);
    ShowComputing.textContent = state.firstNumber + " - " + state.secondNumber + " = ";
    state.firstNumber = menha;
    state.result = menha;
    InputNumber.textContent = state.result;
    state.secondNumber = "";
}

Minus.addEventListener("click", () => {
    state.operator = "-";
    if (!state.secondNumber) {
        const menha = Number(state.firstNumber) - Number(state.secondNumber);
        state.firstNumber = menha;
        ShowComputing.textContent = state.firstNumber + " - ";
        InputNumber.textContent = state.firstNumber;
    } else {
        const menha = Number(state.firstNumber) - Number(state.secondNumber);
        InputNumber.textContent = menha;
        ShowComputing.textContent = state.firstNumber + " - " + state.secondNumber + " = ";
        historyAddItem(ShowComputing.textContent ,InputNumber.textContent );
        state.firstNumber = menha;
        ShowComputing.textContent = state.firstNumber + " - ";
        state.secondNumber = InputNumber.textContent;
        state.secondNumber = "";
        InputNumber.textContent = menha;
    }
});

function multifunction() {
    state.operator = "X";
    if (!state.secondNumber) {
        state.secondNumber = InputNumber.textContent;
    }
    const zarb = Number(state.firstNumber) * Number(state.secondNumber);
    ShowComputing.textContent = state.firstNumber + " × " + state.secondNumber + " = ";
    state.firstNumber = zarb;
    state.result = zarb;
    InputNumber.textContent = state.result;
    state.secondNumber = "";
}

Multiplication.addEventListener("click", () => {
    state.operator = "X";
    const multi = Number(state.firstNumber) * Number(state.secondNumber);
    if (state.firstNumber && !state.secondNumber) {
        ShowComputing.textContent = state.firstNumber + " × ";
        InputNumber.textContent = state.firstNumber;
        return;
    } else {
        InputNumber.textContent = multi;
        ShowComputing.textContent = state.firstNumber + " × " + state.secondNumber + " = ";
        historyAddItem(ShowComputing.textContent ,InputNumber.textContent );
        state.firstNumber = multi;
        state.secondNumber = "";
        ShowComputing.textContent = state.firstNumber + " × ";
        InputNumber.textContent = state.firstNumber;
    }
});
function dividfunction() {
    if (state.firstNumber && !state.secondNumber) {
        state.secondNumber = InputNumber.textContent;
    }
    const divid = Number(state.firstNumber) / Number(state.secondNumber);
    ShowComputing.textContent = state.firstNumber + "÷" + state.secondNumber + " = ";
    state.firstNumber = divid;
    state.result = divid;
    InputNumber.textContent = state.result;
    state.secondNumber = "";
}  
Division.addEventListener("click", () => {
    state.operator = "/";
    if (!state.secondNumber) {
        ShowComputing.textContent = state.firstNumber + " ÷ ";
        InputNumber.textContent = state.firstNumber;
    } else {
        const divid = Number(state.firstNumber) / Number(state.secondNumber);
        InputNumber.textContent = divid;
        ShowComputing.textContent = state.firstNumber + " ÷ " + state.secondNumber + " = ";
        historyAddItem(ShowComputing.textContent ,InputNumber.textContent );
        ShowComputing.textContent = state.firstNumber + " ÷ ";
        state.secondNumber = "";
        state.secondNumber = InputNumber.textContent;
        state.firstNumber = divid;
    }
    if (state.result) {
        ShowComputing.textContent = state.firstNumber + "÷";
        InputNumber.textContent = state.firstNumber;
    }
});

Square.addEventListener("click", () => {
    state.operator = "t2";
    ShowComputing.textContent = "sqr(" + state.firstNumber + ")";
    const t2 = Number(state.firstNumber) * Number(state.firstNumber);
    state.firstNumber = Number(t2).toFixed(2);
    InputNumber.textContent = state.firstNumber;
});
Cube.addEventListener("click", () => {
    state.operator = "t3";
    ShowComputing.textContent = "(" + state.firstNumber +"^3" +")";
    const t3 = Number(state.firstNumber) * Number(state.firstNumber) * Number(state.firstNumber) ;
    if(Number.isInteger(t3)){
        state.firstNumber = Number(t3).toFixed(0);
    }
    state.firstNumber = Number(t3).toFixed(3);

    InputNumber.textContent = state.firstNumber;
});

Radical.addEventListener("click", () => {
    state.operator = "rad";
    ShowComputing.textContent = "√" + state.firstNumber;
    const rad = Math.sqrt(Number(state.firstNumber));
    state.firstNumber = rad;
    InputNumber.textContent = state.firstNumber;
});

function radfunction() {
    ShowComputing.textContent = "√" + state.firstNumber;
    const rad = Math.sqrt(Number(state.firstNumber));
    state.firstNumber = rad;
    InputNumber.textContent = state.firstNumber;
}
Percent.addEventListener("click", () => {
    if (!state.firstNumber) {
        InputNumber.textContent = "0";
        ShowComputing.textContent = "0";
        return;
    }
    switch (state.operator) {
        case "+":
            state.secondNumber = InputNumber.textContent;
            const per =(Number(state.firstNumber) * Number(state.secondNumber)) / 100;
            state.secondNumber = per;
            ShowComputing.textContent = state.firstNumber + " + " + state.secondNumber;
            InputNumber.textContent = state.secondNumber;
            state.operator = "+";
        break;
        case "-":
            state.secondNumber = InputNumber.textContent;
            const perm =(Number(state.firstNumber) * Number(state.secondNumber)) / 100;
            state.secondNumber = perm;
            ShowComputing.textContent = state.firstNumber + " - " + state.secondNumber;
            InputNumber.textContent = state.secondNumber;
            state.operator = "-";
        break;
        case "X":
            state.secondNumber = Number(InputNumber.textContent) / 100;
            ShowComputing.textContent = state.firstNumber + " X " + state.secondNumber;
            InputNumber.textContent = state.secondNumber;
            state.operator = "X";
        break;
        case "/":
            state.secondNumber = InputNumber.textContent;
            const pert =(Number(state.firstNumber) * Number(state.secondNumber)) / 100;
            state.secondNumber = pert;
            ShowComputing.textContent = state.firstNumber + " ÷ " + state.secondNumber;
            InputNumber.textContent = state.secondNumber;
            state.operator = "/";
        break;
    }
});

function pminus() {
    state.firstNumber = -Number(InputNumber.textContent);
    InputNumber.textContent = state.firstNumber;
    if (InputNumber.textContent.includes("-")) {
        InputNumber.textContent = state.firstNumber;
    }
}

SumMinus.addEventListener("click", () => {
    pminus();
});

function onxfunction() {
    state.firstNumber = Number(InputNumber.textContent);
    ShowComputing.textContent = "1" + "/" + "(" + `${state.firstNumber}` + ")";
    InputNumber.textContent = 1 / Number(state.firstNumber);
}
Dot.addEventListener("click", () => {
    if (!state.operator && !InputNumber.textContent.includes(".")) {
        InputNumber.textContent = InputNumber.textContent + ".";
        state.firstNumber = InputNumber.textContent;
        shownum();}
    // } else if (state.firstNumber && InputNumber.textContent) {
    //     InputNumber.textContent = InputNumber.textContent +".";
    //     state.secondNumber = InputNumber.textContent;
    //     shownum();
    // }
    if (state.operator && !state.secondNumber.includes(".")) {
        InputNumber.textContent = InputNumber.textContent + ".";
        state.secondNumber = InputNumber.textContent;
        shownum();
    }
});

Reciprocal.addEventListener("click", () => {
    onxfunction();
});

function cfunction() {
    state.firstNumber = "";
    state.secondNumber = "";
    state.operator = "";
    ShowComputing.textContent = "";
    InputNumber.textContent = "0";
}
C.addEventListener("click", () => {
    cfunction();
});
function cefunction() {
    state.secondNumber = "";
    InputNumber.textContent = "0";
}

CE.addEventListener("click", () => {
    cefunction();
});

function delfunction() {
    if (!state.operator) {
        state.firstNumber = InputNumber.textContent;
        state.firstNumber = InputNumber.textContent.slice(
            0,
            InputNumber.textContent.length - 1
        );
        InputNumber.textContent = state.firstNumber;
        if (InputNumber.innerHTML == 0) {
            state.firstNumber = "";
            InputNumber.textContent = Number(state.firstNumber);
        }
        if (InputNumber.textContent.includes("-")) {
            state.firstNumber = Number("");
            InputNumber.textContent = state.firstNumber;
        }
        InputNumber.textContent = Number(state.firstNumber);
        } else {
        state.secondNumber = InputNumber.textContent;
        state.secondNumber = InputNumber.textContent.slice(
            0,
            InputNumber.textContent.length - 1
        );
        InputNumber.textContent = state.secondNumber;
        if (InputNumber.innerHTML == 0) {
            state.secondNumber = "";
            InputNumber.textContent = Number(state.secondNumber);
        }
        if (InputNumber.textContent.includes("-")) {
            state.secondNumber = Number("");
            InputNumber.textContent = state.secondNumber;
        }
        InputNumber.textContent = Number(state.secondNumber);
    }
}

Backspace.addEventListener("click", () => {
    delfunction();
});

Equal.addEventListener("click", () => {
    switch (state.operator) {
        case "+":
            addfunction();
            historyAddItem(ShowComputing.textContent, InputNumber.textContent);
            break;
        case "-":
            menhafunction();
            historyAddItem(ShowComputing.textContent, InputNumber.textContent);
            break;
        case "X":
            multifunction();
            historyAddItem(ShowComputing.textContent, InputNumber.textContent);
            break;
        case "/":
            dividfunction();
            historyAddItem(ShowComputing.textContent, InputNumber.textContent);
            break;
        case "rad":
            radfunction();
            historyAddItem(ShowComputing.textContent, InputNumber.textContent);
            break;
    }
});



//History   

const memoryListItems= document.querySelector(".memoryitems");
const historybtn = document.getElementById('historyselect');
const memorybtn = document.getElementById('memoryselect');
const historylist = document.querySelector(".historyitems");
const deleteBtn = document.querySelector(".trashicon");

let historyItems = [];
let Id = 0;
historylist.innerHTML = "There's no history yet!";
historylist.style.display = "block";

const historyAddItem = () => {
    historyItems.push({
        ope: ShowComputing.textContent,
        res: InputNumber.textContent,
        id: Id,
    });
    Id++;
    if (
        historylist.style.display === "block" ||
        historylist.style.display === "flex"
    ) {
        showhistory();
    }
};

const delbt = document.createElement("button");
delbt.innerHTML='Delete';
delbt.classList.add("deletebtnforitem");
//delbt.classList.add("historyitem");

const showhistory = () => {
    historylist.innerHTML = "";
    if (historyItems.length > 0) {
        for (let i of historyItems) {
        const historyitem = document.createElement("div");
        const { ope, res, id } = i;
        historyitem.id = id;
        historyitem.classList.add("HisItem");
        historyitem.innerHTML = `${ope} <br> ${res}`;
        historylist.prepend(historyitem);
    }

historylist.addEventListener("click", function (e) {
        e.target.appendChild(delbt);
        delbt.addEventListener("click", function () {
            let m = +delbt.parentElement.id;
            const x = historyItems.filter((i) => {
            return m != i.id;
            });
            historyItems = [...x];
            showhistory();
        });
    });

    if (historylist.style.display !== "none") {
        deleteBtn.style.display = "block";
    }
    } else {
    historylist.innerHTML = "There's no history here!";
    historylist.style.display = "block";
    }
};

historybtn.addEventListener("click", () => {
    historybtn.classList.add("selected");
    memorybtn.classList.remove("selected");
    historylist.style.display = "block";
    historylist.innerHTML = "There's no history yet!";
    memoryListItems.style.display = "none";
    if (historyItems.length > 0) {
        deleteBtn.style.display = "block";
    } else {
        deleteBtn.style.display = "none";
    }
    showhistory();
});

const historyClear = () => {
    historyItems = [];
    deleteBtn.style.display = "none";
    showhistory();
};

deleteBtn.addEventListener("click", () => {
    if (historyItems.length > 0 && historylist.style.display !== "none") {
        historyClear();
        deleteBtn.style.display = "none";
        showhistory();
    }
});


//Memory



const memorybtns = document.querySelectorAll('.mem');

const clearMemoryBtn = document.querySelector(".MC");
const memoryrestorebtn = document.querySelector(".MR");
const mplusBtnmain = document.querySelector(".Mplus");
const mminusBtnmain = document.querySelector(".Mminus");
const mclearBtnmain = document.querySelector(".MS");

const container = document.createElement("div");
const mplusBtn = document.createElement("button");
const mminusBtn = document.createElement("button");
const mclearBtn = document.createElement("button");

let memoryRestoreValue;
let countMemoryId = 0;

const restoreMemory = (memoryRestoreValue) => {
    InputNumber.textContent = memoryRestoreValue;
    state.firstNumber = memoryRestoreValue;
    callShowMemory();
};

const showMemory = () => {
    memoryListItems.innerHTML = "";
    memoryListItems.style.width = "97%";
    if (calculationMemory.length > 0) {
        for (let memoryItems of calculationMemory) {
        const { memoryItem, id } = memoryItems;
        const listMemory = document.createElement("div");
        listMemory.style.width = "90%";
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.width = "fit-content";
        mplusBtn.innerHTML = "M+";
        mplusBtn.classList.add("memorysmallbtn");
        mminusBtn.innerHTML = "M-";
        mminusBtn.classList.add("memorysmallbtn");
        mclearBtn.innerHTML = "MC";
        mclearBtn.classList.add("memorysmallbtn");
        container.appendChild(mplusBtn);
        container.appendChild(mminusBtn);
        container.appendChild(mclearBtn);
        listMemory.id = id;
        listMemory.classList.add("HisItem");
        listMemory.innerHTML = `${memoryItem}`;
        listMemory.addEventListener("click", function(e){
            e.target.appendChild(container);
        });
        memoryListItems.prepend(listMemory);
        }
        if (memoryListItems.style.display !== "none") {
        deleteBtn.style.display = "block";
        }
    } else {
        memoryListItems.innerHTML = "There's nothing saved in memory";
        memoryListItems.style.display = "block";
    }
};

mclearBtn.addEventListener("click", function () {
    let m = +mclearBtn.parentElement.parentElement.id;
    const x = calculationMemory.filter((i) => {
        return m != i.id;
    });
    calculationMemory = [...x];
    showMemory();
    if(calculationMemory.length==0){
    memoryrestorebtn.classList.add("hov");
    clearMemoryBtn.classList.add("hov");
    }
});
const memoryAddItem = () => {
    calculationMemory.push({
        memoryItem: InputNumber.textContent,
        id: countMemoryId,
    });
    countMemoryId++;
    if (
        memoryListItems.style.display === "block" ||
        memoryListItems.style.display === "flex"
    ) {
        showMemory();
    }
    memoryrestorebtn.classList.remove("hov");
    clearMemoryBtn.classList.remove("hov");

};

const memoryPlus = () => {
    let memoryPlusValue =
        calculationMemory[calculationMemory.length - 1].memoryItem;
    memoryPlusValue = Number(memoryPlusValue) + Number(InputNumber.textContent);
    calculationMemory[calculationMemory.length - 1].memoryItem = memoryPlusValue;
    callShowMemory();
};

const memoryPluscontainer = () => {
    let m = +mplusBtn.parentElement.parentElement.id;
    let memoryPlusValue = calculationMemory[m].memoryItem;
    memoryPlusValue = Number(memoryPlusValue) + Number(InputNumber.textContent);
    calculationMemory[m].memoryItem = memoryPlusValue;
    callShowMemory();
};

const memoryminus = () => {
    let memoryminusValue =
        calculationMemory[calculationMemory.length - 1].memoryItem;
    memoryminusValue = Number(memoryminusValue) - Number(InputNumber.textContent);
    calculationMemory[calculationMemory.length - 1].memoryItem = memoryminusValue;
    callShowMemory();
};
const memoryminuscontainer = () => {
    let m = +mplusBtn.parentElement.parentElement.id;
    let memoryminusValue =
        calculationMemory[m].memoryItem;
    memoryminusValue = Number(memoryminusValue) - Number(InputNumber.textContent);
    calculationMemory[m].memoryItem = memoryminusValue;
    callShowMemory();
};

const memoryClear = () => {
    calculationMemory = [];
    memoryrestorebtn.classList.add("hov");
    clearMemoryBtn.classList.add("hov");
    deleteBtn.style.display = "none";
    callShowMemory();
};

const memoryRestore = () => {
    let memoryRestoreValue =
        calculationMemory[calculationMemory.length - 1].memoryItem;
    restoreMemory(memoryRestoreValue);
};

const callShowMemory = () => {
    if (
        memoryListItems.style.display === "block" ||
        memoryListItems.style.display === "flex"
    ) {
        showMemory();
    }
};
memorybtn.addEventListener("click", () => {
    historylist.style.display = "none";
    historybtn.classList.remove("selected");
    memorybtn.classList.add("selected");
    memoryListItems.innerHTML = "There's nothing saved in memory";
    memoryListItems.style.display = "block";
    historylist.style.display = "none";
    if (calculationMemory.length > 0) {
        deleteBtn.style.display = "block";
    } else {
        deleteBtn.style.display = "none";
    }
    showMemory();
});

memoryrestorebtn.addEventListener("click", () => {
    memoryRestore();
});
clearMemoryBtn.addEventListener("click", () => {
    memoryClear();
    memoryrestorebtn.classList.add("hov");
    clearMemoryBtn.classList.add("hov");
});
memorybtns.forEach((el) => {
    el.addEventListener("click", (e) => {
    let memorybtnclick = e.target.classList.value;
    switch (memorybtnclick) {
        case "Mplus mem":
        if (calculationMemory.length === 0) {
            memoryAddItem();
        } else {
            memoryPlus();
        }
            break;
        case "Mminus mem":
        if (calculationMemory.length === 0) {
            memoryAddItem();
        } else {
            memoryminus();
        }
            break;
        case "MS mem":{
            memoryAddItem();}
        break;
    }
});
});

mplusBtn.addEventListener("click",()=> {
    if (calculationMemory.length === 0) {
        memoryAddItem();
    } else {
        memoryPluscontainer();
        
    }
});

mminusBtn.addEventListener("click", ()=>{
    if (calculationMemory.length === 0) {
        memoryAddItem();
    } else {
        memoryminuscontainer()
    }
});

deleteBtn.addEventListener("click", () => {
    if (
        calculationMemory.length > 0 &&
        memoryListItems.style.display !== "none"
    ) {
        memoryClear();
        deleteBtn.style.display = "none";
        showMemory();
    }
});
