import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="SmartPack.AI" description="Documentação SmartPack.AI">
      <main>

        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.titulo}>SmartPack.AI</h1>
            <p className={styles.subtitulo}>
              Inteligência Artificial para Análise Técnica de Embalagens
            </p>
          </div>
        </section>

        <section className={styles.sessaoClara}>
          <div className={styles.container}>
            <h2 className={styles.tituloSessao}>Objetivo do Projeto</h2>
            <p className={styles.texto}>
              Aumentar a eficiência operacional, reduzir o esforço cognitivo dos colaboradores e
              minimizar riscos de inconsistências técnicas, retrabalho e divergências entre áreas.
              A solução oferece contextualização, explicações técnicas claras e suporte analítico
              para tornar o processo decisório mais seguro, ágil e fundamentado.
            </p>
          </div>
        </section>

        <section className={styles.sessaoAzulClaro}>
          <div className={styles.container}>
            <h2 className={styles.tituloSessaoAzul}>Principais Funcionalidades</h2>

            <div className={styles.gridCards}>

              <div className={styles.card}>
                <h3>Consulta ao SAP</h3>
                <p>
                  Acesso contextualizado a dados estruturados, facilitando a interpretação técnica das informações.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Análises Comparativas</h3>
                <p>
                  Suporte à avaliação de viabilidade técnica com respostas estruturadas, fundamentadas e rastreáveis.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Gestão de Conhecimento</h3>
                <p>
                  Integração de documentos internos como base de conhecimento para fortalecer a autonomia dos profissionais.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.tituloSessao}>Equipe de Desenvolvimento</h2>

            <div className={styles.teamGrid}>

              <div className={styles.card}>
                <img src="/img/feature1.png" alt="Lorenzo Lopes" className={styles.foto} />
                <h3>Lorenzo Lopes</h3>
                <p>Desenvolvedor Full Stack</p>
              </div>

              <div className={styles.card}>
                <img src="/img/feature1.png" alt="Mateus Salustiano" className={styles.foto} />
                <h3>Mateus Salustiano</h3>
                <p>Especialista em Banco de Dados</p>
              </div>

              <div className={styles.card}>
                <img src="/img/feature1.png" alt="Suzana Lins" className={styles.foto} />
                <h3>Suzana Lins</h3>
                <p>Designer UI/UX e Desenvolvedora Front-end</p>
              </div>

              <div className={styles.card}>
                <img src="/img/feature1.png" alt="Victor Pires" className={styles.foto} />
                <h3>Victor Pires</h3>
                <p>Desenvolvedor Back-end e Inteligência Artificial</p>
              </div>

            </div>
          </div>
        </section>

        <section className={styles.sessaoFinal}>
          <div className={styles.container}>
            <h2>Suporte Estratégico à Tomada de Decisão</h2>
            <p className={styles.textoClaro}>
              A ferramenta não substitui o especialista humano, mas atua como suporte estratégico,
              contribuindo para a redução de retrabalho, otimização do tempo de análise e melhoria
              da comunicação entre as áreas envolvidas.
            </p>
          </div>
        </section>

      </main>
    </Layout>
  );
}
