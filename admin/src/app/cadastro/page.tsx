'use client';

import { useState } from "react";
import { Button, Form, Table, Row, Col, Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { alterarFuncionarioPorId, buscarFuncionarioPorId, excluirFuncionarioPorId } from "../api/ApiService";
import styles from "./page.module.css";
import { Funcionario } from "./types";

export default function Cadastro() {
  const [funcionario, setFuncionario] = useState<any | null>(null);
  const [funcionarioAlteracao, setFuncionarioAlteracao] = useState<any | null>(null);
  const [idBusca, setIdBusca] = useState<string>();

  function converterFuncionario(response: any) {
    const funcionario: Funcionario = {
      id: response.id,
      nome: response.nome,
      departamento: response.departamento,
      endereco: response.endereco,
      email: response.email,
    };
    return funcionario;
  }

  async function tratarToast(response: any) {
    let mensagem = (await response).mensagem;
    if ((await response).status === 'Ok') {
      toast.success(mensagem, { className: 'toast-success' });
    } else {
      toast.error(mensagem, { className: 'toast-error' });
    }
  }

  const handleBuscaFuncionario = async () => {
    if (idBusca !== undefined) {
      const response = buscarFuncionarioPorId(idBusca);
      const f = converterFuncionario((await response).data);
      setFuncionario(f);
      setFuncionarioAlteracao(f);
    }
  };

  const handleExclusao = async () => {
    if (idBusca !== undefined) {
      const response = excluirFuncionarioPorId(idBusca);
      tratarToast(response);
      setFuncionario(null);
    }
  };

  const handleAlteracao = async () => {
    if (idBusca !== undefined) {
      const response = alterarFuncionarioPorId(idBusca, funcionarioAlteracao);
      tratarToast(response);
      handleBuscaFuncionario();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFuncionarioAlteracao({ ...funcionarioAlteracao, [e.target.name]: e.target.value });
  };

  return (
    <main className={styles.container}>
      <h1 className="mb-4 text-center">Consulta de Cadastros</h1>
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Informe o ID"
            onChange={e => setIdBusca(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button onClick={handleBuscaFuncionario}>Buscar</Button>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col xs={12} md={5}>
          {funcionario && (
            <div>
              <h4 className="text-center titulo-tabela">Dados do Funcionário:</h4>
              <Table striped bordered hover className="fixed-width-table">
                <tbody>
                  <tr>
                    <td>ID:</td>
                    <td>{funcionario?.id}</td>
                  </tr>
                  <tr>
                    <td>Nome:</td>
                    <td>{funcionario?.nome}</td>
                  </tr>
                  <tr>
                    <td>Departamento:</td>
                    <td>{funcionario?.departamento}</td>
                  </tr>
                  <tr>
                    <td>Endereço:</td>
                    <td>{funcionario?.endereco}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{funcionario?.email}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="text-center">
                <Button variant="danger" onClick={handleExclusao}>Exclusão</Button>
              </div>
            </div>
          )}
        </Col>
        <Col xs={12} md={5} className="ml-md-3">
          {funcionario && (
            <div>
              <h3 className="text-center">Alterar Funcionário:</h3>
              <Form>
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="mb-0 mr-2">ID:</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    value={funcionarioAlteracao?.id}
                    onChange={handleChange}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="mb-0 mr-2">Nome:</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={funcionarioAlteracao?.nome}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="mb-0 mr-2">Departamento:</Form.Label>
                  <Form.Control
                    type="text"
                    name="departamento"
                    value={funcionarioAlteracao?.departamento}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="mb-0 mr-2">Endereço:</Form.Label>
                  <Form.Control
                    type="text"
                    name="endereco"
                    value={funcionarioAlteracao?.endereco}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="mb-0 mr-2">Email:</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={funcionarioAlteracao?.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button onClick={handleAlteracao}>Alterar</Button>
                </div>
              </Form>
            </div>
          )}
        </Col>
      </Row>
      <ToastContainer />
    </main>
  );
}
