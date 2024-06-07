import axios, { AxiosResponse } from "axios";
import { Funcionario } from "../cadastro/types";

export interface ResponseApi {
    data?: any;
    mensagem?: string;
    status?: any;
}

const link = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";

export async function buscarFuncionarioPorId(id: string): Promise<ResponseApi> {
    try {
        const response = (await axios.get(link + id)).data
        return  { data: response }
    } catch (err) {
        return { mensagem: 'Erro ao fazer a requisição' }
    }
}

export async function excluirFuncionarioPorId(id: string): Promise<ResponseApi> {
    try {
        const response = (await axios.delete(link + id)).data
        return  { status: response.status, mensagem: response.mensagem }
    } catch (err) {
        return { mensagem: 'Erro ao fazer a requisição' }
    }
}

export async function alterarFuncionarioPorId(id: string, body: any): Promise<ResponseApi> {
    try {
        const response = (await axios.put((link + id), body)).data
        return  { status: response.status, mensagem: response.mensagem }
    } catch (err) {
        return { mensagem: 'Erro ao fazer a requisição' }
    }
}