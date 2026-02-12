---
sidebar_position: 1
---

# REQUISITOS
## Documento de Especificação do Sistema

---

# 1. Introdução e Justificativa

Este documento tem como objetivo especificar as principais funcionalidades, requisitos e informações do sistema **SmartPack.AI**, uma solução de Inteligência Artificial em formato de **ChatBot**, desenvolvida para apoiar a equipe **PSD5 da Global Services (GS)** nas análises técnicas e de viabilidade de embalagens, com base em dados do SAP e documentos internos.

O processo de análise e desenvolvimento de embalagens envolve um grande volume de dados técnicos, parâmetros de engenharia, normas internas, custos e informações de materiais, concentrados principalmente no sistema SAP. Embora o sistema reúna informações completas sobre cada etapa do processo, ele não foi projetado para contextualizar, explicar ou orientar a interpretação desses dados, tornando a análise mais complexa, especialmente quando envolve diferentes áreas de atuação.

Na GS, a equipe PSD5 é responsável pelas análises que antecedem a confecção das embalagens e utiliza o SAP como principal fonte de informação. Entretanto, cada colaborador atua em uma etapa específica do processo, possuindo conhecimento aprofundado apenas sobre sua própria área.

Como consequência:

- Há dependência excessiva da experiência individual  
- Ocorrem dúvidas frequentes  
- Surgem divergências de interpretação  
- Há falhas na comunicação entre áreas  
- Aumenta o retrabalho  
- O tempo de análise é elevado  

---

# 2. Objetivos

Diante das dores identificadas, conclui-se que a equipe necessitava de uma solução que tornasse as informações mais acessíveis, compreensíveis e padronizadas, reduzindo a dependência de conhecimento individual.

O objetivo deste projeto é desenvolver uma solução de Inteligência Artificial capaz de apoiar a equipe PSD5 na interpretação e análise técnica de dados do SAP, tornando as informações mais compreensíveis, contextualizadas e rastreáveis.

---

## 2.1 Objetivo Geral

Aumentar a eficiência operacional, reduzir o esforço cognitivo dos colaboradores e minimizar riscos de inconsistências técnicas, retrabalho e divergências de entendimento entre áreas.

A solução deverá:

- Oferecer contextualização técnica
- Fornecer explicações claras
- Apoiar análises comparativas de viabilidade
- Apresentar respostas estruturadas e rastreáveis
- Fortalecer a autonomia dos profissionais

A ferramenta **não substitui o especialista humano**, mas atua como suporte estratégico.

---

## 2.2 Objetivos Específicos

- Permitir consulta contextualizada a dados técnicos do SAP  
- Explicar nomenclaturas, parâmetros e normas técnicas  
- Integrar documentos internos como base de conhecimento  
- Apoiar análises comparativas e avaliações de viabilidade  
- Garantir rastreabilidade das fontes utilizadas  
- Reduzir o tempo médio de análise técnica  
- Diminuir dependência de especialistas individuais  
- Padronizar a interpretação entre áreas  

---

# 3. Product Backlog (Requisitos Funcionais)

## RF01 – Autenticação e Controle de Acesso

- **RF01.1** – Permitir autenticação via EDV e senha  
- **RF01.2** – Identificar perfil do usuário (Comum ou Administrador)  
- **RF01.3** – Permitir criação e redefinição de senha  

---

## RF02 – Usuário Padrão

- **RF02.01** – Disponibilizar interface conversacional em linguagem natural  
- **RF02.02** – Permitir envio de mensagens ao chatbot  
- **RF02.03** – Permitir upload de documentos (PDF, Word, Excel)  
- **RF02.04** – Processar, indexar e versionar documentos enviados  
- **RF02.05** – Consultar dados estruturados do SAP  
- **RF02.06** – Realizar análises técnicas e comparativas  
- **RF02.07** – Manter contexto conversacional  
- **RF02.08** – Gerar respostas estruturadas contendo:
  - Explicação técnica  
  - Dados numéricos  
  - Comparativos (quando aplicável)  
  - Avaliação de riscos  
- **RF02.09** – Apresentar rastreabilidade das fontes utilizadas  

---

## RF03 – Usuário Administrador

- **RF03.01** – Visualizar documentos indexados na memória da IA  
- **RF03.02** – Registrar data de inserção e EDV do responsável  
- **RF03.03** – Excluir ou atualizar documentos  
- **RF03.04** – Inserir nova memória contendo:
  - Nome  
  - Descrição  
  - Arquivo ou link  
- **RF03.05** – Gerenciar permissões administrativas por EDV  

---

# 4. Requisitos Não Funcionais

- **RNF01** – Interface intuitiva, clara e objetiva  
- **RNF02** – Interação por linguagem natural  
- **RNF03** – Tempo de resposta adequado ao fluxo de trabalho  
- **RNF04** – Suporte a múltiplas consultas simultâneas  
- **RNF05** – Controle de acesso baseado em perfil  
- **RNF06** – Proteção contra acesso não autorizado  
- **RNF07** – Registro de logs administrativos  
- **RNF08** – Respostas técnicas fundamentadas e rastreáveis  
- **RNF09** – Evitar geração de respostas sem base documental  
- **RNF10** – Permitir futura hospedagem em nuvem  
- **RNF11** – Arquitetura compatível com integração futura via API oficial do SAP  
- **RNF12** – Atualização da base de conhecimento sem interrupção total  
- **RNF13** – Arquitetura modular para facilitar manutenção  

---

# 5. Premissas

- **PRE01** – Os dados do SAP estarão corretos e estruturados  
- **PRE02** – Documentos técnicos estarão disponíveis e legíveis  
- **PRE03** – Uso exclusivo para análise de embalagens  
- **PRE04** – Usuários possuem conhecimento técnico da área  

---

# 6. Restrições

- **RES01** – Dependência de integração com SAP (API oficial ou exportação de dados)  
- **RES02** – Necessidade de documentos técnicos válidos e legíveis  
- **RES03** – Acesso condicionado à autenticação via EDV e senha  
- **RES04** – Desempenho condicionado à infraestrutura disponível  
- **RES05** – Qualidade das respostas depende da qualidade dos dados  
- **RES06** – Sistema não opera offline  

---





















urus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 20.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
