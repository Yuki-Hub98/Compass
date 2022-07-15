import { ImageProps } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-vector-icons';

export interface Humor {
    imagem: ImageProps ["source"];
    data: string;
    status: string;
    horario: string;
    imagemFesta:ImageProps["source"],
    imagemCozinhar:ImageProps["source"],
    imagemEsporte:ImageProps["source"],
    cozinhar:string;
    festa:string;
    esporte:string;
    frase:string;
}


const bem = require("../../../assets/humores/happy.png");
const mal = require("../../../assets/humores/sad.png");
const triste = require("../../../assets/humores/terrible.png");
const radiante = require("../../../assets/humores/radiant.png");
const ImgFesta = require("../../../assets/atividades/party.png");
const ImgCozinhar = require("../../../assets/atividades/cooking.png");
const ImgEsporte = require("../../../assets/atividades/sports.png");


export const listaDeHumor : Humor[] = [
            {
                id: 1,
                    imagem: bem,
                    data: "HOJE, 10 DE JANEIRO ",
                    status: "BEM",
                    horario:"10:00",
                    festa:"festa •",
                    esporte:"esporte •",
                    cozinhar:"cozinhar",
                    imagemFesta:ImgFesta,
                    imagemCozinhar:ImgCozinhar,
                    imagemEsporte:ImgEsporte,
                    frase:"Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo."
            },
            {
                id: 2,
                    imagem: mal,
                    data: "ONTEM, 09 DE JANEIRO ",
                    status: "MAL" ,
                    horario:"10:00",
                    festa:"festa •",
                    esporte:"esporte •",
                    cozinhar:"cozinhar",
                    imagemFesta:ImgFesta,
                    imagemCozinhar:ImgCozinhar,
                    imagemEsporte:ImgEsporte,
                    frase:"Lorem Ipsum Dolor Sit"
            },
            {
                id: 3,
                    imagem: triste,
                    data: "08 DE JANEIRO ",
                    status: "TRISTE",
                    horario:"10:00",
                    festa:"festa •",
                    esporte:"esporte •",
                    cozinhar:"cozinhar",
                    imagemFesta:ImgFesta,
                    imagemCozinhar:ImgCozinhar,
                    imagemEsporte:ImgEsporte,
                    frase:"Lorem Ipsum Dolor Sit"
            },
            {
                id: 4,
                    imagem: radiante,
                    data: "07 DE JANEIRO ",
                    status: "RADIANTE",
                    horario:"10:00",
                    festa:"festa •",
                    esporte:"esporte •",
                    cozinhar:"cozinhar",
                    imagemFesta:ImgFesta,
                    imagemCozinhar:ImgCozinhar,
                    imagemEsporte:ImgEsporte,
                    frase:"Lorem Ipsum Dolor Sit"
        },
        {
            id: 5,
                imagem: triste,
                data: "08 DE JANEIRO ",
                status: "TRISTE",
                horario:"10:00",
                festa:"festa •",
                esporte:"esporte •",
                cozinhar:"cozinhar",
                imagemFesta:ImgFesta,
                imagemCozinhar:ImgCozinhar,
                imagemEsporte:ImgEsporte,
                frase:"Lorem Ipsum Dolor Sit"
        },
        {
            id: 6,
                imagem: triste,
                data: "08 DE JANEIRO ",
                status: "TRISTE",
                horario:"10:00",
                festa:"festa •",
                esporte:"esporte •",
                cozinhar:"cozinhar",
                imagemFesta:ImgFesta,
                imagemCozinhar:ImgCozinhar,
                imagemEsporte:ImgEsporte,
                frase:"Lorem Ipsum Dolor Sit"
        }
]

