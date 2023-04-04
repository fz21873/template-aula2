"use strict";
export enum MACAS_DE_CARROS {
  FIAT = "fiat",
  FORD = "ford",
  VOLKSWAGEN = "volkswagem",
  MERCEDES_BENZ = "mercedes_benz",
  RENAULT = "renault",
  TOYOTA = "toyota",
  BMW = "bmw",
  AUDI = "audi",
 
}

type TCarros ={
  marca?: MACAS_DE_CARROS,
  volumeDoTanque?: number,
  motorFlex?: boolean,
  

}
const mustabg: TCarros = {
  marca:MACAS_DE_CARROS.FORD,
  volumeDoTanque: 50,
  motorFlex: false
}

const gol:TCarros = {
  marca: MACAS_DE_CARROS.VOLKSWAGEN,
  volumeDoTanque: 50,
  motorFlex: true

}


