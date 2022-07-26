function main() {
  const calcContainer : HTMLElement = document.getElementById("calc_container")!;
  let inputNumb : HTMLInputElement = document.getElementById("calc_field")! as HTMLInputElement;
  
  //ID selectors 
  const idBtnAc : string = "btn_ac";
  const idBtnClear : string = "btn_clear";
  const idBtnPrcent : string = "btn_prcent";
  const idBtnDivi : string = "btn_divi";
  
  const idBtn07 : string = "btn_7";
  const idBtn08 : string = "btn_8";
  const idBtn09 : string = "btn_9";
  const idBtnX  : string = "btn_x";
  
  const idBtn04 : string = "btn_4";
  const idBtn05 : string = "btn_5";
  const idBtn06 : string = "btn_6";
  const idBtnR : string = "btn_r";
  
  const idBtn01 : string = "btn_1";
  const idBtn02 : string = "btn_2";
  const idBtn03 : string = "btn_3";
  const idBtnSum : string = "btn_sum";
  const idBtn00 : string = "btn_0";
  const idBtnComa : string = "btn_coma";
  const idBtnCalc : string = "btn_calc";
  
  
  if (calcContainer !== null) {
    let idSelector : string = "";

    calcContainer.addEventListener("click",(e : any) => {
      if (e?.target && e?.target?.tagName === 'A'){
        idSelector = e?.target?.id;
        // console.log(e);
        if (idSelector != idBtnCalc) {
          let str : string = "";
          str = inputNumb.value ;
          switch (idSelector) {
            case idBtnAc : str = "";break;
            case idBtnClear : str = clearLast(str);break;
            case idBtnPrcent : str = calcPercent(str);break;  
            case idBtn00 : str = str.concat("0");break;  
            case idBtn01 : str = str.concat("1");break;  
            case idBtn02 : str = str.concat("2");break;  
            case idBtn03 : str = str.concat("3");break;  
            case idBtn04 : str = str.concat("4");break;
            case idBtn05 : str = str.concat("5");break;
            case idBtn06 : str = str.concat("6");break;
            case idBtn07 : str = str.concat("7");break;
            case idBtn08 : str = str.concat("8");break;
            case idBtn09 : str = str.concat("9");break;
            case idBtnR : str = str.concat("-");break;
            case idBtnX : str = str.concat("*" );break;
            case idBtnSum : str = str.concat("+");break;  
            case idBtnDivi : str = str.concat("/");break;
            case idBtnComa : str = str.concat(".");break;  
          }
          inputNumb.value = str;  
        }else if (idSelector === idBtnCalc && inputNumb.value !== ""){
          inputNumb.value = eval(inputNumb.value);
        }
      }     
    });
  }else{
    console.log("Calc container = " + calcContainer);
  }

}  
main();
function calcPercent(str:string): string{
  if(str.length > 0){
    let isNumeric : boolean = !isNaN(+str);
    if(isNumeric){
      str =  "" + (+str / 100);
    } 
  }
  return str;
}
function clearLast(str : string) : string {
  if (str.length > 0) str = str.slice(0, -1);
  return str;
} 

